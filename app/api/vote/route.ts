import { NextResponse } from 'next/server'
import { voteRequestSchema } from '@/types/trip'
import { createServerSupabase } from '@/lib/supabase'
import { sendAllVotedEmail } from '@/lib/email'

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

  // Check if all participants have now voted → trigger all-voted email
  checkAllVoted(supabase, tripId).catch(() => {})

  // Get updated counts
  const counts = await getVoteCounts(supabase, activityId, participantId)
  return NextResponse.json(counts)
}

async function checkAllVoted(
  supabase: ReturnType<typeof createServerSupabase>,
  tripId: string,
) {
  const { data: participants } = await supabase
    .from('participants')
    .select('has_voted')
    .eq('trip_id', tripId)

  if (!participants || participants.length === 0) return
  const allVoted = participants.every((p) => p.has_voted)
  if (!allVoted) return

  // Check if we already sent this email
  const { data: existingLog } = await supabase
    .from('email_logs')
    .select('id')
    .eq('trip_id', tripId)
    .eq('type', 'all-voted')
    .limit(1)

  if (existingLog && existingLog.length > 0) return

  // Get trip + organiser email
  const { data: trip } = await supabase
    .from('trips')
    .select('name, organiser_email, status')
    .eq('id', tripId)
    .single()

  if (!trip?.organiser_email || trip.status !== 'voting') return

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fairwaypal.com'

  await sendAllVotedEmail({
    to: trip.organiser_email,
    tripName: trip.name,
    tripUrl: `${siteUrl}/organiser/${tripId}`,
  })

  await supabase.from('email_logs').insert({
    trip_id: tripId,
    type: 'all-voted',
    subject: `${trip.name} · everyone's in · ready to lock`,
    status: 'sent',
  })
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
