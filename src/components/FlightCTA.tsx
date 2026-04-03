import { raceFlights } from '@/data/raceFlights'
import { Plane } from 'lucide-react'

interface Props {
  raceSlug: string
}

export function FlightCTA({ raceSlug }: Props) {
  const flight = raceFlights[raceSlug]
  if (!flight) return null

  const { destination, airport, raceDates, expediaFlightUrl } = flight
  if (!expediaFlightUrl || expediaFlightUrl.includes('[')) return null

  return (
    <a
      href={expediaFlightUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="flex items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors px-5 py-4"
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <Plane className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold leading-snug">Flights to {destination} ({airport})</p>
          <p className="text-xs text-muted-foreground mt-0.5">{raceDates} · Search on Expedia</p>
        </div>
      </div>
      <span className="text-xs font-semibold text-primary shrink-0">Search →</span>
    </a>
  )
}
