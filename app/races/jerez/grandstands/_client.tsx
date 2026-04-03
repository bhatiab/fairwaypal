'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Eye, Trophy, Zap, AlertTriangle, Star } from "lucide-react";

const race = getRaceBySlug('jerez')!;

const GRANDSTANDS = [
  {
    id: 'c1-c2',
    name: 'C1 & C2',
    location: 'Turn 1',
    highlight: 'Best for overtaking',
    star: true,
    price: '€142–180 (3 days)',
    description: 'Positioned at the main braking zone after the start/finish straight. Riders arrive at over 270 km/h and brake hard — this is where the most dramatic overtaking happens. Lap 1 of the sprint and the main race is electric here as the full field compresses into Turn 1.',
    pros: ['Best overtaking action on the circuit', 'Close to start/finish energy', 'Multiple corners in view', 'Popular with experienced fans'],
    cons: ['Sells out earliest — buy immediately when tickets open', 'No shade on sunny afternoons', 'Can feel very crowded on race day'],
  },
  {
    id: 'a10',
    name: 'A10 (Dry Sack)',
    location: 'Final corner',
    highlight: 'Best for last-lap drama',
    star: true,
    price: '€155–205 (3 days)',
    description: 'Overlooks the final corner before the finish line. This is where last-lap battles get decided — riders who want to win must commit here. You can watch the approach, the braking point, and the exit directly toward the line. One of the most atmospheric grandstands in all of MotoGP.',
    pros: ['Last-lap battles are unmissable here', 'Clear sightline toward the finish straight', 'Podium celebration visible', 'Frequently cited as the best overall seat'],
    cons: ['Premium pricing', 'Distance from the first corner action', 'Still sells out fast'],
  },
  {
    id: 'x1',
    name: 'X1',
    location: 'Penultimate corner',
    highlight: 'Decisive moves before the line',
    star: false,
    price: '€142–175 (3 days)',
    description: 'Sits at the penultimate corner of the circuit. Riders who need to make a move before the final corner must commit here — tactical racing unfolds right in front of you. A strong choice for fans who want close action without paying the A10 premium.',
    pros: ['Excellent viewing angle of late-race tactics', 'Good value versus A10', 'Less well-known, so sometimes more available'],
    cons: ['More specialist choice than C1/C2 or A10', 'Limited sight of the start/finish action'],
  },
  {
    id: 'meta',
    name: 'Tribuna de Meta',
    location: 'Start/finish straight',
    highlight: 'Grid walk & podium view',
    star: false,
    price: '€160–200 (3 days)',
    description: 'The main grandstand opposite the pit lane, looking down the entire start/finish straight. The best place for the pre-race atmosphere, the rolling start, and the podium ceremony. If seeing the grid walk and the trophy presentation matters to you, this is your grandstand.',
    pros: ['Podium ceremony from here', 'Grid walk atmosphere on race morning', 'Iconic view down the straight', 'Often partially covered from the sun'],
    cons: ['Less overtaking visible compared to Turn 1 or final corner', 'Action can feel distant on the far corners'],
  },
];

const GA_SPOTS = [
  {
    name: 'Michelin Corner area',
    desc: 'One of the best GA zones on the circuit. Multiple corners are visible, the atmosphere is strong, and there is space to reposition between sessions.',
  },
  {
    name: 'Sito Pons Corner',
    desc: 'Mid-track GA zone with a clean viewing angle onto a fast section. Quieter than the main straight areas — easier to find good space early in the day.',
  },
  {
    name: 'Ángel Nieto / Peluqui Corners',
    desc: 'Final sector GA area. Combines views of the technical final corners with the energy of being close to the finish line. Named after MotoGP legend Ángel Nieto.',
  },
];

const TICKETS = [
  {
    tier: 'General Admission (Pelouse)',
    price: '€62–73',
    perks: 'Move freely around the circuit, watch from multiple zones, choose your own spot. Best value — and the most flexibility. Arrive early on race day to claim a good position.',
  },
  {
    tier: 'Grandstand (assigned seat)',
    price: '€142–205',
    perks: 'Numbered seat with a guaranteed view. No need to arrive early to secure your position. Essential if you want C1/C2 or A10.',
  },
  {
    tier: 'VIP / Ducati House',
    price: '€1,450+',
    perks: 'Luxury hospitality, paddock access, exclusive lounges, priority entry, and the best views on the circuit. Fully catered.',
  },
];

export default function GrandstandsClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/jerez" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Grandstands & Viewing Spots
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Where to sit at Circuito de Jerez — and what you will actually see
          </p>
        </div>
      </section>

      {/* Grandstand comparison */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Eye className="inline h-5 w-5 text-primary mr-2" />
            Grandstand Comparison
          </h2>
          <div className="space-y-4">
            {GRANDSTANDS.map((g) => (
              <div
                key={g.id}
                className={`rounded-xl border p-5 ${
                  g.star ? 'border-primary/30 bg-primary/5' : 'border-border/50 bg-card/60'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-foreground">{g.name}</p>
                      {g.star && <Star className="h-3.5 w-3.5 text-primary fill-primary" />}
                    </div>
                    <p className="text-xs text-muted-foreground">{g.location}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono text-primary">{g.price}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{g.highlight}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{g.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-2">Pros</p>
                    <ul className="space-y-1.5">
                      {g.pros.map((p) => (
                        <li key={p} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <span className="text-green-500 shrink-0 mt-0.5">+</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-2">Cons</p>
                    <ul className="space-y-1.5">
                      {g.cons.map((c) => (
                        <li key={c} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <span className="text-red-400 shrink-0 mt-0.5">–</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GA spots */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Zap className="inline h-5 w-5 text-primary mr-2" />
            General Admission (Pelouse) — Best Spots
          </h2>
          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 mb-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                GA is first-come, first-served. Arrive by 8 AM on race day to secure a good position. Late arrivals get whatever is left — and on a race Sunday with 100,000+ fans, that can mean a poor view.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {GA_SPOTS.map((s) => (
              <div key={s.name} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <p className="text-sm font-semibold text-foreground mb-1">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Trophy className="inline h-5 w-5 text-primary mr-2" />
            Ticket Price Tiers
          </h2>
          <div className="space-y-3">
            {TICKETS.map((t) => (
              <div key={t.tier} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <p className="text-sm font-semibold text-foreground">{t.tier}</p>
                  <span className="font-mono text-sm text-primary shrink-0">{t.price}</span>
                </div>
                <p className="text-xs text-muted-foreground">{t.perks}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-red-500/20 bg-red-500/5 p-4">
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Buy as early as possible:</strong> C1/C2 and A10 sell out months before the race. Do not wait until race month — those seats will be gone.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
