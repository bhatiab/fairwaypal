/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Kiawah Island for Non-Golfers: A Partner\'s Guide | FairwayPal',
  description:
    'A friendly, honest guide to Kiawah Island for the partner who is not playing. The Sanctuary spa, 10 miles of Atlantic beach, kayaking the tidal creeks, biking the maritime forest, and a Charleston day trip 25 miles away.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/kiawah-island-for-non-golfers' },
  openGraph: {
    title: 'Kiawah Island for Non-Golfers: A Partner\'s Guide',
    description:
      'How a Kiawah Island golf trip works for the partner who is not teeing off. Beach, spa, biking, kayaking, and Charleston nearby.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kiawah Island for Non-Golfers: A Partner\'s Guide',
  description:
    'A practical guide to Kiawah Island for non-golfing partners. The Sanctuary spa, beaches, kayaking, biking, the Charleston day trip, plantations, and a sample 3-day itinerary.',
  url: 'https://www.fairwaypal.com/blog/kiawah-island-for-non-golfers',
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
      name: 'Kiawah Island for Non-Golfers',
      item: 'https://www.fairwaypal.com/blog/kiawah-island-for-non-golfers',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Kiawah Island a good destination for non-golfing partners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, very. Kiawah is one of the most partner-friendly bucket-list golf destinations in the United States. The island offers 10 miles of Atlantic beach, The Sanctuary spa (a 10,000 square foot world-class facility), 30+ miles of bike paths through maritime forest, kayaking through tidal creeks, and excellent birding. Charleston is 25 miles away (about 35 to 45 minutes) and is one of the best mid-sized cities in the United States for architecture, food, and history. Most partners do a full Charleston day plus beach and spa days on the island and leave already planning to come back.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is there to do at Kiawah Island for non-golfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The signature non-golf experiences are: a half-day at The Sanctuary spa (signature sea-salt and ocean-inspired treatments), beach days along the 10 miles of Atlantic coast (Beachwalker Park is the public access at the west end), kayaking the tidal creeks with Kiawah Island Resort or local outfitters, biking the maritime forest trails, birding at the resort or in the wider ACE Basin, and a Charleston day trip for the historic district, the harbour tour to Fort Sumter, and dinner in the French Quarter. Plantations like Boone Hall and Magnolia are 30 to 45 minutes away if you want a half-day excursion.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is The Sanctuary spa at Kiawah worth booking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, especially if your partner enjoys a proper resort spa experience. The Sanctuary spa is 10,000 square feet with 15 treatment rooms and a signature menu built around sea salt and ocean-inspired treatments. The half-day spa package is the best value for partners who want a longer experience. Booking is essential 2 to 3 weeks ahead in peak season (March to May, September to November) and at least a week ahead in summer. Resort guests have priority on prime time slots; outside guests can book but earlier in the season.",
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Charleston from Kiawah Island?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Downtown Charleston is about 25 miles from Kiawah Island, roughly 35 to 45 minutes by car depending on traffic. Charleston International Airport (CHS) sits a little closer at about 30 to 40 miles, and is most groups' arrival airport. The drive between Kiawah and Charleston is easy, with parking widely available in the historic district. Most partners do at least one full Charleston day; some groups choose to base in Charleston and commute to Kiawah for golf rather than the other way around.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long should non-golfing partners stay at Kiawah?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Three to five nights is the sweet spot. Three nights covers a beach day, the spa, and a Charleston day. Four to five nights folds in plantation tours, more beach time, kayaking or biking, and possibly a second Charleston day for restaurants and shopping. Anything more than five nights starts to feel slow unless your partner specifically wants beach-and-spa downtime, which Kiawah supports easily for a longer stay.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time of year for partners to visit Kiawah?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "March through May and September through November are ideal: temperatures of 65 to 80°F, low humidity, firm beaches, and uncrowded restaurants in Charleston. Spring brings blooming dogwoods and gardens at Magnolia Plantation. Fall is warm days and cool evenings. Summer is hot and humid (85 to 95°F) with afternoon thunderstorms common; doable for the beach but uncomfortable for long Charleston walks. Winter is mild (50 to 65°F) and quiet, suitable for partners who want a peaceful trip.",
      },
    },
  ],
}

export default function KiawahForNonGolfersPage() {
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
          Kiawah Island for Non-Golfers: A Partner's Guide
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Kiawah Island is, frankly, one of the easier yes votes you will ever ask a non-golfing partner for. It pairs 10 miles of Atlantic beach and a genuinely world-class spa with one of the best mid-sized cities in the United States 25 miles up the road. The combination of beach, spa, nature, and Charleston is unusually generous for a bucket-list golf destination, and it works for nearly every kind of partner. Here is the friendly guide to making the most of it.
        </p>

        {/* Quick verdict */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The honest take</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Kiawah works for almost any partner.</span> Beach holiday types get the beach. Spa-and-pool types get The Sanctuary. History and culture types get Charleston. Active outdoor types get kayaking and biking. The harder problem at Kiawah is usually getting partners to leave and head home; the easier problem is keeping them happy on the trip.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Why Kiawah works */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Why Kiawah works for almost any partner
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Kiawah Island is a 10,000 acre barrier island off the South Carolina Lowcountry, about 25 miles south of Charleston. The whole island is private, which keeps it quiet, and the eastern coast is a 10 mile uninterrupted stretch of Atlantic beach. The interior is maritime forest threaded with bike paths and tidal creeks; the ACE Basin (one of the largest undeveloped estuaries on the East Coast) sits just to the south.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              That setup gives partners three distinct kinds of holiday on one trip: the beach holiday on the island, the city holiday in Charleston, and the active outdoor holiday on the maritime forest trails. Most partners do a mix across a 3 to 5 night stay and leave wanting another night.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The honest caveat: Kiawah is a private resort island, which means the on-island variety is finite. There is no public street with shopping or restaurant choice. Charleston is the dining and culture anchor and you will want a car to get there. Plan accordingly: at least one full Charleston day, ideally two.
            </p>
          </section>

          {/* Sample itinerary */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              A sample 3-day partner itinerary
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The shape of a great Kiawah partner trip: alternate the calm beach-and-spa days with one or two Charleston days. The driving is easy, the contrast is the whole point.
            </p>
            <div className="mt-6 space-y-4">
              <DayCard
                day="Day 1: settle in and the beach"
                morning="Arrive at The Sanctuary or a Kiawah villa. Coffee on the deck. Walk to the beach."
                afternoon="Long beach walk along the 10 mile stretch. Lunch at the resort beach pavilion. Optional: rent a bike for the afternoon and ride the maritime forest paths."
                evening="Drinks at the Ocean Room or the Loggerhead bar. Group dinner at Jasmine Porch or Tomasso (resort restaurants)."
              />
              <DayCard
                day="Day 2: Charleston"
                morning="Drive 35 to 45 minutes into downtown Charleston. Park in a city centre garage. Walk the historic district (Rainbow Row, the Battery, White Point Garden)."
                afternoon="Lunch at a French Quarter restaurant (Husk, FIG, Magnolias, or 167 Raw if you want oysters). Charleston Harbor Tour boat or Fort Sumter tour. Walk King Street for shopping."
                evening="Dinner in Charleston (book ahead in spring and fall). Optional: stay over at the Belmond Charleston Place if your partner wants a city night, then drive back the next morning."
              />
              <DayCard
                day="Day 3: spa and slow"
                morning="Slow morning at the resort. Coffee and pool time."
                afternoon="Half-day spa package at The Sanctuary. Massage, facial, time in the relaxation lounge."
                evening="Sunset on the beach. Final group dinner at the Ocean Room (the resort's flagship)."
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Add a fourth day for kayaking the tidal creeks (book a guided tour with the resort) or a plantation visit (Magnolia, Boone Hall, or Middleton Place are all 30 to 45 minutes away). Add a fifth night if your group is staying longer; partners often want a second Charleston day for restaurants you missed.
            </p>
          </section>

          {/* Beach */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The beach: 10 miles of Atlantic
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Kiawah's beach is the heart of the partner experience for most groups. Ten miles of compact Atlantic sand, gentle slopes, and a near-total absence of crowds even in peak season because the resort access is private and the island is large.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Beach access from the resort</strong> is straight through The Sanctuary or any of the villa complexes. Boardwalks cross the dunes; the walk from room to sand is rarely more than 5 minutes.</li>
              <li><strong>Beachwalker Park</strong> at the west end of the island is the public access and is where you can park if you are staying off-island. Free parking, lifeguards in season, and a quieter stretch of beach than the central resort area.</li>
              <li><strong>Shelling</strong> is genuinely good, especially at low tide and after storms. Bring a small bag.</li>
              <li><strong>Swimming</strong> is generally calm and family-friendly. Watch the rip currents on bigger surf days; the resort posts daily conditions.</li>
              <li><strong>Cycling on the beach</strong> is allowed at low tide; the firm-packed sand is excellent for it. You can rent bikes at the resort or bring your own.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Bring sun protection: the SC sun is stronger than most US East Coast partners expect.
            </p>
          </section>

          {/* The Sanctuary spa */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The Sanctuary spa
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Sanctuary spa is one of the better resort spas in the United States, and for many partners it is the primary anchor of the trip. It is a 10,000 square foot facility with 15 treatment rooms, an indoor pool, a fitness centre, and dedicated relaxation lounges that overlook the ocean.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The signature menu is built around the ocean: sea-salt body scrubs, marine-inspired wraps, and a series of ocean-themed massage rituals. The 90 minute signature massage is the standard pick. The half-day spa package (typically 4 hours, including a massage, a facial, and time in the relaxation lounge with lunch) is the best value for partners who want a longer experience.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Booking:</strong> 2 to 3 weeks ahead in peak season (March to May, September to November). At least a week ahead in summer. Resort guests get priority on the most popular weekend slots; outside guests can book but should call as early as possible.
            </p>
          </section>

          {/* Maritime forest and water */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Biking, kayaking, and the maritime forest
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              For active partners, Kiawah's outdoor offering is genuinely good and easy to arrange.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Biking:</strong> over 30 miles of paved bike paths thread the maritime forest, the lagoons, and along the beach access. The resort rents bikes by the day or week (electric and standard). The flat terrain and shaded paths make it accessible for partners who do not bike often.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Kayaking:</strong> the tidal creeks behind the island are some of the best kayaking on the East Coast, with marsh grass, herons, dolphins, and the occasional alligator at a respectful distance. Kiawah Island Resort runs guided kayak tours, or local outfitters like Kayak Charleston can pick you up from the island. A 2 to 3 hour morning tour is the standard. The Salt Marsh Tour is the most popular.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Birding:</strong> over 250 bird species recorded on Kiawah and in the wider ACE Basin. The resort runs guided bird walks; bring binoculars.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Stand-up paddleboarding:</strong> available on the lagoons; calmer than the open ocean and a good gentle option.
            </p>
          </section>

          {/* Charleston */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Charleston: the city anchor
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Charleston is the strongest non-golf argument for a Kiawah trip and one of the best mid-sized cities in the country for partners. About 25 miles up the road, walkable historic district, exceptional food scene, and a full calendar of cultural events.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>The historic district:</strong> Rainbow Row (the famous coloured houses on East Bay Street), the Battery promenade, White Point Garden, the Pineapple Fountain. A self-guided morning walk covers most of it.</li>
              <li><strong>Charleston Harbor Tour:</strong> a 90 minute boat tour from the Maritime Center is the easy way to see Fort Sumter from the water (the Carolina Belle is the classic boat). Combined Fort Sumter tours that actually land on the fort take longer (about 3 hours) and are excellent for history-minded partners.</li>
              <li><strong>King Street shopping:</strong> the main retail street. Independent boutiques mixed with national brands, and the food scene continues here too.</li>
              <li><strong>Restaurants:</strong> Charleston is genuinely one of the best food cities in the South. Husk, FIG, Halls Chophouse, 167 Raw (oyster bar, no reservations), Magnolias, Slightly North of Broad. Reservations 2 to 4 weeks ahead at the famous spots, especially on weekends.</li>
              <li><strong>The City Market:</strong> historic outdoor and covered market on Market Street with crafts, sweetgrass baskets, and food. Touristy but charming.</li>
              <li><strong>Carriage tours:</strong> a one-hour guided horse-drawn tour of the historic district is a very Charleston thing to do and a good orientation for first-time visitors.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Most partners do at least one full Charleston day. Some prefer two, with one focused on history and architecture and the other on shopping and restaurants.
            </p>
          </section>

          {/* Plantations */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Plantation tours and the wider Lowcountry
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Several historic plantations sit between Kiawah and Charleston and make a half-day or full-day partner excursion. They handle the history of the antebellum South thoughtfully and most have excellent gardens.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Magnolia Plantation and Gardens:</strong> 30 minutes from Kiawah, frequently named one of America's most beautiful gardens. Famous for spring azalea blooms and the historic gardens. The Slavery to Freedom tour adds important context to the plantation history.</li>
              <li><strong>Boone Hall Plantation:</strong> 45 minutes northeast of Kiawah, the famous oak-lined avenue is one of the most photographed in the South. Combo tickets pair Boone Hall with Fort Sumter or Charleston harbour tours.</li>
              <li><strong>Middleton Place:</strong> 35 minutes from Kiawah, known for its historic gardens (the oldest landscaped gardens in America) and the Middleton House Museum. Quieter and more meditative than Boone Hall.</li>
              <li><strong>Drayton Hall:</strong> the most architecturally important plantation house in the area, kept unrestored to show the 18th century structure. About 35 minutes from Kiawah.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pair a morning plantation visit with a Charleston lunch and afternoon for an excellent full-day excursion.
            </p>
          </section>

          {/* Pace and packing */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Pace, weather, and what to pack
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Kiawah runs at a relaxed Lowcountry pace. Mornings are unhurried, the resort dining is leisurely, and Charleston restaurants linger in a way that some northern visitors find slow at first and quickly come to enjoy. Lean into it.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The weather is friendly across most of the year. Spring (March to May) and fall (September to November) are ideal: 65 to 80°F, low humidity, firm beaches. Summer is hot and humid (85 to 95°F) with afternoon thunderstorms common; manageable for the beach in the morning and the spa in the afternoon, less pleasant for long Charleston walks. Winter is mild (50 to 65°F) and quiet, with off-peak resort pricing.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pack: swimwear, beach clothes, comfortable walking shoes for Charleston (cobblestones are real), a light layer for evenings in shoulder season, sun protection, and a smart-casual dinner outfit for at least one Charleston night. Our <Link href="/blog/golf-trip-packing-list" className="text-gold hover:underline">golf trip packing list</Link> has a full partner section.
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
              Kiawah Island for non-golfers FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="Is Kiawah Island a good destination for non-golfing partners?"
                answer="Yes, very. Beach, spa, kayaking, biking, birding, and Charleston 25 miles away. One of the most partner-friendly bucket-list golf destinations in the US."
              />
              <FaqItem
                question="What is there to do at Kiawah for non-golfers?"
                answer="The Sanctuary spa, beach days along 10 miles of Atlantic coast, kayaking the tidal creeks, biking 30+ miles of maritime forest paths, birding, and a Charleston day trip for the historic district, harbour tours, and dinner."
              />
              <FaqItem
                question="Is The Sanctuary spa worth booking?"
                answer="Yes, especially for partners who like a proper resort spa. 10,000 sq ft, 15 treatment rooms, ocean-inspired menu. Book 2-3 weeks ahead in peak season."
              />
              <FaqItem
                question="How far is Charleston from Kiawah?"
                answer="About 25 miles to downtown, 35-45 minutes by car. Easy drive, parking widely available in the historic district."
              />
              <FaqItem
                question="How long should partners stay?"
                answer="Three to five nights is the sweet spot. Three covers a beach day, the spa, and one Charleston day. Four to five adds plantation tours, more beach time, and a possible second Charleston day."
              />
              <FaqItem
                question="When is the best time of year for partners?"
                answer="March-May and September-November (65-80°F, low humidity, firm beaches). Spring brings garden blooms, fall brings warm days and cool evenings."
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
                href="/destinations/kiawah-island"
                title="Kiawah Island Destination Guide"
                description="The full golf-side guide: courses, hotels, partner activities, and packing."
              />
              <RelatedPost
                href="/blog/kiawah-island-golf-trip"
                title="Kiawah Island Golf Trip Guide"
                description="The Ocean Course, four secondary courses, and a Charleston-paired plan."
              />
              <RelatedPost
                href="/blog/pinehurst-vs-kiawah-island-golf-trip"
                title="Pinehurst vs Kiawah Island"
                description="The two best East Coast golf resorts, compared honestly."
              />
              <RelatedPost
                href="/blog/algarve-for-non-golfers"
                title="The Algarve for Non-Golfers"
                description="The most partner-friendly international golf destination."
              />
              <RelatedPost
                href="/blog/pebble-beach-for-non-golfers"
                title="Pebble Beach for Non-Golfers"
                description="The friendliest US bucket-list resort for partners."
              />
              <RelatedPost
                href="/blog/golf-trip-with-non-golfers"
                title="Golf Trips With Non-Golfers"
                description="The general playbook for planning a trip that works for the whole group."
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
