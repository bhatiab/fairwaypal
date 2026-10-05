import { STATIC_ROUTES, absoluteUrl } from './routes'

/**
 * Source for /llms.txt (served by app/llms.txt/route.ts).
 *
 * Every /destinations/* and /blog/* route in lib/routes.json must have an entry
 * here; src/test/llms.test.ts fails the build if one is missing, so a new page
 * cannot ship without telling AI crawlers what it is. Keep each summary to one
 * factual line, using only facts already stated on that page.
 */

type Entry = { path: string; title: string; summary: string }
type Section = { heading: string; entries: Entry[] }

const INTRO =
  'FairwayPal (https://www.fairwaypal.com) is a free golf trip planner for groups. The organiser answers five questions (destination, dates, group size, budget per round, vibe) and FairwayPal generates a dual itinerary: a golf schedule for the players and a parallel plan for non-golfing partners, scheduled into the gaps when the golfers are on the course. One link goes to the group, everyone votes In or Out on each activity, and the organiser locks the trip. FairwayPal does not take bookings or payments; it links out to GolfNow, Expedia and GetYourGuide (some links are affiliate links). The site also publishes honest, partner-aware destination guides, month-by-month "where to golf" guides, and practical planning guides on budgets, logistics and group dynamics.'

export const LLMS_SECTIONS: Section[] = [
  {
    heading: 'Destination guides',
    entries: [
      { path: '/destinations/scottsdale', title: 'Scottsdale, Arizona', summary: '200+ courses within an hour, Old Town, spa scene; best October to April' },
      { path: '/destinations/myrtle-beach', title: 'Myrtle Beach, South Carolina', summary: 'best-value US beach golf: 100+ courses along the 60-mile Grand Strand' },
      { path: '/destinations/pinehurst', title: 'Pinehurst, North Carolina', summary: 'Pinehurst No. 2, stay-and-play packages and a walkable village' },
      { path: '/destinations/bandon-dunes', title: 'Bandon Dunes, Oregon', summary: 'walking-only links golf on the Pacific coast, $275 to $375 per round' },
      { path: '/destinations/pebble-beach', title: 'Pebble Beach, California', summary: 'Monterey Peninsula courses, how tee-time booking works, costs, a 3-night itinerary' },
      { path: '/destinations/kiawah-island', title: 'Kiawah Island, South Carolina', summary: 'The Ocean Course, booking timeline, costs, a 4-day itinerary with Charleston' },
      { path: '/destinations/florida-golf', title: 'Florida', summary: 'Streamsong, TPC Sawgrass and winter sun' },
      { path: '/destinations/scotland', title: 'Scotland', summary: 'St Andrews, Carnoustie, Royal Dornoch and how the Old Course ballot works' },
      { path: '/destinations/ireland', title: 'Ireland', summary: 'Ballybunion, Lahinch, Old Head of Kinsale and a southwest links loop' },
      { path: '/destinations/algarve', title: 'Algarve, Portugal', summary: 'European sun golf, good-value green fees and sea caves for partners' },
    ],
  },
  {
    heading: 'Month-by-month guides',
    entries: [
      { path: '/blog/best-golf-destinations-january', title: 'Best golf destinations in January', summary: 'Scottsdale, Florida, Palm Springs, Cabo and the Algarve, plus surviving peak pricing' },
      { path: '/blog/best-golf-destinations-february', title: 'Best golf destinations in February', summary: 'the ranking plus the tournament and holiday weeks that wreck pricing' },
      { path: '/blog/best-golf-destinations-march', title: 'Best golf destinations in March', summary: 'Scottsdale and Pinehurst at peak, Florida, the Algarve and Kiawah' },
      { path: '/blog/best-golf-destinations-april', title: 'Best golf destinations in April', summary: 'the Carolinas at their peak, Scottsdale before the heat, Scotland reopening, Masters week' },
      { path: '/blog/best-golf-destinations-september', title: 'Best golf destinations in September', summary: 'Scotland and Ireland at their peak, Bandon at its driest, plus the hurricane caveat' },
      { path: '/blog/best-golf-destinations-october', title: 'Best golf destinations in October', summary: 'Pinehurst, Pebble Beach, the Algarve, Kiawah, Scottsdale and Bandon Dunes' },
      { path: '/blog/best-golf-destinations-november', title: 'Best golf destinations in November', summary: 'Scottsdale, Pinehurst, the Algarve, Florida and Kiawah, plus where to skip' },
      { path: '/blog/best-golf-destinations-december', title: 'Best golf destinations in December', summary: 'Scottsdale, Florida, the Algarve and the Carolinas, plus holiday weeks to avoid' },
    ],
  },
  {
    heading: 'Destination comparisons',
    entries: [
      { path: '/blog/scottsdale-vs-myrtle-beach-golf-trip', title: 'Scottsdale vs Myrtle Beach', summary: 'desert resort golf versus beach value: courses, costs, weather, partner options' },
      { path: '/blog/scottsdale-vs-pinehurst-golf-trip', title: 'Scottsdale vs Pinehurst', summary: 'sun and desert versus heritage and pine forest' },
      { path: '/blog/myrtle-beach-vs-pinehurst-golf-trip', title: 'Myrtle Beach vs Pinehurst', summary: 'Carolina value versus Carolina prestige' },
      { path: '/blog/myrtle-beach-vs-kiawah-island-golf-trip', title: 'Myrtle Beach vs Kiawah Island', summary: 'volume and value versus the Ocean Course and Charleston' },
      { path: '/blog/pinehurst-vs-kiawah-island-golf-trip', title: 'Pinehurst vs Kiawah Island', summary: 'two top East Coast golf resorts, verdict by group type' },
      { path: '/blog/pinehurst-vs-pebble-beach-golf-trip', title: 'Pinehurst vs Pebble Beach', summary: 'heritage and walkability versus iconic Pacific scenery' },
      { path: '/blog/pinehurst-vs-bandon-dunes-golf-trip', title: 'Pinehurst vs Bandon Dunes', summary: 'East Coast tradition versus West Coast links' },
      { path: '/blog/bandon-dunes-vs-pebble-beach-golf-trip', title: 'Bandon Dunes vs Pebble Beach', summary: 'the two great West Coast bucket-list trips compared' },
      { path: '/blog/bandon-vs-pebble-vs-kiawah-golf-trip', title: 'Bandon vs Pebble vs Kiawah', summary: 'three of the most expensive US golf trips, verdict by group type' },
      { path: '/blog/bandon-dunes-vs-scotland-golf-trip', title: 'Bandon Dunes vs Scotland', summary: 'Oregon coast links versus the home of the game' },
      { path: '/blog/ireland-vs-scotland-golf-trip', title: 'Ireland vs Scotland', summary: 'courses, cost, logistics and partner experience for an international links trip' },
      { path: '/blog/algarve-vs-scotland-golf-trip', title: 'Algarve vs Scotland', summary: 'sun and value in Portugal versus links and heritage in Scotland' },
      { path: '/blog/algarve-vs-ireland-golf-trip', title: 'Algarve vs Ireland', summary: 'two affordable European golf trips: sun versus craic' },
    ],
  },
  {
    heading: 'Guides for non-golfing partners',
    entries: [
      { path: '/blog/golf-trip-with-non-golfers', title: 'Golf trips with non-golfers', summary: 'how to plan one trip that works for the golfer and the partner' },
      { path: '/blog/what-to-do-on-golf-trip-non-golfer', title: "What to do on a golf trip if you don't golf", summary: 'partner activities by destination' },
      { path: '/blog/scottsdale-for-non-golfers', title: 'Scottsdale for non-golfers', summary: 'Old Town, resort spas, hot air balloons, the Desert Botanical Garden, Camelback hiking' },
      { path: '/blog/myrtle-beach-for-non-golfers', title: 'Myrtle Beach for non-golfers', summary: '60 miles of beach, the boardwalk and SkyWheel, Brookgreen Gardens, the Marshwalk' },
      { path: '/blog/pinehurst-for-non-golfers', title: 'Pinehurst for non-golfers', summary: 'the walkable village, the spa at The Carolina, Southern Pines, Seagrove pottery' },
      { path: '/blog/bandon-dunes-for-non-golfers', title: 'Bandon Dunes for non-golfers', summary: 'beaches, state parks, the spa and Old Town Bandon' },
      { path: '/blog/pebble-beach-for-non-golfers', title: 'Pebble Beach for non-golfers', summary: 'Carmel-by-the-Sea, Monterey Bay Aquarium, 17-Mile Drive, Big Sur, Carmel Valley wine' },
      { path: '/blog/kiawah-island-for-non-golfers', title: 'Kiawah Island for non-golfers', summary: 'The Sanctuary spa, 10 miles of beach, tidal-creek kayaking, Charleston 25 miles away' },
      { path: '/blog/florida-for-non-golfers', title: 'Florida for non-golfers', summary: 'partner plans by golf base: Streamsong, TPC Sawgrass, Innisbrook, Orlando' },
      { path: '/blog/scotland-for-non-golfers', title: 'Scotland for non-golfers', summary: 'St Andrews, Edinburgh, the Highlands, whisky country, the Fife Coastal Path' },
      { path: '/blog/ireland-for-non-golfers', title: 'Ireland for non-golfers', summary: 'Cliffs of Moher, Ring of Kerry, Killarney, Galway pubs, Dingle, Dublin' },
      { path: '/blog/algarve-for-non-golfers', title: 'The Algarve for non-golfers', summary: 'beaches, the Benagil sea caves, Lagos and Tavira old towns, Alentejo wine country' },
    ],
  },
  {
    heading: 'Planning, money and logistics',
    entries: [
      { path: '/blog/how-to-plan-a-golf-trip', title: 'How to plan a golf trip', summary: "the organiser's step-by-step: destination, budget, tee times, partners, commitment" },
      { path: '/blog/golf-trip-budget', title: 'Golf trip budget breakdown', summary: 'real costs by destination and group size' },
      { path: '/blog/hidden-costs-golf-trip', title: 'Hidden costs of a golf trip', summary: 'resort fees, bag charges, caddie tips, forecaddie fees and the upgrade trap' },
      { path: '/blog/how-to-split-costs-golf-trip', title: 'How to split costs on a golf trip', summary: 'when to share, when to itemise, and the apps that help' },
      { path: '/blog/golf-trip-tipping-guide', title: 'Tipping on a golf trip', summary: 'caddies, bag drops and servers, with US, Scotland, Ireland and Portugal norms' },
      { path: '/blog/golf-trip-flights-bag-fees', title: 'Golf trip flights and bag fees', summary: 'airline golf-bag fees and what saves money per player' },
      { path: '/blog/shipping-clubs-vs-flying-with-clubs', title: 'Shipping clubs vs flying with clubs', summary: 'airline fees versus Ship Sticks and Luggage Forward, and when each wins' },
      { path: '/blog/golf-trip-packing-list', title: 'Golf trip packing list', summary: 'one list for golfers, one for non-golfers' },
      { path: '/blog/golf-trip-group-size', title: 'Golf trip group size: 4 vs 8 vs 12', summary: 'how group size changes tee times, lodging, cost and dynamics; why 8 is the sweet spot' },
      { path: '/blog/golf-trip-weekend-schedule', title: '3-night golf weekend schedule', summary: 'a day-by-day template with golfer and partner columns side by side' },
      { path: '/blog/golf-trip-formats', title: 'Golf trip formats', summary: 'Ryder Cup, Nassau, Stableford, skins, Wolf and scrambles, and which fits your group' },
      { path: '/blog/best-golf-trip-apps', title: 'Best golf trip apps and tools', summary: 'planning, chat, cost-splitting, GPS, weather and booking apps worth installing' },
      { path: '/blog/why-your-group-keeps-cancelling-golf-trip', title: 'Why your group keeps cancelling the golf trip', summary: 'five reasons group trips die in planning, and the fixes' },
    ],
  },
  {
    heading: 'Trips by group and occasion',
    entries: [
      { path: '/blog/best-bachelor-party-golf-destinations', title: 'Best bachelor party golf destinations', summary: 'a ranking with real prices and honest trade-offs' },
      { path: '/blog/why-most-bachelor-golf-trips-suck', title: 'Why most bachelor golf trips suck', summary: 'five reasons they underwhelm, and how to fix yours' },
      { path: '/blog/40th-50th-birthday-golf-trip', title: '40th and 50th birthday golf trip', summary: 'destination, group size and format for a milestone trip' },
      { path: '/blog/father-son-golf-trip', title: 'Father-son golf trip', summary: 'picking a destination by skill level and age, and the trip dynamic' },
      { path: '/blog/couples-golf-trip-both-play', title: 'Couples golf trip where both play', summary: 'destinations by skill spread, formats, and romance versus competition' },
      { path: '/blog/first-ever-golf-trip', title: 'Your first-ever golf trip', summary: 'what to expect, what to skip, and first-timer mistakes' },
    ],
  },
]

const OPTIONAL: Entry[] = [
  { path: '/destinations', title: 'All destinations', summary: 'every destination guide on one page' },
  { path: '/blog', title: 'All guides (blog index)', summary: 'every guide, newest first' },
  { path: '/plan', title: 'Plan a trip', summary: 'the five-question planner' },
  { path: '/about', title: 'About FairwayPal', summary: 'who builds it and why' },
]

function line(e: Entry): string {
  return `- [${e.title}](${absoluteUrl(e.path)}): ${e.summary}`
}

export function buildLlmsTxt(): string {
  const known = new Set(STATIC_ROUTES)
  const out = ['# FairwayPal', '', `> ${INTRO}`, '']
  for (const section of LLMS_SECTIONS) {
    out.push(`## ${section.heading}`, '')
    // Never advertise a URL that is not a live, indexable route.
    for (const e of section.entries) if (known.has(e.path)) out.push(line(e))
    out.push('')
  }
  out.push('## Optional', '')
  for (const e of OPTIONAL) out.push(line(e))
  return out.join('\n') + '\n'
}
