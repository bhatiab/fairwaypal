/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Scotland for Non-Golfers: A Partner\'s Guide | FairwayPal',
  description:
    'A friendly, honest guide to Scotland for the partner who is not playing. St Andrews, Edinburgh, the Highlands, whisky country, the Fife Coastal Path, castles, and a daily rhythm that genuinely works.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/scotland-for-non-golfers' },
  openGraph: {
    title: 'Scotland for Non-Golfers: A Partner\'s Guide',
    description:
      'How a Scotland golf trip works for the partner who is not teeing off. St Andrews, Edinburgh, whisky, castles, and the Highlands.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Scotland for Non-Golfers: A Partner\'s Guide',
  description:
    'A practical guide to Scotland for non-golfing partners. St Andrews town, Edinburgh, the Fife Coastal Path, distillery tours, the Highlands, castles, and a sample 5-day partner itinerary.',
  url: 'https://www.fairwaypal.com/blog/scotland-for-non-golfers',
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
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Scotland for Non-Golfers',
      item: 'https://www.fairwaypal.com/blog/scotland-for-non-golfers',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Scotland a good destination for non-golfing partners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, for partners who love history, castles, walking, whisky, and dramatic scenery. Scotland is genuinely rich for non-golfers: Edinburgh as the city anchor, the Fife Coastal Path right next to St Andrews, castles in nearly every county, distillery tours in Speyside and Islay, and the Highlands within reach for a day trip. The catch is the weather and the pace: cool, often rainy, and slower than a beach holiday. If your partner is happy in a sweater with a coffee on a coastal walk, Scotland is wonderful. If they want sun and warmth, choose the Algarve.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is there to do in Scotland for non-golfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The signature non-golf experiences are: a day in Edinburgh (Edinburgh Castle, the Royal Mile, the National Museum, dinner in the Old Town), walking the Fife Coastal Path between Crail and Anstruther, exploring St Andrews itself (the cathedral ruins, the castle, the Old Course Hotel spa), a Speyside or Highland Park distillery tour, a Highland day trip to Glencoe and Loch Ness, and visits to Falkland Palace, Glamis Castle, or Stirling Castle. Most partners do a mix of three or four of these across a 5 to 7 night trip.",
      },
    },
    {
      '@type': 'Question',
      name: 'Should partners visit Edinburgh during a golf trip to St Andrews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, almost always. Edinburgh is about a 90 minute drive south of St Andrews and is one of the most beautiful capital cities in Europe. A full day is enough for the highlights: Edinburgh Castle in the morning, the Royal Mile and St Giles' Cathedral mid-day, the National Museum of Scotland or the Scottish National Gallery in the afternoon, dinner in the Old Town. Adventurous partners can stay over a night and rejoin the group the next day. Some groups even base partners in Edinburgh for the whole trip while golfers stay in Fife, with a hire car bridging the two.",
      },
    },
    {
      '@type': 'Question',
      name: 'Where are the best whisky distilleries to visit in Scotland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Speyside is the largest concentration: Glenfiddich, The Macallan, Glenlivet, and Aberlour all run high-quality tours, and the area is a 2 to 3 hour drive north of St Andrews. Islay (off the west coast, requires a ferry from Kennacraig) is the home of peated whisky and worth a 2 to 3 night side trip if your partner is serious about Scotch. Closer to St Andrews, Lindores Abbey and Kingsbarns Distillery (in Fife itself) make for an easy half-day. Edradour near Pitlochry is the smallest traditional distillery and a charming visit. Book ahead.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long should non-golfing partners stay in Scotland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Five to seven nights is the sweet spot, matching most golf trips. Five covers St Andrews itself, an Edinburgh day, a Highland day trip, and a distillery half-day. Seven adds a longer Highland excursion or an Islay side trip. If your group is doing a 10-day Scotland trip, partners should consider arriving a day or two later or leaving a day earlier, because the pace can feel slow without a full social schedule.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the weather like in Scotland for partners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Cool and changeable, even in summer. May to September is the realistic visiting window, with daytime temperatures of 12 to 20°C (mid 50s to upper 60s Fahrenheit). Rain is possible at any time and likely several times during a trip. June and July offer the longest daylight (up to 18 hours, so dinner at 9 PM in full sun is normal). Pack layers, waterproofs, and proper walking shoes. The weather is genuinely part of the experience.",
      },
    },
  ],
}

export default function ScotlandForNonGolfersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }}
      />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        {/* Hero */}
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Scotland for Non-Golfers: A Partner's Guide
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>11 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          A Scotland golf trip with non-golfing partners can be one of the great holidays of a lifetime, or it can be quietly disappointing. The difference is mostly about expectations and a little about logistics. Scotland is unusually rich for non-golfers (Edinburgh, distilleries, castles, Highlands, the Fife Coastal Path) but the weather, the pace, and the cost are very different from a beach holiday. Here is the friendly guide to making it wonderful.
        </p>

        {/* Quick verdict */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The honest take</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Scotland is a wonderful trip</span> for partners who love history, walking, whisky, dramatic landscapes, and a slower, more reflective kind of holiday. Edinburgh alone is worth the trip; pair it with the Highlands and a distillery and your partner has a week's worth of memories.
          </p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Scotland is not the right pick</span> for partners who want sun, warmth, beach time, or a relaxed-by-the-pool holiday. If that is your partner, see <Link href="/destinations/algarve" className="text-gold hover:underline">the Algarve</Link> instead.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Why Scotland works */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Why Scotland works for the right partner
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Most partners think of Scotland as the place the golfers disappear to, but Scotland is in fact one of the most culturally rich destinations in international golf. Edinburgh is consistently rated among the best capital cities in Europe. The Highlands have some of the most dramatic scenery in the British Isles. The whisky industry is the world's most celebrated. The castles, the cathedrals, the museums, and the food (yes, the food, modern Scottish cooking is very good) all reward a non-golfing partner who arrives interested.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The trade-off is the weather and the pace. Scotland is cool, often grey, and rain is a real possibility at any time of year. Daylight in midsummer is extraordinary (up to 18 hours), but the tourism rhythm is unhurried, dinner is later, and Sundays in smaller towns can be quieter than you expect. Lean into it.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The other consideration: distance. The golfers will be near St Andrews or wherever the group is based, and many of the best partner experiences (Edinburgh, the Highlands, Islay) require an hour or more of driving. Plan for the partner to have a hire car (or a driver), or use Edinburgh as the base for the trip if the group will mostly play East Lothian and Fife courses.
            </p>
          </section>

          {/* Sample itinerary */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              A sample 5-day partner itinerary
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              A great Scotland partner trip mixes one big city day, one distillery experience, one Highland excursion, and a couple of slower days exploring St Andrews and the Fife Coast. The shape: pace it so your partner is not trying to do everything every day.
            </p>
            <div className="mt-6 space-y-4">
              <DayCard
                day="Day 1: jet lag and St Andrews town"
                morning="Coffee at Taste or The Northpoint Cafe in St Andrews. Slow walk through the town."
                afternoon="St Andrews Cathedral ruins, St Andrews Castle, the West Sands beach (the one from Chariots of Fire). Stop for tea and cake at Mitchell's Deli."
                evening="Group dinner at the Old Course Hotel or in town. Early night to fight jet lag."
              />
              <DayCard
                day="Day 2: Edinburgh"
                morning="90 minute drive south. Park at one of the city centre car parks. Edinburgh Castle 9:30 AM (book ahead online)."
                afternoon="Walk the Royal Mile (St Giles' Cathedral, the Real Mary King's Close, the Writers' Museum). Lunch in the Grassmarket. National Museum of Scotland in the afternoon (free entry, excellent)."
                evening="Dinner in the Old Town. Either drive back to St Andrews (90 min) or stay over and rejoin the group the following day."
              />
              <DayCard
                day="Day 3: distillery and the Fife Coast"
                morning="Slow start. Drive to Kingsbarns Distillery (15 minutes from St Andrews) for a tour and tasting."
                afternoon="Lunch in Anstruther (the Anstruther Fish Bar is famous, frequently named one of the best chippies in the UK). Walk the Fife Coastal Path between Anstruther and Crail (about 2 hours, easy)."
                evening="Drinks at the Old Course Hotel. Group dinner."
              />
              <DayCard
                day="Day 4: Highland day trip"
                morning="Early start. Drive northwest to Glencoe (about 3 hours, longer with stops). The drive is beautiful even before you arrive."
                afternoon="Glencoe valley walks (the Lost Valley hike is doable for partners; signage and a marked path). Optional: continue to Glenfinnan Viaduct (the Hogwarts Express bridge, 45 minutes further) or Loch Ness (90 minutes away)."
                evening="Long drive back, or stay overnight in Pitlochry on the way home for a more relaxed return."
              />
              <DayCard
                day="Day 5: spa or castle"
                morning="Slow morning at the Old Course Hotel. Spa appointment at Kohler Waters Spa (book 2 weeks ahead in summer)."
                afternoon="Lunch in St Andrews. Optional: drive 40 minutes to Falkland Palace (Mary Queen of Scots country house) or Glamis Castle (where the Queen Mother grew up, 90 minutes north)."
                evening="Final group dinner. Probably your best meal of the trip."
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              For longer trips, fold in an Islay side trip (2 to 3 nights, ferry from Kennacraig) or a stay in Edinburgh as a base for partners while the group plays East Lothian.
            </p>
          </section>

          {/* Edinburgh */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Edinburgh: the city anchor
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Edinburgh is the strongest non-golf argument in any Scotland golf trip. About 90 minutes from St Andrews, it is a UNESCO-listed capital with a medieval Old Town and a Georgian New Town packed into a remarkably walkable centre.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Edinburgh Castle</strong> sits on a volcanic crag at the top of the Royal Mile and is genuinely worth the visit. Book the earliest available time slot online to beat the crowds; allow 2 to 3 hours.</li>
              <li><strong>The Royal Mile</strong> runs from the castle down to Holyrood Palace at the bottom. Half a day of slow walking, with stops at St Giles' Cathedral, the Real Mary King's Close (a hidden warren of medieval streets, fascinating tour), and the Scottish Parliament.</li>
              <li><strong>The National Museum of Scotland</strong> is free and excellent. Two to three hours covers the highlights.</li>
              <li><strong>Calton Hill</strong> at sunset gives the postcard view of Edinburgh and is a 15 minute walk from the centre.</li>
              <li><strong>Eating</strong>: The Witchery, Timberyard, or Eleanore for memorable dinners; the Grassmarket has solid lunches; Mary's Milk Bar has the best ice cream in the city.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Adventurous partners stay over a night to do Edinburgh properly, then rejoin the group the next day. Some groups base partners in Edinburgh for the whole trip while the golfers stay in Fife.
            </p>
          </section>

          {/* Whisky */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Whisky country
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Scotland is the home of single malt whisky and the distillery tours are genuinely good experiences, even for partners who do not drink whisky much. Five regions matter: Speyside (the largest), Highland (the geographically biggest), Islay (peated, off the west coast), Lowland, and Campbeltown.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Close to St Andrews</strong>: Kingsbarns Distillery (15 minutes), Lindores Abbey (40 minutes), and Glenturret near Crieff (90 minutes) are all easy half-day trips. Kingsbarns is the most polished and partner-friendly tour.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Speyside</strong>, the largest concentration, is a 2 to 3 hour drive north. Glenfiddich, The Macallan, Glenlivet, and Aberlour are the famous names. Most groups doing Speyside stay overnight in Aberlour or Dufftown to do 2 or 3 distilleries across a long weekend, returning to the group base afterwards.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Islay</strong>, the peated-whisky island off the west coast (Lagavulin, Laphroaig, Ardbeg, Bowmore), requires a ferry from Kennacraig and a 2 to 3 night minimum to do well. Worth it if your partner is serious about Scotch; skip it if not. Book the ferry well ahead in summer.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Most distilleries offer multiple tour levels, from £15 entry-level tours to £150+ "warehouse experiences." Book ahead, especially in summer.
            </p>
          </section>

          {/* Fife Coastal Path */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The Fife Coastal Path
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Fife Coastal Path runs 117 miles along the coast from the Forth Bridge to the River Tay, and the stretch immediately around St Andrews is one of the most rewarding day-walk regions in Scotland.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The signature partner walk: the East Neuk villages (Crail, Anstruther, Pittenweem, St Monans, Elie). Cobbled streets, painted fishermen's cottages, ruined castles on the headlands, and frequent cafes for hot tea on a cold day. The 2 hour walk between Crail and Anstruther is gentle, partner-friendly, and ends at one of the best fish and chip shops in the UK. Drive between villages if a 10 mile walk is too much.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pack waterproof shoes; even in summer the path can be muddy.
            </p>
          </section>

          {/* Highlands */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The Highlands
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              A Highland day trip is a long day, but most partners say it was the most memorable day of the trip. Glencoe, Loch Ness, and the Trossachs are the three most accessible Highland regions from St Andrews, each about a 2 to 3 hour drive each way.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Glencoe</strong> is the dramatic mountain valley where the 1692 massacre took place; the scenery is otherworldly and the visitor centre tells the history well. The Lost Valley hike is doable for partners and gives one of the best photo stops in Scotland.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Loch Ness</strong> is touristy but iconic. A boat tour from Drumnadrochit (with Urquhart Castle on the shoreline) is the standard partner experience. About 2.5 hours from St Andrews.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>The Trossachs</strong> (Loch Lomond and Trossachs National Park) is closer (90 minutes) and the most accessible Highland region for a half-day. Loch Katrine and the Lake of Menteith make a beautiful afternoon.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Consider a guided day tour from Edinburgh if your partner does not want to drive. Rabbie's and Highland Explorer Tours are both well-reviewed.
            </p>
          </section>

          {/* Pace and packing */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Pace, weather, and what to pack
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Scotland runs at a slower pace than most international destinations. Lunch is unhurried, dinner is late by US standards (8 PM is normal), and Sundays in smaller towns can be quiet. The benefit, especially in midsummer: 18 hours of daylight means dinner at 9 PM in full sun, and a 9 PM walk along the West Sands is genuinely magical.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The weather is the headline. May to September is the realistic visiting window, with daytime temperatures of 12 to 20°C (mid 50s to upper 60s Fahrenheit). Rain is possible at any time of year and likely several times during a 7 day trip. Wind on the Fife Coast is a constant. Edinburgh has its own microclimate and is generally drier than the coast, but a sweater and a packable rain jacket are non-negotiable.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pack: layers (a long-sleeve T-shirt, a fleece or jumper, a packable rain jacket), waterproof walking shoes, a wool hat for evenings even in summer, and a smart-casual dinner outfit for at least one night. Our <Link href="/blog/golf-trip-packing-list" className="text-gold hover:underline">golf trip packing list</Link> has a full partner section for Scotland.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Plan a trip the partners will actually enjoy.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              FairwayPal builds a parallel itinerary for non-golfers alongside the golf, so partners arrive knowing exactly what their days look like.
            </p>
            <div className="mt-6 flex justify-center">
              <Link className="primary-link" href="/plan">
                Start Planning
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Scotland for non-golfers FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="Is Scotland a good destination for non-golfing partners?"
                answer="Yes, for partners who love history, castles, walking, whisky, and dramatic scenery. Edinburgh, the Fife Coastal Path, distilleries, castles, and the Highlands are all genuine highlights. The catch is the cool changeable weather and the slower pace."
              />
              <FaqItem
                question="What is there to do for non-golfers?"
                answer="A day in Edinburgh, Fife Coastal Path walks (Crail to Anstruther), St Andrews itself (cathedral ruins, castle, West Sands), distillery tours (Kingsbarns, Speyside, Islay), Highland day trips (Glencoe, Loch Ness), and castles like Falkland and Glamis."
              />
              <FaqItem
                question="Should partners visit Edinburgh?"
                answer="Yes, almost always. About 90 minutes south of St Andrews. A full day covers the Castle, Royal Mile, and the National Museum of Scotland. Some partners stay overnight or even base themselves in Edinburgh for the whole trip."
              />
              <FaqItem
                question="Where are the best whisky distilleries?"
                answer="Close to St Andrews: Kingsbarns (15 min) and Lindores Abbey (40 min). Speyside (2-3 hr drive): Glenfiddich, Macallan, Glenlivet. Islay (ferry from Kennacraig): peated whisky, requires 2-3 night side trip."
              />
              <FaqItem
                question="How long should partners stay?"
                answer="Five to seven nights is the sweet spot. Five covers St Andrews, an Edinburgh day, a Highland day, and a distillery half-day. Seven adds a longer Highland excursion or Islay side trip."
              />
              <FaqItem
                question="What is the weather like?"
                answer="Cool and changeable. May to September is the realistic window (12 to 20°C, mid 50s to upper 60s Fahrenheit). Rain is likely. Pack layers, waterproofs, and proper walking shoes."
              />
            </div>
          </section>

          {/* Related Posts */}
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Related guides
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost
                href="/destinations/scotland"
                title="Scotland Destination Guide"
                description="The full golf-side guide: courses, hotels, partner activities, and packing."
              />
              <RelatedPost
                href="/blog/algarve-vs-scotland-golf-trip"
                title="Algarve vs Scotland"
                description="Europe's two big golf destinations, compared honestly."
              />
              <RelatedPost
                href="/blog/ireland-vs-scotland-golf-trip"
                title="Ireland vs Scotland"
                description="The two big British Isles links options, compared."
              />
              <RelatedPost
                href="/blog/algarve-for-non-golfers"
                title="The Algarve for Non-Golfers"
                description="The most partner-friendly international golf destination."
              />
              <RelatedPost
                href="/blog/pebble-beach-for-non-golfers"
                title="Pebble Beach for Non-Golfers"
                description="The friendliest US bucket-list resort for partners."
              />
              <RelatedPost
                href="/blog/golf-trip-with-non-golfers"
                title="Golf Trips With Non-Golfers"
                description="The general playbook for planning a trip that works for the whole group."
              />
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
      <div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted-foreground">
        {answer}
      </div>
    </details>
  )
}

function RelatedPost({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30"
    >
      <h3 className="text-base font-semibold text-foreground group-hover:text-gold transition-colors">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
    </Link>
  )
}
