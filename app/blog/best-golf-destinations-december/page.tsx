/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

export const metadata: Metadata = {
  title: 'The Best Golf Destinations in December (2026 Honest Guide)',
  description: 'An honest ranking of where to take a golf trip in December. Scottsdale, Florida, the Algarve and the Carolinas, plus the holiday weeks to avoid and where to skip entirely.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/best-golf-destinations-december' },
  openGraph: { title: 'The Best Golf Destinations in December', description: 'Honest ranking of where to go for a golf trip in December.' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'The Best Golf Destinations in December (2026 Honest Guide)',
  description: 'Practical ranking of the best golf trip destinations for December. Climate, daylight, holiday-week pricing, partner experience.',
  url: 'https://www.fairwaypal.com/blog/best-golf-destinations-december',
  datePublished: '2026-10-03', dateModified: '2026-10-03',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://www.fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://www.fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.fairwaypal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Best Golf Destinations in December', item: 'https://www.fairwaypal.com/blog/best-golf-destinations-december' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best place to play golf in December?', acceptedAnswer: { '@type': 'Answer', text: 'Scottsdale and Florida are the most reliable December picks: both are inside their peak golf seasons, and early December is cheaper than January. The Algarve is the best-value European option, with mild days and low-season prices. Avoid Scotland, Ireland, Bandon Dunes and Pebble Beach in December.' } },
    { '@type': 'Question', name: 'Is December a good month for a golf trip?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, if you go south and go early. The first two weeks of December are the sweet spot in the Sunbelt. Christmas and New Year weeks are peak family travel and the most expensive part of the month.' } },
    { '@type': 'Question', name: 'Is Scottsdale or Florida better in December?', acceptedAnswer: { '@type': 'Answer', text: 'Scottsdale is drier, with cool mornings: Phoenix-area December normals are a high of about 66°F and a low of about 45°F. Florida is warmer, at 60 to 75°F. Scottsdale wins on nightlife and desert courses; Florida wins on warmth and easy East Coast flights.' } },
    { '@type': 'Question', name: 'Can you play golf in the Carolinas in December?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kiawah, Myrtle Beach and Pinehurst are all playable in December, with cool temperatures and winter green fees. Expect jacket weather and the occasional cold, windy day.' } },
    { '@type': 'Question', name: 'How far ahead should you book a golf trip over Christmas or New Year?', acceptedAnswer: { '@type': 'Answer', text: 'Book flights about two months out: Google Flights data found average Christmas fares were lowest around 71 days before departure, with a typical low range of 54 to 78 days. Lock in accommodation earlier, ideally three to six months ahead. Or skip the holiday weeks entirely and go in early December.' } },
  ],
}

export default function BestGolfDestinationsDecemberPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">The Best Golf Destinations in December (2026 Honest Guide)</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>October 3, 2026</span><span>·</span><span>8 min read</span></div>
        <BlogByline dateModified={articleSchema.dateModified} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          December is the month where the weather and the calendar pull in opposite directions. The Sunbelt is properly pleasant, peak winter pricing has not fully landed, and the first two weeks are some of the quietest golf of the year. Then Christmas and New Year arrive, and prices, crowds and family logistics all spike at once. The short answer: go south or southwest, go early in the month, and you will get a great trip at a fair price.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The cheat sheet</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Top three December picks:</span> Scottsdale (dry, mild, before the January peak), Florida (peak season starts), the Algarve (mild and at its cheapest).<br />
            <span className="font-semibold text-foreground">Strong second tier:</span> Kiawah Island, Myrtle Beach, Pinehurst (cool but very playable, winter rates).<br />
            <span className="font-semibold text-foreground">Skip in December:</span> Scotland, Ireland (cold, about 7 hours of daylight), Bandon Dunes (wet season), Pebble Beach (rainy season).<br />
            <span className="font-semibold text-foreground">Go in the first two weeks.</span> Christmas through New Year is peak family travel almost everywhere.
          </p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">1. Scottsdale (dry, mild, before the January peak)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">December is inside Scottsdale's October to April golf season. Days are mild and dry, and mornings are cold enough that the first tee time is a jacket round: Phoenix-area December normals are a high of about 66°F and a low of about 45°F.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The real advantage is timing. January and February are the busiest and most expensive months, so early December gets you peak-season conditions without peak-season rates. See our <Link href="/destinations/scottsdale" className="text-gold hover:underline">Scottsdale destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> bachelor parties and milestone trips that want sunshine and Old Town nightlife without January prices.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">2. Florida (peak season starts)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Florida's golf season runs October to April, and December sits in the sweet spot: 60 to 75°F and low humidity. The Atlantic hurricane season is over (it officially ends November 30). Streamsong, TPC Sawgrass and Innisbrook are all in good condition, and snowbird traffic ramps up after New Year, so early December is calmer.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">See our <Link href="/destinations/florida-golf" className="text-gold hover:underline">Florida destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> East Coast and Midwest groups who want an easy flight and reliable warmth.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">3. The Algarve (mild and at its cheapest)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">December is low season in the Algarve. It is cooler than spring or autumn, with daytime highs around 16 to 17°C (low 60s Fahrenheit), and it is one of the wettest months: expect roughly 8 to 12 rainy days. Courses stay open and villa prices are at their annual low, so Monte Rei and Quinta do Lago are bookable at off-peak rates.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Partners get quiet old towns and long seafood lunches rather than beach days. See our <Link href="/destinations/algarve" className="text-gold hover:underline">Algarve destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> European groups and value-conscious partner trips that can live with a wet day.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">4. Kiawah Island (cool, quiet, winter rates)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Kiawah in December is mild by northern standards, but the Ocean Course can be properly windy. Green fees drop to winter rates, the island is quiet, and Charleston is a short drive for partners.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">See our <Link href="/destinations/kiawah-island" className="text-gold hover:underline">Kiawah Island destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> couples and mixed groups who care more about Charleston than about shorts weather.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">5. Myrtle Beach (best value in the country)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Winter rounds are very playable at Myrtle Beach, though cooler days dip to 45 to 55°F, and pricing is about as low as it gets for quality courses. The beach is for walking, not swimming. See our <Link href="/destinations/myrtle-beach" className="text-gold hover:underline">Myrtle Beach destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> budget-led groups who would rather play four rounds in cool weather than two in the sun.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">6. Pinehurst (crisp, quiet, discounted)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Winter golf at Pinehurst is very possible, with temperatures around 45 to 60°F and green fees well down from spring and fall. The village is quiet. Layer up and accept that one round might be cold. See our <Link href="/destinations/pinehurst" className="text-gold hover:underline">Pinehurst destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> heritage-loving groups who want No. 2 at a lower price and do not mind a fleece.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Destinations to skip in December</h2>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Scotland and Ireland:</strong> cold, wet, and daylight is short. Edinburgh gets just under 7 hours on the winter solstice. Push to May through September.</li>
              <li><strong>Bandon Dunes:</strong> Pacific Northwest wet season. The resort is open year-round, but expect wind and rain.</li>
              <li><strong>Pebble Beach:</strong> December to February is the rainy season on the Monterey Peninsula. October is the better bet.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The holiday weeks, and when to book</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Christmas week and New Year's week are peak family travel in Scottsdale, Florida, Myrtle Beach and Kiawah. Flights, hotels and restaurants all get harder and more expensive. If your group has any flexibility, the first two weeks of December are the target: winter-season conditions, pre-holiday prices.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">If you must travel over the holidays, book flights about two months out: Google Flights data found average Christmas fares were lowest around 71 days before departure. Lock in accommodation earlier, ideally three to six months ahead. Our <Link href="/blog/golf-trip-flights-bag-fees" className="text-gold hover:underline">flights and bag fees guide</Link> covers the rest.</p>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Pick a destination. We'll plan the rest.</h2>
            <p className="mt-3 text-base text-muted-foreground">5 questions. Dual itinerary for golfers and partners. One link the whole group can vote on.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">December golf destinations FAQ</h2>
            <div className="mt-6 space-y-4">
              {faqSchema.mainEntity.map((q) => (
                <FaqItem key={q.name} question={q.name} answer={q.acceptedAnswer.text} />
              ))}
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/blog/best-golf-destinations-november" title="Best Golf Destinations in November" description="The month before, with Thanksgiving week to dodge." />
              <RelatedPost href="/blog/best-golf-destinations-january" title="Best Golf Destinations in January" description="The month after, when peak pricing arrives." />
              <RelatedPost href="/blog/scottsdale-vs-pinehurst-golf-trip" title="Scottsdale vs Pinehurst" description="Desert sun against winter heritage golf." />
              <RelatedPost href="/blog/golf-trip-budget" title="Golf Trip Budget Breakdown" description="What a golf trip actually costs by destination." />
              <RelatedPost href="/blog/golf-trip-flights-bag-fees" title="Golf Trip Flights and Bag Fees" description="What saves real money on holiday-season flights." />
              <RelatedPost href="/blog/how-to-plan-a-golf-trip" title="How to Plan a Golf Trip" description="The complete planning guide." />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-border bg-card/60">
      <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-semibold text-foreground">{question}<span className="ml-2 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span></summary>
      <div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted-foreground">{answer}</div>
    </details>
  )
}

function RelatedPost({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} className="group rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30">
      <h3 className="text-base font-semibold text-foreground group-hover:text-gold transition-colors">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
    </Link>
  )
}
