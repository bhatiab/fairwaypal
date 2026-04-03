import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import FirstTimerClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('le-mans')!

export const metadata: Metadata = {
  title: `Le Mans MotoGP First-Timer Guide — Your First Race Weekend at the Bugatti Circuit | GP Moto Pal`,
  description: `First time at the MotoGP French Grand Prix? Weekend structure, what to expect, how the three classes work, and Le Mans-specific tips from fans who've been before.`,
  alternates: { canonical: `${SITE_URL}/races/le-mans/first-timer-guide` },
  openGraph: {
    title: `Le Mans MotoGP First-Timer Guide | GP Moto Pal`,
    description: `Everything you need to know for your first MotoGP race weekend at the Bugatti Circuit, Le Mans.`,
    url: `${SITE_URL}/races/le-mans/first-timer-guide`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Le Mans MotoGP First-Timer Guide | GP Moto Pal`,
    description: `Everything you need to know for your first MotoGP race weekend at the Bugatti Circuit, Le Mans.`,
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">First-Timer Guide for the MotoGP Grand Prix of France at Le Mans</h1>
      <FirstTimerClient />
    </>
  )
}
