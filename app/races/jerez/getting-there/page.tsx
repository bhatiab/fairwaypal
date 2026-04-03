import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import GettingThereClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('jerez')!

export const metadata: Metadata = {
  title: `Getting to Jerez MotoGP — Transport, Parking & Shuttle Guide | GP Moto Pal`,
  description: `How to get to Circuito de Jerez for MotoGP. Shuttle bus from Minotauro, train from Seville, parking tiers, and post-race exit strategy.`,
  alternates: { canonical: `${SITE_URL}/races/jerez/getting-there` },
  openGraph: {
    title: `Getting to Jerez MotoGP — Transport, Parking & Shuttle Guide | GP Moto Pal`,
    description: `Shuttle bus, train from Seville, parking, and how to leave Circuito de Jerez without chaos.`,
    url: `${SITE_URL}/races/jerez/getting-there`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Getting to Jerez MotoGP — Transport, Parking & Shuttle Guide | GP Moto Pal`,
    description: `Shuttle bus, train from Seville, parking, and how to leave Circuito de Jerez without chaos.`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get to the Jerez MotoGP circuit from the city?',
      acceptedAnswer: { '@type': 'Answer', text: 'The shuttle bus from the Minotauro roundabout in Jerez runs every 7 minutes at peak times, costs €1.10, and takes about 30 minutes. Alternatively, the P4 public bus stops at Torremelgarejo near the main entrance.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Jerez from Seville?',
      acceptedAnswer: { '@type': 'Answer', text: 'Renfe trains run from Seville Santa Justa to Jerez de la Frontera station approximately 12 times per day. The journey takes about 1 hour and costs €11-16 each way.' },
    },
    {
      '@type': 'Question',
      name: 'Is parking free at Jerez MotoGP?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — car parks A, C, and D are free but require a shuttle to the entrance. Premium parking (lots B and A-10) costs €22 on the day or €12 if pre-booked, and is within walking distance of the gates.' },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <h1 className="sr-only">Getting to the MotoGP Grand Prix of Spain at Jerez</h1>
      <GettingThereClient />
    </>
  )
}
