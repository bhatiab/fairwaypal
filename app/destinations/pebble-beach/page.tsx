import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

const GYG_PARTNER = process.env.NEXT_PUBLIC_GYG_PARTNER_ID || '9GLTCAY'
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'fairwaypal-20'

export const metadata: Metadata = {
  title: 'Pebble Beach Golf Trip Guide — FairwayPal',
  description:
    'Everything you need for a Pebble Beach golf trip: how to get tee times, real costs, the best Monterey Peninsula courses, partner activities in Carmel, and where to stay.',
  alternates: {
    canonical: 'https://fairwaypal.com/destinations/pebble-beach',
    languages: {
      'en-US': 'https://fairwaypal.com/destinations/pebble-beach',
      'x-default': 'https://fairwaypal.com/destinations/pebble-beach',
    },
  },
  openGraph: {
    title: 'Pebble Beach Golf Trip Guide — FairwayPal',
    description: 'How to get tee times, real costs, best courses on the Monterey Peninsula, and the Carmel partner plan.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://fairwaypal.com/destinations/pebble-beach' },
    { '@type': 'ListItem', position: 3, name: 'Pebble Beach', item: 'https://fairwaypal.com/destinations/pebble-beach' },
  ],
}

const destinationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Pebble Beach, California',
  description:
    'The most famous golf course in the United States, set on the Monterey Peninsula above the Pacific. A bucket-list destination with one of the most dramatic finishing holes in the world.',
  url: 'https://fairwaypal.com/destinations/pebble-beach',
  touristType: ['Golf', 'Bucket List', 'Couples'],
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
        text: 'A round at Pebble Beach Golf Links costs $595–625 per person (green fee + cart). Caddie is an additional $100–150. Spyglass Hill runs $285–325. Spanish Bay runs $280–320. Poppy Hills (off-resort) runs $90–130 and is the most accessible on the Peninsula. Staying at The Lodge or Casa Palmero as a resort guest gets priority tee times.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you get tee times at Pebble Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pebble Beach Golf Links tee times are not available on GolfNow. Book directly at pebblebeach.com/golf/reservations, or by calling the resort (800-654-9300). Resort guests can book 18 months in advance; outside guests can book 60 days out. The Lodge and Inn at Spanish Bay guests have full booking priority. Prime weekend morning tee times sell out quickly — set a calendar reminder for exactly 60 days before your trip.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to visit Pebble Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'May through October is the driest period with the most consistent weather. The Monterey Peninsula is famously cool and foggy even in summer — average July temperatures are 55–65°F. Morning fog often burns off by midday. Winter (December–February) brings rain and the AT&T Pro-Am (January/February), which closes the course to public play. Spring (March–May) offers fewer crowds and pleasant temperatures.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do non-golfers do near Pebble Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Carmel-by-the-Sea is 10 minutes from Pebble Beach and is one of the most charming small towns in California — boutique shopping, art galleries, Carmel Beach, and excellent restaurants. The Monterey Bay Aquarium (20 minutes) is world-class. The 17-Mile Drive is a scenic self-guided tour of the Peninsula. Big Sur is 30 miles south and offers dramatic coastal scenery and hiking. Wine tasting in Carmel Valley is 15 miles inland.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Pebble Beach worth the cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For serious golfers, yes — Pebble Beach Golf Links is the most scenic and historically significant course most people will ever play. The 18th hole along the Pacific is genuinely unforgettable. The cost ($595–625 per round) is high by any standard, but most groups who make the trip say it was worth it. The key is pairing it with more affordable courses at Poppy Hills ($90–130) and Spyglass Hill ($285–325) rather than trying to play Pebble every day.',
      },
    },
  ],
}

const OTHER_DESTINATIONS = [
  { name: 'Bandon Dunes', href: '/destinations/bandon-dunes', tagline: 'Wild Oregon coast links golf' },
  { name: 'Scotland', href: '/destinations/scotland', tagline: 'The birthplace of golf' },
  { name: 'Kiawah Island', href: '/destinations/kiawah-island', tagline: 'Ocean Course + Charleston' },
]

export default function PebbleBeachPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, destinationSchema, faqSchema]) }}
      />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        {/* Hero */}
        <p className="eyebrow">Destination Guide</p>
        <h1 className="mt-3 text-5xl font-display font-light italic leading-tight text-foreground sm:text-6xl">
          Pebble Beach, California
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          The most famous course in the United States. Eighteen holes along the Pacific, a finishing hole that has ended careers and made others. Pair it with Carmel-by-the-Sea for partners and Spyglass Hill for a second round — this is the Monterey Peninsula golf trip.
        </p>
        <p className="mt-2 text-sm text-ink-2">
          Best time to visit: <span className="text-gold">May — October</span> (driest, warmest; fog burns off by noon)
        </p>

        <div className="mt-12 space-y-16">
          {/* -------------------------------------------------------- */}
          {/*  Best Courses                                             */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-fairway-text">Best Courses</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              The Monterey Peninsula courses
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Tee times for Pebble Beach Golf Links are booked directly at pebblebeach.com — not GolfNow. Resort guests book first.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <CourseCard
                name="Pebble Beach Golf Links"
                detail="18 holes along the Pacific cliffs. Host of 6 US Opens, 3 AT&T Pro-Ams, the 2019 US Open. The 18th hole is the most iconic in American golf."
                price="$595–625/round"
                tier="Bucket list"
                link="https://www.pebblebeach.com/golf/reservations/"
              />
              <CourseCard
                name="Spyglass Hill Golf Course"
                detail="Robert Trent Jones Sr. Starts in the Del Monte Forest, finishes along the ocean. A harder round than Pebble — many golfers rate it higher for pure golf."
                price="$285–325/round"
                tier="Premium"
                link="https://www.pebblebeach.com/golf/reservations/"
              />
              <CourseCard
                name="Monterey Peninsula Country Club (Shore)"
                detail="Seth Raynor design. Private, but the Pebble Beach Company offers limited public access through resort packages. Worth pursuing if you can secure a spot."
                price="$300–375/round"
                tier="Premium"
                link="https://www.pebblebeach.com/golf/reservations/"
              />
              <CourseCard
                name="The Links at Spanish Bay"
                detail="Scottish links-style on the dunes north of the main resort. Bagpiper plays at sunset on the 18th. Windy, firm, playable for all skill levels."
                price="$280–320/round"
                tier="Premium"
                link="https://www.pebblebeach.com/golf/reservations/"
              />
              <CourseCard
                name="Poppy Hills Golf Course"
                detail="NCGA members&apos; course adjacent to the resort property. Best value on the Peninsula — good conditioning, wooded layout, no ocean but well worth the price."
                price="$90–130/round"
                tier="Mid-range"
                link="https://www.golfnow.com/course/poppy-hills-golf-course-1612"
              />
              <CourseCard
                name="Pasatiempo Golf Club — Santa Cruz"
                detail="Alister MacKenzie design. 45 minutes north of Pebble. Considered one of the top 50 courses in the US — a worth detour if adding a Santa Cruz day."
                price="$170–225/round"
                tier="Premium"
                link="https://www.golfnow.com/course/pasatiempo-golf-club-1608"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Partner Activities                                       */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-partner-text">Partner Activities</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What non-golfers do near Pebble Beach
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <PartnerCard
                name="Carmel-by-the-Sea"
                detail="10 minutes from the resort. One of California&apos;s most charming towns — boutique shops, art galleries, Carmel Beach. Full day of exploring without a car once parked."
                price="Free to explore"
                link={`https://www.getyourguide.com/carmel-by-the-sea-l3543/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Monterey Bay Aquarium"
                detail="World-class aquarium 20 minutes from Pebble. The open ocean exhibit and jellyfish displays are genuinely impressive. Book tickets in advance on weekends."
                price="$50–65/person"
                link={`https://www.getyourguide.com/monterey-l3522/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="17-Mile Drive"
                detail="Self-guided scenic drive through the Del Monte Forest and along the coast. Lone Cypress Tree, Stillwater Cove, Fanshell Overlook. $12.25 entry fee per car."
                price="$12 per car"
                link={`https://www.getyourguide.com/pebble-beach-l86791/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Carmel Valley Wine Tasting"
                detail="15 miles inland, Carmel Valley has 20+ tasting rooms. Mendo, Holman Ranch, Boekenoogen. Quieter and more relaxed than Napa, with excellent Pinot Noir and Chardonnay."
                price="$25–60/person"
                link={`https://www.getyourguide.com/carmel-by-the-sea-l3543/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Big Sur Coastal Drive"
                detail="30 miles south on CA-1. Bixby Bridge, McWay Falls, Point Lobos State Reserve. A half-day drive that is arguably the most scenic in California. No cell service."
                price="$10–15 park fees"
                link={`https://www.getyourguide.com/big-sur-l73899/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Sanctuary Beach Resort Spa"
                detail="Marina, 25 minutes north of Pebble. Smaller, quieter spa than the main resort options. Excellent treatments without the luxury hotel markup."
                price="$150–280/person"
                link={`https://www.getyourguide.com/monterey-l3522/?partner_id=${GYG_PARTNER}`}
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Hotels                                                   */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Where to Stay</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Hotels near the courses
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <HotelCard
                name="The Lodge at Pebble Beach"
                detail="On-property at the 18th hole. Priority tee times, ocean views, five restaurants. The benchmark Pebble Beach experience. Book 6+ months ahead."
                price="$900–1,800/night"
                link="https://www.expedia.com/Pebble-Beach-Hotels.d502892.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Inn at Spanish Bay"
                detail="On-property at Links at Spanish Bay. Full resort access, slightly lower rates than The Lodge, excellent dining. Bagpiper at sunset on the 18th."
                price="$600–1,200/night"
                link="https://www.expedia.com/Pebble-Beach-Hotels.d502892.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Carmel Valley Ranch"
                detail="15 miles inland. Golf on-property (Pete Dye design), full spa, quieter than the oceanside properties. Good base for groups mixing Pebble with Carmel Valley wine."
                price="$400–800/night"
                link="https://www.expedia.com/Carmel-Valley-Hotels.d6082466.Travel-Guide-Hotels"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Packing Guide                                            */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Packing Guide</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What to bring to Pebble Beach
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <PackingItem name="Waterproof Golf Shoes" tag={AMAZON_TAG} />
              <PackingItem name="Windproof Golf Jacket" tag={AMAZON_TAG} />
              <PackingItem name="Rangefinder" tag={AMAZON_TAG} />
              <PackingItem name="Golf Travel Bag" tag={AMAZON_TAG} />
              <PackingItem name="Extra Golf Balls" tag={AMAZON_TAG} />
              <PackingItem name="Layering Base Layer" tag={AMAZON_TAG} />
              <PackingItem name="Crossbody Bag" tag={AMAZON_TAG} />
              <PackingItem name="Power Bank" tag={AMAZON_TAG} />
            </div>
            <p className="mt-4 text-xs text-ink-muted">
              Links may earn FairwayPal a commission at no extra cost to you.{' '}
              <Link href="/affiliate-disclosure" className="text-gold hover:text-gold/80">
                Affiliate disclosure
              </Link>
            </p>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  FAQ                                                      */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-gold">Frequently Asked Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Pebble Beach golf trip FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="How much does a round at Pebble Beach cost?"
                answer="A round at Pebble Beach Golf Links costs $595–625 per person (green fee + cart). Caddie is an additional $100–150. Spyglass Hill runs $285–325. Spanish Bay runs $280–320. Poppy Hills (off-resort) runs $90–130 and is the most accessible on the Peninsula."
              />
              <FaqItem
                question="How do you get tee times at Pebble Beach?"
                answer="Pebble Beach tee times are not available on GolfNow. Book directly at pebblebeach.com or by calling 800-654-9300. Resort guests book first (18 months in advance); outside guests book 60 days out. Prime weekend morning times sell out quickly — set a calendar reminder for exactly 60 days before your trip."
              />
              <FaqItem
                question="What is the best time of year to visit?"
                answer="May through October is the driest period. The Monterey Peninsula is famously cool and foggy — average July temperatures are 55–65°F. Morning fog often burns off by noon. Winter brings rain and the AT&T Pro-Am (January/February), which closes the course to public play."
              />
              <FaqItem
                question="What do non-golfers do near Pebble Beach?"
                answer="Carmel-by-the-Sea (10 min) is one of California's most charming towns. Monterey Bay Aquarium (20 min) is world-class. The 17-Mile Drive is a scenic self-guided coastal tour. Big Sur is 30 miles south with dramatic scenery. Carmel Valley wine tasting is 15 miles inland."
              />
              <FaqItem
                question="Is Pebble Beach worth the cost?"
                answer="For serious golfers, yes. Pebble Beach Golf Links is the most scenic and historically significant course most people will ever play. The 18th hole is genuinely unforgettable. Pair it with Poppy Hills ($90–130) and Spyglass Hill ($285–325) rather than playing Pebble every day — that's the right budget approach."
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  CTA                                                      */}
          {/* -------------------------------------------------------- */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Plan your Pebble Beach trip
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              5 questions, dual itinerary for golfers and partners, one shareable link.
            </p>
            <div className="mt-6 flex justify-center">
              <Link className="primary-link" href="/plan">
                Start Planning
              </Link>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Further Reading                                          */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">From the blog</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Further reading
            </h2>
            <div className="mt-6 space-y-3">
              {[
                { href: '/blog/pebble-beach-golf-trip', title: 'Pebble Beach Golf Trip Planning Guide', desc: 'How to get tee times, what it really costs, and the full Monterey Peninsula itinerary.' },
                { href: '/blog/pebble-beach-for-non-golfers', title: 'Pebble Beach for Non-Golfers: A Partner\'s Guide', desc: 'The full partner-side guide. Carmel, the Aquarium, 17-Mile Drive, Big Sur, the spa.' },
                { href: '/blog/bandon-dunes-vs-pebble-beach-golf-trip', title: 'Bandon Dunes vs Pebble Beach: Which Should You Pick?', desc: 'A friendly head-to-head with the other great West Coast golf trip.' },
                { href: '/blog/golf-trip-budget', title: 'Golf Trip Budget Breakdown', desc: 'Real cost breakdown by destination and group size — including Pebble Beach.' },
                { href: '/blog/best-bachelor-party-golf-destinations', title: 'Best Bachelor Party Golf Destinations', desc: 'How Pebble Beach compares to the other top US golf destinations.' },
                { href: '/blog/golf-trip-packing-list', title: 'The Golf Trip Packing List', desc: 'What to bring for a coastal California golf trip — the windproof layer is non-negotiable.' },
              ].map(({ href, title, desc }) => (
                <Link key={href} href={href} className="block rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30">
                  <p className="text-base font-semibold text-foreground">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Other Destinations                                       */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Not sure about Pebble Beach?</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Explore other destinations
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {OTHER_DESTINATIONS.map((dest) => (
                <Link
                  key={dest.href}
                  href={dest.href}
                  className="rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30"
                >
                  <h3 className="text-base font-semibold text-foreground">{dest.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{dest.tagline}</p>
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

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function CourseCard({
  name, detail, price, tier, link,
}: {
  name: string; detail: string; price: string; tier: string; link: string
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl border border-primary/20 bg-card/60 p-5 transition-colors hover:border-primary/40"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-foreground">{name}</h3>
        <span className="shrink-0 rounded-sm border border-primary/30 bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-primary">
          {tier}
        </span>
      </div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
      <p className="mt-3 text-sm font-medium text-primary">{price}</p>
    </a>
  )
}

function PartnerCard({
  name, detail, price, link,
}: {
  name: string; detail: string; price: string; link: string
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl border border-partner/20 bg-card/60 p-5 transition-colors hover:border-partner/40"
    >
      <h3 className="text-base font-semibold text-foreground">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
      <p className="mt-3 text-sm font-medium text-partner-text">{price}</p>
    </a>
  )
}

function HotelCard({
  name, detail, price, link,
}: {
  name: string; detail: string; price: string; link: string
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30"
    >
      <h3 className="text-base font-semibold text-foreground">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
      <p className="mt-3 text-sm font-medium text-gold">{price}</p>
    </a>
  )
}

function PackingItem({ name, tag }: { name: string; tag: string }) {
  const searchQuery = encodeURIComponent(`${name} golf travel`)
  return (
    <a
      href={`https://www.amazon.com/s?k=${searchQuery}&tag=${tag}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-lg border border-border bg-bg-3 p-3 text-sm text-ink transition-colors hover:border-gold/30 hover:text-gold"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-bg-2 text-xs text-ink-muted">
        +
      </span>
      {name}
    </a>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-border bg-card/60">
      <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-semibold text-foreground">
        {question}
        <span className="ml-2 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted-foreground">
        {answer}
      </div>
    </details>
  )
}
