import type { Metadata } from 'next'
import GrandstandsClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'

export const metadata: Metadata = {
  title: `Best Grandstands at Mugello MotoGP — Where to Sit at Autodromo del Mugello | GP Moto Pal`,
  description: `Which grandstand should you pick for the MotoGP Grand Prix of Italy? Tribuna Materassi, Poggio Secco, Biondetti, and general admission zones compared with prices and viewing tips.`,
  alternates: { canonical: `${SITE_URL}/races/mugello/grandstands` },
  openGraph: {
    title: `Best Grandstands at Mugello MotoGP — Where to Sit | GP Moto Pal`,
    description: `Materassi at Turn 1, Poggio Secco, Biondetti, and Prato GA compared for the MotoGP Grand Prix of Italy.`,
    url: `${SITE_URL}/races/mugello/grandstands`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Best Grandstands at Mugello MotoGP — Where to Sit at Autodromo del Mugello | GP Moto Pal`,
    description: `Which grandstand should you pick for the MotoGP Grand Prix of Italy? Tribuna Materassi, Poggio Secco, Biondetti, and general admission zones compared with prices and viewing tips.`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best grandstand at Mugello MotoGP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tribuna Materassi at Turn 1 (San Donato) is the most popular for overtaking action — riders brake from 366 km/h into the first corner. Tribuna Poggio Secco offers elevated views over the fast Casanova-Savelli section. Tribuna Biondetti is excellent for the Arrabbiata complex.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much are MotoGP grandstand tickets at Mugello?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'General admission (Prato) 3-day tickets typically start from around €80-110. Grandstand 3-day tickets range from €150-250+ depending on location. VIP hospitality packages start from around €1,000+.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do Mugello MotoGP grandstand tickets sell out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mugello is one of the most popular races on the calendar. Tribuna Materassi and the best grandstands sell out months in advance. Buy as early as possible when tickets go on sale.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <h1 className="sr-only">Best Grandstands at the MotoGP Grand Prix of Italy at Mugello</h1>
      <GrandstandsClient />
    </>
  )
}
