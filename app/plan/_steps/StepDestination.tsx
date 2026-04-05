'use client'

import { Input } from '@/components/ui/input'

const suggestions = [
  { name: 'Scottsdale', region: 'Arizona' },
  { name: 'Myrtle Beach', region: 'South Carolina' },
  { name: 'Bandon Dunes', region: 'Oregon' },
  { name: 'Scotland', region: 'St Andrews area' },
]

export default function StepDestination({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow">Step 1</p>
        <h2 className="mt-4 text-4xl font-display font-light italic text-foreground sm:text-5xl">
          Where are you headed?
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          City, resort, or region.
        </p>
      </div>

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Scottsdale, AZ"
        className="h-16 rounded-2xl border-border bg-background/70 text-lg"
        autoFocus
      />

      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Or pick a popular destination
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {suggestions.map((s) => (
            <button
              key={s.name}
              type="button"
              onClick={() => onChange(s.name)}
              className="rounded-2xl border border-border bg-background/60 px-5 py-4 text-left transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <span className="block font-display text-xl text-foreground">
                {s.name}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {s.region}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
