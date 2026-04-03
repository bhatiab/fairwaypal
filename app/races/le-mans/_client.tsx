'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import { RACE_GUIDE_PAGES } from "@/lib/guideNav";
import { CURATED_COMPARISONS, canonicalMatchup } from "@/lib/compareUtils";
import Footer from "@/components/Footer";
import { Calendar, MapPin, ArrowLeft, Clock, Zap, HelpCircle, ChevronRight } from "lucide-react";

const race = getRaceBySlug('le-mans')!;
const guidePages = RACE_GUIDE_PAGES['le-mans'] ?? [];
const leMansCmps = CURATED_COMPARISONS.filter(([a, b]) => a === 'le-mans' || b === 'le-mans').slice(0, 3);

const SCHEDULE = [
  { day: 'Friday, May 8', sessions: ['Moto3 FP', 'Moto2 FP', 'MotoGP FP1', 'MotoGP Practice'] },
  { day: 'Saturday, May 9', sessions: ['Moto3 Qualifying + Race', 'Moto2 Qualifying + Race', 'MotoGP Qualifying', 'MotoGP Sprint Race'] },
  { day: 'Sunday, May 10', sessions: ['Moto3 Race', 'Moto2 Race', 'MotoGP Warm-Up', 'MotoGP Race (14:00 local)'] },
];

const HIGHLIGHTS = [
  { title: 'Record MotoGP attendance', desc: 'Over 311,000 fans attended in 2025 — the all-time MotoGP attendance record. One of the best atmospheres in world motorsport.' },
  { title: 'Famous for rain', desc: 'May in Le Mans is cool and wet. Multiple race weekends have featured full wet conditions. Pack waterproofs as a non-negotiable.' },
  { title: 'Dunlop Chicane action', desc: 'The Dunlop Chicane (turns 2–3) is the primary overtaking point and one of the most photographed spots in MotoGP.' },
  { title: 'Sprint weekend format', desc: 'Saturday sprint race + Sunday main event. Two chances to see MotoGP at full pace.' },
  { title: 'Circuit camping culture', desc: 'The Bugatti Circuit has a strong camping tradition from the 24 Hours of Le Mans. Camping zones ring the circuit and sell out early.' },
  { title: 'Easy Paris connection', desc: 'Direct TGV from Paris CDG airport — no city transit needed. From central Paris, it\'s just 55 minutes from Montparnasse.' },
];

const FAQ = [
  { q: 'Should I take the tram or drive to the circuit?', a: 'Take the tram. Tram T1 from the Gares stop (next to the train station) runs every few minutes on race days from 5:30 AM. Driving to the circuit on Sunday means severe congestion — post-race gridlock can last 2 hours.' },
  { q: 'Can I camp at the circuit?', a: 'Yes. Free camping zones (Houx, Epinettes, and others) are available on a first-come basis with no pre-booking needed. Premium GP Camp packages with tents, beds, and showers can be pre-booked via the official site.' },
  { q: 'Can I bring an umbrella?', a: 'Umbrellas are allowed in general admission areas but not in grandstands, as they obstruct views for other fans. A rain poncho is more practical.' },
  { q: 'What time do gates open?', a: 'Gates typically open at 7:00 AM on race days. With 311,000 fans attending, aim to be at the circuit by 8:00–8:30 AM on Sunday — the tram queues build fast.' },
];

export default function LeMansClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> All races
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            {race.name}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">{race.circuit}</p>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" /> {race.dates}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Le Mans, France
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" /> Sprint Weekend
            </span>
          </div>
        </div>
      </section>

      {/* Guide navigation pills */}
      {guidePages.length > 0 && (
        <section className="px-4 pb-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap gap-2">
              {guidePages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/races/le-mans/${page.slug}`}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary/80 transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {page.label} <ChevronRight className="inline h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Circuit Highlights */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">Circuit Highlights</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <p className="text-sm font-semibold text-foreground">{h.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekend Schedule */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Clock className="inline h-5 w-5 text-primary mr-2" />
            Race Weekend Schedule
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {SCHEDULE.map((day) => (
              <div key={day.day} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <p className="text-sm font-bold text-foreground mb-2">{day.day}</p>
                <ul className="space-y-1.5">
                  {day.sessions.map((s) => (
                    <li key={s} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="shrink-0 text-primary mt-0.5">—</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <HelpCircle className="inline h-5 w-5 text-primary mr-2" />
            Quick FAQ
          </h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <p className="text-sm font-semibold text-foreground">{item.q}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">Related guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/races/le-mans/costs" className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors">
              <p className="text-sm font-semibold text-foreground">Weekend Cost Breakdown</p>
              <p className="text-xs text-muted-foreground mt-1">Tickets, flights, hotels — what you'll actually spend</p>
            </Link>
            {leMansCmps.map(([a, b]) => {
              const matchup = canonicalMatchup(a, b);
              return (
                <Link key={matchup} href={`/compare/${matchup}`} className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors">
                  <p className="text-sm font-semibold text-foreground capitalize">{a.replace(/-/g, ' ')} vs {b.replace(/-/g, ' ')}</p>
                  <p className="text-xs text-muted-foreground mt-1">Compare costs, atmosphere, and logistics</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
