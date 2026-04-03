import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import GettingThereClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('catalunya')!

export const metadata: Metadata = {
  title: `Getting to the Catalunya MotoGP — Transport from Barcelona Guide | GP Moto Pal`,
  description: `How to get to Circuit de Barcelona-Catalunya for MotoGP. R2 train from Sants, Sagalès bus from Barcelona, parking options, and how to leave without getting stuck.`,
  alternates: { canonical: `${SITE_URL}/races/catalunya/getting-there` },
  openGraph: {
    title: `Getting to the Catalunya MotoGP — Transport from Barcelona | GP Moto Pal`,
    description: `Train, bus, car, and taxi options to reach Circuit de Barcelona-Catalunya for MotoGP race weekend.`,
    url: `${SITE_URL}/races/catalunya/getting-there`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Getting to the Catalunya MotoGP — Transport from Barcelona | GP Moto Pal`,
    description: `Train, bus, car, and taxi options to reach Circuit de Barcelona-Catalunya for MotoGP race weekend.`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cheapest way to get to Circuit de Barcelona-Catalunya for MotoGP?',
      acceptedAnswer: { '@type': 'Answer', text: 'The R2/R2N commuter train from Barcelona Sants to Montmeló station costs €2.80 each way and takes about 30 minutes. Free shuttle buses run between Montmeló station and the circuit entrance on race weekend.' },
    },
    {
      '@type': 'Question',
      name: 'Can I get to the Barcelona MotoGP directly from the airport?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The R2N line runs directly from Barcelona El Prat Airport (T1 and T2) to Montmeló, though the journey takes around 50 minutes with the airport stop. Alternatively, take any airport transfer to Barcelona city and pick up the faster direct R2 from Sants.' },
    },
    {
      '@type': 'Question',
      name: 'Is there parking at Circuit de Catalunya for MotoGP?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, but pre-book online. On-the-day parking costs more and fills quickly. Post-race exit from car parks can take 1-2 hours — train is significantly faster for leaving.' },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <h1 className="sr-only">Getting to the MotoGP Grand Prix of Catalunya at Circuit de Barcelona-Catalunya</h1>
      <GettingThereClient />
    </>
  )
}
