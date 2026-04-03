# Content Audit Prompt

Paste this into Claude Code to audit for duplication and missing content.
Run this periodically — after every 2-3 races added.

---

```
Read CLAUDE.md before starting. This is a read-only audit.
Do not change any files. Report findings only.

---

AUDIT 1 — Duplicate content across race pages

For each sub-page type (getting-there, packing-guide, first-timer-guide),
scan all races that have that sub-page and check for:

A) Copy-pasted intro paragraphs
   Read the intro paragraph of each race's getting-there/_client.tsx.
   Flag any that are identical or near-identical (>70% same wording).
   These need rewriting with circuit-specific content.

B) Generic sections that appear word-for-word across races
   Look for any paragraph of 3+ sentences that appears in more than
   one race's sub-pages with minimal changes.
   Report: which races, which sub-page, the duplicated text.

C) TODO comments that were never filled in
   Search all _client.tsx files under app/races/ for:
   - "/* TODO"
   - "// TODO"
   - ">TODO:"
   - "placeholder"
   List every file and line number.

---

AUDIT 2 — Missing content pages (pages that need to be built)

For each race in src/lib/guideNav.ts, check which sub-pages
are listed but have empty or stub _client.tsx files.

A stub is defined as a _client.tsx that:
- Contains a <div>TODO</div> or similar placeholder
- Has fewer than 20 lines of JSX content
- Has no real copy (only component imports and return statement)

Report: race slug, sub-page, why it's considered a stub.

---

AUDIT 3 — Pages on disk not in guideNav

Find every folder under app/races/[slug]/ that has a page.tsx
but is NOT listed in guideNav.ts for that race.

These are either:
- Pages that should be added to guideNav (if they have real content)
- Orphaned pages that should be deleted (if they're empty/stubs)

Report each case and which category it likely falls into.

---

AUDIT 4 — Metadata duplication

Check all page.tsx files under app/races/ for:

A) Identical meta descriptions across different pages
   Two pages should never have the same description.
   Flag any duplicates.

B) Titles that don't follow the pattern
   Pattern: '[Topic] at the [Race Name] | GrandPrixPal'
   Flag any that deviate significantly.

C) Missing OG images
   Any page that references an OG image path that doesn't
   exist in the public/images/og/ directory.

---

AUDIT 5 — Internal linking gaps

For each race with a full guide (miami, montreal, monaco, las-vegas):

A) Does the getting-there page link to the mistakes page?
   (It should reference the transport mistake)

B) Does the packing-guide page link to the bag-policy page?
   (Packing and bag policy are closely related)

C) Does every sub-page have a "← Back to [Race Name] guide" link
   or equivalent navigation back to the hub page?

D) Is the race listed in the /mistakes hub page "Mistakes by race" grid?

Report any missing links.

---

OUTPUT FORMAT

For each audit, output:

AUDIT [N] — [Name]
  CLEAN: [list of things that are fine]
  ISSUES:
    - [file path]: [description of issue]
  PRIORITY: HIGH / MEDIUM / LOW

High priority = live pages with missing or duplicate content
Medium priority = stubs that need building
Low priority = minor inconsistencies

Total issue count at the end grouped by priority.
```
