import '../src/index.css'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
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
  verification: {
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFY ?? '',
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FairwayPal',
  url: 'https://fairwaypal.com',
  logo: 'https://fairwaypal.com/icon.png',
  description:
    'AI-powered golf trip planner that generates dual itineraries for golfers and partners. Plan, vote, and lock your group golf trip in under 5 minutes.',
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FairwayPal',
  url: 'https://fairwaypal.com',
  description:
    'Golf trip sorted. Partners happy. Answer 5 questions, get a dual itinerary, share one link, everyone votes.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://fairwaypal.com/destinations/{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </head>
      <body className="bg-bg font-body text-ink antialiased">
        <PHProvider>{children}</PHProvider>
        <Toaster theme="dark" position="top-center" />
        <Analytics />
      </body>
    </html>
  )
}
