/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Myrtle Beach for Non-Golfers: A Partner\'s Guide | FairwayPal',
  description:
    'A friendly, honest guide to Myrtle Beach for the partner who is not playing. 60 miles of Atlantic beach, the boardwalk and SkyWheel, Brookgreen Gardens, the Murrells Inlet Marshwalk, and Tanger Outlets shopping.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/myrtle-beach-for-non-golfers' },
  openGraph: {
    title: 'Myrtle Beach for Non-Golfers: A Partner\'s Guide',
    description:
      'How a Myrtle Beach golf trip works for the partner who is not teeing off. Beach, boardwalk, gardens, Marshwalk, shopping.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Myrtle Beach for Non-Golfers: A Partner\'s Guide',
  description:
    'A practical guide to Myrtle Beach for non-golfing partners. The Boardwalk and SkyWheel, Brookgreen Gardens, the Murrells Inlet Marshwalk, Tanger Outlets, beach days, and a sample 3-day itinerary.',
  url: 'https://www.fairwaypal.com/blog/myrtle-beach-for-non-golfers',
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
    { '@type': 'ListItem', position: 3, name: 'Myrtle Beach for Non-Golfers', item: 'https://www.fairwaypal.com/blog/myrtle-beach-for-non-golfers' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Myrtle Beach a good destination for non-golfing partners?',
      acceptedAnswer: { '@type': 'Answer', text: "Yes, especially for partners who want a relaxed beach holiday with plenty to do nearby. Myrtle Beach has 60 miles of Atlantic coastline (the Grand Strand), a famous oceanfront boardwalk with the SkyWheel ferris wheel, Brookgreen Gardens (sculpture and wildlife), the Murrells Inlet Marshwalk for waterfront dining, Tanger Outlets shopping, and Broadway at the Beach for entertainment. It is the most affordable bucket-list golf destination in the US, which means partners can pick a more spacious villa, a nicer spa, or longer dinners without the budget conversation." },
    },
    {
      '@type': 'Question',
      name: 'What is there to do in Myrtle Beach for non-golfers?',
      acceptedAnswer: { '@type': 'Answer', text: "The signature non-golf experiences are: long beach walks along the Grand Strand, the 1.2 mile Myrtle Beach Boardwalk and SkyWheel, Brookgreen Gardens (sculptures, wildlife sanctuary, 9,000 acres), the Murrells Inlet Marshwalk (half mile of waterfront restaurants and bars), Tanger Outlets for shopping, Broadway at the Beach for shopping and entertainment, Ripley's Aquarium, and a Pawleys Island day trip for a quieter, more upscale beach experience." },
    },
    {
      '@type': 'Question',
      name: 'Are there good spas in Myrtle Beach?',
      acceptedAnswer: { '@type': 'Answer', text: "Yes, but they are more modest than the resort spas at Pebble Beach or Pinehurst. The Spa at Marina Inn (Grande Dunes) and Sea Crest Resort spa are well-reviewed. For a higher-end experience, drive 30 minutes south to Litchfield Beach or Pawleys Island for boutique spa hotels. Most partners get good value from the local day spas at Broadway at the Beach rather than the resort spas." },
    },
    {
      '@type': 'Question',
      name: 'How long should non-golfing partners stay in Myrtle Beach?',
      acceptedAnswer: { '@type': 'Answer', text: "Three to four nights is the sweet spot. Three covers the beach, the boardwalk, and the Marshwalk. Four to five adds Brookgreen Gardens, a Pawleys Island day, and more beach time. Anything over five starts to feel slow unless you specifically want a beach holiday with downtime, which Myrtle Beach supports easily for a longer stay. Many groups happily extend by a night to add the second or third Marshwalk dinner." },
    },
    {
      '@type': 'Question',
      name: 'When is the best time of year for partners to visit Myrtle Beach?',
      acceptedAnswer: { '@type': 'Answer', text: "March through May and September through November are the best windows. Spring brings 65 to 80°F and lower humidity. Fall brings warm Atlantic water and clear skies. Summer (June through August) is hot and humid (85 to 95°F) and very busy with family vacationers; doable but crowded. Winter is mild (50 to 65°F) and quiet, with off-peak pricing. Avoid major spring break weeks in March (the third week of March is typically the worst for crowds and family-friendly partners)." },
    },
  ],
}

export default function MyrtleBeachForNonGolfersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Myrtle Beach for Non-Golfers: A Partner's Guide
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>9 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Myrtle Beach is the most popular golf trip destination in the US for one simple reason: it is great value. That value extends to the partner experience too. 60 miles of Atlantic beach, a famous oceanfront boardwalk, a genuinely lovely sculpture garden, and a string of waterfront restaurants in Murrells Inlet are all in easy reach. Here is the friendly guide to making it a real holiday for whoever is not teeing off.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The honest take</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Myrtle Beach works</span> for partners who want a relaxed Atlantic beach holiday with plenty of casual dining, shopping, and family-friendly entertainment within easy reach. It is informal, accessible, and far less precious than the bucket-list resorts.
          </p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Myrtle Beach is not the right pick</span> for partners who want refined boutique-village charm or the high-end resort spa scene. If that is your partner, see <Link href="/destinations/kiawah-island" className="text-gold hover:underline">Kiawah Island</Link> 90 minutes south or <Link href="/blog/scottsdale-for-non-golfers" className="text-gold hover:underline">Scottsdale</Link>.
          </p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Why Myrtle Beach works for partners</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Grand Strand stretches 60 miles along the South Carolina coast, from Little River in the north to Pawleys Island in the south. Myrtle Beach itself sits in the middle and is densely packed with hotels, restaurants, and entertainment. The North Strand and South Strand are quieter, with the most upscale stretch being Pawleys Island and Litchfield Beach about 30 minutes south.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              For a non-golfing partner, that variety is the advantage. You can have a beach day, an outlet shopping day, a fine-dinner-on-the-Marshwalk evening, and a quiet morning at Brookgreen Gardens, all without driving more than 30 minutes. The honest caveat is the vibe: Myrtle Beach is family-friendly and unpretentious, more boardwalk than boutique. If your partner is hoping for a boutique village or a culturally rich city, this is the wrong destination. For everyone else, it is genuinely good.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">A sample 3-day partner itinerary</h2>
            <div className="mt-6 space-y-4">
              <DayCard day="Day 1: beach and boardwalk" morning="Slow start at the resort. Coffee on the deck. Walk the beach for an hour." afternoon="Lunch on the oceanfront. Walk the 1.2 mile Myrtle Beach Boardwalk down to the SkyWheel for a sunset ride (200 feet up over the Atlantic)." evening="Dinner at Sea Captain's House (oceanfront, classic Lowcountry seafood) or Drunken Jack's at Murrells Inlet." />
              <DayCard day="Day 2: Brookgreen Gardens and the Marshwalk" morning="Drive 30 minutes south to Brookgreen Gardens. Spend 3 hours: the sculpture collection, the wildlife sanctuary, the Lowcountry trails." afternoon="Lunch on the Murrells Inlet Marshwalk (a half-mile boardwalk along the inlet with 8+ restaurants). Drinks at the Wicked Tuna deck." evening="Stay at the Marshwalk for sunset and dinner. The bands start around 7 PM in season." />
              <DayCard day="Day 3: shopping and pool" morning="Tanger Outlets (two locations, the larger one on Highway 17 N has 90+ stores). Or Broadway at the Beach for entertainment shopping." afternoon="Pool day at the resort. Late lunch at one of the oceanfront tiki bars." evening="Final group dinner. Try The Library (Italian, white tablecloth) or Wicked Tuna for a more casual seafood night." />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Add a fourth day for a Pawleys Island beach day (much quieter than Myrtle Beach proper) or Charleston (90 minutes south, full day trip).</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The beach</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Grand Strand has 60 miles of Atlantic beach, generally wide and flat with compact sand that is easy to walk. The water is warmer than Kiawah or Pebble (peaks at 80°F+ in August), which means partners actually swim. Public beach access is good throughout, with parking widely available at signed access points.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Myrtle Beach State Park</strong> at the south end of Myrtle Beach proper is the quietest stretch within the city, with a fishing pier and walking trails through maritime forest behind the dunes.</li>
              <li><strong>The Boardwalk and Promenade</strong> runs 1.2 miles along the oceanfront from 14th Avenue North to the 2nd Avenue Pier, with the SkyWheel as the centerpiece.</li>
              <li><strong>Pawleys Island</strong> 30 minutes south is the upscale, quieter alternative. Smaller crowds, more residential, beach houses instead of high-rises.</li>
              <li><strong>Huntington Beach State Park</strong> 25 minutes south is the wildest stretch: a large barrier island with a salt marsh, alligators in the lagoon, and excellent birding.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Brookgreen Gardens</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Brookgreen Gardens is the surprise highlight of most partner trips here. About 30 minutes south of Myrtle Beach proper, it is a 9,000 acre property combining one of the most important figurative sculpture collections in the United States (over 2,000 pieces by 430+ artists), an excellent Lowcountry zoo, and walking trails through original rice plantation lands.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Plan 3 to 4 hours for a relaxed visit. The sculpture gardens, the butterfly house, and the Lowcountry zoo are the essentials. The night-of-a-thousand-candles event in December is genuinely magical if your trip happens to overlap.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Murrells Inlet Marshwalk</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Marshwalk is a half-mile wooden boardwalk along Murrells Inlet, lined with 8+ waterfront restaurants and bars. It is the best evening in the Myrtle Beach area for most partners and a good lunch option after Brookgreen Gardens or Huntington Beach.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Standout spots: Drunken Jack's (the classic), Wicked Tuna (great deck), Wahoo's (oysters), and the Hot Fish Club (more upscale dinner option). Bands play on the outdoor decks from late afternoon in season. Get there before sunset; dolphins are commonly spotted in the inlet at golden hour.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Shopping and entertainment</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Tanger Outlets</strong> has two Myrtle Beach locations: the Highway 17 North outlet (90+ stores, the larger one) and the Highway 501 outlet (75+ stores). Outlet shopping is genuinely a thing here; partners often plan a half-day around it.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Broadway at the Beach</strong> is a 350 acre entertainment complex with shopping, restaurants, Ripley's Aquarium, mini golf, and the Carolina Opry. It is touristy and crowded in season but works for an evening with the family-friendly partner crowd.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Barefoot Landing</strong> in North Myrtle Beach is the smaller, less hectic alternative: shops, restaurants, the Alabama Theatre. Worth a visit if you are staying north.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Pace, weather, and packing</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Myrtle Beach runs at a relaxed beach-town pace. Most things open at 10 or 11 AM and stay busy until 10 PM. Restaurants take walk-ins outside summer; reservations recommended in June through August.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Weather: spring (March to May) and fall (September to November) are 65 to 80°F with low humidity. Summer is 85 to 95°F and humid; doable for the beach in the morning and the pool in the afternoon. Winter is mild (50 to 65°F) and quiet.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pack: swimwear, sandals, comfortable walking shoes, sun protection, and a casual dinner outfit. Myrtle Beach is informal; nothing here requires a jacket. Our <Link href="/blog/golf-trip-packing-list" className="text-gold hover:underline">golf trip packing list</Link> has a full partner section.
            </p>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Plan a trip the partners will actually enjoy.</h2>
            <p className="mt-3 text-base text-muted-foreground">FairwayPal builds a parallel itinerary for non-golfers alongside the golf, so partners arrive knowing exactly what their days look like.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Myrtle Beach for non-golfers FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem question="Is Myrtle Beach a good destination for non-golfing partners?" answer="Yes, for partners who want a relaxed Atlantic beach holiday with shopping, casual dining, and entertainment nearby. Less precious than bucket-list resorts. Best for accessible, family-friendly partners; not ideal for partners wanting boutique village or high-end resort spa." />
              <FaqItem question="What is there to do for non-golfers?" answer="60 miles of beach, the Boardwalk and SkyWheel, Brookgreen Gardens, Murrells Inlet Marshwalk, Tanger Outlets, Broadway at the Beach, Pawleys Island, Huntington Beach State Park." />
              <FaqItem question="Are there good spas in Myrtle Beach?" answer="Modest compared to Pebble or Pinehurst. The Spa at Marina Inn (Grande Dunes) and Sea Crest Resort are well-reviewed. For higher-end, drive 30 min south to Litchfield Beach or Pawleys Island." />
              <FaqItem question="How long should partners stay?" answer="Three to four nights covers the highlights. Five or more works if you specifically want a beach holiday with downtime." />
              <FaqItem question="When is the best time of year?" answer="March-May and September-November (65-80°F, low humidity). Avoid major spring break weeks in March." />
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/destinations/myrtle-beach" title="Myrtle Beach Destination Guide" description="The full golf-side guide: courses, hotels, partner activities, packing." />
              <RelatedPost href="/blog/scottsdale-vs-myrtle-beach-golf-trip" title="Scottsdale vs Myrtle Beach" description="The two most popular US golf destinations, compared honestly." />
              <RelatedPost href="/blog/kiawah-island-for-non-golfers" title="Kiawah Island for Non-Golfers" description="The upscale Carolina alternative 90 minutes south." />
              <RelatedPost href="/blog/scottsdale-for-non-golfers" title="Scottsdale for Non-Golfers" description="The big partner-friendly desert alternative." />
              <RelatedPost href="/blog/golf-trip-with-non-golfers" title="Golf Trips With Non-Golfers" description="The general playbook for planning a trip that works for the whole group." />
              <RelatedPost href="/blog/best-bachelor-party-golf-destinations" title="Best Bachelor Golf Destinations" description="Six destinations ranked, with Myrtle Beach value noted." />
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
      <div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted-foreground">{answer}</div>
    </details>
  )
}

function RelatedPost({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} className="group rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30">
      <h3 className="text-base font-semibold text-foreground group-hover:text-gold transition-colors">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
    </Link>
  )
}
