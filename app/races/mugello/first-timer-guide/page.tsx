import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import FirstTimerClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('mugello')!

export const metadata: Metadata = {
  title: `Mugello MotoGP First-Timer Guide — Your First Race Weekend at Autodromo del Mugello | GP Moto Pal`,
  description: `First time at the MotoGP Grand Prix of Italy? Weekend structure, what to expect, how classes work, and tips from fans who've been to Mugello.`,
  alternates: { canonical: `${SITE_URL}/races/mugello/first-timer-guide` },
  openGraph: {
    title: `Mugello MotoGP First-Timer Guide | GP Moto Pal`,
    description: `Everything you need to know for your first MotoGP race weekend at Mugello.`,
    url: `${SITE_URL}/races/mugello/first-timer-guide`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Mugello MotoGP First-Timer Guide | GP Moto Pal`,
    description: `Everything you need to know for your first MotoGP race weekend at Mugello.`,
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">First-Timer Guide for the MotoGP Grand Prix of Italy at Mugello</h1>
      <FirstTimerClient />
    </>
  )
}
