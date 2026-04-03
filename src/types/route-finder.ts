export interface RouteFinderRequest {
  raceSlug: string;
  from: string;
  to: string;
  travelMode: "transit" | "drive" | "mixed";
  timeOfDay: "morning" | "afternoon" | "evening" | "night";
  locale: string;
  mobility: "default" | "wheelchair" | "limited-mobility";
  preferences?: string;
}

export interface RouteStep {
  mode: "walk" | "transit" | "shuttle" | "rideshare" | "drive";
  instruction: string;
  durationMinutes: number;
  notes?: string;
}

export interface RouteFinderResult {
  raceSlug: string;
  from: string;
  to: string;
  steps: RouteStep[];
  totalDurationMinutes: number;
  warnings: string[];
  tips: string[];
}
