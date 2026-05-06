/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'The Best Golf Destinations in November (2026 Honest Guide) | FairwayPal',
  description: 'A friendly, honest ranking of the best golf trip destinations for November. Scottsdale, Pinehurst, the Algarve, Florida, Kiawah, plus where to skip in November.',
  alternates: { canonical: 'https://fairwaypal.com/blog/best-golf-destinations-november' },
  openGraph: { title: 'The Best Golf Destinations in November', description: 'Honest ranking of where to go for a golf trip in November.' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'The Best Golf Destinations in November (2026 Honest Guide)',
  description: 'Practical ranking of the best golf trip destinations for November. Climate, conditions, prices, partner experience.',
  url: 'https://fairwaypal.com/blog/best-golf-destinations-november',
  datePublished: '2026-05-06', dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://fairwaypal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Best Golf Destinations in November', item: 'https://fairwaypal.com/blog/best-golf-destinations-november' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best place to play golf in November?', acceptedAnswer: { '@type': 'Answer', text: "November is one of the most underrated golf travel months. Top picks: Scottsdale (peak conditions, perfect 70 to 80°F, prices not yet at January peak), Pinehurst (last great month before winter, 55 to 70°F, peaceful), the Algarve (still beautiful at 18 to 22°C, low crowds), Florida (Streamsong, TPC Sawgrass, Innisbrook all peak), and Kiawah Island (firm fairways, post-hurricane low risk). Scottsdale is the single best November pick because it combines perfect conditions with shoulder pricing before the January peak. Avoid Scotland and Ireland (cold, short days, weather risk); skip Bandon Dunes (wet season is in full force)." } },
    { '@type': 'Question', name: 'Is November a good time for a golf trip?', acceptedAnswer: { '@type': 'Answer', text: "Yes, November is genuinely underrated. Three reasons: (1) Most destinations are at peak conditions because the summer heat is gone and the winter rain has not arrived. (2) Schools are in session except for Thanksgiving week, so resorts and flights are quieter and cheaper than peak winter or peak summer. (3) Several destinations (Scottsdale, the Algarve) hit their best weather of the year in November. The catch is the calendar: Thanksgiving week is family-vacation peak in the US and prices spike. Avoid that specific week unless your group is family-focused." } },
    { '@type': 'Question', name: 'Should I avoid Thanksgiving week for a golf trip?', acceptedAnswer: { '@type': 'Answer', text: "Yes, unless your group is family-oriented. Thanksgiving week (the week containing the fourth Thursday in November) sees peak family-vacation traffic in Scottsdale, Florida, Myrtle Beach, and Kiawah. Hotel rates spike 30 to 50%, restaurants need reservations 4 to 6 weeks ahead, and courses are busier. Pinehurst is less affected because it is not a family beach destination. The week immediately before Thanksgiving (mid-November) and the week after are dramatically cheaper and quieter." } },
    { '@type': 'Question', name: 'Is the Algarve worth visiting in November?', acceptedAnswer: { '@type': 'Answer', text: "Yes, especially for value-conscious groups. November in the Algarve drops temperatures into the 16 to 22°C range (low 60s to low 70s Fahrenheit), but the courses are in beautiful condition and the prices are at off-peak levels (sometimes 40% below summer peak). Rain risk is higher than October but still manageable; expect maybe 1 wet day in 5. Atlantic water is too cool for swimming, which removes the temptation to skip golf for a beach day. Villa accommodation is a steal in November." } },
    { '@type': 'Question', name: 'Is November better than October for a golf trip?', acceptedAnswer: { '@type': 'Answer', text: "Depends on the destination. For Scottsdale, November is slightly better than October (cooler, drier). For Pinehurst, October has fall colour and is the marginal pick. For Pebble Beach, October is meaningfully better (drier, clearer). For the Algarve, October is better (warmer, less rain). Generally: October wins for Pebble, Pinehurst, Algarve. November wins for Scottsdale and Florida. Both are excellent." } },
  ],
}

export default function BestGolfDestinationsNovemberPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">The Best Golf Destinations in November (2026 Honest Guide)</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>May 6, 2026</span><span>·</span><span>10 min read</span></div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          November is genuinely one of the most underrated months in golf travel. The summer heat is long gone in the US Sunbelt, the winter peak prices have not arrived, and a surprising number of premium destinations hit their absolute best weather of the year. The catch is Thanksgiving week, which spikes traffic and prices everywhere. Here is the friendly ranked guide to making the most of November.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The cheat sheet</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Top three November picks:</span> Scottsdale (peak conditions, pre-winter prices), Pinehurst (last great month), the Algarve (off-peak value).<br />
            <span className="font-semibold text-foreground">Strong second tier:</span> Florida, Kiawah Island, Myrtle Beach.<br />
            <span className="font-semibold text-foreground">Skip in November:</span> Scotland, Ireland (cold, short days), Bandon (wet), Northeast US (cold).<br />
            <span className="font-semibold text-foreground">Avoid Thanksgiving week</span> for US destinations unless your group is family-focused.
          </p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">1. Scottsdale (perfect conditions, shoulder pricing)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">November is one of the two best months in Scottsdale, alongside late October. Daytime temperatures land at 70 to 80°F, mornings are crisp, and the desert is at peak. The summer monsoon season is fully past, so days are reliably clear.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Pricing is the secret. November is shoulder season; January through March is when prices jump 30 to 50%. The same Scottsdale trip in November and February differs by genuine money. See our <Link href="/destinations/scottsdale" className="text-gold hover:underline">Scottsdale destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> bachelor parties (avoid Thanksgiving week), partner trips, value-conscious bucket-list groups.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">2. Pinehurst (last great month, peaceful)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">November is the last comfortable golfing month at Pinehurst before winter. Daytime temperatures land at 55 to 70°F, mornings are cool, oak colour is at its final peak in the first week of the month. The crowds are gone; you can often book No. 2 mid-week without a long wait.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">By late November the weather can turn quickly; layer up. Stay-and-play packages drop in price meaningfully through the month. See our <Link href="/destinations/pinehurst" className="text-gold hover:underline">Pinehurst destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> heritage-loving groups who want quiet, value, and quality.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">3. The Algarve (off-peak value)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">November in the Algarve drops temperatures to 16 to 22°C (low 60s to low 70s Fahrenheit) and prices drop 40% below summer peak. Sunshine is still 6 to 7 hours per day. The Atlantic is too cool for swimming, but the cliff coast is dramatic and Lagos, Tavira, and Faro are uncrowded.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Rain is more likely than October but still manageable. Most years, you might lose 1 round in 5 to weather. Villa accommodation is essentially at its lowest annual price. See our <Link href="/destinations/algarve" className="text-gold hover:underline">Algarve destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> European-based groups, value-conscious partner trips, off-peak villa rentals.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">4. Florida (peak season begins)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">November marks the start of Florida's peak golf season. Daytime temperatures land at 65 to 80°F across most of the state, humidity is low, and the snowbird season has not fully kicked in (that ramps up in January). Streamsong, TPC Sawgrass, and Innisbrook are all in pristine condition.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Hurricane risk is essentially over by November (the 2026 official Atlantic season ends November 30; statistically, late November storms are rare). See our <Link href="/destinations/florida-golf" className="text-gold hover:underline">Florida destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> Northeast and Midwest groups starting the snowbird circuit early, partner trips with St. Augustine focus.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">5. Kiawah Island (firm fairways, low risk)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">November at Kiawah is excellent. Hurricane season is over, the dry early autumn has firmed the fairways, and Charleston is in its peak culinary season (the city's restaurant week typically falls in November).</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Daytime temperatures land at 55 to 70°F. Evenings are cool but not cold; the maritime forest is beautiful. Pricing is at shoulder; The Sanctuary runs 20 to 30% below January-March peak. See our <Link href="/destinations/kiawah-island" className="text-gold hover:underline">Kiawah Island destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> mixed-group trips with partners who want Charleston, milestone trips at value pricing.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">6. Myrtle Beach (excellent value)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">November at Myrtle Beach gives you the best per-round value of any beach destination in the country. Temperatures of 55 to 70°F, courses in great post-summer condition, hotel rates 40 to 50% below summer peak. The beach is too cool to swim but lovely for walking.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Avoid Thanksgiving week for the family vacation crowds. Outside that week, November is genuinely the best Myrtle Beach value of the year. See our <Link href="/destinations/myrtle-beach" className="text-gold hover:underline">Myrtle Beach destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> bachelor parties, value-conscious groups, easy East Coast access.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Destinations to skip in November</h2>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Scotland and Ireland:</strong> too cold, short daylight, real weather risk. Push to May or September.</li>
              <li><strong>Bandon Dunes:</strong> wet season is in full force. The Pacific Northwest is just unpleasant.</li>
              <li><strong>Pebble Beach:</strong> rain probability is rising sharply. October is materially better.</li>
              <li><strong>Northeast US (NY, Boston, mid-Atlantic):</strong> cold, courses closing for the season.</li>
              <li><strong>Northern Mexico (Cabo, Riviera Maya):</strong> still good but post-hurricane recovery in some years; check current conditions.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Booking timing</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">November booking is generally easier than March or October because Thanksgiving is the only major surge week. Book 30 to 60 days out for non-Thanksgiving dates; 60 to 90 days out for Thanksgiving week.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The opportunity is the November weeks before and after Thanksgiving. These are often the cheapest pricing of the entire fall calendar at peak destinations. Worth targeting if your group has flexibility.</p>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Pick a destination. We'll plan the rest.</h2>
            <p className="mt-3 text-base text-muted-foreground">5 questions. Dual itinerary for golfers and partners. One link the whole group can vote on.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">November golf destinations FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem question="What is the best place to play golf in November?" answer="Scottsdale (peak conditions, pre-winter pricing), Pinehurst (last great month), the Algarve (off-peak value), Florida, Kiawah, Myrtle Beach. Scottsdale is the best balanced pick." />
              <FaqItem question="Is November a good time for a golf trip?" answer="Yes, underrated. Most destinations are at peak conditions with shoulder pricing. Avoid Thanksgiving week unless family-focused." />
              <FaqItem question="Should I avoid Thanksgiving week?" answer="Yes for non-family groups. Hotel rates spike 30-50%, restaurants need 4-6 week reservations, courses busier. The week before and after is dramatically cheaper." />
              <FaqItem question="Is the Algarve worth visiting in November?" answer="Yes, especially for value. 16-22°C, 40% below summer pricing, courses in great condition. Some rain risk; expect ~1 wet day in 5." />
              <FaqItem question="Is November better than October?" answer="Depends. October wins for Pebble, Pinehurst, Algarve. November wins for Scottsdale and Florida. Both excellent." />
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/blog/best-golf-destinations-october" title="Best Golf Destinations in October" description="The other peak fall month, with different winners." />
              <RelatedPost href="/blog/best-golf-destinations-march" title="Best Golf Destinations in March" description="The spring equivalent peak month." />
              <RelatedPost href="/blog/scottsdale-vs-pinehurst-golf-trip" title="Scottsdale vs Pinehurst" description="Two of the top November picks compared." />
              <RelatedPost href="/blog/how-to-plan-a-golf-trip" title="How to Plan a Golf Trip" description="The complete planning guide." />
              <RelatedPost href="/blog/golf-trip-budget" title="Golf Trip Budget Breakdown" description="What a golf trip actually costs by destination." />
              <RelatedPost href="/blog/algarve-vs-scotland-golf-trip" title="Algarve vs Scotland" description="The European decision; Algarve is the November answer." />
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
