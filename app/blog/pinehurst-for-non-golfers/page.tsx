/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Pinehurst for Non-Golfers: A Partner\'s Guide | FairwayPal',
  description:
    'A friendly, honest guide to Pinehurst for the partner who is not playing. The walkable village, the Tufts Archives, the spa at The Carolina, Southern Pines, Seagrove pottery, and a daily rhythm that works.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/pinehurst-for-non-golfers' },
  openGraph: {
    title: 'Pinehurst for Non-Golfers: A Partner\'s Guide',
    description:
      'How a Pinehurst golf trip works for the partner who is not teeing off. Village walks, Southern hospitality, spa days, and pottery country.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pinehurst for Non-Golfers: A Partner\'s Guide',
  description:
    'A practical guide to Pinehurst for non-golfing partners. Pinehurst Village walking, Tufts Archives, spa at The Carolina, Southern Pines day, Seagrove pottery, and a sample 3-day itinerary.',
  url: 'https://www.fairwaypal.com/blog/pinehurst-for-non-golfers',
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
      name: 'Pinehurst for Non-Golfers',
      item: 'https://www.fairwaypal.com/blog/pinehurst-for-non-golfers',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Pinehurst a good destination for non-golfing partners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on the partner. Pinehurst Village is genuinely charming, walkable, and steeped in Southern hospitality, with a full spa, art galleries, restaurants, and one of the best golf-history museums in the world (the Tufts Archives) all within five minutes of each other. Partners who love quiet, walkable, traditional small towns will be happy. Partners who want beach time, big-city energy, or shopping malls will find Pinehurst quiet. Three to four nights is the sweet spot.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is there to do in Pinehurst for non-golfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The signature non-golf experiences are: walking Pinehurst Village (boutiques, galleries, the Tufts Archives golf history museum), the spa at The Carolina Hotel, a half-day in Seagrove (one of the largest pottery communities in the United States, 30 miles north), exploring nearby Southern Pines and Aberdeen for restaurants and equestrian culture, and horseback riding in the Sandhills. Wineries in the broader region add another option. Most partners do all of these across a 3 to 4 night trip and are happily occupied.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a spa at The Carolina Hotel in Pinehurst?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The Spa at Pinehurst, attached to The Carolina, is a full-service resort spa with massages, facials, body treatments, and golf-recovery packages. The half-day package is the best value for partners who want a longer experience. Booking is easy if you are staying on resort; outside guests can book too but earlier in summer and during major event weeks. Treatments use locally inspired ingredients and the setting is genuinely relaxing.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Seagrove pottery worth the drive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, especially if your partner enjoys handmade ceramics. Seagrove is about 30 miles north of Pinehurst and has been producing pottery for over 200 years. Today there are roughly 100 working pottery studios open to visitors, with the North Carolina Pottery Center offering a good museum overview. A half-day route hits 4 or 5 studios with stops for lunch and coffee. The N.C. State Fair pottery competition winners often have studios here, and prices are very reasonable compared to gallery markup elsewhere.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long should non-golfing partners stay in Pinehurst?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Three to four nights is the sweet spot. Three covers the village, the spa, the Tufts Archives, and a Seagrove or Southern Pines half-day. Four adds a slow morning, a wine day, or horseback riding. Anything over four nights starts to feel slow unless your partner specifically wants a quiet contemplative trip, in which case Pinehurst can absorb a longer stay gracefully.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time of year for partners to visit Pinehurst?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "March through May and September through November are ideal: temperatures of 60 to 80°F, low humidity, and the village is at its best. Spring brings dogwood and azalea blooms; fall brings warm days and cool evenings. Summer is hot and humid (85 to 95°F), playable for golf but uncomfortable for outdoor partner activities. Winter is mild (45 to 60°F) and quiet, with off-peak resort pricing, which suits partners who like quieter experiences.",
      },
    },
  ],
}

export default function PinehurstForNonGolfersPage() {
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
          Pinehurst for Non-Golfers: A Partner's Guide
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Pinehurst is the cradle of American golf and one of the most pleasant villages in the South. For a partner who is not playing, the question is whether quiet, walkable, traditional Southern hospitality is the holiday they want, or whether they would rather be somewhere with more variety. Pinehurst is brilliant for the first kind of partner. Here is the friendly guide to making the most of it if that is your partner, and a clear-eyed call if it is not.
        </p>

        {/* Quick verdict */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The honest take</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Pinehurst works</span> for partners who love walkable villages, art galleries, antique shops, spa afternoons, and a slow Southern pace. The village itself is genuinely lovely and the Tufts Archives is one of the best small museums in golf.
          </p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Pinehurst is not the right pick</span> for partners who want beaches, big-city energy, or significant restaurant variety. If that is your partner, see <Link href="/destinations/kiawah-island" className="text-gold hover:underline">Kiawah Island</Link> (beach + Charleston nearby) or <Link href="/destinations/pebble-beach" className="text-gold hover:underline">Pebble Beach</Link> (Carmel-by-the-Sea) instead.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Why Pinehurst works */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Why Pinehurst works for the right partner
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pinehurst is a planned village, designed in 1895 by Frederick Law Olmsted (the landscape architect who designed Central Park), and the original layout is still the heart of the town today. You can walk from one end to the other in 20 minutes. Within those 20 minutes you have boutique shops, art galleries, the Pinehurst Brewing Co., several genuinely good restaurants, the Tufts Archives, the chapel, and The Carolina Hotel itself. The architecture is a mix of New England-meets-Southern-resort, and the streets are lined with longleaf pines.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              That walkable density is the partner's biggest advantage. Where Bandon asks partners to drive everywhere, and Pebble asks them to drive to Carmel, Pinehurst lets the partner park the car for three days. Mornings are coffee on a porch and a stroll through the village. Afternoons are a spa appointment or a gallery wander. Evenings are dinner with the group within walking distance of the room.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The honest caveat: the variety is finite. Pinehurst is a 20 minute village. If your partner wants new things every day, plan to drive to Seagrove or Southern Pines for the bigger excursions, and accept that Pinehurst is a slow place by design.
            </p>
          </section>

          {/* Sample itinerary */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              A sample 3-day partner itinerary
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The shape of a great partner trip in Pinehurst: long unhurried mornings, one anchor activity in the middle of the day, and dinner with the group in the evening. Most things are within walking distance of The Carolina Hotel, which makes everything easier.
            </p>
            <div className="mt-6 space-y-4">
              <DayCard
                day="Day 1: settle in and the village"
                morning="Slow start at The Carolina. Coffee on the porch and a walk down to the chapel."
                afternoon="Walk Pinehurst Village. Boutiques and galleries on Chinquapin Road, lunch at the Pinehurst Brewing Co. or Drum & Quill. End at the Tufts Archives (free, an hour is plenty)."
                evening="Drinks at The Ryder Cup Lounge at the resort. Dinner at the resort with the group."
              />
              <DayCard
                day="Day 2: the big partner day"
                morning="Drive 30 miles north to Seagrove. Stop at the North Carolina Pottery Center for context."
                afternoon="Visit 4 or 5 working pottery studios (most have shops attached). Lunch at Pisgah Brewing or a Seagrove cafe. Drive back via the scenic route through the Sandhills."
                evening="Sunset porch drinks. Dinner at Theo's, just outside the village, for a quieter meal away from the resort."
              />
              <DayCard
                day="Day 3: spa and pace"
                morning="Slow start. Walk through the longleaf pine groves at Weymouth Woods (a 25 minute drive)."
                afternoon="Half-day spa package at The Spa at Pinehurst. Massage, facial, time in the relaxation lounge."
                evening="Final group dinner at the Carolina Dining Room, the resort's flagship restaurant."
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Add a fourth day for horseback riding through the Sandhills, a Southern Pines lunch and antique day, or a Carolina wine country half-day. Pinehurst absorbs a slower rhythm gracefully.
            </p>
          </section>

          {/* The Village */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Pinehurst Village in detail
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The village is the soul of a partner trip here. Plan to spend at least a half day wandering, and probably longer than that.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>The Tufts Archives</strong> is a free golf history museum housed in the Given Memorial Library. The collection covers Pinehurst from its founding through every major championship hosted there. An hour is enough to see most of it; golf-history enthusiasts could spend two or three. Worth visiting even if your partner is not specifically a golf fan.</li>
              <li><strong>Boutique shops on Chinquapin Road and Magnolia Road</strong> are the cluster: clothing, antiques, gifts, home goods. Genuinely high quality, with prices that reflect a resort village but not absurdly so.</li>
              <li><strong>Art galleries</strong> are scattered across the village; the Artist Alley pop-ups in season are worth a visit if the timing works.</li>
              <li><strong>The Pinehurst Brewing Co.</strong> serves good beer, sandwiches, and pizza in the historic former steam plant. The patio fills up at lunch.</li>
              <li><strong>The Village Chapel</strong> at the end of Chapel Lane is a small, beautiful Pinehurst landmark, worth a 10 minute pause on a quiet morning.</li>
              <li><strong>Coffee at the Pinecrest Inn</strong> or at Drum & Quill Pub is the right way to start a Pinehurst morning.</li>
            </ul>
          </section>

          {/* Spa */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The Spa at Pinehurst
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Spa at Pinehurst, attached to The Carolina Hotel, is a proper full-service resort spa and one of the better partner anchors of the trip. Treatments are well-judged, the relaxation lounges are genuinely relaxing, and the locker rooms are nicer than most.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The half-day spa package is the best value for partners who want a longer experience: typically a 50 minute massage, a facial, time in the relaxation lounge, and access to the pool and fitness areas. Treatments use locally inspired ingredients (including Carolina pine and longleaf-derived products), which is a nice touch even if your partner does not care.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Booking 1 to 2 weeks ahead is recommended in spring and fall, especially around big golf event weeks. The spa is open to outside guests, but resort guests get priority on the most popular time slots.
            </p>
          </section>

          {/* Seagrove */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Seagrove pottery: the must-do day trip
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Seagrove sits about 30 miles north of Pinehurst and is one of the largest active pottery communities in the United States, with a tradition that dates back over 200 years. Today roughly 100 working pottery studios are open to visitors, ranging from established names to younger artists experimenting with new forms.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              A practical half-day plan: drive up mid-morning, start at the <strong>North Carolina Pottery Center</strong> for a 30 to 45 minute museum overview that puts everything in context, then visit 4 or 5 studios in the afternoon. Studios are spread out across a few miles of country roads, and most have shop attached. Bring cash or a card; prices are very reasonable compared to gallery mark-up elsewhere.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Lunch options in Seagrove are limited; either bring something from Pinehurst, eat in nearby Asheboro (15 minutes), or aim back toward Southern Pines for a late afternoon meal.
            </p>
          </section>

          {/* Southern Pines */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Southern Pines and the Sandhills
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Southern Pines, 5 miles south of Pinehurst, is the bigger, slightly less polished neighbour. Stronger restaurant scene, more antique shops, a working downtown with a railroad heritage, and the centre of the regional equestrian culture.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Weymouth Center for the Arts and Humanities is a beautiful 1922 estate house with literary and historical exhibits, set in 24 acres of longleaf pine grove. Adjacent Weymouth Woods is one of the best remaining longleaf pine ecosystems in the country and has easy walking trails. A combined Weymouth Center morning fills 2 to 3 hours nicely.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              For partners who like horses, the Sandhills around Pinehurst and Southern Pines are equestrian country, with multiple stables offering trail rides through the pine groves. Beginners welcome at most. Book ahead 1 to 2 days in spring and fall.
            </p>
          </section>

          {/* Pace and packing */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Pace, weather, and what to pack
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pinehurst runs at a Southern pace. Service is unhurried, lunch is leisurely, and dinner reservations at the better restaurants are essentially mandatory in spring and fall. Lean into the pace rather than fighting it; the village is more pleasant when you do not try to pack it.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The weather is friendly most of the year. Spring and fall (March through May, September through November) are 60 to 80°F with low humidity. Summer is hot and humid (85 to 95°F, with afternoon thunderstorms common); manageable for early morning village walks and indoor activities, less pleasant for a full day outside. Winter is 45 to 60°F and quiet.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pack: light layers, comfortable walking shoes (the village has long brick-paved streets), a sun hat in summer, a sweater for evenings in shoulder seasons, and a smart-casual dinner outfit for at least one night at the Carolina Dining Room. Our <Link href="/blog/golf-trip-packing-list" className="text-gold hover:underline">golf trip packing list</Link> has a full partner section.
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
              Pinehurst for non-golfers FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="Is Pinehurst a good destination for non-golfing partners?"
                answer="It depends on the partner. Pinehurst Village is genuinely charming and walkable, with a full spa, art galleries, restaurants, and the Tufts Archives within five minutes of each other. Partners who love quiet traditional small towns will be happy. Partners who want beaches, big-city variety, or shopping malls will find it quiet."
              />
              <FaqItem
                question="What is there to do in Pinehurst for non-golfers?"
                answer="Walking Pinehurst Village (boutiques, galleries, the Tufts Archives golf history museum), the spa at The Carolina Hotel, a half-day in Seagrove pottery community (30 miles north), Southern Pines for restaurants and equestrian culture, horseback riding, and Carolina wineries."
              />
              <FaqItem
                question="Is there a spa at Pinehurst?"
                answer="Yes, the Spa at Pinehurst is attached to The Carolina Hotel. Full-service resort spa with massages, facials, and a half-day package that is excellent value. Booking 1 to 2 weeks ahead is recommended in spring and fall."
              />
              <FaqItem
                question="Is Seagrove pottery worth the drive?"
                answer="Yes, especially if your partner enjoys handmade ceramics. About 30 miles north, with roughly 100 working studios. The North Carolina Pottery Center gives a museum overview. A half-day route hits 4 or 5 studios with stops for lunch."
              />
              <FaqItem
                question="How long should non-golfing partners stay in Pinehurst?"
                answer="Three to four nights is the sweet spot. Three covers the village, the spa, the Tufts Archives, and a Seagrove or Southern Pines half-day. Anything over four starts to feel slow unless your partner specifically wants a quiet contemplative trip."
              />
              <FaqItem
                question="When is the best time of year for partners?"
                answer="March to May and September to November (60 to 80°F, low humidity). Spring brings dogwood and azalea blooms; fall brings warm days and cool evenings. Avoid summer (hot and humid) for outdoor partner activities."
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
                href="/destinations/pinehurst"
                title="Pinehurst Destination Guide"
                description="The full golf-side guide: courses, hotels, partner activities, and packing."
              />
              <RelatedPost
                href="/blog/pinehurst-vs-kiawah-island-golf-trip"
                title="Pinehurst vs Kiawah Island"
                description="The two best East Coast golf resorts, compared honestly."
              />
              <RelatedPost
                href="/blog/algarve-for-non-golfers"
                title="The Algarve for Non-Golfers"
                description="The most partner-friendly international golf trip."
              />
              <RelatedPost
                href="/blog/pebble-beach-for-non-golfers"
                title="Pebble Beach for Non-Golfers"
                description="The friendliest US bucket-list resort for partners."
              />
              <RelatedPost
                href="/blog/bandon-dunes-for-non-golfers"
                title="Bandon Dunes for Non-Golfers"
                description="The full partner-side guide for the most golf-focused West Coast destination."
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
