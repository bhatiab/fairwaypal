import { describe, it, expect } from 'vitest'
import { detectAiSource, isPreviewHost } from '../../app/providers'

describe('PostHog preview guard', () => {
  it('skips preview hosts', () => {
    expect(isPreviewHost('fairwaypal-git-branch-team.vercel.app')).toBe(true)
    expect(isPreviewHost('fairwaypal.example.workers.dev')).toBe(true)
  })
  it('runs on production', () => {
    expect(isPreviewHost('www.fairwaypal.com')).toBe(false)
    expect(isPreviewHost('fairwaypal.com')).toBe(false)
  })
})

describe('AI referrer detection', () => {
  it.each([
    ['https://chatgpt.com/', '', 'chatgpt'],
    ['https://www.perplexity.ai/search?q=x', '', 'perplexity'],
    ['https://copilot.microsoft.com/', '', 'copilot'],
    ['https://gemini.google.com/app', '', 'gemini'],
    ['https://claude.ai/chat/1', '', 'claude'],
    ['', '?utm_source=chatgpt.com', 'chatgpt'],
  ])('%s %s -> %s', (referrer, search, expected) => {
    expect(detectAiSource(referrer, search)).toBe(expected)
  })

  it('ignores normal referrers and bad input', () => {
    expect(detectAiSource('https://www.google.com/', '')).toBeNull()
    expect(detectAiSource('https://notchatgpt.com/', '')).toBeNull()
    expect(detectAiSource('', '?utm_source=newsletter')).toBeNull()
    expect(detectAiSource('not a url', '')).toBeNull()
  })
})
