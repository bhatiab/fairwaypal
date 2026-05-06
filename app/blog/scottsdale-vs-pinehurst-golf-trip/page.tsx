/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Scottsdale vs Pinehurst for a Golf Trip: Which Should You Pick? | FairwayPal',
  description: 'Sun and desert versus heritage and pine forest. Two of the great American golf trips compared honestly: courses, costs, weather, partner experience, logistics.',
  alternates: { canonical: 'https://fairwaypal.com/blog/scottsdale-vs-pinehurst-golf-trip' },
  openGraph: { title: 'Scottsdale vs Pinehurst: Which Should You Pick?', description: 'Sun and desert versus heritage and pine forest.' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Scottsdale vs Pinehurst for a Golf Trip: Which Should You Pick?',
  description: 'Head-to-head comparison of Scottsdale and Pinehurst for a group golf trip. Courses, costs, weather, partner activities, logistics, verdict by group type.',
  url: 'https://fairwaypal.com/blog/scottsdale-vs-pinehurst-golf-trip',
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
    { '@type': 'ListItem', position: 3, name: 'Scottsdale vs Pinehurst', item: 'https://fairwaypal.com/blog/scottsdale-vs-pinehurst-golf-trip' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Scottsdale or Pinehurst better for a golf trip?', acceptedAnswer: { '@type': 'Answer', text: "Both are great American golf trips, very different experiences. Scottsdale offers 200+ desert courses within an hour, year-round sunshine (October through April), and a strong urban Old Town partner scene. Pinehurst offers nine resort courses on one walkable property, the cradle of American golf history, and a charming Southern village. If your group wants desert luxury and a more urban partner experience, pick Scottsdale. If your group wants concentrated golf heritage and a quiet refined village, pick Pinehurst." } },
    { '@type': 'Question', name: 'Is Scottsdale or Pinehurst more expensive?', acceptedAnswer: { '@type': 'Answer', text: "Roughly comparable, with Scottsdale slightly higher on the marquee end. Premium Scottsdale courses (TPC Scottsdale, Troon North) run $185 to $250 per round versus $350 to $500 for Pinehurst No. 2. Hotels are similar ($200 to $400 per room/night for solid options at both). A 3-night per-person trip lands at $1,400 to $2,200 in Scottsdale vs $1,500 to $3,000 in Pinehurst. Pinehurst has higher peaks (the No. 2 round) but more value alternatives (Pine Needles, Mid Pines)." } },
    { '@type': 'Question', name: 'Which has better non-golf options for partners?', acceptedAnswer: { '@type': 'Answer', text: "Scottsdale, by a meaningful margin, especially for partners who want variety. Old Town Scottsdale has 50+ art galleries, the Joya Spa and Well & Being spa resorts, hot air balloon rides over the Sonoran Desert, the Desert Botanical Garden, Camelback hiking, the Scottsdale Wine Trail, and Taliesin West. Pinehurst Village is charming but smaller (boutiques, the Tufts Archives, Spa at Pinehurst, Seagrove pottery 30 miles away). Scottsdale wins on partner variety; Pinehurst wins on walkable density." } },
    { '@type': 'Question', name: 'When is the best time to visit each?', acceptedAnswer: { '@type': 'Answer', text: "Scottsdale: October through April (avoid summer when temperatures regularly exceed 110°F). January through March is peak season with perfect weather and peak prices. November and March give the best weather-to-price ratio. Pinehurst: March to May and September to November (60 to 80°F, low humidity, courses in beautiful condition). Spring brings dogwood and azalea blooms. Fall brings warm days and cool evenings. Their high seasons overlap in November and March, which makes them direct competitors during those months." } },
    { '@type': 'Question', name: 'Which is easier to fly into?', acceptedAnswer: { '@type': 'Answer', text: "Scottsdale via Phoenix Sky Harbor (PHX) is one of the easiest US golf airports: large hub with direct flights from nearly every major city, 20 minutes from Old Town Scottsdale. Pinehurst via Raleigh-Durham International (RDU) has direct flights from most US cities and is 70 to 75 miles (about 80 minutes) from the resort. Both are very accessible. Scottsdale wins slightly on shorter drive after landing; Pinehurst wins slightly on quieter airport experience." } },
  ],
}

export default function ScottsdaleVsPinehurstPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">Scottsdale vs Pinehurst for a Golf Trip: Which Should You Pick?</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>May 6, 2026</span><span>·</span><span>9 min read</span></div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Two of America's most popular group golf trips, with almost no overlap in feel. Scottsdale is desert luxury, year-round sun, and the most polished urban partner scene of any US golf destination. Pinehurst is the cradle of the American game, walkable village charm, and Donald Ross history on tap. Here is the friendly comparison so your group can pick.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Quick Verdict</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Choose Scottsdale</span> if your group wants desert sunshine, urban variety, and a strong partner scene with shopping, spas, and entertainment. Budget around $1,400 to $2,200 per person for 3 nights.</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Choose Pinehurst</span> if your group wants concentrated golf heritage, walkable village charm, and the chance to play a USGA anchor site (No. 2). Budget around $1,500 to $3,000 per person for 3 nights.</p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The courses</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><Link href="/destinations/scottsdale" className="text-gold hover:underline">Scottsdale</Link> has 200+ courses within an hour, with TPC Scottsdale's Stadium Course (Waste Management Phoenix Open), Troon North, We-Ko-Pa, Grayhawk, and Talking Stick as the standout names. Dramatic desert scenery on every hole. The variety is good and the conditioning is consistent because of the year-round dry climate.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><Link href="/destinations/pinehurst" className="text-gold hover:underline">Pinehurst</Link> has nine resort courses (No. 1 through No. 9) plus The Cradle, all on one walkable property. <strong>Pinehurst No. 2</strong>, the Donald Ross masterpiece, has hosted U.S. Opens in 1999, 2005, 2014, and 2024 and is the USGA anchor site for 2029, 2035, 2041, and 2047. No. 4 (Gil Hanse), No. 8, and Pine Needles + Mid Pines off-property round out a serious week.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <CompareCard location="Scottsdale" pros={['200+ courses within an hour', 'TPC Stadium, Troon North, We-Ko-Pa', 'Year-round consistent conditions', 'Dramatic desert scenery']} cons={['No single bucket-list anchor', 'Premium courses $185 to $250']} color="fairway" />
              <CompareCard location="Pinehurst" pros={['Nine resort courses plus The Cradle', 'No. 2 is a Donald Ross + USGA anchor', 'Concentrated walkable layout', 'Pine Needles, Mid Pines nearby']} cons={['No. 2 is $350 to $500/round', 'Less variety than Scottsdale']} color="partner" />
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The cost</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Roughly comparable. Scottsdale is more consistent across the board ($150 to $250 typical premium round); Pinehurst has a higher marquee peak (No. 2) but more value alternatives.</p>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-hidden">
              <div className="grid grid-cols-3 border-b border-border bg-bg-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground"><span>Cost Item</span><span className="text-center text-fairway-text">Scottsdale</span><span className="text-center text-partner-text">Pinehurst</span></div>
              {[
                ['Marquee course green fee', '$185 to $250 (TPC, Troon)', '$350 to $500 (No. 2)'],
                ['Premium course green fee', '$120 to $200', '$200 to $350 (No. 4, No. 8)'],
                ['Value course green fee', '$60 to $100', '$80 to $200 (Mid Pines)'],
                ['Hotel (per room/night)', '$150 to $300', '$300 to $600 (Carolina Hotel)'],
                ['Total per person (3 nights, 3 rounds)', '$1,400 to $2,200', '$1,500 to $3,000'],
              ].map(([item, sd, ph]) => (
                <div key={item} className="grid grid-cols-3 border-b border-border px-5 py-3 text-sm last:border-0"><span className="text-muted-foreground">{item}</span><span className="text-center font-medium text-fairway-text">{sd}</span><span className="text-center font-medium text-partner-text">{ph}</span></div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The non-golfer experience</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Scottsdale wins for partner variety. Old Town Scottsdale has art galleries, restaurants, and bars within easy walking distance. The Joya Spa and Well & Being are world-class. Hot air balloon rides over the Sonoran Desert, the Desert Botanical Garden, Camelback hiking, and the Scottsdale Wine Trail (15+ tasting rooms in Old Town) all give partners full days. See our <Link href="/blog/scottsdale-for-non-golfers" className="text-gold hover:underline">Scottsdale for non-golfers guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Pinehurst wins for walkable charm and concentrated experience. Pinehurst Village is a 20-minute walkable, with boutiques, the Tufts Archives, the Spa at Pinehurst, and the Pinehurst Brewing Co. Seagrove pottery is 30 minutes away. The variety is finite but the density is excellent for partners who like a slower trip. See our <Link href="/blog/pinehurst-for-non-golfers" className="text-gold hover:underline">Pinehurst for non-golfers guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Partners wanting variety pick Scottsdale. Partners wanting refined walkable charm pick Pinehurst.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The vibe</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Scottsdale is desert-luxury polished. Big resorts, manicured everything, an Old Town that runs late. The pace skews upscale and the energy is closer to Las Vegas-lite than Pinehurst's quiet Southern village.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Pinehurst is traditional golf-pilgrimage. Donald Ross history, walkable streets, conversations at the bar exclusively about the round. Slower, quieter, more reverent.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Both are wonderful in their own ways. Pick by appetite.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Three questions that settle it</h2>
            <div className="mt-6 space-y-4">
              <DecisionItem question="What time of year are you going?" answer="Scottsdale only works October-April (summer is brutal). Pinehurst works March-May and September-November plus a milder winter shoulder. November and March overlap; pick by other criteria." />
              <DecisionItem question="Are partners joining and what do they want?" answer="Variety + urban: Scottsdale. Walkable village + heritage: Pinehurst. Both work; the variety question usually decides." />
              <DecisionItem question="Bucket-list round or volume?" answer="If playing No. 2 is the dream, Pinehurst. If varied premium desert golf is the goal, Scottsdale gives more options." />
            </div>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Pick a destination. We'll plan the rest.</h2>
            <p className="mt-3 text-base text-muted-foreground">5 questions. Dual itinerary for golfers and partners. One link the whole group can vote on.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Scottsdale vs Pinehurst FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem question="Is Scottsdale or Pinehurst better for a golf trip?" answer="Both are great. Scottsdale: desert + urban Old Town + variety. Pinehurst: heritage + walkable village + No. 2." />
              <FaqItem question="Which is more expensive?" answer="Roughly comparable. Pinehurst has higher marquee peak (No. 2 at $350-500) but value alternatives. Scottsdale is more consistent ($150-250 typical premium)." />
              <FaqItem question="Which has better non-golf options?" answer="Scottsdale for partner variety (galleries, world-class spas, balloons, hiking, wine trail). Pinehurst for walkable charm." />
              <FaqItem question="When is the best time to visit each?" answer="Scottsdale: Oct-April (avoid summer). Pinehurst: March-May and Sep-Nov. Both peak in November and March." />
              <FaqItem question="Which is easier to fly into?" answer="Both very accessible. PHX is a large hub 20 min from Scottsdale. RDU is 70 miles from Pinehurst, with direct flights from most US cities." />
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/blog/scottsdale-vs-myrtle-beach-golf-trip" title="Scottsdale vs Myrtle Beach" description="The other big Scottsdale comparison." />
              <RelatedPost href="/blog/pinehurst-vs-kiawah-island-golf-trip" title="Pinehurst vs Kiawah Island" description="The two best East Coast golf resorts." />
              <RelatedPost href="/blog/pinehurst-vs-pebble-beach-golf-trip" title="Pinehurst vs Pebble Beach" description="The East Coast versus West Coast bucket-list shootout." />
              <RelatedPost href="/blog/myrtle-beach-vs-pinehurst-golf-trip" title="Myrtle Beach vs Pinehurst" description="The Carolina value vs prestige comparison." />
              <RelatedPost href="/blog/golf-trip-with-non-golfers" title="Golf Trips With Non-Golfers" description="The general playbook for the whole group." />
              <RelatedPost href="/blog/best-bachelor-party-golf-destinations" title="Best Bachelor Golf Destinations" description="Six destinations ranked." />
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
