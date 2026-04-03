import { raceGuides, type RaceGuide } from "@/data/races2026";
import { RACE_GUIDE_PAGES, TIER1_SLUGS } from "./guideNav";

export type RaceStatus = "past" | "live" | "upcoming";

export interface RaceWithStatus extends RaceGuide {
  status: RaceStatus;
  endDate: Date;
  fullGuide: boolean;
}

/**
 * Derive endDate from the startDate.
 * Race weekends are typically 3 days — endDate is the race day (startDate already points to Sunday race time).
 */
function deriveEndDate(dates: string, startDate: Date): Date {
  const end = new Date(startDate.getTime());
  end.setUTCHours(23, 59, 59, 999);
  return end;
}

/** Auto-derived: a race is "full guide" if it has all 4 Tier 1 sub-pages in guideNav */
const fullGuideSlugs = new Set<string>(
  Object.entries(RACE_GUIDE_PAGES)
    .filter(([, pages]) => {
      const slugs = new Set(pages.map(p => p.slug));
      return [...TIER1_SLUGS].every(s => slugs.has(s));
    })
    .map(([slug]) => slug)
);

/** Get all races with computed status, sorted by startDate ascending. */
export function getRacesWithStatus(now: Date = new Date()): RaceWithStatus[] {
  return raceGuides
    .map((r) => {
      const endDate = deriveEndDate(r.dates, r.startDate);
      const fullGuide = fullGuideSlugs.has(r.slug);
      let status: RaceStatus;
      if (endDate < now) {
        status = "past";
      } else if (r.startDate <= now && endDate >= now) {
        status = "live";
      } else {
        status = "upcoming";
      }
      return { ...r, endDate, fullGuide, status };
    })
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
}

/** Get the currently live race, if any. */
export function getLiveRace(now?: Date): RaceWithStatus | undefined {
  return getRacesWithStatus(now).find((r) => r.status === "live");
}

/** Get next N upcoming races. */
export function getNextUpcoming(n: number, now?: Date): RaceWithStatus[] {
  return getRacesWithStatus(now).filter((r) => r.status === "upcoming").slice(0, n);
}

/** Check if we're within N days before a race start (race week mode). */
export function isRaceWeek(race: RaceWithStatus, now: Date = new Date(), daysBeforeStart = 5): boolean {
  const diff = race.startDate.getTime() - now.getTime();
  return diff > 0 && diff <= daysBeforeStart * 86400000;
}

/** Format date range for display, e.g. "Mar 13–15" */
export function formatDateRange(dates: string): string {
  return dates.replace("-", "–");
}
