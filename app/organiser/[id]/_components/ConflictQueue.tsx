'use client'

import { ThumbsDown } from 'lucide-react'
import type { ActivityRow } from '@/types/trip'

type ConflictActivity = ActivityRow & { downVotes: number; upVotes: number }

export default function ConflictQueue({
  activities,
  votesByActivity,
  onConfirm,
  onRemove,
}: {
  activities: ActivityRow[]
  votesByActivity: Map<string, { up: number; down: number }>
  onConfirm: (id: string) => void
  onRemove: (id: string) => void
}) {
  // Find activities with at least 1 downvote, sorted by most contentious
  const conflicts: ConflictActivity[] = activities
    .filter((a) => a.status === 'proposed' || a.status === 'in-discussion')
    .map((a) => {
      const votes = votesByActivity.get(a.id) ?? { up: 0, down: 0 }
      return { ...a, downVotes: votes.down, upVotes: votes.up }
    })
    .filter((a) => a.downVotes > 0)
    .sort((a, b) => b.downVotes - a.downVotes)

  if (conflicts.length === 0) {
    return (
      <div className="rounded-sm border border-border bg-bg-2 p-5">
        <p className="eyebrow">Conflicts</p>
        <p className="mt-3 text-sm text-ink-muted">
          No conflicts yet. Activities with Out votes will appear here.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-sm border border-border bg-bg-2 p-5">
      <p className="eyebrow">Conflicts</p>
      <p className="mt-1 text-sm text-ink-muted">
        {conflicts.length} {conflicts.length === 1 ? 'activity' : 'activities'}{' '}
        with pushback
      </p>

      <div className="mt-4 space-y-3">
        {conflicts.map((a) => (
          <div
            key={a.id}
            className="rounded-sm border border-destructive/20 bg-[rgba(220,60,60,0.04)] p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-ink">{a.name}</p>
                <p className="mt-0.5 text-xs text-ink-muted capitalize">
                  {a.side} · {a.day} · {a.time_of_day}
                </p>
              </div>
              <div className="flex items-center gap-1 text-destructive">
                <ThumbsDown className="h-3 w-3" />
                <span className="text-xs font-bold">{a.downVotes}</span>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={() => onConfirm(a.id)}
                className="btn-ghost h-7 px-3 text-[9px]"
              >
                Confirm anyway
              </button>
              <button
                type="button"
                onClick={() => onRemove(a.id)}
                className="btn-ghost h-7 px-3 text-[9px] text-destructive"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
