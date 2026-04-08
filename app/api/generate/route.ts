import Anthropic from '@anthropic-ai/sdk'
import { getSupabaseServer } from '../../../src/lib/supabase'
import type { TripIntake, ActivityPayload, GeneratedItinerary } from '../../../src/types/trip'

export const runtime = 'nodejs'
export const maxDuration = 60

const SYSTEM_PROMPT = `You are FairwayPal's trip planning AI. Return ONLY valid JSON. No prose, no markdown code fences, no explanation.

STRICT RULES:
1. Return a single JSON object matching the schema exactly.
2. Generate activities for BOTH the golf side AND the partner side (unless partners === 0).
3. When golfers are on the course, partners must have a plan — activities slot into schedule gaps.
4. Include EXACTLY ONE shared activity (side: "shared") — typically Saturday evening dinner at a real local restaurant.
5. Use REAL venue and course names appropriate for the destination.
6. Price all activities consistent with budget_per_round: $50-150 = public courses and casual dining; $150-250 = resort/semi-private; $250+ = private/bucket-list courses and upscale dining.
7. Generate 8-16 total activities depending on trip length (more nights = more activities).
8. day_index is 0-based from the start date (first day = 0).
9. sort_order is the sequence within a day starting at 1.
10. price is in USD cents (e.g. $150 green fee = 15000).
11. booking_url must always be an empty string "".
12. tags are 1-3 short lowercase descriptors: ["golf", "morning"], ["spa", "wellness"], ["dinner", "shared"].

RETURN SCHEMA (exact — no deviations, no extra fields):
{
  "trip_name": "string — fun specific name for this trip (e.g. Jake's Last Swing)",
  "slug": "string — URL-safe kebab-case of trip_name (e.g. jakes-last-swing)",
  "activities": [
    {
      "name": "string",
      "detail": "string — 1-2 sentences describing the activity and why it fits",
      "time_of_day": "string — e.g. 7:10 AM, 1:30 PM, Evening",
      "day": "string — e.g. Friday, Saturday, Sunday",
      "day_index": 0,
      "sort_order": 1,
      "side": "golf | partner | shared",
      "price": 0,
      "tags": [],
      "booking_url": "",
      "ai_rationale": "string — one sentence on why this was chosen for this group"
    }
  ]
}`

function buildUserMessage(intake: TripIntake, nights: number): string {
  const vibeNote = {
    'serious-golf': 'Priority: early tee times, minimal evening drift, schedule protects the rounds.',
    'full-send': 'Priority: golf matters but nightlife and big shared group moments get real weight.',
    'mixed': 'Priority: strong golf itinerary with breathing room and intentional shared plans.',
  }[intake.vibe]

  const partnerNote = intake.partners === 0
    ? 'This is a golf-only trip. Do NOT generate any partner-side activities (side: "partner"). All activities should have side: "golf" except the one shared activity.'
    : `${intake.partners} partner(s) are joining. Generate a full partner itinerary that fills gaps in the golf schedule.`

  return `Generate a golf trip itinerary for:

Destination: ${intake.destination}
Dates: ${intake.datesStart} to ${intake.datesEnd} (${nights} nights)
Golfers: ${intake.golfers}
Partners joining: ${intake.partners}
Budget per round: $${intake.budgetPerRound}
Vibe: ${intake.vibe}

${vibeNote}
${partnerNote}`
}

function calculateNights(start: string, end: string): number {
  const startMs = new Date(start).getTime()
  const endMs = new Date(end).getTime()
  return Math.round((endMs - startMs) / (1000 * 60 * 60 * 24))
}

// Extract complete JSON objects from a streaming buffer using brace-depth tracking.
// Returns { objects: string[], remainingBuffer: string }
function extractCompleteObjects(
  buffer: string,
  inActivitiesArray: boolean,
): { objects: string[]; remainingBuffer: string; nowInArray: boolean } {
  const objects: string[] = []
  let nowInArray = inActivitiesArray
  let i = 0

  // Find the start of the activities array if not already in it
  if (!nowInArray) {
    const marker = '"activities"'
    const markerIdx = buffer.indexOf(marker)
    if (markerIdx === -1) return { objects, remainingBuffer: buffer, nowInArray }
    const bracketIdx = buffer.indexOf('[', markerIdx)
    if (bracketIdx === -1) return { objects, remainingBuffer: buffer, nowInArray }
    nowInArray = true
    i = bracketIdx + 1
  }

  // Scan for complete objects
  while (i < buffer.length) {
    if (buffer[i] === '{') {
      // Found start of an object — track depth to find its end
      let depth = 0
      let inString = false
      let escaped = false
      let j = i

      while (j < buffer.length) {
        const ch = buffer[j]
        if (escaped) {
          escaped = false
        } else if (ch === '\\' && inString) {
          escaped = true
        } else if (ch === '"') {
          inString = !inString
        } else if (!inString) {
          if (ch === '{') depth++
          else if (ch === '}') {
            depth--
            if (depth === 0) {
              // Complete object found
              objects.push(buffer.slice(i, j + 1))
              i = j + 1
              break
            }
          }
        }
        j++
      }

      if (depth > 0) {
        // Incomplete object — stop and keep remainder in buffer
        break
      }
    } else {
      i++
    }
  }

  return { objects, remainingBuffer: buffer.slice(i), nowInArray }
}

function parseActivitySafe(raw: string): ActivityPayload | null {
  try {
    const obj = JSON.parse(raw)
    if (!obj.name || !obj.side) return null
    return obj as ActivityPayload
  } catch {
    return null
  }
}

function sseEvent(payload: object): string {
  return `data: ${JSON.stringify(payload)}\n\n`
}

export async function POST(request: Request): Promise<Response> {
  // Validate API key before opening a stream
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(JSON.stringify({ error: 'Generation service not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  let intake: TripIntake
  try {
    intake = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Basic validation
  if (!intake.destination?.trim()) {
    return new Response(JSON.stringify({ error: 'Destination is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }
  if (!intake.datesStart || !intake.datesEnd) {
    return new Response(JSON.stringify({ error: 'Trip dates are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }
  if ((intake.golfers ?? 0) < 2) {
    return new Response(JSON.stringify({ error: 'At least 2 golfers required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const nights = calculateNights(intake.datesStart, intake.datesEnd)
  if (nights <= 0) {
    return new Response(JSON.stringify({ error: 'End date must be after start date' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const organiserUuid =
    request.headers.get('X-Organiser-UUID') ||
    crypto.randomUUID()

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  const encoder = new TextEncoder()
  let fullBuffer = ''
  let inActivitiesArray = false

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const anthropicStream = await anthropic.messages.stream({
          model: 'claude-opus-4-5',
          max_tokens: 4096,
          system: SYSTEM_PROMPT,
          messages: [{ role: 'user', content: buildUserMessage(intake, nights) }],
        })

        for await (const event of anthropicStream) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            const chunk = event.delta.text
            fullBuffer += chunk

            // Try to extract complete activity objects from the stream
            const result = extractCompleteObjects(fullBuffer, inActivitiesArray)
            inActivitiesArray = result.nowInArray
            fullBuffer = result.remainingBuffer

            for (const rawObj of result.objects) {
              const activity = parseActivitySafe(rawObj)
              if (activity) {
                controller.enqueue(
                  encoder.encode(
                    sseEvent({ type: 'activity', data: activity }),
                  ),
                )
              }
            }
          }
        }

        // Get the final complete message and parse it properly
        const finalMessage = await anthropicStream.finalMessage()
        const fullText = finalMessage.content
          .filter((c) => c.type === 'text')
          .map((c) => (c as { type: 'text'; text: string }).text)
          .join('')

        // Strip markdown fences if present (defensive)
        const cleaned = fullText
          .replace(/^```json?\s*/i, '')
          .replace(/```\s*$/, '')
          .trim()

        let itinerary: GeneratedItinerary
        try {
          itinerary = JSON.parse(cleaned)
        } catch {
          controller.enqueue(
            encoder.encode(
              sseEvent({ type: 'error', data: { message: 'Failed to parse generated itinerary. Please try again.' } }),
            ),
          )
          controller.close()
          return
        }

        // Validate
        if (!Array.isArray(itinerary.activities) || itinerary.activities.length === 0) {
          controller.enqueue(
            encoder.encode(
              sseEvent({ type: 'error', data: { message: 'No activities were generated. Please try again.' } }),
            ),
          )
          controller.close()
          return
        }

        const hasGolf = itinerary.activities.some((a) => a.side === 'golf')
        if (!hasGolf) {
          controller.enqueue(
            encoder.encode(
              sseEvent({ type: 'error', data: { message: 'Generation produced an invalid itinerary. Please try again.' } }),
            ),
          )
          controller.close()
          return
        }

        // Emit trip meta
        controller.enqueue(
          encoder.encode(
            sseEvent({
              type: 'trip_meta',
              data: { trip_name: itinerary.trip_name, slug: itinerary.slug },
            }),
          ),
        )

        // Save to Supabase
        const supabase = getSupabaseServer()

        // Ensure slug is unique — append random suffix if needed
        let slug = itinerary.slug || 'golf-trip'
        const { data: existing } = await supabase
          .from('trips')
          .select('id')
          .eq('slug', slug)
          .maybeSingle()
        if (existing) {
          slug = `${slug}-${Math.random().toString(36).slice(2, 7)}`
        }

        const { data: tripRow, error: tripError } = await supabase
          .from('trips')
          .insert({
            slug,
            name: itinerary.trip_name,
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
            intake_data: intake,
          })
          .select('id')
          .single()

        if (tripError || !tripRow) {
          console.error('Supabase trip insert error:', tripError)
          controller.enqueue(
            encoder.encode(
              sseEvent({ type: 'error', data: { message: 'Failed to save trip. Please try again.' } }),
            ),
          )
          controller.close()
          return
        }

        const tripId = tripRow.id

        // Bulk insert activities
        const activitiesToInsert = itinerary.activities.map((a) => ({
          trip_id: tripId,
          name: a.name,
          detail: a.detail,
          time_of_day: a.time_of_day,
          day: a.day,
          day_index: a.day_index,
          sort_order: a.sort_order,
          side: a.side,
          status: 'proposed',
          price: a.price ?? 0,
          tags: a.tags ?? [],
          booking_url: a.booking_url ?? '',
          ai_rationale: a.ai_rationale,
        }))

        const { error: activitiesError } = await supabase
          .from('activities')
          .insert(activitiesToInsert)

        if (activitiesError) {
          console.error('Supabase activities insert error:', activitiesError)
          // Trip row was created — emit done anyway so the user can still see their trip
          // (it will have no activities, which the trip page handles gracefully)
        }

        controller.enqueue(
          encoder.encode(sseEvent({ type: 'done', data: { trip_id: tripId } })),
        )
        controller.close()
      } catch (err) {
        console.error('Generation error:', err)
        const message =
          err instanceof Error ? err.message : 'Unexpected error during generation'
        try {
          controller.enqueue(
            encoder.encode(sseEvent({ type: 'error', data: { message } })),
          )
        } catch {
          // Controller may already be closed
        }
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no',
    },
  })
}
