'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Eye, Trophy, Zap, AlertTriangle, Star } from "lucide-react";

const race = getRaceBySlug('mugello')!;

const GRANDSTANDS = [
  {
    id: 'materassi',
    name: 'Tribuna Materassi',
    location: 'Turns 2-7 (San Donato area)',
    highlight: 'Great value, legendary atmosphere',
    star: true,
    price: '€255 (3 days)',
    description: 'Positioned at the first corner after the 1.1 km main straight. Riders arrive at over 366 km/h and brake hard into San Donato — this is the primary overtaking zone on the circuit. Lap 1 of every race is spectacular from here as the full field compresses into the braking zone.',
    pros: ['Best overtaking action on the circuit', 'Main straight speed visible as bikes approach', 'Electric lap 1 atmosphere', 'Views of the braking zone and corner entry'],
    cons: ['Sells out earliest — buy as soon as tickets open', 'Premium pricing', 'Can feel very crowded on race day'],
  },
  {
    id: 'poggio-secco',
    name: 'Tribuna Poggio Secco',
    location: 'Turns 2-7 area',
    highlight: 'Best value grandstand',
    star: true,
    price: '€265 (3 days)',
    description: 'An elevated grandstand overlooking the famous Casanova-Savelli chicane — one of the most demanding sections in MotoGP. Riders change direction at high speed through a sequence that rewards commitment and punishes mistakes. The elevation gives excellent sightlines over a large section of the circuit.',
    pros: ['Elevated position with wide views', 'Iconic Casanova-Savelli chicane action', 'One of the most photogenic viewing points', 'Often has tickets available longer than Materassi'],
    cons: ['More of a specialist corner — less raw overtaking than Turn 1', 'Exposed to sun in the afternoon'],
  },
  {
    id: 'arrabbiata-58',
    name: 'Tribuna Arrabbiata 58',
    location: 'Arrabbiata corners (end of lap)',
    highlight: 'Close to riders in braking zones',
    star: false,
    price: '€295 (3 days)',
    description: 'Open grandstand at the U-shaped Arrabbiata curves near the end of the lap. Close to the riders in the braking zones — you can see the commitment required through these fast corners. Note: daily access 08:00-18:00 only, and you must enter via the Arrabbiata entrance.',
    pros: ['Close-up views of riders braking and cornering', 'Dramatic lean angles through Arrabbiata', 'End-of-lap action where races are decided', 'Good atmosphere'],
    cons: ['Cannot be combined with camper ticket', 'Access restricted to Arrabbiata entrance only', 'Daily access 08:00-18:00 only'],
  },
  {
    id: 'tribuna-centrale',
    name: 'Tribuna Centrale Bronze',
    location: 'Start/finish straight',
    highlight: 'Grid walk & podium view',
    star: false,
    price: '€345 (3 days)',
    description: 'The main grandstand opposite the pit lane on the 1.1 km straight. Covered seating with screens. The best place for the pre-race atmosphere, grid walk, race starts, and podium ceremony. Higher tiers (Silver €405, Poltronissima €455) offer premium covered seats with garage views.',
    pros: ['Podium ceremony from here', 'Grid walk and race start atmosphere', 'Covered seating with screens', 'Pit exit and garages visible'],
    cons: ['Less cornering action visible', 'Far corners are distant', 'Premium pricing — most expensive grandstand'],
  },
];

const GA_SPOTS = [
  {
    name: 'Hillside above Arrabbiata',
    desc: 'One of Mugello\'s natural amphitheatre viewing zones. The grassy hillside above the Arrabbiata corners gives a wide panoramic view of the circuit. Arrive early to claim a good spot — bring a blanket or folding chair.',
  },
  {
    name: 'Correntaio area',
    desc: 'GA zone in the Correntaio section with views over a technical part of the circuit. Less crowded than the Turn 1 area and easier to find space on race day.',
  },
  {
    name: 'Bucine section',
    desc: 'GA viewing along the Bucine corners. Multiple positions available with different views. The natural terrain provides some elevation for better sightlines.',
  },
];

const TICKETS = [
  {
    tier: 'General Admission (Prato)',
    price: 'from €24/day, €165 weekend',
    perks: 'Move freely around the GA zones. Watch from multiple hillside positions. Best value and flexibility. Prato Night & Day option includes camping inside the circuit. Arrive early on race day. Children under 15: 50% off.',
  },
  {
    tier: 'Grandstand (assigned seat)',
    price: '€255–455 (3 days)',
    perks: 'Numbered seat with a guaranteed view. Range from Materassi (€255) to Poltronissima Pit Lane (€455). Weekend ticket holders get access to ALL grandstands on Friday. Children under 15: 50% off.',
  },
  {
    tier: 'Correntaio (Ducati Grandstand)',
    price: '€290 (3 days)',
    perks: 'Popular with Ducati fans. Includes free cap and t-shirt on Sunday. Views of the Correntaio curve. Rider meet-and-greet opportunities.',
  },
];

export default function GrandstandsClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/mugello" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Grandstands & Viewing Spots
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Where to sit at Mugello — and what you will actually see
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
            General Admission (Prato) — Best Spots
          </h2>
          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 mb-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                GA is first-come, first-served. Mugello&apos;s natural hillside amphitheatre provides excellent viewing, but the best spots go early. Arrive by 8 AM on race day to secure a good position. Late arrivals may find limited viewing options.
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
              <strong className="text-foreground">Buy as early as possible:</strong> Mugello is one of MotoGP&apos;s most popular races. Tribuna Materassi and the best grandstands sell out months before the race. Do not wait until race month.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
