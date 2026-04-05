'use client'

const groups = [
  {
    key: 'golfers' as const,
    label: 'Golfers',
    detail: 'Minimum 2 to make it a trip.',
    min: 2,
  },
  {
    key: 'partners' as const,
    label: 'Partners joining',
    detail: 'Zero is valid — golf-only trip.',
    min: 0,
  },
]

export default function StepGroup({
  golfers,
  partners,
  onChange,
}: {
  golfers: number
  partners: number
  onChange: (field: 'golfers' | 'partners', value: number) => void
}) {
  const values = { golfers, partners }

  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow">Step 3</p>
        <h2 className="mt-4 text-4xl font-display font-light italic text-foreground sm:text-5xl">
          Who is coming?
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          How many golfers? Any partners joining?
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.key}
            className="rounded-2xl border border-border bg-background/60 p-6"
          >
            <p className="text-sm font-semibold text-foreground">{g.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{g.detail}</p>
            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={() =>
                  onChange(g.key, Math.max(g.min, values[g.key] - 1))
                }
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-xl text-foreground transition-colors hover:bg-primary/10"
              >
                -
              </button>
              <span className="text-5xl font-display font-light text-foreground">
                {values[g.key]}
              </span>
              <button
                type="button"
                onClick={() => onChange(g.key, values[g.key] + 1)}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-xl text-foreground transition-colors hover:bg-primary/10"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
