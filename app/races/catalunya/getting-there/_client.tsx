'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Plane, Train, Bus, Car, Clock, AlertTriangle, MapPin, BedDouble } from "lucide-react";

const race = getRaceBySlug('catalunya')!;

const AIRPORTS = [
  {
    code: 'BCN',
    name: 'Barcelona El Prat Airport',
    distance: '~40km from circuit (~50 min by R2N train)',
    pros: 'Main international hub. Excellent connections from across Europe and beyond. Direct R2N train line connects to Montmeló.',
    cons: 'Further from the circuit than city-centre options. On-the-day taxis are expensive (€60-70+). Allow time for connecting at Sants if taking the faster R2.',
  },
  {
    code: 'GRO',
    name: 'Girona-Costa Brava Airport',
    distance: '~80km north of circuit (1h+ by road)',
    pros: 'Used by Ryanair for Barcelona-area routes. Cheaper fares but more distance.',
    cons: 'No direct public transport link to the circuit. Requires a bus or taxi to Girona city, then train south. Adds complexity and time.',
  },
];

const TRANSPORT_OPTIONS = [
  {
    icon: Train,
    title: 'R2/R2N Train (Recommended)',
    details: [
      'Depart from Barcelona Sants, Passeig de Gràcia, or El Clot station',
      'Direction: Granollers or Maçanet-Massanes — stop at Montmeló',
      'Journey: ~30 minutes from Sants, €2.80 each way',
      'Frequency: every 30 minutes — check Rodalies de Catalunya timetables',
      'From airport: R2N runs directly from T1/T2 to Montmeló in ~50 minutes',
      'Free shuttle buses run from Montmeló station to circuit gates on race weekend',
    ],
  },
  {
    icon: Bus,
    title: 'Sagalès Bus (Direct to Circuit)',
    details: [
      'Departs from Estació del Nord in central Barcelona',
      'Drop-off point 300 metres from the circuit main entrance',
      'Journey: approximately 45 minutes from the city',
      'Cost: around €18 return (check sagales.com for race weekend schedules)',
      'Also runs from Costa Brava towns (Lloret de Mar, Blanes) on Saturdays and Sundays',
      'Useful if you are not near a train station or prefer a direct route',
    ],
  },
  {
    icon: Car,
    title: 'Driving',
    details: [
      'The circuit is off the AP-7 motorway, exit 12 (Montmeló)',
      'Pre-book parking online — on-the-day parking costs more and fills fast',
      'Multiple car park zones at the circuit with varying distances to gates',
      'Post-race exit typically takes 1-2 hours — the train is far faster',
      'If you must drive, consider arriving before 9 AM to secure your spot easily',
    ],
  },
  {
    icon: Car,
    title: 'Taxi / Rideshare',
    details: [
      'Pre-book a transfer to the circuit — on-the-day taxis are expensive and scarce',
      'Cost from Barcelona city centre: approximately €60-70+',
      'Return trips after the race: difficult to get a taxi at the circuit — arrange in advance',
      'Uber operates in Barcelona; check availability for race weekend drop-offs',
    ],
  },
];

const ACCOMMODATION = [
  { area: 'Barcelona City Centre', travel: '30 min by R2 train', note: 'Best overall option. Easy transport, unlimited food and accommodation choices. Gothamesque Gothic Quarter and Eixample have hotels at all price points.' },
  { area: 'Montmeló / Granollers', travel: '5-10 min by car or taxi', note: 'Small towns next to the circuit. Very limited hotel stock — books out fast. Good if you want to minimise race-day travel.' },
  { area: 'Sabadell / Terrassa', travel: '20-25 min by car', note: 'Industrial cities northwest of Barcelona with more affordable accommodation. Less atmosphere but good value if Barcelona prices are prohibitive.' },
  { area: 'Sitges / Castelldefels', travel: '1h by car or train', note: 'Beach resort south of Barcelona. Longer commute on race day but a great base for combining the race with a beach trip.' },
];

export default function GettingThereClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/catalunya" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Getting to Catalunya
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Transport from Barcelona, parking, and how to leave without chaos
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

      {/* Train from Barcelona */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Train className="inline h-5 w-5 text-primary mr-2" />
            Train from Barcelona
          </h2>
          <div className="rounded-xl border border-border/50 bg-card/60 p-5">
            <ul className="space-y-2.5">
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                Rodalies R2/R2N line: Barcelona Sants → Montmeló station (~30 min, €2.80 each way)
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                Trains run every 30 minutes — check the Rodalies de Catalunya app for race weekend timetables
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                Free shuttle buses connect Montmeló station to the circuit gates on race weekend
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                Leave Barcelona by 8:30 AM on Sunday to avoid overcrowded trains pre-race
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                Return trains fill fast after the race — allow 20-30 minutes after the podium for the initial crush to ease
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
                  Race day crowds are large. Leaving immediately after the final lap means joining the biggest exit wave.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  <strong className="text-foreground">By train:</strong> Fastest option. Trains fill quickly right after the race. Staying 20-30 minutes for the podium ceremony means a shorter queue at the station.
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  <strong className="text-foreground">By car:</strong> Expect 1-2 hours to exit the car park after the main race. Arriving very early on Sunday helps — you will be closer to the exit lane.
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  <strong className="text-foreground">By Sagalès bus:</strong> Return buses queue at the drop-off point. Expect a wait. Check confirmed times for race weekend before you travel.
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  If you have evening plans in Barcelona, build in at least 2 hours of buffer from the end of the race.
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
