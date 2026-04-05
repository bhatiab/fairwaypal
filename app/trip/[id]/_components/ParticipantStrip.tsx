'use client'

import type { ParticipantRow } from '@/types/trip'

export default function ParticipantStrip({
  participants,
}: {
  participants: ParticipantRow[]
}) {
  if (participants.length === 0) return null

  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
        {participants.map((p) => (
          <div
            key={p.id}
            title={`${p.name}${p.has_voted ? ' — voted' : p.opened_link ? ' — opened' : ' — not seen'}`}
            className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-bg text-[11px] font-bold text-bg"
            style={{ backgroundColor: p.color }}
          >
            {p.initial}
            {p.has_voted && (
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-bg bg-fairway" />
            )}
          </div>
        ))}
      </div>
      <span className="text-xs text-ink-muted">
        {participants.filter((p) => p.has_voted).length}/{participants.length} voted
      </span>
    </div>
  )
}
