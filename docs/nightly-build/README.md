# Nightly Race Build Automation

Automated nightly builds of MotoGP race guides, one race per night.

## How it works

1. A Claude Code scheduled task runs at **2:00 AM nightly**
2. It reads `progress.md` to find the next pending race
3. It researches the circuit via web search
4. It builds all 4 Tier 1 sub-pages following the Jerez pattern
5. It creates a fact-check file for human review
6. It runs `verify-race.ts` to catch issues
7. It pushes a branch and opens a PR
8. It updates `progress.md` with the result

## Files

| File | Purpose |
|------|---------|
| `progress.md` | State tracker — which races are done, which is next |
| `BUILD-PROMPT.md` | The full prompt the scheduled task executes |
| `README.md` | This file |

## Managing the queue

### Pause the automation
```bash
# Via Claude Code scheduled tasks
# Disable the nightly-race-build task
```
Or just rename `progress.md` temporarily.

### Skip a race
Change its status from `pending` to `skipped` in `progress.md`. The task
picks the first `pending` row, so it will move to the next one.

### Re-run a failed build
Change the race's status back to `pending` in `progress.md`. Delete the
failed branch if one was created:
```bash
git branch -D build/[slug]
git push origin --delete build/[slug]
```

### Reorder races
Just reorder the rows in the Queue table. The task picks the first `pending`.

### Add R01-R03 to the queue
Add rows to the Queue table in `progress.md`:
```markdown
| R01 | thailand | Grand Prix of Thailand | pending | | |
| R02 | brazil | Grand Prix of Brazil | pending | | |
| R03 | austin | Grand Prix of the Americas | pending | | |
```

## Reviewing PRs

Each PR includes:
- All race page files (hub + 4 sub-pages)
- Updated `guideNav.ts` and `mistakes.ts`
- A fact-check file at `docs/fact-checks/[slug]-fact-check.md`

**Before merging, check:**
1. Fact-check file — verify any HIGH priority claims
2. Copy tone — should feel practical, not generic
3. Mobile rendering — visit `/races/[slug]` on a phone
4. Internal links — click through from hub to each sub-page

## Build order

R05 (Le Mans) -> R06 (Catalunya) -> R07 (Mugello) -> R08 (Hungary) ->
R09 (Brno) -> R10 (Assen) -> R11 (Sachsenring) -> R12 (Silverstone) ->
R13 (Aragon) -> R14 (Misano) -> R15 (Austria) -> R16 (Motegi) ->
R17 (Mandalika) -> R18 (Phillip Island) -> R19 (Sepang) -> R20 (Qatar) ->
R21 (Portimao) -> R22 (Valencia)

18 races total. At one per night, the full queue completes in ~18 days
(assuming no failures).

## Scheduled task ID

`nightly-race-build` — created via Claude Code's scheduled-tasks system.
