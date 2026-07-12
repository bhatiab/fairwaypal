/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Myrtle Beach vs Pinehurst for a Golf Trip: Which Should You Pick? | FairwayPal',
  description: 'Carolina value versus Carolina prestige. Two of the great Southeast US golf trips compared honestly: courses, costs, weather, partner experience, and a verdict by group type.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/myrtle-beach-vs-pinehurst-golf-trip' },
  openGraph: { title: 'Myrtle Beach vs Pinehurst: Which Should You Pick?', description: 'Carolina value versus Carolina prestige. Volume and beach versus heritage and walkable village.' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Myrtle Beach vs Pinehurst for a Golf Trip: Which Should You Pick?',
  description: 'Head-to-head comparison of Myrtle Beach and Pinehurst for a group golf trip. Courses, costs, weather, partner activities, logistics, and a verdict by group type.',
  url: 'https://www.fairwaypal.com/blog/myrtle-beach-vs-pinehurst-golf-trip',
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
    { '@type': 'ListItem', position: 3, name: 'Myrtle Beach vs Pinehurst', item: 'https://www.fairwaypal.com/blog/myrtle-beach-vs-pinehurst-golf-trip' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Myrtle Beach or Pinehurst better for a golf trip?', acceptedAnswer: { '@type': 'Answer', text: "Both are great Carolina golf trips, very different experiences. Myrtle Beach offers volume (100+ courses), beach access, and the best value of any major US golf destination. Pinehurst offers heritage (the cradle of American golf), nine resort courses on one walkable property, and a charming Southern village. If your group cares about value, the beach, and a fun casual atmosphere, pick Myrtle Beach. If your group cares about golf heritage, walkability, and a more refined village base, pick Pinehurst." } },
    { '@type': 'Question', name: 'Is Myrtle Beach cheaper than Pinehurst?', acceptedAnswer: { '@type': 'Answer', text: "Yes, meaningfully. Myrtle Beach premium courses run $80 to $150 per round versus $350 to $500 for Pinehurst No. 2. Hotels are also cheaper in Myrtle Beach ($100 to $200 per night for solid options) versus $300 to $600 at the Carolina Hotel in Pinehurst. A full weekend per person typically runs $900 to $1,500 in Myrtle Beach versus $1,500 to $3,000 in Pinehurst. The gap is real and compounds for groups." } },
    { '@type': 'Question', name: 'Which is better for non-golfers, Myrtle Beach or Pinehurst?', acceptedAnswer: { '@type': 'Answer', text: "Myrtle Beach for partners who want a beach holiday with shopping and casual dining. 60 miles of beach, the Boardwalk and SkyWheel, Brookgreen Gardens, the Murrells Inlet Marshwalk, Tanger Outlets. Pinehurst for partners who want a charming walkable village with art galleries, the Tufts Archives, and the Spa at Pinehurst. Pinehurst is more refined; Myrtle Beach is more accessible. Both work for the right partner." } },
    { '@type': 'Question', name: 'Which has more course variety?', acceptedAnswer: { '@type': 'Answer', text: "Myrtle Beach. The Grand Strand has 100+ courses within 30 miles, ranging from $40 budget rounds to $150+ premium rounds (Caledonia, TPC Myrtle Beach, Dunes Club). Pinehurst has 9 resort courses on one property, plus Pine Needles, Mid Pines, and Tobacco Road off-property. Volume goes to Myrtle Beach; concentration of high-quality courses on one resort goes to Pinehurst." } },
    { '@type': 'Question', name: 'Which is closer to fly into?', acceptedAnswer: { '@type': 'Answer', text: "Both are easy. Myrtle Beach International (MYR) is 5 to 15 minutes from most Grand Strand hotels. Raleigh-Durham International (RDU) is 70 to 75 miles from Pinehurst (about 80 minutes). MYR has direct flights from many East Coast and Midwest cities, especially in season. RDU has more direct flights from across the US year-round. For a one-flight trip from anywhere, RDU is generally easier; for a short flight from the Northeast, MYR can be more direct." } },
  ],
}

export default function MyrtleVsPinehurstPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">Myrtle Beach vs Pinehurst for a Golf Trip: Which Should You Pick?</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>May 6, 2026</span><span>·</span><span>9 min read</span></div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Both in the Carolinas, both great golf trips, almost no overlap in what they offer. Myrtle Beach is volume, beach, and the best value in US golf. Pinehurst is heritage, walkability, and the cradle of the American game. Here is the friendly comparison so your group can stop debating and start booking.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Quick Verdict</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Choose Myrtle Beach</span> if value matters, partners want beach access, or your group prefers volume of golf and a casual atmosphere. Budget around $900 to $1,500 per person for 3 nights.</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Choose Pinehurst</span> if your group wants heritage, walkability, and a more refined village base. Budget around $1,500 to $3,000 per person for 3 nights.</p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The courses</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><Link href="/destinations/myrtle-beach" className="text-gold hover:underline">Myrtle Beach</Link> has volume nobody else can match: 100+ courses within 30 miles. Caledonia Golf & Fish Club is genuinely world-class. TPC Myrtle Beach is an excellent test. Pawleys Plantation, Barefoot Resort, and the Dunes Club all rank well. The range is wide: for every Caledonia there are ten budget tracks at $40 to $80. For groups that want to play 4 to 5 rounds in 3 days at varied price points, Myrtle Beach is built for it.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><Link href="/destinations/pinehurst" className="text-gold hover:underline">Pinehurst</Link> has concentration. Nine resort courses (No. 1 through No. 9) plus The Cradle, all on one walkable property. Pinehurst No. 2 (Donald Ross masterpiece, U.S. Open anchor site for 2024, 2029, 2035, 2041, 2047) is the marquee. Pine Needles, Mid Pines, and Tobacco Road are within 30 minutes off-property. The quality floor is higher than Myrtle Beach; the volume is lower.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <CompareCard location="Myrtle Beach" pros={['100+ courses within 30 miles', 'Caledonia, TPC, Pawleys are legitimate', '$40 to $150 per round typical', 'More rounds per day possible']} cons={['Quality range is wide', 'No single bucket-list course']} color="fairway" />
              <CompareCard location="Pinehurst" pros={['Nine resort courses plus The Cradle', 'No. 2 is a Donald Ross masterpiece + USGA anchor', 'Pine Needles and Mid Pines nearby', 'Higher quality floor']} cons={['Less volume', 'Marquee No. 2 is $350 to $500/round']} color="partner" />
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The cost</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Myrtle Beach is the best-value major US golf destination. Pinehurst is mid-range premium. The gap is meaningful and compounds across a 3-day trip for a group.</p>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-hidden">
              <div className="grid grid-cols-3 border-b border-border bg-bg-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground"><span>Cost Item</span><span className="text-center text-fairway-text">Myrtle Beach</span><span className="text-center text-partner-text">Pinehurst</span></div>
              {[
                ['Marquee course green fee', '$120 to $180 (Caledonia, TPC)', '$350 to $500 (No. 2)'],
                ['Premium course green fee', '$80 to $150', '$200 to $350 (No. 4, No. 8)'],
                ['Value course green fee', '$40 to $80', '$80 to $200 (Mid Pines)'],
                ['Hotel (per room/night)', '$100 to $200', '$300 to $600 (Carolina Hotel)'],
                ['Total per person (3 nights, 4 rounds)', '$900 to $1,500', '$1,500 to $3,000'],
              ].map(([item, mb, ph]) => (
                <div key={item} className="grid grid-cols-3 border-b border-border px-5 py-3 text-sm last:border-0"><span className="text-muted-foreground">{item}</span><span className="text-center font-medium text-fairway-text">{mb}</span><span className="text-center font-medium text-partner-text">{ph}</span></div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">For a 6-person group, the cost difference (~$600 per person) is $3,600 total. Real money. See our <Link href="/blog/golf-trip-budget" className="text-gold hover:underline">golf trip budget guide</Link>.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The non-golfer experience</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Both work for partners. They suit different partners.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Myrtle Beach</strong> is the beach holiday option: 60 miles of Atlantic coastline, the Boardwalk and SkyWheel, Brookgreen Gardens, the Murrells Inlet Marshwalk, Tanger Outlets, casual restaurants. See our <Link href="/blog/myrtle-beach-for-non-golfers" className="text-gold hover:underline">Myrtle Beach for non-golfers guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Pinehurst</strong> is the walkable village option: boutique shops, art galleries, the Tufts Archives golf history museum, the Spa at Pinehurst, Seagrove pottery 30 miles north, Southern Pines for restaurants. See our <Link href="/blog/pinehurst-for-non-golfers" className="text-gold hover:underline">Pinehurst for non-golfers guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Beach lovers go to Myrtle Beach. Village charm lovers go to Pinehurst. Both are good; pick by partner preference.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The vibe</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Myrtle Beach is unabashedly fun. Casual, beach-town, family-friendly, and mostly informal. Most groups eat at the Marshwalk, do a Tanger Outlets afternoon, and play 4 to 5 rounds across the trip without much fuss.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Pinehurst is genuinely refined. Southern hospitality, traditional pace, conversations at the bar are about the round. Service is unhurried. The whole village is built around golf history, which is wonderful for a serious-golf group and a little intense for a casual one.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Different trips. Different appetites. Match the vibe to your group.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Three questions that settle it</h2>
            <div className="mt-6 space-y-4">
              <DecisionItem question="Is budget a real constraint?" answer="If yes, Myrtle Beach. The $600/person savings across a 6-person group is $3,600 total." />
              <DecisionItem question="Are partners joining the trip?" answer="Both work, with different appeal. Beach + casual: Myrtle Beach. Refined village + history: Pinehurst." />
              <DecisionItem question="Are you going for the rounds or for the heritage?" answer="If volume of casual rounds is the goal, Myrtle Beach is unmatched. If the cradle of American golf and the Donald Ross experience matters, only Pinehurst delivers." />
            </div>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Pick a destination. We'll plan the rest.</h2>
            <p className="mt-3 text-base text-muted-foreground">5 questions. Dual itinerary for golfers and partners. One link the whole group can vote on.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Myrtle Beach vs Pinehurst FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem question="Is Myrtle Beach or Pinehurst better for a golf trip?" answer="Both great Carolina trips, very different. Myrtle Beach gives volume + beach + value. Pinehurst gives heritage + walkable village. Match to group preference." />
              <FaqItem question="Is Myrtle Beach cheaper than Pinehurst?" answer="Yes, meaningfully. $900-1,500 per person for 3 nights at Myrtle Beach vs $1,500-3,000 at Pinehurst. ~$600 per person gap." />
              <FaqItem question="Which is better for non-golfers?" answer="Myrtle Beach for beach + casual. Pinehurst for refined village + Tufts Archives + Spa at Pinehurst. Pick by partner preference." />
              <FaqItem question="Which has more course variety?" answer="Myrtle Beach by volume (100+ courses). Pinehurst by concentration of quality (9 resort courses plus Pine Needles, Mid Pines)." />
              <FaqItem question="Which is closer to fly into?" answer="Both easy. MYR is 5-15 min from Grand Strand hotels. RDU is 70-75 miles from Pinehurst (~80 min). RDU has more nationwide direct connections; MYR is more direct from many Northeast cities in season." />
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/blog/scottsdale-vs-myrtle-beach-golf-trip" title="Scottsdale vs Myrtle Beach" description="The other big Myrtle Beach comparison." />
              <RelatedPost href="/blog/pinehurst-vs-kiawah-island-golf-trip" title="Pinehurst vs Kiawah Island" description="The two best East Coast golf resorts compared." />
              <RelatedPost href="/blog/pinehurst-vs-pebble-beach-golf-trip" title="Pinehurst vs Pebble Beach" description="The East Coast versus West Coast bucket-list shootout." />
              <RelatedPost href="/blog/golf-trip-budget" title="Golf Trip Budget Breakdown" description="What a golf trip actually costs by destination." />
              <RelatedPost href="/blog/golf-trip-with-non-golfers" title="Golf Trips With Non-Golfers" description="The general playbook for the whole group." />
              <RelatedPost href="/blog/best-bachelor-party-golf-destinations" title="Best Bachelor Golf Destinations" description="The top six US destinations ranked honestly." />
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
