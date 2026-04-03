'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Sun, CloudRain, ShieldAlert, Check, X, Thermometer } from "lucide-react";

const race = getRaceBySlug('jerez')!;

const ESSENTIALS = [
  { item: 'Sunscreen (SPF 50+)', why: 'Andalusian sun in late April is strong. You will burn on the grandstand.' },
  { item: 'Hat or cap', why: 'Limited shade at most viewing areas. Wide brim is better than a baseball cap.' },
  { item: 'Refillable water bottle (plastic, no cap)', why: 'You can bring plastic bottles inside but caps are confiscated at the gate. Buy a sport-top bottle.' },
  { item: 'Light rain jacket or poncho', why: 'Spring weather is variable — one dry day can be followed by showers. Pack layers.' },
  { item: 'Comfortable walking shoes', why: 'The circuit is spread out. You will walk 5-10km over the day between grandstands, food areas, and parking.' },
  { item: 'Power bank', why: 'Phone signal dies on Sunday when 100,000+ people are on the same cell towers. Your phone works harder searching for signal, draining battery fast.' },
  { item: 'Printed ticket', why: 'The circuit recommends printed tickets. Electronic versions are accepted but may occasionally be rejected at the gate.' },
  { item: 'Small cash (coins)', why: '€1.10 for the shuttle bus. Some vendors inside are cash-only.' },
  { item: 'Ear protection', why: 'MotoGP bikes are loud — especially from grandstands near the straight. Bring foam earplugs or loop earplugs.' },
];

const OPTIONAL = [
  { item: 'Camping chair (GA areas only)', why: 'If you have a general admission ticket, a lightweight folding chair makes the day much more comfortable. Not allowed in grandstands.' },
  { item: 'Small binoculars', why: 'Useful for watching distant corners and spotting rider numbers.' },
  { item: 'Light layers for morning', why: 'Mornings can be cool (15-17°C) before the afternoon sun hits. A hoodie or light jacket works.' },
  { item: 'Snacks under 500g', why: 'Non-alcoholic food under 500g is allowed inside. Circuit food is expensive — bring energy bars or sandwiches.' },
];

const PROHIBITED = [
  'Glass containers',
  'Metal containers',
  'Alcohol',
  'Plastic bottle caps (bottles OK, caps removed at gate)',
  'Objects over 500g',
  'Sharp objects',
  'Drones',
  'Pyrotechnics or flares',
  'Animals (except guide dogs)',
  'Scooters, bicycles, skateboards',
  'Professional cameras with detachable lenses (standard cameras OK)',
];

export default function PackingGuideClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/jerez" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Packing Guide
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            What to bring to Circuito de Jerez in late April
          </p>
        </div>
      </section>

      {/* Weather Context */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Thermometer className="inline h-5 w-5 text-primary mr-2" />
            Late April Weather
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border/50 bg-card/60 p-4 text-center">
              <Sun className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">23°C</p>
              <p className="text-xs text-muted-foreground">Average high</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/60 p-4 text-center">
              <CloudRain className="h-6 w-6 text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">Variable</p>
              <p className="text-xs text-muted-foreground">Spring weather — rain possible</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/60 p-4 text-center">
              <Sun className="h-6 w-6 text-orange-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">Strong UV</p>
              <p className="text-xs text-muted-foreground">Sunscreen is essential</p>
            </div>
          </div>
        </div>
      </section>

      {/* Essentials */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Essentials — Do Not Forget
          </h2>
          <div className="space-y-3">
            {ESSENTIALS.map((e) => (
              <div key={e.item} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{e.item}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{e.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Nice to Have
          </h2>
          <div className="space-y-3">
            {OPTIONAL.map((e) => (
              <div key={e.item} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-primary/60 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{e.item}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{e.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <ShieldAlert className="inline h-5 w-5 text-red-500 mr-2" />
            Prohibited Items
          </h2>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <p className="text-xs text-muted-foreground mb-3">These will be confiscated at the security check. Do not bring:</p>
            <ul className="space-y-2">
              {PROHIBITED.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
