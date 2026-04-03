/**
 * MotoGP session times for each race weekend.
 * Times are circuit local time (24h format).
 * Includes Moto3, Moto2, MotoGP, and MotoE classes.
 *
 * Sources: Typical MotoGP weekend format.
 * Asian/American rounds use earlier local times to accommodate European broadcast windows.
 * Note: Official schedule times may vary — check motogp.com for confirmed times.
 */

export type RaceClass = "MotoGP" | "Moto2" | "Moto3" | "MotoE";

export interface Session {
  name: string;
  day: "Friday" | "Saturday" | "Sunday";
  localTime: string; // "HH:MM" circuit local 24h
  category: RaceClass;
}

export interface RaceWeekendSchedule {
  raceSlug: string;
  raceName: string;
  circuitTimezone: string; // IANA timezone
  hasMotoE: boolean;
  sessions: Session[];
}

// ── Template schedules ────────────────────────────────────────────────

/** Standard European weekend (most European rounds) */
const europeanBase: Session[] = [
  // Friday
  { name: "FP",          day: "Friday",   localTime: "09:00", category: "Moto3" },
  { name: "FP",          day: "Friday",   localTime: "09:50", category: "Moto2" },
  { name: "FP1",         day: "Friday",   localTime: "10:45", category: "MotoGP" },
  { name: "FP",          day: "Friday",   localTime: "13:15", category: "Moto3" },
  { name: "FP",          day: "Friday",   localTime: "14:05", category: "Moto2" },
  { name: "Practice",    day: "Friday",   localTime: "15:00", category: "MotoGP" },
  // Saturday
  { name: "Qualifying",  day: "Saturday", localTime: "09:50", category: "Moto3" },
  { name: "Qualifying",  day: "Saturday", localTime: "10:45", category: "Moto2" },
  { name: "Qualifying",  day: "Saturday", localTime: "10:50", category: "MotoGP" },
  { name: "Race",        day: "Saturday", localTime: "12:15", category: "Moto3" },
  { name: "Race",        day: "Saturday", localTime: "13:15", category: "Moto2" },
  { name: "Sprint Race", day: "Saturday", localTime: "15:00", category: "MotoGP" },
  // Sunday
  { name: "Warm Up",     day: "Sunday",   localTime: "09:40", category: "MotoGP" },
  { name: "Race",        day: "Sunday",   localTime: "11:00", category: "Moto3" },
  { name: "Race",        day: "Sunday",   localTime: "12:15", category: "Moto2" },
  { name: "Main Race",   day: "Sunday",   localTime: "14:00", category: "MotoGP" },
];

/** MotoE sessions injected at European rounds that host MotoE */
const motoESessions: Session[] = [
  { name: "FP",          day: "Friday",   localTime: "08:25", category: "MotoE" },
  { name: "Qualifying",  day: "Friday",   localTime: "12:35", category: "MotoE" },
  { name: "Race 1",      day: "Saturday", localTime: "08:40", category: "MotoE" },
  { name: "Race 2",      day: "Sunday",   localTime: "10:05", category: "MotoE" },
];

/** Asian rounds — earlier local start to hit European prime time */
const asianBase: Session[] = [
  // Friday
  { name: "FP",          day: "Friday",   localTime: "08:15", category: "Moto3" },
  { name: "FP",          day: "Friday",   localTime: "09:05", category: "Moto2" },
  { name: "FP1",         day: "Friday",   localTime: "10:00", category: "MotoGP" },
  { name: "FP",          day: "Friday",   localTime: "12:30", category: "Moto3" },
  { name: "FP",          day: "Friday",   localTime: "13:20", category: "Moto2" },
  { name: "Practice",    day: "Friday",   localTime: "14:15", category: "MotoGP" },
  // Saturday
  { name: "Qualifying",  day: "Saturday", localTime: "09:00", category: "Moto3" },
  { name: "Qualifying",  day: "Saturday", localTime: "09:50", category: "Moto2" },
  { name: "Qualifying",  day: "Saturday", localTime: "10:00", category: "MotoGP" },
  { name: "Race",        day: "Saturday", localTime: "11:15", category: "Moto3" },
  { name: "Race",        day: "Saturday", localTime: "12:15", category: "Moto2" },
  { name: "Sprint Race", day: "Saturday", localTime: "14:15", category: "MotoGP" },
  // Sunday
  { name: "Warm Up",     day: "Sunday",   localTime: "09:00", category: "MotoGP" },
  { name: "Race",        day: "Sunday",   localTime: "10:00", category: "Moto3" },
  { name: "Race",        day: "Sunday",   localTime: "11:15", category: "Moto2" },
  { name: "Main Race",   day: "Sunday",   localTime: "13:00", category: "MotoGP" },
];

/** Americas rounds */
const americasBase: Session[] = [
  // Friday
  { name: "FP",          day: "Friday",   localTime: "09:00", category: "Moto3" },
  { name: "FP",          day: "Friday",   localTime: "09:50", category: "Moto2" },
  { name: "FP1",         day: "Friday",   localTime: "10:45", category: "MotoGP" },
  { name: "FP",          day: "Friday",   localTime: "13:15", category: "Moto3" },
  { name: "FP",          day: "Friday",   localTime: "14:05", category: "Moto2" },
  { name: "Practice",    day: "Friday",   localTime: "15:00", category: "MotoGP" },
  // Saturday
  { name: "Qualifying",  day: "Saturday", localTime: "09:50", category: "Moto3" },
  { name: "Qualifying",  day: "Saturday", localTime: "10:45", category: "Moto2" },
  { name: "Qualifying",  day: "Saturday", localTime: "10:50", category: "MotoGP" },
  { name: "Race",        day: "Saturday", localTime: "12:15", category: "Moto3" },
  { name: "Race",        day: "Saturday", localTime: "13:15", category: "Moto2" },
  { name: "Sprint Race", day: "Saturday", localTime: "15:00", category: "MotoGP" },
  // Sunday
  { name: "Warm Up",     day: "Sunday",   localTime: "09:40", category: "MotoGP" },
  { name: "Race",        day: "Sunday",   localTime: "11:00", category: "Moto3" },
  { name: "Race",        day: "Sunday",   localTime: "12:15", category: "Moto2" },
  { name: "Main Race",   day: "Sunday",   localTime: "14:00", category: "MotoGP" },
];

/** Qatar — night race, late local times */
const qatarBase: Session[] = [
  // Friday
  { name: "FP",          day: "Friday",   localTime: "15:15", category: "Moto3" },
  { name: "FP",          day: "Friday",   localTime: "16:05", category: "Moto2" },
  { name: "FP1",         day: "Friday",   localTime: "17:00", category: "MotoGP" },
  { name: "FP",          day: "Friday",   localTime: "19:15", category: "Moto3" },
  { name: "FP",          day: "Friday",   localTime: "20:05", category: "Moto2" },
  { name: "Practice",    day: "Friday",   localTime: "21:00", category: "MotoGP" },
  // Saturday
  { name: "Qualifying",  day: "Saturday", localTime: "16:00", category: "Moto3" },
  { name: "Qualifying",  day: "Saturday", localTime: "16:50", category: "Moto2" },
  { name: "Qualifying",  day: "Saturday", localTime: "17:10", category: "MotoGP" },
  { name: "Race",        day: "Saturday", localTime: "18:15", category: "Moto3" },
  { name: "Race",        day: "Saturday", localTime: "19:15", category: "Moto2" },
  { name: "Sprint Race", day: "Saturday", localTime: "21:00", category: "MotoGP" },
  // Sunday
  { name: "Warm Up",     day: "Sunday",   localTime: "16:40", category: "MotoGP" },
  { name: "Race",        day: "Sunday",   localTime: "17:00", category: "Moto3" },
  { name: "Race",        day: "Sunday",   localTime: "18:15", category: "Moto2" },
  { name: "Main Race",   day: "Sunday",   localTime: "20:00", category: "MotoGP" },
];

/** Australia & Phillip Island */
const australiaBase: Session[] = [
  // Friday
  { name: "FP",          day: "Friday",   localTime: "09:00", category: "Moto3" },
  { name: "FP",          day: "Friday",   localTime: "09:50", category: "Moto2" },
  { name: "FP1",         day: "Friday",   localTime: "10:45", category: "MotoGP" },
  { name: "FP",          day: "Friday",   localTime: "13:30", category: "Moto3" },
  { name: "FP",          day: "Friday",   localTime: "14:20", category: "Moto2" },
  { name: "Practice",    day: "Friday",   localTime: "15:15", category: "MotoGP" },
  // Saturday
  { name: "Qualifying",  day: "Saturday", localTime: "09:50", category: "Moto3" },
  { name: "Qualifying",  day: "Saturday", localTime: "10:45", category: "Moto2" },
  { name: "Qualifying",  day: "Saturday", localTime: "10:45", category: "MotoGP" },
  { name: "Race",        day: "Saturday", localTime: "12:15", category: "Moto3" },
  { name: "Race",        day: "Saturday", localTime: "13:15", category: "Moto2" },
  { name: "Sprint Race", day: "Saturday", localTime: "15:00", category: "MotoGP" },
  // Sunday
  { name: "Warm Up",     day: "Sunday",   localTime: "09:40", category: "MotoGP" },
  { name: "Race",        day: "Sunday",   localTime: "10:00", category: "Moto3" },
  { name: "Race",        day: "Sunday",   localTime: "11:15", category: "Moto2" },
  { name: "Main Race",   day: "Sunday",   localTime: "13:00", category: "MotoGP" },
];

// ── Helpers ───────────────────────────────────────────────────────────

function withMotoE(base: Session[]): Session[] {
  return [...base, ...motoESessions].sort((a, b) => {
    const dayOrder = { Friday: 0, Saturday: 1, Sunday: 2 };
    if (dayOrder[a.day] !== dayOrder[b.day]) return dayOrder[a.day] - dayOrder[b.day];
    return a.localTime.localeCompare(b.localTime);
  });
}

// ── Race schedules ────────────────────────────────────────────────────

export const sessionSchedules: RaceWeekendSchedule[] = [
  { raceSlug: "thailand",       raceName: "Grand Prix of Thailand",        circuitTimezone: "Asia/Bangkok",        hasMotoE: false, sessions: asianBase },
  { raceSlug: "brazil",         raceName: "Grand Prix of Brazil",          circuitTimezone: "America/Sao_Paulo",   hasMotoE: false, sessions: americasBase },
  { raceSlug: "austin",         raceName: "Grand Prix of the Americas",    circuitTimezone: "America/Chicago",     hasMotoE: false, sessions: americasBase },
  { raceSlug: "jerez",          raceName: "Grand Prix of Spain",           circuitTimezone: "Europe/Madrid",       hasMotoE: true,  sessions: withMotoE(europeanBase) },
  { raceSlug: "le-mans",        raceName: "Grand Prix of France",          circuitTimezone: "Europe/Paris",        hasMotoE: true,  sessions: withMotoE(europeanBase) },
  { raceSlug: "catalunya",      raceName: "Grand Prix of Catalunya",       circuitTimezone: "Europe/Madrid",       hasMotoE: false, sessions: europeanBase },
  { raceSlug: "mugello",        raceName: "Grand Prix of Italy",           circuitTimezone: "Europe/Rome",         hasMotoE: true,  sessions: withMotoE(europeanBase) },
  { raceSlug: "hungary",        raceName: "Grand Prix of Hungary",         circuitTimezone: "Europe/Budapest",     hasMotoE: false, sessions: europeanBase },
  { raceSlug: "brno",           raceName: "Grand Prix of Czechia",         circuitTimezone: "Europe/Prague",       hasMotoE: false, sessions: europeanBase },
  { raceSlug: "assen",          raceName: "Grand Prix of the Netherlands", circuitTimezone: "Europe/Amsterdam",    hasMotoE: true,  sessions: withMotoE(europeanBase) },
  { raceSlug: "sachsenring",    raceName: "Grand Prix of Germany",         circuitTimezone: "Europe/Berlin",       hasMotoE: true,  sessions: withMotoE(europeanBase) },
  { raceSlug: "silverstone",    raceName: "Grand Prix of Great Britain",   circuitTimezone: "Europe/London",       hasMotoE: false, sessions: europeanBase },
  { raceSlug: "aragon",         raceName: "Grand Prix of Aragon",          circuitTimezone: "Europe/Madrid",       hasMotoE: false, sessions: europeanBase },
  { raceSlug: "misano",         raceName: "Grand Prix of San Marino",      circuitTimezone: "Europe/Rome",         hasMotoE: true,  sessions: withMotoE(europeanBase) },
  { raceSlug: "austria",        raceName: "Grand Prix of Austria",         circuitTimezone: "Europe/Vienna",       hasMotoE: true,  sessions: withMotoE(europeanBase) },
  { raceSlug: "motegi",         raceName: "Grand Prix of Japan",           circuitTimezone: "Asia/Tokyo",          hasMotoE: false, sessions: asianBase },
  { raceSlug: "mandalika",      raceName: "Grand Prix of Indonesia",       circuitTimezone: "Asia/Makassar",       hasMotoE: false, sessions: asianBase },
  { raceSlug: "phillip-island", raceName: "Grand Prix of Australia",       circuitTimezone: "Australia/Melbourne",  hasMotoE: false, sessions: australiaBase },
  { raceSlug: "sepang",         raceName: "Grand Prix of Malaysia",        circuitTimezone: "Asia/Kuala_Lumpur",   hasMotoE: false, sessions: asianBase },
  { raceSlug: "qatar",          raceName: "Grand Prix of Qatar",           circuitTimezone: "Asia/Qatar",          hasMotoE: false, sessions: qatarBase },
  { raceSlug: "portimao",       raceName: "Grand Prix of Portugal",        circuitTimezone: "Europe/Lisbon",       hasMotoE: false, sessions: europeanBase },
  { raceSlug: "valencia",       raceName: "Grand Prix of Valencia",        circuitTimezone: "Europe/Madrid",       hasMotoE: false, sessions: europeanBase },
];

/** Get full schedule for a race (backward compatible) */
export const getScheduleBySlug = (slug: string) =>
  sessionSchedules.find((s) => s.raceSlug === slug);

/** Get schedule with optional class filter */
export const getFullScheduleBySlug = (slug: string, classFilter?: RaceClass) => {
  const schedule = sessionSchedules.find((s) => s.raceSlug === slug);
  if (!schedule) return null;
  if (!classFilter) return schedule;
  return {
    ...schedule,
    sessions: schedule.sessions.filter((s) => s.category === classFilter),
  };
};
