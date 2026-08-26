import routesJson from './routes.json'

/**
 * The canonical list of indexable routes, and the single source of truth for
 * anything that enumerates the site: app/sitemap.ts, lib/indexnow.ts, and
 * scripts/ping-indexnow.mjs all read from here.
 *
 * The list lives in routes.json rather than in this file so the Node scripts can
 * read it without a TypeScript loader. Add a route here when you add a page;
 * src/test/routes.test.ts fails the build if this drifts from the pages that
 * actually exist under app/.
 *
 * Excludes /trip/[id] and its children on purpose: those are per-trip dynamic
 * pages and must not be submitted to search engines.
 */
export const STATIC_ROUTES: readonly string[] = routesJson

export const SITE_URL = 'https://www.fairwaypal.com'

/**
 * Route path to canonical absolute URL. The homepage is emitted without a
 * trailing slash so the sitemap, the IndexNow payload and the page's own
 * <link rel="canonical"> all agree on one spelling.
 */
export function absoluteUrl(path: string): string {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`
}
