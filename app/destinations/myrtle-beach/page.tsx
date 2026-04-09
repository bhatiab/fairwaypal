import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

const GYG_PARTNER = process.env.NEXT_PUBLIC_GYG_PARTNER_ID || '9GLTCAY'
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'fairwaypal-20'

export const metadata: Metadata = {
  title: 'Myrtle Beach Golf Trip Guide — FairwayPal',
  description:
    'Everything you need for a Myrtle Beach golf trip: best courses, partner activities, hotels near the courses, and a packing guide. Plan it in 5 minutes with FairwayPal.',
  alternates: { canonical: 'https://fairwaypal.com/destinations/myrtle-beach' },
  openGraph: {
    title: 'Myrtle Beach Golf Trip Guide — FairwayPal',
    description: 'Best courses, partner activities, hotels, and packing guide for your Myrtle Beach golf weekend.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://fairwaypal.com/destinations/myrtle-beach' },
    { '@type': 'ListItem', position: 3, name: 'Myrtle Beach', item: 'https://fairwaypal.com/destinations/myrtle-beach' },
  ],
}

const destinationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Myrtle Beach, South Carolina',
  description:
    'The Grand Strand offers 100+ courses, budget-friendly group packages, and a boardwalk scene for partners.',
  url: 'https://fairwaypal.com/destinations/myrtle-beach',
  touristType: ['Golf', 'Couples', 'Groups'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a golf trip to Myrtle Beach cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Myrtle Beach golf trip typically costs $800–$1,800 per person for a 3-night weekend, including flights, hotel, 3–4 rounds, and meals. Myrtle Beach is one of the most affordable golf destinations in the US with green fees from $30 at public courses to $180 at top clubs like Caledonia. Package deals through golf groups can save 20–30%.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to golf in Myrtle Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'March through May and September through November are ideal, with temperatures between 65–80°F. Spring is peak season with the best course conditions. Summer is hot and humid but offers the lowest green fees. Winter rounds are possible but temperatures can dip to 45–55°F.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many golf courses are in Myrtle Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Grand Strand has over 100 golf courses within a 60-mile stretch, making it the highest concentration of golf courses in the US. Courses range from budget-friendly municipal layouts to championship designs by Fazio, Dye, and Nicklaus. Most are within 30 minutes of each other.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do non-golfers do in Myrtle Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Partners love the Myrtle Beach Boardwalk and SkyWheel, outlet shopping at Tanger Outlets, Brookgreen Gardens (sculpture and wildlife), spa days at resort hotels, beach time (60 miles of coastline), dinner at The Marshwalk in Murrells Inlet, and Barefoot Landing for entertainment and dining.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Myrtle Beach good for a group golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Myrtle Beach is arguably the best value group golf destination in the US. Most courses offer group rates for 8+ players. Condo rentals near the courses sleep 4–8 and are cheaper than hotels. The mix of 100+ courses means every budget and skill level is covered. Book package deals through local operators for the best rates.',
      },
    },
  ],
}

const OTHER_DESTINATIONS = [
  { name: 'Scottsdale', href: '/destinations/scottsdale', tagline: '200+ courses, year-round sun' },
  { name: 'Scotland', href: '/destinations/scotland', tagline: 'The birthplace of golf' },
  { name: 'Ireland', href: '/destinations/ireland', tagline: 'Links golf and craic' },
]

export default function MyrtleBeachPage() {
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
          Myrtle Beach, South Carolina
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          100+ courses within 30 miles, a boardwalk that keeps partners busy all day, and prices that won&rsquo;t kill the group chat. Myrtle Beach is where bachelor golf weekends go to become legends.
        </p>
        <p className="mt-2 text-sm text-ink-2">
          Best time to visit: <span className="text-gold">March — May, September — November</span> (avoid summer humidity)
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
                name="Caledonia Golf &amp; Fish Club"
                detail="Lowcountry masterpiece draped in Spanish moss. Consistently ranked among the best public courses in the US."
                price="$150–200/round"
                tier="Premium"
                link="https://www.golfnow.com/course/caledonia-golf-and-fish-club"
              />
              <CourseCard
                name="TPC Myrtle Beach"
                detail="Tour-calibre conditions and a layout that rewards every skill level. The benchmark mid-range round in the area."
                price="$120–180/round"
                tier="Mid-range"
                link="https://www.golfnow.com/course/tpc-myrtle-beach"
              />
              <CourseCard
                name="Barefoot Resort — Dye Course"
                detail="Pete Dye design with the Grand Strand as a backdrop. Expect forced carries and plenty of post-round debate."
                price="$90–140/round"
                tier="Mid-range"
                link="https://www.golfnow.com/course/barefoot-resort-dye-course"
              />
              <CourseCard
                name="Tidewater Golf Club"
                detail="Elevated peninsula course with views of the Intracoastal Waterway. Best scenery on the Strand."
                price="$100–160/round"
                tier="Mid-range"
                link="https://www.golfnow.com/course/tidewater-golf-club"
              />
              <CourseCard
                name="Pawleys Plantation"
                detail="Jack Nicklaus signature design in the Pawleys Island marshes. Serious golf at a fair price."
                price="$70–110/round"
                tier="Budget"
                link="https://www.golfnow.com/course/pawleys-plantation"
              />
              <CourseCard
                name="The Dunes Golf &amp; Beach Club"
                detail="Robert Trent Jones Sr. classic from 1948. Lakeland holes on the back nine separate it from anything else on the Strand."
                price="$130–200/round"
                tier="Premium"
                link="https://www.golfnow.com/course/the-dunes-golf-and-beach-club"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Partner Activities                                       */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-partner-text">Partner Activities</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What non-golfers do in Myrtle Beach
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <PartnerCard
                name="Brookgreen Gardens"
                detail="America&rsquo;s first public sculpture garden set across 9,000 acres of former rice plantations. A genuine half-day."
                price="$20/person"
                link={`https://www.getyourguide.com/myrtle-beach-l985/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Broadway at the Beach"
                detail="120-acre entertainment complex with restaurants, shops, mini-golf, and live music. Easy to fill an afternoon."
                price="Free"
                link={`https://www.getyourguide.com/myrtle-beach-l985/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Myrtle Beach Boardwalk &amp; SkyWheel"
                detail="1.2-mile oceanfront boardwalk capped by a 187-foot Ferris wheel. Best at sunset or after dark."
                price="$15/person"
                link={`https://www.getyourguide.com/myrtle-beach-l985/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Deep-Sea Fishing Charter"
                detail="Full-day offshore trips targeting mahi, wahoo, and king mackerel. Departs from Little River Inlet."
                price="$150–200/person"
                link={`https://www.getyourguide.com/myrtle-beach-l985/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Spa at Marina Inn at Grande Dunes"
                detail="Full-service luxury spa on the Intracoastal Waterway. Massages, facials, and waterfront relaxation."
                price="$120–250/person"
                link={`https://www.getyourguide.com/myrtle-beach-l985/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Barefoot Landing Shopping &amp; Dining"
                detail="Waterfront retail and restaurant village with 100+ shops. Free to explore — budget separately for food and drinks."
                price="Free"
                link={`https://www.getyourguide.com/myrtle-beach-l985/?partner_id=${GYG_PARTNER}`}
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
                name="Marina Inn at Grande Dunes"
                detail="Upscale marina-side hotel with a spa and golf packages. The premium choice for groups that want the full experience."
                price="$200–350/night"
                link="https://www.expedia.com/Myrtle-Beach-Hotels.d602679.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Marriott Myrtle Beach Resort"
                detail="Oceanfront resort with pools, beach access, and easy access to the north end courses. Reliable group option."
                price="$150–280/night"
                link="https://www.expedia.com/Myrtle-Beach-Hotels.d602679.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Hampton Inn Broadway at the Beach"
                detail="Central location, clean rooms, good breakfast. Groups spending their money on greens fees, not the hotel."
                price="$100–180/night"
                link="https://www.expedia.com/Myrtle-Beach-Hotels.d602679.Travel-Guide-Hotels"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Packing Guide                                            */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Packing Guide</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What to bring to Myrtle Beach
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
              Myrtle Beach golf trip FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="How much does a golf trip to Myrtle Beach cost?"
                answer="A Myrtle Beach golf trip typically costs $800–$1,800 per person for a 3-night weekend, including flights, hotel, 3–4 rounds, and meals. Myrtle Beach is one of the most affordable golf destinations in the US with green fees from $30 at public courses to $180 at top clubs like Caledonia. Package deals through golf groups can save 20–30%."
              />
              <FaqItem
                question="What is the best time of year to golf in Myrtle Beach?"
                answer="March through May and September through November are ideal, with temperatures between 65–80°F. Spring is peak season with the best course conditions. Summer is hot and humid but offers the lowest green fees. Winter rounds are possible but temperatures can dip to 45–55°F."
              />
              <FaqItem
                question="How many golf courses are in Myrtle Beach?"
                answer="The Grand Strand has over 100 golf courses within a 60-mile stretch, making it the highest concentration of golf courses in the US. Courses range from budget-friendly municipal layouts to championship designs by Fazio, Dye, and Nicklaus. Most are within 30 minutes of each other."
              />
              <FaqItem
                question="What do non-golfers do in Myrtle Beach?"
                answer="Partners love the Myrtle Beach Boardwalk and SkyWheel, outlet shopping at Tanger Outlets, Brookgreen Gardens (sculpture and wildlife), spa days at resort hotels, beach time (60 miles of coastline), dinner at The Marshwalk in Murrells Inlet, and Barefoot Landing for entertainment and dining."
              />
              <FaqItem
                question="Is Myrtle Beach good for a group golf trip?"
                answer="Myrtle Beach is arguably the best value group golf destination in the US. Most courses offer group rates for 8+ players. Condo rentals near the courses sleep 4–8 and are cheaper than hotels. The mix of 100+ courses means every budget and skill level is covered. Book package deals through local operators for the best rates."
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  CTA                                                      */}
          {/* -------------------------------------------------------- */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Plan your Myrtle Beach trip
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
            <p className="eyebrow">Not sure about Myrtle Beach?</p>
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
