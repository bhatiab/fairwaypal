# Master Race Build Prompt

Read before doing anything:
CLAUDE.md, docs/how-to-create-a-race.md, skills/new-race.md,
skills/new-subpage.md, skills/copy-and-tone.md, skills/mobile.md,
docs/fact-check-template.md

Race to build:
[INSERT RACE CONFIG BLOCK HERE]

---

PHASE 1 — RESEARCH

Run all 8 searches. Do not skip. Do not invent facts.

1. "[circuit name] official spectator guide 2026"
2. "[circuit name] bag policy size limit official"
3. "getting to [circuit name] public transport"
4. "[city] to [circuit] race day transport options"
5. "[city] weather [month] average temperature"
6. "[race name] first timer tips site:reddit.com"
7. "[race name] mistakes first time attending"
8. "[circuit name] parking official 2026"

For each: record URL, key finding, confidence (HIGH/MED/LOW).
If nothing useful found — record that and move on.

---

PHASE 2 — BUILD PAGES

Use only facts from Phase 1. For anything unverified:
write a safe general statement + add `// TODO: verify [claim]`.

Full build (build: "full") — 6 sub-pages:
first-timer-guide, getting-there, packing-guide,
bag-policy, what-to-wear, mistakes

Partial build (build: "partial") — 2 sub-pages:
getting-there, mistakes

For every page follow skills/new-subpage.md.
Canonical URLs use no year: /races/[slug]/[sub-page]

Also update:
- src/lib/mistakes.ts — all 5 IDs for this race
- src/lib/guideNav.ts — add only pages that now exist
- home-client.tsx RACE_OUTCOMES — one research-driven line
  describing the key logistics challenge for this circuit

---

PHASE 3 — FACT-CHECK DUMP

Create docs/fact-checks/[slug]-fact-check.md
using the structure in docs/fact-check-template.md.

Include:
- Every search run (query, URL, useful?)
- Every specific claim used (claim, page, source, confidence)
- Every TODO left in page files (file path + what needs checking)
- One Gemini prompt per LOW/MED confidence claim

---

PHASE 4 — VERIFY

Run: npx tsx scripts/verify-race.ts [slug]
Fix all failures before finishing.

---

DONE. Report:
- Sub-pages built
- Fact-check file path
- TODO count needing Gemini review
- Any verify failures that could not be fixed
