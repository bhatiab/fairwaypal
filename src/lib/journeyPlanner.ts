import type { RouteConfig, RaceSession, CrowdWindow } from "@/lib/races";
import type {
  DepartureRecommendation,
  ReturnWindow,
  WeatherAlert,
} from "@/types/journey";

// ── Time helpers ────────────────────────────────────────────────────────────

function parseTime(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function formatTime(minutes: number): string {
  const h = Math.floor(((minutes % 1440) + 1440) % 1440 / 60);
  const m = ((minutes % 1440) + 1440) % 1440 % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

// ── Public API ──────────────────────────────────────────────────────────────

/**
 * Match hotelInput against commonAreas to estimate travel time.
 * Returns the first matching transport's typical travel minutes,
 * or null if no match.
 */
export function getTransportForArea(
  rc: RouteConfig,
  hotelInput: string
): { name: string; estimatedMinutes: number } | null {
  const needle = hotelInput.toLowerCase().trim();
  const match = rc.commonAreas.find((a) =>
    a.toLowerCase().includes(needle) || needle.includes(a.toLowerCase())
  );
  if (!match) return null;

  // Estimate based on best available transport
  const best = rc.transport[0];
  if (!best) return null;

  const base: Record<string, number> = {
    metro: 25,
    train: 30,
    tram: 20,
    bus: 35,
    shuttle: 25,
    walk: 20,
    taxi: 20,
    ferry: 30,
  };
  return {
    name: best.name,
    estimatedMinutes: base[best.type] ?? 30,
  };
}

const DEFAULT_TRAVEL_MINUTES = 30;
const BUFFER_MINUTES = 30;

/**
 * Recommend when to leave the hotel for a session.
 */
export function getRecommendedDeparture(
  rc: RouteConfig,
  session: RaceSession,
  travelMinutes: number = DEFAULT_TRAVEL_MINUTES
): DepartureRecommendation {
  const sessionStart = parseTime(session.startTime);

  // Extra buffer on race day — larger crowds
  const buffer = session.isMainRace ? BUFFER_MINUTES + 15 : BUFFER_MINUTES;
  const departure = sessionStart - travelMinutes - buffer;

  // Check if a crowd window overlaps with pre-session arrival
  const crowdWarning = rc.crowdWindows.find(
    (cw) =>
      cw.date === session.date &&
      parseTime(cw.startTime) <= sessionStart &&
      parseTime(cw.endTime) >= departure
  );

  const advice = crowdWarning
    ? `${crowdWarning.description}. ${crowdWarning.avoidanceStrategy}`
    : session.isMainRace
      ? "Race day — arrive early for best experience"
      : "Standard session — moderate crowds expected";

  return {
    recommendedDepartureTime: formatTime(departure),
    sessionStartTime: session.startTime,
    travelMinutes,
    bufferMinutes: buffer,
    advice,
  };
}

/**
 * Calculate post-session return window and crowd advice.
 */
export function getReturnWindow(
  rc: RouteConfig,
  session: RaceSession
): ReturnWindow {
  const sessionEnd = parseTime(session.endTime);

  // Find the crowd window after this session
  const crowdWindow: CrowdWindow | undefined = rc.crowdWindows.find(
    (cw) =>
      cw.date === session.date &&
      parseTime(cw.startTime) >= sessionEnd - 30 &&
      parseTime(cw.startTime) <= sessionEnd + 30
  );

  let recommendedLeaveTime: string;
  let advice: string;

  if (crowdWindow) {
    // Leave after the crowd window clears
    recommendedLeaveTime = crowdWindow.endTime;
    advice = `${crowdWindow.description}. ${crowdWindow.avoidanceStrategy}`;
  } else {
    // No crowd window — leave shortly after session ends
    recommendedLeaveTime = formatTime(sessionEnd + 15);
    advice = "No major crowd surge expected — depart at your convenience";
  }

  return {
    sessionEndTime: session.endTime,
    crowdWindow: crowdWindow ?? null,
    recommendedLeaveTime,
    advice,
  };
}

/**
 * Generate weather alerts for outbound and/or return travel windows.
 */
export function getWeatherAlerts(
  rc: RouteConfig,
  windows: Array<{ label: string; time: string }>
): WeatherAlert[] {
  const wp = rc.weatherProfile;
  if (wp.riskLevel === "low" && wp.risks.length === 0) return [];

  const alerts: WeatherAlert[] = [];

  for (const w of windows) {
    const wMin = parseTime(w.time);

    for (const peakRange of wp.peakRiskTimes) {
      const parts = peakRange.split("-");
      if (parts.length !== 2) continue;
      const [start, end] = parts.map(parseTime);

      if (wMin >= start && wMin <= end) {
        for (const risk of wp.risks) {
          alerts.push({
            timeWindow: `${w.label} (~${w.time})`,
            risk,
            severity: wp.riskLevel,
            advice: `${wp.typical}`,
          });
        }
      }
    }
  }

  return alerts;
}

/**
 * Return sessions for a specific date.
 */
export function getSessionsForDate(
  rc: RouteConfig,
  date: string
): RaceSession[] {
  return rc.sessions.filter((s) => s.date === date);
}
