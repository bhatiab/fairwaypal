import type { Metadata } from 'next'
import Navbar from '../../../src/components/Navbar'
import TimezoneConverterClient from './_client'

const SITE_URL = 'https://gpmotopal.com'

export const metadata: Metadata = {
  title: 'MotoGP 2026 Race Start Times — Timezone Converter | GP Moto Pal',
  description:
    'See every MotoGP 2026 session start time converted to your local timezone. FP1, Practice, Qualifying, Sprint Race, and Main Race times for all 22 rounds.',
  alternates: { canonical: `${SITE_URL}/tools/timezone-converter` },
  openGraph: {
    title: 'MotoGP 2026 Race Start Times — Timezone Converter | GP Moto Pal',
    description:
      'MotoGP 2026 session times for all 22 rounds converted to your local timezone.',
    url: `${SITE_URL}/tools/timezone-converter`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MotoGP 2026 Race Start Times — Timezone Converter | GP Moto Pal',
    description:
      'MotoGP 2026 session times for all 22 rounds converted to your local timezone.',
  },
}

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'MotoGP 2026 Timezone Converter',
  description:
    'Interactive tool to convert MotoGP 2026 session start times to your local timezone. Covers all 22 rounds including FP1, Qualifying, Sprint Race, and Main Race.',
  url: `${SITE_URL}/tools/timezone-converter`,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Navbar />
      <TimezoneConverterClient />
    </>
  )
}
