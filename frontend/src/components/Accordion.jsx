import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border border-slate-200 rounded-xl bg-slate-50">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className={`w-full text-left p-4 hover:bg-slate-100 transition-colors flex justify-between items-center ${
              index < items.length - 1 && "border-b border-slate-200"
            }`}
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <span className="font-semibold text-slate-700">{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-sky-700 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === index && (
            <div
              id={`accordion-content-${index}`}
              className="p-4 bg-white text-slate-600 leading-relaxed transition-all duration-300"
            >
              <p>{item.content}</p>
              <Link
                to={item.link}
                className="text-sky-700 hover:text-sky-900 font-medium inline-block mt-3 text-sm"
              >
                {item.linkText}
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;