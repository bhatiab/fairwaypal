'use client'

import { Slider } from '@/components/ui/slider'
import { formatBudgetLabel } from '@/types/trip'

export default function StepBudget({
  value,
  onChange,
}: {
  value: number
  onChange: (v: number) => void
}) {
  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow">Step 4</p>
        <h2 className="mt-4 text-4xl font-display font-light italic text-foreground sm:text-5xl">
          What is the budget per round?
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          Be honest — we&apos;ll find the best courses for your number.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-background/60 p-6">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Per round
            </p>
            <p className="mt-2 text-5xl font-display font-light text-foreground">
              ${value}
            </p>
          </div>
          <p className="text-sm font-medium text-primary">
            {formatBudgetLabel(value)}
          </p>
        </div>

        <div className="mt-8 px-1">
          <Slider
            min={50}
            max={350}
            step={25}
            value={[value]}
            onValueChange={(v) => onChange(v[0] ?? 175)}
          />
        </div>

        <div className="mt-4 flex justify-between text-xs uppercase tracking-[0.12em] text-muted-foreground">
          <span>$50</span>
          <span>$150</span>
          <span>$250</span>
          <span>$350+</span>
        </div>
      </div>
    </div>
  )
}
