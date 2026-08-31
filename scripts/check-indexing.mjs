#!/usr/bin/env node
/**
 * Preflight check on everything a search engine needs to discover this site.
 *
 * Run before a deploy:  npm run seo:check
 *
 * None of these are things a build failure would catch: a page can compile
 * perfectly and still be invisible because it never made it into routes.json, or
 * because its canonical points at the wrong host. Every check here corresponds to
 * a real regression this repo has already shipped once.
 *
 * Reads the same sources of truth as everything else (lib/routes.json,
 * lib/indexnow.ts, public/) rather than restating any of them. Exits non-zero on
 * the first category of failure so CI can gate on it.
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const APP = path.join(ROOT, 'app')
const SITE_URL = 'https://www.fairwaypal.com'

const routes = JSON.parse(readFileSync(path.join(ROOT, 'lib', 'routes.json'), 'utf8'))

const failures = []
const notes = []

const fail = (check, detail) => failures.push({ check, detail })
const note = (line) => notes.push(line)

/** /blog/foo -> app/blog/foo/page.tsx */
const pageFileFor = (route) =>
  route === '/' ? path.join(APP, 'page.tsx') : path.join(APP, route.slice(1), 'page.tsx')

// ---------------------------------------------------------------------------
// 1. Every declared route resolves to a real page.
// ---------------------------------------------------------------------------
const missingPages = routes.filter((route) => !existsSync(pageFileFor(route)))
if (missingPages.length > 0) {
  fail('routes resolve to pages', `${missingPages.length} route(s) in routes.json have no page.tsx, so the sitemap publishes 404s: ${missingPages.join(', ')}`)
}

// ---------------------------------------------------------------------------
// 2. No page on disk is missing from routes.json.
// A page absent here is in no sitemap and is submitted to no search engine.
// ---------------------------------------------------------------------------
function walk(dir, prefix = '') {
  const found = []
  if (existsSync(path.join(dir, 'page.tsx'))) found.push(prefix === '' ? '/' : prefix)
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    if (entry.name === 'api' || entry.name.startsWith('_') || entry.name.startsWith('(')) continue
    found.push(...walk(path.join(dir, entry.name), `${prefix}/${entry.name}`))
  }
  return found
}
const onDisk = walk(APP).filter((r) => !r.includes('[') && r !== '/trip' && !r.startsWith('/trip/'))
const undeclared = onDisk.filter((route) => !routes.includes(route))
if (undeclared.length > 0) {
  fail('every page is declared', `${undeclared.length} page(s) exist but are absent from lib/routes.json, so nothing tells a search engine they exist: ${undeclared.join(', ')}`)
}

// ---------------------------------------------------------------------------
// 3. Canonical tags: present, on the right host, matching their own route.
// A canonical pointing at the wrong host de-indexes the page it is on. This repo
// shipped exactly that bug once already (fixed in #20).
// ---------------------------------------------------------------------------
const canonicalIssues = []
for (const route of routes) {
  const file = pageFileFor(route)
  if (!existsSync(file)) continue
  const source = readFileSync(file, 'utf8')
  const match = source.match(/canonical:\s*['"`]([^'"`]+)['"`]/)

  if (!match) {
    // The homepage inherits metadataBase and needs no explicit canonical.
    if (route !== '/') canonicalIssues.push(`${route}: no canonical`)
    continue
  }

  const canonical = match[1]
  const expected = route === '/' ? SITE_URL : `${SITE_URL}${route}`
  if (canonical !== expected) {
    canonicalIssues.push(`${route}: canonical is "${canonical}", expected "${expected}"`)
  }
}
if (canonicalIssues.length > 0) {
  fail('canonicals', `${canonicalIssues.length} page(s) with a wrong or missing canonical:\n    ${canonicalIssues.join('\n    ')}`)
}

// ---------------------------------------------------------------------------
// 4. IndexNow key file is present and byte-identical to the declared key.
// A mismatch makes every submission 403 and Bing stops receiving the site.
// ---------------------------------------------------------------------------
const indexnowSource = readFileSync(path.join(ROOT, 'lib', 'indexnow.ts'), 'utf8')
const keyMatch = indexnowSource.match(/INDEXNOW_KEY\s*=\s*['"]([^'"]+)['"]/)
if (!keyMatch) {
  fail('indexnow key', 'could not read INDEXNOW_KEY out of lib/indexnow.ts')
} else {
  const key = keyMatch[1]
  const keyFile = path.join(ROOT, 'public', `${key}.txt`)
  if (!existsSync(keyFile)) {
    fail('indexnow key', `lib/indexnow.ts declares key ${key} but public/${key}.txt does not exist, so every submission will be rejected`)
  } else if (readFileSync(keyFile, 'utf8').trim() !== key) {
    fail('indexnow key', `public/${key}.txt does not contain the key it is named for`)
  }
}

// ---------------------------------------------------------------------------
// 5. Nothing is accidentally noindexed.
// ---------------------------------------------------------------------------
const noindexed = routes.filter((route) => {
  const file = pageFileFor(route)
  return existsSync(file) && /index:\s*false/.test(readFileSync(file, 'utf8'))
})
if (noindexed.length > 0) {
  fail('noindex', `${noindexed.length} indexable route(s) carry robots index:false: ${noindexed.join(', ')}`)
}

// ---------------------------------------------------------------------------
// 6. Every route has a lastmod date. Advisory: a missing one is valid, just a
// lost crawl-scheduling signal.
// ---------------------------------------------------------------------------
const datesSource = readFileSync(path.join(ROOT, 'lib', 'content-dates.ts'), 'utf8')
const undated = routes.filter((route) => !datesSource.includes(`'${route}':`))
if (undated.length > 0) {
  note(`${undated.length} route(s) have no entry in lib/content-dates.ts and will ship with no <lastmod>. Run \`npm run content:dates\`: ${undated.slice(0, 8).join(', ')}${undated.length > 8 ? ', ...' : ''}`)
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------
console.log(`\nChecked ${routes.length} routes against ${onDisk.length} pages on disk.\n`)

for (const line of notes) console.log(`  note  ${line}\n`)

if (failures.length === 0) {
  console.log('  All indexing checks passed.\n')
  console.log('  Reminder: none of this submits anything to Google. Google left')
  console.log('  IndexNow out and retired sitemap ping, so Search Console is the')
  console.log('  only submission path. See docs/search-console-setup.md.\n')
  process.exit(0)
}

console.error(`  ${failures.length} check(s) failed:\n`)
for (const { check, detail } of failures) {
  console.error(`  FAIL  ${check}`)
  console.error(`        ${detail}\n`)
}
process.exit(1)
