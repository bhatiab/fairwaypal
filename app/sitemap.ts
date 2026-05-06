import type { MetadataRoute } from 'next'

const BASE_URL = 'https://fairwaypal.com'
const NOW = new Date()

const STATIC_PAGES = [
  '/',
  '/plan',
  '/about',
  '/status',
  '/affiliate-disclosure',
  '/destinations/scottsdale',
  '/destinations/myrtle-beach',
  '/destinations/bandon-dunes',
  '/destinations/pinehurst',
  '/destinations/scotland',
  '/destinations/ireland',
  '/destinations/pebble-beach',
  '/destinations/kiawah-island',
  '/destinations/florida-golf',
  '/destinations/algarve',
  '/blog',
  '/blog/golf-trip-with-non-golfers',
  '/blog/best-bachelor-party-golf-destinations',
  '/blog/golf-trip-budget',
  '/blog/what-to-do-on-golf-trip-non-golfer',
  '/blog/golf-trip-packing-list',
  '/blog/scottsdale-vs-myrtle-beach-golf-trip',
  '/blog/how-to-plan-a-golf-trip',
  '/blog/ireland-vs-scotland-golf-trip',
  '/blog/pebble-beach-golf-trip',
  '/blog/kiawah-island-golf-trip',
  '/blog/golf-trip-group-size',
  '/blog/golf-trip-weekend-schedule',
  '/blog/pinehurst-vs-kiawah-island-golf-trip',
  '/blog/bandon-dunes-vs-pebble-beach-golf-trip',
  '/blog/algarve-vs-scotland-golf-trip',
  '/blog/how-to-split-costs-golf-trip',
  '/blog/bandon-dunes-for-non-golfers',
  '/blog/pebble-beach-for-non-golfers',
  '/blog/algarve-for-non-golfers',
  '/blog/pinehurst-for-non-golfers',
  '/blog/scotland-for-non-golfers',
  '/blog/pinehurst-vs-pebble-beach-golf-trip',
  '/blog/golf-trip-tipping-guide',
  '/blog/best-golf-trip-apps',
  '/blog/kiawah-island-for-non-golfers',
  '/blog/scottsdale-for-non-golfers',
  '/blog/pinehurst-vs-bandon-dunes-golf-trip',
  '/blog/shipping-clubs-vs-flying-with-clubs',
  '/blog/why-your-group-keeps-cancelling-golf-trip',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = STATIC_PAGES.map((path) => ({
    url: path === '/' ? BASE_URL : `${BASE_URL}${path}`,
    lastModified: NOW,
    changeFrequency: path === '/' || path === '/plan' ? 'weekly' as const : 'monthly' as const,
    priority:
      path === '/'
        ? 1
        : path === '/plan'
          ? 0.9
          : path.startsWith('/destinations/')
            ? 0.8
            : path.startsWith('/blog/') && path !== '/blog'
              ? 0.7
              : path === '/blog'
                ? 0.6
                : 0.5,
  }))

  return staticPages
}
