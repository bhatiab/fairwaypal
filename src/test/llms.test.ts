import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import routes from '../../lib/routes.json'

describe('public/llms.txt', () => {
  const text = readFileSync(path.join(__dirname, '../../public/llms.txt'), 'utf8')
  const links = [...text.matchAll(/\]\((https:\/\/www\.fairwaypal\.com[^)]*)\)/g)].map((m) => m[1])

  it('starts with an H1 and a summary blockquote', () => {
    expect(text.startsWith('# FairwayPal\n')).toBe(true)
    expect(text).toMatch(/\n> .+/)
  })

  it('only links to real, indexable routes', () => {
    const valid = new Set(routes.map((r) => (r === '/' ? 'https://www.fairwaypal.com' : `https://www.fairwaypal.com${r}`)))
    expect(links.length).toBeGreaterThan(20)
    for (const link of links) expect(valid, link).toContain(link)
  })

  it('lists every destination guide and monthly guide', () => {
    for (const r of routes.filter((r) => r.startsWith('/destinations/') || r.startsWith('/blog/best-golf-destinations-'))) {
      expect(links).toContain(`https://www.fairwaypal.com${r}`)
    }
  })
})
