'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Plane, Bus, Car, Clock, AlertTriangle, MapPin, BedDouble, Tent } from "lucide-react";

const race = getRaceBySlug('mugello')!;

const AIRPORTS = [
  {
    code: 'FLR',
    name: 'Florence Airport (Peretola)',
    distance: '~40 km / 40-60 min drive',
    pros: 'Closest airport. Quick transfer to the Mugello area by car or taxi.',
    cons: 'Small airport with limited international routes. Most flights connect via Rome or Milan.',
  },
  {
    code: 'BLQ',
    name: 'Bologna Airport (Marconi)',
    distance: '~100 km / 1h 15m drive',
    pros: 'More international connections including Ryanair and budget carriers. Good alternative if Florence flights are expensive.',
    cons: 'Longer drive, though the A1 motorway makes it straightforward. Car hire recommended.',
  },
  {
    code: 'PSA',
    name: 'Pisa Airport (Galilei)',
    distance: '~130 km / 1h 30m drive',
    pros: 'Major budget airline hub. Often the cheapest flights into Tuscany.',
    cons: 'Furthest option. The drive through Tuscany is scenic but adds significant time on race day.',
  },
];

const TRANSPORT_OPTIONS = [
  {
    icon: Bus,
    title: 'Shuttle Bus from Florence (Recommended)',
    details: [
      'Official shuttle buses run from Florence on race days',
      'Depart from central Florence locations — check motogp.com for pickup points',
      'Journey takes 45-60 minutes depending on traffic',
      'Return shuttles run after the final race',
      'Book shuttle tickets in advance — they sell out for Sunday',
    ],
  },
  {
    icon: Car,
    title: 'Driving',
    details: [
      'From Florence: A1 motorway north, exit Barberino di Mugello, follow circuit signs',
      'From Bologna: A1 south, same exit at Barberino',
      'Multiple parking areas around the circuit — paid parking, prices vary by proximity',
      'Arrive early on Sunday to avoid the worst of the inbound traffic',
      'Post-race traffic from Mugello is notoriously bad — expect 2-3 hours to clear the area',
    ],
  },
  {
    icon: Bus,
    title: 'Organised Tours / Private Transfer',
    details: [
      'Several operators run MotoGP day trips from Florence including transport and tickets',
      'Private transfers from Florence cost more but avoid the parking and traffic problem entirely',
      'If splitting the cost with friends, a private minivan can be competitive with individual shuttle tickets',
    ],
  },
  {
    icon: Tent,
    title: 'Camping (Avoids All Traffic)',
    details: [
      'Official and unofficial camping areas surround the circuit',
      'Arrive Thursday or Friday and leave Monday morning — no race-day traffic',
      'The definitive Mugello experience — thousands of fans camp all weekend',
      'Basic facilities but excellent atmosphere',
      'Book official camping spots in advance; unofficial spots fill on a first-come basis',
    ],
  },
];

const ACCOMMODATION = [
  { area: 'Scarperia e San Piero', travel: '5-10 min drive', note: 'Closest town to the circuit. Very limited hotel capacity — books out months in advance. If you find availability, take it.' },
  { area: 'Borgo San Lorenzo', travel: '15-20 min drive', note: 'Larger town in the Mugello valley with more options. Good restaurants and a proper town centre. Solid base for the weekend.' },
  { area: 'Barberino di Mugello', travel: '15 min drive', note: 'Right off the A1 motorway. Practical for driving to the circuit. Outlet mall nearby if you have non-racing companions.' },
  { area: 'Florence', travel: '40-60 min drive / shuttle', note: 'By far the most options. Use the shuttle bus to avoid driving. Better for fans who want city nightlife and sightseeing between race days.' },
];

export default function GettingThereClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/mugello" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Getting to Mugello
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Transport, parking, and how to leave without sitting in traffic for hours
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
          <div className="grid gap-4">
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

      {/* Transport Options */}
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
                  Mugello traffic after the race is among the worst on the MotoGP calendar. The circuit is in a rural valley with limited road access. Expect 2-3 hours to reach the motorway on Sunday evening.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  <strong className="text-foreground">Option A:</strong> Leave before the podium ceremony. You will miss the celebration but save 1-2 hours in traffic.
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  <strong className="text-foreground">Option B:</strong> Stay and enjoy the atmosphere. Wait 45-60 minutes after the podium for the initial rush to clear, then head out.
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  <strong className="text-foreground">Option C (best):</strong> Camp and leave Monday morning. No traffic, no stress.
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  If you took the shuttle, return buses run after the final race but expect long queues.
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

      {/* Mistakes link */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/mugello/mistakes" className="block rounded-xl border border-red-500/20 bg-red-500/5 p-5 hover:border-red-500/40 transition-colors">
            <p className="text-sm font-semibold text-foreground">Don&apos;t underestimate Mugello traffic →</p>
            <p className="mt-1 text-xs text-muted-foreground">See all the common mistakes people make at this circuit.</p>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
