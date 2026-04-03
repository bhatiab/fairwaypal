import type { Metadata } from 'next'
import ExperiencesClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'

export const metadata: Metadata = {
  title: `Things to Do at Mugello MotoGP — Experiences Beyond the Circuit | GP Moto Pal`,
  description: `Wine tours, Florence day trips, medieval villages, and Tuscan food experiences around the MotoGP Grand Prix of Italy. Make the most of your race trip to Tuscany.`,
  alternates: { canonical: `${SITE_URL}/races/mugello/experiences` },
  openGraph: {
    title: `Things to Do at Mugello MotoGP — Experiences Beyond the Circuit | GP Moto Pal`,
    description: `Wine tours, Florence, medieval Scarperia, and Tuscan countryside. Everything to do around the MotoGP Grand Prix of Italy.`,
    url: `${SITE_URL}/races/mugello/experiences`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Things to Do at Mugello MotoGP — Experiences Beyond the Circuit | GP Moto Pal`,
    description: `Wine tours, Florence day trips, medieval villages, and Tuscan food experiences around the MotoGP Grand Prix of Italy. Make the most of your race trip to Tuscany.`,
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">Experiences and Things to Do Around the MotoGP Grand Prix of Italy at Mugello</h1>
      <ExperiencesClient />
    </>
  )
}
