import type { Metadata } from 'next'
import BagPolicyClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'

export const metadata: Metadata = {
  title: `Jerez MotoGP Bag Policy — What You Can Bring to Circuito de Jerez | GP Moto Pal`,
  description: `Bag rules and security checks at the MotoGP Grand Prix of Spain. Prohibited items, permitted items, what happens at the gate, and how to avoid getting items confiscated.`,
  alternates: { canonical: `${SITE_URL}/races/jerez/bag-policy` },
  openGraph: {
    title: `Jerez MotoGP Bag Policy — What You Can Bring | GP Moto Pal`,
    description: `What is and isn't allowed through security at Circuito de Jerez. Prohibited items, bag size limits, and gate tips.`,
    url: `${SITE_URL}/races/jerez/bag-policy`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Jerez MotoGP Bag Policy — What You Can Bring to Circuito de Jerez | GP Moto Pal`,
    description: `Bag rules and security checks at the MotoGP Grand Prix of Spain. Prohibited items, permitted items, what happens at the gate, and how to avoid getting items confiscated.`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I bring a bag into Jerez MotoGP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Small backpacks and tote bags that can be checked by security are permitted. All bags are inspected at the entrance. Oversized bags or bags that cannot be easily searched may be refused.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bring food and drink into Jerez MotoGP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non-alcoholic food and drinks up to 500g total are permitted. Plastic bottles are allowed but caps are confiscated at the gate — use a sport-top bottle. Glass containers, metal containers, and alcohol are prohibited.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I bring a prohibited item to Jerez MotoGP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Security will confiscate prohibited items. They will not be stored for collection — they are taken and not returned. There is no left-luggage facility at the gate. Leave prohibited items in your car or hotel.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <h1 className="sr-only">Bag Policy and Security at the MotoGP Grand Prix of Spain, Jerez</h1>
      <BagPolicyClient />
    </>
  )
}
