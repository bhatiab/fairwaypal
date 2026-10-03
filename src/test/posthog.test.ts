import { describe, it, expect } from 'vitest'
import { isPreviewHost } from '../../app/providers'

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
