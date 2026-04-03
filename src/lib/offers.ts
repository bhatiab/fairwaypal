/**
 * Offer definitions for affiliate widgets.
 * GetYourGuide tour IDs are added here once confirmed.
 * Partner ID: 9GLTCAY
 */

export interface GygOutbound {
  provider: 'getyourguide';
  tourId: string;
  locale: string;
  currency: string;
}

export type Outbound = GygOutbound;

export interface Offer {
  key: string;
  raceSlug: string | null;
  section: 'experiences' | 'transport' | 'accommodation' | 'general';
  priority: number;
  outbound: Outbound;
}

/** Keyed offer map — add entries here as tour IDs are confirmed. */
export const OFFERS: Record<string, Offer> = {};
