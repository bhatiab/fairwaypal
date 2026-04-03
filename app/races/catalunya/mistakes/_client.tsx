'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const race = getRaceBySlug('catalunya')!;

const MISTAKES = [
  {
    id: 'bag-size',
    title: 'Bringing a bag that is too large',
    detail: 'Circuit de Barcelona-Catalunya enforces a strict 15-litre bag limit. Standard backpacks are typically 20-30 litres and will be refused at the gate. Measure your bag before race day. A small daypack, drawstring bag, or waist pack that holds just your essentials is the right choice here.',
    severity: 'high' as const,
  },
  {
    id: 'food-policy',
    title: 'Expecting to bring food from outside',
    detail: 'Unlike most MotoGP circuits, Barcelona does not allow outside food or drinks (except documented medical needs). If you are used to packing sandwiches and snacks for a race day, this circuit will catch you out. Budget €15-25 for food inside the circuit, and eat breakfast before you go.',
    severity: 'high' as const,
  },
  {
    id: 'train-timing',
    title: 'Leaving Barcelona too late on Sunday',
    detail: 'The R2/R2N commuter train to Montmeló runs every 30 minutes. If you leave Barcelona after 9 AM on race day, you are joining the big wave and the trains will be packed. Aim to leave Sants or Passeig de Gràcia by 8:30 AM. The train from the airport takes longer — factor that in if you are flying in on Saturday.',
    severity: 'high' as const,
  },
  {
    id: 'accommodation',
    title: 'Booking Barcelona hotels too late',
    detail: 'Barcelona has a vast amount of accommodation but MotoGP weekend pushes prices up sharply and good options sell out months in advance. Book as soon as your tickets are confirmed. If Barcelona is too expensive, Granollers (next town to the circuit) and Sabadell have cheaper options, but they also book out. Set a price alert and lock something in early.',
    severity: 'high' as const,
  },
  {
    id: 'sun-exposure',
    title: 'Underestimating the sun at an exposed circuit',
    detail: 'Only the main grandstand (Tribuna) has a roof. Every other viewing area at Circuit de Barcelona-Catalunya is in direct sun. Mid-May UV in Catalonia is high. Without SPF 50+ sunscreen and a hat, you will burn within 2 hours and spend the rest of the day uncomfortable. There is no shade to retreat to in most grandstands.',
    severity: 'medium' as const,
  },
  {
    id: 'post-race-exit',
    title: 'Trying to take a taxi home after the race',
    detail: 'Taxis and rideshares are scarce at the circuit after the race. The few available are expensive and pre-booked. If you arrive by train, leave by train — it is faster than any road option for most of the post-race period. If driving, build in 1-2 hours of waiting time before you can exit the car park.',
    severity: 'medium' as const,
  },
  {
    id: 'mobile-signal',
    title: 'Relying on mobile data at the circuit',
    detail: 'Signal becomes unreliable on race day with large crowds. Download the Rodalies de Catalunya app and your ticket offline before you leave the hotel. Screenshot any booking confirmations. Agree on a physical meeting point with anyone you are attending with — do not assume messages will go through.',
    severity: 'medium' as const,
  },
  {
    id: 'grandstand-distance',
    title: 'Not accounting for the size of the circuit',
    detail: 'The circuit site is large. Walking from Turn 1 (Grandstand K area) to the hillside sector (Grandstand L) takes 15-20 minutes. If you want to move between sessions, plan the transition during the gap between races — not while a race is running. Missing the start of the MotoGP race because you are mid-circuit is frustrating.',
    severity: 'medium' as const,
  },
];

export default function MistakesClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/catalunya" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Mistakes to Avoid
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            The things that catch people out at Catalunya — sorted before you go
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

      <div className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/mistakes"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> All MotoGP mistakes
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
