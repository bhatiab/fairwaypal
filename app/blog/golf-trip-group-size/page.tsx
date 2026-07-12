/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 5, 2026'

export const metadata: Metadata = {
  title: 'Golf Trip Group Size Guide: 4 vs 8 vs 12 Players — FairwayPal',
  description:
    'How group size affects tee times, accommodation, costs, and social dynamics on a golf trip. Why 8 is the sweet spot — and what to do if you have 4 or 12.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/golf-trip-group-size' },
  openGraph: {
    title: 'Golf Trip Group Size: 4 vs 8 vs 12 Players',
    description:
      'Tee time rules, accommodation, costs, and social dynamics at every group size. Verdict: 8 is the sweet spot — here\'s why.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Golf Trip Group Size Guide: 4 vs 8 vs 12 Players',
  description:
    'How group size affects tee times, accommodation, costs, and social dynamics. Why 8 is the sweet spot and what to do if you have 4 or 12.',
  url: 'https://www.fairwaypal.com/blog/golf-trip-group-size',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
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
      name: 'Golf Trip Group Size Guide',
      item: 'https://www.fairwaypal.com/blog/golf-trip-group-size',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many people is the ideal group size for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '8 players (two foursomes) is the sweet spot for most golf trips. You get variety in playing partners, enough mass to negotiate group rates on accommodation, and two foursomes means consecutive tee times — the whole group plays at the same time. Groups of 4 are logistically simplest but offer less social variety. Groups of 12+ introduce tee time coordination problems and decision paralysis.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the maximum group size for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most courses allow a maximum of 4 players per tee time, meaning groups larger than 4 need consecutive or near-consecutive tee times. A group of 8 needs two consecutive tee times (8 minutes apart). A group of 12 needs three. Many courses have a soft limit of 20 players for group bookings — beyond that you usually need to call the pro shop and negotiate a shotgun start or private booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you split up a group of 8 for golf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best approach for a group of 8 is to rotate playing partners each day so everyone plays with everyone by the end of the trip. On Day 1, pair the best players together; on Day 2, split skill levels across foursomes; on Day 3, let a Ryder Cup or scramble format decide the pairings. Rotating keeps things fresh and prevents the same players from being stuck together.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best golf destinations for large groups (10–16 players)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Myrtle Beach is the best large-group golf destination in the US — 90+ courses within 30 miles, most offering group rates for 12+ players, and a wide range of accommodation from condos to large rental homes. Scottsdale works well for groups up to 12. Pinehurst can accommodate larger groups through its multiple resort courses. For truly large groups (20+), a shotgun-start private booking at a resort course is the most reliable approach.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you manage different handicaps in a golf group?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most effective formats for mixed handicap groups are: Stableford scoring (rewards good holes rather than punishing bad ones — high handicappers stay engaged), shamble (everyone tees off, best drive selected, then individual play), or scramble (great for large groups, social, no one has a bad hole). Avoid stroke play formats for mixed groups — they punish high handicappers and slow the pace significantly.',
      },
    },
  ],
}

export default function GolfTripGroupSizePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <nav className="mb-8 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground">Golf Trip Group Size</span>
        </nav>

        <p className="eyebrow">Planning Guide</p>

        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Golf Trip Group Size:<br />4 vs 8 vs 12 Players
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>8 min read</span>
          <span>·</span>
          <span>Planning</span>
        </div>

        <BlogByline lastUpdated={LAST_UPDATED} />

        <div className="prose-article">

          <p className="text-lg text-muted-foreground leading-8 mt-0">
            Group size is the planning decision that affects everything else — tee time logistics, accommodation type, cost per person, social dynamics, and whether the trip is actually fun. Most groups default to "how many people wanted to come" without thinking through how that number changes the experience. This guide covers the honest trade-offs at each size, with a verdict on what works best.
          </p>

          {/* The short answer */}
          <div className="rounded-xl border border-gold/20 bg-gold/5 p-6 my-8">
            <h2 className="text-xl font-semibold text-foreground mt-0 mb-3">The Short Answer</h2>
            <p className="text-muted-foreground mt-0">
              <strong className="text-foreground">8 is the sweet spot.</strong> Two foursomes. Consecutive tee times. Enough people for variety, not so many that logistics become a second job. You rotate playing partners, have two different dinners to compare, and the group cost-sharing works on accommodation. If you're planning a trip for 4–12 people, optimise toward 8.
            </p>
          </div>

          {/* 4 players */}
          <h2>Group of 4: One Foursome</h2>

          <p>
            The simplest possible golf trip. One tee time, one table at dinner, one car, one accommodation block to book. No scheduling conflicts, no laggards who miss the bus, no arguments about splitting into groups.
          </p>

          <h3>What works well</h3>
          <ul>
            <li><strong>Tee time flexibility</strong> — you can book any course at any time without needing to coordinate consecutive slots. Last-minute changes are easy.</li>
            <li><strong>Decision speed</strong> — four people can agree on a restaurant in under 2 minutes. Eight people take 20 minutes. Twelve people never agree.</li>
            <li><strong>Course access</strong> — premium courses like Pebble Beach or the Ocean Course at Kiawah are much easier to book for 4 than 8 or 12. One tee time slot, no juggling.</li>
            <li><strong>Round pace</strong> — one foursome finishes faster than two. If you want to play 36 holes in a day, 4 is your best chance of making it happen.</li>
          </ul>

          <h3>What doesn't work well</h3>
          <ul>
            <li><strong>Accommodation costs</strong> — most rental properties are priced for more people. A 4-bedroom house for 4 golfers splits to a high per-person number; a 2-bedroom condo feels cramped after 3 days.</li>
            <li><strong>Social dynamics</strong> — you play with the same 3 people every round for 3 days. If someone has a bad round or is off their game, there's nowhere to escape. Group tension has no release valve.</li>
            <li><strong>No variety</strong> — the format is the same every day. There's no "Ryder Cup" or "best ball between foursomes" because there's only one foursome.</li>
          </ul>

          <p className="text-sm text-muted-foreground border-l-2 border-gold/40 pl-4">
            <strong className="text-foreground">Best for:</strong> Close friends who play together regularly, annual trips where the crew is fixed, premium destination trips where tee time access is the constraint (Pebble Beach, Augusta National area, elite courses with limited availability).
          </p>

          {/* 8 players */}
          <h2>Group of 8: Two Foursomes — The Sweet Spot</h2>

          <p>
            Eight players is the number that most consistently produces a great trip. The logistics work, the social dynamics work, and the cost-sharing works. Here's why.
          </p>

          <h3>Tee time mechanics</h3>
          <p>
            Two consecutive tee times, 8 minutes apart. The whole group is on the course at the same time. You finish at roughly the same time, meet at the 19th hole, and compare rounds. The two foursomes are close enough to follow each other's progress, far enough apart that they're playing independently.
          </p>
          <p>
            On most courses, booking two consecutive tee times is straightforward — book one slot, then immediately book the next available slot 8 minutes later. On high-demand courses, call the pro shop and ask for consecutive times explicitly; they'll usually accommodate groups of 8 with advance notice.
          </p>

          <h3>Playing partner rotation</h3>
          <p>
            The real advantage of 8 is rotation. On a 3-round trip:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 text-foreground font-semibold">Round</th>
                  <th className="text-left py-3 px-4 text-foreground font-semibold">Foursome 1</th>
                  <th className="text-left py-3 pl-4 text-foreground font-semibold">Foursome 2</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">Round 1</td>
                  <td className="py-3 px-4">A, B, C, D</td>
                  <td className="py-3 pl-4">E, F, G, H</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">Round 2</td>
                  <td className="py-3 px-4">A, C, E, G</td>
                  <td className="py-3 pl-4">B, D, F, H</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">Round 3</td>
                  <td className="py-3 px-4">A, D, F, G (Ryder Cup captains)</td>
                  <td className="py-3 pl-4">B, C, E, H</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            By the end, everyone has played with everyone. The group Ryder Cup — foursomes vs foursomes — becomes the narrative of the trip. Someone wins it, and it gets talked about for years.
          </p>

          <h3>Accommodation and cost-sharing</h3>
          <p>
            8 people unlocks the best accommodation options. A large rental home (4 bedrooms, sleeping 8–10) in most golf destinations costs $400–800/night — split 8 ways, that's $50–100 per person per night. That's less than a standard hotel room, with the benefit of a shared house, a kitchen to reduce food costs, and a gathering space that's yours for the trip.
          </p>
          <p>
            Compare to a group of 4 paying $60–80/person in a standard hotel with no gathering space, or a group of 12 paying $80–100/person in a large rental because the house needs more bedrooms.
          </p>

          <p className="text-sm text-muted-foreground border-l-2 border-gold/40 pl-4">
            <strong className="text-foreground">Best for:</strong> Most trips. Especially bachelor trips, annual golf weekends, multi-couple trips. The logistics work, the social dynamics work, and the cost math works. If you're planning a trip and the current headcount is 6, extend invitations until you hit 8.
          </p>

          {/* 12 players */}
          <h2>Group of 12: Three Foursomes — Where It Gets Hard</h2>

          <p>
            12 is where golf trips start to develop problems. Not unsolvable problems — groups of 12 have genuinely great trips — but the organiser's work triples and the logistics require more planning.
          </p>

          <h3>The tee time problem</h3>
          <p>
            Three consecutive tee times, 8 minutes apart. The third group tees off 16 minutes after the first. On busy courses, a 16-minute gap can mean the third group is playing into the second group's backswing by hole 4. Some courses will push back on three consecutive times during peak hours — you may get 8-minute and 12-minute gaps, which means the group is effectively split across most of the round.
          </p>
          <p>
            The solution for 12: request a shotgun start (all groups start on different holes simultaneously) or book a private group round. Courses will often arrange this for groups of 12+, but it requires calling the pro shop directly — it won't happen through standard online booking.
          </p>

          <h3>Decision paralysis</h3>
          <p>
            12 people cannot agree on a restaurant, a tee time, or which course to play next. This isn't a social failure — it's arithmetic. With 12 opinions, the probability that everyone is happy with any given decision approaches zero. The organiser must be comfortable making unilateral decisions and communicating them as decisions, not suggestions open for debate.
          </p>
          <p>
            The pre-trip WhatsApp group for a 12-person trip is a disaster zone. Get everyone's logistical info (flights, dietary restrictions, budget confirmation) in the group, then move the actual planning out of the group and into a one-page itinerary the organiser controls.
          </p>

          <h3>The accommodation upside</h3>
          <p>
            12 people can rent a genuinely impressive property. A 6-bedroom luxury villa or a large beach house in Myrtle Beach or Scottsdale splits to competitive per-person rates and creates a shared home-base experience that hotel rooms can't match. The accommodation often becomes the social hub — poker in the kitchen, morning coffee on the deck, post-round beers at the pool.
          </p>

          <p className="text-sm text-muted-foreground border-l-2 border-gold/40 pl-4">
            <strong className="text-foreground">Best for:</strong> <Link href="/destinations/myrtle-beach" className="text-gold hover:underline">Myrtle Beach</Link> (cheapest for large groups — 90+ courses, condos built for this), <Link href="/destinations/scottsdale" className="text-gold hover:underline">Scottsdale</Link> (resort infrastructure handles large groups well), Pinehurst (multiple resort courses, groups coordinator on staff). Avoid premium bucket-list courses for groups of 12 — tee time access becomes very difficult.
          </p>

          {/* Comparison table */}
          <h2>Side-by-Side Comparison</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 text-foreground font-semibold">Factor</th>
                  <th className="text-center py-3 px-4 text-foreground font-semibold">4 Players</th>
                  <th className="text-center py-3 px-4 text-foreground font-semibold">8 Players</th>
                  <th className="text-center py-3 pl-4 text-foreground font-semibold">12 Players</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground text-center">
                <tr>
                  <td className="py-3 pr-6 text-left text-foreground">Tee time logistics</td>
                  <td className="py-3 px-4 text-fairway-text">Easy</td>
                  <td className="py-3 px-4 text-fairway-text">Good</td>
                  <td className="py-3 pl-4 text-partner-text">Hard</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-left text-foreground">Premium course access</td>
                  <td className="py-3 px-4 text-fairway-text">Best</td>
                  <td className="py-3 px-4 text-fairway-text">Good</td>
                  <td className="py-3 pl-4 text-partner-text">Limited</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-left text-foreground">Accommodation value</td>
                  <td className="py-3 px-4 text-partner-text">Weak</td>
                  <td className="py-3 px-4 text-fairway-text">Best</td>
                  <td className="py-3 px-4 text-fairway-text">Good</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-left text-foreground">Social variety</td>
                  <td className="py-3 px-4 text-partner-text">Low</td>
                  <td className="py-3 px-4 text-fairway-text">Best</td>
                  <td className="py-3 px-4 text-fairway-text">High</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-left text-foreground">Decision speed</td>
                  <td className="py-3 px-4 text-fairway-text">Fast</td>
                  <td className="py-3 px-4 text-fairway-text">Workable</td>
                  <td className="py-3 pl-4 text-partner-text">Slow</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-left text-foreground">Organiser work</td>
                  <td className="py-3 px-4 text-fairway-text">Minimal</td>
                  <td className="py-3 px-4 text-fairway-text">Moderate</td>
                  <td className="py-3 pl-4 text-partner-text">High</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-left text-foreground">Ryder Cup format</td>
                  <td className="py-3 px-4 text-partner-text">Not possible</td>
                  <td className="py-3 px-4 text-fairway-text">Perfect</td>
                  <td className="py-3 px-4 text-fairway-text">Works</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Formats for each size */}
          <h2>Best Formats by Group Size</h2>

          <p>
            The format you choose changes how much fun the trip is for players at different skill levels. Here's what works:
          </p>

          <div className="space-y-6 my-8">
            <div className="rounded-xl border border-border bg-card/60 p-6">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-3">For 4 Players</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div><span className="font-medium text-foreground">Match play</span> — 2v2, best ball or fourball. Simple to score, competitive every hole, dramatic.</div>
                <div><span className="font-medium text-foreground">Skins</span> — individual skins or team skins. Keeps everyone interested until the last hole.</div>
                <div><span className="font-medium text-foreground">Wolf</span> — rotating partners every hole. Strategic, adds variety to a single foursome.</div>
                <div><span className="font-medium text-foreground">Vegas</span> — team format using both players' scores as a two-digit number. Large differentials, high stakes.</div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-3">For 8 Players</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div><span className="font-medium text-foreground">Ryder Cup</span> — foursomes format Day 1 (two-man team, alternating shots), fourball Day 2 (both play, best score counts), singles Day 3. The single best format for an 8-man trip.</div>
                <div><span className="font-medium text-foreground">Stableford</span> — individual, points-based scoring. High handicappers stay engaged; a triple bogey costs only 0 points instead of ruining a net score.</div>
                <div><span className="font-medium text-foreground">Scramble + stroke</span> — casual scramble round (social) + one competitive stroke play round. Good balance for mixed-ability groups.</div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-3">For 12 Players</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div><span className="font-medium text-foreground">Scramble</span> — the only format that genuinely works for 12 mixed handicaps. Team of 4, best drive, everyone plays from that spot. Social, fast, inclusive.</div>
                <div><span className="font-medium text-foreground">Team Stableford</span> — 3 teams of 4, Stableford scoring. Points accumulate across rounds. Gives 3 days of tournament narrative.</div>
                <div><span className="font-medium text-foreground">Bingo Bango Bongo</span> — three points per hole: first on green, closest to pin, first in hole. Works for any handicap at any skill level. No stroke play needed.</div>
              </div>
            </div>
          </div>

          {/* Partners complication */}
          <h2>When Partners Are Joining</h2>

          <p>
            Partners add a different dimension to the group size question. The key rule: the partner group should be large enough to sustain its own social dynamic, not small enough that they're waiting around alone.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 text-foreground font-semibold">Setup</th>
                  <th className="text-left py-3 pl-4 text-foreground font-semibold">How it plays</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="py-3 pr-6">8 golfers, 0 partners</td>
                  <td className="py-3 pl-4">Classic golf trip. Simplest to plan. Two foursomes, every day is golf.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6">8 golfers, 2 partners</td>
                  <td className="py-3 pl-4">The hardest setup. Two partners alone all day while 8 golfers are on the course. Partners need a full independent day programme — spa, city day trip, activities. Don't assume they'll entertain each other.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6">8 golfers, 4+ partners</td>
                  <td className="py-3 pl-4">Works well. Partners form their own group, make their own plans. The two groups reconvene for dinner. Partners are usually happier with this dynamic than the golfers are — less structure, more flexibility.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6">4 golfers, 4 partners</td>
                  <td className="py-3 pl-4">The couples golf trip. Social and logistics work cleanly. One tee time, one partner group, one dinner table. More of a holiday than a golf trip — usually the right frame for this setup.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            If partners are joining, the destination matters more than for a golfer-only trip. <Link href="/destinations/scottsdale" className="text-gold hover:underline">Scottsdale</Link> is the best choice for mixed groups — the spa scene, hiking, and Old Town are genuinely excellent for non-golfers. <Link href="/destinations/ireland" className="text-gold hover:underline">Ireland</Link> and <Link href="/destinations/scotland" className="text-gold hover:underline">Scotland</Link> work brilliantly for mixed groups because the destination itself is the attraction; partners explore while golfers play.
          </p>

          {/* The organiser's problem */}
          <h2>The Organiser's Problem Scales With Group Size</h2>

          <p>
            Here's the honest reality: every person you add to the trip roughly doubles the organiser's coordination work. With 4 people, Dave sends one WhatsApp message and everyone confirms. With 8 people, someone is always late responding, one person has a conflict, and the accommodation decision takes three rounds of revision. With 12, it's a part-time job.
          </p>

          <p>
            The organiser's tools are: a single document (not a WhatsApp thread) that states what's decided, a deadline for decisions (not a suggestion), and the willingness to make the call when consensus fails. Groups that run by committee are the ones with miserable trips and bitter organisers.
          </p>

          <p>
            The practical reason FairwayPal exists is to get the organiser out of the loop as the coordination bottleneck. One link, everyone votes, Dave resolves conflicts. It doesn't eliminate the problem, but it means Dave isn't fielding 47 individual messages asking "so what's the plan?"
          </p>

          {/* FAQ */}
          <h2>Frequently Asked Questions</h2>

          <div className="space-y-6 my-8">
            <div>
              <h3 className="text-base font-semibold text-foreground mt-0">How many people is the ideal group size for a golf trip?</h3>
              <p className="text-sm text-muted-foreground mt-1">8 players (two foursomes) is the sweet spot. You get variety in playing partners, enough mass to negotiate group rates on accommodation, and two foursomes means consecutive tee times — the whole group plays at the same time.</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mt-0">What is the maximum group size for a golf trip?</h3>
              <p className="text-sm text-muted-foreground mt-1">Most courses allow a maximum of 4 players per tee time. A group of 12 needs three consecutive times. Beyond 16–20, you typically need to call the pro shop and negotiate a shotgun start or private booking.</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mt-0">How do you split a group of 8 for golf?</h3>
              <p className="text-sm text-muted-foreground mt-1">Rotate playing partners each day so everyone plays with everyone. Day 1: skill-based split. Day 2: mixed skill levels. Day 3: Ryder Cup captains pick teams. By the end, everyone has played with everyone at least once.</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mt-0">What are the best destinations for large groups?</h3>
              <p className="text-sm text-muted-foreground mt-1">
                <Link href="/destinations/myrtle-beach" className="text-gold hover:underline">Myrtle Beach</Link> is the best for 12+ — 90+ courses, condos built for groups, lowest per-round costs. <Link href="/destinations/scottsdale" className="text-gold hover:underline">Scottsdale</Link> handles groups up to 12 well. Avoid premium bucket-list courses (Pebble Beach, Kiawah Ocean Course) for groups larger than 8 — tee time access becomes very difficult.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mt-0">How do you manage different handicaps in a group?</h3>
              <p className="text-sm text-muted-foreground mt-1">Stableford scoring rewards good holes rather than punishing bad ones — high handicappers stay engaged. Scramble and shamble formats work for large mixed-ability groups. Avoid stroke play formats for mixed groups — they punish high handicappers and slow the pace.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center my-12">
            <h2 className="text-3xl font-display font-light italic text-foreground mt-0 sm:text-4xl">
              Know your headcount. Now build the trip.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              5 questions. FairwayPal generates a full itinerary for golfers and any partners joining. One shareable link — everyone votes, Dave locks it in.
            </p>
            <div className="mt-6 flex justify-center">
              <Link className="primary-link" href="/plan">
                Plan Your Trip
              </Link>
            </div>
          </div>

          {/* Related guides */}
          <h2>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {[
              { href: '/blog/golf-trip-weekend-schedule', label: 'Golf Weekend Schedule Template' },
              { href: '/blog/golf-trip-budget', label: 'Golf Trip Budget Breakdown' },
              { href: '/blog/best-bachelor-party-golf-destinations', label: 'Best Bachelor Party Golf Destinations' },
              { href: '/blog/how-to-plan-a-golf-trip', label: 'How to Plan a Golf Trip (Step by Step)' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-border bg-card/60 p-4 text-sm text-muted-foreground hover:border-gold/30 hover:text-foreground transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}
