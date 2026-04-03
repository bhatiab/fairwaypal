'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, UtensilsCrossed, Wine, Music, MapPin, AlertTriangle, Clock } from "lucide-react";

const race = getRaceBySlug('jerez')!;

const RESTAURANTS = [
  {
    name: 'Bar Juanito',
    type: 'Classic tapas bar',
    area: 'City centre',
    detail: 'An institution in Jerez. Famous for artichokes (alcachofas) and classic Andalusian tapas. One of the most recommended spots in the city for good reason — generous portions and a proper local atmosphere.',
    tip: 'Arrive early or expect to wait on race week evenings.',
  },
  {
    name: 'Bar & Restaurante Albores',
    type: 'Modern Spanish',
    area: 'City centre',
    detail: 'Lively and popular during race week, with a menu that mixes modern Spanish cooking with Andalusian classics. Good for groups and popular with international fans looking for a sit-down meal.',
    tip: 'Book in advance for race weekend. This fills up fast.',
  },
  {
    name: 'La Carboná',
    type: 'Sherry-paired dining',
    area: 'City centre',
    detail: 'Stylish restaurant known for tasting menus paired with local sherries. If you want to eat well and understand why Jerez food and sherry go together, this is the place. More refined than a typical tapas bar.',
    tip: 'Best suited for a sit-down evening after Friday or Saturday racing.',
  },
];

const TABANCOS = [
  {
    name: 'Tabanco El Pasaje',
    detail: 'The most famous tabanco in Jerez — a traditional sherry bar where impromptu flamenco breaks out at night. Order a glass of fino or manzanilla, eat tapas, and watch the city come alive. The atmosphere during race week is something else entirely.',
    highlight: 'Live flamenco, local sherry, and the best people-watching in the city.',
  },
  {
    name: 'Tabancos generally',
    detail: 'Tabancos are traditional Jerez wine bars that sell sherry directly from the barrel — cheap, atmospheric, and completely local. They are scattered across the old town. Wander and find them. They are nothing like a modern bar and are much better for it.',
    highlight: 'Sherry from €1.50 a glass. Bring cash.',
  },
];

const RACE_WEEK_ATMOSPHERE = [
  {
    title: 'Street parties in the old town',
    detail: 'Race week turns Jerez\'s old town into a city-wide party. Thousands of fans, many arriving on motorcycles, flood the streets after each day at the circuit. Spontaneous music, dancing, and celebrations break out around the main squares — especially after Saturday qualifying.',
  },
  {
    title: 'Plaza Plateros and the main squares',
    detail: 'The main squares in Jerez centre fill with outdoor bars during race week. Tables spread across the cobblestones, live music plays, and the atmosphere stays going until the early hours. No advance planning needed — just walk toward the noise.',
  },
  {
    title: 'Garage 93 by Repsol (race week pop-up)',
    detail: 'A Marc Márquez-associated fan zone and sports bar that has appeared in Jerez during race week. Shows races on large screens, heavy Repsol branding, and a guaranteed motorcycle-fan crowd. Check for current-year location as it moves.',
  },
  {
    title: 'Camping circuit fans',
    detail: 'Thousands of fans camp in areas around the circuit. They create their own festival-style atmosphere completely separate from the city. If you are camping, expect late-night parties right through the weekend.',
  },
];

const DAY_TRIPS = [
  {
    destination: 'El Puerto de Santa María',
    distance: '20 min drive',
    detail: 'Coastal town on the sherry triangle. Excellent seafood restaurants, beach bars, and a more relaxed nightlife scene than Jerez city. A good option when Jerez restaurants are fully booked.',
  },
  {
    destination: 'Cádiz',
    distance: '30 min drive / 45 min train',
    detail: 'One of Europe\'s oldest cities with a beautiful historic centre and proper beach access. Good seafood restaurants and bars. More hotel availability than Jerez at race weekend, so some fans base themselves here and commute.',
  },
];

export default function FoodAndNightlifeClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/jerez" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Food & Nightlife
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Where to eat and what to expect after the racing stops
          </p>
        </div>
      </section>

      {/* Key tip */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Spanish meal times are different</p>
                <p className="text-sm text-muted-foreground">
                  Dinner in Jerez starts at 8–10 PM. Arriving at a restaurant at 6 PM will get you in, but the kitchen may not be fully running and the atmosphere will not be there yet. Plan your post-race evenings around Spanish timing, not northern European habits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <UtensilsCrossed className="inline h-5 w-5 text-primary mr-2" />
            Restaurants
          </h2>
          <div className="space-y-4">
            {RESTAURANTS.map((r) => (
              <div key={r.name} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-sm font-bold text-foreground">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.type} · {r.area}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{r.detail}</p>
                <div className="rounded-lg bg-primary/5 border border-primary/10 p-2.5">
                  <p className="text-xs text-primary/80">{r.tip}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Book ahead:</strong> Every decent restaurant in Jerez fills up during race week. If you want a table on Friday or Saturday evening, book before you travel — walk-in tables become very difficult.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabancos */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Wine className="inline h-5 w-5 text-primary mr-2" />
            Tabancos — Jerez's Traditional Sherry Bars
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            A tabanco is a traditional wine bar that sells sherry directly from the barrel. They are unique to Jerez, very cheap, and serve some of the best tapas in the city. Don't leave without experiencing at least one.
          </p>
          <div className="space-y-4">
            {TABANCOS.map((t) => (
              <div key={t.name} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <p className="text-sm font-bold text-foreground mb-2">{t.name}</p>
                <p className="text-sm text-muted-foreground mb-3">{t.detail}</p>
                <div className="rounded-lg bg-primary/5 border border-primary/10 p-2.5">
                  <p className="text-xs text-primary/80">{t.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Race week atmosphere */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Music className="inline h-5 w-5 text-primary mr-2" />
            Race Week Atmosphere
          </h2>
          <div className="space-y-4">
            {RACE_WEEK_ATMOSPHERE.map((a) => (
              <div key={a.title} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <p className="text-sm font-bold text-foreground mb-2">{a.title}</p>
                <p className="text-sm text-muted-foreground">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day trips */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <MapPin className="inline h-5 w-5 text-primary mr-2" />
            Evening Escapes — Nearby Towns
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            If Jerez restaurants are fully booked, or you want a different atmosphere for an evening, these towns are close and worth the drive.
          </p>
          <div className="space-y-3">
            {DAY_TRIPS.map((d) => (
              <div key={d.destination} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <p className="text-sm font-semibold text-foreground">{d.destination}</p>
                  <span className="text-xs font-mono text-primary shrink-0">{d.distance}</span>
                </div>
                <p className="text-xs text-muted-foreground">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
