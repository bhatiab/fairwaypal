/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Pinehurst vs Kiawah Island for a Golf Trip: Which Should You Pick? | FairwayPal',
  description:
    'Two of the best golf resorts on the East Coast. We compare Pinehurst and Kiawah Island honestly across courses, cost, weather, partner activities, and logistics, with a clear verdict by group type.',
  alternates: { canonical: 'https://fairwaypal.com/blog/pinehurst-vs-kiawah-island-golf-trip' },
  openGraph: {
    title: 'Pinehurst vs Kiawah Island for a Golf Trip: Which Should You Pick?',
    description:
      'A friendly, honest head-to-head between Pinehurst and Kiawah Island. Courses, costs, weather, partner experience, and a clear verdict.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pinehurst vs Kiawah Island for a Golf Trip: Which Should You Pick?',
  description:
    'A head-to-head comparison of Pinehurst and Kiawah Island for a group golf trip. Courses, costs, weather, partner activities, logistics, and a verdict by group type.',
  url: 'https://fairwaypal.com/blog/pinehurst-vs-kiawah-island-golf-trip',
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
      name: 'Pinehurst vs Kiawah Island',
      item: 'https://fairwaypal.com/blog/pinehurst-vs-kiawah-island-golf-trip',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Pinehurst or Kiawah Island better for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Both are excellent. Pinehurst wins for serious-golf groups who want history, walkability, and nine courses on one resort property. Kiawah wins for groups that include non-golfers because the beach, the spa, and Charleston nearby give partners a real holiday. If your group is all golfers, lean Pinehurst. If partners are joining, lean Kiawah.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Pinehurst golf trip cost compared to Kiawah Island?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pinehurst typically runs $1,500 to $3,000 per person for 3 nights with 2 to 3 rounds. Kiawah typically runs $1,800 to $3,500 per person for 3 nights with 2 to 3 rounds. Kiawah trends pricier because of higher resort accommodation rates and the forecaddie fee on the Ocean Course. Both have cheaper off-property options if you book ahead.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Ocean Course at Kiawah harder than Pinehurst No. 2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Different kinds of hard. Pinehurst No. 2 punishes you with crowned greens that reject anything less than precise. The Ocean Course punishes you with wind, water, and exposure on every hole. Most low handicaps say the Ocean Course is the harder day if it is windy, while No. 2 is the harder test of pure ball-striking. Both are humbling.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for non-golfers, Pinehurst or Kiawah Island?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Kiawah, comfortably. The island has 10 miles of beach, a world-class spa at The Sanctuary, kayaking, biking trails, and Charleston is only about 25 miles away for shopping, dining, and history. Pinehurst has a charming walkable village, a few good restaurants, and not a lot else. A non-golfer in Pinehurst can have a quiet weekend. A non-golfer at Kiawah can have a holiday.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Pinehurst or Kiawah Island for golf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "March through May and September through November work well at both. Spring offers blooming dogwoods at Pinehurst and warm-but-not-humid Atlantic days at Kiawah. Fall is firm fairways and lower humidity. Avoid mid-summer if you can: temperatures climb into the 90s and humidity is heavy. Winter is playable at both with lower rates, though Kiawah can get windy on the Ocean Course.",
      },
    },
    {
      '@type': 'Question',
      name: 'What airport do you fly into for Pinehurst vs Kiawah?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pinehurst is most commonly reached via Raleigh-Durham International (RDU), about a 70 mile drive. Kiawah is reached via Charleston International (CHS), about a 30 to 40 mile drive depending on traffic. Kiawah wins on logistics: shorter drive from a smaller, simpler airport.",
      },
    },
  ],
}

export default function PinehurstVsKiawahPage() {
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
          Pinehurst vs Kiawah Island for a Golf Trip: Which Should You Pick?
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          You have narrowed your group trip to two of the best golf resorts on the East Coast, and the planning thread has gone quiet. We get it. Both are brilliant, both are bucket-list, and both come with a price tag worth getting right. Here is the honest comparison so you can make the call and get back to picking tee times.
        </p>

        {/* Quick Verdict */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Quick Verdict</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Choose Pinehurst</span> if your group is serious golfers, you love walking history, and you want nine courses on one property. Budget around $1,500 to $3,000 per person for 3 nights.
          </p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Choose Kiawah Island</span> if partners are joining, the Ocean Course is on your bucket list, and you want a holiday wrapped around the golf. Budget around $1,800 to $3,500 per person for 3 nights.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Courses */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The courses
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Both resorts have a marquee course that lives up to its reputation, plus a strong supporting cast. The character of the golf is what really separates them.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <Link href="/destinations/pinehurst" className="text-gold hover:underline">Pinehurst</Link> is the cradle of American golf, and it feels like it. The resort has nine numbered courses (No. 1 through No. 9) plus The Cradle, a 9-hole short course that is genuinely one of the best evening rounds in the country. <strong>Pinehurst No. 2</strong>, the Donald Ross masterpiece, has hosted the U.S. Open in 1999, 2005, 2014, and 2024, and is an anchor site for 2029, 2035, 2041, and 2047. Those crowned greens are everything you have heard about. No. 4 (the Gil Hanse redesign) and No. 8 are excellent and more affordable. Off-property, Pine Needles, Mid Pines, and Tobacco Road round out a serious week of golf without anyone driving more than 30 minutes.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <Link href="/destinations/kiawah-island" className="text-gold hover:underline">Kiawah Island</Link> has five courses, headlined by Pete Dye's <strong>Ocean Course</strong>. It hosted the 1991 Ryder Cup, the 2012 PGA Championship (Rory McIlroy by eight shots), and the 2021 PGA Championship (Phil Mickelson, the oldest major winner ever at 50). It is also already booked for the 2031 PGA. Every hole has an ocean view, and on a windy day it can be one of the most demanding rounds in North America. Cougar Point, Oak Point, Osprey Point, and Turtle Point are the secondary courses, all genuinely good, all very playable. There is less variety than Pinehurst, but the Ocean Course alone is a reason to come.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <CompareCard
                location="Pinehurst"
                pros={['Nine resort courses plus The Cradle', 'No. 2 is a Donald Ross masterpiece and U.S. Open anchor site', 'Pine Needles, Mid Pines, Tobacco Road nearby', 'Every handicap finds something to play']}
                cons={['No. 2 runs $350 to $500 a round', 'Less drama than oceanfront layouts']}
                color="fairway"
              />
              <CompareCard
                location="Kiawah Island"
                pros={['Pete Dye Ocean Course, host of 2012 and 2021 PGA Championships', 'Ocean views on every hole at the marquee course', 'Four solid secondary courses', 'Forecaddies enhance the marquee round']}
                cons={['Ocean Course runs $400 to $600 plus forecaddie fee', 'Wind can make it borderline unplayable for high handicaps']}
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
              Both are premium trips, but Kiawah typically costs a touch more. The accommodation is the biggest swing factor, followed by green fees and the Ocean Course forecaddie.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-hidden">
              <div className="grid grid-cols-3 border-b border-border bg-bg-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                <span>Cost Item</span>
                <span className="text-center text-fairway-text">Pinehurst</span>
                <span className="text-center text-partner-text">Kiawah Island</span>
              </div>
              {[
                ['Marquee course green fee', '$350 to $500 (No. 2)', '$400 to $600 (Ocean)'],
                ['Secondary course green fee', '$80 to $250', '$150 to $280'],
                ['Resort hotel (per room/night)', '$300 to $600', '$500 to $1,400'],
                ['Off-property hotel (per night)', '$100 to $180', '$120 to $250'],
                ['Forecaddie (marquee round)', 'Optional', '$50 to $75 plus tip'],
                ['Total per person (3 nights, 2 to 3 rounds)', '$1,500 to $3,000', '$1,800 to $3,500'],
              ].map(([item, pinehurst, kiawah]) => (
                <div key={item} className="grid grid-cols-3 border-b border-border px-5 py-3 text-sm last:border-0">
                  <span className="text-muted-foreground">{item}</span>
                  <span className="text-center font-medium text-fairway-text">{pinehurst}</span>
                  <span className="text-center font-medium text-partner-text">{kiawah}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              The biggest savings at either resort come from the stay-and-play packages. At Pinehurst, the resort package gets you preferred tee times and a meaningfully better rate on No. 2. At Kiawah, staying on-property unlocks priority Ocean Course access. If you are not staying on property at Kiawah, book your tee times 60 to 90 days out. Want the full breakdown by destination? See our <Link href="/blog/golf-trip-budget" className="text-gold hover:underline">golf trip budget guide</Link>.
            </p>
          </section>

          {/* Weather */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The weather and when to go
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Good news here: the windows are nearly identical. Both resorts shine in spring (March to May) and fall (September to November), with mild temperatures, lower humidity, and courses in beautiful condition.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              A few small differences worth knowing. Pinehurst sits inland in the North Carolina Sandhills, so summer feels muggier and winter feels colder than at Kiawah. Kiawah sits on the Atlantic, which means milder winters and cooler summer mornings, balanced by the chance of strong onshore wind that can make the Ocean Course a different golf course entirely. If wind worries you, hedge your tee time toward the morning.
            </p>
            <div className="mt-4 rounded-xl border border-border bg-card/60 p-4 text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground">Best months: </span>
              Both resorts are best March through May and September through November. April and October are sweet spots for weather and conditions.
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
              Kiawah Island is genuinely set up for partners. There are 10 miles of Atlantic beach right outside your door. The Sanctuary Spa is excellent (book at least two weeks ahead in peak season). Kayaking through tidal creeks, biking the maritime forest trails, and a lazy afternoon on the beach all fill a day comfortably. And then there is Charleston, about 25 miles away, with arguably the best food scene in the South, walkable historic streets, and a calendar full of events. A non-golfer at Kiawah can have a real holiday.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pinehurst is charming but quieter. The walkable village has boutiques, the Tufts Archives, and a small handful of good restaurants. The spa at The Carolina Hotel is solid. There are local wineries and short historical tours, and an afternoon or two passes pleasantly. But three days is a stretch unless your partner specifically loves Southern small-town charm. If a non-golfing partner is coming, Kiawah is the friendlier choice.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Want a deeper dive on this? Our guide to <Link href="/blog/golf-trip-with-non-golfers" className="text-gold hover:underline">planning a golf trip with non-golfers</Link> covers how to structure the days so nobody feels like an afterthought.
            </p>
          </section>

          {/* Vibe */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The vibe
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              These trips feel different in ways that matter to a group.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pinehurst feels like a pilgrimage. You are walking past the Putter Boy statue, eating at the same hotel where the legends ate, watching groups roll in for caddied rounds at a deliberate, traditional pace. The whole village is built around golf, and conversations at the bar at the end of the day are exclusively about the round. It is wonderful if you love that, and a little intense if you do not.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Kiawah feels like a resort holiday that happens to have world-class golf. The pace is slower. The dress code is looser. After your round, you might be back at the pool with the group's partners by 3 p.m., and dinner is just as likely to be a beach restaurant in Charleston as a clubhouse meal. There is less of the tradition, but more of the fun.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Neither is better. They genuinely are different trips, and the right one depends on what your group actually wants from the weekend.
            </p>
          </section>

          {/* Logistics */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Getting there and getting around
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Kiawah wins on logistics. Charleston International (CHS) is about a 30 to 40 mile drive to the island, roughly 45 to 60 minutes depending on traffic. CHS is small and easy, and the drive itself is pleasant.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pinehurst sits about 70 to 75 miles from Raleigh-Durham International (RDU), which is roughly an 80 minute drive. RDU is a bigger airport with more direct flights from across the U.S., so you may save on flight time what you spend on the drive. The resort runs an airport shuttle if you want to skip the rental car.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Once you are there, both resorts are easy. Pinehurst village is walkable. Kiawah is a private gated community, so a car helps but is not strictly required if you are happy to use resort shuttles.
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
                answer="If yes, lean Kiawah. The beach, the spa, and Charleston nearby give partners a real holiday. Pinehurst can work for a partner who likes a quiet, charming village, but it is a tougher fit if they want variety."
              />
              <DecisionItem
                question="What does your group care about more, history or the experience?"
                answer="If it is the history of the game and a deliberate, traditional pace, Pinehurst is unmatched. If it is the round itself and the holiday around it, Kiawah feels lighter and more social."
              />
              <DecisionItem
                question="What is the budget ceiling?"
                answer="Both are premium, but Pinehurst typically lands a few hundred dollars per person cheaper because of accommodation. If budget is the real constraint, Pinehurst gives more flexibility."
              />
            </div>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Still on the fence? Our full destination guides go deeper: <Link href="/destinations/pinehurst" className="text-gold hover:underline">Pinehurst destination guide</Link> and <Link href="/destinations/kiawah-island" className="text-gold hover:underline">Kiawah Island destination guide</Link>. Or just answer five questions and let FairwayPal build the dual itinerary, with golf for the players and a parallel plan for the partners.
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
              Pinehurst vs Kiawah Island FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="Is Pinehurst or Kiawah Island better for a golf trip?"
                answer="Both are excellent. Pinehurst wins for serious-golf groups who want history, walkability, and nine courses on one property. Kiawah wins for groups with partners because the beach, the spa, and Charleston nearby give non-golfers a real holiday."
              />
              <FaqItem
                question="How much does a Pinehurst golf trip cost compared to Kiawah?"
                answer="Pinehurst typically runs $1,500 to $3,000 per person for 3 nights with 2 to 3 rounds. Kiawah typically runs $1,800 to $3,500 for the same. Kiawah trends pricier because of higher accommodation rates and the forecaddie fee on the Ocean Course."
              />
              <FaqItem
                question="Is the Ocean Course at Kiawah harder than Pinehurst No. 2?"
                answer="Different kinds of hard. Pinehurst No. 2 punishes you with crowned greens. The Ocean Course punishes you with wind, water, and exposure. Most low handicaps say the Ocean Course is the harder day if it is windy, while No. 2 is the harder pure ball-striking test."
              />
              <FaqItem
                question="Which is better for non-golfers, Pinehurst or Kiawah?"
                answer="Kiawah, comfortably. Beach, spa, biking, kayaking, plus Charleston about 25 miles away. Pinehurst is charming but quieter and works better for shorter visits or partners who specifically like small-town atmosphere."
              />
              <FaqItem
                question="When is the best time to visit?"
                answer="March through May and September through November work well at both. April and October are the sweet spots. Avoid mid-summer if you can: heat and humidity are heavy across the Carolinas."
              />
              <FaqItem
                question="What airport do you fly into for each?"
                answer="Pinehurst is most easily reached via Raleigh-Durham International (RDU), about a 70 mile drive. Kiawah is reached via Charleston International (CHS), about a 30 to 40 mile drive. Kiawah wins on logistics."
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
                href="/blog/kiawah-island-golf-trip"
                title="Kiawah Island Golf Trip Guide"
                description="The Ocean Course, the four secondary courses, and a Charleston-paired partner plan."
              />
              <RelatedPost
                href="/blog/pinehurst-vs-pebble-beach-golf-trip"
                title="Pinehurst vs Pebble Beach"
                description="The other big East Coast versus West Coast bucket-list debate."
              />
              <RelatedPost
                href="/blog/scottsdale-vs-myrtle-beach-golf-trip"
                title="Scottsdale vs Myrtle Beach"
                description="Two more popular US destinations compared honestly."
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
