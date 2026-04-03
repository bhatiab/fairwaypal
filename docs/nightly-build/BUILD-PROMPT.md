# Nightly Race Build — Automated Prompt

You are building a new MotoGP race guide for GP Moto Pal. This prompt runs
unattended as a scheduled task. Follow every step exactly.

---

## Step 0 — Read project rules

Read these files before doing anything:
- `CLAUDE.md` — project conventions (MUST follow)
- `skills/new-race.md` — race build skill
- `docs/new-race-checklist.md` — completion checklist
- `docs/fact-check-template.md` — fact-check format

---

## Step 1 — Determine which race to build

Read `docs/nightly-build/progress.md`. Find the first row in the **Queue**
table with status `pending`. That is tonight's race.

Extract from that row:
- `ROUND` (e.g. R05)
- `SLUG` (e.g. le-mans)
- `RACE_NAME` (e.g. Grand Prix of France)

Also read `src/data/races2026.ts` to get:
- `CIRCUIT` name from the slugMap
- `CITY` and `COUNTRY` from the calendar entry
- `DATES` and `START_DATE`
- `IS_SPRINT` and `IS_NEW_CIRCUIT`

If there are no `pending` races, stop and report "All races built."

Update that row's status to `in-progress` and commit just progress.md:
```
git add docs/nightly-build/progress.md
git commit -m "nightly-build: start [SLUG]"
```

---

## Step 2 — Create a build branch

```bash
git checkout master
git pull origin master
git checkout -b build/[SLUG]
```

---

## Step 3 — Research the circuit

Run these web searches and save the key facts you find. You need specific,
verifiable information — not generic filler.

### Required searches (Tier 1 pages):
1. `[CIRCUIT] MotoGP getting there transport parking [YEAR]`
2. `[CIRCUIT] MotoGP bag policy prohibited items`
3. `[CITY] weather [RACE_MONTH] average temperature rainfall`
4. `[CIRCUIT] MotoGP first time tips what to know`
5. `[CITY] airport to [CIRCUIT] transport options`
6. `[CIRCUIT] MotoGP packing essentials what to bring`

### Required searches (Tier 2 pages):
7. `[CIRCUIT] grandstand map best seats MotoGP viewing spots`
8. `[CITY] restaurants food where to eat race weekend`
9. `[CITY] bars nightlife things to do race week`
10. `[CITY] experiences tours things to do tourist attractions`
11. `[CITY] [COUNTRY] cultural highlights local tips`

### What to extract:
- **Transport:** Nearest airports (with codes and distances), shuttle services,
  public transport options, parking situation, post-race exit strategy
- **Bag policy:** Allowed bag sizes, prohibited items, specific rules (caps on
  bottles, food weight limits, camera restrictions)
- **Weather:** Temperature range for race month, rain probability, sun exposure,
  UV index note if relevant
- **First-timer tips:** Gate opening times, key things to know, common surprises
- **Packing:** Circuit-specific gear needs, weather-appropriate clothing
- **Mistakes:** What catches people out at this specific circuit — transport,
  sun, tickets, cash, ear protection, taxi availability
- **Grandstands:** Named grandstands and their locations, price tiers (GA /
  seated / VIP), which corners offer the best overtaking views, GA access zones
- **Food & nightlife:** 2-3 specific named restaurants, any traditional or
  regional food/drink specific to this city, street party culture or nightlife
  areas during race week, nearby towns worth an evening trip
- **Experiences:** Must-do tourist activity or cultural experience specific to
  this city, any notable museums/landmarks/tours, seasonal events that might
  overlap with the race, GetYourGuide-bookable options

If a fact cannot be verified from at least one source, mark it with a
`[UNVERIFIED]` tag in the fact-check file and use conservative/hedged
language in the page copy (e.g. "check the official website for current
bag policy details").

---

## Step 4 — Build the race pages

Follow the Jerez pattern exactly. Read these reference files first:
- `app/races/jerez/page.tsx`
- `app/races/jerez/_client.tsx`
- `app/races/jerez/first-timer-guide/page.tsx` and `_client.tsx`
- `app/races/jerez/getting-there/page.tsx` and `_client.tsx`
- `app/races/jerez/packing-guide/page.tsx` and `_client.tsx`
- `app/races/jerez/mistakes/page.tsx` and `_client.tsx`

### 4a — Update data files

**`src/data/races2026.ts`** — the slugMap entry should already exist for all
22 races. Verify it exists for [SLUG]. If not, add it.

**`src/lib/guideNav.ts`** — add all Tier 1 + Tier 2 pages:
```typescript
"[SLUG]": [
  { slug: "first-timer-guide",  label: "First-Timer",    star: true },
  { slug: "getting-there",      label: "Getting There"              },
  { slug: "packing-guide",      label: "Packing"                    },
  { slug: "bag-policy",         label: "Bag Policy"                 },
  { slug: "grandstands",        label: "Grandstands"                },
  { slug: "experiences",        label: "Experiences"                },
  { slug: "food-and-nightlife", label: "Food & Nightlife"           },
  { slug: "mistakes",           label: "Mistakes"                   },
],
```

**Important:** Only add a slug here once its page files physically exist.
The guide nav pill renders a link immediately — a missing page = broken link.

### 4b — Hub page

Create `app/races/[SLUG]/page.tsx`:
- Server component with metadata, JSON-LD (SportsEvent schema)
- Import and render `_client.tsx`
- Title: `"[RACE_NAME] at [CIRCUIT] — Fan Travel Guide | GP Moto Pal"`
- Canonical: `https://gpmotopal.com/races/[SLUG]`
- FAQ items: 3-4 questions specific to THIS circuit (not generic)
- Event schema with correct coordinates, dates, location

Create `app/races/[SLUG]/_client.tsx`:
- `'use client'` directive
- Uses `getRaceBySlug('[SLUG]')!`
- Reads `RACE_GUIDE_PAGES['[SLUG]']` for nav pills
- Sections: hero, guide nav, highlights, schedule, FAQ
- Uses ONLY Tailwind semantic classes (`bg-background`, `text-foreground`, etc.)
- Footer at the end

### 4c — First-timer guide

Create `app/races/[SLUG]/first-timer-guide/page.tsx`:
- Metadata title: `"[SLUG] MotoGP First-Timer Guide — What to Expect | GP Moto Pal"`
- Canonical: `https://gpmotopal.com/races/[SLUG]/first-timer-guide`

Create `app/races/[SLUG]/first-timer-guide/_client.tsx`:
- Data arrays: WEEKEND_STRUCTURE, CLASSES_EXPLAINED, TIPS
- Weekend structure: Friday (practice), Saturday (qualifying + sprint race),
  Sunday (warm-up + race) — adjust for this specific circuit
- 6+ specific tips based on research
- Link to mistakes page

### 4d — Getting there

Create `app/races/[SLUG]/getting-there/page.tsx`:
- Metadata title: `"Getting to the [RACE_NAME]: Transport Guide | GP Moto Pal"`
- Canonical: `https://gpmotopal.com/races/[SLUG]/getting-there`

Create `app/races/[SLUG]/getting-there/_client.tsx`:
- Data arrays: AIRPORTS, TRANSPORT_OPTIONS, ACCOMMODATION
- Airports: code, name, distance, pros/cons
- Transport: icon, title, details array (shuttle, train, car, taxi, etc.)
- Accommodation: area name, travel time to circuit, note
- Post-race exit strategy section
- Link to mistakes page (transport mistake)

### 4e — Packing guide

Create `app/races/[SLUG]/packing-guide/page.tsx`:
- Metadata title: `"What to Pack for the [RACE_NAME] | GP Moto Pal"`
- Canonical: `https://gpmotopal.com/races/[SLUG]/packing-guide`

Create `app/races/[SLUG]/packing-guide/_client.tsx`:
- Data arrays: ESSENTIALS, OPTIONAL, PROHIBITED
- Weather reality: actual conditions for that month at that location
- Circuit-specific items (e.g. cushion for concrete seating, rain gear)
- Prohibited items list from bag policy research

### 4f — Mistakes page

Create `app/races/[SLUG]/mistakes/page.tsx`:
- Metadata title: `"Common Mistakes at the [RACE_NAME] | GP Moto Pal"`
- Canonical: `https://gpmotopal.com/races/[SLUG]/mistakes`

Create `app/races/[SLUG]/mistakes/_client.tsx`:
- 8+ mistakes with severity levels (high = red card, medium = default)
- `id="mistakes"` anchor on the list section
- Back link to `/races/[SLUG]`
- Race-specific detail — not copy-paste from Jerez
- **Always include these mistake topics** (tailor detail to this circuit):
  1. Booking accommodation too late
  2. Arriving too late on race day
  3. Not printing your ticket
  4. Bringing glass / alcohol (bag policy breach)
  5. Relying on phone for navigation (signal dies race day)
  6. Not bringing ear protection
  7. Assuming you can get a taxi after the race
  8. Not carrying cash
  9. Planning to buy grandstand tickets on the day

---

### 4g — Bag Policy page

Create `app/races/[SLUG]/bag-policy/page.tsx`:
- Metadata title: `"[RACE_NAME] Bag Policy — What You Can Bring | GP Moto Pal"`
- Canonical: `https://gpmotopal.com/races/[SLUG]/bag-policy`
- FAQ schema: 3 questions about bags, food/drink, and what happens when
  prohibited items are found

Create `app/races/[SLUG]/bag-policy/_client.tsx`:
- Data arrays: PROHIBITED, PERMITTED, GATE_PROCESS
- **PROHIBITED items** (research circuit-specific rules; default list):
  Glass containers, metal containers, alcohol, bottle caps (or sport-top note),
  food/drink over 500g, drones, weapons/fireworks/flares, large umbrellas/tents,
  political or offensive banners, animals (except assistance), sharp objects,
  professional cameras with detachable lenses
- **PERMITTED items** (research circuit-specific; default list):
  Small backpack, plastic water bottle (no cap / sport-top), non-alcoholic food
  under 500g, small collapsible umbrella, power bank, folding seat (GA only),
  sunscreen (non-aerosol), binoculars, standard camera (no detachable lens),
  medication with documentation
- **GATE_PROCESS**: Numbered steps 1–5 walking through what happens at security
- Key warning box: "Prohibited items are confiscated — not stored. Leave them
  at your hotel or car."
- Reference the Jerez bag-policy pages as the exact template to follow

---

### 4h — Grandstands / Viewing Spots page

Create `app/races/[SLUG]/grandstands/page.tsx`:
- Metadata title: `"Best Grandstands at [RACE_NAME] — Where to Sit | GP Moto Pal"`
- Canonical: `https://gpmotopal.com/races/[SLUG]/grandstands`
- FAQ schema: 3 questions — best grandstand, price range, when tickets sell out

Create `app/races/[SLUG]/grandstands/_client.tsx`:
- Data arrays: GRANDSTANDS, GA_SPOTS, TICKETS
- **GRANDSTANDS**: 3-4 named grandstands with:
  - `name`, `location` (which corner/sector), `highlight` (one-line summary)
  - `star: true` for the top 1-2 picks
  - `price` (3-day ticket range from research)
  - `description` (2-3 sentences: what you see, why it's good)
  - `pros` array (3-4 bullets)
  - `cons` array (2-3 bullets)
- **GA_SPOTS**: 2-3 general admission zones with name and description
- **TICKETS**: 3 price tiers (GA, Grandstand, VIP) with price range and perks
- GA warning box: arrive early, first-come first-served
- Sell-out warning box: popular grandstands sell out months ahead
- Mark `[UNVERIFIED]` in fact-check file if grandstand names/prices cannot
  be confirmed from official or reliable secondary sources
- Reference the Jerez grandstands pages as the exact template to follow

---

### 4i — Food & Nightlife page

Create `app/races/[SLUG]/food-and-nightlife/page.tsx`:
- Metadata title: `"[RACE_NAME] Food & Nightlife — Where to Eat and Party | GP Moto Pal"`
- Canonical: `https://gpmotopal.com/races/[SLUG]/food-and-nightlife`

Create `app/races/[SLUG]/food-and-nightlife/_client.tsx`:
- Data arrays: RESTAURANTS, [LOCAL_DRINK_OR_BAR_TYPE], RACE_WEEK_ATMOSPHERE,
  DAY_TRIPS
- **RESTAURANTS**: 2-3 named, specific restaurants in the city. Each needs:
  `name`, `type` (cuisine style), `area`, `detail` (2-3 sentences), `tip`
  (book ahead warning or specific advice)
- **Local bar type** (varies by city — tabancos in Jerez, cafés in Le Mans, etc.):
  Include a section about the distinctive local food/drink culture if it exists
- **RACE_WEEK_ATMOSPHERE**: 3-4 items describing where fans gather, street
  parties, fan zones, camping atmosphere
- **DAY_TRIPS**: 1-2 nearby towns/areas worth an evening trip when local
  restaurants are full
- Always include the "local meal timing" tip if the city has unusual dining
  hours (e.g. Spain: dinner 8–10 PM; France: long lunch culture)
- Note which restaurants/areas need advance booking during race week
- Reference the Jerez food-and-nightlife pages as the exact template to follow

---

### 4j — Experiences page

Create `app/races/[SLUG]/experiences/page.tsx`:
- Metadata title: `"Things to Do at [RACE_NAME] — Experiences Beyond the Circuit | GP Moto Pal"`
- Canonical: `https://gpmotopal.com/races/[SLUG]/experiences`

Create `app/races/[SLUG]/experiences/_client.tsx`:
- Sections: opening framing card + 3-6 experience categories + ITINERARY
- **Framing card**: 1-2 sentences on what makes THIS city worth exploring beyond
  the race. Be specific — not "lots to see and do" but "this city has X, Y, Z"
- **Experience categories** (use what's relevant for this city; common options):
  - Local industry tours (wineries, distilleries, breweries, factories)
  - Cultural/arts shows (flamenco, local music, theatre)
  - Historical sites (castle, cathedral, museum, old town)
  - Outdoor/nature (beach, mountains, park, countryside route)
  - Day trips (1-2 nearby cities or landmarks worth a half-day)
  - Seasonal events (if a major local event falls within 2 weeks of the race)
- **Each experience entry** needs: `name`, `detail` (3-4 sentences), `practical`
  (booking note, opening times, or logistics tip)
- **ITINERARY**: 4 days (Thursday arrival through Sunday race day) as a
  lightweight guide combining circuit sessions with the best city experiences
- GetYourGuide affiliate links: use `<GetYourGuideAvailability tourId="..." />`
  for any experience with a confirmed GYG tour ID. Add the tour ID to
  `src/lib/offers.ts` first. If no ID is confirmed, omit the widget — do not
  add placeholder IDs
- Reference the Jerez experiences pages as the exact template to follow

---

## Step 5 — Copy rules (critical)

Follow CLAUDE.md copy rules:
- Practical, specific, no padding
- No "ultimate guide" or "everything you need to know"
- No generic AI-sounding sentences
- Write for someone who just bought a ticket
- Race-specific mistakes should be ~30% unique vs generic

**Additional rules for Tier 2 pages:**
- **Bag policy:** Use plain numbered/bullet lists. Do not editorialize.
  "Glass containers — will be confiscated." Not "Unfortunately you cannot
  bring glass containers as the circuit prohibits them." State facts cleanly.
- **Grandstands:** Be honest about cons. If a grandstand is pricey or has
  limited sightlines, say so. Readers trust guides that acknowledge tradeoffs.
- **Food & nightlife:** Name specific places. "There are good restaurants in
  the old town" is useless. "Bar Juanito on Calle Pescadería, famous for
  artichokes" is useful. If you can't find specific names, use hedged copy
  and mark as [UNVERIFIED].
- **Experiences:** Lead with what's genuinely special about this city, not
  just a list of tourist attractions. Every city has a cathedral and a market.
  What's the ONE thing you'd tell a friend who has one afternoon free?

---

## Step 6 — Create fact-check file

Create `docs/fact-checks/[SLUG]-fact-check.md` using the template from
`docs/fact-check-template.md`. Fill in:
- All sources searched (URLs)
- HIGH priority claims that need verification:
  - Transport details (shuttle frequency, train times, prices)
  - Bag policy specifics (food weight limits, camera rules, bottle cap rules)
  - Grandstand names and prices (mark [UNVERIFIED] if not from official source)
  - Named restaurants (confirm they still exist and are open)
- LOW priority claims (general tips, cultural context)
- Any TODO items left in the code
- Confidence levels for each claim

---

## Step 7 — Verify the build

Run:
```bash
npx ts-node scripts/verify-race.ts [SLUG]
```

Fix any failures. Common issues:
- Missing pages listed in guideNav.ts
- Missing mistakes entries
- Broken linkPaths in mistakes.ts
- TypeScript errors

Also run:
```bash
npx tsc --noEmit
```

Fix any TypeScript errors in the new files.

---

## Step 8 — Commit and create PR

```bash
git add \
  app/races/[SLUG]/ \
  src/lib/guideNav.ts \
  docs/fact-checks/[SLUG]-fact-check.md
git commit -m "build: [SLUG] — full guide (first-timer, getting-there, packing, bag-policy, grandstands, food-and-nightlife, experiences, mistakes)"
git push -u origin build/[SLUG]
```

Create PR:
```bash
gh pr create --title "Race guide: [RACE_NAME]" --body "$(cat <<'EOF'
## Summary
- Full guide for [RACE_NAME] at [CIRCUIT]
- Tier 1 sub-pages: first-timer-guide, getting-there, packing-guide, mistakes
- Tier 2 sub-pages: bag-policy, grandstands, food-and-nightlife, experiences
- Fact-check file at docs/fact-checks/[SLUG]-fact-check.md

## Before merging
- [ ] Review fact-check file — verify HIGH priority claims
- [ ] Spot-check copy for tone and accuracy (no generic filler)
- [ ] Check mobile rendering at /races/[SLUG]
- [ ] Verify grandstand names/prices against official circuit site

## Research sources
[List the top 3-5 sources used]

Generated by nightly-race-build scheduled task
EOF
)"
```

---

## Step 9 — Update progress tracker

Switch back to master and update `docs/nightly-build/progress.md`:

1. Move the completed race from Queue to Completed table
2. Set status to `done`, add PR link and today's date
3. Update "Next up" to the next pending race
4. Append to build log: `[DATE] — [SLUG] built, PR #[NUMBER]`

If the build failed at any step:
1. Set status to `failed` in Queue table
2. Append to build log: `[DATE] — [SLUG] FAILED at step [N]: [reason]`
3. Do NOT advance "Next up" — the same race will be retried tomorrow

Commit and push progress update:
```bash
git checkout master
git add docs/nightly-build/progress.md
git commit -m "nightly-build: [SLUG] done — PR #[NUMBER]"
git push origin master
```

---

## Error handling

- If WebSearch fails: use conservative/hedged copy and mark facts as [UNVERIFIED]
- If verify-race.ts fails: fix the issues and re-run (up to 3 attempts)
- If TypeScript fails: fix errors and re-commit
- If gh pr create fails: commit is still on the branch — log as failed, human will create PR
- If any step fails after 3 retries: mark as `failed` in progress.md and stop
