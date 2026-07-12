/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Bandon Dunes vs Pebble Beach for a Golf Trip: Which Should You Pick? | FairwayPal',
  description:
    'A friendly, honest comparison of the two great West Coast golf bucket-list trips. Courses, costs, weather, partner experience, and a verdict by group type.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/bandon-dunes-vs-pebble-beach-golf-trip' },
  openGraph: {
    title: 'Bandon Dunes vs Pebble Beach for a Golf Trip: Which Should You Pick?',
    description:
      'Two of the most iconic golf trips in America, compared honestly. Courses, costs, weather, partner experience, logistics.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bandon Dunes vs Pebble Beach for a Golf Trip: Which Should You Pick?',
  description:
    'Head-to-head comparison of Bandon Dunes and Pebble Beach for a group golf trip. Courses, costs, weather, partner activities, logistics, and a verdict by group type.',
  url: 'https://www.fairwaypal.com/blog/bandon-dunes-vs-pebble-beach-golf-trip',
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
      name: 'Bandon Dunes vs Pebble Beach',
      item: 'https://www.fairwaypal.com/blog/bandon-dunes-vs-pebble-beach-golf-trip',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Bandon Dunes or Pebble Beach better for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on your group. Bandon is the better pure-golf trip: five world-class links courses on one property, all walking, all serious. Pebble Beach is the better all-rounder: one of the most famous courses in the world, Carmel-by-the-Sea five minutes away for partners, and easier logistics. If your group is all golfers, lean Bandon. If partners are joining or you only have time for one bucket-list round, lean Pebble.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Bandon Dunes cheaper than Pebble Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, meaningfully. A round at Pebble Beach Golf Links runs $595 to $625 plus a caddie. A round at any of the Bandon Dunes courses runs $275 to $375 in resort-guest peak season. Lodging is also lower at Bandon (around $250 to $500 a night at the resort) than at Pebble (around $600 to $1,800 at The Lodge or Inn at Spanish Bay). A typical 3 to 4 night trip runs $2,000 to $3,500 per person at Bandon, versus around $2,500 to $5,000 per person at Pebble depending on how many premium rounds you play.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many courses does Bandon Dunes have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Bandon has five full-length courses (Bandon Dunes, Pacific Dunes, Bandon Trails, Old Macdonald, and Sheep Ranch) plus the Bandon Preserve, a 13-hole par-3 course on the headland. All five full courses are world-class, all are walking only, and most groups play four of them across a 3 to 4 night trip with the Preserve thrown in as an evening warm-up.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you get tee times at Pebble Beach Golf Links?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Tee times for Pebble Beach Golf Links are not available on GolfNow. Book directly at pebblebeach.com or by calling the resort. Resort guests at The Lodge, Casa Palmero, or Inn at Spanish Bay can book up to 18 months in advance and have full priority. Outside guests can book about 60 days out, but prime weekend morning slots sell out fast. Set a calendar reminder for 60 days before your trip and book the moment the window opens.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are partners welcome at Bandon Dunes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Welcome, yes. Comfortable, depends on the partner. Bandon is remote and built around golf. Partners who love wild beaches, nature walks, and a quiet rugged coastline will be happy. Partners who want shopping, restaurants, spa days, and variety will find the resort thin. Pebble Beach is a dramatically friendlier choice for non-golfers thanks to Carmel-by-the-Sea, the Monterey Bay Aquarium, the 17-Mile Drive, and Big Sur within easy reach.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Bandon Dunes vs Pebble Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Both are best from May through October. Bandon weather tends to be wetter and cooler year-round; you should expect wind always, and rain about half the time outside high summer. Pebble Beach is famously cool and foggy even in July, with morning fog that usually burns off by midday. Spring and early fall give you the best mix of weather, conditions, and reasonable rates at both. Avoid winter at Bandon if you do not love wind and rain, and avoid the AT&T Pro-Am dates (late January or early February) at Pebble, when the course closes to public play.",
      },
    },
  ],
}

export default function BandonVsPebblePage() {
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
          Bandon Dunes vs Pebble Beach for a Golf Trip: Which Should You Pick?
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>11 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Two trips, two coastlines, one tough decision. Both are bucket-list. Both are expensive. Both are unforgettable. We have organised dozens of trips to each, and the honest answer is that they are very different experiences once you arrive. Here is the friendly comparison so your group can stop debating and start booking.
        </p>

        {/* Quick Verdict */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Quick Verdict</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Choose Bandon Dunes</span> if your group is serious golfers who want a pure links pilgrimage. Five great courses, all walking, all on one property. Budget around $2,000 to $3,500 per person for 3 to 4 nights.
          </p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Choose Pebble Beach</span> if you want one bucket-list round of the most famous course in America, with a partner-friendly base in Carmel-by-the-Sea. Budget around $2,500 to $5,000 per person for 3 nights, depending on how many premium rounds you play.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Courses */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The courses
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The character of the golf is wildly different at these two resorts. Both are spectacular. Neither is a substitute for the other.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <Link href="/destinations/bandon-dunes" className="text-gold hover:underline">Bandon Dunes</Link> is, simply, the best concentration of links golf in North America. Five full-length courses, all walking, all genuinely world-class. Bandon Dunes (the original David McLay Kidd design) and Pacific Dunes (Tom Doak, frequently ranked the best public course in the country) are the two most-played. Bandon Trails is a lovely woodland-and-meadow Bill Coore and Ben Crenshaw design that breaks up the wind. Old Macdonald is a tribute to template holes from C.B. Macdonald and the early American architects. Sheep Ranch (Coore and Crenshaw, 2020) is the newest, with cliff-top fairways and ocean views from every hole. There is also the Bandon Preserve, a 13-hole par-3 course on the headland that is one of the best evening warm-ups anywhere. Five rounds in three days is genuinely doable here, and the variety means it never gets old.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <Link href="/destinations/pebble-beach" className="text-gold hover:underline">Pebble Beach Golf Links</Link> is the most famous golf course in the United States, full stop. It has hosted the U.S. Open six times (1972, 1982, 1992, 2000, 2010, and 2019), and it is already booked for 2027, 2032, 2037, and 2044. The 7th, 8th, 17th, and 18th along the Pacific are arguably the most photographed sequence of holes in golf. Around it on the Monterey Peninsula sit Spyglass Hill (Robert Trent Jones Sr., a harder test than Pebble itself in many golfers' opinion), The Links at Spanish Bay, and the legendary Cypress Point (private, but limited public access via resort packages). Poppy Hills next door is the value play and very playable. The variety here is good, but you are usually building the trip around one or two marquee rounds rather than playing five world-class courses back to back.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <CompareCard
                location="Bandon Dunes"
                pros={['Five full-length world-class links courses', 'Pacific Dunes regularly ranked best public course in America', 'Sheep Ranch ocean views on every hole', 'Walking only, which most golfers love']}
                cons={['Walking required, no carts', 'No single round will feel as photographed as Pebble']}
                color="fairway"
              />
              <CompareCard
                location="Pebble Beach"
                pros={['The most famous course in America', 'Six U.S. Opens hosted, more confirmed through 2044', 'Spyglass and Cypress Point nearby', 'Iconic 7th, 8th, 17th, and 18th holes']}
                cons={['Pebble Links runs $595 to $625 per round', 'Tee times for non-resort-guests fill 60 days out']}
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
              Both are premium trips, but Pebble Beach is meaningfully more expensive on a per-round and per-night basis. The gap widens fast if you play multiple rounds at the marquee course.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-hidden">
              <div className="grid grid-cols-3 border-b border-border bg-bg-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                <span>Cost Item</span>
                <span className="text-center text-fairway-text">Bandon Dunes</span>
                <span className="text-center text-partner-text">Pebble Beach</span>
              </div>
              {[
                ['Marquee course green fee', '$275 to $375 (any of 5)', '$595 to $625 (Pebble Links)'],
                ['Secondary course green fee', '$275 to $375 (resort, peak)', '$280 to $325 (Spyglass / Spanish Bay)'],
                ['Value option green fee', '$100 (Bandon Preserve par-3)', '$90 to $130 (Poppy Hills)'],
                ['Caddie (per bag, per round)', '$100 to $130 plus tip', '$100 to $150 plus tip'],
                ['Resort hotel (per room, per night)', '$250 to $500', '$600 to $1,800'],
                ['Total per person (3 to 4 nights, 3 to 4 rounds)', '$2,000 to $3,500', '$2,500 to $5,000'],
              ].map(([item, bandon, pebble]) => (
                <div key={item} className="grid grid-cols-3 border-b border-border px-5 py-3 text-sm last:border-0">
                  <span className="text-muted-foreground">{item}</span>
                  <span className="text-center font-medium text-fairway-text">{bandon}</span>
                  <span className="text-center font-medium text-partner-text">{pebble}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              The biggest unlock at Bandon is that all the rounds cost roughly the same, so you can play five great courses without a budget conversation. The biggest unlock at Pebble is the off-resort value play: pair one round at Pebble Links with a round at Poppy Hills ($90 to $130) and a round at Spyglass, and the total comes down meaningfully. For a deeper breakdown, see our <Link href="/blog/golf-trip-budget" className="text-gold hover:underline">golf trip budget guide</Link>.
            </p>
          </section>

          {/* Weather */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The weather and when to go
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Both resorts share a calendar: May through October is the sweet spot. After that, the differences start to matter.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Bandon is on the Oregon coast, exposed to Pacific weather. Wind is a constant; rain is frequent outside high summer. June through September is the driest stretch, and even then you should pack waterproofs. Locals will tell you that fighting the weather is part of the experience, and that you have not really played links golf until you have played it in 20 mph wind. They are right, but it is something to know going in.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pebble Beach is on the Monterey Peninsula, which has its own quirky climate. Summer mornings are famously cool and foggy (highs in the 60s in July), with the fog burning off by midday. Winter brings rain. Spring and early fall give you firm fairways, fewer crowds, and the most reliable conditions. Avoid the AT&T Pro-Am dates in late January or early February, when Pebble Links closes to public play.
            </p>
            <div className="mt-4 rounded-xl border border-border bg-card/60 p-4 text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground">Best months: </span>
              Both: May through October. Bandon's driest stretch is July through September. Pebble's clearest weather is September and October.
            </div>
          </section>

          {/* Non-golfer */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The non-golfer experience
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              This is the cleanest gap between the two, and it usually decides the trip if partners are joining.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pebble Beach is unusually generous to non-golfers. <strong>Carmel-by-the-Sea</strong> is five minutes from the resort and is one of the most charming small towns in California: walkable, full of art galleries and boutiques, with one of the best food scenes on the West Coast. The Monterey Bay Aquarium (about 20 minutes away) is genuinely world-class. The 17-Mile Drive is a beautiful self-guided coastal tour. Big Sur is 30 miles south and offers some of the most dramatic scenery in North America. Wine tasting in Carmel Valley adds another easy day. A non-golfer at Pebble can have a full holiday without ever setting foot on a golf course.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Bandon Dunes is honest about what it is. The resort is remote, set on miles of wild Oregon coastline. Partners who love beach walks, nature, the Bandon Marsh wildlife refuge, and quiet small-town Pacific Northwest charm will be happy. There is good dining at the resort and a small spa. The town of Bandon is pleasant for a half-day, with galleries and cranberry bogs. But the variety is thin compared to Pebble, and three or four days is a stretch unless your partner specifically loves quiet, outdoor, weather-exposed places. If a partner is coming and they are not specifically into rugged nature, Pebble is the kinder choice.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Our guide on <Link href="/blog/golf-trip-with-non-golfers" className="text-gold hover:underline">planning a golf trip with non-golfers</Link> goes deeper on how to structure each day so nobody feels stranded.
            </p>
          </section>

          {/* Vibe */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The vibe
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              These trips feel different in ways your group will notice immediately.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Bandon is a pilgrimage. The dress code is functional, the focus is the round, and conversation at the bar at the end of the day is exclusively about the golf. There is no flashy nightlife, no celebrity sightings, no glossy resort theatre. Caddies are a big part of the experience and most groups walk 36 holes a day quite happily. It feels remote and unhurried, which is a feature, not a bug.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pebble Beach is a destination. The Lodge has a buzz about it. Carmel is alive at night. Other guests are there to play tennis or walk the cliffs as much as to play golf. The pace is more polished, the food is more refined, the dress code at dinner is a notch up. After a round at Pebble Links you can be back at the room with the group's partners, then off to dinner in Carmel, and back to the room at a reasonable hour. Less monastic, more holiday.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Neither is better. They are different trips for different groups, and your group probably already knows which one fits.
            </p>
          </section>

          {/* Logistics */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Getting there and getting around
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pebble Beach wins on logistics. Monterey Regional Airport (MRY) is about 8 miles from the resort, roughly a 15 minute drive. MRY has direct flights from a handful of West Coast hubs. If your group is flying from further afield, San Francisco (SFO) and San Jose (SJC) are about 110 and 80 miles north respectively, and the drive down Highway 1 is part of the trip.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Bandon is harder to reach, and that is part of the experience. The closest airport is Southwest Oregon Regional (OTH) in North Bend, about 25 to 30 miles from the resort, with a short drive of roughly 35 to 40 minutes. OTH has limited connections, often through Denver or San Francisco. Many groups fly into Eugene (EUG, about 2 hours 30 minutes by car) or Portland (PDX, about 4 hours 30 minutes) and rent a car. The longer drive into Bandon adds to the pilgrimage feel, but it does eat into your trip time and increase costs.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Once you arrive, Pebble is easy: walk between The Lodge, the practice areas, and the 1st tee, or hop a short shuttle to Spyglass and Spanish Bay. Bandon is also walkable around the lodge area, and resort shuttles run between the courses and the Preserve.
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
                answer="If yes, Pebble Beach is the friendlier choice. Carmel-by-the-Sea, the Aquarium, Big Sur, and Carmel Valley wine country all give partners a real holiday. Bandon can work for partners who love rugged outdoors, but it asks more of them."
              />
              <DecisionItem
                question="What does your group care about more, the round or the rounds?"
                answer="If the goal is to play as much great links golf as possible across one trip, Bandon is unmatched. If the goal is one or two unforgettable rounds at the most famous course in America, Pebble Beach is the trip."
              />
              <DecisionItem
                question="How do you feel about walking, weather, and getting out there?"
                answer="If your group walks happily, embraces wind and the occasional rain, and likes a remote pilgrimage feel, Bandon is heaven. If you would rather hop a quick flight, ride or walk, and pair golf with great food in a charming town, Pebble is the better fit."
              />
            </div>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Want to go deeper? Read our full guides: <Link href="/destinations/bandon-dunes" className="text-gold hover:underline">Bandon Dunes destination guide</Link> and <Link href="/destinations/pebble-beach" className="text-gold hover:underline">Pebble Beach destination guide</Link>. Or just answer five questions on FairwayPal and let us build the dual itinerary, with golf for the players and a parallel plan for the partners.
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
              Bandon Dunes vs Pebble Beach FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="Is Bandon Dunes or Pebble Beach better for a golf trip?"
                answer="It depends on your group. Bandon is the better pure-golf trip with five world-class links courses on one property. Pebble Beach is the better all-rounder, with one bucket-list course and Carmel-by-the-Sea five minutes away for partners. Serious golfers tend to prefer Bandon. Mixed groups tend to prefer Pebble."
              />
              <FaqItem
                question="Is Bandon Dunes cheaper than Pebble Beach?"
                answer="Yes, meaningfully. Pebble Links runs $595 to $625 per round vs $275 to $375 at any Bandon course. Lodging is also lower at Bandon. A 3 to 4 night trip runs around $2,000 to $3,500 per person at Bandon vs $2,500 to $5,000 at Pebble."
              />
              <FaqItem
                question="How many courses are at Bandon Dunes?"
                answer="Five full-length courses (Bandon Dunes, Pacific Dunes, Bandon Trails, Old Macdonald, and Sheep Ranch) plus the Bandon Preserve, a 13-hole par-3 course. Most groups play 3 to 4 of the full courses plus the Preserve."
              />
              <FaqItem
                question="How do you get tee times at Pebble Beach?"
                answer="Book directly at pebblebeach.com or by phone. Resort guests at The Lodge, Casa Palmero, or Inn at Spanish Bay can book up to 18 months in advance. Outside guests can book about 60 days out, but prime weekend mornings sell out fast."
              />
              <FaqItem
                question="Are partners welcome at Bandon Dunes?"
                answer="Welcome yes, but Bandon is a remote, golf-focused resort. Partners who love beach walks, nature, and rugged Pacific Northwest scenery do well. Partners who want shopping, restaurants, and variety will find it thin. Pebble is the friendlier choice for non-golfers."
              />
              <FaqItem
                question="When is the best time to visit?"
                answer="Both: May through October. Bandon is driest July through September. Pebble is clearest in September and October. Avoid the AT&T Pro-Am dates at Pebble (late January or early February) when the course closes to public play."
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
                href="/blog/pebble-beach-golf-trip"
                title="Pebble Beach Golf Trip Guide"
                description="How to actually get tee times, what it costs, and the full Monterey Peninsula itinerary."
              />
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
                href="/blog/golf-trip-with-non-golfers"
                title="Golf Trips With Non-Golfers"
                description="How to plan a trip that genuinely works for the whole group."
              />
              <RelatedPost
                href="/blog/golf-trip-budget"
                title="Golf Trip Budget Breakdown"
                description="What a golf trip actually costs by destination and group size."
              />
              <RelatedPost
                href="/blog/best-bachelor-party-golf-destinations"
                title="Best Bachelor Golf Destinations"
                description="The top six US destinations for bachelor weekends, ranked honestly."
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
