import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden divide-y divide-slate-200">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className={`w-full text-left px-5 py-4 flex justify-between items-center gap-3 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500 ${
              openIndex === index ? "bg-brand-50/60" : "hover:bg-slate-50"
            }`}
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <span
              className={`font-semibold transition-colors ${
                openIndex === index ? "text-brand-800" : "text-slate-700"
              }`}
            >
              {item.title}
            </span>
            <ChevronDown
              className={`w-5 h-5 flex-shrink-0 text-brand-600 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === index && (
            <div
              id={`accordion-content-${index}`}
              className="px-5 py-4 border-t border-slate-100 text-slate-600 text-[15px] leading-relaxed animate-fade-in-down"
            >
              <p>{item.content}</p>
              <Link
                to={item.link}
                className="group inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors"
              >
                {item.linkText}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
