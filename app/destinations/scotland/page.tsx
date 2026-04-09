import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

const GYG_PARTNER = process.env.NEXT_PUBLIC_GYG_PARTNER_ID || '9GLTCAY'
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'fairwaypal-20'

export const metadata: Metadata = {
  title: 'Scotland Golf Trip Guide — FairwayPal',
  description:
    'Everything you need for a Scotland golf trip: best links courses, partner activities, hotels near St Andrews, and a packing guide. Plan it in 5 minutes with FairwayPal.',
  alternates: { canonical: 'https://fairwaypal.com/destinations/scotland' },
  openGraph: {
    title: 'Scotland Golf Trip Guide — FairwayPal',
    description: 'Best links courses, partner activities, hotels, and packing guide for your Scotland golf trip.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://fairwaypal.com/destinations/scotland' },
    { '@type': 'ListItem', position: 3, name: 'Scotland', item: 'https://fairwaypal.com/destinations/scotland' },
  ],
}

const destinationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Scotland',
  description:
    'The birthplace of golf. St Andrews, links courses along the coast, whisky distilleries, and castles. Scotland is the bucket-list golf trip.',
  url: 'https://fairwaypal.com/destinations/scotland',
  touristType: ['Golf', 'Couples', 'Groups'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a golf trip to Scotland cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Scotland golf trip typically costs $2,500–$5,000 per person for 5–7 nights, including flights from the US, accommodation, 4–5 rounds, and meals. Budget trips staying in B&Bs and playing lesser-known links can come in under $2,000. Playing the Old Course at St Andrews adds $250–$300 for the green fee alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to golf in Scotland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'May through September offers the best weather, with June and July providing the longest daylight hours (up to 18 hours). Late May and early September offer slightly lower prices with still-good conditions. Avoid November through March when many courses have limited hours and weather is harsh.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you play the Old Course at St Andrews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but access requires planning. You can enter the daily ballot (lottery) the day before, book through an authorised tour operator, or secure a tee time through the St Andrews Links Trust website when they open bookings. Having a handicap certificate is required. The ballot is free to enter and results are posted by 4pm.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do non-golfers do in Scotland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scotland offers whisky distillery tours (Speyside and Islay are famous regions), Edinburgh Castle and the Royal Mile, coastal walks along the Fife Coastal Path, spa days at resort hotels, St Andrews town exploration with shops and restaurants, and Highland day trips to see castles and dramatic scenery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do you need for a Scotland golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most groups do 5–7 nights. A focused St Andrews trip works in 5 nights with 3–4 rounds. To include Edinburgh, the Highlands, or courses like Turnberry and Royal Dornoch, plan for 7–10 nights. Factor in jet lag recovery on day one if flying from the US.',
      },
    },
  ],
}

const OTHER_DESTINATIONS = [
  { name: 'Ireland', href: '/destinations/ireland', tagline: 'Links golf and craic' },
  { name: 'Scottsdale', href: '/destinations/scottsdale', tagline: '200+ courses, year-round sun' },
  { name: 'Pinehurst', href: '/destinations/pinehurst', tagline: 'Cradle of American golf' },
]

export default function ScotlandPage() {
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
          Scotland
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          The birthplace of golf. St Andrews, links courses along the coast, whisky distilleries, and castles. Scotland is the bucket-list golf trip that every group talks about for years.
        </p>
        <p className="mt-2 text-sm text-ink-2">
          Best time to visit: <span className="text-gold">May — September</span> (longest days, mildest weather)
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
                name="St Andrews — Old Course"
                detail="The home of golf. The Swilcan Bridge, the Road Hole, the Valley of Sin. Apply for the daily ballot or book through a tour operator."
                price="$250–300/round"
                tier="Bucket list"
                link="https://www.golfnow.com/course/st-andrews-links-old-course-23916"
              />
              <CourseCard
                name="Kingsbarns Golf Links"
                detail="Modern links masterpiece just south of St Andrews. Ocean views on nearly every hole. Walking only."
                price="$200–280/round"
                tier="Bucket list"
                link="https://www.golfnow.com/course/kingsbarns-golf-links-23917"
              />
              <CourseCard
                name="Carnoustie Golf Links — Championship"
                detail="Host of The Open. Arguably the toughest links in Scotland. The closing stretch is legendary."
                price="$180–230/round"
                tier="Premium"
                link="https://www.golfnow.com/course/carnoustie-golf-links-championship-23918"
              />
              <CourseCard
                name="Royal Dornoch — Championship"
                detail="Tom Watson called it the most fun he ever had on a golf course. Remote, stunning, world-class."
                price="$150–200/round"
                tier="Premium"
                link="https://www.golfnow.com/course/royal-dornoch-golf-club-championship-23919"
              />
              <CourseCard
                name="North Berwick — West Links"
                detail="Quirky, historic, and endlessly fun. The Redan hole (par-3 15th) inspired courses worldwide."
                price="$80–130/round"
                tier="Mid-range"
                link="https://www.golfnow.com/course/north-berwick-golf-club-west-links-23920"
              />
              <CourseCard
                name="Castle Course — St Andrews"
                detail="Modern links with dramatic clifftop views. More accessible than the Old Course, equally memorable."
                price="$100–160/round"
                tier="Mid-range"
                link="https://www.golfnow.com/course/st-andrews-links-castle-course-23921"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Partner Activities                                       */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-partner-text">Partner Activities</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What non-golfers do in Scotland
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <PartnerCard
                name="Whisky Distillery Tour"
                detail="Visit a working distillery in Speyside or Fife. Tastings, barrel rooms, and the history behind single malts."
                price="$30–80/person"
                link={`https://www.getyourguide.com/scotland-l439/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Edinburgh Castle & Royal Mile"
                detail="Scotland's capital in a day. The castle, Holyrood Palace, and the best fish and chips you'll find."
                price="$20–40/person"
                link={`https://www.getyourguide.com/edinburgh-l44/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="St Andrews Town Exploration"
                detail="Boutique shops, the university, the cathedral ruins, and afternoon tea. Walkable in a few hours."
                price="Free–$30/person"
                link={`https://www.getyourguide.com/st-andrews-l32242/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Fife Coastal Path Walk"
                detail="Scenic coastal walk between fishing villages. Do the Elie to Anstruther stretch for the best views and a fish supper at the end."
                price="Free"
                link={`https://www.getyourguide.com/scotland-l439/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Highland Day Trip"
                detail="Glencoe, Loch Ness, or the Trossachs. Dramatic scenery, castle stops, and roadside pubs."
                price="$60–120/person"
                link={`https://www.getyourguide.com/scottish-highlands-l956/?partner_id=${GYG_PARTNER}`}
              />
              <PartnerCard
                name="Spa Day at Old Course Hotel"
                detail="The Kohler Waters Spa at the Old Course Hotel. Views of the 17th hole from the rooftop terrace."
                price="$150–250/person"
                link={`https://www.getyourguide.com/st-andrews-l32242/?partner_id=${GYG_PARTNER}`}
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
                name="Old Course Hotel — St Andrews"
                detail="Iconic views of the Road Hole. Rooftop spa, fine dining, and you can walk to the first tee."
                price="$350–600/night"
                link="https://www.expedia.com/St-Andrews-Hotels.d6053283.Travel-Guide-Hotels"
              />
              <HotelCard
                name="Rusacks St Andrews"
                detail="Boutique hotel overlooking the 18th green of the Old Course. Recently renovated, rooftop bar."
                price="$280–450/night"
                link="https://www.expedia.com/St-Andrews-Hotels.d6053283.Travel-Guide-Hotels"
              />
              <HotelCard
                name="The Inn at Lathones"
                detail="Country inn 10 minutes from St Andrews. Budget-friendly for groups, charming rooms, great restaurant."
                price="$120–200/night"
                link="https://www.expedia.com/St-Andrews-Hotels.d6053283.Travel-Guide-Hotels"
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Packing Guide                                            */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow">Packing Guide</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              What to bring to Scotland
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <PackingItem name="Waterproof Golf Jacket" tag={AMAZON_TAG} />
              <PackingItem name="Golf Travel Bag" tag={AMAZON_TAG} />
              <PackingItem name="Rangefinder" tag={AMAZON_TAG} />
              <PackingItem name="Waterproof Golf Shoes" tag={AMAZON_TAG} />
              <PackingItem name="Packable Rain Pants" tag={AMAZON_TAG} />
              <PackingItem name="Golf Umbrella" tag={AMAZON_TAG} />
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
              Scotland golf trip FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="How much does a golf trip to Scotland cost?"
                answer="A Scotland golf trip typically costs $2,500–$5,000 per person for 5–7 nights, including flights from the US, accommodation, 4–5 rounds, and meals. Budget trips staying in B&Bs and playing lesser-known links can come in under $2,000. Playing the Old Course at St Andrews adds $250–$300 for the green fee alone."
              />
              <FaqItem
                question="What is the best time of year to golf in Scotland?"
                answer="May through September offers the best weather, with June and July providing the longest daylight hours (up to 18 hours). Late May and early September offer slightly lower prices with still-good conditions. Avoid November through March when many courses have limited hours and weather is harsh."
              />
              <FaqItem
                question="Can you play the Old Course at St Andrews?"
                answer="Yes, but access requires planning. You can enter the daily ballot (lottery) the day before, book through an authorised tour operator, or secure a tee time through the St Andrews Links Trust website when they open bookings. Having a handicap certificate is required. The ballot is free to enter and results are posted by 4pm."
              />
              <FaqItem
                question="What do non-golfers do in Scotland?"
                answer="Scotland offers whisky distillery tours (Speyside and Islay are famous regions), Edinburgh Castle and the Royal Mile, coastal walks along the Fife Coastal Path, spa days at resort hotels, St Andrews town exploration with shops and restaurants, and Highland day trips to see castles and dramatic scenery."
              />
              <FaqItem
                question="How many days do you need for a Scotland golf trip?"
                answer="Most groups do 5–7 nights. A focused St Andrews trip works in 5 nights with 3–4 rounds. To include Edinburgh, the Highlands, or courses like Turnberry and Royal Dornoch, plan for 7–10 nights. Factor in jet lag recovery on day one if flying from the US."
              />
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  CTA                                                      */}
          {/* -------------------------------------------------------- */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Plan your Scotland trip
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
            <p className="eyebrow">Not sure about Scotland?</p>
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
