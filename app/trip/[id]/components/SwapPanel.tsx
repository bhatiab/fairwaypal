'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { RefreshCw, Check, X } from 'lucide-react'
import type { ActivityRow } from '@/types/trip'
import { useTripContext } from './TripContext'

type Alternative = {
  name: string
  detail: string
  estimatedPrice: number
  priceUnit: string
  rationale: string
}

type ConstraintReason = 'too-expensive' | 'wrong-time' | 'wrong-day' | 'not-right'

const CONSTRAINTS: { value: ConstraintReason; label: string }[] = [
  { value: 'too-expensive', label: 'Too expensive' },
  { value: 'wrong-time', label: 'Wrong time' },
  { value: 'wrong-day', label: 'Wrong day' },
  { value: 'not-right', label: 'Not right for us' },
]

export default function SwapPanel({
  activityRow,
  onSwap,
  onClose,
}: {
  activityRow: ActivityRow
  onSwap: (updated: ActivityRow) => void
  onClose: () => void
}) {
  const { tripId } = useTripContext()
  const [step, setStep] = useState<'constraint' | 'alternatives'>('constraint')
  const [constraint, setConstraint] = useState<ConstraintReason | null>(null)
  const [alternatives, setAlternatives] = useState<Alternative[]>([])
  const [loading, setLoading] = useState(false)
  const [selecting, setSelecting] = useState<number | null>(null)

  async function handleGenerate(reason: ConstraintReason) {
    setConstraint(reason)
    setLoading(true)
    try {
      const res = await fetch('/api/generate-alternatives', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          activityId: activityRow.id,
          tripId,
          constraintReason: reason,
        }),
      })
      if (!res.ok) throw new Error('Failed to generate alternatives')
      const data = await res.json()
      setAlternatives(data.alternatives)
      setStep('alternatives')
    } catch {
      toast.error('Could not generate alternatives. Try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleSelect(index: number) {
    const alt = alternatives[index]
    setSelecting(index)
    try {
      const res = await fetch(`/api/trip/${tripId}/activities`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          activityId: activityRow.id,
          action: 'edit',
          name: alt.name,
          detail: alt.detail,
          price: alt.estimatedPrice,
          priceUnit: alt.priceUnit,
        }),
      })
      if (!res.ok) throw new Error('Failed to swap activity')
      const { activity } = await res.json()
      onSwap(activity)
      toast.success(`Swapped to "${alt.name}"`)
      onClose()
    } catch {
      toast.error('Swap failed. Try again.')
    } finally {
      setSelecting(null)
    }
  }

  return (
    <div className="mt-3 rounded-lg border border-gold/20 bg-bg-2 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4 text-gold" />
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-gold">
            Swap activity
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-ink-muted hover:text-ink"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {step === 'constraint' && (
        <div className="mt-3 space-y-2">
          <p className="text-sm text-ink-2">
            What&rsquo;s wrong with &ldquo;{activityRow.name}&rdquo;?
          </p>
          <div className="flex flex-wrap gap-2">
            {CONSTRAINTS.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => handleGenerate(c.value)}
                disabled={loading}
                className="rounded-sm border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-gold hover:text-gold disabled:opacity-40"
              >
                {loading && constraint === c.value ? 'Generating...' : c.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'alternatives' && (
        <div className="mt-3 space-y-3">
          <p className="text-xs text-ink-muted">
            Pick a replacement for &ldquo;{activityRow.name}&rdquo;:
          </p>
          {alternatives.map((alt, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-border bg-bg-3/50 p-3"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-ink">{alt.name}</p>
                <p className="mt-1 text-xs text-ink-2">{alt.detail}</p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-xs text-primary">
                    ~${alt.estimatedPrice} {alt.priceUnit}
                  </span>
                  <span className="text-xs italic text-ink-muted">
                    {alt.rationale}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleSelect(i)}
                disabled={selecting !== null}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-border text-muted-foreground hover:border-emerald-500/30 hover:text-emerald-400 disabled:opacity-40"
              >
                {selecting === i ? (
                  <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Check className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setStep('constraint')}
            className="text-xs text-ink-muted hover:text-ink"
          >
            Try a different reason
          </button>
        </div>
      )}
    </div>
  )
}
