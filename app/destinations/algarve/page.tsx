import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

const GYG_PARTNER = process.env.NEXT_PUBLIC_GYG_PARTNER_ID || '9GLTCAY'
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'fairwaypal-20'

export const metadata: Metadata = {
  title: 'Algarve Golf Trip Guide — Portugal Golf — FairwayPal',
  description:
    'Everything you need for an Algarve golf trip: Monte Rei, Quinta do Lago, Vale do Lobo, real costs, partner activities, and where to stay in southern Portugal.',
  alternates: {
    canonical: 'https://www.fairwaypal.com/destinations/algarve',
    languages: {
      'en-GB': 'https://www.fairwaypal.com/destinations/algarve',
      'en-US': 'https://www.fairwaypal.com/destinations/algarve',
      'x-default': 'https://www.fairwaypal.com/destinations/algarve',
    },
  },
  openGraph: {
    title: 'Algarve Golf Trip Guide — Portugal — FairwayPal',
    description: 'Monte Rei, Quinta do Lago, Vale do Lobo — the honest guide to an Algarve golf trip with real costs and partner activities in southern Portugal.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.fairwaypal.com/destinations/algarve' },
    { '@type': 'ListItem', position: 3, name: 'Algarve, Portugal', item: 'https://www.fairwaypal.com/destinations/algarve' },
  ],
}

const destinationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Algarve, Portugal',
  description:
    'Europe\'s premier golf destination. 300 days of sunshine per year, world-class courses from Monte Rei to Quinta do Lago, and a partner scene built around sea caves, seafood, and Atlantic beaches.',
  url: 'https://www.fairwaypal.com/destinations/algarve',
  touristType: ['Golf', 'Couples', 'International', 'Groups'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does an Algarve golf trip cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An Algarve golf trip typically costs €1,800–3,500 per person for a 4-night trip depending on course selection and accommodation. Premium courses like Monte Rei run €200–350 per round. Quinta do Lago South runs €150–250. Mid-range courses like Quinta da Ria run €50–80. Accommodation in a villa sleeps 8 for €500–1,200/night — split cost makes Portugal very competitive versus UK or US alternatives.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to golf in the Algarve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'March through May and September through November offer ideal golf conditions — temperatures of 18–25°C, low humidity, and uncrowded courses. October is particularly good: warm, quiet, and the courses are in their best post-summer condition. Peak summer (July–August) is hot (30–38°C) with crowded courses and maximum hotel prices. December through February is mild (15–18°C) but the Atlantic can be rough and rain is more likely.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best golf course in the Algarve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monte Rei is the consensus best course in the Algarve — Jack Nicklaus design on clifftops above the Guadiana River, consistently ranked in the top 100 European courses. Quinta do Lago South (also top 100 European) is the most prestigious resort course and the most consistently maintained. San Lorenzo is the most scenic — positioned between Ria Formosa lagoon and Atlantic dunes. Vale do Lobo Royal is the most playable for groups of mixed ability.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do non-golfers do in the Algarve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Algarve has one of the best partner programmes in international golf. The sea cave tours near Lagos (Ponta da Piedade) are genuinely spectacular — kayak or boat tours through limestone arches and grottos. The beaches along the Barlavento coast (Meia Praia, Malhão) are among the best in Europe. Lagos old town, Tavira, and the old town of Faro all reward a half-day of wandering. Wine tasting at Alentejo estates is 90 minutes north.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Algarve better than Scotland or Ireland for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Algarve wins on weather, partner activities, and villa accommodation value. Scotland and Ireland win on links course quality, golf heritage, and the raw experience of playing seaside golf in wind and rain. Groups where the partner experience is as important as the golf quality will prefer the Algarve. Groups who want pure links golf and the pilgrimage experience should choose Scotland or Ireland. A combined trip — Algarve for the sun and food, Scotland for the links — is increasingly popular.',
      },
    },
  ],
}

const OTHER_DESTINATIONS = [
  { name: 'Ireland', href: '/destinations/ireland', tagline: 'Links golf and craic' },
  { name: 'Scotland', href: '/destinations/scotland', tagline: 'The birthplace of golf' },
  { name: 'Kiawah Island', href: '/destinations/kiawah-island', tagline: 'East Coast bucket list' },
]

export default function AlgarvePage() {
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
          Algarve, Portugal
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          Europe&#39;s premier golf destination. 300 days of sunshine per year, Monte Rei and Quinta do Lago among the top 100 European courses, and a partner programme built around sea caves, Atlantic beaches, and some of the best seafood on the continent. The Algarve is what Scottsdale is to the US — the default international group golf trip — for good reason.
        </p>
        <p className="mt-2 text-sm text-ink-2">
          Best time to visit: <span className="text-gold">March — May, September — November</span> (ideal temps, uncrowded courses)
        </p>

        <div className="mt-12 space-y-16">
          {/* -------------------------------------------------------- */}
          {/*  Best Courses                                             */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-fairway-text">Best Courses</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Top picks in the Algarve
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <CourseCard
                name="Monte Rei Golf &amp; Country Club"
                detail="Jack Nicklaus. Consistently rated the best course in Portugal. Clifftop above the Guadiana River in eastern Algarve. Impeccably maintained. Only 27 tee times per day — book well ahead."
                price="€200–350/round"
                tier="Bucket list"
                link="https://www.golfnow.com/course/monte-rei-golf-country-club-27830"
              />
              <CourseCard
                name="Quinta do Lago — South Course"
                detail="The most prestigious resort course in the Algarve. Consistently in the top 100 European courses. Umbrella pines and ocean glimpses. Host of the European Tour. Book 60 days ahead."
                price="€150–250/round"
                tier="Premium"
                link="https://www.golfnow.com/course/quinta-do-lago-south-course-8213"
              />
              <CourseCard
                name="San Lorenzo Golf Course"
                detail="Positioned between Ria Formosa lagoon and Atlantic dunes — the most scenic course in the Algarve. Limited public access (Dona Filipa hotel guests get priority). Spectacular finishing holes."
                price="€120–200/round"
                tier="Premium"
                link="https://www.golfnow.com/course/san-lorenzo-golf-course-8222"
              />
              <CourseCard
                name="Vale do Lobo — Royal Course"
                detail="Two par-3 holes over Atlantic cliffs (16th and 17th) are among the most photographed in Europe. Challenging but playable for mixed-ability groups. Excellent practice facilities."
                price="€100–175/round"
                tier="Premium"
                link="https://www.golfnow.com/course/vale-do-lobo-royal-course-8237"
              />
              <CourseCard
                name="Palmares Ocean Living &amp; Golf"
                detail="Links-style on the Alvor estuary. Ben Hogan design with Atlantic views on the back nine. One of the most underrated courses in Portugal — less famous than Monte Rei but exceptional."
                price="€80–150/round"
                tier="Mid-range"
                link="https://www.golfnow.com/course/palmares-ocean-living-golf-8217"
              />
              <CourseCard
                name="Quinta da Ria"
                detail="Eastern Algarve, near Tavira. Tom Mackenzie design with views over the Ria Formosa nature reserve. Good value compared to the golden triangle courses. Quieter, more relaxed atmosphere."
                price="€50–80/round"
                tier="Mid-range"
                link="https://www.golfnow.com/course/quinta-da-ria-8226"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Partner Activities                                       */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-partner-text">Partner Activities</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What non-golfers do in the Algarve
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <PartnerCard
                name="Ponta da Piedade Sea Cave Tours"
                detail="Near Lagos. Kayak or small boat through limestone arches, grottos, and sea caves. Genuinely spectacular — one of the best half-day activities in all of Portugal. Book in advance in peak season."
                price="€25–45/person"
                link={`https://www.getyourguide.com/lagos-l126/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Atlantic Beach Days"
                detail="The Barlavento coast (Lagos to Sagres) has some of Europe&#39;s best beaches: Meia Praia, Dona Ana, Camilo. Clear water, dramatic sandstone cliffs, less crowded than Mediterranean alternatives."
                price="Free"
                link={`https://www.getyourguide.com/algarve-l132/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Lagos Old Town"
                detail="One of the most attractive small towns in Portugal — cobblestone streets, tiled churches, the slave market museum, and excellent seafood restaurants on the marina. Half-day is sufficient."
                price="Free to explore"
                link={`https://www.getyourguide.com/lagos-l126/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Tavira &amp; Ria Formosa"
                detail="Eastern Algarve, 45 minutes from Faro. Tavira is the most charming town in the Algarve — Roman bridge, whitewashed churches, fresh seafood. The Ria Formosa lagoon has flamingos and deserted barrier islands."
                price="€10–25/person"
                link={`https://www.getyourguide.com/tavira-l121/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Algarve Jeep Safari"
                detail="Inland through the Serra de Monchique — villages, cork forests, and viewpoints. A half-day tour that covers countryside most visitors miss. Good for groups with partners who want an active adventure option."
                price="€40–65/person"
                link={`https://www.getyourguide.com/algarve-l132/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Wine Tasting — Alentejo Day Trip"
                detail="90 minutes north of Faro. Portugal&#39;s wine heartland — Esporão, Herdade do Esporão, Cartuxa. Full-day tour covers two estates with local lunch. Best wine tasting day trip in the Iberian Peninsula."
                price="€80–150/person"
                link={`https://www.getyourguide.com/alentejo-l134/?partner_id=${GYG_PARTNER}`}
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Hotels                                                   */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Where to Stay</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Accommodation in the Algarve
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <HotelCard
                name="Private Villa (central Algarve)"
                detail="A 5-bedroom villa with pool sleeps 10 and splits to very competitive per-person rates for groups of 8–10. The best way to do an Algarve golf trip — your own base, morning coffee by the pool, communal dinners."
                price="€500–1,200/night"
                link="https://www.expedia.com/Algarve-Hotels.d553248634085247.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Conrad Algarve"
                detail="Luxury hotel near Quinta do Lago. Full service, spa, and proximity to the golden triangle courses. Good for groups that prefer hotel service to self-catering. Book well ahead in peak season."
                price="€400–800/night"
                link="https://www.expedia.com/Almancil-Hotels.d6181484.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Hotel Bela Vista — Portimão"
                detail="Boutique hotel with direct Atlantic access, excellent restaurant, and a quieter location west of the main tourist area. 30 minutes from the golden triangle courses, 10 minutes from Lagos."
                price="€200–400/night"
                link="https://www.expedia.com/Portimao-Hotels.d553248634082613667.Travel-Guide-Hotels"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Packing Guide                                            */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Packing Guide</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What to bring to the Algarve
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <PackingItem name="Golf Travel Bag" tag={AMAZON_TAG} />
              <PackingItem name="Sun Protection SPF 50" tag={AMAZON_TAG} />
              <PackingItem name="Packable Rain Jacket" tag={AMAZON_TAG} />
              <PackingItem name="Rangefinder" tag={AMAZON_TAG} />
              <PackingItem name="Cooling Towel" tag={AMAZON_TAG} />
              <PackingItem name="Waterproof Golf Shoes" tag={AMAZON_TAG} />
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
              Algarve golf trip FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="How much does an Algarve golf trip cost?"
                answer="An Algarve golf trip typically costs €1,800–3,500 per person for a 4-night trip. Monte Rei runs €200–350 per round; Quinta do Lago South runs €150–250. Mid-range courses like Quinta da Ria run €50–80. A private villa for 8 costs €500–1,200/night — split cost makes Portugal very competitive versus UK alternatives."
              />
              <FaqItem
                question="What is the best time of year to golf in the Algarve?"
                answer="March through May and September through November. October is particularly good: warm (20–25°C), quiet, and the courses are in their best post-summer condition. Summer is hot (30–38°C) with crowded courses and peak hotel prices. Winter is mild but the Atlantic can be rough."
              />
              <FaqItem
                question="What is the best golf course in the Algarve?"
                answer="Monte Rei is the consensus best — Jack Nicklaus design on clifftops, only 27 tee times per day, consistently top 100 in Europe. Quinta do Lago South is the most prestigious resort course. San Lorenzo is the most scenic. Vale do Lobo Royal is the most playable for mixed-ability groups."
              />
              <FaqItem
                question="What do non-golfers do in the Algarve?"
                answer="The Ponta da Piedade sea cave tours (kayak or boat, near Lagos) are spectacular and unique. Atlantic beaches along the Barlavento coast are among the best in Europe. Lagos old town is charming. The Alentejo wine day trip (90 min north) is excellent. Partners in the Algarve are rarely bored."
              />
              <FaqItem
                question="Is the Algarve better than Scotland or Ireland for golf?"
                answer="The Algarve wins on weather, partner activities, and villa accommodation value. Scotland and Ireland win on links course quality and golf heritage. Groups where the partner experience matters equally should prefer the Algarve. Groups who want pure links golf should choose Scotland or Ireland. The combined trip — Algarve for sun, Scotland for links — is increasingly popular."
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  CTA                                                      */}
          {/* -------------------------------------------------------- */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Plan your Algarve golf trip
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
                { href: '/blog/algarve-for-non-golfers', title: 'The Algarve for Non-Golfers: A Partner\'s Guide', desc: 'The full partner-side guide. Beaches, sea caves, Lagos and Tavira, Benagil cave, wine country.' },
                { href: '/blog/algarve-vs-scotland-golf-trip', title: 'Algarve vs Scotland: Which Should You Pick?', desc: 'A friendly head-to-head between Europe\'s two big group-golf destinations.' },
                { href: '/blog/ireland-vs-scotland-golf-trip', title: 'Ireland vs Scotland Golf Trip', desc: 'How the Algarve compares to the other major European golf destinations.' },
                { href: '/blog/golf-trip-with-non-golfers', title: 'Planning a Golf Trip With Non-Golfers', desc: 'Why the Algarve is one of the best partner-friendly international destinations.' },
                { href: '/blog/golf-trip-packing-list', title: 'The Golf Trip Packing List', desc: 'What to bring for an international golf trip — plus Portugal-specific additions.' },
                { href: '/blog/golf-trip-budget', title: 'Golf Trip Budget Breakdown', desc: 'How Algarve costs compare to Scotland, Ireland, and US destinations.' },
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
            <p className="eyebrow">Not sure about the Algarve?</p>
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
