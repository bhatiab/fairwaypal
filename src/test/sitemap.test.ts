import { describe, it, expect } from 'vitest'
import sitemap from '../../app/sitemap'

describe('sitemap', () => {
  const entries = sitemap()

  it('includes all required pages', () => {
    const urls = entries.map((e) => e.url)
    expect(urls).toContain('https://www.fairwaypal.com')
    expect(urls.some((u) => u.includes('/plan'))).toBe(true)
    expect(urls.some((u) => u.includes('/about'))).toBe(true)
    expect(urls.some((u) => u.includes('/status'))).toBe(true)
    expect(urls.some((u) => u.includes('/destinations/scottsdale'))).toBe(true)
    expect(urls.some((u) => u.includes('/destinations/myrtle-beach'))).toBe(true)
    expect(urls.some((u) => u.includes('/destinations/bandon-dunes'))).toBe(true)
    expect(urls.some((u) => u.includes('/destinations/pinehurst'))).toBe(true)
  })

  it('homepage has highest priority', () => {
    const home = entries.find((e) => e.url === 'https://www.fairwaypal.com')
    expect(home?.priority).toBe(1)
  })

  it('plan page has high priority', () => {
    const plan = entries.find((e) => e.url?.includes('/plan'))
    expect(plan?.priority).toBe(0.9)
  })

  it('includes the destinations index', () => {
    const urls = entries.map((e) => e.url)
    expect(urls).toContain('https://www.fairwaypal.com/destinations')
  })

  it('all entries have lastModified', () => {
    for (const entry of entries) {
      expect(entry.lastModified).toBeDefined()
    }
  })

  // Regression guards for the "Discovered - currently not indexed" bug: the
  // sitemap used to stamp every URL with a module-scope `new Date()`, so all 65
  // lastmods were identical and the whole site re-dated itself on every deploy.
  // Google ignores lastmod entirely when a sitemap behaves that way.
  it('does not give every URL the same lastModified', () => {
    const stamps = new Set(entries.map((e) => String(e.lastModified)))
    expect(stamps.size).toBeGreaterThan(1)
  })

  it('does not derive lastModified from build time', () => {
    const today = new Date().toISOString().slice(0, 10)
    const stampedToday = entries.filter((e) => String(e.lastModified).startsWith(today))
    // A page genuinely edited today is fine; the whole sitemap sharing today is the bug.
    expect(stampedToday.length).toBeLessThan(entries.length)
  })

  it('uses stable date-only stamps, not timestamps', () => {
    for (const entry of entries) {
      expect(String(entry.lastModified)).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })
})
