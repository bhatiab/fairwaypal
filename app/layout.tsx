import '../src/index.css'
import { Analytics } from '@vercel/analytics/next'
import { PHProvider } from './providers'
import { Cormorant_Garamond, Outfit } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

export const metadata: import('next').Metadata = {
  metadataBase: new URL('https://fairwaypal.com'),
  title: {
    default: 'FairwayPal',
    template: '%s | FairwayPal',
  },
  description:
    'FairwayPal helps golf groups shape a trip fast, with one intake flow, a clearer shared plan, and space for partner-friendly scheduling from the start.',
  openGraph: {
    siteName: 'FairwayPal',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'FairwayPal golf trip planner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/twitter-image'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="bg-bg font-body text-ink antialiased">
        <PHProvider>{children}</PHProvider>
        <Analytics />
      </body>
    </html>
  )
}
