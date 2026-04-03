import type { Metadata } from 'next'
import HomePageClient from './home-client'
import { buildWebSiteJsonLd } from '../src/lib/raceJsonLd'
import Navbar from '../src/components/Navbar'

export const metadata: Metadata = {
  title: 'MotoGP Race Travel Guides — What to Know Before You Go | GP Moto Pal',
  verification: {
    google: 'FaSEqrB9MXjsdexdTw0Gm3XSvL-ecev7eDWQnBeu1sU',
  },
  description:
    'Transport, packing, and first-timer guides for every MotoGP race. Built from real fan experience.',
  alternates: {
    canonical: 'https://gpmotopal.com/',
  },
  openGraph: {
    title: 'MotoGP Race Travel Guides — What to Know Before You Go | GP Moto Pal',
    description:
      'Transport, packing, and first-timer guides for every MotoGP race. Built from real fan experience.',
    url: 'https://gpmotopal.com/',
    type: 'website',
    images: [
      {
        url: '/images/og/homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'GP Moto Pal — MotoGP Race Travel Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MotoGP Race Travel Guides — What to Know Before You Go | GP Moto Pal',
    description:
      'Transport, packing, and first-timer guides for every MotoGP race. Built from real fan experience.',
    images: ['/images/og/homepage.jpg'],
  },
}

const websiteSchema = buildWebSiteJsonLd()

const RACE_LINKS = [
  { href: '/races/thailand',       label: 'Grand Prix of Thailand — Buriram Guide' },
  { href: '/races/brazil',         label: 'Grand Prix of Brazil — Goiânia Guide' },
  { href: '/races/austin',         label: 'Grand Prix of the Americas — Austin Guide' },
  { href: '/races/jerez',          label: 'Grand Prix of Spain — Jerez Guide' },
  { href: '/races/le-mans',        label: 'Grand Prix of France — Le Mans Guide' },
  { href: '/races/catalunya',      label: 'Grand Prix of Catalunya — Barcelona Guide' },
  { href: '/races/mugello',        label: 'Grand Prix of Italy — Mugello Guide' },
  { href: '/races/hungary',        label: 'Grand Prix of Hungary — Balaton Park Guide' },
  { href: '/races/brno',           label: 'Grand Prix of Czechia — Brno Guide' },
  { href: '/races/assen',          label: 'Grand Prix of the Netherlands — Assen Guide' },
  { href: '/races/sachsenring',    label: 'Grand Prix of Germany — Sachsenring Guide' },
  { href: '/races/silverstone',    label: 'Grand Prix of Great Britain — Silverstone Guide' },
  { href: '/races/aragon',         label: 'Grand Prix of Aragon — MotorLand Guide' },
  { href: '/races/misano',         label: 'Grand Prix of San Marino — Misano Guide' },
  { href: '/races/austria',        label: 'Grand Prix of Austria — Red Bull Ring Guide' },
  { href: '/races/motegi',         label: 'Grand Prix of Japan — Motegi Guide' },
  { href: '/races/mandalika',      label: 'Grand Prix of Indonesia — Mandalika Guide' },
  { href: '/races/phillip-island', label: 'Grand Prix of Australia — Phillip Island Guide' },
  { href: '/races/sepang',         label: 'Grand Prix of Malaysia — Sepang Guide' },
  { href: '/races/qatar',          label: 'Grand Prix of Qatar — Lusail Guide' },
  { href: '/races/portimao',       label: 'Grand Prix of Portugal — Portimão Guide' },
  { href: '/races/valencia',       label: 'Grand Prix of Valencia — Ricardo Tormo Guide' },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Navbar />
      <nav aria-label="All MotoGP races" className="sr-only">
        <ul>
          {RACE_LINKS.map(({ href, label }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
      </nav>
      <HomePageClient />
    </>
  )
}
