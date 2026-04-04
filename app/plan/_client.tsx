'use client'

import { useMemo, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'

type Vibe = 'serious-golf' | 'full-send' | 'mixed'

type IntakeState = {
  destination: string
  datesStart: string
  datesEnd: string
  golfers: number
  partners: number
  budgetPerRound: number
  vibe: Vibe
}

const defaultState: IntakeState = {
  destination: '',
  datesStart: '',
  datesEnd: '',
  golfers: 4,
  partners: 0,
  budgetPerRound: 175,
  vibe: 'mixed',
}

const suggestionCards = ['Scottsdale', 'Myrtle Beach', 'Bandon Dunes', 'Scotland']

const vibes: Array<{ value: Vibe; label: string; detail: string }> = [
  {
    value: 'serious-golf',
    label: 'Serious golf',
    detail: 'Early tee times, less drift, and a schedule that protects the rounds.',
  },
  {
    value: 'full-send',
    label: 'Full send',
    detail: 'Golf is important, but nightlife and big shared moments get real weight.',
  },
  {
    value: 'mixed',
    label: 'Mixed',
    detail: 'Strong golf, enough breathing room, and shared plans that feel intentional.',
  },
]

function formatBudgetLabel(value: number) {
  if (value <= 100) return 'Budget'
  if (value <= 200) return 'Mid-range'
  if (value <= 300) return 'Premium'
  return 'Bucket list'
}

function calculateNights(start: string, end: string) {
  if (!start || !end) return 0
  const startDate = new Date(start)
  const endDate = new Date(end)
  const diff = endDate.getTime() - startDate.getTime()
  if (Number.isNaN(diff) || diff <= 0) return 0
  return Math.round(diff / (1000 * 60 * 60 * 24))
}

export default function PlanClient() {
  const [step, setStep] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const [state, setState] = useState<IntakeState>(defaultState)

  const nights = useMemo(
    () => calculateNights(state.datesStart, state.datesEnd),
    [state.datesEnd, state.datesStart],
  )

  const progress = ((step + 1) / 5) * 100

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

  function update<K extends keyof IntakeState>(key: K, value: IntakeState[K]) {
    setState((current) => ({ ...current, [key]: value }))
  }

  function changeCount(key: 'golfers' | 'partners', delta: number) {
    setState((current) => {
      const nextValue = current[key] + delta
      const min = key === 'golfers' ? 2 : 0
      return {
        ...current,
        [key]: Math.max(min, nextValue),
      }
    })
  }

  function nextStep() {
    if (!stepValid) return
    if (step === 4) {
      setIsGenerating(true)
      window.setTimeout(() => {
        setIsGenerating(false)
        setShowSummary(true)
      }, 1400)
      return
    }
    setStep((current) => current + 1)
  }

  function prevStep() {
    if (showSummary) {
      setShowSummary(false)
      setStep(4)
      return
    }
    setStep((current) => Math.max(0, current - 1))
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
      <aside className="rounded-[2rem] border border-border bg-card/60 p-6 lg:sticky lg:top-28">
        <p className="eyebrow">Progress</p>
        <div className="mt-4 flex gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={index <= step ? 'h-2 flex-1 rounded-full bg-primary' : 'h-2 flex-1 rounded-full bg-muted'}
            />
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{Math.round(progress)}% of the intake framed.</p>

        <div className="mt-8 space-y-3 text-sm text-muted-foreground">
          <div className="rounded-2xl border border-border/80 bg-background/50 p-4">
            <p className="font-semibold text-foreground">Destination</p>
            <p className="mt-1">{state.destination || 'Not picked yet'}</p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-background/50 p-4">
            <p className="font-semibold text-foreground">Dates</p>
            <p className="mt-1">{state.datesStart && state.datesEnd ? `${state.datesStart} to ${state.datesEnd}` : 'Not set yet'}</p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-background/50 p-4">
            <p className="font-semibold text-foreground">Group</p>
            <p className="mt-1">{state.golfers} golfers · {state.partners} partners</p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-background/50 p-4">
            <p className="font-semibold text-foreground">Budget and vibe</p>
            <p className="mt-1">${state.budgetPerRound} per round · {vibes.find((v) => v.value === state.vibe)?.label}</p>
          </div>
        </div>
      </aside>

      <section className="rounded-[2rem] border border-border bg-card/70 p-6 sm:p-8">
        {showSummary ? (
          <div className="space-y-6">
            <p className="eyebrow">Trip Brief</p>
            <h2 className="text-4xl font-display font-light italic text-foreground">Your trip frame is ready for itinerary generation.</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-border/80 bg-background/60 p-5">
                <p className="text-sm font-semibold text-foreground">Trip Inputs</p>
                <dl className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <div>
                    <dt className="text-foreground">Destination</dt>
                    <dd>{state.destination}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground">Dates</dt>
                    <dd>{state.datesStart} to {state.datesEnd} · {nights} nights</dd>
                  </div>
                  <div>
                    <dt className="text-foreground">Group</dt>
                    <dd>{state.golfers} golfers and {state.partners} partners</dd>
                  </div>
                  <div>
                    <dt className="text-foreground">Budget</dt>
                    <dd>${state.budgetPerRound} per round · {formatBudgetLabel(state.budgetPerRound)}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground">Vibe</dt>
                    <dd>{vibes.find((v) => v.value === state.vibe)?.label}</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-3xl border border-primary/30 bg-primary/10 p-5">
                <p className="text-sm font-semibold text-foreground">What this enables next</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>POST the intake to `/api/generate`</li>
                  <li>Stream itinerary construction back into the UI</li>
                  <li>Persist a draft trip before sharing</li>
                  <li>Prompt for organiser email after the itinerary lands</li>
                </ul>
              </div>
            </div>
          </div>
        ) : isGenerating ? (
          <div className="space-y-6 py-12 text-center">
            <p className="eyebrow">Building</p>
            <h2 className="text-4xl font-display font-light italic text-foreground">Building your trip...</h2>
            <div className="mx-auto flex w-fit items-center gap-2">
              <span className="h-3 w-3 animate-bounce rounded-full bg-primary [animation-delay:-0.2s]" />
              <span className="h-3 w-3 animate-bounce rounded-full bg-primary [animation-delay:-0.1s]" />
              <span className="h-3 w-3 animate-bounce rounded-full bg-primary" />
            </div>
            <p className="mx-auto max-w-xl text-sm leading-7 text-muted-foreground">
              The planner is framing the trip the same way the full product will: intake first, itinerary construction next, then review and sharing.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {step === 0 ? (
              <div className="space-y-6">
                <div>
                  <p className="eyebrow">Step 1</p>
                  <h2 className="mt-4 text-4xl font-display font-light italic text-foreground">Where are you going?</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">City, resort, or region. If the organiser is undecided, seed the conversation with a proven golf-trip market.</p>
                </div>
                <Input
                  value={state.destination}
                  onChange={(event) => update('destination', event.target.value)}
                  placeholder="Scottsdale, AZ"
                  className="h-14 rounded-2xl border-border bg-background/70 text-base"
                />
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {suggestionCards.map((destination) => (
                    <button
                      key={destination}
                      type="button"
                      onClick={() => update('destination', destination)}
                      className="rounded-2xl border border-border bg-background/60 px-4 py-4 text-left text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
                    >
                      <span className="block font-semibold text-foreground">{destination}</span>
                      <span className="mt-1 block">Use this as a fast start.</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 1 ? (
              <div className="space-y-6">
                <div>
                  <p className="eyebrow">Step 2</p>
                  <h2 className="mt-4 text-4xl font-display font-light italic text-foreground">When are you going?</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">Use a date range that reflects when the group can actually travel. Nights are calculated automatically so the organiser sees the trip shape immediately.</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2 text-sm text-muted-foreground">
                    <span className="block text-foreground">Start date</span>
                    <Input
                      type="date"
                      value={state.datesStart}
                      onChange={(event) => update('datesStart', event.target.value)}
                      className="h-14 rounded-2xl border-border bg-background/70 text-base"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-muted-foreground">
                    <span className="block text-foreground">End date</span>
                    <Input
                      type="date"
                      value={state.datesEnd}
                      onChange={(event) => update('datesEnd', event.target.value)}
                      className="h-14 rounded-2xl border-border bg-background/70 text-base"
                    />
                  </label>
                </div>
                <div className="rounded-3xl border border-border bg-background/60 p-5">
                  <p className="text-sm font-semibold text-foreground">Trip length</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{nights > 0 ? `${nights} nights. Enough to generate golf blocks, partner plans, and one shared anchor.` : 'Pick a valid date range to calculate nights.'}</p>
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="space-y-6">
                <div>
                  <p className="eyebrow">Step 3</p>
                  <h2 className="mt-4 text-4xl font-display font-light italic text-foreground">Who is coming?</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">This needs golfers and partners separately because the trip logic changes once the non-golf side is intentional rather than implied.</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { key: 'golfers' as const, label: 'Golfers', detail: 'Minimum 2 to make the trip worth coordinating.' },
                    { key: 'partners' as const, label: 'Partners', detail: 'Zero is valid. This becomes a golf-only trip.' },
                  ].map((item) => (
                    <div key={item.key} className="rounded-3xl border border-border bg-background/60 p-5">
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                      <div className="mt-5 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => changeCount(item.key, -1)}
                          className="h-12 w-12 rounded-2xl border border-border bg-card text-xl text-foreground"
                        >
                          -
                        </button>
                        <span className="text-4xl font-display font-light text-foreground">{state[item.key]}</span>
                        <button
                          type="button"
                          onClick={() => changeCount(item.key, 1)}
                          className="h-12 w-12 rounded-2xl border border-border bg-card text-xl text-foreground"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="space-y-6">
                <div>
                  <p className="eyebrow">Step 4</p>
                  <h2 className="mt-4 text-4xl font-display font-light italic text-foreground">What is the budget per round?</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">The number should be honest enough to stop the generator from suggesting fantasy golf. This is the quickest way to anchor the plan in reality.</p>
                </div>
                <div className="rounded-3xl border border-border bg-background/60 p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Budget per round</p>
                      <p className="mt-2 text-5xl font-display font-light text-foreground">${state.budgetPerRound}</p>
                    </div>
                    <p className="text-sm text-primary">{formatBudgetLabel(state.budgetPerRound)}</p>
                  </div>
                  <div className="mt-6 px-1">
                    <Slider
                      min={50}
                      max={350}
                      step={25}
                      value={[state.budgetPerRound]}
                      onValueChange={(value) => update('budgetPerRound', value[0] ?? 175)}
                    />
                  </div>
                  <div className="mt-4 flex justify-between text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    <span>Budget</span>
                    <span>Mid-range</span>
                    <span>Premium</span>
                    <span>Bucket List</span>
                  </div>
                </div>
              </div>
            ) : null}

            {step === 4 ? (
              <div className="space-y-6">
                <div>
                  <p className="eyebrow">Step 5</p>
                  <h2 className="mt-4 text-4xl font-display font-light italic text-foreground">What is the vibe?</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">This tells generation what the group would actually defend once the voting starts.</p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {vibes.map((vibe) => {
                    const active = state.vibe === vibe.value
                    return (
                      <button
                        key={vibe.value}
                        type="button"
                        onClick={() => update('vibe', vibe.value)}
                        className={active
                          ? 'rounded-3xl border border-primary bg-primary/10 p-5 text-left'
                          : 'rounded-3xl border border-border bg-background/60 p-5 text-left'}
                      >
                        <span className="block text-xl font-display font-light text-foreground">{vibe.label}</span>
                        <span className="mt-3 block text-sm leading-7 text-muted-foreground">{vibe.detail}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            ) : null}

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-6">
              <button
                type="button"
                onClick={prevStep}
                className="secondary-link"
              >
                {step === 0 ? 'Reset Later' : 'Back'}
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!stepValid}
                className="primary-link disabled:pointer-events-none disabled:opacity-40"
              >
                {step === 4 ? 'Build Trip Brief' : 'Continue'}
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}