/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Bandon Dunes vs Pebble Beach vs Kiawah Island: The Premium Triple Compared | FairwayPal',
  description: 'Three of the most expensive golf trips in the United States, compared honestly. Pacific links pilgrimage versus iconic Pacific bucket-list versus East Coast Ocean Course. Verdict by group type.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/bandon-vs-pebble-vs-kiawah-golf-trip' },
  openGraph: { title: 'Bandon vs Pebble vs Kiawah: The Premium Triple', description: 'Three of the great American bucket-list golf trips compared.' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Bandon Dunes vs Pebble Beach vs Kiawah Island: The Premium Triple Compared',
  description: 'Three-way comparison of the great US bucket-list golf resorts. Courses, costs, weather, partner experience, logistics, verdict by group type.',
  url: 'https://www.fairwaypal.com/blog/bandon-vs-pebble-vs-kiawah-golf-trip',
  datePublished: '2026-05-06', dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://www.fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://www.fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.fairwaypal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Bandon vs Pebble vs Kiawah', item: 'https://www.fairwaypal.com/blog/bandon-vs-pebble-vs-kiawah-golf-trip' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which is the best US bucket-list golf resort?', acceptedAnswer: { '@type': 'Answer', text: "Different answers for different groups. Bandon Dunes is the best pure-golf trip: five world-class links courses on one walkable property, no carts, weather as part of the experience. Pebble Beach is the most iconic: the most photographed finishing hole in golf, Carmel-by-the-Sea for partners, the bucket-list round most golfers dream about. Kiawah Island is the best mixed-group bucket-list: the Ocean Course (host of two PGA Championships, with a third awarded), 10 miles of Atlantic beach, world-class spa, and Charleston 25 miles away. If your group is all serious golfers, Bandon. If you want one iconic round, Pebble. If partners are joining, Kiawah." } },
    { '@type': 'Question', name: 'Which is the most expensive of the three?', acceptedAnswer: { '@type': 'Answer', text: "Pebble Beach, by a clear margin. Pebble Links runs $595 to $625 per round plus $100 to $150 caddie fee. The Lodge at Pebble Beach runs $900 to $1,800 per night. A 3-night per-person trip lands at $2,500 to $5,000. Kiawah is second-most: Ocean Course $400 to $600, The Sanctuary $500 to $1,400 per night, total $1,800 to $3,500 for 3 nights. Bandon is the cheapest of the three: any course $275 to $375, resort lodging $250 to $500 per night, total $2,000 to $3,500 for 3-4 nights. The cost gap between Pebble and Bandon is real and matters for budget-conscious groups." } },
    { '@type': 'Question', name: 'Which has the best partner experience?', acceptedAnswer: { '@type': 'Answer', text: "Pebble Beach is the friendliest for almost any partner: Carmel-by-the-Sea five minutes away, the Monterey Bay Aquarium 20 minutes, the 17-Mile Drive on the doorstep, Big Sur 30 miles south. Kiawah Island is a close second: 10 miles of Atlantic beach, The Sanctuary spa, kayaking and biking, and Charleston 25 miles away. Bandon Dunes is honest about being remote and outdoor-focused; partners need to specifically love rugged Oregon coast. For most partners, Pebble or Kiawah; for partners who love wild outdoors, Bandon." } },
    { '@type': 'Question', name: 'Which has the easiest tee time access?', acceptedAnswer: { '@type': 'Answer', text: "Bandon Dunes is the easiest. All five courses can be booked through the resort with reasonable advance notice (60 to 90 days for peak summer weekends). Kiawah is moderate: Ocean Course requires resort guest priority for the best slots; book 60 to 90 days out for non-resort guests. Pebble Links is the most difficult: tee times are not on GolfNow, must be booked direct, and resort guests at The Lodge or Inn at Spanish Bay can book 18 months in advance. Outside guests can book 60 days out, but prime weekend slots sell out fast. Plan accordingly." } },
    { '@type': 'Question', name: 'How long should each trip be?', acceptedAnswer: { '@type': 'Answer', text: "Bandon Dunes is best at 3 to 4 nights to play 4 to 6 rounds across the five courses. Pebble Beach works at 3 nights with one or two marquee rounds (Pebble Links plus Spyglass) and a Carmel evening; longer than that and the cost compounds. Kiawah is comfortable at 3 to 5 nights, balancing golf with beach, spa, and Charleston days. International equivalents (Scotland, Ireland) typically need 5 to 7 nights to justify the travel; these three are all 3 to 5 night trips." } },
  ],
}

export default function TriplePremiumPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">Bandon Dunes vs Pebble Beach vs Kiawah Island: The Premium Triple Compared</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>May 6, 2026</span><span>·</span><span>10 min read</span></div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Three of the most expensive golf trips in the United States. All three are bucket-list. None of them feel anything like each other. Bandon is a remote Oregon links pilgrimage. Pebble is the iconic Pacific bucket-list. Kiawah is the East Coast resort with the Ocean Course and Charleston nearby. Here is the friendly three-way comparison so your group can pick.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Quick Verdict</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Bandon Dunes</span> for serious-golf groups who want maximum depth at the lowest of the three prices. ~$2,000 to $3,500 per person for 3-4 nights.</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Pebble Beach</span> for groups who want the most iconic round and a partner-friendly Carmel base. ~$2,500 to $5,000 per person for 3 nights.</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Kiawah Island</span> for mixed groups who want the Ocean Course plus the broadest partner experience and the easiest East Coast access. ~$1,800 to $3,500 per person for 3 nights.</p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Side-by-side comparison</h2>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-hidden">
              <div className="grid grid-cols-4 border-b border-border bg-bg-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground"><span>Aspect</span><span className="text-center">Bandon</span><span className="text-center">Pebble</span><span className="text-center">Kiawah</span></div>
              {[
                ['Marquee round', '$275 to $375 (any of 5)', '$595 to $625 (Pebble Links)', '$400 to $600 (Ocean Course)'],
                ['Course count on resort', '5 + Preserve par-3', '4 (Pebble, Spyglass, Spanish Bay, Cypress nearby)', '5 (Ocean + 4 secondary)'],
                ['Resort hotel /night', '$250 to $500', '$900 to $1,800 (Lodge)', '$500 to $1,400 (Sanctuary)'],
                ['Trip total per person', '$2,000 to $3,500 (3-4 nts)', '$2,500 to $5,000 (3 nts)', '$1,800 to $3,500 (3 nts)'],
                ['Walking required', 'Yes, all courses', 'Walking allowed/encouraged', 'Carts standard'],
                ['Caddies', '$100-130 + tip; near-mandatory', '$100-150 + tip; recommended', 'Forecaddie required Ocean Course $50-75'],
                ['Partner-friendly', 'Limited (rugged outdoors)', 'Excellent (Carmel + Aquarium)', 'Excellent (Charleston + Sanctuary)'],
                ['Best months', 'May to Oct (Jul-Sep driest)', 'Sep-Oct (warmest, clearest)', 'Mar-May, Sep-Nov'],
                ['Nearest airport', 'OTH (small, limited)', 'MRY (8 mi, small)', 'CHS (35 mi)'],
              ].map(([item, b, p, k]) => (
                <div key={item} className="grid grid-cols-4 border-b border-border px-5 py-3 text-sm last:border-0"><span className="text-muted-foreground">{item}</span><span className="text-center font-medium text-fairway-text">{b}</span><span className="text-center font-medium text-partner-text">{p}</span><span className="text-center font-medium text-gold">{k}</span></div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The courses, in detail</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><Link href="/destinations/bandon-dunes" className="text-gold hover:underline">Bandon Dunes</Link>: Pacific Dunes (often #1 public in America), Bandon Dunes (the original), Sheep Ranch (every hole has ocean view), Bandon Trails (woodland-and-meadow), Old Macdonald (template-hole tribute). Plus the Bandon Preserve par-3. Walking only. Most groups play 4 to 6 rounds in 3 to 4 days.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><Link href="/destinations/pebble-beach" className="text-gold hover:underline">Pebble Beach</Link>: Pebble Links (six U.S. Opens hosted, 2027/2032/2037/2044 future), Spyglass Hill (often called harder than Pebble), The Links at Spanish Bay, Cypress Point (private but limited public access via packages), Poppy Hills (the off-resort value play). Most trips play Pebble Links once and 1 to 2 of the others.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><Link href="/destinations/kiawah-island" className="text-gold hover:underline">Kiawah Island</Link>: Ocean Course (Pete Dye, 2012 + 2021 PGA Championships, 2031 awarded), Cougar Point, Oak Point, Osprey Point, Turtle Point. Ocean Course requires forecaddie. Most groups play Ocean Course once and 2 to 3 secondary rounds.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The non-golfer experience</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The biggest differentiator if partners are joining.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Pebble Beach:</strong> Carmel-by-the-Sea (one of the best small towns in California) is 5 minutes away. The Monterey Bay Aquarium is 20 minutes. The 17-Mile Drive is on the doorstep. Big Sur is 30 miles south. Carmel Valley wine country is 15 miles inland. The friendliest of the three for almost any partner. See <Link href="/blog/pebble-beach-for-non-golfers" className="text-gold hover:underline">Pebble Beach for non-golfers</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Kiawah Island:</strong> The Sanctuary spa (10,000 sq ft, world-class), 10 miles of Atlantic beach, kayaking the tidal creeks, biking 30+ miles of maritime forest, plantation tours (Magnolia, Boone Hall, Middleton), and Charleston 25 miles away (one of the best food cities in the South). Close second to Pebble for partner appeal. See <Link href="/blog/kiawah-island-for-non-golfers" className="text-gold hover:underline">Kiawah Island for non-golfers</Link>.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Bandon Dunes:</strong> remote Oregon coast. Beautiful but limited variety. Beach walks, Bandon Marsh wildlife refuge, the Coquille River Lighthouse, Old Town Bandon, and a 40-minute drive to Shore Acres State Park and Cape Arago. Best for partners who specifically love rugged outdoors. See <Link href="/blog/bandon-dunes-for-non-golfers" className="text-gold hover:underline">Bandon Dunes for non-golfers</Link>.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The vibe</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Bandon</strong> is a serious-golf pilgrimage. Walking, weather, focus on the round, conversation at the bar exclusively about the golf. No flashy resort theatre. The most monastic of the three.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Pebble Beach</strong> is destination-resort polished. The Lodge has a buzz, Carmel is alive in the evenings, dinner is more refined, the dress code is a notch up. Less monastic, more holiday.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Kiawah Island</strong> is private-island refined. Quiet, gated, expensive but more relaxed than Pebble. The rhythm is closer to a destination resort holiday than a focused golf trip.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Logistics</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Bandon:</strong> hardest to reach. Southwest Oregon Regional (OTH) ~25 miles, limited connections often through Denver or San Francisco. Many groups fly into Eugene (~2.5 hours by car) or Portland (~4.5 hours).</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Pebble:</strong> Monterey Regional (MRY) is 8 miles from the resort, 15 minute drive. MRY is small with limited direct flights, mostly West Coast hubs. Most East Coast groups fly via SFO (~110 mi) or SJC (~80 mi).</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Kiawah:</strong> Charleston International (CHS) is 35 miles, 45-60 minute drive. CHS has direct flights from most US East Coast cities and is the most accessible of the three from the East Coast.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">East Coast groups: Kiawah is meaningfully easier. West Coast groups: Pebble or Bandon. Midwest groups: Pebble via SFO is generally easiest.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Three questions that settle it</h2>
            <div className="mt-6 space-y-4">
              <DecisionItem question="Are partners joining?" answer="If yes, Pebble or Kiawah. Pebble for variety (Carmel + Aquarium + Big Sur). Kiawah for refined resort + Charleston culture. Skip Bandon unless your partner specifically loves rugged Pacific Northwest." />
              <DecisionItem question="What is the budget ceiling?" answer="Lowest: Bandon ($2,000-3,500). Middle: Kiawah ($1,800-3,500). Highest: Pebble ($2,500-5,000+). For groups counting dollars, Bandon is the best premium experience." />
              <DecisionItem question="Are you chasing a specific iconic round?" answer="Pebble Links is the iconic round. The Ocean Course at Kiawah is iconic for its PGA Championship history. Bandon has no single iconic round but five great ones. Specific bucket-list round: Pebble. Maximum depth: Bandon. PGA history: Kiawah." />
            </div>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Pick a destination. We'll plan the rest.</h2>
            <p className="mt-3 text-base text-muted-foreground">5 questions. Dual itinerary for golfers and partners. One link the whole group can vote on.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Bandon vs Pebble vs Kiawah FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem question="Which is the best US bucket-list resort?" answer="Different answers by group. Bandon: pure-golf depth. Pebble: iconic round. Kiawah: best mixed-group bucket-list with Charleston nearby." />
              <FaqItem question="Which is most expensive?" answer="Pebble ($2,500-5,000 for 3 nights). Kiawah second ($1,800-3,500). Bandon cheapest ($2,000-3,500 for 3-4 nights)." />
              <FaqItem question="Which has best partner experience?" answer="Pebble (Carmel + Aquarium + Big Sur), close second Kiawah (Charleston + Sanctuary). Bandon is partner-thin." />
              <FaqItem question="Which has easiest tee time access?" answer="Bandon (resort booking). Kiawah moderate. Pebble Links hardest (book 60 days out for non-guests; resort guests 18 months ahead)." />
              <FaqItem question="How long should each trip be?" answer="Bandon: 3-4 nights. Pebble: 3 nights. Kiawah: 3-5 nights." />
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/blog/bandon-dunes-vs-pebble-beach-golf-trip" title="Bandon Dunes vs Pebble Beach" description="The two great West Coast bucket-list trips compared head to head." />
              <RelatedPost href="/blog/pinehurst-vs-kiawah-island-golf-trip" title="Pinehurst vs Kiawah Island" description="The two best East Coast golf resorts." />
              <RelatedPost href="/blog/pinehurst-vs-pebble-beach-golf-trip" title="Pinehurst vs Pebble Beach" description="East Coast versus West Coast bucket-list shootout." />
              <RelatedPost href="/blog/pinehurst-vs-bandon-dunes-golf-trip" title="Pinehurst vs Bandon Dunes" description="Heritage versus Pacific links." />
              <RelatedPost href="/blog/golf-trip-budget" title="Golf Trip Budget Breakdown" description="What a golf trip actually costs by destination." />
              <RelatedPost href="/blog/40th-50th-birthday-golf-trip" title="The 40th and 50th Birthday Golf Trip" description="Milestone trips often pick from this triple." />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function DecisionItem({ question, answer }: { question: string; answer: string }) { return (<div className="rounded-xl border border-border bg-card/60 p-5"><p className="text-base font-semibold text-foreground">{question}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{answer}</p></div>) }
function FaqItem({ question, answer }: { question: string; answer: string }) { return (<details className="group rounded-xl border border-border bg-card/60"><summary className="flex cursor-pointer items-center justify-between p-5 text-base font-semibold text-foreground">{question}<span className="ml-2 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span></summary><div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted-foreground">{answer}</div></details>) }
function RelatedPost({ href, title, description }: { href: string; title: string; description: string }) { return (<Link href={href} className="group rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30"><h3 className="text-base font-semibold text-foreground group-hover:text-gold transition-colors">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></Link>) }
