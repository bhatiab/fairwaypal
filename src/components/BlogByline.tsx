/* eslint-disable react/no-unescaped-entities */

/**
 * "Updated <date>" is driven by the page's own Article JSON-LD `dateModified`,
 * the same value scripts/generate-content-dates.mjs reads for the sitemap
 * <lastmod>. One date, three places (visible byline, schema, sitemap), so they
 * can never disagree. Bump `dateModified` only for a real content change.
 */
export function formatContentDate(isoDate: string): string {
  // Parse as UTC so the rendered day never shifts with the server's timezone.
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

const BlogByline = ({ dateModified }: { dateModified: string }) => (
  <div className="mt-3 mb-8 flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-border pb-6">
    <p className="text-sm text-ink-2">
      By the{' '}
      <span className="text-ink">FairwayPal Team</span>
      {' '}— built by golfers who've organised too many trips across too many WhatsApp threads.
    </p>
    <p className="text-xs text-ink-muted">
      Updated <time dateTime={dateModified}>{formatContentDate(dateModified)}</time>
    </p>
  </div>
)

export default BlogByline
