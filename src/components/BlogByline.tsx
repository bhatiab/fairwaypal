/* eslint-disable react/no-unescaped-entities */
const BlogByline = ({ lastUpdated }: { lastUpdated: string }) => (
  <div className="mt-3 mb-8 flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-border pb-6">
    <p className="text-sm text-ink-2">
      By the{' '}
      <span className="text-ink">FairwayPal Team</span>
      {' '}— built by golfers who've organised too many trips across too many WhatsApp threads.
    </p>
    <p className="text-xs text-ink-muted">Last updated: {lastUpdated}</p>
  </div>
)

export default BlogByline
