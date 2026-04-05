'use client'

import { useMemo, useState } from 'react'
import { Check, ExternalLink, Calendar } from 'lucide-react'
import type { TripRow, ActivityRow, ParticipantRow } from '@/types/trip'

function ConfirmedActivityCard({ activity }: { activity: ActivityRow }) {
  const isBooked = activity.status === 'booked'
  const price = activity.price ? activity.price / 100 : null

  const accentClass =
    activity.side === 'golf'
      ? 'border-l-fairway'
      : activity.side === 'partner'
        ? 'border-l-partner'
        : 'border-l-gold'

  return (
    <div
      className={`rounded-sm border border-l-2 p-4 ${accentClass} ${
        isBooked ? 'border-fairway/30 bg-fairway-dim' : 'border-border bg-bg-2'
      }`}
    >
      {activity.time_of_day && (
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted">
          {activity.time_of_day}
        </p>
      )}
      <p className="mt-1 text-sm font-semibold text-ink">{activity.name}</p>
      {activity.detail && (
        <p className="mt-1 text-sm leading-6 text-ink-2">{activity.detail}</p>
      )}

      <div className="mt-2 flex items-center justify-between">
        {price !== null && (
          <p className="text-sm text-gold">
            ~${price}{' '}
            <span className="text-ink-muted">{activity.price_unit}</span>
          </p>
        )}

        {isBooked ? (
          <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] text-fairway-text">
            <Check className="h-3 w-3" />
            Booked
            {activity.booking_ref && ` · ${activity.booking_ref}`}
          </span>
        ) : activity.booking_url ? (
          <a
            href={activity.booking_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] text-gold hover:text-ink"
          >
            Book now <ExternalLink className="h-3 w-3" />
          </a>
        ) : null}
      </div>
    </div>
  )
}

export default function ConfirmedClient({
  trip,
  activities,
  participants,
}: {
  trip: TripRow
  activities: ActivityRow[]
  participants: ParticipantRow[]
}) {
  // Group activities by day
  const days = useMemo(() => {
    const dayMap = new Map<
      number,
      {
        dayLabel: string
        golf: ActivityRow[]
        partner: ActivityRow[]
        shared: ActivityRow[]
      }
    >()

    for (const a of activities) {
      if (!dayMap.has(a.day_index)) {
        dayMap.set(a.day_index, {
          dayLabel: a.day ?? `Day ${a.day_index + 1}`,
          golf: [],
          partner: [],
          shared: [],
        })
      }
      const day = dayMap.get(a.day_index)!
      if (a.side === 'golf') day.golf.push(a)
      else if (a.side === 'partner') day.partner.push(a)
      else day.shared.push(a)
    }

    return [...dayMap.entries()]
      .sort(([a], [b]) => a - b)
      .map(([, v]) => v)
  }, [activities])

  const booked = activities.filter((a) => a.status === 'booked').length
  const perGolfer = trip.budget_per_golfer ?? trip.itinerary.estimatedBudgetPerGolfer
  const perPartner = trip.budget_per_partner ?? trip.itinerary.estimatedBudgetPerPartner

  const [daysToTrip] = useState(() =>
    Math.max(
      0,
      Math.ceil(
        (new Date(trip.dates_start).getTime() - Date.now()) /
          (1000 * 60 * 60 * 24),
      ),
    ),
  )

  return (
    <div className="mt-8 space-y-10">
      {/* Hero strip */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
          <span>{trip.destination}</span>
          <span>
            {trip.dates_start} → {trip.dates_end}
          </span>
          <span>{trip.nights} nights</span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-fairway-text">
          Confirmed
        </span>
        {daysToTrip > 0 && (
          <span className="text-sm text-gold">{daysToTrip} days away</span>
        )}
      </div>

      {/* Crew strip */}
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {participants.map((p) => (
            <div
              key={p.id}
              title={p.name}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-bg text-[11px] font-bold text-bg"
              style={{ backgroundColor: p.color }}
            >
              {p.initial}
            </div>
          ))}
        </div>
        <span className="text-xs text-ink-muted">
          Everyone&apos;s in · {participants.length} people
        </span>
      </div>

      {/* Day-by-day itinerary */}
      <div className="space-y-10">
        {days.map((day, i) => (
          <div key={i} className="space-y-4">
            <div className="border-b border-border pb-2">
              <p className="text-lg font-display font-light text-ink">
                {day.dayLabel}
              </p>
            </div>

            {/* Shared */}
            {day.shared.map((a) => (
              <div
                key={a.id}
                className="rounded-sm border border-gold-border bg-gold-dim p-4"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                  Shared · {a.time_of_day}
                </p>
                <p className="mt-1 text-sm font-semibold text-ink">
                  {a.name}
                </p>
                {a.detail && (
                  <p className="mt-1 text-sm leading-6 text-ink-2">
                    {a.detail}
                  </p>
                )}
              </div>
            ))}

            {/* Split */}
            <div
              className={`grid gap-4 ${day.partner.length > 0 ? 'md:grid-cols-2' : ''}`}
            >
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-fairway-text">
                  Golf
                </p>
                {day.golf.map((a) => (
                  <ConfirmedActivityCard key={a.id} activity={a} />
                ))}
              </div>
              {day.partner.length > 0 && (
                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-partner-text">
                    Partners
                  </p>
                  {day.partner.map((a) => (
                    <ConfirmedActivityCard key={a.id} activity={a} />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Budget strip */}
      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-sm border border-border bg-bg-2 p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-muted">
            Per golfer
          </p>
          <p className="mt-1 text-2xl font-display font-light text-ink">
            ${perGolfer}
          </p>
        </div>
        {trip.partners_count > 0 && (
          <div className="rounded-sm border border-border bg-bg-2 p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-muted">
              Per partner
            </p>
            <p className="mt-1 text-2xl font-display font-light text-ink">
              ${perPartner}
            </p>
          </div>
        )}
        <div className="rounded-sm border border-border bg-bg-2 p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-muted">
            Booked
          </p>
          <p className="mt-1 text-2xl font-display font-light text-ink">
            {booked}
            <span className="text-sm text-ink-muted">
              /{activities.length}
            </span>
          </p>
        </div>
        <div className="rounded-sm border border-border bg-bg-2 p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-muted">
            Still to book
          </p>
          <p className="mt-1 text-2xl font-display font-light text-ink">
            {activities.length - booked}
          </p>
        </div>
      </div>

      {/* Bottom actions */}
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href)
          }}
          className="btn-primary"
        >
          Share with group
        </button>
        <a href={`/plan`} className="btn-secondary flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Plan the next one
        </a>
      </div>
    </div>
  )
}
