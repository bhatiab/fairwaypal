/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Myrtle Beach vs Kiawah Island for a Golf Trip: Which Should You Pick? | FairwayPal',
  description: 'Two South Carolina coast destinations, very different trips. Volume and value at Myrtle Beach versus the Ocean Course and Charleston at Kiawah Island. Honest comparison with a verdict by group type.',
  alternates: { canonical: 'https://fairwaypal.com/blog/myrtle-beach-vs-kiawah-island-golf-trip' },
  openGraph: { title: 'Myrtle Beach vs Kiawah Island: Which Should You Pick?', description: 'SC neighbours, very different trips. Volume and value versus the Ocean Course and Charleston.' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Myrtle Beach vs Kiawah Island for a Golf Trip: Which Should You Pick?',
  description: 'Head-to-head comparison of Myrtle Beach and Kiawah Island for a group golf trip. Courses, costs, weather, partner activities, logistics, and a verdict by group type.',
  url: 'https://fairwaypal.com/blog/myrtle-beach-vs-kiawah-island-golf-trip',
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
    { '@type': 'ListItem', position: 3, name: 'Myrtle Beach vs Kiawah Island', item: 'https://fairwaypal.com/blog/myrtle-beach-vs-kiawah-island-golf-trip' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Myrtle Beach or Kiawah Island better for a golf trip?', acceptedAnswer: { '@type': 'Answer', text: "Both are South Carolina coast trips, very different feels. Myrtle Beach gives volume (100+ courses), best-in-class value, and a casual beach-town atmosphere. Kiawah Island gives the Ocean Course (host of the 2012 and 2021 PGA Championships, 2031 awarded), a private resort island, world-class spa, and Charleston 25 miles away. If your group prioritises value and volume of golf, pick Myrtle Beach. If your group wants a bucket-list round on the Ocean Course and a more refined resort experience, pick Kiawah." } },
    { '@type': 'Question', name: 'Is Myrtle Beach cheaper than Kiawah Island?', acceptedAnswer: { '@type': 'Answer', text: "Yes, dramatically. The Ocean Course at Kiawah runs $400 to $600 per round plus a forecaddie fee. Myrtle Beach's most expensive courses run $120 to $180. Lodging is also much cheaper in Myrtle Beach ($100 to $200 per night) versus $500 to $1,400 at The Sanctuary at Kiawah. A 3-night per-person trip costs $900 to $1,500 in Myrtle Beach versus $1,800 to $3,500 at Kiawah." } },
    { '@type': 'Question', name: 'How far apart are Myrtle Beach and Kiawah Island?', acceptedAnswer: { '@type': 'Answer', text: "About 130 miles, roughly 2.5 to 3 hours by car along Highway 17. Some groups doing a longer Carolina trip combine both, with Kiawah for the Ocean Course experience and Myrtle Beach for a couple of value-focused rounds. Charleston sits between them and makes a natural stopover." } },
    { '@type': 'Question', name: 'Which has better non-golf options for partners?', acceptedAnswer: { '@type': 'Answer', text: "Kiawah, by a meaningful margin. Kiawah offers The Sanctuary spa, 10 miles of Atlantic beach, kayaking the tidal creeks, biking 30+ miles of maritime forest paths, and Charleston 25 miles away (one of the best mid-sized cities in the US for food, history, and architecture). Myrtle Beach offers 60 miles of beach, Brookgreen Gardens, the Murrells Inlet Marshwalk, Tanger Outlets, and the Boardwalk and SkyWheel. Myrtle Beach is more accessible and family-friendly; Kiawah is more refined and culturally rich." } },
    { '@type': 'Question', name: 'When is the best time to visit each?', acceptedAnswer: { '@type': 'Answer', text: "Both are best March to May and September to November (65 to 80°F, low humidity, courses in beautiful condition). Spring brings azalea and dogwood blooms across the SC coast. Fall brings warm Atlantic water and clear skies. Summer (June to August) is hot and humid (85 to 95°F) and very busy, especially in Myrtle Beach. Winter is mild (50 to 65°F) and quiet, with off-peak pricing at both. Avoid major spring break weeks in March in Myrtle Beach." } },
  ],
}

export default function MyrtleVsKiawahPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">Myrtle Beach vs Kiawah Island for a Golf Trip: Which Should You Pick?</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>May 6, 2026</span><span>·</span><span>9 min read</span></div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Two destinations on the same Atlantic coast, 130 miles apart, almost no overlap. Myrtle Beach is the most popular value golf trip in America. Kiawah Island is the East Coast bucket-list. If your group is choosing between them, here is the honest comparison.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Quick Verdict</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Choose Myrtle Beach</span> if value matters and you want volume of casual rounds, beach access, and a fun unpretentious vibe. Budget around $900 to $1,500 per person for 3 nights.</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Choose Kiawah Island</span> if your group wants the Ocean Course on the bucket list, a refined resort experience, and Charleston nearby for partners. Budget around $1,800 to $3,500 per person for 3 nights.</p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The courses</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><Link href="/destinations/myrtle-beach" className="text-gold hover:underline">Myrtle Beach</Link>: 100+ courses across 60 miles of the Grand Strand. Caledonia ($120 to $180) is genuinely world-class. TPC Myrtle Beach is an excellent test. The Dunes Club, Pawleys Plantation, and Barefoot Resort all rank well. Wide range from $40 budget tracks to $150+ premium rounds.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><Link href="/destinations/kiawah-island" className="text-gold hover:underline">Kiawah Island</Link>: five resort courses, headlined by Pete Dye's <strong>Ocean Course</strong> (host of the 2012 and 2021 PGA Championships, with 2031 awarded). Every hole has an ocean view; on a windy day it is one of the most demanding rounds in North America. Cougar Point, Oak Point, Osprey Point, and Turtle Point are the four secondary courses. Less variety than Myrtle Beach, but the Ocean Course alone is a reason to come.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <CompareCard location="Myrtle Beach" pros={['100+ courses, $40 to $150 typical', 'Caledonia, TPC, Dunes Club legitimate', 'Volume of casual rounds easy', 'Very flexible budget']} cons={['No bucket-list course', 'Quality range is wide']} color="fairway" />
              <CompareCard location="Kiawah Island" pros={['Ocean Course (2012, 2021 PGAs)', 'Five courses on one private island', 'Forecaddies enhance the marquee round', 'Much higher quality floor']} cons={['Ocean Course is $400 to $600', 'Less volume than Myrtle Beach']} color="partner" />
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The cost</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">This is Myrtle Beach's biggest argument. Kiawah is meaningfully more expensive on every line item, especially the Ocean Course green fee and the resort hotel.</p>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-hidden">
              <div className="grid grid-cols-3 border-b border-border bg-bg-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground"><span>Cost Item</span><span className="text-center text-fairway-text">Myrtle Beach</span><span className="text-center text-partner-text">Kiawah Island</span></div>
              {[
                ['Marquee course green fee', '$120 to $180 (Caledonia, TPC)', '$400 to $600 (Ocean Course)'],
                ['Premium course green fee', '$80 to $150', '$150 to $280 (secondary courses)'],
                ['Value course green fee', '$40 to $80', '$90 to $150 (Caledonia off-island)'],
                ['Resort hotel (per room/night)', '$100 to $200', '$500 to $1,400 (The Sanctuary)'],
                ['Forecaddie (marquee round)', 'No', '$50 to $75 plus tip'],
                ['Total per person (3 nights, 3 to 4 rounds)', '$900 to $1,500', '$1,800 to $3,500'],
              ].map(([item, mb, kw]) => (
                <div key={item} className="grid grid-cols-3 border-b border-border px-5 py-3 text-sm last:border-0"><span className="text-muted-foreground">{item}</span><span className="text-center font-medium text-fairway-text">{mb}</span><span className="text-center font-medium text-partner-text">{kw}</span></div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">For a 6-person group, that's $5,400 to $12,000 in cost difference. Real money. See our <Link href="/blog/golf-trip-budget" className="text-gold hover:underline">golf trip budget guide</Link>.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The non-golfer experience</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Both work for partners, very different appeal.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Myrtle Beach</strong> is the casual beach-town option: 60 miles of Atlantic beach, the Boardwalk and SkyWheel, Brookgreen Gardens, the Murrells Inlet Marshwalk, Tanger Outlets. Family-friendly, accessible, informal. See our <Link href="/blog/myrtle-beach-for-non-golfers" className="text-gold hover:underline">Myrtle Beach for non-golfers guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Kiawah Island</strong> is the refined resort + Charleston option: 10 miles of Atlantic beach, The Sanctuary spa, kayaking the tidal creeks, biking the maritime forest, and Charleston 25 miles away (one of the best US food cities). More polished, more cultural. See our <Link href="/blog/kiawah-island-for-non-golfers" className="text-gold hover:underline">Kiawah Island for non-golfers guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">If partners want a beach holiday with shopping, Myrtle Beach. If partners want a refined resort with Charleston culture nearby, Kiawah.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The vibe</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Myrtle Beach is unabashedly fun and casual. Bachelor parties, big groups of buddies, beach bars at lunch, the Marshwalk in the evening. The atmosphere is loud, friendly, and unpretentious.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Kiawah is private-island refined. Quiet, gated, expensive, with the rhythm of a destination resort holiday. Other guests are couples and small groups; the noise level is lower; the dress code at dinner is a notch up.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Different trips. Match the group.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Three questions that settle it</h2>
            <div className="mt-6 space-y-4">
              <DecisionItem question="Is the Ocean Course on the bucket list?" answer="If yes, only Kiawah delivers. If no, the Caledonia + TPC Myrtle Beach combo is genuinely good for less than half the price." />
              <DecisionItem question="What is the budget ceiling?" answer="If $1,500 per person is the target, Myrtle Beach. If $3,000+ per person is fine, Kiawah opens up." />
              <DecisionItem question="Are partners joining?" answer="Either works, different appeal. Beach + casual: Myrtle Beach. Refined resort + Charleston: Kiawah." />
            </div>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Pick a destination. We'll plan the rest.</h2>
            <p className="mt-3 text-base text-muted-foreground">5 questions. Dual itinerary for golfers and partners. One link the whole group can vote on.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Myrtle Beach vs Kiawah Island FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem question="Is Myrtle Beach or Kiawah Island better for a golf trip?" answer="Different trips on the same coast. Myrtle Beach: volume, value, casual. Kiawah: Ocean Course, refined resort, Charleston nearby." />
              <FaqItem question="Is Myrtle Beach cheaper?" answer="Yes, dramatically. $900-1,500 per person at Myrtle Beach vs $1,800-3,500 at Kiawah for 3 nights." />
              <FaqItem question="How far apart are they?" answer="About 130 miles, 2.5-3 hours by car. Some groups combine both, with Charleston as a stopover." />
              <FaqItem question="Which has better non-golf options?" answer="Kiawah for refined + Charleston culture. Myrtle Beach for casual beach + family-friendly. Pick by partner type." />
              <FaqItem question="When is the best time to visit?" answer="Both: March-May and September-November (65-80°F, low humidity). Avoid major spring break in March at Myrtle Beach." />
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/blog/scottsdale-vs-myrtle-beach-golf-trip" title="Scottsdale vs Myrtle Beach" description="Two of the most popular US destinations compared." />
              <RelatedPost href="/blog/myrtle-beach-vs-pinehurst-golf-trip" title="Myrtle Beach vs Pinehurst" description="The other big Myrtle Beach Carolina comparison." />
              <RelatedPost href="/blog/pinehurst-vs-kiawah-island-golf-trip" title="Pinehurst vs Kiawah Island" description="The two best East Coast bucket-list golf resorts." />
              <RelatedPost href="/blog/kiawah-island-golf-trip" title="Kiawah Island Trip Guide" description="The Ocean Course, four secondary courses, Charleston plan." />
              <RelatedPost href="/blog/golf-trip-with-non-golfers" title="Golf Trips With Non-Golfers" description="The general playbook for the whole group." />
              <RelatedPost href="/blog/golf-trip-budget" title="Golf Trip Budget Breakdown" description="What a golf trip actually costs by destination." />
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
      <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-semibold text-foreground">
        {question}<span className="ml-2 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span>
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
