import { races2026 as calendarRaces, type Race } from "./calendar2026";

export interface RaceGuide {
  id: number;
  name: string;
  country: string;
  city: string;
  circuit: string;
  slug: string;
  dates: string;
  startDate: Date;
  isSprint: boolean;
  isFeatured: boolean;
  isNewCircuit: boolean;
  route: string;
  highlights: string[];
}

const slugMap: Record<number, { slug: string; circuit: string; highlights: string[] }> = {
  1:  { slug: "thailand",       circuit: "Chang International Circuit",                    highlights: ["Season opener", "Tropical heat and humidity", "Night-race atmosphere"] },
  2:  { slug: "brazil",         circuit: "Autódromo Internacional Ayrton Senna",           highlights: ["First MotoGP at Goiânia since 1992", "New circuit layout", "Passionate Brazilian crowd"] },
  3:  { slug: "austin",         circuit: "Circuit of the Americas",                        highlights: ["Elevation change at Turn 1", "Multi-corner complex", "World-class multi-series venue"] },
  4:  { slug: "jerez",          circuit: "Circuito de Jerez – Ángel Nieto",                highlights: ["Classic MotoGP venue", "Hot Andalusian climate", "Legendary corner names"] },
  5:  { slug: "le-mans",        circuit: "Bugatti Circuit",                                highlights: ["Iconic endurance racing venue", "Unpredictable French weather", "Passionate trackside camping culture"] },
  6:  { slug: "catalunya",      circuit: "Circuit de Barcelona-Catalunya",                 highlights: ["Technical medium-speed layout", "Mediterranean climate", "Close to Barcelona city"] },
  7:  { slug: "mugello",        circuit: "Autodromo Internazionale del Mugello",            highlights: ["Flowing Tuscan hills layout", "Italian Tifosi atmosphere", "One of MotoGP's fastest tracks"] },
  8:  { slug: "hungary",        circuit: "Balaton Park Circuit",                           highlights: ["Brand new circuit for MotoGP", "Lake Balaton setting", "First-ever Hungarian GP"] },
  9:  { slug: "brno",           circuit: "Brno Circuit",                                   highlights: ["Historic European venue", "Elevation changes through forests", "Technical corner sequences"] },
  10: { slug: "assen",          circuit: "TT Circuit Assen",                               highlights: ["The Cathedral of MotoGP", "Purpose-built motorcycle racing circuit", "Dutch TT tradition since 1949"] },
  11: { slug: "sachsenring",    circuit: "Sachsenring",                                    highlights: ["Tight left-hand-dominated layout", "Hillside amphitheatre viewing", "Compact and spectator-friendly"] },
  12: { slug: "silverstone",    circuit: "Silverstone Circuit",                            highlights: ["High-speed classic layout", "Legendary Maggots-Becketts complex", "British motorsport heritage"] },
  13: { slug: "aragon",         circuit: "MotorLand Aragón",                               highlights: ["Purpose-built modern facility", "Remote Aragonese landscape", "Long straight and heavy braking zones"] },
  14: { slug: "misano",         circuit: "Misano World Circuit Marco Simoncelli",          highlights: ["Rimini Riviera setting", "Named after Marco Simoncelli", "Tight technical layout near the coast"] },
  15: { slug: "austria",        circuit: "Red Bull Ring",                                  highlights: ["Short, punchy lap", "Alpine scenery and elevation", "Strong overtaking opportunities"] },
  16: { slug: "motegi",         circuit: "Mobility Resort Motegi",                         highlights: ["Honda's home circuit", "Technical stop-and-go layout", "Autumn foliage setting"] },
  17: { slug: "mandalika",      circuit: "Pertamina Mandalika International Street Circuit", highlights: ["Coastal Lombok setting", "Tropical heat and humidity", "Modern purpose-built facility"] },
  18: { slug: "phillip-island", circuit: "Phillip Island Grand Prix Circuit",              highlights: ["Stunning ocean backdrop", "Fast flowing corners", "One of MotoGP's most spectacular venues"] },
  19: { slug: "sepang",         circuit: "Petronas Sepang International Circuit",          highlights: ["Tropical heat and afternoon storms", "Wide track with multiple lines", "Malaysian motorsport hub"] },
  20: { slug: "qatar",          circuit: "Lusail International Circuit",                   highlights: ["Floodlit desert setting", "Fast flowing night race", "Season finale region"] },
  21: { slug: "portimao",       circuit: "Algarve International Circuit",                  highlights: ["Dramatic elevation changes", "Blind crests and rollercoaster layout", "Algarve coastal climate"] },
  22: { slug: "valencia",       circuit: "Circuit Ricardo Tormo",                          highlights: ["Traditional season finale", "Compact amphitheatre layout", "Every seat has a view"] },
};

const featuredSlugs = new Set(["mugello", "assen", "phillip-island", "silverstone", "le-mans"]);

export const raceGuides: RaceGuide[] = calendarRaces.map((r) => {
  const info = slugMap[r.id] ?? { slug: `race-${r.id}`, circuit: r.circuit ?? r.city, highlights: [] };
  const isFeatured = featuredSlugs.has(info.slug);
  return {
    id: r.id,
    name: r.name,
    country: r.country,
    city: r.city,
    circuit: info.circuit,
    slug: info.slug,
    dates: r.dates,
    startDate: r.startDate,
    isSprint: r.isSprint,
    isFeatured,
    isNewCircuit: r.isNewCircuit,
    route: `/races/${info.slug}`,
    highlights: info.highlights,
  };
});

/** Get a race by its slug */
export const getRaceBySlug = (slug: string) => raceGuides.find((r) => r.slug === slug);

/** Get the previous and next races given a race id */
export const getAdjacentRaces = (id: number) => {
  const idx = raceGuides.findIndex((r) => r.id === id);
  return {
    prev: idx > 0 ? raceGuides[idx - 1] : null,
    next: idx < raceGuides.length - 1 ? raceGuides[idx + 1] : null,
  };
};
