# FairwayPal — Master Claude Code Reference

> Golf trip sorted. Partners happy.
> Last updated: April 2025 — generated from full UX/product design session

---

## 1. Vision & Product Summary

FairwayPal is a golf trip planner for guys who hate planning. It solves two problems simultaneously:

1. **The organiser problem** — one person (Dave) does all the work, chases everyone for decisions, and loses hours across 6 browser tabs
2. **The partner problem** — non-golfing partners are an afterthought, which kills trips before they start

**The core mechanic:** Dave answers 5 questions. AI generates a dual itinerary — golf on the left, partner activities on the right. One shareable link goes to the group. Everyone votes. Dave resolves conflicts. Trip locked. Done in under 5 minutes of active work.

**The unfair advantage:** No competitor is using AI + API connections to do something real. Existing sites are glorified listicles with affiliate links. FairwayPal does the work.

**Primary use case (MVP):** Bachelor golf weekend — 4–8 guys, 0–4 partners, 2–3 nights, domestic US destinations.

**Future use cases:** Annual group golf trip, couples golf travel, international golf destinations.

---

## 2. Tech Stack

```
Frontend:     Next.js 14 App Router
Styling:      Tailwind CSS + shadcn-ui
Fonts:        Cormorant Garamond (display) + Outfit (body) — Google Fonts
Deployment:   Vercel
DNS:          Cloudflare → fairwaypal.com
Repo:         GitHub
IDE:          VS Code + Claude Code extension
AI:           Anthropic Claude API (claude-opus-4-5 for generation)
Database:     TBD — likely Supabase (Postgres) or PlanetScale
Email:        TBD — likely Resend
```

**Stack decisions to confirm before building:**
- [ ] Database: Supabase vs PlanetScale vs Neon
- [ ] Email provider: Resend vs Postmark
- [ ] Push notifications: Web Push API (no third-party needed for MVP)
- [ ] Real tee time data: GolfNow API (need to apply for access) vs scraping vs static data for MVP

---

## 3. Design System

### Aesthetic Direction
**Dark luxury editorial.** Black canvas, gold accents, dramatic contrast. Think a high-end golf magazine shot at night. NOT a generic golf app — no green fairways, no plaid patterns, no clip art golf balls. The design must not embarrass Dave when his wife opens the link.

### Fonts
```ts
// app/layout.tsx
import { Cormorant_Garamond, Outfit } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})
```

### Color Tokens (tailwind.config.ts)
```ts
colors: {
  bg: {
    DEFAULT: '#0a0a08',  // main background
    2: '#111110',         // panel/card background
    3: '#1a1a17',         // input/subtle background
    4: '#222220',         // hover states
  },
  gold: {
    DEFAULT: '#c9a84c',
    dim: 'rgba(201,168,76,0.12)',
    border: 'rgba(201,168,76,0.25)',
  },
  fairway: {
    DEFAULT: '#2a6b3c',   // golf side accent
    text: '#4daa6a',
    dim: 'rgba(42,107,60,0.18)',
  },
  partner: {
    DEFAULT: '#a0456e',   // partner side accent
    text: '#d4709a',
    dim: 'rgba(160,69,110,0.18)',
  },
  ink: {
    DEFAULT: '#f0ede6',   // primary text
    2: '#c8c4bc',         // secondary text
    muted: '#5a5a52',     // muted text
    dim: '#3a3a35',       // very muted
  },
  border: {
    DEFAULT: 'rgba(255,255,255,0.07)',
    2: 'rgba(255,255,255,0.13)',
  },
}
```

### Typography Rules
- Display headings: `font-display` (Cormorant Garamond), weight 300 or 400, italic for emphasis
- Body/UI: `font-body` (Outfit), weight 400 or 500
- Section eyebrows: 9–10px, weight 700, letter-spacing .18em, UPPERCASE
- Never use Inter, Roboto, or system fonts
- Button text: 11px, weight 700, letter-spacing .1em, UPPERCASE
- No rounded pill buttons — use `rounded-sm` (3px) for sharp premium feel

### Grain Texture
Apply to all dark backgrounds via `body::before` pseudo-element with SVG turbulence filter. Opacity 0.03–0.06.

### Key Visual Rules
- No gradients except one per page for atmospheric background glow
- No drop shadows — use borders and layering instead
- Two side-by-side panels: golf (green accent #2a6b3c) and partner (rose accent #a0456e)
- Shared moments use gold accent (#c9a84c)
- Activity status: booked = green border + checkmark, confirmed = subtle border, cancelled = dim/strikethrough
- All buttons have uppercase text, 2–3px border-radius, no pill shapes

---

## 4. Architecture Overview

### Data Flow Summary
```
Dave (organiser)
  → Intake wizard (5 questions)
  → POST /api/generate (Claude API)
  → Trip saved to DB (status: draft)
  → Dave reviews itinerary
  → Dave captures email (optional, post-wow moment)
  → Share links created (golf link + partner link)
  → Participants open link → Name gate (enter name, matched to participant list)
  → Vote + comment on activities
  → DB records votes in real time
  → Organiser dashboard (Dave): sees votes, conflicts, who hasn't voted
  → Dave: nudge non-voters (pre-written WhatsApp message)
  → Dave: resolve conflicts (confirm / swap / edit / discuss)
  → Daily email to Dave at 7pm local time (situational subject line)
  → Dave locks trip (status: locked)
  → Activities status: proposed → confirmed → booked
  → Booking: external links (GolfNow, Expedia, GetYourGuide) — FairwayPal does NOT process payments
  → Dave marks items as booked manually
  → Confirmed read-only itinerary link sent to all participants
  → Post-trip: re-engagement email 90 days later
```

### Identity Without Login
FairwayPal uses a **name gate** instead of authentication for MVP:
1. Dave enters participant names during intake (or skips for open links)
2. Participant opens link → sees name entry overlay (one field: "What's your name?")
3. System fuzzy-matches name against Dave's participant list
4. UUID generated → stored in `localStorage` keyed to trip ID
5. All votes/comments sent with this UUID
6. Dave can see named participant status in dashboard

**No email collection from participants at this stage.** Dave's email only, collected post-generation. Browser push notifications optional (Web Push API, no library needed).

### Notification Strategy
- **Primary:** WhatsApp (Dave sends the link manually; nudge generates pre-written messages)
- **Secondary:** Daily 7pm email to Dave (cron job, situational subject line based on trip state)
- **Trigger email:** Immediate notification to Dave when last participant votes
- **Re-engagement:** 90 days post-trip lock date

---

## 5. Database Schema

> **NOTE FOR CLAUDE CODE:** Discuss and validate this schema before building. These are starting points, not gospel.

### `trips`
```sql
id            uuid PRIMARY KEY DEFAULT gen_random_uuid()
slug          text UNIQUE NOT NULL           -- "jakes-last-swing"
name          text NOT NULL                  -- "Jake's Last Swing"
destination   text NOT NULL                  -- "Scottsdale, AZ"
destination_lat  decimal
destination_lng  decimal
dates_start   date NOT NULL
dates_end     date NOT NULL
nights        int NOT NULL
golfers_count int NOT NULL
partners_count int DEFAULT 0
budget_per_round int                         -- in USD
vibe          text                           -- 'serious-golf' | 'party' | 'mixed'
status        text DEFAULT 'draft'           -- 'draft' | 'voting' | 'locked' | 'completed'
organiser_uuid text NOT NULL                 -- localStorage UUID of creator
organiser_email text                         -- optional, collected post-generation
budget_per_golfer int                        -- calculated on lock
budget_per_partner int                       -- calculated on lock
intake_data   jsonb                          -- full raw intake for regeneration
created_at    timestamptz DEFAULT now()
locked_at     timestamptz
trip_date     date                           -- for countdown (= dates_start)
timezone      text                           -- inferred from destination for email timing
```

### `participants`
```sql
id            uuid PRIMARY KEY DEFAULT gen_random_uuid()
trip_id       uuid REFERENCES trips(id) ON DELETE CASCADE
name          text NOT NULL
initial       text NOT NULL                  -- first letter for avatar
color         text NOT NULL                  -- hex, assigned on creation
role          text NOT NULL                  -- 'organiser' | 'golfer' | 'partner'
device_uuid   text                           -- matched from localStorage on name gate
email         text                           -- optional
push_subscription jsonb                      -- Web Push API subscription object
has_voted     boolean DEFAULT false
opened_link   boolean DEFAULT false
last_seen     timestamptz
created_at    timestamptz DEFAULT now()
```

### `activities`
```sql
id            uuid PRIMARY KEY DEFAULT gen_random_uuid()
trip_id       uuid REFERENCES trips(id) ON DELETE CASCADE
name          text NOT NULL
detail        text
time_of_day   text                           -- "7 AM", "2 PM"
day           text                           -- "Friday", "Saturday", "Sunday"
day_index     int                            -- 0, 1, 2 for ordering
sort_order    int                            -- within day
side          text NOT NULL                  -- 'golf' | 'partner' | 'shared'
status        text DEFAULT 'proposed'        -- 'proposed' | 'in-discussion' | 'confirmed' | 'booked' | 'cancelled' | 'removed'
price         int                            -- in USD cents
price_unit    text                           -- 'per-person' | 'per-round' | 'per-night'
tags          text[]
booking_url   text                           -- affiliate link (GolfNow, Expedia, GYG)
booking_ref   text                           -- confirmation number (manually entered)
affiliate_source text                        -- 'golfnow' | 'expedia' | 'gyg' | 'amazon' | null
ai_rationale  text                           -- why AI suggested this (for swap flow)
created_at    timestamptz DEFAULT now()
confirmed_at  timestamptz
booked_at     timestamptz
```

### `votes`
```sql
id            uuid PRIMARY KEY DEFAULT gen_random_uuid()
activity_id   uuid REFERENCES activities(id) ON DELETE CASCADE
trip_id       uuid REFERENCES trips(id) ON DELETE CASCADE
participant_id uuid REFERENCES participants(id)
direction     text NOT NULL                  -- 'up' | 'down'
created_at    timestamptz DEFAULT now()
UNIQUE(activity_id, participant_id)          -- one vote per person per activity
```

### `comments`
```sql
id            uuid PRIMARY KEY DEFAULT gen_random_uuid()
activity_id   uuid REFERENCES activities(id) ON DELETE CASCADE
trip_id       uuid REFERENCES trips(id) ON DELETE CASCADE
participant_id uuid REFERENCES participants(id)
text          text NOT NULL
sentiment     text                           -- 'up' | 'down' | null (linked to vote)
ai_summary    text                           -- populated when 2+ comments exist
created_at    timestamptz DEFAULT now()
```

### `activity_swaps` (for the Swap flow)
```sql
id            uuid PRIMARY KEY DEFAULT gen_random_uuid()
original_activity_id uuid REFERENCES activities(id)
trip_id       uuid REFERENCES trips(id)
constraint_reason text                       -- 'too-expensive' | 'wrong-time' | 'not-right'
alternatives  jsonb                          -- array of AI-generated alternatives
status        text DEFAULT 'pending'         -- 'pending' | 'selected' | 'dismissed'
selected_alternative_index int
created_at    timestamptz DEFAULT now()
```

### `email_logs`
```sql
id            uuid PRIMARY KEY DEFAULT gen_random_uuid()
trip_id       uuid REFERENCES trips(id)
type          text                           -- 'daily-summary' | 'all-voted' | 'reengagement'
subject       text
sent_at       timestamptz DEFAULT now()
status        text                           -- 'sent' | 'failed'
```

---

## 6. Pages & Routes

> **NOTE FOR CLAUDE CODE:** Each page below is a candidate for deeper design discussion. Validate layout, data requirements, and component breakdown before building.

### `/` — Landing Page
**Status:** Designed (see design session)
**Purpose:** Convert Dave from "heard about it" to "starting the intake wizard"
**Key elements:**
- Hero: "Golf trip sorted. Partners happy." + CTA
- Proof strip: 2 min, 5 questions, 2 itineraries, 0 WhatsApp arguments
- Pain section: 3 cards naming the real problems (tabs, group chat, partner)
- How it works: 3 steps
- Product preview: miniature split-view showing the output
- Dual angle section: golf side + partner side with equal weight
- Final CTA: "Stop planning. Start playing."
**Server component** with client islands for any interactive elements
**Must have:** `generateMetadata()`, H1 server-side

---

### `/plan` — Intake Wizard
**Status:** Designed (UX defined, not yet built)
**Purpose:** Collect 5 pieces of information and generate the trip
**UX rules:**
- One question per screen — full screen, large typography
- Progress indicated by dots (not a bar)
- Feels conversational, not like a form
- Back button on every step
- Skip available on optional questions

**The 5 steps:**
```ts
Step 1 — Destination
  Input: Autocomplete text field OR "Help me pick"
  Subtext: "City, resort, or region"
  If "help me pick": show 4 popular destination cards (Scottsdale, Myrtle Beach, Bandon Dunes, Scotland)

Step 2 — Dates
  Input: Date range picker + auto-calculated nights
  Subtext: "When are you going and how many nights?"

Step 3 — Group size
  Input: Two counters — Golfers (min 2) + Partners joining (min 0)
  Subtext: "How many golfers? Any partners joining?"
  Note: Partners = 0 is valid — golf-only trip

Step 4 — Budget per round
  Input: Slider $50 → $350+
  Labels at breakpoints: Budget ($50–100) | Mid-range ($100–200) | Premium ($200–300) | Bucket list ($300+)
  Subtext: "Be honest — we'll find the best courses for your number"

Step 5 — Vibe
  Input: 3 large clickable cards
  Options: "Serious golf" (early tee times, focus) | "Full send" (party, 19th hole) | "Mixed" (best of both)
```

**On submit:**
- Show loading state: "Building your trip..." with streaming animation
- POST to `/api/generate`
- Redirect to `/trip/[id]` on success
- Capture email: optional prompt appears AFTER the wow moment (after itinerary is visible), not during intake

**Email capture timing (IMPORTANT):**
After Dave sees the generated itinerary and before he shares it:
- One-line prompt: "Get a daily summary of votes and conflicts."
- One input field, clearly skippable
- Do NOT gate the share behind email collection

**Components needed:**
- `IntakeWizard` (client component, manages step state)
- `DestinationPicker` (autocomplete + suggestion cards)
- `DateRangePicker` (shadcn calendar adapted)
- `GroupCounter` (two +/- counters)
- `BudgetSlider` (range input with tier labels)
- `VibePicker` (3 card options)
- `GeneratingAnimation` (streaming dots/text while AI works)

---

### `/trip/[id]` — Trip View (Voting State)
**Status:** Designed and prototyped (see design session)
**Purpose:** Let all participants view the itinerary and vote/comment on activities
**Two modes:** Organiser view (Dave) vs Participant view (everyone else)

**Layout:**
- Nav: Logo + Golf/Partners/Full toggle + Share button
- Hero strip: Trip name, destination, dates, group size, vote progress, crew avatars
- Shared dinner banner: gold strip above the split (when a shared activity exists)
- Split view: Golf panel (left) | Partner panel (right)
- Bottom bar: per-person cost, vote count, Regenerate + Edit + Lock it in buttons

**Activity card states:**
- Default: subtle border, vote buttons visible
- Voted up: green border + green background tint
- Voted down: red border + red background tint + comment box auto-opens
- In discussion: amber indicator

**Vote bar per activity:**
- Thumbs up button (In · N) | Thumbs down button (Out · N) | Comment button
- Thumbs down auto-opens comment section
- Tally strip: 2px bar showing green vs red proportion

**Comment section per activity:**
- Thread of existing comments (name, avatar, up/down badge, text)
- AI summary (appears when 2+ comments, reads conflict in one line)
- Who-are-you selector (chips: participant names)
- Comment input + send

**Organiser-only controls (Dave):**
- Confirm activity
- Swap (opens alternative suggestions panel, AI generates 2–3 options with rationale)
- Edit (inline edit: time, day, price, description)
- Discuss (drops message in thread, status → in-discussion)
- Remove activity

**Swap panel:**
- Constraint picker: Too expensive | Wrong time | Wrong day | Not right for us
- AI generates 2–3 alternatives with one-line rationale each
- "Push to group as mini-vote" option (sends alternatives as vote to all participants)
- Confirm selection or go back

**Organiser dashboard (accessible from nav or separate panel):**
- Participant list: name, avatar, voted / opened / not opened status
- Nudge button per participant: generates pre-written WhatsApp message
- Group nudge: "Nudge all non-voters" button
- Deadline setting: Dave sets vote close date, 24h reminder auto-offered
- Conflict list: activities with significant negative votes, flagged
- Budget running total (updates as activities confirmed/removed)

**Server component shell, client components:**
- `TripSplitView` — the dual panel layout (client)
- `ActivityCard` — individual activity with voting (client)
- `CommentThread` — comments + AI summary + input (client)
- `SwapPanel` — alternative suggestions (client)
- `OrgDashboard` — organiser controls overlay (client)
- `NudgeGenerator` — pre-written WhatsApp message builder (client)
- `VoteTally` — the 2px bar + counts (client)

**Data requirements:**
- Full trip with all activities, votes, comments
- Participant list with voted status
- Real-time vote counts (polling every 30s or Supabase realtime subscription)

---

### `/trip/[id]/confirmed` — Confirmed Read-Only Itinerary
**Status:** Designed and prototyped (see design session)
**Purpose:** The final state — no more voting, just the plan. Beautiful, shareable, useful all weekend.

**Layout:**
- Nav: Logo + "Trip locked" badge + Share button
- Hero: Trip name + destination + "Confirmed · All N voted" stamp + countdown in days
- Crew strip: all avatars + "Everyone's in" indicator
- Shared dinner banner (gold, prominent)
- Split view: Golf (left) | Partner (right) — READ ONLY, no vote buttons
- Budget strip: 4 metric cards (per golfer, per partner, booked count, still to book)
- Bottom actions: Share with group | Add to calendar | Plan the next one

**Activity card in confirmed state:**
- Booked: green border, "Booked" label + confirmation number
- Confirmed (not booked): subtle border, "Book now" affiliate link
- No voting UI anywhere

**"Still to book" awareness:**
- Budget strip shows N of M booked
- Each confirmed-but-not-booked card has a visible booking link
- The booking link is an affiliate link (GolfNow, Expedia, GYG)

**Retention mechanic:**
- "Plan the next one →" button in bottom actions
- Pre-fills destination field with same location or nearby alternatives

---

### `/organiser/[id]` — Organiser Dashboard (Standalone)
**Status:** Defined (not yet designed in detail)
**Purpose:** Dave's nerve centre — a dedicated view for managing the trip separate from the participant experience
**Access:** Tied to organiser's localStorage UUID, no login

**Sections:**
1. **Trip overview** — name, status, vote progress, days remaining to trip
2. **Participant tracker** — list view: name | role | opened | voted | last seen | Nudge button
3. **Conflict queue** — flagged activities with negative votes, sorted by severity
4. **Booking checklist** — all confirmed activities, booked vs not, affiliate links
5. **Budget tracker** — running per-person cost as Dave confirms activities
6. **Email settings** — confirm/change Dave's email for daily summary
7. **Deadline** — set vote close date, see countdown

**Actions from this view:**
- Nudge individual participant (pre-written WhatsApp)
- Nudge all non-voters (group WhatsApp message)
- Resolve any conflict (confirm / swap / remove)
- Mark activity as booked + enter confirmation number
- Lock the trip

---

### `/destinations/[slug]` — Destination Guide Pages
**Status:** Planned (content SEO play, post-MVP)
**Purpose:** Organic traffic from golfers researching destinations
**Target queries:** "golf trip Scottsdale guide", "bachelor golf weekend Myrtle Beach", "best golf courses Scotland for groups"
**Structure:**
- Hero: destination name + best time to visit
- Best courses: ranked with links to GolfNow (affiliate)
- Partner activities: what non-golfers do here (GetYourGuide affiliate)
- Hotels: near the best courses (Expedia affiliate)
- Packing guide: Amazon Associates affiliate links (8 standard products + golf-specific)
- CTA: "Plan your [Destination] trip → FairwayPal"
**Server rendered, static generation where possible**

**Initial destinations to build:**
1. Scottsdale, AZ (MVP launch destination)
2. Myrtle Beach, SC
3. Bandon Dunes, OR
4. Pinehurst, NC
5. Scotland (St Andrews area)
6. Ireland

---

### `/api/generate` — Trip Generation Endpoint
**Method:** POST
**Auth:** None for MVP (rate limit by IP)
**Input:** `TripIntake` object
**Process:**
1. Validate intake data
2. Build Claude prompt (system + user message)
3. Stream response with `anthropic.messages.stream()`
4. Parse streaming JSON as it arrives
5. Write trip to database on completion
6. Return trip ID + initial itinerary

**Claude prompt structure:**
```
System: You are FairwayPal's trip planning AI. Generate a structured golf trip itinerary as JSON only.
Rules:
- Generate BOTH a golf itinerary AND a parallel partner itinerary
- Partner activities must slot into gaps in the golf schedule
- When golfers are on the course, partners have a plan
- Always include exactly one shared activity (typically Saturday dinner)
- Match activity price levels to the stated budget
- Include real venue names appropriate to the destination
- Add booking_url as empty string (populated later by booking system)
- Return valid JSON matching the Trip schema exactly
- No prose, no markdown, pure JSON

User: Generate a trip for: {intake JSON}
```

**Streaming approach:**
- Use `anthropic.messages.stream()` 
- Stream partial JSON to client via Server-Sent Events
- Client renders activities as they appear (the wow moment)
- Full trip saved to DB on `stream.finalMessage()`

---

### `/api/vote` — Vote Recording
**Method:** POST
**Body:** `{ activityId, direction: 'up'|'down', participantUUID }`
**Process:**
1. Verify participant UUID matches a participant on this trip
2. Upsert vote (one per participant per activity)
3. Recalculate activity vote tallies
4. If thumbs down AND 2+ downs: trigger AI summary generation
5. Return updated vote counts

**Optimistic UI:** Client updates immediately, server confirms in background. On error, revert.

---

### `/api/generate-alternatives` — Swap Suggestions
**Method:** POST
**Body:** `{ activityId, constraintReason, tripContext }`
**Process:**
1. Fetch original activity + trip context
2. Call Claude: "Suggest 3 alternatives to [activity] given constraint [reason] for a trip to [destination] with budget [X]"
3. Return 3 alternatives with name, detail, price, rationale, booking_url

---

### `/api/nudge` — Generate Nudge Message
**Method:** POST
**Body:** `{ tripId, participantId, nudgeType: 'individual'|'group' }`
**Returns:** Pre-written WhatsApp message string
**Logic:**
- Individual who hasn't opened: "Jess did you see the link Dave sent? [link]"
- Individual who opened but not voted: "Hey Jake, takes 2 mins to vote [link]"
- Group: names the specific non-voters, creates social pressure

---

### `/api/send-daily-email` — Daily Summary (Cron)
**Trigger:** Cron job at 7pm in trip's local timezone
**Runs for:** All trips with status `voting`
**Process:**
1. Fetch all active trips
2. For each: calculate day's activity (new votes, conflicts, non-voters)
3. Generate situational subject line
4. Send email via Resend
5. Log to `email_logs`

**Subject line logic:**
```ts
if (allVoted) → "Jake's Last Swing · everyone's in · ready to lock"
if (conflicts > 0) → "Jake's Last Swing · {N} conflicts need your call"
if (nonVoters > 3) → "Jake's Last Swing · still waiting on {N} people"
if (quiet day) → "Jake's Last Swing · quiet day · {N} still to vote"
```

**Trigger email (immediate):**
When last participant votes → immediate email to Dave: "That's everyone in. Ready to lock the trip?" with Lock it in button.

---

## 7. Component Library

> Build in this order. Each component is used by multiple pages.

### Priority 1 — MVP blocking
```
ActivityCard          Full activity with vote buttons, comment thread, booked status
TripSplitView         Golf + partner dual panel layout
IntakeWizard          5-step intake flow with step management
NameGate              Overlay for participant name entry
VoteTally             2px tally bar + counts
CommentThread         Comments + AI summary + input
OrgDashboard          Organiser controls panel
```

### Priority 2 — Launch quality
```
SwapPanel             AI alternative suggestions for activity swap
NudgeGenerator        Pre-written WhatsApp message builder
ConfirmedItinerary    Read-only trip view with booking status
BudgetStrip           4 metric cards (per person costs)
CrewStrip             Avatar row + voting status
SharedBanner          Gold strip for shared group activities
CountdownWidget       Days to trip countdown
```

### Priority 3 — Growth
```
DestinationCard       For destination guide landing pages
CourseCard            Golf course with affiliate GolfNow link
HotelCard             Reusable hotel affiliate card
FlightCTA             Reusable flight affiliate CTA
GYGActivityCard       GetYourGuide partner activity
PackingGuide          Amazon Associates affiliate links
```

---

## 8. Affiliate Setup

### GolfNow (primary golf affiliate)
- Apply at: golfnow.com/affiliate-program
- Link structure: `https://www.golfnow.com/tee-times/facility/{courseId}/search?date={date}&aff={ID}`
- MVP fallback: Direct links to GolfNow course pages if API access not approved

### GetYourGuide (partner activities)
- Partner ID: `9GLTCAY`
- Link: `https://www.getyourguide.com/activity/{activityId}/?partner_id=9GLTCAY`

### Expedia (hotels)
- Reuse the preserved hotel affiliate card component
- Same affiliate setup, same props interface

### Amazon Associates
- Tag: `fairwaypal-20`
- Run all links through Geniuslink
- Standard 8 products: ear defenders, power bank, cooling towel, crossbody bag, comfort insoles, packable rain jacket, small daypack, packable jacket
- Golf-specific additions: golf travel bag, rangefinder, golf shoe bag, waterproof golf jacket

---

## 9. Backlog (Prioritised)

### Sprint 1 — Core MVP (validate the concept)
```
[ ] Set up Tailwind tokens and design system
[ ] Implement fonts (Cormorant Garamond + Outfit)
[ ] Build intake wizard (5 steps)
[ ] Build /api/generate endpoint with Claude streaming
[ ] Build trip split view (golf + partner panels)
[ ] Build activity card with vote buttons
[ ] Build name gate overlay
[ ] Build comment thread component
[ ] Set up database (choose Supabase vs other)
[ ] Implement optimistic voting with server sync
[ ] Build share link generation (two links)
[ ] Deploy to Vercel, connect fairwaypal.com
[ ] sitemap.ts and robots.ts
[ ] generateMetadata() on every route
[ ] Test full flow end-to-end manually
```

### Sprint 2 — Make it real
```
[ ] Build organiser dashboard (participant tracker, conflict queue)
[ ] Build nudge mechanic (individual + group WhatsApp messages)
[ ] Build swap flow (constraint picker + AI alternatives)
[ ] Build edit activity inline
[ ] Build discuss mechanic (drops comment, status → in-discussion)
[ ] Build lock trip flow
[ ] Build confirmed itinerary view (read-only)
[ ] Build booking status (booked / confirmed toggle + confirmation number)
[ ] Implement email capture (post-wow moment)
[ ] Build daily email cron (Resend + Vercel cron)
[ ] Build immediate "all voted" trigger email
[ ] Budget calculations (per person, running total)
```

### Sprint 3 — Growth
```
[ ] Build landing page (full design)
[ ] Build /destinations/scottsdale (first destination guide)
[ ] GolfNow affiliate integration
[ ] GetYourGuide integration
[ ] Expedia hotel cards
[ ] Amazon packing guide (golf-specific products)
[ ] Browser push notifications (Web Push API)
[ ] Regenerate trip (update activities based on vote outcomes)
[ ] Add to calendar export (ICS file generation)
[ ] "Plan the next one" re-engagement flow
[ ] Reddit community strategy (r/golf, r/golftravel)
```

### Sprint 4 — Scale
```
[ ] Couple mode (individual opt-in per activity, not just team golf/partner)
[ ] International destinations (Scotland, Ireland, Portugal, Spain)
[ ] Paid itinerary planning service ($97–297 custom plan)
[ ] Organiser account (optional login to manage multiple trips)
[ ] Group trip matchmaking (connect solo golfers to existing trips)
[ ] Mobile app (PWA first, native later)
[ ] Extract reusable coordination layer into shared package if it proves useful
```

### Sprint 5 — Marketing & SEO
```
Technical SEO
[x] Optimize icon.png (6.4MB → compressed, <100KB)
[x] Add Organization JSON-LD schema to layout.tsx
[x] Add BreadcrumbList + TouristDestination JSON-LD to all destination pages
[x] Add BreadcrumbList JSON-LD to homepage
[x] Fix missing canonical URL on /status page
[x] Add cross-links between destination pages ("Not sure? Try Pinehurst →")
[ ] Implement next/image for all images across the site
[ ] Add alt text to all images
[ ] Set up Google Analytics 4 (GA4)
[ ] Register and configure Google Search Console
[ ] Submit sitemap to Google Search Console
[ ] Monitor Core Web Vitals via Vercel Speed Insights
[ ] Add hreflang tags when international destination pages are built
[ ] Code-split large client components (trip/_client.tsx at 685 lines)

Content & SEO
[x] Build /destinations/scotland destination guide page
[x] Build /destinations/ireland destination guide page
[ ] Build /blog infrastructure (index + individual post pages)
[ ] Write blog post: "How to plan a golf trip with non-golfers"
[ ] Write blog post: "Best bachelor party golf destinations 2026"
[ ] Write blog post: "Golf trip budget calculator"
[ ] Write blog post: "What do partners do during a golf trip"
[ ] Write blog post: "Golf trip packing list"
[ ] Write blog post: "Scottsdale vs Myrtle Beach golf trip"
[x] Add FAQ sections with FAQPage schema to all destination guides
[ ] Add social proof to landing page (trips planned count, testimonials)

Marketing Channels
[ ] Reddit community strategy — r/golf, r/golftravel, r/bachelor (value-first posts)
[ ] Create lead magnet: "Golf Trip Planning Checklist" PDF for email list building
[ ] Explore GolfNow / course partnerships for backlinks and credibility
[ ] Explore golf podcast sponsorship opportunities
[ ] Set up Pinterest presence with destination visuals
[ ] Track organic keyword rankings and search impressions weekly
```

---

## 10. Design Decisions Log

> These are decisions made and the reasoning behind them. Reference before changing anything.

### Why no login for MVP
Login friction kills group coordination tools. The name gate (one field: "What's your name?") gets participants into the voting flow in 5 seconds. Authentication adds 60 seconds minimum and requires email collection from all 10 participants. The social contract of a group of friends is sufficient identity verification for a golf trip vote. Login can be added as an optional organiser feature in Sprint 4.

### Why WhatsApp not push notifications for notifications
Our users are in WhatsApp group chats already. The trip is discussed there. Inserting FairwayPal notifications into that context (via Dave sharing a pre-written WhatsApp message) is more reliable than asking 10 people to enable browser push on a site they've never visited. Push notifications are a Sprint 2 addition for participants who opt in.

### Why email only for Dave, not participants
Dave is the one who needs status updates — who voted, what conflicts exist, what needs a decision. Participants don't need updates; they get a WhatsApp nudge from Dave. Collecting participant emails adds friction at the exact moment (link opening) where momentum is highest. Dave's email is collected at a high-intent moment (post-generation, pre-share) where he's motivated and it's clearly useful.

### Why FairwayPal doesn't handle booking
Payment processing = liability, compliance, support burden, development time. In MVP, FairwayPal is the planning layer. Booking happens externally via GolfNow (tee times), Expedia (hotels), GetYourGuide (partner activities). We earn affiliate commission. Dave marks things as booked manually. This is sufficient for validation.

### Why activities are not deleted, only status-changed
Historical record matters. If Dave removes an activity after Sarah complained about it, that conversation context (the comment thread) should remain accessible. Status-based soft deletes mean we can show Dave what was discussed and why decisions were made. Hard deletes break the story of how the trip came together.

### Why AI generates a complete dual itinerary, not just golf
The partner itinerary is the core differentiator. If we ask Dave to add partner activities manually, he won't. The whole product depends on the AI doing both sides automatically, with partner activities explicitly scheduled to fill golf schedule gaps. This is non-negotiable — it must be in the generation prompt.

### Why the split view, not a timeline
Timeline view (chronological, all activities in one column) makes the golf/partner distinction invisible. The split view makes the product's core promise (two trips, one link) immediately legible to first-time users. Partners who open the link see their column first. The split is the product.

### Why "In" and "Out" not thumbs up and thumbs down
Language matters. "Thumbs up/down" feels like a social media reaction — passive, low stakes. "In/Out" feels like a commitment — active, high stakes. For a trip that costs $700/person, participants should feel like they're making real decisions, not tapping emoji.

### Why the confirmation number field (booked status)
Dave books on Expedia, gets a confirmation number, comes back to FairwayPal and enters it. This creates a record, closes the loop in the dashboard checklist, and builds trust with participants that the thing is actually happening. It also gives FairwayPal data about what gets booked (useful for affiliate optimisation later).

### Why fore&more not FairwayPal
fore&more is the brand for the product being built (dual itinerary, both audiences). FairwayPal is a golf tool name. However, FairwayPal.com is owned and fore&more.com was not available (t4more.com is not acceptable). Launch with FairwayPal, validate the dual itinerary concept, rebrand when the partner angle is proven and the right domain is available. The trigger: when partners start sharing the link with other partners without being asked.

---

## 11. Coding Rules (Hard Rules — Never Break)

### Imports
- **Relative imports only** inside `app/` directory
- `@/` aliases allowed in `components/`, `lib/`, `hooks/`

### Lucide Icons — _client.tsx Pattern
```
app/
  plan/
    page.tsx        ← server component, imports from _client.tsx
    _client.tsx     ← 'use client' — ALL Lucide icons live here
```
Never import Lucide in a server component. Causes serialization error.

### Server vs Client
- Default: server component
- Client only when: interactivity, hooks, browser APIs needed
- Voting, intake wizard, comments = client
- Metadata, static content, data fetching = server
- Never put `generateMetadata()` in a client component

### Required on every route
```ts
export async function generateMetadata(): Promise<Metadata> { ... }
```

### H1 tags
- Every page: exactly one `<h1>`
- Must render server-side
- Never inside a `'use client'` component

### Sitemap + Robots
- `app/sitemap.ts` — must exist and be complete before first deploy
- `app/robots.ts` — must allow all crawlers

### Streaming AI responses
- Always use `anthropic.messages.stream()`
- Never block the UI waiting for full response
- Parse partial JSON safely — handle incomplete chunks

### Optimistic UI
- Vote/comment updates fire immediately on client
- Server sync in background
- Always catch errors and revert state

### Common mistakes (from prior iterations)
1. Lucide icons in server components → use _client.tsx
2. Missing generateMetadata() → GSC won't index
3. H1 client-side → bad SEO
4. @/ imports in app/ → use relative imports
5. Missing sitemap.ts → add before deploy
6. Missing robots.ts → add before deploy
7. Streaming AI not handled → always stream
8. Optimistic UI not rolled back on error → always catch + revert

---

## 12. Environment Variables

```bash
# .env.local

# AI
ANTHROPIC_API_KEY=

# Site
NEXT_PUBLIC_SITE_URL=https://fairwaypal.com

# Database
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Email
RESEND_API_KEY=

# Affiliates
NEXT_PUBLIC_GYG_PARTNER_ID=9GLTCAY
NEXT_PUBLIC_GOLFNOW_AFFILIATE_ID=
NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG=fairwaypal-20
GENIUSLINK_API_KEY=

# Cron (Vercel)
CRON_SECRET=
```

---

## 13. Reuse Notes

FairwayPal's coordination layer (intake → generate → share → vote → lock) is designed to be reusable if the same workflow proves useful in other verticals. The components can be generalized with different content configs.

**If FairwayPal MVP is validated, these parts are strong candidates for extraction:**
- `ActivityCard` with voting
- `NameGate`
- `TripSplitView`
- `OrgDashboard`
- `NudgeGenerator`
- `/api/generate` endpoint pattern
- `/api/vote`
- Daily email cron

**What would need abstraction for reuse:**
- Destination and activity taxonomies
- Prompt templates and generation rules
- Budget model and terminology
- Visual theme tokens and terminology copy

**Extraction plan:**
1. Build FairwayPal components standalone
2. Once stable, extract to `packages/trippal-core/` in a monorepo OR
3. Copy components directly into another product if needed
4. Config file per product (`trippal.config.ts`) for terminology, colors, affiliate IDs

---

## 14. Questions to Resolve in Claude Code Sessions

These need discussion before building the relevant feature:

**Database:**
- [ ] Supabase vs PlanetScale vs Neon — cost, real-time support, DX
- [ ] Do we need real-time vote updates or is 30s polling sufficient for MVP?
- [ ] How do we handle the participant UUID collision (two people with same name)?

**Generation:**
- [ ] How do we handle generation failures gracefully?
- [ ] What's the fallback if Claude returns malformed JSON mid-stream?
- [ ] Do we cache generated trips or regenerate on every page load?

**Identity:**
- [ ] What happens if two participants open the same link on the same device?
- [ ] How long does the localStorage UUID persist? What if they clear cookies?
- [ ] Should the organiser link be separate from the participant link?

**Voting:**
- [ ] Can participants change their vote after submitting?
- [ ] Should vote counts be visible to all participants or just the organiser?
- [ ] What's the vote threshold that triggers an AI-generated conflict summary?

**Booking:**
- [ ] GolfNow API access — apply now or use static links for MVP?
- [ ] How do we handle the Expedia deep link structure for group-sized rooms?
- [ ] Should the "mark as booked" feature require a confirmation number or is a checkbox sufficient?

**Email:**
- [ ] Timezone detection — browser `Intl.DateTimeFormat` on intake step 2 or destination-based?
- [ ] What happens if Dave changes his email after setting it up?
- [ ] Should the daily email stop if Dave hasn't opened it in 3 days (to avoid spam flags)?

---

*This document is the source of truth for FairwayPal development.*
*Update it as decisions are made and features are built.*
*Reference it at the start of every Claude Code session.*