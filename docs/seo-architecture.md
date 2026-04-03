# SEO Architecture — GP Moto Pal

Reference doc for Claude Code sessions. Read this when working on
SEO-related pages, structured data, or new race builds.

---

## Evergreen URL Strategy

URLs are **year-free** so they accumulate link equity permanently:
- `/calendar` (not `/calendar-2026`)
- `/cheapest-races` (not `/cheapest-races-2026`)
- `/first-time` (not `/first-motogp-race-2026`)

**Titles, H1s, and meta descriptions include the year** to capture
seasonal search intent ("MotoGP calendar 2026"). The year comes from
a single constant:

```ts
// src/lib/season.ts
export const CURRENT_SEASON = 2026;
```

Change this once each December to update the entire site.

---

## Standalone SEO Pages

| Page | URL | Target queries | Data source |
|------|-----|----------------|-------------|
| Calendar | `/calendar` | "MotoGP calendar", "MotoGP schedule" | `races2026.ts` via `raceUtils.ts` |
| First-Time Hub | `/first-time` | "first MotoGP race", "attending my first MotoGP" | Static content + `raceFaqs.ts` |
| Cheapest Races | `/cheapest-races` | "cheapest MotoGP races", "MotoGP ticket prices" | `raceCosts2026.ts` |

These pages are **not race sub-pages** — they live at the top level
and are not managed through `guideNav.ts`.

Calendar and First Time are in the navbar. Cheapest Races is an SEO
landing page (not in navbar) — linked from calendar, cost pages, and
first-time hub.

---

## Structured Data Map

| Page type | Schemas |
|-----------|---------|
| Race hubs (`/races/[slug]`) | `SportsEvent` + `FAQPage` |
| Hardcoded race hubs (jerez, le-mans, catalunya) | `SportsEvent` + `FAQPage` |
| Calendar (`/calendar`) | `ItemList` + `BreadcrumbList` |
| First-time hub (`/first-time`) | `Article` + `BreadcrumbList` + `FAQPage` |
| Per-circuit first-timer (`/first-time/[slug]`) | `BreadcrumbList` |
| Cheapest races (`/cheapest-races`) | `Article` + `BreadcrumbList` |
| Getting-there sub-pages | `FAQPage` (inline, not centralized yet) |
| Cost sub-pages | None currently |
| Compare pages | None currently |

### FAQ schema

All 22 race hub pages emit FAQPage schema via `getFaqsForRace(slug)`
from `src/data/raceFaqs.ts`. This returns:
1. Race-specific FAQs (3-5 per race)
2. Common MotoGP FAQs (support races, sprint format, paddock access)

When adding a new race, add 3-5 race-specific items to `raceFaqs` in
`raceFaqs.ts`. The common FAQs are appended automatically.

---

## Data File Map

| File | Feeds | Evergreen? |
|------|-------|------------|
| `src/lib/season.ts` | All page titles/meta with year | Yes (change once/year) |
| `src/data/raceFaqs.ts` | All 22 race hubs + first-time hub | Yes (circuit-level) |
| `src/data/campingData.ts` | 7 race hub pages (conditional section) | Yes (circuit-level) |
| `src/data/sessionTimes.ts` | Race schedule displays (all classes) | Yes (format-level) |
| `src/data/calendar2026.ts` | Calendar, race hubs, sitemap | Yearly swap |
| `src/data/races2026.ts` | Calendar, race hubs, sitemap | Yearly swap |
| `src/data/raceCosts2026.ts` | Cost pages, cheapest-races page | Yearly swap |

---

## Internal Linking Rules

- `/calendar` links to every `/races/[slug]`
- `/first-time` links to 4 circuit guides + `/calendar` + `/cheapest-races`
- `/cheapest-races` links to race hubs + `/races/[slug]/costs` + `/calendar` + `/first-time`
- Race hub pages link to cost pages, first-timer guides, and comparisons (when they exist)
- Race hub pages show camping section only when `getCampingBySlug(slug)` returns data
- First-timer guides include paddock access section (via `CircuitData.paddockAccess`)

---

## MotoGP-Specific Content Angles

These are the differentiators that make this site valuable vs generic
travel guides. Every new race should consider these:

1. **Paddock access** — far more accessible than F1. Include in
   first-timer guides and FAQ schema.
2. **Support races** — Moto3, Moto2, MotoE. Full weekend timetable
   in `sessionTimes.ts`. Fans want the complete schedule.
3. **Camping culture** — Mugello, Assen, Le Mans, Sachsenring, Phillip
   Island, Silverstone, Aragon. Data in `campingData.ts`.
4. **Sprint Race format** — Saturday half-distance race. Include in
   common FAQs and first-timer content.
5. **Fan culture** — more intimate than F1, less corporate, rider
   accessibility. This is the editorial voice of the site.

---

## Sitemap

Auto-generated at `app/sitemap.ts`. Includes:
- Homepage (priority 1.0)
- `/calendar` (priority 0.9)
- Race hubs (priority 0.9)
- Cost pages (priority 0.8)
- First-time pages (priority 0.8)
- Compare pages (priority 0.7)
- Tools pages (priority 0.6)
- Static pages including `/first-time` hub and `/cheapest-races` (priority 0.5)

No manual intervention needed when adding races — they're auto-included
via `raceGuides` from `races2026.ts`.
