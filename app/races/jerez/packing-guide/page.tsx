import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import PackingGuideClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('jerez')!

export const metadata: Metadata = {
  title: `Jerez MotoGP Packing Guide — What to Bring to Circuito de Jerez | GP Moto Pal`,
  description: `What to pack for the MotoGP Grand Prix of Spain at Jerez. Late April weather, prohibited items, and the essentials experienced fans never forget.`,
  alternates: { canonical: `${SITE_URL}/races/jerez/packing-guide` },
  openGraph: {
    title: `Jerez MotoGP Packing Guide — What to Bring | GP Moto Pal`,
    description: `Packing list for the MotoGP Grand Prix of Spain. April weather, prohibited items, and circuit-specific essentials.`,
    url: `${SITE_URL}/races/jerez/packing-guide`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Jerez MotoGP Packing Guide — What to Bring | GP Moto Pal`,
    description: `Packing list for the MotoGP Grand Prix of Spain. April weather, prohibited items, and circuit-specific essentials.`,
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">Packing Guide for the MotoGP Grand Prix of Spain at Jerez</h1>
      <PackingGuideClient />
    </>
  )
}
