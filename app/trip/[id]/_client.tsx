'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { ChevronDown } from 'lucide-react'
import type { TripRow, GeneratedDay, Activity } from '@/types/trip'

function ActivityCard({
  activity,
  side,
}: {
  activity: Activity
  side: 'golf' | 'partner' | 'shared'
}) {
  const [showRationale, setShowRationale] = useState(false)

  const accentClass =
    side === 'golf'
      ? 'border-l-primary'
      : side === 'partner'
        ? 'border-l-partner'
        : 'border-l-gold'

  return (
    <div
      className={`rounded-xl border border-border bg-card/60 p-4 border-l-2 ${accentClass}`}
    >
      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
        {activity.timeOfDay}
      </p>
      <p className="mt-1 text-base font-semibold text-foreground">
        {activity.name}
      </p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">
        {activity.detail}
      </p>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-sm text-primary">
          ~${activity.estimatedPrice}{' '}
          <span className="text-muted-foreground">{activity.priceUnit}</span>
        </p>
        {activity.aiRationale && (
          <button
            type="button"
            onClick={() => setShowRationale(!showRationale)}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            Why this pick
            <ChevronDown
              className={`h-3 w-3 transition-transform ${showRationale ? 'rotate-180' : ''}`}
            />
          </button>
        )}
      </div>
      {showRationale && (
        <p className="mt-2 text-xs italic text-muted-foreground">
          {activity.aiRationale}
        </p>
      )}
    </div>
  )
}

function DaySection({ day }: { day: GeneratedDay }) {
  const hasPartner = day.partnerActivities.length > 0
  const hasShared = day.sharedActivities.length > 0

  return (
    <div className="space-y-4">
      <div className="border-b border-border pb-2">
        <p className="text-lg font-display font-light text-foreground">
          {day.dayLabel}
        </p>
        <p className="text-sm text-muted-foreground">{day.dateLabel}</p>
      </div>

      {/* Shared activities banner */}
      {hasShared && (
        <div className="space-y-3">
          {day.sharedActivities.map((a, i) => (
            <div
              key={i}
              className="rounded-xl border border-gold/30 bg-gold/5 p-4"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-gold">
                Shared · {a.timeOfDay}
              </p>
              <p className="mt-1 text-base font-semibold text-foreground">
                {a.name}
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {a.detail}
              </p>
              <p className="mt-2 text-sm text-gold">
                ~${a.estimatedPrice}{' '}
                <span className="text-muted-foreground">{a.priceUnit}</span>
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Split view */}
      <div className={`grid gap-4 ${hasPartner ? 'md:grid-cols-2' : ''}`}>
        {/* Golf column */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.12em] text-primary">
            Golf
          </p>
          {day.golfActivities.map((a, i) => (
            <ActivityCard key={i} activity={a} side="golf" />
          ))}
        </div>

        {/* Partner column */}
        {hasPartner && (
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.12em] text-partner">
              Partners
            </p>
            {day.partnerActivities.map((a, i) => (
              <ActivityCard key={i} activity={a} side="partner" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function EmailCapture({ tripId }: { tripId: string }) {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(`email-dismissed-${tripId}`)
    const saved = localStorage.getItem(`email-saved-${tripId}`)
    if (dismissed || saved) return

    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [tripId])

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

export default function TripClient({ trip }: { trip: TripRow }) {
  const itinerary = trip.itinerary

  return (
    <div className="mt-8 space-y-12">
      {/* Hero strip */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <span>{trip.destination}</span>
        <span>
          {trip.dates_start} → {trip.dates_end}
        </span>
        <span>{trip.nights} nights</span>
        <span>{trip.golfers_count} golfers</span>
        {trip.partners_count > 0 && (
          <span>{trip.partners_count} partners</span>
        )}
        <span className="capitalize">{trip.vibe}</span>
      </div>

      {/* Day-by-day itinerary */}
      <div className="space-y-10">
        {itinerary.days.map((day) => (
          <DaySection key={day.dayIndex} day={day} />
        ))}
      </div>

      {/* Budget summary */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card/60 p-5">
          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            Estimated per golfer
          </p>
          <p className="mt-2 text-3xl font-display font-light text-foreground">
            ${itinerary.estimatedBudgetPerGolfer}
          </p>
        </div>
        {trip.partners_count > 0 && (
          <div className="rounded-xl border border-border bg-card/60 p-5">
            <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
              Estimated per partner
            </p>
            <p className="mt-2 text-3xl font-display font-light text-foreground">
              ${itinerary.estimatedBudgetPerPartner}
            </p>
          </div>
        )}
      </div>

      {/* Email capture */}
      <EmailCapture tripId={trip.id} />
    </div>
  )
}
