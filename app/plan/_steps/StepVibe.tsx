'use client'

import type { Vibe } from '@/types/trip'

const vibes: Array<{ value: Vibe; label: string; detail: string }> = [
  {
    value: 'serious-golf',
    label: 'Serious golf',
    detail:
      'Early tee times, championship courses, and a schedule that protects the rounds.',
  },
  {
    value: 'full-send',
    label: 'Full send',
    detail:
      'Golf is important, but nightlife and big shared moments get real weight.',
  },
  {
    value: 'mixed',
    label: 'Mixed',
    detail:
      'Strong golf, enough breathing room, and shared plans that feel intentional.',
  },
]

export default function StepVibe({
  value,
  onChange,
}: {
  value: Vibe
  onChange: (v: Vibe) => void
}) {
  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow">Step 5</p>
        <h2 className="mt-4 text-4xl font-display font-light italic text-foreground sm:text-5xl">
          What is the vibe?
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          This shapes the balance between golf, downtime, and group moments.
        </p>
      </div>

      <div className="grid gap-4">
        {vibes.map((v) => {
          const active = value === v.value
          return (
            <button
              key={v.value}
              type="button"
              onClick={() => onChange(v.value)}
              className={`rounded-2xl border p-6 text-left transition-colors ${
                active
                  ? 'border-primary bg-primary/10'
                  : 'border-border bg-background/60 hover:border-primary/30 hover:bg-primary/5'
              }`}
            >
              <span className="block text-2xl font-display font-light text-foreground">
                {v.label}
              </span>
              <span className="mt-2 block text-sm leading-7 text-muted-foreground">
                {v.detail}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
