import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CURRENT_SEASON } from "@/lib/season";
import CheapestRacesClient from "./_client";

export const metadata: Metadata = {
  title: `Cheapest MotoGP Races to Attend in ${CURRENT_SEASON} | GP Moto Pal`,
  description: `Compare costs across all MotoGP ${CURRENT_SEASON} races — ticket prices, flights, hotels, and total weekend budgets ranked from cheapest to most expensive.`,
  alternates: {
    canonical: "https://gpmotopal.com/cheapest-races",
  },
  twitter: {
    card: "summary_large_image",
    title: `Cheapest MotoGP Races to Attend in ${CURRENT_SEASON} | GP Moto Pal`,
    description: `Compare costs across all MotoGP ${CURRENT_SEASON} races — ticket prices, flights, hotels, and total weekend budgets ranked from cheapest to most expensive.`,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: `Cheapest MotoGP Races to Attend in ${CURRENT_SEASON}`,
  description: `Compare costs across all MotoGP ${CURRENT_SEASON} races — ticket prices, flights, hotels, and total weekend budgets ranked from cheapest to most expensive.`,
  url: "https://gpmotopal.com/cheapest-races",
  publisher: {
    "@type": "Organization",
    name: "GP Moto Pal",
    url: "https://gpmotopal.com",
  },
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://gpmotopal.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Cheapest Races",
      item: "https://gpmotopal.com/cheapest-races",
    },
  ],
};

export default function CheapestRacesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <CheapestRacesClient />
      <Footer />
    </div>
  );
}
