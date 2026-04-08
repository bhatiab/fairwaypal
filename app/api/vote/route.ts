import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabase } from '@/lib/supabase'

const voteSchema = z.object({
  activityId: z.string().uuid(),
  tripId: z.string().uuid(),
  participantId: z.string().uuid(),
  direction: z.enum(['up', 'down']),
})

const deleteVoteSchema = z.object({
  activityId: z.string().uuid(),
  participantId: z.string().uuid(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = voteSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'validation', fields: parsed.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { activityId, tripId, participantId, direction } = parsed.data
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

    // Upsert vote (one per participant per activity)
    const { data: vote, error } = await supabase
      .from('votes')
      .upsert(
        {
          activity_id: activityId,
          trip_id: tripId,
          participant_id: participantId,
          direction,
        },
        { onConflict: 'activity_id,participant_id' },
      )
      .select()
      .single()

    if (error) {
      console.error('Vote upsert failed:', error)
      return NextResponse.json({ error: 'vote_failed' }, { status: 500 })
    }

    // Get updated tallies for this activity
    const { data: votes } = await supabase
      .from('votes')
      .select('direction')
      .eq('activity_id', activityId)

    const tally = {
      up: votes?.filter((v) => v.direction === 'up').length ?? 0,
      down: votes?.filter((v) => v.direction === 'down').length ?? 0,
    }

    return NextResponse.json({ vote, tally })
  } catch (err) {
    console.error('Vote endpoint error:', err)
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}

// DELETE — remove a vote (toggle off)
export async function DELETE(request: Request) {
  try {
    const body = await request.json()
    const parsed = deleteVoteSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'validation' }, { status: 400 })
    }

    const { activityId, participantId } = parsed.data
    const supabase = createServerSupabase()

    await supabase
      .from('votes')
      .delete()
      .eq('activity_id', activityId)
      .eq('participant_id', participantId)

    // Get updated tallies
    const { data: votes } = await supabase
      .from('votes')
      .select('direction')
      .eq('activity_id', activityId)

    const tally = {
      up: votes?.filter((v) => v.direction === 'up').length ?? 0,
      down: votes?.filter((v) => v.direction === 'down').length ?? 0,
    }

    return NextResponse.json({ tally })
  } catch (err) {
    console.error('Vote delete error:', err)
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}
