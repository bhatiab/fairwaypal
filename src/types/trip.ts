import { z } from 'zod'

// --- Vibe ---
export const vibeValues = ['serious-golf', 'full-send', 'mixed'] as const
export type Vibe = (typeof vibeValues)[number]

// --- Intake ---
export const intakeSchema = z.object({
  destination: z.string().min(2),
  datesStart: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  datesEnd: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  golfers: z.number().int().min(2),
  partners: z.number().int().min(0),
  budgetPerRound: z.number().int().min(50).max(500),
  vibe: z.enum(vibeValues),
})

export type IntakeData = z.infer<typeof intakeSchema>

export const generateRequestSchema = intakeSchema.extend({
  organiserUuid: z.string().uuid(),
})

export type GenerateRequest = z.infer<typeof generateRequestSchema>

// --- Generated itinerary (Claude tool_use output) ---
export type Activity = {
  name: string
  detail: string
  timeOfDay: string
  estimatedPrice: number
  priceUnit: 'per-person' | 'per-round' | 'per-night'
  tags: string[]
  aiRationale: string
  bookingSearchQuery?: string
}

export type GeneratedDay = {
  dayIndex: number
  dayLabel: string
  dateLabel: string
  golfActivities: Activity[]
  partnerActivities: Activity[]
  sharedActivities: Activity[]
}

export type GeneratedItinerary = {
  tripName: string
  days: GeneratedDay[]
  estimatedBudgetPerGolfer: number
  estimatedBudgetPerPartner: number
}

// Zod schema for validating Claude's tool output
export const activitySchema = z.object({
  name: z.string(),
  detail: z.string(),
  timeOfDay: z.string(),
  estimatedPrice: z.number(),
  priceUnit: z.enum(['per-person', 'per-round', 'per-night']),
  tags: z.array(z.string()),
  aiRationale: z.string(),
  bookingSearchQuery: z.string().optional(),
})

export const generatedDaySchema = z.object({
  dayIndex: z.number(),
  dayLabel: z.string(),
  dateLabel: z.string(),
  golfActivities: z.array(activitySchema),
  partnerActivities: z.array(activitySchema),
  sharedActivities: z.array(activitySchema),
})

export const generatedItinerarySchema = z.object({
  tripName: z.string(),
  days: z.array(generatedDaySchema),
  estimatedBudgetPerGolfer: z.number(),
  estimatedBudgetPerPartner: z.number(),
})

// --- Database row types ---
export type TripRow = {
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
  status: 'draft' | 'voting' | 'locked' | 'completed'
  organiser_uuid: string
  organiser_email: string | null
  itinerary: GeneratedItinerary
  intake_data: IntakeData
  budget_per_golfer: number | null
  budget_per_partner: number | null
  locked_at: string | null
  created_at: string
}

export type ActivityRow = {
  id: string
  trip_id: string
  name: string
  detail: string | null
  time_of_day: string | null
  day: string | null
  day_index: number
  sort_order: number
  side: 'golf' | 'partner' | 'shared'
  status: 'proposed' | 'in-discussion' | 'confirmed' | 'booked' | 'cancelled' | 'removed'
  price: number | null
  price_unit: string | null
  tags: string[]
  ai_rationale: string | null
  booking_url: string | null
  booking_ref: string | null
  affiliate_source: string | null
  booked_at: string | null
  confirmed_at: string | null
  created_at: string
}

// --- Participant, Vote, Comment row types ---
export type ParticipantRole = 'organiser' | 'golfer' | 'partner'

export type ParticipantRow = {
  id: string
  trip_id: string
  name: string
  initial: string
  color: string
  role: ParticipantRole
  device_uuid: string | null
  email: string | null
  has_voted: boolean
  opened_link: boolean
  last_seen: string | null
  created_at: string
}

export type VoteRow = {
  id: string
  activity_id: string
  trip_id: string
  participant_id: string
  direction: 'up' | 'down'
  created_at: string
}

export type CommentRow = {
  id: string
  activity_id: string
  trip_id: string
  participant_id: string
  text: string
  sentiment: 'up' | 'down' | null
  ai_summary: string | null
  created_at: string
  // Joined fields for display
  participant_name?: string
  participant_initial?: string
  participant_color?: string
}

export type VoteCounts = {
  activityId: string
  up: number
  down: number
  myVote: 'up' | 'down' | null
}

// --- Zod schemas for voting/comments ---
export const voteRequestSchema = z.object({
  activityId: z.string().uuid(),
  tripId: z.string().uuid(),
  direction: z.enum(['up', 'down']),
  participantId: z.string().uuid(),
})

export const commentRequestSchema = z.object({
  activityId: z.string().uuid(),
  tripId: z.string().uuid(),
  participantId: z.string().uuid(),
  text: z.string().min(1).max(500),
  sentiment: z.enum(['up', 'down']).nullable().optional(),
})

export const nameGateSchema = z.object({
  tripId: z.string().uuid(),
  name: z.string().min(1).max(50),
  deviceUuid: z.string().uuid(),
})

// --- Live polling response ---
export type TripLiveData = {
  activities: ActivityRow[]
  votes: VoteCounts[]
  comments: CommentRow[]
  participants: ParticipantRow[]
}

// --- Helpers ---
export function calculateNights(start: string, end: string): number {
  if (!start || !end) return 0
  const s = new Date(start)
  const e = new Date(end)
  const diff = e.getTime() - s.getTime()
  if (Number.isNaN(diff) || diff <= 0) return 0
  return Math.round(diff / (1000 * 60 * 60 * 24))
}

export function formatBudgetLabel(value: number): string {
  if (value <= 100) return 'Budget'
  if (value <= 200) return 'Mid-range'
  if (value <= 300) return 'Premium'
  return 'Bucket list'
}
