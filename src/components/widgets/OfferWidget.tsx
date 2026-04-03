import { getOffer } from "@/lib/offerSelectors";
import GetYourGuideAvailability from "./GetYourGuideAvailability";

interface Props {
  offerKey: string;
}

const OfferWidget = ({ offerKey }: Props) => {
  const offer = getOffer(offerKey);
  if (!offer) return null;

  if (offer.outbound.provider === "getyourguide") {
    return <GetYourGuideAvailability offerKey={offerKey} />;
  }

  // Future providers can be added here
  return null;
};

export default OfferWidget;
