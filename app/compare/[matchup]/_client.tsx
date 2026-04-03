'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { parseMatchup } from "@/lib/compareUtils";
import { getRaceBySlug } from "@/data/races2026";
import { getCostsBySlug } from "@/data/raceCosts2026";
import { getRatingBySlug, type CircuitRating } from "@/data/circuitRatings2026";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Rating bar ───────────────────────────────────────────────────────────────

function RatingBar({
  label,
  left,
  right,
}: {
  label: string;
  left: number;
  right: number;
}) {
  const leftColor = left >= right ? "#E10600" : "#888";
  const rightColor = right >= left ? "#E10600" : "#888";

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-2">
      {/* Left score + bar */}
      <div className="flex items-center gap-2">
        <span className="font-display text-sm font-bold" style={{ color: leftColor }}>
          {left}/5
        </span>
        <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${(left / 5) * 100}%`, background: leftColor }}
          />
        </div>
      </div>

      {/* Label */}
      <span className="text-xs text-muted-foreground uppercase tracking-wide font-body text-center whitespace-nowrap">
        {label}
      </span>

      {/* Right bar + score */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden flex justify-end">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${(right / 5) * 100}%`, background: rightColor }}
          />
        </div>
        <span className="font-display text-sm font-bold" style={{ color: rightColor }}>
          {right}/5
        </span>
      </div>
    </div>
  );
}

// ─── Tag pill ─────────────────────────────────────────────────────────────────

function Tag({ text, variant }: { text: string; variant: "positive" | "negative" }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-body ${
        variant === "positive"
          ? "bg-primary/10 text-primary border border-primary/20"
          : "bg-muted text-muted-foreground border border-border"
      }`}
    >
      {text}
    </span>
  );
}

// ─── Cost row ─────────────────────────────────────────────────────────────────

function CostRow({
  label,
  left,
  right,
  currency1,
  currency2,
}: {
  label: string;
  left: number;
  right: number;
  currency1: string;
  currency2: string;
}) {
  const leftWins = left <= right;
  const rightWins = right <= left;

  const fmt = (n: number, cur: string) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: cur,
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <div className="grid grid-cols-3 gap-2 py-3 border-b border-border last:border-0 items-center">
      <div className={`text-sm font-display font-bold text-right ${leftWins ? "text-primary" : "text-foreground"}`}>
        {fmt(left, currency1)}
        {leftWins && left < right && (
          <span className="ml-1 text-xs text-primary">✓</span>
        )}
      </div>
      <div className="text-xs text-muted-foreground text-center font-body">{label}</div>
      <div className={`text-sm font-display font-bold text-left ${rightWins && right < left ? "text-primary" : "text-foreground"}`}>
        {fmt(right, currency2)}
        {rightWins && right < left && (
          <span className="ml-1 text-xs text-primary">✓</span>
        )}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface CompareClientProps {
  matchup: string;
}

export default function CompareClient({ matchup }: CompareClientProps) {
  const parsed = parseMatchup(matchup);
  if (!parsed) return null;

  const [slug1, slug2] = parsed;
  const race1 = getRaceBySlug(slug1);
  const race2 = getRaceBySlug(slug2);
  const costs1 = getCostsBySlug(slug1);
  const costs2 = getCostsBySlug(slug2);
  const ratings1 = getRatingBySlug(slug1);
  const ratings2 = getRatingBySlug(slug2);

  if (!race1 || !race2 || !costs1 || !costs2 || !ratings1 || !ratings2) return null;

  const ratingCategories: { key: keyof CircuitRating; label: string }[] = [
    { key: "accessibility", label: "Accessibility" },
    { key: "atmosphere", label: "Atmosphere" },
    { key: "valueForMoney", label: "Value for Money" },
    { key: "beginnerFriendly", label: "Beginner Friendly" },
    { key: "weatherReliability", label: "Weather Reliability" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-3 w-3" /> All races
          </Link>

          {/* Hero */}
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-2">
              MotoGP Race Comparison
            </p>
            <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              {race1.name}{" "}
              <span className="text-muted-foreground font-normal">vs</span>{" "}
              {race2.name}
            </h1>
            <p className="mt-3 text-muted-foreground font-body">
              Which MotoGP race should you attend?
            </p>
          </div>

          {/* Quick verdicts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-1">
                {race1.name}
              </p>
              <p className="text-sm text-foreground font-body leading-relaxed">
                {ratings1.oneLineVerdict}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-1">
                {race2.name}
              </p>
              <p className="text-sm text-foreground font-body leading-relaxed">
                {ratings2.oneLineVerdict}
              </p>
            </div>
          </div>

          {/* Ratings comparison */}
          <section className="mb-10">
            <h2 className="font-display text-xl font-bold text-foreground mb-1">
              Side-by-side ratings
            </h2>
            <p className="text-xs text-muted-foreground font-body mb-4">
              Red = higher score
            </p>

            {/* Column headers */}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-3 mb-2">
              <p className="text-xs font-display font-bold text-foreground text-right truncate">
                {race1.name}
              </p>
              <span />
              <p className="text-xs font-display font-bold text-foreground text-left truncate">
                {race2.name}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card px-5 py-1 divide-y divide-border">
              {ratingCategories.map(({ key, label }) => (
                <RatingBar
                  key={key}
                  label={label}
                  left={ratings1[key] as number}
                  right={ratings2[key] as number}
                />
              ))}
            </div>
          </section>

          {/* Cost comparison */}
          <section className="mb-10">
            <h2 className="font-display text-xl font-bold text-foreground mb-1">
              Weekend cost comparison
            </h2>
            <p className="text-xs text-muted-foreground font-body mb-4">
              Estimated total including tickets, flights, accommodation, food & transport
            </p>

            <div className="rounded-xl border border-border bg-card px-5 py-1">
              {/* Headers */}
              <div className="grid grid-cols-3 gap-2 py-3 border-b border-border">
                <p className="text-xs font-display font-bold text-foreground text-right truncate">
                  {race1.name}
                </p>
                <p className="text-xs text-muted-foreground text-center font-body">Tier</p>
                <p className="text-xs font-display font-bold text-foreground text-left truncate">
                  {race2.name}
                </p>
              </div>
              <CostRow
                label="Budget"
                left={costs1.weekendTotal.budget}
                right={costs2.weekendTotal.budget}
                currency1={costs1.currency}
                currency2={costs2.currency}
              />
              <CostRow
                label="Mid-range"
                left={costs1.weekendTotal.midRange}
                right={costs2.weekendTotal.midRange}
                currency1={costs1.currency}
                currency2={costs2.currency}
              />
              <CostRow
                label="Premium"
                left={costs1.weekendTotal.premium}
                right={costs2.weekendTotal.premium}
                currency1={costs1.currency}
                currency2={costs2.currency}
              />
            </div>
          </section>

          {/* Best for / Avoid if */}
          <section className="mb-10">
            <h2 className="font-display text-xl font-bold text-foreground mb-4">
              Who is each race for?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Race 1 */}
              <div>
                <p className="text-xs font-display font-bold text-foreground mb-2 uppercase tracking-wide">
                  {race1.name}
                </p>
                <p className="text-xs text-muted-foreground font-body mb-2">Best for</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {ratings1.bestFor.map((tag) => (
                    <Tag key={tag} text={tag} variant="positive" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground font-body mb-2">Avoid if</p>
                <div className="flex flex-wrap gap-1.5">
                  {ratings1.avoidIf.map((tag) => (
                    <Tag key={tag} text={tag} variant="negative" />
                  ))}
                </div>
              </div>

              {/* Race 2 */}
              <div>
                <p className="text-xs font-display font-bold text-foreground mb-2 uppercase tracking-wide">
                  {race2.name}
                </p>
                <p className="text-xs text-muted-foreground font-body mb-2">Best for</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {ratings2.bestFor.map((tag) => (
                    <Tag key={tag} text={tag} variant="positive" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground font-body mb-2">Avoid if</p>
                <div className="flex flex-wrap gap-1.5">
                  {ratings2.avoidIf.map((tag) => (
                    <Tag key={tag} text={tag} variant="negative" />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Weather comparison */}
          <section className="mb-10">
            <h2 className="font-display text-xl font-bold text-foreground mb-4">
              Weather
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs font-display font-bold text-foreground mb-2 uppercase tracking-wide">
                  {race1.name}
                </p>
                <p className="text-sm text-foreground font-body leading-relaxed">
                  {ratings1.weatherDescription}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs font-display font-bold text-foreground mb-2 uppercase tracking-wide">
                  {race2.name}
                </p>
                <p className="text-sm text-foreground font-body leading-relaxed">
                  {ratings2.weatherDescription}
                </p>
              </div>
            </div>
          </section>

          {/* CTA section */}
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-bold text-foreground mb-1">
              Ready to plan your trip?
            </h2>
            <p className="text-sm text-muted-foreground font-body mb-5">
              Full guides, transport tips, packing lists, and what to avoid.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Race 1 links */}
              <div className="space-y-2">
                <p className="text-xs font-display font-bold text-foreground uppercase tracking-wide mb-2">
                  {race1.name}
                </p>
                <Link
                  href={`/races/${slug1}`}
                  className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3 text-sm font-body text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  Full race guide <span className="text-primary">→</span>
                </Link>
                <Link
                  href={`/races/${slug1}/cost`}
                  className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3 text-sm font-body text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  Cost breakdown <span className="text-primary">→</span>
                </Link>
              </div>

              {/* Race 2 links */}
              <div className="space-y-2">
                <p className="text-xs font-display font-bold text-foreground uppercase tracking-wide mb-2">
                  {race2.name}
                </p>
                <Link
                  href={`/races/${slug2}`}
                  className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3 text-sm font-body text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  Full race guide <span className="text-primary">→</span>
                </Link>
                <Link
                  href={`/races/${slug2}/cost`}
                  className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3 text-sm font-body text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  Cost breakdown <span className="text-primary">→</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
