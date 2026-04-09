import { describe, it, expect } from 'vitest'
import sitemap from '../../app/sitemap'

describe('sitemap', () => {
  const entries = sitemap()

  it('includes all required pages', () => {
    const urls = entries.map((e) => e.url)
    expect(urls).toContain('https://fairwaypal.com')
    expect(urls.some((u) => u.includes('/plan'))).toBe(true)
    expect(urls.some((u) => u.includes('/about'))).toBe(true)
    expect(urls.some((u) => u.includes('/status'))).toBe(true)
    expect(urls.some((u) => u.includes('/destinations/scottsdale'))).toBe(true)
    expect(urls.some((u) => u.includes('/destinations/myrtle-beach'))).toBe(true)
    expect(urls.some((u) => u.includes('/destinations/bandon-dunes'))).toBe(true)
    expect(urls.some((u) => u.includes('/destinations/pinehurst'))).toBe(true)
  })

  it('homepage has highest priority', () => {
    const home = entries.find((e) => e.url === 'https://fairwaypal.com')
    expect(home?.priority).toBe(1)
  })

  it('plan page has high priority', () => {
    const plan = entries.find((e) => e.url?.includes('/plan'))
    expect(plan?.priority).toBe(0.9)
  })

  it('all entries have lastModified', () => {
    for (const entry of entries) {
      expect(entry.lastModified).toBeDefined()
    }
  })
})
