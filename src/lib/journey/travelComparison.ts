import type { RouteConfig } from "@/types/journey";

export interface TravelOption {
  mode: "transit" | "drive";
  durationMin: number;
  durationRaceDayMin: number;
  distanceKm: number;
  available: boolean;
  unavailableReason: string | null;
}

export interface TravelComparison {
  transit: TravelOption;
  drive: TravelOption;
  recommendation: "transit" | "drive" | "either";
  recommendationReason: string;
  isIslandCircuit: boolean;
}

interface RouteMetricsResult {
  durationMin: number;
  distanceKm: number;
  unavailableReason: string | null;
}

function roundMinutes(value: number): number {
  return Math.max(1, Math.round(value));
}

function roundDistanceKm(value: number): number {
  return Math.max(0, Math.round(value * 10) / 10);
}

function unavailableOption(mode: "transit" | "drive", reason: string): TravelOption {
  return {
    mode,
    durationMin: 0,
    durationRaceDayMin: 0,
    distanceKm: 0,
    available: false,
    unavailableReason: reason,
  };
}

function getRecommendation(
  config: RouteConfig,
  transit: TravelOption,
  drive: TravelOption
): { recommendation: "transit" | "drive" | "either"; reason: string } {
  if (config.isIslandCircuit) {
    return {
      recommendation: "transit",
      reason: "No public parking on the island, so transit is the only practical option.",
    };
  }

  if (!transit.available) {
    return {
      recommendation: "drive",
      reason: "No direct transit to this circuit, so driving or shuttle is more practical.",
    };
  }

  if (!drive.available) {
    return {
      recommendation: "transit",
      reason: "Driving data is unavailable right now, and transit is the most reliable race-day option.",
    };
  }

  if (transit.durationRaceDayMin < drive.durationRaceDayMin - 20) {
    return {
      recommendation: "transit",
      reason: `Transit saves you ~${drive.durationRaceDayMin - transit.durationRaceDayMin} min vs driving on race day.`,
    };
  }

  if (drive.durationRaceDayMin < transit.durationRaceDayMin) {
    return {
      recommendation: "either",
      reason: "Driving is slightly faster, but transit avoids parking stress and post-race congestion.",
    };
  }

  return {
    recommendation: "transit",
    reason: "Transit is more reliable on race day with no parking risk.",
  };
}

function getRouteDuration(
  service: google.maps.DirectionsService,
  origin: google.maps.LatLngLiteral,
  destination: google.maps.LatLngLiteral,
  mode: google.maps.TravelMode,
  raceDayDate: Date
): Promise<RouteMetricsResult> {
  return new Promise((resolve) => {
    service.route(
      {
        origin,
        destination,
        travelMode: mode,
        drivingOptions:
          mode === google.maps.TravelMode.DRIVING
            ? {
                departureTime: raceDayDate,
                trafficModel: google.maps.TrafficModel.PESSIMISTIC,
              }
            : undefined,
        transitOptions:
          mode === google.maps.TravelMode.TRANSIT
            ? {
                departureTime: raceDayDate,
              }
            : undefined,
      },
      (response, status) => {
        if (status !== "OK" || !response) {
          resolve({
            durationMin: 0,
            distanceKm: 0,
            unavailableReason:
              status === "REQUEST_DENIED"
                ? "Google routing is not enabled for this API key"
                : "Google travel time unavailable for this mode",
          });
          return;
        }

        const leg = response.routes?.[0]?.legs?.[0];
        if (!leg) {
          resolve({
            durationMin: 0,
            distanceKm: 0,
            unavailableReason: "No valid route found for this mode",
          });
          return;
        }

        const seconds =
          (leg.duration_in_traffic?.value ?? leg.duration?.value ?? 0);
        const meters = leg.distance?.value ?? 0;
        resolve({
          durationMin: roundMinutes(seconds / 60),
          distanceKm: roundDistanceKm(meters / 1000),
          unavailableReason: null,
        });
      }
    );
  });
}

export async function getTravelComparison(
  hotelLat: number,
  hotelLng: number,
  config: RouteConfig,
  sessionDate: string,
  googleKey: string
): Promise<TravelComparison> {
  const isMapsReady =
    typeof google !== "undefined" &&
    !!google.maps?.DirectionsService &&
    !!google.maps?.TravelMode &&
    !!google.maps?.DirectionsStatus;

  if (!googleKey || !isMapsReady) {
    const transit = unavailableOption("transit", "Google Maps is unavailable");
    const drive = unavailableOption("drive", "Google Maps is unavailable");
    const recommendation = getRecommendation(config, transit, drive);
    return {
      transit,
      drive,
      recommendation: recommendation.recommendation,
      recommendationReason: recommendation.reason,
      isIslandCircuit: !!config.isIslandCircuit,
    };
  }

  const raceDayDate = new Date(`${sessionDate}T09:00:00`);
  if (Number.isNaN(raceDayDate.getTime())) {
    const transit = unavailableOption("transit", "Session date is invalid");
    const drive = unavailableOption("drive", "Session date is invalid");
    const recommendation = getRecommendation(config, transit, drive);
    return {
      transit,
      drive,
      recommendation: recommendation.recommendation,
      recommendationReason: recommendation.reason,
      isIslandCircuit: !!config.isIslandCircuit,
    };
  }

  const service = new google.maps.DirectionsService();
  const origin = { lat: hotelLat, lng: hotelLng };
  const circuitCenter = { lat: config.circuitLat, lng: config.circuitLng };
  // Use a specific gate for driving if available (more accurate than circuit center)
  const driveDestination = config.circuitGateLat && config.circuitGateLng
    ? { lat: config.circuitGateLat, lng: config.circuitGateLng }
    : circuitCenter;

  const [transitRaw, driveRaw] = await Promise.all([
    getRouteDuration(service, origin, circuitCenter, google.maps.TravelMode.TRANSIT, raceDayDate),
    getRouteDuration(service, origin, driveDestination, google.maps.TravelMode.DRIVING, raceDayDate),
  ]);

  const transit: TravelOption = transitRaw.unavailableReason
    ? unavailableOption("transit", transitRaw.unavailableReason)
    : {
        mode: "transit",
        durationMin: transitRaw.durationMin,
        durationRaceDayMin: roundMinutes(transitRaw.durationMin * 1.3),
        distanceKm: transitRaw.distanceKm,
        available: true,
        unavailableReason: null,
      };

  const drive: TravelOption = driveRaw.unavailableReason
    ? unavailableOption("drive", driveRaw.unavailableReason)
    : {
        mode: "drive",
        durationMin: driveRaw.durationMin,
        durationRaceDayMin: roundMinutes(driveRaw.durationMin * 2.5),
        distanceKm: driveRaw.distanceKm,
        available: true,
        unavailableReason: null,
      };

  const recommendation = getRecommendation(config, transit, drive);
  return {
    transit,
    drive,
    recommendation: recommendation.recommendation,
    recommendationReason: recommendation.reason,
    isIslandCircuit: !!config.isIslandCircuit,
  };
}

export { getRecommendation };
