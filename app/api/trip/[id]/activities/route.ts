import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabase } from '@/lib/supabase'

const updateActivitySchema = z.object({
  activityId: z.string().uuid(),
  action: z.enum(['confirm', 'discuss', 'cancel', 'book', 'edit']),
  // For edit action
  name: z.string().min(1).optional(),
  detail: z.string().optional(),
  timeOfDay: z.string().optional(),
  price: z.number().optional(),
  priceUnit: z.string().optional(),
  // For book action
  bookingRef: z.string().optional(),
  bookingUrl: z.string().optional(),
  // For discuss action
  comment: z.string().optional(),
})

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: tripId } = await params

  try {
    const body = await request.json()
    const parsed = updateActivitySchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'validation', fields: parsed.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { activityId, action, ...fields } = parsed.data
    const supabase = createServerSupabase()

    // Verify activity belongs to this trip
    const { data: activity } = await supabase
      .from('activities')
      .select('id, status')
      .eq('id', activityId)
      .eq('trip_id', tripId)
      .single()

    if (!activity) {
      return NextResponse.json({ error: 'activity_not_found' }, { status: 404 })
    }

    const now = new Date().toISOString()
    let updateData: Record<string, unknown> = {}

    switch (action) {
      case 'confirm':
        updateData = { status: 'confirmed', confirmed_at: now }
        break
      case 'discuss':
        updateData = { status: 'in-discussion' }
        break
      case 'cancel':
        updateData = { status: 'cancelled' }
        break
      case 'book':
        updateData = {
          status: 'booked',
          booked_at: now,
          ...(fields.bookingRef && { booking_ref: fields.bookingRef }),
          ...(fields.bookingUrl && { booking_url: fields.bookingUrl }),
        }
        break
      case 'edit':
        if (fields.name) updateData.name = fields.name
        if (fields.detail !== undefined) updateData.detail = fields.detail
        if (fields.timeOfDay) updateData.time_of_day = fields.timeOfDay
        if (fields.price !== undefined) updateData.price = Math.round(fields.price * 100)
        if (fields.priceUnit) updateData.price_unit = fields.priceUnit
        break
    }

    const { data: updated, error } = await supabase
      .from('activities')
      .update(updateData)
      .eq('id', activityId)
      .select()
      .single()

    if (error) {
      console.error('Activity update failed:', error)
      return NextResponse.json({ error: 'update_failed' }, { status: 500 })
    }

    // Send push notification for confirm/book actions
    if (action === 'confirm' || action === 'book') {
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
      const { data: trip } = await supabase
        .from('trips')
        .select('name')
        .eq('id', tripId)
        .single()

      const tripName = trip?.name || 'Your trip'
      const label = action === 'confirm' ? 'confirmed' : 'booked'

      fetch(`${baseUrl}/api/push/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tripId,
          title: `${tripName} — activity ${label}`,
          body: `"${updated.name}" has been ${label}.`,
          url: `/trip/${tripId}`,
          tag: `activity-${action}`,
        }),
      }).catch(() => {})
    }

    return NextResponse.json({ activity: updated })
  } catch (err) {
    console.error('Activities endpoint error:', err)
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}
