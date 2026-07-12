/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Bandon Dunes vs Scotland for a Golf Trip: Which Should You Pick? | FairwayPal',
  description: 'The "should we go links?" question, settled. Oregon coast versus the home of the game. Courses, costs, weather, partner experience, logistics, and a verdict by group type.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/bandon-dunes-vs-scotland-golf-trip' },
  openGraph: { title: 'Bandon Dunes vs Scotland: Which Should You Pick?', description: 'Oregon coast pilgrimage vs the home of the game.' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Bandon Dunes vs Scotland for a Golf Trip: Which Should You Pick?',
  description: 'Head-to-head comparison of Bandon Dunes and Scotland. Courses, costs, weather, partner activities, logistics, verdict by group type.',
  url: 'https://www.fairwaypal.com/blog/bandon-dunes-vs-scotland-golf-trip',
  datePublished: '2026-05-06', dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://www.fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://www.fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.fairwaypal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Bandon Dunes vs Scotland', item: 'https://www.fairwaypal.com/blog/bandon-dunes-vs-scotland-golf-trip' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Bandon Dunes or Scotland better for a links golf trip?', acceptedAnswer: { '@type': 'Answer', text: "Both are great links experiences with very different feels. Bandon Dunes gives you five world-class courses on one resort property, walking only, on the rugged Oregon coast. Scotland gives you the home of golf: the Old Course at St Andrews, Carnoustie, Royal Dornoch, North Berwick, and Kingsbarns spread across multiple regions, with deep golf heritage on every tee. If you have not played either, Scotland is the once-in-a-lifetime trip; Bandon is the more accessible US pilgrimage. Most serious golfers say if you can only do one, go to Scotland." } },
    { '@type': 'Question', name: 'Is Bandon Dunes cheaper than Scotland?', acceptedAnswer: { '@type': 'Answer', text: "On a per-night basis, similar. Bandon runs $2,000 to $3,500 per person for 3 to 4 nights. Scotland runs $2,500 to $5,000 per person for 5 to 7 nights from the US. The total trip cost difference reflects the longer Scotland trip rather than nightly pricing. The bigger cost variable is the international flight to Scotland (roughly $800 to $1,500 round trip from the US East Coast versus $400 to $700 to Bandon-area airports). For US groups, Bandon is typically a few hundred dollars cheaper per person. For European groups, Scotland is dramatically cheaper." } },
    { '@type': 'Question', name: 'Which has better partner experience, Bandon or Scotland?', acceptedAnswer: { '@type': 'Answer', text: "Scotland, by a long way. Edinburgh is one of the great capital cities in Europe, the Fife Coastal Path gives partners excellent walking near the golf, distillery tours are world-class, and the Highland day trips are extraordinary. Bandon is honest about being a remote outdoor-focused destination with a small town and beautiful but limited variety. Partners who love rugged outdoors are happy at Bandon; partners who want history, culture, and city experiences need Scotland. See our Bandon for non-golfers and Scotland for non-golfers guides." } },
    { '@type': 'Question', name: 'Can you play more courses at Bandon or in Scotland?', acceptedAnswer: { '@type': 'Answer', text: "Bandon, on a single trip. Five world-class courses on one walkable resort property means you can play 4 to 6 rounds in 3 to 4 nights without driving anywhere. Scotland requires more travel between courses unless you base in St Andrews and play the Links Trust courses (Old Course, New Course, Castle Course, Jubilee, Eden, Strathtyrum). Most Scotland trips end up playing 4 to 6 rounds across 5 to 7 nights with significant driving in between. Bandon density is unmatched; Scotland variety is unmatched." } },
    { '@type': 'Question', name: 'Which has better weather, Bandon Dunes or Scotland?', acceptedAnswer: { '@type': 'Answer', text: "Both are exposed coastal links environments with constant wind and frequent rain. Bandon is generally drier than Scotland in summer (July to September is the driest stretch); Scotland in summer is variable but reliably overcast. Temperature is similar; both run 12 to 18°C (mid 50s to mid 60s Fahrenheit) in their best months. Daylight is meaningfully different: Scotland in June-July offers up to 18 hours of daylight, which lets you play 36 holes with the sun still up. Bandon has standard 14 to 16 hours of summer daylight." } },
  ],
}

export default function BandonVsScotlandPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">Bandon Dunes vs Scotland for a Golf Trip: Which Should You Pick?</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>May 6, 2026</span><span>·</span><span>10 min read</span></div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          The "should we go links?" question for serious golfers usually comes down to this: Bandon Dunes or Scotland? Both are pilgrimages. Both are unforgettable. They are also genuinely different trips, and the right answer depends on your group, your time, and your relationship with the history of the game. Here is the friendly comparison.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Quick Verdict</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Choose Bandon Dunes</span> if your group wants the maximum density of world-class links golf with minimum travel and slightly less commitment than an international trip. Budget around $2,000 to $3,500 per person for 3 to 4 nights.</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Choose Scotland</span> if your group wants the home of the game, the Old Course, deep heritage, longer daylight, and a partner-friendly base in Edinburgh. Budget around $2,500 to $5,000 per person for 5 to 7 nights.</p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The courses</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><Link href="/destinations/bandon-dunes" className="text-gold hover:underline">Bandon Dunes</Link> has the highest concentration of world-class links golf in North America. Five full-length courses on one resort: Bandon Dunes (David McLay Kidd), Pacific Dunes (Tom Doak, often ranked best public in America), Bandon Trails (Coore and Crenshaw), Old Macdonald (a tribute to template holes), and Sheep Ranch (Coore and Crenshaw, ocean views from every hole). Plus Bandon Preserve par-3. Walking only.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><Link href="/destinations/scotland" className="text-gold hover:underline">Scotland</Link> has the home of golf. The Old Course at St Andrews is the spiritual centre, hosting the Open Championship roughly every five years. Carnoustie (the brutal Open venue), Kingsbarns (modern links masterpiece), Royal Dornoch (Tom Watson's favourite), North Berwick (the original Redan), and the Castle Course at St Andrews are all within reach. Less concentrated than Bandon; more historically significant.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <CompareCard location="Bandon Dunes" pros={['Five world-class links on one resort', 'Pacific Dunes ranked #1 public in America', 'Walking only is a feature', 'Minimal driving between courses']} cons={['No Old Course / Carnoustie heritage', 'Less variety in scenery / setting']} color="fairway" />
              <CompareCard location="Scotland" pros={['The Old Course at St Andrews', 'Carnoustie, Royal Dornoch, North Berwick', 'Deep golf heritage on every tee', 'Up to 18 hours of summer daylight']} cons={['More driving between courses', 'Old Course access requires the ballot or tour operator']} color="partner" />
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The cost</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Per-night, similar. Total trip differs because Scotland trips run longer.</p>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-hidden">
              <div className="grid grid-cols-3 border-b border-border bg-bg-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground"><span>Cost Item</span><span className="text-center text-fairway-text">Bandon Dunes</span><span className="text-center text-partner-text">Scotland</span></div>
              {[
                ['Marquee course green fee', '$275 to $375 (any of 5)', '$250 to $300 (Old Course)'],
                ['Premium course green fee', '$275 to $375', '$180 to $280 (Carnoustie, Kingsbarns)'],
                ['Caddie (per bag, per round)', '$100 to $130 plus tip', '£100 to £130 plus tip'],
                ['Resort hotel (per room/night)', '$250 to $500', '$300 to $600 (Old Course Hotel)'],
                ['Total per person', '$2,000 to $3,500 (3-4 nights)', '$2,500 to $5,000 (5-7 nights)'],
              ].map(([item, b, s]) => (
                <div key={item} className="grid grid-cols-3 border-b border-border px-5 py-3 text-sm last:border-0"><span className="text-muted-foreground">{item}</span><span className="text-center font-medium text-fairway-text">{b}</span><span className="text-center font-medium text-partner-text">{s}</span></div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">The flight cost is the biggest variable. From the US East Coast, Edinburgh runs $800 to $1,500 round trip; OTH (Bandon area) runs $400 to $700. From the West Coast the gap is smaller. Our <Link href="/blog/golf-trip-budget" className="text-gold hover:underline">golf trip budget guide</Link> has the full breakdown.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The non-golfer experience</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Scotland wins decisively. Edinburgh, the Fife Coastal Path, distillery tours, Highland day trips, castles, and museums give partners a genuinely rich week. Bandon is honest about being remote: beautiful coastline, the Bandon Marsh wildlife refuge, beach walks, but limited variety. See our <Link href="/blog/bandon-dunes-for-non-golfers" className="text-gold hover:underline">Bandon Dunes for non-golfers</Link> and <Link href="/blog/scotland-for-non-golfers" className="text-gold hover:underline">Scotland for non-golfers</Link> guides.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The vibe</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Bandon feels like a focused American pilgrimage: function over form, walk and play, conversations exclusively about the golf, no flashy nightlife. Scotland feels reverent: every plaque is a moment of golf history, every pub has been there for 200 years, the caddies tell stories about the Open Championship. Both are unforgettable in different registers.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Logistics</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Bandon is reached via Southwest Oregon Regional (OTH) in North Bend (~25 miles, 35-40 minutes), with limited connections, often through Denver or San Francisco. Many groups fly into Eugene (~2.5 hours by car) or Portland (~4.5 hours).</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Scotland is reached via Edinburgh (EDI) or Glasgow (GLA), both with direct flights from US East Coast cities. Edinburgh is closer to St Andrews (~90 minutes by car). Plan a jet lag day at the start; you do not want your first round to be the morning after a transatlantic flight.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Three questions that settle it</h2>
            <div className="mt-6 space-y-4">
              <DecisionItem question="Have you played the Old Course?" answer="If no, and you can afford the trip, Scotland. The Old Course is the trip-of-a-lifetime round most golfers dream about. Bandon does not replace it." />
              <DecisionItem question="How much time can your group take?" answer="Bandon works in 4 to 5 days. Scotland needs 7 to 10 to be worth the international travel. If your group can only do a long weekend, Bandon. If your group can take a week, Scotland." />
              <DecisionItem question="Are partners joining?" answer="Scotland for nearly any partner. Bandon only for partners who specifically love rugged outdoors." />
            </div>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Pick a destination. We'll plan the rest.</h2>
            <p className="mt-3 text-base text-muted-foreground">5 questions. Dual itinerary for golfers and partners. One link the whole group can vote on.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Bandon vs Scotland FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem question="Is Bandon Dunes or Scotland better for a links trip?" answer="Both great, very different. Bandon: 5 world-class courses on one resort, less travel. Scotland: home of the game, the Old Course, deep heritage. Most golfers say if you can only do one, Scotland." />
              <FaqItem question="Is Bandon cheaper than Scotland?" answer="Per-night, similar. Total trip differs because Scotland trips are longer. Flights from US East Coast favour Bandon by $400-800 per person; from West Coast, the gap closes." />
              <FaqItem question="Which has better partner experience?" answer="Scotland decisively. Edinburgh, Fife Coastal Path, distilleries, Highlands. Bandon is partner-thin." />
              <FaqItem question="Can you play more courses at Bandon or in Scotland?" answer="Bandon on a single trip, because of the resort density. Scotland has more variety overall but more driving between." />
              <FaqItem question="Which has better weather?" answer="Both are exposed coastal links. Bandon is drier in summer; Scotland has more daylight (up to 18 hours in June-July)." />
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/blog/algarve-vs-scotland-golf-trip" title="Algarve vs Scotland" description="The European choice between sun and links." />
              <RelatedPost href="/blog/ireland-vs-scotland-golf-trip" title="Ireland vs Scotland" description="The two big British Isles links options." />
              <RelatedPost href="/blog/bandon-dunes-vs-pebble-beach-golf-trip" title="Bandon Dunes vs Pebble Beach" description="The other big Bandon comparison." />
              <RelatedPost href="/blog/pinehurst-vs-bandon-dunes-golf-trip" title="Pinehurst vs Bandon Dunes" description="East Coast tradition vs West Coast links." />
              <RelatedPost href="/blog/scotland-for-non-golfers" title="Scotland for Non-Golfers" description="The full Scotland partner-side guide." />
              <RelatedPost href="/blog/bandon-dunes-for-non-golfers" title="Bandon Dunes for Non-Golfers" description="The full Bandon partner-side guide." />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function CompareCard({ location, pros, cons, color }: { location: string; pros: string[]; cons: string[]; color: 'fairway' | 'partner' }) {
  const borderClass = color === 'fairway' ? 'border-fairway/20 bg-fairway/5' : 'border-partner/20 bg-partner/5'
  const textClass = color === 'fairway' ? 'text-fairway-text' : 'text-partner-text'
  return (
    <div className={`rounded-xl border p-5 ${borderClass}`}>
      <h3 className={`text-base font-semibold ${textClass}`}>{location}</h3>
      <ul className="mt-3 space-y-1">
        {pros.map((p) => (<li key={p} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="mt-1 text-xs text-fairway-text">+</span>{p}</li>))}
        {cons.map((c) => (<li key={c} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="mt-1 text-xs text-partner-text">−</span>{c}</li>))}
      </ul>
    </div>
  )
}

function DecisionItem({ question, answer }: { question: string; answer: string }) {
  return (<div className="rounded-xl border border-border bg-card/60 p-5"><p className="text-base font-semibold text-foreground">{question}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{answer}</p></div>)
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
