'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import { RACE_GUIDE_PAGES } from "@/lib/guideNav";
import { CURATED_COMPARISONS, canonicalMatchup } from "@/lib/compareUtils";
import Footer from "@/components/Footer";
import { Calendar, MapPin, ArrowLeft, Clock, Zap, HelpCircle, ChevronRight } from "lucide-react";

const race = getRaceBySlug('catalunya')!;
const guidePages = RACE_GUIDE_PAGES['catalunya'] ?? [];
const catalunyaCmps = CURATED_COMPARISONS.filter(([a, b]) => a === 'catalunya' || b === 'catalunya').slice(0, 3);

const SCHEDULE = [
  { day: 'Friday, May 15', sessions: ['Moto3 FP', 'Moto2 FP', 'MotoGP FP1', 'MotoGP Practice'] },
  { day: 'Saturday, May 16', sessions: ['Moto3 Qualifying + Race', 'Moto2 Qualifying + Race', 'MotoGP Qualifying', 'MotoGP Sprint Race'] },
  { day: 'Sunday, May 17', sessions: ['Moto3 Race', 'Moto2 Race', 'MotoGP Warm-Up', 'MotoGP Race (14:00 local)'] },
];

const HIGHLIGHTS = [
  { title: 'Technical medium-speed layout', desc: 'A mix of fast flowing sectors and tight technical corners — challenging for riders and spectacular to watch.' },
  { title: 'Mediterranean climate', desc: 'Mid-May brings warm afternoons. The circuit is exposed — sun protection and layers for the morning are essential.' },
  { title: 'Close to Barcelona city', desc: '30km northeast of central Barcelona. 30 minutes by commuter train — one of the most accessible circuits on the calendar.' },
  { title: 'Sprint weekend format', desc: 'Saturday sprint race + Sunday main event. Two MotoGP races in one weekend.' },
  { title: 'Turn 1 overtaking zone', desc: 'Grandstand K overlooks the heavy braking zone into Turn 1 — the circuit\'s primary overtaking spot after the long main straight.' },
  { title: 'Multi-sector hillside views', desc: 'Grandstand L sits on a hillside covering the middle sector. Watch multiple corners from one seat.' },
];

const FAQ = [
  { q: 'How do I get from Barcelona to the circuit?', a: 'R2/R2N commuter train from Sants, Passeig de Gràcia, or El Clot to Montmeló station (~30 min, €2.80). Free shuttle buses run from Montmeló station to the circuit gates on race weekend.' },
  { q: 'Can I bring food from outside?', a: 'No outside food or beverages allowed (except documented medical needs). PET plastic bottles up to 1.5L are permitted. Backpacks over 15 litres are prohibited. Plan to buy food inside the circuit.' },
  { q: 'What time do gates open?', a: 'Gates typically open at 8:00 AM on Friday and Saturday, and 7:00 AM on Sunday. Check official communications — times are confirmed closer to the event.' },
  { q: 'Is there parking at the circuit?', a: 'Yes. Pre-booking parking online is strongly recommended — on-the-day parking costs more and fills early. Allow extra time for the post-race exit if driving.' },
];

export default function CatalunyaClient() {
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
              <MapPin className="h-4 w-4 text-primary" /> Montmeló, Spain
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
                  href={`/races/catalunya/${page.slug}`}
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
            <Link href="/races/catalunya/costs" className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors">
              <p className="text-sm font-semibold text-foreground">Weekend Cost Breakdown</p>
              <p className="text-xs text-muted-foreground mt-1">Tickets, flights, hotels — what you'll actually spend</p>
            </Link>
            <Link href="/first-time/catalunya" className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors">
              <p className="text-sm font-semibold text-foreground">First Time at Catalunya?</p>
              <p className="text-xs text-muted-foreground mt-1">Viewing spots, transport, and what to expect</p>
            </Link>
            {catalunyaCmps.map(([a, b]) => {
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
