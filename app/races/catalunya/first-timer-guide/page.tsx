import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import FirstTimerClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('catalunya')!

export const metadata: Metadata = {
  title: `Catalunya MotoGP First-Timer Guide — Your First Race Weekend at Barcelona | GP Moto Pal`,
  description: `First time at the MotoGP Grand Prix of Catalunya? Weekend structure, what to expect at Circuit de Barcelona-Catalunya, how the three classes work, and tips specific to this circuit.`,
  alternates: { canonical: `${SITE_URL}/races/catalunya/first-timer-guide` },
  openGraph: {
    title: `Catalunya MotoGP First-Timer Guide | GP Moto Pal`,
    description: `What to expect for your first MotoGP race weekend at Circuit de Barcelona-Catalunya.`,
    url: `${SITE_URL}/races/catalunya/first-timer-guide`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Catalunya MotoGP First-Timer Guide | GP Moto Pal`,
    description: `What to expect for your first MotoGP race weekend at Circuit de Barcelona-Catalunya.`,
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">First-Timer Guide for the MotoGP Grand Prix of Catalunya at Barcelona</h1>
      <FirstTimerClient />
    </>
  )
}
