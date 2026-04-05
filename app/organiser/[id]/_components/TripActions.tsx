'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Lock } from 'lucide-react'
import type { TripRow } from '@/types/trip'

export default function TripActions({
  trip,
  organiserUuid,
}: {
  trip: TripRow
  organiserUuid: string
}) {
  const router = useRouter()
  const [locking, setLocking] = useState(false)

  async function handleLock() {
    if (!confirm('Lock the trip? Voting will close and the confirmed itinerary will be shared.')) {
      return
    }

    setLocking(true)
    try {
      const res = await fetch(`/api/trip/${trip.id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'locked', organiserUuid }),
      })

      if (!res.ok) throw new Error()
      toast.success('Trip locked!')
      router.push(`/trip/${trip.id}/confirmed`)
    } catch {
      toast.error('Could not lock the trip.')
      setLocking(false)
    }
  }

  const statusLabel = {
    draft: 'Draft',
    voting: 'Voting open',
    locked: 'Locked',
    completed: 'Completed',
  }[trip.status]

  const statusColor = {
    draft: 'text-ink-muted',
    voting: 'text-gold',
    locked: 'text-fairway-text',
    completed: 'text-fairway-text',
  }[trip.status]

  return (
    <div className="flex items-center gap-4">
      <span
        className={`text-[10px] font-bold uppercase tracking-[0.18em] ${statusColor}`}
      >
        {statusLabel}
      </span>

      {trip.status === 'voting' && (
        <button
          type="button"
          onClick={handleLock}
          disabled={locking}
          className="btn-primary flex items-center gap-2 disabled:opacity-40"
        >
          <Lock className="h-3.5 w-3.5" />
          {locking ? 'Locking...' : 'Lock it in'}
        </button>
      )}

      {trip.status === 'locked' && (
        <a
          href={`/trip/${trip.id}/confirmed`}
          className="btn-secondary flex items-center gap-2"
        >
          View confirmed itinerary
        </a>
      )}
    </div>
  )
}
