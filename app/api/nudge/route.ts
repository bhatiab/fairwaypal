import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabase } from '@/lib/supabase'

const nudgeSchema = z.object({
  tripId: z.string().uuid(),
  participantId: z.string().uuid().optional(),
  nudgeType: z.enum(['individual', 'group']),
})

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = nudgeSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { tripId, participantId, nudgeType } = parsed.data
  const supabase = createServerSupabase()

  const { data: trip } = await supabase
    .from('trips')
    .select('name')
    .eq('id', tripId)
    .single()

  if (!trip) {
    return NextResponse.json({ error: 'Trip not found' }, { status: 404 })
  }

  const tripUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fairwaypal.com'}/trip/${tripId}`

  if (nudgeType === 'individual' && participantId) {
    const { data: participant } = await supabase
      .from('participants')
      .select('name, opened_link, has_voted')
      .eq('id', participantId)
      .single()

    if (!participant) {
      return NextResponse.json({ error: 'Participant not found' }, { status: 404 })
    }

    let message: string
    if (!participant.opened_link) {
      message = `Hey ${participant.name}, did you see the link for ${trip.name}? Check it out and vote: ${tripUrl}`
    } else if (!participant.has_voted) {
      message = `Hey ${participant.name}, takes 2 mins to vote on ${trip.name}: ${tripUrl}`
    } else {
      message = `Hey ${participant.name}, check the latest on ${trip.name}: ${tripUrl}`
    }

    return NextResponse.json({ message, whatsappUrl: `https://wa.me/?text=${encodeURIComponent(message)}` })
  }

  // Group nudge
  const { data: participants } = await supabase
    .from('participants')
    .select('name, has_voted')
    .eq('trip_id', tripId)

  const nonVoters = (participants ?? [])
    .filter((p) => !p.has_voted)
    .map((p) => p.name)

  let message: string
  if (nonVoters.length === 0) {
    message = `Everyone's voted on ${trip.name}! Check the results: ${tripUrl}`
  } else if (nonVoters.length <= 3) {
    message = `Still waiting on ${nonVoters.join(', ')} to vote on ${trip.name}. Takes 2 mins: ${tripUrl}`
  } else {
    message = `${nonVoters.length} people still haven't voted on ${trip.name}. Don't hold up the group: ${tripUrl}`
  }

  return NextResponse.json({ message, whatsappUrl: `https://wa.me/?text=${encodeURIComponent(message)}` })
}
