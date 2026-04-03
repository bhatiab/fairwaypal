import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import MistakesClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('catalunya')!

export const metadata: Metadata = {
  title: `Catalunya MotoGP Mistakes to Avoid — Common First-Timer Errors | GP Moto Pal`,
  description: `The mistakes that catch people out at the MotoGP Grand Prix of Catalunya. Bag policy surprises, train timing, Barcelona hotel prices, and what nobody tells you about the circuit.`,
  alternates: { canonical: `${SITE_URL}/races/catalunya/mistakes` },
  openGraph: {
    title: `Catalunya MotoGP Mistakes to Avoid | GP Moto Pal`,
    description: `Common mistakes at the Circuit de Barcelona-Catalunya MotoGP weekend and how to avoid them.`,
    url: `${SITE_URL}/races/catalunya/mistakes`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Catalunya MotoGP Mistakes to Avoid | GP Moto Pal`,
    description: `Common mistakes at the Circuit de Barcelona-Catalunya MotoGP weekend and how to avoid them.`,
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">Mistakes to Avoid at the MotoGP Grand Prix of Catalunya, Barcelona</h1>
      <MistakesClient />
    </>
  )
}
