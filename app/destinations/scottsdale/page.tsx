import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

const GYG_PARTNER = process.env.NEXT_PUBLIC_GYG_PARTNER_ID || '9GLTCAY'
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'fairwaypal-20'

export const metadata: Metadata = {
  title: 'Scottsdale Golf Trip Guide — FairwayPal',
  description:
    'Everything you need for a Scottsdale golf trip: best courses, partner activities, hotels near the courses, and a packing guide. Plan it in 5 minutes with FairwayPal.',
  alternates: { canonical: 'https://fairwaypal.com/destinations/scottsdale' },
  openGraph: {
    title: 'Scottsdale Golf Trip Guide — FairwayPal',
    description: 'Best courses, partner activities, hotels, and packing guide for your Scottsdale golf weekend.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://fairwaypal.com/destinations/scottsdale' },
    { '@type': 'ListItem', position: 3, name: 'Scottsdale', item: 'https://fairwaypal.com/destinations/scottsdale' },
  ],
}

const destinationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Scottsdale, Arizona',
  description:
    '200+ courses within an hour, year-round sun, and a partner scene that goes well beyond sitting at the bar. Scottsdale is the default bachelor golf weekend for a reason.',
  url: 'https://fairwaypal.com/destinations/scottsdale',
  touristType: ['Golf', 'Couples', 'Groups'],
}

const OTHER_DESTINATIONS = [
  { name: 'Myrtle Beach', href: '/destinations/myrtle-beach', tagline: '100+ courses, boardwalk vibes' },
  { name: 'Bandon Dunes', href: '/destinations/bandon-dunes', tagline: 'Links golf pilgrimage' },
  { name: 'Pinehurst', href: '/destinations/pinehurst', tagline: 'Cradle of American golf' },
]

export default function ScottsdalePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, destinationSchema]) }}
      />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        {/* Hero */}
        <p className="eyebrow">Destination Guide</p>
        <h1 className="mt-3 text-5xl font-display font-light italic leading-tight text-foreground sm:text-6xl">
          Scottsdale, Arizona
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          200+ courses within an hour, year-round sun, and a partner scene that goes well beyond sitting at the bar. Scottsdale is the default bachelor golf weekend for a reason.
        </p>
        <p className="mt-2 text-sm text-ink-2">
          Best time to visit: <span className="text-gold">October — April</span> (avoid summer heat)
        </p>

        <div className="mt-12 space-y-16">
          {/* -------------------------------------------------------- */}
          {/*  Best Courses                                             */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-fairway-text">Best Courses</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Top picks for groups
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <CourseCard
                name="Troon North — Monument"
                detail="Desert target golf at its best. Dramatic elevation, pristine conditions."
                price="$185–250/round"
                tier="Premium"
                link="https://www.golfnow.com/course/troon-north-golf-club-monument-1478"
              />
              <CourseCard
                name="TPC Scottsdale — Stadium"
                detail="Home of the Waste Management Open. The famous 16th hole par-3."
                price="$200–350/round"
                tier="Bucket list"
                link="https://www.golfnow.com/course/tpc-scottsdale-stadium-course-12850"
              />
              <CourseCard
                name="We-Ko-Pa — Saguaro"
                detail="Coore & Crenshaw design on Salt River Pima-Maricopa land. Wide fairways, stunning views."
                price="$150–220/round"
                tier="Premium"
                link="https://www.golfnow.com/course/we-ko-pa-golf-club-saguaro-12865"
              />
              <CourseCard
                name="Grayhawk — Raptor"
                detail="Tournament-quality with a great 19th hole scene. Ideal for the 'Full Send' vibe."
                price="$130–200/round"
                tier="Mid-range"
                link="https://www.golfnow.com/course/grayhawk-golf-club-raptor-1430"
              />
              <CourseCard
                name="Papago Golf Course"
                detail="Best municipal in the valley. Real challenge, budget-friendly, central location."
                price="$45–65/round"
                tier="Budget"
                link="https://www.golfnow.com/course/papago-golf-course-1492"
              />
              <CourseCard
                name="Quintero Golf Club"
                detail="Rees Jones design in the Hieroglyphic Mountains. Worth the 45-min drive."
                price="$100–180/round"
                tier="Mid-range"
                link="https://www.golfnow.com/course/quintero-golf-club-7618"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Partner Activities                                       */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-partner-text">Partner Activities</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What non-golfers do in Scottsdale
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <PartnerCard
                name="Joya Spa at Omni Scottsdale"
                detail="Full-day spa with desert-inspired treatments. Book the half-day package."
                price="$150–300/person"
                link={`https://www.getyourguide.com/scottsdale-l961/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Old Town Scottsdale Walking Tour"
                detail="Art galleries, boutiques, and the Sugar Bowl ice cream stop. Self-guided or guided."
                price="$25–50/person"
                link={`https://www.getyourguide.com/scottsdale-l961/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Desert Botanical Garden"
                detail="Stunning desert plant collection with seasonal exhibits. Best at sunset."
                price="$25/person"
                link={`https://www.getyourguide.com/scottsdale-l961/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Hot Air Balloon over Sonoran Desert"
                detail="Sunrise balloon ride over saguaro cacti. Includes champagne toast."
                price="$200–250/person"
                link={`https://www.getyourguide.com/scottsdale-l961/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Scottsdale Wine Trail"
                detail="15+ tasting rooms in Old Town. Walking distance from each other."
                price="$50–80/person"
                link={`https://www.getyourguide.com/scottsdale-l961/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Camelback Mountain Hike"
                detail="Two trails: Echo Canyon (hard) or Cholla (moderate). Go early to beat the heat."
                price="Free"
                link={`https://www.getyourguide.com/scottsdale-l961/?partner_id=${GYG_PARTNER}`}
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
                name="The Scottsdale Resort at McCormick Ranch"
                detail="Central location, solid pool, walkable to Old Town. Great group rates."
                price="$180–280/night"
                link="https://www.expedia.com/Scottsdale-Hotels.d602678.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Hotel Valley Ho"
                detail="Mid-century modern boutique. Best pool scene. Walking distance to everything."
                price="$250–400/night"
                link="https://www.expedia.com/Scottsdale-Hotels.d602678.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Courtyard by Marriott Old Town"
                detail="Budget-friendly, clean, central. Good for groups that spend money on the course, not the room."
                price="$120–200/night"
                link="https://www.expedia.com/Scottsdale-Hotels.d602678.Travel-Guide-Hotels"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Packing Guide                                            */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Packing Guide</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What to bring to Scottsdale
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <PackingItem name="Golf Travel Bag" tag={AMAZON_TAG} />
              <PackingItem name="Rangefinder" tag={AMAZON_TAG} />
              <PackingItem name="Cooling Towel" tag={AMAZON_TAG} />
              <PackingItem name="Packable Rain Jacket" tag={AMAZON_TAG} />
              <PackingItem name="Golf Shoe Bag" tag={AMAZON_TAG} />
              <PackingItem name="Comfort Insoles" tag={AMAZON_TAG} />
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
          {/*  CTA                                                      */}
          {/* -------------------------------------------------------- */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Plan your Scottsdale trip
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              5 questions, dual itinerary, one shareable link.
            </p>
            <div className="mt-6 flex justify-center">
              <Link className="primary-link" href="/plan">
                Start Planning
              </Link>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Other Destinations                                       */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Not sure about Scottsdale?</p>
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
