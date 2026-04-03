# Skill: Race Verification

## When to use this
At the end of every race build, every sub-page addition, and any time
you're unsure whether a race is technically complete.

---

## The script

`scripts/verify-race.ts` checks everything automatically.

Run it like this:

```bash
# Verify a single race
npx ts-node scripts/verify-race.ts monaco-2026

# Verify all races
npx ts-node scripts/verify-race.ts --all
```

If it exits with code 1, there are failures. Fix everything before
marking the race as complete.

---

## What it checks

1. **guideNav.ts vs disk**
   Every sub-page listed in guideNav.ts must have a page.tsx on disk.
   Every page.tsx on disk should be listed in guideNav.ts.
   Phantom entries (listed but missing) are failures.
   Unlisted pages (exist but not listed) are warnings.

2. **Metadata completeness**
   Every page.tsx (hub + all sub-pages) must have:
   - title containing "GrandPrixPal"
   - description
   - canonical URL

3. **Canonical URLs are absolute**
   Canonical must be `https://www.grandprixpal.com/...`
   not `/races/monaco-2026/...`
   Relative canonicals are failures.

4. **mistakes.ts has all 5 entries**
   All 5 mistake IDs (transport, bags, heat, schedule, seats) must
   have an entry for the race slug.
   Each entry must have: detail, level, linkLabel, linkPath.
   Level must be one of: critical, moderate, minor.

5. **linkPaths resolve to real pages**
   Every linkPath in mistakes.ts for this race must point to a
   page.tsx that exists on disk.

6. **TypeScript**
   `tsc --noEmit` must pass with zero errors.

---

## How to use in a Claude Code session

### At the end of a race build:
```
Run scripts/verify-race.ts for [slug].
Fix every failure before finishing.
Do not fix warnings unless they indicate a real problem.
```

### When adding a single sub-page:
```
Run scripts/verify-race.ts for [slug].
We just added [sub-page] — confirm it passes all checks.
```

### Weekly audit of all races:
```
Run scripts/verify-race.ts --all.
Report any failures grouped by race.
Fix failures in this order: canonical URLs first, then guideNav
mismatches, then mistakes entries, then TypeScript.
```

---

## Reading the output

✅ Pass — correct, nothing to do
⚠️  Warning — investigate but not necessarily a failure
❌ Fail — must fix before the race is considered complete

A race is complete only when:
- Zero ❌ failures
- TypeScript passes
- All warnings have been reviewed

---

## When the script itself needs updating

If you add a new required field to mistakes.ts entries, add it to
`REQUIRED_MISTAKE_FIELDS` in the script.

If the mistakes IDs change, update `REQUIRED_MISTAKE_IDS`.

If the base URL changes, update `BASE_URL`.

Do not change the exit code behaviour — CI depends on exit 1 for failures.

---

## Adding to CI (optional, for later)

Add to package.json scripts:
```json
"verify": "ts-node scripts/verify-race.ts --all",
"verify:race": "ts-node scripts/verify-race.ts"
```

Then run `npm run verify` before any deployment.
