import { describe, it, expect } from 'vitest'
import robots from '../../app/robots'

describe('robots', () => {
  const result = robots()
  const rules = Array.isArray(result.rules) ? result.rules : [result.rules]

  it.each([
    'Googlebot', 'Bingbot', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot',
    'Perplexity-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'Google-Extended', 'Applebot',
    'Applebot-Extended', '*',
  ])('explicitly allows %s with no disallow', (agent) => {
    const rule = rules.find((r) => r.userAgent === agent)
    expect(rule?.allow).toBe('/')
    expect(rule?.disallow).toBeUndefined()
  })

  it('keeps the sitemap line', () => {
    expect(result.sitemap).toBe('https://www.fairwaypal.com/sitemap.xml')
  })
})
