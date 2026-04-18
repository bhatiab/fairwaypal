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
    slug: 'golf-trip-with-non-golfers',
    title: 'Golf Trip With Non-Golfers: How to Plan It Without Killing the Vibe',
    description:
      "One person wants tee times. The other wants a spa. Here's how to plan a golf trip that actually works for both — without hours of negotiation.",
    readMinutes: 7,
    date: 'April 17, 2025',
    tag: 'Planning',
  },
  {
    slug: 'best-bachelor-party-golf-destinations',
    title: 'The 6 Best Bachelor Party Golf Destinations in the US (Ranked Honestly)',
    description:
      'Not a listicle. An actual ranking — with real prices, honest trade-offs, and a verdict on which destination is right for your group.',
    readMinutes: 9,
    date: 'April 17, 2025',
    tag: 'Destinations',
  },
  {
    slug: 'golf-trip-budget',
    title: 'How Much Does a Golf Trip Cost? A Brutally Honest Budget Breakdown',
    description:
      "Green fees, hotels, flights, food, beer. We break down the real cost of a golf trip — by destination — so there are no surprises on the credit card statement.",
    readMinutes: 8,
    date: 'April 17, 2025',
    tag: 'Budget',
  },
  {
    slug: 'what-to-do-on-golf-trip-non-golfer',
    title: "What to Do on a Golf Trip If You Don't Golf (Actually Good Options)",
    description:
      "You're on a golf trip and you don't golf. Here's what to actually do — by destination — so you're not watching Netflix in the hotel room while everyone else is out.",
    readMinutes: 7,
    date: 'April 17, 2025',
    tag: 'Partners',
  },
  {
    slug: 'golf-trip-packing-list',
    title: 'The Golf Trip Packing List: Everything You (and Your Partner) Actually Need',
    description:
      "Two packing lists in one — one for golfers, one for non-golfers. Cut the overpacking. Don't forget the one thing that ruins the whole trip.",
    readMinutes: 8,
    date: 'April 17, 2025',
    tag: 'Packing',
  },
  {
    slug: 'scottsdale-vs-myrtle-beach-golf-trip',
    title: 'Scottsdale vs Myrtle Beach for a Golf Trip: Which One Actually Wins?',
    description:
      'Two of the most popular US golf destinations. One budget. One decision. The honest comparison — courses, costs, weather, and a verdict.',
    readMinutes: 9,
    date: 'April 17, 2025',
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
