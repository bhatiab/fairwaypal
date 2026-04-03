/**
 * GrandPrixPal — Race Scaffold Script
 *
 * Usage:
 *   npx tsx scripts/scaffold-race.ts <slug> <race-name>
 *
 * Examples:
 *   npx tsx scripts/scaffold-race.ts silverstone-2026 "British Grand Prix"
 *   npx tsx scripts/scaffold-race.ts spa-2026 "Belgian Grand Prix"
 *
 * What it does:
 *   1. Creates all sub-page files from miami-2026 templates
 *   2. Replaces miami-specific content with TODOs
 *   3. Adds the race to guideNav.ts
 *   4. Adds a placeholder entry to calendar2026.ts
 *   5. Runs verify-race.ts to confirm scaffold is clean
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
const CALENDAR = path.join(ROOT, 'src', 'data', 'calendar2026.ts')
const BASE_URL = 'https://www.grandprixpal.com'
const TEMPLATE_SLUG = 'miami-2026'
const TEMPLATE_NAME = 'Miami Grand Prix'
const TEMPLATE_RACE_NAME = 'Miami'

const SUB_PAGES = [
  'first-timer-guide',
  'getting-there',
  'packing-guide',
  'bag-policy',
  'what-to-wear',
  'mistakes',
]

// Sub-page metadata title templates
const TITLE_TEMPLATES: Record<string, (name: string) => string> = {
  'first-timer-guide': n => `First-Timer's Guide to the ${n} | GrandPrixPal`,
  'getting-there':     n => `Getting to the ${n}: Transport Guide | GrandPrixPal`,
  'packing-guide':     n => `What to Pack for the ${n} | GrandPrixPal`,
  'bag-policy':        n => `${n} Bag Policy | GrandPrixPal`,
  'what-to-wear':      n => `What to Wear to the ${n} | GrandPrixPal`,
  'mistakes':          n => `Common Mistakes at the ${n} | GrandPrixPal`,
}

const DESC_TEMPLATES: Record<string, (name: string) => string> = {
  'first-timer-guide': n => `Everything you need to know before your first ${n} — what to expect, when to arrive, and how the weekend works.`,
  'getting-there':     n => `How to get to the ${n} — transport options, parking, and how to leave without chaos after the race.`,
  'packing-guide':     n => `What to pack for the ${n} — weather, circuit-specific needs, and what fits within the bag policy.`,
  'bag-policy':        n => `${n} bag policy — size limits, what's allowed, and what gets rejected at the gate.`,
  'what-to-wear':      n => `What to wear at the ${n} — practical outfit advice for the weather and terrain.`,
  'mistakes':          n => `The mistakes that catch first-timers out at the ${n} — sorted before you arrive.`,
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function log(msg: string) { console.log(msg) }
function ok(msg: string)  { console.log(`  ✅ ${msg}`) }
function warn(msg: string){ console.log(`  ⚠️  ${msg}`) }
function err(msg: string) { console.log(`  ❌ ${msg}`) }

function fileExists(p: string): boolean {
  return fs.existsSync(p)
}

function readFile(p: string): string {
  return fs.readFileSync(p, 'utf-8')
}

function writeFile(p: string, content: string) {
  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p, content, 'utf-8')
}

function slugToRaceName(slug: string): string {
  // e.g. "silverstone-2026" → "Silverstone" (short name for replacements)
  return slug.replace(/-2026$/, '').replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

// ─── Template processing ───────────────────────────────────────────────────

/**
 * Takes a template file's content and replaces miami-specific
 * references with the new race's values or TODO placeholders.
 */
function processTemplate(
  content: string,
  slug: string,
  raceName: string,
  shortName: string,
  subPage: string
): string {
  const canonical = `${BASE_URL}/races/${slug}/${subPage}`
  const title = TITLE_TEMPLATES[subPage](raceName)
  const description = DESC_TEMPLATES[subPage](raceName)

  return content
    // Slug references
    .replace(/miami-2026/g, slug)
    .replace(/canada-2026/g, slug)

    // Race name references
    .replace(/Miami Grand Prix/g, raceName)
    .replace(/Canadian Grand Prix/g, raceName)
    .replace(/'Miami'/g, `'${shortName}'`)
    .replace(/"Miami"/g, `"${shortName}"`)
    .replace(/raceName="Miami"/g, `raceName="${shortName}"`)
    .replace(/raceName="Montreal"/g, `raceName="${shortName}"`)

    // Canonical URL
    .replace(
      /canonical:\s*['"][^'"]+['"]/g,
      `canonical: '${canonical}'`
    )
    .replace(
      /https:\/\/www\.grandprixpal\.com\/races\/miami-2026\/[^'"]+/g,
      canonical
    )

    // Title
    .replace(
      /title:\s*['"][^'"]+GrandPrixPal['"]/g,
      `title: '${title}'`
    )

    // Description
    .replace(
      /description:\s*['"][^'"]{20,}['"]/g,
      `description: '${description}'`
    )

    // Flag circuit-specific content for human review
    .replace(
      /(Hardrock Stadium|Miami International Autodrome|hard rock|miami gardens|shuttle|ride.?share|Uber|Lyft|I-195|NW 7th)/gi,
      '/* TODO: replace with $1 equivalent for ' + slug + ' */'
    )

    // Flag Miami-specific copy blocks
    .replace(
      /(clear bag|no public transit|May heat|humidity)/gi,
      '/* TODO: verify for ' + slug + ': $1 */'
    )
}

// ─── File generators ───────────────────────────────────────────────────────

function generateHubPage(slug: string, raceName: string): string {
  const canonical = `${BASE_URL}/races/${slug}`
  const shortName = slugToRaceName(slug)
  const dataVar = shortName.replace(/\s+/g, '') + 'RaceData'
  const componentName = shortName.replace(/\s+/g, '') + 'RacePage'
  const importPath = `@/data/${slug.replace(/-2026$/, '').replace(/-/g, '')}RaceData`

  return `import { Metadata } from 'next'
import { RaceHubPageWrapper } from '@/components/templates/RaceHubPageWrapper'
import ${componentName} from './_client'

// TODO: Create ${importPath}.ts based on existing race data files
// TODO: Set correct OG image path once image is created

export const metadata: Metadata = {
  title: '${raceName} 2026 — Travel Guide & Race Information | GrandPrixPal',
  description: 'Everything you need to plan your ${raceName} trip — transport, packing, first-timer guides, and what to expect on race day.',
  alternates: {
    canonical: '${canonical}',
  },
  openGraph: {
    title: '${raceName} 2026 — Travel Guide | GrandPrixPal',
    description: 'Plan your ${raceName} trip with GrandPrixPal — transport, packing guides, and first-timer advice.',
    url: '${canonical}',
    images: [{ url: '/images/og/${slug}.jpg' }], // TODO: create this image
  },
}

// TODO: Add JSON-LD structured data (SportsEvent schema)
// See miami-2026/page.tsx for reference

export default function ${shortName.replace(/\s+/g, '')}HubPage() {
  return (
    <RaceHubPageWrapper
      raceSlug="${slug}"
      metadata={metadata}
      jsonLd={{}} // TODO: add JSON-LD
    >
      <${componentName} />
    </RaceHubPageWrapper>
  )
}
`
}

function generateHubClient(slug: string, raceName: string): string {
  const shortName = slugToRaceName(slug)
  const componentName = shortName.replace(/\s+/g, '') + 'RacePage'
  const dataVar = shortName.replace(/\s+/g, '') + 'RaceData'
  const importPath = `@/data/${slug.replace(/-2026$/, '').replace(/-/g, '')}RaceData`

  return `'use client'

// TODO: Create ${importPath}.ts
// Copy src/data/miamiRaceData.ts as a starting point
// Replace all circuit-specific content
// Derive isSprint and startDate from getRaceBySlug('${slug}') — do not hardcode

import { RacePageTemplate } from '@/components/templates'
// import { ${dataVar} } from '${importPath}'

export default function ${componentName}() {
  // TODO: uncomment import above and pass real data
  // return <RacePageTemplate data={${dataVar}} skipJsonLd />
  return <div>TODO: add race data for ${raceName}</div>
}
`
}

function generateSubPageFromTemplate(
  slug: string,
  raceName: string,
  shortName: string,
  subPage: string
): { page: string; client: string } {
  const templateDir = path.join(RACES_DIR, TEMPLATE_SLUG, subPage)
  const templatePagePath = path.join(templateDir, 'page.tsx')
  const templateClientPath = path.join(templateDir, '_client.tsx')

  let pageContent: string
  let clientContent: string

  if (fileExists(templatePagePath)) {
    pageContent = processTemplate(
      readFile(templatePagePath),
      slug, raceName, shortName, subPage
    )
  } else {
    // Fallback if template doesn't exist
    const canonical = `${BASE_URL}/races/${slug}/${subPage}`
    const title = TITLE_TEMPLATES[subPage](raceName)
    const desc = DESC_TEMPLATES[subPage](raceName)
    pageContent = `import { Metadata } from 'next'
import ${shortName.replace(/\s+/g, '')}${subPage.replace(/-./g, c => c[1].toUpperCase())}Page from './_client'

export const metadata: Metadata = {
  title: '${title}',
  description: '${desc}',
  alternates: { canonical: '${canonical}' },
}

export default function Page() {
  return <${shortName.replace(/\s+/g, '')}${subPage.replace(/-./g, c => c[1].toUpperCase())}Page />
}
`
  }

  if (fileExists(templateClientPath)) {
    clientContent = processTemplate(
      readFile(templateClientPath),
      slug, raceName, shortName, subPage
    )
    // Add TODO header
    clientContent = `// TODO: Replace all placeholder content with ${raceName}-specific information\n// TODO: Search for /* TODO */ comments and address each one\n\n` + clientContent
  } else {
    clientContent = `'use client'

// TODO: Build out ${subPage} content for ${raceName}
// Reference: app/races/miami-2026/${subPage}/_client.tsx

export default function ${shortName.replace(/\s+/g, '')}Page() {
  return (
    <div>
      <h1>TODO: ${TITLE_TEMPLATES[subPage](raceName)}</h1>
      <p>TODO: Add circuit-specific content for ${raceName}</p>
    </div>
  )
}
`
  }

  return { page: pageContent, client: clientContent }
}

// ─── Data file updaters ────────────────────────────────────────────────────

function updateGuideNav(slug: string) {
  if (!fileExists(GUIDE_NAV)) {
    err(`guideNav.ts not found at ${GUIDE_NAV}`)
    return false
  }

  const content = readFile(GUIDE_NAV)

  if (content.includes(`'${slug}'`) || content.includes(`"${slug}"`)) {
    warn(`${slug} already exists in guideNav.ts — skipping`)
    return true
  }

  const subPageList = SUB_PAGES.map(s => `'${s}'`).join(', ')
  const newEntry = `  '${slug}': [${subPageList}],`

  // Find the last race entry and insert after it
  // Looks for the closing of the last array entry before the closing }
  const insertPattern = /([\s\S]*)(^\s+'[^']+': \[[^\]]+\],?\s*$)([\s\S]*})/m
  const lines = content.split('\n')

  // Find the last line with a race entry pattern
  let lastEntryIndex = -1
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].match(/^\s+['"][^'"]+['"]\s*:\s*\[/)) {
      lastEntryIndex = i
      break
    }
  }

  if (lastEntryIndex === -1) {
    // Fallback: append before closing brace
    const updated = content.replace(/(\n}[^}]*$)/, `\n${newEntry}$1`)
    writeFile(GUIDE_NAV, updated)
  } else {
    // Insert after the last entry
    lines.splice(lastEntryIndex + 1, 0, newEntry)
    writeFile(GUIDE_NAV, lines.join('\n'))
  }

  ok(`Added ${slug} to guideNav.ts with all ${SUB_PAGES.length} sub-pages`)
  return true
}

function updateCalendar(slug: string, raceName: string) {
  if (!fileExists(CALENDAR)) {
    err(`calendar2026.ts not found at ${CALENDAR}`)
    return false
  }

  const content = readFile(CALENDAR)

  if (content.includes(`'${slug}'`) || content.includes(`"${slug}"`)) {
    warn(`${slug} already exists in calendar2026.ts — skipping`)
    return true
  }

  const shortName = slugToRaceName(slug)

  const newEntry = `
  // TODO: Verify all fields for ${raceName}
  {
    id: 99, // TODO: set correct round number
    slug: '${slug}',
    name: '${raceName}',
    shortName: '${shortName}',
    location: 'TODO: City, Country',
    circuit: 'TODO: Circuit Name',
    startDate: 'TODO: YYYY-MM-DDTHH:mm:ssZ',
    endDate: 'TODO: YYYY-MM-DDTHH:mm:ssZ',
    round: 'Round TODO · ${shortName}',
    isSprint: false, // TODO: verify
    isUpcoming: true,
  },`

  // Insert before the closing bracket of the races array
  const updated = content.replace(/(\]\s*(?:as const)?;?\s*$)/, `${newEntry}\n$1`)

  if (updated === content) {
    warn('Could not find insertion point in calendar2026.ts — appended at end')
    writeFile(CALENDAR, content + newEntry)
  } else {
    writeFile(CALENDAR, updated)
  }

  ok(`Added ${slug} placeholder to calendar2026.ts`)
  warn(`Remember to fill in the TODO fields in calendar2026.ts for ${slug}`)
  return true
}

// ─── Main ──────────────────────────────────────────────────────────────────

function scaffold(slug: string, raceName: string) {
  const shortName = slugToRaceName(slug)
  const raceDir = path.join(RACES_DIR, slug)

  log(`\n${'─'.repeat(60)}`)
  log(`  Scaffolding: ${slug} (${raceName})`)
  log(`${'─'.repeat(60)}\n`)

  // ── Guard: don't overwrite existing race ──
  if (fileExists(raceDir)) {
    const existingFiles = fs.readdirSync(raceDir)
    if (existingFiles.length > 0) {
      warn(`app/races/${slug} already exists with ${existingFiles.length} items`)
      warn(`Run with --force to overwrite (use with caution)`)
      const force = process.argv.includes('--force')
      if (!force) {
        log('\nAborted. Use --force to overwrite existing files.')
        process.exit(1)
      }
      warn('--force flag detected — overwriting existing files')
    }
  }

  // ── Step 1: Hub page ──
  log('[ 1 ] Creating hub page')
  const hubPage = generateHubPage(slug, raceName)
  const hubClient = generateHubClient(slug, raceName)
  writeFile(path.join(raceDir, 'page.tsx'), hubPage)
  writeFile(path.join(raceDir, '_client.tsx'), hubClient)
  ok(`Created app/races/${slug}/page.tsx`)
  ok(`Created app/races/${slug}/_client.tsx`)

  // ── Step 2: Sub-pages ──
  log('\n[ 2 ] Creating sub-pages from miami-2026 templates')
  for (const subPage of SUB_PAGES) {
    const subDir = path.join(raceDir, subPage)
    const { page, client } = generateSubPageFromTemplate(
      slug, raceName, shortName, subPage
    )
    writeFile(path.join(subDir, 'page.tsx'), page)
    writeFile(path.join(subDir, '_client.tsx'), client)
    ok(`Created ${subPage}/page.tsx + _client.tsx`)
  }

  // ── Step 3: Update guideNav.ts ──
  log('\n[ 3 ] Updating guideNav.ts')
  updateGuideNav(slug)

  // ── Step 4: Update calendar2026.ts ──
  log('\n[ 4 ] Updating calendar2026.ts')
  updateCalendar(slug, raceName)

  // ── Step 5: Summary ──
  log(`\n${'─'.repeat(60)}`)
  log(`  Scaffold complete for ${slug}`)
  log(`${'─'.repeat(60)}`)
  log(`
Next steps:
  1. Fill in TODO fields in src/data/calendar2026.ts
  2. Create src/data/${slug.replace(/-2026$/, '').replace(/-/g, '')}RaceData.ts
     (copy miamiRaceData.ts as a starting point)
  3. Add GetYourGuide tour IDs to src/lib/offers.ts
  4. Search each _client.tsx for /* TODO */ comments and replace with
     circuit-specific content
  5. Add all 5 mistake entries to src/lib/mistakes.ts
     (run: npx tsx scripts/verify-race.ts ${slug} to see what's missing)
  6. Run: npx tsx scripts/verify-race.ts ${slug}
     Fix all failures before considering the race complete.
  7. Run content audit (see skills/verify-race.md)
`)
}

// ─── Entry point ───────────────────────────────────────────────────────────

const args = process.argv.slice(2).filter(a => a !== '--force')

if (args.length < 2) {
  log('Usage:')
  log('  npx tsx scripts/scaffold-race.ts <slug> "<race name>"')
  log('')
  log('Examples:')
  log('  npx tsx scripts/scaffold-race.ts silverstone-2026 "British Grand Prix"')
  log('  npx tsx scripts/scaffold-race.ts spa-2026 "Belgian Grand Prix"')
  log('')
  log('Options:')
  log('  --force    Overwrite existing files (use with caution)')
  process.exit(1)
}

const [slug, ...nameparts] = args
const raceName = nameparts.join(' ')

if (!slug.match(/^[\w-]+-\d{4}$/)) {
  err(`Invalid slug format: "${slug}". Expected format: circuit-year (e.g. silverstone-2026)`)
  process.exit(1)
}

scaffold(slug, raceName)
