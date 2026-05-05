import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

const GYG_PARTNER = process.env.NEXT_PUBLIC_GYG_PARTNER_ID || '9GLTCAY'
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'fairwaypal-20'

export const metadata: Metadata = {
  title: 'Florida Golf Trip Guide — Streamsong, TPC Sawgrass & More — FairwayPal',
  description:
    'The best golf trip destinations in Florida: Streamsong Resort, TPC Sawgrass, Innisbrook, and World Woods. Real costs, partner activities, and where to stay.',
  alternates: {
    canonical: 'https://fairwaypal.com/destinations/florida-golf',
    languages: {
      'en-US': 'https://fairwaypal.com/destinations/florida-golf',
      'x-default': 'https://fairwaypal.com/destinations/florida-golf',
    },
  },
  openGraph: {
    title: 'Florida Golf Trip Guide — FairwayPal',
    description: 'Streamsong, TPC Sawgrass, Innisbrook, World Woods — the honest guide to a Florida golf trip with real costs and partner activities.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://fairwaypal.com/destinations/florida-golf' },
    { '@type': 'ListItem', position: 3, name: 'Florida Golf', item: 'https://fairwaypal.com/destinations/florida-golf' },
  ],
}

const destinationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Florida, United States',
  description:
    'Florida is the closest thing the US has to a year-round golf destination. Streamsong Resort delivers world-class courses in the middle of phosphate country. TPC Sawgrass is an hour from Jacksonville and home to The Players Championship.',
  url: 'https://fairwaypal.com/destinations/florida-golf',
  touristType: ['Golf', 'Groups', 'Winter Escape'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best golf destination in Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Streamsong Resort is the standout golf destination in Florida for a dedicated golf trip — three world-class courses (Red, Blue, Black) on a single property with minimal filler. TPC Sawgrass (Ponte Vedra Beach) is the most famous course in Florida and hosts The Players Championship. Innisbrook Resort (Palm Harbor) offers four courses including the PGA Tour\'s Copperhead course. World Woods (Brooksville) is the best value in the state with two Tom Fazio designs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Florida golf trip cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Florida golf trip costs $900–1,800 per person for a 3-night weekend depending on the destination. Streamsong runs $175–350 per round depending on course and season, with resort accommodation from $250–450/night. TPC Sawgrass Stadium Course runs $250–400 per round. World Woods is the best value at $80–130 per round for Tom Fazio designs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for a Florida golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'October through April is peak golf season in Florida. The state is notably pleasant during winter months when northern states are frozen — temperatures of 60–75°F and low humidity make for ideal conditions. Summer (June–September) is hot, humid, and prone to afternoon thunderstorms that stop play. Green fees are lower in summer but the experience is inferior.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do non-golfers do on a Florida golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depends heavily on location. Near Streamsong (Tampa area): Ybor City, Busch Gardens, the Gulf Coast beaches are 90 minutes away. Near TPC Sawgrass (Ponte Vedra/Jacksonville): St. Augustine historic district (45 minutes), Amelia Island beaches, Jacksonville Beach. Orlando-based trips can combine golf with theme parks, though this changes the vibe significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Florida compare to Scottsdale and Myrtle Beach for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Florida wins on winter weather availability and east coast accessibility. Scottsdale has more course variety and a stronger partner scene in its urban setting. Myrtle Beach beats Florida on pure value — 90+ courses with lower green fees. Florida\'s advantage is Streamsong Resort specifically — for a golf-first group that wants world-class course design without the Pebble Beach price tag, there is nothing else quite like it.',
      },
    },
  ],
}

const OTHER_DESTINATIONS = [
  { name: 'Myrtle Beach', href: '/destinations/myrtle-beach', tagline: 'Best value, 90+ courses' },
  { name: 'Scottsdale', href: '/destinations/scottsdale', tagline: 'Year-round sun, 200+ courses' },
  { name: 'Pinehurst', href: '/destinations/pinehurst', tagline: 'Cradle of American golf' },
]

export default function FloridaGolfPage() {
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
          Florida Golf Trip Guide
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          Florida is the closest thing the US has to a year-round golf destination. Streamsong Resort delivers three world-class designs in an unlikely setting — former phosphate mining land in central Florida. TPC Sawgrass is home to The Players Championship. Innisbrook has the Copperhead Course. World Woods has two Tom Fazio layouts for less than $130/round.
        </p>
        <p className="mt-2 text-sm text-ink-2">
          Best time to visit: <span className="text-gold">October — April</span> (ideal winter escape from northern cold)
        </p>

        <div className="mt-12 space-y-16">
          {/* -------------------------------------------------------- */}
          {/*  Best Courses                                             */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-fairway-text">Best Courses</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Top picks across Florida
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <CourseCard
                name="Streamsong Black"
                detail="Gil Hanse design. The newest and most dramatic of the three Streamsong courses. Links-style on reclaimed phosphate land — rumpled fairways, massive bunkers, no trees."
                price="$225–350/round"
                tier="Premium"
                link="https://www.golfnow.com/course/streamsong-resort-black-32849"
              />
              <CourseCard
                name="Streamsong Red"
                detail="Bill Coore &amp; Ben Crenshaw. The most natural of the three courses — wide fairways, imaginative green complexes, subtle. Many golfers&apos; favourite of the three."
                price="$175–325/round"
                tier="Premium"
                link="https://www.golfnow.com/course/streamsong-resort-red-32847"
              />
              <CourseCard
                name="TPC Sawgrass — Stadium Course"
                detail="Pete Dye. Home of The Players Championship. The famous island green 17th is the most played par-3 in the world. Ponte Vedra Beach, near Jacksonville."
                price="$250–400/round"
                tier="Bucket list"
                link="https://www.golfnow.com/course/tpc-sawgrass-stadium-course-1808"
              />
              <CourseCard
                name="Innisbrook — Copperhead Course"
                detail="Host of the Valspar Championship PGA Tour event. Demanding, tree-lined, well-conditioned. Palm Harbor, near Tampa and Clearwater."
                price="$150–280/round"
                tier="Premium"
                link="https://www.golfnow.com/course/innisbrook-resort-copperhead-course-1650"
              />
              <CourseCard
                name="Streamsong Blue"
                detail="Tom Doak. The shortest and quirkiest of the Streamsong trio — imaginative routing, quirky holes, more fun than the other two on a second visit."
                price="$175–300/round"
                tier="Premium"
                link="https://www.golfnow.com/course/streamsong-resort-blue-32848"
              />
              <CourseCard
                name="World Woods — Pine Barrens"
                detail="Tom Fazio. Best value in Florida — consistently ranked one of the top 100 courses in the US at under $130/round. Brooksville, 45 min north of Tampa."
                price="$80–130/round"
                tier="Mid-range"
                link="https://www.golfnow.com/course/world-woods-golf-club-pine-barrens-1688"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Partner Activities                                       */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-partner-text">Partner Activities</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What non-golfers do in Florida
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <PartnerCard
                name="St. Augustine Historic District"
                detail="45 minutes from TPC Sawgrass. The oldest city in the US — Castillo de San Marcos, Flagler College, cobblestone streets. A full day of walking history with excellent seafood restaurants."
                price="Free to explore"
                link={`https://www.getyourguide.com/st-augustine-l100246/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Tampa Riverwalk &amp; Ybor City"
                detail="Near Streamsong. Tampa&apos;s Riverwalk is walkable and attractive; Ybor City is the historic Cuban quarter with unique nightlife. Cigar rolling demonstrations and classic Cuban sandwiches."
                price="Free to explore"
                link={`https://www.getyourguide.com/tampa-l100247/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Gulf Coast Beaches"
                detail="Clearwater Beach and St. Pete Beach are 90 minutes from Streamsong. Consistently ranked among the best beaches in the US — fine white sand, calm Gulf water, excellent sunsets."
                price="Free"
                link={`https://www.getyourguide.com/clearwater-beach-l100251/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Everglades Airboat Tour"
                detail="South Florida option if combining with a Miami start or end. Airboat rides through the sawgrass marsh are genuinely unique — alligators up close, dramatic flat landscapes."
                price="$40–75/person"
                link={`https://www.getyourguide.com/everglades-national-park-l100252/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Amelia Island"
                detail="An hour north of TPC Sawgrass. Quiet, upscale barrier island with excellent beaches, the Ritz-Carlton spa, and a charming historic downtown. Good day trip or overnight add-on."
                price="Free to explore"
                link={`https://www.getyourguide.com/amelia-island-l100253/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Busch Gardens Tampa"
                detail="Near Streamsong. For groups with partners who want a full entertainment day rather than historical or nature experiences. Not for everyone — but reliably popular when the group includes someone who needs the option."
                price="$80–130/person"
                link={`https://www.getyourguide.com/tampa-l100247/?partner_id=${GYG_PARTNER}`}
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Hotels                                                   */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Where to Stay</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Hotels near the best courses
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <HotelCard
                name="Streamsong Resort"
                detail="On-property at all three Streamsong courses. The only logical base for a Streamsong trip. Lodge-style rooms, excellent restaurant, fire pit. Remote — no distractions, pure golf focus."
                price="$250–450/night"
                link="https://www.expedia.com/Streamsong-Hotels.d6314867.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Ponte Vedra Inn &amp; Club"
                detail="Near TPC Sawgrass. Full resort with beach access, spa, and its own courses. Historic property with a loyal following. Golf packages available."
                price="$300–600/night"
                link="https://www.expedia.com/Ponte-Vedra-Beach-Hotels.d6085459.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Innisbrook Resort"
                detail="On-property at four courses including Copperhead. Self-contained resort with pools, spa, multiple restaurants. Good for groups that want everything in one place without driving."
                price="$200–400/night"
                link="https://www.expedia.com/Palm-Harbor-Hotels.d6136369.Travel-Guide-Hotels"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Packing Guide                                            */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Packing Guide</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What to bring to Florida
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <PackingItem name="Golf Travel Bag" tag={AMAZON_TAG} />
              <PackingItem name="Sun Protection SPF 50" tag={AMAZON_TAG} />
              <PackingItem name="Cooling Towel" tag={AMAZON_TAG} />
              <PackingItem name="Rangefinder" tag={AMAZON_TAG} />
              <PackingItem name="Golf Shoe Bag" tag={AMAZON_TAG} />
              <PackingItem name="Insect Repellent" tag={AMAZON_TAG} />
              <PackingItem name="Power Bank" tag={AMAZON_TAG} />
              <PackingItem name="Crossbody Bag" tag={AMAZON_TAG} />
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
              Florida golf trip FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="What is the best golf destination in Florida?"
                answer="Streamsong Resort is the standout for a dedicated golf trip — three world-class courses (Red, Blue, Black) on one property. TPC Sawgrass is the most famous course in Florida. Innisbrook (Copperhead) and World Woods (Pine Barrens) are excellent value options."
              />
              <FaqItem
                question="How much does a Florida golf trip cost?"
                answer="A Florida golf trip costs $900–1,800 per person for a 3-night weekend. Streamsong runs $175–350 per round; TPC Sawgrass runs $250–400. World Woods is the best value at $80–130 for a Tom Fazio design. Resort accommodation adds $250–450/night at Streamsong."
              />
              <FaqItem
                question="What is the best time of year for a Florida golf trip?"
                answer="October through April. Florida is warm when the north is frozen — 60–75°F and low humidity. Summer is hot, humid, and has afternoon thunderstorms that frequently stop play. Green fees are lower in summer but the experience is inferior."
              />
              <FaqItem
                question="What do non-golfers do on a Florida golf trip?"
                answer="Near Streamsong (Tampa area): Gulf Coast beaches (90 min), Ybor City, Busch Gardens. Near TPC Sawgrass: St. Augustine historic district (45 min), Amelia Island beaches, Jacksonville Beach. Florida partner activities vary significantly by location — choose your base carefully."
              />
              <FaqItem
                question="How does Florida compare to Scottsdale and Myrtle Beach?"
                answer="Florida wins on winter availability and East Coast accessibility. Scottsdale has more course variety and a stronger partner scene. Myrtle Beach beats Florida on pure value — 90+ courses at lower green fees. Florida's advantage is Streamsong specifically — world-class course design without the Pebble Beach price tag."
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  CTA                                                      */}
          {/* -------------------------------------------------------- */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Plan your Florida golf trip
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
                { href: '/blog/golf-trip-budget', title: 'Golf Trip Budget Breakdown', desc: 'How Florida compares to Scottsdale and Myrtle Beach on total trip cost.' },
                { href: '/blog/best-bachelor-party-golf-destinations', title: 'Best Bachelor Party Golf Destinations', desc: 'Is Florida the right pick for a bachelor trip? Compared to the other top US destinations.' },
                { href: '/blog/how-to-plan-a-golf-trip', title: 'How to Plan a Golf Trip', desc: 'Step-by-step planning guide — works for Florida as well as every other destination.' },
                { href: '/blog/golf-trip-with-non-golfers', title: 'Planning a Golf Trip With Non-Golfers', desc: 'Florida partner options by region — Gulf Coast, Jacksonville, Tampa, and Everglades.' },
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
            <p className="eyebrow">Not sure about Florida?</p>
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
