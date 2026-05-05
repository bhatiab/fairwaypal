'use client'

import type { TripRow, ActivityRow } from '@/types/trip'

export default function BudgetSummary({
  activities,
  trip,
}: {
  activities: ActivityRow[]
  trip: TripRow
}) {
  const active = activities.filter(
    (a) => a.status !== 'cancelled' && a.status !== 'removed',
  )

  const golfTotal = active
    .filter((a) => a.side === 'golf' || a.side === 'shared')
    .reduce((sum, a) => sum + (a.price ?? 0), 0) / 100

  const partnerTotal = active
    .filter((a) => a.side === 'partner' || a.side === 'shared')
    .reduce((sum, a) => sum + (a.price ?? 0), 0) / 100

  const perGolfer = trip.golfers_count > 0
    ? Math.round(golfTotal / trip.golfers_count)
    : 0
  const perPartner = trip.partners_count > 0
    ? Math.round(partnerTotal / trip.partners_count)
    : 0

  const confirmedCount = active.filter(
    (a) => a.status === 'confirmed' || a.status === 'booked',
  ).length
  const bookedCount = active.filter((a) => a.status === 'booked').length

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-xl border border-border bg-card/60 p-5">
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
          Est. per golfer
        </p>
        <p className="mt-2 text-3xl font-display font-light text-foreground">
          ${perGolfer}
        </p>
      </div>
      {trip.partners_count > 0 && (
        <div className="rounded-xl border border-border bg-card/60 p-5">
          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            Est. per partner
          </p>
          <p className="mt-2 text-3xl font-display font-light text-foreground">
            ${perPartner}
          </p>
        </div>
      )}
      <div className="rounded-xl border border-border bg-card/60 p-5">
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
          Confirmed
        </p>
        <p className="mt-2 text-3xl font-display font-light text-foreground">
          {confirmedCount} of {active.length}
        </p>
      </div>
      <div className="rounded-xl border border-border bg-card/60 p-5">
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
          Booked
        </p>
        <p className="mt-2 text-3xl font-display font-light text-foreground">
          {bookedCount} of {confirmedCount}
        </p>
      </div>
    </div>
  )
}
