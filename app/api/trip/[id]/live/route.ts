import { NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const { searchParams } = new URL(request.url)
  const participantId = searchParams.get('participantId')

  const supabase = createServerSupabase()

  // Fetch all data in parallel
  const [activitiesRes, votesRes, commentsRes, participantsRes] =
    await Promise.all([
      supabase
        .from('activities')
        .select('*')
        .eq('trip_id', id)
        .order('day_index')
        .order('sort_order'),
      supabase.from('votes').select('*').eq('trip_id', id),
      supabase
        .from('comments')
        .select('*, participants(name, initial, color)')
        .eq('trip_id', id)
        .order('created_at', { ascending: true }),
      supabase
        .from('participants')
        .select('*')
        .eq('trip_id', id)
        .order('created_at'),
    ])

  const activities = activitiesRes.data ?? []
  const allVotes = votesRes.data ?? []
  const participants = participantsRes.data ?? []

  // Aggregate votes per activity
  const voteCounts: Record<
    string,
    { up: number; down: number; myVote: 'up' | 'down' | null }
  > = {}

  for (const v of allVotes) {
    if (!voteCounts[v.activity_id]) {
      voteCounts[v.activity_id] = { up: 0, down: 0, myVote: null }
    }
    const entry = voteCounts[v.activity_id]
    if (v.direction === 'up') entry.up++
    else entry.down++
    if (participantId && v.participant_id === participantId) {
      entry.myVote = v.direction as 'up' | 'down'
    }
  }

  const votes = activities.map((a) => ({
    activityId: a.id,
    up: voteCounts[a.id]?.up ?? 0,
    down: voteCounts[a.id]?.down ?? 0,
    myVote: voteCounts[a.id]?.myVote ?? null,
  }))

  // Map comments with participant info
  const comments = (commentsRes.data ?? []).map(
    (c: Record<string, unknown>) => {
      const p = c.participants as {
        name: string
        initial: string
        color: string
      } | null
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
    },
  )

  return NextResponse.json({ activities, votes, comments, participants })
}
