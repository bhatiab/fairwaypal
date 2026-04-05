'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Check, ExternalLink } from 'lucide-react'
import type { ActivityRow } from '@/types/trip'

export default function BookingChecklist({
  activities,
  tripId,
  organiserUuid,
}: {
  activities: ActivityRow[]
  tripId: string
  organiserUuid: string
}) {
  const bookable = activities.filter(
    (a) =>
      a.status === 'confirmed' || a.status === 'booked' || a.status === 'proposed',
  )

  const booked = bookable.filter((a) => a.status === 'booked')

  return (
    <div className="rounded-sm border border-border bg-bg-2 p-5">
      <p className="eyebrow">Booking checklist</p>
      <p className="mt-1 text-sm text-ink-muted">
        {booked.length} of {bookable.length} booked
      </p>

      <div className="mt-4 space-y-2">
        {bookable.map((a) => (
          <BookingItem
            key={a.id}
            activity={a}
            tripId={tripId}
            organiserUuid={organiserUuid}
          />
        ))}
      </div>
    </div>
  )
}

function BookingItem({
  activity,
  tripId,
  organiserUuid,
}: {
  activity: ActivityRow
  tripId: string
  organiserUuid: string
}) {
  const [status, setStatus] = useState(activity.status)
  const [bookingRef, setBookingRef] = useState(activity.booking_ref ?? '')
  const [showRefInput, setShowRefInput] = useState(false)

  async function handleAction(action: string, ref?: string) {
    try {
      const res = await fetch(
        `/api/trip/${tripId}/activity/${activity.id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action,
            organiserUuid,
            bookingRef: ref,
          }),
        },
      )
      if (!res.ok) throw new Error()
      const updated = await res.json()
      setStatus(updated.status)
      toast.success(
        action === 'confirm'
          ? 'Activity confirmed'
          : action === 'book'
            ? 'Marked as booked'
            : 'Updated',
      )
      setShowRefInput(false)
    } catch {
      toast.error('Failed to update activity.')
    }
  }

  const isBooked = status === 'booked'
  const isConfirmed = status === 'confirmed'

  return (
    <div
      className={`rounded-sm border p-3 ${
        isBooked
          ? 'border-fairway/30 bg-fairway-dim'
          : isConfirmed
            ? 'border-gold-border bg-gold-dim'
            : 'border-border bg-bg-3'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-ink">{activity.name}</p>
          <p className="text-xs text-ink-muted">
            {activity.side} · {activity.day} · {activity.time_of_day}
          </p>
          {isBooked && activity.booking_ref && (
            <p className="mt-1 text-xs text-fairway-text">
              Ref: {activity.booking_ref}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {isBooked ? (
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] text-fairway-text">
              <Check className="h-3 w-3" /> Booked
            </span>
          ) : isConfirmed ? (
            <button
              type="button"
              onClick={() => setShowRefInput(true)}
              className="btn-ghost h-7 px-3 text-[9px]"
            >
              Mark booked
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handleAction('confirm')}
              className="btn-ghost h-7 px-3 text-[9px]"
            >
              Confirm
            </button>
          )}

          {activity.booking_url && (
            <a
              href={activity.booking_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-ink"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      {showRefInput && (
        <div className="mt-3 flex gap-2">
          <input
            type="text"
            value={bookingRef}
            onChange={(e) => setBookingRef(e.target.value)}
            placeholder="Confirmation number"
            className="h-8 flex-1 rounded-sm border border-border bg-bg px-3 text-sm text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleAction('book', bookingRef)}
            className="btn-primary h-8 px-3 text-[9px]"
          >
            Save
          </button>
        </div>
      )}
    </div>
  )
}
