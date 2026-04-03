import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import FirstTimerClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('jerez')!

export const metadata: Metadata = {
  title: `Jerez MotoGP First-Timer Guide — Your First Race Weekend at Circuito de Jerez | GP Moto Pal`,
  description: `First time at the MotoGP Grand Prix of Spain? Weekend structure, what to expect, how classes work, and tips from fans who've been before.`,
  alternates: { canonical: `${SITE_URL}/races/jerez/first-timer-guide` },
  openGraph: {
    title: `Jerez MotoGP First-Timer Guide | GP Moto Pal`,
    description: `Everything you need to know for your first MotoGP race weekend at Circuito de Jerez.`,
    url: `${SITE_URL}/races/jerez/first-timer-guide`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Jerez MotoGP First-Timer Guide | GP Moto Pal`,
    description: `Everything you need to know for your first MotoGP race weekend at Circuito de Jerez.`,
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">First-Timer Guide for the MotoGP Grand Prix of Spain at Jerez</h1>
      <FirstTimerClient />
    </>
  )
}
