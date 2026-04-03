"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingDown, ArrowUpDown, ArrowRight, MapPin } from "lucide-react";
import { raceCosts, type RaceCostData } from "@/data/raceCosts2026";
import { getRaceBySlug } from "@/data/races2026";
import { CURRENT_SEASON } from "@/lib/season";

type SortKey = "budget" | "gaTicket" | "midRange";

function getGATicketLow(race: RaceCostData): number {
  const ga = race.tickets.find((t) =>
    t.name.toLowerCase().includes("general admission")
  );
  return ga ? ga.priceRange[0] : race.tickets[0]?.priceRange[0] ?? 9999;
}

function getGARange(race: RaceCostData): [number, number] | null {
  const ga = race.tickets.find((t) =>
    t.name.toLowerCase().includes("general admission")
  );
  return ga ? ga.priceRange : null;
}

function getValueBadge(budgetTotal: number): {
  label: string;
  className: string;
} {
  if (budgetTotal < 350)
    return {
      label: "Great Value",
      className:
        "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
    };
  if (budgetTotal <= 500)
    return {
      label: "Good Value",
      className: "bg-sky-500/15 text-sky-400 border border-sky-500/30",
    };
  return {
    label: "Premium",
    className:
      "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  };
}

function sortRaces(races: RaceCostData[], key: SortKey): RaceCostData[] {
  return [...races].sort((a, b) => {
    switch (key) {
      case "budget":
        return a.weekendTotal.budget - b.weekendTotal.budget;
      case "gaTicket":
        return getGATicketLow(a) - getGATicketLow(b);
      case "midRange":
        return a.weekendTotal.midRange - b.weekendTotal.midRange;
    }
  });
}

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "budget", label: "Budget Total" },
  { key: "gaTicket", label: "GA Ticket Price" },
  { key: "midRange", label: "Mid-Range Total" },
];

export default function CheapestRacesClient() {
  const [sortKey, setSortKey] = useState<SortKey>("budget");
  const sorted = sortRaces(raceCosts, sortKey);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <TrendingDown className="h-7 w-7 text-primary shrink-0" />
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Cheapest MotoGP Races {CURRENT_SEASON}
          </h1>
        </div>
        <p className="font-body text-muted-foreground text-lg max-w-3xl leading-relaxed">
          MotoGP is generally more affordable than Formula 1 — tickets cost
          less, host cities tend to be cheaper, and you get three days of
          racing included in most passes. Here is every {CURRENT_SEASON} round
          ranked by total weekend cost so you can find the best value race for
          your budget.
        </p>
      </div>

      {/* Sort Controls */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
        <span className="font-body text-sm text-muted-foreground mr-1">
          Sort by:
        </span>
        {sortOptions.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setSortKey(opt.key)}
            className={`font-body text-sm px-3 py-1.5 rounded-lg border transition-colors ${
              sortKey === opt.key
                ? "bg-primary text-white border-primary"
                : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full font-body text-sm">
          <thead>
            <tr className="border-b border-border text-left text-muted-foreground">
              <th className="py-3 pr-3 font-medium w-10">#</th>
              <th className="py-3 pr-4 font-medium">Race</th>
              <th className="py-3 pr-4 font-medium">GA Ticket</th>
              <th className="py-3 pr-4 font-medium">Budget</th>
              <th className="py-3 pr-4 font-medium">Mid-Range</th>
              <th className="py-3 pr-4 font-medium">Premium</th>
              <th className="py-3 font-medium">Value</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((race, i) => {
              const guide = getRaceBySlug(race.raceSlug);
              const gaRange = getGARange(race);
              const badge = getValueBadge(race.weekendTotal.budget);
              const curr = race.currency === "GBP" ? "£" : race.currency === "USD" ? "$" : "€";
              return (
                <tr
                  key={race.raceSlug}
                  className="border-b border-border/50 hover:bg-card/60 transition-colors"
                >
                  <td className="py-4 pr-3 font-display text-lg font-bold text-muted-foreground">
                    {i + 1}
                  </td>
                  <td className="py-4 pr-4">
                    <Link
                      href={`/races/${race.raceSlug}`}
                      className="font-display font-semibold text-foreground hover:text-primary transition-colors text-base"
                    >
                      {guide?.name ?? race.raceSlug}
                    </Link>
                    <div className="flex items-center gap-1 mt-0.5 text-muted-foreground text-xs">
                      <MapPin className="h-3 w-3" />
                      {guide ? `${guide.city}, ${guide.country}` : ""}
                    </div>
                  </td>
                  <td className="py-4 pr-4 text-foreground">
                    {gaRange
                      ? `${curr}${gaRange[0]}–${curr}${gaRange[1]}`
                      : `From ${curr}${race.tickets[0]?.priceRange[0] ?? "—"}`}
                  </td>
                  <td className="py-4 pr-4 font-semibold text-emerald-400">
                    {curr}{race.weekendTotal.budget}
                  </td>
                  <td className="py-4 pr-4 text-foreground">
                    {curr}{race.weekendTotal.midRange}
                  </td>
                  <td className="py-4 pr-4 text-foreground">
                    {curr}{race.weekendTotal.premium}
                  </td>
                  <td className="py-4">
                    <span
                      className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${badge.className}`}
                    >
                      {badge.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {sorted.map((race, i) => {
          const guide = getRaceBySlug(race.raceSlug);
          const gaRange = getGARange(race);
          const badge = getValueBadge(race.weekendTotal.budget);
          const curr = race.currency === "GBP" ? "£" : race.currency === "USD" ? "$" : "€";
          return (
            <div
              key={race.raceSlug}
              className="bg-card border border-border rounded-xl p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl font-bold text-muted-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <Link
                      href={`/races/${race.raceSlug}`}
                      className="font-display font-semibold text-foreground hover:text-primary transition-colors text-base"
                    >
                      {guide?.name ?? race.raceSlug}
                    </Link>
                    <div className="flex items-center gap-1 mt-0.5 text-muted-foreground text-xs">
                      <MapPin className="h-3 w-3" />
                      {guide ? `${guide.city}, ${guide.country}` : ""}
                    </div>
                  </div>
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${badge.className}`}
                >
                  {badge.label}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-body mb-3">
                <div>
                  <span className="text-muted-foreground text-xs">GA Ticket</span>
                  <p className="text-foreground">
                    {gaRange
                      ? `${curr}${gaRange[0]}–${curr}${gaRange[1]}`
                      : `From ${curr}${race.tickets[0]?.priceRange[0] ?? "—"}`}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground text-xs">Budget Weekend</span>
                  <p className="font-semibold text-emerald-400">
                    {curr}{race.weekendTotal.budget}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground text-xs">Mid-Range</span>
                  <p className="text-foreground">
                    {curr}{race.weekendTotal.midRange}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground text-xs">Premium</span>
                  <p className="text-foreground">
                    {curr}{race.weekendTotal.premium}
                  </p>
                </div>
              </div>

              <Link
                href={`/races/${race.raceSlug}/costs`}
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-body"
              >
                Full cost breakdown <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Bottom Links */}
      <div className="mt-16 border-t border-border pt-10">
        <h2 className="font-display text-xl font-bold mb-4">
          Plan your first MotoGP weekend
        </h2>
        <p className="font-body text-muted-foreground mb-6 max-w-2xl">
          Cost is only one factor. Check the full calendar to find a date that
          works, or read our first-timer guide to understand what a race
          weekend actually involves.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/calendar"
            className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3 font-body text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            {CURRENT_SEASON} Race Calendar <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/first-time"
            className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3 font-body text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            First-Time Fan Guide <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
