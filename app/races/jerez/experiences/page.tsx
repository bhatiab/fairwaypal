import type { Metadata } from 'next'
import ExperiencesClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'

export const metadata: Metadata = {
  title: `Things to Do at Jerez MotoGP — Experiences Beyond the Circuit | GP Moto Pal`,
  description: `Sherry bodega tours, flamenco shows, the Royal Andalusian School of Equestrian Art, and day trips from Jerez. Make the most of your MotoGP race trip to Andalusia.`,
  alternates: { canonical: `${SITE_URL}/races/jerez/experiences` },
  openGraph: {
    title: `Things to Do at Jerez MotoGP — Experiences Beyond the Circuit | GP Moto Pal`,
    description: `Sherry tours, flamenco, horses, and day trips to Cádiz. Everything to do around the MotoGP Grand Prix of Spain.`,
    url: `${SITE_URL}/races/jerez/experiences`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Things to Do at Jerez MotoGP — Experiences Beyond the Circuit | GP Moto Pal`,
    description: `Sherry bodega tours, flamenco shows, the Royal Andalusian School of Equestrian Art, and day trips from Jerez. Make the most of your MotoGP race trip to Andalusia.`,
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">Experiences and Things to Do Around the MotoGP Grand Prix of Spain at Jerez</h1>
      <ExperiencesClient />
    </>
  )
}
