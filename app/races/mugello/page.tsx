import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../src/data/races2026'
import MugelloClient from './_client'
import Navbar from '../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('mugello')!

export const metadata: Metadata = {
  title: `${race.name} at ${race.circuit} — Fan Travel Guide | GP Moto Pal`,
  description: `Planning to attend the MotoGP Grand Prix of Italy at Mugello? Transport from Florence, parking, packing, and first-timer tips for Autodromo del Mugello.`,
  alternates: { canonical: `${SITE_URL}/races/mugello` },
  openGraph: {
    title: `${race.name} at ${race.circuit} — Fan Travel Guide | GP Moto Pal`,
    description: `Transport, packing, and first-timer tips for the MotoGP Grand Prix of Italy at Mugello.`,
    url: `${SITE_URL}/races/mugello`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${race.name} at ${race.circuit} — Fan Travel Guide | GP Moto Pal`,
    description: `Transport, packing, and first-timer tips for the MotoGP Grand Prix of Italy at Mugello.`,
  },
}

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  name: race.name,
  description: `The ${race.name} at ${race.circuit}, Tuscany.`,
  startDate: new Date(race.startDate.getTime() - 2 * 86400000).toISOString(),
  endDate: race.startDate.toISOString(),
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: race.circuit,
    address: { '@type': 'PostalAddress', addressLocality: 'Scarperia e San Piero', addressCountry: 'IT' },
    geo: { '@type': 'GeoCoordinates', latitude: 43.9975, longitude: 11.3719 },
  },
  organizer: { '@type': 'Organization', name: 'Dorna Sports', url: 'https://www.motogp.com' },
  sport: 'MotoGP',
  url: `${SITE_URL}/races/mugello`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get to Mugello MotoGP circuit from Florence?',
      acceptedAnswer: { '@type': 'Answer', text: 'The circuit is about 30 km north of Florence. Official shuttle buses run from Florence on race days. By car, take the A1 motorway toward Bologna and exit at Barberino di Mugello. Expect heavy traffic and allow extra time on race day.' },
    },
    {
      '@type': 'Question',
      name: 'What can I bring into Mugello MotoGP?',
      acceptedAnswer: { '@type': 'Answer', text: 'Small backpacks, plastic water bottles, and food for personal consumption are generally permitted. Glass containers, alcohol, professional cameras with detachable lenses, and drones are prohibited. Check the official Mugello circuit website for the latest bag policy details.' },
    },
    {
      '@type': 'Question',
      name: 'What is the weather like at Mugello in late May?',
      acceptedAnswer: { '@type': 'Answer', text: 'Late May at Mugello averages 24-27°C during the day but the circuit sits at 257m elevation in the Tuscan hills, so mornings and evenings can be cooler (14-16°C). Rain is possible — pack layers and a rain jacket.' },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <h1 className="sr-only">{race.name} — MotoGP Race Travel Guide</h1>
      <MugelloClient />
    </>
  )
}
