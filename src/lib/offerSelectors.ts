import { OFFERS, type Offer } from "./offers";

export function getOffer(key: string): Offer | undefined {
  return OFFERS[key];
}

export function getOffersByRace(raceSlug: string): Offer[] {
  return Object.values(OFFERS)
    .filter((o) => o.raceSlug === raceSlug || o.raceSlug === null)
    .sort((a, b) => b.priority - a.priority);
}

export function getOffersBySection(
  raceSlug: string,
  section: Offer["section"]
): Offer[] {
  return getOffersByRace(raceSlug).filter((o) => o.section === section);
}
