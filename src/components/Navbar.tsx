"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { Cpu, Menu, X, MapPin, Coffee, ChevronDown, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect, useMemo, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getRacesWithStatus, formatDateRange, type RaceWithStatus } from "@/lib/raceUtils";

const navLinks = [
  { to: "/calendar", label: "Calendar" },
  { to: "__races__", label: "Races", isDropdown: true },
  { to: "/first-time", label: "First Time" },
  { to: "/about", label: "About" },
];

const NavbarInner = () => {
  const pathname = usePathname() ?? "";
  const searchParams = useSearchParams();
  const location = { pathname, search: searchParams?.toString() ? "?" + searchParams.toString() : "" };
  const [mobileOpen, setMobileOpen] = useState(false);
  const [racesDropdownOpen, setRacesDropdownOpen] = useState(false);
  const [mobileRacesOpen, setMobileRacesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const withSearch = (path: string) => path + location.search;

  const isActive = (to: string) => location.pathname === to;
  const isRacesActive = location.pathname.startsWith("/races/");

  const races = useMemo(() => getRacesWithStatus(), []);

  const liveRace = useMemo(() => races.find((r) => r.status === "live"), [races]);
  const nextRaces = useMemo(() => races.filter((r) => r.status === "upcoming").slice(0, 3), [races]);
  const upcomingRaces = useMemo(() => races.filter((r) => r.status === "upcoming").slice(3), [races]);
  const pastRaces = useMemo(() => races.filter((r) => r.status === "past"), [races]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setRacesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setRacesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setRacesDropdownOpen(false), 200);
  };

  const isRaceRouteActive = (route: string) => {
    if (route !== "/" && location.pathname === route) return true;
    return false;
  };

  const RaceItem = ({ race, size = "normal" }: { race: RaceWithStatus; size?: "normal" | "small" }) => {
    const active = isRaceRouteActive(race.route);
    const isLive = race.status === "live";
    const isPast = race.status === "past";

    return (
      <a
        href={withSearch(race.route)}
        onMouseDown={() => setRacesDropdownOpen(false)}
        className={`flex items-center justify-between gap-2 transition-colors ${
          size === "small" ? "px-4 py-1.5 text-xs" : "px-4 py-2.5 text-sm"
        } ${
          active
            ? "text-primary bg-white/10"
            : isPast
            ? "text-white/30 hover:text-white/50 hover:bg-white/5"
            : "text-white/60 hover:text-white hover:bg-white/5"
        }`}
      >
        <span className="flex items-center gap-2 min-w-0">
          {isLive && (
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-red-500" />
            </span>
          )}
          <span className="truncate">{race.city}</span>
        </span>
        <span className="flex items-center gap-1.5 shrink-0">
          {isLive && <span className="text-[9px] font-bold text-red-400">Live This Weekend</span>}
          <span className={`text-[10px] ${isPast ? "text-white/15" : "text-white/25"}`}>
            {formatDateRange(race.dates)}
          </span>
          <ChevronRight className={`h-3 w-3 ${isPast ? "text-white/10" : "text-white/20"}`} />
        </span>
      </a>
    );
  };

  const MobileRaceItem = ({ race }: { race: RaceWithStatus }) => {
    const active = isRaceRouteActive(race.route);
    const isLive = race.status === "live";
    const isPast = race.status === "past";

    return (
      <a
        href={withSearch(race.route)}
        onClick={() => { setMobileOpen(false); setMobileRacesOpen(false); }}
        className={`flex items-center justify-between px-3 py-3 text-sm rounded-lg transition-colors ${
          active ? "text-primary bg-white/5" : isPast ? "text-white/30" : "text-white/50 hover:text-white"
        }`}
      >
        <span className="flex items-center gap-2">
          {isLive && (
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-red-500" />
            </span>
          )}
          {race.city}
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-white/25">
          {isLive && <span className="text-red-400 font-bold">Live</span>}
          {formatDateRange(race.dates)}
          <ChevronRight className="h-3 w-3" />
        </span>
      </a>
    );
  };

  return (
    <nav className="fixed left-0 w-full bg-black/60 backdrop-blur-md border-b border-white/5 z-[9999]" style={{ top: 'var(--gpp-banner-h, 0px)' }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        {/* Logo */}
        <a href={withSearch("/")} className="flex items-center gap-4 md:gap-8">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/30 bg-primary/10">
            <Cpu className="h-4 w-4 text-primary" />
          </div>
          <span className="text-lg font-bold tracking-wider text-foreground whitespace-nowrap" style={{ fontFamily: "var(--font-hero)" }}>
            MotoGP
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ to, label, isDropdown }) => {
            if (to === "__races__") {
              return (
                <div
                  key={to}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={() => setRacesDropdownOpen((s) => !s)}
                    className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      isRacesActive ? "text-primary bg-white/10" : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${racesDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {racesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-1 w-80 rounded-xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-2xl overflow-hidden"
                      >
                        {liveRace && (
                          <>
                            <div className="px-4 pt-4 pb-1 border-t border-white/5">
                              <span className="text-[9px] font-bold uppercase tracking-widest text-red-400">Live This Weekend</span>
                            </div>
                            <RaceItem race={liveRace} />
                          </>
                        )}
                        {nextRaces.length > 0 && (
                          <>
                            <div className={`px-4 pt-4 pb-1 ${liveRace ? "border-t border-white/5" : ""}`}>
                              <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">Next Races</span>
                            </div>
                            {nextRaces.map((race) => (
                              <RaceItem key={race.id} race={race} />
                            ))}
                          </>
                        )}
                        {upcomingRaces.length > 0 && (
                          <>
                            <div className="px-4 pt-4 pb-1 border-t border-white/5">
                              <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">All Upcoming</span>
                            </div>
                            <div className="max-h-40 overflow-y-auto">
                              {upcomingRaces.map((race) => (
                                <RaceItem key={race.id} race={race} size="small" />
                              ))}
                            </div>
                          </>
                        )}
                        {pastRaces.length > 0 && (
                          <>
                            <div className="px-4 pt-4 pb-1 border-t border-white/5">
                              <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">Past Races</span>
                            </div>
                            <div className="max-h-32 overflow-y-auto">
                              {pastRaces.map((race) => (
                                <RaceItem key={race.id} race={race} size="small" />
                              ))}
                            </div>
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={to}
                href={withSearch(to)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(to) ? "text-primary bg-white/10" : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-3 text-muted-foreground hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/5 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3 max-h-[80vh] overflow-y-auto">
              {navLinks.map(({ to, label }) => {
                if (to === "__races__") {
                  return (
                    <div key={to}>
                      <button
                        onClick={() => setMobileRacesOpen(!mobileRacesOpen)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                          isRacesActive ? "bg-white/10 text-primary" : "text-white/60 hover:text-white"
                        }`}
                      >
                        <span>{label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileRacesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileRacesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-2"
                          >
                            {liveRace && (
                              <>
                                <span className="block text-[9px] font-bold uppercase tracking-widest text-red-400 px-3 pt-3 pb-1">Live This Weekend</span>
                                <MobileRaceItem race={liveRace} />
                              </>
                            )}
                            {nextRaces.length > 0 && (
                              <>
                                <span className="block text-[9px] font-bold uppercase tracking-widest text-white/30 px-3 pt-3 pb-1">Next Races</span>
                                {nextRaces.map((race) => <MobileRaceItem key={race.id} race={race} />)}
                              </>
                            )}
                            {upcomingRaces.length > 0 && (
                              <>
                                <span className="block text-[9px] font-bold uppercase tracking-widest text-white/30 px-3 pt-3 pb-1">All Upcoming</span>
                                {upcomingRaces.map((race) => <MobileRaceItem key={race.id} race={race} />)}
                              </>
                            )}
                            {pastRaces.length > 0 && (
                              <>
                                <span className="block text-[9px] font-bold uppercase tracking-widest text-white/20 px-3 pt-3 pb-1">Past Races</span>
                                {pastRaces.map((race) => <MobileRaceItem key={race.id} race={race} />)}
                              </>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={to}
                    href={withSearch(to)}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive(to) ? "bg-white/10 text-primary" : "text-white/60 hover:text-white"
                    }`}
                  >
                    <span>{label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Navbar = () => (
  <Suspense fallback={<div className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md border-b border-white/5 z-[9999] h-[57px]" />}>
    <NavbarInner />
  </Suspense>
);

export default Navbar;
