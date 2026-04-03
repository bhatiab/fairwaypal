import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import GettingThereClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('le-mans')!

export const metadata: Metadata = {
  title: `Getting to Le Mans MotoGP — Train from Paris, Tram & Parking Guide | GP Moto Pal`,
  description: `How to get to the Bugatti Circuit for MotoGP. Direct TGV from Paris CDG, tram T1 to the circuit, parking options, and post-race exit strategy.`,
  alternates: { canonical: `${SITE_URL}/races/le-mans/getting-there` },
  openGraph: {
    title: `Getting to Le Mans MotoGP — Train from Paris, Tram & Parking Guide | GP Moto Pal`,
    description: `TGV from Paris, tram T1 to the circuit, parking, and how to leave the Bugatti Circuit without chaos.`,
    url: `${SITE_URL}/races/le-mans/getting-there`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Getting to Le Mans MotoGP — Train from Paris, Tram & Parking Guide | GP Moto Pal`,
    description: `TGV from Paris, tram T1 to the circuit, parking, and how to leave the Bugatti Circuit without chaos.`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get from Paris to Le Mans for MotoGP?',
      acceptedAnswer: { '@type': 'Answer', text: 'The fastest option is TGV from Paris Montparnasse to Le Mans — about 55 minutes. From Paris CDG airport, a direct TGV stops at Terminal 2 and takes about 1 hour 45 minutes with no Paris city transit needed. Book on SNCF Connect or Trainline in advance — race weekend trains sell out.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get from Le Mans city centre to the Bugatti Circuit?',
      acceptedAnswer: { '@type': 'Answer', text: 'Tram T1 runs from the Gares stop (next to Le Mans train station) to Antarès-Stade Marie Marvingt, near the circuit entrance. Journey is about 20 minutes. On race days it runs from 5:30 AM. Do not drive on Sunday — road congestion near the circuit is severe and post-race exit can take 2 hours.' },
    },
    {
      '@type': 'Question',
      name: 'Is parking free at Le Mans MotoGP?',
      acceptedAnswer: { '@type': 'Answer', text: 'Car parks around the circuit are available and some are included with certain ticket packages. Premium parking (P3C inside the circuit) must be pre-booked via the official ticketing site. Post-race gridlock from car parks can last 2 hours on Sunday — the tram is strongly recommended.' },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <h1 className="sr-only">Getting to the MotoGP Grand Prix of France at Le Mans</h1>
      <GettingThereClient />
    </>
  )
}
