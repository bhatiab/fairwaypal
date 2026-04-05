'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import type { TripRow } from '@/types/trip'
import { getDeviceUuid } from '@/lib/participant'
import { useTripParticipant } from './TripParticipantProvider'

export default function NameGate({ trip }: { trip: TripRow }) {
  const { participant, loading, setParticipant } = useTripParticipant()
  const [name, setName] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (loading || participant) return null

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    setSubmitting(true)

    try {
      const deviceUuid = getDeviceUuid(trip.id)
      const res = await fetch('/api/participant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tripId: trip.id,
          name: name.trim(),
          deviceUuid,
        }),
      })

      if (!res.ok) throw new Error('Failed to join')
      const p = await res.json()
      setParticipant(p)
    } catch {
      toast.error('Could not join the trip. Try again.')
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/95 backdrop-blur-sm">
      <div className="mx-5 w-full max-w-md rounded-sm border border-border-2 bg-bg-2 p-8">
        <p className="eyebrow">Join the trip</p>
        <h2 className="mt-4 text-3xl font-display font-light italic text-ink">
          What&apos;s your name?
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          So the group knows who voted.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoFocus
            className="h-12 w-full rounded-sm border border-border bg-bg-3 px-4 text-base text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            disabled={!name.trim() || submitting}
            className="btn-primary w-full disabled:opacity-40"
          >
            {submitting ? 'Joining...' : 'Join the trip'}
          </button>
        </form>
      </div>
    </div>
  )
}
