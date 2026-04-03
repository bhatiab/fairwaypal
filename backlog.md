# GrandPrixPal — Backlog

Ordered by priority. Top of each section = do next.
Updated: March 2026.

---

## This week

### verify-race.ts clean run target
Current: 262 passed · 121 failed
Target: 0 failures on races with full guides (miami, montreal,
monaco, las-vegas)
Remaining failures are acceptable gaps on hub-only races —
fix when those races are built.

Immediate fixes needed:
- Relative canonicals on canada-2026 sub-pages (experiences,
  planner, route, mistakes)
- Metadata on silverstone, spain-barcelona, suzuka framework
  pages (experiences, planner, route)

Do not fix guideNav/mistakes gaps for hub-only races —
these are build items, not bugs.

---

## 🟡 Before Miami GP (May 1)

### Monaco full guide
Build all sub-pages for monaco-2026 using new-race-checklist.md.
Priority sub-pages: first-timer, getting-there, packing, bag-policy,
what-to-wear, mistakes.
- Checklist: `docs/new-race-checklist.md`
- Mistakes content: `docs/prompts/monaco-vegas-mistakes-extension.md`
- Intro copy: `docs/copy/mistakes-intros.md`

### Mistakes hub page live
All 4 races (Miami, Montreal, Monaco, Las Vegas) in the
"Mistakes by race" grid before homepage rebuild goes live.

---

## 🟢 Queue — no deadline yet

### Las Vegas full guide
Build all sub-pages for las-vegas-2026.
- Checklist: `docs/new-race-checklist.md`
- Mistakes content: `docs/prompts/monaco-vegas-mistakes-extension.md`

### Austin full guide
Build all sub-pages for usa-austin-2026.
- Lower urgency — race is October

### UK travel page
`/f1-travel-from-uk` — targets UK fans, low-competition SEO queries.
Copy is fully written and ready.
- Copy: `docs/copy/uk-page.md`
- Claude Code prompt: create `/app/f1-travel-from-uk/page.tsx` using
  copy verbatim, match metadata pattern from `/mistakes/page.tsx`

### Spa guide
Popular with UK fans. No content yet.
Add after Monaco is complete.

---

## 🔵 Later (post 100k monthly visits)

### GetYourGuide API integration
Currently using static tour IDs from `offers.ts`.
API access requires 100k monthly visits.

### Affiliate optimisation
Not worth touching until traffic is 5k+ monthly.
Current setup: Amazon Associates (Geniuslink), GetYourGuide static links.
Planned additions: ShopStyle Collective, LTK.

### Email list
No mechanism yet. Add after homepage rebuild is live and converting.

### MotoGP expansion
First multi-sport expansion. Use `goRacePal.com` as the sport-agnostic
brand when ready.

---

## 💡 Ideas (not prioritised)

- "Best races for first-timers" comparison page
- "F1 race trip cost calculator" (circuit-specific)
- Reddit engagement playbook (post timing, subreddit targets)
- Pinterest content calendar (automated from existing guides)
- Race trip packing list generator (interactive)

---

