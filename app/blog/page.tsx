import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'

export const metadata: Metadata = {
  title: 'Golf Trip Planning Blog — FairwayPal',
  description:
    'Golf trip guides, destination breakdowns, packing lists, and budget breakdowns. Everything you need to plan a trip the group actually agrees on.',
  alternates: { canonical: 'https://fairwaypal.com/blog' },
  openGraph: {
    title: 'Golf Trip Planning Blog — FairwayPal',
    description: 'Golf trip guides, destination breakdowns, packing lists, and budget breakdowns.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://fairwaypal.com/blog' },
  ],
}

const POSTS = [
  {
    slug: 'golf-trip-flights-bag-fees',
    title: 'Golf Trip Flights: Bag Fees and What Saves Real Money (2026 Guide)',
    description:
      'Honest 2026 guide to airline bag fees. United pre-approval gotcha, when status saves money, the credit card cheat code, and what saves $200+ per player.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Budget',
  },
  {
    slug: 'first-ever-golf-trip',
    title: 'Your First-Ever Golf Trip: An Honest Guide for the Group',
    description:
      'What to expect, what to skip, picking the right destination, and the small mistakes nobody warns first-timers about.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Planning',
  },
  {
    slug: 'couples-golf-trip-both-play',
    title: 'Planning a Couples Golf Trip Where Both Play',
    description:
      'How to plan a golf trip when you and your partner both play. Destination archetypes, the handicap question, the romance versus competition balance.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Planning',
  },
  {
    slug: 'why-most-bachelor-golf-trips-suck',
    title: 'Why Most Bachelor Golf Trips Suck (And How to Fix Yours)',
    description:
      'The five honest reasons most bachelor party golf trips end up underwhelming, and the fixes that turn a forgettable weekend into a trip the groom remembers.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Planning',
  },
  {
    slug: 'hidden-costs-golf-trip',
    title: 'The Hidden Costs of a Golf Trip Nobody Warns You About',
    description:
      'Resort fees, oversize bag charges, caddie tips, halfway house, forecaddie fees, the upgrade trap. The $400-800 of unbudgeted cost that surprises every trip.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Budget',
  },
  {
    slug: 'bandon-vs-pebble-vs-kiawah-golf-trip',
    title: 'Bandon Dunes vs Pebble Beach vs Kiawah Island: The Premium Triple Compared',
    description:
      'Three of the most expensive golf trips in the United States, compared honestly. Pacific links versus iconic Pacific bucket-list versus East Coast Ocean Course.',
    readMinutes: 10,
    date: 'May 6, 2026',
    tag: 'Destinations',
  },
  {
    slug: 'algarve-vs-ireland-golf-trip',
    title: 'Algarve vs Ireland for a Golf Trip: Which Should You Pick?',
    description:
      'Sun and value versus craic and links. Two of the great affordable European golf trips compared honestly.',
    readMinutes: 10,
    date: 'May 6, 2026',
    tag: 'Destinations',
  },
  {
    slug: 'bandon-dunes-vs-scotland-golf-trip',
    title: 'Bandon Dunes vs Scotland for a Golf Trip: Which Should You Pick?',
    description:
      'The "should we go links?" question, settled. Oregon coast pilgrimage versus the home of the game.',
    readMinutes: 10,
    date: 'May 6, 2026',
    tag: 'Destinations',
  },
  {
    slug: 'best-golf-destinations-november',
    title: 'The Best Golf Destinations in November (2026 Honest Guide)',
    description:
      'Honest ranking of the best golf trip destinations for November. Scottsdale, Pinehurst, Algarve, Florida, Kiawah, plus where to skip.',
    readMinutes: 10,
    date: 'May 6, 2026',
    tag: 'Planning',
  },
  {
    slug: 'best-golf-destinations-march',
    title: 'The Best Golf Destinations in March (2026 Honest Guide)',
    description:
      'Honest ranking of the best golf trip destinations for March. Scottsdale at peak, Pinehurst spring, the Algarve, Florida, Kiawah.',
    readMinutes: 10,
    date: 'May 6, 2026',
    tag: 'Planning',
  },
  {
    slug: 'best-golf-destinations-october',
    title: 'The Best Golf Destinations in October (2026 Honest Guide)',
    description:
      'Honest ranking of the best golf trip destinations for October. Pinehurst, Pebble Beach, Algarve, Kiawah, Scottsdale, Bandon, plus the destinations to avoid.',
    readMinutes: 10,
    date: 'May 6, 2026',
    tag: 'Planning',
  },
  {
    slug: 'golf-trip-formats',
    title: 'Golf Trip Formats: Ryder Cup, Stableford, Skins, Nassau (And When to Use Each)',
    description:
      'The rules, strategy, and which format fits which group. Plus side bets and the handicap question.',
    readMinutes: 10,
    date: 'May 6, 2026',
    tag: 'Planning',
  },
  {
    slug: '40th-50th-birthday-golf-trip',
    title: 'The 40th and 50th Birthday Golf Trip: An Honest Planning Guide',
    description:
      'How to plan a milestone-birthday golf trip. Destination archetypes, group size, format options, and the touches that make it a celebration.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Planning',
  },
  {
    slug: 'father-son-golf-trip',
    title: 'Father-Son Golf Trip Planning: The Honest Guide',
    description:
      'Picking the right destination by skill and age, the four destination archetypes, the conversations worth having, and the dynamics nobody warns you about.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Planning',
  },
  {
    slug: 'scottsdale-vs-pinehurst-golf-trip',
    title: 'Scottsdale vs Pinehurst for a Golf Trip: Which Should You Pick?',
    description:
      'Sun and desert versus heritage and pine forest. Two of the great American golf trips compared honestly.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Destinations',
  },
  {
    slug: 'myrtle-beach-vs-kiawah-island-golf-trip',
    title: 'Myrtle Beach vs Kiawah Island for a Golf Trip: Which Should You Pick?',
    description:
      'Two South Carolina coast destinations, very different trips. Volume and value at Myrtle Beach versus the Ocean Course and Charleston.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Destinations',
  },
  {
    slug: 'myrtle-beach-vs-pinehurst-golf-trip',
    title: 'Myrtle Beach vs Pinehurst for a Golf Trip: Which Should You Pick?',
    description:
      'Carolina value versus Carolina prestige. Two of the great Southeast US golf trips compared honestly.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Destinations',
  },
  {
    slug: 'florida-for-non-golfers',
    title: 'Florida for Non-Golfers: A Partner\'s Guide',
    description:
      'Different golf bases give different partner experiences: Streamsong, TPC Sawgrass + St. Augustine, Innisbrook + Tampa, Orlando theme parks.',
    readMinutes: 10,
    date: 'May 6, 2026',
    tag: 'Partners',
  },
  {
    slug: 'ireland-for-non-golfers',
    title: 'Ireland for Non-Golfers: A Partner\'s Guide',
    description:
      'How an Ireland golf trip works for the partner. Cliffs of Moher, the Ring of Kerry, Killarney, Galway pubs, the Dingle Peninsula, Dublin, distilleries.',
    readMinutes: 11,
    date: 'May 6, 2026',
    tag: 'Partners',
  },
  {
    slug: 'myrtle-beach-for-non-golfers',
    title: 'Myrtle Beach for Non-Golfers: A Partner\'s Guide',
    description:
      'How a Myrtle Beach golf trip works for the partner who is not teeing off. 60 miles of beach, the Boardwalk, Brookgreen Gardens, the Marshwalk, Tanger Outlets.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Partners',
  },
  {
    slug: 'why-your-group-keeps-cancelling-golf-trip',
    title: 'Why Your Group Keeps Cancelling the Golf Trip (and How to Fix It)',
    description:
      'An honest look at why most group golf trips quietly fall apart in the planning stage. The five real reasons, and the simple fixes that actually work.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Planning',
  },
  {
    slug: 'shipping-clubs-vs-flying-with-clubs',
    title: 'Shipping Clubs vs Flying with Clubs: The Honest 2026 Numbers',
    description:
      'Real airline bag fees, Ship Sticks and Luggage Forward pricing, when each option wins, and the gotchas nobody warns you about.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Budget',
  },
  {
    slug: 'pinehurst-vs-bandon-dunes-golf-trip',
    title: 'Pinehurst vs Bandon Dunes for a Golf Trip: Which Should You Pick?',
    description:
      'East Coast tradition versus West Coast links. Two of the great American group-golf trips compared honestly, with a clear verdict by group type.',
    readMinutes: 10,
    date: 'May 6, 2026',
    tag: 'Destinations',
  },
  {
    slug: 'scottsdale-for-non-golfers',
    title: 'Scottsdale for Non-Golfers: A Partner\'s Guide',
    description:
      'How a Scottsdale golf trip works for the partner who is not teeing off. Old Town, world-class spas, hot air balloons, and Camelback hiking.',
    readMinutes: 11,
    date: 'May 6, 2026',
    tag: 'Partners',
  },
  {
    slug: 'kiawah-island-for-non-golfers',
    title: 'Kiawah Island for Non-Golfers: A Partner\'s Guide',
    description:
      'How a Kiawah Island golf trip works for the partner who is not teeing off. The Sanctuary spa, 10 miles of Atlantic beach, kayaking, biking, and a Charleston day trip.',
    readMinutes: 10,
    date: 'May 6, 2026',
    tag: 'Partners',
  },
  {
    slug: 'best-golf-trip-apps',
    title: 'The Best Golf Trip Apps and Tools (2026 Honest Guide)',
    description:
      'The 12 apps that actually make a golf trip easier. Planning, group chat, expense splitting, GPS, weather, booking, and shot tracking. What is free, what is worth paying for.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Planning',
  },
  {
    slug: 'golf-trip-tipping-guide',
    title: 'Tipping on a Golf Trip: The Complete Guide',
    description:
      'Caddies, bag drops, halfway-house, valet, and dinner servers. Country-by-country guidelines for the US, Scotland, Ireland, and Portugal. Real numbers, no awkwardness.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Budget',
  },
  {
    slug: 'pinehurst-vs-pebble-beach-golf-trip',
    title: 'Pinehurst vs Pebble Beach for a Golf Trip: Which Should You Pick?',
    description:
      'Two of the great American bucket-list golf trips. Heritage and walkability versus the iconic Pacific finishing hole. A friendly head-to-head with a clear verdict.',
    readMinutes: 10,
    date: 'May 6, 2026',
    tag: 'Destinations',
  },
  {
    slug: 'scotland-for-non-golfers',
    title: 'Scotland for Non-Golfers: A Partner\'s Guide',
    description:
      'How a Scotland golf trip works for the partner who is not teeing off. Edinburgh, Highlands, distilleries, the Fife Coastal Path, and a 5-day partner itinerary.',
    readMinutes: 11,
    date: 'May 6, 2026',
    tag: 'Partners',
  },
  {
    slug: 'pinehurst-for-non-golfers',
    title: 'Pinehurst for Non-Golfers: A Partner\'s Guide',
    description:
      'How a Pinehurst golf trip works for the partner who is not teeing off. The walkable village, the Tufts Archives, the spa, Seagrove pottery, and Southern Pines.',
    readMinutes: 10,
    date: 'May 6, 2026',
    tag: 'Partners',
  },
  {
    slug: 'algarve-for-non-golfers',
    title: 'The Algarve for Non-Golfers: A Partner\'s Guide',
    description:
      'How to make a Portugal golf trip a real holiday for the partner who is not teeing off. Beaches, sea caves, Lagos and Tavira, the Benagil cave kayak tour, and Alentejo wine country.',
    readMinutes: 11,
    date: 'May 6, 2026',
    tag: 'Partners',
  },
  {
    slug: 'pebble-beach-for-non-golfers',
    title: 'Pebble Beach for Non-Golfers: A Partner\'s Guide',
    description:
      'Why Pebble Beach is the friendliest bucket-list golf trip for partners. Carmel-by-the-Sea, the Aquarium, the 17-Mile Drive, Big Sur, wine country, and a daily rhythm that works.',
    readMinutes: 10,
    date: 'May 6, 2026',
    tag: 'Partners',
  },
  {
    slug: 'bandon-dunes-for-non-golfers',
    title: 'Bandon Dunes for Non-Golfers: A Partner\'s Guide',
    description:
      'How to enjoy a Bandon Dunes golf trip when you are not the one teeing off. Beaches, state parks, the spa, Old Town Bandon, and a daily rhythm that works.',
    readMinutes: 10,
    date: 'May 6, 2026',
    tag: 'Partners',
  },
  {
    slug: 'how-to-split-costs-golf-trip',
    title: 'How to Split Costs on a Golf Trip Without Resentment',
    description:
      'Money is the most common reason golf trips quietly blow up. The five practical methods for splitting costs, the apps worth using, and the one conversation that prevents most fights.',
    readMinutes: 9,
    date: 'May 6, 2026',
    tag: 'Budget',
  },
  {
    slug: 'algarve-vs-scotland-golf-trip',
    title: 'Algarve vs Scotland for a Golf Trip: Which Should You Pick?',
    description:
      'Europe\'s two big group-golf destinations, compared honestly. Sun and value in Portugal, or links and heritage in Scotland?',
    readMinutes: 11,
    date: 'May 6, 2026',
    tag: 'Destinations',
  },
  {
    slug: 'bandon-dunes-vs-pebble-beach-golf-trip',
    title: 'Bandon Dunes vs Pebble Beach for a Golf Trip: Which Should You Pick?',
    description:
      'Two of the great West Coast golf bucket-list trips, compared honestly. Courses, costs, weather, partner experience, and a verdict by group type.',
    readMinutes: 11,
    date: 'May 6, 2026',
    tag: 'Destinations',
  },
  {
    slug: 'pinehurst-vs-kiawah-island-golf-trip',
    title: 'Pinehurst vs Kiawah Island for a Golf Trip: Which Should You Pick?',
    description:
      'Two of the best golf resorts on the East Coast, compared honestly. Courses, costs, weather, partner experience, logistics, and a verdict by group type.',
    readMinutes: 10,
    date: 'May 6, 2026',
    tag: 'Destinations',
  },
  {
    slug: 'how-to-plan-a-golf-trip',
    title: 'How to Plan a Golf Trip: The Complete Step-by-Step Guide',
    description:
      'Destination, dates, group size, budget, tee times, accommodation — the right order to make decisions and the mistakes that cost groups money and sanity.',
    readMinutes: 10,
    date: 'May 5, 2026',
    tag: 'Planning',
  },
  {
    slug: 'golf-trip-weekend-schedule',
    title: 'The 3-Night Golf Weekend Schedule Template',
    description:
      'A concrete day-by-day schedule for a golf weekend — tee times, meals, partner activities, and the timing rules that make it run smoothly.',
    readMinutes: 9,
    date: 'May 5, 2026',
    tag: 'Planning',
  },
  {
    slug: 'golf-trip-group-size',
    title: 'Golf Trip Group Size: 4 vs 8 vs 12 Players — Which Works Best?',
    description:
      'Tee time mechanics, accommodation value, social dynamics, and formats at every group size. Verdict: 8 is the sweet spot.',
    readMinutes: 8,
    date: 'May 5, 2026',
    tag: 'Planning',
  },
  {
    slug: 'best-bachelor-party-golf-destinations',
    title: 'The 6 Best Bachelor Party Golf Destinations in the US (Ranked Honestly)',
    description:
      'Not a listicle. An actual ranking — with real prices, honest trade-offs, and a verdict on which destination is right for your group.',
    readMinutes: 9,
    date: 'May 5, 2026',
    tag: 'Destinations',
  },
  {
    slug: 'ireland-vs-scotland-golf-trip',
    title: 'Ireland vs Scotland Golf Trip: Which One Should You Choose?',
    description:
      'A head-to-head comparison across courses, costs, logistics, partner experience, and weather. Verdict by group type — who should pick which.',
    readMinutes: 10,
    date: 'May 5, 2026',
    tag: 'Destinations',
  },
  {
    slug: 'pebble-beach-golf-trip',
    title: 'Pebble Beach Golf Trip Planning Guide',
    description:
      "How to actually get tee times (it's not on GolfNow), what it really costs ($500–600/round), and the full Monterey Peninsula itinerary.",
    readMinutes: 10,
    date: 'May 5, 2026',
    tag: 'Destinations',
  },
  {
    slug: 'kiawah-island-golf-trip',
    title: 'Kiawah Island Golf Trip: The Complete Planning Guide',
    description:
      'The Ocean Course, 4 resort alternatives, real costs, and the Charleston partner plan. Everything you need for a Kiawah Island golf trip.',
    readMinutes: 10,
    date: 'May 5, 2026',
    tag: 'Destinations',
  },
  {
    slug: 'golf-trip-with-non-golfers',
    title: 'Golf Trip With Non-Golfers: How to Plan It Without Killing the Vibe',
    description:
      "One person wants tee times. The other wants a spa. Here's how to plan a golf trip that actually works for both — without hours of negotiation.",
    readMinutes: 7,
    date: 'May 5, 2026',
    tag: 'Partners',
  },
  {
    slug: 'what-to-do-on-golf-trip-non-golfer',
    title: "What to Do on a Golf Trip If You Don't Golf (Actually Good Options)",
    description:
      "You're on a golf trip and you don't golf. Here's what to actually do — by destination — so you're not watching Netflix in the hotel room.",
    readMinutes: 7,
    date: 'May 5, 2026',
    tag: 'Partners',
  },
  {
    slug: 'golf-trip-budget',
    title: 'How Much Does a Golf Trip Cost? A Brutally Honest Budget Breakdown',
    description:
      "Green fees, hotels, flights, food, beer. We break down the real cost of a golf trip — by destination — so there are no surprises on the credit card statement.",
    readMinutes: 8,
    date: 'May 5, 2026',
    tag: 'Budget',
  },
  {
    slug: 'golf-trip-packing-list',
    title: 'The Golf Trip Packing List: Everything You (and Your Partner) Actually Need',
    description:
      "Two packing lists in one — one for golfers, one for non-golfers. Cut the overpacking. Don't forget the one thing that ruins the whole trip.",
    readMinutes: 8,
    date: 'May 5, 2026',
    tag: 'Packing',
  },
  {
    slug: 'scottsdale-vs-myrtle-beach-golf-trip',
    title: 'Scottsdale vs Myrtle Beach for a Golf Trip: Which One Actually Wins?',
    description:
      'Two of the most popular US golf destinations. One budget. One decision. The honest comparison — courses, costs, weather, and a verdict.',
    readMinutes: 9,
    date: 'May 5, 2026',
    tag: 'Destinations',
  },
]

const TAG_COLORS: Record<string, string> = {
  Planning: 'border-gold/30 bg-gold/10 text-gold',
  Destinations: 'border-fairway/30 bg-fairway/10 text-fairway-text',
  Budget: 'border-partner/30 bg-partner/10 text-partner-text',
  Partners: 'border-partner/30 bg-partner/10 text-partner-text',
  Packing: 'border-gold/30 bg-gold/10 text-gold',
}

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-5xl font-display font-light italic leading-tight text-foreground sm:text-6xl">
          Golf trip planning,<br />without the planning.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          Guides, breakdowns, and honest advice for the person organising the trip. No affiliate-link padding. No obvious advice. Just the stuff that actually helps.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-gold/30"
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`rounded-sm border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${TAG_COLORS[post.tag] ?? 'border-border text-muted-foreground'}`}
                >
                  {post.tag}
                </span>
                <span className="text-xs text-muted-foreground">{post.readMinutes} min read</span>
              </div>
              <h2 className="mt-4 text-lg font-semibold leading-snug text-foreground group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                {post.description}
              </p>
              <p className="mt-4 text-xs text-muted-foreground">{post.date}</p>
            </Link>
          ))}
        </div>

        <section className="mt-20 rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
          <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
            Stop reading. Start planning.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            5 questions. Dual itinerary for golfers and partners. One shareable link.
          </p>
          <div className="mt-6 flex justify-center">
            <Link className="primary-link" href="/plan">
              Plan Your Trip
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
