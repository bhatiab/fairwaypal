# Race Planner Widget — Backlog

Ordered by priority. Top = do next.
Updated: March 2026.

---

## 1. Cleanup — do before any new features

### Remove dead code
- Delete `RaceCardLocked.tsx` — no longer rendered (email gate disabled,
  all cards unlock immediately)
- Remove its import from `RacePlannerWidget.tsx`
- Remove `handleUnlock` callback and `unlocked` state from
  `RacePlannerWidget.tsx` — never toggled, always `true`
- Remove `useState` for `email` and `error` in `EmailGate.tsx` — form
  is disabled, state is unused
- Remove `handleEmailCapture()` function and `handleSubmit()` —
  never called

### Make refinement options actually work
The form collects `tripLength` and `travelGroup` but the ranking
algorithm ignores them. Either:
1. Wire them into ranking (preferred — they set expectations), or
2. Remove them from the form

If wiring in:
- `tripLength` should adjust the NIGHTS/DAYS constants in cost
  calculation (Weekend=2 nights, 4-5 days=4 nights, Full week=6 nights)
- `travelGroup` could boost ease score weight for solo travellers
  and vibe weight for groups

### Expand vibe tag coverage
The form offers 4 vibe options but the config uses 28 unique vibe tags.
20 tags have no mapping to any user option, meaning most races get a
default 0.5 vibe score regardless of what the user picks.

Add more user-facing vibe options or expand `VIBE_MAP` mappings:
- "Night race" → `night_race`, `sunset_race`
- "Street circuit" → `street_circuit`, `city_center`
- "Festival vibe" → `festival`, `party_atmosphere`, `american`
- "Culture & food" → `cultural`, `tifosi`, `italian_culture`,
  `british_culture`
- Map remaining: `accessible`, `camping`, `forest`, `glamour`,
  `international`, `luxury`, `new_venue`, `orange_army`,
  `passionate_fans`, `unusual`, `value`

### Fix affiliate URLs
- GYG partner ID is `GRANDPRIXPAL` in the config but should be
  `9GLTCAY` per CLAUDE.md
- Verify Expedia `affcid=GRANDPRIXPAL` is registered
- Test each URL returns valid search results

---

## 2. Google Maps API — replace hardcoded region detection

**Why:** The single biggest UX problem. 46 hardcoded cities means
most users get `rest_of_world` (wrong currency, worst cost estimates).
Typos fail silently. "Edinburgh" doesn't even match.

### Phase 1: Geocoding for region detection
Replace `detectRegion()` with a Google Maps Geocoding API call:
- User types city → geocode to lat/lng + country code
- Country code → region mapping (UK/IE → europe, US/CA → north_america,
  AU/NZ/JP/SG/etc → asia_pacific, else → rest_of_world)
- Add autocomplete on the city input using Places API
- **Benefit:** Every city in the world works. Typo-tolerant. Correct
  currency every time.

### Phase 2: Proximity-based flight estimates
Use geocoded lat/lng to estimate flight cost per race:
- Calculate haversine distance from user's city to each circuit
- Replace flat 4-region cost buckets with distance-based curves
  (e.g. <1500km = short-haul price, 1500-5000km = medium, >5000km = long)
- **Benefit:** "London → Monaco" gets a £80 flight estimate instead of
  the generic "Europe → Monaco = £180". Much more accurate ranking.

### Phase 3: City input autocomplete
Add Google Places Autocomplete to the city input field:
- Validates city exists before submission
- Auto-fills country for region detection
- Better mobile UX (tap to select instead of typing full name)

**API cost:** Geocoding = $5/1000 requests. Places Autocomplete =
$2.83/1000 sessions. At current traffic levels this is <$1/month.

**Files to change:**
- `app/lib/race-planner-utils.ts` — replace `detectRegion()`, add
  geocoding helper
- `app/components/race-planner/PlannerInputForm.tsx` — add autocomplete
- `app/data/race-planner-config.json` — add lat/lng per circuit
- New: `app/lib/google-maps.ts` — API wrapper
- New: `app/api/geocode/route.ts` — server-side API route (keep API
  key off client)

---

## 3. Anthropic API — personalised results

**Why:** Results currently feel generic. Every user from London gets
the same static insight text. Claude can make each result feel like
a personal recommendation.

### Phase 1: Personalised "why this race" statements
Replace the template `whyStatement` with a Claude-generated explanation:
- Input: user's city, budget, vibe preference, travel group, the
  3 matched races and their scores
- Output: 1-2 sentences per card explaining *why* this race suits them
- e.g. "Direct flights from New York to Montreal are under $300, and
  the metro drops you at the circuit gate. Best bang for your budget."
- Call during the 1.5s loading spinner — fits naturally in the UX
- Use `claude-haiku-4-5` for speed and cost (<$0.001/request)

**Files to change:**
- New: `app/api/planner-insights/route.ts` — server-side Claude call
- `app/lib/race-planner-utils.ts` — remove `generateWhyStatement()`,
  add async fetch to new API route
- `app/components/race-planner/RacePlannerWidget.tsx` — make result
  generation async, show insights when they arrive

### Phase 2: Personalised trip brief (email payload)
When email capture is wired up, generate a full trip brief with Claude:
- Input: user's top 3 races, city, budget, preferences
- Output: markdown email with per-race sections — best booking window,
  flight tips from their city, hotel neighbourhood advice, 3-day
  itinerary outline, "don't miss" tips
- Use `claude-sonnet-4-6` for better writing quality
- Generate async after email submit, send via email service

### Phase 3: "Ask about this race" chat
Add a small chat input below results:
- User asks follow-up questions ("Is Montreal safe at night?",
  "What's the weather like in June?", "Can I bring a backpack?")
- Claude answers using race guide content as context (RAG from
  the race's sub-page data)
- Keep conversation scoped to the matched races
- Use `claude-haiku-4-5` for speed

**API cost:** Haiku = ~$0.001/request for short completions.
At 100 searches/day = ~$3/month.

---

## 4. Wire up email capture

Currently disabled with "coming soon" message. Depends on having
something worth emailing (Phase 2 of Anthropic API above).

Options:
1. **Resend** — lightweight, good DX, free tier = 3000 emails/month
2. **Mailchimp** — heavier but has audience management
3. **PostHog** — just capture email as identified user, no sending

Re-enable the email input/button, restore the gate between card 1
and cards 2-3, change copy back to "Unlock your other 2 matches".

---

## 5. Use unused weight profiles

Two profiles exist but are never selected:
- `budgetFocused` (0.55 afford, 0.20 ease, 0.15 pop, 0.10 vibe)
- `experienceFocused` (0.15 afford, 0.20 ease, 0.35 pop, 0.30 vibe)

Wire to user input — e.g. a "What matters most?" pill group:
- "Cheapest option" → `budgetFocused`
- "Best experience" → `experienceFocused`
- "Easiest logistics" → `firstTimer`
- "Balanced" → `default`

Or auto-detect: if budget < warning threshold → `budgetFocused`.

---

## 6. Remove "work in progress" banner

Gate on: cleanup done, Google Maps region detection working,
affiliate links verified. Don't need Claude integration for this —
the widget is useful without it.

---

## 7. Medium priority — improve quality

### Season-aware filtering
Races have a `month` field but ranking ignores it. A user searching
in October shouldn't be shown races that already happened. Add:
- Filter out past races (compare race month to current date)
- Or deprioritize them with a penalty in ranking
- Show "This race has passed for 2026" badge if it appears anyway

### Cost table mobile overflow
`CostBreakdownTable` has no responsive handling — on narrow screens
the cost column may get squeezed. Add `whitespace-nowrap` to cost
values and ensure the table doesn't overflow its container.

### Analytics events
Track key interactions in PostHog:
- `planner_search` — city, budget, vibe, isFirstTimer
- `planner_result_click` — which race, which CTA (hotel/experiences/guide)
- `planner_surprise` — budget, result race
- `planner_email_submit` — conversion tracking
- `planner_reset` — how often users retry

---

## 8. Low priority — nice to have

### Multi-currency support
Currently only GBP (Europe) and USD (everywhere else). Add:
- EUR for mainland Europe
- AUD for Australia/NZ
- SGD for Singapore
- JPY for Japan
With live or daily exchange rates instead of hardcoded 1.27.

### Shareable results
Let users share their top 3 results via a URL with query params
(e.g. `?city=London&budget=3000&vibe=party`). Useful for couples
or groups deciding together.

### Compare mode
Let users pin 2-3 races and see them side-by-side with a cost
comparison table and logistics comparison.

### Grandstand upsell
After showing GA ticket cost, offer "Want better seats?" link
to the race's grandstand page (data exists in
`grandstandData_all2026.ts`). Show price range for grandstands.

---

## Data maintenance

### Keep costs current
Cost estimates in `race-planner-config.json` are static. Before
each race season:
- Update flight estimates (check Skyscanner/Google Flights)
- Update hotel estimates (check Booking.com race-week prices)
- Update ticket prices (check official F1 site)
- Update F1 premium multipliers

### Exchange rate
`GBP_TO_USD = 1.27` is hardcoded. Review quarterly or switch to
a daily rate API (solved by multi-currency support if implemented).
