import type { MetadataRoute } from 'next'

const BASE_URL = 'https://fairwaypal.com'
const NOW = new Date()

const STATIC_PAGES = ['/', '/plan', '/about', '/affiliate-disclosure', '/destinations/scottsdale'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = STATIC_PAGES.map((path) => ({
    url: path === '/' ? BASE_URL : `${BASE_URL}${path}`,
    lastModified: NOW,
    changeFrequency: path === '/' || path === '/plan' ? 'weekly' as const : 'monthly' as const,
    priority: path === '/' ? 1 : path === '/plan' ? 0.9 : 0.6,
  }))

  return staticPages
}
