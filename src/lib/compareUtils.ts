/**
 * Utilities for MotoGP circuit comparison pages.
 * URL format: /compare/[slug1]-vs-[slug2] (always canonical/alphabetical order)
 */

import { racesWithCosts } from "../data/raceCosts2026";

/** Parse "jerez-vs-mugello" into ["jerez", "mugello"]. Returns null if invalid. */
export function parseMatchup(matchup: string): [string, string] | null {
  const vsIndex = matchup.indexOf("-vs-");
  if (vsIndex === -1) return null;

  const slug1 = matchup.slice(0, vsIndex);
  const slug2 = matchup.slice(vsIndex + 4);

  if (!slug1 || !slug2 || slug1 === slug2) return null;

  const validSlugs = new Set(racesWithCosts());
  if (!validSlugs.has(slug1) || !validSlugs.has(slug2)) return null;

  return [slug1, slug2];
}

/** Canonical ordering: alphabetical. "mugello-vs-jerez" → "jerez-vs-mugello" */
export function canonicalMatchup(slug1: string, slug2: string): string {
  const [a, b] = [slug1, slug2].sort();
  return `${a}-vs-${b}`;
}

/** Is the matchup already in canonical order? */
export function isCanonical(matchup: string): boolean {
  const parsed = parseMatchup(matchup);
  if (!parsed) return false;
  const [slug1, slug2] = parsed;
  return matchup === canonicalMatchup(slug1, slug2);
}

/** Curated comparison pairs — these get pre-generated via generateStaticParams */
export const CURATED_COMPARISONS: [string, string][] = [
  ["jerez", "catalunya"],
  ["mugello", "misano"],
  ["assen", "sachsenring"],
  ["silverstone", "le-mans"],
  ["austria", "hungary"],
  ["brno", "austria"],
  ["mugello", "silverstone"],
  ["jerez", "portimao"],
  ["le-mans", "catalunya"],
  ["assen", "silverstone"],
  ["aragon", "valencia"],
  ["misano", "valencia"],
  ["mugello", "le-mans"],
  ["jerez", "mugello"],
  ["catalunya", "misano"],
];
