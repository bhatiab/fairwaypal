/**
 * Camping information for MotoGP circuits with significant camping culture.
 * Evergreen data — circuit camping infrastructure doesn't change year-to-year.
 */

export interface CampingSite {
  name: string;
  description: string;
  priceRange?: string;
  walkable: boolean;
}

export interface CampingInfo {
  raceSlug: string;
  intro: string;
  officialCampsites: CampingSite[];
  wildCamping: string | null;
  tips: string[];
}

const campingData: CampingInfo[] = [
  {
    raceSlug: "mugello",
    intro: "Camping is central to the Mugello experience. Most fans camp for the full weekend and the atmosphere in the campsites runs as late as the bars.",
    officialCampsites: [
      {
        name: "Mugello Verde",
        description: "The main official campsite, within walking distance of the circuit. Showers, toilets, and small shop on site.",
        priceRange: "€80–120 for the weekend",
        walkable: true,
      },
      {
        name: "Camping Il Sergente",
        description: "Smaller site about 2 km from the circuit. Quieter than Mugello Verde but still lively.",
        priceRange: "€60–90 for the weekend",
        walkable: true,
      },
    ],
    wildCamping: "Wild camping in nearby fields is common but unregulated. No facilities. Arrive early Thursday to secure a spot.",
    tips: [
      "Book official campsites months in advance — they sell out",
      "Bring earplugs. The atmosphere runs late every night",
      "The Tuscan hills mean cool nights even in May — bring warm layers for sleeping",
      "Stock up on supplies in Scarperia or Borgo San Lorenzo before heading to the circuit",
    ],
  },
  {
    raceSlug: "le-mans",
    intro: "Le Mans has one of the strongest camping cultures in motorsport. Many ticket packages include free camping access, making it one of the cheapest MotoGP weekends.",
    officialCampsites: [
      {
        name: "Circuit Camping (Zones Bleue/Verte)",
        description: "Free camping included with most general admission tickets. Basic facilities. Massive atmosphere — this is where the party is.",
        priceRange: "Free with ticket",
        walkable: true,
      },
      {
        name: "Houx Annexe",
        description: "Slightly more organised camping zone with better toilet/shower facilities. Still included with ticket.",
        priceRange: "Free with ticket",
        walkable: true,
      },
    ],
    wildCamping: null,
    tips: [
      "Arrive Thursday to secure a good pitch — the free camping fills fast",
      "Le Mans in May means rain is likely. Bring a proper waterproof tent, not a festival tent",
      "The on-site supermarket sells basics but prices are marked up. Stock up at a Carrefour or Leclerc in Le Mans city beforehand",
      "The atmosphere in the camping zones is legendary but loud — earplugs are essential for sleeping",
    ],
  },
  {
    raceSlug: "assen",
    intro: "The Dutch TT camping scene is a festival in itself. Multiple campsites surround the circuit and the party starts on Thursday. It's a pilgrimage for European MotoGP fans.",
    officialCampsites: [
      {
        name: "Camping de Haar",
        description: "The largest campsite, right next to the circuit with direct access. Full facilities including showers and food stalls.",
        priceRange: "€50–80 for the weekend",
        walkable: true,
      },
      {
        name: "Mandeveen Camping",
        description: "The famous party campsite. Known for its nightly entertainment and social atmosphere. Not for light sleepers.",
        priceRange: "€60–90 for the weekend",
        walkable: true,
      },
    ],
    wildCamping: "Some farmers open their fields for camping during TT week. Look for hand-painted signs along the roads approaching Assen. Basic — bring everything.",
    tips: [
      "The Dutch TT is a sell-out every year. Book camping by February",
      "Cycling is the best way to get around Assen during race week — bring or rent a bike",
      "Dutch weather is unpredictable in late June — waterproofs are not optional",
      "Mandeveen is the party. De Haar is the circuit access. Choose based on your sleep needs",
    ],
  },
  {
    raceSlug: "sachsenring",
    intro: "German fans take camping at the Sachsenring seriously. Several sites open around the circuit for race weekend with an organised, efficient atmosphere.",
    officialCampsites: [
      {
        name: "Circuit Campsite",
        description: "The main official campsite adjacent to the circuit. Basic facilities, well-organised. Walking distance to the grandstands.",
        priceRange: "€40–60 for the weekend",
        walkable: true,
      },
    ],
    wildCamping: null,
    tips: [
      "German campsites are well-organised — follow the rules and everyone has a good time",
      "July weather is warm but thunderstorms are possible. Bring a rain plan",
      "Stock up in Hohenstein-Ernstthal before heading to the circuit",
    ],
  },
  {
    raceSlug: "phillip-island",
    intro: "Phillip Island camping is a unique experience — coastal campsites with ocean views and wildlife. Accommodation on the island is extremely limited, so camping is often the only option for race weekend.",
    officialCampsites: [
      {
        name: "Circuit Camping Ground",
        description: "On-site camping that opens for race weekend. Basic facilities. The closest option to the circuit.",
        priceRange: "AUD 100–150 for the weekend",
        walkable: true,
      },
      {
        name: "Phillip Island Caravan Park",
        description: "Year-round caravan park in Cowes, about 15 minutes' drive from the circuit. Better facilities, powered sites available.",
        priceRange: "AUD 50–80/night",
        walkable: false,
      },
    ],
    wildCamping: null,
    tips: [
      "Book camping the moment tickets go on sale — the island has extremely limited beds",
      "October weather on Phillip Island is unpredictable. Ocean winds make it feel colder than Melbourne. Bring warm layers",
      "You will need a car on the island — there is no public transport to the circuit",
      "Wildlife is everywhere. Penguins, wallabies, and wombats are genuine neighbours",
    ],
  },
  {
    raceSlug: "silverstone",
    intro: "Silverstone offers official on-site camping that puts you within walking distance of the gates. It's the most convenient accommodation option — hotels around Silverstone are sparse and expensive on race weekend.",
    officialCampsites: [
      {
        name: "Woodlands Campsite",
        description: "The main official campsite with hot showers, flushing toilets, and food vendors. Walking distance to the circuit entrance.",
        priceRange: "£80–120 for the weekend",
        walkable: true,
      },
      {
        name: "Whittlebury Campsite",
        description: "Slightly further from the circuit but quieter. Good for families. Shuttle bus to the gates on race day.",
        priceRange: "£60–90 for the weekend",
        walkable: false,
      },
    ],
    wildCamping: null,
    tips: [
      "Pre-book camping when you buy your race tickets — it's a package deal and sells out",
      "Silverstone in August can still be cold and wet. Pack as if it will rain, because it probably will",
      "Bring wellies. The camping fields turn to mud in wet weather — 'Rainstone' earns its nickname",
      "There are no shops near the circuit. Bring all food and supplies with you",
    ],
  },
  {
    raceSlug: "aragon",
    intro: "Aragon is one of the more remote circuits, and camping nearby is a practical option. Sites are basic but the open landscape means good views and quiet nights (outside the party zones).",
    officialCampsites: [
      {
        name: "MotorLand Camping Area",
        description: "Basic camping area near the circuit. Minimal facilities — bring everything you need. Walking distance to the entrance.",
        priceRange: "€30–50 for the weekend",
        walkable: true,
      },
    ],
    wildCamping: "Some fans camp in the open fields around the circuit. It's dry and hot in Aragon — shade is scarce.",
    tips: [
      "Late August in Aragon is hot — 35°C+ is normal. Bring serious sun protection and extra water",
      "The nearest town (Alcañiz) is 10 km away. A car is essential for supplies",
      "Shade structures (pop-up gazebos) are more useful than a fancy tent in this heat",
    ],
  },
];

export const getCampingBySlug = (slug: string): CampingInfo | undefined =>
  campingData.find((c) => c.raceSlug === slug);

export const CAMPING_CIRCUITS = new Set(campingData.map((c) => c.raceSlug));
