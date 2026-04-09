import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

const GYG_PARTNER = process.env.NEXT_PUBLIC_GYG_PARTNER_ID || '9GLTCAY'
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'fairwaypal-20'

export const metadata: Metadata = {
  title: 'Pinehurst Golf Trip Guide — FairwayPal',
  description:
    'Everything you need for a Pinehurst golf trip: best courses, partner activities, hotels near the courses, and a packing guide. Plan it in 5 minutes with FairwayPal.',
  alternates: { canonical: 'https://fairwaypal.com/destinations/pinehurst' },
  openGraph: {
    title: 'Pinehurst Golf Trip Guide — FairwayPal',
    description: 'Best courses, partner activities, hotels, and packing guide for your Pinehurst golf weekend.',
  },
}

export default function PinehurstPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        {/* Hero */}
        <p className="eyebrow">Destination Guide</p>
        <h1 className="mt-3 text-5xl font-display font-light italic leading-tight text-foreground sm:text-6xl">
          Pinehurst, North Carolina
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          The cradle of American golf. Nine resort courses on one property, a charming village that&rsquo;s walkable in 20 minutes, and a pace of play that feels like a different era. Pinehurst is bucket-list territory done right.
        </p>
        <p className="mt-2 text-sm text-ink-2">
          Best time to visit: <span className="text-gold">March — May, September — November</span> (mild temps, ideal conditions)
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
                name="Pinehurst No. 2"
                detail="Donald Ross&rsquo;s masterpiece. Two US Opens and counting. The turtleback greens will humble your best putter."
                price="$350–500/round"
                tier="Bucket list"
                link="https://www.golfnow.com/course/pinehurst-no-2"
              />
              <CourseCard
                name="Pinehurst No. 4"
                detail="Gil Hanse redesign opened 2018. Fast, firm, and unforgiving — a modern counterpart to No. 2."
                price="$200–350/round"
                tier="Premium"
                link="https://www.golfnow.com/course/pinehurst-no-4"
              />
              <CourseCard
                name="Pinehurst No. 8"
                detail="Tom Fazio design with dramatic elevation changes. Wide landing areas reward the bold."
                price="$150–250/round"
                tier="Premium"
                link="https://www.golfnow.com/course/pinehurst-no-8"
              />
              <CourseCard
                name="Pine Needles Lodge &amp; Golf Club"
                detail="Donald Ross gem next door. Host of three US Women&rsquo;s Opens. Friendlier than No. 2, equally memorable."
                price="$100–200/round"
                tier="Mid-range"
                link="https://www.golfnow.com/course/pine-needles-lodge-golf-club"
              />
              <CourseCard
                name="Mid Pines Inn &amp; Golf Club"
                detail="Sister course to Pine Needles. Classic Ross layout, outstanding value, throwback atmosphere."
                price="$80–150/round"
                tier="Mid-range"
                link="https://www.golfnow.com/course/mid-pines-inn-golf-club"
              />
              <CourseCard
                name="Tobacco Road Golf Club"
                detail="Mike Strantz&rsquo;s wildest design. Blind shots, massive waste areas, and zero forgettable holes."
                price="$70–120/round"
                tier="Budget"
                link="https://www.golfnow.com/course/tobacco-road-golf-club"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Partner Activities                                       */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-partner-text">Partner Activities</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What non-golfers do in Pinehurst
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <PartnerCard
                name="Village of Pinehurst Shops &amp; Cafes"
                detail="Charming walkable village with boutiques, galleries, and coffee shops. Half a morning gone, pleasantly."
                price="Free"
                link={`https://www.getyourguide.com/pinehurst-l97775/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Sandhills Horticultural Gardens"
                detail="15 acres of themed gardens at Sandhills Community College. Peak bloom in spring. Completely free."
                price="Free"
                link={`https://www.getyourguide.com/pinehurst-l97775/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Weymouth Woods Nature Preserve Hiking"
                detail="Old-growth longleaf pine forest with easy to moderate trails. Wildlife spotting and real quiet."
                price="$5/person"
                link={`https://www.getyourguide.com/pinehurst-l97775/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Spa at Pinehurst Resort"
                detail="Full-service resort spa with golf-recovery treatments. Book the half-day package for best value."
                price="$150–300/person"
                link={`https://www.getyourguide.com/pinehurst-l97775/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Wine Tasting at Cypress Bend Vineyards"
                detail="Small family winery 30 minutes out. Guided tasting in a relaxed setting. No pretension."
                price="$15/person"
                link={`https://www.getyourguide.com/pinehurst-l97775/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Historic Carthage Walking Tour"
                detail="Moore County&rsquo;s charming courthouse town, 15 minutes away. Antique shops and a proper Main Street."
                price="Free"
                link={`https://www.getyourguide.com/pinehurst-l97775/?partner_id=${GYG_PARTNER}`}
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
                name="The Carolina at Pinehurst Resort"
                detail="The grande dame of Southern resort hotels. On-property access to all nine courses. Groups love it."
                price="$300–600/night"
                link="https://www.expedia.com/Pinehurst-Hotels.d6142613.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Pine Needles Lodge"
                detail="Stay where the pros played. Classic lodge rooms, package rates include rounds. Excellent for groups."
                price="$150–280/night"
                link="https://www.expedia.com/Pinehurst-Hotels.d6142613.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Hampton Inn &amp; Suites Pinehurst"
                detail="Solid, predictable, half the price. Good for groups spending the budget on the courses not the pillows."
                price="$100–180/night"
                link="https://www.expedia.com/Pinehurst-Hotels.d6142613.Travel-Guide-Hotels"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Packing Guide                                            */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Packing Guide</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What to bring to Pinehurst
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
              Plan your Pinehurst trip
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
