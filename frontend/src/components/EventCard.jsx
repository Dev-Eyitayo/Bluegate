// src/components/EventCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const EventCard = ({ title, description, href, location }) => {
  const truncated = description.length > 160
    ? description.substring(0, 157) + "..."
    : description;

  return (
    <Link
      to={href}
      className="block group bg-white rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
    >
      <div className="space-y-3.5">
        <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-brand-700 transition-colors">
          {title}
        </h3>

        {location && (
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin className="h-4 w-4 text-brand-500" />
            <span>{location}</span>
          </div>
        )}

        <p className="text-slate-600 text-[15px] leading-relaxed line-clamp-3">
          {truncated}
        </p>

        <div className="flex items-center gap-2 pt-1 text-sm font-semibold text-brand-700">
          <span>View Details</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
