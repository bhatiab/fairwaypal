/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Pinehurst vs Bandon Dunes for a Golf Trip: Which Should You Pick? | FairwayPal',
  description:
    'East Coast tradition versus West Coast links. Two of the great American group-golf trips compared honestly: courses, costs, weather, partner experience, logistics, and a verdict by group type.',
  alternates: { canonical: 'https://fairwaypal.com/blog/pinehurst-vs-bandon-dunes-golf-trip' },
  openGraph: {
    title: 'Pinehurst vs Bandon Dunes: Which Should You Pick?',
    description:
      'East Coast heritage versus West Coast links. Two great American golf trips, compared.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pinehurst vs Bandon Dunes for a Golf Trip: Which Should You Pick?',
  description:
    'Head-to-head comparison of Pinehurst and Bandon Dunes for a group golf trip. Courses, costs, weather, partner activities, logistics, and a verdict by group type.',
  url: 'https://fairwaypal.com/blog/pinehurst-vs-bandon-dunes-golf-trip',
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
      name: 'Pinehurst vs Bandon Dunes',
      item: 'https://fairwaypal.com/blog/pinehurst-vs-bandon-dunes-golf-trip',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Pinehurst or Bandon Dunes better for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Both are great American golf trips, very different experiences. Pinehurst gives you nine resort courses on one walkable property with deep American heritage and a charming Southern village. Bandon Dunes gives you five world-class links courses on a remote Oregon coast, with no carts and a pure-golf pilgrimage feel. If your group wants tradition, history, and walkability with a partner-friendly village, pick Pinehurst. If your group wants a links pilgrimage with the best concentration of public links golf in North America, pick Bandon.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does each trip cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pinehurst typically runs $1,500 to $3,000 per person for 3 nights with 2 to 3 rounds. Bandon Dunes typically runs $2,000 to $3,500 per person for 3 to 4 nights with 3 to 4 rounds. Bandon is slightly more expensive on the marginal day because of caddie fees ($100 to $130 per bag, walking is mandatory) and the longer trip length, but per-round green fees are similar. Pinehurst No. 2 ($350 to $500) and any Bandon course ($275 to $375) are in the same ballpark.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which has better non-golf options for partners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pinehurst, by a meaningful margin. Pinehurst Village is genuinely charming and walkable, with the Tufts Archives golf history museum, the Spa at Pinehurst, art galleries, and Seagrove pottery community 30 miles away. Bandon Dunes is remote and outdoor-focused: spectacular Oregon coastline, Bandon Marsh wildlife refuge, beach walks, and a small town with limited variety. Partners who specifically love rugged outdoors will be happy at Bandon; partners who want walkable village charm and culture will prefer Pinehurst.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many rounds can you play at each?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Bandon Dunes is built for more rounds per day. With five world-class courses on one property and walking only, most groups play 4 to 6 rounds in 3 to 4 nights, including 36-hole days. The Bandon Preserve par-3 course is great for evening warm-ups. Pinehurst supports 3 to 4 rounds in 3 nights comfortably; the courses are spread slightly more, and most groups walk part of the trip and ride part of it. Pinehurst's rhythm is closer to a classic resort trip; Bandon's is closer to a Scottish pilgrimage.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which is easier to get to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pinehurst, by a long way. Raleigh-Durham International (RDU) has direct flights from most US cities and is a 70 to 75 mile drive (about 80 minutes) to the resort. Bandon Dunes is reached via Southwest Oregon Regional (OTH) in North Bend, with limited connections often through San Francisco or Denver, plus a 25 to 30 mile drive to the resort. Many Bandon groups fly into Eugene (EUG, ~2.5 hr drive) or Portland (PDX, ~4.5 hr drive) instead. The longer drive into Bandon is part of the pilgrimage but it eats into trip time.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit each?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pinehurst is best March to May and September to November (60 to 80°F, low humidity, courses in beautiful condition). Bandon Dunes is best May to October, with July to September being the driest. Pinehurst has a longer reasonable season (8 months) and works in mild winter; Bandon's links season is tighter and the wind and rain are part of the deal even in summer. Pack waterproofs for Bandon at any time of year.",
      },
    },
  ],
}

export default function PinehurstVsBandonPage() {
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
          Pinehurst vs Bandon Dunes for a Golf Trip: Which Should You Pick?
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          East Coast versus West Coast. Heritage versus links. The cradle of American golf versus the best concentration of links courses in North America. Pinehurst and Bandon Dunes are both bucket-list American golf trips and they offer wildly different experiences. If your group is debating between them, here is the friendly comparison so you can stop arguing and start booking.
        </p>

        {/* Quick Verdict */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Quick Verdict</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Choose Pinehurst</span> if your group wants tradition, walkability, history, and a charming Southern village base that works well even with non-golfing partners. Budget around $1,500 to $3,000 per person for 3 nights.
          </p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Choose Bandon Dunes</span> if your group is serious golfers who want the closest US equivalent to a Scottish links pilgrimage. Budget around $2,000 to $3,500 per person for 3 to 4 nights.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Courses */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The courses
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Both resorts have a marquee that lives up to its reputation, plus strong supporting cast. The character of the golf is what really separates them.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <Link href="/destinations/pinehurst" className="text-gold hover:underline">Pinehurst</Link> is the cradle of American golf. The resort has nine numbered courses (No. 1 through No. 9) plus The Cradle, a 9-hole par-3 short course. <strong>Pinehurst No. 2</strong>, the Donald Ross masterpiece, has hosted the U.S. Open in 1999, 2005, 2014, and 2024 and is the USGA anchor site for 2029, 2035, 2041, and 2047. The crowned greens are everything you have heard about. No. 4 (the Gil Hanse redesign) and No. 8 are excellent and more affordable. Off-property, Pine Needles, Mid Pines, and Tobacco Road round out a serious week without anyone driving more than 30 minutes.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <Link href="/destinations/bandon-dunes" className="text-gold hover:underline">Bandon Dunes</Link> is the best concentration of true links golf in North America. Five full-length courses on one remote Oregon-coast property, all walking, all genuinely world-class. <strong>Bandon Dunes</strong> (the original David McLay Kidd design) and <strong>Pacific Dunes</strong> (Tom Doak, frequently ranked the best public course in the country) are the two most-played. Bandon Trails (Coore and Crenshaw, woodland-and-meadow) breaks up the wind. Old Macdonald is a tribute to template holes from C.B. Macdonald. Sheep Ranch (Coore and Crenshaw, 2020) has cliff-top fairways and ocean views from every hole. Plus the Bandon Preserve par-3 for evening warm-ups.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <CompareCard
                location="Pinehurst"
                pros={['Nine resort courses plus The Cradle', 'No. 2 is a Donald Ross masterpiece + USGA anchor site', 'Pine Needles, Mid Pines, Tobacco Road nearby', 'Walking distances are short across the resort']}
                cons={['No ocean, no links character', 'Less variety in scenery']}
                color="fairway"
              />
              <CompareCard
                location="Bandon Dunes"
                pros={['Five world-class links courses', 'Pacific Dunes regularly ranked #1 public in America', 'Sheep Ranch has ocean views from every hole', 'Walking-only is a feature, not a bug']}
                cons={['Walking required, no carts', 'Wind and rain are constant features']}
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
              Both are premium trips. Bandon is slightly more expensive on the marginal day because of caddie fees and the longer trip length, but per-round green fees are roughly comparable. The biggest cost variance comes from the trip length: Bandon trips tend to run 3 to 4 nights to justify the longer travel time, while Pinehurst trips work at 3 nights.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-hidden">
              <div className="grid grid-cols-3 border-b border-border bg-bg-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                <span>Cost Item</span>
                <span className="text-center text-fairway-text">Pinehurst</span>
                <span className="text-center text-partner-text">Bandon Dunes</span>
              </div>
              {[
                ['Marquee course green fee', '$350 to $500 (No. 2)', '$275 to $375 (any of 5)'],
                ['Premium course green fee', '$200 to $350 (No. 4, No. 8)', '$275 to $375 (resort, peak)'],
                ['Value course green fee', '$80 to $200 (Pine Needles, Mid Pines)', '$100 (Bandon Preserve par-3)'],
                ['Caddie (per bag, per round)', 'Optional', '$100 to $130 plus tip'],
                ['Resort hotel (per room, per night)', '$300 to $600 (Carolina Hotel)', '$250 to $500 (resort lodging)'],
                ['Total per person', '$1,500 to $3,000 (3 nights)', '$2,000 to $3,500 (3 to 4 nights)'],
              ].map(([item, pinehurst, bandon]) => (
                <div key={item} className="grid grid-cols-3 border-b border-border px-5 py-3 text-sm last:border-0">
                  <span className="text-muted-foreground">{item}</span>
                  <span className="text-center font-medium text-fairway-text">{pinehurst}</span>
                  <span className="text-center font-medium text-partner-text">{bandon}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              The Pinehurst stay-and-play package is genuinely a good deal: preferred tee times, better No. 2 rates. At Bandon, all the rounds cost roughly the same, so you can play five great courses without a budget conversation, but the caddies are essentially mandatory and add up. See our <Link href="/blog/golf-trip-budget" className="text-gold hover:underline">golf trip budget guide</Link> for the full breakdown.
            </p>
          </section>

          {/* Weather */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The weather and when to go
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Both have specific windows; the windows are different.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pinehurst is at its best March to May and September to November: 60 to 80°F, low humidity, courses in beautiful condition. Spring brings dogwood and azalea blooms. Fall is warm days and cool evenings. Summer is hot and humid (85 to 95°F) but playable; afternoon thunderstorms are common. Winter (December to February) is mild (45 to 60°F) and quiet, with off-peak resort pricing.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Bandon Dunes is on the Oregon coast and exposed to Pacific weather. May through October is the realistic playing season. June to September is the driest stretch, but wind is constant and rain is a real possibility at any time. Locals will tell you that fighting the weather is part of the experience, and you have not really played links golf until you have played it in 20 mph wind. They are right, but it is something to know going in.
            </p>
            <div className="mt-4 rounded-xl border border-border bg-card/60 p-4 text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground">Best months: </span>
              Pinehurst: March to May and September to November. Bandon: July to September is the driest stretch; expect wind always.
            </div>
          </section>

          {/* Non-golfer */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The non-golfer experience
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              If partners are joining, this section often decides the trip.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pinehurst is the friendlier choice for partners. The walkable village has boutiques, art galleries, the Tufts Archives golf history museum, restaurants, and the Spa at Pinehurst. Seagrove (one of the largest pottery communities in the United States) is 30 miles away. Southern Pines adds antique shops and equestrian culture. A non-golfing partner can have a quiet, traditional Southern holiday for 3 to 4 nights without driving much. See our <Link href="/blog/pinehurst-for-non-golfers" className="text-gold hover:underline">Pinehurst for non-golfers guide</Link>.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Bandon Dunes is honest about being a remote, outdoor-focused destination. Partners who love wild beaches, hiking, wildlife, and a quiet pace will be happy with the Oregon coast. Partners who want shopping, restaurants, spa days every afternoon, or a cultural city break will find Bandon thin. See our <Link href="/blog/bandon-dunes-for-non-golfers" className="text-gold hover:underline">Bandon Dunes for non-golfers guide</Link> for the honest take.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Both work for the right partner; Pinehurst works for more partners.
            </p>
          </section>

          {/* Vibe */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The vibe
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              These trips feel different in ways your group will notice from the first round.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pinehurst feels like a pilgrimage to American golf history. You walk past the Putter Boy statue, eat at the same hotel where the legends ate, watch caddied groups roll in at a deliberate pace. The whole village is built around golf, and conversations at the bar at the end of the day are exclusively about the round. There is Southern hospitality everywhere; service is unhurried; the whole place feels like a different era done well.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Bandon feels like a Scottish links pilgrimage moved to Oregon. The dress code is functional, the focus is the round, and the conversation at the bar is about the wind and the next day's tee time. There is no flashy nightlife, no celebrity sightings, no glossy resort theatre. Caddies are a big part of the experience and most groups happily walk 36 holes a day. It feels remote and unhurried, which is a feature, not a bug.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Neither is better. They are different trips for different appetites.
            </p>
          </section>

          {/* Logistics */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Getting there
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pinehurst wins on logistics, by a long way.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Pinehurst</strong> is reached via Raleigh-Durham International (RDU), about a 70 to 75 mile drive (roughly 80 minutes). RDU has direct flights from most US cities and is a reliable, easy airport. Pinehurst Resort runs an airport shuttle if you would rather skip the rental.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Bandon Dunes</strong> is harder to reach, and that is part of the experience. The closest airport is Southwest Oregon Regional (OTH) in North Bend, about 25 to 30 miles from the resort, with a 35 to 40 minute drive. OTH has limited connections, often through Denver or San Francisco. Many groups fly into Eugene (EUG, about 2.5 hours by car) or Portland (PDX, about 4.5 hours) and rent a car. The longer drive into Bandon adds to the pilgrimage feel, but it does eat into trip time.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Once on the ground, both resorts are easy to navigate. Pinehurst Village is walkable; Bandon's resort layout is also walkable around the lodge area, with shuttles between the courses and the Preserve.
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
                answer="If yes, lean Pinehurst. The walkable village and Southern hospitality work well for non-golfers. Bandon can work for partners who specifically love rugged outdoors but is the harder partner sell."
              />
              <DecisionItem
                question="What does your group care about more, heritage or links?"
                answer="If American golf history and tradition matter, Pinehurst is unmatched. If your group has been talking about Scotland or wishes they could go more often, Bandon is the closest US equivalent to a Scottish pilgrimage."
              />
              <DecisionItem
                question="How much travel time can you spare?"
                answer="If your group is East Coast or Midwest, Pinehurst is dramatically easier (RDU has direct flights from nearly everywhere). Bandon adds significant travel time even from the West Coast because of the rural Oregon airport."
              />
            </div>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Want to go deeper? Read our full guides: <Link href="/destinations/pinehurst" className="text-gold hover:underline">Pinehurst destination guide</Link> and <Link href="/destinations/bandon-dunes" className="text-gold hover:underline">Bandon Dunes destination guide</Link>. Or just answer five questions on FairwayPal and let us build the dual itinerary.
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
              Pinehurst vs Bandon Dunes FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="Is Pinehurst or Bandon Dunes better for a golf trip?"
                answer="Both are great American trips, very different. Pinehurst gives heritage, walkability, and a partner-friendly village. Bandon gives the best concentration of links golf in North America. Heritage versus links."
              />
              <FaqItem
                question="How much does each trip cost?"
                answer="Pinehurst: $1,500-$3,000 per person for 3 nights. Bandon: $2,000-$3,500 per person for 3-4 nights. Bandon is slightly more expensive due to caddie fees and longer trip length."
              />
              <FaqItem
                question="Which has better non-golf options?"
                answer="Pinehurst, by a meaningful margin. Walkable village, Tufts Archives, Spa at Pinehurst, Seagrove pottery 30 miles away. Bandon is remote and outdoor-focused: beach walks, wildlife, but limited variety."
              />
              <FaqItem
                question="How many rounds at each?"
                answer="Bandon: 4-6 rounds in 3-4 nights including 36-hole days, walking only. Pinehurst: 3-4 rounds in 3 nights, walk or ride."
              />
              <FaqItem
                question="Which is easier to get to?"
                answer="Pinehurst, by a long way. RDU has direct flights from most US cities and is 70 miles from the resort. Bandon requires either OTH (limited connections) or longer drives from Eugene or Portland."
              />
              <FaqItem
                question="When is the best time to visit?"
                answer="Pinehurst: March-May and September-November. Bandon: July-September is driest, but wind is constant year-round. Pack waterproofs for Bandon at any time."
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
                description="The two best East Coast golf resorts, compared honestly."
              />
              <RelatedPost
                href="/blog/pinehurst-vs-pebble-beach-golf-trip"
                title="Pinehurst vs Pebble Beach"
                description="The East Coast versus West Coast bucket-list shootout."
              />
              <RelatedPost
                href="/blog/bandon-dunes-vs-pebble-beach-golf-trip"
                title="Bandon Dunes vs Pebble Beach"
                description="The two great West Coast bucket-list trips, compared."
              />
              <RelatedPost
                href="/blog/algarve-vs-scotland-golf-trip"
                title="Algarve vs Scotland"
                description="Europe's two big group-golf destinations, compared."
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
