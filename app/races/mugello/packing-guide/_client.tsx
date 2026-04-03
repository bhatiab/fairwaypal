'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Sun, CloudRain, ShieldAlert, Check, X, Thermometer } from "lucide-react";

const race = getRaceBySlug('mugello')!;

const ESSENTIALS = [
  { item: 'Sunscreen (SPF 50+)', why: 'Late May Tuscan sun is strong, and the circuit has many exposed hillside viewing areas. You will be outside for 6-8 hours.' },
  { item: 'Hat or cap', why: 'Limited shade at most GA areas and some grandstands. Essential for all-day sun protection.' },
  { item: 'Refillable water bottle (plastic)', why: 'Staying hydrated is critical. Bring a plastic bottle — glass is prohibited. Check gate rules on caps.' },
  { item: 'Rain jacket or poncho', why: 'Late May weather in the Tuscan hills is variable. Rain showers can roll in quickly even on warm days. A lightweight waterproof is essential.' },
  { item: 'Comfortable walking shoes with grip', why: 'The circuit is hilly. GA areas involve walking on grass slopes and uneven terrain. Trainers or hiking-style shoes with good grip are much better than sandals.' },
  { item: 'Power bank', why: 'Phone signal collapses on race day when 100,000+ fans overwhelm the cell towers. Your phone drains battery fast searching for signal.' },
  { item: 'Printed ticket', why: 'Print your ticket as a backup. Mobile tickets can fail when data signal is poor — and signal is almost always poor at Mugello on race day.' },
  { item: 'Cash (euros)', why: 'Food stalls inside the circuit and vendors in the surrounding area often prefer cash. Withdraw €50-100 before heading to the circuit.' },
  { item: 'Ear protection', why: 'MotoGP bikes on Mugello\'s main straight hit over 366 km/h — this is the fastest point on the entire calendar. The noise is physical. Bring foam earplugs at minimum.' },
];

const OPTIONAL = [
  { item: 'Camping chair or cushion', why: 'If you are in GA areas, a lightweight folding chair or seat pad makes a long day on the hillside much more comfortable. Not allowed in grandstands.' },
  { item: 'Small binoculars', why: 'The circuit is large and some corners are distant from the main viewing areas. Binoculars help for spotting rider numbers.' },
  { item: 'Warm layer for morning', why: 'Mugello is at 257m elevation. Mornings can be cool (14-16°C) before the afternoon warms up. A fleece or hoodie for the early sessions is worth packing.' },
  { item: 'Snacks', why: 'Food inside the circuit can be expensive. Sandwiches, energy bars, and fruit are good to have. Check weight/size rules at the gate.' },
  { item: 'Camping gear (if camping)', why: 'Sleeping bag, tent, and basic supplies if you are joining the legendary Mugello camping experience. Nights in late May can dip to 10-12°C in the hills.' },
];

const PROHIBITED = [
  'Glass containers',
  'Alcohol brought from outside',
  'Drones',
  'Pyrotechnics or flares (despite what you see the Tifosi doing)',
  'Sharp objects',
  'Professional cameras with detachable lenses',
  'Large umbrellas, tents, or shelters (inside the circuit)',
  'Animals (except registered assistance dogs)',
  'Scooters, bicycles, skateboards',
];

export default function PackingGuideClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/mugello" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Packing Guide
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            What to bring to Mugello in late May
          </p>
        </div>
      </section>

      {/* Weather Context */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Thermometer className="inline h-5 w-5 text-primary mr-2" />
            Late May Weather at Mugello
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border/50 bg-card/60 p-4 text-center">
              <Sun className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">24-27°C</p>
              <p className="text-xs text-muted-foreground">Afternoon high</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/60 p-4 text-center">
              <CloudRain className="h-6 w-6 text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">Variable</p>
              <p className="text-xs text-muted-foreground">Spring showers possible</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/60 p-4 text-center">
              <Sun className="h-6 w-6 text-orange-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">14-16°C</p>
              <p className="text-xs text-muted-foreground">Cool mornings at 257m elevation</p>
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
            <p className="text-xs text-muted-foreground mb-3">These will be confiscated at security. Do not bring:</p>
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
