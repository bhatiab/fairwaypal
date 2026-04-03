'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Plane, Train, Bus, Car, Clock, AlertTriangle, MapPin, BedDouble } from "lucide-react";

const race = getRaceBySlug('le-mans')!;

const AIRPORTS = [
  {
    code: 'CDG',
    name: 'Paris Charles de Gaulle',
    distance: '~1h 45m by direct TGV',
    pros: 'Direct TGV from Terminal 2 to Le Mans — no transit into Paris city needed. Most international flights arrive here.',
    cons: 'The TGV stop is Terminal 2, not Terminal 1. Budget extra time if your flight lands at T1.',
  },
  {
    code: 'ORY',
    name: 'Paris Orly',
    distance: '~2h+ with Paris transit',
    pros: 'Good range of European carriers including budget airlines.',
    cons: 'No direct train to Le Mans. You must travel into central Paris (RER B or Orlyval + RER B) then take TGV from Montparnasse. Add at least 1 hour for the Paris leg.',
  },
  {
    code: 'TUF',
    name: 'Tours Val de Loire',
    distance: '~75 km south of Le Mans',
    pros: 'Small regional airport served by Ryanair from some UK and European cities. Convenient for fans travelling from the UK.',
    cons: 'Limited routes. You will need to hire a car or arrange a transfer — there is no direct public transport to Le Mans.',
  },
  {
    code: 'NTE',
    name: 'Nantes Atlantique',
    distance: '~165 km (90 min drive)',
    pros: 'Ryanair, easyJet, and Transavia serve Nantes with many European connections.',
    cons: 'Requires a hire car or lengthy public transport connection to Le Mans.',
  },
];

const TRANSPORT_OPTIONS = [
  {
    icon: Bus,
    title: 'Tram T1 (Recommended)',
    details: [
      'Board at "Gares" stop — directly adjacent to Le Mans train station',
      'Destination: Antarès-Stade Marie Marvingt (near the circuit entrance)',
      'Journey time: approximately 20 minutes',
      'Runs from 5:30 AM on race days, every few minutes at peak times',
      'Normal city tram fare — accept contactless or buy at the machine',
      'Trams run until well after the final event of the day',
    ],
  },
  {
    icon: Bus,
    title: 'Shuttle Buses',
    details: [
      'Shuttle buses run from the city centre and train station area',
      'Supplement the tram on the highest-traffic days',
      'Check the official motogpfrance.com website for 2026 shuttle stop locations',
    ],
  },
  {
    icon: Car,
    title: 'Driving',
    details: [
      'The circuit is 5–6 km south of Le Mans city centre',
      'Premium parking (P3C inside the circuit) must be pre-booked via the ticketing site',
      'General car parks are available but roads around the circuit gridlock on Sunday',
      'Post-race exit from car parks can take 2+ hours on race day',
      'Not recommended on Sunday unless you plan to leave before the podium ceremony',
    ],
  },
];

const ACCOMMODATION = [
  { area: 'Le Mans city centre', travel: '20 min by tram', note: 'Best all-round option. Walk to the tram, good restaurants and bars, easy to reach by train from Paris. Hotels sell out 6–12 months in advance — book as soon as you have your ticket.' },
  { area: 'Circuit camping (Houx, Epinettes)', travel: '5 min walk to gates', note: 'Free camping zones ring the circuit. No pre-booking — first come, first served. Fills from Thursday evening. Basic or no facilities. Carry everything you need for 3-4 days.' },
  { area: 'GP Camp (premium camping)', travel: '5 min walk to gates', note: 'Pre-bookable via the official site. Canvas tents with beds, shared showers, food available on site. 2024 price was ~€600 per 2 persons / 4 nights. Sells out well in advance.' },
  { area: 'Surrounding towns (Laval, Alençon)', travel: '35–50 min by car or train', note: 'Useful if Le Mans is sold out. Check SNCF for train connections to Le Mans.' },
  { area: 'Paris', travel: '55 min by TGV', note: 'If you want the Paris experience alongside the race. The TGV makes it viable for a day trip or a 2-night Paris/Le Mans split. Book the return train in advance — Sunday evening trains fill up fast.' },
];

export default function GettingThereClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/le-mans" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Getting to Le Mans
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

      {/* Train from Paris */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Train className="inline h-5 w-5 text-primary mr-2" />
            Train from Paris
          </h2>
          <div className="rounded-xl border border-border/50 bg-card/60 p-5">
            <ul className="space-y-2.5">
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                <strong className="text-foreground">Fastest:</strong> TGV from Paris Montparnasse — approximately 55 minutes
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                <strong className="text-foreground">From CDG airport:</strong> Direct TGV from Terminal 2 — approximately 1 hour 45 minutes, no Paris city transit needed
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                Advance fares from ~€12. Flexible fares up to €120+. Book at SNCF Connect or Trainline.
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                Race weekend trains (especially Friday morning outbound and Sunday evening return) sell out weeks in advance
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                From Le Mans train station, Tram T1 departs from the Gares stop directly outside
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
                  Over 300,000 fans attend on Sunday. Post-race road gridlock near the circuit lasts 2+ hours. Plan accordingly.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  <strong className="text-foreground">Tram:</strong> The best exit option. Stay for the podium, wait 20–30 minutes for the initial rush to clear, then walk to the tram stop. The tram continues running well after the race.
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  <strong className="text-foreground">Car:</strong> If you drove, either leave 10 minutes before the race ends (missing the podium) or wait at least 45–60 minutes for the roads to clear before moving.
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  <strong className="text-foreground">Return train:</strong> Book your Sunday return TGV well in advance. The evening trains back to Paris fill up fast on race day.
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  If camping, there is no rush — the circuit area stays lively well into Sunday evening.
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
