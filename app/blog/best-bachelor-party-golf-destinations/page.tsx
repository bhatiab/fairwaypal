/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

export const metadata: Metadata = {
  title: 'The 6 Best Bachelor Party Golf Destinations in the US (Ranked Honestly) — FairwayPal',
  description:
    'Not a listicle. An actual ranking — with real prices, honest trade-offs, and a verdict on which destination is right for your group.',
  alternates: { canonical: 'https://fairwaypal.com/blog/best-bachelor-party-golf-destinations' },
  openGraph: {
    title: 'The 6 Best Bachelor Party Golf Destinations in the US (Ranked Honestly)',
    description:
      'Not a listicle. An actual ranking — with real prices, honest trade-offs, and a verdict on which destination is right for your group.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The 6 Best Bachelor Party Golf Destinations in the US (Ranked Honestly)',
  description:
    'Not a listicle. An actual ranking — with real prices, honest trade-offs, and a verdict on which destination is right for your group.',
  url: 'https://fairwaypal.com/blog/best-bachelor-party-golf-destinations',
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
      name: 'Best Bachelor Party Golf Destinations',
      item: 'https://fairwaypal.com/blog/best-bachelor-party-golf-destinations',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What's the best US destination for a bachelor golf trip?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Scottsdale is the default for a reason — 200+ courses, consistent weather, strong nightlife, and a resort scene that handles large groups well. But the best destination depends on your group: Bandon Dunes if serious golf is the whole point, Myrtle Beach if budget matters, Scotland or Ireland for a trip people will talk about for 20 years.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a bachelor golf weekend cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Budget $900–2,500 per person for a 3-night domestic US trip, depending on destination and spending style. Myrtle Beach is the cheapest at ~$900–1,500. Scottsdale runs $1,400–2,200. Bandon Dunes runs $1,500–2,500. International (Scotland, Ireland) adds flight costs but course fees are often lower — total typically $2,500–4,000 per person for a 5-night trip.",
      },
    },
    {
      '@type': 'Question',
      name: 'Should we go domestic or international for a golf bachelor party?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "International trips (Scotland, Ireland) are more logistically complex and expensive but deliver a completely different experience. If the groom has always wanted to play St Andrews or the Old Head of Kinsale, an international trip is the obvious choice for a bachelor. If budget is tight or not everyone can get time off for a 5–7 day trip, domestic is the practical call.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many rounds of golf should you plan for a bachelor golf weekend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "2–3 rounds for a 3-night trip is the standard. One round per golf morning. Three rounds is ambitious — it means golf on all three mornings with limited recovery time. Two rounds (Friday and Saturday AM) leaves Sunday flexible and gives the group more time for evenings. Some groups do 4 rounds in 3 nights with afternoon and twilight slots — possible but exhausting.",
      },
    },
    {
      '@type': 'Question',
      name: "What if some guys in the group don't golf?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Build the non-golf itinerary before you book. Most bachelor golf destinations have enough non-golf activity that a non-golfer can have a genuinely good trip — Scottsdale's Old Town and spa scene, Myrtle Beach's beach, Ireland's pubs and coastal villages. The mistake is assuming they'll figure it out. Book at least one activity for them in advance. FairwayPal generates both itineraries automatically.",
      },
    },
  ],
}

const DESTINATIONS = [
  {
    rank: 1,
    name: 'Scottsdale, AZ',
    href: '/destinations/scottsdale',
    tagline: 'The default. Still the best all-rounder.',
    bestFor: 'Most groups — especially first-time organisers',
    courses: 'TPC Scottsdale, Troon North, We-Ko-Pa',
    partnerOption: 'World-class spas, Old Town, wine trail, hiking',
    priceRange: '$1,400–2,200/person (3 nights)',
    verdict: "200+ courses, reliable weather, a resort infrastructure that handles large groups without drama. The 19th hole options are strong. The spa scene means partners aren't an afterthought. It's the default because it works.",
    caution: 'Book courses and restaurants well in advance during October–March peak season.',
  },
  {
    rank: 2,
    name: 'Ireland',
    href: '/destinations/ireland',
    tagline: 'For the trip people talk about for 20 years.',
    bestFor: 'Groups where the groom has bucket-list links courses',
    courses: 'Old Head of Kinsale, Lahinch, Ballybunion, Royal Portrush',
    partnerOption: 'Galway, Cliffs of Moher, coastal villages, pubs',
    priceRange: '$2,500–4,000/person (5–6 nights)',
    verdict: "The Old Head of Kinsale on a clear morning is one of the most dramatic golf experiences in the world. Pair it with Lahinch and Ballybunion and you have a golf trip that genuinely cannot be replicated anywhere else. Ireland as a country is spectacular — partners often come back happier than the golfers.",
    caution: 'Weather is variable. Pack waterproofs even in summer. Book accommodation in popular areas (Dingle, Lahinch) months in advance.',
  },
  {
    rank: 3,
    name: 'Scotland',
    href: '/destinations/scotland',
    tagline: 'The birthplace of golf. Still earns the reverence.',
    bestFor: 'Golf-first groups; bucket-list St Andrews rounds',
    courses: 'St Andrews Old Course, Carnoustie, Kingsbarns, Castle Stuart',
    partnerOption: 'Edinburgh, castles, whisky distilleries, coastal walks',
    priceRange: '$2,500–4,000/person (5–6 nights)',
    verdict: "Playing the Old Course at St Andrews is a rite of passage for any serious golfer. The St Andrews/Carnoustie/Kingsbarns loop is extraordinary. Scotland's culture — whisky, history, landscape — makes it a real trip, not just a golf junket. The cost is justified by the experience.",
    caution: 'St Andrews Old Course ballot is competitive. Apply months in advance or use a tour operator for guaranteed tee times.',
  },
  {
    rank: 4,
    name: 'Bandon Dunes, OR',
    href: '/destinations/bandon-dunes',
    tagline: 'For the group that takes golf seriously.',
    bestFor: 'Pure golf groups — no non-golfers, no nightlife needs',
    courses: 'Bandon Dunes, Pacific Dunes, Sheep Ranch, Old Macdonald',
    partnerOption: 'Coastal walks, Coos Bay — limited options',
    priceRange: '$1,500–2,500/person (3 nights)',
    verdict: "Bandon Dunes is a golf resort with five world-class courses on dramatic Pacific coastline. It exists for golf. The communal dining and no-distraction remote setting makes it ideal for a group that wants to play golf, eat together, and talk about golf. Nothing else competes — because nothing else is there.",
    caution: "Remote. 90 minutes from the nearest airport. Not suitable for mixed groups or anyone who needs entertainment beyond the golf itself.",
  },
  {
    rank: 5,
    name: 'Myrtle Beach, SC',
    href: '/destinations/myrtle-beach',
    tagline: 'Best value for money. Highest fun-per-dollar.',
    bestFor: 'Budget-conscious groups; high-volume golf',
    courses: 'Caledonia, TPC Myrtle Beach, Pawleys Plantation',
    partnerOption: 'Atlantic beach, watersports, Broadway at the Beach',
    priceRange: '$900–1,500/person (3 nights)',
    verdict: "100+ courses, cheap green fees, beach access, and a party atmosphere that doesn't require effort. Caledonia is legitimately world-class. Myrtle Beach is the right call when the budget is real and volume of golf matters more than prestige of course names.",
    caution: 'Course quality varies enormously. Research specific courses rather than booking whatever is available.',
  },
  {
    rank: 6,
    name: 'Pinehurst, NC',
    href: '/destinations/pinehurst',
    tagline: 'Classic American golf history.',
    bestFor: 'Golf history fans; quieter, more traditional vibe',
    courses: 'Pinehurst No. 2, No. 4, No. 8, The Cradle',
    partnerOption: 'Pinehurst Village, spa, Lake Tillery',
    priceRange: '$1,200–1,800/person (3 nights)',
    verdict: "Pinehurst No. 2 is one of the most important courses in American golf history. If the groom cares about that, it belongs in the conversation. The village is genuinely charming. But activity density is lower than Scottsdale or Myrtle Beach — best suited to groups that want quiet evenings rather than a party scene.",
    caution: 'Less suited to big groups looking for nightlife. The village closes early.',
  },
]

export default function BestBachelorGolfDestinationsPage() {
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
          The 6 Best Bachelor Party Golf Destinations (Ranked Honestly)
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>April 17, 2025</span>
          <span>·</span>
          <span>9 min read</span>
        </div>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          The groom wants golf. The group wants a weekend they'll still be talking about in 10 years. Here's where to go — ranked by what actually matters: course quality, experience, partner options, and honest pricing.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          Not sponsored by any of them. These are the rankings we'd give if we were planning our own trip.
        </p>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* How we ranked */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              How we ranked these
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Four criteria, weighted in this order: course quality (most important), overall experience for a bachelor group, non-golfer viability, and value for money. A destination that scores 9/10 on courses but 2/10 on everything else doesn't make the top three. These are trips for groups of people, not solo golf pilgrimages.
            </p>
          </section>

          {/* Destinations */}
          <section className="space-y-8">
            {DESTINATIONS.map((dest) => (
              <div key={dest.name} className="rounded-xl border border-border bg-card/60 overflow-hidden">
                <div className="flex items-center gap-4 border-b border-border bg-bg-3 px-6 py-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-sm font-bold text-gold">
                    {dest.rank}
                  </span>
                  <div>
                    <Link href={dest.href} className="text-lg font-semibold text-foreground hover:text-gold transition-colors">
                      {dest.name} →
                    </Link>
                    <p className="text-sm text-muted-foreground">{dest.tagline}</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm leading-7 text-muted-foreground">{dest.verdict}</p>
                  <div className="grid gap-3 sm:grid-cols-2 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Best for</p>
                      <p className="text-muted-foreground">{dest.bestFor}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-fairway-text mb-1">Courses</p>
                      <p className="text-muted-foreground">{dest.courses}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-partner-text mb-1">Partner options</p>
                      <p className="text-muted-foreground">{dest.partnerOption}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gold mb-1">Price range</p>
                      <p className="text-muted-foreground">{dest.priceRange}</p>
                    </div>
                  </div>
                  <div className="rounded-lg border border-border bg-bg-3 px-4 py-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Watch out: </span>
                    {dest.caution}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* How to decide */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              How to decide in three questions
            </h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  q: 'Does the groom have a bucket-list course?',
                  a: "If yes, the decision is mostly made. Old Head of Kinsale → Ireland. St Andrews → Scotland. TPC Scottsdale Stadium → Scottsdale. Pinehurst No. 2 → Pinehurst. Build the trip around the one course that matters most.",
                },
                {
                  q: 'What\'s the real budget?',
                  a: "Get an honest number before anyone has opinions about destinations. Then: under $1,000/person → Myrtle Beach. $1,200–2,000 → Scottsdale or Pinehurst. $2,000+ → Scotland, Ireland, or Bandon Dunes.",
                },
                {
                  q: 'Are there non-golfers coming?',
                  a: "If yes, rule out Bandon Dunes unless all non-golfers are experienced outdoors people. The remaining five all work — Scottsdale and Ireland have the strongest partner activity options.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="rounded-xl border border-border bg-card/60 p-5">
                  <p className="font-semibold text-foreground">{q}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Destination picked. Now plan it.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              5 questions. Golf and partner itinerary. One shareable link for the whole group.
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
              Bachelor golf trip FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="What's the best US destination for a bachelor golf trip?"
                answer="Scottsdale is the default for a reason — 200+ courses, consistent weather, strong nightlife, and a resort scene that handles large groups well. But the best destination depends on your group: Bandon Dunes for serious golf only, Myrtle Beach for budget, Scotland or Ireland for a trip people talk about for 20 years."
              />
              <FaqItem
                question="How much does a bachelor golf weekend cost?"
                answer="Budget $900–2,500 per person for a 3-night domestic US trip. Myrtle Beach is cheapest at ~$900–1,500. Scottsdale runs $1,400–2,200. Bandon Dunes runs $1,500–2,500. International (Scotland, Ireland) typically runs $2,500–4,000 per person for a 5-night trip including flights."
              />
              <FaqItem
                question="Should we go domestic or international for a golf bachelor party?"
                answer="International trips deliver a completely different experience but are more expensive and logistically complex. If the groom has always wanted to play St Andrews or the Old Head of Kinsale, go international. If budget is tight or scheduling 5–7 days is difficult, domestic is the practical call."
              />
              <FaqItem
                question="How many rounds of golf should you plan for a bachelor golf weekend?"
                answer="2–3 rounds for a 3-night trip is standard. Two rounds (Friday and Saturday AM) is most common — leaves Sunday flexible. Three rounds is ambitious but doable if the group is committed. Four rounds in 3 nights is exhausting."
              />
              <FaqItem
                question="What if some guys in the group don't golf?"
                answer="Build the non-golf itinerary before you book. Most bachelor golf destinations have solid non-golf options — Scottsdale's Old Town and spa scene, Myrtle Beach's beach, Ireland's pubs and coastal villages. Book at least one activity for non-golfers in advance. FairwayPal generates both itineraries automatically."
              />
            </div>
          </section>

          {/* Related */}
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost
                href="/blog/golf-trip-budget"
                title="Golf Trip Budget Breakdown"
                description="What a golf trip actually costs — by destination and group size."
              />
              <RelatedPost
                href="/blog/golf-trip-with-non-golfers"
                title="Golf Trips With Non-Golfers"
                description="How to plan a trip that works for the whole group."
              />
              <RelatedPost
                href="/blog/golf-trip-packing-list"
                title="Golf Trip Packing List"
                description="Everything golfers and non-golfers actually need to pack."
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
