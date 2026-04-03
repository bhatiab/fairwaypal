import '../src/index.css'
import { Analytics } from '@vercel/analytics/next'
import { PHProvider } from './providers'

export const metadata: import('next').Metadata = {
  metadataBase: new URL('https://gpmotopal.com'),
  title: {
    default: 'GP Moto Pal — MotoGP Race Guides & Trip Planners',
    template: '%s | GP Moto Pal',
  },
  description: 'Race guides, trip planners and local experiences for every MotoGP weekend. Built from real fan experience.',
  openGraph: {
    siteName: 'GP Moto Pal',
    type: 'website',
    images: [
      {
        url: '/images/og/homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'GP Moto Pal — MotoGP Race Guides & Trip Planners',
      },
    ],
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
