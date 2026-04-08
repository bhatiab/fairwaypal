import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { generateRequestSchema, generatedItinerarySchema } from '@/types/trip'
import { createServerSupabase } from '@/lib/supabase'
import { toHotelSlug } from '@/lib/slugify'

export const maxDuration = 60
export const dynamic = 'force-dynamic'

const itineraryToolSchema = {
  type: 'object' as const,
  required: [
    'tripName',
    'days',
    'estimatedBudgetPerGolfer',
    'estimatedBudgetPerPartner',
  ],
  properties: {
    tripName: { type: 'string' as const, description: 'A creative, memorable name for this trip' },
    days: {
      type: 'array' as const,
      items: {
        type: 'object' as const,
        required: [
          'dayIndex',
          'dayLabel',
          'dateLabel',
          'golfActivities',
          'partnerActivities',
          'sharedActivities',
        ],
        properties: {
          dayIndex: { type: 'number' as const },
          dayLabel: { type: 'string' as const, description: 'e.g. "Friday"' },
          dateLabel: { type: 'string' as const, description: 'e.g. "Apr 18"' },
          golfActivities: {
            type: 'array' as const,
            items: {
              type: 'object' as const,
              required: ['name', 'detail', 'timeOfDay', 'estimatedPrice', 'priceUnit', 'tags', 'aiRationale'],
              properties: {
                name: { type: 'string' as const },
                detail: { type: 'string' as const },
                timeOfDay: { type: 'string' as const, description: 'e.g. "7:00 AM"' },
                estimatedPrice: { type: 'number' as const, description: 'USD' },
                priceUnit: { type: 'string' as const, enum: ['per-person', 'per-round', 'per-night'] },
                tags: { type: 'array' as const, items: { type: 'string' as const } },
                aiRationale: { type: 'string' as const, description: 'One line explaining why this was chosen' },
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
    estimatedBudgetPerGolfer: { type: 'number' as const, description: 'Total estimated cost per golfer in USD' },
    estimatedBudgetPerPartner: { type: 'number' as const, description: 'Total estimated cost per partner in USD' },
  },
}

function buildSystemPrompt() {
  return `You are FairwayPal, an expert golf trip planner. You generate complete day-by-day dual itineraries for golf groups.

Rules:
- Generate BOTH a golf itinerary AND a parallel partner itinerary (if partners > 0)
- Partner activities must slot into gaps in the golf schedule — when golfers are on the course, partners have a plan
- Always include at least one shared activity per trip (typically a group dinner)
- Use real venue names appropriate to the destination
- Match activity price levels to the stated budget per round
- If partners = 0, return empty partnerActivities arrays
- Be creative with the trip name — make it memorable
- Keep aiRationale to one short sentence explaining the pick
- Prices should be realistic for the destination and budget tier`
}

function buildUserPrompt(data: {
  destination: string
  datesStart: string
  datesEnd: string
  golfers: number
  partners: number
  budgetPerRound: number
  vibe: string
}) {
  const nights = Math.round(
    (new Date(data.datesEnd).getTime() - new Date(data.datesStart).getTime()) /
      (1000 * 60 * 60 * 24),
  )

  return `Generate a golf trip itinerary:

Destination: ${data.destination}
Dates: ${data.datesStart} to ${data.datesEnd} (${nights} nights)
Group: ${data.golfers} golfers, ${data.partners} partners
Budget per round: $${data.budgetPerRound}
Vibe: ${data.vibe}

Use the generate_itinerary tool to return the structured itinerary.`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = generateRequestSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'validation', fields: parsed.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { organiserUuid, destination, datesStart, datesEnd, golfers, partners, budgetPerRound, vibe } = parsed.data
    const intake = { destination, datesStart, datesEnd, golfers, partners, budgetPerRound, vibe }

    const anthropic = new Anthropic()

    // Use streaming for faster perceived response
    const stream = anthropic.messages.stream({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: buildSystemPrompt(),
      tools: [
        {
          name: 'generate_itinerary',
          description: 'Generate a structured golf trip itinerary with activities for each day',
          input_schema: itineraryToolSchema,
        },
      ],
      tool_choice: { type: 'tool', name: 'generate_itinerary' },
      messages: [{ role: 'user', content: buildUserPrompt(intake) }],
    })

    // Stream partial JSON to the client via SSE
    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        stream.on('inputJson', (partialJson) => {
          // Send partial JSON chunk to client
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ type: 'partial', json: partialJson })}\n\n`),
          )
        })

        try {
          const finalMessage = await stream.finalMessage()

          // Extract the tool use result
          const toolBlock = finalMessage.content.find((b) => b.type === 'tool_use')
          if (!toolBlock || toolBlock.type !== 'tool_use') {
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ type: 'error', error: 'No tool use in response' })}\n\n`),
            )
            controller.close()
            return
          }

          const itineraryResult = generatedItinerarySchema.safeParse(toolBlock.input)
          if (!itineraryResult.success) {
            console.error('Itinerary validation failed:', itineraryResult.error)
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ type: 'error', error: 'Invalid itinerary structure' })}\n\n`),
            )
            controller.close()
            return
          }

          const itinerary = itineraryResult.data
          const nights = Math.round(
            (new Date(intake.datesEnd).getTime() -
              new Date(intake.datesStart).getTime()) /
              (1000 * 60 * 60 * 24),
          )

          // Generate slug
          const suffix = Math.random().toString(16).slice(2, 6)
          const slug = `${toHotelSlug(itinerary.tripName)}-${suffix}`

          // Insert trip into Supabase
          const supabase = createServerSupabase()
          const { data: trip, error: tripError } = await supabase
            .from('trips')
            .insert({
              slug,
              name: itinerary.tripName,
              destination: intake.destination,
              dates_start: intake.datesStart,
              dates_end: intake.datesEnd,
              nights,
              golfers_count: intake.golfers,
              partners_count: intake.partners,
              budget_per_round: intake.budgetPerRound,
              vibe: intake.vibe,
              status: 'draft',
              organiser_uuid: organiserUuid,
              itinerary,
              intake_data: intake,
            })
            .select('id')
            .single()

          if (tripError || !trip) {
            console.error('Trip insert failed:', tripError)
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ type: 'error', error: 'save_failed' })}\n\n`),
            )
            controller.close()
            return
          }

          // Flatten activities into the activities table
          const activityRows = itinerary.days.flatMap((day) => {
            const rows: Array<{
              trip_id: string
              name: string
              detail: string
              time_of_day: string
              day: string
              day_index: number
              sort_order: number
              side: string
              price: number
              price_unit: string
              tags: string[]
              ai_rationale: string
            }> = []

            let sortOrder = 0

            for (const a of day.golfActivities) {
              rows.push({
                trip_id: trip.id,
                name: a.name,
                detail: a.detail,
                time_of_day: a.timeOfDay,
                day: day.dayLabel,
                day_index: day.dayIndex,
                sort_order: sortOrder++,
                side: 'golf',
                price: Math.round(a.estimatedPrice * 100),
                price_unit: a.priceUnit,
                tags: a.tags,
                ai_rationale: a.aiRationale,
              })
            }

            for (const a of day.partnerActivities) {
              rows.push({
                trip_id: trip.id,
                name: a.name,
                detail: a.detail,
                time_of_day: a.timeOfDay,
                day: day.dayLabel,
                day_index: day.dayIndex,
                sort_order: sortOrder++,
                side: 'partner',
                price: Math.round(a.estimatedPrice * 100),
                price_unit: a.priceUnit,
                tags: a.tags,
                ai_rationale: a.aiRationale,
              })
            }

            for (const a of day.sharedActivities) {
              rows.push({
                trip_id: trip.id,
                name: a.name,
                detail: a.detail,
                time_of_day: a.timeOfDay,
                day: day.dayLabel,
                day_index: day.dayIndex,
                sort_order: sortOrder++,
                side: 'shared',
                price: Math.round(a.estimatedPrice * 100),
                price_unit: a.priceUnit,
                tags: a.tags,
                ai_rationale: a.aiRationale,
              })
            }

            return rows
          })

          if (activityRows.length > 0) {
            const { error: actError } = await supabase
              .from('activities')
              .insert(activityRows)

            if (actError) {
              console.error('Activity insert failed:', actError)
            }
          }

          // Send final result
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ type: 'done', tripId: trip.id, slug })}\n\n`,
            ),
          )
          controller.close()
        } catch (err) {
          console.error('Stream processing error:', err)
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ type: 'error', error: 'generation_failed' })}\n\n`),
          )
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (err) {
    console.error('Generate endpoint error:', err)
    return NextResponse.json(
      { error: 'generation_failed' },
      { status: 502 },
    )
  }
}
