'use client'

import { useEffect, useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { toast } from 'sonner'
import {
  ChevronDown,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Link2,
} from 'lucide-react'
import type {
  TripRow,
  GeneratedDay,
  Activity,
  ActivityRow,
  VoteDirection,
} from '@/types/trip'
import { useTripContext } from './components/TripContext'
import OrgDashboard, { ActivityActions } from './components/OrgDashboard'
import PushOptIn from './components/PushOptIn'

const CommentThread = dynamic(() => import('./components/CommentThread'), { ssr: false })
const BudgetSummary = dynamic(() => import('./components/BudgetSummary'), { ssr: false })
const EmailCapture = dynamic(() => import('./components/EmailCapture'), { ssr: false })

/* ------------------------------------------------------------------ */
/*  Vote Tally Bar                                                     */
/* ------------------------------------------------------------------ */

function VoteTallyBar({ activityId }: { activityId: string }) {
  const { getActivityTally } = useTripContext()
  const tally = getActivityTally(activityId)
  const total = tally.up + tally.down

  if (total === 0) return null

  const upPct = (tally.up / total) * 100

  return (
    <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-border">
      <div
        className="h-full bg-emerald-500 transition-all duration-300"
        style={{ width: `${upPct}%` }}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Vote Buttons (In / Out)                                            */
/* ------------------------------------------------------------------ */

function VoteButtons({ activityId }: { activityId: string }) {
  const { participant, getActivityTally, castVote, removeVote } = useTripContext()
  const tally = getActivityTally(activityId)

  if (!participant) return null

  function handleVote(direction: VoteDirection) {
    if (tally.myVote === direction) {
      removeVote(activityId)
    } else {
      castVote(activityId, direction)
    }
  }

  return (
    <div className="mt-3 flex items-center gap-2">
      <button
        type="button"
        onClick={() => handleVote('up')}
        className={`flex items-center gap-1.5 rounded-sm border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.08em] transition-colors ${
          tally.myVote === 'up'
            ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400'
            : 'border-border text-muted-foreground hover:border-emerald-500/30 hover:text-emerald-400'
        }`}
      >
        <ThumbsUp className="h-3.5 w-3.5" />
        In{tally.up > 0 && <span>· {tally.up}</span>}
      </button>
      <button
        type="button"
        onClick={() => handleVote('down')}
        className={`flex items-center gap-1.5 rounded-sm border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.08em] transition-colors ${
          tally.myVote === 'down'
            ? 'border-red-500/50 bg-red-500/10 text-red-400'
            : 'border-border text-muted-foreground hover:border-red-500/30 hover:text-red-400'
        }`}
      >
        <ThumbsDown className="h-3.5 w-3.5" />
        Out{tally.down > 0 && <span>· {tally.down}</span>}
      </button>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Activity Card (with voting)                                        */
/* ------------------------------------------------------------------ */

function ActivityCard({
  activity,
  activityRow,
  side,
  onActivityUpdate,
}: {
  activity: Activity
  activityRow?: ActivityRow
  side: 'golf' | 'partner' | 'shared'
  onActivityUpdate?: (updated: ActivityRow) => void
}) {
  const [showRationale, setShowRationale] = useState(false)

  const isCancelled = activityRow?.status === 'cancelled' || activityRow?.status === 'removed'

  const accentClass =
    side === 'golf'
      ? 'border-l-primary'
      : side === 'partner'
        ? 'border-l-partner'
        : 'border-l-gold'

  return (
    <div
      className={`rounded-xl border border-border bg-card/60 p-4 border-l-2 ${accentClass} ${isCancelled ? 'opacity-40' : ''}`}
    >
      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
        {activity.timeOfDay}
      </p>
      <p className={`mt-1 text-base font-semibold text-foreground ${isCancelled ? 'line-through' : ''}`}>
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

      {activityRow && !isCancelled && (
        <>
          <VoteButtons activityId={activityRow.id} />
          <VoteTallyBar activityId={activityRow.id} />
          <CommentThread activityId={activityRow.id} />
        </>
      )}

      {activityRow && onActivityUpdate && !isCancelled && (
        <ActivityActions activityRow={activityRow} onUpdate={onActivityUpdate} />
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Crew Strip                                                         */
/* ------------------------------------------------------------------ */

function CrewStrip() {
  const { participants } = useTripContext()

  if (participants.length === 0) return null

  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
        {participants.map((p) => (
          <div
            key={p.id}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-bg text-xs font-semibold text-bg"
            style={{ backgroundColor: p.color }}
            title={p.name}
          >
            {p.initial}
          </div>
        ))}
      </div>
      <span className="text-sm text-muted-foreground">
        {participants.length} {participants.length === 1 ? 'person' : 'people'} in
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Share Button                                                       */
/* ------------------------------------------------------------------ */

function ShareButton({ tripId, tripName }: { tripId: string; tripName: string }) {
  const [copied, setCopied] = useState(false)
  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/trip/${tripId}`
    : ''

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: tripName,
          text: `Check out this trip: ${tripName}`,
          url: shareUrl,
        })
        return
      } catch {
        // User cancelled or share failed — fall through to clipboard
      }
    }

    await navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    toast.success('Link copied!')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:border-gold hover:text-gold"
    >
      {copied ? <Link2 className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
      {copied ? 'Copied' : 'Share trip'}
    </button>
  )
}

/* ------------------------------------------------------------------ */
/*  Day Section                                                        */
/* ------------------------------------------------------------------ */

function DaySection({
  day,
  activityRows,
  onActivityUpdate,
}: {
  day: GeneratedDay
  activityRows: ActivityRow[]
  onActivityUpdate: (updated: ActivityRow) => void
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
            <ActivityCard
              key={i}
              activity={a}
              activityRow={findRow(a.name, 'shared')}
              side="shared"
              onActivityUpdate={onActivityUpdate}
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
            <ActivityCard
              key={i}
              activity={a}
              activityRow={findRow(a.name, 'golf')}
              side="golf"
              onActivityUpdate={onActivityUpdate}
            />
          ))}
        </div>

        {hasPartner && (
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.12em] text-partner">
              Partners
            </p>
            {day.partnerActivities.map((a, i) => (
              <ActivityCard
                key={i}
                activity={a}
                activityRow={findRow(a.name, 'partner')}
                side="partner"
                onActivityUpdate={onActivityUpdate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Trip Client                                                   */
/* ------------------------------------------------------------------ */

export default function TripClient({
  trip,
  activities: initialActivities,
}: {
  trip: TripRow
  activities: ActivityRow[]
}) {
  const itinerary = trip.itinerary
  const [activities, setActivities] = useState(initialActivities)

  const handleActivityUpdate = useCallback((updated: ActivityRow) => {
    setActivities((prev) =>
      prev.map((a) => (a.id === updated.id ? updated : a)),
    )
  }, [])

  return (
    <div className="mt-8 space-y-12">
      {/* Hero strip */}
      <div className="flex flex-wrap items-center justify-between gap-4">
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
        <div className="flex items-center gap-2">
          <PushOptIn />
          <ShareButton tripId={trip.id} tripName={trip.name} />
        </div>
      </div>

      {/* Crew strip */}
      <CrewStrip />

      {/* Organiser Dashboard */}
      <OrgDashboard activities={activities} />

      {/* Day-by-day itinerary */}
      <div className="space-y-10">
        {itinerary.days.map((day) => (
          <DaySection
            key={day.dayIndex}
            day={day}
            activityRows={activities}
            onActivityUpdate={handleActivityUpdate}
          />
        ))}
      </div>

      {/* Budget summary (lazy-loaded — below fold) */}
      <BudgetSummary activities={activities} trip={trip} />

      {/* Email capture (lazy-loaded — below fold, organiser only) */}
      <EmailCapture tripId={trip.id} />
    </div>
  )
}
