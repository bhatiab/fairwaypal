import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { raceGuides } from "../../src/data/races2026";
import { CURRENT_SEASON } from "@/lib/season";
import CalendarClient from "./_client";

export const metadata: Metadata = {
  title: `MotoGP Calendar ${CURRENT_SEASON} — Full Race Schedule | GP Moto Pal`,
  description: `Full MotoGP ${CURRENT_SEASON} race calendar with dates, circuits, and links to fan travel guides for all 22 rounds.`,
  alternates: {
    canonical: "https://gpmotopal.com/calendar",
  },
  twitter: {
    card: "summary_large_image",
    title: `MotoGP Calendar ${CURRENT_SEASON} — Full Race Schedule | GP Moto Pal`,
    description: `Full MotoGP ${CURRENT_SEASON} race calendar with dates, circuits, and links to fan travel guides for all 22 rounds.`,
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: raceGuides.map((race, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: race.name,
    url: `https://gpmotopal.com/races/${race.slug}`,
  })),
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
      name: "Calendar",
      item: "https://gpmotopal.com/calendar",
    },
  ],
};

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <CalendarClient />
      <Footer />
    </div>
  );
}
