/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'The Best Golf Destinations in October (2026 Honest Guide) | FairwayPal',
  description: 'A friendly, honest ranking of the best golf trip destinations for October. Pinehurst, Pebble Beach, Algarve, Kiawah, Scottsdale, Bandon Dunes, plus the destinations to avoid in October.',
  alternates: { canonical: 'https://fairwaypal.com/blog/best-golf-destinations-october' },
  openGraph: { title: 'The Best Golf Destinations in October', description: 'Honest ranking of where to go for a golf trip this October.' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Best Golf Destinations in October (2026 Honest Guide)',
  description: 'Practical ranking of the best golf trip destinations for October. Climate, conditions, prices, partner experience, and verdict by trip type.',
  url: 'https://fairwaypal.com/blog/best-golf-destinations-october',
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
    { '@type': 'ListItem', position: 3, name: 'Best Golf Destinations in October', item: 'https://fairwaypal.com/blog/best-golf-destinations-october' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best place to play golf in October?', acceptedAnswer: { '@type': 'Answer', text: "October is one of the best months of the year for golf trips because so many premium destinations are at their peak. The top picks: Pinehurst (peak conditions, dogwood and oak colour, 65 to 75°F), Pebble Beach (warmest and clearest of any month at Pebble, low fog risk), the Algarve (low humidity, 22 to 25°C, uncrowded), Kiawah Island (firm fairways, 70 to 80°F, low hurricane risk by mid-October), and Scottsdale (just transitioning from summer; late October is peak). Bandon Dunes is in its final good month before winter wet sets in. Pinehurst is the single best October pick on balance because it is at peak conditions and prices are still pre-winter peak." } },
    { '@type': 'Question', name: 'Why is October so good for golf trips?', acceptedAnswer: { '@type': 'Answer', text: "Three reasons line up. (1) The summer heat is gone in most of North America and Europe, so courses that were unplayable in July (Scottsdale, the Algarve, the Carolinas) become ideal. (2) Schools are back in session, so resorts, restaurants, and flights are quieter and cheaper than peak summer. (3) Fairways are firm because of less rain, which makes for more interesting golf especially on links courses. The combination is rare in golf travel: peak conditions plus reduced crowds plus shoulder pricing." } },
    { '@type': 'Question', name: 'Is October a good month for a Scotland or Ireland golf trip?', acceptedAnswer: { '@type': 'Answer', text: "Early October is the last good month for Scotland or Ireland; mid to late October starts to feel autumnal with shorter daylight and more weather risk. Expect 10 to 15°C (50 to 60°F), more rain than September, and the chance of a serious storm. Some courses begin reducing their hours from mid-October. If your group has the flexibility, late September is meaningfully better than late October for a British Isles trip. If you must travel in October, target the first week and pack proper waterproofs." } },
    { '@type': 'Question', name: 'When is hurricane season for Florida and the Carolinas?', acceptedAnswer: { '@type': 'Answer', text: "The Atlantic hurricane season runs June 1 to November 30, with the peak typically August 15 to October 15. By mid to late October, hurricane risk in the Carolinas (Pinehurst, Kiawah, Myrtle Beach) is dropping fast; Florida remains slightly more exposed but October trips are generally safe. Late October is essentially clear of hurricane risk for most of the SE US. Travel insurance is a small price for a big trip during the August to early-October window; less critical by mid-late October." } },
    { '@type': 'Question', name: 'Which destinations should you avoid in October?', acceptedAnswer: { '@type': 'Answer', text: "Three destinations to skip or de-prioritise in October. (1) Northern Scotland and Ireland after the first week: shorter daylight and more weather risk than September. (2) The Northeast US (mid-Atlantic, New England) becomes too cold by mid-October for comfortable group golf trips. (3) Northern Mexico and the Caribbean are still in active hurricane season; the destinations work but the risk is real. Stick to the South, the Sunbelt, the Iberian Peninsula, or a first-week Scotland/Ireland trip if going in October." } },
  ],
}

export default function BestGolfDestinationsOctoberPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">The Best Golf Destinations in October (2026 Honest Guide)</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>May 6, 2026</span><span>·</span><span>10 min read</span></div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          October is one of the great golf travel months. The summer heat is gone, schools are back, fairways are firm, and an unusual number of premium destinations are at their absolute peak. If you can travel in October, you have an embarrassment of options. Here is the honest ranked guide to where to go this October, plus the destinations to skip.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The cheat sheet</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Top three October picks:</span> Pinehurst (peak), Pebble Beach (peak conditions, low fog), Algarve (peak partner experience).<br />
            <span className="font-semibold text-foreground">Strong second tier:</span> Kiawah Island, Scottsdale (late October), Bandon Dunes (last good month).<br />
            <span className="font-semibold text-foreground">First week only:</span> Scotland, Ireland.<br />
            <span className="font-semibold text-foreground">Skip in October:</span> Northeast US, Northern Mexico, the Caribbean (active hurricane season).
          </p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">1. Pinehurst (the best October pick)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">October is genuinely the best month of the year for a Pinehurst trip. The summer humidity is gone, the dogwoods and oaks are turning, and the courses are in peak condition after the summer maintenance season. Daytime temperatures land at 65 to 75°F; nights are cool, perfect for porch drinks. Pre-winter peak pricing means the resort is quieter than spring.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Why it tops the list: every other top destination has a caveat in October (Pebble has the AT&T scheduling, Bandon has rain risk, Scotland is shoulder-of-shoulder season). Pinehurst has none. Just peak conditions and great prices. See our <Link href="/destinations/pinehurst" className="text-gold hover:underline">Pinehurst destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> heritage-loving golf groups, father-son trips, partner trips that prioritise village charm.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">2. Pebble Beach (peak conditions, low fog)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">October at Pebble Beach is genuinely the warmest and clearest month of the year. The summer marine layer that produces the famous fog has lifted; afternoon temperatures land at 65 to 75°F; the chance of a clear, calm round at the Ocean Course is materially higher than in July or August.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Pricing is still summer-peak in early October but starts dropping toward winter rates by month-end. Tee times at Pebble Links remain difficult; book 60 to 90 days out for any October weekend. See our <Link href="/destinations/pebble-beach" className="text-gold hover:underline">Pebble Beach destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> bucket-list trips, milestone birthdays, mixed-group trips with non-golfing partners (Carmel-by-the-Sea is at its prettiest).</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">3. The Algarve (peak partner experience)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">October in the Algarve is genuinely the sweet spot of the year. The summer crowds are gone, the heat has dropped to a perfect 22 to 25°C (low 70s Fahrenheit), the Atlantic is still warm enough to swim, and the prices have come down 20 to 30% from peak summer. Most years, you can play golf in a polo and shorts on the same day a partner does an ocean swim and a long sunset terrace dinner.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">For groups travelling with partners, October might be the single best month to visit the Algarve. The villa accommodation works, the cliff coast is dramatic, and the pace is slower than summer. See our <Link href="/destinations/algarve" className="text-gold hover:underline">Algarve destination guide</Link> and <Link href="/blog/algarve-for-non-golfers" className="text-gold hover:underline">Algarve for non-golfers guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> partner trips, milestone birthday trips, value-conscious groups wanting a premium European experience.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">4. Kiawah Island (firm fairways, post-hurricane)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">October at Kiawah brings firm fairways from the dry late summer, low humidity (rare on the SC coast), and water temperatures still warm enough for swimming. By mid-October the hurricane risk has dropped sharply (the active Atlantic season's peak is August to early October).</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The Ocean Course plays harder than in summer because of the firmer fairways and the prevailing autumn wind from the northeast. Charleston is at its absolute best in October: cool mornings, warm afternoons, restaurant scene firing on all cylinders. See our <Link href="/destinations/kiawah-island" className="text-gold hover:underline">Kiawah Island destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> mixed-group trips with partners who want Charleston, serious golf groups who want firm conditions, milestone trips.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">5. Scottsdale (late October only)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Early October in Scottsdale is still in the summer transition: highs in the 90s, occasional 100°F+ days. By mid to late October the desert flips; temperatures land at 75 to 85°F, mornings are cool, and Old Town comes alive again. The single best window of the year for Scottsdale is late October through November.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Pricing in late October is shoulder-season; January to March peak prices have not kicked in yet. Tee times are easier to get than in winter. See our <Link href="/destinations/scottsdale" className="text-gold hover:underline">Scottsdale destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> bachelor parties, partner trips with strong Old Town focus, groups that want consistent dry desert golf.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">6. Bandon Dunes (last good month)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">October at Bandon is a transition month. The first week is essentially September weather (dry, windy, playable). By mid-October the rains start arriving and the wet season begins in earnest. The trip is still very playable but you should expect at least one wet round and pack accordingly.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Why it still ranks in the top six: the first two weeks of October are genuinely good links golf weather, prices are dropping toward off-season, and the fall colours along the coast are dramatic. After mid-October, push to next year. See our <Link href="/destinations/bandon-dunes" className="text-gold hover:underline">Bandon Dunes destination guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Best for:</strong> serious-golf groups who can travel early October, value-conscious bucket-list trips.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">First week only: Scotland and Ireland</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The early October window in Scotland and Ireland (roughly the first 7 to 10 days) is the last comfortable golfing weather of the year. Temperatures of 12 to 16°C (low 50s to low 60s Fahrenheit), daylight hours dropping but still adequate for a 36-hole day, and the autumn colours just starting.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">After the first week, weather risk increases sharply, daylight gets noticeably shorter, and many courses begin reducing their hours. Late October trips are doable but compromised. If your group has the flexibility, push to late September or wait for May. If you must go in October, target the first week and be specific about the dates. See our <Link href="/destinations/scotland" className="text-gold hover:underline">Scotland</Link> and <Link href="/destinations/ireland" className="text-gold hover:underline">Ireland</Link> destination guides.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Destinations to skip in October</h2>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Northeast US (New York, Boston, Philadelphia):</strong> too cold by mid-October for comfortable group golf. Push to spring.</li>
              <li><strong>Mid-Atlantic (DC, Virginia):</strong> playable but marginal. The South is just better in October.</li>
              <li><strong>Northern Mexico (Cabo, Cancun):</strong> still in active hurricane season. Excellent destinations but November onwards is safer.</li>
              <li><strong>Caribbean (Dominican Republic, Puerto Rico, Bahamas):</strong> peak hurricane season runs into mid-October. Travel insurance is essential if going.</li>
              <li><strong>Northern Scotland and Ireland after the first week:</strong> shorter daylight and weather risk make late October trips not worth the gamble.</li>
              <li><strong>Costa del Sol (Marbella) and Mallorca:</strong> still warm but rain risk is rising. Algarve is a better October pick in Iberia.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Booking timing</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">For an October trip, booking timing matters because some destinations sell out faster than others.</p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Pebble Beach Golf Links:</strong> 60 to 90 days out for any October date.</li>
              <li><strong>Pinehurst No. 2:</strong> 30 to 60 days out for weekends; midweek is usually open.</li>
              <li><strong>Bandon Dunes:</strong> 60 days out for first-week October dates; later in the month is easier.</li>
              <li><strong>Kiawah Ocean Course:</strong> 30 to 60 days out for weekends.</li>
              <li><strong>Algarve villas:</strong> 60 to 90 days out for October weeks; villas with multiple bedrooms book up first.</li>
              <li><strong>Scotland Old Course:</strong> the daily ballot still operates; enter the ballot 2 days before your preferred date.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground">As of writing in May, you have time for any October 2026 trip. By July, the shortest-supply dates start filling up. Our <Link href="/blog/how-to-plan-a-golf-trip" className="text-gold hover:underline">how to plan a golf trip guide</Link> covers the full booking timeline.</p>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Pick a destination. We'll plan the rest.</h2>
            <p className="mt-3 text-base text-muted-foreground">5 questions. Dual itinerary for golfers and partners. One link the whole group can vote on.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">October golf destinations FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem question="What is the best place to play golf in October?" answer="Pinehurst (peak conditions, fall colour, 65-75°F). Pebble Beach (warmest, clearest of any month). The Algarve (peak partner experience, 22-25°C, low humidity). Kiawah, Scottsdale (late Oct), and Bandon Dunes (early Oct only) round out the top six." />
              <FaqItem question="Why is October so good for golf trips?" answer="Three things: summer heat is gone in most North America and Europe, schools are back so resorts and flights are quieter, fairways are firm because of less rain. Peak conditions plus reduced crowds plus shoulder pricing." />
              <FaqItem question="Is October a good month for Scotland or Ireland?" answer="Early October only (first week or so). Mid-late October has shorter daylight and more weather risk. Push to late September if possible." />
              <FaqItem question="When is hurricane season for Florida and the Carolinas?" answer="June 1 to November 30, peak August 15 to October 15. By late October, risk drops sharply for the Carolinas. Travel insurance worth it through mid-October; less critical late October." />
              <FaqItem question="Which destinations should you avoid in October?" answer="Northeast US (too cold), Northern Mexico and Caribbean (hurricane season), Northern Scotland and Ireland after the first week, and the Costa del Sol (rain risk rising)." />
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/blog/how-to-plan-a-golf-trip" title="How to Plan a Golf Trip" description="The complete planning guide, including the booking timeline." />
              <RelatedPost href="/blog/golf-trip-budget" title="Golf Trip Budget Breakdown" description="What a golf trip actually costs by destination." />
              <RelatedPost href="/blog/best-bachelor-party-golf-destinations" title="Best Bachelor Golf Destinations" description="Six destinations ranked, several at peak in October." />
              <RelatedPost href="/blog/pinehurst-vs-pebble-beach-golf-trip" title="Pinehurst vs Pebble Beach" description="Two of the top October picks compared." />
              <RelatedPost href="/blog/algarve-vs-scotland-golf-trip" title="Algarve vs Scotland" description="The European October decision: Algarve over Scotland after the first week." />
              <RelatedPost href="/blog/golf-trip-with-non-golfers" title="Golf Trips With Non-Golfers" description="October is the best partner month at most destinations." />
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
