export type Vibe = 'serious-golf' | 'full-send' | 'mixed'
export type ActivitySide = 'golf' | 'partner' | 'shared'
export type ActivityStatus =
  | 'proposed'
  | 'in-discussion'
  | 'confirmed'
  | 'booked'
  | 'cancelled'
  | 'removed'
export type TripStatus = 'draft' | 'voting' | 'locked' | 'completed'

// Raw intake from the wizard — matches IntakeState in app/plan/_client.tsx
export interface TripIntake {
  destination: string
  datesStart: string // "YYYY-MM-DD"
  datesEnd: string
  golfers: number
  partners: number
  budgetPerRound: number
  vibe: Vibe
}

// What Claude returns for a single activity
export interface ActivityPayload {
  name: string
  detail: string
  time_of_day: string
  day: string
  day_index: number
  sort_order: number
  side: ActivitySide
  price: number // USD cents
  tags: string[]
  booking_url: string
  ai_rationale: string
}

// Claude's full JSON response shape
export interface GeneratedItinerary {
  trip_name: string
  slug: string
  activities: ActivityPayload[]
}

// Database row — trips table
export interface Trip {
  id: string
  slug: string
  name: string
  destination: string
  dates_start: string
  dates_end: string
  nights: number
  golfers_count: number
  partners_count: number
  budget_per_round: number
  vibe: Vibe
  status: TripStatus
  organiser_uuid: string
  intake_data: TripIntake
  created_at: string
}

// Database row — activities table
export interface Activity {
  id: string
  trip_id: string
  name: string
  detail: string
  time_of_day: string
  day: string
  day_index: number
  sort_order: number
  side: ActivitySide
  status: ActivityStatus
  price: number // USD cents
  tags: string[]
  booking_url: string
  ai_rationale: string
  created_at: string
}

// For the trip view — trip + its activities joined
export interface TripWithActivities extends Trip {
  activities: Activity[]
}

// SSE event shapes streamed from /api/generate
export type StreamEvent =
  | { type: 'activity'; data: ActivityPayload }
  | { type: 'trip_meta'; data: { trip_name: string; slug: string } }
  | { type: 'done'; data: { trip_id: string } }
  | { type: 'error'; data: { message: string } }
