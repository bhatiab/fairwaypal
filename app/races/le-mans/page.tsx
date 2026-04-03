import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../src/data/races2026'
import { getFaqsForRace } from '../../../src/data/raceFaqs'
import LeMansClient from './_client'
import Navbar from '../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('le-mans')!

export const metadata: Metadata = {
  title: `${race.name} at ${race.circuit} — Fan Travel Guide | GP Moto Pal`,
  description: `Planning to attend the MotoGP French Grand Prix at Le Mans? Train from Paris, tram to circuit, camping, packing for rain, and first-timer tips for the Bugatti Circuit.`,
  alternates: { canonical: `${SITE_URL}/races/le-mans` },
  openGraph: {
    title: `${race.name} at ${race.circuit} — Fan Travel Guide | GP Moto Pal`,
    description: `Transport from Paris, camping, packing for rain, and first-timer tips for the MotoGP French GP at Le Mans.`,
    url: `${SITE_URL}/races/le-mans`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${race.name} at ${race.circuit} — Fan Travel Guide | GP Moto Pal`,
    description: `Transport from Paris, camping, packing for rain, and first-timer tips for the MotoGP French GP at Le Mans.`,
  },
}

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  name: race.name,
  description: `The ${race.name} at ${race.circuit}, ${race.city}.`,
  startDate: new Date(race.startDate.getTime() - 2 * 86400000).toISOString(),
  endDate: race.startDate.toISOString(),
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: race.circuit,
    address: { '@type': 'PostalAddress', addressLocality: 'Le Mans', addressCountry: 'FR' },
    geo: { '@type': 'GeoCoordinates', latitude: 47.9567, longitude: 0.2072 },
  },
  organizer: { '@type': 'Organization', name: 'Dorna Sports', url: 'https://www.motogp.com' },
  sport: 'MotoGP',
  url: `${SITE_URL}/races/le-mans`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: getFaqsForRace('le-mans').map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <h1 className="sr-only">{race.name} — MotoGP Race Travel Guide</h1>
      <LeMansClient />
    </>
  )
}
