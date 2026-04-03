import type { Metadata } from 'next'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'
import FirstTimeHubClient from './_client'

const SITE_URL = 'https://gpmotopal.com'

export const metadata: Metadata = {
  title: 'Your First MotoGP Race — What to Expect | GP Moto Pal',
  description:
    'Attending your first MotoGP race? What to expect from the weekend format, paddock access, support races, and fan culture — plus circuit-specific guides for Mugello, Silverstone, Assen, and Catalunya.',
  alternates: { canonical: `${SITE_URL}/first-time` },
  openGraph: {
    title: 'Your First MotoGP Race — What to Expect | GP Moto Pal',
    description:
      'What to expect from your first MotoGP weekend — format, paddock access, support races, and fan culture.',
    url: `${SITE_URL}/first-time`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your First MotoGP Race — What to Expect | GP Moto Pal',
    description:
      'What to expect from your first MotoGP weekend — format, paddock access, support races, and fan culture.',
  },
}

const FAQ_ITEMS = [
  {
    question: 'What happens at a MotoGP race weekend?',
    answer:
      'A MotoGP weekend runs Friday to Sunday with three racing classes: Moto3, Moto2, and MotoGP. Friday has free practice sessions, Saturday has qualifying and a MotoGP Sprint Race (half distance), and Sunday has full races for all three classes — Moto3 first, then Moto2, then MotoGP.',
  },
  {
    question: 'How is MotoGP different from F1 as a spectator?',
    answer:
      'MotoGP is more accessible and intimate. Paddock access is available at most circuits, pit lane walks happen at some rounds, and the atmosphere is less corporate. You also get three full championships (Moto3, Moto2, MotoGP) plus MotoE at selected rounds — far more on-track action than a single F1 race.',
  },
  {
    question: 'Can I access the MotoGP paddock?',
    answer:
      "Yes — MotoGP paddock access is far more accessible than F1. Many circuits sell paddock walk passes or include them in premium ticket packages. Some circuits offer free pit lane walks on Thursday or Friday. Check the specific circuit's ticket options.",
  },
  {
    question: 'What should I bring to a MotoGP race?',
    answer:
      'Essentials: ear protection (bikes are loud), sun protection, comfortable shoes for walking, layers for weather changes, a portable phone charger, and cash for trackside vendors. Check our circuit-specific packing guides for detailed lists.',
  },
]

export default function FirstTimeHubPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Your First MotoGP Race — What to Expect',
    description:
      'Attending your first MotoGP race? What to expect from the weekend format, paddock access, support races, and fan culture.',
    url: `${SITE_URL}/first-time`,
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
      {
        '@type': 'ListItem',
        position: 2,
        name: 'First-Time Guides',
        item: `${SITE_URL}/first-time`,
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <FirstTimeHubClient faqs={FAQ_ITEMS} />
      <Footer />
    </>
  )
}
