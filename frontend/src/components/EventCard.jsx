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
      className="block group bg-white rounded-xl border border-gray-200 p-6 hover:border-sky-300 hover:shadow-lg transition-all duration-300"
    >
      <div className="space-y-4">
        <h3 className="font-bold text-xl text-sky-900 group-hover:text-sky-700 transition">
          {title}
        </h3>

        {location && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-sky-600" />
            <span>{location}</span>
          </div>
        )}

        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {truncated}
        </p>

        <div className="flex items-center gap-2 text-sky-700 font-semibold group-hover:gap-3 transition-all">
          <span>View Details</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default EventCard;