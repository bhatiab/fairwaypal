'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const race = getRaceBySlug('jerez')!;

const MISTAKES = [
  {
    id: 'accommodation',
    title: 'Booking hotels too late',
    detail: 'Jerez is a small city and hotels sell out months in advance for MotoGP weekend. If Jerez is full, look at El Puerto de Santa María (20 min), Cádiz (30 min), or Sanlúcar de Barrameda. Seville (1h15m) works but the daily commute adds up over three days.',
    severity: 'high' as const,
  },
  {
    id: 'arrival-time',
    title: 'Arriving too late on Sunday',
    detail: 'Over 100,000 fans attend on race day. The shuttle bus queue from Minotauro roundabout starts building by 8 AM. If you arrive after 10 AM, you will spend more time in queues than watching racing. Aim to be at the circuit by 9 AM.',
    severity: 'high' as const,
  },
  {
    id: 'ticket-printing',
    title: 'Not printing your ticket',
    detail: 'The circuit officially accepts both electronic and printed tickets, but recommends printed versions. Electronic tickets have been rejected at gates in previous years. Print your ticket — it takes 30 seconds and saves a potential disaster.',
    severity: 'high' as const,
  },
  {
    id: 'prohibited-items',
    title: 'Bringing glass or alcohol',
    detail: 'Glass containers, metal containers, and alcohol are prohibited. Plastic bottles are allowed but caps are confiscated at the gate. If you bring a picnic, use plastic containers and keep food items under 500g total.',
    severity: 'medium' as const,
  },
  {
    id: 'phone-signal',
    title: 'Relying on your phone for navigation and communication',
    detail: 'Mobile signal collapses on Sunday when 100,000+ fans hit the same cell towers. Download offline maps before you arrive, screenshot your ticket, and pre-arrange a physical meeting point with friends. Do not assume you can call, text, or use WhatsApp.',
    severity: 'high' as const,
  },
  {
    id: 'grandstand-transitions',
    title: 'Not budgeting time to move between grandstands',
    detail: 'The circuit is large and moving between grandstands takes 10-15 minutes on foot. If you want to watch Moto3 from one spot and MotoGP from another, plan the transition during a break between sessions — not during a session.',
    severity: 'medium' as const,
  },
  {
    id: 'parking',
    title: 'Driving to the circuit without pre-booked parking',
    detail: 'Free car parks (A, C, D) exist but require a shuttle bus to the entrance. Premium parking (B, A-10) is walking distance but costs €22 on the day — or just €12 if you pre-book online. On Sunday, the shuttle queue back to free parking can take over an hour.',
    severity: 'medium' as const,
  },
  {
    id: 'sun-protection',
    title: 'Forgetting sun protection',
    detail: 'Late April in Andalusia averages 23°C but feels hotter on an exposed grandstand with no shade. The UV index is moderate to high. Bring SPF 50+ sunscreen, a hat, and sunglasses. Reapply sunscreen at midday — you will be outside for 6-8 hours.',
    severity: 'medium' as const,
  },
  {
    id: 'ear-protection',
    title: 'Not bringing ear protection',
    detail: 'MotoGP bikes at full chat are genuinely loud — significantly louder than cars and louder than most people expect from watching on TV. From a grandstand near the straight or a braking zone, unprotected ears will hurt after 30 minutes. Foam earplugs cost €1 and save you from two days of ringing. Loop earplugs are better if you want to hear the circuit atmosphere while still protecting your hearing.',
    severity: 'medium' as const,
  },
  {
    id: 'taxi',
    title: 'Assuming you can get a taxi after the race',
    detail: 'Taxis in Jerez are scarce at the best of times. On race Sunday when 100,000 fans are leaving at once, taxis are essentially impossible to get without a pre-booked pickup. If you need a taxi home, arrange it before race day — not at the exit gate on Sunday afternoon. The shuttle bus from Minotauro roundabout is a much more reliable option.',
    severity: 'high' as const,
  },
  {
    id: 'cash',
    title: 'Not carrying cash',
    detail: 'Food stalls inside the circuit and many vendors in the city are cash-only or have slow card readers. The shuttle bus costs €1.10 — cash or contactless, but contactless fails when signal is poor. Tabancos (traditional sherry bars) in the city often operate cash-only. Withdraw €50-100 before you travel to the circuit on race day and keep coins for the shuttle.',
    severity: 'medium' as const,
  },
  {
    id: 'tickets-at-gate',
    title: 'Planning to buy grandstand tickets on the day',
    detail: 'C1, C2, and A10 — the most popular grandstands — typically sell out months before the race. If you are hoping to pick up tickets at the gate or from a tout, you will either get nothing or pay a significant premium. Buy tickets as soon as they go on sale. General admission is more available but even that sells out on race Sunday.',
    severity: 'high' as const,
  },
];

export default function MistakesClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/jerez" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Mistakes to Avoid
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            The things that catch people out at Jerez — sorted before you go
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
