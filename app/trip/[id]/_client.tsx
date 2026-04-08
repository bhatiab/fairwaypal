'use client'

import { useState } from 'react'
import { MapPin, Calendar, Users } from 'lucide-react'
import type { TripWithActivities, Activity, ActivitySide } from '../../../src/types/trip'
import ActivityCard from '../../../src/components/ActivityCard'

interface Props {
  trip: TripWithActivities
}

function groupByDay(activities: Activity[]): Record<string, Activity[]> {
  return activities.reduce<Record<string, Activity[]>>((acc, activity) => {
    const key = activity.day || 'Day 1'
    if (!acc[key]) acc[key] = []
    acc[key].push(activity)
    return acc
  }, {})
}

function formatDateRange(start: string, end: string): string {
  const opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' }
  const s = new Date(start + 'T12:00:00').toLocaleDateString('en-US', opts)
  const e = new Date(end + 'T12:00:00').toLocaleDateString('en-US', opts)
  return `${s} – ${e}`
}

interface PanelProps {
  activities: Activity[]
  side: ActivitySide
  emptyMessage: string
}

function Panel({ activities, side, emptyMessage }: PanelProps) {
  const grouped = groupByDay(activities)
  const days = Object.keys(grouped)

  const accentColor = side === 'golf' ? '#2a6b3c' : '#a0456e'
  const panelLabel = side === 'golf' ? 'Golf' : 'Partners'

  return (
    <div className="space-y-6">
      {/* Panel header */}
      <div
        className="flex items-center gap-3 pb-3 border-b"
        style={{ borderColor: `${accentColor}40` }}
      >
        <span
          className="text-xs font-body font-bold uppercase tracking-[0.18em]"
          style={{ color: accentColor }}
        >
          {panelLabel}
        </span>
        <span className="text-xs text-muted-foreground">
          {activities.length} {activities.length === 1 ? 'activity' : 'activities'}
        </span>
      </div>

      {activities.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-8 text-center">
          <p className="text-sm text-muted-foreground">{emptyMessage}</p>
        </div>
      ) : (
        days.map((day) => (
          <div key={day} className="space-y-3">
            <p className="text-xs font-body font-bold uppercase tracking-[0.14em] text-muted-foreground px-1">
              {day}
            </p>
            {grouped[day].map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                variant={side}
              />
            ))}
          </div>
        ))
      )}
    </div>
  )
}

export default function TripSplitView({ trip }: Props) {
  const [mobileTab, setMobileTab] = useState<'golf' | 'partner'>('golf')

  const golfActivities = trip.activities.filter((a) => a.side === 'golf')
  const partnerActivities = trip.activities.filter((a) => a.side === 'partner')
  const sharedActivity = trip.activities.find((a) => a.side === 'shared')

  const hasPartners = trip.partners_count > 0

  return (
    <div className="px-4 pb-16 max-w-7xl mx-auto sm:px-6 lg:px-8">
      {/* Hero strip */}
      <div className="py-8 border-b border-border/60 mb-8">
        <p className="eyebrow mb-2">Golf Trip</p>
        <h1 className="text-4xl font-display font-light italic text-foreground mb-4">
          {trip.name}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {trip.destination}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatDateRange(trip.dates_start, trip.dates_end)} · {trip.nights} nights
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            {trip.golfers_count} golfers
            {hasPartners ? ` · ${trip.partners_count} partners` : ''}
          </span>
        </div>
      </div>

      {/* Shared activity banner */}
      {sharedActivity && (
        <div
          className="rounded-2xl p-4 mb-8 border"
          style={{
            borderColor: 'rgba(201,168,76,0.25)',
            background: 'rgba(201,168,76,0.06)',
          }}
        >
          <div className="flex items-start gap-3">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.14em] px-2 py-1 rounded-sm shrink-0 mt-0.5"
              style={{ color: '#c9a84c', background: 'rgba(201,168,76,0.15)' }}
            >
              Together
            </div>
            <div>
              <p className="font-display font-light italic text-foreground">
                {sharedActivity.name}
              </p>
              {sharedActivity.detail && (
                <p className="text-sm text-muted-foreground mt-1">{sharedActivity.detail}</p>
              )}
              <p className="text-xs text-muted-foreground mt-1">
                {sharedActivity.day} · {sharedActivity.time_of_day}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mobile tab switcher (below lg) */}
      {hasPartners && (
        <div className="flex lg:hidden gap-2 mb-6">
          <button
            type="button"
            onClick={() => setMobileTab('golf')}
            className="flex-1 py-2.5 text-sm font-body font-semibold uppercase tracking-[0.1em] rounded-sm transition-colors"
            style={
              mobileTab === 'golf'
                ? { background: 'rgba(42,107,60,0.18)', color: '#4daa6a', border: '1px solid rgba(42,107,60,0.35)' }
                : { background: 'transparent', color: 'var(--muted-foreground)', border: '1px solid hsl(var(--border))' }
            }
          >
            Golf
          </button>
          <button
            type="button"
            onClick={() => setMobileTab('partner')}
            className="flex-1 py-2.5 text-sm font-body font-semibold uppercase tracking-[0.1em] rounded-sm transition-colors"
            style={
              mobileTab === 'partner'
                ? { background: 'rgba(160,69,110,0.18)', color: '#d4709a', border: '1px solid rgba(160,69,110,0.35)' }
                : { background: 'transparent', color: 'var(--muted-foreground)', border: '1px solid hsl(var(--border))' }
            }
          >
            Partners
          </button>
        </div>
      )}

      {/* Split panels */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Golf panel */}
        <div className={hasPartners && mobileTab !== 'golf' ? 'hidden lg:block' : ''}>
          <Panel
            activities={golfActivities}
            side="golf"
            emptyMessage="No golf activities generated."
          />
        </div>

        {/* Partner panel */}
        {hasPartners ? (
          <div className={mobileTab !== 'partner' ? 'hidden lg:block' : ''}>
            <Panel
              activities={partnerActivities}
              side="partner"
              emptyMessage="No partner activities generated."
            />
          </div>
        ) : (
          <div className="hidden lg:flex items-center justify-center rounded-2xl border border-dashed border-border/40 p-12">
            <div className="text-center">
              <p className="text-sm font-semibold text-foreground mb-1">Golf-only trip</p>
              <p className="text-sm text-muted-foreground">No partners on this one.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
