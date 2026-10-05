'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

// Hardcoded on purpose. NEXT_PUBLIC_* env vars are inlined at build time, and a
// build without them silently shipped with analytics off (FundBizPro, Sep 2026).
// PostHog project keys (phc_*) are public by design — they ship in client JS
// either way — so there is nothing to protect by keeping this in env.
const POSTHOG_KEY = 'phc_wQWc3D2BvsaaS9KqjJZIm9TgvYE6hS9FBcPM8VDfPlY'
const POSTHOG_HOST = 'https://us.i.posthog.com'

// Preview deploys (Vercel *.vercel.app, Cloudflare *.workers.dev) must not
// pollute production analytics with QA traffic.
export function isPreviewHost(hostname: string): boolean {
  return hostname.endsWith('.vercel.app') || hostname.endsWith('.workers.dev')
}

// AI assistants that send visitors here. Matched on the referrer host, or on
// utm_source because ChatGPT often strips the referrer but appends
// ?utm_source=chatgpt.com to the links it cites.
const AI_SOURCES: Record<string, string> = {
  'chatgpt.com': 'chatgpt',
  'chat.openai.com': 'chatgpt',
  'perplexity.ai': 'perplexity',
  'copilot.microsoft.com': 'copilot',
  'gemini.google.com': 'gemini',
  'claude.ai': 'claude',
}

function matchAiSource(value: string): string | null {
  const host = value.toLowerCase().replace(/^www\./, '')
  for (const [domain, source] of Object.entries(AI_SOURCES)) {
    if (host === domain || host.endsWith(`.${domain}`)) return source
  }
  return null
}

/** Which AI assistant (if any) sent this visit, from the referrer or utm_source. */
export function detectAiSource(referrer: string, search: string): string | null {
  const utm = new URLSearchParams(search).get('utm_source')
  if (utm) {
    const fromUtm = matchAiSource(utm)
    if (fromUtm) return fromUtm
  }
  try {
    return referrer ? matchAiSource(new URL(referrer).hostname) : null
  } catch {
    return null
  }
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (isPreviewHost(window.location.hostname)) return
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      person_profiles: 'identified_only',
      // Capture next/link client-side navigations, not just full page loads.
      capture_pageview: 'history_change',
      capture_pageleave: true,
    })
    // Tag AI-assistant traffic so it can be broken out as its own channel.
    // register_once keeps the first source for the whole session's events.
    const aiSource = detectAiSource(document.referrer, window.location.search)
    if (aiSource) posthog.register_once({ channel: 'ai', ai_source: aiSource })
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
