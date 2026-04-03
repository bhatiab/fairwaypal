'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Plane, Train, Bus, Car, Bike, Clock, AlertTriangle, MapPin, BedDouble } from "lucide-react";

const race = getRaceBySlug('jerez')!;

const AIRPORTS = [
  {
    code: 'XRY',
    name: 'Jerez Airport',
    distance: '15 min drive',
    pros: 'Closest airport, quick taxi/transfer to circuit or city centre.',
    cons: 'Limited international routes. Most flights connect via Madrid or Barcelona.',
  },
  {
    code: 'SVQ',
    name: 'Seville Airport',
    distance: '1h 15m drive / 1h train + shuttle',
    pros: 'Far more international connections. Ryanair, Vueling, and other budget carriers fly here.',
    cons: 'Need to add a train leg to Jerez (€11-16, ~1 hour). Book train in advance for race weekend.',
  },
];

const TRANSPORT_OPTIONS = [
  {
    icon: Bus,
    title: 'Shuttle Bus (Recommended)',
    details: [
      'Departs from the Minotauro roundabout in Jerez city centre',
      'Runs every 7 minutes at peak times',
      '€1.10 each way — pay in cash or contactless',
      '30-minute journey to the circuit',
      'Return shuttles run until ~1 hour after the last race',
    ],
  },
  {
    icon: Bus,
    title: 'P4 Public Bus',
    details: [
      'Regular city bus route that stops at Torremelgarejo',
      'Short walk from the stop to the main entrance',
      'Less frequent than the race shuttle but runs all day',
      'Standard city bus fare',
    ],
  },
  {
    icon: Car,
    title: 'Driving',
    details: [
      'Free parking: lots A, C, D (shuttle required to gate)',
      'Premium parking: lots B and A-10 — €22 on the day, €12 if pre-booked online',
      'Premium lots are walking distance to the entrance',
      'Parking areas open 1 hour before gates',
      'Post-race exit from free lots can take 1-2 hours',
    ],
  },
  {
    icon: Bike,
    title: 'Motorcycle',
    details: [
      'Free motorcycle parking right next to the main entrance',
      'Best option if you have access to a bike',
      'Arrive early on Sunday — spaces fill up',
    ],
  },
];

const ACCOMMODATION = [
  { area: 'Jerez de la Frontera', travel: '15 min by shuttle', note: 'Best option. Walk to the shuttle, walk to restaurants. Books out fast — reserve early.' },
  { area: 'El Puerto de Santa María', travel: '20 min drive', note: 'Coastal town with great seafood. Good alternative when Jerez hotels sell out.' },
  { area: 'Cádiz', travel: '30 min drive', note: 'Beautiful historic city. More hotel availability and lower prices than Jerez.' },
  { area: 'Seville', travel: '1h 15m by train/car', note: 'Major city with endless options. Best if you want nightlife and sightseeing, but the commute adds up over 3 days.' },
];

export default function GettingThereClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/jerez" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Getting to Jerez
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Transport, parking, and how to leave without chaos
          </p>
        </div>
      </section>

      {/* Airports */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Plane className="inline h-5 w-5 text-primary mr-2" />
            Airports
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {AIRPORTS.map((a) => (
              <div key={a.code} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-primary font-bold">{a.code}</span>
                  <span className="text-sm font-semibold text-foreground">{a.name}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  <MapPin className="inline h-3 w-3 mr-1" />{a.distance}
                </p>
                <p className="text-xs text-muted-foreground mb-1"><strong className="text-foreground">Pros:</strong> {a.pros}</p>
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">Cons:</strong> {a.cons}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Train from Seville */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Train className="inline h-5 w-5 text-primary mr-2" />
            Train from Seville
          </h2>
          <div className="rounded-xl border border-border/50 bg-card/60 p-5">
            <ul className="space-y-2.5">
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                Renfe trains from Seville Santa Justa to Jerez de la Frontera: ~12 departures per day
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                Journey time: approximately 1 hour
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                Price: €11-16 each way (Media Distancia trains)
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                Book at renfe.com — race weekend trains fill up, especially Sunday morning and Sunday evening returns
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                From Jerez station, take the shuttle bus from Minotauro roundabout (10-minute walk from station)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Circuit Transport */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Getting to the Circuit
          </h2>
          <div className="space-y-4">
            {TRANSPORT_OPTIONS.map((t) => (
              <div key={t.title} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <t.icon className="h-4 w-4 text-primary" />
                  <p className="text-sm font-semibold text-foreground">{t.title}</p>
                </div>
                <ul className="space-y-2">
                  {t.details.map((d, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="shrink-0 text-primary mt-0.5">—</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Race Exit */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Clock className="inline h-5 w-5 text-primary mr-2" />
            Post-Race Exit Strategy
          </h2>
          <div className="rounded-xl border border-border/50 bg-card/60 p-5">
            <div className="space-y-3">
              <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-3">
                <p className="text-sm text-foreground flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                  Over 100,000 fans attend on Sunday. Leaving the circuit takes 1-2+ hours if you wait until after the podium ceremony.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  <strong className="text-foreground">Option A:</strong> Leave before the podium. You'll miss the celebration but save 1-2 hours in queues.
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  <strong className="text-foreground">Option B:</strong> Stay for the podium, then wait 30-45 minutes for the initial crush to clear before heading to transport.
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  Shuttle buses run until approximately 1 hour after the final event. Don't cut it too close.
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  If driving from free parking lots (A, C, D), expect long shuttle waits back to your car. Premium parking pays for itself on Sunday.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Stay */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <BedDouble className="inline h-5 w-5 text-primary mr-2" />
            Where to Stay
          </h2>
          <div className="space-y-3">
            {ACCOMMODATION.map((a) => (
              <div key={a.area} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="text-sm font-semibold text-foreground">{a.area}</p>
                  <span className="text-xs text-primary font-mono">{a.travel}</span>
                </div>
                <p className="text-xs text-muted-foreground">{a.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
