'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import type { ActivityRow, ParticipantRow, TripRow, VoteRow } from '@/types/trip'
import { getOrganiserUuid } from '@/lib/participant'
import SwapPanel from '../../trip/[id]/_components/SwapPanel'
import ParticipantTracker from './_components/ParticipantTracker'
import ConflictQueue from './_components/ConflictQueue'
import BookingChecklist from './_components/BookingChecklist'
import BudgetTracker from './_components/BudgetTracker'
import TripActions from './_components/TripActions'

export default function OrgClient({
  trip,
  initialActivities,
  initialParticipants,
  initialVotes,
}: {
  trip: TripRow
  initialActivities: ActivityRow[]
  initialParticipants: ParticipantRow[]
  initialVotes: VoteRow[]
}) {
  const router = useRouter()
  const [activities, setActivities] = useState(initialActivities)
  const [participants] = useState(initialParticipants)
  const [swapActivity, setSwapActivity] = useState<ActivityRow | null>(null)
  const [organiserUuid] = useState(() => {
    if (typeof window === 'undefined') return ''
    return getOrganiserUuid() ?? ''
  })
  const [daysToTrip] = useState(() =>
    Math.max(
      0,
      Math.ceil(
        (new Date(trip.dates_start).getTime() - Date.now()) /
          (1000 * 60 * 60 * 24),
      ),
    ),
  )

  useEffect(() => {
    if (!organiserUuid || organiserUuid !== trip.organiser_uuid) {
      router.push(`/trip/${trip.id}`)
    }
  }, [organiserUuid, trip.organiser_uuid, trip.id, router])

  // Aggregate votes by activity
  const votesByActivity = useMemo(() => {
    const map = new Map<string, { up: number; down: number }>()
    for (const v of initialVotes) {
      const entry = map.get(v.activity_id) ?? { up: 0, down: 0 }
      if (v.direction === 'up') entry.up++
      else entry.down++
      map.set(v.activity_id, entry)
    }
    return map
  }, [initialVotes])

  async function handleConfirm(activityId: string) {
    const res = await fetch(
      `/api/trip/${trip.id}/activity/${activityId}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'confirm', organiserUuid }),
      },
    )
    if (res.ok) {
      const updated = await res.json()
      setActivities((prev) =>
        prev.map((a) => (a.id === activityId ? updated : a)),
      )
    }
  }

  async function handleRemove(activityId: string) {
    const res = await fetch(
      `/api/trip/${trip.id}/activity/${activityId}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'remove', organiserUuid }),
      },
    )
    if (res.ok) {
      const updated = await res.json()
      setActivities((prev) =>
        prev.map((a) => (a.id === activityId ? updated : a)),
      )
    }
  }

  if (!organiserUuid) return null

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <a
            href={`/trip/${trip.id}`}
            className="mb-3 flex items-center gap-1 text-sm text-ink-muted hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to trip
          </a>
          <p className="eyebrow">Dashboard</p>
          <h2 className="mt-2 text-3xl font-display font-light italic text-ink">
            {trip.name}
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            {trip.destination} · {trip.nights} nights ·{' '}
            {daysToTrip > 0 ? `${daysToTrip} days away` : 'Trip time'}
          </p>
        </div>
        <TripActions trip={trip} organiserUuid={organiserUuid} />
      </div>

      {/* Dashboard grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <ParticipantTracker participants={participants} tripId={trip.id} />
        <ConflictQueue
          activities={activities}
          votesByActivity={votesByActivity}
          onConfirm={handleConfirm}
          onRemove={handleRemove}
          onSwap={setSwapActivity}
        />
        <BookingChecklist
          activities={activities}
          tripId={trip.id}
          organiserUuid={organiserUuid}
        />
        <BudgetTracker trip={trip} activities={activities} />
      </div>

      {swapActivity && (
        <SwapPanel
          activity={swapActivity}
          tripId={trip.id}
          organiserUuid={organiserUuid}
          onSwapped={(updated) => {
            setActivities((prev) =>
              prev.map((a) => (a.id === updated.id ? updated : a)),
            )
          }}
          onClose={() => setSwapActivity(null)}
        />
      )}
    </div>
  )
}
