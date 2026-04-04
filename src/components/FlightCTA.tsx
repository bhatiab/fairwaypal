import { Plane } from 'lucide-react'

interface FlightCTAProps {
  destination: string
  airport?: string
  dateLabel?: string
  href: string
  ctaLabel?: string
}

export function FlightCTA({
  destination,
  airport,
  dateLabel,
  href,
  ctaLabel = 'Search',
}: FlightCTAProps) {
  if (!href || href.includes('[')) return null

  const locationLabel = airport ? `${destination} (${airport})` : destination
  const supportingText = dateLabel ? `${dateLabel} · Search on Expedia` : 'Search on Expedia'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="flex items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors px-5 py-4"
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <Plane className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold leading-snug">Flights to {locationLabel}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{supportingText}</p>
        </div>
      </div>
      <span className="text-xs font-semibold text-primary shrink-0">{ctaLabel} →</span>
    </a>
  )
}
