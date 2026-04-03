/**
 * GrandPrixPal — Race Scaffold Script
 *
 * Usage:
 *   npx tsx scripts/scaffold-race.ts <slug> "<Race Name>"
 *   npx tsx scripts/scaffold-race.ts <slug> "<Race Name>" --race-week
 *
 * Examples:
 *   npx tsx scripts/scaffold-race.ts spa-2026 "Belgian Grand Prix"
 *   npx tsx scripts/scaffold-race.ts spa-2026 "Belgian Grand Prix" --race-week
 *
 * With --race-week:
 *   Creates app/races/<slug>/race-week/page.tsx and _client.tsx
 *   Does NOT add to guideNav.ts
 *   Prints a reminder to add slug to RACES_WITH_RACE_WEEK in RaceWeekBanner.tsx
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')

// URL slugs contain the year for SEO; source directories are evergreen.
const SLUG_TO_FOLDER: Record<string, string> = {
  'miami-2026': 'miami',
  'canada-2026': 'canada',
  'monaco-2026': 'monaco',
  'silverstone-2026': 'silverstone',
  'las-vegas-2026': 'las-vegas',
  'usa-austin-2026': 'usa-austin',
  'suzuka-2026': 'suzuka',
  'chinese-2026': 'chinese',
  'melbourne-2026': 'melbourne',
  'bahrain-2026': 'bahrain',
  'saudi-arabia-2026': 'saudi-arabia',
}

function slugToFolder(slug: string): string {
  return SLUG_TO_FOLDER[slug] ?? slug
}

const args = process.argv.slice(2)
const slug = args[0]
const raceName = args[1]
const raceWeekFlag = args.includes('--race-week')

if (!slug || !raceName) {
  console.error('Usage: npx tsx scripts/scaffold-race.ts <slug> "<Race Name>" [--race-week]')
  process.exit(1)
}

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function writeIfNotExists(filePath: string, content: string) {
  if (fs.existsSync(filePath)) {
    console.log(`  SKIP  ${filePath} (already exists)`)
    return
  }
  fs.writeFileSync(filePath, content, 'utf8')
  console.log(`  CREATE ${filePath}`)
}

if (raceWeekFlag) {
  // ── race-week page only ─────────────────────────────────────────────────────
  const raceWeekDir = path.join(ROOT, 'app', 'races', slugToFolder(slug), 'race-week')
  ensureDir(raceWeekDir)

  const pageTsx = `import type { Metadata } from 'next'
import ${toPascalCase(slug)}RaceWeekClient from './_client'

export const metadata: Metadata = {
  title: '${raceName} This Weekend: Last-Minute Checklist | GrandPrixPal',
  description: 'Going to ${raceName} this weekend? What to know before you leave — transport, bag policy and three things most first-timers get wrong.',
  alternates: {
    canonical: 'https://www.grandprixpal.com/races/${slug}/race-week',
  },
}

export default function Page() {
  return <${toPascalCase(slug)}RaceWeekClient />
}
`

  const clientTsx = `'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

// TODO: Replace all placeholder copy with real race-specific content.
// Pull from getting-there and bag-policy _client.tsx files once built.

export default function ${toPascalCase(slug)}RaceWeekClient() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hook banner */}
      <div className="bg-primary text-white w-full px-5 py-4 text-center">
        <p className="font-semibold text-base">🏎️ ${raceName} — race this weekend</p>
        <p className="text-sm text-white/80 mt-0.5">Read this before you leave.</p>
      </div>

      <div className="max-w-3xl mx-auto px-5 pt-12 pb-20 space-y-12">

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
          ${raceName}: Last-Minute Checklist
          <span className="block text-base font-normal text-muted-foreground mt-2">
            {/* TODO: subtitle */}
          </span>
        </h1>

        {/* Section 1 — Transport */}
        <section>
          <h2 className="text-xl font-semibold mb-4">The transport situation (read this first)</h2>
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-sm">
            <p className="font-medium text-amber-400 mb-1">TODO: transport details</p>
            <p className="text-muted-foreground">
              Pull from getting-there/_client.tsx once built.
            </p>
          </div>
          <Link
            href="/races/${slug}/getting-there"
            className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
          >
            Full transport guide →
          </Link>
        </section>

        {/* Section 2 — Packing */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Pack this tonight</h2>
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-sm">
            <p className="font-medium text-amber-400 mb-1">TODO: packing details</p>
            <p className="text-muted-foreground">
              Pull from packing-guide/_client.tsx once built.
            </p>
          </div>
          <Link
            href="/races/${slug}"
            className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
          >
            Full packing guide →
          </Link>
        </section>

        {/* Section 3 — Bag check */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Check your bag tonight</h2>
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-sm">
            <p className="font-medium text-amber-400 mb-1">TODO: bag policy summary</p>
            <p className="text-muted-foreground">
              Pull from bag-policy/_client.tsx once built.
            </p>
          </div>
          <Link
            href="/races/${slug}/bag-policy"
            className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
          >
            Bag policy details →
          </Link>
        </section>

        {/* Section 4 — Download before you leave */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Download before you leave</h2>
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-sm">
            <p className="font-medium text-amber-400 mb-1">TODO: app/download checklist</p>
            <p className="text-muted-foreground">
              Add offline maps, ticket screenshots, and any race-specific apps.
            </p>
          </div>
        </section>

        <p className="text-xs text-muted-foreground/50 pt-4">
          Have a good one.
        </p>

      </div>

      <Footer />
    </div>
  )
}
`

  writeIfNotExists(path.join(raceWeekDir, 'page.tsx'), pageTsx)
  writeIfNotExists(path.join(raceWeekDir, '_client.tsx'), clientTsx)

  console.log('')
  console.log('✅ race-week page created.')
  console.log('')
  console.log(`⚠️  Remember to add '${slug}' to RACES_WITH_RACE_WEEK in`)
  console.log('   src/components/RaceWeekBanner.tsx')
  console.log('')
} else {
  console.log(`No flags specified. Use --race-week to scaffold a race-week page for ${slug}.`)
  console.log('Usage: npx tsx scripts/scaffold-race.ts <slug> "<Race Name>" --race-week')
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function toPascalCase(slug: string): string {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}
