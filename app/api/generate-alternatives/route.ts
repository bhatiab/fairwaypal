import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { swapRequestSchema } from '@/types/trip'
import { createServerSupabase } from '@/lib/supabase'

export const maxDuration = 60

const alternativeSchema = {
  type: 'object' as const,
  required: ['alternatives'],
  properties: {
    alternatives: {
      type: 'array' as const,
      items: {
        type: 'object' as const,
        required: ['name', 'detail', 'estimatedPrice', 'priceUnit', 'aiRationale'],
        properties: {
          name: { type: 'string' as const },
          detail: { type: 'string' as const },
          estimatedPrice: { type: 'number' as const },
          priceUnit: { type: 'string' as const, enum: ['per-person', 'per-round', 'per-night'] },
          aiRationale: { type: 'string' as const, description: 'One line explaining why this is a good alternative' },
        },
      },
    },
  },
}

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = swapRequestSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'validation', fields: parsed.error.flatten().fieldErrors },
      { status: 400 },
    )
  }

  const { activityId, tripId, constraintReason } = parsed.data
  const supabase = createServerSupabase()

  // Fetch activity and trip context
  const [activityRes, tripRes] = await Promise.all([
    supabase.from('activities').select('*').eq('id', activityId).single(),
    supabase
      .from('trips')
      .select('destination, budget_per_round, vibe, golfers_count, partners_count')
      .eq('id', tripId)
      .single(),
  ])

  if (!activityRes.data || !tripRes.data) {
    return NextResponse.json({ error: 'not_found' }, { status: 404 })
  }

  const activity = activityRes.data
  const trip = tripRes.data

  const constraintLabels: Record<string, string> = {
    'too-expensive': 'too expensive for the budget',
    'wrong-time': 'scheduled at the wrong time of day',
    'wrong-day': 'on the wrong day',
    'not-right': 'not the right fit for the group',
  }

  const anthropic = new Anthropic()
  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2048,
    tools: [
      {
        name: 'suggest_alternatives',
        description: 'Suggest 3 alternative activities',
        input_schema: alternativeSchema,
      },
    ],
    tool_choice: { type: 'tool', name: 'suggest_alternatives' },
    messages: [
      {
        role: 'user',
        content: `Suggest 3 alternatives to replace "${activity.name}" (${activity.side} activity) for a golf trip to ${trip.destination}.

The current activity is: ${activity.detail ?? activity.name}
Constraint: It is ${constraintLabels[constraintReason] ?? constraintReason}.
Budget per round: $${trip.budget_per_round}
Vibe: ${trip.vibe}
Group: ${trip.golfers_count} golfers, ${trip.partners_count} partners
Time slot: ${activity.time_of_day ?? 'flexible'}, ${activity.day ?? 'any day'}

Each alternative should address the constraint. Use real venue names for ${trip.destination}. Keep prices realistic.`,
      },
    ],
  })

  const toolBlock = message.content.find((b) => b.type === 'tool_use')
  if (!toolBlock || toolBlock.type !== 'tool_use') {
    return NextResponse.json({ error: 'generation_failed' }, { status: 502 })
  }

  const result = toolBlock.input as { alternatives: Array<{ name: string; detail: string; estimatedPrice: number; priceUnit: string; aiRationale: string }> }

  // Save swap record
  const { data: swap } = await supabase
    .from('activity_swaps')
    .insert({
      original_activity_id: activityId,
      trip_id: tripId,
      constraint_reason: constraintReason,
      alternatives: result.alternatives,
      status: 'pending',
    })
    .select('id')
    .single()

  return NextResponse.json({
    swapId: swap?.id,
    alternatives: result.alternatives,
  })
}
