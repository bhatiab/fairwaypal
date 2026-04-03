/**
 * GrandPrixPal — Race Verification Script
 *
 * Usage:
 *   npx ts-node scripts/verify-race.ts monaco-2026
 *   npx ts-node scripts/verify-race.ts --all
 *
 * Checks:
 *   1. guideNav.ts matches actual files on disk (no phantom or missing entries)
 *   2. Metadata completeness on every sub-page (title, description, canonical)
 *   3. Canonical URLs are absolute (https://...) not relative
 *   4. mistakes.ts has all 5 entries for the race
 *   5. linkPaths in mistakes.ts resolve to real pages on disk
 *   6. TypeScript compiles without errors (tsc --noEmit)
 */

import * as fs from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ─── Config ────────────────────────────────────────────────────────────────

const ROOT = path.resolve(__dirname, '..')
const RACES_DIR = path.join(ROOT, 'app', 'races')
const GUIDE_NAV = path.join(ROOT, 'src', 'lib', 'guideNav.ts')
const MISTAKES = path.join(ROOT, 'src', 'lib', 'mistakes.ts')
const BASE_URL = 'https://gpmotopal.com'

// URL slugs contain the year for SEO, but source directories are evergreen.
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

function getRaceDir(slug: string): string {
  return path.join(RACES_DIR, slugToFolder(slug))
}

const REQUIRED_MISTAKE_IDS = [
  'transport-exit',
  'bag-policy',
  'weather',
  'friday-practice',
  'ticket-sightlines',
]

const FRAMEWORK_PAGES = ['experiences', 'planner', 'route']

const REQUIRED_MISTAKE_FIELDS = ['detail', 'level', 'linkLabel', 'linkPath']
const VALID_LEVELS = ['critical', 'moderate', 'minor']

// ─── Helpers ───────────────────────────────────────────────────────────────

type Result = { pass: boolean; message: string }

function pass(message: string): Result {
  return { pass: true, message: `  ✅ ${message}` }
}

function fail(message: string): Result {
  return { pass: false, message: `  ❌ ${message}` }
}

function warn(message: string): Result {
  return { pass: true, message: `  ⚠️  ${message}` }
}

function fileExists(filePath: string): boolean {
  return fs.existsSync(filePath)
}

function readFile(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8')
}

function subPageExists(slug: string, subPage: string): boolean {
  // Check for a static per-race page first
  const pagePath = path.join(getRaceDir(slug), subPage, 'page.tsx')
  if (fileExists(pagePath)) return true
  // Fall back to the dynamic [slug] route (e.g. app/races/[slug]/costs/page.tsx)
  const dynamicPath = path.join(RACES_DIR, '[slug]', subPage, 'page.tsx')
  return fileExists(dynamicPath)
}

function getAllRaceSlugs(): string[] {
  if (!fileExists(RACES_DIR)) return []
  // Build a reverse map: folder name → slug
  const folderToSlug: Record<string, string> = {}
  for (const [slug, folder] of Object.entries(SLUG_TO_FOLDER)) {
    folderToSlug[folder] = slug
  }
  return fs
    .readdirSync(RACES_DIR)
    .filter(f => fs.statSync(path.join(RACES_DIR, f)).isDirectory())
    .filter(f => f !== '[slug]')
    // Return the URL slug (with year) for mapped folders, or folder name as-is
    .map(f => folderToSlug[f] ?? f)
}

// ─── Check 1: guideNav.ts vs disk ──────────────────────────────────────────

function checkGuideNav(slug: string): Result[] {
  const results: Result[] = []

  if (!fileExists(GUIDE_NAV)) {
    return [fail('src/lib/guideNav.ts not found')]
  }

  const navContent = readFile(GUIDE_NAV)

  // Extract sub-pages listed for this race in guideNav.ts
  // Looks for a block like: 'monaco-2026': ['first-timer-guide', ...]
  const raceBlockMatch = navContent.match(
    new RegExp(`['"]${slug}['"]\\s*:\\s*\\[([^\\]]+)\\]`, 's')
  )

  if (!raceBlockMatch) {
    return [fail(`${slug} not found in guideNav.ts`)]
  }

  const listedSubPages = [...raceBlockMatch[1].matchAll(/slug:\s*['"]([^'"]+)['"]/g)]
    .map(m => m[1])

  if (listedSubPages.length === 0) {
    results.push(warn(`${slug} is in guideNav.ts but has no sub-pages listed`))
    return results
  }

  // Check every listed sub-page actually exists on disk
  for (const subPage of listedSubPages) {
    if (subPageExists(slug, subPage)) {
      results.push(pass(`guideNav: ${subPage} listed and exists on disk`))
    } else {
      results.push(
        fail(
          `guideNav: ${subPage} listed in guideNav.ts but page.tsx not found on disk`
        )
      )
    }
  }

  // Check every sub-page on disk is listed in guideNav
  const raceDir = getRaceDir(slug)
  if (fileExists(raceDir)) {
    const subDirs = fs
      .readdirSync(raceDir)
      .filter(f => fs.statSync(path.join(raceDir, f)).isDirectory())
      .filter(f => fileExists(path.join(raceDir, f, 'page.tsx')))
      // Exclude non-guide dirs (these are framework pages, not guide sub-pages)
      .filter(f => !FRAMEWORK_PAGES.includes(f))

    for (const subDir of subDirs) {
      if (!listedSubPages.includes(subDir)) {
        results.push(
          warn(
            `${subDir} exists on disk but is not listed in guideNav.ts for ${slug}`
          )
        )
      }
    }
  }

  return results
}

// ─── Check 2 & 3: Metadata completeness and canonical URLs ─────────────────

function checkMetadata(slug: string): Result[] {
  const results: Result[] = []
  const raceDir = getRaceDir(slug)

  if (!fileExists(raceDir)) {
    return [fail(`Race directory not found: app/races/${slugToFolder(slug)}`)]
  }

  // Get all sub-page dirs + the hub page itself
  const pagesToCheck: { label: string; filePath: string; expectedCanonical: string }[] = [
    {
      label: `${slug} (hub)`,
      filePath: path.join(raceDir, 'page.tsx'),
      expectedCanonical: `${BASE_URL}/races/${slug}`,
    },
  ]

  if (fileExists(raceDir)) {
    const subDirs = fs
      .readdirSync(raceDir)
      .filter(f => fs.statSync(path.join(raceDir, f)).isDirectory())
      .filter(f => fileExists(path.join(raceDir, f, 'page.tsx')))

    for (const subDir of subDirs) {
      pagesToCheck.push({
        label: `${slug}/${subDir}`,
        filePath: path.join(raceDir, subDir, 'page.tsx'),
        expectedCanonical: `${BASE_URL}/races/${slug}/${subDir}`,
      })
    }
  }

  for (const { label, filePath, expectedCanonical } of pagesToCheck) {
    if (!fileExists(filePath)) {
      results.push(fail(`${label}: page.tsx not found`))
      continue
    }

    const content = readFile(filePath)

    // Check title
    if (content.includes('title:') || content.includes("title='")) {
      // Check it contains the site brand
      if (
        content.includes('GrandPrixPal') ||
        content.includes('Grand Prix Pal') ||
        content.includes('GP Moto Pal')
      ) {
        results.push(pass(`${label}: title contains site brand`))
      } else {
        results.push(fail(`${label}: title missing site brand (GP Moto Pal or GrandPrixPal)`))
      }
    } else {
      results.push(fail(`${label}: no title found in metadata`))
    }

    // Check description
    if (content.includes('description:')) {
      results.push(pass(`${label}: description present`))
    } else {
      results.push(fail(`${label}: no description found in metadata`))
    }

    // Check canonical — must be absolute
    if (content.includes('canonical')) {
      if (content.includes(expectedCanonical)) {
        results.push(pass(`${label}: canonical is absolute and correct`))
      } else if (
        content.includes(`/races/${slug}`) &&
        !content.includes('https://')
      ) {
        results.push(
          fail(
            `${label}: canonical appears to be relative — should be ${expectedCanonical}`
          )
        )
      } else {
        results.push(
          warn(
            `${label}: canonical present but could not verify it matches ${expectedCanonical}`
          )
        )
      }
    } else {
      results.push(fail(`${label}: no canonical URL found in metadata`))
    }
  }

  return results
}

// ─── Check 4 & 5: mistakes.ts entries and linkPaths ────────────────────────

function checkMistakes(slug: string): Result[] {
  const results: Result[] = []

  if (!fileExists(MISTAKES)) {
    return [warn('src/lib/mistakes.ts not found — skipping centralised mistakes check (per-race mistakes pattern used instead)')]
  }

  const content = readFile(MISTAKES)

  // Check each required mistake ID has an entry for this race
  for (const mistakeId of REQUIRED_MISTAKE_IDS) {
    // Look for the mistake block containing this id
    const idPattern = new RegExp(`id:\\s*['"]${mistakeId}['"]`)
    if (!idPattern.test(content)) {
      results.push(fail(`mistakes.ts: mistake id "${mistakeId}" not found`))
      continue
    }

    // Find the races block within this mistake and check for our slug
    // This is a heuristic — finds the slug after the mistake id
    const mistakeBlockMatch = content.match(
      new RegExp(
        `id:\\s*['"]${mistakeId}['"][\\s\\S]*?races:\\s*\\{([\\s\\S]*?)\\}\\s*,?\\s*\\}`,
        'm'
      )
    )

    if (!mistakeBlockMatch) {
      results.push(
        warn(
          `mistakes.ts: could not parse races block for mistake "${mistakeId}"`
        )
      )
      continue
    }

    const racesBlock = mistakeBlockMatch[1]

    if (!racesBlock.includes(`'${slug}'`) && !racesBlock.includes(`"${slug}"`)) {
      results.push(
        fail(
          `mistakes.ts: mistake "${mistakeId}" has no entry for ${slug}`
        )
      )
      continue
    }

    results.push(pass(`mistakes.ts: "${mistakeId}" has entry for ${slug}`))

    // Check required fields exist within the slug's entry
    // Find the slug's block within the races object
    const slugBlockMatch = racesBlock.match(
      new RegExp(
        `['"]${slug}['"]\\s*:\\s*\\{([^}]*)`,
        's'
      )
    )

    if (!slugBlockMatch) {
      results.push(
        warn(
          `mistakes.ts: could not parse ${slug} block for mistake "${mistakeId}"`
        )
      )
      continue
    }

    const slugBlock = slugBlockMatch[1]

    // Check required fields
    for (const field of REQUIRED_MISTAKE_FIELDS) {
      if (slugBlock.includes(`${field}:`)) {
        results.push(
          pass(`mistakes.ts: "${mistakeId}" → ${slug} has field "${field}"`)
        )
      } else {
        results.push(
          fail(
            `mistakes.ts: "${mistakeId}" → ${slug} missing field "${field}"`
          )
        )
      }
    }

    // Check level is valid
    const levelMatch = slugBlock.match(/level:\s*['"](\w+)['"]/)
    if (levelMatch) {
      if (VALID_LEVELS.includes(levelMatch[1])) {
        results.push(
          pass(
            `mistakes.ts: "${mistakeId}" → ${slug} level is valid ("${levelMatch[1]}")`
          )
        )
      } else {
        results.push(
          fail(
            `mistakes.ts: "${mistakeId}" → ${slug} level "${levelMatch[1]}" is not valid (must be: ${VALID_LEVELS.join(', ')})`
          )
        )
      }
    }

    // Check linkPath resolves to a real page on disk
    const linkPathMatch = slugBlock.match(/linkPath:\s*['"]([^'"]+)['"]/)
    if (linkPathMatch) {
      const linkPath = linkPathMatch[1]
      // Convert /races/monaco-2026/getting-there → app/races/monaco/getting-there/page.tsx
      // URL paths contain year-suffixed slugs; resolve to evergreen folder names
      let resolvedPath = linkPath
      for (const [urlSlug, folder] of Object.entries(SLUG_TO_FOLDER)) {
        resolvedPath = resolvedPath.replace(`/races/${urlSlug}`, `/races/${folder}`)
      }
      const diskPath = path.join(ROOT, 'app', resolvedPath, 'page.tsx')

      if (fileExists(diskPath)) {
        results.push(
          pass(
            `mistakes.ts: "${mistakeId}" → ${slug} linkPath resolves: ${linkPath}`
          )
        )
      } else {
        results.push(
          fail(
            `mistakes.ts: "${mistakeId}" → ${slug} linkPath does not resolve to a real page: ${linkPath}`
          )
        )
      }
    }
  }

  return results
}

// ─── Check 6: TypeScript ───────────────────────────────────────────────────

function checkTypeScript(): Result[] {
  try {
    execSync('npx tsc --noEmit', { cwd: ROOT, stdio: 'pipe' })
    return [pass('TypeScript: no errors')]
  } catch (e) {
    const err = e as { stdout?: Buffer; stderr?: Buffer }
    const output = err.stdout?.toString() || err.stderr?.toString() || ''
    const errorLines = output
      .split('\n')
      .filter((l: string) => l.includes('error TS'))
      .slice(0, 10) // cap at 10 errors
    return [
      fail(
        `TypeScript errors found:\n${errorLines.map((l: string) => `    ${l}`).join('\n')}`
      ),
    ]
  }
}

// ─── Runner ────────────────────────────────────────────────────────────────

function verifyRace(slug: string): { passed: number; failed: number } {
  console.log(`\n${'─'.repeat(60)}`)
  console.log(`  Verifying: ${slug}`)
  console.log(`${'─'.repeat(60)}`)

  const allResults: Result[] = []

  console.log('\n[ 1 ] guideNav.ts vs disk')
  const navResults = checkGuideNav(slug)
  navResults.forEach(r => console.log(r.message))
  allResults.push(...navResults)

  console.log('\n[ 2 & 3 ] Metadata and canonical URLs')
  const metaResults = checkMetadata(slug)
  metaResults.forEach(r => console.log(r.message))
  allResults.push(...metaResults)

  console.log('\n[ 4 & 5 ] mistakes.ts entries and linkPaths')
  const mistakeResults = checkMistakes(slug)
  mistakeResults.forEach(r => console.log(r.message))
  allResults.push(...mistakeResults)

  const passed = allResults.filter(r => r.pass).length
  const failed = allResults.filter(r => !r.pass).length

  console.log(`\n  Result: ${passed} passed · ${failed} failed`)

  return { passed, failed }
}

function verifyAll(): void {
  const slugs = getAllRaceSlugs()
  console.log(`\nFound ${slugs.length} race(s): ${slugs.join(', ')}`)

  let totalPassed = 0
  let totalFailed = 0

  for (const slug of slugs) {
    const { passed, failed } = verifyRace(slug)
    totalPassed += passed
    totalFailed += failed
  }

  console.log(`\n${'═'.repeat(60)}`)
  console.log(`  TypeScript check (runs once across all races)`)
  console.log(`${'═'.repeat(60)}`)
  const tsResults = checkTypeScript()
  tsResults.forEach(r => console.log(r.message))
  const tsFailed = tsResults.filter(r => !r.pass).length

  console.log(`\n${'═'.repeat(60)}`)
  console.log(`  TOTAL: ${totalPassed} passed · ${totalFailed + tsFailed} failed`)
  console.log(`${'═'.repeat(60)}\n`)

  if (totalFailed + tsFailed > 0) process.exit(1)
}

// ─── Entry point ───────────────────────────────────────────────────────────

const args = process.argv.slice(2)

if (args.includes('--all')) {
  verifyAll()
} else if (args[0]) {
  const slug = args[0]
  const { failed } = verifyRace(slug)

  console.log(`\n${'═'.repeat(60)}`)
  console.log(`  TypeScript check`)
  console.log(`${'═'.repeat(60)}`)
  const tsResults = checkTypeScript()
  tsResults.forEach(r => console.log(r.message))
  const tsFailed = tsResults.filter(r => !r.pass).length

  if (failed + tsFailed > 0) process.exit(1)
} else {
  console.log('Usage:')
  console.log('  npx ts-node scripts/verify-race.ts monaco-2026')
  console.log('  npx ts-node scripts/verify-race.ts --all')
  process.exit(1)
}
