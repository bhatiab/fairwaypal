import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabase } from '@/lib/supabase'

const nudgeSchema = z.object({
  tripId: z.string().uuid(),
  participantId: z.string().uuid().optional(),
  nudgeType: z.enum(['individual', 'group']),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = nudgeSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'validation' }, { status: 400 })
    }

    const { tripId, participantId, nudgeType } = parsed.data
    const supabase = createServerSupabase()

    const { data: trip } = await supabase
      .from('trips')
      .select('name, slug')
      .eq('id', tripId)
      .single()

    if (!trip) {
      return NextResponse.json({ error: 'trip_not_found' }, { status: 404 })
    }

    const tripUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://fairwaypal.com'}/trip/${tripId}`

    if (nudgeType === 'individual' && participantId) {
      const { data: participant } = await supabase
        .from('participants')
        .select('name, has_voted, opened_link')
        .eq('id', participantId)
        .single()

      if (!participant) {
        return NextResponse.json({ error: 'participant_not_found' }, { status: 404 })
      }

      let message: string
      if (!participant.opened_link) {
        message = `Hey ${participant.name}! Did you see the link for ${trip.name}? Check it out and vote on the activities: ${tripUrl}`
      } else if (!participant.has_voted) {
        message = `Hey ${participant.name}, takes 2 mins to vote on ${trip.name}. We need your input! ${tripUrl}`
      } else {
        message = `Hey ${participant.name}, check out the latest on ${trip.name}: ${tripUrl}`
      }

      return NextResponse.json({ message })
    }

    // Group nudge — list non-voters by name
    const { data: participants } = await supabase
      .from('participants')
      .select('name, has_voted')
      .eq('trip_id', tripId)

    const nonVoters = (participants ?? []).filter((p) => !p.has_voted)

    let message: string
    if (nonVoters.length === 0) {
      message = `Everyone's voted on ${trip.name}! Time to lock it in. ${tripUrl}`
    } else {
      const names = nonVoters.map((p) => p.name).join(', ')
      message = `Still waiting on ${names} to vote on ${trip.name}. Takes 2 mins lads: ${tripUrl}`
    }

    return NextResponse.json({ message })
  } catch (err) {
    console.error('Nudge endpoint error:', err)
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}
