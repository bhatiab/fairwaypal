/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const GYG_PARTNER = process.env.NEXT_PUBLIC_GYG_PARTNER_ID || '9GLTCAY'
const LAST_UPDATED = 'May 5, 2026'

export const metadata: Metadata = {
  title: 'Pebble Beach Golf Trip Planning Guide — FairwayPal',
  description:
    'How to actually plan a Pebble Beach golf trip: getting tee times (it\'s not on GolfNow), real costs ($500–600/round), the full Monterey Peninsula itinerary, and what partners do in Carmel.',
  alternates: { canonical: 'https://fairwaypal.com/blog/pebble-beach-golf-trip' },
  openGraph: {
    title: 'Pebble Beach Golf Trip Planning Guide',
    description:
      'How to get tee times, what it really costs, the full multi-course Monterey Peninsula itinerary, and the partner plan for Carmel and Big Sur.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pebble Beach Golf Trip Planning Guide',
  description:
    'How to actually plan a Pebble Beach golf trip: getting tee times, real costs, the full Monterey Peninsula itinerary, and the partner plan.',
  url: 'https://fairwaypal.com/blog/pebble-beach-golf-trip',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://fairwaypal.com/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Pebble Beach Golf Trip',
      item: 'https://fairwaypal.com/blog/pebble-beach-golf-trip',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a round at Pebble Beach cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A round at Pebble Beach Golf Links costs $595–625 per person (green fee + cart). Caddie is an additional $100–150. Spyglass Hill runs $285–325. Spanish Bay runs $280–320. Poppy Hills (the NCGA course, off-resort) runs $90–130 and is the most accessible option on the Peninsula. Staying at The Lodge or Casa Palmero grants guaranteed tee times at a slight premium for hotel guests.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you get a tee time at Pebble Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pebble Beach Golf Links is not on GolfNow. Book directly at pebblebeach.com. Hotel guests at Pebble Beach Resorts can book tee times as part of their stay package. Non-hotel guests can book public tee times up to 18 months in advance. Weekday mornings have better availability than weekends. Call the pro shop directly for last-minute availability — cancellations do happen.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to visit Pebble Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'April–October is the best window. June–August has the most reliable weather (temperatures 65–75°F, low wind). The AT&T Pro-Am in February draws large crowds and raises rates significantly. Summer mornings can have coastal fog that burns off by 10am — not a problem for golf but check conditions. Late October and early November offer reduced rates with still-playable conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do non-golfers do at Pebble Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Monterey Peninsula offers an outstanding partner itinerary. Carmel-by-the-Sea is a 10-minute drive — boutique shops, galleries, wine bars, and beach access. 17 Mile Drive is a self-guided scenic drive through the resort. Point Lobos State Reserve offers world-class coastal hiking and sea otter spotting. The Monterey Bay Aquarium is genuinely excellent. Big Sur is 30 minutes south for dramatic coastline drives. Spa at The Lodge on-site is excellent.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do you need for a Pebble Beach golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three nights is the minimum to play two rounds (Pebble Beach + one other). Four nights is better — you can add Spyglass Hill and have a recovery day. Five nights allows a three-round itinerary: Pebble, Spyglass, and Spanish Bay or Poppy Hills. Most groups do three nights with two rounds. Flying in the evening before and out the afternoon after the final round is the standard format.',
      },
    },
  ],
}

const COURSES = [
  { name: 'Pebble Beach Golf Links', green: '$595–625', notes: 'The one. 18th hole along the Pacific is one of golf\'s great closing sequences. Book directly, not through GolfNow.' },
  { name: 'Spyglass Hill', green: '$285–325', notes: 'Harder than Pebble, less famous, equally rewarding. Tree-lined front nine, links-style back nine.' },
  { name: 'Monterey Peninsula CC (Shore)', green: '$285–350', notes: 'Member club with limited public access. Worth pursuing — one of the best courses on the Peninsula.' },
  { name: 'Spanish Bay', green: '$280–320', notes: 'Links-style, coastal, fun. More relaxed than Pebble or Spyglass. Bagpipers at sunset on 18.' },
  { name: 'Poppy Hills', green: '$90–130', notes: 'The affordable Peninsula option. NCGA course, no resort pricing. Good golf, no ocean views.' },
]

export default function PebbleBeachGolfTripPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }}
      />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Pebble Beach Golf Trip: The Planning Guide They Don't Write Online
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 5, 2026</span>
          <span>·</span>
          <span>8 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Most Pebble Beach guides tell you the 18th hole is beautiful. You know that. What you need to know is how to actually get a tee time, what the real all-in cost is, and how to build the full 3-night Monterey Peninsula itinerary around it.
        </p>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Getting tee times */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              First: how to actually get tee times
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pebble Beach Golf Links is not on GolfNow. It's not on any third-party booking platform. You book directly at pebblebeach.com or by calling the pro shop.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Public tee times open 18 months in advance. Weekend morning slots go fast — particularly May–August. Weekday mornings in shoulder season (April, September–October) are significantly easier to secure.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The most reliable option: stay at The Lodge at Pebble Beach or Casa Palmero. Hotel guests get guaranteed tee time access as part of their package. The premium over non-hotel rates is real, but for a once-in-a-career trip, it eliminates the booking anxiety.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              If you're not staying on-resort: book the moment your planning window opens. Set a calendar reminder for 18 months before your intended travel date and check pebblebeach.com that morning.
            </p>
          </section>

          {/* Cost breakdown */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              What it actually costs
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              All-in cost for a 3-night trip for 4 golfers playing 2 rounds (Pebble + Spyglass):
            </p>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-left text-xs uppercase tracking-[0.12em] text-muted-foreground">Cost item</th>
                    <th className="p-4 text-left text-xs uppercase tracking-[0.12em] text-muted-foreground">Per person</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { item: 'Pebble Beach green fee + cart', cost: '$595–625' },
                    { item: 'Spyglass Hill green fee + cart', cost: '$285–325' },
                    { item: 'Accommodation (3 nights, split 4 ways)', cost: '$400–900' },
                    { item: 'Flights (varies widely)', cost: '$200–600' },
                    { item: 'Food and drink (3 days)', cost: '$250–400' },
                    { item: 'Transport/car hire', cost: '$100–150' },
                    { item: 'Total estimate', cost: '$1,830–3,000' },
                  ].map((row) => (
                    <tr key={row.item} className={row.item === 'Total estimate' ? 'bg-gold/5' : ''}>
                      <td className={`p-4 ${row.item === 'Total estimate' ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>{row.item}</td>
                      <td className={`p-4 ${row.item === 'Total estimate' ? 'font-semibold text-gold' : 'text-gold'}`}>{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              The green fee at Pebble is the floor. Caddies ($100–150 each) are optional but recommended for a first visit — they know the breaks. The Lodge at Pebble Beach hotel rooms run $800–1,800/night. Off-resort accommodation in Carmel or Monterey runs $150–400/night and cuts the total significantly.
            </p>
          </section>

          {/* The courses */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The courses on the Monterey Peninsula
            </h2>
            <div className="mt-6 space-y-3">
              {COURSES.map((c) => (
                <div key={c.name} className="rounded-xl border border-border bg-card/60 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-base font-semibold text-foreground">{c.name}</p>
                    <span className="shrink-0 text-sm font-medium text-gold">{c.green}</span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{c.notes}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sample itinerary */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              A 3-night Monterey Peninsula itinerary
            </h2>
            <div className="mt-6 space-y-6">
              {[
                {
                  day: 'Day 1 (Thursday evening)',
                  golf: 'Arrive, check in. Dinner at Carmel-by-the-Sea — Casanova or Aubergine for a special occasion.',
                  partner: 'Same — arrive together, explore Carmel village before dinner.',
                },
                {
                  day: 'Day 2 (Friday)',
                  golf: '7:30am tee time at Spyglass Hill. Finish by 1pm. Afternoon: 17 Mile Drive in the car, or rest at the resort. Group dinner.',
                  partner: 'Morning: Carmel shops, galleries, and the beach at Carmel City Beach. Afternoon: 17 Mile Drive together. Evening: group dinner.',
                },
                {
                  day: 'Day 3 (Saturday)',
                  golf: '7:30am tee time at Pebble Beach Golf Links. Finish by 1:30pm. Afternoon: decompress, optional range session, group drinks at The Tap Room.',
                  partner: 'Morning: Point Lobos State Reserve (sea otters, coastal walking). Afternoon: Monterey Bay Aquarium or spa. Meet for drinks.',
                },
                {
                  day: 'Day 4 (Sunday)',
                  golf: 'Optional: early twilight round at Spanish Bay or Poppy Hills. Fly home afternoon/evening.',
                  partner: 'Optional: Big Sur drive (1 hour south — dramatic coastline). Or brunch and a slow morning before departure.',
                },
              ].map((day) => (
                <div key={day.day} className="rounded-xl border border-border bg-card/60 overflow-hidden">
                  <div className="border-b border-border bg-bg-3 px-5 py-3">
                    <p className="text-sm font-semibold text-foreground">{day.day}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                    <div className="p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.1em] text-fairway-text mb-2">Golf</p>
                      <p className="text-sm leading-7 text-muted-foreground">{day.golf}</p>
                    </div>
                    <div className="p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.1em] text-partner-text mb-2">Partners</p>
                      <p className="text-sm leading-7 text-muted-foreground">{day.partner}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Partner activities */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Partner activities: what's actually worth booking
            </h2>
            <div className="mt-6 space-y-3">
              {[
                { name: 'Point Lobos State Reserve', detail: 'Free entry. 30-minute drive from Pebble. One of the most beautiful coastal parks in California — sea otters, sea lions, tide pools, cypress trees. Half-day easily.' },
                { name: 'Monterey Bay Aquarium', detail: 'World-class. The kelp forest exhibit is genuinely impressive. Book tickets in advance — it sells out on weekends.' },
                { name: 'Big Sur Scenic Drive', detail: '30 miles south of Monterey. Bixby Creek Bridge, McWay Falls, Pfeiffer Beach. Full half-day. Partners who drive it always say it was a highlight.' },
                { name: 'Carmel-by-the-Sea', detail: 'The town is a partner itinerary in itself — galleries, wine bars, boutique shops, and Carmel City Beach. No parking meters. Browsable for hours.' },
                { name: '17 Mile Drive', detail: 'The self-guided drive through the resort past Cypress Point, Lone Cypress, and Pebble Beach is a genuinely good afternoon. $11.25/car entry fee.' },
              ].map((a) => (
                <a
                  key={a.name}
                  href={`https://www.getyourguide.com/monterey-l2752/?partner_id=${GYG_PARTNER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-partner/20 bg-card/60 p-5 transition-colors hover:border-partner/40"
                >
                  <p className="text-base font-semibold text-foreground">{a.name}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{a.detail}</p>
                </a>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Common questions
            </h2>
            <div className="mt-6 space-y-3">
              {faqSchema.mainEntity.map((q) => (
                <details key={q.name} className="group rounded-xl border border-border bg-card/60">
                  <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-semibold text-foreground">
                    {q.name}
                    <span className="ml-2 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted-foreground">
                    {q.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8">
            <h2 className="text-2xl font-display font-light text-foreground">
              Planning a Pebble Beach trip with the group
            </h2>
            <p className="mt-3 text-base leading-8 text-muted-foreground">
              FairwayPal generates a full Monterey Peninsula itinerary — golf schedule, partner activities, shared dinners — and shares it as one link for everyone to vote on. The tee times are yours to book directly with Pebble Beach Resorts.
            </p>
            <div className="mt-6">
              <Link className="primary-link" href="/plan">
                Start Planning — Free
              </Link>
            </div>
          </section>

          {/* Related */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Related guides
            </h2>
            <div className="mt-6 space-y-3">
              {[
                { href: '/blog/best-bachelor-party-golf-destinations', title: 'Best Bachelor Party Golf Destinations', desc: 'How Pebble Beach compares against Scottsdale, Bandon Dunes, and the rest.' },
                { href: '/destinations/bandon-dunes', title: 'Bandon Dunes Destination Guide', desc: 'Oregon coast bucket-list alternative to Pebble — more affordable, equally dramatic.' },
                { href: '/destinations/scotland', title: 'Scotland Destination Guide', desc: 'The international bucket-list equivalent — St Andrews, Carnoustie, Royal Dornoch.' },
                { href: '/blog/golf-trip-budget', title: 'Golf Trip Budget Breakdown', desc: 'Full cost comparison across all major US and international golf destinations.' },
              ].map(({ href, title, desc }) => (
                <Link key={href} href={href} className="block rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30">
                  <p className="text-base font-semibold text-foreground">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}
