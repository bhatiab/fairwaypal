import { NextResponse } from 'next/server'
import { nameGateSchema } from '@/types/trip'
import { createServerSupabase } from '@/lib/supabase'
import { AVATAR_COLORS } from '@/lib/participant'

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = nameGateSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'validation', fields: parsed.error.flatten().fieldErrors },
      { status: 400 },
    )
  }

  const { tripId, name, deviceUuid } = parsed.data
  const supabase = createServerSupabase()

  // Check if participant already exists for this device + trip
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
    return NextResponse.json(existing)
  }

  // Count existing participants to pick avatar color
  const { count } = await supabase
    .from('participants')
    .select('*', { count: 'exact', head: true })
    .eq('trip_id', tripId)

  const color = AVATAR_COLORS[(count ?? 0) % AVATAR_COLORS.length]

  const { data: participant, error } = await supabase
    .from('participants')
    .insert({
      trip_id: tripId,
      name,
      initial: name.charAt(0).toUpperCase(),
      color,
      role: 'golfer',
      device_uuid: deviceUuid,
      opened_link: true,
      last_seen: new Date().toISOString(),
    })
    .select('*')
    .single()

  if (error) {
    // Handle unique constraint violation (race condition)
    if (error.code === '23505') {
      const { data: found } = await supabase
        .from('participants')
        .select('*')
        .eq('trip_id', tripId)
        .eq('device_uuid', deviceUuid)
        .single()
      if (found) return NextResponse.json(found)
    }
    return NextResponse.json({ error: 'save_failed' }, { status: 500 })
  }

  return NextResponse.json(participant)
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const tripId = searchParams.get('tripId')
  const deviceUuid = searchParams.get('deviceUuid')

  if (!tripId || !deviceUuid) {
    return NextResponse.json({ error: 'Missing tripId or deviceUuid' }, { status: 400 })
  }

  const supabase = createServerSupabase()
  const { data } = await supabase
    .from('participants')
    .select('*')
    .eq('trip_id', tripId)
    .eq('device_uuid', deviceUuid)
    .single()

  if (!data) {
    return NextResponse.json({ error: 'not_found' }, { status: 404 })
  }

  // Update last_seen
  await supabase
    .from('participants')
    .update({ last_seen: new Date().toISOString(), opened_link: true })
    .eq('id', data.id)

  return NextResponse.json(data)
}
