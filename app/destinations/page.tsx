import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'

export const metadata: Metadata = {
  title: 'Golf Trip Destinations — Guides for Golfers and Partners',
  description:
    'Ten golf trip destination guides with real costs, the best courses, and what partners actually do while the group plays. Scottsdale, Pinehurst, Bandon Dunes, Scotland, Ireland and more.',
  alternates: { canonical: 'https://www.fairwaypal.com/destinations' },
  openGraph: {
    title: 'Golf Trip Destinations — FairwayPal',
    description:
      'Ten destination guides with real costs, the best courses, and the partner-side plan for each.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.fairwaypal.com/destinations' },
  ],
}

type Destination = {
  href: string
  name: string
  region: string
  tagline: string
  description: string
  partnerGuide: { href: string; label: string }
}

const US_DESTINATIONS: Destination[] = [
  {
    href: '/destinations/scottsdale',
    name: 'Scottsdale',
    region: 'Arizona',
    tagline: '200+ courses, year-round sun',
    description:
      'The default pick for a US bachelor weekend. Enormous course choice, reliable weather, and an Old Town that keeps the group busy after the round.',
    partnerGuide: { href: '/blog/scottsdale-for-non-golfers', label: 'Scottsdale for non-golfers' },
  },
  {
    href: '/destinations/myrtle-beach',
    name: 'Myrtle Beach',
    region: 'South Carolina',
    tagline: 'Best value, 100+ courses',
    description:
      'The value play. More golf per dollar than anywhere else on this list, with beach and boardwalk built in for anyone not playing.',
    partnerGuide: { href: '/blog/myrtle-beach-for-non-golfers', label: 'Myrtle Beach for non-golfers' },
  },
  {
    href: '/destinations/pinehurst',
    name: 'Pinehurst',
    region: 'North Carolina',
    tagline: 'The cradle of American golf',
    description:
      'Heritage golf in a walkable resort village. No. 2 is the draw, but the surrounding courses are what make it a full trip.',
    partnerGuide: { href: '/blog/pinehurst-for-non-golfers', label: 'Pinehurst for non-golfers' },
  },
  {
    href: '/destinations/bandon-dunes',
    name: 'Bandon Dunes',
    region: 'Oregon',
    tagline: 'Wild Oregon coast links golf',
    description:
      'The closest thing to Scotland in the US, and the most remote trip here. A serious-golf destination that asks a lot of non-golfers.',
    partnerGuide: { href: '/blog/bandon-dunes-for-non-golfers', label: 'Bandon Dunes for non-golfers' },
  },
  {
    href: '/destinations/pebble-beach',
    name: 'Pebble Beach',
    region: 'California',
    tagline: 'The West Coast bucket list',
    description:
      'The most recognisable golf on the list, at the price you would expect. Carmel and the Monterey Peninsula carry the partner side easily.',
    partnerGuide: { href: '/blog/pebble-beach-for-non-golfers', label: 'Pebble Beach for non-golfers' },
  },
  {
    href: '/destinations/kiawah-island',
    name: 'Kiawah Island',
    region: 'South Carolina',
    tagline: 'The Ocean Course and Charleston',
    description:
      'A championship test with one of the best partner cities in the country half an hour up the road. Strong all-round trip.',
    partnerGuide: { href: '/blog/kiawah-island-for-non-golfers', label: 'Kiawah Island for non-golfers' },
  },
  {
    href: '/destinations/florida-golf',
    name: 'Florida',
    region: 'Streamsong, Sawgrass and more',
    tagline: 'Year-round Southeast sun',
    description:
      'Streamsong, TPC Sawgrass and Innisbrook in one state, with beaches and theme parks giving partners more options than most destinations.',
    partnerGuide: { href: '/blog/florida-for-non-golfers', label: 'Florida for non-golfers' },
  },
]

const INTERNATIONAL_DESTINATIONS: Destination[] = [
  {
    href: '/destinations/scotland',
    name: 'Scotland',
    region: 'St Andrews and the links coast',
    tagline: 'The birthplace of golf',
    description:
      'The trip most groups want to take once. Weather is the trade-off, and the partner side is stronger than people expect.',
    partnerGuide: { href: '/blog/scotland-for-non-golfers', label: 'Scotland for non-golfers' },
  },
  {
    href: '/destinations/ireland',
    name: 'Ireland',
    region: 'The southwest and the west coast',
    tagline: 'Links golf and craic',
    description:
      'Scotland-grade links at a friendlier price, with a partner itinerary that mostly plans itself between Galway, Killarney and Dublin.',
    partnerGuide: { href: '/blog/ireland-for-non-golfers', label: 'Ireland for non-golfers' },
  },
  {
    href: '/destinations/algarve',
    name: 'Algarve',
    region: 'Portugal',
    tagline: 'Sun, links, and half the price of Scotland',
    description:
      'The cheapest way to get a group to Europe for golf, with reliable sun and a beach-and-old-town partner plan alongside it.',
    partnerGuide: { href: '/blog/algarve-for-non-golfers', label: 'The Algarve for non-golfers' },
  },
]

const ALL_DESTINATIONS = [...US_DESTINATIONS, ...INTERNATIONAL_DESTINATIONS]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'FairwayPal golf trip destination guides',
  numberOfItems: ALL_DESTINATIONS.length,
  itemListElement: ALL_DESTINATIONS.map((destination, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: destination.name,
    url: `https://www.fairwaypal.com${destination.href}`,
  })),
}

const COMPARISONS = [
  {
    href: '/blog/scottsdale-vs-myrtle-beach-golf-trip',
    title: 'Scottsdale vs Myrtle Beach',
    desc: 'The two most popular US bachelor destinations, compared honestly.',
  },
  {
    href: '/blog/pinehurst-vs-bandon-dunes-golf-trip',
    title: 'Pinehurst vs Bandon Dunes',
    desc: 'East Coast heritage against West Coast links.',
  },
  {
    href: '/blog/bandon-vs-pebble-vs-kiawah-golf-trip',
    title: 'Bandon vs Pebble vs Kiawah',
    desc: 'The three premium options, and which one suits your group.',
  },
  {
    href: '/blog/bandon-dunes-vs-scotland-golf-trip',
    title: 'Bandon Dunes vs Scotland',
    desc: 'Should you fly the Atlantic, or is Oregon close enough?',
  },
  {
    href: '/blog/algarve-vs-ireland-golf-trip',
    title: 'Algarve vs Ireland',
    desc: 'Sun against craic, both cheaper than Scotland.',
  },
  {
    href: '/blog/myrtle-beach-vs-kiawah-island-golf-trip',
    title: 'Myrtle Beach vs Kiawah Island',
    desc: 'Two South Carolina neighbours with very different trips.',
  },
]

const SEASONAL = [
  { href: '/blog/best-golf-destinations-march', title: 'Best golf destinations in March' },
  { href: '/blog/best-golf-destinations-october', title: 'Best golf destinations in October' },
  { href: '/blog/best-golf-destinations-november', title: 'Best golf destinations in November' },
  { href: '/blog/best-golf-destinations-december', title: 'Best golf destinations in December' },
]

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, itemListSchema]) }}
      />
      <Navbar />
      <main className="page-shell pt-32 pb-16">
        <p className="eyebrow">Destinations</p>
        <h1 className="mt-3 text-5xl font-display font-light italic leading-tight text-foreground sm:text-6xl">
          Where to take the group
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          Ten destination guides, each with the courses worth playing, what the weekend actually
          costs, and a real plan for anyone in the group who is not playing. Every guide is written
          for the person doing the organising.
        </p>

        <div className="mt-16 space-y-16">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">United States</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {US_DESTINATIONS.map((destination) => (
                <DestinationCard key={destination.href} destination={destination} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Europe</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {INTERNATIONAL_DESTINATIONS.map((destination) => (
                <DestinationCard key={destination.href} destination={destination} />
              ))}
            </div>
          </section>

          <section>
            <p className="eyebrow">Still deciding</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Head-to-head comparisons
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              Most groups are choosing between two places rather than ten. These compare them
              directly, on cost, courses, and what partners get out of the trip.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {COMPARISONS.map(({ href, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30"
                >
                  <p className="text-base font-semibold text-foreground">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <p className="eyebrow">Timing</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Going in a particular month?
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {SEASONAL.map(({ href, title }) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30"
                >
                  <p className="text-base font-semibold text-foreground">{title}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Picked one? Plan it in five minutes.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              5 questions, dual itinerary, one shareable link.
            </p>
            <div className="mt-6 flex justify-center">
              <Link className="primary-link" href="/plan">
                Start Planning
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-gold/30">
      <Link href={destination.href} className="group block">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-xl font-semibold text-foreground group-hover:text-gold transition-colors">
            {destination.name}
          </p>
          <span className="text-xs text-muted-foreground">{destination.region}</span>
        </div>
        <p className="mt-1 text-sm text-gold">{destination.tagline}</p>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{destination.description}</p>
      </Link>
      <Link
        href={destination.partnerGuide.href}
        className="mt-4 inline-block text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
      >
        {destination.partnerGuide.label} →
      </Link>
    </div>
  )
}
