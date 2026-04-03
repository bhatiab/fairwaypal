'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Sun, CloudRain, ShieldAlert, Check, X, Thermometer, Wind } from "lucide-react";

const race = getRaceBySlug('le-mans')!;

const ESSENTIALS = [
  { item: 'Waterproof jacket (not a poncho)', why: 'Le Mans MotoGP has a strong reputation for rain. A proper waterproof jacket will serve you for all 3 days, including sessions where you\'re seated in a grandstand. A bin bag poncho is miserable if you\'re there all day.' },
  { item: 'Waterproof footwear or wellies', why: 'Camping areas and general admission grass sections turn muddy quickly in rain. Trainers will be wet within an hour. Wellies or waterproof walking shoes are worth the bulk.' },
  { item: 'Warm base layer + fleece', why: 'Temperatures start around 8°C in the morning. Even if the afternoon warms to 17–18°C, morning practice sessions on a cold grandstand feel colder than the forecast suggests.' },
  { item: 'Power bank (high capacity)', why: 'Mobile signal is poor on Sunday with 300,000+ fans on the same towers. Your phone works harder searching for signal, draining battery fast. A 20,000mAh power bank covers 2-3 full days.' },
  { item: 'Printed ticket', why: 'Electronic tickets are accepted but bring a printed copy as backup. In wet weather, phone screens are harder to read at the gate.' },
  { item: 'Ear protection', why: 'MotoGP bikes are loud at close range — especially in grandstands near the straight. Foam earplugs or Loop earplugs protect your hearing without blocking the atmosphere.' },
  { item: 'Refillable plastic water bottle (no cap)', why: 'Plastic bottles are allowed inside but must not be sealed or closed. Sport-top bottles designed for running work well. Stay hydrated — even cool days are long with lots of walking.' },
  { item: 'Small cash (euros)', why: 'Some circuit vendors and food stalls are cash-only. Carry €20–30 in small notes for convenience.' },
  { item: 'Portable phone charger cable', why: 'Most power banks need a USB-A or USB-C cable. Don\'t forget to pack it alongside the bank itself.' },
];

const OPTIONAL = [
  { item: 'Camping chair or lightweight stool (GA areas only)', why: 'If you have a general admission ticket, sitting beats standing for a full day. Chairs are not allowed in grandstands.' },
  { item: 'Compact binoculars', why: 'Useful for watching distant corners and reading bike numbers and liveries from the grandstand.' },
  { item: 'Snacks under 500g', why: 'Food under 500g is allowed inside. Circuit food is expensive — bring energy bars, sandwiches, or fruit.' },
  { item: 'Sunscreen (SPF 30+)', why: 'Even on overcast days, UV can be deceptive. If the sun does come out in the afternoon, you\'ll be glad you packed it.' },
  { item: 'Rain poncho (backup)', why: 'If your main waterproof is in the car or tent, a packable poncho in your bag handles an unexpected shower.' },
  { item: 'Small dry bag or waterproof pouch', why: 'Keeps your phone, ticket, and documents dry if you get caught in heavy rain in GA areas.' },
];

const PROHIBITED = [
  'Glass containers',
  'Metal containers',
  'Alcohol (cannot be brought in — available to purchase inside)',
  'Closed/sealed plastic bottles (bottles allowed, but must not be sealed)',
  'Objects over 500g / 500ml that could be thrown',
  'Sharp objects',
  'Drones',
  'Pyrotechnics, flares, or smoke bombs',
  'Umbrellas in grandstands (allowed in GA areas)',
  'Animals (except registered guide dogs)',
  'Laser pointers',
  'Professional cameras with very long telephoto lenses (standard cameras OK)',
];

export default function PackingGuideClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/le-mans" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Packing Guide
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            What to bring to the Bugatti Circuit in early May
          </p>
        </div>
      </section>

      {/* Weather Context */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Thermometer className="inline h-5 w-5 text-primary mr-2" />
            Early May Weather
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border/50 bg-card/60 p-4 text-center">
              <Sun className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">17–18°C</p>
              <p className="text-xs text-muted-foreground">Average high</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/60 p-4 text-center">
              <CloudRain className="h-6 w-6 text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">~50%</p>
              <p className="text-xs text-muted-foreground">Rain likely — pack waterproofs</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/60 p-4 text-center">
              <Wind className="h-6 w-6 text-slate-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">8°C</p>
              <p className="text-xs text-muted-foreground">Morning low — layers essential</p>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
            <p className="text-sm text-foreground font-semibold mb-1">The Le Mans weather reality</p>
            <p className="text-sm text-muted-foreground">Le Mans MotoGP has seen fully wet race weekends multiple times. Packing "just in case it rains" is the wrong mindset here — pack as though it will rain, and be pleasantly surprised if it stays dry. Mornings are consistently cold regardless of the forecast.</p>
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
