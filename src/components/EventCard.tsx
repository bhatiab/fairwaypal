import { motion } from "framer-motion";
import { MapPin, Clock, Plus, Check } from "lucide-react";
import { GPEvent, categoryLabels } from "@/data/events";

interface EventCardProps {
  event: GPEvent;
  isInItinerary: boolean;
  onToggle: (id: string) => void;
  index: number;
}

const EventCard = ({ event, isInItinerary, onToggle, index }: EventCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`group relative rounded-lg bg-gradient-card p-3 sm:p-5 transition-all duration-300 hover:scale-[1.02] ${
        isInItinerary ? "border-glow glow-red" : "border border-border"
      }`}
    >
      <div className="racing-stripe pl-3 sm:pl-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-secondary px-3 py-1 font-body text-xs text-muted-foreground">
            {categoryLabels[event.category]}
          </span>
          <button
            onClick={() => onToggle(event.id)}
            aria-label={isInItinerary ? `Remove ${event.title} from itinerary` : `Add ${event.title} to itinerary`}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
              isInItinerary
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            {isInItinerary ? <Check className="h-4 w-4" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>

        <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
          {event.title}
        </h3>
        <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
          {event.description}
        </p>

        <div className="flex flex-wrap gap-3 font-body text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-primary" />
            {event.date} · {event.time}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3 text-primary" />
            {event.location}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default EventCard;
