import type { RouteStep } from "@/types/route-finder";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

/**
 * Convert ISO date + HH:MM to ICS local-date-time.
 * "2026-06-14" + "09:45" → "20260614T094500"
 */
export function formatICSDate(date: string, time: string): string {
  const d = date.replace(/-/g, "");
  const t = time.replace(":", "") + "00";
  return `${d}T${t}`;
}

/**
 * Add minutes to HH:MM and return HH:MM.
 * Handles hour overflow and midnight wrap.
 * "09:45" + 30 → "10:15"
 * "23:50" + 30 → "00:20"
 */
export function addMinutes(time: string, minutes: number): string {
  const [h, m] = time.split(":").map(Number);
  const total = h * 60 + m + minutes;
  const wrapped = ((total % 1440) + 1440) % 1440; // mod 24h
  const hh = Math.floor(wrapped / 60);
  const mm = wrapped % 60;
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

/**
 * Convert ISO date to readable format.
 * "2026-06-14" → "Sun 14 Jun"
 */
export function formatRaceDate(date: string): string {
  const d = new Date(date + "T12:00:00"); // noon to avoid TZ shift
  return `${DAYS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

const MODE_EMOJI: Record<string, string> = {
  walk: "🚶",
  metro: "🚇",
  taxi: "🚕",
  bus: "🚌",
  ferry: "⛴",
  bike: "🚲",
  drive: "🚗",
  shuttle: "🚐",
  train: "🚆",
  tram: "🚊",
  transit: "🚇",
  rideshare: "🚗",
};

/**
 * Format route steps for WhatsApp readability.
 * 1. 🚶 Walk to Guy-Concordia (8 min)
 */
export function formatWhatsAppSteps(steps: RouteStep[]): string {
  return steps
    .map((s, i) => {
      const emoji = MODE_EMOJI[s.mode] ?? "▸";
      return `${i + 1}. ${emoji} ${s.instruction} (${s.durationMinutes} min)`;
    })
    .join("\n");
}

/**
 * Format route steps for ICS DESCRIPTION field.
 * Escapes newlines and special chars per RFC 5545.
 */
export function formatICSSteps(steps: RouteStep[]): string {
  return steps
    .map((s, i) => {
      const emoji = MODE_EMOJI[s.mode] ?? "-";
      return `${i + 1}. ${emoji} ${s.instruction} (${s.durationMinutes} min)`;
    })
    .join("\\n");
}

/**
 * Escape text for ICS DESCRIPTION field.
 * Per RFC 5545: commas, semicolons, backslashes must be escaped;
 * newlines represented as literal \n in the value.
 */
export function escapeICS(text: string): string {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}
