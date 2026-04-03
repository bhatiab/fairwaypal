/**
 * GP Moto Pal — SEO Audit Script
 *
 * Usage:
 *   npx ts-node scripts/seo-audit.ts
 *
 * Checks every page.tsx under app/ for:
 *   1. Missing metadata export (export const metadata or export async function generateMetadata)
 *   2. Missing twitter card
 *   3. Wrong brand name in title (GrandPrixPal or GPMotoPal instead of "GP Moto Pal")
 *   4. (warn) Title likely > 65 characters
 *   5. (warn) Description likely > 160 characters
 *
 * Exits with code 1 if any FAIL found.
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT = path.resolve(__dirname, '..')
const APP_DIR = path.join(ROOT, 'app')

// Pages exempt from metadata checks (framework internals, no visible URL)
const EXEMPT_FILES: string[] = [
  // none currently
]

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

function findPageFiles(dir: string): string[] {
  const results: string[] = []
  if (!fs.existsSync(dir)) return results

  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) {
      results.push(...findPageFiles(full))
    } else if (entry === 'page.tsx') {
      results.push(full)
    }
  }
  return results
}

function relPath(filePath: string): string {
  return path.relative(ROOT, filePath).replace(/\\/g, '/')
}

// ─── Checks ────────────────────────────────────────────────────────────────

function checkMetadataExport(content: string, label: string): Result {
  const hasStatic = /export\s+const\s+metadata\s*[=:]/.test(content)
  const hasDynamic = /export\s+(async\s+)?function\s+generateMetadata/.test(content)
  if (hasStatic || hasDynamic) {
    return pass(`${label}: metadata export found`)
  }
  return fail(`${label}: no metadata export (missing "export const metadata" or "generateMetadata")`)
}

function checkTwitterCard(content: string, label: string): Result {
  if (/twitter\s*:/.test(content)) {
    return pass(`${label}: twitter card present`)
  }
  return fail(`${label}: no twitter card in metadata`)
}

function checkBrandName(content: string, label: string): Result[] {
  const results: Result[] = []
  if (/GrandPrixPal/.test(content)) {
    results.push(fail(`${label}: title contains "GrandPrixPal" — should be "GP Moto Pal"`))
  }
  // GPMotoPal without spaces (but not inside a URL like gpmotopal.com)
  if (/GPMotoPal(?!\s*\.com)/.test(content)) {
    results.push(fail(`${label}: title contains "GPMotoPal" — should be "GP Moto Pal"`))
  }
  if (results.length === 0) {
    results.push(pass(`${label}: brand name consistent`))
  }
  return results
}

function checkTitleLength(content: string, label: string): Result[] {
  const results: Result[] = []
  // Extract title strings — look for title: `...` or title: '...' or title: "..."
  // This is a heuristic; catches most cases without an AST
  const titleMatches = [
    ...content.matchAll(/title\s*:\s*`([^`]{20,})`/g),
    ...content.matchAll(/title\s*:\s*'([^']{20,})'/g),
    ...content.matchAll(/title\s*:\s*"([^"]{20,})"/g),
  ]
  for (const m of titleMatches) {
    // Rough length check — template literals with ${} will be shorter at runtime,
    // skip those to avoid false positives
    const raw = m[1]
    if (raw.includes('${')) continue
    if (raw.length > 65) {
      results.push(warn(`${label}: title may exceed 65 chars (${raw.length}): "${raw.slice(0, 70)}…"`))
    }
  }
  return results
}

function checkDescriptionLength(content: string, label: string): Result[] {
  const results: Result[] = []
  const descMatches = [
    ...content.matchAll(/description\s*:\s*`([^`]{30,})`/g),
    ...content.matchAll(/description\s*:\s*'([^']{30,})'/g),
    ...content.matchAll(/description\s*:\s*"([^"]{30,})"/g),
  ]
  for (const m of descMatches) {
    const raw = m[1]
    if (raw.includes('${')) continue
    if (raw.length > 160) {
      results.push(warn(`${label}: description may exceed 160 chars (${raw.length}): "${raw.slice(0, 80)}…"`))
    }
  }
  return results
}

// ─── Runner ────────────────────────────────────────────────────────────────

function auditPage(filePath: string): { passed: number; failed: number } {
  const label = relPath(filePath)
  const content = fs.readFileSync(filePath, 'utf-8')
  const results: Result[] = []

  results.push(checkMetadataExport(content, label))
  results.push(checkTwitterCard(content, label))
  results.push(...checkBrandName(content, label))
  results.push(...checkTitleLength(content, label))
  results.push(...checkDescriptionLength(content, label))

  const failures = results.filter(r => !r.pass)
  const warnings = results.filter(r => r.pass && r.message.includes('⚠️'))

  if (failures.length > 0 || warnings.length > 0) {
    console.log(`\n${label}`)
    results.forEach(r => {
      if (!r.pass || r.message.includes('⚠️')) {
        console.log(r.message)
      }
    })
  }

  return {
    passed: results.filter(r => r.pass).length,
    failed: failures.length,
  }
}

function runAudit(): void {
  const pages = findPageFiles(APP_DIR).filter(
    f => !EXEMPT_FILES.includes(relPath(f))
  )

  console.log(`\nSEO Audit — scanning ${pages.length} page(s) under app/`)
  console.log('─'.repeat(60))

  let totalPassed = 0
  let totalFailed = 0

  for (const page of pages.sort()) {
    const { passed, failed } = auditPage(page)
    totalPassed += passed
    totalFailed += failed
  }

  console.log(`\n${'═'.repeat(60)}`)
  console.log(`  TOTAL: ${totalPassed} passed · ${totalFailed} failed`)
  console.log(`${'═'.repeat(60)}\n`)

  if (totalFailed > 0) {
    process.exit(1)
  }
}

runAudit()
