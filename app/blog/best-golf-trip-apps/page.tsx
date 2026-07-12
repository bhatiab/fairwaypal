/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'The Best Golf Trip Apps and Tools (2026 Honest Guide) | FairwayPal',
  description:
    'A friendly, honest guide to the apps and tools worth installing before a golf trip. Planning, group chat, cost-splitting, GPS, weather, booking, and shot tracking. What is free, what is worth paying for, and what to skip.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/best-golf-trip-apps' },
  openGraph: {
    title: 'The Best Golf Trip Apps and Tools (2026 Honest Guide)',
    description:
      'The 12 apps that actually make a golf trip easier. Planning, group chat, expense splitting, GPS, weather, booking, and shot tracking.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Best Golf Trip Apps and Tools (2026 Honest Guide)',
  description:
    'A practical guide to the apps and tools worth using on a golf trip. Planning, group coordination, cost splitting, on-course GPS, weather, booking, and post-round stats. What is free, what is worth paying for.',
  url: 'https://www.fairwaypal.com/blog/best-golf-trip-apps',
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
      name: 'Best Golf Trip Apps',
      item: 'https://www.fairwaypal.com/blog/best-golf-trip-apps',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best app for planning a group golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FairwayPal is built specifically for this. Five questions in, you get a dual itinerary (golf and partner) plus a shareable link the whole group can vote on. Outside FairwayPal, most groups end up combining a group chat (WhatsApp), a shared document (Google Docs or a Notes file), and a tee-time booking site (GolfNow). That works but it scatters the planning across three places, which is exactly what FairwayPal solves.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best free golf GPS app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Hole19 is the best free option in 2026. The free tier includes GPS yardages, scoring, and basic stats with no subscription required, and the interface is clean. The Premium upgrade is $29.99 per year and adds shot tracking, advanced stats, and detailed maps. 18Birdies and Golfshot also offer good free tiers. For 80% of golfers, Hole19 free is more than enough; serious golfers tracking every shot may prefer Arccos.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you split costs on a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For 2026, the three best apps are Splitwise (most polished, Pro is $3 per month or $30 per year, free tier has daily limits), Tricount (fully free with no premium tier), and Settle Up (generous free tier, works offline, useful at remote courses). Tricount is the easiest one-trip choice since the app is free, lightweight, and works without account creation. For US groups, Venmo or Zelle handles the actual payment once the math is settled. Read our full guide on how to split costs on a golf trip without resentment.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need a separate weather app for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not strictly, but a wind-and-precipitation app is more useful than the default weather apps. Windy is the standout: free, beautiful, with detailed wind forecasts (speed, direction, gusts) that matter more on a links course than the default temperature reading. The Weather Channel and AccuWeather are fine for basic forecasts. For Scotland, Ireland, and Bandon Dunes, install Windy before the trip.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is Arccos and is it worth it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Arccos is the leading automatic shot-tracking system. Sensors screw into the end of each grip, the app uses your phone's GPS plus AI (trained on roughly 1.5 billion shots) to detect every shot you hit, and the analytics are excellent. It costs around $156 per year after the first year. Worth it for serious golfers who want detailed stats; overkill for someone playing four casual rounds on a once-a-year trip. If you just want yardages, stick with a free GPS app.",
      },
    },
    {
      '@type': 'Question',
      name: 'What other tools should you have on a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Beyond the planning, GPS, and cost-splitting apps, the practical add-ons are: WhatsApp or Signal for the group chat, Google Maps for driving (with offline maps downloaded if you are heading somewhere remote like Bandon or rural Scotland), Google Drive for shared documents and confirmations, Apple Wallet or Google Wallet for boarding passes and rental car receipts, and the airline's app for live flight updates. Optional: a stake-tracking app for friendly bets if your group runs Nassau or skins.",
      },
    },
  ],
}

export default function BestGolfTripAppsPage() {
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
          The Best Golf Trip Apps and Tools (2026 Honest Guide)
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>9 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          The right apps make a golf trip dramatically easier; the wrong ones add three notification channels to ignore. Here is the honest 2026 guide to the apps and tools worth installing before you go, broken down by the part of the trip they actually help with. We have tried most of these on real trips, and we are calling out which are free, which are worth paying for, and which can be skipped.
        </p>

        {/* Quick rule */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The minimum kit</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            For most groups, the essential set is: <span className="font-semibold text-foreground">FairwayPal for the plan, WhatsApp for the chat, Tricount for cost-splitting, Hole19 free for on-course GPS, Windy for weather, and Google Maps with offline maps downloaded for the destination.</span> Everything else is optional or use-case-specific.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Planning */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Planning the trip
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The hardest part of a group golf trip is the planning, because it has to balance a destination, dates, budget, group preferences, and a partner experience all at once. Most groups end up scattered across three or four tools.
            </p>
            <div className="mt-6 space-y-4">
              <AppCardLong
                name="FairwayPal (the planning layer)"
                price="Free for trip planning"
                what="Five questions in, you get a dual itinerary (golf and partner) and a shareable link the whole group can vote on. Designed for the organiser who is tired of chasing eight people across WhatsApp."
                worth="Yes. We are biased, but the alternative is keeping the plan in a Google Doc, the chat in WhatsApp, and the votes nowhere. FairwayPal collapses those into one shareable link the whole group sees."
              />
              <AppCardLong
                name="Google Docs / Notion"
                price="Free"
                what="A shared planning document is still useful for confirmations, packing lists, restaurant reservations, and anything the organiser wants to keep one source of truth on."
                worth="Yes for confirmations and reference. Use a single shared doc per trip, pinned in the group chat."
              />
              <AppCardLong
                name="GolfNow / TeeOff"
                price="Free booking, transactions take commission"
                what="The largest tee-time booking sites in North America. Browse availability, book directly, and pay online. Most resort courses are listed; private clubs and the Old Course at St Andrews are not."
                worth="Yes for casual rounds; book the marquee courses (Pebble Links, Pinehurst No. 2, Bandon courses) directly with the resort."
              />
            </div>
          </section>

          {/* Group coordination */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Group coordination during the trip
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              On the trip itself, the group chat is the running heartbeat: tee time changes, dinner plans, airport pickups, gambling pool results.
            </p>
            <div className="mt-6 space-y-4">
              <AppCardLong
                name="WhatsApp"
                price="Free"
                what="The default group chat for international travel because the group can use it across networks without iMessage compatibility issues. Pin the chat to the top of your phone for the trip."
                worth="Yes. The closest thing to a universal standard."
              />
              <AppCardLong
                name="Signal"
                price="Free"
                what="An alternative to WhatsApp with stronger privacy. Works the same way."
                worth="Yes if your group already uses Signal; otherwise WhatsApp is more universal."
              />
              <AppCardLong
                name="Find My (iOS) / Google Maps live location"
                price="Free with platforms"
                what="Share live location with the group during airport pickups and on travel days. Stops the 'where are you?' messages from the bag drop."
                worth="Yes for travel days. Turn off live location at the end of the trip; you do not need to be tracked forever."
              />
            </div>
          </section>

          {/* Cost splitting */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Cost splitting and payments
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The single biggest source of trip resentment is money handled badly. The right app does the math automatically and prevents 80% of disputes. Three solid options in 2026.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <AppCard
                name="Splitwise"
                price="Free with daily limits; Pro $3/mo or $30/yr"
                pros={['Most polished interface', 'Receipt scanning, analytics']}
                cons={['Free tier is now tight', 'Ads on free version']}
              />
              <AppCard
                name="Tricount"
                price="Fully free as of 2026"
                pros={['Free with no premium tier', 'Multi-currency, no account needed']}
                cons={['Fewer power features', 'Less polished than Splitwise']}
              />
              <AppCard
                name="Settle Up"
                price="Generous free tier; optional Pro"
                pros={['Works offline (good for remote courses)', 'Multi-currency native']}
                cons={['Older interface', 'Fewer integrations']}
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              For US groups, Venmo or Zelle handles the actual settlement once the totals are agreed. Both are instant and free. Avoid PayPal for friend-to-friend transfers because of fees. Read our full guide on <Link href="/blog/how-to-split-costs-golf-trip" className="text-gold hover:underline">how to split costs on a golf trip without resentment</Link>.
            </p>
          </section>

          {/* On-course */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              On-course: GPS, scoring, and stats
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              GPS yardages are nice to have on a casual round and genuinely useful on courses you do not know well. Three tiers of option in 2026.
            </p>
            <div className="mt-6 space-y-4">
              <AppCardLong
                name="Hole19 (the best free option)"
                price="Free; Premium $29.99/year"
                what="GPS yardages, hole maps, scoring, and basic stats on the free tier with no subscription required. Premium adds shot tracking, advanced analytics, and detailed maps. Works on phone and Apple Watch / Wear OS."
                worth="Yes for nearly everyone. Free tier is genuinely good. Upgrade only if you specifically want shot tracking and detailed analytics."
              />
              <AppCardLong
                name="Arccos (the serious option)"
                price="~$156/year after first year"
                what="Sensors screw into each grip; the system auto-detects every shot using GPS plus AI trained on roughly 1.5 billion shots. The analytics are excellent and the strokes-gained data is genuinely useful for improvement. The Arccos Air wearable is an alternative to grip sensors."
                worth="Yes for golfers who care about detailed stats and play often. Overkill for someone on a once-a-year trip."
              />
              <AppCardLong
                name="Garmin Approach (the hardware option)"
                price="$300 to $700+ for the watch"
                what="A dedicated GPS golf watch rather than a phone app. Different models offer increasing features: yardages, hazards, slope, virtual caddie. Battery and reliability are the headline advantages."
                worth="Yes for golfers who want a watch they can charge once and forget. No, if you would rather have one less device."
              />
              <AppCardLong
                name="18Birdies and Golfshot"
                price="Free tiers, paid premium"
                what="Two solid alternatives to Hole19 with similar feature sets. 18Birdies has a stronger social and games layer; Golfshot has good handicap tracking."
                worth="Either is fine. Pick one and stick with it for the trip; switching apps mid-round is annoying."
              />
            </div>
          </section>

          {/* Weather */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Weather (yes, it deserves its own section)
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The default iPhone or Android weather app gives temperature and a chance of rain, which is fine for daily life but not great for a golf trip. On a links course, wind speed and direction matter more than the temperature, and the difference between 15 and 25 mph wind is the difference between a fun round and a brutal one.
            </p>
            <div className="mt-6 space-y-4">
              <AppCardLong
                name="Windy"
                price="Free; Premium ~$19/year"
                what="Beautiful, detailed wind forecasts (speed, direction, gusts), precipitation models, multiple weather sources, and a satellite layer. The interface is clean and visual. Premium unlocks longer forecasts and more weather models."
                worth="Yes, free is enough for most. Install before any links trip (Scotland, Ireland, Bandon, Algarve)."
              />
              <AppCardLong
                name="The Weather Channel / AccuWeather"
                price="Free with ads"
                what="Solid general-purpose forecasts with hourly precision. Fine if you only care about temperature and rain probability."
                worth="Yes if you do not want a dedicated wind app."
              />
            </div>
          </section>

          {/* Travel logistics */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Travel logistics
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The travel-day apps that actually save you trouble.
            </p>
            <div className="mt-6 space-y-4">
              <AppCardLong
                name="Google Maps (with offline maps)"
                price="Free"
                what="Driving navigation, traffic, and offline maps you can download for the destination region before you go. Critical for trips to remote venues like Bandon Dunes (where cell service is patchy) or rural Scotland."
                worth="Yes. Download the offline map for your trip area before you fly out."
              />
              <AppCardLong
                name="Waze"
                price="Free"
                what="Crowd-sourced traffic, speed traps, and accidents. Often beats Google Maps in metropolitan areas with heavy traffic. Owned by Google, so similar data backbone."
                worth="Yes for trips with significant US driving (Pebble Beach, Scottsdale)."
              />
              <AppCardLong
                name="Apple Wallet / Google Wallet"
                price="Free with platforms"
                what="Boarding passes, hotel keys at participating resorts, rental car confirmations, and event tickets in one place. Saves 10 minutes per airport interaction."
                worth="Yes."
              />
              <AppCardLong
                name="The airline's app"
                price="Free"
                what="Live flight updates, gate changes, baggage tracking. Push notifications when boarding starts. The single biggest improvement to airport stress in the last decade."
                worth="Yes. Install before the trip; do not wait until you are in the security line."
              />
            </div>
          </section>

          {/* Optional */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Optional add-ons worth knowing about
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Not necessary, but useful for specific kinds of group.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Stableford / Nassau scoring apps:</strong> If your group runs gambling formats, an app like Nassau Golf or My Skins can keep score, calculate the carryover, and remove the dispute. Free to cheap.</li>
              <li><strong>USGA GHIN app:</strong> Track your handicap and have it ready for the courses that ask for a certificate (the Old Course at St Andrews requires one). Free with a club membership.</li>
              <li><strong>WhatsApp Business / shared photo albums:</strong> Create a shared album for the trip's photos so everyone contributes without spamming the main chat.</li>
              <li><strong>Currency converter (XE):</strong> Free. Useful for international trips so you are not mentally calculating the cost of every drink.</li>
              <li><strong>Google Translate (with offline language packs):</strong> Download Portuguese before an Algarve trip; the menu translation alone is worth it.</li>
            </ul>
          </section>

          {/* Pre-trip checklist */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The pre-trip app checklist
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The week before your trip, do these in 30 minutes:
            </p>
            <ol className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-decimal pl-6">
              <li>Plan the trip on FairwayPal and share the link in the WhatsApp group.</li>
              <li>Open Tricount and create the trip account; share the join link in the group.</li>
              <li>Install Hole19 and download the courses you will play (Premium feature, but most have free preview maps).</li>
              <li>Download the Google Maps offline area for the destination region.</li>
              <li>Install Windy and pre-load the destination forecast.</li>
              <li>Add boarding passes and hotel confirmations to Apple Wallet or Google Wallet.</li>
              <li>Confirm WhatsApp, Find My, or your equivalent group chat is working for everyone.</li>
              <li>Hit the ATM for cash tips (see our <Link href="/blog/golf-trip-tipping-guide" className="text-gold hover:underline">tipping guide</Link>).</li>
            </ol>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Done. The trip will run more smoothly than the last one, and the math at the end will not be a fight.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Plan the trip in 5 minutes. Skip the spreadsheet.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              FairwayPal builds the dual itinerary so you spend less time chasing the group and more time on the first tee.
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
              Golf trip apps FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="What is the best app for planning a group golf trip?"
                answer="FairwayPal is built specifically for this: 5 questions in, dual itinerary out, shareable link the group can vote on. The alternative is scattering the planning across WhatsApp, Google Docs, and a tee-time site."
              />
              <FaqItem
                question="What is the best free golf GPS app?"
                answer="Hole19. Free tier includes GPS yardages, scoring, and basic stats. Premium is $29.99/yr. 18Birdies and Golfshot are solid alternatives."
              />
              <FaqItem
                question="How do you split costs on a golf trip?"
                answer="Splitwise (most polished, $3/mo Pro), Tricount (fully free in 2026), or Settle Up (free, works offline). For US groups, Venmo or Zelle for the actual payment."
              />
              <FaqItem
                question="Do you need a separate weather app?"
                answer="A wind-and-precipitation app is more useful than the default. Windy is the standout, free with detailed wind forecasts. Worth installing for any links trip."
              />
              <FaqItem
                question="What is Arccos and is it worth it?"
                answer="Auto shot-tracking via grip sensors plus AI. Around $156/year. Worth it for serious golfers; overkill for once-a-year casual trips."
              />
              <FaqItem
                question="What other tools should you have?"
                answer="WhatsApp for the group chat, Google Maps with offline maps for remote venues, Apple/Google Wallet for boarding passes, the airline's app for live updates, and a tipping cash plan."
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
                href="/blog/how-to-plan-a-golf-trip"
                title="How to Plan a Golf Trip"
                description="The complete step-by-step guide to organising the trip end to end."
              />
              <RelatedPost
                href="/blog/how-to-split-costs-golf-trip"
                title="How to Split Costs Without Resentment"
                description="The five practical methods, the apps, and the conversation that prevents most fights."
              />
              <RelatedPost
                href="/blog/golf-trip-tipping-guide"
                title="Tipping on a Golf Trip"
                description="Caddies, bag drops, and dinner servers, US to Portugal."
              />
              <RelatedPost
                href="/blog/golf-trip-budget"
                title="Golf Trip Budget Breakdown"
                description="What a golf trip actually costs, by destination and group size."
              />
              <RelatedPost
                href="/blog/golf-trip-packing-list"
                title="Golf Trip Packing List"
                description="What golfers and partners actually need to bring."
              />
              <RelatedPost
                href="/blog/golf-trip-weekend-schedule"
                title="3-Night Golf Weekend Schedule"
                description="A concrete day-by-day schedule that actually works."
              />
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}

function AppCard({ name, price, pros, cons }: { name: string; price: string; pros: string[]; cons: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-5">
      <h3 className="text-base font-semibold text-foreground">{name}</h3>
      <p className="mt-1 text-xs text-gold">{price}</p>
      <ul className="mt-3 space-y-1">
        {pros.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1 text-xs text-fairway-text">+</span>{p}
          </li>
        ))}
        {cons.map((c) => (
          <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1 text-xs text-partner-text">−</span>{c}
          </li>
        ))}
      </ul>
    </div>
  )
}

function AppCardLong({ name, price, what, worth }: { name: string; price: string; what: string; worth: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-5">
      <h3 className="text-base font-semibold text-foreground">{name}</h3>
      <p className="mt-1 text-xs text-gold">{price}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{what}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground"><span className="font-semibold text-foreground">Worth it? </span>{worth}</p>
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
