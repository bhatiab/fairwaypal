import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { z } from 'zod'
import { createServerSupabase } from '@/lib/supabase'

const requestSchema = z.object({
  activityId: z.string().uuid(),
  tripId: z.string().uuid(),
  constraintReason: z.enum(['too-expensive', 'wrong-time', 'wrong-day', 'not-right']),
})

const alternativeToolSchema = {
  type: 'object' as const,
  required: ['alternatives'],
  properties: {
    alternatives: {
      type: 'array' as const,
      items: {
        type: 'object' as const,
        required: ['name', 'detail', 'estimatedPrice', 'priceUnit', 'rationale'],
        properties: {
          name: { type: 'string' as const },
          detail: { type: 'string' as const },
          estimatedPrice: { type: 'number' as const, description: 'USD' },
          priceUnit: { type: 'string' as const, enum: ['per-person', 'per-round', 'per-night'] },
          rationale: { type: 'string' as const, description: 'One line explaining why this is a better fit' },
        },
      },
    },
  },
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = requestSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'validation', fields: parsed.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { activityId, tripId, constraintReason } = parsed.data
    const supabase = createServerSupabase()

    // Fetch the activity and trip context
    const { data: activity } = await supabase
      .from('activities')
      .select('*')
      .eq('id', activityId)
      .eq('trip_id', tripId)
      .single()

    if (!activity) {
      return NextResponse.json({ error: 'activity_not_found' }, { status: 404 })
    }

    const { data: trip } = await supabase
      .from('trips')
      .select('destination, budget_per_round, vibe, golfers_count, partners_count')
      .eq('id', tripId)
      .single()

    if (!trip) {
      return NextResponse.json({ error: 'trip_not_found' }, { status: 404 })
    }

    const constraintLabels: Record<string, string> = {
      'too-expensive': 'too expensive for the group',
      'wrong-time': 'scheduled at a bad time',
      'wrong-day': 'on the wrong day',
      'not-right': 'not the right fit for this group',
    }

    const anthropic = new Anthropic()
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: `You are FairwayPal, an expert golf trip planner. Suggest alternative activities when the group doesn't like one. Use real venue names appropriate to the destination. Keep rationale to one sentence.`,
      tools: [
        {
          name: 'suggest_alternatives',
          description: 'Suggest 3 alternative activities',
          input_schema: alternativeToolSchema,
        },
      ],
      tool_choice: { type: 'tool', name: 'suggest_alternatives' },
      messages: [
        {
          role: 'user',
          content: `The group is planning a trip to ${trip.destination} (budget $${trip.budget_per_round}/round, vibe: ${trip.vibe}, ${trip.golfers_count} golfers, ${trip.partners_count} partners).

The activity "${activity.name}" (${activity.side} side, ${activity.day} ${activity.time_of_day}, ~$${activity.price ? activity.price / 100 : 0}) was flagged as ${constraintLabels[constraintReason]}.

Suggest 3 alternatives that:
- Are the same type (${activity.side} activity)
- Fit the same time slot (${activity.day} ${activity.time_of_day})
- Address the constraint (${constraintLabels[constraintReason]})
- Use real venue names in ${trip.destination}

Use the suggest_alternatives tool.`,
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

    const result = toolBlock.input as { alternatives: Array<{ name: string; detail: string; estimatedPrice: number; priceUnit: string; rationale: string }> }

    // Store in activity_swaps table if it exists, otherwise just return
    return NextResponse.json({
      alternatives: result.alternatives,
      originalActivity: {
        id: activity.id,
        name: activity.name,
        side: activity.side,
        day: activity.day,
        timeOfDay: activity.time_of_day,
      },
    })
  } catch (err) {
    console.error('Generate alternatives error:', err)
    return NextResponse.json({ error: 'generation_failed' }, { status: 502 })
  }
}
