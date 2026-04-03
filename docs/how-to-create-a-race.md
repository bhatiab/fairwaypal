# How to Create a Race — Process Map

Fast reference for the start of any race build session.
Detail lives in the skills files — this is the sequence.

---

## Read before writing anything

1. `CLAUDE.md` — architecture rules, data ownership, what NOT to do
2. `skills/new-race.md` — hub page and data rules
3. `skills/new-subpage.md` — sub-page file structure and metadata formats
4. `skills/copy-and-tone.md` — tone rules, what not to write
5. `skills/mobile.md` — mobile rendering requirements
6. `docs/new-race-checklist.md` — the completion checklist (run at the end)
7. `docs/fact-check-template.md` — format for the fact-check dump

---

## The 8-step process

### Step 1 — Research (before any code)
Search the web for real transport, bag policy, and logistics info.
Log every search: URL, what it found, confidence level (HIGH/MED/LOW).
If you can't find it — don't invent it. Write a placeholder + TODO comment.

### Step 2 — Data files
- Add race to `src/data/calendar2026.ts` (slug, dates, isSprint, round)
- Add to `src/data/races2026.ts` slugMap (circuit name)
- Add GetYourGuide tour ID to `src/data/offers.ts`
- Do NOT redeclare startDate, isSprint, or round in the race data file —
  derive them with `getRaceBySlug()`

### Step 3 — Hub page
Copy pattern from `app/races/miami-2026/page.tsx` (not older pages).
Use `RaceHubPageWrapper`. Hub page + `_client.tsx` + race data file.

### Step 4 — Sub-pages
Each sub-page needs two files: `page.tsx` (metadata only) + `_client.tsx` (all rendering).
Build order: first-timer-guide → getting-there → packing-guide → bag-policy → what-to-wear → mistakes.
Build mistakes last — it links to the others.

Full build = all 6. Partial build = getting-there + mistakes only.

### Step 5 — mistakes.ts
Add all 5 mistake IDs for this race:
`transport-exit`, `bag-policy`, `weather`, `friday-practice`, `ticket-sightlines`
Each needs: `detail`, `level`, `linkLabel`, `linkPath`.
Check every `linkPath` resolves to a file on disk before committing.

### Step 6 — guideNav.ts
Add the race slug and ONLY the sub-page slugs that physically exist.
A pre-added page = broken nav tab. A missing page = invisible tab.
After updating, test nav on miami-2026 (full) AND the new race.

### Step 7 — Fact-check dump
Create `docs/fact-checks/[slug]-fact-check.md` using the template.
List every source searched, every claim used, every TODO left in files.
Write Gemini prompts for anything LOW or MED confidence.
This is for human review — not part of the site.

### Step 8 — Verify
```
npx tsx scripts/verify-race.ts [slug]
```
Fix all failures. Then manually check:
- Hub page renders on 390px mobile without horizontal scroll
- Mistakes sub-page shows all 5 entries with race-specific detail
- `/mistakes` hub page includes this race in the grid
- No TypeScript errors

---

## Common mistakes to avoid

- Copying from older pages (spain-barcelona, silverstone) — always use miami-2026
- Adding a sub-page to `guideNav.ts` before the file exists
- Hardcoding startDate / isSprint in the race data file
- Building mistakes before getting-there exists (it links to it)
- Writing specific numbers (distances, times, temperatures) without a source
- Adding `localGuideLinks` to any data file — this pattern is removed
- Putting Lucide icons in `page.tsx` — they go in `_client.tsx` only

---

## Scripts

| When | Command |
|------|---------|
| Verify one race | `npx tsx scripts/verify-race.ts [slug]` |
| Verify all races | `npx tsx scripts/verify-race.ts --all` |
| Build one race (automated) | `./scripts/build-single-race.sh [slug]` |
| Build all races (automated) | `./scripts/build-all-races.sh` |
