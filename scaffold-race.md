# Skill: Scaffolding a New Race

## When to use this
When starting a new race from scratch. Run the scaffold script first,
then fill in circuit-specific content. Never create race files manually.

---

## The workflow (3 steps)

### Step 1 — Scaffold
```bash
npx tsx scripts/scaffold-race.ts silverstone-2026 "British Grand Prix"
```

This creates:
- `app/races/silverstone-2026/page.tsx` + `_client.tsx`
- All 6 sub-page folders, each with `page.tsx` + `_client.tsx`
- Adds silverstone-2026 to `guideNav.ts`
- Adds a placeholder entry to `calendar2026.ts`

### Step 2 — Fill in TODOs
The generated files are pre-populated from the miami-2026 template
with miami-specific content flagged as `/* TODO */`.

Tell Claude Code:
```
Read skills/new-race.md and skills/new-subpage.md.
Search app/races/silverstone-2026 for all TODO comments.
Replace each one with correct content for the British Grand Prix.
Also complete the placeholder entry in calendar2026.ts.
```

### Step 3 — Verify
```bash
npx tsx scripts/verify-race.ts silverstone-2026
```

Fix every ❌ failure. Zero failures = race is complete.

---

## Package.json scripts

```json
"scaffold": "tsx scripts/scaffold-race.ts",
"verify": "tsx scripts/verify-race.ts --all",
"verify:race": "tsx scripts/verify-race.ts"
```

Usage:
```bash
npm run scaffold silverstone-2026 "British Grand Prix"
npm run verify:race silverstone-2026
```

---

## What the scaffold does NOT do

- Does not create `src/data/[race]RaceData.ts` — do this manually
- Does not add GetYourGuide IDs to `offers.ts` — add these manually
- Does not add mistakes entries to `mistakes.ts` — add these manually
- Does not write circuit-specific copy — all content is TODO placeholders

These are left manual because they require real knowledge of the circuit.
The scaffold handles structure so you focus on content.

---

## Flags

`--force` — overwrite existing files. Use with caution.
```bash
npx tsx scripts/scaffold-race.ts monaco-2026 "Monaco Grand Prix" --force
```

---

## If the template race (miami-2026) changes

The scaffold copies directly from `app/races/miami-2026/` at runtime.
If miami-2026 sub-pages are updated, future scaffolds automatically
get the updated structure. No changes needed to the script.

---

## Adding a new race — full checklist

After scaffolding, work through docs/new-race-checklist.md:
```
Read docs/new-race-checklist.md.
Verify silverstone-2026 against every item.
Report what's done, what's missing.
```
