/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

export const metadata: Metadata = {
  title: 'How Much Does a Golf Trip Cost? A Brutally Honest Budget Breakdown — FairwayPal',
  description:
    "Green fees, hotels, flights, food, beer. We break down the real cost of a golf trip — by destination and group size — so there are no surprises on the credit card statement.",
  alternates: { canonical: 'https://fairwaypal.com/blog/golf-trip-budget' },
  openGraph: {
    title: 'How Much Does a Golf Trip Cost? A Brutally Honest Budget Breakdown',
    description:
      "Green fees, hotels, flights, food, beer. The real cost of a golf trip — by destination and group size.",
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Does a Golf Trip Cost? A Brutally Honest Budget Breakdown',
  description:
    "Green fees, hotels, flights, food, beer. We break down the real cost of a golf trip — by destination and group size — so there are no surprises.",
  url: 'https://fairwaypal.com/blog/golf-trip-budget',
  datePublished: '2025-04-17',
  dateModified: '2025-04-17',
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
      name: 'Golf Trip Budget Breakdown',
      item: 'https://fairwaypal.com/blog/golf-trip-budget',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a golf trip cost per person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A domestic US golf trip typically costs $900–2,500 per person for a 3-night trip, depending on destination and spending style. Myrtle Beach runs $900–1,500. Scottsdale runs $1,400–2,200. Bandon Dunes runs $1,500–2,500. International (Scotland, Ireland) adds flight costs — budget $2,500–4,000 for a 5-night trip.",
      },
    },
    {
      '@type': 'Question',
      name: "What's a realistic budget for a golf weekend?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For a 3-night US trip: $500/person is tight (Myrtle Beach, shared Airbnb, budget courses only). $1,000–1,500 is the mid-range sweet spot — covers Scottsdale or Myrtle Beach with 2 good rounds, solid hotel, and group dinners. $2,000+ gets you premium courses, good hotels, and no compromise on meals or activities.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are international golf trips (Scotland, Ireland) worth the extra cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For the right group, yes — the experience gap is significant. Playing the Old Course at St Andrews or the Old Head of Kinsale is genuinely different from any US course. The extra cost (flights mainly — European course fees are often lower than premium US courses) buys a trip people will remember for decades. Worth it if the groom has bucket-list courses in mind and the group can absorb the travel logistics.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you split golf trip costs fairly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Equal split works for shared costs (Airbnb, dinners, group activities). Individual costs (green fees, optional activities) should be settled individually — some guys will want to play every round, others won't. Sort out the financial model before you book: 'We're splitting the house and group dinners equally. Individual rounds are your own cost.' This avoids the post-trip awkwardness of uneven spending.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the cheapest US destination for a golf trip?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Myrtle Beach is the most budget-friendly major golf destination in the US. 100+ courses with green fees from $40 (off-peak, budget courses) to $150 (Caledonia, TPC). Combined with lower accommodation costs and the option to cook in a rented house rather than eating out every meal, a Myrtle Beach trip can come in under $900/person for 3 nights.",
      },
    },
  ],
}

const DESTINATIONS_COSTS = [
  { name: 'Myrtle Beach', href: '/destinations/myrtle-beach', greens: '$40–150', hotel: '$100–200/night', flights: '$150–300', food: '$60–90/day', total: '$900–1,500' },
  { name: 'Pinehurst', href: '/destinations/pinehurst', greens: '$80–200', hotel: '$130–220/night', flights: '$150–350', food: '$70–100/day', total: '$1,100–1,800' },
  { name: 'Scottsdale', href: '/destinations/scottsdale', greens: '$130–350', hotel: '$150–300/night', flights: '$200–400', food: '$80–120/day', total: '$1,400–2,200' },
  { name: 'Bandon Dunes', href: '/destinations/bandon-dunes', greens: '$150–325', hotel: '$200–350/night', flights: '$250–500', food: '$100–130/day', total: '$1,500–2,500' },
  { name: 'Scotland', href: '/destinations/scotland', greens: '$100–300', hotel: '$120–250/night', flights: '$600–1,200', food: '$80–120/day', total: '$2,500–4,000' },
  { name: 'Ireland', href: '/destinations/ireland', greens: '$80–350', hotel: '$120–250/night', flights: '$600–1,200', food: '$80–120/day', total: '$2,500–4,000' },
]

export default function GolfTripBudgetPage() {
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
          How Much Does a Golf Trip Cost? A Brutally Honest Budget Breakdown
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>April 17, 2025</span>
          <span>·</span>
          <span>8 min read</span>
        </div>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Someone in the group chat always asks. Everyone else immediately hedges. Here's the actual answer — broken down by destination, by cost bucket, and by spending tier — so the organiser has something concrete to share when the budget conversation comes up.
        </p>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* The 5 buckets */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The five cost buckets
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Every golf trip cost falls into one of these. Know which ones are shared (split equally) vs individual (everyone pays their own) before you start booking.
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  bucket: 'Green fees',
                  type: 'Individual',
                  range: '$40–350/round',
                  note: "The biggest variable. A budget Myrtle Beach round is $40. TPC Scottsdale Stadium is $350. Most groups average 2 rounds per trip. The biggest single driver of total trip cost.",
                },
                {
                  bucket: 'Accommodation',
                  type: 'Shared',
                  range: '$100–350/person per night',
                  note: "Hotel or Airbnb. Group Airbnbs near the courses are almost always better value for 4+ people — shared kitchen, more space, better vibe. Split equally.",
                },
                {
                  bucket: 'Flights',
                  type: 'Individual',
                  range: '$150–1,200',
                  note: "Domestic US: $150–400. International: $600–1,200. Varies enormously by where you're flying from. The cost everyone forgets when they're comparing destinations.",
                },
                {
                  bucket: 'Food and drink',
                  type: 'Mixed',
                  range: '$60–130/day',
                  note: "Group dinners split equally; lunches and drinks often individual. Budget for one nice dinner per night. Golf clubs skew expensive on food — eat in when you can.",
                },
                {
                  bucket: 'Activities and extras',
                  type: 'Individual',
                  range: '$50–300',
                  note: "Cart fees (often not included), caddy fees ($50–80 tip per round), club rental if needed, spa days or partner activities, transfers. These add up fast and are usually underestimated.",
                },
              ].map(({ bucket, type, range, note }) => (
                <div key={bucket} className="rounded-xl border border-border bg-card/60 p-5">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <h3 className="text-base font-semibold text-foreground">{bucket}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`rounded-sm border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] ${type === 'Shared' ? 'border-fairway/30 bg-fairway/10 text-fairway-text' : type === 'Individual' ? 'border-partner/30 bg-partner/10 text-partner-text' : 'border-gold/30 bg-gold/10 text-gold'}`}>
                        {type}
                      </span>
                      <span className="text-sm font-medium text-gold">{range}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tiers */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              What each budget tier actually gets you
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Per person, 3-night domestic US trip, group of 6.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                {
                  tier: '$500–800',
                  label: 'Budget',
                  color: 'border-border',
                  gets: ['Myrtle Beach or similar', 'Budget courses ($50–80/round)', 'Shared Airbnb near courses', 'Cook in most nights', 'One group dinner out'],
                  honest: "Achievable. Requires everyone to actually do the Airbnb cooking thing rather than ordering Uber Eats.",
                },
                {
                  tier: '$1,000–1,500',
                  label: 'Sweet Spot',
                  color: 'border-gold/30',
                  gets: ['Scottsdale or Myrtle Beach', '2 good rounds ($130–200 each)', 'Decent hotel or quality Airbnb', 'Group dinners out every night', 'One activity/experience'],
                  honest: "What most groups end up spending. Comfortable without feeling extravagant.",
                },
                {
                  tier: '$2,000+',
                  label: 'Premium',
                  color: 'border-fairway/30',
                  gets: ['Scottsdale, Bandon, Scotland, or Ireland', 'Premium courses ($200–350/round)', 'Good hotel or luxury rental', 'No budget compromises on food', 'Optional: caddy experience'],
                  honest: "No trade-offs. Worth it if the group can absorb it and you're playing courses that justify the spend.",
                },
              ].map(({ tier, label, color, gets, honest }) => (
                <div key={tier} className={`rounded-xl border ${color} bg-card/60 p-5`}>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
                  <p className="mt-1 text-2xl font-display font-light text-foreground">{tier}</p>
                  <ul className="mt-4 space-y-2">
                    {gets.map((g) => (
                      <li key={g} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 text-xs text-gold shrink-0">→</span>{g}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-muted-foreground italic">{honest}</p>
                </div>
              ))}
            </div>
          </section>

          {/* By destination */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Cost by destination
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              3-night trip, 2 rounds of golf, mid-range options. Click any destination for the full guide.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-hidden">
              <div className="grid grid-cols-3 gap-2 border-b border-border bg-bg-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground sm:grid-cols-6">
                <span className="col-span-1">Destination</span>
                <span className="hidden sm:block text-center">Green fees</span>
                <span className="hidden sm:block text-center">Hotel/night</span>
                <span className="hidden sm:block text-center">Flights</span>
                <span className="hidden sm:block text-center">Food/day</span>
                <span className="col-span-2 sm:col-span-1 text-right">Total/person</span>
              </div>
              {DESTINATIONS_COSTS.map((d) => (
                <div key={d.name} className="grid grid-cols-3 gap-2 border-b border-border px-5 py-4 text-sm last:border-0 sm:grid-cols-6">
                  <Link href={d.href} className="col-span-1 font-medium text-foreground hover:text-gold transition-colors">
                    {d.name}
                  </Link>
                  <span className="hidden sm:block text-center text-muted-foreground">{d.greens}</span>
                  <span className="hidden sm:block text-center text-muted-foreground">{d.hotel}</span>
                  <span className="hidden sm:block text-center text-muted-foreground">{d.flights}</span>
                  <span className="hidden sm:block text-center text-muted-foreground">{d.food}</span>
                  <span className="col-span-2 sm:col-span-1 text-right font-semibold text-gold">{d.total}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Hidden costs */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The hidden costs nobody mentions
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              These are the line items that expand a $1,200 trip into a $1,600 trip without anyone noticing until they're reviewing their credit card statement at home.
            </p>
            <div className="mt-6 space-y-3">
              {[
                { item: 'Cart fees', detail: 'Often not included in the quoted green fee. $25–35 per person per round. Over 3 rounds for 8 people: $600–840 in unbudgeted cart fees.' },
                { item: 'Caddy tip', detail: '$50–80 per caddy per round is standard. Walking with caddies at Bandon or Bethpage adds up fast in a big group.' },
                { item: 'The 19th hole', detail: 'Post-round drinks, snacks, and the "we\'ll just have one" that turns into two hours. $30–60/person per day that nobody accounts for.' },
                { item: 'Transfers and Ubers', detail: 'Getting from hotel to courses and back. In Scottsdale or Myrtle Beach with courses spread out: $15–30 per person per day.' },
                { item: 'Range fees and practice balls', detail: 'Warming up the day before or after. Small but real: $15–25 per session.' },
                { item: 'Last-minute course upgrades', detail: "Someone sees TPC on the schedule and suggests upgrading one round to the Stadium course instead. Group consensus means everyone pays the premium." },
              ].map(({ item, detail }) => (
                <div key={item} className="flex gap-4 rounded-xl border border-border bg-card/60 p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-partner/30 bg-partner/10 text-xs font-bold text-partner-text">!</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Splitting costs */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              How to split costs without the awkward conversation
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Agree the financial model before anyone books anything. The conversation is only awkward if you have it after the fact.
            </p>
            <div className="mt-6 rounded-xl border border-gold/20 bg-gold/5 p-6 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Split equally: </span>
                Shared accommodation, group dinners, any transfers booked for the whole group.
              </p>
              <p>
                <span className="font-semibold text-foreground">Pay your own: </span>
                Green fees (people play different rounds), individual activities, lunches, drinks at the bar.
              </p>
              <p>
                <span className="font-semibold text-foreground">Use a single account: </span>
                One person books everything shared on one card and Splitwise tracks it. Less painful than nine Venmo requests.
              </p>
              <p>
                <span className="font-semibold text-foreground">Set an honesty norm early: </span>
                "If the budget is a problem for anyone, say so now. There's no shame in it and it's infinitely better than finding out mid-trip."
              </p>
            </div>
          </section>

          {/* Cutting costs */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              How to cut costs without ruining the trip
            </h2>
            <div className="mt-6 space-y-3">
              {[
                { tip: 'Book a house, not a hotel', detail: 'A 4-bedroom house near the courses almost always beats 4 hotel rooms on cost. You get a shared kitchen, common space, and the trip has a different energy.' },
                { tip: 'Play twilight rounds', detail: 'Most courses offer heavily discounted twilight rates (from $40 off the regular price). You play fewer holes but save real money if one of your rounds is optional.' },
                { tip: 'Fly mid-week', detail: 'Thursday/Friday arrival and Monday departure flights are consistently cheaper than weekend travel. A 3-night trip can still be Friday–Monday.' },
                { tip: 'Cook one meal a day', detail: 'In a house rental: breakfast and/or lunch in, dinner out. Saves $40–60/person/day without feeling like a compromise.' },
                { tip: 'Avoid the resort pro shop', detail: "Balls, gloves, and accessories at the course pro shop run 30–50% more than online. Buy what you need before you leave." },
              ].map(({ tip, detail }) => (
                <div key={tip} className="rounded-xl border border-border bg-card/60 p-5">
                  <p className="text-sm font-semibold text-foreground">{tip}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Set a budget. We&apos;ll build around it.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              FairwayPal asks for your budget per round and recommends courses that fit. 5 questions, dual itinerary, one link.
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
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Golf trip budget FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="How much does a golf trip cost per person?"
                answer="A domestic US golf trip typically costs $900–2,500 per person for a 3-night trip. Myrtle Beach runs $900–1,500. Scottsdale runs $1,400–2,200. International (Scotland, Ireland) typically runs $2,500–4,000 per person for a 5-night trip including flights."
              />
              <FaqItem
                question="What's a realistic budget for a golf weekend?"
                answer="$1,000–1,500 is the practical sweet spot for most groups — covers 2 good rounds in Scottsdale or Myrtle Beach, a solid hotel or quality Airbnb, and group dinners out every night. Under $800 means real trade-offs. Over $2,000 means no compromises."
              />
              <FaqItem
                question="Are international golf trips (Scotland, Ireland) worth the extra cost?"
                answer="For the right group, yes. The experience gap is significant — playing St Andrews or the Old Head of Kinsale is genuinely different. The extra cost is mainly flights. European course fees are often lower than premium US courses. Worth it if the groom has bucket-list courses and the group can absorb the travel logistics."
              />
              <FaqItem
                question="How do you split golf trip costs fairly?"
                answer="Split shared costs (accommodation, group dinners) equally. Keep individual costs (green fees, optional activities) separate. Use Splitwise to track it. Agree the model before booking — the conversation is only awkward if you have it after the bill arrives."
              />
              <FaqItem
                question="What's the cheapest US destination for a golf trip?"
                answer="Myrtle Beach. 100+ courses from $40 off-peak. Combined with a shared Airbnb and cooking in for some meals, a 3-night trip for a group of 6 can come in under $900/person."
              />
            </div>
          </section>

          {/* Related */}
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost
                href="/blog/best-bachelor-party-golf-destinations"
                title="Best Bachelor Golf Destinations"
                description="All six destinations ranked — with honest cost trade-offs."
              />
              <RelatedPost
                href="/blog/scottsdale-vs-myrtle-beach-golf-trip"
                title="Scottsdale vs Myrtle Beach"
                description="Head-to-head comparison of the two most popular US destinations."
              />
              <RelatedPost
                href="/blog/golf-trip-packing-list"
                title="Golf Trip Packing List"
                description="What to bring — and what you'll regret bringing."
              />
            </div>
          </section>

        </div>
      </main>
      <Footer />
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
