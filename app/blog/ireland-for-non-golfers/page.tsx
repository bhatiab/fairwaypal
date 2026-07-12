/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Ireland for Non-Golfers: A Partner\'s Guide | FairwayPal',
  description:
    'A friendly, honest guide to Ireland for the partner who is not playing. The Cliffs of Moher, the Ring of Kerry, Killarney National Park, Galway pubs, the Dingle Peninsula, Dublin, and whiskey distilleries.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/ireland-for-non-golfers' },
  openGraph: { title: 'Ireland for Non-Golfers: A Partner\'s Guide', description: 'How an Ireland golf trip works for the partner who is not teeing off. Cliffs, castles, pubs, music, distilleries.' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ireland for Non-Golfers: A Partner\'s Guide',
  description: 'A practical guide to Ireland for non-golfing partners. Cliffs of Moher, Ring of Kerry, Killarney, Galway, Dingle, Dublin, distilleries, and a sample 5-day partner itinerary.',
  url: 'https://www.fairwaypal.com/blog/ireland-for-non-golfers',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://www.fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://www.fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.fairwaypal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Ireland for Non-Golfers', item: 'https://www.fairwaypal.com/blog/ireland-for-non-golfers' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Ireland a good destination for non-golfing partners?', acceptedAnswer: { '@type': 'Answer', text: "Yes, for partners who love history, dramatic coastlines, traditional music, and a slow pleasant pace. Ireland gives you the Cliffs of Moher, the Ring of Kerry scenic drive, Killarney National Park, Galway pubs and music sessions, the Dingle Peninsula, Dublin city, and whiskey distillery tours. The catch is the weather: cool, often wet, and the cultural offer rewards partners who arrive interested in history and the outdoors. If your partner loves Scotland-style trips, they will love Ireland." } },
    { '@type': 'Question', name: 'What is there to do in Ireland for non-golfers?', acceptedAnswer: { '@type': 'Answer', text: "The signature non-golf experiences are: the Cliffs of Moher (700 foot Atlantic cliffs in County Clare), the Ring of Kerry scenic drive (110 miles around the Iveragh Peninsula), Killarney National Park (Ireland's first national park, lakes and mountains), Galway city for pubs and traditional music, the Dingle Peninsula coastal drive, Dublin (Trinity College, Guinness Storehouse, Temple Bar), and whiskey distillery tours (Jameson, Midleton, Teeling, Slane). Most partners do a mix of three or four across a 5 to 7 night trip." } },
    { '@type': 'Question', name: 'Should partners visit Dublin during an Ireland golf trip?', acceptedAnswer: { '@type': 'Answer', text: "Depends on your trip's geography. If your group is playing the southwest (Ballybunion, Lahinch, Tralee, Waterville) or the west coast, Dublin is a 3 to 4 hour drive away and not on the natural route. Galway is the closer city anchor. If your group is playing in Northern Ireland (Royal County Down, Royal Portrush) or the east coast, Dublin is a natural base or a one-night stopover. Consider a 1 to 2 night Dublin extension before or after the main trip if your partner wants the city experience." } },
    { '@type': 'Question', name: 'How long should non-golfing partners stay in Ireland?', acceptedAnswer: { '@type': 'Answer', text: "Five to seven nights is the sweet spot, matching most golf trips. Five covers the Cliffs of Moher, Killarney, Galway, and a slow rhythm. Seven adds the Ring of Kerry, the Dingle Peninsula, or a Dublin extension. Most golf groups visiting Ireland do 7 to 10 nights total because the travel time from the US makes a shorter trip uneconomic; partners often take advantage and add a Dublin city break or a Connemara extension." } },
    { '@type': 'Question', name: 'When is the best time of year for partners to visit Ireland?', acceptedAnswer: { '@type': 'Answer', text: "May through September. June and July offer the longest daylight (up to 17 hours) and the warmest air (15 to 20°C, mid 50s to upper 60s Fahrenheit). Late May and early September are quieter and slightly cheaper with conditions still good. Avoid November to March if you want consistent conditions: many tourist sites operate on reduced schedules and the weather is harsh. Even in summer, expect rain at some point. Pack layers and waterproofs at any time of year." } },
  ],
}

export default function IrelandForNonGolfersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">Ireland for Non-Golfers: A Partner's Guide</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>May 6, 2026</span><span>·</span><span>11 min read</span></div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          An Ireland golf trip is one of the great group golf experiences in the world: dramatic links courses, friendly people, and pub evenings that go on longer than they should. For a partner who is not teeing off, the question is whether the cool wet weather and the slower rural pace are the holiday they want. For partners who love history, walking, music, and a good pour of stout, Ireland is genuinely magical. Here is the friendly guide to making it a great trip for whoever is not on the first tee.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The honest take</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Ireland is wonderful</span> for partners who love history, dramatic coastlines, traditional music, walking, and a slow Irish pace. The Cliffs of Moher, the Ring of Kerry, Galway pub nights, and a Dublin city break add up to a memorable holiday.</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Ireland is not the right pick</span> for partners who want sun, warmth, or a beach holiday. If that is your partner, see <Link href="/destinations/algarve" className="text-gold hover:underline">the Algarve</Link>.</p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Why Ireland works for the right partner</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Ireland is geographically small (about 300 miles end to end) but culturally dense. Within a 90 minute drive of most golf bases you can hit a major Atlantic cliff, a national park, a charming small town, and a working distillery. The signature southwest golf circuit (Ballybunion, Lahinch, Tralee, Waterville) sits within easy reach of Killarney, the Cliffs of Moher, the Dingle Peninsula, and Galway. The northwest (Donegal) and Northern Ireland (Royal County Down, Royal Portrush) have their own equally rich partner offerings.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The honest caveat: Ireland is not a city break. The cities (Dublin, Galway, Cork) are charming but small by European standards. The trip is mostly rural, scenic, and unhurried. Partners who arrive expecting Paris will be disappointed; partners who arrive expecting wild coast and live music in pubs will love it.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">A sample 5-day partner itinerary (southwest base)</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Most US groups play the southwest (Ballybunion, Lahinch, Tralee), so this itinerary assumes a Killarney or Lahinch base. The shape: one anchor experience per day, generous time in between, dinners with the group.</p>
            <div className="mt-6 space-y-4">
              <DayCard day="Day 1: jet lag and Killarney" morning="Slow start at the hotel after the overnight flight. Breakfast on the patio." afternoon="Walk Killarney town: St Mary's Cathedral, Killarney House, the National Park entrance from town. Tea at one of the cafes." evening="Dinner at one of Killarney's good restaurants (Bricin, Cellar One). Pint of Guinness with the group." />
              <DayCard day="Day 2: the Ring of Kerry" morning="Drive the Ring of Kerry (110 miles, allow 6 hours with stops). Stops at Sneem, Kenmare, Ladies View, and the Gap of Dunloe." afternoon="Lunch in Kenmare (charming small town, good restaurants). Continue around the loop." evening="Back in Killarney by 6 PM. Dinner with the group. Pints at one of the music pubs." />
              <DayCard day="Day 3: Cliffs of Moher and Galway" morning="Drive 2.5 hours north to the Cliffs of Moher. Walk the cliff trail (700 foot drops to the Atlantic). The visitor centre has good context." afternoon="Drive 90 minutes to Galway. Walk the Latin Quarter: Shop Street, the Spanish Arch, the Cathedral. Lunch at Ard Bia at Nimmo's or Aniar." evening="Stay over in Galway for the night. Pub crawl on Quay Street: The King's Head, Tig Coili, The Quays for traditional music sessions." />
              <DayCard day="Day 4: Dingle Peninsula" morning="Drive to Dingle (about 90 minutes from Killarney or 3 hours from Galway). Park near the harbour." afternoon="Slea Head Drive (the loop around the peninsula, about 2 hours with stops). Beehive huts, the Blasket Islands viewpoint, Coumeenoole Beach." evening="Dinner in Dingle town (Out of the Blue for seafood, The Global Village for upscale). Pubs with music until late." />
              <DayCard day="Day 5: distillery and slow" morning="Sleep in. Coffee in town. Visit the Dingle Whiskey Distillery (small, intimate, excellent tour) or drive back to Killarney for a Killarney Whiskey distillery experience." afternoon="Spa appointment at the Killarney Park Hotel or Aghadoe Heights spa. Hot tub, treatments, a long lunch." evening="Final group dinner. The pubs in Killarney have music sessions every night in summer." />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">For a 7-night trip, fold in a Connemara day, an extra Dublin night before or after, or a Dingle overnight to slow things down.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The Cliffs of Moher and the wild Atlantic</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The Cliffs of Moher in County Clare are the single most photographed natural attraction in Ireland: 700 feet of vertical Atlantic cliff stretching for 5 miles. The visitor centre opened in 2007 and is built into the cliff itself, with good context exhibits. The cliff walk extends for several miles in both directions; even a short walk from the centre to O'Brien's Tower (15 minutes) is genuinely breathtaking.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Practical notes: arrive before 11 AM or after 4 PM to avoid the biggest tour bus crowds. In high winds (which is most days), stay behind the safety walls; people genuinely do get blown over the edge in extreme weather. Allow 2 to 3 hours for a relaxed visit including lunch at the visitor centre cafe. Pair with a Cliffs of Moher boat tour from Doolin (45 minutes) for an unforgettable view from below.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Killarney and the southwest</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Killarney is the partner anchor town for most southwest golf trips. About 30,000 people, walkable centre, a national park on the doorstep, and one of Ireland's best small-town restaurant scenes. It is touristy in season but charmingly so.</p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Killarney National Park</strong> (Ireland's first, 1932) covers 25,000 acres of lakes, mountains, and ancient oak woodland. The Muckross House and Gardens are within the park; a jaunting car (horse and trap) ride from town is touristy but enjoyable.</li>
              <li><strong>Ross Castle</strong> on Lough Leane, accessible by boat or a 30 minute walk from Killarney centre. The boat trip across the lake is the better option.</li>
              <li><strong>Gap of Dunloe</strong>, a glacial valley between the MacGillycuddy's Reeks and Purple Mountain, is a classic Irish landscape walk or a guided pony trek.</li>
              <li><strong>The Ring of Kerry</strong> is the famous 110 mile scenic drive around the Iveragh Peninsula, starting and ending in Killarney. A full day with stops; many groups do it on a non-golf day.</li>
              <li><strong>Aghadoe Heights spa</strong> (5 minutes outside Killarney) and <strong>The Brehon spa</strong> are the two best partner spa options. Book ahead in summer.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Galway and the west</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Galway is the partner anchor for west-coast golf trips and a worthwhile day trip from Killarney bases. About 80,000 people, with a compact medieval centre called the Latin Quarter that is full of pubs, restaurants, and street performers. Genuinely one of the most charming small cities in Europe.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The pub scene is the headline. Tig Coili, The King's Head, The Crane Bar, and Tigh Neachtain are the famous traditional music pubs, with sessions starting around 9 PM most nights. Music in Ireland is participatory; sit at the bar, nurse a Guinness, and let the session unfold around you. Good restaurants: Ard Bia at Nimmo's (modern Irish on the harbour), Aniar (Michelin-starred), Loam (also Michelin-starred). Reservations recommended.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Day trips from Galway: Connemara (rural, dramatic, no major town but stunning landscapes), the Aran Islands (ferry from Rossaveel, day trip to Inis Mor), the Burren (limestone karst landscape between Galway and Lahinch).</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Whiskey distilleries</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Irish whiskey is having a moment, and distillery tours are excellent partner half-days. Three good ones to know:</p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Jameson Midleton Distillery (Cork)</strong>: the big tourist-ready experience. Full historical tour, tasting flight, gift shop. About 90 minutes from Killarney. Book ahead.</li>
              <li><strong>Dingle Distillery (Dingle Peninsula)</strong>: smaller, more intimate, started in 2012. Excellent tour, the gin is also worth tasting. Pair with a Dingle day.</li>
              <li><strong>Teeling Distillery (Dublin)</strong>: the first new distillery in Dublin in 125 years (opened 2015). Worth a stop on a Dublin extension.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Tours typically run 60 to 90 minutes and cost €20 to €40 depending on the tasting flight. Buy a bottle to bring home; Irish whiskey at the distillery is fresh, often bottle-strength variants you cannot get elsewhere.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Pace, weather, and packing</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Ireland runs at a leisurely pace, especially outside Dublin. Lunch is unhurried, dinner is leisurely (8 to 9 PM is normal), and pubs stay open until midnight or later in summer. Lean into it.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Weather: May to September is the realistic visiting window with daytime temperatures of 12 to 20°C (mid 50s to upper 60s Fahrenheit). Rain is possible at any time and likely several times during a 7 day trip. June and July offer the longest daylight (up to 17 hours, dinner at 9 PM in full sun is normal).</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Pack: layers (long-sleeve T-shirt, fleece or jumper, packable rain jacket), waterproof walking shoes, a wool hat for evenings even in summer, and a smart-casual dinner outfit for at least one night. Our <Link href="/blog/golf-trip-packing-list" className="text-gold hover:underline">golf trip packing list</Link> has a full partner section.</p>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Plan a trip the partners will actually enjoy.</h2>
            <p className="mt-3 text-base text-muted-foreground">FairwayPal builds a parallel itinerary for non-golfers alongside the golf, so partners arrive knowing exactly what their days look like.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Ireland for non-golfers FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem question="Is Ireland a good destination for non-golfing partners?" answer="Yes, for partners who love history, dramatic coastlines, traditional music, and a slow Irish pace. Cliffs of Moher, Ring of Kerry, Killarney, Galway pubs, Dingle, Dublin, distilleries. Not the right pick for partners who want sun and warmth." />
              <FaqItem question="What is there to do for non-golfers?" answer="Cliffs of Moher, Ring of Kerry drive, Killarney National Park, Galway pubs and music, Dingle Peninsula, Dublin city, whiskey distilleries (Jameson, Dingle, Teeling)." />
              <FaqItem question="Should partners visit Dublin?" answer="Depends on the trip's geography. Southwest-based trips: Dublin is 3-4 hours away, consider a 1-2 night extension. Northern Ireland or east coast trips: Dublin is the natural base." />
              <FaqItem question="How long should partners stay?" answer="Five to seven nights matches most golf trips. Most US groups do 7-10 nights total; partners can add a Dublin or Connemara extension." />
              <FaqItem question="When is the best time of year for partners?" answer="May to September. June and July have the longest daylight (up to 17 hours). Late May and early September are quieter. Avoid November-March." />
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/destinations/ireland" title="Ireland Destination Guide" description="The full golf-side guide: courses, hotels, partner activities, packing." />
              <RelatedPost href="/blog/ireland-vs-scotland-golf-trip" title="Ireland vs Scotland" description="The two big British Isles links options compared." />
              <RelatedPost href="/blog/scotland-for-non-golfers" title="Scotland for Non-Golfers" description="The northern equivalent: Edinburgh, Highlands, distilleries, the Fife Coastal Path." />
              <RelatedPost href="/blog/algarve-for-non-golfers" title="The Algarve for Non-Golfers" description="The sunny European alternative." />
              <RelatedPost href="/blog/golf-trip-with-non-golfers" title="Golf Trips With Non-Golfers" description="The general playbook for planning a trip that works for the whole group." />
              <RelatedPost href="/blog/golf-trip-packing-list" title="Golf Trip Packing List" description="What to pack, with a Scotland and Ireland weather section." />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function DayCard({ day, morning, afternoon, evening }: { day: string; morning: string; afternoon: string; evening: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-5">
      <h3 className="text-base font-semibold text-foreground">{day}</h3>
      <div className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
        <p><span className="font-bold uppercase tracking-[0.12em] text-fairway-text text-xs">Morning · </span>{morning}</p>
        <p><span className="font-bold uppercase tracking-[0.12em] text-fairway-text text-xs">Afternoon · </span>{afternoon}</p>
        <p><span className="font-bold uppercase tracking-[0.12em] text-fairway-text text-xs">Evening · </span>{evening}</p>
      </div>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-border bg-card/60">
      <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-semibold text-foreground">
        {question}
        <span className="ml-2 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted-foreground">{answer}</div>
    </details>
  )
}

function RelatedPost({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} className="group rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30">
      <h3 className="text-base font-semibold text-foreground group-hover:text-gold transition-colors">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
    </Link>
  )
}
