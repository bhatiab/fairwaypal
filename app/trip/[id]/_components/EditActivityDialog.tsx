'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { X } from 'lucide-react'
import type { ActivityRow } from '@/types/trip'

export default function EditActivityDialog({
  activity,
  tripId,
  organiserUuid,
  onSaved,
  onClose,
}: {
  activity: ActivityRow
  tripId: string
  organiserUuid: string
  onSaved: (updated: ActivityRow) => void
  onClose: () => void
}) {
  const [timeOfDay, setTimeOfDay] = useState(activity.time_of_day ?? '')
  const [day, setDay] = useState(activity.day ?? '')
  const [price, setPrice] = useState(
    activity.price ? String(activity.price / 100) : '',
  )
  const [detail, setDetail] = useState(activity.detail ?? '')
  const [saving, setSaving] = useState(false)

  async function handleSave() {
    setSaving(true)
    try {
      const res = await fetch(
        `/api/trip/${tripId}/activity/${activity.id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'edit',
            organiserUuid,
            fields: {
              timeOfDay: timeOfDay || undefined,
              day: day || undefined,
              price: price ? Math.round(Number(price) * 100) : undefined,
              detail: detail || undefined,
            },
          }),
        },
      )
      if (!res.ok) throw new Error()
      const updated = await res.json()
      toast.success('Activity updated')
      onSaved(updated)
      onClose()
    } catch {
      toast.error('Could not save changes.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/90 backdrop-blur-sm">
      <div className="mx-5 w-full max-w-md rounded-sm border border-border-2 bg-bg-2 p-6">
        <div className="flex items-center justify-between">
          <p className="eyebrow">Edit activity</p>
          <button type="button" onClick={onClose} className="text-ink-muted hover:text-ink">
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-2 text-sm font-semibold text-ink">{activity.name}</p>

        <div className="mt-5 space-y-4">
          <label className="block">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-ink-muted">
              Time
            </span>
            <input
              type="text"
              value={timeOfDay}
              onChange={(e) => setTimeOfDay(e.target.value)}
              placeholder="7:00 AM"
              className="mt-1 h-10 w-full rounded-sm border border-border bg-bg-3 px-3 text-sm text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-ink-muted">
              Day
            </span>
            <input
              type="text"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder="Saturday"
              className="mt-1 h-10 w-full rounded-sm border border-border bg-bg-3 px-3 text-sm text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-ink-muted">
              Price ($)
            </span>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="250"
              className="mt-1 h-10 w-full rounded-sm border border-border bg-bg-3 px-3 text-sm text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-ink-muted">
              Description
            </span>
            <textarea
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              rows={3}
              className="mt-1 w-full rounded-sm border border-border bg-bg-3 px-3 py-2 text-sm text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none"
            />
          </label>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary flex-1"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="btn-primary flex-1 disabled:opacity-40"
          >
            {saving ? 'Saving...' : 'Save changes'}
          </button>
        </div>
      </div>
    </div>
  )
}
