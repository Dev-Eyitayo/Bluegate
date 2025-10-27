import React from "react";

const EventCard = ({ title, description }) => {
  return (
    <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 hover:-translate-y-1 transition-transform duration-300">
      <h3 className="text-sky-800 font-bold text-md mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {title.includes("PERSONOR") ? description.substring(0, 150) + "..." : description}
      </p>
      <a
        href="#"
        className="text-sky-700 hover:text-sky-900 text-sm font-medium inline-block mt-3"
      >
        View Details
      </a>
    </div>
  );
};

export default EventCard;