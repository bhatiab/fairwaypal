/**
 * Central mistakes data for GP Moto Pal race guides.
 *
 * Each mistake has a generic ID (used as a stable anchor) and a `races` object
 * keyed by race slug containing circuit-specific details.
 *
 * Mistake IDs (fixed set — do not rename):
 *   transport-exit   — post-race exit / getting back
 *   bag-policy       — bag size, prohibited items
 *   weather          — climate/sun/rain preparation
 *   friday-practice  — underusing Friday, not planning ahead
 *   ticket-sightlines — grandstand choice, arrival timing
 */

export type MistakeLevel = 'critical' | 'moderate' | 'minor'

export interface RaceMistake {
  detail: string
  level: MistakeLevel
  linkLabel: string
  linkPath: string
}

export interface Mistake {
  id: string
  title: string
  races: Record<string, RaceMistake>
}

export const mistakes: Mistake[] = [
  {
    id: 'transport-exit',
    title: 'Not planning the post-race exit',
    races: {
      'jerez': {
        detail: 'Over 100,000 fans attend on race day. The shuttle bus queue from the Minotauro roundabout builds immediately after the race. If you drive, free car parks (A, C, D) can take over an hour to exit on Sunday. Premium parking (B, A-10) is walking distance — worth it on Sunday. Shuttle buses run until around 1 hour after the last event.',
        level: 'moderate',
        linkLabel: 'Getting to Jerez',
        linkPath: '/races/jerez/getting-there',
      },
      'catalunya': {
        detail: 'The R2/R2N train back to Barcelona fills fast after the race. If you can wait 20-30 minutes after the podium, the crowd at Montmeló station thins considerably. If you are driving, expect 1-2 hours before you can exit the car park. Taxis and rideshares at the circuit after the race are scarce — do not rely on one unless pre-booked.',
        level: 'moderate',
        linkLabel: 'Getting to Catalunya',
        linkPath: '/races/catalunya/getting-there',
      },
      'mugello': {
        detail: 'Mugello traffic is among the worst on the MotoGP calendar. The circuit sits in a rural Tuscan valley with limited road access. After the race, expect 2-3 hours to reach the A1 motorway. Leave before the podium, wait an hour for the rush to clear, or camp and leave Monday morning. Taxis are essentially impossible — this is not a city circuit.',
        level: 'critical',
        linkLabel: 'Getting to Mugello',
        linkPath: '/races/mugello/getting-there',
      },
      'le-mans': {
        detail: 'Le Mans road congestion after the race is severe — the Bugatti Circuit sits inside a road network that was not designed for 100,000+ fans leaving at once. The D338 and surrounding routes gridlock for 1-2 hours post-race. Use the Le Mans tram (T1 line to Antares stop) instead of driving or taxis. If you must drive, leave before the last race or wait an hour after the podium.',
        level: 'critical',
        linkLabel: 'Getting to Le Mans',
        linkPath: '/races/le-mans/getting-there',
      },
    },
  },
  {
    id: 'bag-policy',
    title: 'Getting caught out by the bag and food policy',
    races: {
      'jerez': {
        detail: 'Glass containers, metal containers, and alcohol are all refused at the gate. Plastic bottles are allowed but caps are confiscated — use a sport-top bottle. Food under 500g is permitted. Bring snacks and pack sensibly. Items that are refused will be confiscated, not stored.',
        level: 'moderate',
        linkLabel: 'Jerez packing guide',
        linkPath: '/races/jerez/packing-guide',
      },
      'catalunya': {
        detail: 'Circuit de Barcelona-Catalunya has two rules that catch people out: backpacks over 15 litres are refused, and no outside food or drink is allowed (except documented medical needs). Most standard day bags are 20-30L. Measure your bag before race day or switch to a smaller one. Budget to buy food inside.',
        level: 'critical',
        linkLabel: 'Catalunya packing guide',
        linkPath: '/races/catalunya/packing-guide',
      },
      'mugello': {
        detail: 'Glass containers and outside alcohol are prohibited inside the circuit viewing areas. If you are camping, keep glass and alcohol at your campsite — just do not bring them through the gate. Security checks are enforced. Confiscated items are not stored or returned.',
        level: 'moderate',
        linkLabel: 'Mugello bag policy',
        linkPath: '/races/mugello/bag-policy',
      },
      'le-mans': {
        detail: 'The Bugatti Circuit enforces bag size restrictions at the gates — oversized bags and hard coolers are refused. Glass bottles and outside alcohol are not allowed inside the venue. Plastic water bottles are permitted but caps may be confiscated. If you are camping in the surrounding areas, keep prohibited items at your campsite. Pack a small day bag under 30cm x 40cm for the circuit itself.',
        level: 'moderate',
        linkLabel: 'Le Mans packing guide',
        linkPath: '/races/le-mans/packing-guide',
      },
    },
  },
  {
    id: 'weather',
    title: 'Underpreparing for the weather',
    races: {
      'jerez': {
        detail: 'Late April in Andalusia averages 23°C but the UV index is high on exposed grandstands. Without SPF 50+ and a hat, you will burn within 2 hours. Spring weather is also variable — bring a light rain layer. The circuit has almost no shade outside the main paddock areas.',
        level: 'moderate',
        linkLabel: 'Jerez packing guide',
        linkPath: '/races/jerez/packing-guide',
      },
      'catalunya': {
        detail: 'Mid-May in Catalonia averages 21°C but nearly every seat at the circuit is in direct sun. Only the main grandstand (Tribuna) has a roof. UV is strong from mid-morning. Pack SPF 50+, a hat, and sunglasses — and reapply sunscreen at midday. Rain is also possible (~6 rainy days in May), so a compact rain layer is worth carrying.',
        level: 'moderate',
        linkLabel: 'Catalunya packing guide',
        linkPath: '/races/catalunya/packing-guide',
      },
      'mugello': {
        detail: 'Mugello sits at 300m elevation in the Tuscan hills. Late May can bring warm afternoons (24-27°C) but cool mornings (14-16°C), and rain showers can arrive quickly. The circuit is mostly exposed — GA hillside areas and many grandstands have no shade. Pack layers, a rain jacket, and SPF 50+ sunscreen every day, even if the forecast looks clear.',
        level: 'moderate',
        linkLabel: 'Mugello packing guide',
        linkPath: '/races/mugello/packing-guide',
      },
      'le-mans': {
        detail: 'May in Le Mans averages 14-17°C with frequent rain — this is not a warm race weekend. Morning sessions can feel cold, especially on exposed grandstands and GA areas. Pack proper waterproofs (jacket and trousers, not just a poncho), warm layers, and waterproof footwear. The circuit is large and mostly unsheltered. Even on a dry forecast, afternoon showers are common in the Sarthe valley.',
        level: 'moderate',
        linkLabel: 'Le Mans packing guide',
        linkPath: '/races/le-mans/packing-guide',
      },
    },
  },
  {
    id: 'friday-practice',
    title: 'Skipping Friday or arriving without a plan',
    races: {
      'jerez': {
        detail: 'Friday is the best day to learn the circuit. Crowds are small, transport is easy, and you can walk between grandstands freely. Use it to identify the best spots for Saturday qualifying and Sunday\'s race. Fans who skip Friday and arrive Saturday rush in cold are the ones who miss sessions.',
        level: 'minor',
        linkLabel: 'Jerez first-timer guide',
        linkPath: '/races/jerez/first-timer-guide',
      },
      'catalunya': {
        detail: 'Friday at Catalunya is the best day to explore the circuit without crowd pressure. The site is large — use Friday to figure out how long it actually takes to get from your seat to the food areas and transport exits. Fans who do not recce on Friday often spend Saturday and Sunday stuck in transitions between sessions.',
        level: 'minor',
        linkLabel: 'Catalunya first-timer guide',
        linkPath: '/races/catalunya/first-timer-guide',
      },
      'mugello': {
        detail: 'Friday is the quietest day at Mugello and the best time to explore the circuit, find your favourite viewing spots, and set up your campsite. The circuit is large and hilly — walking between areas takes time. Use Friday to figure out the layout so Saturday and Sunday flow smoothly.',
        level: 'minor',
        linkLabel: 'Mugello first-timer guide',
        linkPath: '/races/mugello/first-timer-guide',
      },
      'le-mans': {
        detail: 'Friday at Le Mans is the best day of the weekend for first-timers. Crowds are a fraction of Sunday, you can walk between grandstands and GA areas freely, and the atmosphere in the fan zones is relaxed. Use it to scout your preferred viewing spots and figure out the layout of the Bugatti Circuit — it is compact but the camping and parking areas spread out far. Fans who skip Friday miss the most comfortable day for learning the circuit.',
        level: 'minor',
        linkLabel: 'Le Mans first-timer guide',
        linkPath: '/races/le-mans/first-timer-guide',
      },
    },
  },
  {
    id: 'ticket-sightlines',
    title: 'Arriving too late and missing the best experience',
    races: {
      'jerez': {
        detail: 'With 100,000+ fans on race day, the shuttle bus queue from Minotauro roundabout starts building by 8 AM. Arriving after 10 AM means spending more time in queues than watching racing. Gates open at 6 AM on Sunday. Aim to be at the circuit by 9 AM.',
        level: 'critical',
        linkLabel: 'Jerez first-timer guide',
        linkPath: '/races/jerez/first-timer-guide',
      },
      'catalunya': {
        detail: 'Leave Barcelona city before 8:30 AM on race day. The R2/R2N train runs every 30 minutes — miss the early window and you are boarding a packed train. Arriving late also means the best general admission spots are gone. Gates open at 7 AM on Sunday — the first couple of hours are the most comfortable way to start race day.',
        level: 'critical',
        linkLabel: 'Catalunya first-timer guide',
        linkPath: '/races/catalunya/first-timer-guide',
      },
      'mugello': {
        detail: 'Over 100,000 fans attend Mugello on Sunday. The roads into the valley fill up from early morning, and the best GA hillside spots go fast. If driving, aim to arrive by 8 AM. If on the shuttle from Florence, take the earliest departure. Arriving after 10 AM means traffic queues and limited viewing positions.',
        level: 'critical',
        linkLabel: 'Mugello first-timer guide',
        linkPath: '/races/mugello/first-timer-guide',
      },
      'le-mans': {
        detail: 'The best general admission viewing spots at Le Mans go early on race day — particularly the areas along the back straight and the Chapelle curve. Grandstand ticket holders have reserved seats but GA fans need to arrive early to claim a good position. If you have a grandstand ticket, the mid-height rows in Tribunes A and B offer the best compromise between elevation and proximity. Arrive by 9 AM on Sunday to settle in before the warm-up sessions.',
        level: 'critical',
        linkLabel: 'Le Mans first-timer guide',
        linkPath: '/races/le-mans/first-timer-guide',
      },
    },
  },
]
