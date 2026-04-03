# Skill: Adding a New Race

## When to use this
When adding any new race to GrandPrixPal — from hub page only through
to full guide with all sub-pages.

## Read first
- `CLAUDE.md` (always, every session)
- `docs/new-race-checklist.md` (verify completion against this)
- `/app/races/miami-2026/page.tsx` — the reference hub page pattern
- `/app/races/miami-2026/packing-guide/` — the reference sub-page pattern
- `src/data/calendar2026.ts` — where race metadata lives
- `src/lib/guideNav.ts` — where available sub-pages are declared

---

## Phase order

Always build in this order. Do not skip phases.

1. Data first (nothing else works without it)
2. Hub page
3. Sub-pages (in checklist order)
4. Mistakes entry
5. Navigation and linking
6. Verify with checklist

---

## Data rules

- Race slug format: `[location]-2026` e.g. `monaco-2026`, `usa-austin-2026`
- Add to `calendar2026.ts` — this is the source of truth for dates, round,
  isSprint, location
- Add to `races2026.ts` slugMap for circuit name
- **Never redeclare** startDate, isSprint, or round in the race data file —
  always derive using `getRaceBySlug()`
- Add GetYourGuide tour ID to `offers.ts`
- Add to `guideNav.ts` with ONLY the sub-pages you are about to build —
  do not pre-add sub-pages that don't exist yet
- Add 3-5 race-specific FAQ items to `src/data/raceFaqs.ts` (the
  centralized FAQ data file — these power FAQPage schema on all hub pages)
- Add camping data to `src/data/campingData.ts` if the circuit has a
  camping culture (e.g. Mugello, Assen, Sachsenring, Le Mans, Phillip
  Island, Silverstone, Aragon-type circuits)
- Add Moto2/Moto3/MotoE session times to `src/data/sessionTimes.ts`
  if not already present for this circuit's timezone template

---

## Hub page rules

- Copy the pattern from `miami-2026/page.tsx` — not from older pages
- Use `RaceHubPageWrapper` — do not write boilerplate from scratch
- The _client.tsx should be the 5-line pattern unless custom logic is needed
- OG image path format: `/images/og/[slug].jpg`
- Canonical URL format: `https://www.grandprixpal.com/races/[slug]`
- JSON-LD type: `SportsEvent`

---

## Sub-page rules

- Each sub-page needs both `page.tsx` (server) and `_client.tsx` (client)
- `page.tsx` handles only: metadata, JSON-LD, imports `_client.tsx`
- `_client.tsx` handles: all rendering, any Lucide icons, usePathname
- Never import Lucide icons in `page.tsx`
- Metadata title format: `"[Topic] at the [Race Name] | GrandPrixPal"`
- Check `miami-2026/[sub-page]/` for the exact file structure before writing

---

## guideNav.ts rules

- Only add a sub-page slug here when the page.tsx file physically exists
- This file drives the sub-page nav — a missing page = broken tab
- A pre-added page = broken link
- After adding pages, verify the nav renders correctly on both a full-guide
  race (miami-2026) and the new race

---

## Mistakes entry

- Add all 5 mistakes for the new race in `src/lib/mistakes.ts`
- Each needs: detail, level, linkLabel, linkPath
- linkPath must point to a page that exists — check before adding
- Race-specific detail should be ~70% same concept, ~30% circuit-specific
- Level guide: critical = will ruin the day, moderate = worth knowing,
  minor = nice to have

---

## Do not

- Do not hardcode sub-page lists anywhere except `guideNav.ts`
- Do not redeclare race dates or isSprint in race data files
- Do not add `localGuideLinks` to any race data file (legacy pattern, removed)
- Do not create a mistakes sub-page before the other sub-pages exist
  (the mistakes page links to them — they need to exist first)
- Do not render a sub-page nav tab for a page that doesn't exist
- Do not copy from an older non-refactored race page (spain-barcelona,
  silverstone) — always use miami-2026 as the reference

---

## Final check (run before marking complete)

Paste this into the session:
> "Read docs/new-race-checklist.md and verify [slug] is complete.
> Report what's done, what's missing, and what needs to be built."

Additional SEO checks:
- Verify FAQPage schema on hub page via Rich Results Test
- Verify camping section renders on hub page (if applicable)
- Verify race appears on `/cheapest-races` (if cost data exists)
