import { CONTENT_DATES } from './content-dates'
import { absoluteUrl } from './routes'

/** One course card on a destination guide. The same array renders the cards and the JSON-LD. */
export type Course = {
  name: string
  detail: string
  price: string
  tier: string
  link: string
}

/**
 * Extra JSON-LD for a destination guide: a WebPage carrying the same
 * dateModified as the visible "Updated" date and the sitemap <lastmod>, and an
 * ItemList of the GolfCourses shown on the page, in on-page order.
 */
export function destinationPageSchemas(path: string, placeName: string, courses: readonly Course[]) {
  const url = absoluteUrl(path)
  const dateModified = CONTENT_DATES[path]

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    url,
    name: `${placeName} golf trip guide`,
    ...(dateModified ? { dateModified } : {}),
    isPartOf: { '@type': 'WebSite', name: 'FairwayPal', url: absoluteUrl('/') },
    publisher: { '@type': 'Organization', name: 'FairwayPal', url: absoluteUrl('/') },
  }

  const courseList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Best golf courses for a group trip to ${placeName}`,
    numberOfItems: courses.length,
    itemListElement: courses.map((course, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'GolfCourse',
        name: course.name,
        description: course.detail,
        priceRange: course.price,
      },
    })),
  }

  return [webPage, courseList]
}
