/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Bandon Dunes for Non-Golfers: A Partner\'s Guide | FairwayPal',
  description:
    'A friendly, honest guide to Bandon Dunes for the partner who is not playing. The beaches, the state parks, the spa, Old Town Bandon, and the daily rhythm that makes a remote Oregon trip work for everyone.',
  alternates: { canonical: 'https://fairwaypal.com/blog/bandon-dunes-for-non-golfers' },
  openGraph: {
    title: 'Bandon Dunes for Non-Golfers: A Partner\'s Guide',
    description:
      'How to enjoy a Bandon Dunes golf trip when you are not the one teeing off. Beaches, state parks, spa, food, and a daily rhythm that works.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bandon Dunes for Non-Golfers: A Partner\'s Guide',
  description:
    'A practical guide to Bandon Dunes for non-golfing partners. Beaches, coastal state parks, the resort spa, Old Town Bandon, what to pack, and a daily rhythm that mirrors 36-hole golf days.',
  url: 'https://fairwaypal.com/blog/bandon-dunes-for-non-golfers',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
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
      name: 'Bandon Dunes for Non-Golfers',
      item: 'https://fairwaypal.com/blog/bandon-dunes-for-non-golfers',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Bandon Dunes a good destination for non-golfing partners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends entirely on what the partner enjoys. Bandon is one of the most beautiful stretches of the Oregon coast, with miles of wild beaches, state parks, wildlife refuges, and a genuine small-town feel. Partners who love beach walks, hiking, photography, wildlife, and a quiet pace will be happy. Partners who want shopping, restaurant variety, spa days every afternoon, or a cultural city break will find Bandon thin. Be honest about which type of partner you are travelling with before you book.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is there to do in Bandon Oregon for non-golfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The signature non-golf experiences in Bandon are: walking Bandon Beach below Face Rock at low tide, exploring Bullards Beach State Park and the Coquille River Lighthouse, the Bandon Marsh National Wildlife Refuge for birding, Old Town Bandon for the Face Rock Creamery and local galleries, and a 40 minute drive north to Shore Acres State Park and Cape Arago for clifftop gardens, tide pools, and seal-watching. Circles in the Sand (April through August) creates beautiful walkable labyrinths on Face Rock beach.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a spa at Bandon Dunes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The Wellness Center at Bandon Dunes Resort offers massages and treatments using locally sourced ingredients, and is the easiest option if you are staying on-property. Bandon Woods, about 90 seconds from the resort, also operates a Shinrin-Yoku Spa with forest-bathing-inspired treatments. There are local Bandon options too. Booking 1 to 2 weeks ahead is wise in summer.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long should non-golfing partners stay in Bandon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Three to four nights is the sweet spot for most partners. That gives you two relaxed beach days, one day for Shore Acres and Cape Arago up north, and one for Old Town Bandon and the Coquille River Lighthouse. Five nights or more starts to feel slow unless you are specifically there for the quiet. If your group is doing a 7 night Bandon trip, consider a partner pairing with a couple of days in Portland on the way in or out.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need a car at Bandon Dunes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "If your partner is going to leave the resort during the day (and they will want to), yes. The Bandon Dunes resort itself runs shuttles between courses and the Preserve, but anything off-property (Old Town Bandon, Bullards Beach, Shore Acres, Cape Arago, the cranberry bogs) needs a car. Most groups already have a rental from the airport at Southwest Oregon Regional (OTH); if you are flying in via shuttle, factor in the cost of day-rental cars or rideshares for partner outings.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time of year for partners to visit Bandon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "May through October is the realistic window, mirroring the golf season. June through September is the driest stretch and best for partners who want to spend time outdoors. Late April and May add a beautiful bonus: Circles in the Sand begins in mid-April, dogwoods and rhododendrons bloom, and the gardens at Shore Acres are at their best. Avoid winter unless your partner specifically loves storm-watching on the Oregon coast (it is genuinely dramatic, but very wet).",
      },
    },
  ],
}

export default function BandonForNonGolfersPage() {
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
          Bandon Dunes for Non-Golfers: A Partner's Guide
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Bandon Dunes is one of the great pure-golf trips in the world, and it is also remote, weather-exposed, and built around the round. So if your partner is coming along and they do not play, the question is real: how do you turn this into a holiday for them too? The honest answer is that Bandon works beautifully for one specific type of partner, and not for another. Here is the friendly guide to figuring out which one you are travelling with, and if it is the right kind, exactly how to make the trip wonderful.
        </p>

        {/* Quick verdict */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The honest take</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Bandon is brilliant</span> for partners who love wild beaches, hiking, wildlife, photography, and a quiet pace. It is one of the most beautiful coastlines in America and it rewards a slower, outdoor-leaning trip.
          </p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Bandon is the wrong choice</span> for partners who want shopping streets, big restaurant variety, museums and culture, daily spa appointments, or a beach holiday with sun and warmth. If that is your partner, see <Link href="/destinations/pebble-beach" className="text-gold hover:underline">Pebble Beach</Link> or <Link href="/destinations/algarve" className="text-gold hover:underline">the Algarve</Link> instead. There is no shame in it; it is just the wrong fit.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* The honest framing */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Lean in or pick somewhere else
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Bandon does not pretend to be something it is not. It is a destination resort built around five world-class links courses on a remote stretch of the southern Oregon coast. The town of Bandon is small, the surrounding population is sparse, and the next sizeable city (Coos Bay) is 25 miles north. There is no shopping mall, no nightlife strip, no high-street spa scene, no buzzing food district.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              What there is, in absolute abundance: wild Pacific beaches, dramatic sea stacks, coastal state parks, a working wildlife refuge, a small-batch creamery in town, the Oregon cranberry country, fresh seafood, and a deep-set quiet that, for the right person, is the entire point. Partners who arrive ready to lean into that have a wonderful trip. Partners who expected something else have a long four days.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Frame the trip honestly with your partner before you book. If they say "I love the sound of long beach walks and hot soup by a wood fire", you are home and dry. If they say "Will there be lots to do?", say yes only if "lots to do" means outdoors and quiet.
            </p>
          </section>

          {/* Sample itinerary */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              A sample 3-day partner itinerary
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Here is what a great Bandon trip looks like from the partner's side, mapped against a typical golf group playing 36 holes a day. The shape: slow morning, a single anchor activity in the middle of the day, and a relaxed evening rejoining the group for dinner.
            </p>
            <div className="mt-6 space-y-4">
              <DayCard
                day="Day 1: settling in"
                morning="Slow start at the resort. Coffee on the deck. Walk down to the bluff and watch the first groups head out for golf."
                afternoon="Drive into Old Town Bandon (10 minutes). Lunch at Face Rock Creamery for a cheese flight and chowder. Wander the small galleries and harbour."
                evening="Pick the group up after their second round. Dinner at the resort. Early night."
              />
              <DayCard
                day="Day 2: the big partner day"
                morning="Breakfast at the resort. Drive 40 minutes north to Shore Acres State Park, with formal gardens on a clifftop above the Pacific."
                afternoon="Continue 10 minutes to Cape Arago for the headland walk. Watch sea lions and seals on Shell Island. Pack a lunch from the resort, or stop in Charleston (the village, not the city) on the way back."
                evening="Back to Bandon by 5 PM. Sunset on Bandon Beach below Face Rock. Dinner at the resort with the group. Compare notes on the day."
              />
              <DayCard
                day="Day 3: pace yourself"
                morning="Bullards Beach State Park and the Coquille River Lighthouse, a 5 minute drive north of town. Easy walking trails through dunes, and the lighthouse tower is open to visitors."
                afternoon="Spa appointment at the Wellness Center at the resort, or at Bandon Woods next door. Booked 1 to 2 weeks ahead in summer."
                evening="If you are visiting between mid-April and mid-August, walk a Circles in the Sand labyrinth at Face Rock Wayside. Otherwise, sunset and a quiet dinner."
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              The pattern: one anchor activity per day, generous time on either side, dinners with the group. Bandon rewards a slower rhythm, not a packed schedule.
            </p>
          </section>

          {/* Beaches */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The beaches and coastal walks
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Bandon's beaches are the soul of the trip for most partners. They are wild, cinematic, and almost always quiet. The sand is generally compact and easy to walk on, and at low tide whole new stretches open up for exploration.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Bandon Beach (Face Rock):</strong> the iconic stretch with the named sea stacks (Face Rock, Wizard's Hat, Cat and Kittens). Long, walkable, photogenic. The cliffside trail above gives elevated views if the tide is too high.</li>
              <li><strong>Coquille Point:</strong> just north of Bandon Beach. Headland walk with viewing platforms and binoculars. Best place to spot bald eagles, seabirds, and whales on the migration in spring and fall.</li>
              <li><strong>Bullards Beach State Park:</strong> 5 minutes north of town, includes the Coquille River Lighthouse. Quieter than Bandon Beach, easier walking, dog-friendly.</li>
              <li><strong>Table Rock:</strong> south end of the beach, less photographed than Face Rock and often empty. Great place for an early-morning solo walk with coffee.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pack waterproofs even in summer. Pack layers always. The Pacific is cold and the wind is constant; this is part of the experience.
            </p>
          </section>

          {/* State parks up the coast */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The state parks worth the drive
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The single best non-golf day in Bandon is the drive north to Shore Acres and Cape Arago. It is roughly 35 to 40 minutes each way, and easily fills 5 to 6 hours including lunch. If you are on the fence about whether Bandon will work for your partner, this is the day that swings it.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Shore Acres State Park</strong> sits on rugged sandstone cliffs above the ocean. It combines a formal Japanese garden, rose gardens, and clifftop trails leading down to the secluded Simpson Beach cove. In storm season it is famous for spectacular wave displays. In summer the gardens are at their best.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Cape Arago State Park</strong> is a tall headland 10 minutes further on. Two short trails: the North Cove Trail leads to an overlook of seals and sea lions hauled out on Shell Island, and the South Cove Trail descends to a sandy beach for tidepooling at low tide. Bring binoculars if you have them.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Sunset Bay State Park</strong> sits between the two and is worth a coffee stop, with a sheltered crescent of beach that is the closest Bandon comes to a calm swimming bay.
            </p>
          </section>

          {/* Old Town and food */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Old Town Bandon and the food
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Old Town Bandon, on the harbour at the mouth of the Coquille River, is small but genuine. A few good restaurants, a handful of galleries, the Bandon Historical Society Museum, and the Coquille Tribal Plaza make a relaxed afternoon.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Face Rock Creamery</strong> is the standout food stop. Award-winning artisan cheese made with local Oregon milk; the tasting room is friendly and unpretentious. Pair it with chowder from a harbour-side spot, and you have lunch sorted.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Back at the resort, the dining is genuinely good. Pacific Grill is the more elevated option; the Bunker Bar is the casual choice with the better view. Reservations are easy outside peak weekends.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Bandon is also Oregon's cranberry capital. <strong>Cranberry Sweets</strong> in Old Town is a small candy shop that has been making cranberry-based confections for decades, and a tour of one of the working bogs (a few minutes inland) is a surprisingly fun half-morning activity if your partner likes that sort of thing.
            </p>
          </section>

          {/* Wildlife */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Wildlife and seasonal experiences
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Bandon punches above its weight on wildlife. <strong>Bandon Marsh National Wildlife Refuge</strong>, just north of town, is one of the best birding sites on the Oregon coast, with nearly 200 recorded species across estuary, marsh, and forest habitats. A morning visit with binoculars is well-spent if your partner enjoys that.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              From November to January and again March to May, gray whales migrate past the Oregon coast and are visible from the bluff trails at Coquille Point and Cape Arago on clear days. Locals will tell you they see whales most weeks if they look.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The most surprising seasonal experience is <strong>Circles in the Sand</strong>. A local artist and a small team of volunteers create elaborate, walkable labyrinths in the sand at Face Rock Wayside, free for the public to walk. The 2026 season runs from April 19 through August 15, with specific dates posted on their schedule. Each labyrinth takes around 20 minutes to walk and is built fresh that morning, washed away by the next high tide. Parking fills early.
            </p>
          </section>

          {/* Spa */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Spa and wellness
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Bandon is not a spa-resort destination, but the options are genuinely good if you book ahead.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>The Wellness Center at Bandon Dunes Resort</strong> is the easiest option if you are staying on-property. Massages, facials, and treatments using locally sourced ingredients, with a fitness centre and pool attached. Reservations recommended 1 to 2 weeks ahead in summer.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Bandon Woods</strong>, a luxury residence and spa about 90 seconds from the main resort, runs a Shinrin-Yoku (forest-bathing) spa with treatments built around the Pacific Northwest landscape. Quieter and less golf-adjacent than the resort spa.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              For a less expensive local option, Bandon has a small handful of independent licensed massage therapists and a long-running day spa in town. Easy to book on shorter notice.
            </p>
          </section>

          {/* Pace and packing */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Pace, weather, and what to pack
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The pace at Bandon is slower than most resorts. Restaurants close earlier, opening hours are shorter on shoulder-season days, and "we will pop into town" usually means a 10 minute drive rather than a stroll. Build buffer into the plan and treat this as a feature, not a frustration.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The weather is the same weather the golfers are getting: wind always, rain a real possibility, temperatures cooler than the calendar suggests. Average summer highs are in the 60s Fahrenheit; mornings often start in the 50s. Pack layers, pack waterproofs, and pack proper walking shoes. Sandals are mostly decorative on this coast.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Our <Link href="/blog/golf-trip-packing-list" className="text-gold hover:underline">golf trip packing list</Link> has a full partner section. The non-negotiables for Bandon: a packable rain jacket, a warm midlayer, comfortable walking shoes that handle wet sand, a small daypack, and binoculars if you have them.
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
              Bandon for non-golfers FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="Is Bandon Dunes a good destination for non-golfing partners?"
                answer="Bandon works beautifully for partners who love wild beaches, hiking, wildlife, photography, and a quiet pace. It is the wrong choice for partners who want shopping, restaurant variety, or a sun-and-spa beach holiday. Be honest about your partner before you book."
              />
              <FaqItem
                question="What is there to do in Bandon Oregon for non-golfers?"
                answer="Beach walks at Bandon Beach and Coquille Point, Bullards Beach State Park and the Coquille River Lighthouse, the Bandon Marsh National Wildlife Refuge, Old Town Bandon for the Face Rock Creamery and galleries, and a 40 minute drive north to Shore Acres State Park and Cape Arago. Circles in the Sand (April to August) creates beautiful walkable labyrinths on the beach."
              />
              <FaqItem
                question="Is there a spa at Bandon Dunes?"
                answer="Yes. The Wellness Center at Bandon Dunes Resort offers massages and treatments. Bandon Woods next door operates a Shinrin-Yoku Spa. Booking 1 to 2 weeks ahead is wise in summer."
              />
              <FaqItem
                question="How long should non-golfing partners stay in Bandon?"
                answer="Three to four nights is the sweet spot. That gives you two beach days, one day at Shore Acres and Cape Arago, and one in Old Town Bandon. Five+ nights starts to feel slow unless you are specifically there for the quiet."
              />
              <FaqItem
                question="Do you need a car at Bandon Dunes?"
                answer="If your partner is going to leave the resort during the day, yes. The resort runs shuttles between courses but anything off-property requires a car or rideshare."
              />
              <FaqItem
                question="When is the best time of year for partners to visit Bandon?"
                answer="June through September is the driest and best for outdoor time. Late April and May add Circles in the Sand and bloom season. Avoid winter unless your partner specifically loves storm-watching."
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
                href="/destinations/bandon-dunes"
                title="Bandon Dunes Destination Guide"
                description="The full golf-side guide: courses, hotels, partner activities, and packing."
              />
              <RelatedPost
                href="/blog/bandon-dunes-vs-pebble-beach-golf-trip"
                title="Bandon Dunes vs Pebble Beach"
                description="Honest head-to-head between the two great West Coast bucket-list trips."
              />
              <RelatedPost
                href="/blog/golf-trip-with-non-golfers"
                title="Golf Trips With Non-Golfers"
                description="The general playbook for planning a trip that works for the whole group."
              />
              <RelatedPost
                href="/blog/what-to-do-on-golf-trip-non-golfer"
                title="What to Do on a Golf Trip If You Don't Golf"
                description="Real options by destination, by the partner who lived through it."
              />
              <RelatedPost
                href="/blog/golf-trip-packing-list"
                title="Golf Trip Packing List"
                description="What golfers and partners actually need to bring (with a Bandon-specific section)."
              />
              <RelatedPost
                href="/blog/golf-trip-budget"
                title="Golf Trip Budget Breakdown"
                description="Real numbers by destination and group size."
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
