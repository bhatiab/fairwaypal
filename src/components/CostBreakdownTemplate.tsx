'use client'

import Link from "next/link";
import { Ticket, Plane, BedDouble, Utensils, Bus, Lightbulb, ArrowLeft, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { RaceCostData } from "@/data/raceCosts2026";
import { getGuidePages } from "@/lib/guideNav";
import { CURATED_COMPARISONS, canonicalMatchup } from "@/lib/compareUtils";

const FIRST_TIME_SLUGS = new Set(['mugello', 'silverstone', 'assen', 'catalunya']);

interface CostBreakdownTemplateProps {
  data: RaceCostData;
  raceName: string;
  circuit: string;
}

function formatRange(range: [number, number], currency: string): string {
  const sym = currency === "GBP" ? "£" : currency === "USD" ? "$" : "€";
  if (range[0] === 0 && range[1] === 0) return "Included with ticket";
  if (range[0] === range[1]) return `${sym}${range[0]}`;
  return `${sym}${range[0]}–${sym}${range[1]}`;
}

export default function CostBreakdownTemplate({ data, raceName, circuit }: CostBreakdownTemplateProps) {
  const currencySym = data.currency === "GBP" ? "£" : data.currency === "USD" ? "$" : "€";
  const guidePages = getGuidePages(data.raceSlug);
  const hasGettingThere = guidePages.some((p) => p.slug === "getting-there");
  const hasPacking = guidePages.some((p) => p.slug === "packing-guide");
  const hasFirstTime = FIRST_TIME_SLUGS.has(data.raceSlug);
  const comparisons = CURATED_COMPARISONS.filter(([a, b]) => a === data.raceSlug || b === data.raceSlug).slice(0, 3);

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href={`/races/${data.raceSlug}`}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="h-3 w-3" /> {raceName}
          </Link>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            {raceName} — Weekend Costs
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Tickets, flights, accommodation, and food. What you&apos;ll actually spend.
          </p>
        </div>
      </section>

      {/* Budget summary cards */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">
            Weekend Budget (excl. flights)
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="border-border/50 bg-card/60">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-muted-foreground">Budget</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-display text-3xl font-bold text-foreground">
                  {currencySym}{data.weekendTotal.budget}
                </p>
                <p className="text-xs text-muted-foreground mt-1">GA ticket + camping / hostel</p>
              </CardContent>
            </Card>
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-primary">Mid-range</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-display text-3xl font-bold text-foreground">
                  {currencySym}{data.weekendTotal.midRange}
                </p>
                <p className="text-xs text-muted-foreground mt-1">Grandstand + 3-star hotel</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/60">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-muted-foreground">Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-display text-3xl font-bold text-foreground">
                  {currencySym}{data.weekendTotal.premium}
                </p>
                <p className="text-xs text-muted-foreground mt-1">Top grandstand + 4-star hotel</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tickets */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">
            <Ticket className="inline h-5 w-5 text-primary mr-2" />
            Tickets
          </h3>
          <div className="rounded-xl border border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50 bg-card/40">
                  <TableHead className="text-foreground font-semibold">Tier</TableHead>
                  <TableHead className="text-foreground font-semibold text-right">3-day price</TableHead>
                  <TableHead className="text-foreground font-semibold hidden sm:table-cell">Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.tickets.map((t) => (
                  <TableRow key={t.name} className="border-border/50">
                    <TableCell className="font-medium text-foreground">{t.name}</TableCell>
                    <TableCell className="text-right font-mono text-sm text-foreground">
                      {formatRange(t.priceRange, data.currency)}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground hidden sm:table-cell">
                      {t.note ?? "—"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {data.tickets.some((t) => t.note?.toLowerCase().includes("estimat")) && (
            <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1.5">
              <Info className="h-3 w-3 shrink-0" />
              Some prices are estimated — check the official circuit site for confirmed pricing.
            </p>
          )}
        </div>
      </section>

      {/* Flights */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">
            <Plane className="inline h-5 w-5 text-primary mr-2" />
            Flights (return, economy)
          </h3>
          <div className="rounded-xl border border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50 bg-card/40">
                  <TableHead className="text-foreground font-semibold">From</TableHead>
                  <TableHead className="text-foreground font-semibold text-right">Round trip</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.flights.map((f) => (
                  <TableRow key={f.fromRegion} className="border-border/50">
                    <TableCell className="text-foreground">{f.fromRegion}</TableCell>
                    <TableCell className="text-right font-mono text-sm text-foreground">
                      {formatRange(f.range, f.currency)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Flight prices are estimates at normal fares. Race-weekend flights booked late can be 2–3× higher.
          </p>
        </div>
      </section>

      {/* Accommodation */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">
            <BedDouble className="inline h-5 w-5 text-primary mr-2" />
            Accommodation (per night, race weekend)
          </h3>
          <div className="rounded-xl border border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50 bg-card/40">
                  <TableHead className="text-foreground font-semibold">Tier</TableHead>
                  <TableHead className="text-foreground font-semibold text-right">Per night</TableHead>
                  <TableHead className="text-foreground font-semibold text-right hidden sm:table-cell">3-night total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.accommodation.map((a) => {
                  const perNight = formatRange(a.perNight, data.currency);
                  const threeNightLow = a.perNight[0] * 3;
                  const threeNightHigh = a.perNight[1] * 3;
                  const threeNight =
                    a.perNight[0] === 0 && a.perNight[1] === 0
                      ? "Included with ticket"
                      : formatRange([threeNightLow, threeNightHigh], data.currency);
                  return (
                    <TableRow key={a.tier} className="border-border/50">
                      <TableCell className="text-foreground">{a.tier}</TableCell>
                      <TableCell className="text-right font-mono text-sm text-foreground">{perNight}</TableCell>
                      <TableCell className="text-right font-mono text-sm text-muted-foreground hidden sm:table-cell">
                        {threeNight}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Food & Transport */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border/50 bg-card/60 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Utensils className="h-4 w-4 text-primary" />
                <p className="text-sm font-semibold text-foreground">Food &amp; drink (per day)</p>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">
                {formatRange(data.dailyFood, data.currency)}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Eating near the circuit is typically 40–60% cheaper than inside.
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/60 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Bus className="h-4 w-4 text-primary" />
                <p className="text-sm font-semibold text-foreground">Local transport (per day)</p>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">
                {formatRange(data.localTransport, data.currency)}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Shuttle buses, trains, or taxis to and from the circuit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Money tips */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">
            <Lightbulb className="inline h-5 w-5 text-primary mr-2" />
            Money-saving tips
          </h3>
          <div className="rounded-xl border border-border/50 bg-card/60 p-5">
            <ul className="space-y-3">
              {data.moneyTips.map((tip, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related pages */}
      {(hasGettingThere || hasPacking || hasFirstTime || comparisons.length > 0) && (
        <section className="px-4 pb-12">
          <div className="mx-auto max-w-3xl">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Related guides</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {hasFirstTime && (
                <Link
                  href={`/first-time/${data.raceSlug}`}
                  className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors"
                >
                  <p className="text-sm font-semibold text-foreground">First Time at {raceName}?</p>
                  <p className="text-xs text-muted-foreground mt-1">Viewing spots, transport, and what to expect</p>
                </Link>
              )}
              {hasGettingThere && (
                <Link
                  href={`/races/${data.raceSlug}/getting-there`}
                  className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors"
                >
                  <p className="text-sm font-semibold text-foreground">Getting There</p>
                  <p className="text-xs text-muted-foreground mt-1">Transport and parking options for the circuit</p>
                </Link>
              )}
              {hasPacking && (
                <Link
                  href={`/races/${data.raceSlug}/packing-guide`}
                  className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors"
                >
                  <p className="text-sm font-semibold text-foreground">Packing Guide</p>
                  <p className="text-xs text-muted-foreground mt-1">What to bring for this circuit and climate</p>
                </Link>
              )}
              {comparisons.map(([a, b]) => {
                const matchup = canonicalMatchup(a, b);
                return (
                  <Link
                    key={matchup}
                    href={`/compare/${matchup}`}
                    className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors"
                  >
                    <p className="text-sm font-semibold text-foreground capitalize">{a.replace(/-/g, ' ')} vs {b.replace(/-/g, ' ')}</p>
                    <p className="text-xs text-muted-foreground mt-1">Compare costs, atmosphere, and logistics</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs text-muted-foreground border-t border-border/30 pt-4">
            Prices estimated as of {data.lastUpdated}. Ticket prices are official circuit rates where available; hotel and flight costs are approximate.
            Race-weekend accommodation and flight prices fluctuate significantly — book early for the best rates.
          </p>
        </div>
      </section>
    </main>
  );
}
