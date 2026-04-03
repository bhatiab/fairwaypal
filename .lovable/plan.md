
# Refactor Melbourne.tsx: Technical Telemetry + Scrolling Ticker

## Overview
Add a "Technical Telemetry" bento grid section between the Session Timeline and Premium Cards, plus a persistent scrolling marquee ticker at the bottom of the page.

## Changes (all in `src/pages/Melbourne.tsx`)

### 1. Technical Telemetry Bento Grid (new section, inserted after Session Timeline ~line 307)

- Section header: "Technical Telemetry" styled consistently with "Session Timeline" header
- CSS Grid layout: `grid-cols-1 md:grid-cols-3` with dark slate background (`bg-[#0f172a]`) and rounded container
- **Map Widget** (largest slot): Spans 2 columns on desktop (`md:col-span-2 md:row-span-2`). Contains an inline SVG approximation of the Albert Park circuit with labeled corners (Turn 1, Turn 3, Turn 11, etc.) and a pit lane indicator. Styled with stroke colors matching the red/green theme.
- **Speed Trap Widget**: Shows a static speed trap readout (e.g., "342 km/h @ Turn 9") with a bar chart style indicator
- **Tire Strategy Widget**: Displays a simple compound visualization (Soft/Medium/Hard) with colored indicators
- **DRS Zones Widget**: Lists DRS detection and activation zones with status indicators
- All widgets use `bg-[#0a0a0a]` card backgrounds with `border-[#1a1a1a]` borders, consistent with existing Premium Cards styling

### 2. Scrolling Marquee Ticker (persistent, bottom of page)

- Fixed-position bar above the mobile sticky nav (or at the very bottom on desktop)
- `overflow: hidden` container with a CSS `@keyframes marquee` animation (translate from 100% to -100%)
- Displays rotating alert messages:
  - `[STRAIGHTLINE MODE ENGAGED - CAR 81]`
  - `[MANUAL OVERRIDE READY - 1.0s GAP DETECTED]`
  - `[DRS ENABLED - ZONE 1 ACTIVE]`
  - `[PIT WINDOW OPEN - LAP 18]`
- Styled with monospace font, green text (`text-[#39FF14]`) on dark background, matching the F1 telemetry aesthetic
- Messages duplicated in the marquee for seamless looping

### 3. Move "Live Race Hub" Button Logic

- The existing "Live Race Hub" link in the simplified top nav (lines 111-122) will remain as-is since it serves as navigation
- The ticker at the bottom serves as the persistent "live" status indicator with scrolling alerts

### 4. Tailwind Keyframes

- Add a `marquee` keyframe animation via inline style or a Tailwind arbitrary animation class: `animate-[marquee_20s_linear_infinite]`
- The keyframe translates the content from `translateX(100%)` to `translateX(-100%)`

## Technical Details

### Albert Park SVG
A simplified inline SVG (~15 key path points) representing the circuit outline with:
- Stroke in `#E10600` (Ferrari red)
- Corner labels as SVG text elements
- Pit lane as a dashed line
- Start/finish line marker

### Grid Layout Structure
```text
+---------------------+----------+
|                     |  Speed   |
|   Albert Park SVG   |  Trap    |
|   (Map Widget)      +----------+
|                     |  Tire    |
|                     | Strategy |
+---------------------+----------+
|       DRS Zones (full width)   |
+--------------------------------+
```

On mobile, all widgets stack in a single column.

### Marquee Implementation
- A `div` with `overflow-hidden` and `whitespace-nowrap`
- Inner `span` with CSS animation sliding left continuously
- Messages separated by bullet characters for visual spacing

## Files Modified
- `src/pages/Melbourne.tsx` — all changes contained in this single file
