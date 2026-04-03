"use client";

import Link from "next/link";
import { getRacesWithStatus, formatDateRange } from "@/lib/raceUtils";
import { CURRENT_SEASON } from "@/lib/season";
import { Calendar, MapPin, Zap, ArrowRight } from "lucide-react";

export default function CalendarClient() {
  const races = getRacesWithStatus();
  const nextUpcomingIdx = races.findIndex((r) => r.status === "upcoming");

  return (
    <main className="max-w-6xl mx-auto px-5 pt-28 pb-16">
      <h1 className="font-display text-3xl md:text-4xl font-bold tracking-wide mb-2">
        MotoGP {CURRENT_SEASON} Race Calendar
      </h1>
      <p className="font-body text-muted-foreground mb-10 max-w-2xl">
        All 22 rounds with dates, circuits, and links to fan travel guides.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {races.map((race, i) => {
          const isNext = i === nextUpcomingIdx;
          const isPast = race.status === "past";
          const isLive = race.status === "live";

          return (
            <Link
              key={race.id}
              href={race.route}
              className={`group relative bg-card border rounded-xl p-5 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${
                isNext
                  ? "border-primary shadow-md"
                  : "border-border"
              } ${isPast ? "opacity-50" : ""}`}
            >
              {/* Badges row */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-xs font-body text-muted-foreground uppercase tracking-widest">
                  Round {race.id}
                </span>
                {isNext && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary text-white px-2 py-0.5 rounded-full">
                    Next Race
                  </span>
                )}
                {isLive && (
                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-red-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                    </span>
                    Live
                  </span>
                )}
                {race.isSprint && (
                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    <Zap className="h-3 w-3" />
                    Sprint
                  </span>
                )}
                {race.isNewCircuit && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                    New Circuit
                  </span>
                )}
              </div>

              {/* Race name */}
              <h2 className="font-display text-lg font-semibold tracking-wide mb-1 group-hover:text-primary transition-colors">
                {race.name}
              </h2>

              {/* Circuit */}
              <p className="font-body text-muted-foreground text-sm mb-3">
                {race.circuit}
              </p>

              {/* Details */}
              <div className="flex flex-col gap-1.5 text-sm font-body">
                <div className="flex items-center gap-2 text-foreground/70">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span>
                    {race.city}, {race.country}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Calendar className="h-3.5 w-3.5 shrink-0" />
                  <span>{formatDateRange(race.dates)}</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-5 right-5 text-muted-foreground group-hover:text-primary transition-colors">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
