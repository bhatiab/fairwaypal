import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import path from 'node:path'
import sitemap from '../../app/sitemap'
import {
  ALL_URLS,
  INDEXNOW_KEY,
  INDEXNOW_KEY_LOCATION,
  INDEXNOW_HOST,
  buildPayload,
} from '../../lib/indexnow'
import { STATIC_ROUTES } from '../../lib/routes'

const ROOT = path.resolve(__dirname, '../..')

describe('indexnow', () => {
  // The original bug: lib/indexnow.ts kept its own hand-written list, which had
  // drifted to 15 of 66 URLs, so most of the site was never submitted.
  it('submits exactly the URLs that are in the sitemap', () => {
    const sitemapUrls = sitemap().map((entry) => entry.url)
    expect([...ALL_URLS].sort()).toEqual([...sitemapUrls].sort())
  })

  it('submits every route, not a subset', () => {
    expect(ALL_URLS.length).toBe(STATIC_ROUTES.length)
    expect(ALL_URLS.length).toBeGreaterThan(60)
  })

  it('sends every URL on the claimed host', () => {
    for (const url of ALL_URLS) {
      expect(new URL(url).host).toBe(INDEXNOW_HOST)
    }
  })

  // IndexNow verifies ownership by fetching keyLocation and comparing it to the
  // submitted key. If the file is missing or its contents differ, every
  // submission is rejected.
  it('has a key file in public/ whose contents match the key', () => {
    const keyFile = path.join(ROOT, 'public', `${INDEXNOW_KEY}.txt`)
    expect(existsSync(keyFile)).toBe(true)
    expect(readFileSync(keyFile, 'utf8').trim()).toBe(INDEXNOW_KEY)
  })

  it('points keyLocation at that file at the site root', () => {
    expect(INDEXNOW_KEY_LOCATION).toBe(`https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`)
  })

  // scripts/ping-indexnow.mjs runs without a TypeScript loader, so it repeats
  // these constants. They must not drift apart.
  it('keeps the ping script constants in sync with lib/indexnow.ts', () => {
    const script = readFileSync(path.join(ROOT, 'scripts', 'ping-indexnow.mjs'), 'utf8')
    expect(script).toContain(`const INDEXNOW_KEY = '${INDEXNOW_KEY}'`)
    expect(script).toContain(`const SITE_URL = 'https://${INDEXNOW_HOST}'`)
  })

  describe('buildPayload', () => {
    it('builds a valid submission', () => {
      const payload = buildPayload(['https://www.fairwaypal.com/blog'])
      expect(payload).toEqual({
        host: 'www.fairwaypal.com',
        key: INDEXNOW_KEY,
        keyLocation: INDEXNOW_KEY_LOCATION,
        urlList: ['https://www.fairwaypal.com/blog'],
      })
    })

    it('de-duplicates URLs', () => {
      const payload = buildPayload([
        'https://www.fairwaypal.com/blog',
        'https://www.fairwaypal.com/blog',
      ])
      expect(payload.urlList).toEqual(['https://www.fairwaypal.com/blog'])
    })

    it('rejects an empty submission', () => {
      expect(() => buildPayload([])).toThrow(/empty urlList/)
    })

    // A single off-host URL makes IndexNow reject the whole batch with 422.
    it('rejects URLs on another host', () => {
      expect(() => buildPayload(['https://example.com/blog'])).toThrow(/not on www.fairwaypal.com/)
    })

    it('rejects malformed URLs', () => {
      expect(() => buildPayload(['/blog'])).toThrow(/not on www.fairwaypal.com/)
    })
  })
})

describe('routes', () => {
  // Guards the shared list against the pages that actually exist, so adding a
  // page without registering it fails here rather than silently going
  // unsubmitted and unsitemapped.
  it('matches the pages on disk', () => {
    const appDir = path.join(ROOT, 'app')

    const found: string[] = []
    const walk = (dir: string, route: string) => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue
        // Skip API handlers and dynamic per-trip pages, which must not be indexed.
        if (entry.name === 'api' || entry.name.startsWith('[') || entry.name.startsWith('_')) continue
        const childDir = path.join(dir, entry.name)
        const childRoute = `${route}/${entry.name}`
        if (existsSync(path.join(childDir, 'page.tsx'))) found.push(childRoute)
        walk(childDir, childRoute)
      }
    }
    if (existsSync(path.join(appDir, 'page.tsx'))) found.push('/')
    walk(appDir, '')

    expect([...STATIC_ROUTES].sort()).toEqual(found.sort())
  })
})
