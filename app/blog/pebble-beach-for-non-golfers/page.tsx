/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Pebble Beach for Non-Golfers: A Partner\'s Guide | FairwayPal',
  description:
    'A friendly, honest guide to Pebble Beach for the partner who is not playing. Carmel-by-the-Sea, the Monterey Bay Aquarium, the 17-Mile Drive, Big Sur, Carmel Valley wine country, and a daily rhythm that makes the whole trip work.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/pebble-beach-for-non-golfers' },
  openGraph: {
    title: 'Pebble Beach for Non-Golfers: A Partner\'s Guide',
    description:
      'How to make Pebble Beach the friendliest bucket-list golf trip for the partner who is not teeing off.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pebble Beach for Non-Golfers: A Partner\'s Guide',
  description:
    'A practical guide to Pebble Beach for non-golfing partners. Carmel-by-the-Sea, the Monterey Bay Aquarium, the 17-Mile Drive, Big Sur, Carmel Valley, the spa, and a daily rhythm that mirrors a golf trip schedule.',
  url: 'https://www.fairwaypal.com/blog/pebble-beach-for-non-golfers',
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
      name: 'Pebble Beach for Non-Golfers',
      item: 'https://www.fairwaypal.com/blog/pebble-beach-for-non-golfers',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Pebble Beach a good destination for non-golfing partners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, possibly the best of the major bucket-list golf resorts in the US. Pebble Beach is on the Monterey Peninsula, with Carmel-by-the-Sea about five minutes away (galleries, beach, restaurants, walkable village), the Monterey Bay Aquarium 20 minutes north, the 17-Mile Drive on your doorstep, Big Sur 30 miles south for dramatic coastline, and Carmel Valley wine country 15 miles inland. A non-golfer can have a real holiday here without ever stepping on the course.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is there to do in Pebble Beach for non-golfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The signature non-golf experiences are: walking Carmel-by-the-Sea (Ocean Avenue, Carmel Beach, the historic Mission, 100-plus art galleries, all walkable), a half-day at the Monterey Bay Aquarium for the open ocean tank and jellies, the 17-Mile Drive scenic loop, a Big Sur day trip down Highway 1, wine tasting in Carmel Valley, a spa appointment at The Spa at Pebble Beach, and a long beach walk on Carmel Beach at sunset. Most partners do all of these across a 3 to 5 night trip and still want to come back.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Monterey Bay Aquarium worth visiting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. It is genuinely one of the best aquariums in the world. The Open Sea exhibit (sea turtles, ocean sunfish, hammerheads, multiple jellyfish species) and the kelp forest tank are the standouts. Adult tickets are $65 (2026 pricing); youth and senior are $50; children 4 and under are free. Open daily from 10 AM to 6 PM. Book tickets in advance, especially on weekends and during California school holidays. Plan 3 to 4 hours for a relaxed visit.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a spa at Pebble Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The Spa at Pebble Beach, attached to The Lodge, is the on-property option and the easiest to book if you are staying at the resort. Treatments are excellent and pricing reflects the resort. Just inland, the Carmel Valley Ranch resort spa is quieter and easier to book on shorter notice if you are basing the trip there. Independent spas in Carmel and Monterey are worth looking at if you want something less expensive.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long should non-golfing partners stay at Pebble Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Three to five nights is the sweet spot. Three nights covers Carmel, the Aquarium, and the 17-Mile Drive. Four to five nights adds Big Sur and Carmel Valley wine country comfortably. Anything over five nights starts to feel slow unless your partner specifically wants beach-and-spa downtime, in which case Pebble can absorb a week without strain. The variety here is the strongest of any major US golf resort, so partners rarely run out of things to do.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time of year for partners to visit Pebble Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "May through October is the driest and most consistent. Be prepared for cool, foggy mornings even in mid-summer (July highs are typically 55 to 65°F). The fog usually burns off by late morning. September and October give you the warmest and clearest conditions, with fewer crowds. Avoid the AT&T Pro-Am dates in late January or early February when Pebble Links closes to public play and Carmel is busy.",
      },
    },
  ],
}

export default function PebbleForNonGolfersPage() {
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
          Pebble Beach for Non-Golfers: A Partner's Guide
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Of all the bucket-list golf resorts in the United States, Pebble Beach is the kindest to non-golfing partners. Five minutes from the resort sits one of the most charming small towns in California. Twenty minutes north is one of the best aquariums in the world. Thirty miles south is Big Sur. Fifteen miles inland is wine country. The whole Monterey Peninsula is set up so that the partner who is not teeing off can have an actual holiday, not a long week of waiting around. Here is the friendly guide to making the most of it.
        </p>

        {/* Quick verdict */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The honest take</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Pebble Beach works for almost any partner.</span> The mix of walkable village, world-class aquarium, scenic drives, dramatic coastline, wine country, and a proper spa is unusually generous for a golf-first destination. If your partner wants shopping and good food, Carmel delivers. If they want a beach holiday, Carmel Beach is one of the best in California. If they want culture and history, the Mission and the galleries are walking distance. If they want a quiet day, they have the spa. The variety is the whole point.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Honest framing */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Why Pebble is the easy partner pick
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Most of the great American golf resorts are either pretty remote (Bandon) or quiet, traditional, and golf-focused (Pinehurst). Pebble Beach is the outlier. It sits on the Monterey Peninsula, in the middle of one of the most concentrated little stretches of California experience anywhere: a celebrated village, a world-class aquarium, an iconic scenic drive, and Big Sur all within an hour's reach.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              That density means a non-golfing partner has options at every kind of pace. They can have a busy day in Monterey, a quiet day on Carmel Beach, an active day driving Big Sur, or a slow day at the spa. The trip can flex. Compare that to a destination where the partner has one option per day if they are lucky, and the difference is real.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The trade-off is the cost. Pebble is the most expensive of the US bucket-list resorts on accommodation and food, and Carmel is not cheap once you start booking dinners. But for the trip experience itself, especially with partners involved, Pebble earns its premium.
            </p>
          </section>

          {/* Sample itinerary */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              A sample 3-day partner itinerary
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Here is what a relaxed Pebble Beach trip looks like from the partner's side, mapped against the golfers playing 18 to 36 holes a day. The shape: one anchor activity, time to wander, evenings rejoining the group.
            </p>
            <div className="mt-6 space-y-4">
              <DayCard
                day="Day 1: Carmel-by-the-Sea"
                morning="Slow start at The Lodge or Inn at Spanish Bay. Drive the 5 minutes into Carmel and park near Ocean Avenue."
                afternoon="Walk Ocean Avenue down to Carmel Beach. Stop into a few of the galleries on the way. Lunch on a courtyard terrace."
                evening="Dinner in Carmel before heading back. The walk back up Ocean Avenue is uphill, so pace yourself or call a cab."
              />
              <DayCard
                day="Day 2: Monterey + the Aquarium"
                morning="Drive 20 minutes north to Monterey. Pre-book Aquarium tickets for a 10 AM entry to beat the crowds."
                afternoon="Three to four hours at the Aquarium (Open Sea, jellies, kelp forest are the must-sees). Lunch on Cannery Row."
                evening="Optional: stay in Monterey for sunset on Old Fisherman's Wharf, or drive back to Carmel for dinner."
              />
              <DayCard
                day="Day 3: 17-Mile Drive + The Spa"
                morning="Drive the 17-Mile Drive scenic loop (about 90 minutes with stops at Bird Rock, Cypress Point lookout, the Lone Cypress)."
                afternoon="Spa appointment at The Spa at Pebble Beach. Booked 1 to 2 weeks ahead in peak season."
                evening="Sunset cocktails at Spanish Bay (the bagpiper plays nightly at sunset on the 18th). Dinner with the group."
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Add a fourth day for a Big Sur drive or Carmel Valley wine tasting if your trip is longer. Both are easy to fold in.
            </p>
          </section>

          {/* Carmel */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Carmel-by-the-Sea: the village that makes the trip
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Carmel is genuinely the partner anchor of any Pebble Beach trip. Five minutes from the resort, walkable from end to end, charmingly compact, and packed with reasons to slow down.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Ocean Avenue</strong> is the main artery, just over half a mile from Carmel Plaza at the top to Carmel Beach at the bottom. The roundtrip is about a 30 to 40 minute walk and the descent into the beach is genuinely picturesque.</li>
              <li><strong>The galleries</strong> are extraordinary in concentration: well over 50 in the village, and on the second Saturday of every month a coordinated art walk brings 14 of them together with the artists in residence.</li>
              <li><strong>Carmel Beach</strong> is repeatedly ranked among the cleanest and most beautiful in the US. Stately Cypress trees frame white sand, and the crescent shape catches gentle waves. Long walks, photography, dogs everywhere (Carmel is famously dog-friendly).</li>
              <li><strong>The Mission San Carlos Borromeo</strong>, founded in 1771 by Father Junipero Serra, is a short walk from the village centre. The architecture, the gardens, and the history are worth an hour even if your partner is not specifically interested in missions.</li>
              <li><strong>Tasting rooms and food</strong>: about 18 wine tasting rooms within the village, plus an outsized number of good restaurants for a town this small. Reservations help in summer.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Most partners do at least two days of Carmel even when they have other plans. It is the kind of village that grows on you.
            </p>
          </section>

          {/* Aquarium */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Monterey Bay Aquarium
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Aquarium is genuinely world-class and the single best half-day a partner can spend if they have any interest in marine life. It is consistently ranked among the top aquariums anywhere, and it shows up in the experience: thoughtful exhibits, exceptional curation, and a clear conservation mission.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The two standout exhibits are the <strong>Open Sea</strong> tank, which is enormous and home to sea turtles, ocean sunfish, scalloped hammerhead sharks, and pelagic stingrays, and the <strong>jellyfish exhibits</strong>, which are simply mesmerising. The kelp forest tank, the sea otter habitat, and the rotating special exhibitions round out the visit.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Practicalities for 2026: open daily from 10 AM to 6 PM. Adult tickets $65, youth (5 to 17) and seniors (70+) $50, children 4 and under free. Book in advance, especially weekends and California school holidays. Plan 3 to 4 hours for a relaxed visit. Cannery Row is right outside if you want lunch nearby.
            </p>
          </section>

          {/* 17-Mile Drive */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The 17-Mile Drive
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The 17-Mile Drive is the scenic self-guided tour of the Monterey Peninsula, looping through the gated Pebble Beach community past coastline, cypresses, and some of the most photographed scenery in California. Without stops you can drive it in 30 minutes; with stops it easily fills 90 minutes to 2 hours.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The signature stops: Bird Rock (sea lions, seals, and seabirds in significant numbers), Seal Rock, the Cypress Point lookout, and the Lone Cypress (the iconic single tree on the rocky promontory, possibly the most photographed tree in North America). Pull over, walk, take photos, get coffee at one of the resorts along the way.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Resort guests at Pebble Beach Company hotels (The Lodge, Inn at Spanish Bay, Casa Palmero) can drive in free. Outside guests pay an entry fee at the gate. Either way, the drive is worth doing once and easily folds into a day with a Carmel lunch.
            </p>
          </section>

          {/* Big Sur */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Big Sur: the day trip worth the drive
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              If your partner enjoys dramatic landscapes and you have a full day to spare, Big Sur is one of the great coastal drives in the world. The first stretch begins about 30 miles south of Pebble Beach, and the road (Highway 1) hugs cliffs above the Pacific for the next 90 miles.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              A reasonable day trip without overdoing the drive: leave by 9 AM, stop at Bixby Bridge for the iconic photo, continue to Pfeiffer Big Sur State Park for a short redwoods walk, stop at Nepenthe for a clifftop lunch, and turn around. Back at Pebble for cocktails by 5 PM, dinner with the group at 7 PM. Anyone going further south (to Esalen, McWay Falls, Hearst Castle) should plan for a longer day.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Highway 1 sometimes closes after winter storms because of landslides. Check the California Department of Transportation before you set out, especially November to April.
            </p>
          </section>

          {/* Carmel Valley */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Carmel Valley wine country
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Carmel Valley sits 15 miles inland and feels like a different climate. Where the coast is foggy, the valley is sunny. Where Carmel is busy, the valley is quiet. About 20 wine tasting rooms cluster along Carmel Valley Road and in the village of Carmel Valley itself, with Pinot Noir and Chardonnay as the standout local varietals.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              A half-day plan: drive in late morning, taste at three or four rooms (book ahead at the smaller estates), have lunch in Carmel Valley village, drive back through the redwoods. It is much more relaxed than Napa or Sonoma and easier to do without a designated driver if your partner is happy to spit. If you want to make a day of it, the Carmel Valley Ranch resort has a beautiful spa and a Pete Dye golf course on-property.
            </p>
          </section>

          {/* Spa */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Spa and wellness
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pebble Beach has the spa scene to match the rest of the experience.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>The Spa at Pebble Beach</strong>, on-property at The Lodge, is the easiest option for resort guests. Excellent massage, facial, and body treatment menu. Pricing reflects the resort, so plan a single appointment rather than a full spa day if you are budget-conscious.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Carmel Valley Ranch Spa</strong>, 15 miles inland, is quieter, often easier to book on shorter notice, and pairs nicely with a half-day of wine tasting in the valley. A shuttle or rideshare gets you there.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Independent spas in Carmel and Monterey</strong> are worth a look if you want something less expensive. Marina (about 25 minutes north) has smaller, quieter day spas with excellent treatments at a fraction of the resort price.
            </p>
          </section>

          {/* Pace and packing */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Pace, weather, and what to pack
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Monterey Peninsula has its own quirky climate. Even in July, mornings start cool and often foggy (highs are typically 55 to 65°F), with the fog burning off by late morning to give a clear, mild afternoon. By 4 PM the marine layer often returns, and evenings are sweater weather pretty much year-round. This is good news for daytime activity, less good news if your partner was hoping for a sunbathing holiday.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pack layers: a light jumper, a long-sleeve T-shirt, a packable jacket. Bring closed walking shoes for Ocean Avenue, the Mission, the Aquarium, and the Big Sur stops. Sandals work for the beach itself. A nicer dinner outfit is worth packing for at least one night in Carmel because the better restaurants do skew dressier.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Our <Link href="/blog/golf-trip-packing-list" className="text-gold hover:underline">golf trip packing list</Link> has a full partner section with specifics.
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
              Pebble Beach for non-golfers FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="Is Pebble Beach a good destination for non-golfing partners?"
                answer="Yes, possibly the best of the major bucket-list golf resorts in the US. Carmel-by-the-Sea is five minutes away, the Monterey Bay Aquarium is 20 minutes, the 17-Mile Drive is on the doorstep, Big Sur is 30 miles south, and Carmel Valley wine country is 15 miles inland."
              />
              <FaqItem
                question="What is there to do in Pebble Beach for non-golfers?"
                answer="Walking Carmel-by-the-Sea (Ocean Avenue, Carmel Beach, Mission, galleries), the Monterey Bay Aquarium, the 17-Mile Drive, a Big Sur day trip, Carmel Valley wine tasting, a spa appointment at The Spa at Pebble Beach, and long beach walks at sunset."
              />
              <FaqItem
                question="Is the Monterey Bay Aquarium worth visiting?"
                answer="Yes. It is one of the top aquariums in the world. Open Sea tank, jellies, and kelp forest are the standouts. Adult tickets $65 in 2026, open 10 AM to 6 PM daily. Book in advance for weekends. Plan 3 to 4 hours."
              />
              <FaqItem
                question="Is there a spa at Pebble Beach?"
                answer="Yes. The Spa at Pebble Beach is on-property at The Lodge. Carmel Valley Ranch has a quieter spa option 15 miles inland. Independent spas in Carmel and Monterey offer less expensive alternatives."
              />
              <FaqItem
                question="How long should non-golfing partners stay?"
                answer="Three to five nights is the sweet spot. Three covers Carmel, the Aquarium, and 17-Mile Drive. Four to five adds Big Sur and Carmel Valley wine country comfortably."
              />
              <FaqItem
                question="When is the best time of year for partners?"
                answer="May through October. September and October are warmest and clearest. Avoid the AT&T Pro-Am dates in late January or early February when Pebble Links closes to public play."
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
                href="/destinations/pebble-beach"
                title="Pebble Beach Destination Guide"
                description="The full golf-side guide: courses, hotels, partner activities, and packing."
              />
              <RelatedPost
                href="/blog/pebble-beach-golf-trip"
                title="Pebble Beach Golf Trip Guide"
                description="How to actually get tee times, what it costs, and the full itinerary."
              />
              <RelatedPost
                href="/blog/bandon-dunes-vs-pebble-beach-golf-trip"
                title="Bandon Dunes vs Pebble Beach"
                description="Honest head-to-head between the two great West Coast bucket-list trips."
              />
              <RelatedPost
                href="/blog/bandon-dunes-for-non-golfers"
                title="Bandon Dunes for Non-Golfers"
                description="The partner-side guide for the more remote West Coast option."
              />
              <RelatedPost
                href="/blog/golf-trip-with-non-golfers"
                title="Golf Trips With Non-Golfers"
                description="The general playbook for planning a trip that works for the whole group."
              />
              <RelatedPost
                href="/blog/golf-trip-packing-list"
                title="Golf Trip Packing List"
                description="What golfers and partners actually need to bring."
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
