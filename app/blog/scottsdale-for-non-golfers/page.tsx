/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Scottsdale for Non-Golfers: A Partner\'s Guide | FairwayPal',
  description:
    'A friendly, honest guide to Scottsdale for the partner who is not playing. Old Town walking, the Joya and Well & Being spas, hot air balloon rides, the Desert Botanical Garden, Camelback hiking, and Carmel Valley wine trail.',
  alternates: { canonical: 'https://fairwaypal.com/blog/scottsdale-for-non-golfers' },
  openGraph: {
    title: 'Scottsdale for Non-Golfers: A Partner\'s Guide',
    description:
      'How a Scottsdale golf trip works for the partner who is not teeing off. Old Town, world-class spas, hot air balloons, hiking, and the wine trail.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Scottsdale for Non-Golfers: A Partner\'s Guide',
  description:
    'A practical guide to Scottsdale for non-golfing partners. Old Town, spa resorts, hot air balloons, the Desert Botanical Garden, Camelback Mountain, and the Scottsdale Wine Trail. Sample 3-day itinerary.',
  url: 'https://fairwaypal.com/blog/scottsdale-for-non-golfers',
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
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Scottsdale for Non-Golfers',
      item: 'https://fairwaypal.com/blog/scottsdale-for-non-golfers',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Scottsdale a good destination for non-golfing partners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, Scottsdale is one of the most partner-friendly bucket-list golf destinations in the United States. Old Town Scottsdale is walkable and packed with art galleries, restaurants, and bars. The resort spa scene (Joya Spa at Montelucia, Well & Being at the Fairmont) is excellent. Hot air balloon rides over the Sonoran Desert are a classic experience. The Desert Botanical Garden is genuinely world-class. Camelback Mountain offers serious hiking. The Scottsdale Wine Trail has 15+ tasting rooms in Old Town. Most partners do all of these across a 3 to 5 night trip and want to come back.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is there to do in Scottsdale for non-golfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The signature non-golf experiences are: walking Old Town Scottsdale (Fifth Avenue shops, the galleries on Marshall Way, the historic Sugar Bowl and Cowboy Up districts), a sunrise hot air balloon over the Sonoran Desert, a half-day at the Desert Botanical Garden (best at sunset), a spa day at Joya Spa or Well & Being, a Camelback Mountain hike (or the gentler Pinnacle Peak), and a Scottsdale Wine Trail afternoon. Day trips to Sedona (2 hours), the Grand Canyon (3 to 4 hours), or Frank Lloyd Wright's Taliesin West (15 minutes) add depth.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there good spas in Scottsdale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, Scottsdale is one of the best spa destinations in the US. Joya Spa at the Omni Scottsdale Resort & Spa at Montelucia is consistently ranked among the country's top resort spas, with a hammam, signature olive-oil treatments, and a Moorish-inspired setting. Well & Being Spa at the Fairmont Scottsdale Princess is the wellness powerhouse, with a fitness centre, classes, and a long treatment menu. The Spa at Camelback Inn (a JW Marriott property) is the more traditional option. All three book out 1 to 2 weeks ahead in peak season (January to April).",
      },
    },
    {
      '@type': 'Question',
      name: 'Are hot air balloon rides over Scottsdale worth it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, especially for a memorable partner experience. Sunrise rides over the Sonoran Desert are the classic option: about 60 to 90 minutes in the air, lift off in pre-dawn cool, and watch the sun light up the saguaros and the McDowell Mountains from 1,000 to 2,500 feet up. Rides typically include a champagne toast on landing. Operators include Hot Air Expeditions and Aerogelic Ballooning. Costs run roughly $200 to $300 per person; book at least a week ahead, more in peak season. Sunset rides are also offered but the morning calm is generally better for photography and wind conditions.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long should non-golfing partners stay in Scottsdale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Three to five nights is the sweet spot. Three covers Old Town, a spa day, and one major outing (balloon, Camelback, or the Botanical Garden). Four to five adds wine tasting, a Sedona day trip, or Taliesin West. Anything beyond five nights starts to feel slow unless you specifically want pool-and-spa downtime, which Scottsdale supports easily for a longer stay. Bachelor groups often pair 3 to 4 nights of golf with one extra night for partners doing their own thing.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time of year for partners to visit Scottsdale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "October through April is the realistic visiting window. Peak season is January through March (65 to 80°F, perfect conditions, but maximum prices and crowds). November and March offer the best weather-to-price ratio. Avoid May through September: temperatures regularly exceed 100°F (often 110°F+ in midsummer), which makes Old Town walks, hiking, and outdoor activities genuinely unpleasant. Hot air balloon operators run year-round but in summer the rides launch much earlier to beat the heat.",
      },
    },
  ],
}

export default function ScottsdaleForNonGolfersPage() {
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
          Scottsdale for Non-Golfers: A Partner's Guide
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>11 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Scottsdale is the default US bachelor and bachelorette weekend for a reason: 200+ golf courses within an hour, year-round sun, and an Old Town that is unusually generous to non-golfing partners. Joya Spa is one of the best resort spas in the country. The Desert Botanical Garden is genuinely world-class. Hot air balloons over the Sonoran Desert are a memory people talk about for years. Here is the friendly guide to making it a real holiday for whoever is not teeing off.
        </p>

        {/* Quick verdict */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The honest take</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Scottsdale works for almost any partner.</span> Spa-and-shopping types love Old Town. Active types love Camelback and Sedona day trips. Foodie types love the restaurant scene. Photography types love the desert at golden hour. The only partner Scottsdale does not work for is one who specifically wants ocean and beach; for that, see <Link href="/destinations/pebble-beach" className="text-gold hover:underline">Pebble Beach</Link> or <Link href="/destinations/kiawah-island" className="text-gold hover:underline">Kiawah</Link>.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Why Scottsdale works */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Why Scottsdale works for partners
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Scottsdale sits in the Sonoran Desert just east of Phoenix, in a wide valley ringed by the McDowell, Camelback, and Mummy mountains. The setting is dramatic year-round: cacti, golden hour light, big skies. The town itself is built around tourism and golf, which means the partner offering is unusually polished: walkable Old Town, premium resort spas, well-organised tour operators for the desert experiences, and a restaurant scene that punches above its weight.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The other thing Scottsdale gets right is variety. A non-golfing partner can pick their own pace: pool day at the resort one day, big outing the next (balloon ride, Botanical Garden, Camelback hike), Old Town shopping and dining a third day. Most partners say Scottsdale was easier to fill than they expected, even if they thought of it as a golf-first destination.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The honest caveat is the heat. Outside the October-to-April window, Scottsdale becomes a different place; afternoon temperatures of 105 to 115°F mean outdoor activities are limited to early morning and late evening. Plan accordingly: if your trip is in May to September, lean heavier on indoor and pool-side experiences for partners.
            </p>
          </section>

          {/* Sample itinerary */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              A sample 3-day partner itinerary
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The shape of a great Scottsdale partner trip: one big anchor experience per day, generous time at the resort pool in between, and dinner with the group in the evening.
            </p>
            <div className="mt-6 space-y-4">
              <DayCard
                day="Day 1: hot air balloon and Old Town"
                morning="Pre-dawn pickup for a sunrise hot air balloon over the Sonoran Desert. Back at the resort by 10 AM with champagne and breakfast already done."
                afternoon="Pool time. Late lunch at the resort. Drive into Old Town Scottsdale to walk Fifth Avenue and Marshall Way galleries. Coffee at one of the boutique cafes."
                evening="Dinner in Old Town (FnB, Citizen Public House, or Bourbon Steak if your group wants the upscale option). Group dinner."
              />
              <DayCard
                day="Day 2: spa day"
                morning="Slow morning at the resort. Coffee and pool time."
                afternoon="Half-day spa package at Joya Spa (at Montelucia) or Well & Being (at the Fairmont Scottsdale Princess). Massage, signature treatment, time in the relaxation lounge."
                evening="Sunset at the Desert Botanical Garden (open late on Friday and Saturday in season). Dinner at the on-site Gertrude's restaurant or back in Old Town."
              />
              <DayCard
                day="Day 3: desert and culture"
                morning="Camelback Mountain hike (Echo Canyon Trail, allow 2 to 3 hours, start before sunrise in summer). Or the gentler Pinnacle Peak Trail if Camelback feels intimidating."
                afternoon="Lunch in Old Town. Visit Taliesin West (Frank Lloyd Wright's winter home, 15 minutes from Old Town, guided tours). Or wine tasting on the Scottsdale Wine Trail (15+ tasting rooms walkable in Old Town)."
                evening="Final group dinner. Drinks at one of the rooftop bars."
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Add a fourth day for a Sedona day trip (2 hours each way, Cathedral Rock and the Chapel of the Holy Cross) or for a Phoenix day at the Heard Museum or the Musical Instrument Museum. Add a fifth night if your group is doing a longer trip.
            </p>
          </section>

          {/* Old Town */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Old Town Scottsdale
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Old Town is the partner anchor of the trip, and unlike most "old towns" attached to American resort destinations, Scottsdale's is genuinely walkable, well-curated, and rewarding for a half-day visit on multiple days of the trip.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Fifth Avenue:</strong> the main shopping street, with boutiques, gift shops, and Western wear (the latter both ironic and authentic, depending on the store).</li>
              <li><strong>Marshall Way:</strong> the gallery district. Native American art, contemporary Southwestern, and a few extraordinary high-end galleries. Open late on Thursday during the ArtWalk.</li>
              <li><strong>Scottsdale ArtWalk:</strong> every Thursday evening from 7 to 9 PM. Galleries open, artists in residence, often live music. Free and one of the best partner evenings of the week.</li>
              <li><strong>The Sugar Bowl:</strong> a 1958 Scottsdale ice cream parlor. Touristy but charming and the ice cream is genuinely good. Frequently in TripAdvisor's top Scottsdale lists.</li>
              <li><strong>Western/Cowboy Up district:</strong> centred around Stetson Drive, with cowboy-themed bars, restaurants, and shops. Worth a visit even if you find it slightly ridiculous.</li>
              <li><strong>Restaurants:</strong> Old Town has a strong food scene. FnB (modern Southwestern, James Beard-recognised), Bourbon Steak (Michael Mina's restaurant at the Fairmont, technically not in Old Town but easily reached), Citizen Public House (gastro pub), Postino (wine bar with bruschetta boards), and Mowry & Cotton at the Phoenician for romantic dinners.</li>
            </ul>
          </section>

          {/* Spas */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The spa scene
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Scottsdale is one of the great spa destinations in the United States. Three options stand out for partners.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Joya Spa</strong> at the Omni Scottsdale Resort & Spa at Montelucia is consistently ranked among the top resort spas in the country. The setting is Moorish-inspired with a hammam, an indoor pool, and treatment rooms organised around a central courtyard. The signature olive-oil ritual treatments are excellent. The half-day spa package is the best value for a longer experience.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Well & Being Spa</strong> at the Fairmont Scottsdale Princess is the wellness powerhouse. Beyond a strong treatment menu, it has a serious fitness centre, daily classes, a meditation room, and a longer menu of holistic offerings. Less ornamental than Joya, more functional and modern.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>The Spa at Camelback Inn</strong>, a JW Marriott property, is the more traditional Southwestern desert option. Strong massage menu, a beautiful pool deck, and a long history. Good if your group is staying at or near the Camelback Inn.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              All three book out 1 to 2 weeks ahead in peak season (January through April). Prices reflect the resort positioning, but the quality is real.
            </p>
          </section>

          {/* Hot air balloons and outdoor */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Hot air balloons and the desert
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The single most photographed partner experience in Scottsdale is a sunrise hot air balloon ride over the Sonoran Desert. It earns the reputation: pre-dawn pickup, a 60 to 90 minute float at 1,000 to 2,500 feet over saguaros and the McDowell range, and a champagne breakfast on landing. Most partners say it was the highlight of the trip.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Operators:</strong> Hot Air Expeditions (the longest-running, with a strong safety record) and Aerogelic Ballooning are both well-reviewed. Cost: roughly $200 to $300 per person depending on the package. Book at least a week ahead in peak season (January to April), longer for sunrise weekend slots. Sunset rides are also offered but morning is calmer and better for photography.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Other desert experiences:</strong> jeep tours through the Sonoran Preserve (Stellar Adventures and Desert Wolf Tours both run them), guided horseback rides (MacDonald's Ranch in Scottsdale, family-friendly), and stargazing tours at one of the dark-sky viewing areas. None of these match the balloon for sheer memorability, but all are good.
            </p>
          </section>

          {/* Botanical Garden */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Desert Botanical Garden
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The Desert Botanical Garden in Phoenix is one of the best botanical gardens in the United States and a quiet partner highlight that many groups underrate before they go. 55 acres of curated desert plant collections from around the world, with five thematic trails and rotating seasonal exhibits.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>The best time to visit is golden hour.</strong> The garden stays open late on Friday and Saturday evenings in season (typically until 8 or 9 PM), and the desert plants are at their most photogenic when the sun drops. Bring water; it is hot even at sunset in summer.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Two seasonal exhibits are worth timing if you can: <strong>Las Noches de las Luminarias</strong> (December, the garden lit by 8,000 luminarias) and the <strong>Chihuly in the Garden</strong> exhibits when running. Check their calendar before booking.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Plan 2 to 3 hours. Combine with dinner at the on-site Gertrude's restaurant for a relaxed evening.
            </p>
          </section>

          {/* Hiking */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Hiking and outdoor activity
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              For active partners, Scottsdale has some of the best urban-adjacent hiking in the US. Three options at different difficulty levels.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Camelback Mountain (Echo Canyon Trail)</strong> is the iconic hike. Steep, exposed, genuinely strenuous (about 1,200 feet of elevation gain over 1.2 miles each way). Plan 2 to 3 hours. Start before sunrise in summer; carry water. The view from the summit is the best in Scottsdale. Cholla Trail on the other side is slightly easier but still serious.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Pinnacle Peak</strong> is the gentler partner option. About 4 miles round trip, 1,300 feet of gain, but the gradient is more forgiving. Spectacular saguaro forest. 2 hours.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Lost Dog Wash Trail</strong> in the McDowell Sonoran Preserve is the easy walk option. Flat, well-marked, accessible from a city trailhead. 1 to 2 hours covers the highlights.
            </p>
          </section>

          {/* Wine and culture */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Wine, art, and culture
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Scottsdale has more cultural and culinary depth than the bachelor-party reputation suggests.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>The Scottsdale Wine Trail</strong> threads 15+ tasting rooms through Old Town, all walkable from each other. Most pour wines from Verde Valley vineyards (north of Phoenix near Sedona) and southern Arizona. A relaxed half-day is the right pace, with lunch in between. Friday afternoon is the best time; weekday tastings are less crowded.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>Taliesin West</strong>, Frank Lloyd Wright's winter home and architecture school, is 15 minutes from Old Town and one of the most important architectural sites in the United States. Guided tours run multiple times a day; the 90 minute Insights Tour is the standard pick. Book ahead, especially in peak season.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>The Heard Museum</strong> in Phoenix is one of the top museums of Native American art and culture in the US. About 25 minutes from Scottsdale Old Town, allow 2 to 3 hours.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              <strong>The Musical Instrument Museum</strong> in north Phoenix is a quirky favourite, with instruments from every country and an audio guide that plays each one. About 30 minutes from Old Town. Most partners who go say it exceeded expectations.
            </p>
          </section>

          {/* Pace and packing */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Pace, weather, and what to pack
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Scottsdale runs at a relaxed resort pace. Mornings start early in summer (because the heat) and later in winter (because there is no rush). Old Town opens around 10 AM and stays lively until 11 PM. Restaurants in Scottsdale are fine with reservations 2 to 4 days ahead in shoulder season; book 2 to 4 weeks ahead in January to March peak.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The weather, by season: October to April is the realistic visiting window. November and March give the best balance of weather and price (65 to 80°F, mostly sunny). January to March is peak (perfect weather, peak prices, busy). Avoid May through September: 100 to 115°F afternoon temperatures make outdoor activities painful and most partner experiences move to dawn or after dusk.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pack: light layers, a sun hat, sunscreen, comfortable walking shoes, a light jacket for evenings (the desert cools fast after sunset), swimwear for the pool, and a smart-casual dinner outfit for at least one Old Town night. Hiking shoes if you plan to do Camelback. Our <Link href="/blog/golf-trip-packing-list" className="text-gold hover:underline">golf trip packing list</Link> has a full partner section.
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
              Scottsdale for non-golfers FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="Is Scottsdale a good destination for non-golfing partners?"
                answer="Yes, one of the best in the US. Old Town, world-class spas, hot air balloons, the Desert Botanical Garden, Camelback hiking, and the Wine Trail. Year-round sunshine for most of the partner-friendly season."
              />
              <FaqItem
                question="What is there to do for non-golfers?"
                answer="Old Town walking, the Joya or Well & Being spa, sunrise hot air balloon, Desert Botanical Garden, Camelback or Pinnacle Peak hike, Scottsdale Wine Trail, Taliesin West, day trips to Sedona or Phoenix museums."
              />
              <FaqItem
                question="Are there good spas in Scottsdale?"
                answer="Yes, three excellent options: Joya Spa at Montelucia (Moorish setting, hammam, signature olive-oil treatments), Well & Being at the Fairmont Princess (wellness powerhouse), and The Spa at Camelback Inn (traditional Southwestern). Book 1-2 weeks ahead in peak season."
              />
              <FaqItem
                question="Are hot air balloon rides worth it?"
                answer="Yes. Sunrise rides over the Sonoran Desert, 60-90 min flight, $200-300 per person. Hot Air Expeditions and Aerogelic are well-reviewed operators. Book a week ahead in peak season."
              />
              <FaqItem
                question="How long should partners stay?"
                answer="Three to five nights. Three covers Old Town, a spa day, and one major outing. Four to five adds wine tasting, a Sedona day trip, or Taliesin West."
              />
              <FaqItem
                question="When is the best time of year for partners?"
                answer="October through April. Peak is January-March (perfect weather, peak prices). November and March offer the best weather-to-price ratio. Avoid May-September: 100-115°F afternoons make outdoor activities painful."
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
                href="/destinations/scottsdale"
                title="Scottsdale Destination Guide"
                description="The full golf-side guide: courses, hotels, partner activities, and packing."
              />
              <RelatedPost
                href="/blog/scottsdale-vs-myrtle-beach-golf-trip"
                title="Scottsdale vs Myrtle Beach"
                description="The two most popular US golf destinations, compared honestly."
              />
              <RelatedPost
                href="/blog/best-bachelor-party-golf-destinations"
                title="Best Bachelor Golf Destinations"
                description="Six destinations ranked, with Scottsdale's bachelor scene noted."
              />
              <RelatedPost
                href="/blog/kiawah-island-for-non-golfers"
                title="Kiawah Island for Non-Golfers"
                description="The East Coast partner equivalent: beach, spa, and Charleston nearby."
              />
              <RelatedPost
                href="/blog/pebble-beach-for-non-golfers"
                title="Pebble Beach for Non-Golfers"
                description="The friendliest West Coast bucket-list resort for partners."
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
