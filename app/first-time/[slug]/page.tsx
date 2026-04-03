import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '../../../src/components/Navbar'
import FirstTimeClient from './_client'

const SITE_URL = 'https://gpmotopal.com'

const SUPPORTED_SLUGS = ['mugello', 'silverstone', 'assen', 'catalunya'] as const
type SupportedSlug = typeof SUPPORTED_SLUGS[number]

const CIRCUIT_NAMES: Record<SupportedSlug, string> = {
  mugello: 'Mugello',
  silverstone: 'Silverstone',
  assen: 'Assen',
  catalunya: 'Circuit de Barcelona-Catalunya',
}

export function generateStaticParams() {
  return SUPPORTED_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  if (!SUPPORTED_SLUGS.includes(slug as SupportedSlug)) return {}
  const name = CIRCUIT_NAMES[slug as SupportedSlug]
  return {
    title: `First Time at ${name}? What to Know Before You Go | GP Moto Pal`,
    description: `Your practical pre-trip guide to attending MotoGP at ${name} for the first time — best viewing spots, transport, common mistakes, and what to expect on race day.`,
    alternates: { canonical: `${SITE_URL}/first-time/${slug}` },
    openGraph: {
      title: `First Time at ${name}? | GP Moto Pal`,
      description: `Practical guide to attending MotoGP at ${name} for the first time — viewing spots, transport, mistakes to avoid.`,
      url: `${SITE_URL}/first-time/${slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `First Time at ${name}? | GP Moto Pal`,
      description: `Practical guide to attending MotoGP at ${name} for the first time — viewing spots, transport, mistakes to avoid.`,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!SUPPORTED_SLUGS.includes(slug as SupportedSlug)) notFound()

  const name = CIRCUIT_NAMES[slug as SupportedSlug]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `First Time at ${name}? What to Know Before You Go`,
    description: `Practical guide to attending MotoGP at ${name} for the first time.`,
    url: `${SITE_URL}/first-time/${slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'GP Moto Pal',
      url: SITE_URL,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'First-Time Guides', item: `${SITE_URL}/first-time` },
      { '@type': 'ListItem', position: 3, name: name, item: `${SITE_URL}/first-time/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <h1 className="sr-only">First Time at {name} MotoGP — What to Know Before You Go</h1>
      <FirstTimeClient slug={slug as SupportedSlug} />
    </>
  )
}
