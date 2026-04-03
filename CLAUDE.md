# GrandPrixPal — Claude Code Instructions

Read this file at the start of every session before writing any code.

---

## What this project is

GrandPrixPal (grandprixpal.com) is an F1 race travel guide site targeting
first-time race attendees and international fans. It covers logistics that
official sources don't — transport realities, bag policies, packing guides,
sightline comparisons, and common mistakes.

The site's content strength is: **"Here's how not to screw this up"** — not
race results or news. Every page should feel practical and specific, not
generic.

---

## Tech stack

- **Framework:** Next.js 14 App Router
- **Styling:** Tailwind CSS + shadcn-ui
- **Hosting:** Vercel
- **DNS:** Cloudflare
- **Affiliates:** Amazon Associates (via Geniuslink), GetYourGuide (partner ID: 9GLTCAY)
- **Analytics:** Google Search Console verified via DNS TXT record

---

## Architecture patterns — read before writing any component

### The server/client split (`_client.tsx`)

Lucide icons and any client hooks CANNOT cross the Next.js server-to-client
serialization boundary. The pattern used everywhere on this site:

- `page.tsx` — server component, handles metadata and JSON-LD only
- `_client.tsx` — client component with `'use client'` directive, handles
  all rendering, icons, and interactivity

**Always check for an existing `_client.tsx` before adding any Lucide icon
or `useState`/`usePathname` usage to a page.**

### Race hub pages

After consolidation, race hub pages use a shared `RaceHubPageWrapper`
server component. When creating a new race, copy the pattern from
`/app/races/miami-2026/page.tsx` — do not copy older un-refactored pages.

### Sub-page routing

Each race has sub-pages at `/races/[slug]/[sub-page]`. The available
sub-pages per race are defined in `src/lib/guideNav.ts` — this is the
single source of truth. Do NOT use or recreate `localGuideLinks` in race
data files (this was a legacy pattern that has been removed).

---

## Data sources — what owns what

| Data | Source of truth |
|------|----------------|
| Race slugs, dates, isSprint, round | `src/data/calendar2026.ts` |
| Circuit names, locations | `src/data/races2026.ts` (slugMap) |
| Available sub-pages per race | `src/lib/guideNav.ts` |
| Mistakes content | `src/lib/mistakes.ts` |
| GetYourGuide tour IDs, currency helpers | `src/data/offers.ts` |
| Grandstand data | `src/data/grandstandData_all2026.ts` |
| FAQ data (all races) | `src/data/raceFaqs.ts` |
| Camping data (7 circuits) | `src/data/campingData.ts` |
| Session times (all classes) | `src/data/sessionTimes.ts` |
| Current season year | `src/lib/season.ts` |

**When creating new race data files:** derive `startDate`, `isSprint`, and
`round` from `getRaceBySlug()` — do not redeclare them in the race data file.

---

## Copy and tone rules

- Practical, specific, no padding
- No "ultimate guide" or "everything you need to know" framing
- No generic AI-sounding sentences
- Write for someone who has just bought a ticket and is figuring out logistics
- **Never rewrite or paraphrase copy that is marked "use verbatim"**
- Race-specific mistake details should be ~30% unique content vs the generic
  version — not a copy-paste

---

## What NOT to do

- Do not hardcode sub-page lists — always derive from `guideNav.ts`
- Do not redeclare race dates or sprint status in race data files
- Do not add `localGuideLinks` to any data file (legacy pattern, removed)
- Do not put Lucide icons in server components — use `_client.tsx` pattern
- Do not rewrite copy that is explicitly provided — use it verbatim
- Do not create a tab, page, or nav link for a sub-page that doesn't exist yet
- Do not run both Phase 1 and Phase 2 of a consolidation in the same pass
  without verifying Phase 1 first
- Do not emit JSON-LD twice — see rule below

## JSON-LD — never emit twice

When using `RacePageTemplate` inside a `_client.tsx`, always pass `skipJsonLd`:
```tsx
<RacePageTemplate data={xxxRaceData} skipJsonLd />
```

The `page.tsx` server component handles JSON-LD via `buildRaceJsonLd`.
`RacePageTemplate` also emits JSON-LD by default — `skipJsonLd` prevents
the duplicate.

Every `_client.tsx` that uses `RacePageTemplate` must have `skipJsonLd`
unless it has no corresponding JSON-LD in `page.tsx` (which should never
be the case for a properly refactored hub page).

---

## SEO priorities

- Target hyper-specific post-booking logistics queries
- Every sub-page needs a proper `<title>` and meta description
- Title format: `"[Topic] at the [Race Name] | GrandPrixPal"`
- The `/mistakes` hub page and race-specific `/mistakes` sub-pages are
  a primary SEO strategy — internal linking between them is intentional
- The `id="mistakes"` anchor must be consistent across all race pages

---

## Affiliate setup

- Amazon Associates links go through Geniuslink for geo-routing
- GetYourGuide partner ID: `9GLTCAY` — tour IDs are in `src/data/offers.ts`
- Do not add affiliate links to pages that don't have a full guide yet
- GetYourGuide API access requires 100k monthly visits — use static IDs for now

---

## Current races with full guides

Miami, Montreal, Monaco, Las Vegas — full sub-pages including mistakes.
Silverstone, Monza, Singapore, Austin — partial guides.
All other races — hub page only (Race, Planner, Route, Experiences).

---

## Before finishing any task

1. No TypeScript errors
2. No hardcoded sub-page lists
3. No broken internal links
4. `_client.tsx` pattern used correctly for any client-side code
5. New pages have correct metadata (title, description, canonical)
6. If touching the sub-page nav — test against a full-guide race (Miami)
   AND a partial-guide race (Monaco) to confirm missing pages don't render
7. Run `npx ts-node scripts/verify-race.ts [slug]` and fix all failures
   before marking any race as complete.


## Key docs
- `docs/backlog.md` — current priorities
- `docs/build-queue.md` — prompts for current sprint
- `docs/new-race-checklist.md` — use when adding any new race
- `docs/seo-architecture.md` — SEO structure, structured data map,
  internal linking rules, and evergreen URL strategy

## Sitemap

Auto-generated from `guideNav.ts` and `races2026.ts`.
When adding a new race's sub-pages to the sitemap:
add the race slug to `RACE_GUIDE_PAGES` in `guideNav.ts`.
No other changes needed.
After any new race build, resubmit sitemap in Google Search Console.

## Fact-check dump process

After building any race with web research, always
create a fact-check file at:
docs/fact-checks/[slug]-fact-check.md

This file is for human review — not part of the site.
Format is specified in docs/fact-check-template.md.

---

## Race Planner Widget

The "Plan Your First Race" widget is a multi-state client component built in
`app/components/race-planner/`. All logic lives in `app/lib/race-planner-utils.ts`.

### File locations
| File | Purpose |
|------|---------|
| `app/components/race-planner/RacePlannerWidget.tsx` | Outer shell + state machine |
| `app/components/race-planner/PlannerInputForm.tsx` | City input, budget slider, expander |
| `app/components/race-planner/LoadingState.tsx` | Spinner + rotating copy |
| `app/components/race-planner/RaceCardFree.tsx` | Card 1 — fully unlocked |
| `app/components/race-planner/RaceCardLocked.tsx` | Cards 2–3 — gated (blurred cost, truncated insight) |
| `app/components/race-planner/RaceCardFull.tsx` | Cards 2–3 — post-email unlock |
| `app/components/race-planner/EmailGate.tsx` | Inline gate between card 1 and cards 2–3 |
| `app/components/race-planner/CostBreakdownTable.tsx` | Reusable cost table with F1 premium tooltip |
| `app/components/race-planner/InsightBlock.tsx` | Insight paragraph (full or truncated) |
| `app/components/race-planner/SurpriseMe.tsx` | Surprise path — single fully unlocked card |
| `app/lib/race-planner-utils.ts` | Ranking, currency detection, budget logic |
| `app/data/race-planner-config.json` | Single source of truth for all race data |

### Rules — do not break these
- All race data comes from `race-planner-config.json`. Never hardcode race data in components.
- Currency is auto-detected from city input via `detectRegion()` → `getCurrency()`.
  Europe → GBP, everything else → USD. Default is USD, not GBP.
- Budget slider values are in the detected display currency.
  Always convert to GBP via `sliderToGBP()` before passing to ranking logic.
- Ranking uses `rankRaces()` from utils. If first-timer pill is selected, pass
  `isFirstTimer: true` — this swaps in the `firstTimer` weight profile.
- Card 1 is always fully unlocked (affiliate CTAs visible). Cards 2 and 3 are
  gated until email submit. Email gate sits inline between card 1 and card 2 —
  never full-screen takeover.
- Email gate copy must say **"Unlock your other 2 matches"** — not "subscribe".
- On email submit, call `handleEmailCapture(email)` (placeholder, async fire-and-forget)
  then immediately unlock cards 2 and 3 — do not wait for any response.
- Surprise Me filters by `totalCost <= budget` before random selection.
  If no races match, pick cheapest and add "Stretch goal" badge.
- The `f1Premium` tooltip explains race-week markup — keep it, it builds trust.

### Affiliate URL format
- Expedia: `https://www.expedia.com/Hotels-In-[expediaSearch]?affcid=GRANDPRIXPAL`
- GetYourGuide: `https://www.getyourguide.com/[gyg]/?partner_id=GRANDPRIXPAL`
- Values for `[expediaSearch]` and `[gyg]` come from each race's `affiliates` object in the config.

### Homepage placement
Widget is imported in `app/page.tsx` and rendered between `<Navbar />` and `<HomePageClient />`.
It is a `'use client'` component — the import in `page.tsx` (server component) is fine
because Next.js handles the boundary automatically.

### Build prompt corrections — override these when using the spec prompt
The spec prompt (`docs/FEATURE_race-planner-widget.md`) was written before the project
conventions were locked. When following it, apply these corrections:

| Prompt says | Actual project uses |
|-------------|---------------------|
| `.jsx` / `.js` file extensions | `.tsx` / `.ts` — this is a TypeScript project |
| `/components/race-planner/` | `app/components/race-planner/` |
| `/lib/race-planner-utils.js` | `app/lib/race-planner-utils.ts` |
| `/data/race-planner-config.json` | `app/data/race-planner-config.json` |
| `app/page.jsx` | `app/page.tsx` |
| Fonts: Barlow / Barlow Condensed | Fonts: `font-display` (Rajdhani/Oswald) and `font-body` (Space Grotesk) — defined as CSS vars, use Tailwind classes `font-display` and `font-body` |
| Colors: `#0A0A0A`, `#E8003D`, `#141414` | Use Tailwind semantic classes: `bg-background`, `bg-primary`, `bg-card`, `text-foreground`, `text-muted-foreground`, `border-border` — never hardcode hex values |

---

## Home page next-race banner

The banner at the top of `app/home-client.tsx` auto-displays the next upcoming
non-cancelled race. No manual swapping needed — it follows `upcomingRaces` order.

### Files
- `app/home-client.tsx` — `RACE_BANNERS` config + `titleVariant` A/B state

### To update for a new race
Add an entry to `RACE_BANNERS` keyed by the race slug:

```ts
'slug-2026': {
  emoji: '🏁',
  titles: ['Title variant A.', 'Title variant B.'],  // optional A/B test
  tip: "One sentence of the key logistics gotcha.",
  tipLink: { label: 'Link text', href: '/races/slug-2026/getting-there' },
  secondaryLink: { label: '👜 Secondary CTA', href: '/races/slug-2026/bag-policy' }, // optional
},
```

If no entry exists for the next race, a generic "Race week is coming up" banner shows.

### A/B testing
- `titleVariant` (0 or 1) is randomly assigned on mount via `useState(() => Math.random() < 0.5 ? 0 : 1)`
- Clicking "Full guide →" fires `track('banner_cta_click', { race, variant })` to Vercel Analytics
- View results: Vercel dashboard → Analytics → Events → `banner_cta_click` → filter by `variant`
- Only races with a `titles` array in `RACE_BANNERS` run the test; others show a fixed headline

### Cancelled races
Add slugs to `CANCELLED_RACES` at the top of `home-client.tsx` to skip them in the banner.

---

## Skills (read the relevant one before starting a task)
- `skills/new-race.md` — adding any new race
- `skills/new-subpage.md` — adding any sub-page to an existing race
- `skills/copy-and-tone.md` — writing or reviewing any copy
- `skills/seo-page.md` — creating any standalone SEO-targeted page
- `skills/verify-race.md` — verifying a race is complete and correct