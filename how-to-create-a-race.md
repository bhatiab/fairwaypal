# How to Create a New Race

Complete workflow for adding a new race to GrandPrixPal — from zero
to fully verified, mobile-checked, and SEO-ready.

Last updated: March 2026

---

## Overview

A complete race has 4 layers:

```
1. Data        → calendar, slugMap, offers, guideNav, mistakes
2. Hub page    → the main /races/[slug] page
3. Sub-pages   → first-timer, getting-there, packing, bag-policy,
                 what-to-wear, mistakes
4. Verified    → script clean, mobile checked, content audited
```

Each layer depends on the previous one. Do not skip ahead.

---

## Before you start

Read these files:
```
CLAUDE.md
skills/new-race.md
skills/new-subpage.md
skills/copy-and-tone.md
skills/mobile.md
```

Check what already exists for the race:
```bash
# In Claude Code:
"Audit the current state of [slug] using the audit format
from docs/new-race-checklist.md. Report EXISTS / MISSING /
NEEDS FIXING before writing any code."
```

---

## Step 1 — Scaffold

Run the scaffold script. This creates all files and updates
guideNav.ts and calendar2026.ts automatically.

```bash
npm run scaffold silverstone-2026 "British Grand Prix"
```

What gets created:
```
app/races/silverstone-2026/
  page.tsx                    ← hub page (server component)
  _client.tsx                 ← hub client component
  first-timer-guide/
    page.tsx + _client.tsx
  getting-there/
    page.tsx + _client.tsx
  packing-guide/
    page.tsx + _client.tsx
  bag-policy/
    page.tsx + _client.tsx
  what-to-wear/
    page.tsx + _client.tsx
  mistakes/
    page.tsx + _client.tsx
```

Data files updated:
- `src/lib/guideNav.ts` — race added with all 6 sub-pages
- `src/data/calendar2026.ts` — placeholder entry added

---

## Step 2 — Fill in data files

These require real knowledge of the circuit — do them manually
or give Claude Code specific instructions.

### A) calendar2026.ts
Find the placeholder entry and fill in all TODO fields:
```typescript
{
  id: 11,                          // correct round number
  slug: 'silverstone-2026',
  name: 'British Grand Prix',
  shortName: 'Silverstone',
  location: 'Silverstone, Great Britain',
  circuit: 'Silverstone Circuit',
  startDate: '2026-07-03T11:00:00Z',
  endDate: '2026-07-05T15:00:00Z',
  round: 'Round 11 · Silverstone',
  isSprint: false,
  isUpcoming: true,
}
```

Derive `isSprint` and dates from the official F1 2026 calendar.
Never hardcode these in the race data file — only here.

### B) Create [race]RaceData.ts
```bash
# In Claude Code:
"Copy src/data/miamiRaceData.ts to
src/data/silverstoneRaceData.ts. Replace all Miami-specific
content with Silverstone-specific content. Derive isSprint
and startDate from getRaceBySlug('silverstone-2026') — do
not hardcode them."
```

### C) offers.ts
Add GetYourGuide tour IDs for this circuit.
If IDs aren't known yet, add placeholders with TODO comments:
```typescript
'silverstone-2026': {
  tours: [
    { id: 0, title: 'TODO: Silverstone circuit tour' },
  ]
}
```

### D) mistakes.ts
Add all 5 mistake entries for this race.
All 5 IDs are required: transport-exit, bag-policy, weather,
friday-practice, ticket-sightlines.

Each entry needs:
```typescript
'silverstone-2026': {
  detail: '[circuit-specific detail, ~2 sentences]',
  level: 'critical' | 'moderate' | 'minor',
  linkLabel: '[link text]',
  linkPath: '/races/silverstone-2026/[sub-page]',
}
```

linkPath must point to a page that physically exists.
Run verify-race.ts after adding — it checks this automatically.

---

## Step 3 — Fill in sub-page content

The scaffold generates files pre-populated from the miami-2026
template with miami-specific content marked as `/* TODO */`.

Claude Code prompt:
```
Read CLAUDE.md, skills/new-subpage.md, skills/copy-and-tone.md,
and skills/mobile.md.

Search app/races/silverstone-2026 for all TODO comments.
Replace each one with correct content for the British Grand Prix.

For each sub-page, read the equivalent miami-2026 sub-page
first to understand the structure. Then write Silverstone-specific
content — do not copy Miami content.

After building each page, verify it passes all 6 rules in
skills/mobile.md at 390px before moving to the next page.
```

### Sub-page content requirements

Each page must have circuit-specific content. Generic content
that could apply to any race is a failure. See skills/copy-and-tone.md.

| Sub-page | Primary content focus |
|----------|-----------------------|
| first-timer-guide | Weekend structure, what's unusual about this circuit, race day flow |
| getting-there | Transport options ranked by practicality, post-race exit in detail |
| packing-guide | Weather reality for this circuit + month, comfort specifics |
| bag-policy | Exact size limits, clear bag rule yes/no, what gets rejected |
| what-to-wear | Weather, terrain, dress code reality |
| mistakes | Uses RaceMistakes component — requires mistakes.ts entries |

### Intro paragraph rules
- 2–4 sentences maximum
- First sentence names the specific problem this page solves
- Circuit-specific — not generic
- See docs/copy/mistakes-intros.md for examples of the right tone

---

## Step 4 — Run verification

```bash
npx tsx scripts/verify-race.ts silverstone-2026
```

Required: zero ❌ failures before proceeding.

What it checks:
- guideNav.ts matches files on disk (no phantom or missing entries)
- Metadata complete on every page (title, description, canonical)
- Canonical URLs are absolute (https://www.grandprixpal.com/...)
- mistakes.ts has all 5 entries for the race
- linkPaths in mistakes.ts resolve to real pages
- TypeScript compiles without errors

Fix every failure. Warnings are acceptable if reviewed.

---

## Step 5 — Mobile check

Manual check (always required):
```
Open each page in Chrome DevTools at 390px × 844px.
Check all 6 rules from skills/mobile.md:
  1. No horizontal scroll
  2. Text readable without zooming (body >= 16px)
  3. Tap targets >= 44px
  4. Sub-page nav sticky and visible
  5. Tier 1 cards in 2-column grid (hub page)
  6. Images within viewport
```

Claude Code prompt:
```
Check app/races/silverstone-2026 against all 6 rules in
skills/mobile.md. Report any violations and fix them.
```

Playwright check (when active):
```bash
npm run check-mobile silverstone-2026
```

---

## Step 6 — Content audit

Run the content quality check on each sub-page:
```
Read app/races/silverstone-2026/getting-there/_client.tsx
and audit it against skills/copy-and-tone.md. Report:

1. Generic sections that could apply to any circuit
2. Missing specifics (times, distances, prices, station names)
3. Tone violations (filler, enthusiasm inflation, vague language)
4. Whether intro paragraph is circuit-specific

Do not fix — just report.
```

Run this for each sub-page. Fix anything flagged as generic.

---

## Step 7 — Navigation and linking

```
Confirm:
1. guideNav.ts lists all sub-pages for silverstone-2026
2. RaceSubnav shows correct tabs on each sub-page
3. Active tab highlights correctly on each page
4. Hub page Tier 1 cards link to: first-timer, getting-there,
   packing, mistakes
5. Hub page Tier 2 pills show: bag-policy, what-to-wear,
   experiences, route, planner (only if those pages exist)
6. Homepage outcomeDescriptions map includes silverstone-2026
7. /mistakes hub page "Mistakes by race" grid includes this race
8. Each sub-page links back to /mistakes where relevant
```

Add to homepage outcome descriptions in `/app/page.tsx`:
```typescript
'silverstone-2026': 'Car parks open early. Leave before the podium or wait 2hrs.',
```

---

## Step 8 — Final checklist

Run verify-race.ts one more time:
```bash
npx tsx scripts/verify-race.ts silverstone-2026
```

Then confirm in Claude Code:
```
Read docs/new-race-checklist.md.
Run through every item for silverstone-2026.
Report DONE / MISSING for each.
Only mark the race complete if every required item is DONE.
```

---

## Common mistakes when building races

**Using wrong reference file**
Always use miami-2026 as the reference. Not monaco, not canada.
Monaco and canada may have been built before some patterns were
established.

**Adding sub-pages to guideNav before they exist**
The scaffold adds all 6 sub-pages to guideNav immediately.
If you decide not to build one, remove it from guideNav.ts.
A listed page that doesn't exist = broken tab in the nav.

**Hardcoding dates or isSprint in raceData**
Always derive from getRaceBySlug(). The calendar is the source
of truth. Hardcoded values drift out of sync.

**Generic content**
Every section needs circuit-specific detail. "Transport can be
busy after the race" is not acceptable. "Trains from Coventry
fill within 20 minutes of the flag" is.

**Relative canonical URLs**
Always absolute: `https://www.grandprixpal.com/races/[slug]/[sub-page]`
Never relative: `/races/[slug]/[sub-page]`
The verify script catches this.

**Building mistakes page before sub-pages exist**
The mistakes page links to getting-there, packing, bag-policy.
Those pages must exist first or the links are broken.

---

## Quick reference — npm scripts

```bash
# Scaffold a new race
npm run scaffold silverstone-2026 "British Grand Prix"

# Verify a single race
npm run verify:race silverstone-2026

# Verify all races
npm run verify

# Mobile check (once Playwright is active)
npm run check-mobile silverstone-2026
npm run check-mobile:all
```

---

## File locations

| File | Purpose |
|------|---------|
| `src/data/calendar2026.ts` | Race dates, isSprint, round — source of truth |
| `src/data/races2026.ts` | Circuit names, slugMap |
| `src/data/[race]RaceData.ts` | Race-specific content, FAQs, grandstands |
| `src/lib/guideNav.ts` | Available sub-pages per race — source of truth |
| `src/lib/mistakes.ts` | All 5 mistake entries per race |
| `src/lib/offers.ts` | GetYourGuide tour IDs per race |
| `scripts/scaffold-race.ts` | Creates all files from template |
| `scripts/verify-race.ts` | Checks all technical requirements |
| `scripts/check-mobile.ts` | Playwright mobile checks (when active) |
| `docs/new-race-checklist.md` | Item-by-item completion checklist |
| `skills/new-race.md` | Rules for Claude Code when building races |
| `skills/new-subpage.md` | Rules for Claude Code when building sub-pages |
| `skills/mobile.md` | Mobile-first rules and checks |
| `skills/copy-and-tone.md` | Writing and tone rules |
