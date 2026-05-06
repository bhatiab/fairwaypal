/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 5, 2026'

export const metadata: Metadata = {
  title: 'How to Plan a Golf Trip (Without Losing Your Mind or Your Friends) — FairwayPal',
  description:
    'The complete organiser\'s guide: pick a destination, set a budget, book tee times, handle partners, share the plan, and get everyone to actually commit. Step by step.',
  alternates: { canonical: 'https://fairwaypal.com/blog/how-to-plan-a-golf-trip' },
  openGraph: {
    title: 'How to Plan a Golf Trip (Without Losing Your Mind or Your Friends)',
    description:
      'The complete step-by-step organiser\'s guide — destination, budget, tee times, group coordination, and actually getting everyone to commit.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Plan a Golf Trip (Without Losing Your Mind or Your Friends)',
  description:
    'The complete organiser\'s guide: pick a destination, set a budget, book tee times, handle partners, share the plan, and get everyone to actually commit.',
  url: 'https://fairwaypal.com/blog/how-to-plan-a-golf-trip',
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
      name: 'How to Plan a Golf Trip',
      item: 'https://fairwaypal.com/blog/how-to-plan-a-golf-trip',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How far in advance should you plan a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a domestic trip to Scottsdale or Myrtle Beach, 3–4 months gives you enough lead time for good tee time availability and reasonable hotel rates. For peak season (Scottsdale in Jan–March, Myrtle Beach in April–May), book 4–6 months out. For international trips to Scotland or Ireland, aim for 6–9 months to secure flights, accommodation, and tee times at popular courses. The Old Course at St Andrews lottery requires planning 12+ months ahead.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you get a group of guys to actually commit to a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Give them something concrete to respond to — not "are you interested?" but "here\'s the plan, can you commit by Friday?" Groups don\'t commit to vague ideas; they commit to specific plans with deadlines. Share the itinerary, the costs, and a clear commitment window. Soft enthusiasm never converts to a paid deposit. FairwayPal generates the itinerary for you so you always have something tangible to share.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a realistic budget for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a 3-night domestic US trip: $900–1,500/person for Myrtle Beach (budget), $1,400–2,200 for Scottsdale (mid-range), $1,500–2,500 for Bandon Dunes (premium). International trips add flight costs: Scotland and Ireland run $2,500–4,500/person for 5–7 nights. The biggest variables are green fees and hotel standard. Set the budget before you pick the destination, not the other way around.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many rounds of golf should you play on a trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two rounds is the standard for a 3-night trip. Three rounds is possible but leaves less recovery time and no buffer for weather delays. One morning round per day (7am–1pm) is the format most groups land on — it leaves the afternoon for shared activities and avoids the fatigue that comes with back-to-back 36-hole days. For a dedicated golf pilgrimage with a motivated group, three rounds over three days is fine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should you use a golf trip planner or do it yourself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DIY works if one person in the group is willing to spend 8–15 hours across multiple browser tabs booking tee times, hotels, restaurants, and coordinating 8 people\'s availability. A planner — AI or human — compresses that to 30–60 minutes. FairwayPal generates a full dual itinerary (golf + partner activities) from 5 questions, then sends one shareable link for the group to vote on. It doesn\'t eliminate the organiser\'s role, it just handles the structure.',
      },
    },
  ],
}

const STEPS = [
  {
    num: '01',
    title: 'Pick a destination',
    content: `The destination shapes everything else — budget, weather, partner options, course quality. Before you open a browser, answer these three questions: What's the group's budget per round? Does anyone have a bucket-list course in mind? Are partners coming?

If budget is the priority, Myrtle Beach is the correct answer. If course quality is the priority, Scottsdale, Bandon Dunes, or an international trip. If partners are coming, Scottsdale and Ireland are the strongest all-round options.`,
    destinations: [
      { href: '/destinations/scottsdale', name: 'Scottsdale', note: 'Premium desert golf + strong partner options' },
      { href: '/destinations/myrtle-beach', name: 'Myrtle Beach', note: 'Best value, 100+ courses, beach for partners' },
      { href: '/destinations/bandon-dunes', name: 'Bandon Dunes', note: 'Remote bucket-list, dedicated golf group only' },
      { href: '/destinations/pinehurst', name: 'Pinehurst', note: 'Historic courses, East Coast accessible' },
      { href: '/destinations/scotland', name: 'Scotland', note: 'Bucket-list links, cultural experience for partners' },
      { href: '/destinations/ireland', name: 'Ireland', note: 'Wild links + the best craic in golf travel' },
    ],
  },
  {
    num: '02',
    title: 'Lock the dates and headcount',
    content: `Don't plan courses, hotels, or anything else until you have a firm answer on dates and who's in. Every variable decision before this is wasted effort.

Send one message to the group with three date options and a commitment deadline: "I need a yes/no by Thursday. Here are the three weekends that work." Do not accept "probably" as an answer. Probably never shows up.

The headcount determines which accommodation options work. Four people fits most vacation rentals. Eight needs a larger house or a block of hotel rooms. Twelve needs a dedicated group negotiation with the property.`,
  },
  {
    num: '03',
    title: 'Set the budget upfront',
    content: `The budget conversation has to happen before you book anything. Ask directly: "What's everyone comfortable spending, all-in?" You need a real number, not a range.

The all-in cost for a typical 3-night domestic trip:
- Green fees: $150–350/round × 2 rounds = $300–700/person
- Accommodation: $100–300/night × 3 nights, split by headcount
- Flights: $150–500 depending on origin and destination
- Food and drink: $80–120/day

The usual mistake is planning the trip first, then telling the group what it costs. This creates a painful renegotiation at the worst possible moment. Set the number, then plan within it.`,
  },
  {
    num: '04',
    title: 'Book tee times',
    content: `Book tee times before you book accommodation. The courses fill up faster and your dates need to flex around tee time availability, not the other way around.

For most US destinations, GolfNow covers the majority of courses. Some premium courses (TPC Scottsdale, Pebble Beach) require direct booking. Call them.

For international trips, most Scottish and Irish courses have online booking. The Old Course at St Andrews runs a ballot system — apply the year before if St Andrews is on the list.

Book the morning earliest tee time available (7am–8am). This preserves the afternoon for group activities and leaves buffer for slow play.`,
  },
  {
    num: '05',
    title: 'Sort accommodation',
    content: `Three options, in order of preference for a group:

**Vacation rental (Airbnb/VRBO):** Best for groups of 4–10. Everyone in one house, shared costs, no hotel hallway logistics. Book early — good properties near golf destinations go fast.

**Hotel block:** Better for larger groups (10+) or when a vacation rental isn't available near the courses. Negotiate a group rate directly with the hotel.

**Golf resort (on-site accommodation):** At properties like Bandon Dunes or Kiawah Island, staying on-site is the right call — it eliminates transport and the resort is the experience.

Book cancellable rates until everyone has paid their deposit. Non-refundable rates are a coordination risk.`,
  },
  {
    num: '06',
    title: 'Handle the partner plan',
    content: `If partners are coming, the partner itinerary needs as much planning as the golf. "They'll figure something out" is how trips go sideways.

The structure that works: golf happens in the morning (7am–1pm). Partners have the morning to themselves — spa, hiking, exploring the town. The group reunites by 2pm for a shared afternoon activity or pool time. Group dinner every evening.

The mistake is treating partner time as unstructured. Book the spa appointments. Book the tour. Give them a plan as concrete as the tee times.`,
  },
  {
    num: '07',
    title: 'Share the plan and get commitment',
    content: `Once you have the destination, dates, tee times, and accommodation, share everything in one message. Not a draft. Not a "here are some options." The plan.

Include:
- Exact dates and location
- What's included in the cost (accommodation split, planned rounds, group dinners)
- What's not included (individual flights, optional activities)
- A payment deadline

Groups commit to specific plans. They deliberate on vague ones indefinitely. The organiser's job is to make the plan concrete enough that the only decision left is yes or no.`,
  },
]

export default function HowToPlanAGolfTripPage() {
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
          How to Plan a Golf Trip (Without Losing Your Mind or Your Friends)
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 5, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          You've volunteered to organise the trip. You now have six browser tabs open, an unanswered group chat, and no confirmed tee times. Here's the sequence that actually works — seven steps, in the right order, with no wasted motion.
        </p>

        <div className="mt-12 space-y-14 max-w-3xl">

          {STEPS.map((step) => (
            <section key={step.num}>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-display font-light text-gold/60 leading-none mt-1">{step.num}</span>
                <div className="flex-1">
                  <h2 className="text-3xl font-display font-light text-foreground">
                    {step.title}
                  </h2>
                  <div className="mt-4 space-y-3">
                    {step.content.split('\n\n').map((para, i) => (
                      <p key={i} className="text-base leading-8 text-muted-foreground">
                        {para}
                      </p>
                    ))}
                  </div>

                  {step.destinations && (
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {step.destinations.map((dest) => (
                        <Link
                          key={dest.href}
                          href={dest.href}
                          className="rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-gold/30"
                        >
                          <p className="text-sm font-semibold text-foreground">{dest.name}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{dest.note}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}

          {/* The shortcut */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8">
            <h2 className="text-2xl font-display font-light text-foreground">
              Or: answer 5 questions and let FairwayPal do steps 1–6 for you
            </h2>
            <p className="mt-3 text-base leading-8 text-muted-foreground">
              FairwayPal takes your destination, dates, group size, budget, and vibe — and generates a complete dual itinerary (golf on one side, partner activities on the other) with a shareable link for the group to vote on. It doesn't handle the actual booking, but it handles the hardest part: turning a vague group trip idea into a concrete plan.
            </p>
            <div className="mt-6">
              <Link className="primary-link" href="/plan">
                Start Planning — Free
              </Link>
            </div>
          </section>

          {/* Budget reference */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Quick budget reference by destination
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              All-in cost per person for a 3-night trip (4 golfers, 2 rounds):
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 text-left text-xs uppercase tracking-[0.12em] text-muted-foreground">Destination</th>
                    <th className="pb-3 text-left text-xs uppercase tracking-[0.12em] text-muted-foreground">Budget</th>
                    <th className="pb-3 text-left text-xs uppercase tracking-[0.12em] text-muted-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { dest: 'Myrtle Beach', range: '$900–1,500', note: 'Most affordable, 100+ courses' },
                    { dest: 'Pinehurst', range: '$1,100–1,800', note: 'Mid-range, historic courses' },
                    { dest: 'Scottsdale', range: '$1,400–2,200', note: 'Premium desert experience' },
                    { dest: 'Bandon Dunes', range: '$1,500–2,500', note: 'Remote, bucket-list only' },
                    { dest: 'Scotland / Ireland', range: '$2,500–4,500', note: '5–7 nights including flights' },
                  ].map((row) => (
                    <tr key={row.dest}>
                      <td className="py-3 font-medium text-foreground">{row.dest}</td>
                      <td className="py-3 text-gold">{row.range}</td>
                      <td className="py-3 text-muted-foreground">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Full breakdown by bucket: see <Link href="/blog/golf-trip-budget" className="text-gold hover:underline">Golf Trip Budget Breakdown</Link>.
            </p>
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

          {/* Related posts */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Related guides
            </h2>
            <div className="mt-6 space-y-3">
              {[
                { href: '/blog/golf-trip-weekend-schedule', title: 'The 3-Night Golf Weekend Schedule Template', desc: 'A concrete day-by-day schedule for golf, meals, and partner activities.' },
                { href: '/blog/golf-trip-group-size', title: 'Golf Trip Group Size: 4 vs 8 vs 12', desc: 'Tee time mechanics, accommodation value, and which group size actually works best.' },
                { href: '/blog/why-your-group-keeps-cancelling-golf-trip', title: 'Why Your Group Keeps Cancelling the Golf Trip', desc: 'The five real reasons trips fall apart in planning, and the simple fixes that work.' },
                { href: '/blog/how-to-split-costs-golf-trip', title: 'How to Split Costs Without Resentment', desc: 'The five practical methods, apps that help, and the one conversation that prevents most fights.' },
                { href: '/blog/best-golf-trip-apps', title: 'The Best Golf Trip Apps and Tools', desc: 'The 12 apps that actually make a golf trip easier. What\'s free, what\'s worth paying for.' },
                { href: '/blog/golf-trip-tipping-guide', title: 'Tipping on a Golf Trip', desc: 'Caddies, bag drops, halfway-house, valet. Country-by-country guidelines.' },
                { href: '/blog/golf-trip-budget', title: 'Golf Trip Budget Breakdown', desc: 'Real numbers by destination and group size.' },
                { href: '/blog/golf-trip-with-non-golfers', title: 'Golf Trip With Non-Golfers', desc: 'How to plan the partner itinerary alongside the golf.' },
                { href: '/blog/golf-trip-packing-list', title: 'The Golf Trip Packing List', desc: 'Golfer and partner lists — what to bring, what to leave.' },
                { href: '/blog/best-bachelor-party-golf-destinations', title: 'Best Bachelor Party Golf Destinations', desc: 'The six best destinations ranked with honest trade-offs.' },
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
