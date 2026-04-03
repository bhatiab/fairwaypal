/**
 * Cost data for MotoGP 2026 race weekends.
 * Prices researched April 2026 from official circuit ticketing sites.
 * All EUR unless otherwise noted. Hotel rates are approximate race-weekend prices.
 */

export interface TicketTier {
  name: string;
  priceRange: [number, number];
  note?: string;
}

export interface FlightEstimate {
  fromRegion: string;
  range: [number, number];
  currency: string;
}

export interface AccommodationTier {
  tier: string;
  perNight: [number, number];
}

export interface RaceCostData {
  raceSlug: string;
  currency: string;
  tickets: TicketTier[];
  flights: FlightEstimate[];
  accommodation: AccommodationTier[];
  dailyFood: [number, number];
  localTransport: [number, number];
  weekendTotal: { budget: number; midRange: number; premium: number };
  moneyTips: string[];
  lastUpdated: string;
}

export const raceCosts: RaceCostData[] = [
  {
    raceSlug: "jerez",
    currency: "EUR",
    tickets: [
      { name: "General Admission", priceRange: [69, 99], note: "3-day Pelouse pass. Early bird from €69." },
      { name: "Grandstand", priceRange: [149, 259], note: "Ranges across grandstands C1–C5, W, X, A series." },
      { name: "VIP / Ducati House", priceRange: [1450, 1590], note: "Panorama Village. Full catering included." },
    ],
    flights: [
      { fromRegion: "UK", range: [80, 200], currency: "GBP" },
      { fromRegion: "Western Europe", range: [50, 150], currency: "EUR" },
      { fromRegion: "North America", range: [500, 900], currency: "USD" },
      { fromRegion: "Asia-Pacific", range: [600, 1100], currency: "USD" },
    ],
    accommodation: [
      { tier: "Budget (hostel / camping)", perNight: [20, 80] },
      { tier: "Mid-range (3–4 star hotel)", perNight: [150, 300] },
      { tier: "Premium", perNight: [300, 500] },
    ],
    dailyFood: [20, 50],
    localTransport: [5, 25],
    weekendTotal: { budget: 300, midRange: 900, premium: 2200 },
    moneyTips: [
      "Book accommodation in Jerez city — it's cheaper than circuit-adjacent hotels and the shuttle is easy.",
      "Official campsite is the cheapest option if you don't mind roughing it. Book early — fills up.",
      "Shuttle bus is €1.10 each way — far cheaper than taxis.",
      "Food inside the circuit is expensive. Eat in Jerez before heading out.",
      "Fly into Seville (SVQ) for more options, then take the Renfe train (€11–16).",
    ],
    lastUpdated: "April 2026",
  },
  {
    raceSlug: "le-mans",
    currency: "EUR",
    tickets: [
      { name: "General Admission", priceRange: [117, 122], note: "3-day Enceinte Générale. Under-16s free." },
      { name: "Grandstand (covered)", priceRange: [160, 179], note: "T.8–T.16 range. Most sold out very quickly." },
      { name: "Grandstand (open)", priceRange: [171, 179], note: "T.5–T.46 range." },
    ],
    flights: [
      { fromRegion: "UK", range: [80, 180], currency: "GBP" },
      { fromRegion: "Western Europe", range: [40, 120], currency: "EUR" },
      { fromRegion: "North America", range: [550, 950], currency: "USD" },
      { fromRegion: "Asia-Pacific", range: [650, 1150], currency: "USD" },
    ],
    accommodation: [
      { tier: "Budget (camping at circuit)", perNight: [0, 0] },
      { tier: "Mid-range (Ibis / Campanile)", perNight: [100, 200] },
      { tier: "Premium (Le Mans hotel)", perNight: [200, 500] },
    ],
    dailyFood: [25, 55],
    localTransport: [10, 30],
    weekendTotal: { budget: 250, midRange: 800, premium: 1800 },
    moneyTips: [
      "Camping is included with your ticket — the cheapest weekend option in MotoGP by a wide margin.",
      "Grandstands sell out within days of going on sale. Set a reminder for opening day.",
      "Under-16s get free General Admission — one of MotoGP's best family deals.",
      "Fly into Paris CDG, then take the TGV to Le Mans (~55 min). Budget £80–130 each way UK–Paris.",
      "Weather is unpredictable in May. Pack layers and waterproofs even if forecasts look clear.",
    ],
    lastUpdated: "April 2026",
  },
  {
    raceSlug: "catalunya",
    currency: "EUR",
    tickets: [
      { name: "General Admission", priceRange: [89, 119], note: "3-day pass. 4-for-3 early bird deals available." },
      { name: "Grandstand", priceRange: [109, 259], note: "Wide range: Main Stand, J, K, N, E, A, F, C, G, H." },
      { name: "VIP / Garden Club", priceRange: [749, 1550], note: "Garden Club from €749; Ducati House €1,450." },
    ],
    flights: [
      { fromRegion: "UK", range: [60, 180], currency: "GBP" },
      { fromRegion: "Western Europe", range: [40, 120], currency: "EUR" },
      { fromRegion: "North America", range: [500, 900], currency: "USD" },
      { fromRegion: "Asia-Pacific", range: [600, 1100], currency: "USD" },
    ],
    accommodation: [
      { tier: "Budget (hostel)", perNight: [60, 120] },
      { tier: "Mid-range (3–4 star Barcelona)", perNight: [150, 300] },
      { tier: "Premium", perNight: [300, 600] },
    ],
    dailyFood: [25, 60],
    localTransport: [5, 20],
    weekendTotal: { budget: 350, midRange: 950, premium: 2100 },
    moneyTips: [
      "Stay in Barcelona and take the R2 train to Montmeló — 25 minutes from Passeig de Gràcia.",
      "Buy a T-Casual multi-journey card (€12.35 for 10 trips) for the metro and commuter trains.",
      "Book hotels 3–4 months out; Barcelona race weekend fills fast.",
      "The 4-for-3 ticket offer (buy 3 days, get a 4th adult ticket free) is only available at launch.",
      "Tapas bars near Sants station are far cheaper than circuit food.",
    ],
    lastUpdated: "April 2026",
  },
  {
    raceSlug: "mugello",
    currency: "EUR",
    tickets: [
      { name: "General Admission", priceRange: [135, 239], note: "3-day pass. Prices vary by gate/area." },
      { name: "Grandstand", priceRange: [289, 419], note: "Poggio Secco, Materassi, Centrale, Arrabbiata, Correntaio." },
      { name: "Camper / Camping pass", priceRange: [90, 150], note: "Circuit campsites. Book early — fills up." },
    ],
    flights: [
      { fromRegion: "UK", range: [80, 200], currency: "GBP" },
      { fromRegion: "Western Europe", range: [50, 150], currency: "EUR" },
      { fromRegion: "North America", range: [550, 1000], currency: "USD" },
      { fromRegion: "Asia-Pacific", range: [650, 1200], currency: "USD" },
    ],
    accommodation: [
      { tier: "Budget (camping — Mugello Verde)", perNight: [30, 60] },
      { tier: "Mid-range (Scarperia / Borgo San Lorenzo)", perNight: [100, 200] },
      { tier: "Premium (Florence)", perNight: [200, 800] },
    ],
    dailyFood: [25, 60],
    localTransport: [10, 30],
    weekendTotal: { budget: 400, midRange: 1100, premium: 2500 },
    moneyTips: [
      "Camping on-site is by far the cheapest option. Mugello Verde campsite is popular — book months ahead.",
      "Florence makes a great base but adds 45+ minutes of driving each way.",
      "Shuttle buses run from Scarperia to the circuit on race days.",
      "Italian crowd atmosphere is unmatched. Sunday is the day to be there.",
      "Fly into Florence (FLR) or Pisa (PSA) — both are well-served by Ryanair and easyJet from the UK.",
    ],
    lastUpdated: "April 2026",
  },
  {
    raceSlug: "hungary",
    currency: "EUR",
    tickets: [
      { name: "General Admission", priceRange: [109, 159], note: "Estimated — official prices not confirmed at time of publication." },
      { name: "Grandstand", priceRange: [189, 299], note: "Estimated — new circuit, limited pricing data available." },
      { name: "VIP", priceRange: [800, 1500], note: "Estimated based on comparable circuits." },
    ],
    flights: [
      { fromRegion: "UK", range: [80, 180], currency: "GBP" },
      { fromRegion: "Western Europe", range: [50, 130], currency: "EUR" },
      { fromRegion: "North America", range: [550, 950], currency: "USD" },
      { fromRegion: "Asia-Pacific", range: [650, 1150], currency: "USD" },
    ],
    accommodation: [
      { tier: "Budget (Budapest hostel)", perNight: [60, 120] },
      { tier: "Mid-range (Budapest 3–4 star)", perNight: [120, 250] },
      { tier: "Premium (Budapest)", perNight: [250, 500] },
    ],
    dailyFood: [20, 50],
    localTransport: [10, 30],
    weekendTotal: { budget: 350, midRange: 900, premium: 2000 },
    moneyTips: [
      "This is a brand-new MotoGP venue — expect some organisational growing pains.",
      "Budapest is one of Europe's most affordable capitals. Stay in the city and hire a car or use race shuttles.",
      "Book flights into Budapest (BUD) early — limited direct routes from many UK airports.",
      "The Balaton Park Circuit is ~1.5 hours from Budapest by car.",
      "Ticket prices are estimates. Check motogphungary.com for confirmed pricing.",
    ],
    lastUpdated: "April 2026",
  },
  {
    raceSlug: "brno",
    currency: "EUR",
    tickets: [
      { name: "General Admission (Gold)", priceRange: [141, 183], note: "Wave-based pricing. Access to all GA areas." },
      { name: "General Admission (Silver)", priceRange: [108, 133], note: "Areas B, D, E, G." },
      { name: "Grandstand", priceRange: [208, 354], note: "T1–T6 range, T3 is roofed and most expensive." },
      { name: "VIP (T1)", priceRange: [1208, 1399], note: "Includes hospitality." },
    ],
    flights: [
      { fromRegion: "UK", range: [80, 200], currency: "GBP" },
      { fromRegion: "Western Europe", range: [40, 120], currency: "EUR" },
      { fromRegion: "North America", range: [550, 950], currency: "USD" },
      { fromRegion: "Asia-Pacific", range: [650, 1150], currency: "USD" },
    ],
    accommodation: [
      { tier: "Budget (Brno hostel/guesthouse)", perNight: [60, 120] },
      { tier: "Mid-range (4-star Brno)", perNight: [120, 220] },
      { tier: "Premium", perNight: [220, 400] },
    ],
    dailyFood: [15, 40],
    localTransport: [5, 20],
    weekendTotal: { budget: 300, midRange: 800, premium: 1900 },
    moneyTips: [
      "Brno is one of MotoGP's cheaper race weekends — food, accommodation, and beer all cost less than Western Europe.",
      "Wave 1 tickets are significantly cheaper than wave 3. Set a calendar reminder for sale opening.",
      "Fly into Vienna (VIE) for the most flight options, then 2 hours by bus/car. Brno BRQ has limited routes.",
      "The circuit has a large campsite — ask at motogpbrno.com.",
      "Brno city centre is lively with good food and nightlife. An underrated host city.",
    ],
    lastUpdated: "April 2026",
  },
  {
    raceSlug: "assen",
    currency: "EUR",
    tickets: [
      { name: "General Admission (Embankments)", priceRange: [189, 219], note: "3-day pass. The Cathedral's iconic hillside embankments." },
      { name: "Grandstand", priceRange: [209, 329], note: "Stekkenwal, De Bult, Ossebroeken, Haarbocht, TT World, Strubben, Hoofd." },
    ],
    flights: [
      { fromRegion: "UK", range: [80, 160], currency: "GBP" },
      { fromRegion: "Western Europe", range: [30, 100], currency: "EUR" },
      { fromRegion: "North America", range: [550, 950], currency: "USD" },
      { fromRegion: "Asia-Pacific", range: [650, 1150], currency: "USD" },
    ],
    accommodation: [
      { tier: "Budget (B&B / guesthouse)", perNight: [100, 180] },
      { tier: "Mid-range (3–4 star)", perNight: [180, 300] },
      { tier: "Premium", perNight: [300, 500] },
    ],
    dailyFood: [20, 55],
    localTransport: [5, 20],
    weekendTotal: { budget: 450, midRange: 1100, premium: 2200 },
    moneyTips: [
      "Assen hotels sell out very early — Dutch TT is a national event, not just a motorsport race. Book months in advance.",
      "Groningen (~30 min away) has more availability than Assen itself when local accommodation is sold out.",
      "Fly into Amsterdam Schiphol (AMS) — one of Europe's best-connected hubs.",
      "The embankment areas give great elevation views. GA doesn't mean bad seats here.",
      "Pack for rain. Dutch weather in late June is notoriously unpredictable.",
    ],
    lastUpdated: "April 2026",
  },
  {
    raceSlug: "sachsenring",
    currency: "EUR",
    tickets: [
      { name: "Natural Grandstand (standing)", priceRange: [149, 179], note: "3-day hillside embankment pass." },
      { name: "Grandstand", priceRange: [229, 279], note: "T1–T9, T13/Dekra range. ADAC members get 10% off." },
    ],
    flights: [
      { fromRegion: "UK", range: [80, 180], currency: "GBP" },
      { fromRegion: "Western Europe", range: [40, 120], currency: "EUR" },
      { fromRegion: "North America", range: [600, 1000], currency: "USD" },
      { fromRegion: "Asia-Pacific", range: [700, 1200], currency: "USD" },
    ],
    accommodation: [
      { tier: "Budget (Chemnitz hostel)", perNight: [80, 150] },
      { tier: "Mid-range (4-star Chemnitz / Gera)", perNight: [150, 280] },
      { tier: "Premium", perNight: [280, 450] },
    ],
    dailyFood: [20, 50],
    localTransport: [5, 20],
    weekendTotal: { budget: 380, midRange: 950, premium: 2000 },
    moneyTips: [
      "Sachsenring is compact and spectator-friendly. Every seat has a good view.",
      "Chemnitz is 20 minutes away and is the best base — hotels cost 50% more during race week than normal.",
      "Fly into Leipzig/Halle (LEJ) or Dresden (DRS).",
      "ADAC members get 10% off select grandstand tickets — worth checking before you buy.",
      "The natural grandstand (hillside embankment) gives great sightlines and is cheaper than seated sections.",
    ],
    lastUpdated: "April 2026",
  },
  {
    raceSlug: "silverstone",
    currency: "GBP",
    tickets: [
      { name: "General Admission", priceRange: [178, 204], note: "Prices quoted in EUR on site (~£178–£204). No reserved seat." },
      { name: "Grandstand", priceRange: [213, 298], note: "Abbey, Hamilton Straight, Becketts, Club Corner, Luffield, Marquez/Ducati." },
      { name: "Trackside VIP", priceRange: [495, 700], note: "Includes food & drink. From £495/person." },
    ],
    flights: [
      { fromRegion: "UK", range: [0, 30], currency: "GBP" },
      { fromRegion: "Western Europe", range: [80, 200], currency: "EUR" },
      { fromRegion: "North America", range: [600, 1000], currency: "USD" },
      { fromRegion: "Asia-Pacific", range: [700, 1200], currency: "USD" },
    ],
    accommodation: [
      { tier: "Budget (camping / nearby B&B)", perNight: [60, 150] },
      { tier: "Mid-range (Holiday Inn / Mercure Northampton)", perNight: [200, 350] },
      { tier: "Premium (Whittlebury Park)", perNight: [350, 600] },
    ],
    dailyFood: [20, 50],
    localTransport: [5, 20],
    weekendTotal: { budget: 400, midRange: 1100, premium: 2400 },
    moneyTips: [
      "UK fans: take the train to Milton Keynes and then a race shuttle. Avoid driving — A43 queues are legendary.",
      "Camping on-site is the best budget option and has a great atmosphere.",
      "Northampton and surrounding areas have affordable accommodation vs circuit-adjacent hotels.",
      "Silverstone has a large merchandise area but circuit food is expensive — eat before you arrive.",
      "Buy a 3-day pass — single-day Sunday tickets cost significantly more per day.",
    ],
    lastUpdated: "April 2026",
  },
  {
    raceSlug: "aragon",
    currency: "EUR",
    tickets: [
      { name: "General Admission", priceRange: [79, 109], note: "3-day pass. One of the most affordable GA tickets in the calendar." },
      { name: "Grandstand", priceRange: [129, 199], note: "Grandstands 1A, 1B, 1C, 3C, 7." },
    ],
    flights: [
      { fromRegion: "UK", range: [80, 200], currency: "GBP" },
      { fromRegion: "Western Europe", range: [50, 130], currency: "EUR" },
      { fromRegion: "North America", range: [550, 950], currency: "USD" },
      { fromRegion: "Asia-Pacific", range: [650, 1100], currency: "USD" },
    ],
    accommodation: [
      { tier: "Budget (Alcañiz guesthouse / camping)", perNight: [20, 80] },
      { tier: "Mid-range (Alcañiz / Zaragoza hotel)", perNight: [80, 200] },
      { tier: "Premium (Zaragoza)", perNight: [200, 400] },
    ],
    dailyFood: [15, 40],
    localTransport: [5, 20],
    weekendTotal: { budget: 280, midRange: 750, premium: 1800 },
    moneyTips: [
      "Aragon is one of the cheapest MotoGP weekends in Europe — GA tickets, food, and accommodation are all very affordable.",
      "Alcañiz is the closest town (5 min from circuit). Accommodation is basic but cheap.",
      "Zaragoza (1.5 hours) has better hotels and restaurants — hire a car or book a shuttle.",
      "Camping near the circuit is popular and costs very little.",
      "Fly into Zaragoza (ZAZ) or Barcelona (BCN) — the latter has more flight options but adds travel time.",
    ],
    lastUpdated: "April 2026",
  },
  {
    raceSlug: "misano",
    currency: "EUR",
    tickets: [
      { name: "General Admission (Prato 2)", priceRange: [159, 189], note: "3-day pass." },
      { name: "General Admission (Prato 1)", priceRange: [189, 249], note: "Better position closer to the circuit." },
      { name: "Grandstand", priceRange: [259, 449], note: "D, Brutapela, D TOP, A, B, Misanino, Centrale." },
    ],
    flights: [
      { fromRegion: "UK", range: [80, 200], currency: "GBP" },
      { fromRegion: "Western Europe", range: [50, 150], currency: "EUR" },
      { fromRegion: "North America", range: [550, 1000], currency: "USD" },
      { fromRegion: "Asia-Pacific", range: [650, 1200], currency: "USD" },
    ],
    accommodation: [
      { tier: "Budget (Rimini seafront B&B)", perNight: [80, 160] },
      { tier: "Mid-range (Rimini / Misano 3–4 star)", perNight: [160, 300] },
      { tier: "Premium", perNight: [300, 500] },
    ],
    dailyFood: [25, 60],
    localTransport: [5, 20],
    weekendTotal: { budget: 400, midRange: 1050, premium: 2200 },
    moneyTips: [
      "Rimini Riviera is full of affordable accommodation in September — earlier in summer would be much pricier.",
      "Fly into Bologna (BLQ) — 1 hour by car. Rimini (RMI) has seasonal flights.",
      "The circuit is named after Marco Simoncelli. Fans make this a particularly emotional weekend.",
      "Seafood on the Adriatic coast is superb and reasonably priced. Don't eat at the circuit.",
      "The Rimini pedestrian zone has excellent pre-race atmosphere on Saturday night.",
    ],
    lastUpdated: "April 2026",
  },
  {
    raceSlug: "austria",
    currency: "EUR",
    tickets: [
      { name: "General Admission", priceRange: [159, 189], note: "3-day pass." },
      { name: "Grandstand (uncovered)", priceRange: [299, 369], note: "Nord, Red Bull F–P, 3-Corner Silver/Gold range." },
      { name: "Grandstand (covered — Start-Ziel)", priceRange: [299, 379], note: "Start-Ziel A–Q. Best views of the main straight." },
    ],
    flights: [
      { fromRegion: "UK", range: [80, 200], currency: "GBP" },
      { fromRegion: "Western Europe", range: [50, 150], currency: "EUR" },
      { fromRegion: "North America", range: [550, 950], currency: "USD" },
      { fromRegion: "Asia-Pacific", range: [650, 1150], currency: "USD" },
    ],
    accommodation: [
      { tier: "Budget (Leoben / Bruck hostel)", perNight: [60, 150] },
      { tier: "Mid-range (Graz 4-star)", perNight: [150, 300] },
      { tier: "Premium (Graz)", perNight: [300, 550] },
    ],
    dailyFood: [25, 60],
    localTransport: [10, 30],
    weekendTotal: { budget: 420, midRange: 1100, premium: 2400 },
    moneyTips: [
      "Graz (~1 hour) is a much better base than the local villages around Spielberg — far more to do and cheaper accommodation.",
      "Fly into Graz (GRZ) or Vienna (VIE). Vienna adds an hour of driving but has more flight options.",
      "Red Bull Ring is at altitude (~700m) — can be cold at night in September.",
      "The Start-Ziel grandstand gives the best view of race starts and overtaking zones.",
      "Austrian food and drink is excellent but pricier than Eastern European venues.",
    ],
    lastUpdated: "April 2026",
  },
  {
    raceSlug: "portimao",
    currency: "EUR",
    tickets: [
      { name: "General Admission", priceRange: [130, 160], note: "2026 tickets sold out. Prices based on 2025 data." },
      { name: "Grandstand", priceRange: [200, 400], note: "Limited availability. Check portugalmotogp.com for re-releases." },
      { name: "VIP / Ducati House", priceRange: [890, 1500], note: "2-day Ducati House from €890." },
    ],
    flights: [
      { fromRegion: "UK", range: [60, 180], currency: "GBP" },
      { fromRegion: "Western Europe", range: [50, 130], currency: "EUR" },
      { fromRegion: "North America", range: [550, 950], currency: "USD" },
      { fromRegion: "Asia-Pacific", range: [650, 1150], currency: "USD" },
    ],
    accommodation: [
      { tier: "Budget (Alvor / Lagos guesthouse)", perNight: [60, 120] },
      { tier: "Mid-range (3–4 star Lagos / Portimao)", perNight: [120, 250] },
      { tier: "Premium (resort)", perNight: [250, 500] },
    ],
    dailyFood: [20, 50],
    localTransport: [10, 25],
    weekendTotal: { budget: 350, midRange: 900, premium: 2000 },
    moneyTips: [
      "Tickets sold out almost immediately — check for resales and secondary market options.",
      "Fly into Faro (FAO) — just 45 minutes from the circuit. Lots of direct UK routes.",
      "Portimao is warm in November, but evenings cool down. Layers needed.",
      "Lagos is a great base — 20 minutes from the circuit and has excellent restaurants.",
      "Season finale double-header with Valencia means big atmosphere. Book hotels before tickets go on sale.",
    ],
    lastUpdated: "April 2026",
  },
  {
    raceSlug: "valencia",
    currency: "EUR",
    tickets: [
      { name: "Grandstand (Blanca / Roja)", priceRange: [149, 189], note: "Cheapest grandstand options. 3-day pass." },
      { name: "Grandstand (Verde to Amarilla)", priceRange: [179, 259], note: "Mid to upper tier." },
      { name: "Grandstand (Morada — best view)", priceRange: [279, 309], note: "The circuit's top-tier view." },
      { name: "Terraza VIP Hospitality", priceRange: [1450, 1590], note: "Full hospitality package." },
    ],
    flights: [
      { fromRegion: "UK", range: [60, 150], currency: "GBP" },
      { fromRegion: "Western Europe", range: [40, 120], currency: "EUR" },
      { fromRegion: "North America", range: [500, 900], currency: "USD" },
      { fromRegion: "Asia-Pacific", range: [600, 1100], currency: "USD" },
    ],
    accommodation: [
      { tier: "Budget (Valencia hostel)", perNight: [50, 100] },
      { tier: "Mid-range (3–4 star central Valencia)", perNight: [120, 250] },
      { tier: "Premium", perNight: [250, 500] },
    ],
    dailyFood: [20, 50],
    localTransport: [5, 15],
    weekendTotal: { budget: 300, midRange: 850, premium: 2000 },
    moneyTips: [
      "Valencia city is 20 minutes away and excellent — great food, nightlife, and accommodation at all budgets.",
      "The circuit tram (Line 5 or special race shuttle) runs from Torrent Avinguda. Parking queues are brutal.",
      "Season finale atmosphere is the best of the year — riders party in the paddock after the final race.",
      "Valencia is the warmest late-season race. Still expect pleasant weather in late November.",
      "Fly into Valencia (VLC) — good budget airline coverage from most UK airports.",
    ],
    lastUpdated: "April 2026",
  },
  {
    raceSlug: "austin",
    currency: "USD",
    tickets: [
      { name: "General Admission", priceRange: [120, 140], note: "3-day pass. Circuit of the Americas." },
      { name: "Grandstand", priceRange: [200, 400], note: "Various grandstands across the circuit." },
      { name: "COTA Club / VIP", priceRange: [800, 2000], note: "Packages vary. Check circuitoftheamericas.com." },
    ],
    flights: [
      { fromRegion: "UK", range: [500, 900], currency: "GBP" },
      { fromRegion: "Western Europe", range: [600, 1000], currency: "EUR" },
      { fromRegion: "North America (East Coast)", range: [150, 350], currency: "USD" },
      { fromRegion: "Asia-Pacific", range: [800, 1400], currency: "USD" },
    ],
    accommodation: [
      { tier: "Budget (motel / hostel)", perNight: [100, 180] },
      { tier: "Mid-range (3–4 star Austin)", perNight: [200, 400] },
      { tier: "Premium", perNight: [400, 800] },
    ],
    dailyFood: [25, 60],
    localTransport: [10, 30],
    weekendTotal: { budget: 500, midRange: 1300, premium: 2800 },
    moneyTips: [
      "Book early — Austin hotels during COTA events are among the most expensive in North America.",
      "Rideshare from central Austin is easiest. Parking at the circuit is a nightmare on race day.",
      "Barbecue and live music are Austin's strengths — eat off-site where possible.",
      "COTA is a world-class venue with great sightlines across multiple grandstands.",
      "MotoGP Americas is in late March — weather is warm but can be unpredictable (Texas heat or sudden cold fronts).",
    ],
    lastUpdated: "April 2026",
  },
];

export const getCostsBySlug = (slug: string): RaceCostData | undefined =>
  raceCosts.find((c) => c.raceSlug === slug);

export const racesWithCosts = (): string[] => raceCosts.map((c) => c.raceSlug);
