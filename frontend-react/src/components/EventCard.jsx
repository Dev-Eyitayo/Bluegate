import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ title, description, href }) => {
  return (
    <div>
      <h3 className="text-sky-800 font-semibold text-sm mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {title.includes("PERSONOR") ? description.substring(0, 150) + "..." : description}
      </p>
      {href && (
        <Link
          to={href}
          className="text-sky-700 hover:text-sky-900 text-sm font-medium inline-block mt-3"
        >
          View Details
        </Link>
      )}
    </div>
  );
};

export default EventCard;