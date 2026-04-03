import type { CrowdWindow, RaceSession, RouteConfig as RaceRouteConfig, WeatherRisk } from "@/lib/races";

export interface DepartureRecommendation {
  recommendedDepartureTime: string;
  sessionStartTime: string;
  travelMinutes: number;
  bufferMinutes: number;
  advice: string;
}

export interface ReturnWindow {
  sessionEndTime: string;
  crowdWindow: CrowdWindow | null;
  recommendedLeaveTime: string;
  advice: string;
}

export interface WeatherAlert {
  timeWindow: string;
  risk: string;
  severity: WeatherRisk["riskLevel"];
  advice: string;
}

export type WizardStep = 1 | 2 | 3 | 4 | 5;

export type RouteConfig = RaceRouteConfig;

export interface JourneyState {
  step: WizardStep;
  hotelInput: string;
  hotelLat: number | null;
  hotelLng: number | null;
  travelMode: "transit" | "drive" | "both" | "mixed" | null;
  selectedDate: string | null;
  selectedOutboundSession: RaceSession | null;
  selectedReturnSession: RaceSession | null;
  returnEnabled: boolean;
  locale: "en" | "fr";
  mobility: boolean;
  groupSize: "solo" | "small" | "group";

  // computed
  departureRecommendation: DepartureRecommendation | null;
  returnWindow: ReturnWindow | null;
  weatherAlerts: WeatherAlert[];
  sessionsForSelectedDate: RaceSession[];
  availableDates: string[];
}
