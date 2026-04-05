import { NextResponse } from 'next/server'
import { commentRequestSchema } from '@/types/trip'
import { createServerSupabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = commentRequestSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'validation', fields: parsed.error.flatten().fieldErrors },
      { status: 400 },
    )
  }

  const { activityId, tripId, participantId, text, sentiment } = parsed.data
  const supabase = createServerSupabase()

  const { error } = await supabase.from('comments').insert({
    activity_id: activityId,
    trip_id: tripId,
    participant_id: participantId,
    text,
    sentiment: sentiment ?? null,
  })

  if (error) {
    console.error('Comment insert failed:', error)
    return NextResponse.json({ error: 'save_failed' }, { status: 500 })
  }

  // Return all comments for this activity
  const comments = await getActivityComments(supabase, activityId)
  return NextResponse.json(comments)
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const activityId = searchParams.get('activityId')

  if (!activityId) {
    return NextResponse.json({ error: 'Missing activityId' }, { status: 400 })
  }

  const supabase = createServerSupabase()
  const comments = await getActivityComments(supabase, activityId)
  return NextResponse.json(comments)
}

async function getActivityComments(
  supabase: ReturnType<typeof createServerSupabase>,
  activityId: string,
) {
  const { data } = await supabase
    .from('comments')
    .select('*, participants(name, initial, color)')
    .eq('activity_id', activityId)
    .order('created_at', { ascending: true })

  return (data ?? []).map((c: Record<string, unknown>) => {
    const p = c.participants as { name: string; initial: string; color: string } | null
    return {
      id: c.id,
      activity_id: c.activity_id,
      trip_id: c.trip_id,
      participant_id: c.participant_id,
      text: c.text,
      sentiment: c.sentiment,
      ai_summary: c.ai_summary,
      created_at: c.created_at,
      participant_name: p?.name ?? 'Unknown',
      participant_initial: p?.initial ?? '?',
      participant_color: p?.color ?? '#666',
    }
  })
}
