import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'How FairwayPal may use affiliate links in future booking and activity recommendations.',
  alternates: { canonical: 'https://fairwaypal.com/affiliate-disclosure' },
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-3xl mx-auto px-5 pt-28 pb-16">
        <h1 className="text-3xl md:text-4xl font-light italic tracking-wide mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Affiliate Disclosure
        </h1>
        <div className="space-y-5 text-sm leading-7 text-muted-foreground">
          <p>
            FairwayPal may use affiliate links when it recommends flights, hotels, or partner activities through eligible booking partners. If a user books through one of those links, FairwayPal may earn a commission at no additional cost to the user.
          </p>
          <p>
            Any affiliate placement should be clearly labeled and should support the usefulness of the trip-planning flow rather than distort it. Recommendations should still be chosen because they fit the trip, not because they pay more.
          </p>
          <p>
            Current public pages may show preserved commercial components as part of the product surface, but affiliate usage will only matter when live destination-specific recommendations are actually available.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}