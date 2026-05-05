import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

const GYG_PARTNER = process.env.NEXT_PUBLIC_GYG_PARTNER_ID || '9GLTCAY'
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'fairwaypal-20'

export const metadata: Metadata = {
  title: 'Kiawah Island Golf Trip Guide — FairwayPal',
  description:
    'Everything you need for a Kiawah Island golf trip: the Ocean Course, 4 resort alternatives, real costs, the Charleston partner plan, and where to stay.',
  alternates: {
    canonical: 'https://fairwaypal.com/destinations/kiawah-island',
    languages: {
      'en-US': 'https://fairwaypal.com/destinations/kiawah-island',
      'x-default': 'https://fairwaypal.com/destinations/kiawah-island',
    },
  },
  openGraph: {
    title: 'Kiawah Island Golf Trip Guide — FairwayPal',
    description: 'The Ocean Course, 4 resort alternatives, real costs, and the Charleston partner plan for your Kiawah Island golf trip.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://fairwaypal.com/destinations/kiawah-island' },
    { '@type': 'ListItem', position: 3, name: 'Kiawah Island', item: 'https://fairwaypal.com/destinations/kiawah-island' },
  ],
}

const destinationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Kiawah Island, South Carolina',
  description:
    'The best golf resort on the East Coast. The Ocean Course is one of the most demanding and spectacular layouts in North America — with Charleston 25 miles away for partners.',
  url: 'https://fairwaypal.com/destinations/kiawah-island',
  touristType: ['Golf', 'Couples', 'Groups', 'Bucket List'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a round at Kiawah Island cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Ocean Course runs $400–600 per person depending on season and resort guest status. The four secondary resort courses (Cougar Point, Oak Point, Osprey Point, Turtle Point) run $150–280 per person. A typical 3-round trip costs $1,200–1,800 per golfer in green fees alone. Budget an additional $500–800 per night for resort accommodation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have to stay at Kiawah Island Resort to play the courses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, but resort guests get priority tee time access and often better rates. Non-guests can book the Ocean Course and other resort courses, but availability is more limited — particularly on weekends and in peak season (March–May, September–October). Book 60–90 days out if not staying on-property.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Kiawah Island for golf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'March through May (spring) and September through November (fall) are ideal — mild temperatures of 65–80°F, low humidity, and firm fairways. Summer (June–August) is hot and humid with lower green fees. Winter (December–February) is mild by northern standards but can be windy on the Ocean Course.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Kiawah Island from Charleston?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kiawah Island is about 25 miles from downtown Charleston — roughly 35–45 minutes by car. Charleston is one of the best mid-size cities in the US for architecture, food, and history. Most groups do one full Charleston day trip (historic district, Rainbow Row, Fort Sumter, French Quarter restaurants) and one beach/spa day on the island.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do non-golfers do at Kiawah Island?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The island has 10 miles of Atlantic beach, The Sanctuary spa (10,000 sq ft, world-class treatments), kayaking and paddleboarding in the tidal creeks, 30+ miles of bike paths through maritime forest, and excellent birding. The Charleston day trip (25 miles) is the highlight for most partners — historic architecture, harbour tours, and one of the US\'s best restaurant scenes.',
      },
    },
  ],
}

const OTHER_DESTINATIONS = [
  { name: 'Pinehurst', href: '/destinations/pinehurst', tagline: 'The home of US golf' },
  { name: 'Myrtle Beach', href: '/destinations/myrtle-beach', tagline: 'Best value for groups' },
  { name: 'Pebble Beach', href: '/destinations/pebble-beach', tagline: 'The West Coast bucket list' },
]

export default function KiawahIslandPage() {
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
          Kiawah Island, South Carolina
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          The best golf resort on the East Coast. Five courses on one island, headlined by the Ocean Course — host of three PGA Championships. Partners have 10 miles of Atlantic beach, a world-class spa, and Charleston 25 miles away. The whole group comes back happy.
        </p>
        <p className="mt-2 text-sm text-ink-2">
          Best time to visit: <span className="text-gold">March — May, September — November</span> (mild temps, low humidity)
        </p>

        <div className="mt-12 space-y-16">
          {/* -------------------------------------------------------- */}
          {/*  Best Courses                                             */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-fairway-text">Best Courses</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              The five Kiawah Island courses
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Resort guests get priority booking. The Ocean Course requires a forecaddie — budget $50–75 per bag plus tip.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <CourseCard
                name="The Ocean Course"
                detail="Pete Dye. Host of the 1991 Ryder Cup, 2012 and 2021 PGA Championships. Eighteen holes along the Atlantic — every hole has an ocean view. The marquee round."
                price="$400–600/round"
                tier="Bucket list"
                link="https://www.kiawahresort.com/golf/ocean-course/"
              />
              <CourseCard
                name="Osprey Point"
                detail="Tom Fazio. The most scenic secondary course — through live oaks and tidal marshes with water features on 14 holes. Best choice for mixed-handicap groups."
                price="$175–250/round"
                tier="Premium"
                link="https://www.kiawahresort.com/golf/osprey-point/"
              />
              <CourseCard
                name="Turtle Point"
                detail="Jack Nicklaus. Three consecutive oceanside holes (15, 16, 17) make this worth playing for views alone. Dramatic 18th finishes in front of a natural amphitheatre."
                price="$160–240/round"
                tier="Premium"
                link="https://www.kiawahresort.com/golf/turtle-point/"
              />
              <CourseCard
                name="Cougar Point"
                detail="Gary Player, renovated 2013. The most accessible course on the island — wide fairways, forgiving rough. Good opener for higher handicaps or a relaxed last morning round."
                price="$150–220/round"
                tier="Mid-range"
                link="https://www.kiawahresort.com/golf/cougar-point/"
              />
              <CourseCard
                name="Oak Point"
                detail="Colleton River, off the island proper. Most affordable of the five. Easier tee time access. Good option if the Ocean Course is sold out or budget is a consideration."
                price="$90–150/round"
                tier="Mid-range"
                link="https://www.kiawahresort.com/golf/oak-point/"
              />
              <CourseCard
                name="Caledonia Golf & Fish Club"
                detail="Hilton Head, 90 min south. If adding a day, one of the most beautiful courses in the Lowcountry — moss-draped live oaks, rice plantation setting."
                price="$140–200/round"
                tier="Premium"
                link="https://www.golfnow.com/course/caledonia-golf-fish-club-6040"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Partner Activities                                       */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-partner-text">Partner Activities</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What non-golfers do at Kiawah
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <PartnerCard
                name="The Sanctuary Spa"
                detail="10,000 sq ft, 15 treatment rooms. Signature sea salt treatments, ocean-inspired body wraps. Book the half-day spa package or the 90-min massage. Books out 2–3 weeks ahead in peak season."
                price="$150–350/person"
                link={`https://www.getyourguide.com/kiawah-island-l107748/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Charleston Day Trip"
                detail="25 miles, 40 minutes. Historic district, Rainbow Row, The Battery, Fort Sumter ferry. One of the US&apos;s best mid-size cities for architecture and food. Book Fort Sumter tour in advance."
                price="$15–65/person"
                link={`https://www.getyourguide.com/charleston-l100034/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Kayaking &amp; Paddleboarding"
                detail="Tidal creeks behind the island are calm and full of wildlife — dolphin sightings are common. Kayak and paddleboard rentals available through the resort activity centre."
                price="$40–80/person"
                link={`https://www.getyourguide.com/kiawah-island-l107748/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="10 Miles of Atlantic Beach"
                detail="Relatively uncrowded even in peak season. Best access from Beachwalker Park (west end) or through the resort. Walking, shelling, and swimming all popular."
                price="Free"
                link={`https://www.getyourguide.com/kiawah-island-l107748/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Island Bike Tour"
                detail="30+ miles of paved bike paths through maritime forest, dunes, and along the beach. Bike rentals available at the resort. Best done early morning before the heat."
                price="$15–30/person"
                link={`https://www.getyourguide.com/kiawah-island-l107748/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Charleston Food &amp; History Tour"
                detail="Guided walking tours covering the French Quarter, historic churches, and the city market. Culinary tours hit the best local spots — shrimp and grits are mandatory."
                price="$35–75/person"
                link={`https://www.getyourguide.com/charleston-l100034/?partner_id=${GYG_PARTNER}`}
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Hotels                                                   */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Where to Stay</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Accommodation at Kiawah Island
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <HotelCard
                name="The Sanctuary at Kiawah Island"
                detail="Flagship resort hotel. Ocean views, direct beach access, The Sanctuary Spa, five restaurants. Best Ocean Course tee time priority. Rates vary significantly by season."
                price="$800–1,400/night"
                link="https://www.expedia.com/Kiawah-Island-Hotels.d553248634082613665.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Kiawah Island Villas"
                detail="Private villas within the resort community. 4-bedroom villa at $600/night splits to $150/person for 4 couples — better value for larger groups, full kitchens included."
                price="$400–700/night"
                link="https://www.expedia.com/Kiawah-Island-Hotels.d553248634082613665.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Off-Island — Seabrook or North Charleston"
                detail="30–45 minutes from courses. Significant savings but you lose resort-guest priority on the Ocean Course. Fine if you book 60+ days out and plan primarily around secondary courses."
                price="$120–250/night"
                link="https://www.expedia.com/Charleston-Hotels.d178285.Travel-Guide-Hotels"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Packing Guide                                            */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Packing Guide</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What to bring to Kiawah Island
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <PackingItem name="Windproof Golf Jacket" tag={AMAZON_TAG} />
              <PackingItem name="Waterproof Golf Shoes" tag={AMAZON_TAG} />
              <PackingItem name="Rangefinder" tag={AMAZON_TAG} />
              <PackingItem name="Golf Travel Bag" tag={AMAZON_TAG} />
              <PackingItem name="Sun Protection SPF 50" tag={AMAZON_TAG} />
              <PackingItem name="Comfort Insoles" tag={AMAZON_TAG} />
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
              Kiawah Island golf trip FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="How much does a round at Kiawah Island cost?"
                answer="The Ocean Course runs $400–600 per person depending on season and resort guest status. Secondary courses run $150–280. A typical 3-round trip (one Ocean, two secondary) costs $1,200–1,800 per golfer in green fees. Budget additionally for a forecaddie ($50–75/bag) and resort accommodation ($500–800/night)."
              />
              <FaqItem
                question="Do you have to stay at the resort to play?"
                answer="No, but resort guests get priority tee time access. Non-guests can book the Ocean Course and other resort courses, but availability is more limited. Book 60–90 days out if not staying on-property — especially for the Ocean Course on weekends."
              />
              <FaqItem
                question="What is the best time to visit Kiawah Island?"
                answer="March through May and September through November. Spring and fall offer mild temperatures (65–80°F), low humidity, and firm fairways. Summer is hot and humid but has lower green fees. Winter is mild but can be windy on the Ocean Course."
              />
              <FaqItem
                question="How far is Kiawah Island from Charleston?"
                answer="About 25 miles — 35–45 minutes by car. Charleston is an excellent partner day trip: one of the US's best mid-size cities for architecture, food, and history. Most groups do one full Charleston day and one beach/spa day on the island."
              />
              <FaqItem
                question="What do non-golfers do at Kiawah Island?"
                answer="10 miles of Atlantic beach, The Sanctuary Spa (world-class, book 2 weeks ahead in peak season), kayaking in tidal creeks, biking through maritime forest, and the Charleston day trip (25 miles away). Partners are rarely bored — the harder problem is getting golfers to leave the course."
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  CTA                                                      */}
          {/* -------------------------------------------------------- */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Plan your Kiawah Island trip
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
                { href: '/blog/kiawah-island-golf-trip', title: 'Kiawah Island Golf Trip Planning Guide', desc: 'Tee time booking, cost breakdown, the 4-day itinerary, and what partners do.' },
                { href: '/blog/golf-trip-budget', title: 'Golf Trip Budget Breakdown', desc: 'How a Kiawah Island trip compares to other premium US destinations in total cost.' },
                { href: '/blog/best-bachelor-party-golf-destinations', title: 'Best Bachelor Party Golf Destinations', desc: 'Is Kiawah the right pick for a bachelor trip? Honest answer by group type.' },
                { href: '/blog/golf-trip-with-non-golfers', title: 'Planning a Golf Trip With Non-Golfers', desc: 'Why Kiawah Island is one of the best partner-friendly destinations in the US.' },
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
            <p className="eyebrow">Not sure about Kiawah Island?</p>
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
