import type { Metadata } from 'next'
import GrandstandsClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'

export const metadata: Metadata = {
  title: `Best Grandstands at Jerez MotoGP — Where to Sit at Circuito de Jerez | GP Moto Pal`,
  description: `Which grandstand should you pick for the MotoGP Grand Prix of Spain? C1/C2, A10, X1, and general admission zones compared with prices and viewing tips.`,
  alternates: { canonical: `${SITE_URL}/races/jerez/grandstands` },
  openGraph: {
    title: `Best Grandstands at Jerez MotoGP — Where to Sit | GP Moto Pal`,
    description: `C1/C2 at Turn 1, A10 final corner, X1, and GA zones compared for the MotoGP Grand Prix of Spain.`,
    url: `${SITE_URL}/races/jerez/grandstands`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Best Grandstands at Jerez MotoGP — Where to Sit at Circuito de Jerez | GP Moto Pal`,
    description: `Which grandstand should you pick for the MotoGP Grand Prix of Spain? C1/C2, A10, X1, and general admission zones compared with prices and viewing tips.`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best grandstand at Jerez MotoGP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'C1 and C2 at Turn 1 are the most popular for overtaking action. A10 (Dry Sack) at the final corner offers the best last-lap drama. X1 at the penultimate corner is excellent for decisive moves. For the podium ceremony, Tribuna de Meta at the finish line is the place to be.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much are MotoGP grandstand tickets at Jerez?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'General admission (Pelouse) 3-day tickets start from around €62–73. Grandstand 3-day tickets range from €142–205 depending on location. VIP packages like the Ducati House start from around €1,450.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do Jerez MotoGP grandstand tickets sell out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'C1, C2, and A10 typically sell out months before the race. Buy tickets as soon as they go on sale — waiting until the month of the race means you will miss the best seats.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <h1 className="sr-only">Best Grandstands at the MotoGP Grand Prix of Spain at Jerez</h1>
      <GrandstandsClient />
    </>
  )
}
