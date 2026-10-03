/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

export const metadata: Metadata = {
  title: 'The Best Golf Destinations in September (2027 Honest Guide)',
  description: 'An honest ranking of the best golf trip destinations for September. Scotland and Ireland at their peak, Bandon at its driest, Pebble at its clearest, plus the hurricane caveat.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/best-golf-destinations-september' },
  openGraph: { title: 'The Best Golf Destinations in September', description: 'Honest ranking of where to go for a golf trip in September, the best links month of the year.' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'The Best Golf Destinations in September (2027 Honest Guide)',
  description: 'Practical ranking of the best golf trip destinations for September. Climate, conditions, hurricane risk, post-Labor Day pricing, partner experience.',
  url: 'https://www.fairwaypal.com/blog/best-golf-destinations-september',
  datePublished: '2026-08-31', dateModified: '2026-08-31',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://www.fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://www.fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.fairwaypal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Best Golf Destinations in September', item: 'https://www.fairwaypal.com/blog/best-golf-destinations-september' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best place to play golf in September?', acceptedAnswer: { '@type': 'Answer', text: "Scotland and Ireland, and it is not particularly close. September is the best links month of the year: the courses are at their firmest and fastest after the summer, the weather is milder and drier than October, the summer crowds clear after the first week, and shoulder pricing returns. Bandon Dunes is the American equivalent and is at its driest and calmest in September. Pebble Beach is excellent because the summer fog has lifted. If your group has ever talked about doing a links trip, September is the month to do it." } },
    { '@type': 'Question', name: 'Is September a good time for a golf trip?', acceptedAnswer: { '@type': 'Answer', text: "It is one of the two or three best months of the year, and the most underrated. Three things line up at once. Conditions at the great links and coastal courses peak after a summer of growth and firm ground. Prices drop after Labor Day as the family travel season ends. And the crowds thin dramatically from the second week onward. The one significant caveat is the Atlantic hurricane season, which statistically peaks around September 10 and makes the US Southeast and the Caribbean a genuine gamble." } },
    { '@type': 'Question', name: 'Should I worry about hurricanes on a September golf trip?', acceptedAnswer: { '@type': 'Answer', text: "For the US Southeast and the Caribbean, yes, and you should plan around it rather than hope. Early to mid September is the statistical peak of the Atlantic hurricane season. That does not mean a storm will hit your specific week, but it does mean Myrtle Beach, Kiawah, Florida and the Caribbean carry real disruption risk. If your group books one of those, buy refundable rates where you can and check the cancellation terms on the golf as well as the hotel. Scotland, Ireland, Bandon, Pebble Beach and Scottsdale carry no hurricane exposure at all, which is part of why they rank so highly this month." } },
    { '@type': 'Question', name: 'Is September better than October for a links trip?', acceptedAnswer: { '@type': 'Answer', text: "September is the better month for Scotland and Ireland. It is milder, drier and has meaningfully more daylight, which matters when you are trying to fit 36 holes into a day. October is still good but the weather deteriorates through the month and the light shortens quickly. For Bandon Dunes the two months are close, with September marginally drier. For Pebble Beach, September and October are both excellent. If you can choose freely, take September for links and either month for the American coastal courses." } },
    { '@type': 'Question', name: 'Does golf get cheaper after Labor Day?', acceptedAnswer: { '@type': 'Answer', text: "Yes, noticeably, and it is the single easiest saving in the September calendar. Labor Day weekend itself is peak family travel with inflated rates and full properties. The week immediately after sees resort rates fall, tee sheets open up, and shoulder-season packages appear across Bandon, Pebble Beach, Kiawah and the Carolinas. Waiting seven days past the holiday weekend routinely takes 20 to 30% off the same trip, for weather that is generally better because the summer heat has broken." } },
  ],
}

export default function BestGolfDestinationsSeptemberPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">The Best Golf Destinations in September (2027 Honest Guide)</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>August 31, 2026</span><span>·</span><span>10 min read</span></div>
        <BlogByline dateModified={articleSchema.dateModified} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          September is the most underrated month in golf travel, and for one specific group of destinations it is simply the best month of the year. The great links courses of Scotland and Ireland peak in September. Bandon Dunes is at its driest. Pebble Beach finally sheds the summer fog. Prices fall the moment Labor Day passes and the crowds go home. The one thing standing between your group and a near-perfect trip is the Atlantic hurricane season, which is why the destination you choose matters more this month than in almost any other.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The cheat sheet</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Top three September picks:</span> Scotland and Ireland (peak links), Bandon Dunes (driest month), Pebble Beach (fog finally gone).<br />
            <span className="font-semibold text-foreground">Strong second tier:</span> Pinehurst from mid-month, the Algarve as the heat breaks.<br />
            <span className="font-semibold text-foreground">Risky in September:</span> Myrtle Beach, Kiawah, Florida and the Caribbean, all in peak hurricane season.<br />
            <span className="font-semibold text-foreground">Skip in September:</span> Scottsdale, still 95 to 100°F for most of the month.<br />
            <span className="font-semibold text-foreground">Go the week after Labor Day.</span> It routinely saves 20 to 30% for better weather.
          </p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">1. Scotland and Ireland (the best links month of the year)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">If your group has ever half-seriously discussed a links trip, September is the month to stop discussing it. The courses are at their firmest and fastest after a full summer of growth, which is exactly how links golf is meant to be played. Temperatures run 13 to 18°C (55 to 64°F), rainfall is lower than October, and there is still enough daylight for 36 holes in a day if the group is willing.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The summer crowds thin from the second week onward, so tee times that were impossible in July open up, and shoulder pricing returns on both green fees and accommodation. See our <Link href="/destinations/scotland" className="text-gold hover:underline">Scotland</Link> and <Link href="/destinations/ireland" className="text-gold hover:underline">Ireland</Link> destination guides, and the <Link href="/blog/bandon-dunes-vs-scotland-golf-trip" className="text-gold hover:underline">Bandon vs Scotland comparison</Link> if you are torn.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> bucket-list trips, experienced golfers, milestone birthdays, groups who want the trip to mean something.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">2. Bandon Dunes (its driest, calmest month)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">September is the best month on the Oregon coast. It is the driest stretch of the Bandon year, temperatures sit at a comfortable 60 to 68°F, and the wind, while always present, is at its most manageable. The summer fog that can grey out an August morning has largely gone.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">This is peak Bandon, so book well ahead and expect peak rates until the resort's shoulder season begins. It remains the closest thing to a Scottish links experience without the transatlantic flight. See our <Link href="/destinations/bandon-dunes" className="text-gold hover:underline">Bandon Dunes destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> serious golf groups, walking golfers, groups who want links character without leaving the country.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">3. Pebble Beach (the fog finally lifts)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The Monterey Peninsula in September is what everyone imagines Pebble Beach to be and often is not. The marine layer that greys out June, July and August recedes, giving you the clear coastal light the photographs are built on. Temperatures of 62 to 70°F, minimal rain, and firm conditions.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">September and October are the two months to go, and September has the edge on daylight. Pricing is at peak, but this is a trip where the conditions genuinely justify it. See our <Link href="/destinations/pebble-beach" className="text-gold hover:underline">Pebble Beach destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> bucket-list trips, milestone occasions, partner trips where Carmel and Big Sur carry the non-golf days.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">4. Pinehurst (good from mid-month onward)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Early September in the sandhills is still humid, with highs in the mid 80s and afternoon thunderstorms. From roughly the third week the humidity breaks, temperatures settle into the high 70s, and Pinehurst becomes excellent again on its way to a superb October.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Late September is a genuine value window here, sitting between the summer family season and the October peak. See our <Link href="/destinations/pinehurst" className="text-gold hover:underline">Pinehurst destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> groups wanting Pinehurst quality without October pricing, heritage trips, father-son trips.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">5. The Algarve (the heat breaks)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">September in the Algarve is the moment the summer heat becomes pleasant rather than punishing. Temperatures of 24 to 28°C, sea still warm enough to swim, and the peak European holiday crowds gone after the first week. Course conditioning is good and the light in the evenings is beautiful.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Pricing sits between summer peak and the deep winter discount, which is fair for what are close to the best conditions of the year. See our <Link href="/destinations/algarve" className="text-gold hover:underline">Algarve destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> European groups, mixed golf and beach trips, partner trips where the resort matters.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The hurricane caveat, stated plainly</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The Atlantic hurricane season peaks statistically around September 10. That does not mean a storm will hit your week, and most September trips to the Southeast go ahead without incident. But it does mean Myrtle Beach, Kiawah Island, Florida and the Caribbean carry genuine disruption risk in a way that no other month except August does.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">If your group picks one of those destinations, plan for it honestly: book refundable rates where the difference is small, read the cancellation terms on the tee times as well as the hotel, and have a conversation about what happens to everyone's money if the trip cannot go ahead. Scotland, Ireland, Bandon, Pebble Beach and the Algarve have no exposure at all, which is a large part of why they dominate this month's ranking.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Destinations to skip in September</h2>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Scottsdale:</strong> still 95 to 100°F for most of the month. Rates are at their annual floor for exactly that reason. Wait for November.</li>
              <li><strong>Palm Springs and the Coachella Valley:</strong> same story, still genuinely too hot.</li>
              <li><strong>Cabo San Lucas:</strong> hot, humid and squarely inside the Pacific hurricane season. September is its riskiest month.</li>
              <li><strong>South Florida:</strong> heat, humidity and peak storm risk together. There is no reason to choose it this month.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Booking timing</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Scotland, Ireland, Bandon and Pebble Beach in September need six to nine months of lead time. These are the peak months at all four, and the good tee times and the stay-and-play packages are gone long before the season arrives. If you are reading this and thinking about next September, that is roughly the right amount of notice.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The easiest saving in the month is simply waiting a week past Labor Day, which routinely takes 20 to 30% off the same trip for better weather and thinner crowds. For the transatlantic options, our <Link href="/blog/golf-trip-flights-bag-fees" className="text-gold hover:underline">flights and bag fees guide</Link> and the <Link href="/blog/shipping-clubs-vs-flying-with-clubs" className="text-gold hover:underline">shipping clubs comparison</Link> are worth reading before you book.</p>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Pick a destination. We'll plan the rest.</h2>
            <p className="mt-3 text-base text-muted-foreground">5 questions. Dual itinerary for golfers and partners. One link the whole group can vote on.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">September golf destinations FAQ</h2>
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
              <RelatedPost href="/blog/best-golf-destinations-october" title="Best Golf Destinations in October" description="The month after, when the Carolinas take over." />
              <RelatedPost href="/blog/best-golf-destinations-april" title="Best Golf Destinations in April" description="The spring equivalent, when the map reopens." />
              <RelatedPost href="/blog/best-golf-destinations-november" title="Best Golf Destinations in November" description="When the desert finally becomes the answer again." />
              <RelatedPost href="/blog/bandon-dunes-vs-scotland-golf-trip" title="Bandon Dunes vs Scotland" description="The two best September picks, compared directly." />
              <RelatedPost href="/blog/scotland-for-non-golfers" title="Scotland for Non-Golfers" description="What partners do while you play the Old Course." />
              <RelatedPost href="/blog/golf-trip-flights-bag-fees" title="Golf Trip Flights and Bag Fees" description="Transatlantic travel costs, priced honestly." />
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
