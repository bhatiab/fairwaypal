/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Algarve vs Ireland for a Golf Trip: Which Should You Pick? | FairwayPal',
  description: 'Sun and value versus craic and links. Two of the great affordable European golf trips compared honestly. Courses, costs, weather, partner experience, and a verdict by group type.',
  alternates: { canonical: 'https://fairwaypal.com/blog/algarve-vs-ireland-golf-trip' },
  openGraph: { title: 'Algarve vs Ireland: Which Should You Pick?', description: 'Sun and value versus craic and links. Two affordable European golf trips compared.' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Algarve vs Ireland for a Golf Trip: Which Should You Pick?',
  description: 'Head-to-head comparison of the Algarve and Ireland for a group golf trip. Courses, costs, weather, partner activities, logistics, verdict by group type.',
  url: 'https://fairwaypal.com/blog/algarve-vs-ireland-golf-trip',
  datePublished: '2026-05-06', dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://fairwaypal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Algarve vs Ireland', item: 'https://fairwaypal.com/blog/algarve-vs-ireland-golf-trip' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is the Algarve or Ireland better for a golf trip?', acceptedAnswer: { '@type': 'Answer', text: "Both are great affordable European golf trips, very different feels. The Algarve gives you 300 days of sunshine, modern resort courses, villa accommodation that splits 8-10 ways, and a partner-friendly Atlantic coast. Ireland gives you wild links courses (Ballybunion, Lahinch, Tralee, Waterville), the friendliest people in golf, pubs with live music, and dramatic Atlantic coastline. If your group wants sun and value, pick the Algarve. If your group wants the links experience and the craic, pick Ireland. Both are dramatically cheaper than Scotland." } },
    { '@type': 'Question', name: 'Is the Algarve cheaper than Ireland?', acceptedAnswer: { '@type': 'Answer', text: "Roughly comparable, with Algarve slightly cheaper on accommodation (villa rentals split across 8-10 people) and Ireland slightly cheaper on green fees (Ballybunion and Lahinch run €120 to €180; Algarve premiums run €150 to €350). A 5-night Algarve trip lands at €1,800 to €3,500 per person; a 5-night Ireland trip lands at €2,000 to €4,000 per person. The biggest variable is the group size: villa accommodation in the Algarve gets dramatically cheaper per-person above 6 people, which makes it the value winner for larger groups." } },
    { '@type': 'Question', name: 'Which has better weather, the Algarve or Ireland?', acceptedAnswer: { '@type': 'Answer', text: "The Algarve, by a long way. The Algarve enjoys 300 days of sunshine annually with March-May at 18-22°C and September-November at 20-25°C. Ireland averages 12 to 18°C in the May-September playing season with frequent rain and unpredictable wind. If consistent good weather matters to your group, the Algarve. If your group accepts that weather is part of links golf, Ireland is brilliant in the right conditions." } },
    { '@type': 'Question', name: 'Which has better partner experience?', acceptedAnswer: { '@type': 'Answer', text: "Different appeal, both work. The Algarve gives partners beaches, sea-cave kayak tours at Benagil, charming old towns at Lagos and Tavira, fresh seafood, and the Alentejo wine country. Ireland gives partners the Cliffs of Moher, the Ring of Kerry, Killarney National Park, Galway pubs, the Dingle Peninsula, distillery tours, and Dublin. Sunshine partners pick the Algarve; history-and-culture partners pick Ireland. Both are genuinely partner-friendly, especially compared to Scotland and Bandon Dunes." } },
    { '@type': 'Question', name: 'Which has better golf, Algarve or Ireland?', acceptedAnswer: { '@type': 'Answer', text: "Different kinds of golf. The Algarve has roughly 40 modern, well-conditioned resort courses (Monte Rei, Quinta do Lago South, San Lorenzo, Vale do Lobo, Palmares). Excellent variety and conditioning. Ireland has wild links golf as it was meant to be played: Ballybunion (twice ranked top 100 worldwide), Lahinch (Cliffs of Moher next door), Old Head of Kinsale (clifftop drama), Royal County Down (often #1 in the world), Royal Portrush (Open Championship venue). For pure links golf and authenticity, Ireland is unmatched. For variety and consistency, the Algarve." } },
  ],
}

export default function AlgarveVsIrelandPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">Algarve vs Ireland for a Golf Trip: Which Should You Pick?</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>May 6, 2026</span><span>·</span><span>10 min read</span></div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Both are genuinely affordable European golf trips. Both offer something Scotland cannot. But they are wildly different experiences: 300 days of Iberian sunshine versus 18 hours of Irish daylight, modern resort courses versus wild links, villa pool deck versus pub session. Here is the friendly comparison so your group can pick.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Quick Verdict</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Choose the Algarve</span> if your group wants reliable sun, excellent value, modern resort golf, and a partner-friendly base. Budget around €1,800 to €3,500 per person for 4-5 nights.</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Choose Ireland</span> if your group wants wild links golf, the craic, dramatic coastline, and a more memorable cultural week. Budget around €2,000 to €4,000 per person for 5-7 nights.</p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The courses</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><Link href="/destinations/algarve" className="text-gold hover:underline">The Algarve</Link> packs roughly 40 courses into 90 miles of southern Portuguese coast. Monte Rei (Jack Nicklaus, top 100 European), Quinta do Lago South (European Tour venue), San Lorenzo (most scenic in the Algarve), Vale do Lobo Royal (most playable), Palmares (links-style on the Alvor estuary). Conditioning is excellent year-round.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><Link href="/destinations/ireland" className="text-gold hover:underline">Ireland</Link> has wild links golf with century-plus heritage: Ballybunion Old Course (twice top 100 worldwide), Lahinch (next to the Cliffs of Moher), Tralee (Arnold Palmer design), Waterville (remote, spectacular), Old Head of Kinsale (clifftop drama). For Northern Ireland: Royal County Down (often ranked #1 in the world), Royal Portrush (2019 and 2025 Open Championship).</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <CompareCard location="Algarve" pros={['Roughly 40 courses in 90 miles', 'Top 100 European: Monte Rei, Quinta do Lago', 'Modern conditioning, year-round playable', 'Mix of premium and value options']} cons={['Less heritage and authenticity', 'Modern resort feel, not classic links']} color="fairway" />
              <CompareCard location="Ireland" pros={['Wild authentic links golf', 'Ballybunion, Royal County Down world-class', 'Open Championship venues at Royal Portrush', 'Heritage and friendliness on every course']} cons={['Weather is part of the experience', 'More driving between courses']} color="partner" />
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The cost</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Roughly comparable for individual line items. Algarve gets cheaper per-person at larger group sizes via villa rentals.</p>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-hidden">
              <div className="grid grid-cols-3 border-b border-border bg-bg-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground"><span>Cost Item</span><span className="text-center text-fairway-text">Algarve</span><span className="text-center text-partner-text">Ireland</span></div>
              {[
                ['Marquee course green fee', '€200 to €350 (Monte Rei)', '€150 to €250 (Ballybunion, Old Head)'],
                ['Premium course green fee', '€100 to €250', '€100 to €180 (Lahinch, Tralee)'],
                ['Value course green fee', '€50 to €80', '€60 to €120'],
                ['Villa (8-10 people, per night)', '€500 to €1,200', 'Less common; B&Bs €100-200'],
                ['Hotel (per room/night)', '€150 to €350', '€150 to €350 (Killarney 4-star)'],
                ['Total per person', '€1,800 to €3,500 (4-5 nights)', '€2,000 to €4,000 (5-7 nights)'],
              ].map(([item, a, ir]) => (
                <div key={item} className="grid grid-cols-3 border-b border-border px-5 py-3 text-sm last:border-0"><span className="text-muted-foreground">{item}</span><span className="text-center font-medium text-fairway-text">{a}</span><span className="text-center font-medium text-partner-text">{ir}</span></div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Villa accommodation is the Algarve's secret weapon for groups of 8 to 10. A 5-bedroom villa with a pool at €500 to €1,200 per night splits to €50 to €120 per person per night. Ireland B&Bs are charming but cost more per-person at scale. See our <Link href="/blog/golf-trip-budget" className="text-gold hover:underline">golf trip budget guide</Link>.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The weather</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The cleanest gap. The Algarve enjoys 300 days of sunshine annually. Mid-March to mid-May runs 18 to 22°C; mid-September to mid-November runs 20 to 25°C. Both shoulder seasons are dry. Even peak summer (July-August) is hot but reliably sunny.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Ireland averages 12 to 18°C in the May to September window with rain probability of 30 to 40% on any given day. Wind is constant on the coast. Two of seven days will likely be wet on a typical 7-night trip. Daylight in June-July is exceptional (up to 17 hours), which lets you play 36 holes with the sun still up.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">If your group hates wet golf, the Algarve. If your group thinks weather is part of links golf, Ireland.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The non-golfer experience</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Algarve:</strong> beach days, sea-cave kayak tours at Benagil, Lagos old town, Tavira, fresh seafood, Alentejo wine country. Sunshine and a relaxed pace. See our <Link href="/blog/algarve-for-non-golfers" className="text-gold hover:underline">Algarve for non-golfers guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Ireland:</strong> Cliffs of Moher, Ring of Kerry, Killarney National Park, Galway pubs and traditional music, Dingle Peninsula, distillery tours, Dublin city extension. History, culture, walking. See our <Link href="/blog/ireland-for-non-golfers" className="text-gold hover:underline">Ireland for non-golfers guide</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Both are genuinely partner-friendly compared to Scotland and Bandon. Sunshine partners pick the Algarve; history partners pick Ireland.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The vibe</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Algarve is relaxed Iberian: morning golf, afternoon pool, evening seafood and wine on a terrace. The pace is slow, the meals are long, the heat slows everything down in the best way.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Ireland is alive and friendly: the pubs are full of music, the conversation is constant, the rounds run long because of the chat with the caddies, and the evenings stretch into the night. Trips become legendary because of the social energy as much as the golf.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Different trips, different memories. Both are wonderful in their own register.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Three questions that settle it</h2>
            <div className="mt-6 space-y-4">
              <DecisionItem question="Are partners joining and what do they want?" answer="Sunshine + beach: Algarve. History + culture + walking: Ireland. Both work; the partner question is the cleanest decision driver." />
              <DecisionItem question="What is the group size?" answer="Larger groups (8+) often find the Algarve cheaper per-person via villa rentals. Smaller groups (4-6) are similarly priced in both." />
              <DecisionItem question="Are you serious about links golf?" answer="If yes, Ireland. The Algarve has lovely modern courses but the authentic links experience is in Ireland. If your group is more casual about links specifically, the Algarve's resort variety wins." />
            </div>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Pick a destination. We'll plan the rest.</h2>
            <p className="mt-3 text-base text-muted-foreground">5 questions. Dual itinerary for golfers and partners. One link the whole group can vote on.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Algarve vs Ireland FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem question="Is the Algarve or Ireland better for a golf trip?" answer="Both great affordable European trips, very different. Algarve: sun, value, modern resort golf. Ireland: wild links, craic, dramatic coast." />
              <FaqItem question="Is the Algarve cheaper than Ireland?" answer="Comparable on individual line items. Algarve gets cheaper per-person at larger group sizes via villa rentals." />
              <FaqItem question="Which has better weather?" answer="Algarve, by a long way. 300 days of sunshine vs Ireland's variable links weather with frequent rain." />
              <FaqItem question="Which has better partner experience?" answer="Both genuinely partner-friendly. Algarve for sunshine + beach. Ireland for history + culture + walking." />
              <FaqItem question="Which has better golf?" answer="Different kinds. Algarve has 40 modern resort courses with consistent conditioning. Ireland has wild authentic links with century-plus heritage." />
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/blog/algarve-vs-scotland-golf-trip" title="Algarve vs Scotland" description="The other big Algarve comparison." />
              <RelatedPost href="/blog/ireland-vs-scotland-golf-trip" title="Ireland vs Scotland" description="The two big British Isles links options." />
              <RelatedPost href="/blog/bandon-dunes-vs-scotland-golf-trip" title="Bandon Dunes vs Scotland" description="The Pacific links pilgrimage versus the home of the game." />
              <RelatedPost href="/blog/algarve-for-non-golfers" title="The Algarve for Non-Golfers" description="The full Algarve partner-side guide." />
              <RelatedPost href="/blog/ireland-for-non-golfers" title="Ireland for Non-Golfers" description="The full Ireland partner-side guide." />
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

function DecisionItem({ question, answer }: { question: string; answer: string }) { return (<div className="rounded-xl border border-border bg-card/60 p-5"><p className="text-base font-semibold text-foreground">{question}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{answer}</p></div>) }
function FaqItem({ question, answer }: { question: string; answer: string }) { return (<details className="group rounded-xl border border-border bg-card/60"><summary className="flex cursor-pointer items-center justify-between p-5 text-base font-semibold text-foreground">{question}<span className="ml-2 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span></summary><div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted-foreground">{answer}</div></details>) }
function RelatedPost({ href, title, description }: { href: string; title: string; description: string }) { return (<Link href={href} className="group rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30"><h3 className="text-base font-semibold text-foreground group-hover:text-gold transition-colors">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></Link>) }
