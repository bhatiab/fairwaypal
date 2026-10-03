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
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
