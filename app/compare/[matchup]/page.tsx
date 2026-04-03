import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { canonicalMatchup, isCanonical, parseMatchup, CURATED_COMPARISONS } from "@/lib/compareUtils";
import { getRaceBySlug } from "@/data/races2026";
import CompareClient from "./_client";

const SITE_URL = "https://gpmotopal.com";

export function generateStaticParams() {
  return CURATED_COMPARISONS.map(([a, b]) => ({
    matchup: canonicalMatchup(a, b),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ matchup: string }>;
}): Promise<Metadata> {
  const { matchup } = await params;
  const parsed = parseMatchup(matchup);
  if (!parsed) return {};

  const [slug1, slug2] = parsed;
  const race1 = getRaceBySlug(slug1);
  const race2 = getRaceBySlug(slug2);
  if (!race1 || !race2) return {};

  const title = `${race1.name} vs ${race2.name} — Which MotoGP Race? | GP Moto Pal`;
  const description = `Comparing ${race1.name} and ${race2.name} — cost, atmosphere, accessibility, and which is right for you.`;
  const url = `${SITE_URL}/compare/${matchup}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ matchup: string }>;
}) {
  const { matchup } = await params;

  // Redirect non-canonical order to canonical URL
  if (!isCanonical(matchup)) {
    const parsed = parseMatchup(matchup);
    if (parsed) {
      redirect(`/compare/${canonicalMatchup(parsed[0], parsed[1])}`);
    }
  }

  const parsed = parseMatchup(matchup);
  if (!parsed) notFound();

  const [slug1, slug2] = parsed;
  const race1 = getRaceBySlug(slug1);
  const race2 = getRaceBySlug(slug2);
  if (!race1 || !race2) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Compare", item: `${SITE_URL}/compare` },
      {
        "@type": "ListItem",
        position: 3,
        name: `${race1.name} vs ${race2.name}`,
        item: `${SITE_URL}/compare/${matchup}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CompareClient matchup={matchup} />
    </>
  );
}
