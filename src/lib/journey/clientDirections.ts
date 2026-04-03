export interface ClientRouteStep {
  mode: "walk" | "transit" | "drive";
  instruction: string;
  durationMinutes: number;
}

export interface ClientDirectionsResult {
  steps: ClientRouteStep[];
  totalDurationText: string;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

export function getClientDirectionSteps(
  origin: { lat: number; lng: number } | string,
  destination: string,
  travelMode: "transit" | "drive",
  departureTime: Date
): Promise<ClientDirectionsResult | null> {
  if (
    typeof google === "undefined" ||
    !google.maps?.DirectionsService ||
    !google.maps?.TravelMode
  ) {
    return Promise.resolve(null);
  }

  const service = new google.maps.DirectionsService();
  const googleMode =
    travelMode === "drive"
      ? google.maps.TravelMode.DRIVING
      : google.maps.TravelMode.TRANSIT;

  return new Promise((resolve) => {
    service.route(
      {
        origin,
        destination,
        travelMode: googleMode,
        drivingOptions:
          travelMode === "drive"
            ? {
                departureTime,
                trafficModel: google.maps.TrafficModel.PESSIMISTIC,
              }
            : undefined,
        transitOptions:
          travelMode === "transit" ? { departureTime } : undefined,
      },
      (response, status) => {
        if (status !== "OK" || !response) {
          resolve(null);
          return;
        }

        const leg = response.routes?.[0]?.legs?.[0];
        if (!leg?.steps?.length) {
          resolve(null);
          return;
        }

        // duration_in_traffic exists for driving with traffic model
        const legAny = leg as typeof leg & { duration_in_traffic?: { text?: string } };
        const totalDurationText =
          legAny.duration_in_traffic?.text ?? leg.duration?.text ?? "";

        const steps: ClientRouteStep[] = [];

        for (const step of leg.steps) {
          const durationMin = Math.max(
            1,
            Math.round((step.duration?.value ?? 60) / 60)
          );

          if (
            step.travel_mode === google.maps.TravelMode.TRANSIT &&
            step.transit
          ) {
            const td = step.transit;
            const line = td.line.short_name ?? td.line.name ?? "";
            const vehicle = td.line.vehicle.type
              .toLowerCase()
              .replace(/_/g, " ");
            const from = td.departure_stop.name;
            const to = td.arrival_stop.name;
            const stops = td.num_stops;
            steps.push({
              mode: "transit",
              instruction: `${line ? `${line} ` : ""}${vehicle} from ${from} → ${to} · ${stops} stop${stops !== 1 ? "s" : ""}`,
              durationMinutes: durationMin,
            });
          } else if (step.travel_mode === google.maps.TravelMode.WALKING) {
            steps.push({
              mode: "walk",
              instruction: stripHtml(step.instructions ?? "Walk"),
              durationMinutes: durationMin,
            });
          } else {
            steps.push({
              mode: "drive",
              instruction: stripHtml(step.instructions ?? "Drive"),
              durationMinutes: durationMin,
            });
          }
        }

        resolve({ steps, totalDurationText });
      }
    );
  });
}
