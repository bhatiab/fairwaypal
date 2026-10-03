#!/usr/bin/env node
/**
 * Generates lib/content-dates.ts — a route -> ISO date map used by app/sitemap.ts
 * to emit a real per-page <lastmod>.
 *
 * Why this exists: app/sitemap.ts previously stamped every URL with a single
 * `new Date()` evaluated at module scope, so all 65 URLs reported the same
 * lastmod and that value changed on every deploy. Google ignores lastmod when a
 * sitemap claims the whole site changed at once, which costs crawl scheduling on
 * a site that depends on it.
 *
 * Date sources, in order of preference:
 *   1. `dateModified` from the page's own Article JSON-LD. Every blog post has
 *      one, so posts are self-describing — edit the page, re-run this script.
 *   2. NON_ARTICLE_DATES below, for pages that carry no in-page date.
 *
 * Deliberately NOT git: this repo's history has sitewide commits (14734c1, the
 * canonical fix, touched 64 of 67 pages) so `git log -1 -- <file>` collapses
 * almost every page onto one identical date — the exact problem being fixed.
 * Build-time git is unusable anyway: CI shallow clones flatten history further.
 *
 * Regenerate after publishing or editing a page:  npm run content:dates
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const APP = path.join(ROOT, 'app')
const OUT = path.join(ROOT, 'lib', 'content-dates.ts')

/**
 * Pages with no Article JSON-LD, so no in-page date to read. Seeded from the
 * commit that introduced each page. Bump a date here when you meaningfully
 * change that page's content; leave it alone for styling or dependency churn,
 * so an unchanged page keeps a stable lastmod across deploys.
 */
const NON_ARTICLE_DATES = {
  '/': '2026-05-06',
  '/plan': '2026-04-03',
  '/about': '2026-04-03',
  '/status': '2026-04-08',
  '/affiliate-disclosure': '2026-04-03',
  '/blog': '2026-05-06',
  '/destinations': '2026-08-25',
  '/destinations/scottsdale': '2026-10-03',
  '/destinations/myrtle-beach': '2026-10-03',
  '/destinations/bandon-dunes': '2026-10-03',
  '/destinations/pinehurst': '2026-10-03',
  '/destinations/scotland': '2026-10-03',
  '/destinations/ireland': '2026-10-03',
  '/destinations/pebble-beach': '2026-10-03',
  '/destinations/kiawah-island': '2026-10-03',
  '/destinations/florida-golf': '2026-10-03',
  '/destinations/algarve': '2026-10-03',
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/

/** Pull `dateModified: 'YYYY-MM-DD'` (or dateModified: "…") out of a page's JSON-LD. */
function readDateModified(file) {
  if (!existsSync(file)) return null
  const src = readFileSync(file, 'utf8')
  const match = src.match(/dateModified:\s*['"](\d{4}-\d{2}-\d{2})['"]/)
  return match ? match[1] : null
}

const dates = {}
const warnings = []

// Blog posts: self-describing via their own JSON-LD.
const blogDir = path.join(APP, 'blog')
for (const slug of readdirSync(blogDir, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort()) {
  const route = `/blog/${slug}`
  const found = readDateModified(path.join(blogDir, slug, 'page.tsx'))
  if (found) dates[route] = found
  else warnings.push(`${route}: no dateModified in JSON-LD, omitted from sitemap lastmod`)
}

// Everything else: curated above.
for (const [route, date] of Object.entries(NON_ARTICLE_DATES)) {
  if (!ISO_DATE.test(date)) throw new Error(`NON_ARTICLE_DATES["${route}"] is not YYYY-MM-DD: ${date}`)
  const pageFile = path.join(APP, route === '/' ? 'page.tsx' : `${route.slice(1)}/page.tsx`)
  if (!existsSync(pageFile)) warnings.push(`${route}: listed in NON_ARTICLE_DATES but ${path.relative(ROOT, pageFile)} does not exist`)
  dates[route] = date
}

const sorted = Object.keys(dates).sort()
const body = sorted.map((route) => `  '${route}': '${dates[route]}',`).join('\n')

writeFileSync(
  OUT,
  `// GENERATED FILE — do not edit by hand.
// Run \`npm run content:dates\` to regenerate.
//
// Maps a route to the date its content last meaningfully changed, so
// app/sitemap.ts can emit a truthful per-page <lastmod>. Blog post dates come
// from each page's own Article JSON-LD \`dateModified\`; the rest are curated in
// scripts/generate-content-dates.mjs.
//
// A route absent from this map gets no <lastmod> at all, which is valid and far
// better than inventing one — an untrue lastmod is what made Google stop
// trusting this sitemap in the first place.

export const CONTENT_DATES: Record<string, string> = {
${body}
}
`,
  'utf8',
)

console.log(`Wrote ${path.relative(ROOT, OUT)} — ${sorted.length} routes`)
const distinct = new Set(Object.values(dates))
console.log(`Distinct dates: ${distinct.size} (${[...distinct].sort().join(', ')})`)
if (distinct.size === 1) {
  console.error('ERROR: every route resolved to the same date — that is the bug this script exists to prevent.')
  process.exit(1)
}
for (const w of warnings) console.warn(`warning: ${w}`)
