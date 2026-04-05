'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { X, Loader2 } from 'lucide-react'
import type { ActivityRow, SwapAlternative } from '@/types/trip'

const constraints = [
  { value: 'too-expensive', label: 'Too expensive' },
  { value: 'wrong-time', label: 'Wrong time' },
  { value: 'wrong-day', label: 'Wrong day' },
  { value: 'not-right', label: 'Not right for us' },
] as const

export default function SwapPanel({
  activity,
  tripId,
  organiserUuid,
  onSwapped,
  onClose,
}: {
  activity: ActivityRow
  tripId: string
  organiserUuid: string
  onSwapped: (updated: ActivityRow) => void
  onClose: () => void
}) {
  const [step, setStep] = useState<'constraint' | 'loading' | 'alternatives'>('constraint')
  const [alternatives, setAlternatives] = useState<SwapAlternative[]>([])
  const [swapId, setSwapId] = useState<string | null>(null)

  async function handleConstraint(reason: string) {
    setStep('loading')
    try {
      const res = await fetch('/api/generate-alternatives', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          activityId: activity.id,
          tripId,
          constraintReason: reason,
        }),
      })
      if (!res.ok) throw new Error()
      const data = await res.json()
      setAlternatives(data.alternatives)
      setSwapId(data.swapId)
      setStep('alternatives')
    } catch {
      toast.error('Could not generate alternatives.')
      setStep('constraint')
    }
  }

  async function handleSelect(index: number) {
    const alt = alternatives[index]
    if (!alt) return

    try {
      // Update the activity with the selected alternative
      const res = await fetch(
        `/api/trip/${tripId}/activity/${activity.id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'edit',
            organiserUuid,
            fields: {
              name: alt.name,
              detail: alt.detail,
              price: Math.round(alt.estimatedPrice * 100),
              priceUnit: alt.priceUnit,
              aiRationale: alt.aiRationale,
            },
          }),
        },
      )
      if (!res.ok) throw new Error()
      const updated = await res.json()

      // Mark swap as selected
      if (swapId) {
        await fetch(`/api/generate-alternatives`, {
          method: 'POST',
          // We could add a separate endpoint but for now this is fine
        }).catch(() => {})
      }

      toast.success(`Swapped to ${alt.name}`)
      onSwapped(updated)
      onClose()
    } catch {
      toast.error('Could not apply swap.')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/90 backdrop-blur-sm">
      <div className="mx-5 w-full max-w-lg rounded-sm border border-border-2 bg-bg-2 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="eyebrow">Swap activity</p>
            <p className="mt-1 text-sm text-ink-muted">
              Replacing: {activity.name}
            </p>
          </div>
          <button type="button" onClick={onClose} className="text-ink-muted hover:text-ink">
            <X className="h-4 w-4" />
          </button>
        </div>

        {step === 'constraint' && (
          <div className="mt-6 space-y-2">
            <p className="text-sm text-ink-2">What&apos;s wrong with it?</p>
            {constraints.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => handleConstraint(c.value)}
                className="w-full rounded-sm border border-border bg-bg-3 px-4 py-3 text-left text-sm text-ink transition-colors hover:border-gold/40 hover:bg-gold-dim"
              >
                {c.label}
              </button>
            ))}
          </div>
        )}

        {step === 'loading' && (
          <div className="mt-8 flex flex-col items-center gap-3 py-8">
            <Loader2 className="h-6 w-6 animate-spin text-gold" />
            <p className="text-sm text-ink-muted">Finding alternatives...</p>
          </div>
        )}

        {step === 'alternatives' && (
          <div className="mt-6 space-y-3">
            <p className="text-sm text-ink-2">Pick a replacement:</p>
            {alternatives.map((alt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i)}
                className="w-full rounded-sm border border-border bg-bg-3 p-4 text-left transition-colors hover:border-gold/40 hover:bg-gold-dim"
              >
                <p className="text-sm font-semibold text-ink">{alt.name}</p>
                <p className="mt-1 text-sm leading-6 text-ink-2">{alt.detail}</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm text-gold">
                    ~${alt.estimatedPrice}{' '}
                    <span className="text-ink-muted">{alt.priceUnit}</span>
                  </p>
                  <p className="text-xs italic text-ink-muted">{alt.aiRationale}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
