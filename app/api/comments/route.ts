import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabase } from '@/lib/supabase'

const commentSchema = z.object({
  activityId: z.string().uuid(),
  tripId: z.string().uuid(),
  participantId: z.string().uuid(),
  text: z.string().min(1).max(500),
  sentiment: z.enum(['up', 'down']).nullable().optional(),
})

// GET — list comments for an activity
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const activityId = searchParams.get('activityId')

  if (!activityId) {
    return NextResponse.json({ error: 'activityId required' }, { status: 400 })
  }

  const supabase = createServerSupabase()

  const { data: comments, error } = await supabase
    .from('comments')
    .select('*, participant:participants(name, initial, color)')
    .eq('activity_id', activityId)
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Comments fetch failed:', error)
    return NextResponse.json({ error: 'fetch_failed' }, { status: 500 })
  }

  return NextResponse.json({ comments: comments ?? [] })
}

// POST — add a comment
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = commentSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'validation', fields: parsed.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { activityId, tripId, participantId, text, sentiment } = parsed.data
    const supabase = createServerSupabase()

    // Verify participant belongs to this trip
    const { data: participant } = await supabase
      .from('participants')
      .select('id')
      .eq('id', participantId)
      .eq('trip_id', tripId)
      .single()

    if (!participant) {
      return NextResponse.json({ error: 'invalid_participant' }, { status: 403 })
    }

    const { data: comment, error } = await supabase
      .from('comments')
      .insert({
        activity_id: activityId,
        trip_id: tripId,
        participant_id: participantId,
        text: text.trim(),
        sentiment: sentiment ?? null,
      })
      .select('*, participant:participants(name, initial, color)')
      .single()

    if (error) {
      console.error('Comment insert failed:', error)
      return NextResponse.json({ error: 'comment_failed' }, { status: 500 })
    }

    return NextResponse.json({ comment }, { status: 201 })
  } catch (err) {
    console.error('Comments endpoint error:', err)
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}
