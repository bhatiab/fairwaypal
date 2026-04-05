import type { TripRow } from '@/types/trip'

// 8 distinct avatar colors from the FairwayPal palette
export const AVATAR_COLORS = [
  '#c9a84c', // gold
  '#2a6b3c', // fairway green
  '#a0456e', // partner rose
  '#4d8fcc', // sky blue
  '#cc7a4d', // amber
  '#6b4dc9', // violet
  '#4dc9a8', // teal
  '#c94d5e', // coral
]

export function getDeviceUuid(tripId: string): string {
  const key = `fp_device_${tripId}`
  let uuid = localStorage.getItem(key)
  if (!uuid) {
    uuid = crypto.randomUUID()
    localStorage.setItem(key, uuid)
  }
  return uuid
}

export function getOrganiserUuid(): string | null {
  return localStorage.getItem('fairwaypal_organiser_uuid')
}

export function isOrganiser(trip: TripRow): boolean {
  const uuid = getOrganiserUuid()
  return uuid !== null && uuid === trip.organiser_uuid
}
