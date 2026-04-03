import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../src/data/races2026'
import { getFaqsForRace } from '../../../src/data/raceFaqs'
import CatalunyaClient from './_client'
import Navbar from '../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('catalunya')!

export const metadata: Metadata = {
  title: `${race.name} at ${race.circuit} — Fan Travel Guide | GP Moto Pal`,
  description: `Planning to attend the MotoGP Grand Prix of Catalunya at Barcelona? Transport from the city, parking, bag policy, packing tips, and first-timer advice for Circuit de Barcelona-Catalunya.`,
  alternates: { canonical: `${SITE_URL}/races/catalunya` },
  openGraph: {
    title: `${race.name} at ${race.circuit} — Fan Travel Guide | GP Moto Pal`,
    description: `Transport, packing, and first-timer tips for the MotoGP Grand Prix of Catalunya near Barcelona.`,
    url: `${SITE_URL}/races/catalunya`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${race.name} at ${race.circuit} — Fan Travel Guide | GP Moto Pal`,
    description: `Transport, packing, and first-timer tips for the MotoGP Grand Prix of Catalunya near Barcelona.`,
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
    address: { '@type': 'PostalAddress', addressLocality: 'Montmeló', addressCountry: 'ES' },
    geo: { '@type': 'GeoCoordinates', latitude: 41.5700, longitude: 2.2611 },
  },
  organizer: { '@type': 'Organization', name: 'Dorna Sports', url: 'https://www.motogp.com' },
  sport: 'MotoGP',
  url: `${SITE_URL}/races/catalunya`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: getFaqsForRace('catalunya').map((faq) => ({
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
      <CatalunyaClient />
    </>
  )
}
