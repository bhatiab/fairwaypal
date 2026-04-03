import type { Metadata } from 'next'
import { raceGuides, getRaceBySlug } from '../../../src/data/races2026'
import { getFaqsForRace } from '../../../src/data/raceFaqs'
import RacePageClient from './_client'
import Navbar from '../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'

const COUNTRY_CODES: Record<string, string> = {
  'Thailand': 'TH', 'Brazil': 'BR', 'USA': 'US', 'Spain': 'ES',
  'France': 'FR', 'Italy': 'IT', 'Hungary': 'HU', 'Czech Republic': 'CZ',
  'Netherlands': 'NL', 'Germany': 'DE', 'Great Britain': 'GB',
  'San Marino': 'SM', 'Austria': 'AT', 'Japan': 'JP', 'Indonesia': 'ID',
  'Australia': 'AU', 'Malaysia': 'MY', 'Qatar': 'QA', 'Portugal': 'PT',
}

export function generateStaticParams() {
  return raceGuides.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const race = getRaceBySlug(params.slug)

  if (!race) {
    return {
      title: 'MotoGP Race Guide | GP Moto Pal',
      description: 'Fan travel guide for the MotoGP season.',
    }
  }

  const title = `${race.name} at ${race.circuit} — Fan Travel Guide | GP Moto Pal`
  const description = `Planning to attend the ${race.name}? Here's everything you need — getting there, what to pack, and first-timer tips for ${race.city}.`
  const url = `${SITE_URL}/races/${race.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

function buildEventSchema(slug: string) {
  const race = getRaceBySlug(slug)
  if (!race) return null

  const pageUrl = `${SITE_URL}/races/${race.slug}`
  const countryCode = COUNTRY_CODES[race.country] ?? race.country

  const weekendStart = new Date(race.startDate.getTime() - 2 * 24 * 60 * 60 * 1000)

  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: race.name,
    description: `The ${race.name} at ${race.circuit}, ${race.city}.`,
    startDate: weekendStart.toISOString(),
    endDate: race.startDate.toISOString(),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: race.circuit,
      address: {
        '@type': 'PostalAddress',
        addressLocality: race.city,
        addressCountry: countryCode,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Dorna Sports',
      url: 'https://www.motogp.com',
    },
    sport: 'MotoGP',
    url: pageUrl,
  }
}

function buildFaqSchema(slug: string) {
  const faqs = getFaqsForRace(slug)
  if (faqs.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const race = getRaceBySlug(params.slug)
  const eventSchema = buildEventSchema(params.slug)
  const faqSchema = buildFaqSchema(params.slug)

  return (
    <>
      {eventSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Navbar />
      {race && (
        <h1 className="sr-only">{race.name} — MotoGP Race Travel Guide</h1>
      )}
      <RacePageClient />
    </>
  )
}
