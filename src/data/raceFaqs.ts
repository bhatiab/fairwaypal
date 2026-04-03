/**
 * Centralized FAQ data for MotoGP race pages.
 * Used to generate FAQPage schema (JSON-LD) on all race hub pages.
 *
 * Structure:
 * - commonMotoGPFaqs: shared across all 22 races
 * - raceFaqs: race-specific questions (3-5 per race)
 * - getFaqsForRace(slug): returns race-specific + common FAQs
 */

export interface RaceFaq {
  q: string;
  a: string;
}

/** Shared across all race hubs — MotoGP-specific questions fans always ask */
export const commonMotoGPFaqs: RaceFaq[] = [
  {
    q: "What support races happen at a MotoGP weekend?",
    a: "Every MotoGP round includes full Moto2 and Moto3 championship races. Selected European rounds also feature MotoE (electric). Friday has free practice for all classes, Saturday has qualifying and sprint races, and Sunday has the main races — typically Moto3, then Moto2, then MotoGP.",
  },
  {
    q: "What is the MotoGP Sprint Race format?",
    a: "Every Saturday features a half-distance Sprint Race for the MotoGP class. It awards half points and runs after qualifying. The Sprint is a standalone race — not a heat or qualifier for Sunday. Arrive early Saturday to catch qualifying and the Sprint back-to-back.",
  },
  {
    q: "Can I access the MotoGP paddock?",
    a: "MotoGP paddock access is far more accessible than in F1. Many circuits sell paddock walk passes or include them in premium ticket packages. Some circuits offer free pit lane walks on Thursday or Friday. Check the specific circuit's ticket options — VIP Village and Paddock Experience packages typically include guided access.",
  },
];

/** Per-race specific FAQs — migrated from inline schemas */
export const raceFaqs: Record<string, RaceFaq[]> = {
  jerez: [
    {
      q: "How do I get to Jerez MotoGP circuit?",
      a: "The easiest option is the shuttle bus from the Minotauro roundabout in Jerez (€1.10, every 7 min at peak, 30 min journey). Trains run from Seville to Jerez in about 1 hour for €11-16. Jerez Airport (XRY) is 15 minutes away, or fly into Seville Airport (SVQ, 1h15m by car).",
    },
    {
      q: "What can I bring to Jerez MotoGP?",
      a: "Plastic bottles (no caps), non-alcoholic food under 500g, camping chairs (GA areas only), and standard cameras. Glass, metal containers, alcohol, drones, and items over 500g are prohibited.",
    },
    {
      q: "What is the weather like at Jerez in April?",
      a: "Late April in Jerez averages 23°C (73°F) but spring weather is variable. Expect warm afternoons with cooler mornings. Rain is possible so pack layers and a light rain jacket.",
    },
  ],
  "le-mans": [
    {
      q: "How do I get to Le Mans Bugatti Circuit from the city?",
      a: "The easiest option is Tram T1 from the Gares stop (next to the train station) to Antarès-Stade Marie Marvingt — about 20 minutes and runs from 5:30 AM on race days. Shuttle buses also run from the city centre. Do not drive on Sunday — road congestion near the circuit is severe.",
    },
    {
      q: "How do I get to Le Mans from Paris?",
      a: "The fastest route is TGV from Paris Montparnasse to Le Mans — about 55 minutes. From Paris CDG airport, there is a direct TGV stopping at Terminal 2 that takes around 1 hour 45 minutes, so you do not need to travel into central Paris. Book at SNCF Connect or Trainline — trains fill up on race weekend.",
    },
    {
      q: "What is the weather like at Le Mans MotoGP in May?",
      a: "Early May in Le Mans is cool and unpredictable. Average high is 17–18°C with lows around 8°C at night. Rain falls on roughly half of all days in May. Pack waterproofs, warm layers, and waterproof footwear — MotoGP France has a well-earned reputation for wet race weekends.",
    },
  ],
  catalunya: [
    {
      q: "How do I get to Circuit de Barcelona-Catalunya for MotoGP?",
      a: "The easiest option is the R2/R2N commuter train from Barcelona Sants or Passeig de Gràcia to Montmeló station (~30 min, €2.80). Free shuttle buses run from Montmeló station to the circuit entrance on race weekend. Alternatively, the Sagalès bus runs direct from Estació del Nord in Barcelona (45 min, ~€18 return) with a drop-off 300m from the main gate.",
    },
    {
      q: "Can I bring food and drink to the Catalunya MotoGP?",
      a: "Unlike some circuits, Circuit de Barcelona-Catalunya does not allow outside food or beverages (except for documented medical needs). PET plastic bottles up to 1.5 litres are allowed but no glass, metal containers, or alcohol. Backpacks over 15 litres are not permitted.",
    },
    {
      q: "What is the weather like at Barcelona MotoGP in May?",
      a: "Mid-May in Montmeló averages 20–22°C (68–72°F) with cool mornings around 14°C. The circuit is largely exposed so UV can be strong on sunny days. Rain is possible — approximately 6 rainy days on average in May — so pack a light rain layer.",
    },
    {
      q: "Which grandstand is best for MotoGP at Circuit de Barcelona-Catalunya?",
      a: "Grandstand K overlooks Turn 1 — the main overtaking spot at the end of the long main straight. Grandstand L on the hillside covers the technical middle sector and offers views of multiple corners. The main grandstand (Tribuna) is one of the few covered options at the circuit.",
    },
  ],
  mugello: [
    {
      q: "How do I get to Mugello Circuit?",
      a: "Mugello is 30 km north of Florence in the Tuscan hills. There is no train station — most fans drive or take shuttle buses from Florence. Race-day shuttles run from Piazzale Montelungo. Traffic after the race is heavy; leave early or stay near the circuit.",
    },
    {
      q: "Can I camp at Mugello MotoGP?",
      a: "Yes — camping is a major part of the Mugello experience. Mugello Verde is the main official campsite, walkable to the circuit. Book well in advance. Wild camping in nearby fields is common but unregulated. Bring earplugs — the atmosphere runs late.",
    },
    {
      q: "What is the atmosphere like at Mugello MotoGP?",
      a: "Mugello is widely considered the best atmosphere on the MotoGP calendar. Italian fans are passionate, loud, and incredibly welcoming. The hillside GA areas fill up early. Expect flares, flags, and non-stop noise during the race.",
    },
  ],
  assen: [
    {
      q: "How do I get to TT Circuit Assen?",
      a: "Assen station is 15 minutes by bus from the circuit. Trains run from Amsterdam Centraal to Assen (about 2 hours, change at Zwolle). Free shuttle buses run from Assen station to the circuit on race days. Cycling is also popular — bike parking is available at the circuit.",
    },
    {
      q: "Can I camp at the Dutch TT?",
      a: "Yes — camping is a Dutch TT tradition. Multiple campsites surround the circuit, from basic fields to organized sites with facilities. The party atmosphere starts Thursday. Book early — popular sites sell out months in advance.",
    },
    {
      q: "What makes the Dutch TT special?",
      a: "The Dutch TT at Assen is the oldest event on the MotoGP calendar, running since 1949. It has a unique festival atmosphere with camping, live music, and the famous 'Mandeveen' campsite party scene. The circuit is one of the few purpose-built tracks on the calendar.",
    },
  ],
  sachsenring: [
    {
      q: "How do I get to Sachsenring?",
      a: "The nearest train station is Hohenstein-Ernstthal. Shuttle buses run from there to the circuit on race days. From Leipzig or Chemnitz, regional trains take about 1 hour. Parking is available but post-race traffic is heavy.",
    },
    {
      q: "Can I camp at Sachsenring MotoGP?",
      a: "Yes — camping is popular at the German GP. Several campsites around the circuit open for race weekend. The atmosphere is lively with German fans known for their organised and enthusiastic support.",
    },
  ],
  silverstone: [
    {
      q: "How do I get to Silverstone MotoGP?",
      a: "Silverstone has no rail station. The nearest are Milton Keynes Central (20 min by car) and Northampton (25 min). Shuttle buses run from both stations on race days. Most fans drive — pre-book parking to avoid the day-rate markup.",
    },
    {
      q: "What is the weather like at Silverstone in August?",
      a: "August in Northamptonshire averages 21°C but Silverstone is exposed with no shelter from wind. Rain is always possible — the circuit earned the nickname 'Rainstone' for a reason. Pack waterproof layers even if the forecast looks clear.",
    },
  ],
  austria: [
    {
      q: "How do I get to the Red Bull Ring?",
      a: "The Red Bull Ring is in Spielberg, Styria. Shuttle buses run from Knittelfeld and Leoben stations. Graz is the nearest major city (about 80 km). Many fans drive — the A9 motorway gets you close, but last-mile traffic queues on race day.",
    },
    {
      q: "What is the Red Bull Ring known for in MotoGP?",
      a: "The Red Bull Ring is one of the shortest laps on the calendar with heavy braking zones — it produces dramatic races and frequent overtaking. The Spielberg mountains provide a stunning backdrop. Red Bull's home investment means excellent fan facilities.",
    },
  ],
  misano: [
    {
      q: "How do I get to Misano World Circuit?",
      a: "The circuit is 3 km from Misano Adriatico and 15 km from Rimini. Shuttle buses run from Rimini and Riccione on race days. The nearest station is Cattolica-San Giovanni-Gabicce (5 km). Many fans combine the race with a Rimini beach holiday.",
    },
    {
      q: "What is the atmosphere like at Misano MotoGP?",
      a: "Misano is Valentino Rossi's home race and the yellow Rossi fan army still turns out in force. The circuit sits near the Adriatic coast, so fans combine racing with seaside nightlife in Rimini. Expect passionate Italian support and a party atmosphere.",
    },
  ],
  "phillip-island": [
    {
      q: "How do I get to Phillip Island MotoGP?",
      a: "Phillip Island is about 140 km (1.5–2 hours) south-east of Melbourne. Most fans drive via the M1/Bass Highway. There is no rail service to the island. Bus charters run from Melbourne on race days but book early. Pre-book parking — the island has limited options.",
    },
    {
      q: "Can I camp at Phillip Island MotoGP?",
      a: "Yes — several caravan parks and camping grounds operate on and near the island. The circuit's own camping area opens for race weekend. Book months in advance as Phillip Island accommodation is extremely limited and the race is a sellout.",
    },
    {
      q: "What makes Phillip Island special for MotoGP?",
      a: "Phillip Island is consistently voted one of the best circuits on the MotoGP calendar. The fast, flowing layout and dramatic coastal scenery make it a fan and rider favourite. The ocean winds create unpredictable conditions that often produce classic races.",
    },
  ],
  thailand: [
    {
      q: "How do I get to Chang International Circuit?",
      a: "The circuit is 10 km from Buriram city centre. Tuk-tuks and songthaews run to the circuit on race day. Fly into Buriram Airport (BFV) from Bangkok, or take the train (5-6 hours from Bangkok Hua Lamphong). Many fans base in Buriram city and it is walkable for the committed.",
    },
    {
      q: "What is the weather like in Buriram for MotoGP?",
      a: "Late February/early March is hot season in Buriram — expect 33-36°C with high humidity. Bring sun protection, stay hydrated, and use the shaded grandstands where possible. Rain is unlikely at this time of year.",
    },
  ],
  qatar: [
    {
      q: "What is special about the Qatar MotoGP?",
      a: "The Lusail International Circuit hosts MotoGP under floodlights — one of the most visually spectacular races on the calendar. The night race format means cooler temperatures and a unique atmosphere. Races start late evening local time.",
    },
    {
      q: "How do I get to Lusail Circuit?",
      a: "Lusail is about 25 km north of Doha. The Doha Metro Red Line runs to Lusail, with shuttle buses connecting to the circuit on race days. Taxis and ride-hailing from Doha take about 30 minutes. The circuit is close to Lusail City's hotels.",
    },
  ],
  valencia: [
    {
      q: "How do I get to the Circuit Ricardo Tormo?",
      a: "The circuit is in Cheste, 20 km west of Valencia city. Special bus services run from Valencia city centre on race days. Trains from Valencia Nord to Cheste take about 30 minutes. The circuit has large car parks but post-race exit is slow.",
    },
    {
      q: "Why is Valencia important in MotoGP?",
      a: "Valencia traditionally hosts the season finale — where championships are decided. The compact circuit with a mix of slow and fast corners often produces dramatic last-round showdowns. The city of Valencia itself is a fantastic base with great food, architecture, and nightlife.",
    },
  ],
  portimao: [
    {
      q: "How do I get to Portimao MotoGP?",
      a: "Autódromo Internacional do Algarve is 5 km north of Portimão in southern Portugal. Faro Airport (FAO) is the nearest international airport, about 70 km east. Shuttle buses run from Portimão city on race days. Most fans drive or take taxis — the Algarve has good road infrastructure.",
    },
    {
      q: "What makes Portimao unique for MotoGP?",
      a: "The Algarve circuit is famous for its dramatic elevation changes — blind crests and plunging downhill braking zones make it one of the most exciting tracks to watch. The mild Algarve climate and nearby beaches make it a popular race weekend destination.",
    },
  ],
  brazil: [
    {
      q: "Is the Brazil MotoGP a new race?",
      a: "MotoGP returns to Goiânia in 2026 for the first time since 1992. The circuit has been modernised to meet current FIM safety standards. Expect a passionate Brazilian crowd — motorsport has a huge following in the country.",
    },
  ],
  hungary: [
    {
      q: "Is the Hungary MotoGP a new race?",
      a: "Yes — the Grand Prix of Hungary debuts in 2026 at the new Balaton Park Circuit near Lake Balaton. This is a purpose-built facility designed to FIM Grade A standards. Being a new circuit, expect teething issues with access and facilities in the first year.",
    },
  ],
  aragon: [
    {
      q: "How do I get to MotorLand Aragon?",
      a: "MotorLand Aragon is near Alcañiz in Teruel province, one of the more remote circuits on the calendar. Zaragoza is the nearest large city (about 120 km). Most fans drive — there is limited public transport to the circuit. Shuttle buses run from Alcañiz on race days.",
    },
  ],
  brno: [
    {
      q: "How do I get to Brno MotoGP circuit?",
      a: "The Automotodrom Brno is about 15 km from Brno city centre. Shuttle buses run from Brno main station on race days. Brno is well connected by rail from Prague (2.5 hours), Vienna (1.5 hours), and Bratislava (1.5 hours).",
    },
  ],
};

/**
 * Returns race-specific FAQs followed by common MotoGP FAQs.
 * Used for FAQPage schema on all 22 race hub pages.
 */
export const getFaqsForRace = (slug: string): RaceFaq[] => {
  const specific = raceFaqs[slug] ?? [];
  return [...specific, ...commonMotoGPFaqs];
};
