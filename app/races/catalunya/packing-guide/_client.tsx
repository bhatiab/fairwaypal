'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Sun, CloudRain, ShieldAlert, Check, X, Thermometer } from "lucide-react";

const race = getRaceBySlug('catalunya')!;

const ESSENTIALS = [
  { item: 'Sunscreen (SPF 50+)', why: 'Almost every seat at Circuit de Barcelona-Catalunya is fully exposed. May sun in Catalonia is strong — UV index is moderate to high by mid-morning. Reapply at midday.' },
  { item: 'Hat or cap', why: 'Only the main grandstand (Tribuna) has a roof. Everywhere else you are in direct sun for the entire day. Wide-brim offers better protection than a baseball cap.' },
  { item: 'PET plastic bottle (up to 1.5L, no cap)', why: 'Plastic bottles are allowed inside if they are under 1.5 litres. No glass, no metal, and caps are typically removed at the entrance. Buy a sport-top or bring one without a standard cap.' },
  { item: 'Light rain jacket or poncho', why: 'May averages around 6 rainy days. Mediterranean spring weather is variable. A quick-dry rain layer adds little weight and saves the day if a storm rolls in.' },
  { item: 'Comfortable walking shoes', why: 'The circuit site is large. You will walk significantly between grandstands, food areas, and transport. Trainers or broken-in shoes — not sandals or flip-flops.' },
  { item: 'Power bank', why: 'Mobile signal weakens when 70,000+ fans hit the same towers. Your phone works harder, draining the battery faster. A power bank keeps you operational for navigation and tickets.' },
  { item: 'Ear protection', why: 'MotoGP bikes peak above 120dB. If you are in a grandstand near the main straight or Turn 1, earplugs are worth having. Foam earplugs take up almost no space.' },
  { item: 'Cash (euros)', why: 'Some food and merchandise vendors inside the circuit are cash-only. Having €20-30 in cash avoids problems.' },
  { item: 'Printed or screenshot ticket', why: 'Mobile signal can be unreliable at entry. Having your ticket already downloaded or printed avoids any gate issues.' },
];

const OPTIONAL = [
  { item: 'Binoculars', why: 'Useful for watching distant corners. Grandstand L covers multiple corners but some are 300-400m away.' },
  { item: 'Light layers for the morning', why: 'May mornings in Montmeló average 14°C. Bring a light hoodie or zip-up that you can remove when it warms up by midday.' },
  { item: 'Sunglasses', why: 'The grandstands face west in places. Afternoon sun directly in your eyes is a real issue if you are in an uncovered section facing the wrong direction.' },
  { item: 'Small backpack (under 15L)', why: 'The circuit prohibits backpacks over 15 litres. A small daypack keeps your hands free and passes security checks. Measure before you pack.' },
];

const PROHIBITED = [
  'Backpacks over 15 litres',
  'Glass containers',
  'Metal containers (cans, flasks)',
  'Ceramic or wooden containers',
  'Alcohol',
  'Food and drinks from outside (except documented medical needs)',
  'PET plastic bottles over 1.5 litres',
  'Drones of any type',
  'Sharp objects or knives',
  'Sprays (deodorant, insect repellent in spray form)',
  'Fireworks or pyrotechnics',
  'Musical instruments',
  'Laser pointers',
  'Air horns',
  'Bicycles, scooters, skateboards',
  'Professional cameras with detachable lenses',
];

export default function PackingGuideClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/catalunya" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Packing Guide
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            What to bring to Circuit de Barcelona-Catalunya in mid-May
          </p>
        </div>
      </section>

      {/* Bag Policy Warning */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
            <p className="text-sm font-semibold text-foreground mb-1">Important: strict bag and food policy</p>
            <p className="text-sm text-muted-foreground">
              Circuit de Barcelona-Catalunya does not allow outside food or drinks (except documented medical needs). Backpacks over 15 litres are refused at the gate. Plan your bag size carefully and budget to buy food inside the circuit.
            </p>
          </div>
        </div>
      </section>

      {/* Weather Context */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Thermometer className="inline h-5 w-5 text-primary mr-2" />
            Mid-May Weather
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border/50 bg-card/60 p-4 text-center">
              <Sun className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">21°C</p>
              <p className="text-xs text-muted-foreground">Average high</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/60 p-4 text-center">
              <CloudRain className="h-6 w-6 text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">Variable</p>
              <p className="text-xs text-muted-foreground">~6 rainy days in May</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/60 p-4 text-center">
              <Sun className="h-6 w-6 text-orange-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">Strong UV</p>
              <p className="text-xs text-muted-foreground">Most seats in full sun</p>
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
