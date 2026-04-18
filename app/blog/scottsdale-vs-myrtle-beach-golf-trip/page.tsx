/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

export const metadata: Metadata = {
  title: 'Scottsdale vs Myrtle Beach for a Golf Trip: Which One Actually Wins? — FairwayPal',
  description:
    "Two of the most popular US golf destinations. One budget. One decision. The honest comparison — courses, costs, weather, partner options, and a verdict.",
  alternates: { canonical: 'https://fairwaypal.com/blog/scottsdale-vs-myrtle-beach-golf-trip' },
  openGraph: {
    title: 'Scottsdale vs Myrtle Beach for a Golf Trip: Which One Actually Wins?',
    description:
      'The honest comparison of the two most popular US golf trip destinations — courses, costs, weather, and a clear verdict.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Scottsdale vs Myrtle Beach for a Golf Trip: Which One Actually Wins?',
  description:
    "Two of the most popular US golf destinations. One budget. One decision. The honest comparison — courses, costs, weather, partner options, and a verdict.",
  url: 'https://fairwaypal.com/blog/scottsdale-vs-myrtle-beach-golf-trip',
  datePublished: '2025-04-17',
  dateModified: '2025-04-17',
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
      name: 'Scottsdale vs Myrtle Beach',
      item: 'https://fairwaypal.com/blog/scottsdale-vs-myrtle-beach-golf-trip',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Scottsdale or Myrtle Beach better for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on what you're optimising for. Scottsdale wins on course prestige, weather reliability, and the overall experience — but costs more. Myrtle Beach wins on volume (100+ courses), value for money, and the beach/party atmosphere. For a serious-golf or bucket-list trip: Scottsdale. For a group optimising fun per dollar: Myrtle Beach.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which is cheaper — Scottsdale or Myrtle Beach for golf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Myrtle Beach is significantly cheaper. Premium Scottsdale courses run $150–350/round. Myrtle Beach premium courses run $80–150. Hotels are comparable, but house rentals near courses skew cheaper in Myrtle Beach. A full weekend per person (flights, accommodation, 2 rounds, meals) typically runs $1,400–2,200 in Scottsdale vs $900–1,500 in Myrtle Beach.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Myrtle Beach good for non-golfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, better than most golf destinations expect. The beach is the main draw — genuine Atlantic coastline with watersports, fishing, and beach days. Broadway at the Beach has shopping, restaurants, and entertainment. The Myrtle Beach boardwalk area works well for evenings. It's not as culturally rich as Scottsdale's Old Town or Ireland's Galway, but it's more than enough for a long weekend.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Scottsdale for golf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "October through April. Peak season is January–March (65–80°F, perfect conditions). November and March offer the best weather-to-price ratio — busy season hasn't fully kicked in. Avoid May through September: temperatures regularly exceed 110°F and afternoon rounds become unplayable. The Waste Management Phoenix Open in February drives peak hotel pricing.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Myrtle Beach for golf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Spring (March–May) and fall (September–November) are the sweet spots — temperatures 65–80°F, courses in good condition, prices below peak. Summer is hot and humid but cheaper, and the beach crowd thins out the golf course wait times. Winter is mild (50–60°F) with off-peak pricing — the 'snowbird' season keeps courses busy but rates are lower than spring. Avoid major spring break weeks in March.",
      },
    },
  ],
}

export default function ScottsdaleVsMyrtleBeachPage() {
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
          Scottsdale vs Myrtle Beach for a Golf Trip: Which One Actually Wins?
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>April 17, 2025</span>
          <span>·</span>
          <span>9 min read</span>
        </div>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          The group has two camps. One wants Scottsdale — desert luxury, TPC, the whole thing. The other wants Myrtle Beach — 100 courses, cheap rounds, party atmosphere. Here's the honest comparison so you can stop arguing and start booking.
        </p>

        {/* Quick Verdict */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Quick Verdict</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Choose Scottsdale</span> if you want premium courses, consistent weather, and a high-end experience. Budget ~$1,600–2,200/person for a 3-night trip.
          </p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Choose Myrtle Beach</span> if budget matters and volume of golf is the priority. Budget ~$900–1,500/person for a 3-night trip.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Courses */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The courses
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              This is where Scottsdale pulls ahead for golf purists. <Link href="/destinations/scottsdale" className="text-gold hover:underline">Scottsdale</Link> offers some of the most technically impressive and visually spectacular desert golf in the world — TPC Scottsdale's Stadium Course, Troon North, We-Ko-Pa. These are courses people travel specifically to play. The quality ceiling is higher.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <Link href="/destinations/myrtle-beach" className="text-gold hover:underline">Myrtle Beach</Link> offers volume. 100+ courses within a short drive. Caledonia Golf & Fish Club is genuinely world-class. TPC Myrtle Beach is an excellent test. Pawleys Plantation is underrated. But the range is wider — for every Caledonia there are ten tourist-trap track layouts that exist to fill tee sheets.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <CompareCard
                location="Scottsdale"
                pros={['TPC Scottsdale, Troon North, We-Ko-Pa', 'Dramatic desert scenery', 'Consistent playing conditions', 'High quality floor']}
                cons={['$150–350/round', 'Fewer options under $100']}
                color="fairway"
              />
              <CompareCard
                location="Myrtle Beach"
                pros={['100+ courses', 'Caledonia and TPC are legitimate', '$40–150/round typical', 'More rounds per day possible']}
                cons={['Quality range is wide', 'Some layouts feel like glorified pitch-and-putts']}
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
              This is Myrtle Beach's strongest argument. The green fee gap is real and it compounds across a 3-day trip for a group.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-hidden">
              <div className="grid grid-cols-3 border-b border-border bg-bg-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                <span>Cost Item</span>
                <span className="text-center text-fairway-text">Scottsdale</span>
                <span className="text-center text-partner-text">Myrtle Beach</span>
              </div>
              {[
                ['Green fees (avg/round)', '$185–250', '$70–130'],
                ['Hotel (per room/night)', '$150–300', '$100–200'],
                ['Flights (from Midwest)', '$250–400', '$200–350'],
                ['Food & drink (per day)', '$80–120', '$60–90'],
                ['Total per person (3 nights, 2 rounds)', '$1,400–2,200', '$900–1,500'],
              ].map(([item, scottsdale, myrtleBeach]) => (
                <div key={item} className="grid grid-cols-3 border-b border-border px-5 py-3 text-sm last:border-0">
                  <span className="text-muted-foreground">{item}</span>
                  <span className="text-center font-medium text-fairway-text">{scottsdale}</span>
                  <span className="text-center font-medium text-partner-text">{myrtleBeach}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              On a 6-person trip, that cost difference — ~$500/person — is $3,000 total. Real money. If budget is a constraint, that's the conversation to have before you pick a destination.
            </p>
          </section>

          {/* Weather */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The weather
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Scottsdale wins on reliability. October through April, you're looking at 65–85°F with almost no rain. You will not lose a round to weather. The only caveat: avoid June through September when it exceeds 110°F.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Myrtle Beach is playable year-round but with more variability. Spring and fall are the sweet spots (65–80°F). Summer is hot and humid — playable with an early tee time but uncomfortable by noon. Winter is mild compared to most of the US but not as reliable as Scottsdale. Rain is more likely at any time of year.
            </p>
            <div className="mt-4 rounded-xl border border-border bg-card/60 p-4 text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground">Best months: </span>
              Scottsdale October–April (avoid summer). Myrtle Beach March–May and September–November.
            </div>
          </section>

          {/* Non-golfer */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The non-golfer angle
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              If your group includes non-golfers, Scottsdale has the edge — but Myrtle Beach holds its own.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Scottsdale's Old Town is genuinely excellent: art galleries, restaurants, spa resorts (Joya, Well & Being), wine trail, Desert Botanical Garden, hot air balloon rides. A non-golfer can fill three days in Scottsdale without ever feeling like they're making the best of a bad situation.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Myrtle Beach's advantage is the ocean. A non-golfer who wants a beach holiday has everything they need: watersports, fishing, long stretches of Atlantic coastline, and decent food along the boardwalk. Broadway at the Beach adds shopping and entertainment. It's not as curated as Scottsdale but it works.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              See our full guide on <Link href="/blog/golf-trip-with-non-golfers" className="text-gold hover:underline">planning a golf trip with non-golfers</Link> for more detail on both destinations.
            </p>
          </section>

          {/* Vibe */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The vibe
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              These are genuinely different trips.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Scottsdale is desert luxury. Upscale hotels, strong restaurant scene, a nightlife district that skews older-money rather than frat-house. The default mode is expensive and polished. It rewards planning and a decent budget.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Myrtle Beach is more casual and unabashedly fun. Golf in the morning, beach or pool in the afternoon, boardwalk in the evening. There's no pretension. The vibe is accessible and high-energy rather than premium and restrained.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Neither is better. They're different trips for different groups.
            </p>
          </section>

          {/* Decision */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Three questions that settle it
            </h2>
            <div className="mt-6 space-y-4">
              <DecisionItem
                question="Is budget a real constraint?"
                answer="If yes, Myrtle Beach. The $500/person saving is substantial across a 6–8 person group."
              />
              <DecisionItem
                question="Are you going for the golf or for the trip?"
                answer="If the courses are the point and you want to play somewhere memorable, Scottsdale. If golf is the activity and fun is the point, Myrtle Beach."
              />
              <DecisionItem
                question="Are there non-golfers in the group?"
                answer="Both work. Scottsdale edges it on partner activity quality. Myrtle Beach wins if partners prioritise beach access."
              />
            </div>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Still undecided? Read our full breakdowns: <Link href="/destinations/scottsdale" className="text-gold hover:underline">Scottsdale destination guide</Link> and <Link href="/destinations/myrtle-beach" className="text-gold hover:underline">Myrtle Beach destination guide</Link>. Or just answer five questions and let FairwayPal build the itinerary for whichever you pick.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Pick a destination. We'll plan the rest.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              5 questions. Dual itinerary — golf and partners. One link for the group.
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
              Scottsdale vs Myrtle Beach FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="Is Scottsdale or Myrtle Beach better for a golf trip?"
                answer="It depends on what you're optimising for. Scottsdale wins on course prestige, weather reliability, and the overall experience — but costs more. Myrtle Beach wins on volume, value, and the beach/party atmosphere. For a serious-golf trip: Scottsdale. For fun per dollar: Myrtle Beach."
              />
              <FaqItem
                question="Which is cheaper — Scottsdale or Myrtle Beach for golf?"
                answer="Myrtle Beach is significantly cheaper. Premium Scottsdale courses run $150–350/round vs $80–150 in Myrtle Beach. A full weekend per person typically runs $1,400–2,200 in Scottsdale vs $900–1,500 in Myrtle Beach."
              />
              <FaqItem
                question="Is Myrtle Beach good for non-golfers?"
                answer="Yes — the beach is the main draw, plus watersports, fishing, Broadway at the Beach, and the boardwalk. Not as curated as Scottsdale's Old Town but more than enough for a long weekend."
              />
              <FaqItem
                question="When is the best time to visit Scottsdale for golf?"
                answer="October through April. November and March offer the best weather-to-price ratio. Avoid May–September when temperatures exceed 110°F."
              />
              <FaqItem
                question="When is the best time to visit Myrtle Beach for golf?"
                answer="Spring (March–May) and fall (September–November) are the sweet spots — 65–80°F and courses in peak condition. Avoid major spring break weeks in March if you want reasonable prices."
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
                href="/blog/golf-trip-budget"
                title="Golf Trip Budget Breakdown"
                description="What a golf trip actually costs — by destination and group size."
              />
              <RelatedPost
                href="/blog/best-bachelor-party-golf-destinations"
                title="Best Bachelor Golf Destinations"
                description="All six destinations ranked honestly, with trade-offs noted."
              />
              <RelatedPost
                href="/blog/golf-trip-with-non-golfers"
                title="Golf Trips With Non-Golfers"
                description="How to plan a trip that works for the whole group."
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
