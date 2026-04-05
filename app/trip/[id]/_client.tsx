'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Settings } from 'lucide-react'
import type {
  TripRow,
  ActivityRow,
  ParticipantRow,
  VoteCounts,
  CommentRow,
} from '@/types/trip'
import { useTripPolling } from '@/hooks/useTripPolling'
import TripParticipantProvider, {
  useTripParticipant,
} from './_components/TripParticipantProvider'
import NameGate from './_components/NameGate'
import ShareButton from './_components/ShareButton'
import ParticipantStrip from './_components/ParticipantStrip'
import ActivityCard from './_components/ActivityCard'
import SwapPanel from './_components/SwapPanel'
import EditActivityDialog from './_components/EditActivityDialog'

// --- Email Capture (preserved from original) ---
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
    <div className="mt-12 rounded-sm border border-gold-border bg-gold-dim p-6">
      <p className="text-sm font-semibold text-ink">
        Get a daily summary of votes and conflicts.
      </p>
      <div className="mt-3 flex gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 flex-1 rounded-sm border border-border bg-bg-3 px-3 text-sm text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none"
        />
        <button
          type="button"
          onClick={handleSave}
          disabled={saving || !email.includes('@')}
          className="btn-primary h-10 px-4 disabled:opacity-40"
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
      <button
        type="button"
        onClick={dismiss}
        className="mt-2 text-xs text-ink-muted hover:text-ink"
      >
        Not now
      </button>
    </div>
  )
}

// --- Day Section ---
function DaySection({
  dayLabel,
  dateLabel,
  golfActivities,
  partnerActivities,
  sharedActivities,
  voteMap,
  commentMap,
  onVoteChange,
  onEdit,
  onSwap,
  onDiscuss,
}: {
  dayLabel: string
  dateLabel: string
  golfActivities: ActivityRow[]
  partnerActivities: ActivityRow[]
  sharedActivities: ActivityRow[]
  voteMap: Map<string, VoteCounts>
  commentMap: Map<string, CommentRow[]>
  onVoteChange: (counts: VoteCounts) => void
  onEdit?: (activity: ActivityRow) => void
  onSwap?: (activity: ActivityRow) => void
  onDiscuss?: (activity: ActivityRow) => void
}) {
  const hasPartner = partnerActivities.length > 0

  return (
    <div className="space-y-4">
      <div className="border-b border-border pb-2">
        <p className="text-lg font-display font-light text-ink">{dayLabel}</p>
        <p className="text-sm text-ink-muted">{dateLabel}</p>
      </div>

      {/* Shared activities */}
      {sharedActivities.map((a) => (
        <div key={a.id} className="rounded-sm border border-gold-border bg-gold-dim p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
            Shared · {a.time_of_day}
          </p>
          <p className="mt-1 text-sm font-semibold text-ink">{a.name}</p>
          {a.detail && (
            <p className="mt-1 text-sm leading-6 text-ink-2">{a.detail}</p>
          )}
        </div>
      ))}

      {/* Split view */}
      <div className={`grid gap-4 ${hasPartner ? 'md:grid-cols-2' : ''}`}>
        <div className="space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-fairway-text">
            Golf
          </p>
          {golfActivities.map((a) => (
            <ActivityCard
              key={a.id}
              activity={a}
              voteCounts={
                voteMap.get(a.id) ?? {
                  activityId: a.id,
                  up: 0,
                  down: 0,
                  myVote: null,
                }
              }
              comments={commentMap.get(a.id) ?? []}
              onVoteChange={onVoteChange}
              onEdit={onEdit}
              onSwap={onSwap}
              onDiscuss={onDiscuss}
            />
          ))}
        </div>

        {hasPartner && (
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-partner-text">
              Partners
            </p>
            {partnerActivities.map((a) => (
              <ActivityCard
                key={a.id}
                activity={a}
                voteCounts={
                  voteMap.get(a.id) ?? {
                    activityId: a.id,
                    up: 0,
                    down: 0,
                    myVote: null,
                  }
                }
                comments={commentMap.get(a.id) ?? []}
                onVoteChange={onVoteChange}
                onEdit={onEdit}
                onSwap={onSwap}
                onDiscuss={onDiscuss}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// --- Trip Content (inside participant provider) ---
function TripContent({
  trip,
  initialActivities,
  initialParticipants,
}: {
  trip: TripRow
  initialActivities: ActivityRow[]
  initialParticipants: ParticipantRow[]
}) {
  const router = useRouter()
  const { participant, isOrganiser } = useTripParticipant()
  const { data: liveData } = useTripPolling(trip.id, participant?.id ?? null)

  // Redirect to confirmed view if trip is locked
  useEffect(() => {
    if (trip.status === 'locked' || trip.status === 'completed') {
      router.replace(`/trip/${trip.id}/confirmed`)
    }
  }, [trip.status, trip.id, router])

  const activities = liveData?.activities ?? initialActivities
  const participants = liveData?.participants ?? initialParticipants
  const [editActivity, setEditActivity] = useState<ActivityRow | null>(null)
  const [swapActivity, setSwapActivity] = useState<ActivityRow | null>(null)

  // Build vote and comment maps
  const voteMap = useMemo(() => {
    const map = new Map<string, VoteCounts>()
    for (const v of liveData?.votes ?? []) {
      map.set(v.activityId, v)
    }
    return map
  }, [liveData?.votes])

  const commentMap = useMemo(() => {
    const map = new Map<string, CommentRow[]>()
    for (const c of liveData?.comments ?? []) {
      const list = map.get(c.activity_id) ?? []
      list.push(c)
      map.set(c.activity_id, list)
    }
    return map
  }, [liveData?.comments])

  // Group activities by day
  const days = useMemo(() => {
    const dayMap = new Map<
      number,
      {
        dayLabel: string
        dateLabel: string
        golf: ActivityRow[]
        partner: ActivityRow[]
        shared: ActivityRow[]
      }
    >()

    for (const a of activities) {
      if (!dayMap.has(a.day_index)) {
        dayMap.set(a.day_index, {
          dayLabel: a.day ?? `Day ${a.day_index + 1}`,
          dateLabel: '',
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

    // Fill date labels from itinerary if available
    for (const itDay of trip.itinerary.days) {
      const day = dayMap.get(itDay.dayIndex)
      if (day) day.dateLabel = itDay.dateLabel
    }

    return [...dayMap.entries()]
      .sort(([a], [b]) => a - b)
      .map(([, v]) => v)
  }, [activities, trip.itinerary.days])

  function handleVoteChange(counts: VoteCounts) {
    // The ActivityCard handles its own optimistic state.
    // The polling will pick up the server state on next tick.
  }

  async function handleDiscuss(activity: ActivityRow) {
    const message = prompt('Add a message to start the discussion:')
    if (!message) return

    const organiserUuid = localStorage.getItem('fairwaypal_organiser_uuid')
    if (!organiserUuid) return

    try {
      await fetch(`/api/trip/${trip.id}/activity/${activity.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'discuss',
          organiserUuid,
          discussMessage: message,
        }),
      })
      toast.success('Marked for discussion')
    } catch {
      toast.error('Could not start discussion.')
    }
  }

  const organiserUuid = typeof window !== 'undefined'
    ? localStorage.getItem('fairwaypal_organiser_uuid') ?? ''
    : ''

  return (
    <div className="mt-8 space-y-10">
      {/* Controls bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <ParticipantStrip participants={participants} />
        {isOrganiser && (
          <div className="flex items-center gap-2">
            <a
              href={`/organiser/${trip.id}`}
              className="btn-ghost flex items-center gap-2"
            >
              <Settings className="h-4 w-4" />
              Dashboard
            </a>
            <ShareButton trip={trip} />
          </div>
        )}
      </div>

      {/* Hero strip */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
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
        {days.map((day, i) => (
          <DaySection
            key={i}
            dayLabel={day.dayLabel}
            dateLabel={day.dateLabel}
            golfActivities={day.golf}
            partnerActivities={day.partner}
            sharedActivities={day.shared}
            voteMap={voteMap}
            commentMap={commentMap}
            onVoteChange={handleVoteChange}
            onEdit={isOrganiser ? setEditActivity : undefined}
            onSwap={isOrganiser ? setSwapActivity : undefined}
            onDiscuss={isOrganiser ? handleDiscuss : undefined}
          />
        ))}
      </div>

      {/* Organiser modals */}
      {editActivity && (
        <EditActivityDialog
          activity={editActivity}
          tripId={trip.id}
          organiserUuid={organiserUuid}
          onSaved={() => {}}
          onClose={() => setEditActivity(null)}
        />
      )}
      {swapActivity && (
        <SwapPanel
          activity={swapActivity}
          tripId={trip.id}
          organiserUuid={organiserUuid}
          onSwapped={() => {}}
          onClose={() => setSwapActivity(null)}
        />
      )}

      {/* Budget summary */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-sm border border-border bg-bg-2 p-5">
          <p className="eyebrow">Estimated per golfer</p>
          <p className="mt-2 text-3xl font-display font-light text-ink">
            ${trip.itinerary.estimatedBudgetPerGolfer}
          </p>
        </div>
        {trip.partners_count > 0 && (
          <div className="rounded-sm border border-border bg-bg-2 p-5">
            <p className="eyebrow">Estimated per partner</p>
            <p className="mt-2 text-3xl font-display font-light text-ink">
              ${trip.itinerary.estimatedBudgetPerPartner}
            </p>
          </div>
        )}
      </div>

      {/* Email capture */}
      {isOrganiser && <EmailCapture tripId={trip.id} />}
    </div>
  )
}

// --- Top-level export ---
export default function TripClient({
  trip,
  initialActivities,
  initialParticipants,
}: {
  trip: TripRow
  initialActivities: ActivityRow[]
  initialParticipants: ParticipantRow[]
}) {
  return (
    <TripParticipantProvider trip={trip}>
      <NameGate trip={trip} />
      <TripContent
        trip={trip}
        initialActivities={initialActivities}
        initialParticipants={initialParticipants}
      />
    </TripParticipantProvider>
  )
}
