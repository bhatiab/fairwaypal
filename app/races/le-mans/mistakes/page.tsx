import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import MistakesClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'
const race = getRaceBySlug('le-mans')!

export const metadata: Metadata = {
  title: `Le Mans MotoGP Mistakes to Avoid — What Catches People Out | GP Moto Pal`,
  description: `The mistakes that catch first-timers out at the MotoGP French Grand Prix. Not packing for rain, driving on Sunday, booking hotels too late — avoid these before you go.`,
  alternates: { canonical: `${SITE_URL}/races/le-mans/mistakes` },
  openGraph: {
    title: `Le Mans MotoGP Mistakes to Avoid | GP Moto Pal`,
    description: `Common mistakes at the MotoGP Grand Prix of France — rain preparation, transport, accommodation, and what to pack.`,
    url: `${SITE_URL}/races/le-mans/mistakes`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Le Mans MotoGP Mistakes to Avoid | GP Moto Pal`,
    description: `Common mistakes at the MotoGP Grand Prix of France — rain preparation, transport, accommodation, and what to pack.`,
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">Mistakes to Avoid at the MotoGP Grand Prix of France at Le Mans</h1>
      <MistakesClient />
    </>
  )
}
