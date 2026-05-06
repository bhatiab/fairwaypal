/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Florida for Non-Golfers: A Partner\'s Guide | FairwayPal',
  description:
    'A friendly, honest guide to Florida for the partner who is not playing. Different golf bases give different partner experiences: Streamsong (rural), TPC Sawgrass (St. Augustine + beaches), Innisbrook (Tampa + Gulf), Orlando (theme parks).',
  alternates: { canonical: 'https://fairwaypal.com/blog/florida-for-non-golfers' },
  openGraph: { title: 'Florida for Non-Golfers: A Partner\'s Guide', description: 'How a Florida golf trip works for the partner. Different bases, very different partner experiences.' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Florida for Non-Golfers: A Partner\'s Guide',
  description: 'A practical guide to Florida for non-golfing partners. The four golf bases (Streamsong, TPC Sawgrass/St. Augustine, Innisbrook/Tampa, Orlando) and what each offers for partners.',
  url: 'https://fairwaypal.com/blog/florida-for-non-golfers',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://fairwaypal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Florida for Non-Golfers', item: 'https://fairwaypal.com/blog/florida-for-non-golfers' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Florida a good destination for non-golfing partners?', acceptedAnswer: { '@type': 'Answer', text: "It depends entirely on which Florida golf base you pick. Florida is huge and the four main golf destinations give wildly different partner experiences. Streamsong Resort is rural and partner-thin (Tampa is 90 min away). TPC Sawgrass is in Ponte Vedra Beach with St. Augustine 45 minutes away (the oldest city in the US, excellent for partners). Innisbrook (Palm Harbor) is 30 minutes from Tampa beaches and Tarpon Springs. Orlando-based trips can pair golf with theme parks. Pick the base, then the partner experience falls out of it." } },
    { '@type': 'Question', name: 'What is there to do in Florida for non-golfers?', acceptedAnswer: { '@type': 'Answer', text: "Depends on the golf base. Near Streamsong (Tampa area, 90 min away): Ybor City historic district, Busch Gardens, the Gulf beaches at Clearwater and St. Pete. Near TPC Sawgrass (Ponte Vedra/Jacksonville): St. Augustine (founded 1565, oldest city in the US), Amelia Island beaches, Jacksonville Beach. Near Innisbrook (Palm Harbor): Tarpon Springs sponge docks, Clearwater Beach, downtown Tampa, Sand Key. Orlando-based: theme parks, the spa scene, fine dining at Disney resort hotels. Most partners do a mix of beach, history, and food across a 3 to 5 night trip." } },
    { '@type': 'Question', name: 'Which Florida golf base is best for partners?', acceptedAnswer: { '@type': 'Answer', text: "TPC Sawgrass / Ponte Vedra Beach is comfortably the best for partners who want a balanced trip. The base sits between St. Augustine (45 min south, history and architecture) and Amelia Island (45 min north, beaches and resorts), with Jacksonville Beach right next door. Innisbrook is second-best for partners who want a Tampa Gulf-coast experience. Streamsong is the worst partner base in Florida; the resort is genuinely remote and partners need to be okay with a slower spa-and-pool trip. Orlando works for partners who specifically want theme parks but the vibe is family-friendly rather than romantic." } },
    { '@type': 'Question', name: 'Is St. Augustine worth visiting from a TPC Sawgrass golf trip?', acceptedAnswer: { '@type': 'Answer', text: "Yes, especially for partners with any interest in history. St. Augustine is the oldest continuously occupied European-established settlement in the United States (founded 1565). The historic district is walkable from the parking garages: Castillo de San Marcos (the Spanish star fort, free with America the Beautiful pass), Flagler College (Henry Flagler's 1888 Hotel Ponce de Leon, gorgeous architecture), the cobblestone streets of the Spanish Quarter, and excellent seafood restaurants. Plan a full day. About 45 minutes from TPC Sawgrass." } },
    { '@type': 'Question', name: 'When is the best time of year for a Florida golf trip?', acceptedAnswer: { '@type': 'Answer', text: "October through April for the central and northern Florida bases (Streamsong, TPC Sawgrass, Innisbrook). Daytime temperatures are 65 to 80°F with low humidity. Avoid May through September when Florida becomes hot, humid, and rainy with daily afternoon thunderstorms. The exception is South Florida (Naples, Miami, the Keys) which is best November through April; summers are unbearable. The hurricane risk runs roughly June through November and is highest August through October; book travel insurance if you are visiting in those months." } },
  ],
}

export default function FloridaForNonGolfersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">Florida for Non-Golfers: A Partner's Guide</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>May 6, 2026</span><span>·</span><span>10 min read</span></div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Florida is the closest thing the US has to a year-round golf destination. The catch for partners is that Florida is huge, and the four main golf bases give very different partner experiences. Streamsong is a remote phosphate-country resort. TPC Sawgrass sits next to one of the oldest cities in America. Innisbrook is on the Tampa-area Gulf. Orlando is, well, Orlando. The trick to making a Florida golf trip work for partners is picking the right base. Here is the friendly guide.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The honest take</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Pick the base for the partner.</span> TPC Sawgrass / Ponte Vedra is the best partner base in Florida (St. Augustine + Atlantic beaches). Innisbrook is second (Tampa + Gulf beaches). Streamsong is partner-thin (you go for the golf design). Orlando is its own thing (theme parks dominate the partner experience).
          </p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Florida is four different golf trips</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Unlike Pinehurst or Bandon (one resort), or Scottsdale (one city), Florida golf is spread across the state. The four major bases are 2 to 4 hours apart from each other. Pick wrong for partners and you will be hearing about it. Pick right and Florida is genuinely good.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Streamsong Resort (Polk County, central Florida):</strong> world-class golf, partner-thin. The resort itself has a spa and a pool but the surrounding area is rural. Tampa beaches are 90 minutes away.</li>
              <li><strong>TPC Sawgrass (Ponte Vedra Beach, northeast Florida):</strong> the home of The Players Championship, with St. Augustine 45 minutes south and Amelia Island 45 minutes north. The best partner base in Florida.</li>
              <li><strong>Innisbrook Resort (Palm Harbor, Tampa Bay area):</strong> 30 minutes from Tampa, 30 minutes from Clearwater Beach and Tarpon Springs. The second-best partner base.</li>
              <li><strong>Orlando (central Florida):</strong> theme park country. Disney Springs, Universal CityWalk, and the Disney resort hotels dominate the partner experience.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">TPC Sawgrass / Ponte Vedra Beach</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Ponte Vedra Beach is a coastal town just south of Jacksonville and just north of St. Augustine. The Sawgrass Marriott is the main resort hotel; the Stadium Course at TPC Sawgrass (with the famous island green 17th) is on the property. For partners, it is the best Florida base by a wide margin.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>St. Augustine</strong>, 45 minutes south, is the oldest continuously inhabited European-founded city in the US (1565). Castillo de San Marcos (the Spanish star fort), Flagler College (Henry Flagler's 1888 Hotel Ponce de Leon, glorious architecture), the cobblestone Spanish Quarter, and excellent seafood. Plan a full day.</li>
              <li><strong>Amelia Island</strong>, 45 minutes north, is a barrier island with 13 miles of Atlantic beach and the Ritz-Carlton resort. Quieter and more upscale than Jacksonville Beach.</li>
              <li><strong>Jacksonville Beach</strong>, 15 minutes north of Ponte Vedra, is the casual beach town with surf shops and beachside bars.</li>
              <li><strong>The Spa at Sawgrass Marriott</strong>, on-property, is the easiest spa option. Mid-range; book ahead.</li>
              <li><strong>Mayport</strong>, 20 minutes north, is the working fishing village with the freshest seafood in the area. Singleton's Seafood Shack is the local institution.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground">A good 3-day partner plan: day 1 St. Augustine, day 2 Amelia Island and the spa, day 3 Jacksonville Beach and Mayport.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Innisbrook / Tampa Bay area</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Innisbrook Resort sits in Palm Harbor, about 30 miles northwest of Tampa and 10 miles east of the Gulf. Four golf courses including the PGA Tour's Copperhead. Partners get the Tampa Bay area as their playground.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Tarpon Springs</strong>, 15 minutes from Innisbrook, is the Greek-American sponge-diving town with Mediterranean restaurants and a working sponge dock. Excellent half-day with lunch.</li>
              <li><strong>Clearwater Beach</strong>, 30 minutes from Innisbrook, is regularly named one of the top US beaches. White sand, family-friendly, casual.</li>
              <li><strong>Honeymoon Island and Caladesi Island</strong>, both state parks accessible from Dunedin, offer quieter Gulf beach experiences. Caladesi requires a ferry.</li>
              <li><strong>Downtown Tampa</strong>, 30 minutes south, has the Ybor City historic district (Cuban heritage, cigar shops, restaurants), the Tampa Riverwalk, and the Florida Aquarium.</li>
              <li><strong>St. Petersburg</strong>, 45 minutes south, has the Salvador Dalí Museum (one of the best small art museums in the US), the Chihuly Collection, and a strong restaurant scene.</li>
              <li><strong>The Innisbrook Spa</strong> is solid mid-range; the higher-end spa option is the Don CeSar in St. Pete Beach (the iconic pink hotel).</li>
            </ul>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Streamsong Resort</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Streamsong is genuinely remote: a luxury resort in central Florida's phosphate-mining country, about 60 miles from Tampa and 90 from Orlando. Three world-class courses (Red, Blue, Black). The setting is beautiful and very quiet. The partner experience is built around the resort: the spa, the pool, the lodge, the on-property restaurants.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Realistically, Streamsong is the wrong Florida base for most partners. It is a 3-night minimum to justify the drive in, and there is essentially nothing within 60 miles of the resort. Partners who want a quiet contemplative trip with massage and pool time will be happy. Partners who want any kind of variety will not.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The fix if you must base at Streamsong: do a 2 night Streamsong stay for the golf, then move to Tampa or Sarasota for the rest of the trip. Most partners would rather have the latter as the primary base.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Orlando: theme park country</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Orlando is its own special case. The golf is good (Reunion Resort, Bay Hill, the Champions Gate complex) but the partner experience is dominated by Walt Disney World and Universal Studios. Whether that is a feature or a bug depends entirely on your partner.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              For partners who love theme parks (or are bringing kids), Orlando is genuinely fun. Disney Springs and Universal CityWalk both offer excellent restaurants and shopping without requiring a park ticket. The Disney resort spas (Senses Spa at Saratoga Springs, the Mandara Spa at the Walt Disney World Dolphin) are surprisingly good. The dining scene at the Disney Deluxe resorts (California Grill, Yachtsman Steakhouse) is among the best in the city.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              For partners who specifically do not want theme parks, Orlando is the wrong base. Drive 90 minutes east for Cocoa Beach and the Kennedy Space Center, or 90 minutes west for Tampa and the Gulf beaches.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Pace, weather, and packing</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Florida runs at a relaxed beach pace. October to April is the realistic visiting window: 65 to 80°F, low humidity, courses in beautiful condition. Avoid May to September: heat, humidity, and daily afternoon thunderstorms. Hurricane risk is highest August to October; book travel insurance if visiting then.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Pack: lightweight layers, swimwear, sandals, walking shoes (St. Augustine cobblestones), sun hat, sunscreen, light jacket for evenings. Florida is informal everywhere except Disney's signature restaurants.</p>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Plan a trip the partners will actually enjoy.</h2>
            <p className="mt-3 text-base text-muted-foreground">FairwayPal builds a parallel itinerary for non-golfers alongside the golf, so partners arrive knowing exactly what their days look like.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Florida for non-golfers FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem question="Is Florida a good destination for non-golfing partners?" answer="It depends on the base. TPC Sawgrass / Ponte Vedra is the best (St. Augustine + Atlantic beaches). Innisbrook is second (Tampa + Gulf). Streamsong is partner-thin. Orlando is theme parks." />
              <FaqItem question="What is there to do for non-golfers?" answer="Depends on base. Near TPC Sawgrass: St. Augustine, Amelia Island. Near Innisbrook: Tarpon Springs, Clearwater, Tampa, St. Pete. Near Streamsong: rural, spa-and-pool. Orlando: theme parks." />
              <FaqItem question="Which Florida base is best for partners?" answer="TPC Sawgrass / Ponte Vedra Beach. Sits between St. Augustine and Amelia Island, with Jacksonville Beach next door. Best balance of golf and partner experience." />
              <FaqItem question="Is St. Augustine worth visiting from TPC Sawgrass?" answer="Yes. Oldest US city (founded 1565). Castillo de San Marcos, Flagler College, cobblestone Spanish Quarter. Plan a full day. 45 minutes from TPC Sawgrass." />
              <FaqItem question="When is the best time of year?" answer="October to April for central and northern Florida (65-80°F, low humidity). Avoid May to September: hot, humid, daily thunderstorms. Hurricane risk peaks August to October." />
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/destinations/florida-golf" title="Florida Golf Destination Guide" description="The full golf-side guide: Streamsong, TPC Sawgrass, Innisbrook, World Woods." />
              <RelatedPost href="/blog/kiawah-island-for-non-golfers" title="Kiawah Island for Non-Golfers" description="The South Carolina Lowcountry alternative." />
              <RelatedPost href="/blog/myrtle-beach-for-non-golfers" title="Myrtle Beach for Non-Golfers" description="The Carolina value beach alternative." />
              <RelatedPost href="/blog/scottsdale-for-non-golfers" title="Scottsdale for Non-Golfers" description="The big partner-friendly desert alternative." />
              <RelatedPost href="/blog/golf-trip-with-non-golfers" title="Golf Trips With Non-Golfers" description="The general playbook for planning a trip that works for the whole group." />
              <RelatedPost href="/blog/golf-trip-packing-list" title="Golf Trip Packing List" description="What to pack." />
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
