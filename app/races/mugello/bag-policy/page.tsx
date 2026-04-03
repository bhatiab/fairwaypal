import type { Metadata } from 'next'
import BagPolicyClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'

export const metadata: Metadata = {
  title: `Mugello MotoGP Bag Policy — What You Can Bring to Autodromo del Mugello | GP Moto Pal`,
  description: `Bag rules and security checks at the MotoGP Grand Prix of Italy. Prohibited items, permitted items, what happens at the gate, and how to avoid getting items confiscated.`,
  alternates: { canonical: `${SITE_URL}/races/mugello/bag-policy` },
  openGraph: {
    title: `Mugello MotoGP Bag Policy — What You Can Bring | GP Moto Pal`,
    description: `What is and isn't allowed through security at Autodromo del Mugello. Prohibited items, bag rules, and gate tips.`,
    url: `${SITE_URL}/races/mugello/bag-policy`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Mugello MotoGP Bag Policy — What You Can Bring to Autodromo del Mugello | GP Moto Pal`,
    description: `Bag rules and security checks at the MotoGP Grand Prix of Italy. Prohibited items, permitted items, what happens at the gate, and how to avoid getting items confiscated.`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I bring a bag into Mugello MotoGP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Small backpacks and bags that can be checked by security are permitted. All bags are inspected at the entrance. Oversized bags or those that cannot be easily searched may be refused.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bring food and drink into Mugello MotoGP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Food and non-alcoholic drinks for personal consumption are generally permitted in reasonable quantities. Glass containers and alcohol are prohibited inside the circuit. Check the official Mugello circuit website for the latest details.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I bring a prohibited item to Mugello MotoGP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Security will confiscate prohibited items at the gate. Items are generally not stored for collection — they are taken and not returned. Leave prohibited items at your accommodation, car, or campsite before entering the circuit.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <h1 className="sr-only">Bag Policy and Security at the MotoGP Grand Prix of Italy, Mugello</h1>
      <BagPolicyClient />
    </>
  )
}
