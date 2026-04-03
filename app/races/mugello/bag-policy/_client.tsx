'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, ShieldCheck, ShieldAlert, Check, X, AlertTriangle, Info } from "lucide-react";

const race = getRaceBySlug('mugello')!;

const PROHIBITED = [
  { item: 'Glass containers — any size', note: 'Including glass bottles and jars. Will be confiscated at the gate.' },
  { item: 'Alcohol', note: 'Outside alcohol is prohibited inside the circuit viewing areas. If camping, keep alcohol at your campsite.' },
  { item: 'Drones and remote aircraft', note: 'Strictly prohibited. Will be confiscated and you may be refused entry.' },
  { item: 'Weapons, fireworks, flares, pyrotechnics', note: 'Despite the Tifosi tradition of smoke flares, these are officially prohibited. Confiscation and removal from the event.' },
  { item: 'Large umbrellas, tents, shelters', note: 'Small collapsible umbrellas are fine. Large beach umbrellas, tents, or pop-up shelters are not permitted inside the circuit.' },
  { item: 'Political or offensive banners', note: 'Flags and team banners are welcome. Political or offensive content is refused.' },
  { item: 'Animals (except registered assistance dogs)', note: 'Guide dogs and certified assistance animals are permitted with documentation.' },
  { item: 'Sharp objects or tools', note: 'Standard safety rules apply. Multi-tools, knives, and similar items are refused.' },
  { item: 'Professional cameras with lenses over 200mm', note: 'Standard cameras and smartphones are fine. Professional lenses longer than 200mm (fixed or removable) are not permitted.' },
];

const PERMITTED = [
  { item: 'Small backpack or tote bag', note: 'Any bag that can be easily searched by security. Oversized bags may be refused.' },
  { item: 'Plastic water bottle', note: 'Plastic bottles are permitted. Check at the gate for any cap rules specific to the event year.' },
  { item: 'Food for personal consumption', note: 'Reasonable amounts of non-alcoholic food — sandwiches, snacks, fruit. Not a full picnic hamper.' },
  { item: 'Small collapsible umbrella', note: 'Hand-held compact umbrella only. Not a large golf or beach umbrella.' },
  { item: 'Portable phone charger / power bank', note: 'Personal power banks are permitted. Essential given the poor mobile signal.' },
  { item: 'Folding seat or cushion (GA areas only)', note: 'Lightweight foldable chairs and seat cushions allowed in general admission. Not permitted in grandstands.' },
  { item: 'Sunscreen (non-aerosol)', note: 'Pump or lotion sunscreen is fine. Aerosol cans may be refused.' },
  { item: 'Binoculars', note: 'Personal binoculars are permitted. Useful for watching distant corners at this large circuit.' },
  { item: 'Standard camera (no detachable lens)', note: 'Point-and-shoot and mirrorless cameras without detachable lenses are generally fine.' },
  { item: 'Medication with documentation', note: 'Carry prescription medication with the prescription or a doctor\'s note to avoid delays at security.' },
];

const GATE_PROCESS = [
  {
    step: '1',
    title: 'Queue for security check',
    detail: 'Every person passes through a security check before entering the circuit. On race day, allow an extra 15-20 minutes for the queue. Arrive early to avoid long waits — the queue builds quickly after 9 AM on Sunday.',
  },
  {
    step: '2',
    title: 'Open your bag for inspection',
    detail: 'Security staff will check your bag. Be cooperative and open all compartments. Items clearly prohibited will be confiscated immediately. Unusual or ambiguous items may be inspected more closely.',
  },
  {
    step: '3',
    title: 'Prohibited items are confiscated — not stored',
    detail: 'There is no left-luggage or storage facility at the gate. Anything prohibited is taken and not returned. If you are camping, leave prohibited items at your campsite. If driving, leave them in your car.',
  },
  {
    step: '4',
    title: 'Bottle check',
    detail: 'Plastic bottles are generally allowed. Check at the gate for any cap removal rules specific to the event year. A sport-top bottle avoids any complications.',
  },
  {
    step: '5',
    title: 'Ticket scan',
    detail: 'After the bag check, your ticket is scanned. Have it ready — printed or digital. A printed ticket is strongly recommended at Mugello because mobile signal is extremely poor on race day.',
  },
];

export default function BagPolicyClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/mugello" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Bag Policy & Security
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            What you can and cannot bring into Autodromo del Mugello
          </p>
        </div>
      </section>

      {/* Key alert */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Prohibited items are not stored — they are confiscated</p>
                <p className="text-sm text-muted-foreground">
                  The circuit has no left-luggage facility at the gate. If you bring a prohibited item, it is taken and not returned. Leave anything borderline at your campsite, car, or hotel before heading to the entrance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited items */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <ShieldAlert className="inline h-5 w-5 text-red-500 mr-2" />
            Prohibited Items
          </h2>
          <div className="space-y-2">
            {PROHIBITED.map((p) => (
              <div key={p.item} className="rounded-xl border border-red-500/15 bg-red-500/5 p-4">
                <div className="flex items-start gap-3">
                  <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{p.item}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{p.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Permitted items */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <ShieldCheck className="inline h-5 w-5 text-green-500 mr-2" />
            Permitted Items
          </h2>
          <div className="space-y-2">
            {PERMITTED.map((p) => (
              <div key={p.item} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{p.item}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{p.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security process */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Info className="inline h-5 w-5 text-primary mr-2" />
            What Happens at the Gate
          </h2>
          <div className="space-y-3">
            {GATE_PROCESS.map((g) => (
              <div key={g.step} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary shrink-0">
                    {g.step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{g.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{g.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
