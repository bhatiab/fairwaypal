'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { ChevronLeft } from 'lucide-react'
import type { IntakeData, Vibe } from '@/types/trip'
import { calculateNights } from '@/types/trip'
import StepDestination from './_steps/StepDestination'
import StepDates from './_steps/StepDates'
import StepGroup from './_steps/StepGroup'
import StepBudget from './_steps/StepBudget'
import StepVibe from './_steps/StepVibe'
import GeneratingAnimation from './_steps/GeneratingAnimation'

type WizardState = IntakeData & { vibe: Vibe }

const TOTAL_STEPS = 5

const defaultState: WizardState = {
  destination: '',
  datesStart: '',
  datesEnd: '',
  golfers: 4,
  partners: 0,
  budgetPerRound: 175,
  vibe: 'mixed',
}

export default function PlanClient() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)
  const [state, setState] = useState<WizardState>(defaultState)

  const nights = useMemo(
    () => calculateNights(state.datesStart, state.datesEnd),
    [state.datesStart, state.datesEnd],
  )

  const stepValid = useMemo(() => {
    switch (step) {
      case 0:
        return state.destination.trim().length > 1
      case 1:
        return Boolean(state.datesStart && state.datesEnd && nights > 0)
      case 2:
        return state.golfers >= 2 && state.partners >= 0
      case 3:
        return state.budgetPerRound >= 50
      case 4:
        return Boolean(state.vibe)
      default:
        return false
    }
  }, [nights, state, step])

  function update<K extends keyof WizardState>(key: K, value: WizardState[K]) {
    setState((s) => ({ ...s, [key]: value }))
  }

  function goNext() {
    if (!stepValid) return
    if (step === TOTAL_STEPS - 1) {
      handleSubmit()
      return
    }
    setStep((s) => s + 1)
  }

  function goBack() {
    if (step === 0) return
    setStep((s) => s - 1)
  }

  async function handleSubmit() {
    setIsGenerating(true)

    const organiserUuid =
      localStorage.getItem('fairwaypal_organiser_uuid') ?? crypto.randomUUID()
    localStorage.setItem('fairwaypal_organiser_uuid', organiserUuid)

    // Also store as device UUID for name gate auto-connect
    localStorage.setItem('fairwaypal_device_uuid', organiserUuid)

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...state, organiserUuid }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Generation failed')
      }

      // Read SSE stream
      const reader = res.body?.getReader()
      if (!reader) throw new Error('No response stream')

      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const payload = JSON.parse(line.slice(6))

          if (payload.type === 'done') {
            router.push(`/trip/${payload.tripId}`)
            return
          }
          if (payload.type === 'error') {
            throw new Error(payload.error || 'Generation failed')
          }
          // payload.type === 'partial' — streaming progress (animation handles UX)
        }
      }

      throw new Error('Stream ended without result')
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : 'Something went wrong. Try again.',
      )
      setIsGenerating(false)
    }
  }

  if (isGenerating) {
    return <GeneratingAnimation destination={state.destination} />
  }

  function renderStep() {
    switch (step) {
      case 0:
        return (
          <StepDestination
            value={state.destination}
            onChange={(v) => update('destination', v)}
          />
        )
      case 1:
        return (
          <StepDates
            start={state.datesStart}
            end={state.datesEnd}
            onChange={(field, value) => update(field, value)}
          />
        )
      case 2:
        return (
          <StepGroup
            golfers={state.golfers}
            partners={state.partners}
            onChange={(field, value) => update(field, value)}
          />
        )
      case 3:
        return (
          <StepBudget
            value={state.budgetPerRound}
            onChange={(v) => update('budgetPerRound', v)}
          />
        )
      case 4:
        return (
          <StepVibe
            value={state.vibe}
            onChange={(v) => update('vibe', v)}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col">
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 py-6">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              i <= step ? 'bg-primary' : 'bg-border'
            }`}
          />
        ))}
      </div>

      {/* Back button */}
      <div className="mx-auto w-full max-w-xl px-5">
        {step > 0 && (
          <button
            type="button"
            onClick={goBack}
            className="mb-4 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
        )}
      </div>

      {/* Step content */}
      <div className="mx-auto w-full max-w-xl flex-1 px-5">
        {renderStep()}
      </div>

      {/* Continue button */}
      <div className="mx-auto w-full max-w-xl px-5 pb-10 pt-6">
        <button
          type="button"
          onClick={goNext}
          disabled={!stepValid}
          className="primary-link w-full justify-center disabled:pointer-events-none disabled:opacity-40"
        >
          {step === TOTAL_STEPS - 1 ? 'Build my trip' : 'Continue'}
        </button>
      </div>
    </div>
  )
}
