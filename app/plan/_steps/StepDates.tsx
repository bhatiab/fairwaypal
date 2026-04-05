'use client'

import { useMemo } from 'react'
import { DayPicker } from 'react-day-picker'
import type { DateRange } from 'react-day-picker'
import { calculateNights } from '@/types/trip'

export default function StepDates({
  start,
  end,
  onChange,
}: {
  start: string
  end: string
  onChange: (field: 'datesStart' | 'datesEnd', value: string) => void
}) {
  const range: DateRange | undefined = useMemo(() => {
    const from = start ? new Date(start + 'T00:00:00') : undefined
    const to = end ? new Date(end + 'T00:00:00') : undefined
    return from ? { from, to } : undefined
  }, [start, end])

  const nights = calculateNights(start, end)

  function handleSelect(selected: DateRange | undefined) {
    if (!selected) return
    if (selected.from) {
      const y = selected.from.getFullYear()
      const m = String(selected.from.getMonth() + 1).padStart(2, '0')
      const d = String(selected.from.getDate()).padStart(2, '0')
      onChange('datesStart', `${y}-${m}-${d}`)
    }
    if (selected.to) {
      const y = selected.to.getFullYear()
      const m = String(selected.to.getMonth() + 1).padStart(2, '0')
      const d = String(selected.to.getDate()).padStart(2, '0')
      onChange('datesEnd', `${y}-${m}-${d}`)
    } else {
      onChange('datesEnd', '')
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow">Step 2</p>
        <h2 className="mt-4 text-4xl font-display font-light italic text-foreground sm:text-5xl">
          When are you going?
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          Pick a start and end date. Nights are calculated automatically.
        </p>
      </div>

      <div className="flex justify-center">
        <DayPicker
          mode="range"
          selected={range}
          onSelect={handleSelect}
          numberOfMonths={1}
          disabled={{ before: new Date() }}
          classNames={{
            months: 'flex gap-4',
            month: 'space-y-4',
            caption: 'flex justify-center pt-1 relative items-center',
            caption_label: 'text-sm font-medium text-foreground',
            nav: 'flex items-center',
            nav_button: 'h-7 w-7 bg-transparent p-0 text-muted-foreground hover:text-foreground',
            nav_button_previous: 'absolute left-1',
            nav_button_next: 'absolute right-1',
            table: 'w-full border-collapse space-y-1',
            head_row: 'flex',
            head_cell: 'w-10 text-[0.8rem] font-normal text-muted-foreground',
            row: 'flex w-full mt-2',
            cell: 'w-10 h-10 text-center text-sm relative focus-within:z-20',
            day: 'h-10 w-10 p-0 font-normal text-foreground hover:bg-primary/20 rounded-lg transition-colors',
            day_range_start: 'bg-primary text-primary-foreground rounded-lg',
            day_range_end: 'bg-primary text-primary-foreground rounded-lg',
            day_selected: 'bg-primary text-primary-foreground',
            day_range_middle: 'bg-primary/15 text-foreground',
            day_today: 'border border-primary/50',
            day_outside: 'text-muted-foreground/40',
            day_disabled: 'text-muted-foreground/30',
          }}
        />
      </div>

      <div className="rounded-2xl border border-border bg-background/60 p-5 text-center">
        {nights > 0 ? (
          <>
            <p className="text-4xl font-display font-light text-foreground">
              {nights} {nights === 1 ? 'night' : 'nights'}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {start} to {end}
            </p>
          </>
        ) : (
          <p className="text-sm text-muted-foreground">
            Select a date range to see trip length.
          </p>
        )}
      </div>
    </div>
  )
}
