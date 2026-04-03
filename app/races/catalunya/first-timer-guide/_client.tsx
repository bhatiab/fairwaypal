'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Users, Signal, MapPin, Clock, Flag, Zap, Info } from "lucide-react";

const race = getRaceBySlug('catalunya')!;

const WEEKEND_STRUCTURE = [
  {
    day: 'Friday — Practice',
    sessions: [
      'Moto3 Free Practice',
      'Moto2 Free Practice',
      'MotoGP Free Practice 1 (FP1)',
      'MotoGP Practice',
    ],
    tip: 'The quietest day. Use it to explore the circuit, find your bearings, and identify good vantage points for the weekend. No crowds, easy transport.',
  },
  {
    day: 'Saturday — Qualifying + Sprint',
    sessions: [
      'Moto3 Qualifying + Race',
      'Moto2 Qualifying + Race',
      'MotoGP Qualifying',
      'MotoGP Sprint Race',
    ],
    tip: 'MotoGP qualifying determines Sunday grid positions — the lap times are jaw-dropping. The sprint race is 100% race intensity. Crowds are larger but still manageable.',
  },
  {
    day: 'Sunday — Race Day',
    sessions: [
      'Moto3 Race',
      'Moto2 Race',
      'MotoGP Warm-Up',
      'MotoGP Race (14:00 local)',
    ],
    tip: 'Aim to be at your grandstand by 9 AM. The main straight is one of the longest on the calendar — bikes hit top speed within sight of the main grandstand.',
  },
];

const CLASSES_EXPLAINED = [
  {
    name: 'Moto3',
    desc: '250cc single-cylinder bikes, top speed ~250 km/h. The junior class — riders are often 16-20 years old. Slipstream battles and chaotic last-corner decisions make it unpredictable.',
  },
  {
    name: 'Moto2',
    desc: '765cc Triumph triple-cylinder engines. The feeder class to MotoGP. More physically demanding than Moto3 and the racing is often closer. The future MotoGP field is here.',
  },
  {
    name: 'MotoGP',
    desc: '1000cc prototype machines making 250+ horsepower. Top speeds over 350 km/h. Ducati, Aprilia, KTM, Honda, and Yamaha all compete. The technology and the speed are unlike anything else in motorsport.',
  },
];

const TIPS = [
  {
    icon: Clock,
    title: 'Get to Montmeló station before 9 AM on Sunday',
    detail: 'The R2/R2N train from Barcelona fills fast on race day. Trains to Montmeló run every 30 minutes. If you miss the pre-race window, you may be waiting on a crowded platform. Aim to leave Barcelona city by 8:30 AM at the latest.',
  },
  {
    icon: MapPin,
    title: 'The circuit is large — plan your movements',
    detail: 'Circuit de Barcelona-Catalunya is spread across a wide site. Moving from Turn 1 (Grandstand K) to the hillside sector (Grandstand L) takes 15-20 minutes on foot. Decide where you want to be for each session before the day starts.',
  },
  {
    icon: Signal,
    title: 'Mobile data will be unreliable on Sunday',
    detail: 'Tens of thousands of fans on the same cell towers means data slows to a crawl or stops entirely by mid-morning. Download the circuit map offline, screenshot your ticket and any booking confirmations, and agree on a physical meeting point with anyone you\'re attending with.',
  },
  {
    icon: Users,
    title: 'No outside food or drink is allowed',
    detail: 'Unlike most circuits, Circuit de Barcelona-Catalunya does not permit outside food or beverages. Budget to buy food inside. PET plastic bottles up to 1.5 litres are allowed. Backpacks over 15 litres will be turned away at security.',
  },
  {
    icon: Flag,
    title: 'Watch the race start from a straight-side position',
    detail: 'The Catalunya race start is dramatic — bikes accelerate down the long main straight and brake hard into Turn 1. If your ticket is anywhere near the main grandstand or Grandstand K, stay put for the first two laps. The action at the front of the grid happens right in front of you.',
  },
  {
    icon: Info,
    title: 'Most seats are in full sun',
    detail: 'With the exception of the covered main grandstand (Tribuna), almost every seat at the circuit is fully exposed. Mid-May sun in Catalonia is strong. Bring SPF 50+, a hat, and sunglasses. Reapply sunscreen at midday — you will be outside for 6-8 hours.',
  },
  {
    icon: MapPin,
    title: 'Plan the post-race exit in advance',
    detail: 'The train back from Montmeló fills immediately after the race. If you are in no rush, spend 20-30 minutes watching the podium celebrations before joining the queue — it clears significantly in that window. If you are driving, expect 1-2 hours in the car park before you can exit.',
  },
];

export default function FirstTimerClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/catalunya" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            First-Timer Guide
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Your first MotoGP weekend at Barcelona — here&apos;s what to expect
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

      {/* Catalunya-Specific Tips */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Catalunya-Specific Tips
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

      <div className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/races/catalunya/mistakes"
            className="block rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-muted-foreground hover:border-red-500/40 transition-colors"
          >
            <span className="font-semibold text-foreground">Common mistakes at Catalunya →</span>
            <span className="block mt-1 text-xs">What catches first-timers out at this specific circuit.</span>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
