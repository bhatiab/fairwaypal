'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Users, Signal, MapPin, Clock, Flag, Zap, Info } from "lucide-react";

const race = getRaceBySlug('jerez')!;

const WEEKEND_STRUCTURE = [
  {
    day: 'Friday — Practice',
    sessions: [
      'Moto3 Free Practice',
      'Moto2 Free Practice',
      'MotoGP Free Practice 1 (FP1)',
      'MotoGP Practice',
    ],
    tip: 'Quietest day. Great for exploring the circuit, finding your seats, and watching without the pressure of race-day crowds.',
  },
  {
    day: 'Saturday — Qualifying + Sprint',
    sessions: [
      'Moto3 Qualifying + Race',
      'Moto2 Qualifying + Race',
      'MotoGP Qualifying',
      'MotoGP Sprint Race',
    ],
    tip: 'The sprint race is only half the distance of Sunday but counts for championship points. This is real racing — not a warm-up.',
  },
  {
    day: 'Sunday — Race Day',
    sessions: [
      'Moto3 Race',
      'Moto2 Race',
      'MotoGP Warm-Up',
      'MotoGP Race (14:00 local)',
    ],
    tip: 'Arrive by 9 AM at the latest. Over 100,000 fans attend — the queues build fast. The MotoGP race starts at 2 PM local time.',
  },
];

const CLASSES_EXPLAINED = [
  {
    name: 'Moto3',
    desc: '250cc single-cylinder bikes, top speed ~250 km/h. The junior class — riders are often 16-20 years old. Close racing, big slipstream battles, and frequent lead changes.',
  },
  {
    name: 'Moto2',
    desc: '765cc Triumph triple-cylinder engines. The feeder class to MotoGP. Riders here are the future MotoGP stars. More power than Moto3, fewer electronics than MotoGP.',
  },
  {
    name: 'MotoGP',
    desc: '1000cc prototype machines making 250+ horsepower. Top speeds over 350 km/h. The pinnacle of motorcycle racing. Ducati, Aprilia, KTM, Honda, and Yamaha compete with factory and satellite teams.',
  },
];

const TIPS = [
  {
    icon: Clock,
    title: 'Arrive early on Sunday',
    detail: 'Gates open at 6 AM. The shuttle bus queue from Minotauro roundabout starts building by 8 AM. Aim to be at the circuit by 9 AM. You will not find a good spot if you arrive after 10 AM in general admission.',
  },
  {
    icon: MapPin,
    title: 'Moving between grandstands takes time',
    detail: 'Circuito de Jerez is a big circuit. Moving from one grandstand to another can take 10-15 minutes on foot. Plan ahead if you want to watch different sessions from different spots.',
  },
  {
    icon: Signal,
    title: 'Phone signal dies on Sunday',
    detail: 'With 100,000+ fans on the same cell towers, mobile data becomes almost unusable on race day. Download offline maps, agree on a meeting point with friends beforehand, and don\'t rely on messaging apps to coordinate.',
  },
  {
    icon: Users,
    title: 'Meeting riders',
    detail: 'The paddock is not open to standard ticket holders, but fan zones often have appearances. Your best chance to see riders up close is around team hotels in Jerez city centre on Thursday and Friday evenings.',
  },
  {
    icon: Flag,
    title: 'Track invasion after the race',
    detail: 'At Jerez, fans are sometimes allowed onto the track after the MotoGP race. This is not guaranteed and depends on the organiser — but if it happens, it\'s one of the best experiences in motorsport.',
  },
  {
    icon: Info,
    title: 'Pre-arrange meeting points',
    detail: 'Pick a specific landmark or grandstand entrance as your meeting point with friends. With phone signal down, you cannot rely on calls or messages to find each other in a crowd of 100,000.',
  },
];

const BEYOND_RACE = [
  {
    title: 'Sherry — the world\'s best, made here',
    detail: 'Jerez is the origin of sherry wine. The major bodegas (González Byass/Tío Pepe, Lustau, Fundador) run cellar tours and tastings. An afternoon at a bodega is one of the best things you can do on the Thursday before the racing starts.',
  },
  {
    title: 'Royal Andalusian School of Equestrian Art',
    detail: 'A world-famous dressage school with regular public shows. "How the Andalusian Horses Dance" is a spectacular display of classical riding. Book well ahead — it sells out, and shows run on specific days of the week.',
  },
  {
    title: 'Flamenco — the real kind',
    detail: 'Jerez has its own style of flamenco, considered by many the most authentic. Skip the tourist shows and go to a tabanco (traditional sherry bar) at night — Tabanco El Pasaje is the most famous. Impromptu flamenco happens naturally during race week.',
  },
];

const PRACTICAL_TIPS = [
  {
    title: 'Spanish dinner is at 8–10 PM',
    detail: 'Arriving at a restaurant before 8 PM in Jerez will get you a table, but the atmosphere won\'t be there and the kitchen may not be fully running. Plan evening meals around Spanish timing. Lunch is the main meal and typically runs from 2–4 PM.',
  },
  {
    title: 'Bring cash',
    detail: 'Food stalls inside the circuit, tabancos, shuttle bus fares, and many city vendors work on cash or have unreliable card readers. Withdraw €50-100 before race day. Keep coins for the shuttle bus (€1.10 each way).',
  },
  {
    title: 'Key Spanish phrases',
    detail: 'Most Jerez locals speak limited English outside tourist facilities. "Por favor" (please), "Gracias" (thank you), "¿Dónde está...?" (where is...?), "La cuenta, por favor" (the bill, please), and "Una copa de fino, por favor" (a glass of fino sherry, please) will take you a long way.',
  },
  {
    title: 'The circuit is named after Ángel Nieto',
    detail: 'The full name is Circuito de Jerez – Ángel Nieto, named after the legendary Spanish motorcycle racer who won 13 World Championship titles. Many corners are also named after MotoGP legends: Curva Lorenzo, Curva Dani Pedrosa, Curva Pedrosa.',
  },
];


export default function FirstTimerClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/jerez" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            First-Timer Guide
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Your first MotoGP weekend at Jerez — here's what to expect
          </p>
        </div>
      </section>

      {/* Weekend Structure */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Calendar className="inline h-5 w-5 text-primary mr-2" />
            Weekend Structure
          </h2>
          <div className="space-y-4">
            {WEEKEND_STRUCTURE.map((day) => (
              <div key={day.day} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <p className="text-sm font-bold text-foreground mb-3">{day.day}</p>
                <ul className="space-y-1.5 mb-3">
                  {day.sessions.map((s) => (
                    <li key={s} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="shrink-0 text-primary mt-0.5">—</span> {s}
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg bg-primary/5 border border-primary/10 p-3">
                  <p className="text-xs text-primary/80">
                    <Zap className="inline h-3 w-3 mr-1" /> {day.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Explained */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            The Three Classes
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            A MotoGP weekend features three racing classes. Each has its own practice, qualifying, and race sessions.
          </p>
          <div className="space-y-3">
            {CLASSES_EXPLAINED.map((c) => (
              <div key={c.name} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <p className="text-sm font-semibold text-foreground mb-1">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jerez-Specific Tips */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Jerez-Specific Tips
          </h2>
          <div className="space-y-4">
            {TIPS.map((t) => (
              <div key={t.title} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <div className="flex items-start gap-3">
                  <t.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{t.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the race */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Jerez Is Not Just a Race
          </h2>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 mb-4">
            <p className="text-sm text-muted-foreground">
              Most race weekends you fly in, watch racing, and fly out. Jerez rewards a longer stay. The city has three things you will not find together anywhere else: the world&apos;s best sherry (made here), Andalusian dressage at the Royal Equestrian School, and genuine flamenco in its birthplace.
            </p>
          </div>
          <div className="space-y-3">
            {BEYOND_RACE.map((b) => (
              <div key={b.title} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <p className="text-sm font-semibold text-foreground mb-1">{b.title}</p>
                <p className="text-xs text-muted-foreground">{b.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/races/jerez/experiences"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              See the full experiences guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Practical locals tips */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Practical Tips for Jerez
          </h2>
          <div className="space-y-3">
            {PRACTICAL_TIPS.map((p) => (
              <div key={p.title} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <p className="text-sm font-semibold text-foreground mb-1">{p.title}</p>
                <p className="text-xs text-muted-foreground">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
