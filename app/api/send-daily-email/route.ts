import { NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase'
import { sendDailySummary, generateSubjectLine } from '@/lib/email'

// Vercel cron handler — runs daily at 7pm UTC
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  // Verify cron secret to prevent unauthorized access
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const supabase = createServerSupabase()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fairwaypal.com'

  // Fetch all trips in voting state with an organiser email
  const { data: trips } = await supabase
    .from('trips')
    .select('id, name, organiser_email')
    .eq('status', 'voting')
    .not('organiser_email', 'is', null)

  if (!trips || trips.length === 0) {
    return NextResponse.json({ sent: 0 })
  }

  let sentCount = 0

  for (const trip of trips) {
    if (!trip.organiser_email) continue

    try {
      // Get participants and votes
      const [participantsRes, votesRes, activitiesRes] = await Promise.all([
        supabase.from('participants').select('name, has_voted').eq('trip_id', trip.id),
        supabase.from('votes').select('activity_id, direction').eq('trip_id', trip.id),
        supabase.from('activities').select('id').eq('trip_id', trip.id).in('status', ['proposed', 'in-discussion']),
      ])

      const participants = participantsRes.data ?? []
      const votes = votesRes.data ?? []
      const activeActivities = activitiesRes.data ?? []

      const votedCount = participants.filter((p) => p.has_voted).length
      const totalCount = participants.length
      const nonVoterNames = participants
        .filter((p) => !p.has_voted)
        .map((p) => p.name)

      // Count activities with downvotes
      const downVotesByActivity = new Map<string, number>()
      for (const v of votes) {
        if (v.direction === 'down') {
          downVotesByActivity.set(
            v.activity_id,
            (downVotesByActivity.get(v.activity_id) ?? 0) + 1,
          )
        }
      }
      const conflictCount = activeActivities.filter(
        (a) => (downVotesByActivity.get(a.id) ?? 0) > 0,
      ).length

      const allVoted = nonVoterNames.length === 0 && totalCount > 0

      const subject = generateSubjectLine({
        tripName: trip.name,
        allVoted,
        conflictCount,
        nonVoterCount: nonVoterNames.length,
      })

      await sendDailySummary({
        to: trip.organiser_email,
        tripName: trip.name,
        subject,
        votedCount,
        totalCount,
        conflictCount,
        nonVoterNames,
        tripUrl: `${siteUrl}/organiser/${trip.id}`,
      })

      // Log the email
      await supabase.from('email_logs').insert({
        trip_id: trip.id,
        type: 'daily-summary',
        subject,
        status: 'sent',
      })

      sentCount++
    } catch (err) {
      console.error(`Failed to send daily email for trip ${trip.id}:`, err)

      await supabase.from('email_logs').insert({
        trip_id: trip.id,
        type: 'daily-summary',
        subject: 'Failed',
        status: 'failed',
      })
    }
  }

  return NextResponse.json({ sent: sentCount })
}
