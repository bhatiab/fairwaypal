'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Users, Signal, MapPin, Clock, Flag, Zap, Info, CloudRain } from "lucide-react";

const race = getRaceBySlug('le-mans')!;

const WEEKEND_STRUCTURE = [
  {
    day: 'Friday — Practice',
    sessions: [
      'Moto3 Free Practice',
      'Moto2 Free Practice',
      'MotoGP Free Practice 1 (FP1)',
      'MotoGP Practice',
    ],
    tip: 'Quietest day. Good for finding your bearings, testing your route from accommodation, and exploring grandstand options for Sunday. Check the weather before deciding where to position yourself.',
  },
  {
    day: 'Saturday — Qualifying + Sprint',
    sessions: [
      'Moto3 Qualifying + Race',
      'Moto2 Qualifying + Race',
      'MotoGP Qualifying',
      'MotoGP Sprint Race',
    ],
    tip: 'The sprint race counts for championship points and covers around half the race distance. This is real racing, not a support event — the riders push hard from lap one.',
  },
  {
    day: 'Sunday — Race Day',
    sessions: [
      'Moto3 Race',
      'Moto2 Race',
      'MotoGP Warm-Up',
      'MotoGP Race (14:00 local)',
    ],
    tip: 'Over 300,000 fans attend. Aim to be at the circuit by 8:30 AM — the tram queue builds sharply after 9 AM. The MotoGP race starts at 2 PM local time.',
  },
];

const CLASSES_EXPLAINED = [
  {
    name: 'Moto3',
    desc: '250cc single-cylinder bikes, top speed ~250 km/h. The junior class — riders are often 16-20 years old. Racing is incredibly close, with large slipstreaming packs and frequent position changes.',
  },
  {
    name: 'Moto2',
    desc: '765cc Triumph triple-cylinder engines. The feeder class to MotoGP. More power than Moto3, fewer electronics. The riders you watch here are next year\'s MotoGP stars.',
  },
  {
    name: 'MotoGP',
    desc: '1000cc prototype machines making 250+ horsepower. Top speeds exceed 350 km/h. The pinnacle of motorcycle racing, with Ducati, Aprilia, KTM, Honda, and Yamaha all competing.',
  },
];

const TIPS = [
  {
    icon: CloudRain,
    title: 'Pack for rain regardless of the forecast',
    detail: 'Le Mans MotoGP has a strong reputation for wet race weekends. In May, rain falls on roughly half of all days. The forecast can change overnight. Bring a proper waterproof jacket and waterproof footwear — a bin bag poncho won\'t cut it if you\'re there all day.',
  },
  {
    icon: Clock,
    title: 'Take the tram, not a car',
    detail: 'Tram T1 runs from the Gares stop (adjacent to Le Mans train station) to the circuit in about 20 minutes. It runs from 5:30 AM on race days. Driving to the circuit on Sunday means navigating severe road congestion — post-race gridlock of 2 hours is common from the car parks.',
  },
  {
    icon: MapPin,
    title: 'The Dunlop Chicane is where the action is',
    detail: 'Turns 2–3 (the Dunlop Chicane) is the circuit\'s primary overtaking point. The grandstand views across the chicane and the Dunlop Bridge give you multiple braking zones and often pass attempts in a single session. If you have a choice, position yourself here.',
  },
  {
    icon: Signal,
    title: 'Mobile networks collapse on Sunday',
    detail: 'Over 300,000 fans share the same cell towers. By mid-morning on race day, mobile data becomes unreliable. Download offline maps, screenshot your ticket, and agree on a physical meeting point with your group before you lose signal.',
  },
  {
    icon: Users,
    title: 'Camping fans arrive from Thursday',
    detail: 'Le Mans has a strong camping culture from the 24 Hours race. Free camping zones like Houx fill up from Thursday. If you plan to camp, arriving Thursday evening gives you far better spots than arriving Saturday morning.',
  },
  {
    icon: Flag,
    title: 'Pre-arrange meeting points — not WhatsApp',
    detail: 'Pick a named landmark — a specific grandstand entrance, a food stall corner — as your group meeting point. Do not rely on messaging apps to coordinate when signal is poor. Tell everyone before you leave your accommodation.',
  },
  {
    icon: Info,
    title: 'Umbrellas are banned in grandstands',
    detail: 'Umbrellas obstruct the views of fans behind you and are not permitted in grandstands. A rain poncho or waterproof jacket is the practical solution. In general admission areas, umbrellas are typically allowed.',
  },
];

export default function FirstTimerClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/le-mans" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            First-Timer Guide
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Your first MotoGP weekend at Le Mans — here's what to expect
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

      {/* Le Mans-Specific Tips */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Le Mans-Specific Tips
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

      <Footer />
    </main>
  );
}
