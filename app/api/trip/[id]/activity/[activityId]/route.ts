import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabase } from '@/lib/supabase'

const updateSchema = z.object({
  action: z.enum(['confirm', 'book', 'remove', 'update-booking', 'edit', 'discuss']),
  organiserUuid: z.string(),
  bookingRef: z.string().optional(),
  bookingUrl: z.string().optional(),
  fields: z
    .object({
      name: z.string().optional(),
      detail: z.string().optional(),
      timeOfDay: z.string().optional(),
      day: z.string().optional(),
      price: z.number().optional(),
      priceUnit: z.string().optional(),
      aiRationale: z.string().optional(),
    })
    .optional(),
  discussMessage: z.string().optional(),
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

  const { action, bookingRef, bookingUrl, fields, discussMessage } = parsed.data
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
    case 'edit':
      if (fields) {
        if (fields.name !== undefined) update.name = fields.name
        if (fields.detail !== undefined) update.detail = fields.detail
        if (fields.timeOfDay !== undefined) update.time_of_day = fields.timeOfDay
        if (fields.day !== undefined) update.day = fields.day
        if (fields.price !== undefined) update.price = fields.price
        if (fields.priceUnit !== undefined) update.price_unit = fields.priceUnit
        if (fields.aiRationale !== undefined) update.ai_rationale = fields.aiRationale
      }
      break
    case 'discuss': {
      update = { status: 'in-discussion' }
      // Also create a comment from the organiser
      if (discussMessage) {
        // Find organiser participant
        const { data: orgParticipant } = await supabase
          .from('participants')
          .select('id')
          .eq('trip_id', tripId)
          .eq('role', 'organiser')
          .single()

        if (orgParticipant) {
          await supabase.from('comments').insert({
            activity_id: activityId,
            trip_id: tripId,
            participant_id: orgParticipant.id,
            text: discussMessage,
            sentiment: null,
          })
        }
      }
      break
    }
  }

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: 'No changes' }, { status: 400 })
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
