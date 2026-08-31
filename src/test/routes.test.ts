import { describe, it, expect } from 'vitest'
import { readdirSync, existsSync } from 'node:fs'
import path from 'node:path'
import { STATIC_ROUTES } from '../../lib/routes'

/**
 * Guards lib/routes.json against drifting from the pages that actually exist
 * under app/. That list is the single source of truth for app/sitemap.ts,
 * lib/indexnow.ts and scripts/ping-indexnow.mjs, so a page missing from it is a
 * page no search engine is ever told about.
 *
 * This is not hypothetical: before #28 the IndexNow list had drifted to 15 of 66
 * URLs, so most of the site was never submitted. lib/routes.ts has claimed this
 * test existed since then; it did not until now.
 */

const APP = path.resolve(__dirname, '../../app')

/**
 * Routes that exist as pages but must stay out of the sitemap.
 *
 * /trip/* are per-trip dynamic pages containing a specific group's itinerary.
 * They are deliberately unindexed: they are private-by-obscurity share links,
 * not content. A dynamic segment cannot be enumerated at build time anyway.
 */
const EXCLUDED = [
  (route: string) => route === '/trip' || route.startsWith('/trip/'),
  (route: string) => route.includes('['),
]

function isExcluded(route: string): boolean {
  return EXCLUDED.some((matches) => matches(route))
}

/** Every directory under app/ that holds a page.tsx, as a route path. */
function discoverRoutes(dir = APP, prefix = ''): string[] {
  const found: string[] = []

  if (existsSync(path.join(dir, 'page.tsx'))) {
    found.push(prefix === '' ? '/' : prefix)
  }

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    // Route groups, private folders and the API surface carry no indexable pages.
    if (entry.name === 'api' || entry.name.startsWith('_') || entry.name.startsWith('(')) {
      continue
    }
    found.push(...discoverRoutes(path.join(dir, entry.name), `${prefix}/${entry.name}`))
  }

  return found
}

describe('routes.json', () => {
  const onDisk = discoverRoutes().filter((route) => !isExcluded(route))
  const declared = [...STATIC_ROUTES]

  it('finds pages on disk at all (guards against a broken walker)', () => {
    expect(onDisk.length).toBeGreaterThan(50)
  })

  it('lists every page that exists under app/', () => {
    const missing = onDisk.filter((route) => !declared.includes(route)).sort()
    expect(
      missing,
      `Page(s) exist under app/ but are absent from lib/routes.json, so they are in no sitemap and never submitted to a search engine: ${missing.join(', ')}`,
    ).toEqual([])
  })

  it('does not list a route with no page behind it', () => {
    const orphaned = declared.filter((route) => !onDisk.includes(route)).sort()
    expect(
      orphaned,
      `lib/routes.json lists route(s) with no page.tsx under app/, which would publish 404s in the sitemap: ${orphaned.join(', ')}`,
    ).toEqual([])
  })

  it('contains no duplicates', () => {
    expect(declared.length).toBe(new Set(declared).size)
  })

  it('excludes per-trip dynamic pages', () => {
    expect(declared.filter(isExcluded)).toEqual([])
  })
})
