'use client'
import { useEffect, useMemo, useState } from "react";
import { track } from '@vercel/analytics';
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin, BookOpen, Navigation, Backpack, AlertTriangle,
  ChevronRight, Plane, Star, Clock, GitCompareArrows, HelpCircle,
} from "lucide-react";
import Footer from "../src/components/Footer";
import { getRacesWithStatus, type RaceWithStatus } from "../src/lib/raceUtils";
import { RACE_GUIDE_PAGES, TIER1_META, TIER1_ORDER } from "../src/lib/guideNav";
import { mistakes } from "../src/lib/mistakes";
import { CURATED_COMPARISONS, canonicalMatchup } from "../src/lib/compareUtils";

/* ── Cancelled races (slugs) ── */
const CANCELLED_RACES: string[] = [];

/* ── Per-race banner tips (slug → copy + links) ── */
const RACE_BANNERS: Record<string, {
  emoji: string;
  tip: string;
  tipLink: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
}> = {
  'jerez': {
    emoji: '🇪🇸',
    tip: "Over 100,000 fans on Sunday. Arrive by 9 AM or spend more time in queues than watching racing.",
    tipLink: { label: 'Getting there', href: '/races/jerez/getting-there' },
    secondaryLink: { label: 'Packing list', href: '/races/jerez/packing-guide' },
  },
  'le-mans': {
    emoji: '🇫🇷',
    tip: "Le Mans campsites fill months ahead. Book early or plan a day-trip from Tours — the shuttle runs all weekend.",
    tipLink: { label: 'Getting there', href: '/races/le-mans/getting-there' },
    secondaryLink: { label: 'Packing list', href: '/races/le-mans/packing-guide' },
  },
  'catalunya': {
    emoji: '🇪🇸',
    tip: "Bags over 15 litres are refused at the gate. No outside food or drink allowed. Measure your bag before race day.",
    tipLink: { label: 'Getting there', href: '/races/catalunya/getting-there' },
    secondaryLink: { label: 'Packing list', href: '/races/catalunya/packing-guide' },
  },
  'mugello': {
    emoji: '🇮🇹',
    tip: "The Tuscan hills make Mugello one of MotoGP's best — but transport out after the race is chaos without a plan.",
    tipLink: { label: 'View race info', href: '/races/mugello' },
  },
  'assen': {
    emoji: '🇳🇱',
    tip: "The Cathedral of MotoGP — purpose-built for bikes since 1949. Trains from Assen station run direct.",
    tipLink: { label: 'View race info', href: '/races/assen' },
  },
};

/* ── Tools grid icon mapping ── */
const TOOL_ICONS: Record<string, typeof BookOpen> = {
  "first-timer-guide": BookOpen,
  "getting-there": Navigation,
  "packing-guide": Backpack,
  "mistakes": AlertTriangle,
};

/* ── Countdown component ── */
function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    setMounted(true);
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);

  const pad = (n: number) => String(n).padStart(2, '0');

  /* Render placeholder on server/first paint to avoid hydration mismatch */
  const d = mounted ? pad(days) : '--';
  const h = mounted ? pad(hours) : '--';

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      <div className="text-center">
        <div className="flex gap-1">
          <span className="countdown-digit">{d[0]}</span>
          <span className="countdown-digit">{d[1]}</span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1 block">Days</span>
      </div>
      <span className="text-xl font-display text-primary/40 -mt-4">:</span>
      <div className="text-center">
        <div className="flex gap-1">
          <span className="countdown-digit">{h[0]}</span>
          <span className="countdown-digit">{h[1]}</span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1 block">Hrs</span>
      </div>
    </div>
  );
}

/* ── Helper: find the best race link for a guide type ── */
function findRaceForGuide(slug: string, upcomingRaces: RaceWithStatus[]): string {
  for (const race of upcomingRaces) {
    const pages = RACE_GUIDE_PAGES[race.slug];
    if (pages?.some(p => p.slug === slug)) {
      return `/races/${race.slug}/${slug}`;
    }
  }
  // Fallback to first race in RACE_GUIDE_PAGES that has this sub-page
  for (const [raceSlug, pages] of Object.entries(RACE_GUIDE_PAGES)) {
    if (pages.some(p => p.slug === slug)) {
      return `/races/${raceSlug}/${slug}`;
    }
  }
  return `/races/jerez/${slug}`;
}

/* ── page ── */
export default function HomePageClient() {
  const races = useMemo(() => getRacesWithStatus(), []);

  const liveRace = useMemo(() => races.find((r) => r.status === "live"), [races]);
  const upcomingRaces = useMemo(() => races.filter((r) => r.status === "upcoming"), [races]);

  const nextRace = liveRace || upcomingRaces.find((r) => !CANCELLED_RACES.includes(r.slug));

  /* Races with full guides (4+ Tier 1 sub-pages) */
  const fullGuideRaces = useMemo(() =>
    races.filter((r) => r.fullGuide),
    [races]
  );

  const raceHasStarted = nextRace ? new Date() >= nextRace.startDate : true;

  /* Pick 3 mistakes for the teaser — prefer ones with race-specific data */
  const teaserMistakes = useMemo(() => {
    const withData = mistakes.filter(m => Object.keys(m.races).length > 0);
    return withData.slice(0, 3);
  }, []);

  return (
    <main className="min-h-screen bg-background pt-20 relative overflow-hidden">
      {/* circuit board background pattern */}
      <div className="absolute inset-0 bg-circuit-board opacity-30 pointer-events-none" />

      {/* ── Hero ── */}
      <section className="relative px-4 pt-8 pb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold italic text-gradient-racing leading-none tracking-tight">
            MotoGP Fan Guide
          </h1>
          <p className="mt-4 font-body text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Race-day logistics for every circuit on the calendar. Transport, packing lists, viewing spots, and the mistakes nobody warns you about.
          </p>
          <a
            href="#races"
            className="inline-flex items-center gap-2 mt-6 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Find your race
            <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      {/* ── Next Race Countdown Banner ── */}
      {nextRace && !raceHasStarted && (() => {
        const banner = RACE_BANNERS[nextRace.slug];
        return (
          <section className="relative px-4 py-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-xl"
            >
              {/* Main countdown card */}
              <div className="rounded-xl border-2 border-primary/50 bg-zinc-900/80 backdrop-blur-sm overflow-hidden glow-red">
                <div className="text-center pt-5 pb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary font-mono">
                    Race Mode Active
                  </span>
                </div>
                <div className="text-center px-4 pb-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground uppercase tracking-wide">
                    {nextRace.name} — {nextRace.dates}
                  </h3>
                </div>
                <div className="text-center pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary/80">
                    Race Mode Active
                  </span>
                </div>
                <div className="px-4 pb-6">
                  <CountdownTimer targetDate={nextRace.startDate} />
                </div>
              </div>

              {/* Pro-tip bar below */}
              <div className="mt-3 rounded-xl bg-zinc-900/60 border border-border/40 p-4 flex flex-col sm:flex-row items-center gap-3">
                <p className="text-sm text-foreground/80 leading-snug flex-1">
                  <strong className="text-foreground">Pro-Tip:</strong>{' '}
                  {banner
                    ? banner.tip
                    : "Transport, what to bring, and circuit tips — everything in one place. Get there early."}
                </p>
                <div className="flex gap-2 shrink-0">
                  {banner?.secondaryLink && (
                    <Link
                      href={banner.secondaryLink.href}
                      className="flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 whitespace-nowrap"
                    >
                      {banner.secondaryLink.label}
                    </Link>
                  )}
                  <Link
                    href={`/races/${nextRace.slug}`}
                    onClick={() => track('banner_cta_click', { race: nextRace.slug })}
                    className="flex items-center justify-center gap-1.5 rounded-lg border-2 border-foreground/80 bg-transparent px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-foreground/10 whitespace-nowrap"
                  >
                    Full guide
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>
        );
      })()}

      {/* ── Tools / Features Grid ── */}
      <section className="relative px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            What's Inside Each Guide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TIER1_ORDER.map((slug) => {
              const meta = TIER1_META[slug];
              const Icon = TOOL_ICONS[slug] ?? BookOpen;
              const href = findRaceForGuide(slug, upcomingRaces);
              return (
                <Link key={slug} href={href} className="group">
                  <div className="glass-card border border-primary/20 hover:border-primary/40 rounded-xl p-5 h-full transition-all duration-300 relative overflow-hidden">
                    <Icon className="h-6 w-6 text-primary mb-3" />
                    <h3 className="font-display text-sm sm:text-base font-bold text-foreground leading-tight">
                      {meta.label}
                    </h3>
                    <p className="mt-1.5 font-body text-xs text-muted-foreground leading-snug">
                      {meta.description}
                    </p>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-racing-glow transition-all duration-500 group-hover:w-full" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── First Time? ── */}
      <section className="relative px-4 pb-10">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="h-5 w-5 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wide">First Time?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {(["mugello", "silverstone", "assen", "catalunya"] as const).map((slug) => {
              const names: Record<string, string> = {
                mugello: "Mugello",
                silverstone: "Silverstone",
                assen: "Assen",
                catalunya: "Catalunya",
              };
              return (
                <Link
                  key={slug}
                  href={`/first-time/${slug}`}
                  className="rounded-xl border border-primary/20 bg-card/60 p-4 hover:border-primary/50 transition-colors group"
                >
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    First Time at {names[slug]}?
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Viewing spots, transport, and what to expect</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="relative px-4 pb-10">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="h-5 w-5 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wide">Tools</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
            <Link
              href="/tools/timezone-converter"
              className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-primary" />
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Race Time Converter</p>
              </div>
              <p className="text-xs text-muted-foreground">Convert MotoGP session times to your local timezone</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Races with Full Guides ── */}
      <section id="races" className="relative px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Full guide cards */}
          {fullGuideRaces.length > 0 && (
            <>
              <h2 className="text-2xl font-display font-bold text-foreground text-center mb-2">
                Races with Full Guides
              </h2>
              <p className="text-sm font-body text-muted-foreground text-center mb-8">
                Transport, packing, first-timer tips, and common mistakes — ready to read.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {fullGuideRaces.map((race) => {
                  const pages = RACE_GUIDE_PAGES[race.slug] ?? [];
                  return (
                    <Link key={race.slug} href={`/races/${race.slug}`} className="group">
                      <div className="glass-card border border-primary/20 hover:border-primary/40 rounded-xl p-5 h-full transition-all duration-300 relative overflow-hidden hover:glow-red">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-display text-xl font-bold italic text-foreground uppercase leading-tight">
                            {race.name}
                          </h3>
                          <Star className="h-4 w-4 text-primary/60 shrink-0 mt-1" />
                        </div>
                        <p className="mt-2 font-display text-sm font-bold text-primary italic">
                          {race.dates}
                        </p>
                        <div className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground font-body">
                          <MapPin className="h-3.5 w-3.5 text-primary/50" />
                          <span>{race.city} — {race.country}</span>
                        </div>
                        {/* Sub-page pills */}
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {pages.map((page) => (
                            <span
                              key={page.slug}
                              className="inline-block rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary uppercase tracking-wide"
                            >
                              {page.label}
                            </span>
                          ))}
                        </div>
                        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-racing-glow transition-all duration-500 group-hover:w-full" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </>
          )}

          {/* Compact calendar — all upcoming races */}
          <h3 className="text-xl font-display font-bold text-foreground text-center mb-4">
            Full 2026 Calendar
          </h3>
          <div className="flex flex-col gap-1.5">
            {upcomingRaces.map((race) => {
              const pages = RACE_GUIDE_PAGES[race.slug];
              const hasGuide = pages && pages.length > 0;
              return (
                <Link
                  key={race.slug}
                  href={`/races/${race.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-primary/5 border border-transparent hover:border-primary/10"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-display text-sm font-bold text-foreground uppercase truncate">
                      {race.name}
                    </span>
                    {hasGuide && (
                      <span className="hidden sm:inline-block rounded bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold text-primary uppercase tracking-wide shrink-0">
                        Guide
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-body text-xs text-muted-foreground">
                      {race.dates}
                    </span>
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mistakes Teaser ── */}
      <section className="relative px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-2">
            Mistakes First-Timers Make
          </h2>
          <p className="text-sm font-body text-muted-foreground text-center mb-8">
            Every circuit has its own gotchas. Here are the most common ones.
          </p>
          <div className="flex flex-col gap-3">
            {teaserMistakes.map((mistake) => {
              // Pick the first race entry for preview text
              const raceEntries = Object.entries(mistake.races);
              const [, firstEntry] = raceEntries[0] ?? [];
              if (!firstEntry) return null;
              const truncated = firstEntry.detail.length > 140
                ? firstEntry.detail.slice(0, 140).replace(/\s+\S*$/, '') + '...'
                : firstEntry.detail;

              return (
                <Link
                  key={mistake.id}
                  href={firstEntry.linkPath}
                  className="group"
                >
                  <div className="glass-card border border-primary/10 rounded-xl p-4 transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                        firstEntry.level === 'critical'
                          ? 'bg-red-500/10 text-red-400'
                          : firstEntry.level === 'moderate'
                          ? 'bg-amber-500/10 text-amber-400'
                          : 'bg-blue-500/10 text-blue-400'
                      }`}>
                        {firstEntry.level}
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground">
                      {mistake.title}
                    </h3>
                    <p className="mt-1.5 font-body text-sm text-muted-foreground leading-relaxed">
                      {truncated}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      Read more <ChevronRight className="h-3 w-3" />
                    </span>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-racing-glow transition-all duration-500 group-hover:w-full" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Travel Tip CTA ── */}
      <section className="relative px-4 py-8">
        <div className="mx-auto max-w-xl">
          <div className="glass-card border border-primary/20 rounded-xl p-6 text-center">
            <Plane className="h-6 w-6 text-primary mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-foreground">
              Flying to a race?
            </h3>
            <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">
              Flight prices to race cities jump 6-8 weeks before the weekend. Book early and check our getting-there guides for the best airport options.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEO text block ── */}
      <section className="relative px-4 pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm leading-relaxed text-muted-foreground">
            GP Moto Pal covers the logistics that official sources don't — transport
            realities, what to pack, and the mistakes that turn a great weekend into a
            frustrating one. Every guide is built around the questions real fans ask
            before their first race.
          </p>
        </div>
      </section>

      {/* ── Compare Races ── */}
      <section className="relative px-4 pb-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <GitCompareArrows className="h-5 w-5 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wide">Compare Races</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CURATED_COMPARISONS.slice(0, 6).map(([a, b]) => {
              const matchup = canonicalMatchup(a, b);
              const label = `${a.replace(/-/g, " ")} vs ${b.replace(/-/g, " ")}`;
              return (
                <Link
                  key={matchup}
                  href={`/compare/${matchup}`}
                  className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors group"
                >
                  <p className="text-sm font-semibold text-foreground capitalize group-hover:text-primary transition-colors">
                    {label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Cost, atmosphere, and logistics compared</p>
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
