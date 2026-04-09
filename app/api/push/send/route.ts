import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabase } from '@/lib/supabase'

const sendSchema = z.object({
  tripId: z.string().uuid(),
  title: z.string(),
  body: z.string(),
  url: z.string().optional(),
  tag: z.string().optional(),
  // Target specific participants or all
  participantIds: z.array(z.string().uuid()).optional(),
})

type PushSubscription = {
  endpoint: string
  keys: { p256dh: string; auth: string }
}

async function sendWebPush(
  subscription: PushSubscription,
  payload: { title: string; body: string; url?: string; tag?: string },
) {
  const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
  const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY

  if (!vapidPublicKey || !vapidPrivateKey) {
    console.warn('VAPID keys not configured, skipping push notification')
    return false
  }

  // Use the web-push library pattern via fetch to the push service
  // For production, use the `web-push` npm package.
  // For now, we store subscriptions and log the intent.
  console.log('Push notification queued:', {
    endpoint: subscription.endpoint,
    payload,
  })

  return true
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = sendSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'validation', fields: parsed.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { tripId, title, body: notifBody, url, tag, participantIds } = parsed.data
    const supabase = createServerSupabase()

    // Fetch participants with push subscriptions
    let query = supabase
      .from('participants')
      .select('id, name, push_subscription')
      .eq('trip_id', tripId)
      .not('push_subscription', 'is', null)

    if (participantIds && participantIds.length > 0) {
      query = query.in('id', participantIds)
    }

    const { data: participants } = await query

    if (!participants || participants.length === 0) {
      return NextResponse.json({ sent: 0, message: 'No subscribed participants' })
    }

    const payload = { title, body: notifBody, url, tag }
    let sentCount = 0

    for (const p of participants) {
      const subscription = p.push_subscription as PushSubscription | null
      if (!subscription) continue

      const sent = await sendWebPush(subscription, payload)
      if (sent) sentCount++
    }

    return NextResponse.json({ sent: sentCount })
  } catch (err) {
    console.error('Push send error:', err)
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}
