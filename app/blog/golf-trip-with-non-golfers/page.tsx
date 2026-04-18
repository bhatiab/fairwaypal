/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

const GYG_PARTNER = process.env.NEXT_PUBLIC_GYG_PARTNER_ID || '9GLTCAY'

export const metadata: Metadata = {
  title: 'Golf Trip With Non-Golfers: How to Plan It Without Killing the Vibe — FairwayPal',
  description:
    "One person wants tee times. The other wants a spa. Here's how to plan a golf trip that actually works for both — without hours of negotiation.",
  alternates: { canonical: 'https://fairwaypal.com/blog/golf-trip-with-non-golfers' },
  openGraph: {
    title: 'Golf Trip With Non-Golfers: How to Plan It Without Killing the Vibe',
    description:
      "One person wants tee times. The other wants a spa. Here's how to plan a golf trip that actually works for both.",
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Golf Trip With Non-Golfers: How to Plan It Without Killing the Vibe',
  description:
    "One person wants tee times. The other wants a spa. Here's how to plan a golf trip that actually works for both — without hours of negotiation.",
  url: 'https://fairwaypal.com/blog/golf-trip-with-non-golfers',
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
      name: 'Golf Trip With Non-Golfers',
      item: 'https://fairwaypal.com/blog/golf-trip-with-non-golfers',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What do non-golfers do while golfers are on the course?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non-golfers have more to do than most people assume. In Scottsdale: spa days, Old Town, hiking. In Myrtle Beach: beach, watersports, Broadway at the Beach. In Scotland: castles, whisky distilleries, coastal walks. The key is booking activities in advance rather than hoping they'll 'figure it out.' Most golf rounds finish by 1pm, leaving the whole afternoon for group activities.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you plan a golf trip that works for couples?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pick a destination with genuine non-golf options, not just a clubhouse. Schedule golf in the morning only. Book at least one partner activity in advance (spa, tour, experience). Plan a shared dinner Saturday night — the whole group, good restaurant. Be transparent about costs upfront so there are no surprises. FairwayPal generates both itineraries simultaneously — golf schedule and partner activities — so neither side is an afterthought.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which golf destinations are best for non-golfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Scottsdale is the strongest all-round option — world-class spas, Old Town, hiking, wine trail, and excellent restaurants. Ireland and Scotland offer rich cultural experiences (castles, whisky, coastal walks, pubs). Myrtle Beach works well if your partner enjoys the beach scene. Pinehurst Village has a charming town but less activity density. Bandon Dunes is remote — spectacular, but partners need to be self-sufficient.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much extra does it cost to bring a non-golfing partner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The partner's costs are actually lower than a golfer's — no green fees ($0 vs $150–350/round). The main costs are accommodation (shared room = split cost), food, activities ($50–200/day for spas, tours, experiences), and flights. Expect to add $200–400 to the total trip cost per partner vs having a solo golfer in the same room. The biggest variable is activities — a spa day in Scottsdale runs $150–300.",
      },
    },
    {
      '@type': 'Question',
      name: 'Should non-golfers come on a bachelor golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Depends entirely on the group. Some bachelor trips are purely golf-focused — no partners, golf every morning and afternoon, full-send evenings. That works. But if the groom's partner is coming, or if half the group has partners who want to join, a mixed trip is completely viable if you plan both sides properly. The mistake is treating it as either/or. A well-planned mixed bachelor trip can actually be more memorable than a purely golf-focused one.",
      },
    },
  ],
}

export default function GolfTripWithNonGolfersPage() {
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
          Golf Trip With Non-Golfers: How to Plan It Without Killing the Vibe
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>April 17, 2025</span>
          <span>·</span>
          <span>7 min read</span>
        </div>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          You've been planning this trip for three months. Six guys, Scottsdale, three rounds. The group chat is alive for the first time in a year. Then someone mentions their partner wants to come. Then another. Now you've got a mixed group, a complicated schedule, and a vibe that could go either way.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          Here's how to plan it so everyone actually has a good time.
        </p>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The scheduling problem is smaller than you think
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Golf takes 4–5 hours. Add breakfast before and a beer after, and you're looking at 7am to 1pm. That's the golf block. It's fixed, it's finite, and it leaves the entire afternoon free.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The mistake most groups make is treating the trip as "a golf trip that partners tag along to." Flip it. You have a shared weekend in Scottsdale — or Ireland, or wherever — and the mornings happen to have golf in them.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              When you frame it that way, the planning gets easier. You're not apologising for playing 36 holes. You're building a full schedule that happens to include 36 holes. Partners have a morning plan. Afternoons are shared. Evenings are everyone together.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The conflict isn't really about golf. It's about whether non-golfers feel like an afterthought. Solve that problem and the rest is logistics.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Pick the right destination
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Not all golf destinations work equally well for mixed groups. The question to ask isn't "is there good golf here?" — there's good golf almost everywhere on our list. The question is: can a non-golfer fill three days without needing you to entertain them?
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Here's the honest breakdown by destination:
            </p>
            <div className="mt-6 space-y-4">
              <DestinationNote
                name="Scottsdale, AZ"
                href="/destinations/scottsdale"
                rating="Excellent for partners"
                note="Old Town, world-class spas, hiking, wine trail, hot air balloons. The strongest non-golf activity density of any US golf destination."
              />
              <DestinationNote
                name="Myrtle Beach, SC"
                href="/destinations/myrtle-beach"
                rating="Great for partners"
                note="The beach is the partner itinerary. Broadway at the Beach, watersports, fishing. Works particularly well in summer."
              />
              <DestinationNote
                name="Ireland"
                href="/destinations/ireland"
                rating="Excellent for partners"
                note="Galway, the Cliffs of Moher, pubs, castles, coastal villages. Ireland sells itself. Partners often come back happier than the golfers."
              />
              <DestinationNote
                name="Scotland"
                href="/destinations/scotland"
                rating="Great for partners"
                note="Castles, whisky distilleries, St Andrews town, coastal walks. The cultural density is high. Partners need to be comfortable with variable weather."
              />
              <DestinationNote
                name="Pinehurst, NC"
                href="/destinations/pinehurst"
                rating="Moderate for partners"
                note="The village is charming. Lake Tillery is nearby. But activity density is lower than the others — works best if partners are happy with slower pace."
              />
              <DestinationNote
                name="Bandon Dunes, OR"
                href="/destinations/bandon-dunes"
                rating="Challenging for partners"
                note="Spectacular, remote, and genuinely off the grid. Partners who love coastal scenery, hiking, and unplugging will be fine. Everyone else may struggle."
              />
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              What partners actually want
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Not to be an afterthought. That's mostly it.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The problem isn't that partners don't enjoy golf destinations. Scottsdale has world-class spas, wine trails, and hiking that most non-golfers would choose for a standalone weekend away. Ireland is genuinely extraordinary. The problem is that "figure it out when you get there" is not a plan.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              When you arrive with an actual itinerary — spa booked Thursday, walking tour Friday morning, dinner reservation Saturday — everything changes. You've done the work. They're not trailing behind a golf trip. They're on a trip.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The three things to book before you leave:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="rounded-xl border border-border bg-card/60 p-4 text-sm leading-6 text-muted-foreground">
                <span className="font-semibold text-foreground">One experience worth doing.</span> Not just "look around the city." Something bookable: a spa package, a hot air balloon, a whisky tour, a cooking class. GetYourGuide has a{' '}
                <a href={`https://www.getyourguide.com/?partner_id=${GYG_PARTNER}`} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">good selection</a>{' '}
                for every destination. Book it in advance — the good slots fill up.
              </li>
              <li className="rounded-xl border border-border bg-card/60 p-4 text-sm leading-6 text-muted-foreground">
                <span className="font-semibold text-foreground">A morning plan for each golf day.</span> Even loose. "Spa Thursday, Old Town Friday" is enough. It means they don't wake up on a golf morning wondering what to do for five hours.
              </li>
              <li className="rounded-xl border border-border bg-card/60 p-4 text-sm leading-6 text-muted-foreground">
                <span className="font-semibold text-foreground">A proper dinner reservation.</span> More on this below.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The shared moment that makes the trip
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Every successful mixed golf trip has one: the shared Saturday dinner.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Not a quick meal at the clubhouse before the 19th hole. A proper dinner — good restaurant, full group, everyone at the same table. The golfers talk about the round. The non-golfers have stories from the day. The trip becomes a shared memory instead of two parallel experiences that happened to overlap geographically.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Book it in advance. This is the most important reservation you'll make all trip. At a 10-person dinner in Scottsdale or a Galway seafood restaurant in peak season, walk-ins don't work.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The conversation to have before you book anything
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Have this conversation before deposits go down on anything.
            </p>
            <blockquote className="mt-6 rounded-xl border border-gold/20 bg-gold/5 p-6 text-base italic leading-8 text-muted-foreground">
              "We're going to [destination]. Golf is happening Friday and Saturday mornings — we're off the course by 1pm both days. Here's what the afternoons and evenings look like. Here's what you can do while we play. Here's the budget per person. Does that work for you?"
            </blockquote>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              If the answer is no, either adjust the destination or adjust the schedule. But get the answer before you've put deposits on four tee times and a 10-person Airbnb.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The conversation feels awkward. It isn't, or at least it's far less awkward than the conversation you'll have at 11pm on Friday when someone feels sidelined and the whole trip turns.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Or: let the AI do the itinerary work
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              FairwayPal generates both sides of the itinerary automatically. You answer five questions — destination, dates, group size, budget, vibe. It builds the golf schedule and the partner activities in parallel, slotted around each other. Golfers on the course in the morning; partners have a plan. Afternoons and evenings show shared activities.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              One link goes to the whole group. Everyone votes. You resolve any conflicts. Trip locked. It takes about five minutes of actual work.
            </p>
            <div className="mt-8">
              <Link className="primary-link" href="/plan">
                Plan Your Trip — Free
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Mixed golf trip FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="What do non-golfers do while golfers are on the course?"
                answer="Non-golfers have more to do than most people assume. In Scottsdale: spa days, Old Town, hiking. In Myrtle Beach: beach, watersports, Broadway at the Beach. In Scotland: castles, whisky distilleries, coastal walks. The key is booking activities in advance rather than hoping they'll 'figure it out.' Most golf rounds finish by 1pm, leaving the whole afternoon for group activities."
              />
              <FaqItem
                question="How do you plan a golf trip that works for couples?"
                answer="Pick a destination with genuine non-golf options, not just a clubhouse. Schedule golf in the morning only. Book at least one partner activity in advance — spa, tour, experience. Plan a shared dinner Saturday night. Be transparent about costs upfront. FairwayPal generates both itineraries simultaneously so neither side is an afterthought."
              />
              <FaqItem
                question="Which golf destinations are best for non-golfers?"
                answer="Scottsdale is the strongest all-round option — spas, Old Town, hiking, wine trail. Ireland and Scotland offer rich cultural experiences. Myrtle Beach works well for the beach crowd. Pinehurst is charming but quieter. Bandon Dunes is remote — spectacular, but partners need to be comfortable off-grid."
              />
              <FaqItem
                question="How much extra does it cost to bring a non-golfing partner?"
                answer="The partner's costs are actually lower — no green fees. Main costs: shared accommodation (split), food, activities ($50–200/day for spas, tours), and flights. Expect to add $200–400 to the total trip cost per partner compared to a solo golfer in the same room. A Scottsdale spa day runs $150–300 as the biggest variable."
              />
              <FaqItem
                question="Should non-golfers come on a bachelor golf trip?"
                answer="Depends on the group. Purely golf-focused bachelor trips work fine — no partners, golf morning and afternoon, full-send evenings. But if some partners want to join, a mixed trip is completely viable with proper planning. A well-planned mixed bachelor trip often ends up more memorable than a purely golf-focused one."
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
                href="/blog/what-to-do-on-golf-trip-non-golfer"
                title="What to Do If You Don't Golf"
                description="Activity ideas by destination, from spa days to whisky tours."
              />
              <RelatedPost
                href="/blog/golf-trip-budget"
                title="Golf Trip Budget Breakdown"
                description="What a golf trip actually costs — by destination and group size."
              />
              <RelatedPost
                href="/blog/best-bachelor-party-golf-destinations"
                title="Best Bachelor Golf Destinations"
                description="Six destinations ranked honestly, with partner options noted."
              />
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}

function DestinationNote({
  name, href, rating, note,
}: {
  name: string; href: string; rating: string; note: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-5">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <Link href={href} className="text-base font-semibold text-foreground hover:text-gold transition-colors">
          {name} →
        </Link>
        <span className="rounded-sm border border-fairway/30 bg-fairway/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-fairway-text">
          {rating}
        </span>
      </div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{note}</p>
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
