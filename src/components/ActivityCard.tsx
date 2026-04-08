import type { Activity } from '../types/trip'

interface ActivityCardProps {
  activity: Activity
  variant: 'golf' | 'partner' | 'shared'
  isNew?: boolean
}

const accentColors = {
  golf: '#2a6b3c',
  partner: '#a0456e',
  shared: '#c9a84c',
}

const sideLabels = {
  golf: 'Golf',
  partner: 'Partners',
  shared: 'Together',
}

function formatPrice(cents: number): string {
  if (!cents || cents === 0) return 'Included'
  return `$${(cents / 100).toLocaleString('en-US', { maximumFractionDigits: 0 })}`
}

export default function ActivityCard({ activity, variant, isNew }: ActivityCardProps) {
  const accent = accentColors[variant]

  return (
    <div
      className={`rounded-2xl border border-border/70 bg-card/60 p-4 ${isNew ? 'activity-appear' : ''}`}
      style={{ borderLeftColor: accent, borderLeftWidth: '3px' }}
    >
      {/* Eyebrow row */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-body font-500 uppercase tracking-[0.12em] text-muted-foreground">
          {activity.time_of_day}
        </span>
        <span
          className="text-[10px] font-body font-700 uppercase tracking-[0.12em] px-2 py-0.5 rounded-sm"
          style={{ color: accent, background: `${accent}1a` }}
        >
          {sideLabels[variant]}
        </span>
      </div>

      {/* Activity name */}
      <h3 className="font-display font-light italic text-lg text-foreground leading-snug mb-2">
        {activity.name}
      </h3>

      {/* Detail */}
      {activity.detail && (
        <p className="text-sm text-muted-foreground leading-6 mb-3">
          {activity.detail}
        </p>
      )}

      {/* Footer: price + tags */}
      <div className="flex flex-wrap items-center gap-2 mt-auto">
        <span className="text-sm font-semibold text-foreground">
          {formatPrice(activity.price)}
        </span>
        {activity.tags?.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-sm border border-border text-muted-foreground"
          >
            {tag}
          </span>
        ))}
        {activity.booking_url && (
          <a
            href={activity.booking_url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-xs underline underline-offset-2"
            style={{ color: accent }}
          >
            Book
          </a>
        )}
      </div>
    </div>
  )
}
