import type { Metadata } from 'next'
import { getRaceBySlug } from '../../../../src/data/races2026'
import { racesWithCosts } from '../../../../src/data/raceCosts2026'
import CostsClient from './_client'
import Navbar from '../../../../src/components/Navbar'

const SITE_URL = 'https://gpmotopal.com'

export function generateStaticParams() {
  return racesWithCosts().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const race = getRaceBySlug(params.slug)

  if (!race) {
    return { title: 'MotoGP Weekend Costs | GP Moto Pal' }
  }

  const title = `${race.name} Costs — MotoGP Weekend Budget Breakdown | GP Moto Pal`
  const description = `How much does the ${race.name} cost? Tickets from ${race.circuit}, flights, hotels, and food — a realistic budget for every type of fan.`
  const url = `${SITE_URL}/races/${race.slug}/costs`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const race = getRaceBySlug(params.slug)

  const breadcrumbSchema = race
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: race.name, item: `${SITE_URL}/races/${race.slug}` },
          { '@type': 'ListItem', position: 3, name: 'Costs', item: `${SITE_URL}/races/${race.slug}/costs` },
        ],
      }
    : null

  return (
    <>
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      <Navbar />
      {race && (
        <h1 className="sr-only">{race.name} — MotoGP Weekend Budget Breakdown</h1>
      )}
      <CostsClient />
    </>
  )
}
