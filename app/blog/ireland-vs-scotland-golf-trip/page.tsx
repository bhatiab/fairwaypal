import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 5, 2026'

export const metadata: Metadata = {
  title: 'Ireland vs Scotland Golf Trip: Which One Should You Book? — FairwayPal',
  description:
    'You\'ve decided on an international golf trip. Now: Ireland or Scotland? Honest comparison of courses, cost, logistics, partner experience, and a verdict by group type.',
  alternates: { canonical: 'https://fairwaypal.com/blog/ireland-vs-scotland-golf-trip' },
  openGraph: {
    title: 'Ireland vs Scotland Golf Trip: Which One Should You Book?',
    description:
      'Courses, costs, logistics, partner experience, and a clear verdict. The honest comparison so you can stop debating and start booking.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ireland vs Scotland Golf Trip: Which One Should You Book?',
  description:
    'You\'ve decided on an international golf trip. Honest comparison of courses, cost, logistics, partner experience, weather, and a verdict by group type.',
  url: 'https://fairwaypal.com/blog/ireland-vs-scotland-golf-trip',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://fairwaypal.com/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Ireland vs Scotland Golf Trip',
      item: 'https://fairwaypal.com/blog/ireland-vs-scotland-golf-trip',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Ireland or Scotland better for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your group. Scotland wins on bucket-list course prestige — St Andrews, Royal Dornoch, Carnoustie. Ireland wins on overall group experience — the craic, the pubs, the Cliffs of Moher, the warmth. For dedicated golfers chasing famous names, Scotland. For groups where partner experience and overall fun matters as much as the golf, Ireland.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ireland or Scotland cheaper for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ireland is typically 10–20% cheaper overall. Green fees are lower on average (€80–200 vs £100–300 for equivalent quality). Accommodation is comparable. Car hire is required in both, but driving on the left applies to both. Flights from the US East Coast are similar price. Ireland\'s best courses (Ballybunion, Lahinch, Old Head) cost less than Scotland\'s most famous (Old Course St Andrews, Carnoustie).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need to rent a car for a golf trip to Ireland or Scotland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for both. Public transport doesn\'t serve most golf courses adequately. You\'ll drive on the left in both countries. Ireland uses kilometres, Scotland uses miles. Roads in both can be narrow — especially in rural Kerry and the Scottish Highlands. An automatic transmission is strongly recommended. International driving licence is not required for US visitors, but your US licence must be carried.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for a golf trip to Ireland or Scotland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'May–September for both. June and early July are the sweet spots: longest daylight hours (8pm–9pm sunset in Scotland in June), better weather probability, and courses in best condition. August is peak tourist season — more crowded and more expensive. April and October are viable for experienced links players who don\'t mind variable conditions and want lower prices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can non-golfers enjoy Ireland and Scotland golf trips?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are excellent for non-golfers. Ireland: Galway city, the Cliffs of Moher, Ring of Kerry, castle tours, pub culture, whiskey distilleries. Scotland: Edinburgh (castle, Royal Mile, museums), the Highlands, Loch Ness, whisky distilleries, coastal walking. Partners on both trips consistently report enjoying themselves more than expected. Ireland has a slight edge on partner enthusiasm — the culture and pub experience is hard to match.',
      },
    },
  ],
}

const COMPARISON = [
  {
    category: 'Course quality',
    scotland: 'The highest ceiling. St Andrews, Royal Dornoch, Carnoustie, Muirfield, Turnberry — the most famous courses in golf history are here. The sheer concentration of top-100 links is unmatched anywhere in the world.',
    ireland: 'World-class, but the floor is slightly lower. Ballybunion Old, Lahinch, Royal County Down, Royal Portrush, Old Head — genuinely elite courses. Fewer internationally famous names than Scotland, but the golf is just as good.',
    edge: 'Scotland',
  },
  {
    category: 'Cost',
    scotland: 'Green fees run £80–300/round depending on course. The Old Course at St Andrews is £250–295 when you get a ballot place. Premium courses like Carnoustie and Turnberry are £180–280. Budget links are £40–80.',
    ireland: 'Green fees run €60–220/round. Old Head of Kinsale is the outlier at €350+. Ballybunion, Lahinch, and Waterville run €100–170. Hidden gems across Clare and Kerry offer excellent golf at €50–90.',
    edge: 'Ireland (10–20% cheaper on average)',
  },
  {
    category: 'Logistics',
    scotland: 'Fly into Edinburgh or Glasgow, occasionally Inverness for the Highlands. Roads are narrow in the Highlands. The A9 and M8 connect the main golf regions. Driving on the left. Most courses are within 2 hours of Edinburgh.',
    ireland: 'Fly into Dublin, Shannon, or Cork depending on route. Shannon is best for southwest Ireland (Kerry, Clare — the best golf). Roads in Kerry can be very narrow. Ring of Kerry is genuinely challenging to drive in a rental car.',
    edge: 'Scotland (slightly better infrastructure)',
  },
  {
    category: 'Partner experience',
    scotland: 'Edinburgh is one of Europe\'s most compelling cities — castle, Arthur\'s Seat, whisky bars, world-class restaurants. The Highlands are spectacular. Cultural depth is high. Weather variability is the main challenge.',
    ireland: 'Partners consistently love Ireland. Galway is warm and walkable. The Cliffs of Moher are genuinely jaw-dropping. The pub culture is inviting and unpretentious. Whiskey distillery tours are a full afternoon. Ireland\'s people are famously warm.',
    edge: 'Ireland (slight edge — culture is more accessible to non-golf partners)',
  },
  {
    category: 'Weather',
    scotland: 'More variable. The Highlands can have four seasons in one day. June–August is the most stable window. Links courses in the east (St Andrews, Carnoustie) are drier than the west. Always pack waterproofs.',
    ireland: 'Also unpredictable, but milder. The Gulf Stream keeps temperatures in the 12–18°C range in summer. Southwest Ireland (Kerry, Clare) gets the most rain. Waterproofs are essential regardless of season.',
    edge: 'Draw — both can be challenging, both can be glorious',
  },
  {
    category: 'Group vibe',
    scotland: 'Feels like a pilgrimage. Serious golfers come back different — playing St Andrews or Royal Dornoch is a genuine experience that stays with people. The atmosphere is reverential at the famous courses.',
    ireland: 'Feels like the best weekend of your life. The combination of great golf, great craic, great pubs, and genuinely friendly locals creates a trip energy that domestic destinations can\'t match.',
    edge: 'Depends on your group — serious golf or overall best time',
  },
]

export default function IrelandVsScotlandGolfTripPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }}
      />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Ireland vs Scotland for a Golf Trip: Which One Should You Book?
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 5, 2026</span>
          <span>·</span>
          <span>9 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />

        {/* Quick verdict */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The short answer</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Choose Scotland</span> if your group is chasing famous course names (St Andrews, Carnoustie, Royal Dornoch) and the bucket-list prestige matters. Budget £2,800–4,500pp.
          </p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Choose Ireland</span> if you want the best overall group experience — great golf, better craic, warmer culture, slightly lower cost. Budget €2,500–4,000pp.
          </p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            If partners are coming, Ireland has the edge. If one or more people have St Andrews on their bucket list, Scotland wins by default.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Head to head */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Head-to-head comparison
            </h2>
            <div className="mt-6 space-y-6">
              {COMPARISON.map((row) => (
                <div key={row.category} className="rounded-xl border border-border bg-card/60 overflow-hidden">
                  <div className="border-b border-border bg-bg-3 px-5 py-3 flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">{row.category}</p>
                    <p className="text-xs font-medium text-gold">Edge: {row.edge}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.1em] text-fairway-text mb-2">Scotland</p>
                      <p className="text-sm leading-7 text-muted-foreground">{row.scotland}</p>
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.1em] text-partner-text mb-2">Ireland</p>
                      <p className="text-sm leading-7 text-muted-foreground">{row.ireland}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Verdict by group type */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Verdict by group type
            </h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  type: 'Dedicated golf group — bucket list focus',
                  verdict: 'Scotland',
                  reason: 'St Andrews, Royal Dornoch, and Carnoustie are not replicated anywhere. If the trip\'s primary purpose is playing the courses you\'ve talked about for 20 years, Scotland is the correct answer.',
                },
                {
                  type: 'Mixed group — partners coming',
                  verdict: 'Ireland',
                  reason: 'Partners consistently have a better time in Ireland. Galway, the Cliffs of Moher, pub culture, and Irish warmth make for a trip where the non-golfers come home saying they\'d go back.',
                },
                {
                  type: 'First international golf trip',
                  verdict: 'Ireland',
                  reason: 'Lower pressure, warmer culture, slightly more forgiving logistics. Ireland is a better first international golf trip. Save Scotland for when you know what you\'re doing.',
                },
                {
                  type: 'Budget-conscious group',
                  verdict: 'Ireland',
                  reason: 'Ireland is consistently 10–20% cheaper for equivalent quality. The courses are just as good. The Green fees are lower. The accommodation is comparable.',
                },
                {
                  type: 'St Andrews is on the list',
                  verdict: 'Scotland (obviously)',
                  reason: 'There\'s no equivalent in Ireland. If St Andrews is the reason for the trip, the decision was already made.',
                },
              ].map((item) => (
                <div key={item.type} className="rounded-xl border border-border bg-card/60 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-semibold text-foreground">{item.type}</p>
                    <span className={`shrink-0 rounded-sm border px-2 py-0.5 text-xs font-bold uppercase tracking-[0.08em] ${item.verdict === 'Ireland' ? 'border-partner/40 text-partner-text' : 'border-fairway/40 text-fairway-text'}`}>
                      {item.verdict}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The courses */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The courses worth travelling for
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-fairway-text mb-3">Scotland</p>
                <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
                  <li>Old Course at St Andrews — the most famous course in the world</li>
                  <li>Royal Dornoch — consistently top-10 globally, worth the drive north</li>
                  <li>Carnoustie — brutal, historic, unforgettable Open venue</li>
                  <li>Turnberry (Ailsa) — dramatic coastal views, Ryder Cup history</li>
                  <li>Kingsbarns — modern links perfection near St Andrews</li>
                  <li>Castle Stuart — overlooking the Moray Firth, genuinely spectacular</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-partner-text mb-3">Ireland</p>
                <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
                  <li>Ballybunion Old — one of the greatest courses on earth, period</li>
                  <li>Royal County Down — jaw-dropping Mourne Mountains backdrop</li>
                  <li>Royal Portrush — recent Open host, Dunluce Links is world-class</li>
                  <li>Lahinch — classic links on the Clare coast, wild and fun</li>
                  <li>Waterville — remote Kerry links, Tiger Woods designed alterations</li>
                  <li>Old Head of Kinsale — clifftop spectacle, expensive and worth it</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Plan both */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8">
            <h2 className="text-2xl font-display font-light text-foreground">
              Planning either trip
            </h2>
            <p className="mt-3 text-base leading-8 text-muted-foreground">
              Both trips need 6–9 months of planning for good tee time availability. Key logistics: car hire, accommodation near the courses (not in the city), morning tee times (links play better in the morning), and travel insurance.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/destinations/ireland" className="rounded-xl border border-border bg-bg-2 p-4 flex-1 hover:border-gold/30 transition-colors">
                <p className="text-sm font-semibold text-foreground">Ireland destination guide →</p>
                <p className="mt-1 text-xs text-muted-foreground">Courses, partner activities, hotels, packing guide</p>
              </Link>
              <Link href="/destinations/scotland" className="rounded-xl border border-border bg-bg-2 p-4 flex-1 hover:border-gold/30 transition-colors">
                <p className="text-sm font-semibold text-foreground">Scotland destination guide →</p>
                <p className="mt-1 text-xs text-muted-foreground">Courses, partner activities, hotels, packing guide</p>
              </Link>
            </div>
            <div className="mt-4">
              <Link className="primary-link" href="/plan">
                Plan either trip with FairwayPal
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Common questions
            </h2>
            <div className="mt-6 space-y-3">
              {faqSchema.mainEntity.map((q) => (
                <details key={q.name} className="group rounded-xl border border-border bg-card/60">
                  <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-semibold text-foreground">
                    {q.name}
                    <span className="ml-2 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted-foreground">
                    {q.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Related */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Related guides
            </h2>
            <div className="mt-6 space-y-3">
              {[
                { href: '/blog/best-bachelor-party-golf-destinations', title: 'Best Bachelor Party Golf Destinations', desc: 'How Ireland and Scotland rank against the US options.' },
                { href: '/blog/golf-trip-budget', title: 'Golf Trip Budget Breakdown', desc: 'Full cost breakdown for both international destinations.' },
                { href: '/blog/golf-trip-with-non-golfers', title: 'Golf Trip With Non-Golfers', desc: 'Partner experience guide for both Ireland and Scotland.' },
                { href: '/blog/golf-trip-packing-list', title: 'The Golf Trip Packing List', desc: 'Links golf packing guide — waterproofs, layers, and what actually matters.' },
              ].map(({ href, title, desc }) => (
                <Link key={href} href={href} className="block rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30">
                  <p className="text-base font-semibold text-foreground">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
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
