import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabase } from '@/lib/supabase'

const updateSchema = z.object({
  action: z.enum(['confirm', 'book', 'remove', 'update-booking']),
  organiserUuid: z.string(),
  bookingRef: z.string().optional(),
  bookingUrl: z.string().optional(),
})

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string; activityId: string }> },
) {
  const { id: tripId, activityId } = await params
  const body = await request.json()
  const parsed = updateSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const supabase = createServerSupabase()

  // Verify organiser
  const { data: trip } = await supabase
    .from('trips')
    .select('organiser_uuid')
    .eq('id', tripId)
    .single()

  if (!trip || trip.organiser_uuid !== parsed.data.organiserUuid) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 403 })
  }

  const { action, bookingRef, bookingUrl } = parsed.data
  const now = new Date().toISOString()

  let update: Record<string, unknown> = {}

  switch (action) {
    case 'confirm':
      update = { status: 'confirmed', confirmed_at: now }
      break
    case 'book':
      update = {
        status: 'booked',
        booking_ref: bookingRef ?? null,
        booking_url: bookingUrl ?? null,
        booked_at: now,
      }
      break
    case 'remove':
      update = { status: 'removed' }
      break
    case 'update-booking':
      update = {
        booking_ref: bookingRef ?? null,
        booking_url: bookingUrl ?? null,
      }
      break
  }

  const { data: activity, error } = await supabase
    .from('activities')
    .update(update)
    .eq('id', activityId)
    .eq('trip_id', tripId)
    .select('*')
    .single()

  if (error) {
    return NextResponse.json({ error: 'update_failed' }, { status: 500 })
  }

  return NextResponse.json(activity)
}
