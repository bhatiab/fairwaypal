import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import PackingGuideClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('catalunya')!

export const metadata: Metadata = {
  title: `What to Pack for the Catalunya MotoGP — Circuit de Barcelona-Catalunya Packing Guide | GP Moto Pal`,
  description: `Packing list for the MotoGP Grand Prix of Catalunya. May weather in Barcelona, the strict no-outside-food policy, prohibited items, and what to bring for a full day in the sun.`,
  alternates: { canonical: `${SITE_URL}/races/catalunya/packing-guide` },
  openGraph: {
    title: `Catalunya MotoGP Packing Guide — What to Bring | GP Moto Pal`,
    description: `Packing list and bag policy for the MotoGP Grand Prix of Catalunya at Circuit de Barcelona-Catalunya.`,
    url: `${SITE_URL}/races/catalunya/packing-guide`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Catalunya MotoGP Packing Guide — What to Bring | GP Moto Pal`,
    description: `Packing list and bag policy for the MotoGP Grand Prix of Catalunya at Circuit de Barcelona-Catalunya.`,
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">Packing Guide for the MotoGP Grand Prix of Catalunya at Barcelona</h1>
      <PackingGuideClient />
    </>
  )
}
