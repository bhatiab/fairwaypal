/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const GYG_PARTNER = process.env.NEXT_PUBLIC_GYG_PARTNER_ID || '9GLTCAY'
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'fairwaypal-20'
const LAST_UPDATED = 'May 5, 2026'

export const metadata: Metadata = {
  title: 'Kiawah Island Golf Trip Planning Guide — FairwayPal',
  description:
    'How to plan a Kiawah Island golf trip: the Ocean Course and 4 resort alternatives, real costs ($300–600/round), the Charleston day trip partner plan, and a full 4-day itinerary.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/kiawah-island-golf-trip' },
  openGraph: {
    title: 'Kiawah Island Golf Trip Planning Guide',
    description:
      'The Ocean Course, 4 resort alternatives, real costs, and the Charleston partner plan. Everything you need to plan Kiawah.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kiawah Island Golf Trip Planning Guide',
  description:
    'How to plan a Kiawah Island golf trip: the Ocean Course, 4 resort alternatives, real costs, and the Charleston partner plan.',
  url: 'https://www.fairwaypal.com/blog/kiawah-island-golf-trip',
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
      name: 'Kiawah Island Golf Trip',
      item: 'https://www.fairwaypal.com/blog/kiawah-island-golf-trip',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a round at Kiawah Island cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Ocean Course runs $400–600 per person depending on season and whether you\'re a resort guest. The four other Kiawah Island Golf Resort courses — Cougar Point, Oak Point, Osprey Point, Turtle Point — run $150–280 per person. A typical 4-day trip with 3 rounds (one Ocean, two others) costs $1,200–1,800 in green fees per golfer. Budget an additional $500–800 per night for resort accommodation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have to stay at the resort to play Kiawah?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, but resort guests get priority tee time access and often better rates. Non-resort guests can book the Ocean Course and other resort courses, but availability is limited — especially on weekends and in peak season (March–May, September–October). Book 60–90 days out if you\'re not staying on-property.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Kiawah Island for golf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'March through May (spring) and September through November (fall) are ideal — mild temperatures (65–80°F), low humidity, and firm fairways. Summer (June–August) is hot and humid; green fees are lower but afternoon thunderstorms are common. Winter (December–February) is mild by northern standards but can be windy on the Ocean Course.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Kiawah Island from Charleston?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kiawah Island is about 25 miles from downtown Charleston — roughly 35–45 minutes by car depending on traffic. Charleston makes an excellent partner day trip: a full day in the city covers the historic district, Rainbow Row, Fort Sumter, and the French Quarter restaurant scene. Most groups do one full Charleston day and one beach/spa day on the island.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do non-golfers do at Kiawah Island?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The island has 10 miles of Atlantic beach, a world-class spa (The Sanctuary), kayaking and paddleboarding in the tidal creeks, bike paths through maritime forest, and excellent birding. The Charleston day trip (25 miles away) covers historic architecture, harbour tours, and one of the US\'s best restaurant scenes. Partners are rarely bored — the harder problem is getting golfers to leave the course.',
      },
    },
  ],
}

export default function KiawahIslandGolfTripPage() {
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
          <span className="text-foreground">Kiawah Island Golf Trip</span>
        </nav>

        <p className="eyebrow">Destination Guide</p>

        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Kiawah Island Golf Trip:<br />The Complete Planning Guide
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>10 min read</span>
          <span>·</span>
          <span>Destinations</span>
        </div>

        <BlogByline lastUpdated={LAST_UPDATED} />

        <div className="prose-article">

          <p className="text-lg text-muted-foreground leading-8 mt-0">
            Kiawah Island is the best golf resort on the East Coast that most groups either haven't considered or assume is out of reach. It shouldn't be either. The Ocean Course is a genuine bucket-list experience — one of the most difficult and spectacular links-style layouts in North America. And unlike Pebble Beach, you can pair it with four other top-quality resort courses without leaving the island. Your partners have Charleston 25 miles away. This guide covers everything you need to plan it properly.
          </p>

          {/* The courses */}
          <h2>The Five Kiawah Island Courses</h2>

          <p>
            The Kiawah Island Golf Resort operates five courses. Most groups play three rounds over 4 days — one at the Ocean Course and two at the secondary layouts. That's the right call. The other four courses are genuinely excellent, not just consolation prizes.
          </p>

          <div className="space-y-6 my-8">
            <div className="rounded-xl border border-border bg-card/60 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mt-0">The Ocean Course</h3>
                  <p className="text-sm text-muted-foreground mt-1">Pete Dye · 1991 · Links style · Ocean-facing all 18 holes</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-lg font-semibold text-gold">$400–600</p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Host of the 1991 Ryder Cup, 2012 PGA Championship, 2021 PGA Championship, and 2031 Ryder Cup. Eighteen holes along the Atlantic — every hole has an ocean view. Wind is the primary difficulty; the course plays completely differently depending on direction and speed. Book this one first — it sets the tone for the whole trip.
              </p>
              <p className="text-xs text-muted-foreground mt-2 font-medium">Best for: The group's marquee round. Plan 5+ hours — this course takes time.</p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mt-0">Osprey Point</h3>
                  <p className="text-sm text-muted-foreground mt-1">Tom Fazio · 1988 · Wooded/marsh · Protected from ocean wind</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-lg font-semibold text-gold">$175–250</p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                The most scenic of the four secondary courses. Fazio routed it through live oaks and tidal marshes with water features on 14 holes. Challenging but not punishing — the best option for mixed-handicap groups. Play this the morning after the Ocean Course to give everyone a confidence boost.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mt-0">Cougar Point</h3>
                  <p className="text-sm text-muted-foreground mt-1">Gary Player · 1974, renovated 2013 · Marshside · Accessible</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-lg font-semibold text-gold">$150–220</p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                The most accessible course on the island — shorter (6,861 yards from the tips), wide fairways, forgiving rough. Renovated in 2013 by Gary Player. A good opener for groups that include higher handicaps, or a casual round on the last morning when flights have to be caught.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mt-0">Turtle Point</h3>
                  <p className="text-sm text-muted-foreground mt-1">Jack Nicklaus · 1981 · Marsh/ocean mix · Three oceanside holes</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-lg font-semibold text-gold">$160–240</p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Three consecutive oceanside holes (15, 16, 17) make this worth playing for the views alone. Nicklaus routed the rest inland through marshes and trees. The finish — 18 wraps around a lake in front of a large gallery area — is one of the most theatrical in the Carolinas.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mt-0">Oak Point</h3>
                  <p className="text-sm text-muted-foreground mt-1">Clyde Johnston · 1927, renovated 2012 · Colleton River area</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-lg font-semibold text-gold">$90–150</p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Located just off the island on the Colleton River — not technically on Kiawah but part of the resort's Kiawah property. The most affordable of the five. A good option if budget is a concern or if the group wants a relaxed practice round. Fewer groups book this one, so tee times are easier to secure.
              </p>
            </div>
          </div>

          {/* Booking */}
          <h2>How to Book Tee Times</h2>

          <p>
            Unlike Pebble Beach, Kiawah courses are available through the resort's own booking system. Resort guests get priority access; non-guests can still book but availability is tighter on the Ocean Course specifically.
          </p>

          <div className="rounded-xl border border-gold/20 bg-gold/5 p-6 my-8">
            <h3 className="text-base font-semibold text-gold mt-0 mb-4">Booking Timeline</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="text-gold font-bold shrink-0 w-28">90+ days out</span>
                <span>Book accommodation at The Sanctuary, Villas, or The Cottages. Ocean Course tee times open for resort guests 90 days in advance — set a calendar reminder and book the moment the window opens.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold font-bold shrink-0 w-28">60–89 days out</span>
                <span>Book secondary courses — Osprey Point, Cougar Point, Turtle Point. Non-resort guests can book Ocean Course at this window (limited slots available).</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold font-bold shrink-0 w-28">30–59 days out</span>
                <span>Cancellations open up — check daily. May find Ocean Course spots especially on weekday afternoons. Oak Point availability is usually good at this stage.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold font-bold shrink-0 w-28">Last minute</span>
                <span>Call the pro shop directly (843-266-4670). They sometimes have member cancellations not visible online, particularly for the secondary courses.</span>
              </div>
            </div>
          </div>

          <p>
            One practical note: the Ocean Course requires a forecaddie or caddie — no walking the course alone, and push carts are not permitted. Budget $50–75 per bag for a forecaddie, or $100–150 per bag for a full caddie (plus tip). Many groups find the forecaddie invaluable given how different the course plays based on wind direction — local knowledge is genuinely useful here.
          </p>

          {/* Cost breakdown */}
          <h2>Real Cost Breakdown</h2>

          <p>
            Kiawah is a premium destination — here's what a 4-day trip realistically costs for a group of 8 golfers with 2–4 partners along.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 text-foreground font-semibold">Expense</th>
                  <th className="text-right py-3 px-4 text-foreground font-semibold">Budget</th>
                  <th className="text-right py-3 pl-4 text-foreground font-semibold">Mid-range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-6 text-muted-foreground">Ocean Course (1 round)</td>
                  <td className="py-3 px-4 text-right text-muted-foreground">$400</td>
                  <td className="py-3 pl-4 text-right text-muted-foreground">$550</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-muted-foreground">Secondary course × 2 rounds</td>
                  <td className="py-3 px-4 text-right text-muted-foreground">$320</td>
                  <td className="py-3 pl-4 text-right text-muted-foreground">$450</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-muted-foreground">Caddies/forecaddies (3 rounds)</td>
                  <td className="py-3 px-4 text-right text-muted-foreground">$200</td>
                  <td className="py-3 pl-4 text-right text-muted-foreground">$400</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-muted-foreground">Resort accommodation (3 nights, shared)</td>
                  <td className="py-3 px-4 text-right text-muted-foreground">$600</td>
                  <td className="py-3 pl-4 text-right text-muted-foreground">$900</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-muted-foreground">Flights to Charleston (CHS)</td>
                  <td className="py-3 px-4 text-right text-muted-foreground">$200</td>
                  <td className="py-3 pl-4 text-right text-muted-foreground">$350</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-muted-foreground">Car rental / rideshare</td>
                  <td className="py-3 px-4 text-right text-muted-foreground">$80</td>
                  <td className="py-3 pl-4 text-right text-muted-foreground">$120</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-muted-foreground">Food, beer, 19th hole</td>
                  <td className="py-3 px-4 text-right text-muted-foreground">$250</td>
                  <td className="py-3 pl-4 text-right text-muted-foreground">$400</td>
                </tr>
                <tr className="border-t-2 border-border">
                  <td className="py-4 pr-6 font-semibold text-foreground">Total per golfer</td>
                  <td className="py-4 px-4 text-right font-semibold text-gold">~$2,050</td>
                  <td className="py-4 pl-4 text-right font-semibold text-gold">~$3,170</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted-foreground">
            Partners who join for the Charleston day and resort activities add roughly $300–600 each depending on spa usage and Charleston dining. The Sanctuary spa is genuinely world-class and partners will use it — budget accordingly.
          </p>

          {/* 4-day itinerary */}
          <h2>The 4-Day Kiawah Itinerary</h2>

          <p>
            This template works for a group of 6–10 with golfers and partners. Adjust the course order based on your tee time availability.
          </p>

          <div className="space-y-6 my-8">
            {/* Day 1 */}
            <div className="rounded-xl border border-border bg-card/60 p-6">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-4">Day 1 — Thursday: Arrival + Osprey Point</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-fairway-text mb-2">Golfers</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="text-foreground font-medium">Noon:</span> Fly into Charleston (CHS). 45-min drive to the island.</p>
                    <p><span className="text-foreground font-medium">2:30 PM:</span> Check in, drop bags, grab lunch at The Sanctuary Lobby Bar.</p>
                    <p><span className="text-foreground font-medium">3:30 PM:</span> Osprey Point tee time. 4.5 hours. Good warm-up — Tom Fazio layout, protected from ocean wind, highly walkable.</p>
                    <p><span className="text-foreground font-medium">8 PM:</span> Dinner at The Ocean Room or Atlantic Room (book ahead).</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-partner-text mb-2">Partners</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="text-foreground font-medium">Noon–3 PM:</span> Arrive, check in, explore the resort grounds.</p>
                    <p><span className="text-foreground font-medium">3 PM:</span> Beach time — 10 miles of relatively uncrowded Atlantic beach. Best access from Beachwalker Park (west end) or through the resort.</p>
                    <p><span className="text-foreground font-medium">5 PM:</span> Spa at The Sanctuary. Book treatments in advance — the 90-min sea salt massage books out 2 weeks ahead in peak season.</p>
                    <p><span className="text-foreground font-medium">8 PM:</span> Dinner together.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="rounded-xl border border-border bg-card/60 p-6">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-4">Day 2 — Friday: The Ocean Course</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-fairway-text mb-2">Golfers</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="text-foreground font-medium">7 AM:</span> Breakfast at The Ryder Cup Bar & Grill.</p>
                    <p><span className="text-foreground font-medium">8 AM:</span> Ocean Course tee time. With caddies. This round takes 5–5.5 hours — the wind adds difficulty and the views make everyone slow down.</p>
                    <p><span className="text-foreground font-medium">2 PM:</span> Post-round drinks at the Ocean Course Clubhouse. The 19th hole overlooks the 18th green with Atlantic views.</p>
                    <p><span className="text-foreground font-medium">7 PM:</span> Grill dinner at Night Heron Park or Low Country feast at Cherrywood BBQ.</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-partner-text mb-2">Partners</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="text-foreground font-medium">8 AM:</span> Kayaking or paddleboarding in the tidal creeks.{' '}
                      <a href={`https://www.getyourguide.com/kiawah-island-l107748/?partner_id=${GYG_PARTNER}`} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">GetYourGuide listings</a>
                    </p>
                    <p><span className="text-foreground font-medium">10:30 AM:</span> Bike the island. 30+ miles of paths through maritime forest, dunes, and marshes. Rentals available at the resort.</p>
                    <p><span className="text-foreground font-medium">1 PM:</span> Lunch at Freshfields Village (10 min from the resort entrance).</p>
                    <p><span className="text-foreground font-medium">3 PM:</span> Beach, pool, or another spa session.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="rounded-xl border border-border bg-card/60 p-6">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-4">Day 3 — Saturday: Charleston Day</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-fairway-text mb-2">Golfers</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="text-foreground font-medium">9 AM:</span> Drive to Charleston (25 miles, 40 min). Park at the Visitor Center.</p>
                    <p><span className="text-foreground font-medium">10 AM:</span> Walking tour of the historic district — Rainbow Row, The Battery, White Point Garden.</p>
                    <p><span className="text-foreground font-medium">12:30 PM:</span> Lunch at Husk, Leon's, or The Ordinary (book ahead — these fill up on Saturdays).</p>
                    <p><span className="text-foreground font-medium">2 PM:</span> Beer tasting at Edmund's Oast or Holy City Brewing.</p>
                    <p><span className="text-foreground font-medium">5 PM:</span> Drive back. Group dinner at The Atlantic Room.</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-partner-text mb-2">Partners</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="text-foreground font-medium">9 AM:</span> Drive to Charleston together (no split today — this is the group day).</p>
                    <p><span className="text-foreground font-medium">10:30 AM:</span>{' '}
                      <a href={`https://www.getyourguide.com/charleston-l100034/?partner_id=${GYG_PARTNER}`} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Charleston harbor tour</a>{' '}
                      or Fort Sumter ferry — 1.5 hours, affordable, iconic.
                    </p>
                    <p><span className="text-foreground font-medium">12:30 PM:</span> Lunch at Zero George Street or The Obstinate Daughter (quieter than downtown spots).</p>
                    <p><span className="text-foreground font-medium">2 PM:</span> Antique shopping on King Street or the City Market.</p>
                    <p><span className="text-foreground font-medium">4:30 PM:</span> Cocktails at The Rooftop at Vendue before the drive back.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 4 */}
            <div className="rounded-xl border border-border bg-card/60 p-6">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-4">Day 4 — Sunday: Turtle Point + Departure</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-fairway-text mb-2">Golfers</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="text-foreground font-medium">7:30 AM:</span> Breakfast. Checkout.</p>
                    <p><span className="text-foreground font-medium">8:30 AM:</span> Turtle Point tee time. 4.5 hours. Three oceanside holes (15–17) are the highlight. More relaxed pace than the Ocean Course — play it as a farewell round.</p>
                    <p><span className="text-foreground font-medium">2 PM:</span> Drive to CHS for afternoon flights.</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-partner-text mb-2">Partners</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="text-foreground font-medium">7:30 AM:</span> Breakfast. Checkout.</p>
                    <p><span className="text-foreground font-medium">9 AM:</span> Final beach walk or morning yoga on the beach (resort programme).</p>
                    <p><span className="text-foreground font-medium">10:30 AM:</span> Freshfields Village for last-minute shopping or coffee.</p>
                    <p><span className="text-foreground font-medium">2 PM:</span> Drive to CHS with the golfers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partner activities */}
          <h2>Partner Activities: The Full Picture</h2>

          <p>
            Kiawah is unusually strong for non-golfing partners. Most golf resorts have a spa as an afterthought. The Sanctuary's spa is a legitimate reason to come here on its own. Add the Charleston day trip and 10 miles of beach, and partners often have a better time than the golfers.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-8">
            <div className="rounded-xl border border-border bg-card/60 p-5">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-2">The Sanctuary Spa</h3>
              <p className="text-sm text-muted-foreground">10,000 sq ft, 15 treatment rooms. Signature sea salt treatments and ocean-inspired wraps. Book the 90-minute massage or the half-day spa package. Fills up 2–3 weeks in advance during peak season.</p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-5">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-2">Charleston Day Trip</h3>
              <p className="text-sm text-muted-foreground">25 miles, 40 minutes. One of the best mid-size cities in the US for architecture, food, and history. The historic district, Rainbow Row, Fort Sumter ferry, and King Street are the core.{' '}
                <a href={`https://www.getyourguide.com/charleston-l100034/?partner_id=${GYG_PARTNER}`} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Browse Charleston tours →</a>
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-5">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-2">Kayaking &amp; Water Sports</h3>
              <p className="text-sm text-muted-foreground">The tidal creeks behind the island are calm, clear, and full of wildlife — dolphins are common. Kayak and paddleboard rentals available through the resort activity centre.{' '}
                <a href={`https://www.getyourguide.com/kiawah-island-l107748/?partner_id=${GYG_PARTNER}`} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Water sports tours →</a>
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-5">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-2">Beach &amp; Birding</h3>
              <p className="text-sm text-muted-foreground">10 miles of Atlantic beach, mostly quiet even in season. The island is a major birding site — over 140 species recorded. Bike paths through maritime forest make it easy to explore without a car.</p>
            </div>
          </div>

          {/* What to pack */}
          <h2>What to Pack for Kiawah</h2>

          <p>
            The island weather varies significantly by season and the Ocean Course wind can be brutal on cooler days. The essentials:
          </p>

          <ul>
            <li><strong>Windproof layer</strong> — non-negotiable for the Ocean Course. A packable windbreaker that fits in a golf bag pocket is ideal.</li>
            <li><strong>Sun protection</strong> — the Ocean Course has almost no tree cover. SPF 50 minimum, a hat with full coverage, UV-blocking gloves if you're prone to burning.</li>
            <li><strong>Waterproof golf shoes</strong> — even in dry weather, morning dew on the links-style fairways will soak through non-waterproof shoes by the 4th hole.</li>
            <li><strong>Rangefinder</strong> — the Ocean Course's wind makes distance judgment particularly useful. Distance markers on the course are accurate but knowing exact yardages to carry a bunker or avoid a hazard matters more here than most tracks.{' '}
              <a href={`https://www.amazon.com/s?k=golf+rangefinder&tag=${AMAZON_TAG}`} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Rangefinders on Amazon →</a>
            </li>
            <li><strong>Smart casual clothing for dinner</strong> — The Atlantic Room and The Ocean Room have a "resort casual" dress code. No golf shoes or athletic shorts at dinner.</li>
          </ul>

          {/* Where to stay */}
          <h2>Where to Stay</h2>

          <div className="space-y-4 my-8">
            <div className="rounded-xl border border-border bg-card/60 p-5">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-base font-semibold text-foreground mt-0">The Sanctuary at Kiawah Island</h3>
                  <p className="text-xs text-muted-foreground mt-1">Resort hotel · On-property · Priority tee times</p>
                </div>
                <p className="text-sm font-semibold text-gold shrink-0">$800–1,400/night</p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">The flagship resort hotel. Ocean views, direct beach access, the spa, five restaurants on-property. Staying here gives you the best tee time access on the Ocean Course. Groups typically book 2–3 rooms and share costs. Rates vary dramatically by season.</p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-5">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-base font-semibold text-foreground mt-0">Kiawah Island Villas</h3>
                  <p className="text-xs text-muted-foreground mt-1">Self-catering villas · On-property · Great for groups</p>
                </div>
                <p className="text-sm font-semibold text-gold shrink-0">$400–700/night</p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Private villas within the resort community. Better value for larger groups — a 4-bedroom villa at $600/night splits to $150/person for 4 couples. Full kitchens reduce food costs. Still gives you resort guest priority on tee times.</p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-5">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-base font-semibold text-foreground mt-0">Off-Island (Seabrook or North Charleston)</h3>
                  <p className="text-xs text-muted-foreground mt-1">30–45 min from courses · Non-resort guest status</p>
                </div>
                <p className="text-sm font-semibold text-gold shrink-0">$120–250/night</p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Significant cost savings but you lose resort-guest priority for Ocean Course tee times. Fine if you book 60+ days out and plan primarily around the secondary courses. The Ocean Course is worth fighting for, so this trade-off needs consideration.</p>
            </div>
          </div>

          {/* FAQ */}
          <h2>Frequently Asked Questions</h2>

          <div className="space-y-6 my-8">
            <div>
              <h3 className="text-base font-semibold text-foreground mt-0">How much does a round at Kiawah Island cost?</h3>
              <p className="text-sm text-muted-foreground mt-1">The Ocean Course runs $400–600 per person depending on season and whether you're a resort guest. Secondary courses run $150–280. A typical 3-round trip (one Ocean, two secondary) costs $1,200–1,800 per golfer in green fees.</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mt-0">Do you have to stay at the resort to play?</h3>
              <p className="text-sm text-muted-foreground mt-1">No, but resort guests get priority tee time access. Non-guests can book Ocean Course tee times but availability is limited — especially on weekends. Book 60–90 days out if not staying on-property.</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mt-0">What is the best time of year to visit?</h3>
              <p className="text-sm text-muted-foreground mt-1">March–May and September–November. Spring and fall offer mild temperatures (65–80°F), low humidity, and firm fairways. Summer is hot and humid; winter is mild but windy on the Ocean Course.</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mt-0">How far is Kiawah from Charleston?</h3>
              <p className="text-sm text-muted-foreground mt-1">About 25 miles — 35–45 minutes by car. Charleston makes an excellent partner day trip or a group day between rounds.</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mt-0">What do non-golfers do at Kiawah?</h3>
              <p className="text-sm text-muted-foreground mt-1">The island has 10 miles of Atlantic beach, The Sanctuary spa, kayaking, paddleboarding, and biking. The Charleston day trip (25 miles) covers historic architecture, harbour tours, and one of the US's best restaurant scenes.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center my-12">
            <h2 className="text-3xl font-display font-light italic text-foreground mt-0 sm:text-4xl">
              Ready to plan your Kiawah trip?
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Answer 5 questions. FairwayPal generates a full golf + partner itinerary — courses, activities, a schedule both sides will agree to. One shareable link.
            </p>
            <div className="mt-6 flex justify-center">
              <Link className="primary-link" href="/plan">
                Plan Your Kiawah Trip
              </Link>
            </div>
          </div>

          {/* Related guides */}
          <h2>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {[
              { href: '/blog/best-bachelor-party-golf-destinations', label: 'Best Bachelor Party Golf Destinations' },
              { href: '/blog/golf-trip-budget', label: 'Golf Trip Budget Breakdown' },
              { href: '/blog/golf-trip-with-non-golfers', label: 'Planning a Golf Trip With Non-Golfers' },
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

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Planning a different trip?{' '}
              <Link href="/destinations/scottsdale" className="text-gold hover:underline">Scottsdale</Link>,{' '}
              <Link href="/destinations/myrtle-beach" className="text-gold hover:underline">Myrtle Beach</Link>,{' '}
              <Link href="/destinations/bandon-dunes" className="text-gold hover:underline">Bandon Dunes</Link>, or{' '}
              <Link href="/destinations/pinehurst" className="text-gold hover:underline">Pinehurst</Link> are all solid alternatives at different price points.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}
