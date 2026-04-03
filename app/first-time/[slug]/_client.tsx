'use client'
import Link from 'next/link'
import { ArrowLeft, MapPin, AlertTriangle, Banknote, Train, Cloud, Utensils, Eye, BookOpen, Users } from 'lucide-react'
import { getCostsBySlug } from '@/data/raceCosts2026'
import { CURATED_COMPARISONS, canonicalMatchup } from '@/lib/compareUtils'
import Footer from '@/components/Footer'

type SupportedSlug = 'mugello' | 'silverstone' | 'assen' | 'catalunya'

interface ViewingSpot {
  name: string
  what: string
  tip: string
}

interface PaddockAccess {
  description: string
  tips: string[]
}

interface CircuitData {
  name: string
  circuitName: string
  hook: string
  intro: string[]
  viewingSpots: ViewingSpot[]
  gettingThere: string[]
  gettingThereLink?: string
  mistakes: { title: string; detail: string }[]
  weather: string
  food: string[]
  raceHubSlug: string
  paddockAccess?: PaddockAccess
}

const CIRCUIT_DATA: Record<SupportedSlug, CircuitData> = {
  mugello: {
    name: 'Mugello',
    circuitName: 'Autodromo Internazionale del Mugello',
    hook: 'The loudest, most partisan crowd in European MotoGP — inside a Tuscan valley that amplifies everything.',
    intro: [
      'Mugello sits in a natural valley about 30 km northeast of Florence, surrounded by forested hills that contain the sound of the bikes and create natural elevated hillside vantage points. The main straight is one of the fastest stretches of asphalt in MotoGP — bikes exceed 350 km/h before braking hard into San Donato. The all-time MotoGP top-speed record was set here.',
      "The crowd is overwhelmingly Italian and heavily Ducati-partisan. Ducati's factory is 80 km away in Bologna, making this effectively a home race for the manufacturer. On Sunday, that translates to 90,000+ fans in Italian flag-red, brass bands, team banners hanging from trees, and a noise level that has to be experienced to be understood. Friday and Saturday are relaxed by comparison.",
      "The circuit's flowing layout through the hills means from the right hillside positions you can watch multiple sectors simultaneously. General admission hillside areas around Turn 8 (Curvone) give this multi-sector experience for no extra cost — if you arrive early enough to claim the spot.",
    ],
    viewingSpots: [
      {
        name: 'Grandstand Centrale (Bronze / Silver)',
        what: 'Covered grandstand at the pit straight. Race start, pit lane activity, and the podium ceremony all happen in your sightline.',
        tip: 'The covered roof matters — Tuscan June afternoons are hot and occasionally stormy. Poltronissima is the premium tier; Bronze is good value and the view of the start line is not meaningfully worse.',
      },
      {
        name: 'Grandstand 58 / Arrabbiata Area (Turns 11–12)',
        what: 'Overlooking the Arrabbiata 2 corner and Bucine section — very fast, committed corners where riders are at extreme lean angles. Large video screen opposite.',
        tip: 'Many experienced Mugello attendees call this the best pure-spectating grandstand on the circuit. Gets afternoon sun, so shade is limited. Access via the Luco entrance.',
      },
      {
        name: 'Poggio Secco (Turn 3)',
        what: 'Uncovered grandstand looking across Turns 2–7, a long sweeping section. One of the cheaper assigned seats.',
        tip: 'Good value if you want a reserved seat without paying main straight prices. Access via the Luco entrance — opposite side of the circuit from Centrale.',
      },
      {
        name: 'GA Hillside — Curvone (Turn 8)',
        what: 'General admission territory. From the grassy hillside around Turn 8, you can see multiple corners and a video wall, with the option to move during free practice.',
        tip: 'Arrive before 07:00 on Sunday to claim a good hillside position. Bring a folding mat — the terrain is grassy and uneven. Zero shade from late morning.',
      },
    ],
    gettingThere: [
      'Take a Trenitalia regional train from Florence Santa Maria Novella to Borgo San Lorenzo (~50-70 min), then the race weekend shuttle bus to the circuit gates.',
      'BusForFun runs direct Florence-to-circuit coaches on race weekends. It\'s the most convenient car-free option — no transfers. Book at busforfun.com.',
      'Driving: A1 autostrada toward Bologna, exit Barberino di Mugello. Normal journey ~40 min from Florence. Leave before 08:00 on Sunday — road congestion builds fast.',
    ],
    mistakes: [
      {
        title: 'Arriving at the wrong entrance',
        detail: 'The circuit has two main entrances far apart. Paltronissima, Silver, Bronze, and Biondetti grandstands use the Palagio entrance. Poggio Secco, Materassi, and the Arrabbiata 58 area use the Luco entrance. Getting this wrong means a 30-45 minute walk around the circuit perimeter. Check your ticket for the recommended entrance before you travel.',
      },
      {
        title: 'Underestimating Sunday crowd scale — and its toilet consequences',
        detail: 'Sunday attendance regularly exceeds 90,000. Toilet queues before and after the MotoGP race run 30-45 minutes. Before settling into your viewing spot, locate the nearest facilities on the circuit map. The Materassi grandstand area has reasonable proximity by general admission standards.',
      },
      {
        title: 'Buying merchandise on Sunday',
        detail: 'The merchandise area on Sunday is extremely crowded and popular sizes sell out. Go Saturday morning when queues are short and stock is complete.',
      },
      {
        title: 'Not bringing water from outside',
        detail: 'Outside food and drink is permitted at Mugello. Bottled water inside is expensive and the Tuscan June sun is intense — hillside GA positions have zero shade, and temperatures reach 28–32°C on clear days. Bring frozen or chilled bottles from your accommodation.',
      },
      {
        title: 'Leaving Florence too late on Sunday morning',
        detail: 'Florence is the sensible base, but the 30 km trip takes significantly longer on Sunday morning. With train overcrowding and road traffic both peaking from around 07:30, people who leave their hotel at 08:00 frequently miss the warm-up session. Leave before 07:00 if you want to be at the circuit before 09:00 comfortably.',
      },
    ],
    weather: 'Late May to early June: daytime highs of 22–28°C on clear days. The circuit sits in a valley at ~300m elevation. Afternoon thunderstorms are possible and arrive quickly given the surrounding hills — pack a light waterproof regardless of the morning forecast. Hillside GA areas have no shade from mid-morning onward; the Centrale grandstand\'s covered roof becomes a genuine asset on hot days.',
    food: [
      'Tortelli di patate (potato-filled pasta parcels with butter and sage) — the Mugello valley\'s signature dish. Found at every local trattoria.',
      'Pappardelle al cinghiale — wide pasta with wild boar ragu. This is genuine hill country food, not a tourist invention.',
      'Bistecca alla Fiorentina — thick Chianina T-bone grilled over wood coals. Worth one proper sit-down meal in Scarperia or Florence.',
      'Near the circuit: Ristorante degli Artisti and Quindicicurve Pizzeria in Scarperia, Osteria di San Piero in San Piero a Sieve.',
      'Inside the circuit: better than average for a race venue — panini, BBQ, croissants at around €6. Water is overpriced — bring your own.',
    ],
    raceHubSlug: 'mugello',
    paddockAccess: {
      description: 'Mugello offers paddock access through the VIP Village package (includes hospitality, pit lane walk, and paddock access on Friday/Saturday). Pit lane walks are available on Thursday during open pit walks — free with any ticket.',
      tips: [
        'Thursday open pit walk is the best chance to see bikes up close and meet team mechanics',
        'VIP Village is expensive but includes paddock, food, and covered viewing — worth it for a once-in-a-lifetime visit',
        'Riders sometimes walk through the paddock area between sessions on Friday — be patient and respectful',
      ],
    },
  },

  silverstone: {
    name: 'Silverstone',
    circuitName: 'Silverstone Circuit',
    hook: 'The home of British motorsport — a flat, fast ex-airfield where the Maggotts-Becketts complex is one of the most impressive sights in racing.',
    intro: [
      'Silverstone is a converted WWII airfield in Northamptonshire. That origin shapes everything: flat terrain, long open straights, and the Maggotts-Becketts-Chapel complex — a rapid sequence of high-speed left-right-left-right esses where MotoGP bikes are fully committed at speed. Watching riders shift body weight through those corners on a compact 1000cc prototype is the defining visual spectacle of the weekend.',
      'Attendance has reduced from the 70,000+ peak of the 2011–2016 era to around 40,000–45,000 in recent years. That has a practical upside for first-timers: shorter food queues, easier GA spot selection on race morning, and a more relaxed atmosphere inside the circuit. The downside is that parts of the circuit perimeter feel thin — concentrate around Becketts, Vale/Luffield, and Club Corner for the best crowd density.',
      "One piece of honest context: the FIA safety margins and large runoff areas at Silverstone mean you sit further from the track than at many circuits. Bike numbers aren't always readable from grandstands. You're watching a distant but very fast spectacle. Knowing that in advance sets the right expectations.",
    ],
    viewingSpots: [
      {
        name: 'Becketts Grandstand (covered)',
        what: 'Covered grandstand directly facing the Maggotts-Becketts-Chapel complex — one of the most technically demanding corner sequences in world motorsport. Large screen opposite.',
        tip: 'About 45 minutes\' walk from the main entertainment village and pit area. Plan your day around the walking time rather than discovering it mid-session.',
      },
      {
        name: 'Vale Corner / Luffield (General Admission)',
        what: 'Described by regulars as the biggest and most popular GA spectating area. High overtaking frequency, long sightlines across multiple corners, and enough space to bring a camping chair.',
        tip: 'Camping chairs are explicitly permitted and make the difference between an enjoyable full day and an exhausting one. Arrive early to claim the best positions.',
      },
      {
        name: 'Club Corner C (near pit straight)',
        what: 'Last-braking overtake zone before the start/finish straight, with sightlines to the pit exit and the run down to Vale. Good for race-day action specifically.',
        tip: 'Good combination of atmosphere and action density. Closer to main facilities than Becketts.',
      },
      {
        name: 'Abbey A (General Admission)',
        what: 'Views of the start/finish straight and the first-lap run into Abbey corner. The loudest moment of the weekend — the full MotoGP field accelerating simultaneously.',
        tip: 'GA access, no reserved seating. Arrive early on race day (by 07:00) for the best positions in this area.',
      },
    ],
    gettingThere: [
      'Train to Milton Keynes Central (London Euston: 35-50 min; Birmingham: ~45 min), then race shuttle bus to circuit — £15 return, pre-booked. The shuttle drops you a 2-minute walk from the gates. This is the low-stress option that bypasses all A43 congestion.',
      'Driving via A43: the primary route, but gridlock builds by 08:00 on Sunday. A one-way system operates. Use Waze rather than Google Maps — it finds alternative routing more reliably. Do not follow standard sat nav; follow the physical directional signage from M1/M40.',
      'All parking must be pre-booked online — no on-gate sales. P2 parking requires the free circuit shuttle bus. Motorcycle parking is free but must be added to your booking in advance.',
    ],
    mistakes: [
      {
        title: 'Driving on race Sunday and arriving after 07:30',
        detail: 'The A43 becomes gridlocked by 08:00 on Sunday. People who plan to "get there for 9" regularly end up missing free practice or qualifying. Commit to early arrival (pre-07:30) or take the train from Milton Keynes.',
      },
      {
        title: 'No ear protection',
        detail: 'MotoGP bikes produce up to 130dB trackside — above the immediate hearing-damage threshold. Disposable foam earplugs from a supermarket work fine. Most first-timers realise this too late and spend the day in discomfort.',
      },
      {
        title: 'Trying to bring alcohol',
        detail: 'From 2025, Silverstone banned personal alcohol brought into the circuit. Cans or bottles of alcohol will be confiscated at the gate. Non-alcoholic drinks in plastic containers are fine.',
      },
      {
        title: 'Choosing a GA ticket without bringing a camping chair',
        detail: 'Camping chairs are explicitly permitted and standing on grass for a full race day is exhausting. Chairs are essential at Vale Corner and Luffield. This is the single most common item experienced attendees cite as the most important thing to bring.',
      },
      {
        title: 'Wandering the circuit and ending up somewhere empty',
        detail: 'Silverstone is enormous and attendance (~40,000) is thin for the circuit\'s capacity. Parts of the perimeter are almost deserted on race day. Pick a spot — Becketts, Vale, or Club Corner — and stay in the zone where crowds have concentrated. Wandering for a better view often ends up with fewer people around you, not more.',
      },
    ],
    weather: 'Late August at Silverstone: nominally summer, but the probability of at least one shower across a 3-day weekend is high. Daytime temperatures of 16–24°C, persistent wind on the open airfield terrain, and mixed conditions possible on the same day. Pack a waterproof layer (packable is fine), a warm mid-layer for mornings, sun cream (it can be fully sunny and hot), and closed-toe shoes — grass becomes muddy in rain. Extra socks are a frequently cited tip from repeat visitors.',
    food: [
      'Silverstone has improved its food offering: street food stalls with Mexican tacos, wood-fired pizza, Korean bao, and burgers. Queue times on Sunday can be 20-30 min at popular stalls.',
      'Bring your own food in plastic containers (no glass). Cuts queue time significantly.',
      'The White Horse pub in Silverstone village (~25 min walk from main gate): 17th-century coaching inn, real ales, good for post-event.',
      'Khushboo Indian Cuisine in Brackley (~8 miles): long-standing local favourite with F1 paddock history. Worth the drive for Friday or Saturday evening.',
      'Book restaurant reservations in advance for Friday and Saturday evenings — anywhere within 10 miles fills up during race weekend.',
    ],
    raceHubSlug: 'silverstone',
    paddockAccess: {
      description: 'Silverstone offers paddock access through premium ticket packages. The Paddock Experience pass gives access to the pit lane and paddock area on Friday. Pit lane walks are sometimes available on Thursday for free.',
      tips: [
        'Pit lane walk on Thursday is first come, first served — arrive at the circuit early',
        'The Paddock Experience package is the most affordable way to get behind the scenes at a British round',
        'Team garage tours occasionally run via competitions and charity auctions — check MotoGP social media',
      ],
    },
  },

  assen: {
    name: 'Assen',
    circuitName: 'TT Circuit Assen',
    hook: 'The Cathedral — the oldest race on the MotoGP calendar, the most revered circuit name in motorcycle racing, and 100 years of continuous Dutch TT history.',
    intro: [
      'The Dutch TT has run every year since 1925, making it the only event on the MotoGP calendar with an unbroken history. The original race used 28.4 km of public roads between Drenthe villages. The purpose-built circuit opened in 1955. Assen gained FIM World Championship status in 1949 — it\'s been part of the title race from the very first world championship season.',
      "The circuit's nickname 'The Cathedral' is earned by its character: fast, flowing corners with rapid directional changes, narrow tarmac, and grandstands and grass banks that surround the track closely. The atmosphere is unusually intimate — you're near the action in a way that modern circuits built around F1-spec runoff zones rarely allow.",
      'Race day attendance reaches approximately 110,000. The crowd is heavily Dutch and German, with a particularly strong motorcycle-riding contingent. Thousands of bikes fill the parking areas on race day. The Dutch TT is a national event in the Netherlands, not just a motorsport race — it coincides with the TT Festival, nine days of live music, a fair, drag racing, and late-night bars across the centre of Assen. Many repeat visitors consider the festival as essential as the racing itself.',
    ],
    viewingSpots: [
      {
        name: 'Haarbocht Grandstand (Turns 1–5)',
        what: '9,800 seats across 350 metres. Views of the start/finish straight into the primary overtaking zone. This is where the most late-braking position battles happen.',
        tip: 'Book row 15 or higher. Rows 1-14 look through the wire safety fence — photography is blocked and the viewing experience is significantly worse. This is the most consistently reported mistake Haarbocht buyers make.',
      },
      {
        name: 'Hoofd Grandstand (Start/Finish)',
        what: 'The only fully covered grandstand on the circuit. Race start, podium ceremony, pit lane activity.',
        tip: 'The covered roof is the only genuine shelter from rain at Assen — and Assen rain is frequent. Most expensive option, but the only choice if weather protection matters to you.',
      },
      {
        name: 'Geert Timmer Grandstand (Turns 15–16)',
        what: 'Raised position at the S-bend before the main straight. A section known for late-race pressure, run-wides, and position changes as riders commit in the final sector.',
        tip: 'Good value relative to Hoofd or Haarbocht. Easy parking access. High crowd energy.',
      },
      {
        name: 'Grass Embankments (General Admission)',
        what: 'Natural grass banks throughout the infield, open to all ticket holders. Freedom to move during free practice and qualifying. Multiple corners visible from a single hillside position.',
        tip: 'Camping chairs permitted on the banks. Tents and beach shelters are not allowed. On wet days, embankments become muddy — waterproof footwear matters here.',
      },
    ],
    gettingThere: [
      'From Amsterdam: train from Centraal to Assen with one change at Zwolle, total journey 2-2.5 hours. Buy NS tickets via the NS app or OV-chipkaart.',
      'From Groningen: direct train, 15-20 minutes. Groningen is the best overflow base when Assen accommodation is fully booked.',
      'From Assen station to the circuit (~6 km): Bus Line 1 direct to the north side of the circuit (7 minutes), or race weekend shuttle buses from the station to the Noordlus entrance.',
      'Driving: via A28 motorway. Circuit parking is free, marshal-directed. Opens 05:00 on race day — arrive early, queues build from 08:00.',
    ],
    mistakes: [
      {
        title: 'Booking Haarbocht seats below row 15',
        detail: 'Rows 1-14 in the Haarbocht grandstand look directly through the wire safety fence. Photography is blocked. The view is substantially worse than mid or upper rows. Always confirm your row number before completing a Haarbocht purchase — this is the most consistently reported error from repeat Assen visitors.',
      },
      {
        title: 'Arriving late on race morning',
        detail: 'Parking opens at 05:00. By mid-morning the A28 approaches slow significantly. First-timers who arrive at "normal" event times of 10:00-11:00 can lose 45-60 minutes in traffic or gate queues. Bag checks add time. Build in extra margin.',
      },
      {
        title: 'Ignoring the TT Festival in Assen city centre',
        detail: 'The TT Festival runs for nine days across Assen\'s city centre simultaneously with the race weekend. Five live music stages, a fair, drag racing demonstrations, and bars open late. Northern Europe\'s largest free festival. Many experienced attendees say this is the part of the trip that makes Assen genuinely different from every other round.',
      },
      {
        title: 'Underestimating distances between grandstands',
        detail: 'Moving from one end of the circuit to the other during a busy session takes 10+ minutes. Planning to "quickly" move between the Hoofd and the far grandstands during a 20-minute Moto3 race usually means missing laps. Decide in advance which sessions you watch from your seat and which you use to walk.',
      },
      {
        title: 'Bringing glass bottles or alcohol',
        detail: 'Glass containers and alcohol brought from outside are prohibited and security checks bags at all gates. Pack non-alcoholic drinks in plastic containers only. One bottle, a sandwich, and snacks are the permitted outside allowance.',
      },
    ],
    weather: 'Late June at Assen: average highs around 21°C, but Dutch weather is maritime — overcast and mild is the default, with warm sunny periods possible but not reliable. Around 15 rain days per month in June. Grandstands other than Hoofd are uncovered. The grass embankment areas become muddy in wet weather. Pack a light waterproof layer and waterproof footwear if you\'re planning to use the banks. Don\'t trust a positive forecast from earlier in the week.',
    food: [
      'Bitterballen: deep-fried beef ragu balls served with Dutch mustard — the default Dutch bar snack. Available at every café and most circuit stalls.',
      'Stroopwafel: thin waffle sandwich filled with caramel syrup. Buy them fresh and warm from a market stall for the best version.',
      'Haring: raw herring with onion and pickles from street stands. A genuinely Dutch experience.',
      'In Assen city: Grandcafé Zusjes de Boer on the Markt for local beers and Dutch food. Pannenkoekenschip Assen for Dutch pancakes on a canal boat.',
      'The Markt (main market square) has the highest concentration of café and restaurant options during TT Festival week.',
    ],
    raceHubSlug: 'assen',
    paddockAccess: {
      description: 'The Dutch TT is one of the most fan-friendly events on the calendar. Assen offers pit lane walks and paddock access through premium packages. The TT Festival in the city centre also brings riders and teams closer to fans than at most other rounds.',
      tips: [
        'The TT Festival in Assen city centre (Wednesday-Thursday) has free rider appearances and team displays',
        'Pit lane walks are available on Thursday — check the official TT Assen website for booking',
        'The compact nature of the Assen paddock makes it one of the easiest circuits for spotting riders and team personnel',
      ],
    },
  },

  catalunya: {
    name: 'Circuit de Barcelona-Catalunya',
    circuitName: 'Circuit de Barcelona-Catalunya',
    hook: 'The circuit that makes the most sense to combine with a proper city break — 30 km from Barcelona, 25 minutes by train.',
    intro: [
      'Circuit de Barcelona-Catalunya opened in 1991 and was designed from the start to host both F1 and motorcycle racing. At 4.727 km with 13 turns, it tests bikes in several distinct ways: the 1,047m main straight generates genuine overtaking into Turn 1, the technical S-sections test chassis balance, and the stadium complex (Turns 10–16) produces close racing with multiple lines. Tyre degradation on the abrasive Catalan tarmac is a live strategic factor throughout — the race tends to develop rather than settle.',
      'The race has run here since 1996. Sunday capacity is around 100,000, with Spanish and Catalan fans heavily represented — vocal, partisan, and experienced. The circuit runs a Friday pit lane walk where fans enter the pit lane and look directly into open garages, and a Hero Walk on Saturday and Sunday where riders walk through a designated area to meet fans. These are worth building your schedule around.',
      'The biggest practical advantage of Catalunya: Barcelona is an exceptional host city. You\'re 30 km from one of Europe\'s best food and nightlife destinations, served by a 25-minute commuter train. After practice on Friday or qualifying on Saturday, you can be eating in a proper Barcelona restaurant within an hour.',
    ],
    viewingSpots: [
      {
        name: 'Tribuna Principal (Main Grandstand)',
        what: 'The full pit straight. Race start, pit stops, lead changes, and the podium. One of the few covered structures — afternoon sessions have direct sun in lower rows.',
        tip: 'Upper tier rows have unobstructed sightlines. Afternoon sun hits lower rows directly — book upper tier if you can.',
      },
      {
        name: 'Grandstand A (Turn 1 — ELF Chicane)',
        what: 'Bikes arrive flat-out from the 1,047m straight and brake very hard into Turn 1. Upper tier has views both down the straight toward you and through the first chicane.',
        tip: 'Best experienced at the race start when the entire field arrives simultaneously — one of the most dramatic moments in MotoGP. High crowd capacity here means allow extra time entering and exiting.',
      },
      {
        name: 'Grandstand G (Stadium Section, Turns 12–13)',
        what: 'Part of the stadium complex. Views of Turns 10–13, approximately six corners in your field of vision. Good sense of continuous racing action.',
        tip: 'Creates a stadium-like atmosphere within the wider circuit. Good for groups who want proximity to other fans.',
      },
      {
        name: 'Grandstand L (Between Turn sections 1–3 and 5–7)',
        what: 'Faces inward between two sections — MotoGP bikes are in your field of vision almost continuously. Covered. An unusual and action-packed perspective.',
        tip: 'Furthest from the main facilities — access via Gate 7, which requires a walk. Best for fans who prioritise continuous track action over being near the fan zone.',
      },
    ],
    gettingThere: [
      'Take the R2N or R2 train (Renfe) from Sants, Passeig de Gràcia, or El Clot to Montmeló station — ~25 min, ~€2.80 single. Some services don\'t reach Montmeló; check the destination board at the platform.',
      'From Montmeló station: shuttle buses to the circuit (coordinated with train arrivals, ~€2.40) or a 35-50 min walk depending on your grandstand.',
      'Driving: ~30 km from city. Pre-book parking (~€25/3 days). Match your car park booking to your grandstand entrance before you travel — different car parks serve different entrances. Access after 13:00 on race day is reportedly not guaranteed due to traffic management.',
    ],
    mistakes: [
      {
        title: 'Leaving Barcelona too late on race day',
        detail: 'The circuit accommodates 100,000 people on Sunday and the circuit warns that access after 13:00 is not guaranteed. First-timers who treat this like a day trip and leave the city at 10:00 spend race day in traffic. The MotoGP race typically starts around 14:00 — aim to be seated by noon at the latest.',
      },
      {
        title: 'Not pre-booking parking and not knowing which car park to use',
        detail: 'With 32,000 spaces split across multiple zones, arriving without a booking or without knowing which zone corresponds to your grandstand causes significant confusion. Different car parks are different distances from different circuit entrances. Book in advance, then confirm which entry gate your car park uses against the circuit map.',
      },
      {
        title: 'Wrong bag',
        detail: 'Large backpacks are not permitted. No glass, metal, ceramic, or wooden containers. No alcohol brought from outside. Umbrellas are banned in grandstands — bring a poncho instead. Pack a small soft bag under ~20L, plastic-bottled water, and snacks in clear packaging.',
      },
      {
        title: 'Relying on mobile data',
        detail: 'With 100,000 people in one location, mobile networks saturate on race day. Live timing apps, navigation, and messaging all become unreliable. Download your circuit map, transport tickets, and seat confirmation before you arrive. Screenshot your return route to Barcelona rather than relying on Google Maps.',
      },
      {
        title: 'Assuming you can leave and come back',
        detail: 'There is no re-entry at Circuit de Barcelona-Catalunya. Once you exit, your ticket is invalid. Plan your full day inside: pack water (plastic bottles only), arrange meeting points inside the circuit in advance, and budget for in-circuit food prices (approximately €8 for basic food items).',
      },
    ],
    weather: 'Late June: warm, mostly sunny, low-to-moderate humidity. Daytime highs of 25–27°C (77–81°F), nights around 18-19°C. Rain chance is approximately 13% per day — modest amounts when it does occur. UV index is high — sun protection is not optional. Most grandstands are uncovered. The direct sun from noon to 16:00 on race day is intense; the Main Grandstand and Grandstand L are the only covered options. Freeze one bottle of water overnight before race day — it stays cold well into the afternoon.',
    food: [
      'Pre-buy at a supermarket or bakery in Montmeló or Barcelona before entering the circuit. Food inside is race-weekend priced (~€8 basic items, ~€4 for 500ml water).',
      'In Montmeló town (between station and circuit): Bar Cafè Central for pre-race coffee and bocadillo, El Tapeo Braseria-Restaurant for tapas.',
      'Barcelona evenings: head to the Eixample grid streets or Carrer del Parlament (Sant Antoni) for genuine Catalan tapas — pan amb tomàquet (grilled bread rubbed with tomato), croquetes, patatas bravas. Avoid La Rambla: high prices, tourist quality.',
      'The train back to central Barcelona takes 25 minutes from Montmeló. Evening meals in the city are far better value and quality than anything near the circuit.',
    ],
    raceHubSlug: 'catalunya',
    paddockAccess: {
      description: 'Circuit de Barcelona-Catalunya offers paddock access through the VIP Experience and Premium packages. The circuit is one of the more accessible in Spain for behind-the-scenes options. Pit lane walks are available on select days.',
      tips: [
        'VIP Experience tickets include paddock access, pit lane walk, and covered hospitality — check the official circuit website for availability',
        'The paddock at Catalunya is relatively compact and well-organised, making it easy to navigate',
        'Thursday test days (when scheduled) are the most relaxed time to explore the pit lane area',
      ],
    },
  },
}

function BudgetSnapshot({ slug }: { slug: string }) {
  const costs = getCostsBySlug(slug)
  if (!costs) return null
  const { weekendTotal, currency } = costs
  return (
    <section className="px-4 pb-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Banknote className="h-5 w-5 text-primary" />
          Budget Snapshot
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Estimated total weekend cost including tickets, accommodation, food, and transport.
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Budget', value: weekendTotal.budget },
            { label: 'Mid-range', value: weekendTotal.midRange },
            { label: 'Premium', value: weekendTotal.premium },
          ].map((tier) => (
            <div key={tier.label} className="rounded-xl border border-border/50 bg-card/60 p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">{tier.label}</p>
              <p className="font-display text-xl font-bold text-foreground">
                {currency === 'GBP' ? '£' : '€'}{tier.value.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          <Link href={`/races/${slug}/costs`} className="text-primary hover:underline">
            Full cost breakdown →
          </Link>
        </p>
      </div>
    </section>
  )
}

export default function FirstTimeClient({ slug }: { slug: SupportedSlug }) {
  const data = CIRCUIT_DATA[slug]
  const hasCostPage = ['mugello', 'silverstone', 'assen', 'catalunya'].includes(slug)

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="px-4 pb-10">
        <div className="mx-auto max-w-3xl">
          <Link
            href={`/races/${data.raceHubSlug}`}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="h-3 w-3" /> {data.name} Race Guide
          </Link>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            First Time at {data.name}?
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{data.hook}</p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            What to expect
          </h2>
          <div className="space-y-4">
            {data.intro.map((para, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Viewing Spots */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            Best viewing spots for newcomers
          </h2>
          <div className="space-y-4">
            {data.viewingSpots.map((spot) => (
              <div key={spot.name} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <p className="text-sm font-semibold text-foreground mb-2">{spot.name}</p>
                <p className="text-sm text-muted-foreground mb-3">{spot.what}</p>
                <div className="rounded-lg bg-primary/5 border border-primary/10 p-3">
                  <p className="text-xs text-primary/80">Tip: {spot.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paddock Access */}
      {data.paddockAccess && (
        <section className="px-4 pb-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Paddock access
            </h2>
            <div className="rounded-xl border border-border/50 bg-card/60 p-5 mb-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{data.paddockAccess.description}</p>
            </div>
            <div className="space-y-2">
              {data.paddockAccess.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="shrink-0 text-primary mt-0.5">—</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Getting There */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Train className="h-5 w-5 text-primary" />
            Getting there
          </h2>
          <div className="space-y-3">
            {data.gettingThere.map((line, i) => (
              <div key={i} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <p className="text-sm text-muted-foreground">{line}</p>
              </div>
            ))}
          </div>
          {data.gettingThereLink && (
            <p className="mt-3 text-xs">
              <Link href={data.gettingThereLink} className="text-primary hover:underline">
                Full transport guide →
              </Link>
            </p>
          )}
        </div>
      </section>

      {/* Mistakes */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-primary" />
            Top 5 mistakes first-timers make
          </h2>
          <div className="space-y-4">
            {data.mistakes.map((mistake, i) => (
              <div key={mistake.title} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 font-display text-lg font-bold text-primary">{i + 1}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{mistake.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{mistake.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Snapshot */}
      {hasCostPage && <BudgetSnapshot slug={slug} />}

      {/* Weather */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Cloud className="h-5 w-5 text-primary" />
            Weather on race weekend
          </h2>
          <div className="rounded-xl border border-border/50 bg-card/60 p-5">
            <p className="text-sm text-muted-foreground leading-relaxed">{data.weather}</p>
          </div>
        </div>
      </section>

      {/* Food */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Utensils className="h-5 w-5 text-primary" />
            Local food and drink
          </h2>
          <div className="space-y-3">
            {data.food.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="shrink-0 text-primary mt-0.5">—</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Related guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              href={`/races/${data.raceHubSlug}`}
              className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors"
            >
              <p className="text-sm font-semibold text-foreground">{data.name} Race Hub</p>
              <p className="text-xs text-muted-foreground mt-1">Full race guide including planner and experiences</p>
            </Link>
            {hasCostPage && (
              <Link
                href={`/races/${data.raceHubSlug}/costs`}
                className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors"
              >
                <p className="text-sm font-semibold text-foreground">{data.name} Cost Breakdown</p>
                <p className="text-xs text-muted-foreground mt-1">Tickets, flights, hotels — full weekend budget</p>
              </Link>
            )}
            {CURATED_COMPARISONS.filter(([a, b]) => a === slug || b === slug).slice(0, 2).map(([a, b]) => {
              const matchup = canonicalMatchup(a, b)
              return (
                <Link
                  key={matchup}
                  href={`/compare/${matchup}`}
                  className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors"
                >
                  <p className="text-sm font-semibold text-foreground capitalize">{a.replace(/-/g, ' ')} vs {b.replace(/-/g, ' ')}</p>
                  <p className="text-xs text-muted-foreground mt-1">Compare costs, atmosphere, and logistics</p>
                </Link>
              )
            })}
            <Link
              href="/tools/timezone-converter"
              className="rounded-xl border border-border/50 bg-card/60 p-4 hover:border-primary/30 transition-colors"
            >
              <p className="text-sm font-semibold text-foreground">Race Time Converter</p>
              <p className="text-xs text-muted-foreground mt-1">Convert session times to your local timezone</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
