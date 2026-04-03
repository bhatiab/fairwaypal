import type { Metadata } from 'next'
import FoodAndNightlifeClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'

export const metadata: Metadata = {
  title: `Jerez MotoGP Food & Nightlife — Where to Eat and Party During Race Week | GP Moto Pal`,
  description: `Best restaurants, bars, and nightlife in Jerez de la Frontera during MotoGP race week. Tabancos, race-week pop-ups, street parties, and where to eat before and after the races.`,
  alternates: { canonical: `${SITE_URL}/races/jerez/food-and-nightlife` },
  openGraph: {
    title: `Jerez MotoGP Food & Nightlife — Where to Eat and Party | GP Moto Pal`,
    description: `Restaurants, tabancos, street parties, and race-week nightlife in Jerez de la Frontera.`,
    url: `${SITE_URL}/races/jerez/food-and-nightlife`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Jerez MotoGP Food & Nightlife — Where to Eat and Party During Race Week | GP Moto Pal`,
    description: `Best restaurants, bars, and nightlife in Jerez de la Frontera during MotoGP race week. Tabancos, race-week pop-ups, street parties, and where to eat before and after the races.`,
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">Food, Restaurants and Nightlife in Jerez During MotoGP Race Week</h1>
      <FoodAndNightlifeClient />
    </>
  )
}
