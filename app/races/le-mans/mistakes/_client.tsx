'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const race = getRaceBySlug('le-mans')!;

const MISTAKES = [
  {
    id: 'rain-gear',
    title: 'Treating rain as unlikely',
    detail: 'Le Mans MotoGP has a reputation for wet race weekends that goes back decades. Early May in the Sarthe region averages rain on roughly half of all days. The forecast changes overnight. Fans who pack light "just in case" end up soaked on a 7-hour day out. Pack a waterproof jacket, waterproof footwear, and a dry bag for your phone and ticket — and assume it will rain.',
    severity: 'high' as const,
  },
  {
    id: 'accommodation',
    title: 'Booking hotels too late',
    detail: 'Le Mans MotoGP is the highest-attended MotoGP race on the calendar, with over 311,000 fans attending in 2025. Hotels in Le Mans city centre sell out 6–12 months in advance. If you have a ticket and no accommodation, start looking immediately. Fallback options: circuit camping (free, no pre-booking), GP Camp premium camping (pre-book via the official site), or towns like Laval or Alençon with a train connection.',
    severity: 'high' as const,
  },
  {
    id: 'driving',
    title: 'Driving to the circuit on Sunday',
    detail: 'The roads around the Bugatti Circuit gridlock severely on race day. Post-race, car parks can be effectively stationary for 2 hours. Tram T1 from the Gares stop at Le Mans train station takes 20 minutes, runs every few minutes, and is the correct transport choice. If you must drive, either leave before the podium ceremony or plan to wait 45–60 minutes at the circuit before setting off.',
    severity: 'high' as const,
  },
  {
    id: 'phone-signal',
    title: 'Relying on your phone to navigate and communicate',
    detail: 'Mobile networks at Le Mans collapse on Sunday with 300,000+ fans sharing the same towers. Download offline maps before you leave accommodation, screenshot your ticket as a backup, and agree on a physical meeting point with your group — a named grandstand entrance or food stand. Do not assume you can call, text, or use WhatsApp on race day.',
    severity: 'high' as const,
  },
  {
    id: 'sealed-bottles',
    title: 'Bringing a sealed plastic bottle',
    detail: 'Le Mans has an unusual rule: plastic bottles are allowed, but they must not be sealed or closed. If your bottle has a screw cap, it will either be confiscated or you\'ll be asked to remove the lid at the gate. Sport-top bottles designed for running — with a push-pull valve rather than a screw cap — are the practical solution.',
    severity: 'medium' as const,
  },
  {
    id: 'arrival-time',
    title: 'Arriving too late on Sunday',
    detail: 'With 300,000+ fans attending and a single tram line serving much of the crowd, the queues build fast on Sunday morning. Aim to be at the circuit by 8:30 AM. The tram from the Gares stop can have long queues from 9 AM onwards. If you are in general admission, arriving later means fewer good viewing spots.',
    severity: 'medium' as const,
  },
  {
    id: 'return-train',
    title: 'Not booking the return TGV in advance',
    detail: 'Sunday evening TGVs from Le Mans back to Paris are popular with race fans. They fill up — especially the 17:00–20:00 departures. If you book these trains on the day, you may find only expensive flexible fares left or no availability at all. Book your outbound and return trains at the same time as your ticket.',
    severity: 'medium' as const,
  },
  {
    id: 'umbrellas-grandstand',
    title: 'Bringing an umbrella into a grandstand',
    detail: 'Umbrellas are prohibited in grandstands because they obstruct the view for fans behind you. This rule is enforced. A waterproof jacket and a rain poncho as a backup are the correct solution for grandstand seats. In general admission areas, umbrellas are typically permitted, but check current rules before assuming.',
    severity: 'medium' as const,
  },
];

export default function MistakesClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/le-mans" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Mistakes to Avoid
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            The things that catch people out at Le Mans — sorted before you go
          </p>
        </div>
      </section>

      {/* Mistakes List */}
      <section id="mistakes" className="px-4 pb-12">
        <div className="mx-auto max-w-3xl space-y-4">
          {MISTAKES.map((m, i) => (
            <div
              key={m.id}
              id={m.id}
              className={`rounded-xl border p-5 ${
                m.severity === 'high'
                  ? 'border-red-500/30 bg-red-500/5'
                  : 'border-border/50 bg-card/60'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold shrink-0 ${
                  m.severity === 'high'
                    ? 'bg-red-500/20 text-red-400'
                    : 'bg-primary/10 text-primary'
                }`}>
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    {m.title}
                    {m.severity === 'high' && (
                      <AlertTriangle className="h-3.5 w-3.5 text-red-400" />
                    )}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
