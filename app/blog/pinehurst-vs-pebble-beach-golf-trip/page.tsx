/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Pinehurst vs Pebble Beach for a Golf Trip: Which Should You Pick? | FairwayPal',
  description:
    'Two of the great American bucket-list golf trips, compared honestly. Courses, costs, weather, partner experience, logistics, and a verdict by group type. Heritage and walkability versus iconic Pacific scenery.',
  alternates: { canonical: 'https://fairwaypal.com/blog/pinehurst-vs-pebble-beach-golf-trip' },
  openGraph: {
    title: 'Pinehurst vs Pebble Beach for a Golf Trip: Which Should You Pick?',
    description:
      'A friendly head-to-head between Pinehurst and Pebble Beach. Heritage and walkability versus the iconic Pacific finishing hole.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pinehurst vs Pebble Beach for a Golf Trip: Which Should You Pick?',
  description:
    'Head-to-head comparison of Pinehurst and Pebble Beach for a group golf trip. Courses, costs, weather, partner activities, logistics, and a verdict by group type.',
  url: 'https://fairwaypal.com/blog/pinehurst-vs-pebble-beach-golf-trip',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://fairwaypal.com/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Pinehurst vs Pebble Beach',
      item: 'https://fairwaypal.com/blog/pinehurst-vs-pebble-beach-golf-trip',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Pinehurst or Pebble Beach better for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Both are great American golf trips and they offer wildly different experiences. Pinehurst gives you nine resort courses on one walkable property, deep American golf heritage, and a charming Southern village to come back to. Pebble Beach gives you the most famous course in America, dramatic Pacific scenery, and Carmel-by-the-Sea five minutes away for partners. If your group wants depth (multiple rounds at one resort), pick Pinehurst. If your group wants the iconic round and a partner-friendly base, pick Pebble.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Pebble Beach more expensive than Pinehurst?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, meaningfully. Pebble Beach Golf Links runs $595 to $625 per round plus a $100 to $150 caddie. Pinehurst No. 2 runs $350 to $500 per round, with secondary courses available at $80 to $250. Lodging is also higher at Pebble: The Lodge at Pebble Beach runs $900 to $1,800 per night versus $300 to $600 at The Carolina Hotel in Pinehurst. A typical 3 night trip lands at $1,500 to $3,000 per person at Pinehurst and $2,500 to $5,000 per person at Pebble.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which has better non-golf options for partners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pebble Beach, comfortably, but not by as much as you might think. Pebble has Carmel-by-the-Sea (50+ galleries, beach, Mission, walkable), the Monterey Bay Aquarium (one of the best in the world), the 17-Mile Drive, Big Sur within 30 miles, and Carmel Valley wine country 15 miles inland. Pinehurst has a charming walkable village, the Tufts Archives (a small but excellent golf history museum), the spa at The Carolina, and Seagrove pottery community 30 miles away. Pebble wins for variety; Pinehurst wins for walkable density. Either way, partners can have a real trip.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many rounds can you play in 3 nights at each?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pinehurst makes more rounds easier because the courses are all on one resort and walking distances are short. Most groups play 3 to 4 rounds across 3 nights without strain (typically Pinehurst No. 2 plus two of No. 4, No. 8, or Pine Needles or Mid Pines just outside the resort). Pebble takes more time per round because of the spread between courses on the Monterey Peninsula and the longer round itself at Pebble Links. Three rounds across 3 nights is comfortable, four is doable but tighter.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which is easier to get to from the East Coast?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pinehurst, by a long way. Raleigh-Durham International (RDU) has direct flights from most East Coast cities and is about a 70 mile drive to Pinehurst (around 80 minutes). Pebble Beach is reached via Monterey Regional (MRY, 8 miles, very small airport) or San Francisco (SFO, ~110 miles, the bigger option), and from the East Coast that means a transcontinental flight plus the drive. From Midwest and West Coast cities the calculus changes; if your group is primarily West Coast, Pebble is the easier trip.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit each?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pinehurst is best March to May and September to November (60 to 80°F, low humidity, courses in beautiful condition). Pebble Beach is best May to October, with September and October giving the warmest, clearest weather. Pebble is famously cool and foggy even in mid-summer (July highs are 55 to 65°F). Avoid the AT&T Pro-Am dates at Pebble (late January or early February) when the course closes to public play.",
      },
    },
  ],
}

export default function PinehurstVsPebbleBeachPage() {
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
          Pinehurst vs Pebble Beach for a Golf Trip: Which Should You Pick?
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Pinehurst and Pebble Beach are both on the bucket list for a reason, and they offer very different American golf trips. One is the cradle of the game in the United States, walkable and traditional. The other is the most photographed finishing hole in golf, with one of the great little villages in California next door. If your group is debating between them, here is the friendly comparison so you can make the call.
        </p>

        {/* Quick Verdict */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Quick Verdict</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Choose Pinehurst</span> if your group wants depth, walkability, heritage, and the ability to play 3 or 4 great rounds without much driving. Budget around $1,500 to $3,000 per person for 3 nights.
          </p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Choose Pebble Beach</span> if you want the iconic round at the most famous course in America, partners are joining, and the trip-of-a-lifetime feel matters more than rounds-per-day. Budget around $2,500 to $5,000 per person for 3 nights.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Courses */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The courses
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Both have a marquee course that lives up to the hype, and both back it up with strong supporting cast. The difference is concentration: Pinehurst gives you depth on one property; Pebble gives you one spectacular round and good support around it.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <Link href="/destinations/pinehurst" className="text-gold hover:underline">Pinehurst</Link> has nine resort courses (No. 1 through No. 9) plus The Cradle, a 9-hole par-3 that is one of the best evening rounds anywhere. <strong>Pinehurst No. 2</strong>, the Donald Ross masterpiece, has hosted the U.S. Open in 1999, 2005, 2014, and 2024 and is an anchor site for 2029, 2035, 2041, and 2047. The crowned greens are everything you have heard about. No. 4 (the Gil Hanse redesign) and No. 8 are excellent and more affordable. Off-property, Pine Needles, Mid Pines, and Tobacco Road are all within 30 minutes. The whole thing fits on one walkable resort campus.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <Link href="/destinations/pebble-beach" className="text-gold hover:underline">Pebble Beach Golf Links</Link> is the most famous course in America. It has hosted the U.S. Open six times (1972, 1982, 1992, 2000, 2010, 2019) and is already booked for 2027, 2032, 2037, and 2044. Holes 7, 8, 17, and 18 along the Pacific are arguably the most photographed sequence in golf. Spyglass Hill (Robert Trent Jones Sr., often considered the harder test), The Links at Spanish Bay, the legendary Cypress Point (private with limited public access via packages), and Poppy Hills (the affordable nearby alternative) round out the Monterey Peninsula. A trip here is built around one or two marquee rounds rather than five world-class rounds back to back.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <CompareCard
                location="Pinehurst"
                pros={['Nine resort courses plus The Cradle', 'No. 2 is a Donald Ross masterpiece and U.S. Open anchor site', 'Pine Needles, Mid Pines, Tobacco Road nearby', 'Walking distances are short across the resort']}
                cons={['No single hole as photographed as Pebble\'s 18th', 'No ocean views']}
                color="fairway"
              />
              <CompareCard
                location="Pebble Beach"
                pros={['The most famous course in America', 'Six U.S. Opens hosted, more confirmed through 2044', 'Iconic 7th, 8th, 17th, and 18th holes', 'Spyglass and Cypress Point nearby']}
                cons={['Pebble Links runs $595 to $625 per round', 'Less depth: only 1 to 2 marquee rounds per trip']}
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
              Pebble Beach is the more expensive trip on essentially every line item: green fees, lodging, food, and the supporting rounds. Pinehurst is by no means cheap (the Carolina Hotel runs $300 to $600 a night and No. 2 is $350 to $500), but the gap is real and it compounds across a 3 night trip for a group.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-hidden">
              <div className="grid grid-cols-3 border-b border-border bg-bg-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                <span>Cost Item</span>
                <span className="text-center text-fairway-text">Pinehurst</span>
                <span className="text-center text-partner-text">Pebble Beach</span>
              </div>
              {[
                ['Marquee course green fee', '$350 to $500 (No. 2)', '$595 to $625 (Pebble Links)'],
                ['Premium course green fee', '$200 to $350 (No. 4, No. 8)', '$285 to $325 (Spyglass)'],
                ['Value course green fee', '$80 to $200 (Mid Pines, Pine Needles)', '$90 to $130 (Poppy Hills)'],
                ['Caddie (per bag, per round)', 'Optional, included with No. 2 fee', '$100 to $150 plus tip'],
                ['Resort hotel (per room, per night)', '$300 to $600 (Carolina Hotel)', '$900 to $1,800 (The Lodge)'],
                ['Total per person (3 nights, 3 to 4 rounds)', '$1,500 to $3,000', '$2,500 to $5,000'],
              ].map(([item, pinehurst, pebble]) => (
                <div key={item} className="grid grid-cols-3 border-b border-border px-5 py-3 text-sm last:border-0">
                  <span className="text-muted-foreground">{item}</span>
                  <span className="text-center font-medium text-fairway-text">{pinehurst}</span>
                  <span className="text-center font-medium text-partner-text">{pebble}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              The Pinehurst stay-and-play package is genuinely a good deal: preferred tee times, better No. 2 rates, and the math works out for a group. At Pebble, the play is to stay one or two nights at The Lodge to unlock priority booking, then move to a lower-cost property in Carmel for the rest of the trip. Either way, see our <Link href="/blog/golf-trip-budget" className="text-gold hover:underline">golf trip budget guide</Link> for a deeper breakdown.
            </p>
          </section>

          {/* Weather */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The weather and when to go
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pinehurst and Pebble Beach have very different climates, and the visiting windows reflect that.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pinehurst is at its best March to May and September to November: 60 to 80°F, low humidity, courses in beautiful condition. Spring brings dogwood and azalea blooms. Fall is warm days and cool evenings. Summer is hot and humid (85 to 95°F) and afternoon thunderstorms are common; playable but not pleasant. Winter is mild (45 to 60°F) and quiet, with off-peak resort pricing.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pebble Beach is famously cool and foggy. Even in July, highs are typically 55 to 65°F, with morning fog that usually burns off by midday. May to October is the consistent visiting window, with September and October the warmest and clearest. Winter brings rain. Avoid late January and early February: the AT&T Pro-Am closes Pebble Links to public play.
            </p>
            <div className="mt-4 rounded-xl border border-border bg-card/60 p-4 text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground">Best months: </span>
              Pinehurst: March to May and September to November. Pebble Beach: September and October give you the warmest, clearest weather.
            </div>
          </section>

          {/* Non-golfer */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The non-golfer experience
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              If partners are joining, this is the section that often decides the trip.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pebble Beach is the friendlier choice for partners. Carmel-by-the-Sea is five minutes from the resort, walkable from end to end, with 50-plus art galleries, the Mission San Carlos Borromeo (founded 1771), Carmel Beach (regularly cited as one of the best in California), and good restaurants. The Monterey Bay Aquarium is 20 minutes away and is one of the best aquariums in the world. Big Sur is 30 miles south for dramatic coastal scenery. Carmel Valley wine country is 15 miles inland. A non-golfer at Pebble can have a real holiday. See our <Link href="/blog/pebble-beach-for-non-golfers" className="text-gold hover:underline">Pebble Beach for non-golfers guide</Link> for the full picture.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pinehurst is also good for partners, just narrower. The village is genuinely charming, walkable, and steeped in Southern hospitality. The Spa at Pinehurst is full-service and excellent. The Tufts Archives (golf history museum) is an unexpected highlight. Seagrove pottery community is a good half-day drive. But the variety stops there: no big city, no significant restaurant scene, no beach. Three to four nights is the sweet spot for a partner. See our <Link href="/blog/pinehurst-for-non-golfers" className="text-gold hover:underline">Pinehurst for non-golfers guide</Link> for the detail.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The honest verdict: if your partner wants variety, pick Pebble. If your partner specifically loves quiet walkable towns, Pinehurst is the more pleasant base. For most partners, Pebble is the safer bet.
            </p>
          </section>

          {/* Vibe */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The vibe
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              These trips feel different in ways that matter.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pinehurst feels like a pilgrimage. You walk past the Putter Boy statue, eat at the same hotel where the legends ate, and watch caddied groups roll in at a deliberate, traditional pace. The conversation at the bar at the end of the day is exclusively about the round. It is wonderful for a group that loves the history of the game, and a little intense for a group that wants more variety in the evenings.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pebble Beach feels like a destination resort. The Lodge has a buzz; Carmel is alive in the evenings; other guests are at the resort to play tennis, walk the cliffs, or eat in town. The pace is more polished, the food is more refined, and after a round you might be back at the room with the group's partners by 4 PM, then off to dinner in Carmel. Less monastic, more holiday.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Both are wonderful in their own way. The right one is whichever fits your group's appetite for tradition versus variety.
            </p>
          </section>

          {/* Logistics */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Getting there
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pinehurst is reached via Raleigh-Durham International (RDU), about a 70 to 75 mile drive (roughly 80 minutes). RDU has good direct connections from most US cities and is a reliable, easy airport. Pinehurst Resort runs an airport shuttle for those who would rather skip the rental.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pebble Beach is reached via Monterey Regional (MRY), 8 miles from the resort and a 15 minute drive. MRY is small with limited direct flights, mostly from West Coast hubs. Most East Coast groups fly into San Francisco (SFO, about 110 miles) or San Jose (SJC, about 80 miles), with the drive down Highway 1 or Highway 101 to Pebble. From the East Coast, Pinehurst is dramatically easier; from the West Coast, Pebble is.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Once on the ground, Pinehurst is the simpler resort: village walks, short drives between courses. Pebble requires more driving across the Monterey Peninsula between Pebble Links, Spyglass, and Spanish Bay, plus the trip into Carmel for partners.
            </p>
          </section>

          {/* Decision */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Three questions that settle it
            </h2>
            <div className="mt-6 space-y-4">
              <DecisionItem
                question="What does your group want more, depth or the iconic round?"
                answer="If you want to play 3 or 4 great rounds without driving much, Pinehurst is unmatched. If the goal is the trip-of-a-lifetime round at Pebble Beach Golf Links, only Pebble delivers."
              />
              <DecisionItem
                question="Are partners joining the trip?"
                answer="If yes, lean Pebble Beach. Carmel and the Aquarium make a real holiday for non-golfers. Pinehurst can work for the right partner but offers less variety."
              />
              <DecisionItem
                question="Where is your group flying from?"
                answer="From the East Coast, Pinehurst is dramatically easier (RDU has direct flights from nearly everywhere). From the West Coast, Pebble Beach is. From Midwest cities, both work, but the cost difference favours Pinehurst."
              />
            </div>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Want to go deeper? Read our full guides: <Link href="/destinations/pinehurst" className="text-gold hover:underline">Pinehurst destination guide</Link> and <Link href="/destinations/pebble-beach" className="text-gold hover:underline">Pebble Beach destination guide</Link>. Or just answer five questions on FairwayPal and let us build the dual itinerary, with golf for the players and a parallel plan for the partners.
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
              Pinehurst vs Pebble Beach FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="Is Pinehurst or Pebble Beach better for a golf trip?"
                answer="Both are great American golf trips, very different experiences. Pinehurst gives depth (nine courses on one walkable resort plus heritage). Pebble gives the iconic round at the most famous course in America with Carmel-by-the-Sea nearby for partners. Depth versus iconic."
              />
              <FaqItem
                question="Is Pebble Beach more expensive than Pinehurst?"
                answer="Yes, meaningfully. Pebble Links is $595-625 per round vs $350-500 at Pinehurst No. 2. The Lodge at Pebble is $900-1,800/night vs $300-600 at the Carolina Hotel. A 3 night trip lands at $1,500-3,000 per person at Pinehurst and $2,500-5,000 at Pebble."
              />
              <FaqItem
                question="Which has better non-golf options for partners?"
                answer="Pebble Beach. Carmel-by-the-Sea (galleries, beach, Mission), the Monterey Bay Aquarium, the 17-Mile Drive, Big Sur, and Carmel Valley wine country offer real variety. Pinehurst's village is charming but narrower."
              />
              <FaqItem
                question="How many rounds in 3 nights?"
                answer="Pinehurst: 3 to 4 rounds comfortable thanks to the on-resort layout. Pebble: 3 rounds comfortable, 4 doable but tighter because of drive times across the Monterey Peninsula."
              />
              <FaqItem
                question="Which is easier to get to from the East Coast?"
                answer="Pinehurst, by a long way. RDU is about 70 miles away with direct flights from most East Coast cities. Pebble is reached via MRY (small) or SFO/SJC (transcontinental flight + drive)."
              />
              <FaqItem
                question="When is the best time to visit?"
                answer="Pinehurst: March to May and September to November (60 to 80°F, low humidity). Pebble: May to October, with September and October giving the warmest clearest weather."
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
                href="/blog/pinehurst-vs-kiawah-island-golf-trip"
                title="Pinehurst vs Kiawah Island"
                description="The two best East Coast golf resorts, compared."
              />
              <RelatedPost
                href="/blog/bandon-dunes-vs-pebble-beach-golf-trip"
                title="Bandon Dunes vs Pebble Beach"
                description="The two great West Coast bucket-list trips, compared."
              />
              <RelatedPost
                href="/blog/scottsdale-vs-myrtle-beach-golf-trip"
                title="Scottsdale vs Myrtle Beach"
                description="The two most popular US golf destinations, compared."
              />
              <RelatedPost
                href="/blog/golf-trip-budget"
                title="Golf Trip Budget Breakdown"
                description="What a golf trip actually costs by destination and group size."
              />
              <RelatedPost
                href="/blog/golf-trip-with-non-golfers"
                title="Golf Trips With Non-Golfers"
                description="How to plan a trip that works for the whole group."
              />
              <RelatedPost
                href="/blog/best-bachelor-party-golf-destinations"
                title="Best Bachelor Golf Destinations"
                description="The top six US destinations ranked honestly."
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
