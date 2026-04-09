import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabase } from '@/lib/supabase'

const subscribeSchema = z.object({
  participantId: z.string().uuid(),
  subscription: z.object({
    endpoint: z.string().url(),
    keys: z.object({
      p256dh: z.string(),
      auth: z.string(),
    }),
  }),
})

const unsubscribeSchema = z.object({
  participantId: z.string().uuid(),
})

// POST — store push subscription
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = subscribeSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'validation', fields: parsed.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { participantId, subscription } = parsed.data
    const supabase = createServerSupabase()

    const { error } = await supabase
      .from('participants')
      .update({ push_subscription: subscription })
      .eq('id', participantId)

    if (error) {
      console.error('Push subscribe failed:', error)
      return NextResponse.json({ error: 'subscribe_failed' }, { status: 500 })
    }

    return NextResponse.json({ subscribed: true })
  } catch (err) {
    console.error('Push subscribe error:', err)
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}

// DELETE — remove push subscription
export async function DELETE(request: Request) {
  try {
    const body = await request.json()
    const parsed = unsubscribeSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'validation' }, { status: 400 })
    }

    const { participantId } = parsed.data
    const supabase = createServerSupabase()

    await supabase
      .from('participants')
      .update({ push_subscription: null })
      .eq('id', participantId)

    return NextResponse.json({ unsubscribed: true })
  } catch (err) {
    console.error('Push unsubscribe error:', err)
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}
