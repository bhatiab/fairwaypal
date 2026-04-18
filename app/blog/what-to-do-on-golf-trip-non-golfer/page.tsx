/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

const GYG_PARTNER = process.env.NEXT_PUBLIC_GYG_PARTNER_ID || '9GLTCAY'

export const metadata: Metadata = {
  title: "What to Do on a Golf Trip If You Don't Golf (Actually Good Options) — FairwayPal",
  description:
    "You're on a golf trip and you don't golf. Here's what to actually do — by destination — so you're not watching Netflix in the hotel room.",
  alternates: { canonical: 'https://fairwaypal.com/blog/what-to-do-on-golf-trip-non-golfer' },
  openGraph: {
    title: "What to Do on a Golf Trip If You Don't Golf (Actually Good Options)",
    description:
      "Activity ideas for non-golfers on a golf trip — by destination, by time of day, and by interest.",
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "What to Do on a Golf Trip If You Don't Golf (Actually Good Options)",
  description:
    "You're on a golf trip and you don't golf. Here's what to actually do — by destination — so you're not watching Netflix in the hotel room.",
  url: 'https://fairwaypal.com/blog/what-to-do-on-golf-trip-non-golfer',
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
      name: "What to Do on a Golf Trip If You Don't Golf",
      item: 'https://fairwaypal.com/blog/what-to-do-on-golf-trip-non-golfer',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What do non-golfers do on a golf trip?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Golfers are typically off the course by 1pm. That leaves full afternoons and evenings for group activities. In the mornings, the best options by destination: Scottsdale — spa, hiking, Old Town; Myrtle Beach — beach, watersports; Ireland — coastal walks, towns, cafés; Scotland — castles, whisky distilleries, villages; Pinehurst — spa, village; Bandon Dunes — coastal walks (limited options). Book at least one activity in advance rather than figuring it out on the day.",
      },
    },
    {
      '@type': 'Question',
      name: "Is it worth going on a golf trip if you don't play?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — with the right destination and some advance planning. The best golf destinations also happen to be genuinely excellent travel destinations: Scottsdale has world-class spas and food, Ireland has extraordinary coastline and culture, Scotland has history and whisky. A non-golfer who approaches the trip as 'a few days in Scottsdale that include some group golf' usually has a better time than expected.",
      },
    },
    {
      '@type': 'Question',
      name: "Which golf destinations are best for non-golfers?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Scottsdale (Old Town, spas, hiking, wine trail), Ireland (Galway, Cliffs of Moher, coastal villages, pubs), and Scotland (Edinburgh, castles, whisky distilleries) are the strongest options. Myrtle Beach works well if beach access is the priority. Pinehurst is pleasant but quieter. Bandon Dunes is remote — good for outdoors people, difficult for everyone else.",
      },
    },
    {
      '@type': 'Question',
      name: "How do you keep a non-golfer entertained on a golf weekend?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plan the non-golf itinerary as thoroughly as the golf itinerary. Book at least one bookable experience in advance (spa, tour, cooking class, distillery). Make sure there's a plan for every golf morning — not 'figure it out.' Schedule a shared dinner Saturday night that the whole group does together. These three things cover most of the risk.",
      },
    },
    {
      '@type': 'Question',
      name: "Can non-golfers enjoy Scotland or Ireland golf trips?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Often more than the golfers. Ireland's west coast — Galway, the Cliffs of Moher, Dingle, Kinsale — is extraordinary even without golf. Scotland's castles, whisky trail, and the town of St Andrews itself are genuinely compelling. Partners on Scotland and Ireland trips frequently say they had a better trip than expected. The countries sell themselves.",
      },
    },
  ],
}

const DESTINATIONS = [
  {
    name: 'Scottsdale, AZ',
    href: '/destinations/scottsdale',
    gygHref: `https://www.getyourguide.com/scottsdale-l961/?partner_id=${GYG_PARTNER}`,
    morning: ['Spa at Joya, Well & Being, or the Omni Scottsdale', 'Camelback Mountain hike (Echo Canyon or Cholla Trail)', 'Old Town Scottsdale — galleries, boutiques, Sugar Bowl ice cream', 'Desert Botanical Garden (go early before the heat)'],
    afternoon: ['Hot air balloon ride over the Sonoran Desert', 'Scottsdale Wine Trail — 15+ tasting rooms in Old Town', 'Taliesin West (Frank Lloyd Wright, excellent tour)', 'Pool at the hotel — this is a legitimate afternoon plan'],
    evening: ['Old Town restaurant scene is genuinely excellent', 'The mission: book a reservation, not a walk-in', 'Postino or FnB for wine bars; Mastro\'s for a group splurge'],
  },
  {
    name: 'Myrtle Beach, SC',
    href: '/destinations/myrtle-beach',
    gygHref: `https://www.getyourguide.com/myrtle-beach-l818/?partner_id=${GYG_PARTNER}`,
    morning: ['Beach — a real Atlantic beach, available immediately', 'Kayaking or paddleboarding rental on the waterway', 'Brookgreen Gardens (sculpture garden, underrated)', 'Ripley\'s Aquarium if the group skews younger'],
    afternoon: ['Watersports — jet skiing, parasailing, banana boats', 'Broadway at the Beach — shopping, mini golf, arcade', 'Murrells Inlet boardwalk for lunch and the marsh view', 'Fishing charter — half-day trips run $60–90/person'],
    evening: ['The Claw House for a big group seafood dinner', 'Boardwalk bars and entertainment — high energy, zero pretension', 'Martini\'s at the waterpark hotel complex for groups'],
  },
  {
    name: 'Ireland',
    href: '/destinations/ireland',
    gygHref: `https://www.getyourguide.com/ireland-l54/?partner_id=${GYG_PARTNER}`,
    morning: ['Cliffs of Moher — one of the most dramatic coastlines in Europe', 'Galway city centre — walk, coffee, browse', 'Dingle Peninsula drive — 2–3 hours, astonishing scenery', 'Connemara National Park if you\'re in the west'],
    afternoon: ['Aran Islands ferry from Doolin (book ahead)', 'Whiskey tasting at a local distillery — Dingle, Teeling, Slane', 'Medieval castles — Bunratty, Dunluce, Rock of Cashel', 'Kayaking the Burren coast'],
    evening: ['Pub sessions in Galway — live music most evenings', 'Seafood in Dingle or Kinsale is genuinely exceptional', 'Guinness tastes better in Ireland — that\'s just true'],
  },
  {
    name: 'Scotland',
    href: '/destinations/scotland',
    gygHref: `https://www.getyourguide.com/scotland-l72/?partner_id=${GYG_PARTNER}`,
    morning: ['St Andrews town itself — cathedral ruins, castle, beach', 'Edinburgh Castle and the Royal Mile (if the group is based there)', 'The Scotch Whisky Experience or a distillery tour', 'East Neuk fishing villages — Crail, Anstruther, Pittenweem'],
    afternoon: ['Craigmillar Castle (less crowded than Edinburgh Castle)', 'Isle of May boat trip for puffins (seasonal)', 'Kellie Castle and gardens near St Andrews', 'Drive the Fife Coastal Path'],
    evening: ['The Criterion in St Andrews for a proper pub dinner', 'Whisky tasting at a local bar — most have excellent selections', 'The Scots take their food seriously — dinner reservations matter'],
  },
  {
    name: 'Pinehurst, NC',
    href: '/destinations/pinehurst',
    gygHref: `https://www.getyourguide.com/north-carolina-l5?partner_id=${GYG_PARTNER}`,
    morning: ['Spa at the Pinehurst Resort — strong option', 'The Pinehurst Village walk — genuinely pretty town', 'Uwharrie National Forest if outdoors is on the agenda', 'Carthage Antique District for a quieter morning'],
    afternoon: ['Lake Tillery — swimming, kayaking, watersports', 'Southern Pines town centre — low-key but pleasant', 'The Sandhills Community College Arboretum', 'Driving to Seagrove pottery studios (45 mins)'],
    evening: ['Dugan\'s Pub in the Village — the go-to group dinner spot', 'Pinehurst Brewing for casual evenings', 'Fair warning: this is a quieter destination — evenings wind down early'],
  },
  {
    name: 'Bandon Dunes, OR',
    href: '/destinations/bandon-dunes',
    gygHref: `https://www.getyourguide.com/oregon-l5?partner_id=${GYG_PARTNER}`,
    morning: ['Coastal hiking on the Bandon Beach trails', 'Face Rock State Scenic Viewpoint — dramatic sea stacks', 'Coos Bay for a town morning — coffee, local shops', 'Beach combing on Bandon\'s wild Pacific coastline'],
    afternoon: ['Oregon Coast kayaking — outfitters in Coos Bay', 'Old Town Bandon — small fishing village, good crab', 'Cape Arago State Park loop drive', 'Cranberry bogs tour (October harvest season)'],
    evening: ['Lord Bennett\'s at Bandon Dunes for a group dinner with ocean views', 'The resort dining is the main option — and it\'s good', 'Honest caveat: Bandon is remote. Evening options are limited. Non-golfers should be self-sufficient.'],
  },
]

export default function WhatToDoNonGolferPage() {
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
          What to Do on a Golf Trip If You Don&apos;t Golf (Actually Good Options)
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>April 17, 2025</span>
          <span>·</span>
          <span>7 min read</span>
        </div>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          You've been invited on a golf trip. You don't golf. The instinct is to feel like a tagalong. Here's how to reframe it: you have the morning to yourself while everyone else gets up at 6am to stand in a field, then you have the whole group again by lunch. That's actually a pretty good deal.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          Here's what to actually do — by destination, broken down by morning, afternoon, and evening.
        </p>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* The timing reality */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The timing reality
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Golf tee times are usually 7–8am. Rounds take 4–5 hours. Add post-round drinks and the drive back, and golfers return around 1–2pm. That's the morning block.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              What that means for you: unstructured morning time that's entirely yours, followed by the full group from early afternoon onward. Two golf days in a typical 3-night trip. One day where nobody's playing and everyone does something together.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { time: 'Morning (7–1pm)', desc: 'Golf days — your time. Book something or enjoy the freedom.', color: 'border-partner/20 bg-partner/5' },
                { time: 'Afternoon (1–6pm)', desc: 'Full group. Best time for shared activities.', color: 'border-fairway/20 bg-fairway/5' },
                { time: 'Evening (6pm+)', desc: 'Full group. Dinner, drinks, the shared memory of the trip.', color: 'border-gold/20 bg-gold/5' },
              ].map(({ time, desc, color }) => (
                <div key={time} className={`rounded-xl border p-5 ${color}`}>
                  <p className="text-sm font-semibold text-foreground">{time}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Morning options by type */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Morning options, by what you actually want
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Not everyone wants to hike. Not everyone wants a spa. Pick your type.
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  type: 'Decompression',
                  icon: '◈',
                  options: "Spa day — half-day package at a hotel spa. Available in Scottsdale, Pinehurst, and Ireland/Scotland resorts. Book ahead. Worth every penny of the $150–250 it costs.",
                },
                {
                  type: 'Outdoor',
                  icon: '◈',
                  options: "Hiking, coastal walks, kayaking. Camelback Mountain in Scottsdale. The Cliffs of Moher trail in Ireland. Bandon's beach trails. Face Rock in Oregon. These work best in the morning before afternoon heat (or Irish weather).",
                },
                {
                  type: 'Cultural',
                  icon: '◈',
                  options: "Scotland and Ireland sell themselves here. Castles, distilleries, fishing villages, cathedrals. Scottsdale's Old Town has art galleries and a walkable morning. Pinehurst Village is an hour of pleasant strolling.",
                },
                {
                  type: 'Nothing',
                  icon: '◈',
                  options: "Completely valid. Coffee, slow breakfast, pool, read something. Golf trips are long weekends. Doing less in the mornings is not a failure.",
                },
              ].map(({ type, options }) => (
                <div key={type} className="rounded-xl border border-border bg-card/60 p-5">
                  <p className="text-sm font-semibold text-partner-text uppercase tracking-[0.1em]">{type}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{options}</p>
                </div>
              ))}
            </div>
          </section>

          {/* By destination */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              By destination
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Specific options for each golf destination — morning, afternoon, and evening.
            </p>
            <div className="mt-8 space-y-10">
              {DESTINATIONS.map((dest) => (
                <div key={dest.name}>
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <Link href={dest.href} className="text-xl font-display font-light text-foreground hover:text-gold transition-colors">
                      {dest.name} →
                    </Link>
                    <a
                      href={dest.gygHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm border border-partner/30 bg-partner/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-partner-text hover:bg-partner/20 transition-colors"
                    >
                      Browse activities →
                    </a>
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {[
                      { label: 'Morning (solo)', items: dest.morning, color: 'border-partner/20' },
                      { label: 'Afternoon (group)', items: dest.afternoon, color: 'border-fairway/20' },
                      { label: 'Evening (group)', items: dest.evening, color: 'border-gold/20' },
                    ].map(({ label, items, color }) => (
                      <div key={label} className={`rounded-xl border ${color} bg-card/60 p-4`}>
                        <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">{label}</p>
                        <ul className="mt-3 space-y-2">
                          {items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              The partner itinerary gets built automatically.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              FairwayPal generates both sides of the trip in one go — golf schedule and partner activities, scheduled around each other. 5 questions.
            </p>
            <div className="mt-6 flex justify-center">
              <Link className="primary-link" href="/plan">
                Plan Your Trip
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Non-golfer FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="What do non-golfers do on a golf trip?"
                answer="Golfers are typically off the course by 1pm. That leaves full afternoons and evenings for group activities. Mornings: spa, hiking, cultural activities, or just a slow breakfast and coffee. The best destinations (Scottsdale, Ireland, Scotland) have enough to fill three days without ever needing the golfers."
              />
              <FaqItem
                question="Is it worth going on a golf trip if you don't play?"
                answer="Yes — with the right destination and some advance planning. Scottsdale, Ireland, and Scotland are genuinely excellent destinations independent of the golf. A non-golfer who approaches the trip as 'a few days in Scottsdale that include some group golf' usually has a better time than expected."
              />
              <FaqItem
                question="Which golf destinations are best for non-golfers?"
                answer="Scottsdale (Old Town, spas, hiking, wine trail), Ireland (Galway, Cliffs of Moher, coastal villages, pubs), and Scotland (castles, whisky, St Andrews town) are the strongest options. Myrtle Beach works well for beach access. Bandon Dunes is remote — good for outdoors people, difficult for everyone else."
              />
              <FaqItem
                question="How do you keep a non-golfer entertained on a golf weekend?"
                answer="Plan the non-golf itinerary as thoroughly as the golf one. Book at least one bookable experience in advance — spa, tour, activity. Ensure there's a morning plan for each golf day. Schedule a proper shared dinner every night. Those three things cover most of the risk."
              />
              <FaqItem
                question="Can non-golfers enjoy Scotland or Ireland golf trips?"
                answer="Often more than the golfers. Ireland's west coast is extraordinary. Scotland's castles, whisky trail, and coastal villages are genuinely compelling. Partners on these trips frequently say they had a better trip than expected."
              />
            </div>
          </section>

          {/* Related */}
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost
                href="/blog/golf-trip-with-non-golfers"
                title="Golf Trips With Non-Golfers"
                description="How the organiser plans a trip that works for the whole group."
              />
              <RelatedPost
                href="/blog/best-bachelor-party-golf-destinations"
                title="Best Bachelor Golf Destinations"
                description="Six destinations ranked — partner options included."
              />
              <RelatedPost
                href="/blog/golf-trip-packing-list"
                title="Golf Trip Packing List"
                description="A separate list for non-golfers — what to actually bring."
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
