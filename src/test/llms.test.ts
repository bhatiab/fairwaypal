import { describe, it, expect } from 'vitest'
import routes from '../../lib/routes.json'
import { buildLlmsTxt } from '../../lib/llms'
import { GET } from '../../app/llms.txt/route'

describe('/llms.txt', () => {
  const text = buildLlmsTxt()
  const links = [...text.matchAll(/\]\((https:\/\/www\.fairwaypal\.com[^)]*)\)/g)].map((m) => m[1])

  it('starts with an H1 and a summary blockquote', () => {
    expect(text.startsWith('# FairwayPal\n')).toBe(true)
    expect(text).toMatch(/\n> .+/)
  })

  it('only links to real, indexable routes', () => {
    const valid = new Set(routes.map((r) => (r === '/' ? 'https://www.fairwaypal.com' : `https://www.fairwaypal.com${r}`)))
    for (const link of links) expect(valid, link).toContain(link)
  })

  it('lists every destination guide and blog post, each once, with a summary', () => {
    for (const r of routes.filter((r) => r.startsWith('/destinations/') || r.startsWith('/blog/'))) {
      const url = `https://www.fairwaypal.com${r}`
      expect(links.filter((l) => l === url), r).toHaveLength(1)
      expect(text, r).toMatch(new RegExp(`\\(${url.replace(/[.]/g, '\\.')}\\): \\S`))
    }
  })

  it('is served as plain text', async () => {
    const res = GET()
    expect(res.headers.get('Content-Type')).toBe('text/plain; charset=utf-8')
    expect(await res.text()).toBe(text)
  })
})
