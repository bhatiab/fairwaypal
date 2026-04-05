'use client'

import type { ActivityRow, TripRow } from '@/types/trip'

export default function BudgetTracker({
  trip,
  activities,
}: {
  trip: TripRow
  activities: ActivityRow[]
}) {
  const confirmed = activities.filter(
    (a) => a.status === 'confirmed' || a.status === 'booked',
  )

  // Calculate per-person costs from confirmed activities
  let golfTotal = 0
  let partnerTotal = 0
  let sharedTotal = 0

  for (const a of confirmed) {
    const price = a.price ? a.price / 100 : 0
    if (a.side === 'golf') golfTotal += price
    else if (a.side === 'partner') partnerTotal += price
    else sharedTotal += price
  }

  const totalPeople = trip.golfers_count + trip.partners_count
  const sharedPerPerson = totalPeople > 0 ? sharedTotal / totalPeople : 0

  const perGolfer = Math.round(golfTotal + sharedPerPerson)
  const perPartner = Math.round(partnerTotal + sharedPerPerson)
  const booked = activities.filter((a) => a.status === 'booked').length

  return (
    <div className="rounded-sm border border-border bg-bg-2 p-5">
      <p className="eyebrow">Budget</p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-sm border border-border bg-bg-3 p-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-muted">
            Per golfer
          </p>
          <p className="mt-1 text-2xl font-display font-light text-ink">
            ${perGolfer}
          </p>
        </div>
        {trip.partners_count > 0 && (
          <div className="rounded-sm border border-border bg-bg-3 p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-muted">
              Per partner
            </p>
            <p className="mt-1 text-2xl font-display font-light text-ink">
              ${perPartner}
            </p>
          </div>
        )}
        <div className="rounded-sm border border-border bg-bg-3 p-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-muted">
            Booked
          </p>
          <p className="mt-1 text-2xl font-display font-light text-ink">
            {booked}
            <span className="text-sm text-ink-muted">
              /{confirmed.length}
            </span>
          </p>
        </div>
        <div className="rounded-sm border border-border bg-bg-3 p-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-muted">
            Still to book
          </p>
          <p className="mt-1 text-2xl font-display font-light text-ink">
            {confirmed.length - booked}
          </p>
        </div>
      </div>
    </div>
  )
}
