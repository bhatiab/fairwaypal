'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Users, Signal, MapPin, Clock, Flag, Zap, Info, Tent } from "lucide-react";

const race = getRaceBySlug('mugello')!;

const WEEKEND_STRUCTURE = [
  {
    day: 'Friday — Practice',
    sessions: [
      'Moto3 Free Practice',
      'Moto2 Free Practice',
      'MotoGP Free Practice 1 (FP1)',
      'MotoGP Practice',
    ],
    tip: 'Quietest day. Perfect for exploring the circuit, finding your camping spot, and watching from different areas without Sunday crowds.',
  },
  {
    day: 'Saturday — Qualifying + Sprint',
    sessions: [
      'Moto3 Qualifying + Race',
      'Moto2 Qualifying + Race',
      'MotoGP Qualifying',
      'MotoGP Sprint Race',
    ],
    tip: 'The sprint race is half distance but counts for championship points. When a Ducati is leading at Mugello, the Italian crowd creates a wall of noise.',
  },
  {
    day: 'Sunday — Race Day',
    sessions: [
      'Moto3 Race',
      'Moto2 Race',
      'MotoGP Warm-Up',
      'MotoGP Race (14:00 local)',
    ],
    tip: 'Over 100,000 fans attend on Sunday. The hillsides around the circuit fill up fast. Arrive early to secure a decent GA position or enjoy the atmosphere from your grandstand.',
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
    desc: '1000cc prototype machines making 250+ horsepower. Top speeds over 366 km/h on Mugello\'s long main straight — one of the fastest points on the calendar. Ducati, Aprilia, KTM, Honda, and Yamaha compete.',
  },
];

const TIPS = [
  {
    icon: Clock,
    title: 'Arrive early on Sunday',
    detail: 'Gates open around 8 AM. Over 100,000 fans attend race day at Mugello. If you are in general admission, the hillside viewing spots fill up well before the first race. Aim to be at the circuit by 9 AM at the latest.',
  },
  {
    icon: Tent,
    title: 'Camping is part of the experience',
    detail: 'Mugello\'s camping areas are legendary in MotoGP. Thousands of fans set up camp around the circuit for the whole weekend, creating a festival atmosphere with food, music, and celebrations. If you can camp, do it — it is the definitive Mugello experience.',
  },
  {
    icon: Signal,
    title: 'Phone signal dies on Sunday',
    detail: 'With 100,000+ fans on the same cell towers in a rural Tuscan valley, mobile data becomes almost unusable on race day. Download offline maps, screenshot your ticket, and pre-arrange a meeting point with friends.',
  },
  {
    icon: MapPin,
    title: 'The circuit is in a valley — elevation matters',
    detail: 'Mugello sits at around 257m elevation in the Tuscan hills. The weather can be different from Florence — cooler mornings and more variable conditions. The hills around the circuit provide natural amphitheatre viewing but also mean lots of walking uphill.',
  },
  {
    icon: Users,
    title: 'The Tifosi are intense — enjoy it',
    detail: 'Italian fans at Mugello are among the most passionate in motorsport. When a Ducati or Italian rider is leading, the noise is overwhelming. Smoke flares, flags, and chanting are part of the atmosphere. It is a spectacle even if you do not follow Italian riders.',
  },
  {
    icon: Flag,
    title: 'Mugello\'s main straight is the fastest in MotoGP',
    detail: 'The 1.1 km front straight sees speeds over 366 km/h. Standing near the straight, you will feel the bikes pass as a physical force. This is the fastest point on the entire MotoGP calendar — ear protection is essential.',
  },
  {
    icon: Info,
    title: 'Traffic is the biggest challenge',
    detail: 'The circuit is in a rural area with limited road access. Post-race traffic can take 2-3 hours to clear. If you are driving, consider staying until the crowds thin out or leaving before the podium ceremony. Camping avoids this entirely.',
  },
];

const BEYOND_RACE = [
  {
    title: 'Tuscan wine country is next door',
    detail: 'Mugello is in the heart of Tuscany. Chianti vineyards are a short drive south, and the region produces some of Italy\'s best wine. A morning at a vineyard on Thursday or Friday before the racing starts is one of the best add-ons to the trip.',
  },
  {
    title: 'Florence is 30 km away',
    detail: 'One of the world\'s great cities is less than an hour from the circuit. The Uffizi, the Duomo, and the entire Renaissance are right there. If you arrive on Wednesday or Thursday, spend a day in Florence before the racing begins.',
  },
  {
    title: 'Tuscan food is legendary',
    detail: 'Bistecca alla fiorentina (a thick T-bone steak), ribollita, pappardelle al cinghiale (wild boar pasta), and local pecorino cheese. This is not just race food — the region is one of the world\'s great culinary destinations.',
  },
];

export default function FirstTimerClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/mugello" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            First-Timer Guide
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Your first MotoGP weekend at Mugello — here's what to expect
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

      {/* Mugello-Specific Tips */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Mugello-Specific Tips
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
            Mugello Is Not Just a Race
          </h2>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 mb-4">
            <p className="text-sm text-muted-foreground">
              Mugello is one of the few MotoGP races where the destination is genuinely as compelling as the racing. You are in Tuscany — one of the world&apos;s most celebrated regions for food, wine, art, and landscapes. Arriving a day early to explore Florence or visit a Chianti vineyard makes the whole trip better.
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
              href="/races/mugello/experiences"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              See the full experiences guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Mistakes link */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/mugello/mistakes" className="block rounded-xl border border-red-500/20 bg-red-500/5 p-5 hover:border-red-500/40 transition-colors">
            <p className="text-sm font-semibold text-foreground">Common Mistakes at Mugello →</p>
            <p className="mt-1 text-xs text-muted-foreground">The things that catch people out — sorted before you go.</p>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
