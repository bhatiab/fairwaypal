import { OFFERS, type Offer } from "./offers";

export function getOffer(key: string): Offer | undefined {
  return OFFERS[key];
}

export function getOffersByPage(pageSlug: string): Offer[] {
  return Object.values(OFFERS)
    .filter((o) => o.pageSlug === pageSlug || o.pageSlug === null)
    .sort((a, b) => b.priority - a.priority);
}

export function getOffersBySection(
  pageSlug: string,
  section: Offer["section"]
): Offer[] {
  return getOffersByPage(pageSlug).filter((o) => o.section === section);
}
