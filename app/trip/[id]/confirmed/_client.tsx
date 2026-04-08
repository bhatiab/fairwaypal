'use client'

import { useState } from 'react'
import {
  Check,
  ExternalLink,
  Calendar,
  Share2,
  Link2,
  ArrowRight,
} from 'lucide-react'
import { toast } from 'sonner'
import type { TripRow, ActivityRow, GeneratedDay, Activity } from '@/types/trip'
import { StatusBadge } from '../components/OrgDashboard'

/* ------------------------------------------------------------------ */
/*  Activity Card (read-only, confirmed state)                         */
/* ------------------------------------------------------------------ */

function ConfirmedActivityCard({
  activity,
  activityRow,
  side,
}: {
  activity: Activity
  activityRow?: ActivityRow
  side: 'golf' | 'partner' | 'shared'
}) {
  const status = activityRow?.status ?? 'confirmed'
  const isBooked = status === 'booked'

  const borderClass = isBooked
    ? 'border-emerald-500/30'
    : 'border-border'

  const sideAccent =
    side === 'golf'
      ? 'border-l-primary'
      : side === 'partner'
        ? 'border-l-partner'
        : 'border-l-gold'

  return (
    <div
      className={`rounded-xl border ${borderClass} bg-card/60 p-4 border-l-2 ${sideAccent}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            {activity.timeOfDay}
          </p>
          <p className="mt-1 text-base font-semibold text-foreground">
            {activity.name}
          </p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {activity.detail}
          </p>
        </div>
        {isBooked && (
          <div className="flex items-center gap-1 rounded-sm border border-emerald-500/30 bg-emerald-500/10 px-2 py-1">
            <Check className="h-3 w-3 text-emerald-400" />
            <span className="text-xs font-medium text-emerald-400">Booked</span>
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm text-primary">
          ~${activity.estimatedPrice}{' '}
          <span className="text-muted-foreground">{activity.priceUnit}</span>
        </p>
        {isBooked && activityRow?.booking_ref && (
          <span className="text-xs text-emerald-400/70">
            Ref: {activityRow.booking_ref}
          </span>
        )}
        {!isBooked && activityRow?.booking_url && (
          <a
            href={activityRow.booking_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-gold hover:text-gold/80"
          >
            Book now <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Day Section (read-only)                                            */
/* ------------------------------------------------------------------ */

function ConfirmedDaySection({
  day,
  activityRows,
}: {
  day: GeneratedDay
  activityRows: ActivityRow[]
}) {
  const hasPartner = day.partnerActivities.length > 0
  const hasShared = day.sharedActivities.length > 0

  function findRow(activityName: string, side: string): ActivityRow | undefined {
    return activityRows.find(
      (r) =>
        r.name === activityName &&
        r.side === side &&
        r.day_index === day.dayIndex,
    )
  }

  return (
    <div className="space-y-4">
      <div className="border-b border-border pb-2">
        <p className="text-lg font-display font-light text-foreground">
          {day.dayLabel}
        </p>
        <p className="text-sm text-muted-foreground">{day.dateLabel}</p>
      </div>

      {hasShared && (
        <div className="space-y-3">
          {day.sharedActivities.map((a, i) => (
            <ConfirmedActivityCard
              key={i}
              activity={a}
              activityRow={findRow(a.name, 'shared')}
              side="shared"
            />
          ))}
        </div>
      )}

      <div className={`grid gap-4 ${hasPartner ? 'md:grid-cols-2' : ''}`}>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.12em] text-primary">
            Golf
          </p>
          {day.golfActivities.map((a, i) => (
            <ConfirmedActivityCard
              key={i}
              activity={a}
              activityRow={findRow(a.name, 'golf')}
              side="golf"
            />
          ))}
        </div>

        {hasPartner && (
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.12em] text-partner">
              Partners
            </p>
            {day.partnerActivities.map((a, i) => (
              <ConfirmedActivityCard
                key={i}
                activity={a}
                activityRow={findRow(a.name, 'partner')}
                side="partner"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Budget Strip                                                       */
/* ------------------------------------------------------------------ */

function BudgetStrip({
  trip,
  activities,
}: {
  trip: TripRow
  activities: ActivityRow[]
}) {
  const itinerary = trip.itinerary
  const bookedCount = activities.filter((a) => a.status === 'booked').length
  const confirmedCount = activities.filter(
    (a) => a.status === 'confirmed' || a.status === 'booked',
  ).length

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        label="Per golfer"
        value={`$${itinerary.estimatedBudgetPerGolfer}`}
      />
      {trip.partners_count > 0 && (
        <MetricCard
          label="Per partner"
          value={`$${itinerary.estimatedBudgetPerPartner}`}
        />
      )}
      <MetricCard
        label="Booked"
        value={`${bookedCount} of ${confirmedCount}`}
      />
      <MetricCard
        label="Still to book"
        value={`${confirmedCount - bookedCount}`}
      />
    </div>
  )
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-5">
      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-3xl font-display font-light text-foreground">
        {value}
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Countdown                                                          */
/* ------------------------------------------------------------------ */

function Countdown({ datesStart }: { datesStart: string }) {
  const start = new Date(datesStart)
  const now = new Date()
  const diff = start.getTime() - now.getTime()
  const days = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))

  if (days === 0) return null

  return (
    <div className="flex items-center gap-2 rounded-sm border border-gold/30 bg-gold/5 px-3 py-1.5">
      <Calendar className="h-4 w-4 text-gold" />
      <span className="text-sm font-medium text-gold">
        {days} {days === 1 ? 'day' : 'days'} to go
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Bottom Actions                                                     */
/* ------------------------------------------------------------------ */

function BottomActions({ tripId, tripName, destination }: { tripId: string; tripName: string; destination: string }) {
  const [copied, setCopied] = useState(false)
  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/trip/${tripId}/confirmed`
    : ''

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${tripName} — Confirmed`,
          text: `The trip is locked in! Check the itinerary:`,
          url: shareUrl,
        })
        return
      } catch {
        // Fall through to clipboard
      }
    }
    await navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    toast.success('Link copied!')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={handleShare}
        className="flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground hover:border-gold hover:text-gold"
      >
        {copied ? <Link2 className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
        {copied ? 'Copied' : 'Share with group'}
      </button>
      <a
        href={`/api/trip/${tripId}/calendar`}
        download
        className="flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground hover:border-gold hover:text-gold"
      >
        <Calendar className="h-4 w-4" />
        Add to calendar
      </a>
      <a
        href={`/plan?destination=${encodeURIComponent(destination)}`}
        className="flex items-center gap-2 rounded-sm border border-gold bg-gold/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-gold hover:bg-gold/20"
      >
        Plan the next one <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Confirmed Client                                              */
/* ------------------------------------------------------------------ */

export default function ConfirmedClient({
  trip,
  activities,
}: {
  trip: TripRow
  activities: ActivityRow[]
}) {
  const itinerary = trip.itinerary

  return (
    <div className="mt-8 space-y-12">
      {/* Hero strip */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>{trip.destination}</span>
          <span>
            {trip.dates_start} → {trip.dates_end}
          </span>
          <span>{trip.nights} nights</span>
          <span>{trip.golfers_count} golfers</span>
          {trip.partners_count > 0 && (
            <span>{trip.partners_count} partners</span>
          )}
        </div>
        <Countdown datesStart={trip.dates_start} />
      </div>

      {/* Budget strip */}
      <BudgetStrip trip={trip} activities={activities} />

      {/* Day-by-day itinerary (read only) */}
      <div className="space-y-10">
        {itinerary.days.map((day) => (
          <ConfirmedDaySection
            key={day.dayIndex}
            day={day}
            activityRows={activities}
          />
        ))}
      </div>

      {/* Bottom actions */}
      <BottomActions tripId={trip.id} tripName={trip.name} destination={trip.destination} />
    </div>
  )
}
