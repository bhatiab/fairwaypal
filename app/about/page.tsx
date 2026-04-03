import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About GP Moto Pal',
  description: 'GP Moto Pal is an independent MotoGP race companion built from real fan experience — practical transport, packing, and first-timer guides for every round.',
  alternates: { canonical: 'https://gpmotopal.com/about' },
  openGraph: {
    title: 'About GP Moto Pal',
    description: 'Independent MotoGP race companion built from real fan experience.',
    url: 'https://gpmotopal.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About GP Moto Pal',
    description: 'Independent MotoGP race companion built from real fan experience.',
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gpmotopal.com/" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://gpmotopal.com/about" }
  ]
}

const About = () => {
  return (
          <div className="min-h-screen bg-background text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <Navbar />
        <main className="max-w-3xl mx-auto px-5 pt-28 pb-16">
          {/* Hero */}
          <section className="mb-14">
            <h1
              className="text-3xl md:text-4xl font-bold tracking-wide mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built for Fans Who Want Context, Not Noise.
            </h1>
            <p className="text-foreground/70 text-base leading-relaxed max-w-2xl">
              GP Moto Pal is an independent MotoGP race companion designed to help fans navigate each race weekend with clarity.
            </p>
          </section>

          {/* Why It Exists */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold mb-3 text-foreground/90" style={{ fontFamily: "var(--font-display)" }}>
              Why It Exists
            </h2>
            <div className="space-y-3 text-sm text-foreground/70 leading-relaxed">
              <p>
                MotoGP coverage is fragmented. Race schedules, fan experiences, track context, and planning information are scattered across dozens of sources — most of them cluttered with ads or paywalled.
              </p>
              <p>
                GP Moto Pal brings structured, practical race-week information together in one place, so fans can spend less time searching and more time enjoying the racing.
              </p>
            </div>
          </section>

          {/* What You'll Find Here */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold mb-3 text-foreground/90" style={{ fontFamily: "var(--font-display)" }}>
              What You'll Find Here
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-foreground/70 leading-relaxed">
              <li>Race countdowns and session timing</li>
              <li>Track-specific context</li>
              <li>Curated fan experiences</li>
              <li>Practical race-week essentials</li>
              <li>Planning guidance for race cities</li>
            </ul>
          </section>

          {/* Independence & Transparency */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold mb-3 text-foreground/90" style={{ fontFamily: "var(--font-display)" }}>
              Independence & Transparency
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-foreground/70 leading-relaxed">
              <li>Not affiliated with MotoGP™ or Dorna Sports.</li>
              <li>Independently operated.</li>
              <li>Some links may earn a commission at no extra cost to users.</li>
              <li>Affiliate partnerships do not dictate recommendations.</li>
            </ul>
          </section>

          {/* Trademark Notice */}
          <section className="mb-12">
            <p className="text-xs text-foreground/40 leading-relaxed">
              MotoGP™ and related marks are trademarks of Dorna Sports. GP Moto Pal is not affiliated with or endorsed by Dorna Sports.
            </p>
          </section>

          {/* Closing */}
          <section>
            <p className="text-sm text-foreground/70 leading-relaxed">
              GP Moto Pal is built to grow with the season. As the calendar evolves, so will this site. Feedback is always welcome — if something is missing or could be better, get in touch.
            </p>
          </section>
        </main>
        <Footer />
      </div>
  )
}

export default About
