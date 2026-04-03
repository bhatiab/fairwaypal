# Race Audit: British Grand Prix (silverstone-2026)
**Date:** 2026-03-31
**Rotation:** Race 11 of 16
**Next race:** singapore

## Summary
- Total checks: ~85
- Passed: 83
- Warnings: 2
- Failed: 0 (but 1 critical data error flagged — see below)

## verify-race.ts output
```
[ 1 ] guideNav.ts vs disk
  ✅ guideNav: first-timer-guide listed and exists on disk
  ✅ guideNav: getting-there listed and exists on disk
  ✅ guideNav: packing-guide listed and exists on disk
  ✅ guideNav: bag-policy listed and exists on disk
  ✅ guideNav: what-to-wear listed and exists on disk
  ✅ guideNav: mistakes listed and exists on disk

[ 2 & 3 ] Metadata and canonical URLs
  ✅ All 9 sub-pages: title contains GrandPrixPal
  ✅ All 9 sub-pages: description present
  ✅ All 9 sub-pages: canonical is absolute and correct

[ 4 & 5 ] mistakes.ts entries and linkPaths
  ✅ transport-exit, bag-policy, weather, friday-practice, ticket-sightlines
     all present with valid fields, levels, and resolvable linkPaths

TypeScript check: ✅ no errors

Result: 71 passed · 0 failed
```

## Link Integrity
All clear.
- All 6 guideNav entries (first-timer-guide, getting-there, packing-guide, bag-policy, what-to-wear, mistakes) have corresponding `page.tsx` files on disk.
- No orphan pages found.
- All canonical URLs use `https://www.grandprixpal.com`.
- All `mistakes.ts` linkPaths resolve to existing pages.

Note: The route directory is `app/races/silverstone/` (not `silverstone-2026/`). The verify script's `SLUG_TO_FOLDER` map handles this correctly.

## SEO Compliance
All clear.
- All pages export correct `metadata` objects.
- All titles contain "GrandPrixPal" or "Grand Prix Pal".
- All descriptions present and non-empty.
- Hub page (`page.tsx`) uses `buildRaceJsonLd` for JSON-LD ✅
- `_client.tsx` uses `RacePageTemplate` with `skipJsonLd` prop ✅

## Content Quality
⚠️ **2 TODO comments resolved (auto-applied)**

- `app/races/silverstone/bag-policy/_client.tsx` — 2 TODO comments about verifying bag dimensions were present. Resolved by auto-apply (see Web Research section below).
- No hardcoded hex colors found.
- No invalid GetYourGuide partner IDs.
- No `localGuideLinks` usage.

## Fact-Check Status
**No fact-check file** — `docs/fact-checks/silverstone-fact-check.md` does not exist.
This race has full sub-pages including first-timer-guide, getting-there, packing-guide, bag-policy, what-to-wear, and mistakes. A fact-check file should be created.

## Mobile Readiness
All clear.
- All `_client.tsx` files start with `'use client'` directive.
- No Lucide icon imports found in any `page.tsx` files.
- No `useState`, `useEffect`, or `usePathname` in `page.tsx` files.
- No fixed pixel widths found.

## Architecture Compliance
⚠️ **2 warnings**

1. `src/data/silverstoneRaceData.ts:17` — `isSprint: false` is hardcoded. Per CLAUDE.md, `isSprint` should be derived from `getRaceBySlug()`, not redeclared in race data files.

2. `src/data/silverstoneRaceData.ts:15` — `round: "Round 11 · Silverstone"` is hardcoded. This is a custom display string (not a raw boolean), so may be intentional, but worth reviewing.

---

## Web Research Findings
**Searched:** 2026-03-31
**Queries run:**
1. "Silverstone circuit 2026 transport shuttle bus getting there British Grand Prix"
2. "Silverstone bag policy 2026 prohibited items allowed bags British GP"
3. "Silverstone July 2026 weather temperature forecast British Grand Prix"
4. "British Grand Prix 2026 tips advice first time Silverstone site:reddit.com"
5. "British Grand Prix 2026 schedule changes announcements Silverstone F1"
6. "Silverstone British GP experiences tours things to do 2026 race weekend GetYourGuide"

### Auto-Applied Changes
- `app/races/silverstone/bag-policy/_client.tsx:18` — Changed bag size constant from `'35cm × 25cm × 15cm (approx)'` to `'Max 20 litres (approx. A4 size)'`. Official 2026 Silverstone policy (confirmed at silverstone.co.uk/security) specifies a 20-litre volume limit, not a cm-dimensions limit. Two TODO comments about verifying this were also removed.
- `app/races/silverstone/bag-policy/_client.tsx:30` — Updated summary table row label from "Approximate size limit" to "Maximum bag capacity" and value from `~35cm × 25cm × 15cm` to `Max 20 litres (~A4 size)`.
- `app/races/silverstone/bag-policy/_client.tsx:81` — Updated inline text paragraph referencing the old cm dimensions to reference the 20-litre limit.
- `app/races/silverstone/bag-policy/_client.tsx:195` — Updated footer note to link directly to `silverstone.co.uk/security`.

### Suggested Changes (manual review needed)
| Finding | Source | Suggested page | Priority |
|---------|--------|---------------|----------|
| **CRITICAL: British GP 2026 is a sprint weekend** — `calendar2026.ts` has `isSprint: false` for British GP (id: 11) but Sky Sports, F1 official, and multiple sources confirm it IS a sprint race in 2026 (confirmed same sources as Chinese, Miami, Canada, Dutch, Singapore — all correctly marked `isSprint: true`). | [Sky Sports](https://www.skysports.com/f1/news/12433/13399562/f1-2026-british-grand-prix-to-become-sprint-event-as-venues-announced-for-next-years-calendar) | `src/data/calendar2026.ts` line 27 + `src/data/silverstoneRaceData.ts` line 17 | **CRITICAL** |
| Alcohol ban — new for 2025, continues for 2026: you cannot bring your own alcohol into Silverstone circuit. Currently not mentioned on bag-policy page. | [Silverstone security page](https://www.silverstone.co.uk/security) | `app/races/silverstone/bag-policy/_client.tsx` | HIGH |
| National Express is official 2026 transport partner. Direct "S1" and "SCB" coach services from London Victoria and Stratford. Megabus runs from 21 UK cities. Shuttle from Milton Keynes, Northampton, Banbury, Oxford Parkway, Coventry. Shuttle costs £7/person return. Prices increase 1 April 2026. | [Silverstone](https://www.silverstone.co.uk/events/formula-1-british-grand-prix/getting-here) | `app/races/silverstone/getting-there/` | HIGH |
| BOXPARK trackside fan park — new for 2026 (street food, entertainment). Not mentioned anywhere in current guides. | [silverstone.co.uk](https://www.silverstone.co.uk/events/formula-1-british-grand-prix) | `app/races/silverstone/first-timer-guide/` | MED |
| Music lineup confirmed: David Guetta, Richard Ashcroft, Chase & Status, Rag'n'Bone Man. Four nights of entertainment across the race weekend. | [Formula1.com](https://www.formula1.com/en/latest/article/silverstone-completes-2026-british-grand-prix-music-line-up-with-three-new.5aFGbfkUctjFMRj0EzEzNF) | `app/races/silverstone/experiences/` | MED |
| Pit Lane Walk: Thursday afternoon with separate ticket required. | [gpdestinations.com](https://gpdestinations.com/trackside-british-f1-grand-prix/) | `app/races/silverstone/experiences/` | LOW |
| F1 Academy making first appearance at Silverstone in 2026. | [Sky Sports](https://www.skysports.com/f1/news/12433/13399562/f1-2026-british-grand-prix-to-become-sprint-event-as-venues-announced-for-next-years-calendar) | `app/races/silverstone/first-timer-guide/` | LOW |
| No fact-check file exists for silverstone — create `docs/fact-checks/silverstone-fact-check.md`. | N/A | `docs/fact-checks/` | MED |

### Content Gaps
- **Sprint format weekend schedule** is not explained anywhere on the silverstone sub-pages. Since 2026 is a sprint weekend, the first-timer guide and possibly packing-guide should explain the different session structure (Sprint Quali on Friday, Sprint Race on Saturday, Grand Prix Qualifying on Saturday).
- **Alcohol prohibition** is not mentioned in the bag-policy page's "What gets rejected most often" section or the prohibited items list.
- **Transport pricing** — the getting-there guide doesn't mention current £7/person return shuttle cost or the April 1 price increase deadline for booking.
- **Getting there from London** — current guide mentions Milton Keynes, Northampton, and Banbury. Could add that National Express runs directly from London Victoria.

### Reddit Highlights
- No 2026-specific Reddit threads found (race is 3+ months away). Tips from 2025 British GP attendees:
  - Bring your own food and non-alcoholic drink — on-site food queues are long and expensive.
  - Arrive early for General Admission to secure a good spot.
  - Friday is underrated — less crowded, good for moving around the circuit.
  - The circuit is very large — comfortable walking shoes essential.
