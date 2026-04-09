import { describe, it, expect } from 'vitest'
import { toHotelSlug, fromHotelSlug } from '@/lib/slugify'

describe('toHotelSlug', () => {
  it('converts a name to a URL-safe slug', () => {
    expect(toHotelSlug('Desert Links Weekend')).toBe('desert-links-weekend')
    expect(toHotelSlug("Jake's Last Swing")).toBe('jakes-last-swing')
  })

  it('handles special characters', () => {
    const slug = toHotelSlug('Test & More — Special!')
    expect(slug).not.toContain('&')
    expect(slug).not.toContain('!')
    expect(slug).not.toContain('—')
  })
})

describe('fromHotelSlug', () => {
  it('converts a slug back to readable text', () => {
    const result = fromHotelSlug('desert-links-weekend')
    expect(result.toLowerCase()).toContain('desert')
    expect(result.toLowerCase()).toContain('links')
  })
})
