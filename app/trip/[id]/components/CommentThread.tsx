'use client'

import { useEffect, useState, useCallback } from 'react'
import { toast } from 'sonner'
import { MessageCircle, Send } from 'lucide-react'
import type { CommentRow } from '@/types/trip'
import { useTripContext } from './TripContext'

type CommentWithParticipant = CommentRow & {
  participant: { name: string; initial: string; color: string }
}

export default function CommentThread({ activityId }: { activityId: string }) {
  const { tripId, participant } = useTripContext()
  const [open, setOpen] = useState(false)
  const [comments, setComments] = useState<CommentWithParticipant[]>([])
  const [text, setText] = useState('')
  const [sending, setSending] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const loadComments = useCallback(async () => {
    const res = await fetch(`/api/comments?activityId=${activityId}`)
    if (res.ok) {
      const { comments: c } = await res.json()
      setComments(c)
    }
    setLoaded(true)
  }, [activityId])

  useEffect(() => {
    if (open && !loaded) {
      loadComments()
    }
  }, [open, loaded, loadComments])

  async function handleSend(e: React.FormEvent) {
    e.preventDefault()
    if (!text.trim() || !participant) return

    setSending(true)
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          activityId,
          tripId,
          participantId: participant.id,
          text: text.trim(),
        }),
      })
      if (res.ok) {
        const { comment } = await res.json()
        setComments((prev) => [...prev, comment])
        setText('')
      }
    } catch {
      toast.error('Could not post comment.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        {comments.length > 0 ? `${comments.length} comments` : 'Comment'}
      </button>

      {open && (
        <div className="mt-3 space-y-3 rounded-lg border border-border bg-bg-3/50 p-3">
          {comments.map((c) => (
            <div key={c.id} className="flex gap-2">
              <div
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-bg"
                style={{ backgroundColor: c.participant.color }}
              >
                {c.participant.initial}
              </div>
              <div>
                <p className="text-xs font-medium text-ink-2">
                  {c.participant.name}
                </p>
                <p className="text-sm text-ink">{c.text}</p>
              </div>
            </div>
          ))}

          {loaded && comments.length === 0 && (
            <p className="text-xs text-ink-muted">No comments yet.</p>
          )}

          {participant && (
            <form onSubmit={handleSend} className="flex gap-2">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a comment…"
                maxLength={500}
                className="h-8 flex-1 rounded-sm border border-border bg-bg-3 px-3 text-sm text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                disabled={sending || !text.trim()}
                className="flex h-8 w-8 items-center justify-center rounded-sm border border-border text-muted-foreground hover:border-gold hover:text-gold disabled:opacity-40"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  )
}
