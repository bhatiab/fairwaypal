import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import MistakesClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('jerez')!

export const metadata: Metadata = {
  title: `Jerez MotoGP Mistakes to Avoid — Common First-Timer Errors | GP Moto Pal`,
  description: `The mistakes that catch people out at the MotoGP Grand Prix of Spain. Hotels, transport, tickets, and the things nobody tells you about Jerez.`,
  alternates: { canonical: `${SITE_URL}/races/jerez/mistakes` },
  openGraph: {
    title: `Jerez MotoGP Mistakes to Avoid | GP Moto Pal`,
    description: `Common mistakes at the Jerez MotoGP weekend and how to avoid them.`,
    url: `${SITE_URL}/races/jerez/mistakes`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Jerez MotoGP Mistakes to Avoid | GP Moto Pal`,
    description: `Common mistakes at the Jerez MotoGP weekend and how to avoid them.`,
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">Mistakes to Avoid at the MotoGP Grand Prix of Spain, Jerez</h1>
      <MistakesClient />
    </>
  )
}
