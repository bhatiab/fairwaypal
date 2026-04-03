'use client'
import { useState, useRef, useEffect, useMemo } from 'react'
import { raceGuides } from '@/data/races2026'

interface RaceWeekEntry {
  slug: string
  flag: string
  bannerText: string
  ctaText: string
  ctaLink: string
}

/**
 * Add one entry here each time a race-week page is built.
 * Same 7-day window logic — renders only when race is within 7 days.
 */
const RACES_WITH_RACE_WEEK: RaceWeekEntry[] = [
  {
    slug: 'suzuka-2026',
    flag: '🇯🇵',
    bannerText: 'Suzuka this weekend? Most people wait 90 mins for a train.',
    ctaText: "Here's how to avoid it →",
    ctaLink: '/races/suzuka-2026/race-week',
  },
]

const SECONDARY_TEXT = 'Browse all tickets & experiences →'
const SECONDARY_HREF = '/experiences'

export default function RaceWeekBanner() {
  const [isDismissed, setIsDismissed] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const activeEntry = useMemo(() => {
    return RACES_WITH_RACE_WEEK.find((entry) => {
      const race = raceGuides.find((r) => r.slug === entry.slug)
      if (!race) return false
      const raceDay = new Date(race.startDate)
      raceDay.setHours(0, 0, 0, 0)
      const daysUntil = Math.floor(
        (raceDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      )
      return daysUntil >= 0 && daysUntil <= 7
    })
  }, [today])

  const isActive = !isDismissed && !!activeEntry

  /** Keep navbar offset in sync with actual banner height */
  useEffect(() => {
    const el = bannerRef.current
    if (!isActive || !el) {
      document.documentElement.style.removeProperty('--gpp-banner-h')
      return
    }
    const observer = new ResizeObserver(([entry]) => {
      document.documentElement.style.setProperty(
        '--gpp-banner-h',
        `${entry.contentRect.height}px`
      )
    })
    observer.observe(el)
    return () => {
      observer.disconnect()
      document.documentElement.style.removeProperty('--gpp-banner-h')
    }
  }, [isActive])

  if (!isActive) return null

  const entry = activeEntry!
  // Strip trailing → so we can render it in the animated span
  const ctaBody = entry.ctaText.replace(/\s*→$/, '')

  return (
    <>
      <style>{`
        @keyframes livePulse {
          0%, 100% { opacity: 0.4; transform: scale(1);   }
          50%       { opacity: 1;   transform: scale(1.3); }
        }
        .gpp-dot    { animation: livePulse 1.8s ease-in-out infinite; }
        .gpp-arrow  { display: inline-block; transition: transform 0.15s ease; }
        .gpp-cta:hover .gpp-arrow { transform: translateX(3px); }
        .gpp-cta {
          text-decoration: underline;
          text-decoration-color: rgba(255,255,255,0.65);
          text-underline-offset: 2px;
          transition: text-decoration-color 0.15s ease;
        }
        .gpp-cta:hover { text-decoration-color: white; }
        .gpp-sec:hover { text-decoration: underline; }
        @keyframes gppShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .gpp-shimmer {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.06) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: gppShimmer 4s linear infinite;
        }
      `}</style>

      <div
        ref={bannerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10001,
          background: 'linear-gradient(90deg, #e00000 0%, #ff2020 45%, #cc0000 100%)',
          boxShadow: '0 2px 12px rgba(220,0,0,0.4)',
        }}
      >
        <div className="gpp-shimmer" />

        {/* ── Desktop (≥ sm): single row, 48px ── */}
        <div className="hidden sm:flex items-center h-[48px] max-w-6xl mx-auto px-5 gap-3">
          {/* Left: dot + text block */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span
              className="gpp-dot shrink-0 rounded-full bg-white"
              style={{ width: 6, height: 6 }}
              aria-hidden
            />
            <div className="min-w-0">
              {/* Main line + inline CTA */}
              <p className="leading-tight whitespace-nowrap overflow-hidden text-ellipsis"
                 style={{ fontSize: 13, color: 'rgba(255,255,255,0.92)', fontWeight: 400 }}>
                {entry.flag} {entry.bannerText}{' '}
                <a href={entry.ctaLink} className="gpp-cta font-semibold">
                  {ctaBody} <span className="gpp-arrow">→</span>
                </a>
              </p>
              {/* Secondary link */}
              <p className="leading-tight mt-0.5" style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>
                <a href={SECONDARY_HREF} className="gpp-sec">{SECONDARY_TEXT}</a>
              </p>
            </div>
          </div>

          {/* Dismiss */}
          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss banner"
            className="shrink-0 flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded hover:bg-white/20 transition-colors"
          >
            <span style={{ fontSize: 16, color: 'white' }} aria-hidden>✕</span>
          </button>
        </div>

        {/* ── Mobile (< sm): stacked ── */}
        <div className="flex flex-col sm:hidden px-4 py-2">
          {/* Row 1: dot + race text + dismiss */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span
                className="gpp-dot shrink-0 rounded-full bg-white"
                style={{ width: 6, height: 6 }}
                aria-hidden
              />
              <span className="leading-snug" style={{ fontSize: 12, color: 'rgba(255,255,255,0.92)' }}>
                {entry.flag} {entry.bannerText}
              </span>
            </div>
            <button
              onClick={() => setIsDismissed(true)}
              aria-label="Dismiss banner"
              className="shrink-0 flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded hover:bg-white/20 transition-colors"
            >
              <span style={{ fontSize: 16, color: 'white' }} aria-hidden>✕</span>
            </button>
          </div>

          {/* Row 2: CTA — full width, 44px tap target */}
          <a
            href={entry.ctaLink}
            className="gpp-cta w-full flex items-center gap-1 text-sm font-semibold min-h-[44px] py-2"
            style={{ color: 'white' }}
          >
            {ctaBody} <span className="gpp-arrow">→</span>
          </a>

          {/* Row 3: secondary link */}
          <a
            href={SECONDARY_HREF}
            className="gpp-sec pb-2"
            style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}
          >
            {SECONDARY_TEXT}
          </a>
        </div>
      </div>
    </>
  )
}
