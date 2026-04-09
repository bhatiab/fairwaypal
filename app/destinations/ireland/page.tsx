import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

const GYG_PARTNER = process.env.NEXT_PUBLIC_GYG_PARTNER_ID || '9GLTCAY'
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'fairwaypal-20'

export const metadata: Metadata = {
  title: 'Ireland Golf Trip Guide — FairwayPal',
  description:
    'Everything you need for an Ireland golf trip: best links courses, partner activities, hotels near the courses, and a packing guide. Plan it in 5 minutes with FairwayPal.',
  alternates: { canonical: 'https://fairwaypal.com/destinations/ireland' },
  openGraph: {
    title: 'Ireland Golf Trip Guide — FairwayPal',
    description: 'Best links courses, partner activities, hotels, and packing guide for your Ireland golf trip.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://fairwaypal.com/destinations/ireland' },
    { '@type': 'ListItem', position: 3, name: 'Ireland', item: 'https://fairwaypal.com/destinations/ireland' },
  ],
}

const destinationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Ireland',
  description:
    'Wild links courses on dramatic coastlines, pubs with live music, and some of the friendliest people in golf. Ireland is the group trip that bonds a crew for life.',
  url: 'https://fairwaypal.com/destinations/ireland',
  touristType: ['Golf', 'Couples', 'Groups'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a golf trip to Ireland cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An Ireland golf trip typically costs $2,000–$4,500 per person for 5–7 nights, including flights from the US East Coast, accommodation, 4–5 rounds, car hire, and meals. Southwest Ireland (Kerry/Clare) tends to be slightly cheaper than the northern routes. Green fees range from $80 at hidden gems to $350+ at top championship links.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to golf in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'May through September is the best window, with July and August offering the warmest temperatures (55–65°F). May and June have the longest daylight hours. Rain is possible year-round, so waterproofs are essential regardless of when you go. Shoulder months (April and October) offer lower prices but shorter days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I rent a car for an Ireland golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, a rental car is strongly recommended. Many of the best courses (Ballybunion, Lahinch, Waterville) are in rural areas without public transport. Drive on the left side. Book an automatic if you prefer — manuals are the default in Ireland. Budget $40–$60/day for a mid-size car. One designated driver per day keeps things simple.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do non-golfers do in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ireland has plenty for partners: the Cliffs of Moher, Ring of Kerry scenic drive, Killarney National Park, pub crawls in Galway and Dublin, spa days at resort hotels, Dingle Peninsula exploration, traditional music sessions, whiskey distillery tours (Jameson, Midleton), and shopping in Kinsale — Ireland\'s gourmet capital.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the must-play courses in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top courses most groups include are: Ballybunion Old Course (wild Kerry links), Lahinch (next to the Cliffs of Moher), Old Head of Kinsale (clifftop drama), Waterville (remote and spectacular), and Tralee (Arnold Palmer design with ocean views). For Northern Ireland, Royal County Down and Royal Portrush are bucket-list courses.',
      },
    },
  ],
}

const OTHER_DESTINATIONS = [
  { name: 'Scotland', href: '/destinations/scotland', tagline: 'The birthplace of golf' },
  { name: 'Scottsdale', href: '/destinations/scottsdale', tagline: '200+ courses, year-round sun' },
  { name: 'Myrtle Beach', href: '/destinations/myrtle-beach', tagline: '100+ courses, boardwalk vibes' },
]

export default function IrelandPage() {
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
          Ireland
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          Wild links courses on dramatic coastlines, pubs with live music, and some of the friendliest people in golf. Ireland is the group trip that bonds a crew for life.
        </p>
        <p className="mt-2 text-sm text-ink-2">
          Best time to visit: <span className="text-gold">May — September</span> (warmest, longest days)
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
                name="Ballybunion — Old Course"
                detail="Raw, wild, Atlantic links. Towering dunes, blind shots, and the most natural routing in golf. A top-10 course in the world."
                price="$200–280/round"
                tier="Bucket list"
                link="https://www.golfnow.com/course/ballybunion-golf-club-old-course-23930"
              />
              <CourseCard
                name="Lahinch Golf Club"
                detail="Right next to the Cliffs of Moher. Classic links with goats that predict the weather. The Dell hole is unforgettable."
                price="$150–220/round"
                tier="Premium"
                link="https://www.golfnow.com/course/lahinch-golf-club-23931"
              />
              <CourseCard
                name="Old Head of Kinsale"
                detail="Golf on a rocky headland 300 feet above the Atlantic. Dramatic, photogenic, and unlike anything else."
                price="$250–350/round"
                tier="Bucket list"
                link="https://www.golfnow.com/course/old-head-golf-links-23932"
              />
              <CourseCard
                name="Waterville Golf Links"
                detail="Remote Kerry links that Tiger and Payne Stewart loved. Challenging, beautiful, and wonderfully uncrowded."
                price="$150–220/round"
                tier="Premium"
                link="https://www.golfnow.com/course/waterville-golf-links-23933"
              />
              <CourseCard
                name="Tralee Golf Club"
                detail="Arnold Palmer design on the Dingle Peninsula. Ocean holes that rival anywhere in the world. Worth the drive."
                price="$130–200/round"
                tier="Premium"
                link="https://www.golfnow.com/course/tralee-golf-club-23934"
              />
              <CourseCard
                name="Dooks Golf Links"
                detail="Hidden gem on the Ring of Kerry. Traditional links, affordable, and no pretension. Locals play here."
                price="$60–100/round"
                tier="Budget"
                link="https://www.golfnow.com/course/dooks-golf-links-23935"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Partner Activities                                       */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-partner-text">Partner Activities</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What non-golfers do in Ireland
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <PartnerCard
                name="Cliffs of Moher"
                detail="700-foot sea cliffs on the Atlantic coast. One of Ireland's most visited sites. Go early to beat the crowds."
                price="$8/person"
                link={`https://www.getyourguide.com/cliffs-of-moher-l2684/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Ring of Kerry Drive"
                detail="120-mile scenic loop through mountains, lakes, and coastal villages. Stop at Moll's Gap and Ladies View."
                price="Free (car hire)"
                link={`https://www.getyourguide.com/killarney-l597/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Killarney National Park"
                detail="Lakes, waterfalls, and Muckross House. Rent bikes or take a jaunting car (horse-drawn carriage)."
                price="Free–$30/person"
                link={`https://www.getyourguide.com/killarney-l597/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Galway City & Pub Crawl"
                detail="Colourful streets, live traditional music in every pub, and the best seafood chowder in Ireland. The craic is mighty."
                price="$30–60/person"
                link={`https://www.getyourguide.com/galway-l551/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Dingle Peninsula Day Trip"
                detail="Beehive huts, Slea Head Drive, and Fungie the dolphin. Stop at a pub for live music on the way back."
                price="$40–80/person"
                link={`https://www.getyourguide.com/dingle-l32244/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Spa Day at Killarney Park Hotel"
                detail="Five-star spa in the heart of Killarney. Pool, thermal suite, and treatments while the group is on the course."
                price="$100–200/person"
                link={`https://www.getyourguide.com/killarney-l597/?partner_id=${GYG_PARTNER}`}
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
                name="The Killarney Park Hotel"
                detail="Five-star in the centre of Killarney. Walking distance to pubs, restaurants, and the national park entrance."
                price="$200–380/night"
                link="https://www.expedia.com/Killarney-Hotels.d1044.Travel-Guide-Hotels"
              />
              <HotelCard
                name="The Lodge at Doonbeg"
                detail="Luxury resort on the Clare coast with its own links course. Ideal base for Lahinch and the Cliffs of Moher."
                price="$300–500/night"
                link="https://www.expedia.com/Doonbeg-Hotels.d6054123.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Randles Hotel — Killarney"
                detail="Family-run four-star with character. Great restaurant, cosy bar, and central location. Solid group rates."
                price="$130–220/night"
                link="https://www.expedia.com/Killarney-Hotels.d1044.Travel-Guide-Hotels"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Packing Guide                                            */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Packing Guide</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What to bring to Ireland
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <PackingItem name="Waterproof Golf Jacket" tag={AMAZON_TAG} />
              <PackingItem name="Golf Travel Bag" tag={AMAZON_TAG} />
              <PackingItem name="Waterproof Golf Shoes" tag={AMAZON_TAG} />
              <PackingItem name="Packable Rain Pants" tag={AMAZON_TAG} />
              <PackingItem name="Golf Umbrella" tag={AMAZON_TAG} />
              <PackingItem name="Rangefinder" tag={AMAZON_TAG} />
              <PackingItem name="Power Bank" tag={AMAZON_TAG} />
              <PackingItem name="Travel Adapter UK" tag={AMAZON_TAG} />
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
              Ireland golf trip FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="How much does a golf trip to Ireland cost?"
                answer="An Ireland golf trip typically costs $2,000–$4,500 per person for 5–7 nights, including flights from the US East Coast, accommodation, 4–5 rounds, car hire, and meals. Southwest Ireland (Kerry/Clare) tends to be slightly cheaper than the northern routes. Green fees range from $80 at hidden gems to $350+ at top championship links."
              />
              <FaqItem
                question="What is the best time of year to golf in Ireland?"
                answer="May through September is the best window, with July and August offering the warmest temperatures (55–65°F). May and June have the longest daylight hours. Rain is possible year-round, so waterproofs are essential regardless of when you go. Shoulder months (April and October) offer lower prices but shorter days."
              />
              <FaqItem
                question="Should I rent a car for an Ireland golf trip?"
                answer="Yes, a rental car is strongly recommended. Many of the best courses (Ballybunion, Lahinch, Waterville) are in rural areas without public transport. Drive on the left side. Book an automatic if you prefer — manuals are the default in Ireland. Budget $40–$60/day for a mid-size car. One designated driver per day keeps things simple."
              />
              <FaqItem
                question="What do non-golfers do in Ireland?"
                answer="Ireland has plenty for partners: the Cliffs of Moher, Ring of Kerry scenic drive, Killarney National Park, pub crawls in Galway and Dublin, spa days at resort hotels, Dingle Peninsula exploration, traditional music sessions, whiskey distillery tours (Jameson, Midleton), and shopping in Kinsale — Ireland's gourmet capital."
              />
              <FaqItem
                question="What are the must-play courses in Ireland?"
                answer="The top courses most groups include are: Ballybunion Old Course (wild Kerry links), Lahinch (next to the Cliffs of Moher), Old Head of Kinsale (clifftop drama), Waterville (remote and spectacular), and Tralee (Arnold Palmer design with ocean views). For Northern Ireland, Royal County Down and Royal Portrush are bucket-list courses."
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  CTA                                                      */}
          {/* -------------------------------------------------------- */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Plan your Ireland trip
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
            <p className="eyebrow">Not sure about Ireland?</p>
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
