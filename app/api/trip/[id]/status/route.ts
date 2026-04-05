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
    .select('organiser_uuid')
    .eq('id', id)
    .single()

  if (!trip || trip.organiser_uuid !== parsed.data.organiserUuid) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 403 })
  }

  const { error } = await supabase
    .from('trips')
    .update({ status: parsed.data.status })
    .eq('id', id)

  if (error) {
    return NextResponse.json({ error: 'save_failed' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
