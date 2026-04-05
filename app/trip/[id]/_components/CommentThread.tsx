'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import type { CommentRow } from '@/types/trip'
import { useTripParticipant } from './TripParticipantProvider'

export default function CommentThread({
  activityId,
  tripId,
  comments,
  sentiment,
  onCommentAdded,
}: {
  activityId: string
  tripId: string
  comments: CommentRow[]
  sentiment?: 'up' | 'down' | null
  onCommentAdded: (comments: CommentRow[]) => void
}) {
  const { participant } = useTripParticipant()
  const [text, setText] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!text.trim() || !participant) return
    setSubmitting(true)

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          activityId,
          tripId,
          participantId: participant.id,
          text: text.trim(),
          sentiment: sentiment ?? null,
        }),
      })

      if (!res.ok) throw new Error()
      const updated = await res.json()
      onCommentAdded(updated)
      setText('')
    } catch {
      toast.error('Could not post comment.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="mt-3 space-y-3 border-t border-border pt-3">
      {comments.map((c) => (
        <div key={c.id} className="flex gap-2">
          <div
            className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-bg"
            style={{ backgroundColor: c.participant_color ?? '#666' }}
          >
            {c.participant_initial ?? '?'}
          </div>
          <div className="min-w-0">
            <p className="text-xs text-ink-muted">
              {c.participant_name}
              {c.sentiment && (
                <span
                  className={`ml-1 ${c.sentiment === 'up' ? 'text-fairway-text' : 'text-destructive'}`}
                >
                  {c.sentiment === 'up' ? 'In' : 'Out'}
                </span>
              )}
            </p>
            <p className="text-sm text-ink-2">{c.text}</p>
          </div>
        </div>
      ))}

      {participant && (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a comment..."
            className="h-8 flex-1 rounded-sm border border-border bg-bg-3 px-3 text-sm text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            disabled={!text.trim() || submitting}
            className="btn-ghost h-8 px-3 text-[10px] disabled:opacity-40"
          >
            Send
          </button>
        </form>
      )}
    </div>
  )
}
