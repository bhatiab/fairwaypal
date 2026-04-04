import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About FairwayPal',
  description: 'How FairwayPal approaches golf-trip planning for organisers, golfers, and partners.',
  alternates: { canonical: 'https://fairwaypal.com/about' },
  openGraph: {
    title: 'About FairwayPal',
    description: 'How FairwayPal approaches golf-trip planning for organisers, golfers, and partners.',
    url: 'https://fairwaypal.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About FairwayPal',
    description: 'How FairwayPal approaches golf-trip planning for organisers, golfers, and partners.',
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fairwaypal.com/" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://fairwaypal.com/about" }
  ]
}

const About = () => {
  return (
      <div className="min-h-screen bg-background text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <Navbar />
        <main className="max-w-3xl mx-auto px-5 pt-28 pb-16">
          <section className="mb-14">
            <h1
              className="text-3xl md:text-4xl font-light italic tracking-wide mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FairwayPal is built for the person who always ends up planning the golf trip.
            </h1>
            <p className="text-foreground/70 text-base leading-relaxed max-w-2xl">
              The product focuses on one practical job: turn a messy golf-weekend conversation into a plan people can react to quickly, including the part of the trip that matters to non-golfing partners.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-lg font-semibold mb-3 text-foreground/90" style={{ fontFamily: "var(--font-display)" }}>
              What the product is trying to solve
            </h2>
            <div className="space-y-3 text-sm text-foreground/70 leading-relaxed">
              <p>
                Most group golf trips break down in the same place: one organiser carries the logistics, the group reacts late, and partner plans get treated as an afterthought.
              </p>
              <p>
                FairwayPal is meant to reduce that admin load by structuring the trip early, showing golf and partner plans side by side, and making review simpler before anyone starts booking.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-lg font-semibold mb-3 text-foreground/90" style={{ fontFamily: "var(--font-display)" }}>
              What is live right now
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-foreground/70 leading-relaxed">
              <li>A public landing page that explains the product promise clearly</li>
              <li>A five-step planning flow for destination, dates, group size, budget, and vibe</li>
              <li>Metadata routes and deployment wiring for a production Next.js app</li>
              <li>Reusable affiliate surfaces that can later support hotels, flights, and partner activities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-lg font-semibold mb-3 text-foreground/90" style={{ fontFamily: "var(--font-display)" }}>
              What comes next
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-foreground/70 leading-relaxed">
              <li>Generate a real itinerary from the planner input instead of ending at a structured brief</li>
              <li>Persist trips so organisers can return, share, and revise</li>
              <li>Add voting, comments, and conflict resolution for the group</li>
              <li>Layer in live partner and booking recommendations once destination data is ready</li>
            </ul>
          </section>

          <section className="mb-12">
            <p className="text-xs text-foreground/40 leading-relaxed">
              The current site is the first public product surface, not a generic starter. It explains the offer, captures the planning inputs, and sets up the next stage of itinerary generation.
            </p>
          </section>

          <section>
            <p className="text-sm text-foreground/70 leading-relaxed">
              FairwayPal is being shaped as a practical planning layer first. The point is not to publish generic travel content; the point is to help a real organiser get a group aligned faster.
            </p>
          </section>
        </main>
        <Footer />
      </div>
  )
}

export default About
