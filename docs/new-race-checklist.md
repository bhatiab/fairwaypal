# New Race Checklist

Use this when adding a new race to GrandPrixPal. Claude Code should read
this file and verify every item before marking a race as complete.

---

## How to use

When building a new race, paste this into your Claude Code session:

> "Read docs/new-race-checklist.md and use it to verify [race-slug] is
> complete. Report which items are done, which are missing, and what
> needs to be built."

---

## Phase 1 — Data (do this first, everything else depends on it)

- [ ] Race added to `src/data/calendar2026.ts` with:
  - [ ] `slug` (e.g. `monaco-2026`)
  - [ ] `name` (e.g. `Monaco Grand Prix`)
  - [ ] `round` number
  - [ ] `startDate`, `endDate` (ISO format)
  - [ ] `isSprint: true/false`
  - [ ] `location` (city, country)
  - [ ] `circuit` name
- [ ] Race added to `src/data/races2026.ts` slugMap with circuit name
- [ ] GetYourGuide tour ID added to `src/data/offers.ts`
- [ ] Race slug added to `src/lib/guideNav.ts` with the sub-pages that
  actually exist (only add pages you are about to build)

---

## Phase 2 — Hub page (required for all races)

- [ ] `/app/races/[slug]/page.tsx` created using `RaceHubPageWrapper`
  - [ ] Metadata: title, description, canonical URL, OG image
  - [ ] JSON-LD structured data
  - [ ] Follows pattern from `miami-2026/page.tsx` (not older pages)
- [ ] `/app/races/[slug]/_client.tsx` created if needed
  - [ ] Uses `RacePageTemplate` with `data={xxxRaceData} skipJsonLd`
  - [ ] `'use client'` directive present
- [ ] Race data file `src/data/[race]RaceData.ts` created with:
  - [ ] `atAGlance` section
  - [ ] `schedule` (derived from `getRaceBySlug()`, not hardcoded)
  - [ ] `isSprint` (derived, not hardcoded)
  - [ ] `seatingIntro`
  - [ ] `jsonLd` object
  - [ ] FAQ items
  - [ ] No `localGuideLinks` (use `guideNav.ts` instead)
- [ ] Race hub page renders correctly on mobile (390px viewport)
- [ ] Race hub page shows only sub-page links for pages that exist
- [ ] FAQPage schema included via `getFaqsForRace(slug)` from
  `src/data/raceFaqs.ts` — add 3-5 race-specific FAQ items to `raceFaqs`
- [ ] If circuit has camping culture, add entry to `src/data/campingData.ts`
  (e.g. Mugello, Assen, Sachsenring, Le Mans, Phillip Island, Silverstone,
  Aragon-type circuits)

---

## Phase 3 — Core sub-pages (build in this order)

### First-timer guide
- [ ] `/app/races/[slug]/first-timer-guide/page.tsx`
- [ ] `/app/races/[slug]/first-timer-guide/_client.tsx`
- [ ] Metadata: `"First-Timer's Guide to the [Race Name] | GrandPrixPal"`
- [ ] Covers: what to expect, timing, race day flow
- [ ] Paddock access section populated in `CircuitData.paddockAccess`
- [ ] Internal link → mistakes sub-page

### Getting there
- [ ] `/app/races/[slug]/getting-there/page.tsx`
- [ ] `/app/races/[slug]/getting-there/_client.tsx`
- [ ] Metadata: `"Getting to the [Race Name]: Transport Guide | GrandPrixPal"`
- [ ] Covers: transport options, post-race exit, parking vs shuttle
- [ ] Internal link → mistakes sub-page (transport mistake)

### Packing guide
- [ ] `/app/races/[slug]/packing-guide/page.tsx`
- [ ] `/app/races/[slug]/packing-guide/_client.tsx`
- [ ] Metadata: `"What to Pack for the [Race Name] | GrandPrixPal"`
- [ ] Covers: weather reality, comfort items, circuit-specific needs
- [ ] Amazon Associates links via Geniuslink where relevant

### Bag policy
- [ ] `/app/races/[slug]/bag-policy/page.tsx`
- [ ] `/app/races/[slug]/bag-policy/_client.tsx`
- [ ] Metadata: `"[Race Name] Bag Policy | GrandPrixPal"`
- [ ] Covers: size limits, clear bag rule (yes/no), zone differences

### What to wear
- [ ] `/app/races/[slug]/what-to-wear/page.tsx`
- [ ] `/app/races/[slug]/what-to-wear/_client.tsx`
- [ ] Metadata: `"What to Wear to the [Race Name] | GrandPrixPal"`
- [ ] Covers: weather, dress code, practical clothing

---

## Phase 4 — Mistakes sub-page

- [ ] Race entries added to `src/lib/mistakes.ts` for all 5 mistakes:
  - [ ] Transport
  - [ ] Bag policy
  - [ ] Heat/weather
  - [ ] Skipping Friday practice
  - [ ] Ticket/seat choice
  - [ ] Each entry has: `detail`, `level`, `linkLabel`, `linkPath`
  - [ ] `linkPath` values point to pages that actually exist
- [ ] `/app/races/[slug]/mistakes/page.tsx` created
  - [ ] Metadata: `"Common Mistakes at the [Race Name] | GrandPrixPal"`
  - [ ] Intro paragraph (race-specific, not generic)
  - [ ] `<RaceMistakes raceSlug="[slug]" raceName="[name]" />`
  - [ ] `id="mistakes"` anchor present
  - [ ] "← See all first-time F1 mistakes" link to `/mistakes`
- [ ] `/mistakes` hub page "Mistakes by race" grid updated to include
  this race

---

## Phase 5 — Supporting pages (add when content is ready)

- [ ] `/app/races/[slug]/experiences/page.tsx`
  - [ ] GetYourGuide tours rendered from `offers.ts`
- [ ] `/app/races/[slug]/planner/page.tsx`
- [ ] `/app/races/[slug]/route/page.tsx`

---

## Phase 6 — Navigation and linking

- [ ] `src/lib/guideNav.ts` updated with all sub-pages now built
- [ ] Sub-page nav (RaceSubnav) shows correct tabs for this race
- [ ] No tabs rendered for pages that don't exist
- [ ] Hub page Tier 1 cards show for: first-timer, getting-there,
  packing, mistakes
- [ ] Hub page Tier 2 pills show for: what-to-wear, bag-policy,
  experiences, route, planner
- [ ] Race outcome description added to homepage race list
  (in the outcomeDescriptions map in `/app/page.tsx`)

---

## Phase 7 — SEO and metadata check

- [ ] Every sub-page has unique `<title>` tag
- [ ] Every sub-page has unique meta `description`
- [ ] Every sub-page has `canonical` URL set
- [ ] JSON-LD present on hub page
- [ ] FAQPage schema validates (Google Rich Results Test)
- [ ] Moto2/Moto3/MotoE session times added to `src/data/sessionTimes.ts`
- [ ] Camping section renders if circuit has camping data
- [ ] Race linked from `/cheapest-races` if cost data exists
- [ ] Race linked from `/calendar` (automatic — no action needed)
- [ ] No duplicate metadata across sub-pages
- [ ] Submit new URLs to Google Search Console

---

## Final verification (run before marking complete)

Claude Code should check all of the following:

```
1. /races/[slug] — hub page renders on 390px mobile, no horizontal scroll
2. /races/[slug]/first-timer-guide — active tab highlighted in subnav
3. /races/[slug]/mistakes — all 5 mistakes render with race-specific detail
4. /races/[slug]/getting-there — linked correctly from mistakes transport card
5. /mistakes — race appears in "Mistakes by race" grid
6. No TypeScript errors across all new files
7. No broken internal links (all linkPath values in mistakes.ts resolve)
8. guideNav.ts only lists sub-pages that actually exist
```
