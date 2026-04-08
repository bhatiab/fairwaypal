import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createServerSupabase } from '@/lib/supabase'
import { generatedItinerarySchema } from '@/types/trip'
import type { TripRow, ActivityRow } from '@/types/trip'

export const maxDuration = 60
export const dynamic = 'force-dynamic'

const itineraryToolSchema = {
  type: 'object' as const,
  required: ['tripName', 'days', 'estimatedBudgetPerGolfer', 'estimatedBudgetPerPartner'],
  properties: {
    tripName: { type: 'string' as const },
    days: {
      type: 'array' as const,
      items: {
        type: 'object' as const,
        required: ['dayIndex', 'dayLabel', 'dateLabel', 'golfActivities', 'partnerActivities', 'sharedActivities'],
        properties: {
          dayIndex: { type: 'number' as const },
          dayLabel: { type: 'string' as const },
          dateLabel: { type: 'string' as const },
          golfActivities: {
            type: 'array' as const,
            items: {
              type: 'object' as const,
              required: ['name', 'detail', 'timeOfDay', 'estimatedPrice', 'priceUnit', 'tags', 'aiRationale'],
              properties: {
                name: { type: 'string' as const },
                detail: { type: 'string' as const },
                timeOfDay: { type: 'string' as const },
                estimatedPrice: { type: 'number' as const },
                priceUnit: { type: 'string' as const, enum: ['per-person', 'per-round', 'per-night'] },
                tags: { type: 'array' as const, items: { type: 'string' as const } },
                aiRationale: { type: 'string' as const },
                bookingSearchQuery: { type: 'string' as const },
              },
            },
          },
          partnerActivities: {
            type: 'array' as const,
            items: {
              type: 'object' as const,
              required: ['name', 'detail', 'timeOfDay', 'estimatedPrice', 'priceUnit', 'tags', 'aiRationale'],
              properties: {
                name: { type: 'string' as const },
                detail: { type: 'string' as const },
                timeOfDay: { type: 'string' as const },
                estimatedPrice: { type: 'number' as const },
                priceUnit: { type: 'string' as const, enum: ['per-person', 'per-round', 'per-night'] },
                tags: { type: 'array' as const, items: { type: 'string' as const } },
                aiRationale: { type: 'string' as const },
                bookingSearchQuery: { type: 'string' as const },
              },
            },
          },
          sharedActivities: {
            type: 'array' as const,
            items: {
              type: 'object' as const,
              required: ['name', 'detail', 'timeOfDay', 'estimatedPrice', 'priceUnit', 'tags', 'aiRationale'],
              properties: {
                name: { type: 'string' as const },
                detail: { type: 'string' as const },
                timeOfDay: { type: 'string' as const },
                estimatedPrice: { type: 'number' as const },
                priceUnit: { type: 'string' as const, enum: ['per-person', 'per-round', 'per-night'] },
                tags: { type: 'array' as const, items: { type: 'string' as const } },
                aiRationale: { type: 'string' as const },
                bookingSearchQuery: { type: 'string' as const },
              },
            },
          },
        },
      },
    },
    estimatedBudgetPerGolfer: { type: 'number' as const },
    estimatedBudgetPerPartner: { type: 'number' as const },
  },
}

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: tripId } = await params

  try {
    const supabase = createServerSupabase()

    // Fetch trip and current activities with votes
    const { data: trip } = await supabase
      .from('trips')
      .select('*')
      .eq('id', tripId)
      .single()

    if (!trip) {
      return NextResponse.json({ error: 'trip_not_found' }, { status: 404 })
    }

    const typedTrip = trip as TripRow

    const { data: activities } = await supabase
      .from('activities')
      .select('*')
      .eq('trip_id', tripId)
      .order('day_index', { ascending: true })
      .order('sort_order', { ascending: true })

    const typedActivities = (activities as ActivityRow[]) ?? []

    const { data: votes } = await supabase
      .from('votes')
      .select('activity_id, direction')
      .eq('trip_id', tripId)

    // Build vote tallies per activity
    const voteTallies: Record<string, { up: number; down: number }> = {}
    for (const v of votes ?? []) {
      if (!voteTallies[v.activity_id]) voteTallies[v.activity_id] = { up: 0, down: 0 }
      voteTallies[v.activity_id][v.direction as 'up' | 'down']++
    }

    // Categorize activities
    const liked: string[] = []
    const disliked: string[] = []
    const neutral: string[] = []

    for (const a of typedActivities) {
      const tally = voteTallies[a.id] || { up: 0, down: 0 }
      if (tally.down >= 2 || (tally.down > tally.up && tally.down > 0)) {
        disliked.push(`"${a.name}" (${a.side}, ${a.day} ${a.time_of_day}) — ${tally.down} out votes`)
      } else if (tally.up > 0) {
        liked.push(`"${a.name}" (${a.side}, ${a.day} ${a.time_of_day}) — ${tally.up} in votes`)
      } else {
        neutral.push(`"${a.name}" (${a.side}, ${a.day} ${a.time_of_day})`)
      }
    }

    const intake = typedTrip.intake_data
    const nights = typedTrip.nights

    const anthropic = new Anthropic()
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: `You are FairwayPal, an expert golf trip planner. You are regenerating a trip itinerary based on group vote feedback. Keep activities the group liked. Replace activities the group disliked with better alternatives. Improve neutral activities if possible.

Rules:
- Generate BOTH a golf itinerary AND a parallel partner itinerary (if partners > 0)
- KEEP activities that were liked — use the same name, time, and price
- REPLACE disliked activities with better alternatives that address the implied concerns
- Partner activities must slot into gaps in the golf schedule
- Always include at least one shared activity per trip
- Use real venue names appropriate to the destination
- Match activity price levels to the stated budget per round
- Keep the same trip name
- Keep aiRationale to one short sentence`,
      tools: [
        {
          name: 'generate_itinerary',
          description: 'Generate a structured golf trip itinerary',
          input_schema: itineraryToolSchema,
        },
      ],
      tool_choice: { type: 'tool', name: 'generate_itinerary' },
      messages: [
        {
          role: 'user',
          content: `Regenerate the itinerary for "${typedTrip.name}" based on vote feedback.

Trip: ${intake.destination}, ${intake.datesStart} to ${intake.datesEnd} (${nights} nights)
Group: ${intake.golfers} golfers, ${intake.partners} partners
Budget: $${intake.budgetPerRound}/round, Vibe: ${intake.vibe}

KEEP these activities (group liked them):
${liked.length > 0 ? liked.join('\n') : '(none voted on positively yet)'}

REPLACE these activities (group disliked them):
${disliked.length > 0 ? disliked.join('\n') : '(none disliked)'}

These had no votes — improve if possible:
${neutral.length > 0 ? neutral.join('\n') : '(none)'}

Use the generate_itinerary tool.`,
        },
      ],
    })

    const toolBlock = message.content.find((b) => b.type === 'tool_use')
    if (!toolBlock || toolBlock.type !== 'tool_use') {
      return NextResponse.json(
        { error: 'generation_failed', detail: 'No tool use in response' },
        { status: 502 },
      )
    }

    const itineraryResult = generatedItinerarySchema.safeParse(toolBlock.input)
    if (!itineraryResult.success) {
      console.error('Regeneration validation failed:', itineraryResult.error)
      return NextResponse.json(
        { error: 'generation_failed', detail: 'Invalid itinerary structure' },
        { status: 502 },
      )
    }

    const itinerary = itineraryResult.data

    // Update the trip's itinerary JSON
    const { error: tripError } = await supabase
      .from('trips')
      .update({ itinerary })
      .eq('id', tripId)

    if (tripError) {
      console.error('Trip itinerary update failed:', tripError)
      return NextResponse.json({ error: 'save_failed' }, { status: 500 })
    }

    // Delete old activities and insert new ones
    await supabase.from('activities').delete().eq('trip_id', tripId)

    // Delete old votes (activities are gone, votes are stale)
    await supabase.from('votes').delete().eq('trip_id', tripId)

    const activityRows = itinerary.days.flatMap((day) => {
      const rows: Array<{
        trip_id: string; name: string; detail: string; time_of_day: string
        day: string; day_index: number; sort_order: number; side: string
        price: number; price_unit: string; tags: string[]; ai_rationale: string
      }> = []
      let sortOrder = 0

      for (const a of day.golfActivities) {
        rows.push({
          trip_id: tripId, name: a.name, detail: a.detail,
          time_of_day: a.timeOfDay, day: day.dayLabel, day_index: day.dayIndex,
          sort_order: sortOrder++, side: 'golf',
          price: Math.round(a.estimatedPrice * 100), price_unit: a.priceUnit,
          tags: a.tags, ai_rationale: a.aiRationale,
        })
      }
      for (const a of day.partnerActivities) {
        rows.push({
          trip_id: tripId, name: a.name, detail: a.detail,
          time_of_day: a.timeOfDay, day: day.dayLabel, day_index: day.dayIndex,
          sort_order: sortOrder++, side: 'partner',
          price: Math.round(a.estimatedPrice * 100), price_unit: a.priceUnit,
          tags: a.tags, ai_rationale: a.aiRationale,
        })
      }
      for (const a of day.sharedActivities) {
        rows.push({
          trip_id: tripId, name: a.name, detail: a.detail,
          time_of_day: a.timeOfDay, day: day.dayLabel, day_index: day.dayIndex,
          sort_order: sortOrder++, side: 'shared',
          price: Math.round(a.estimatedPrice * 100), price_unit: a.priceUnit,
          tags: a.tags, ai_rationale: a.aiRationale,
        })
      }
      return rows
    })

    if (activityRows.length > 0) {
      const { error: actError } = await supabase.from('activities').insert(activityRows)
      if (actError) console.error('Activity insert failed:', actError)
    }

    return NextResponse.json({ itinerary, regenerated: true })
  } catch (err) {
    console.error('Regenerate endpoint error:', err)
    return NextResponse.json({ error: 'generation_failed' }, { status: 502 })
  }
}
