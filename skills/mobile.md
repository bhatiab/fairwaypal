# Skill: Mobile-First Development

## When to use this
Read this skill whenever building or modifying any page on GrandPrixPal.
Mobile is the primary viewport. Every page must work on 390px before
anything else is considered done.

---

## The rule

**Build for 390px first. Scale up to desktop. Never the reverse.**

Most GrandPrixPal traffic comes from Reddit, TikTok, and Pinterest —
all mobile. A page that looks great on desktop but breaks on mobile
is a broken page.

---

## The 6 mobile rules — all are required, not optional

### 1. No horizontal scroll at 390px
The viewport must never scroll horizontally. This is the most common
mobile failure on the site.

How to check:
```css
/* Add temporarily to debug — remove before committing */
* { outline: 1px solid red; }
```
Any element wider than the viewport will be immediately visible.

Common causes:
- Fixed-width elements (`width: 800px` etc.)
- `min-width` on flex children without `overflow: hidden`
- Tables without `overflow-x: auto` wrapper
- `grid-template-columns` without `minmax(0, 1fr)`

Fix pattern for grids:
```tsx
// Wrong
className="grid grid-cols-2"

// Right — prevents children from overflowing
className="grid grid-cols-2 [&>*]:min-w-0"
// or
style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}
```

---

### 2. Text readable without zooming (min font size: 16px body)

No body text below 16px. No supporting text below 13px.
Never use `text-xs` (12px) for anything a user needs to read.

Tailwind reference:
- `text-xs` = 12px — only for labels and badges, never body copy
- `text-sm` = 14px — supporting text, captions
- `text-base` = 16px — minimum for body copy
- `text-lg` / `text-xl` — headings

On iOS, any input with `font-size < 16px` triggers auto-zoom.
Always set `text-base` or larger on form inputs.

---

### 3. Tap targets minimum 44px height

Every interactive element (buttons, links, nav tabs, cards) must be
at least 44px tall. This is Apple's HIG minimum and prevents
mis-taps on mobile.

```tsx
// Wrong
<button className="h-8 px-3">Click me</button>

// Right
<button className="h-11 px-4">Click me</button>  // h-11 = 44px
```

For links that look like text, add padding:
```tsx
<a className="py-3 block">Link text</a>  // py-3 = 12px top + bottom = 48px total
```

Nav tabs in RaceSubnav must meet this — check after any subnav changes.

---

### 4. Sub-page nav sticky and visible on scroll

The RaceSubnav must:
- Stick below the site header (not overlap it)
- Remain visible while scrolling through content
- Show the active tab without requiring horizontal scroll to find it
- Not cover page content (add `scroll-margin-top` to section anchors)

After any change to RaceSubnav or page layout, verify:
```
Open /races/miami-2026/getting-there on mobile
Scroll down — nav should remain visible at top
Active tab "Getting There" should be visible without swiping
```

Required CSS on content below the nav:
```tsx
// On the first content element after the nav
className="scroll-mt-24"  // adjust value to match nav height
```

---

### 5. Tier 1 cards stack correctly (2-column on mobile)

The race hub page Tier 1 cards must:
- Show as a 2-column grid on mobile (390px)
- Each card must be fully readable without truncation
- Card text must not overflow or wrap in a way that breaks layout

```tsx
// Correct pattern
className="grid grid-cols-2 gap-3 [&>*]:min-w-0"

// On mobile each card gets ~183px width at 390px with gap
// Card title must fit in ~183px — keep titles short
```

If a card title is longer than ~20 characters, it will wrap.
That's fine — but test it doesn't break the card height or layout.

---

### 6. Images don't overflow viewport

All images must have `max-width: 100%` or Tailwind `max-w-full`.
Next.js `<Image>` components handle this automatically when using
`width` + `height` props or `fill` with a sized container.

Never use bare `<img>` without width constraints.

```tsx
// Wrong
<img src="/track.jpg" width={800} />

// Right
<Image src="/track.jpg" width={800} height={400} className="w-full h-auto" />
```

---

## Manual check process (run after every page build)

Open the page in Chrome DevTools at 390px × 844px (iPhone 14 preset)
or use the actual device if available.

Check in this order:
1. Scroll horizontally — nothing should move
2. Read body copy — comfortable without zooming?
3. Tap every link and button — comfortable tap target?
4. Scroll down — does the subnav stay visible and correct?
5. Check Tier 1 cards on hub page — 2-column, no overflow
6. Tap any image — does it stay within the viewport?

If any check fails, fix before marking the page done.

---

## Telling Claude Code to check mobile

Add this to any build prompt:
```
After building, verify mobile compliance against skills/mobile.md.
Check all 6 rules for the pages you've built.
Fix any violations before finishing.
```

Or for a specific check:
```
Open app/races/monaco-2026/_client.tsx and check for any
patterns that would cause horizontal scroll on 390px.
Fix any found.
```

---

## Playwright automated checks (coming later)

When the site is stable, `scripts/check-mobile.ts` will automate
all 6 checks using a headless browser. Until then, use the manual
process above.

The script will be activated by running:
```bash
npm run check-mobile monaco-2026
npm run check-mobile --all
```

See `scripts/check-mobile.ts` — currently scaffolded, not yet active.
