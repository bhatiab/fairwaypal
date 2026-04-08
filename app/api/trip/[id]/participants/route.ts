import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabase } from '@/lib/supabase'
import { PARTICIPANT_COLORS } from '@/types/trip'

const joinSchema = z.object({
  name: z.string().min(1).max(50),
  deviceUuid: z.string().uuid(),
  role: z.enum(['golfer', 'partner']).optional(),
})

// GET — list participants for a trip
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const supabase = createServerSupabase()

  const { data: participants, error } = await supabase
    .from('participants')
    .select('*')
    .eq('trip_id', id)
    .order('created_at', { ascending: true })

  if (error) {
    return NextResponse.json({ error: 'fetch_failed' }, { status: 500 })
  }

  return NextResponse.json({ participants: participants ?? [] })
}

// POST — join trip via name gate (or reconnect existing device)
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: tripId } = await params

  try {
    const body = await request.json()
    const parsed = joinSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'validation', fields: parsed.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { name, deviceUuid, role } = parsed.data
    const supabase = createServerSupabase()

    // Verify trip exists
    const { data: trip } = await supabase
      .from('trips')
      .select('id, organiser_uuid')
      .eq('id', tripId)
      .single()

    if (!trip) {
      return NextResponse.json({ error: 'trip_not_found' }, { status: 404 })
    }

    // Check if this device already has a participant on this trip
    const { data: existing } = await supabase
      .from('participants')
      .select('*')
      .eq('trip_id', tripId)
      .eq('device_uuid', deviceUuid)
      .single()

    if (existing) {
      // Update last_seen and opened_link
      await supabase
        .from('participants')
        .update({ last_seen: new Date().toISOString(), opened_link: true })
        .eq('id', existing.id)

      return NextResponse.json({ participant: existing, reconnected: true })
    }

    // Count existing participants for color assignment
    const { count } = await supabase
      .from('participants')
      .select('*', { count: 'exact', head: true })
      .eq('trip_id', tripId)

    const colorIndex = (count ?? 0) % PARTICIPANT_COLORS.length
    const isOrganiser = trip.organiser_uuid === deviceUuid

    const { data: participant, error } = await supabase
      .from('participants')
      .insert({
        trip_id: tripId,
        name: name.trim(),
        initial: name.trim().charAt(0).toUpperCase(),
        color: PARTICIPANT_COLORS[colorIndex],
        role: isOrganiser ? 'organiser' : (role ?? 'golfer'),
        device_uuid: deviceUuid,
        opened_link: true,
        last_seen: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error('Participant insert failed:', error)
      return NextResponse.json({ error: 'join_failed' }, { status: 500 })
    }

    return NextResponse.json({ participant, reconnected: false }, { status: 201 })
  } catch (err) {
    console.error('Participants endpoint error:', err)
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}
