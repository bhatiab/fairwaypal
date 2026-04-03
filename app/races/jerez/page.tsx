import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../src/data/races2026'
import { getFaqsForRace } from '../../../src/data/raceFaqs'
import JerezClient from './_client'
import Navbar from '../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('jerez')!

export const metadata: Metadata = {
  title: `${race.name} at ${race.circuit} — Fan Travel Guide | GP Moto Pal`,
  description: `Planning to attend the MotoGP Spanish Grand Prix at Jerez? Transport from Seville, parking, packing, and first-timer tips for Circuito de Jerez.`,
  alternates: { canonical: `${SITE_URL}/races/jerez` },
  openGraph: {
    title: `${race.name} at ${race.circuit} — Fan Travel Guide | GP Moto Pal`,
    description: `Transport, packing, and first-timer tips for the MotoGP Grand Prix of Spain at Jerez.`,
    url: `${SITE_URL}/races/jerez`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${race.name} at ${race.circuit} — Fan Travel Guide | GP Moto Pal`,
    description: `Transport, packing, and first-timer tips for the MotoGP Grand Prix of Spain at Jerez.`,
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
    address: { '@type': 'PostalAddress', addressLocality: 'Jerez de la Frontera', addressCountry: 'ES' },
    geo: { '@type': 'GeoCoordinates', latitude: 36.7083, longitude: -6.0342 },
  },
  organizer: { '@type': 'Organization', name: 'Dorna Sports', url: 'https://www.motogp.com' },
  sport: 'MotoGP',
  url: `${SITE_URL}/races/jerez`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: getFaqsForRace('jerez').map((faq) => ({
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
      <JerezClient />
    </>
  )
}
