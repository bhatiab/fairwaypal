/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'The Algarve for Non-Golfers: A Partner\'s Guide | FairwayPal',
  description:
    'A friendly, honest guide to the Algarve for the partner who is not playing. Beaches, sea caves, Lagos and Tavira old towns, the Benagil cave kayak tour, Alentejo wine country, and a daily rhythm that turns a golf trip into a holiday.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/algarve-for-non-golfers' },
  openGraph: {
    title: 'The Algarve for Non-Golfers: A Partner\'s Guide',
    description:
      'How to make a Portugal golf trip a real holiday for the partner who is not teeing off. Beaches, caves, food, and pace.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Algarve for Non-Golfers: A Partner\'s Guide',
  description:
    'A practical guide to the Algarve for non-golfing partners. Beaches, sea caves, Lagos and Tavira, Benagil cave access rules, Alentejo wine country, spa options, and a sample 4-day itinerary.',
  url: 'https://www.fairwaypal.com/blog/algarve-for-non-golfers',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://www.fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://www.fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.fairwaypal.com/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'The Algarve for Non-Golfers',
      item: 'https://www.fairwaypal.com/blog/algarve-for-non-golfers',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the Algarve a good destination for non-golfing partners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, comfortably one of the best in international golf. The Algarve is built around a dramatic coastline of limestone cliffs, sea caves, and Atlantic beaches, with charming old towns at Lagos, Tavira, and Faro, fresh seafood at clifftop restaurants, and Alentejo wine country 90 minutes north. Most partners arrive thinking they are along for the golfers and leave wanting to come back. It pairs uniquely well with villa accommodation that splits across 8 to 10 people, which makes a partner trip economical too.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is there to do in the Algarve for non-golfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The signature non-golf experiences are: a kayak or boat tour to Benagil Cave (the famous skylight grotto), the Ponta da Piedade cliff walks near Lagos, beach days at Praia da Marinha or Praia da Falésia, exploring Lagos old town and the harbour, a day in Tavira and the Ria Formosa lagoon, an Alentejo wine day trip, and long lunches at clifftop seafood restaurants. The variety is genuine and the pace is relaxed.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you still swim into Benagil Cave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Swimming into Benagil Cave was banned in August 2024 and the rule remains in force in 2026. The only way to enter is on a boat tour or a guided kayak tour with a licensed operator. Guided kayak tours are limited to six kayaks per tour leader, and tour operators are not permitted to land on the sand inside the cave. Self-guided kayak rental within the cave area is also no longer allowed. Book a guided kayak tour from Portimão, Albufeira, or Faro for the most intimate experience, or a boat tour from Benagil itself for the simpler option.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time of year for partners to visit the Algarve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "March through May and September through November are the sweet spots. Temperatures are 18 to 25°C, humidity is low, courses are uncrowded, and prices are reasonable. October is particularly lovely. Peak summer (July and August) is hot (30 to 38°C) and busy with European holidaymakers, with maximum hotel prices. December through February is mild (15 to 18°C) and quiet, but the Atlantic can be rough and rain is more likely. Most golf groups travel April to early June or mid-September to late October.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long should non-golfing partners stay in the Algarve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Four to seven nights works well. Four nights covers Lagos and the cliff coast, a Benagil cave tour, and a day in Tavira. Five to seven nights folds in an Alentejo wine day, more beach days, and a slow rhythm. The Algarve is one of the rare golf destinations where partners often want to extend the trip rather than shorten it. Many groups do an Algarve trip annually because the value, weather, and partner experience make it the easiest international golf trip to organise.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need a car at an Algarve resort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Most courses are 20 to 60 minutes apart along the A22 motorway, and partner activities (Benagil, Ponta da Piedade, Lagos, Tavira, the Alentejo) require driving. If your group is staying in a villa, you will already have at least one rental from Faro Airport (FAO). Driving in the Algarve is easy: signs are clear, motorways are well-maintained, and traffic outside July and August is light. Just remember to put both drivers on the rental.",
      },
    },
  ],
}

export default function AlgarveForNonGolfersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }}
      />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        {/* Hero */}
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">
          The Algarve for Non-Golfers: A Partner's Guide
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>11 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          The Algarve is the rare golf destination where the trip becomes a real holiday for the partners. Limestone cliffs that drop into the Atlantic, sea caves you can kayak into, beaches that Europe rates among its best, charming whitewashed old towns, fresh seafood at every meal, and 300 days of sunshine a year. If you have a non-golfing partner coming on a golf trip, the Algarve is one of the easiest yes votes you will ever ask for. Here is the friendly guide to making the most of it.
        </p>

        {/* Quick verdict */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The honest take</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">The Algarve is a holiday with golf attached</span>, not the other way around. The cliff coast, the food, the villa-with-pool accommodation, the easy pace, and the genuine variety of partner activities mean non-golfers tend to leave the Algarve already planning the next trip. It pairs uniquely well with mid-sized groups (6 to 10) where some are playing and some are on the pool deck.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Why Algarve works */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Why the Algarve works for partners
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Algarve runs along roughly 90 miles of southern Portuguese coastline, divided into the Barlavento (the western, cliff-and-beach half, where most of the iconic scenery is) and the Sotavento (the eastern, calmer half with the lagoon and barrier islands of Ria Formosa). Most golf resorts cluster around the central Golden Triangle (Vilamoura, Quinta do Lago, Vale do Lobo), which puts you within 30 to 60 minutes of nearly every major partner activity in either direction.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The combination of villa accommodation, predictable weather, short driving distances, and a genuinely relaxed pace makes this the easiest international golf trip to share with non-golfing partners. Mornings can be golf, afternoons can be beach or pool, evenings can be long dinners on a terrace. Nobody is having to bend their week to fit somebody else's plan.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The honest caveat: the Algarve is not for partners who specifically want a city break. There is no Lisbon-equivalent here. Faro is pleasant but small. Lagos and Tavira are charming but compact. If your partner needs museums, theatre, dense neighbourhoods, and big-city energy, this is the wrong destination. For nearly every other partner type, it is the right one.
            </p>
          </section>

          {/* Sample itinerary */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              A sample 4-day partner itinerary
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Here is what a relaxed Algarve trip looks like from the partner's side, mapped against the golfers playing the Golden Triangle courses. The shape: a slow morning, one anchor activity, a long afternoon, and dinner with the group.
            </p>
            <div className="mt-6 space-y-4">
              <DayCard
                day="Day 1: settle in and Lagos"
                morning="Arrive at the villa from Faro Airport (FAO). Coffee on the terrace. Pool dip."
                afternoon="Drive into Lagos (about 45 minutes from the Golden Triangle). Wander the old town, the harbour, and the city walls. Late lunch on a sunny square."
                evening="Sunset at Ponta da Piedade (a 10 minute drive from Lagos centre, the cliffs are spectacular at golden hour). Group dinner back at the villa."
              />
              <DayCard
                day="Day 2: Benagil Cave"
                morning="Drive to Portimão or Albufeira for a guided kayak tour to Benagil Cave (about 2 to 3 hours total)."
                afternoon="Lunch in Carvoeiro, a clifftop village 5 minutes from Benagil. Beach time at Praia da Marinha (a 10 minute drive, often cited as one of Europe's best beaches)."
                evening="Easy evening. Group dinner at a clifftop restaurant in the area."
              />
              <DayCard
                day="Day 3: pool day"
                morning="Slow morning at the villa. Coffee and book by the pool. Lunch at a local seafood spot."
                afternoon="Spa appointment at one of the resort spas (Conrad Algarve, Pine Cliffs, Vila Vita Parc all have excellent options). Or just nap."
                evening="Dinner at Vilamoura marina with the group. Cocktails afterwards."
              />
              <DayCard
                day="Day 4: Tavira and the eastern Algarve"
                morning="Drive 45 minutes east to Tavira. Walk the Roman bridge, the whitewashed churches, the old town."
                afternoon="Boat across to Ilha de Tavira (the barrier island). Long beach walk, lunch at a beach restaurant."
                evening="Drive back via the Ria Formosa for flamingos at sunset. Final group dinner at the villa."
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Stretch the trip to 5 or 6 nights and you can fold in an Alentejo wine day (about 90 minutes north of Faro) and an extra beach day. Few partners will say no.
            </p>
          </section>

          {/* The cliff coast */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The cliff coast: Ponta da Piedade and the Benagil cave
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Two distinct stretches of cliff coastline are the visual headline of the Algarve, and they are easy to confuse before you arrive.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Ponta da Piedade</strong> sits just south of Lagos: a headland of dramatic limestone arches, sea stacks, and grottos. Walk the clifftop path for free, descend the (steep) staircase to the small cove at the bottom, or take a 60 minute boat tour from Lagos marina that loops through the rock formations close up. The clifftop walk is partner-friendly and free; the boat tour is the more memorable experience. Sunset here is genuinely worth the trip.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Benagil Cave</strong> is the famous one with the natural skylight, between Albufeira and Lagos on the central Algarve coast. As of August 2024, swimming into the cave is banned. The only way in is on a boat tour or a guided kayak tour with a licensed operator. Guided kayak tours are limited to six kayaks per leader, which keeps the experience small and intimate. You can land on the inside of the cave on a kayak tour but not on a boat tour, and self-guided kayak rentals are no longer allowed in the cave area. Tours leave from Portimão, Albufeira, Lagos, and from Benagil beach itself.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Both are doable in a half-day. Most groups do Ponta da Piedade on a Lagos day and Benagil as a separate excursion. The kayak tour is the better one if your partner is comfortable on the water; the boat tour is fine if not.
            </p>
          </section>

          {/* Beaches */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The beaches
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Algarve has the best beaches in continental Europe, full stop. The Atlantic water is cooler than the Mediterranean (you will know within 10 seconds of getting in), but the cleanliness, the dramatic cliffs, and the sheer variety more than compensate.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Praia da Marinha</strong>, near Carvoeiro, is regularly cited as one of Europe's best beaches. Limestone cliffs, clear water, and access via a long staircase keep crowds manageable.</li>
              <li><strong>Praia da Falésia</strong>, near Albufeira, is a 4 mile stretch of red and ochre cliffs above wide golden sand. Easier access, less photogenic but more spacious. Long beach walks are the move here.</li>
              <li><strong>Praia Dona Ana</strong> and <strong>Praia do Camilo</strong>, both near Lagos, are smaller, dramatic, and reached by stairs. Better for a half-day than a full beach day.</li>
              <li><strong>Meia Praia</strong> in Lagos is the long, flat alternative. Good for proper swimming, walking, and watersports.</li>
              <li><strong>Ilha de Tavira</strong>, on the eastern Algarve, is reached by a 5 minute ferry and gives you miles of barrier-island beach with almost no infrastructure. Bring lunch and a book.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Bring beach shoes if your partner prefers them; some of the smaller cove beaches have rocks and shells. A beach umbrella is worth the rental fee from June to September.
            </p>
          </section>

          {/* Lagos and Tavira */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The old towns: Lagos, Tavira, and Faro
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Algarve does small towns extremely well. Three are worth a half-day each, and they each have a different character.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Lagos</strong> is the lively one. A 16th-century walled old town, a working harbour, plenty of restaurants, and a young feel thanks to the surf scene. The Igreja de Santo António is a small Baroque church with extraordinary gilded interior; the slave market site near the harbour has a small but moving museum. Lunch on a sunny square is the standard play. Park near the Marina (the old town is pedestrian-only).
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Tavira</strong> is the elegant one. About 45 minutes east of Faro, with a Roman bridge, eight whitewashed churches, a quiet old town that climbs a hill toward a small castle, and unusually good restaurants for a town this size. Tavira pairs perfectly with the ferry across to Ilha de Tavira for a beach lunch.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Faro old town</strong> is the smallest and the easiest to dismiss, but it is genuinely charming once you walk inside the gates. Cobbled streets, the cathedral, and the Capela dos Ossos (a small chapel of bones, weirder and more interesting than it sounds). Worth a couple of hours if you have an early or late flight at FAO.
            </p>
          </section>

          {/* Wine */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The Alentejo wine day
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              About 90 minutes north of Faro, the landscape changes from coastal to rolling cork-oak countryside, and you cross into the Alentejo, Portugal's wine heartland. Most partner groups make a day trip here at least once, and many call it the best day of the trip.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Esporão, Cartuxa, and Herdade do Esporão are the three most accessible larger estates and offer guided tours, tastings, and lunch on-site. Smaller estates (book ahead) often deliver a more personal experience. Most full-day tours cover two estates with a long lunch in between, leaving you back at the villa by early evening. If you want to drive yourselves, plan for one driver to spit and the others to taste, or use a hired driver.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The wines worth knowing: Alentejo reds (Aragonez, Trincadeira, Touriga Nacional) are full-bodied and inexpensive by international standards. Whites from Antão Vaz are crisp and a delight in summer. Bring a few bottles back to the villa.
            </p>
          </section>

          {/* Spa */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Spa and wellness
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Algarve has serious spa infrastructure, especially in the Golden Triangle. Three options stand out for partners.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>The Conrad Algarve Spa</strong>, near Quinta do Lago, is the polished resort option with a beautiful indoor-outdoor design, hammam, and the full luxury menu. Expensive, easy to book if you are not staying on-property, and a short drive from most golf resorts.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>The Vila Vita Parc Spa by Sisley</strong>, near Carvoeiro, is on the grounds of one of the best resorts in the region and worth the drive. Excellent treatments, a spectacular setting, and pairs naturally with a Praia da Marinha beach day.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Pine Cliffs Resort Spa</strong>, near Albufeira, has a slightly more laid-back feel and is a touch more affordable than the Conrad and Vila Vita. Pine Cliffs also has a very good wellness centre with thermal pools.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Local Lagos and Tavira have independent day spas that cost a fraction of the resort prices. Worth a look if you want a quiet morning massage rather than a full day.
            </p>
          </section>

          {/* Food */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The food
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Algarve food is reason enough to go even without the golf. The Atlantic provides extraordinary seafood, the cliff-top and beach-front restaurants are spectacular, and the prices are honest by the standards of any other premium European destination.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The dishes worth ordering: <strong>cataplana</strong> (a copper-pan seafood stew, perfect for sharing), <strong>arroz de marisco</strong> (rich seafood rice, slightly soupier than risotto), grilled <strong>sardines</strong> in summer (cheap and excellent at any beach restaurant), <strong>polvo à lagareiro</strong> (octopus with garlic, oil, and roast potatoes), and any of the local <strong>amêijoas à Bulhão Pato</strong> (clams in white wine and coriander). For dessert, the <strong>pastel de nata</strong> is a national treasure; the regional <strong>Dom Rodrigo</strong> is a sweet egg-yolk-and-almond confection from the Algarve specifically.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Reservations help in summer, especially at the well-known clifftop restaurants. Outside July and August, walk-ins are usually fine. Most kitchens stop serving by 10 PM.
            </p>
          </section>

          {/* Pace and packing */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Pace, weather, and what to pack
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Algarve runs at a relaxed Iberian pace. Lunch is the bigger meal of the day for many locals; dinner happens later (8 to 9 PM is normal). Shops and smaller restaurants often close for a long midday break. Plan accordingly and lean into the rhythm rather than fighting it.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The weather, by month: March to May is mild (18 to 23°C), with the spring wildflowers in the countryside and uncrowded beaches. June is reliable. July and August are hot (30 to 38°C) and busy, with peak prices. September and October are arguably the best month-and-a-half of the year: warm seas, warm air, fewer crowds. November is cooler but still bright. December to February is mild but the Atlantic can be rough and rain is more likely.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pack: lightweight layers, swimwear, beach shoes if you have them, comfortable walking sandals or trainers for old town cobbles, a sun hat, sunscreen, and a light jacket for evenings (sea breezes cool things down by 8 PM in spring and fall). For the kayak tour, a quick-dry top and shorts. Our <Link href="/blog/golf-trip-packing-list" className="text-gold hover:underline">golf trip packing list</Link> has a full partner section.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Plan a trip the partners will actually enjoy.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              FairwayPal builds a parallel itinerary for non-golfers alongside the golf, so partners arrive knowing exactly what their days look like.
            </p>
            <div className="mt-6 flex justify-center">
              <Link className="primary-link" href="/plan">
                Start Planning
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              The Algarve for non-golfers FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="Is the Algarve a good destination for non-golfing partners?"
                answer="Yes, comfortably one of the best in international golf. Cliff coastline, beaches, sea caves, charming old towns, fresh seafood, Alentejo wine country, and 300 days of sunshine. Pairs uniquely well with villa accommodation that splits across 8 to 10 people."
              />
              <FaqItem
                question="What is there to do in the Algarve for non-golfers?"
                answer="Benagil Cave kayak tour, Ponta da Piedade clifftop walks near Lagos, beach days at Praia da Marinha or Falésia, exploring Lagos and Tavira old towns, an Alentejo wine day, long lunches at clifftop seafood restaurants. The variety is genuine and the pace is relaxed."
              />
              <FaqItem
                question="Can you still swim into Benagil Cave?"
                answer="No, swimming has been banned since August 2024. The only way in is via boat tour or guided kayak tour with a licensed operator. Guided kayak tours are limited to six kayaks per tour leader."
              />
              <FaqItem
                question="When is the best time of year for partners?"
                answer="March to May and September to November are the sweet spots (18 to 25°C, low humidity, uncrowded). October is particularly lovely. Avoid July and August unless you specifically want hot weather and high prices."
              />
              <FaqItem
                question="How long should partners stay in the Algarve?"
                answer="Four to seven nights. Four covers Lagos, Benagil, Tavira. Five to seven adds an Alentejo wine day, more beach days, and a slower rhythm. Many groups extend rather than shorten."
              />
              <FaqItem
                question="Do you need a car?"
                answer="Yes. Courses are 20 to 60 minutes apart along the A22 motorway, and partner activities require driving. The group will already have a rental from Faro Airport. Driving in Portugal is easy outside July and August."
              />
            </div>
          </section>

          {/* Related Posts */}
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Related guides
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost
                href="/destinations/algarve"
                title="Algarve Destination Guide"
                description="The full golf-side guide: courses, hotels, partner activities, and packing."
              />
              <RelatedPost
                href="/blog/algarve-vs-scotland-golf-trip"
                title="Algarve vs Scotland"
                description="Europe's two big group-golf destinations, compared honestly."
              />
              <RelatedPost
                href="/blog/pebble-beach-for-non-golfers"
                title="Pebble Beach for Non-Golfers"
                description="The friendliest US bucket-list resort for partners, in depth."
              />
              <RelatedPost
                href="/blog/bandon-dunes-for-non-golfers"
                title="Bandon Dunes for Non-Golfers"
                description="The full partner-side guide for the most golf-focused destination on the West Coast."
              />
              <RelatedPost
                href="/blog/golf-trip-with-non-golfers"
                title="Golf Trips With Non-Golfers"
                description="The general playbook for planning a trip that works for the whole group."
              />
              <RelatedPost
                href="/blog/golf-trip-packing-list"
                title="Golf Trip Packing List"
                description="What golfers and partners actually need to bring."
              />
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}

function DayCard({ day, morning, afternoon, evening }: { day: string; morning: string; afternoon: string; evening: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-5">
      <h3 className="text-base font-semibold text-foreground">{day}</h3>
      <div className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
        <p><span className="font-bold uppercase tracking-[0.12em] text-fairway-text text-xs">Morning · </span>{morning}</p>
        <p><span className="font-bold uppercase tracking-[0.12em] text-fairway-text text-xs">Afternoon · </span>{afternoon}</p>
        <p><span className="font-bold uppercase tracking-[0.12em] text-fairway-text text-xs">Evening · </span>{evening}</p>
      </div>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-border bg-card/60">
      <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-semibold text-foreground">
        {question}
        <span className="ml-2 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted-foreground">
        {answer}
      </div>
    </details>
  )
}

function RelatedPost({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30"
    >
      <h3 className="text-base font-semibold text-foreground group-hover:text-gold transition-colors">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
    </Link>
  )
}
