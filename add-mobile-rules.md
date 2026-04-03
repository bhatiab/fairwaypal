Add mobile-first rules to the project. Four changes.

1. Add this section to CLAUDE.md under "Before finishing any task":

---
## Mobile-first requirement

Every page must pass all 6 mobile rules before it is considered done.
Read skills/mobile.md for the full rules. Summary:

- No horizontal scroll at 390px
- No body text below 16px, no supporting text below 13px
- All tap targets (buttons, links, nav) >= 44px height
- Sub-page nav sticky and visible after scrolling
- Tier 1 race hub cards render as 2-column grid on mobile
- No images overflowing viewport width

After building any page, check it at 390px in Chrome DevTools.
Fix all violations before finishing.

When Playwright is active: run `npm run check-mobile [slug]`
Until then: use manual DevTools check per skills/mobile.md
---

2. Add these to package.json scripts:
   "check-mobile": "tsx scripts/check-mobile.ts",
   "check-mobile:all": "tsx scripts/check-mobile.ts --all"

3. Add scripts/check-mobile.ts to the repo
   (file provided separately — do not create from scratch)

4. Add this line to the skills list in CLAUDE.md:
   - `skills/mobile.md` — read for any page build or UI change

5. Add data-tier1-card attribute to the Tier 1 race hub cards
   in the RaceHubPage component so the Playwright check can
   find them when activated:

   Find the Tier 1 card elements in the race hub page component
   and add data-tier1-card="" to each card's outer div.
   Do not change any styling or logic.

6. Add data-subnav attribute to the RaceSubnav component's
   outer nav or div element so the Playwright sticky check
   can find it:

   Find the outermost element in RaceSubnav and add
   data-subnav="" to it.
   Do not change any styling or logic.
