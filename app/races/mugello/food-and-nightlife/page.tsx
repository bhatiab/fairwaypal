import type { Metadata } from 'next'
import FoodAndNightlifeClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'

export const metadata: Metadata = {
  title: `Mugello MotoGP Food & Nightlife — Where to Eat and Party During Race Week | GP Moto Pal`,
  description: `Best restaurants, trattorias, and nightlife near Mugello during MotoGP race week. Tuscan food, local wine, race-week atmosphere, and where to eat before and after the races.`,
  alternates: { canonical: `${SITE_URL}/races/mugello/food-and-nightlife` },
  openGraph: {
    title: `Mugello MotoGP Food & Nightlife — Where to Eat and Party | GP Moto Pal`,
    description: `Restaurants, trattorias, campsite atmosphere, and race-week nightlife near Autodromo del Mugello.`,
    url: `${SITE_URL}/races/mugello/food-and-nightlife`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Mugello MotoGP Food & Nightlife — Where to Eat and Party During Race Week | GP Moto Pal`,
    description: `Best restaurants, trattorias, and nightlife near Mugello during MotoGP race week. Tuscan food, local wine, race-week atmosphere, and where to eat before and after the races.`,
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">Food, Restaurants and Nightlife Near Mugello During MotoGP Race Week</h1>
      <FoodAndNightlifeClient />
    </>
  )
}
