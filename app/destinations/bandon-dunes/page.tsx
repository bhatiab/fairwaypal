import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

const GYG_PARTNER = process.env.NEXT_PUBLIC_GYG_PARTNER_ID || '9GLTCAY'
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'fairwaypal-20'

export const metadata: Metadata = {
  title: 'Bandon Dunes Golf Trip Guide — FairwayPal',
  description:
    'Everything you need for a Bandon Dunes golf trip: best courses, partner activities, hotels near the courses, and a packing guide. Plan it in 5 minutes with FairwayPal.',
  alternates: { canonical: 'https://fairwaypal.com/destinations/bandon-dunes' },
  openGraph: {
    title: 'Bandon Dunes Golf Trip Guide — FairwayPal',
    description: 'Best courses, partner activities, hotels, and packing guide for your Bandon Dunes golf weekend.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://fairwaypal.com/destinations/bandon-dunes' },
    { '@type': 'ListItem', position: 3, name: 'Bandon Dunes', item: 'https://fairwaypal.com/destinations/bandon-dunes' },
  ],
}

const destinationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Bandon Dunes, Oregon',
  description:
    'A true links golf pilgrimage on the rugged Oregon coast. World-class courses, no carts, pure golf.',
  url: 'https://fairwaypal.com/destinations/bandon-dunes',
  touristType: ['Golf', 'Groups'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a golf trip to Bandon Dunes cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Bandon Dunes golf trip typically costs $2,000–$3,500 per person for 3–4 nights, including resort accommodation, 3–4 rounds, caddie fees, and meals. Green fees are $125–$375 depending on the course and season. Caddie fees add $100–$130 per round (strongly recommended). Flights to North Bend/Coos Bay plus a shuttle or rental car add $300–$600.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to visit Bandon Dunes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'June through September offers the driest weather and warmest temperatures (55–65°F). July and August are peak season with the longest days. May and October are shoulder season with lower rates but more rain. The resort is open year-round, and winter rounds are possible but expect wind and rain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need a caddie at Bandon Dunes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Caddies are not required but strongly recommended, especially for first-time visitors. They know the blind shots, wind patterns, and hidden slopes that make links golf challenging. Caddie fees are $100–$130 per bag per round plus tip (typically 20–30%). Walking is required on all courses — no golf carts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do non-golfers do at Bandon Dunes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bandon Dunes is primarily a golf destination, but partners can enjoy beach walks along the Oregon coast, the Bandon Marsh wildlife refuge, exploring the town of Bandon (galleries, shops, cranberry bogs), hiking at Bullards Beach State Park, the resort spa, and excellent dining at the resort restaurants. It is a quieter, nature-focused experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many courses are at Bandon Dunes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bandon Dunes Resort has six courses: Bandon Dunes (the original), Pacific Dunes (consistently ranked #1), Bandon Trails (woodland links), Old Macdonald (template holes), Sheep Ranch (clifftop, newest), and the Preserve (par-3 course). Most groups play 3–4 of the full courses plus the Preserve. Pacific Dunes and Sheep Ranch are the most requested.',
      },
    },
  ],
}

const OTHER_DESTINATIONS = [
  { name: 'Scotland', href: '/destinations/scotland', tagline: 'The birthplace of golf' },
  { name: 'Ireland', href: '/destinations/ireland', tagline: 'Links golf and craic' },
  { name: 'Pinehurst', href: '/destinations/pinehurst', tagline: 'Cradle of American golf' },
]

export default function BandonDunesPage() {
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
          Bandon Dunes, Oregon
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          Five world-class links courses on a remote Oregon coastline. Bandon is a golf pilgrimage, not a party destination &mdash; partners need to love the outdoors. If your group is serious about golf, there&rsquo;s nowhere better in America.
        </p>
        <p className="mt-2 text-sm text-ink-2">
          Best time to visit: <span className="text-gold">May — October</span> (summer links golf)
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
                name="Bandon Dunes"
                detail="The original. Pure links golf above the Pacific with dramatic cliff-top holes. Wind makes every round different."
                price="$275–375/round"
                tier="Bucket list"
                link="https://www.golfnow.com/course/bandon-dunes"
              />
              <CourseCard
                name="Pacific Dunes"
                detail="Tom Doak&rsquo;s masterpiece. Consistently ranked top-5 in the US. Tight, natural routing along the bluffs."
                price="$275–375/round"
                tier="Bucket list"
                link="https://www.golfnow.com/course/pacific-dunes"
              />
              <CourseCard
                name="Bandon Trails"
                detail="Coore &amp; Crenshaw design through forest, meadow, and dunes. The most varied landscape on the property."
                price="$275–375/round"
                tier="Bucket list"
                link="https://www.golfnow.com/course/bandon-trails"
              />
              <CourseCard
                name="Old Macdonald"
                detail="Wide fairways and massive greens inspired by the golden age of design. Forgiving but endlessly strategic."
                price="$275–375/round"
                tier="Bucket list"
                link="https://www.golfnow.com/course/old-macdonald"
              />
              <CourseCard
                name="Sheep Ranch"
                detail="The newest and most dramatic course. Every hole has ocean views. Reserve well in advance."
                price="$275–375/round"
                tier="Bucket list"
                link="https://www.golfnow.com/course/sheep-ranch"
              />
              <CourseCard
                name="Bandon Preserve"
                detail="A 13-hole par-3 course on the headland. Perfect warm-up round or twilight game. Proceeds support conservation."
                price="$100/round"
                tier="Mid-range"
                link="https://www.golfnow.com/course/bandon-preserve"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Partner Activities                                       */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-partner-text">Partner Activities</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What non-golfers do in Bandon
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <PartnerCard
                name="Beach Hiking on Bandon Coastline"
                detail="Miles of wild Pacific coastline to explore. Face Rock, Table Rock, and Coquille Point all within easy reach."
                price="Free"
                link={`https://www.getyourguide.com/bandon-l97853/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Cranberry Bog Tour"
                detail="Bandon is Oregon&rsquo;s cranberry capital. Tour the working bogs and learn how the harvest works. Unique and surprisingly fascinating."
                price="$25/person"
                link={`https://www.getyourguide.com/bandon-l97853/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Coquille Point Wildlife Viewpoint"
                detail="Spot harbor seals, grey whales, and seabirds from the headland. Short walk from town, dramatic views year-round."
                price="Free"
                link={`https://www.getyourguide.com/bandon-l97853/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Shore Acres State Park"
                detail="Former timber baron&rsquo;s estate turned botanical garden above dramatic sea cliffs. The holiday lights display is legendary."
                price="$5/person"
                link={`https://www.getyourguide.com/bandon-l97853/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Bandon Marsh National Wildlife Refuge"
                detail="Kayaking and birdwatching through protected estuary habitat. Bring binoculars and a sense of quiet."
                price="Free"
                link={`https://www.getyourguide.com/bandon-l97853/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Face Rock Creamery Cheese Tasting"
                detail="Award-winning artisan cheese made with Oregon milk. The tasting room in Old Town Bandon is a relaxed afternoon stop."
                price="$15/person"
                link={`https://www.getyourguide.com/bandon-l97853/?partner_id=${GYG_PARTNER}`}
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
                name="Bandon Dunes Golf Resort"
                detail="On-site lodges and cottages steps from all five courses. The only real option for a full golf immersion trip."
                price="$250–500/night"
                link="https://www.expedia.com/Bandon-Hotels.d6139228.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Bandon Inn"
                detail="Perched on a bluff above Old Town with ocean views. Comfortable, well-priced, and close to the town restaurants."
                price="$100–180/night"
                link="https://www.expedia.com/Bandon-Hotels.d6139228.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Best Western Inn at Face Rock"
                detail="Solid mid-range option near Face Rock Beach. Good for groups that want a base outside the resort bubble."
                price="$120–200/night"
                link="https://www.expedia.com/Bandon-Hotels.d6139228.Travel-Guide-Hotels"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Packing Guide                                            */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Packing Guide</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What to bring to Bandon Dunes
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
          {/*  FAQ                                                      */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-gold">Frequently Asked Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Bandon Dunes golf trip FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="How much does a golf trip to Bandon Dunes cost?"
                answer="A Bandon Dunes golf trip typically costs $2,000–$3,500 per person for 3–4 nights, including resort accommodation, 3–4 rounds, caddie fees, and meals. Green fees are $125–$375 depending on the course and season. Caddie fees add $100–$130 per round (strongly recommended). Flights to North Bend/Coos Bay plus a shuttle or rental car add $300–$600."
              />
              <FaqItem
                question="What is the best time of year to visit Bandon Dunes?"
                answer="June through September offers the driest weather and warmest temperatures (55–65°F). July and August are peak season with the longest days. May and October are shoulder season with lower rates but more rain. The resort is open year-round, and winter rounds are possible but expect wind and rain."
              />
              <FaqItem
                question="Do you need a caddie at Bandon Dunes?"
                answer="Caddies are not required but strongly recommended, especially for first-time visitors. They know the blind shots, wind patterns, and hidden slopes that make links golf challenging. Caddie fees are $100–$130 per bag per round plus tip (typically 20–30%). Walking is required on all courses — no golf carts."
              />
              <FaqItem
                question="What do non-golfers do at Bandon Dunes?"
                answer="Bandon Dunes is primarily a golf destination, but partners can enjoy beach walks along the Oregon coast, the Bandon Marsh wildlife refuge, exploring the town of Bandon (galleries, shops, cranberry bogs), hiking at Bullards Beach State Park, the resort spa, and excellent dining at the resort restaurants. It is a quieter, nature-focused experience."
              />
              <FaqItem
                question="How many courses are at Bandon Dunes?"
                answer="Bandon Dunes Resort has six courses: Bandon Dunes (the original), Pacific Dunes (consistently ranked #1), Bandon Trails (woodland links), Old Macdonald (template holes), Sheep Ranch (clifftop, newest), and the Preserve (par-3 course). Most groups play 3–4 of the full courses plus the Preserve. Pacific Dunes and Sheep Ranch are the most requested."
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  CTA                                                      */}
          {/* -------------------------------------------------------- */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Plan your Bandon Dunes trip
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
            <p className="eyebrow">Not sure about Bandon Dunes?</p>
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
