# Skill: Creating a New Sub-Page

## When to use this
When adding any sub-page under `/races/[slug]/` — packing guide,
getting there, bag policy, what to wear, first-timer guide, mistakes,
experiences, planner, or route.

## Read first
- `CLAUDE.md` (always)
- The equivalent sub-page for `miami-2026` as a structural reference
  e.g. building a packing guide → read `miami-2026/packing-guide/`
- `src/lib/guideNav.ts` — add this page here when done

---

## File structure (every sub-page needs both files)

```
/app/races/[slug]/[sub-page]/
  page.tsx       ← server component, metadata only
  _client.tsx    ← client component, all rendering
```

### page.tsx — what goes here
- `export const metadata` with title, description, canonical
- JSON-LD if needed (use `skipJsonLd` prop if handled by wrapper)
- Import and render `_client.tsx` component
- Nothing else — no JSX, no icons, no hooks

### _client.tsx — what goes here
- `'use client'` directive at top
- All page content and layout
- Any Lucide icon imports
- Any hooks (usePathname, useState etc.)
- Props from page.tsx if needed

---

## Metadata format

```tsx
export const metadata: Metadata = {
  title: '[Topic] at the [Race Name] | GrandPrixPal',
  description: '[One sentence, practical, specific to this circuit]',
  alternates: {
    canonical: 'https://www.grandprixpal.com/races/[slug]/[sub-page]',
  },
}
```

Title patterns by sub-page type:
- Packing: `"What to Pack for the [Race Name] | GrandPrixPal"`
- Getting there: `"Getting to the [Race Name]: Transport Guide | GrandPrixPal"`
- First-timer: `"First-Timer's Guide to the [Race Name] | GrandPrixPal"`
- Bag policy: `"[Race Name] Bag Policy | GrandPrixPal"`
- What to wear: `"What to Wear to the [Race Name] | GrandPrixPal"`
- Mistakes: `"Common Mistakes at the [Race Name] | GrandPrixPal"`

---

## Content structure by sub-page type

### First-timer guide
1. Intro (2–3 sentences, practical tone — see copy-and-tone skill)
2. What to expect (race weekend overview)
3. Race day flow (arrival, session timings, what changes each day)
4. Common questions (3–5 FAQ items specific to this circuit)
5. Internal link → mistakes sub-page

### Getting there
1. Intro (what's different about this circuit's transport)
2. Options ranked by practicality (not alphabetically)
3. Post-race exit — this is always the hardest part, give it real detail
4. Parking if relevant
5. Internal link → mistakes sub-page (transport mistake)

### Packing guide
1. Intro (weather reality for this specific circuit and time of year)
2. Essentials (non-negotiable items for this circuit)
3. Comfort items (circuit-specific — heat, cold, walking distance)
4. What not to bring (bag policy constraints)
5. Amazon Associates links via Geniuslink for specific products
6. Internal link → bag policy sub-page

### Bag policy
1. Intro (one sentence: strict/moderate/relaxed + clear bag rule yes/no)
2. Exact dimensions (find the official source, link to it)
3. Clear bag rule — yes or no, and which enclosures if zone-specific
4. What gets rejected most often
5. Storage options if bag is rejected (lockers, car etc.)

### What to wear
1. Weather for this circuit and month (specific, not generic)
2. Race day outfit by session (Friday more casual, Sunday more practical)
3. What to avoid (circuit-specific — heels at Monaco hills, etc.)
4. Amazon Associates links via Geniuslink if relevant

### Mistakes
1. Use verbatim intro paragraph from `docs/copy/mistakes-intros.md`
2. Render `<RaceMistakes raceSlug="[slug]" raceName="[name]" />`
3. Section must have `id="mistakes"` — do not change this
4. "← See all first-time F1 mistakes" link to `/mistakes`
5. Do not build this page before getting-there and packing exist
   (mistakes links to them — they must exist first)

---

## After building the page

1. Add the sub-page slug to `src/lib/guideNav.ts` for this race
2. Verify the sub-page nav tab appears and is active on this page
3. Verify the tab does not appear on races that don't have this sub-page
4. Check the page renders on 390px mobile without horizontal scroll
5. Confirm metadata title and description are set correctly

---

## Do not

- Do not import Lucide icons in `page.tsx` — only in `_client.tsx`
- Do not copy from an older page that predates the _client.tsx pattern
- Do not add the sub-page to `guideNav.ts` before the page exists
- Do not write generic content — every section should have
  circuit-specific detail
- Do not invent transport or logistics information — if unsure,
  write a placeholder and flag it for review
- Do not rewrite copy that is explicitly provided as verbatim
