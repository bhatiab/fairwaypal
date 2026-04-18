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
  '/blog',
  '/blog/golf-trip-with-non-golfers',
  '/blog/best-bachelor-party-golf-destinations',
  '/blog/golf-trip-budget',
  '/blog/what-to-do-on-golf-trip-non-golfer',
  '/blog/golf-trip-packing-list',
  '/blog/scottsdale-vs-myrtle-beach-golf-trip',
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
          : path.startsWith('/blog/') && path !== '/blog'
            ? 0.7
            : path === '/blog'
              ? 0.5
              : 0.6,
  }))

  return staticPages
}
