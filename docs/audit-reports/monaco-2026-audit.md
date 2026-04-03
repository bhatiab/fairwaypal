# Race Audit: Monaco Grand Prix (monaco-2026)
**Date:** 2026-03-30
**Rotation:** Race 10 of 16
**Next race:** silverstone-2026

## Summary
- Total checks: 103
- Passed: 96
- Warnings: 7
- Failed: 0

---

## verify-race.ts output

```
────────────────────────────────────────────────────────────
  Verifying: monaco-2026
────────────────────────────────────────────────────────────

[ 1 ] guideNav.ts vs disk
  ✅ guideNav: first-timer-guide listed and exists on disk
  ✅ guideNav: getting-there listed and exists on disk
  ✅ guideNav: packing-guide listed and exists on disk
  ✅ guideNav: bag-policy listed and exists on disk
  ✅ guideNav: what-to-wear listed and exists on disk
  ✅ guideNav: mistakes listed and exists on disk

[ 2 & 3 ] Metadata and canonical URLs
  ✅ monaco-2026 (hub): title contains GrandPrixPal
  ✅ monaco-2026 (hub): description present
  ✅ monaco-2026 (hub): canonical is absolute and correct
  ✅ monaco-2026/bag-policy: title contains GrandPrixPal
  ✅ monaco-2026/bag-policy: description present
  ✅ monaco-2026/bag-policy: canonical is absolute and correct
  ✅ monaco-2026/experiences: title contains GrandPrixPal
  ✅ monaco-2026/experiences: description present
  ✅ monaco-2026/experiences: canonical is absolute and correct
  ✅ monaco-2026/first-timer-guide: title contains GrandPrixPal
  ✅ monaco-2026/first-timer-guide: description present
  ✅ monaco-2026/first-timer-guide: canonical is absolute and correct
  ✅ monaco-2026/getting-there: title contains GrandPrixPal
  ✅ monaco-2026/getting-there: description present
  ✅ monaco-2026/getting-there: canonical is absolute and correct
  ✅ monaco-2026/mistakes: title contains GrandPrixPal
  ✅ monaco-2026/mistakes: description present
  ✅ monaco-2026/mistakes: canonical is absolute and correct
  ✅ monaco-2026/packing-guide: title contains GrandPrixPal
  ✅ monaco-2026/packing-guide: description present
  ✅ monaco-2026/packing-guide: canonical is absolute and correct
  ✅ monaco-2026/planner: title contains GrandPrixPal
  ✅ monaco-2026/planner: description present
  ✅ monaco-2026/planner: canonical is absolute and correct
  ✅ monaco-2026/route: title contains GrandPrixPal
  ✅ monaco-2026/route: description present
  ✅ monaco-2026/route: canonical is absolute and correct
  ✅ monaco-2026/what-to-wear: title contains GrandPrixPal
  ✅ monaco-2026/what-to-wear: description present
  ✅ monaco-2026/what-to-wear: canonical is absolute and correct

[ 4 & 5 ] mistakes.ts entries and linkPaths
  ✅ mistakes.ts: "transport-exit" has entry for monaco-2026
  ✅ mistakes.ts: "transport-exit" → monaco-2026 level is valid ("critical")
  ✅ mistakes.ts: "transport-exit" → monaco-2026 linkPath resolves: /races/monaco-2026/getting-there
  ✅ mistakes.ts: "bag-policy" has entry for monaco-2026
  ✅ mistakes.ts: "bag-policy" → monaco-2026 level is valid ("moderate")
  ✅ mistakes.ts: "bag-policy" → monaco-2026 linkPath resolves: /races/monaco-2026/bag-policy
  ✅ mistakes.ts: "weather" has entry for monaco-2026
  ✅ mistakes.ts: "weather" → monaco-2026 level is valid ("moderate")
  ✅ mistakes.ts: "weather" → monaco-2026 linkPath resolves: /races/monaco-2026/packing-guide
  ✅ mistakes.ts: "friday-practice" has entry for monaco-2026
  ✅ mistakes.ts: "friday-practice" → monaco-2026 level is valid ("minor")
  ✅ mistakes.ts: "friday-practice" → monaco-2026 linkPath resolves: /races/monaco-2026/first-timer-guide
  ✅ mistakes.ts: "ticket-sightlines" has entry for monaco-2026
  ✅ mistakes.ts: "ticket-sightlines" → monaco-2026 level is valid ("critical")
  ✅ mistakes.ts: "ticket-sightlines" → monaco-2026 linkPath resolves: /races/monaco-2026

  Result: 71 passed · 0 failed

TypeScript check
  ✅ TypeScript: no errors
```

---

## Link Integrity

All clear.

- All 6 guideNav sub-pages have `page.tsx` on disk: first-timer-guide, getting-there, packing-guide, bag-policy, what-to-wear, mistakes ✅
- All 3 TIER2_FIXED pages have `page.tsx` on disk: experiences, route, planner ✅
- No phantom guideNav entries (guideNav page with no page.tsx on disk) ✅
- No orphan pages (page.tsx on disk not in guideNav or TIER2_FIXED) ✅
- All canonical URLs absolute and correct (verified by verify-race.ts) ✅
- All 5 mistakes.ts linkPaths for monaco-2026 resolve to existing pages ✅

---

## SEO Compliance

All clear.

- Hub `page.tsx` exports `metadata` with title, description, and absolute canonical ✅
- Hub `page.tsx` uses `buildRaceJsonLd` — JSON-LD present ✅
- Hub `_client.tsx` uses `RacePageTemplate` with `skipJsonLd` prop — no duplicate JSON-LD ✅
- All 9 sub-pages export `metadata` with title containing "GrandPrixPal", non-empty description, absolute canonical ✅

---

## Content Quality

**7 warnings — unresolved TODO comments:**

| File | Line | Issue |
|------|------|-------|
| `bag-policy/_client.tsx` | 14 | TODO: Verify exact 2026 bag dimensions against ACM official source |
| `getting-there/_client.tsx` | 27 | TODO: Verify €40–80+ surge price range against current race weekend data |
| `packing-guide/_client.tsx` | 267 | TODO: Replace ASIN_EAR (ear defenders / motorsport ear protection) |
| `packing-guide/_client.tsx` | 273 | TODO: Replace ASIN_POWERBANK (power bank 10000mah) |
| `packing-guide/_client.tsx` | 279 | TODO: Replace ASIN_INSOLES (comfort insoles) |
| `packing-guide/_client.tsx` | 285 | TODO: Replace ASIN_CROSSBODY (small crossbody bag) |
| `packing-guide/_client.tsx` | 291 | TODO: Replace ASIN_LAYER (packable jacket lightweight) |

- No hardcoded hex colors ✅
- No incorrect GetYourGuide partner IDs ✅
- No `localGuideLinks` usage ✅

---

## Fact-Check Status

**No fact-check file.** `docs/fact-checks/monaco-2026-fact-check.md` does not exist.

Monaco is a full-guide race with six guide sub-pages. A fact-check file should exist covering key logistical claims (bag dimensions, transport wait times, surge pricing figures).

---

## Mobile Readiness

All clear.

- All 6 `_client.tsx` files begin with `'use client'` on line 1 ✅
- No Lucide icon imports found in any `page.tsx` file ✅
- No `useState`, `useEffect`, or `usePathname` in any `page.tsx` file ✅
- No fixed pixel widths (`w-[Npx]` or `width: Npx`) found ✅

---

## Architecture Compliance

**1 warning — hardcoded fields in race data file:**

`src/data/monacoRaceData.ts` declares `round` and `isSprint` directly:

```ts
round: "Round 08 · Monaco",   // line 15
isSprint: false,              // line 17
```

Per CLAUDE.md: these fields should be derived from `getRaceBySlug()`, not redeclared in the race data file. `startDate` was not found hardcoded (✅).

- No `localGuideLinks` in any `src/data/` file ✅
- `skipJsonLd` correctly present on hub `_client.tsx` ✅

---

## Action Items

1. **[Medium]** Fill 5 placeholder Amazon ASINs in `packing-guide/_client.tsx` (lines 267, 273, 279, 285, 291) — affiliate links are currently using ASIN placeholders and will not function.
2. **[Medium]** Verify exact 2026 bag dimensions in `bag-policy/_client.tsx` line 14 against ACM official source before race week.
3. **[Medium]** Create `docs/fact-checks/monaco-2026-fact-check.md` using template at `docs/fact-check-template.md`.
4. **[Low]** Verify taxi/rideshare surge price range (€40–80+) in `getting-there/_client.tsx` line 27 against current race weekend data.
5. **[Low]** Remove hardcoded `round` and `isSprint` from `src/data/monacoRaceData.ts` and derive from `getRaceBySlug('monaco-2026')` per architecture convention.
