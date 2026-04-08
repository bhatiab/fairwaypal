'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import {
  Users,
  AlertTriangle,
  Lock,
  Send,
  Copy,
  Check,
  Eye,
  EyeOff,
  CheckCircle2,
  X,
} from 'lucide-react'
import type { ActivityRow, VoteRow, ParticipantRow } from '@/types/trip'
import { useTripContext } from './TripContext'

/* ------------------------------------------------------------------ */
/*  Participant Tracker                                                */
/* ------------------------------------------------------------------ */

function ParticipantTracker({
  activities,
}: {
  activities: ActivityRow[]
}) {
  const { tripId, participants, votes } = useTripContext()
  const [nudging, setNudging] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  async function handleNudge(participant: ParticipantRow) {
    setNudging(participant.id)
    try {
      const res = await fetch('/api/nudge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tripId,
          participantId: participant.id,
          nudgeType: 'individual',
        }),
      })
      if (res.ok) {
        const { message } = await res.json()
        await navigator.clipboard.writeText(message)
        setCopiedId(participant.id)
        toast.success(`Nudge for ${participant.name} copied!`)
        setTimeout(() => setCopiedId(null), 3000)
      }
    } catch {
      toast.error('Failed to generate nudge.')
    } finally {
      setNudging(null)
    }
  }

  async function handleGroupNudge() {
    setNudging('group')
    try {
      const res = await fetch('/api/nudge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tripId, nudgeType: 'group' }),
      })
      if (res.ok) {
        const { message } = await res.json()
        await navigator.clipboard.writeText(message)
        toast.success('Group nudge copied to clipboard!')
      }
    } catch {
      toast.error('Failed to generate nudge.')
    } finally {
      setNudging(null)
    }
  }

  function getParticipantVoteCount(participantId: string): number {
    return votes.filter((v) => v.participant_id === participantId).length
  }

  const totalActivities = activities.length
  const nonVoters = participants.filter((p) => {
    const voteCount = getParticipantVoteCount(p.id)
    return voteCount === 0
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-gold" />
          <p className="eyebrow text-gold">Participants</p>
        </div>
        {nonVoters.length > 0 && (
          <button
            type="button"
            onClick={handleGroupNudge}
            disabled={nudging === 'group'}
            className="flex items-center gap-1.5 text-xs text-gold hover:text-gold/80"
          >
            <Send className="h-3 w-3" />
            Nudge all ({nonVoters.length})
          </button>
        )}
      </div>

      <div className="space-y-2">
        {participants.map((p) => {
          const voteCount = getParticipantVoteCount(p.id)
          const hasVoted = voteCount > 0
          const votePct = totalActivities > 0
            ? Math.round((voteCount / totalActivities) * 100)
            : 0

          return (
            <div
              key={p.id}
              className="flex items-center gap-3 rounded-lg border border-border bg-bg-3/50 p-3"
            >
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-bg"
                style={{ backgroundColor: p.color }}
              >
                {p.initial}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-ink truncate">
                    {p.name}
                  </p>
                  <span className="text-xs text-ink-muted capitalize">
                    {p.role}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  {p.opened_link ? (
                    <span className="flex items-center gap-1 text-xs text-ink-2">
                      <Eye className="h-3 w-3" /> Opened
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-ink-muted">
                      <EyeOff className="h-3 w-3" /> Not opened
                    </span>
                  )}
                  <span className="text-xs text-ink-muted">·</span>
                  {hasVoted ? (
                    <span className="text-xs text-emerald-400">
                      {voteCount}/{totalActivities} voted ({votePct}%)
                    </span>
                  ) : (
                    <span className="text-xs text-ink-muted">Not voted</span>
                  )}
                </div>
              </div>
              {!hasVoted && (
                <button
                  type="button"
                  onClick={() => handleNudge(p)}
                  disabled={nudging === p.id}
                  className="flex items-center gap-1 rounded-sm border border-border px-2 py-1 text-xs text-muted-foreground hover:border-gold hover:text-gold"
                >
                  {copiedId === p.id ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  Nudge
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Conflict Queue                                                     */
/* ------------------------------------------------------------------ */

function ConflictQueue({
  activities,
}: {
  activities: ActivityRow[]
}) {
  const { votes, getActivityTally } = useTripContext()

  // Find activities with significant negative votes (2+ downs)
  const conflicts = activities.filter((a) => {
    const tally = getActivityTally(a.id)
    return tally.down >= 2
  }).sort((a, b) => {
    const tallyA = getActivityTally(a.id)
    const tallyB = getActivityTally(b.id)
    return tallyB.down - tallyA.down
  })

  if (conflicts.length === 0) {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-gold" />
          <p className="eyebrow text-gold">Conflicts</p>
        </div>
        <p className="text-sm text-ink-muted">No conflicts yet. Looking good!</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <AlertTriangle className="h-4 w-4 text-amber-400" />
        <p className="eyebrow text-amber-400">
          {conflicts.length} {conflicts.length === 1 ? 'Conflict' : 'Conflicts'}
        </p>
      </div>

      <div className="space-y-2">
        {conflicts.map((a) => {
          const tally = getActivityTally(a.id)
          return (
            <div
              key={a.id}
              className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-ink">{a.name}</p>
                  <p className="text-xs text-ink-muted">
                    {a.day} · {a.time_of_day} · {a.side}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-emerald-400">{tally.up} in</span>
                  <span className="text-red-400">{tally.down} out</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Activity Status Manager (organiser controls)                       */
/* ------------------------------------------------------------------ */

export function ActivityActions({
  activityRow,
  onUpdate,
}: {
  activityRow: ActivityRow
  onUpdate: (updated: ActivityRow) => void
}) {
  const { tripId, isOrganiser } = useTripContext()
  const [loading, setLoading] = useState<string | null>(null)
  const [editMode, setEditMode] = useState(false)
  const [bookingRef, setBookingRef] = useState('')

  if (!isOrganiser) return null

  async function doAction(action: string, extra?: Record<string, unknown>) {
    setLoading(action)
    try {
      const res = await fetch(`/api/trip/${tripId}/activities`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ activityId: activityRow.id, action, ...extra }),
      })
      if (res.ok) {
        const { activity } = await res.json()
        onUpdate(activity)
        toast.success(`Activity ${action === 'confirm' ? 'confirmed' : action === 'book' ? 'booked' : action === 'discuss' ? 'flagged for discussion' : action === 'cancel' ? 'removed' : 'updated'}.`)
      } else {
        toast.error('Action failed.')
      }
    } catch {
      toast.error('Action failed.')
    } finally {
      setLoading(null)
      setEditMode(false)
    }
  }

  const status = activityRow.status

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      {/* Status badge */}
      <StatusBadge status={status} />

      {/* Actions based on current status */}
      {(status === 'proposed' || status === 'in-discussion') && (
        <>
          <OrgButton
            onClick={() => doAction('confirm')}
            loading={loading === 'confirm'}
            icon={<CheckCircle2 className="h-3 w-3" />}
            label="Confirm"
            variant="green"
          />
          <OrgButton
            onClick={() => doAction('discuss')}
            loading={loading === 'discuss'}
            icon={<AlertTriangle className="h-3 w-3" />}
            label="Discuss"
            variant="amber"
          />
          <OrgButton
            onClick={() => doAction('cancel')}
            loading={loading === 'cancel'}
            icon={<X className="h-3 w-3" />}
            label="Remove"
            variant="red"
          />
        </>
      )}

      {status === 'confirmed' && !editMode && (
        <button
          type="button"
          onClick={() => setEditMode(true)}
          className="flex items-center gap-1 rounded-sm border border-border px-2 py-1 text-xs text-muted-foreground hover:border-gold hover:text-gold"
        >
          Mark as booked
        </button>
      )}

      {status === 'confirmed' && editMode && (
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={bookingRef}
            onChange={(e) => setBookingRef(e.target.value)}
            placeholder="Confirmation #"
            className="h-7 w-40 rounded-sm border border-border bg-bg-3 px-2 text-xs text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none"
          />
          <OrgButton
            onClick={() => doAction('book', { bookingRef })}
            loading={loading === 'book'}
            icon={<Check className="h-3 w-3" />}
            label="Book"
            variant="green"
          />
          <button
            type="button"
            onClick={() => setEditMode(false)}
            className="text-xs text-ink-muted hover:text-ink"
          >
            Cancel
          </button>
        </div>
      )}

      {status === 'booked' && activityRow.booking_ref && (
        <span className="text-xs text-emerald-400">
          Ref: {activityRow.booking_ref}
        </span>
      )}
    </div>
  )
}

function OrgButton({
  onClick,
  loading,
  icon,
  label,
  variant,
}: {
  onClick: () => void
  loading: boolean
  icon: React.ReactNode
  label: string
  variant: 'green' | 'amber' | 'red'
}) {
  const colors = {
    green: 'hover:border-emerald-500/30 hover:text-emerald-400',
    amber: 'hover:border-amber-500/30 hover:text-amber-400',
    red: 'hover:border-red-500/30 hover:text-red-400',
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className={`flex items-center gap-1 rounded-sm border border-border px-2 py-1 text-xs text-muted-foreground transition-colors ${colors[variant]} disabled:opacity-40`}
    >
      {icon}
      {loading ? '...' : label}
    </button>
  )
}

export function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    proposed: 'border-border text-ink-muted',
    'in-discussion': 'border-amber-500/30 text-amber-400 bg-amber-500/5',
    confirmed: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5',
    booked: 'border-emerald-500/50 text-emerald-300 bg-emerald-500/10',
    cancelled: 'border-red-500/20 text-red-400/60 bg-red-500/5',
    removed: 'border-border text-ink-dim line-through',
  }

  return (
    <span
      className={`rounded-sm border px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] ${styles[status] || styles.proposed}`}
    >
      {status}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Lock Trip Button                                                   */
/* ------------------------------------------------------------------ */

function LockTripButton() {
  const { tripId } = useTripContext()
  const [locking, setLocking] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  async function handleLock() {
    setLocking(true)
    try {
      const res = await fetch(`/api/trip/${tripId}/lock`, { method: 'POST' })
      if (res.ok) {
        toast.success('Trip locked! Redirecting to confirmed view...')
        // Redirect to confirmed view
        window.location.href = `/trip/${tripId}/confirmed`
      } else {
        const data = await res.json().catch(() => ({}))
        toast.error(data.error === 'already_locked' ? 'Trip is already locked.' : 'Failed to lock trip.')
      }
    } catch {
      toast.error('Failed to lock trip.')
    } finally {
      setLocking(false)
      setShowConfirm(false)
    }
  }

  if (showConfirm) {
    return (
      <div className="rounded-lg border border-gold/30 bg-gold/5 p-4">
        <p className="text-sm font-medium text-ink">
          Lock this trip? Voting will close and the itinerary becomes final.
        </p>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={handleLock}
            disabled={locking}
            className="flex items-center gap-1.5 rounded-sm border border-gold bg-gold/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-gold hover:bg-gold/20 disabled:opacity-40"
          >
            <Lock className="h-3.5 w-3.5" />
            {locking ? 'Locking...' : 'Yes, lock it in'}
          </button>
          <button
            type="button"
            onClick={() => setShowConfirm(false)}
            className="px-4 py-2 text-xs text-ink-muted hover:text-ink"
          >
            Not yet
          </button>
        </div>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setShowConfirm(true)}
      className="flex items-center gap-2 rounded-sm border border-gold bg-gold/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-gold hover:bg-gold/20"
    >
      <Lock className="h-3.5 w-3.5" />
      Lock it in
    </button>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Organiser Dashboard                                           */
/* ------------------------------------------------------------------ */

export default function OrgDashboard({
  activities,
}: {
  activities: ActivityRow[]
}) {
  const { isOrganiser } = useTripContext()

  if (!isOrganiser) return null

  return (
    <div className="space-y-8 rounded-xl border border-gold/20 bg-bg-2 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow text-gold">Organiser Dashboard</p>
          <p className="mt-1 text-sm text-ink-2">
            Only you can see this section.
          </p>
        </div>
        <LockTripButton />
      </div>

      <ParticipantTracker activities={activities} />
      <ConflictQueue activities={activities} />
    </div>
  )
}
