'use client'

import type { ParticipantRow } from '@/types/trip'

export default function ParticipantTracker({
  participants,
}: {
  participants: ParticipantRow[]
}) {
  return (
    <div className="rounded-sm border border-border bg-bg-2 p-5">
      <p className="eyebrow">Participants</p>
      <p className="mt-1 text-sm text-ink-muted">
        {participants.filter((p) => p.has_voted).length} of{' '}
        {participants.length} voted
      </p>

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
              ) : p.opened_link ? (
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-gold">
                  Opened
                </span>
              ) : (
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-muted">
                  Not seen
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
