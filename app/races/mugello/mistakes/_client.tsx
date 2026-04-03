'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const race = getRaceBySlug('mugello')!;

const MISTAKES = [
  {
    id: 'accommodation',
    title: 'Booking accommodation too late',
    detail: 'Mugello is in a rural Tuscan valley with very limited hotel capacity near the circuit. Scarperia and Borgo San Lorenzo have a handful of hotels and agriturismos that sell out months in advance. If you wait until a few weeks before, you will end up in Florence — which is fine for sightseeing but means a 40-60 minute commute each way on race days. Book as early as possible, or embrace the camping culture.',
    severity: 'high' as const,
  },
  {
    id: 'arrival-time',
    title: 'Arriving too late on race day',
    detail: 'Over 100,000 fans attend Mugello on Sunday. The roads into the valley start filling up from early morning, and the best GA hillside spots go quickly. If you are driving, aim to arrive by 8 AM. If you are on the shuttle from Florence, take the earliest available departure. Arriving after 10 AM means traffic queues and limited viewing positions.',
    severity: 'high' as const,
  },
  {
    id: 'ticket-printing',
    title: 'Not printing your ticket',
    detail: 'Mobile signal at Mugello is extremely poor on race day — 100,000 fans in a rural valley overwhelm the cell towers. If your ticket is on your phone and your phone cannot connect, you have a problem at the gate. Print your ticket and bring the paper version. Screenshot it too, but paper is the safest backup.',
    severity: 'high' as const,
  },
  {
    id: 'prohibited-items',
    title: 'Bringing glass or alcohol',
    detail: 'Glass containers and outside alcohol are prohibited at the circuit. Security checks are enforced at the gates. If you are camping, you can keep glass and alcohol at your campsite — just do not try to bring them into the circuit viewing areas.',
    severity: 'medium' as const,
  },
  {
    id: 'phone-signal',
    title: 'Relying on your phone for navigation and communication',
    detail: 'The Mugello valley has limited cell tower coverage at the best of times. On race day with 100,000+ fans, data becomes essentially unusable. Download offline maps of the area before you arrive, agree on a physical meeting point with friends, and do not rely on messaging apps or GPS navigation post-race.',
    severity: 'high' as const,
  },
  {
    id: 'ear-protection',
    title: 'Not bringing ear protection',
    detail: 'Mugello\'s main straight is the fastest on the MotoGP calendar — bikes pass at over 366 km/h. The noise is not like watching on TV. From any grandstand or GA area near the straight, unprotected ears will hurt quickly. Foam earplugs cost €1 and save you from ringing ears all evening. Loop earplugs are better if you want to hear the atmosphere.',
    severity: 'medium' as const,
  },
  {
    id: 'traffic',
    title: 'Underestimating post-race traffic',
    detail: 'This is probably the single biggest complaint from first-time Mugello visitors. The circuit is in a valley with limited road access. After the MotoGP race, 100,000 fans all try to leave at once via the same roads. Expect 2-3 hours to reach the A1 motorway. Solutions: leave before the podium, wait an hour for the rush to thin, or camp and leave Monday morning.',
    severity: 'high' as const,
  },
  {
    id: 'taxi',
    title: 'Assuming you can get a taxi after the race',
    detail: 'Mugello is a rural circuit, not a city venue. There is no taxi rank at the gate. Ride-hailing apps will not work because there is no mobile signal and very few drivers in the area. If you do not have your own car, the shuttle, or a pre-arranged pickup, you are stuck. Plan your return transport before race day.',
    severity: 'high' as const,
  },
  {
    id: 'cash',
    title: 'Not carrying cash',
    detail: 'Food and drink vendors inside the circuit and in the surrounding area often prefer or require cash. Card machines rely on mobile signal, which dies on race day. Withdraw €50-100 from an ATM before heading to the circuit. The nearest ATMs to the circuit are in Scarperia or Borgo San Lorenzo.',
    severity: 'medium' as const,
  },
  {
    id: 'tickets-at-gate',
    title: 'Planning to buy grandstand tickets on the day',
    detail: 'Mugello is one of the most popular races on the MotoGP calendar. The best grandstands — Tribuna Materassi at Turn 1, Tribuna Poggio Secco, and Tribuna Biondetti — sell out well in advance. General admission (Prato) tickets are more available but even these sell out for race day. Buy your tickets as soon as they go on sale.',
    severity: 'high' as const,
  },
  {
    id: 'weather-layers',
    title: 'Not packing for variable weather',
    detail: 'Mugello sits at 257m elevation in the Tuscan hills. Late May can bring warm afternoons (24-27°C) but cool mornings (14-16°C), and rain showers can arrive quickly. Fans who pack only for sunshine get caught out. Bring layers and a rain jacket every day, even if the forecast looks dry.',
    severity: 'medium' as const,
  },
];

export default function MistakesClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/mugello" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Mistakes to Avoid
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            The things that catch people out at Mugello — sorted before you go
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
