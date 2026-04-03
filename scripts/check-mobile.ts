/**
 * GrandPrixPal — Mobile Check Script (Playwright)
 *
 * STATUS: Scaffolded. Not yet active.
 * Activate when site is stable by:
 *   1. npm install --save-dev @playwright/test playwright
 *   2. npx playwright install chromium
 *   3. Remove the early-exit block below marked "INACTIVE"
 *   4. Set BASE_URL to your local dev server or production URL
 *
 * Usage (once active):
 *   npm run check-mobile monaco-2026
 *   npm run check-mobile --all
 *
 * Checks (all at 390px × 844px — iPhone 14):
 *   1. No horizontal scroll
 *   2. No text below 16px (body) or 13px (supporting)
 *   3. All tap targets >= 44px height
 *   4. Sub-page nav visible and sticky after scroll
 *   5. Tier 1 cards render as 2-column grid
 *   6. No images overflowing viewport width
 */

import { fileURLToPath } from 'url'
import * as path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ─── INACTIVE BLOCK — remove this when activating ─────────────────────────
console.log(`
  check-mobile.ts is scaffolded but not yet active.

  To activate:
    1. npm install --save-dev @playwright/test playwright
    2. npx playwright install chromium
    3. Edit scripts/check-mobile.ts — remove the INACTIVE block
    4. Set BASE_URL to your dev server (e.g. http://localhost:3000)
    5. Run: npm run check-mobile monaco-2026

  Manual checks in the meantime: see skills/mobile.md
`)
process.exit(0)
// ─── END INACTIVE BLOCK ────────────────────────────────────────────────────

// ─── Config (edit these when activating) ──────────────────────────────────

const BASE_URL = 'http://localhost:3000' // change to prod URL for live checks
const MOBILE_VIEWPORT = { width: 390, height: 844 }
const MIN_BODY_FONT = 16
const MIN_SUPPORT_FONT = 13
const MIN_TAP_TARGET = 44

const SUB_PAGES = [
  '',
  '/first-timer-guide',
  '/getting-there',
  '/packing-guide',
  '/bag-policy',
  '/what-to-wear',
  '/mistakes',
]

// ─── Types ─────────────────────────────────────────────────────────────────

interface CheckResult {
  pass: boolean
  check: string
  detail?: string
}

interface PlaywrightPage {
  goto(url: string, options?: { waitUntil?: string }): Promise<void>
  evaluate<T>(fn: () => T | Promise<T>): Promise<T>
  evaluate<T, A>(fn: (arg: A) => T | Promise<T>, arg: A): Promise<T>
  waitForTimeout(ms: number): Promise<void>
}

// ─── Checks ────────────────────────────────────────────────────────────────

async function checkPage(
  page: PlaywrightPage,
  url: string
): Promise<CheckResult[]> {
  const results: CheckResult[] = []

  await page.goto(url, { waitUntil: 'networkidle' })

  // 1. No horizontal scroll
  const hasHorizontalScroll = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth
  })
  results.push({
    pass: !hasHorizontalScroll,
    check: 'No horizontal scroll',
    detail: hasHorizontalScroll
      ? `scrollWidth (${await page.evaluate(() => document.documentElement.scrollWidth)}px) exceeds viewport (390px)`
      : undefined,
  })

  // 2. No text below minimum font sizes
  const smallText = await page.evaluate(
    ({ minBody, minSupport }: { minBody: number; minSupport: number }) => {
      const issues: string[] = []
      const elements = document.querySelectorAll('p, span, a, li, td, th, label')
      elements.forEach(el => {
        const style = window.getComputedStyle(el)
        const size = parseFloat(style.fontSize)
        const text = el.textContent?.trim().slice(0, 40)
        if (!text) return
        // Skip elements that are hidden
        if (style.display === 'none' || style.visibility === 'hidden') return
        if (size < minSupport) {
          issues.push(`${size}px: "${text}"`)
        }
      })
      return issues.slice(0, 5) // cap at 5 examples
    },
    { minBody: MIN_BODY_FONT, minSupport: MIN_SUPPORT_FONT }
  )
  results.push({
    pass: smallText.length === 0,
    check: 'Font sizes above minimum',
    detail: smallText.length > 0 ? `Small text found: ${smallText.join(', ')}` : undefined,
  })

  // 3. Tap targets >= 44px
  const smallTargets = await page.evaluate(
    (min: number) => {
      const issues: string[] = []
      const interactive = document.querySelectorAll('a, button, [role="button"], input, select')
      interactive.forEach(el => {
        const rect = el.getBoundingClientRect()
        const text = el.textContent?.trim().slice(0, 30) || el.getAttribute('aria-label') || ''
        if (rect.height > 0 && rect.height < min) {
          issues.push(`${Math.round(rect.height)}px: "${text}"`)
        }
      })
      return issues.slice(0, 5)
    },
    MIN_TAP_TARGET
  )
  results.push({
    pass: smallTargets.length === 0,
    check: 'Tap targets >= 44px',
    detail: smallTargets.length > 0 ? `Small targets: ${smallTargets.join(', ')}` : undefined,
  })

  // 4. Sub-page nav visible after scroll (only on sub-pages)
  const isSubPage = !url.endsWith(url.split('/races/')[1]?.split('/')[1] ?? '')
  if (url.includes('/races/') && url.split('/').length > 5) {
    await page.evaluate(() => window.scrollBy(0, 500))
    await page.waitForTimeout(300)

    const navVisible = await page.evaluate(() => {
      const nav = document.querySelector('[data-subnav], nav[class*="subnav"], nav[class*="race"]')
      if (!nav) return null
      const rect = nav.getBoundingClientRect()
      return rect.top >= 0 && rect.top < 100 // within top 100px = sticky
    })

    if (navVisible === null) {
      results.push({
        pass: false,
        check: 'Sub-page nav sticky',
        detail: 'Could not find subnav element — add data-subnav attribute to RaceSubnav',
      })
    } else {
      results.push({
        pass: navVisible,
        check: 'Sub-page nav sticky after scroll',
        detail: !navVisible ? 'Nav not visible in top 100px after scrolling 500px' : undefined,
      })
    }
  }

  // 5. Tier 1 cards (hub page only)
  if (!url.includes('/races/') || url.split('/').length === 5) {
    const cardLayout = await page.evaluate(() => {
      const cards = document.querySelectorAll('[data-tier1-card]')
      if (cards.length === 0) return null
      const firstCard = cards[0].getBoundingClientRect()
      const secondCard = cards[1]?.getBoundingClientRect()
      if (!secondCard) return null
      // Cards should be side by side (same top, different left)
      return Math.abs(firstCard.top - secondCard.top) < 10
    })

    if (cardLayout === null) {
      results.push({
        pass: true,
        check: 'Tier 1 cards layout',
        detail: 'No data-tier1-card elements found — add attribute to verify layout',
      })
    } else {
      results.push({
        pass: cardLayout,
        check: 'Tier 1 cards in 2-column grid',
        detail: !cardLayout ? 'Cards appear to be stacked vertically (1 column) — expected 2 columns' : undefined,
      })
    }
  }

  // 6. Images don't overflow viewport
  const overflowingImages = await page.evaluate(() => {
    const issues: string[] = []
    document.querySelectorAll('img').forEach(img => {
      const rect = img.getBoundingClientRect()
      if (rect.width > window.innerWidth) {
        issues.push(`${Math.round(rect.width)}px wide: ${img.src.split('/').pop()}`)
      }
    })
    return issues.slice(0, 5)
  })
  results.push({
    pass: overflowingImages.length === 0,
    check: 'Images within viewport',
    detail: overflowingImages.length > 0
      ? `Overflowing images: ${overflowingImages.join(', ')}`
      : undefined,
  })

  return results
}

// ─── Runner ────────────────────────────────────────────────────────────────

async function checkRace(slug: string) {
  // Dynamic import — only runs when Playwright is installed
  const { chromium } = await import('@playwright/test')

  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: MOBILE_VIEWPORT,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15',
  })
  const page = await context.newPage()

  console.log(`\n${'─'.repeat(60)}`)
  console.log(`  Mobile check: ${slug} (${MOBILE_VIEWPORT.width}×${MOBILE_VIEWPORT.height})`)
  console.log(`${'─'.repeat(60)}`)

  let totalPass = 0
  let totalFail = 0

  for (const subPage of SUB_PAGES) {
    const url = `${BASE_URL}/races/${slug}${subPage}`
    const label = subPage || '(hub)'

    console.log(`\n  ${label}`)
    try {
      const results = await checkPage(page, url)
      for (const r of results) {
        if (r.pass) {
          console.log(`  ✅ ${r.check}`)
          totalPass++
        } else {
          console.log(`  ❌ ${r.check}${r.detail ? ` — ${r.detail}` : ''}`)
          totalFail++
        }
      }
    } catch (e: unknown) {
      console.log(`  ⚠️  Could not load ${url} — ${(e as Error).message}`)
    }
  }

  await browser.close()

  console.log(`\n${'─'.repeat(60)}`)
  console.log(`  Result: ${totalPass} passed · ${totalFail} failed`)
  console.log(`${'─'.repeat(60)}\n`)

  return { totalPass, totalFail }
}

async function checkAll() {
  const { chromium } = await import('@playwright/test')
  const fs = await import('fs')
  const racesDir = path.join(__dirname, '..', 'app', 'races')
  const slugs = fs.readdirSync(racesDir)
    .filter(f => fs.statSync(path.join(racesDir, f)).isDirectory())

  const grandTotal = { pass: 0, fail: 0 }
  for (const slug of slugs) {
    const { totalPass, totalFail } = await checkRace(slug)
    grandTotal.pass += totalPass
    grandTotal.fail += totalFail
  }

  console.log(`\n${'═'.repeat(60)}`)
  console.log(`  TOTAL: ${grandTotal.pass} passed · ${grandTotal.fail} failed`)
  console.log(`${'═'.repeat(60)}\n`)

  if (grandTotal.fail > 0) process.exit(1)
}

// ─── Entry point ───────────────────────────────────────────────────────────

const args = process.argv.slice(2)
if (args.includes('--all')) {
  checkAll()
} else if (args[0]) {
  checkRace(args[0])
} else {
  console.log('Usage:')
  console.log('  npx tsx scripts/check-mobile.ts monaco-2026')
  console.log('  npx tsx scripts/check-mobile.ts --all')
}
