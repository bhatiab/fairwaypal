import '../src/index.css'
import { Analytics } from '@vercel/analytics/next'
import { PHProvider } from './providers'

export const metadata: import('next').Metadata = {
  metadataBase: new URL('https://fairwaypal.com'),
  title: {
    default: 'FairwayPal',
    template: '%s | FairwayPal',
  },
  description: 'FairwayPal helps golf groups shape a trip fast, with one intake flow, a clearer shared plan, and space for partner-friendly scheduling from the start.',
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
    <html lang="en">
      <body>
        <PHProvider>{children}</PHProvider>
        <Analytics />
      </body>
    </html>
  )
}
