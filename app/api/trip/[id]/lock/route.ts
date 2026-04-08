import { NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase'

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: tripId } = await params
  const supabase = createServerSupabase()

  // Verify trip exists and is in voting state
  const { data: trip } = await supabase
    .from('trips')
    .select('id, status')
    .eq('id', tripId)
    .single()

  if (!trip) {
    return NextResponse.json({ error: 'trip_not_found' }, { status: 404 })
  }

  if (trip.status === 'locked') {
    return NextResponse.json({ error: 'already_locked' }, { status: 400 })
  }

  // Lock the trip
  const now = new Date().toISOString()
  const { error: tripError } = await supabase
    .from('trips')
    .update({ status: 'locked', locked_at: now })
    .eq('id', tripId)

  if (tripError) {
    console.error('Trip lock failed:', tripError)
    return NextResponse.json({ error: 'lock_failed' }, { status: 500 })
  }

  // Confirm all proposed activities automatically
  const { error: actError } = await supabase
    .from('activities')
    .update({ status: 'confirmed', confirmed_at: now })
    .eq('trip_id', tripId)
    .eq('status', 'proposed')

  if (actError) {
    console.error('Activity confirm failed:', actError)
    // Non-fatal — trip is still locked
  }

  return NextResponse.json({ locked: true, lockedAt: now })
}
