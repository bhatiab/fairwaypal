import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import GettingThereClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('mugello')!

export const metadata: Metadata = {
  title: `Getting to Mugello MotoGP — Transport, Parking & Shuttle Guide | GP Moto Pal`,
  description: `How to get to Autodromo del Mugello for MotoGP. Shuttle from Florence, driving from the A1, parking, and post-race exit strategy.`,
  alternates: { canonical: `${SITE_URL}/races/mugello/getting-there` },
  openGraph: {
    title: `Getting to Mugello MotoGP — Transport, Parking & Shuttle Guide | GP Moto Pal`,
    description: `Shuttle from Florence, driving, parking, and how to leave Mugello without sitting in traffic for 3 hours.`,
    url: `${SITE_URL}/races/mugello/getting-there`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Getting to Mugello MotoGP — Transport, Parking & Shuttle Guide | GP Moto Pal`,
    description: `Shuttle from Florence, driving, parking, and how to leave Mugello without sitting in traffic for 3 hours.`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get to Mugello MotoGP from Florence?',
      acceptedAnswer: { '@type': 'Answer', text: 'Official shuttle buses run from Florence to the circuit on race days. By car, take the A1 motorway north and exit at Barberino di Mugello, then follow signs to the circuit (~30 km, 40-60 minutes depending on traffic).' },
    },
    {
      '@type': 'Question',
      name: 'Which airport is closest to Mugello circuit?',
      acceptedAnswer: { '@type': 'Answer', text: 'Florence Airport (FLR) is the closest at approximately 40 km. Bologna Airport (BLQ) at ~100 km has more international connections. Pisa Airport (PSA) at ~130 km is another option with budget airline routes.' },
    },
    {
      '@type': 'Question',
      name: 'Is parking available at Mugello MotoGP?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, there are multiple parking areas around the circuit. Prices vary by proximity to the entrance. Post-race traffic leaving the circuit can take 2-3 hours — consider camping or waiting out the rush.' },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <h1 className="sr-only">Getting to the MotoGP Grand Prix of Italy at Mugello</h1>
      <GettingThereClient />
    </>
  )
}
