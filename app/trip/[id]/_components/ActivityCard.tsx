'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { ThumbsUp, ThumbsDown, MessageSquare, ChevronDown, Pencil, ArrowRightLeft, MessageCircle } from 'lucide-react'
import type { ActivityRow, CommentRow, VoteCounts } from '@/types/trip'
import { useTripParticipant } from './TripParticipantProvider'
import VoteTally from './VoteTally'
import CommentThread from './CommentThread'

export default function ActivityCard({
  activity,
  voteCounts,
  comments: initialComments,
  onVoteChange,
  onEdit,
  onSwap,
  onDiscuss,
}: {
  activity: ActivityRow
  voteCounts: VoteCounts
  comments: CommentRow[]
  onVoteChange: (counts: VoteCounts) => void
  onEdit?: (activity: ActivityRow) => void
  onSwap?: (activity: ActivityRow) => void
  onDiscuss?: (activity: ActivityRow) => void
}) {
  const { participant, isOrganiser } = useTripParticipant()
  const [localVotes, setLocalVotes] = useState(voteCounts)
  const [comments, setComments] = useState(initialComments)
  const [showComments, setShowComments] = useState(false)
  const [showRationale, setShowRationale] = useState(false)

  const accentClass =
    activity.side === 'golf'
      ? 'border-l-fairway'
      : activity.side === 'partner'
        ? 'border-l-partner'
        : 'border-l-gold'

  const votedUp = localVotes.myVote === 'up'
  const votedDown = localVotes.myVote === 'down'

  let cardBg = 'bg-bg-2'
  if (votedUp) cardBg = 'bg-fairway-dim'
  if (votedDown) cardBg = 'bg-[rgba(220,60,60,0.06)]'

  let cardBorder = 'border-border'
  if (votedUp) cardBorder = 'border-fairway'
  if (votedDown) cardBorder = 'border-destructive/50'

  async function handleVote(direction: 'up' | 'down') {
    if (!participant) return

    const isToggleOff = localVotes.myVote === direction
    const prevVotes = { ...localVotes }

    // Optimistic update
    if (isToggleOff) {
      setLocalVotes({
        ...localVotes,
        [direction]: localVotes[direction] - 1,
        myVote: null,
      })
    } else {
      const adjusted = { ...localVotes }
      // Remove previous vote count if switching
      if (localVotes.myVote) {
        adjusted[localVotes.myVote]--
      }
      adjusted[direction]++
      adjusted.myVote = direction
      setLocalVotes(adjusted)

      // Auto-open comments on "Out" vote
      if (direction === 'down') setShowComments(true)
    }

    try {
      let res: Response
      if (isToggleOff) {
        res = await fetch(
          `/api/vote?activityId=${activity.id}&participantId=${participant.id}`,
          { method: 'DELETE' },
        )
      } else {
        res = await fetch('/api/vote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            activityId: activity.id,
            tripId: activity.trip_id,
            direction,
            participantId: participant.id,
          }),
        })
      }

      if (!res.ok) throw new Error()
      const updated = await res.json()
      setLocalVotes(updated)
      onVoteChange(updated)
    } catch {
      // Rollback
      setLocalVotes(prevVotes)
      toast.error('Vote failed. Try again.')
    }
  }

  const price = activity.price ? activity.price / 100 : null

  return (
    <div
      className={`rounded-sm border border-l-2 ${cardBorder} ${accentClass} ${cardBg} p-4 transition-colors`}
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
        {activity.ai_rationale && (
          <button
            type="button"
            onClick={() => setShowRationale(!showRationale)}
            className="flex items-center gap-1 text-[10px] text-ink-muted hover:text-ink"
          >
            Why this pick
            <ChevronDown
              className={`h-3 w-3 transition-transform ${showRationale ? 'rotate-180' : ''}`}
            />
          </button>
        )}
      </div>

      {showRationale && activity.ai_rationale && (
        <p className="mt-2 text-xs italic text-ink-muted">
          {activity.ai_rationale}
        </p>
      )}

      {/* In-discussion indicator */}
      {activity.status === 'in-discussion' && (
        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#d4a017]">
          In discussion
        </p>
      )}

      {/* Organiser controls */}
      {isOrganiser && (onEdit || onSwap || onDiscuss) && (
        <div className="mt-2 flex gap-2 border-t border-border pt-2">
          {onEdit && (
            <button
              type="button"
              onClick={() => onEdit(activity)}
              className="flex items-center gap-1 text-[10px] text-ink-muted hover:text-ink"
            >
              <Pencil className="h-3 w-3" /> Edit
            </button>
          )}
          {onSwap && (
            <button
              type="button"
              onClick={() => onSwap(activity)}
              className="flex items-center gap-1 text-[10px] text-ink-muted hover:text-gold"
            >
              <ArrowRightLeft className="h-3 w-3" /> Swap
            </button>
          )}
          {onDiscuss && activity.status !== 'in-discussion' && (
            <button
              type="button"
              onClick={() => onDiscuss(activity)}
              className="flex items-center gap-1 text-[10px] text-ink-muted hover:text-[#d4a017]"
            >
              <MessageCircle className="h-3 w-3" /> Discuss
            </button>
          )}
        </div>
      )}

      {/* Vote bar */}
      {participant && (
        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleVote('up')}
            className={`flex items-center gap-1 rounded-sm px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] transition-colors ${
              votedUp
                ? 'border border-fairway bg-fairway-dim text-fairway-text'
                : 'border border-border text-ink-muted hover:border-fairway/40 hover:text-ink'
            }`}
          >
            <ThumbsUp className="h-3 w-3" />
            In {localVotes.up > 0 && `· ${localVotes.up}`}
          </button>
          <button
            type="button"
            onClick={() => handleVote('down')}
            className={`flex items-center gap-1 rounded-sm px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] transition-colors ${
              votedDown
                ? 'border border-destructive/50 bg-[rgba(220,60,60,0.06)] text-destructive'
                : 'border border-border text-ink-muted hover:border-destructive/30 hover:text-ink'
            }`}
          >
            <ThumbsDown className="h-3 w-3" />
            Out {localVotes.down > 0 && `· ${localVotes.down}`}
          </button>
          <button
            type="button"
            onClick={() => setShowComments(!showComments)}
            className="ml-auto flex items-center gap-1 text-[10px] text-ink-muted hover:text-ink"
          >
            <MessageSquare className="h-3 w-3" />
            {comments.length > 0 && comments.length}
          </button>
        </div>
      )}

      <VoteTally up={localVotes.up} down={localVotes.down} />

      {showComments && (
        <CommentThread
          activityId={activity.id}
          tripId={activity.trip_id}
          comments={comments}
          sentiment={localVotes.myVote}
          onCommentAdded={setComments}
        />
      )}
    </div>
  )
}
