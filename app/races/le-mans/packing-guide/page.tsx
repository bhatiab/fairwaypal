import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import PackingGuideClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('le-mans')!

export const metadata: Metadata = {
  title: `Le Mans MotoGP Packing Guide — What to Bring in May | GP Moto Pal`,
  description: `What to pack for the MotoGP French Grand Prix at Le Mans. Early May weather is cool and rainy — waterproofs are essential. Full packing checklist for the Bugatti Circuit.`,
  alternates: { canonical: `${SITE_URL}/races/le-mans/packing-guide` },
  openGraph: {
    title: `Le Mans MotoGP Packing Guide — What to Bring in May | GP Moto Pal`,
    description: `What to bring for early May at Le Mans — waterproofs, layers, and circuit-specific essentials for MotoGP France.`,
    url: `${SITE_URL}/races/le-mans/packing-guide`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Le Mans MotoGP Packing Guide — What to Bring in May | GP Moto Pal`,
    description: `What to bring for early May at Le Mans — waterproofs, layers, and circuit-specific essentials for MotoGP France.`,
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">Packing Guide for the MotoGP Grand Prix of France at Le Mans</h1>
      <PackingGuideClient />
    </>
  )
}
