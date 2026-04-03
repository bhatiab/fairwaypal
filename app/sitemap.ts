import type { MetadataRoute } from 'next'
import { raceGuides } from '../src/data/races2026'
import { racesWithCosts } from '../src/data/raceCosts2026'
import { CURATED_COMPARISONS, canonicalMatchup } from '../src/lib/compareUtils'

const BASE_URL = 'https://gpmotopal.com'
const NOW = new Date()

const STATIC_PAGES = [
  '/about',
  '/first-time',
  '/cheapest-races',
] as const

const TOOLS_PAGES = [
  '/tools/timezone-converter',
] as const

const FIRST_TIME_SLUGS = ['mugello', 'silverstone', 'assen', 'catalunya'] as const

export default function sitemap(): MetadataRoute.Sitemap {

  const homepage: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: NOW, changeFrequency: 'daily', priority: 1.0 },
  ]

  const calendarPage: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/calendar`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
  ]

  const raceHubs: MetadataRoute.Sitemap = raceGuides.map((race) => ({
    url: `${BASE_URL}/races/${race.slug}`,
    lastModified: NOW,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const costPages: MetadataRoute.Sitemap = racesWithCosts().map((slug) => ({
    url: `${BASE_URL}/races/${slug}/costs`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const comparePages: MetadataRoute.Sitemap = CURATED_COMPARISONS.map(([a, b]) => ({
    url: `${BASE_URL}/compare/${canonicalMatchup(a, b)}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const firstTimePages: MetadataRoute.Sitemap = FIRST_TIME_SLUGS.map((slug) => ({
    url: `${BASE_URL}/first-time/${slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const toolsPages: MetadataRoute.Sitemap = TOOLS_PAGES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const staticPages: MetadataRoute.Sitemap = STATIC_PAGES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [
    ...homepage,
    ...calendarPage,
    ...raceHubs,
    ...costPages,
    ...firstTimePages,
    ...comparePages,
    ...toolsPages,
    ...staticPages,
  ]
}
