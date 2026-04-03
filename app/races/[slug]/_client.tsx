'use client'
import { useParams } from "next/navigation";
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import { racesWithCosts } from "@/data/raceCosts2026";
import { getCampingBySlug } from "@/data/campingData";
import { CURATED_COMPARISONS, canonicalMatchup } from "@/lib/compareUtils";
import Footer from "@/components/Footer";
import { Calendar, MapPin, ArrowLeft, Tent, CheckCircle } from "lucide-react";

const COSTS_SLUGS = new Set(racesWithCosts());
const FIRST_TIME_SLUGS = new Set(['mugello', 'silverstone', 'assen', 'catalunya']);

export default function RacePageClient() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : undefined;
  const race = slug ? getRaceBySlug(slug) : null;

  if (!race) {
    return (
      <main className="min-h-screen bg-background pt-24 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Race Not Found</h1>
          <p className="mt-4 text-muted-foreground">This race doesn't exist in the current calendar.</p>
          <Link href="/" className="mt-6 inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to calendar
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> All races
          </Link>

          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            {race.name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{race.circuit}</p>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" /> {race.dates}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> {race.city}, {race.country}
            </span>
          </div>
        </div>
      </section>

      {/* Highlights */}
      {race.highlights.length > 0 && (
        <section className="px-4 pb-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-xl font-bold text-foreground mb-4">Circuit Highlights</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {race.highlights.map((h, i) => (
                <div key={i} className="rounded-xl border border-border/50 bg-card/60 p-4">
                  <p className="text-sm text-foreground">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Camping */}
      {(() => {
        const camping = slug ? getCampingBySlug(slug) : null;
        if (!camping) return null;
        return (
          <section className="px-4 pb-12">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                <Tent className="h-5 w-5 text-primary" /> Camping
              </h2>
              <p className="text-sm text-muted-foreground mb-6">{camping.intro}</p>

              <div className="grid gap-3 sm:grid-cols-2 mb-6">
                {camping.officialCampsites.map((site) => (
                  <div key={site.name} className="rounded-xl border border-border/50 bg-card/60 p-4">
                    <p className="text-sm font-semibold text-foreground">{site.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{site.description}</p>
                    {site.priceRange && (
                      <p className="text-xs text-primary mt-2 font-medium">{site.priceRange}</p>
                    )}
                    <p className="text-[10px] text-muted-foreground mt-1">
                      {site.walkable ? "Walking distance to circuit" : "Transport needed to circuit"}
                    </p>
                  </div>
                ))}
              </div>

              {camping.wildCamping && (
                <div className="rounded-xl border border-border/50 bg-card/60 p-4 mb-6">
                  <p className="text-sm font-semibold text-foreground">Wild / Unofficial Camping</p>
                  <p className="text-xs text-muted-foreground mt-1">{camping.wildCamping}</p>
                </div>
              )}

              {camping.tips.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">Camping Tips</h3>
                  <ul className="space-y-1.5">
                    {camping.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        );
      })()}

      {/* Coming soon */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Full travel guide coming soon — transport, packing, and first-timer tips for {race.city}.
            </p>
          </div>
        </div>
      </section>

      {/* Related guides */}
      {(() => {
        const hasCosts = COSTS_SLUGS.has(slug!);
        const hasFirstTime = FIRST_TIME_SLUGS.has(slug!);
        const comparisons = CURATED_COMPARISONS.filter(([a, b]) => a === slug || b === slug).slice(0, 3);
        if (!hasCosts && !hasFirstTime && comparisons.length === 0) return null;
        return (
          <section className="px-4 pb-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Related guides</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {hasCosts && (
                  <Link href={`/races/${slug}/costs`} className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors">
                    <p className="text-sm font-semibold text-foreground">Weekend Cost Breakdown</p>
                    <p className="text-xs text-muted-foreground mt-1">Tickets, flights, hotels — what you'll actually spend</p>
                  </Link>
                )}
                {hasFirstTime && (
                  <Link href={`/first-time/${slug}`} className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors">
                    <p className="text-sm font-semibold text-foreground">First Time at {race.name}?</p>
                    <p className="text-xs text-muted-foreground mt-1">Viewing spots, transport, and what to expect</p>
                  </Link>
                )}
                {comparisons.map(([a, b]) => {
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
        );
      })()}

      <Footer />
    </main>
  );
}
