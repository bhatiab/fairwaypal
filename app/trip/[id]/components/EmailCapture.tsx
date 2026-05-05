'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useTripContext } from './TripContext'

export default function EmailCapture({ tripId }: { tripId: string }) {
  const { isOrganiser } = useTripContext()
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!isOrganiser) return
    const dismissed = localStorage.getItem(`email-dismissed-${tripId}`)
    const saved = localStorage.getItem(`email-saved-${tripId}`)
    if (dismissed || saved) return

    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [tripId, isOrganiser])

  async function handleSave() {
    if (!email.includes('@')) return
    setSaving(true)
    try {
      const res = await fetch(`/api/trip/${tripId}/email`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        localStorage.setItem(`email-saved-${tripId}`, 'true')
        toast.success('Email saved — you will get daily trip updates.')
        setVisible(false)
      } else {
        toast.error('Could not save email. Try again.')
      }
    } catch {
      toast.error('Could not save email. Try again.')
    } finally {
      setSaving(false)
    }
  }

  function dismiss() {
    localStorage.setItem(`email-dismissed-${tripId}`, 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="mt-12 rounded-xl border border-primary/30 bg-primary/5 p-6">
      <p className="text-sm font-semibold text-foreground">
        Get a daily summary of votes and conflicts.
      </p>
      <div className="mt-3 flex gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 flex-1 rounded-lg border border-border bg-background/70 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        />
        <button
          type="button"
          onClick={handleSave}
          disabled={saving || !email.includes('@')}
          className="primary-link h-10 px-4 text-xs disabled:opacity-40"
        >
          {saving ? 'Saving…' : 'Save'}
        </button>
      </div>
      <button
        type="button"
        onClick={dismiss}
        className="mt-2 text-xs text-muted-foreground hover:text-foreground"
      >
        Not now
      </button>
    </div>
  )
}
