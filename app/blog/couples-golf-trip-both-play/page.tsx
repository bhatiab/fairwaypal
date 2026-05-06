/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Planning a Couples Golf Trip Where Both Play (Honest Guide) | FairwayPal',
  description: 'A friendly, honest guide to planning a couples golf trip where both partners play. Pick the right destination by skill spread, the format question, the romance versus competition balance, and the dynamics nobody warns you about.',
  alternates: { canonical: 'https://fairwaypal.com/blog/couples-golf-trip-both-play' },
  openGraph: { title: 'Planning a Couples Golf Trip Where Both Play', description: 'How to plan a golf trip when you and your partner both play.' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Planning a Couples Golf Trip Where Both Play (Honest Guide)',
  description: 'A practical guide to planning a couples golf trip where both partners play. Destination archetypes, handicap-spread considerations, format options, romance/competition balance.',
  url: 'https://fairwaypal.com/blog/couples-golf-trip-both-play',
  datePublished: '2026-05-06', dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://fairwaypal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Couples Golf Trip (Both Play)', item: 'https://fairwaypal.com/blog/couples-golf-trip-both-play' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best destination for a couples golf trip where both play?', acceptedAnswer: { '@type': 'Answer', text: "The destination depends on what kind of couple's trip you want. Pebble Beach is the classic romantic choice: marquee round, Carmel-by-the-Sea, partner-friendly even if one of you is also playing golf. Pinehurst gives you nine resort courses you can both enjoy at different price points, plus the village. The Algarve is the value choice with sun, beaches, and modern resort courses. Kiawah Island works because the secondary courses are accessible while the Ocean Course is the bucket-list. Avoid Bandon Dunes unless both partners specifically love links and walking; the trip can be brutal for the higher-handicap player." } },
    { '@type': 'Question', name: 'How do you handle a big handicap gap on a couples golf trip?', acceptedAnswer: { '@type': 'Answer', text: "The single most important variable on a couples trip. A 5-handicap and a 25-handicap on the back tees of Pebble Links is a recipe for the higher-handicap player having a miserable round. Three fixes. (1) Different tees: the higher-handicap plays forward, the lower plays middle or back. (2) Format that handicaps fairly: scramble (most fun), better ball with full handicaps, or Stableford with full handicap. (3) Pick courses that are challenging but not punishing for the higher handicap. Pinehurst No. 4 over No. 2 if the handicap gap is wide. Bandon Trails over Pacific Dunes." } },
    { '@type': 'Question', name: 'Should a couples golf trip be all golf or mixed?', acceptedAnswer: { '@type': 'Answer', text: "Mixed, almost always. Even golf-loving couples find that 36-hole days plus dinners eats into the relationship time the trip is supposed to deliver. The shape that works for most couples: 18 holes per day, generous downtime in the middle of the day for pool/spa/wandering, dinner together. One non-golf day in the middle for an excursion (Big Sur from Pebble, Edinburgh from St Andrews, the Algarve cliff coast). Trips that try to play 36 holes a day with a couple end with one or both of you exhausted by day 3." } },
    { '@type': 'Question', name: 'How long should a couples golf trip be?', acceptedAnswer: { '@type': 'Answer', text: "Four to seven nights. Three is too short to fully unwind. Four is the sweet spot: 3 rounds, one rest day, two memorable dinners, and time to actually be on holiday together. Five to seven nights works for international trips (Algarve, Scotland) where travel time justifies the longer stay. Avoid 7+ night couples trips unless the destination explicitly works for it; the relationship thrives better on shorter, well-planned trips than longer drifting ones." } },
    { '@type': 'Question', name: 'Should you keep score and play matches as a couple?', acceptedAnswer: { '@type': 'Answer', text: "Depends on the couple. Some couples genuinely enjoy a friendly match and the small competitive edge. Others find that score-keeping introduces tension into a relationship-time trip. The honest framework: ask explicitly before round one. 'Do you want to keep score and play a friendly match, or just play and chat?' Both answers are fine. The mistake is assuming. If you do play matches, use a generous handicap system (full strokes given) and small/no stakes (lunch on the loser, $5 a round)." } },
  ],
}

export default function CouplesGolfTripPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">Planning a Couples Golf Trip Where Both Play</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>May 6, 2026</span><span>·</span><span>9 min read</span></div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Two-player golf trips where both partners play are different from buddies trips. The dynamics are smaller, the expectations are higher, and the same planning instincts that make a buddies trip great can quietly make a couples trip worse. Here is the honest guide to planning a trip where both of you play and both of you actually enjoy yourselves.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The honest take</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Pick the destination for the relationship, not the golf.</span> A 36-hole-per-day Bandon trip is wonderful for a serious-golf foursome and brutal for most couples. The trip should be golf as one of several things you do together, not the entire structure of the week. Plan accordingly.</p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The four destination archetypes</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Most great couples golf trips fit one of four shapes. Pick the one that matches your relationship and your golf.</p>
            <div className="mt-6 space-y-4">
              <ArchetypeCard archetype="The romantic bucket-list (Pebble Beach)" detail="One marquee round at Pebble Links, one or two supporting rounds at Spyglass or Spanish Bay, evenings in Carmel-by-the-Sea. The most romantic of the destinations and the easiest sell to either partner. Budget around $3,000-5,000 per person for 3 nights." />
              <ArchetypeCard archetype="The walkable village (Pinehurst)" detail="Nine resort courses at different price points so you can match by skill, the village for evenings, the spa for the rest day. Refined, traditional, easier on mixed handicaps. Budget around $1,500-3,000 per person for 3 nights." />
              <ArchetypeCard archetype="The sun-and-villa (the Algarve)" detail="Modern resort courses, villa with a pool, sea cave kayak tour, long lunches at clifftop restaurants. The best value romantic option. Budget around €1,800-3,500 per person for 4-5 nights." />
              <ArchetypeCard archetype="The relaxed resort (Kiawah Island)" detail="Multiple courses including the bucket-list Ocean Course, beach, spa, Charleston dining 25 miles away. Mid-range, partner-friendly even when both play. Budget around $1,800-3,500 per person for 3 nights." />
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The handicap question</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The single biggest variable on a couples trip is the handicap gap. A 5-and-5 couple plays totally differently from a 5-and-25 couple. The honest planning answers:</p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Tight gap (within 5 strokes):</strong> any destination works. Play matches with full handicaps. Keep score; settle small stakes.</li>
              <li><strong>Moderate gap (5 to 15 strokes):</strong> use forward tees for the higher handicap. Format: better ball or scramble removes pressure. Pick courses that are challenging but fair (Pinehurst No. 4 over No. 2; Bandon Trails over Pacific Dunes).</li>
              <li><strong>Big gap (15+ strokes):</strong> destination matters most. Skip Bandon and Pebble Links (wind kills weak ball-strikers). Choose Pinehurst (multiple courses by difficulty), Algarve (Vale do Lobo Royal is forgiving), or Kiawah's secondary courses. Play scrambles or modified Stableford. Avoid stroke play.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Both partners need to enjoy the round. If one is suffering by hole 7, the day is wrecked.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The format question (and the score-keeping conversation)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">A trip-saving conversation worth having before round one: do you want to play a friendly match, or just play and chat?</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Some couples love the friendly competitive edge: a small Nassau, lunch on the loser, a "if I win we go to the spa, if you win we go to the cigar bar" stake. Others find that score-keeping introduces tension into what is supposed to be relationship time. Both are fine. The mistake is assuming.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">If you do play matches, use generous handicap allowances (full strokes given) and small/no stakes. The point is the friendly competition, not the money. See our <Link href="/blog/golf-trip-formats" className="text-gold hover:underline">golf trip formats guide</Link>.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The shape of a great couples golf day</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">36-hole days are for buddies trips. Couples trips work better with this rhythm:</p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Slow morning.</strong> Coffee, breakfast, time to wake up properly. No 7 AM tee times.</li>
              <li><strong>One round per day.</strong> Late-morning or early-afternoon tee time. 18 holes, walking or riding by preference. About 4 to 4.5 hours including the half-way house break.</li>
              <li><strong>Pool, spa, or wandering after the round.</strong> The trip is also a holiday. Use the afternoon.</li>
              <li><strong>Dinner together.</strong> Reservation made in advance at a memorable restaurant. The day's anchor.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground">For a 4-night trip, take one rest day in the middle: a Big Sur drive from Pebble, an Edinburgh day from St Andrews, a Benagil cave kayak from the Algarve. The off-golf day is often the most memorable.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The romance versus competition balance</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Couples golf trips have a unique tension. Romance and competition pull in slightly different directions. Three notes that help:</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Compete on the course; relax off it.</strong> Once the round ends, the match is settled. The dinner is not a continuation. Couples that carry the round into dinner find the dinner less enjoyable.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Decide where coaching is okay (probably not at all).</strong> Even with good intentions, on-course coaching usually reads as criticism. The default rule: no swing tips unless the player asks. Take a paid lesson together at the resort academy if either partner wants technical work; that removes the dynamic from the round itself.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Plan one explicitly romantic moment per trip.</strong> Sunset cocktails at Spanish Bay with the bagpiper; a clifftop dinner in the Algarve; a private terrace at the resort. Couples trips remember the moments more than the rounds.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The booking specifics</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Practical things that make a couples golf trip work:</p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Book a private cart for two</strong> rather than splitting a 4-cart with strangers (most resorts allow this). The car ride between holes is part of the trip.</li>
              <li><strong>Book the spa appointment 1 to 2 weeks ahead</strong> in peak season. Couples massage rooms book up first.</li>
              <li><strong>Make at least one dinner reservation a memorable one.</strong> The signature restaurant at the resort, or the most-recommended room in town. Reservation 30 days out for any premium destination.</li>
              <li><strong>Hire a club rental for one of you</strong> if travel logistics mean only one set of clubs makes the trip. Most resorts have decent rental fleets at $50 to $80 per round.</li>
              <li><strong>Pack a non-golf outfit for both of you.</strong> Spa robe, beach outfit, dinner outfit. The trip is also a holiday.</li>
            </ul>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Plan a trip that lives up to the relationship.</h2>
            <p className="mt-3 text-base text-muted-foreground">FairwayPal works for couples trips too. 5 minute plan, dual itinerary, easy logistics.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Couples golf trip FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem question="What is the best destination for a couples golf trip?" answer="Pebble Beach (romantic bucket-list), Pinehurst (walkable village), the Algarve (sun-and-villa value), Kiawah Island (relaxed resort). Avoid Bandon unless both love links." />
              <FaqItem question="How do you handle a big handicap gap?" answer="Different tees, fair format (scramble or full-handicap better-ball), pick courses that are challenging but not punishing. Both partners need to enjoy the round." />
              <FaqItem question="Should a couples trip be all golf or mixed?" answer="Mixed. 18 holes per day with afternoon downtime, dinner together, one rest day in the middle. 36-hole days are for buddies trips." />
              <FaqItem question="How long should a couples golf trip be?" answer="Four to seven nights. Three is too short. Four is sweet spot. Five to seven for international." />
              <FaqItem question="Should you keep score and play matches?" answer="Depends on the couple. Ask explicitly before round one. Both answers are fine; assuming is the mistake." />
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/blog/father-son-golf-trip" title="Father-Son Golf Trip" description="Two-person trip planning for a different relationship." />
              <RelatedPost href="/blog/golf-trip-formats" title="Golf Trip Formats" description="Pick a format that suits the couple's handicap gap." />
              <RelatedPost href="/blog/40th-50th-birthday-golf-trip" title="40th and 50th Birthday Golf Trip" description="Couples often build milestone trips around golf." />
              <RelatedPost href="/blog/algarve-vs-scotland-golf-trip" title="Algarve vs Scotland" description="Two great couples destinations compared." />
              <RelatedPost href="/blog/pinehurst-vs-kiawah-island-golf-trip" title="Pinehurst vs Kiawah Island" description="Two great couples destinations on the East Coast." />
              <RelatedPost href="/blog/how-to-plan-a-golf-trip" title="How to Plan a Golf Trip" description="The complete planning guide adapted for couples." />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function ArchetypeCard({ archetype, detail }: { archetype: string; detail: string }) {
  return (<div className="rounded-xl border border-border bg-card/60 p-5"><h3 className="text-base font-semibold text-foreground">{archetype}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p></div>)
}
function FaqItem({ question, answer }: { question: string; answer: string }) { return (<details className="group rounded-xl border border-border bg-card/60"><summary className="flex cursor-pointer items-center justify-between p-5 text-base font-semibold text-foreground">{question}<span className="ml-2 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span></summary><div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted-foreground">{answer}</div></details>) }
function RelatedPost({ href, title, description }: { href: string; title: string; description: string }) { return (<Link href={href} className="group rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30"><h3 className="text-base font-semibold text-foreground group-hover:text-gold transition-colors">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></Link>) }
