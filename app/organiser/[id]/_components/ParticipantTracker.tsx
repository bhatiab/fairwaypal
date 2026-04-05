'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { toast } from 'sonner'
import type { ParticipantRow } from '@/types/trip'

export default function ParticipantTracker({
  participants,
  tripId,
}: {
  participants: ParticipantRow[]
  tripId: string
}) {
  const nonVoters = participants.filter((p) => !p.has_voted)

  async function handleNudge(participantId?: string) {
    try {
      const res = await fetch('/api/nudge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tripId,
          participantId,
          nudgeType: participantId ? 'individual' : 'group',
        }),
      })
      if (!res.ok) throw new Error()
      const { whatsappUrl } = await res.json()
      window.open(whatsappUrl, '_blank')
    } catch {
      toast.error('Could not generate nudge message.')
    }
  }

  return (
    <div className="rounded-sm border border-border bg-bg-2 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow">Participants</p>
          <p className="mt-1 text-sm text-ink-muted">
            {participants.filter((p) => p.has_voted).length} of{' '}
            {participants.length} voted
          </p>
        </div>
        {nonVoters.length > 0 && (
          <button
            type="button"
            onClick={() => handleNudge()}
            className="btn-ghost flex items-center gap-1.5 text-[9px]"
          >
            <MessageCircle className="h-3 w-3" />
            Nudge all ({nonVoters.length})
          </button>
        )}
      </div>

      <div className="mt-4 space-y-2">
        {participants.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-3 rounded-sm border border-border bg-bg-3 px-4 py-3"
          >
            <div
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-bg"
              style={{ backgroundColor: p.color }}
            >
              {p.initial}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink">{p.name}</p>
              <p className="text-xs text-ink-muted capitalize">{p.role}</p>
            </div>
            <div className="flex items-center gap-2">
              {p.has_voted ? (
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-fairway-text">
                  Voted
                </span>
              ) : (
                <>
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-muted">
                    {p.opened_link ? 'Opened' : 'Not seen'}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleNudge(p.id)}
                    className="text-ink-muted hover:text-gold"
                    title={`Nudge ${p.name}`}
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
