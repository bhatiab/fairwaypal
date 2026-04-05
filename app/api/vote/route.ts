import { NextResponse } from 'next/server'
import { voteRequestSchema } from '@/types/trip'
import { createServerSupabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = voteRequestSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'validation', fields: parsed.error.flatten().fieldErrors },
      { status: 400 },
    )
  }

  const { activityId, tripId, direction, participantId } = parsed.data
  const supabase = createServerSupabase()

  // Upsert vote
  const { error } = await supabase.from('votes').upsert(
    {
      activity_id: activityId,
      trip_id: tripId,
      participant_id: participantId,
      direction,
    },
    { onConflict: 'activity_id,participant_id' },
  )

  if (error) {
    console.error('Vote upsert failed:', error)
    return NextResponse.json({ error: 'vote_failed' }, { status: 500 })
  }

  // Mark participant as having voted
  await supabase
    .from('participants')
    .update({ has_voted: true })
    .eq('id', participantId)

  // Get updated counts
  const counts = await getVoteCounts(supabase, activityId, participantId)
  return NextResponse.json(counts)
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const activityId = searchParams.get('activityId')
  const participantId = searchParams.get('participantId')

  if (!activityId || !participantId) {
    return NextResponse.json({ error: 'Missing params' }, { status: 400 })
  }

  const supabase = createServerSupabase()

  await supabase
    .from('votes')
    .delete()
    .eq('activity_id', activityId)
    .eq('participant_id', participantId)

  const counts = await getVoteCounts(supabase, activityId, participantId)
  return NextResponse.json(counts)
}

async function getVoteCounts(
  supabase: ReturnType<typeof createServerSupabase>,
  activityId: string,
  participantId: string,
) {
  const { data: votes } = await supabase
    .from('votes')
    .select('direction, participant_id')
    .eq('activity_id', activityId)

  let up = 0
  let down = 0
  let myVote: 'up' | 'down' | null = null

  for (const v of votes ?? []) {
    if (v.direction === 'up') up++
    else down++
    if (v.participant_id === participantId) {
      myVote = v.direction as 'up' | 'down'
    }
  }

  return { activityId, up, down, myVote }
}
