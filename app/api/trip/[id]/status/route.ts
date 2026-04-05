import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabase } from '@/lib/supabase'

const statusSchema = z.object({
  status: z.enum(['voting', 'locked']),
  organiserUuid: z.string(),
})

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const body = await request.json()
  const parsed = statusSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const supabase = createServerSupabase()

  // Verify organiser
  const { data: trip } = await supabase
    .from('trips')
    .select('organiser_uuid, golfers_count, partners_count')
    .eq('id', id)
    .single()

  if (!trip || trip.organiser_uuid !== parsed.data.organiserUuid) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 403 })
  }

  const now = new Date().toISOString()
  const update: Record<string, unknown> = { status: parsed.data.status }

  // On lock: calculate budgets, set timestamps
  if (parsed.data.status === 'locked') {
    update.locked_at = now

    // Set confirmed_at on proposed activities (auto-confirm remaining)
    await supabase
      .from('activities')
      .update({ status: 'confirmed', confirmed_at: now })
      .eq('trip_id', id)
      .eq('status', 'proposed')

    // Calculate budgets from confirmed + booked activities
    const { data: activities } = await supabase
      .from('activities')
      .select('side, price')
      .eq('trip_id', id)
      .in('status', ['confirmed', 'booked'])

    let golfTotal = 0
    let partnerTotal = 0
    let sharedTotal = 0

    for (const a of activities ?? []) {
      const price = a.price ? a.price / 100 : 0
      if (a.side === 'golf') golfTotal += price
      else if (a.side === 'partner') partnerTotal += price
      else sharedTotal += price
    }

    const totalPeople = trip.golfers_count + (trip.partners_count ?? 0)
    const sharedPerPerson = totalPeople > 0 ? sharedTotal / totalPeople : 0

    update.budget_per_golfer = Math.round(golfTotal + sharedPerPerson)
    update.budget_per_partner = Math.round(partnerTotal + sharedPerPerson)
  }

  const { error } = await supabase.from('trips').update(update).eq('id', id)

  if (error) {
    return NextResponse.json({ error: 'save_failed' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
