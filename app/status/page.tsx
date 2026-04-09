import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'

export const metadata: Metadata = {
  title: 'Status & Navigation — FairwayPal',
  description: 'Application status, feature inventory, and navigation map for FairwayPal.',
  alternates: { canonical: 'https://fairwaypal.com/status' },
}

type FeatureStatus = 'live' | 'beta' | 'planned'
type Feature = { name: string; status: FeatureStatus; description: string }

const FEATURES: Feature[] = [
  { name: 'Intake Wizard', status: 'live', description: '5-step trip creation flow (destination, dates, group, budget, vibe)' },
  { name: 'AI Itinerary Generation', status: 'live', description: 'Claude-powered dual itinerary with SSE streaming' },
  { name: 'Trip Split View', status: 'live', description: 'Golf + partner activities side by side, day by day' },
  { name: 'Voting (In/Out)', status: 'live', description: 'Participants vote on activities with optimistic UI' },
  { name: 'Comment Threads', status: 'live', description: 'Per-activity comment threads with participant avatars' },
  { name: 'Name Gate', status: 'live', description: 'Device-based participant identity (no login required)' },
  { name: 'Share Links', status: 'live', description: 'Web Share API with clipboard fallback' },
  { name: 'Organiser Dashboard', status: 'live', description: 'Participant tracker, conflict queue, nudge buttons' },
  { name: 'Nudge Mechanic', status: 'live', description: 'Pre-written WhatsApp messages for non-voters' },
  { name: 'Swap Flow', status: 'live', description: 'AI-generated alternative activities with constraint picker' },
  { name: 'Lock Trip', status: 'live', description: 'Organiser locks trip, auto-confirms activities' },
  { name: 'Confirmed Itinerary', status: 'live', description: 'Read-only view with booking status and countdown' },
  { name: 'Booking Status', status: 'live', description: 'Mark activities booked with confirmation number' },
  { name: 'Dynamic Budget', status: 'live', description: 'Per-person costs recalculate as activities change' },
  { name: 'Regenerate Trip', status: 'live', description: 'AI regenerates itinerary based on vote outcomes' },
  { name: 'ICS Calendar Export', status: 'live', description: 'Downloadable .ics file from confirmed trips' },
  { name: 'Push Notifications', status: 'live', description: 'Browser push for all-voted and activity updates' },
  { name: 'Destination Guides', status: 'live', description: 'SEO pages with affiliate links (GolfNow, GYG, Amazon)' },
  { name: 'Email Capture', status: 'live', description: 'Organiser email for daily trip summaries' },
  { name: 'Daily Email Cron', status: 'planned', description: 'Automated 7pm summary via Resend (needs API key)' },
  { name: 'All-Voted Trigger Email', status: 'planned', description: 'Instant email when last person votes (needs Resend)' },
]

type PageLink = { href: string; label: string; description: string; category: string }

const PAGES: PageLink[] = [
  // Core
  { href: '/', label: 'Home', description: 'Landing page with product overview', category: 'Core' },
  { href: '/plan', label: 'Plan Your Trip', description: '5-step intake wizard', category: 'Core' },
  { href: '/about', label: 'About', description: 'Product explanation and roadmap', category: 'Core' },
  { href: '/status', label: 'Status', description: 'This page — feature inventory and navigation', category: 'Core' },
  // Trip (dynamic)
  { href: '/trip/[id]', label: 'Trip View', description: 'Voting view with split itinerary (requires trip ID)', category: 'Trip' },
  { href: '/trip/[id]/confirmed', label: 'Confirmed View', description: 'Read-only locked itinerary (requires locked trip)', category: 'Trip' },
  // Destinations
  { href: '/destinations/scottsdale', label: 'Scottsdale, AZ', description: 'Golf trip guide with courses, partner activities, hotels', category: 'Destinations' },
  { href: '/destinations/myrtle-beach', label: 'Myrtle Beach, SC', description: 'Golf trip guide — Grand Strand courses and boardwalk', category: 'Destinations' },
  { href: '/destinations/bandon-dunes', label: 'Bandon Dunes, OR', description: 'Golf pilgrimage guide — links golf on the Oregon coast', category: 'Destinations' },
  { href: '/destinations/pinehurst', label: 'Pinehurst, NC', description: 'Golf trip guide — cradle of American golf', category: 'Destinations' },
  // Legal
  { href: '/affiliate-disclosure', label: 'Affiliate Disclosure', description: 'Affiliate transparency statement', category: 'Legal' },
]

const API_ROUTES = [
  { method: 'POST', path: '/api/generate', description: 'AI itinerary generation (SSE stream)' },
  { method: 'POST', path: '/api/vote', description: 'Cast or update a vote' },
  { method: 'DELETE', path: '/api/vote', description: 'Remove a vote' },
  { method: 'GET/POST', path: '/api/comments', description: 'List or add comments' },
  { method: 'POST', path: '/api/generate-alternatives', description: 'AI swap suggestions' },
  { method: 'POST', path: '/api/nudge', description: 'Generate WhatsApp nudge message' },
  { method: 'GET/POST', path: '/api/trip/[id]/participants', description: 'List or join trip participants' },
  { method: 'GET', path: '/api/trip/[id]/votes', description: 'Bulk fetch votes for a trip' },
  { method: 'PATCH', path: '/api/trip/[id]/activities', description: 'Update activity status (confirm/book/edit/cancel)' },
  { method: 'PATCH', path: '/api/trip/[id]/email', description: 'Save organiser email' },
  { method: 'POST', path: '/api/trip/[id]/lock', description: 'Lock trip and confirm activities' },
  { method: 'POST', path: '/api/trip/[id]/regenerate', description: 'Regenerate itinerary from votes' },
  { method: 'GET', path: '/api/trip/[id]/calendar', description: 'Download ICS calendar file' },
  { method: 'POST', path: '/api/push/subscribe', description: 'Store push subscription' },
  { method: 'DELETE', path: '/api/push/subscribe', description: 'Remove push subscription' },
  { method: 'POST', path: '/api/push/send', description: 'Send push notification' },
]

function statusColor(status: FeatureStatus): string {
  switch (status) {
    case 'live': return 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
    case 'beta': return 'border-amber-500/30 bg-amber-500/10 text-amber-400'
    case 'planned': return 'border-border bg-bg-3 text-ink-muted'
  }
}

export default function StatusPage() {
  const liveCount = FEATURES.filter((f) => f.status === 'live').length
  const totalCount = FEATURES.length
  const categories = [...new Set(PAGES.map((p) => p.category))]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">Application Status</p>
        <h1 className="mt-3 text-5xl font-display font-light italic leading-tight text-foreground sm:text-6xl">
          FairwayPal Status
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          {liveCount} of {totalCount} features live. Last updated April 2026.
        </p>

        <div className="mt-12 space-y-16">
          {/* -------------------------------------------------------- */}
          {/*  Page Navigation Map                                      */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-gold">Pages</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Site Navigation
            </h2>
            <div className="mt-6 space-y-8">
              {categories.map((cat) => (
                <div key={cat}>
                  <h3 className="text-sm font-medium uppercase tracking-[0.1em] text-ink-2">{cat}</h3>
                  <div className="mt-3 space-y-2">
                    {PAGES.filter((p) => p.category === cat).map((page) => {
                      const isDynamic = page.href.includes('[')
                      return (
                        <div
                          key={page.href}
                          className="flex items-center justify-between rounded-lg border border-border bg-bg-3/50 p-3"
                        >
                          <div>
                            {isDynamic ? (
                              <span className="text-sm font-medium text-ink">{page.label}</span>
                            ) : (
                              <Link href={page.href} className="text-sm font-medium text-ink hover:text-gold">
                                {page.label}
                              </Link>
                            )}
                            <p className="text-xs text-ink-muted">{page.description}</p>
                          </div>
                          <code className="shrink-0 rounded-sm bg-bg-2 px-2 py-1 text-xs text-ink-muted">
                            {page.href}
                          </code>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Feature Inventory                                        */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-gold">Features</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Feature Inventory
            </h2>
            <div className="mt-6 space-y-2">
              {FEATURES.map((f) => (
                <div
                  key={f.name}
                  className="flex items-center justify-between rounded-lg border border-border bg-bg-3/50 p-3"
                >
                  <div>
                    <p className="text-sm font-medium text-ink">{f.name}</p>
                    <p className="text-xs text-ink-muted">{f.description}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-sm border px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] ${statusColor(f.status)}`}
                  >
                    {f.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  API Routes                                               */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-gold">API</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              API Routes
            </h2>
            <div className="mt-6 space-y-2">
              {API_ROUTES.map((route) => (
                <div
                  key={`${route.method}-${route.path}`}
                  className="flex items-center justify-between rounded-lg border border-border bg-bg-3/50 p-3"
                >
                  <div className="flex items-center gap-3">
                    <code className="rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {route.method}
                    </code>
                    <code className="text-xs text-ink-2">{route.path}</code>
                  </div>
                  <p className="text-xs text-ink-muted">{route.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Tech Stack                                               */}
          {/* -------------------------------------------------------- */}
          <section>
            <p className="eyebrow text-gold">Stack</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Technology
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Frontend', value: 'Next.js 15 (App Router)' },
                { label: 'Styling', value: 'Tailwind CSS + shadcn/ui' },
                { label: 'Database', value: 'Supabase (Postgres)' },
                { label: 'AI', value: 'Claude Sonnet (Anthropic)' },
                { label: 'Deployment', value: 'Vercel' },
                { label: 'Fonts', value: 'Cormorant Garamond + Outfit' },
                { label: 'Icons', value: 'Lucide React' },
                { label: 'Validation', value: 'Zod' },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-bg-3/50 p-3">
                  <p className="text-xs uppercase tracking-[0.1em] text-ink-muted">{item.label}</p>
                  <p className="mt-1 text-sm text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
