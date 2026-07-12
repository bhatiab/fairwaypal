/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Algarve vs Scotland for a Golf Trip: Which Should You Pick? | FairwayPal',
  description:
    'Europe\'s two big group-golf destinations, compared honestly. Courses, costs, weather, partner experience, and a verdict by group type. Sun and value in Portugal, or links and heritage in Scotland?',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/algarve-vs-scotland-golf-trip' },
  openGraph: {
    title: 'Algarve vs Scotland for a Golf Trip: Which Should You Pick?',
    description:
      'Europe\'s two great golf trips compared. Sun, value, and partner-friendly Portugal versus the heritage and links of Scotland.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Algarve vs Scotland for a Golf Trip: Which Should You Pick?',
  description:
    'Head-to-head comparison of the Algarve and Scotland for a group golf trip. Courses, costs, weather, partner experience, logistics, and a verdict by group type.',
  url: 'https://www.fairwaypal.com/blog/algarve-vs-scotland-golf-trip',
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
      name: 'Algarve vs Scotland',
      item: 'https://www.fairwaypal.com/blog/algarve-vs-scotland-golf-trip',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the Algarve or Scotland better for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Both are wonderful, and they are wildly different. The Algarve wins on weather, value, and partner experience: 300 days of sunshine, modern resort courses, villas that sleep 8, and a beach scene that genuinely keeps non-golfers happy. Scotland wins on heritage, course quality, and the pilgrimage feel: links golf as it was invented, the Old Course at St Andrews, whisky country, and weather that is part of the story. If your group is mixed and value matters, lean Algarve. If your group lives for links golf and wants the bucket-list trip, lean Scotland.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Algarve cheaper than Scotland for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, often meaningfully cheaper, especially for groups of 6 or more. Algarve premium courses run €100 to €350 per round, with strong mid-range options at €50 to €100. A 4-night trip typically lands at €1,800 to €3,500 per person. Scotland green fees range from $80 at quirky classics like North Berwick to $250 to $300 for the Old Course at St Andrews. A 5 to 7 night Scotland trip typically runs $2,500 to $5,000 per person from the US. Villa accommodation in the Algarve, splitting 8 to 10 ways, often closes the gap further.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you play the Old Course at St Andrews without booking years in advance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Most groups get on through the Old Course Ballot, a daily lottery run by the St Andrews Links Trust. You enter online up to two days before your preferred date with your group's names, home clubs, and handicaps. Results are posted by 4 PM. The handicap limit is 36 for both men and women, and you'll need a handicap certificate at check-in. Authorised tour operators also hold reserved slots for clients. Build flexibility into your itinerary by booking a Castle Course or Kingsbarns round nearby in case the ballot does not come through.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit the Algarve vs Scotland for golf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Algarve is genuinely playable year-round, with March to May and September to November as the sweet spot (18 to 25°C, low humidity, uncrowded). Scotland's window is narrower: May to September works best, with June and July offering the longest daylight (up to 18 hours). Late May and early September are quieter and slightly cheaper. Avoid Scotland November to March if you want consistent conditions, and avoid July and August in the Algarve if you want low prices and quiet courses.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for partners and non-golfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Algarve, comfortably. The combination of beaches, sea-cave boat tours, Lagos and Tavira old towns, fresh seafood, wine days in the Alentejo, and a villa with a pool is a genuine holiday for partners. Scotland is wonderful but more demanding for non-golfers: the cultural offer (Edinburgh, castles, distilleries, the Highlands) is rich but requires more planning, and the weather is less reliable. Partners who love history, hiking, and whisky will love Scotland. Partners who want sun and a relaxed beach holiday will love the Algarve.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long should a Scotland or Algarve golf trip be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Scotland is best at 5 to 7 nights for a focused St Andrews trip, or 7 to 10 nights if you want to include Edinburgh, Royal Dornoch in the Highlands, or Turnberry in the southwest. Factor in jet lag if flying from the US. The Algarve typically works at 4 to 7 nights: short enough to keep momentum, long enough to play 4 to 5 rounds and still have beach days. Many groups do an Algarve trip annually because the value and weather make it the easiest international golf trip to organise.",
      },
    },
  ],
}

export default function AlgarveVsScotlandPage() {
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
          Algarve vs Scotland for a Golf Trip: Which Should You Pick?
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>11 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Europe gives you two wildly different golf trips, and most groups end up debating between them. The Algarve is sun, value, and a holiday wrapped around the golf. Scotland is the pilgrimage, the heritage, and the most famous links courses on earth. Here is the honest comparison so your group can stop circling and start booking.
        </p>

        {/* Quick Verdict */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Quick Verdict</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Choose the Algarve</span> if value matters, partners are joining, or your group wants a sun-and-golf holiday with beaches and seafood. Budget around €1,800 to €3,500 per person for 4 nights.
          </p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Choose Scotland</span> if your group lives for links golf and wants the heritage trip of a lifetime, including the Old Course at St Andrews. Budget around $2,500 to $5,000 per person for 5 to 7 nights from the US.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Courses */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The courses
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Both destinations have superb golf, but the experience of playing them is very different.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <Link href="/destinations/algarve" className="text-gold hover:underline">The Algarve</Link> packs roughly 40 courses into a 90 mile stretch of southern Portuguese coastline, most of them modern, well-conditioned resort layouts. Monte Rei (a Jack Nicklaus design on cliffs above the Guadiana River) is the consensus best in Portugal and consistently ranks in the top 100 European courses. Quinta do Lago South is the European Tour venue and the most prestigious resort course in the region. San Lorenzo, set between the Ria Formosa lagoon and Atlantic dunes, is the most scenic. Vale do Lobo Royal is the most playable for mixed-handicap groups. Palmares is an underrated links-style course on the Alvor estuary. The variety is genuinely impressive, and the conditioning is world-class.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <Link href="/destinations/scotland" className="text-gold hover:underline">Scotland</Link> is something else entirely: links golf as it was invented, on the same coastline where the game grew up. The Old Course at St Andrews is the spiritual home, and the trip-of-a-lifetime round most golfers dream about. Around it sit Kingsbarns (modern links masterpiece), Carnoustie (the brutal Open venue), the Castle Course (clifftop, more accessible than the Old Course), North Berwick (quirky and historic, the original Redan), and Royal Dornoch in the far north (Tom Watson called it the most fun he ever had on a golf course). The quality at the top is unmatched in Europe, and the heritage is the whole point.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <CompareCard
                location="Algarve"
                pros={['Roughly 40 courses in a 90 mile stretch', 'Monte Rei and Quinta do Lago in top 100 European courses', 'Excellent conditioning across the region', 'Mix of premium resort and value options']}
                cons={['Less heritage than the British Isles', 'Modern resort feel rather than seaside village charm']}
                color="fairway"
              />
              <CompareCard
                location="Scotland"
                pros={['The Old Course at St Andrews', 'True links golf as it was invented', 'Carnoustie, Royal Dornoch, North Berwick, Kingsbarns within reach', 'Heritage and pilgrimage feel that nowhere else has']}
                cons={['Old Course access requires the ballot or a tour operator', 'Wind, rain, and cool temperatures are part of the deal']}
                color="partner"
              />
            </div>
          </section>

          {/* Cost */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The cost
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Algarve is meaningfully cheaper for most groups, especially once you factor in villa accommodation that splits across 8 to 10 people. Scotland is more expensive on flights, accommodation, and on the marquee rounds, but a budget-conscious Scotland trip is still doable if you skip the Old Course or play it once.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-hidden">
              <div className="grid grid-cols-3 border-b border-border bg-bg-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                <span>Cost Item</span>
                <span className="text-center text-fairway-text">Algarve</span>
                <span className="text-center text-partner-text">Scotland</span>
              </div>
              {[
                ['Marquee course green fee', '€200 to €350 (Monte Rei)', '$250 to $300 (Old Course)'],
                ['Premium course green fee', '€100 to €250 (Quinta do Lago, San Lorenzo)', '$180 to $280 (Kingsbarns, Carnoustie)'],
                ['Value course green fee', '€50 to €80 (Quinta da Ria)', '$80 to $130 (North Berwick)'],
                ['Resort hotel (per room, per night)', '€150 to €350', '$350 to $600'],
                ['Villa (sleeps 8 to 10, per night)', '€500 to €1,200', 'Less common; B&Bs $120 to $250 typical'],
                ['Total per person (typical trip)', '€1,800 to €3,500 (4 nights)', '$2,500 to $5,000 (5 to 7 nights)'],
              ].map(([item, algarve, scotland]) => (
                <div key={item} className="grid grid-cols-3 border-b border-border px-5 py-3 text-sm last:border-0">
                  <span className="text-muted-foreground">{item}</span>
                  <span className="text-center font-medium text-fairway-text">{algarve}</span>
                  <span className="text-center font-medium text-partner-text">{scotland}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              The villa play is the Algarve's big unlock: a five-bedroom villa with a pool sleeps 10 and works out at €50 to €120 per person per night when split. Scotland's accommodation tends to be hotels or B&Bs near the courses, and group villas are less common. Want a deeper breakdown by destination? See our <Link href="/blog/golf-trip-budget" className="text-gold hover:underline">golf trip budget guide</Link>.
            </p>
          </section>

          {/* Weather */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The weather and when to go
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              This is one of the cleanest gaps between the two destinations.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Algarve markets itself as having 300 days of sunshine a year, and that is roughly accurate. March to May and September to November are the sweet spots: 18 to 25°C, low humidity, courses uncrowded, prices reasonable. October is particularly lovely. July and August are hot (regularly 30 to 38°C) and busy, with peak hotel pricing. Even December to February is mild, with daytime temperatures around 15 to 18°C, so winter golf is genuinely possible.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Scotland has a narrower window. May to September is the realistic playing season, with June and July offering remarkable daylight (up to 18 hours, so you can play 36 holes and still get dinner at 9 PM). Late May and early September are slightly cheaper and quieter, with conditions still excellent. Avoid November to March if you want anything close to consistent: many courses operate on reduced schedules and the weather is harsh. Even in summer, you should expect wind, the chance of rain, and cool mornings. That is not a problem if your group accepts that links golf and weather are inseparable.
            </p>
            <div className="mt-4 rounded-xl border border-border bg-card/60 p-4 text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground">Best months: </span>
              Algarve: March to May and September to November. Scotland: May to September, with late May and early September as quieter sweet spots.
            </div>
          </section>

          {/* Non-golfer */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The non-golfer experience
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              If partners are joining, this is usually the section that decides the trip.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Algarve is genuinely set up for partners. The combination of long beaches (Praia da Marinha and Praia da Falésia are exceptional), Benagil sea cave boat tours, the old town of Lagos, the salt-pan town of Tavira in the east, fresh seafood at every clifftop restaurant, and wine days in the Alentejo to the north gives non-golfers a real holiday. A villa with a pool, mornings of golf, and afternoons by the sea works easily, and partners often end the trip wanting to come back.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Scotland is wonderful for partners who love what Scotland is. Edinburgh's Old Town and Royal Mile, the Fife Coastal Path, whisky distillery tours in Speyside or Islay, castles in the Highlands, and a quiet day in St Andrews itself can fill a week comfortably. The catch is that Scotland asks more of partners: it is cooler, it is wetter, the cultural offering is richer but requires planning, and there is no real beach scene. Partners who love history, walking, and a good single malt will love it. Partners who want a relaxed beach holiday will not.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Our guide on <Link href="/blog/golf-trip-with-non-golfers" className="text-gold hover:underline">planning a golf trip with non-golfers</Link> goes deeper on how to structure each day so nobody feels like an afterthought.
            </p>
          </section>

          {/* Vibe */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The vibe
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              These genuinely feel like different trips, and your group probably already has a preference.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Algarve is relaxed and unhurried. Mornings are golf, afternoons are pool or beach, evenings are long dinners with seafood and Portuguese wine on a terrace as the sun goes down. The pace is closer to a holiday with golf attached than a golf trip with hours to fill. It rewards groups that like to take their time, eat well, and chat over dinner.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Scotland is reverent. You walk past plaques and history at every turn, you tip the caddie, you eat at the same pubs the locals have eaten in for a hundred years. The conversation at the bar is exclusively about the round, the wind, and the next day's tee time. There is no flashy resort theatre, just deep tradition and the feeling of being in golf's spiritual home. Most groups who go say it was the best trip of their lives.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Neither is better. They are different trips for different reasons, and the right one depends on what your group actually wants from a week away.
            </p>
          </section>

          {/* Logistics */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Getting there and getting around
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Algarve is reached via Faro Airport (FAO), which is well-connected from across Europe (especially London Gatwick, which is about three hours direct) and has a seasonal United Airlines direct from Newark in the summer. TAP Air Portugal connects most US cities to Faro through Lisbon. Once you land, a hire car is the way: most courses are 20 to 60 minutes apart, and the A22 motorway runs the length of the region. Driving in Portugal is easy.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Scotland is reached via Edinburgh (EDI) or Glasgow (GLA), both with frequent connections from the US East Coast. Edinburgh is closer to St Andrews (about 90 minutes by car) and the East Lothian links. Glasgow is the gateway for Turnberry and the southwest. From there, you will want a car if you are moving between courses, though St Andrews itself is walkable. Plan a jet lag day at the start if you are coming from the US: you do not want your first round to be the morning after a transatlantic flight.
            </p>
          </section>

          {/* Decision */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Three questions that settle it
            </h2>
            <div className="mt-6 space-y-4">
              <DecisionItem
                question="Are partners joining the trip?"
                answer="If yes, lean Algarve. The combination of beach, sun, and food is a real holiday. Scotland works for partners who love history and the outdoors, but it is the harder partner sell."
              />
              <DecisionItem
                question="What is the budget ceiling?"
                answer="If budget matters, the Algarve is meaningfully cheaper, especially once you factor in villa accommodation. Scotland is the more expensive trip on every line item from flights to lodging."
              />
              <DecisionItem
                question="Is your group chasing the Old Course at St Andrews?"
                answer="If a round at the Old Course is the dream, only Scotland delivers. If your group is not specifically chasing that one round, the Algarve gives you more rounds, better weather, and lower cost for the same week."
              />
            </div>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Want to go deeper? Read our full guides: <Link href="/destinations/algarve" className="text-gold hover:underline">Algarve destination guide</Link> and <Link href="/destinations/scotland" className="text-gold hover:underline">Scotland destination guide</Link>. Or just answer five questions on FairwayPal and let us build the dual itinerary, with golf for the players and a parallel plan for the partners.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Pick a destination. We'll plan the rest.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              5 questions. Dual itinerary for golfers and partners. One link the whole group can vote on.
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
              Algarve vs Scotland FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="Is the Algarve or Scotland better for a golf trip?"
                answer="Both are wonderful, very different trips. Algarve wins on weather, value, and partner experience. Scotland wins on heritage, course quality, and the bucket-list pilgrimage feel. If your group is mixed and value matters, lean Algarve. If your group lives for links and wants the trip of a lifetime, lean Scotland."
              />
              <FaqItem
                question="Is the Algarve cheaper than Scotland for a golf trip?"
                answer="Yes, especially for groups of 6 or more. Algarve premium courses run €100 to €350 per round; a 4-night trip lands at €1,800 to €3,500 per person. Scotland is $2,500 to $5,000 per person for 5 to 7 nights from the US. Villa accommodation in the Algarve, splitting 8 to 10 ways, widens the gap further."
              />
              <FaqItem
                question="Can you play the Old Course at St Andrews?"
                answer="Yes. Most groups get on through the daily Old Course Ballot, run by St Andrews Links Trust. Enter online up to two days before play with names, home clubs, and handicaps. Results post by 4 PM. Handicap limit is 36 for both men and women. Authorised tour operators also hold reserved slots."
              />
              <FaqItem
                question="When is the best time to visit?"
                answer="Algarve: March to May and September to November (low humidity, uncrowded). Scotland: May to September (June and July offer 18 hours of daylight; late May and early September are quieter sweet spots)."
              />
              <FaqItem
                question="Which is better for partners and non-golfers?"
                answer="Algarve, comfortably. Beaches, sea-cave tours, Lagos, Tavira, seafood, and wine days give partners a real holiday. Scotland is wonderful for partners who love history, walking, and whisky, but the weather and pace are more demanding."
              />
              <FaqItem
                question="How long should a Scotland or Algarve golf trip be?"
                answer="Scotland: 5 to 7 nights for a focused St Andrews trip, 7 to 10 if you want to include Edinburgh or the Highlands. Algarve: 4 to 7 nights works well, balancing rounds with beach days."
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
                href="/blog/algarve-for-non-golfers"
                title="The Algarve for Non-Golfers"
                description="The full partner-side guide. Caves, beaches, food, wine, and a 4-day itinerary."
              />
              <RelatedPost
                href="/blog/ireland-vs-scotland-golf-trip"
                title="Ireland vs Scotland Golf Trip"
                description="The other big European decision, compared honestly."
              />
              <RelatedPost
                href="/blog/golf-trip-with-non-golfers"
                title="Golf Trips With Non-Golfers"
                description="How to plan a trip that works for the whole group."
              />
              <RelatedPost
                href="/blog/golf-trip-budget"
                title="Golf Trip Budget Breakdown"
                description="What a golf trip actually costs by destination and group size."
              />
              <RelatedPost
                href="/blog/pinehurst-vs-kiawah-island-golf-trip"
                title="Pinehurst vs Kiawah Island"
                description="The two best East Coast golf resorts, compared honestly."
              />
              <RelatedPost
                href="/blog/bandon-dunes-vs-pebble-beach-golf-trip"
                title="Bandon Dunes vs Pebble Beach"
                description="The two great West Coast bucket-list trips, compared."
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

function CompareCard({
  location, pros, cons, color,
}: {
  location: string; pros: string[]; cons: string[]; color: 'fairway' | 'partner'
}) {
  const borderClass = color === 'fairway' ? 'border-fairway/20 bg-fairway/5' : 'border-partner/20 bg-partner/5'
  const textClass = color === 'fairway' ? 'text-fairway-text' : 'text-partner-text'
  return (
    <div className={`rounded-xl border p-5 ${borderClass}`}>
      <h3 className={`text-base font-semibold ${textClass}`}>{location}</h3>
      <ul className="mt-3 space-y-1">
        {pros.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1 text-xs text-fairway-text">+</span>{p}
          </li>
        ))}
        {cons.map((c) => (
          <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1 text-xs text-partner-text">−</span>{c}
          </li>
        ))}
      </ul>
    </div>
  )
}

function DecisionItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-5">
      <p className="text-base font-semibold text-foreground">{question}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{answer}</p>
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
