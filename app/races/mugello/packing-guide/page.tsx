import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import PackingGuideClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('mugello')!

export const metadata: Metadata = {
  title: `Mugello MotoGP Packing Guide — What to Bring to Autodromo del Mugello | GP Moto Pal`,
  description: `What to pack for the MotoGP Grand Prix of Italy at Mugello. Late May weather, prohibited items, and the essentials experienced fans never forget.`,
  alternates: { canonical: `${SITE_URL}/races/mugello/packing-guide` },
  openGraph: {
    title: `Mugello MotoGP Packing Guide — What to Bring | GP Moto Pal`,
    description: `Packing list for the MotoGP Grand Prix of Italy. Late May Tuscan weather, prohibited items, and circuit-specific essentials.`,
    url: `${SITE_URL}/races/mugello/packing-guide`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Mugello MotoGP Packing Guide — What to Bring | GP Moto Pal`,
    description: `Packing list for the MotoGP Grand Prix of Italy. Late May Tuscan weather, prohibited items, and circuit-specific essentials.`,
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">Packing Guide for the MotoGP Grand Prix of Italy at Mugello</h1>
      <PackingGuideClient />
    </>
  )
}
