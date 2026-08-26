#!/usr/bin/env node
/**
 * Submits URLs to IndexNow (Bing, Yandex, Seznam, Naver).
 *
 * Driven by .github/workflows/indexnow.yml. Reads the same route list that
 * app/sitemap.ts uses (lib/routes.json), so there is no second list to drift.
 *
 *   node scripts/ping-indexnow.mjs --all
 *   node scripts/ping-indexnow.mjs --changed <git-range>
 *   node scripts/ping-indexnow.mjs --all --dry-run
 *   node scripts/ping-indexnow.mjs --all --endpoint http://127.0.0.1:95 (local testing)
 *
 * Exits non-zero on a rejected submission so CI surfaces it. --changed with no
 * matching pages exits 0 without submitting: nothing changed is a success.
 */
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// Kept in sync with lib/indexnow.ts by src/test/indexnow.test.ts.
const INDEXNOW_KEY = 'fp8a3c2e9b7d41f5a6c0e2b4d8f7a3e91'
const SITE_URL = 'https://www.fairwaypal.com'
const DEFAULT_ENDPOINT = 'https://api.indexnow.org/indexnow'

const STATIC_ROUTES = JSON.parse(readFileSync(path.join(ROOT, 'lib', 'routes.json'), 'utf8'))
const ROUTE_SET = new Set(STATIC_ROUTES)

const absoluteUrl = (route) => (route === '/' ? SITE_URL : `${SITE_URL}${route}`)

function parseArgs(argv) {
  const args = { mode: null, range: null, dryRun: false, endpoint: DEFAULT_ENDPOINT }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--all') args.mode = 'all'
    else if (arg === '--changed') {
      args.mode = 'changed'
      args.range = argv[++i]
    } else if (arg === '--dry-run') args.dryRun = true
    else if (arg === '--endpoint') args.endpoint = argv[++i]
    else throw new Error(`Unknown argument: ${arg}`)
  }
  if (!args.mode) throw new Error('Pass --all or --changed <git-range>')
  if (args.mode === 'changed' && !args.range) throw new Error('--changed needs a git range, e.g. HEAD~1..HEAD')
  return args
}

/** app/blog/foo/page.tsx -> /blog/foo ; app/page.tsx -> / */
function fileToRoute(file) {
  if (!file.startsWith('app/') || !file.endsWith('/page.tsx')) return null
  const route = '/' + file.slice('app/'.length, -'/page.tsx'.length)
  return route === '/' ? '/' : route
}

function changedRoutes(range) {
  let files
  try {
    files = execFileSync('git', ['diff', '--name-only', range], { cwd: ROOT, encoding: 'utf8' })
      .split('\n')
      .filter(Boolean)
  } catch (err) {
    throw new Error(`git diff ${range} failed: ${err.message}`)
  }

  // app/page.tsx is the homepage; every other page.tsx maps to its directory.
  const routes = files
    .map((file) => (file === 'app/page.tsx' ? '/' : fileToRoute(file)))
    .filter((route) => route && ROUTE_SET.has(route))

  return [...new Set(routes)]
}

async function main() {
  const args = parseArgs(process.argv.slice(2))

  const routes = args.mode === 'all' ? [...STATIC_ROUTES] : changedRoutes(args.range)

  if (routes.length === 0) {
    console.log(`No indexable pages changed in ${args.range}. Nothing to submit.`)
    return
  }

  const payload = {
    host: new URL(SITE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: routes.map(absoluteUrl),
  }

  console.log(`Mode: ${args.mode}${args.range ? ` (${args.range})` : ''}`)
  console.log(`Endpoint: ${args.endpoint}`)
  console.log(`Submitting ${payload.urlList.length} URL(s):`)
  for (const url of payload.urlList) console.log(`  ${url}`)

  if (args.dryRun) {
    console.log('\n--dry-run: payload below, nothing sent.\n')
    console.log(JSON.stringify(payload, null, 2))
    return
  }

  const res = await fetch(args.endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })

  // 200 = accepted. 202 = accepted, key still being validated (normal on a first
  // submission). Anything else is a real failure.
  if (res.status !== 200 && res.status !== 202) {
    const detail = await res.text().catch(() => '')
    throw new Error(`IndexNow returned ${res.status}${detail ? `: ${detail.slice(0, 300)}` : ''}`)
  }

  console.log(`\nIndexNow accepted the submission (HTTP ${res.status}).`)
}

main().catch((err) => {
  console.error(`IndexNow submission failed: ${err.message}`)
  process.exit(1)
})
