import { useEffect } from "react";
import { getOffer } from "@/lib/offerSelectors";
import type { GygOutbound } from "@/lib/offers";
import { useIsMobile } from "@/hooks/use-mobile";

const GYG_SCRIPT_ID = "gyg-widget-script";
const GYG_SCRIPT_SRC = "https://widget.getyourguide.com/dist/pa.umd.production.min.js";

function ensureGygScript() {
  if (document.getElementById(GYG_SCRIPT_ID)) return;
  const s = document.createElement("script");
  s.id = GYG_SCRIPT_ID;
  s.async = true;
  s.src = GYG_SCRIPT_SRC;
  document.body.appendChild(s);
}

interface Props {
  offerKey?: string;
  /** Pass a raw GYG tour ID (e.g. "659135") to render the widget without an offerKey */
  tourId?: string;
  locale?: string;
  currency?: string;
  variant?: "horizontal" | "vertical";
}

const GetYourGuideAvailability = ({ offerKey, tourId: tourIdProp, locale = "en-US", currency = "USD", variant }: Props) => {
  const isMobile = useIsMobile();
  const resolvedVariant = variant ?? (isMobile ? "vertical" : "horizontal");
  const offer = offerKey ? getOffer(offerKey) : undefined;

  useEffect(() => {
    ensureGygScript();
  }, []);

  // Resolve tour ID: from offerKey lookup or direct prop
  let resolvedTourId = tourIdProp;
  let resolvedLocale = locale;
  let resolvedCurrency = currency;

  if (offer && offer.outbound.provider === "getyourguide") {
    const ob = offer.outbound as GygOutbound;
    resolvedTourId = ob.tourId;
    resolvedLocale = ob.locale;
    resolvedCurrency = ob.currency;
  }

  if (!resolvedTourId) return null;

  return (
    <div
      data-gyg-href="https://widget.getyourguide.com/default/availability.frame"
      data-gyg-tour-id={resolvedTourId}
      data-gyg-locale-code={resolvedLocale}
      data-gyg-currency={resolvedCurrency}
      data-gyg-widget="availability"
      data-gyg-variant={resolvedVariant}
      data-gyg-partner-id="9GLTCAY"
    />
  );
};

export default GetYourGuideAvailability;
