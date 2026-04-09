'use client'

import { useEffect, useState } from 'react'
import { Bell, BellOff } from 'lucide-react'
import { toast } from 'sonner'
import { useTripContext } from './TripContext'

function isSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    'PushManager' in window &&
    'Notification' in window
  )
}

export default function PushOptIn() {
  const { participant } = useTripContext()
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [supported, setSupported] = useState(false)

  useEffect(() => {
    setSupported(isSupported())

    // Check if already subscribed
    if (isSupported() && participant) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.pushManager.getSubscription().then((sub) => {
          setSubscribed(!!sub)
        })
      })
    }
  }, [participant])

  if (!supported || !participant) return null

  async function handleSubscribe() {
    setLoading(true)
    try {
      // Register service worker
      const registration = await navigator.serviceWorker.register('/sw.js')
      await navigator.serviceWorker.ready

      // Request permission
      const permission = await Notification.requestPermission()
      if (permission !== 'granted') {
        toast.error('Notification permission denied.')
        setLoading(false)
        return
      }

      // Subscribe to push
      const vapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        ...(vapidKey && {
          applicationServerKey: urlBase64ToUint8Array(vapidKey),
        }),
      })

      // Send subscription to server
      const res = await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          participantId: participant.id,
          subscription: subscription.toJSON(),
        }),
      })

      if (res.ok) {
        setSubscribed(true)
        toast.success('Notifications enabled!')
      } else {
        toast.error('Could not enable notifications.')
      }
    } catch (err) {
      console.error('Push subscribe error:', err)
      toast.error('Could not enable notifications.')
    } finally {
      setLoading(false)
    }
  }

  async function handleUnsubscribe() {
    setLoading(true)
    try {
      const registration = await navigator.serviceWorker.ready
      const subscription = await registration.pushManager.getSubscription()
      if (subscription) {
        await subscription.unsubscribe()
      }

      await fetch('/api/push/subscribe', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ participantId: participant.id }),
      })

      setSubscribed(false)
      toast.success('Notifications disabled.')
    } catch {
      toast.error('Could not disable notifications.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={subscribed ? handleUnsubscribe : handleSubscribe}
      disabled={loading}
      className={`flex items-center gap-2 rounded-sm border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.08em] transition-colors disabled:opacity-40 ${
        subscribed
          ? 'border-emerald-500/30 text-emerald-400 hover:border-emerald-500/50'
          : 'border-border text-muted-foreground hover:border-gold hover:text-gold'
      }`}
    >
      {subscribed ? (
        <>
          <Bell className="h-3.5 w-3.5" />
          {loading ? 'Updating...' : 'Notifications on'}
        </>
      ) : (
        <>
          <BellOff className="h-3.5 w-3.5" />
          {loading ? 'Enabling...' : 'Enable notifications'}
        </>
      )}
    </button>
  )
}

function urlBase64ToUint8Array(base64String: string): ArrayBuffer {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray.buffer as ArrayBuffer
}
