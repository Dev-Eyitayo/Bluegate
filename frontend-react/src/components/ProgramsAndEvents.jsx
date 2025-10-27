import React, { useState } from "react";
import { ChevronDown, Activity, CalendarDays, HeartHandshake } from "lucide-react";

export default function ProgramsAndEvents() {
  const programmes = [
    {
      title: "Programme",
      content:
        "The heart of our programme is health promotion – which plays a crucial role in improving health outcomes and reducing the burden of disease. Health promotion is about enabling individuals and communities to take control of their health, leading to improved quality of life and reduced health disparities...",
      link: "#",
      linkText: "Read more",
    },
    {
      title: "Health Communication",
      content:
        "Effective communication is key to spreading health awareness and encouraging positive behavior change within communities...",
      link: "#",
      linkText: "Read more",
    },
    {
      title: "Community Outreach",
      content:
        "We engage directly with local communities to understand their unique health challenges and deliver targeted interventions and resources.",
      link: "#",
      linkText: "See initiatives",
    },
  ];

  const events = [
    {
      title:
        "PERSONOR Project: A PROJECT TO PROMOTE ECONOMIC REHABILITATION AND SOCIAL REINTEGRATION OF EX-INMATES IN IBADAN, NIGERIA...",
      description:
        "1. Implementation of a project to promote economic rehabilitation and social reintegration of ex-inmates in Ibadan, Nigeria (PERSONOR PROJECT) in partnership with Prison Fellowship of Nigeria (PFN), Oyo State Chapter...",
    },
    {
      title: "Implementation of WOMEN EMPOWERMENT project in Osun State...",
      description: "2. Implementation of WOMEN EMPOWERMENT project in Osun State...",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Health Promotion Programmes */}
        <div className="lg:col-span-1">
          <div className="flex flex-col items-center mb-6 text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-sky-100 mb-3">
              <Activity className="w-7 h-7 text-sky-700" />
            </div>
            <h2 className="text-xl font-bold text-sky-800">
              Health Promotion Programmes
            </h2>
          </div>

          <div className="border border-slate-200 rounded-xl bg-slate-50">
            {programmes.map((programme, index) => (
              <div key={index}>
                <button
                  className={`w-full text-left p-4 hover:bg-slate-100 transition-colors flex justify-between items-center ${
                    index < programmes.length - 1 && "border-b border-slate-200"
                  }`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`accordion-content-${index}`}
                >
                  <span className="font-semibold text-slate-700">
                    {programme.title}
                  </span>
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
                    <p>{programme.content}</p>
                    <a
                      href={programme.link}
                      className="text-sky-700 hover:text-sky-900 font-medium inline-block mt-3 text-sm"
                    >
                      {programme.linkText}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="lg:col-span-1">
          <div className="flex flex-col items-center mb-6 text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-sky-100 mb-3">
              <CalendarDays className="w-7 h-7 text-sky-700" />
            </div>
            <h2 className="text-xl font-bold text-sky-800">Upcoming Events</h2>
          </div>

          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl p-5 bg-slate-50 hover:-translate-y-1 transition-transform duration-300"
              >
                <h3 className="text-sky-800 font-bold text-md mb-2">
                  {event.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {event.title.includes("PERSONOR")
                    ? event.description.substring(0, 150) + "..."
                    : event.description}
                </p>
                <a
                  href="#"
                  className="text-sky-700 hover:text-sky-900 text-sm font-medium inline-block mt-3"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Please Support Us */}
        <div className="lg:col-span-1">
          <div className="flex flex-col items-center mb-6 text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-sky-100 mb-3">
              <HeartHandshake className="w-7 h-7 text-sky-700" />
            </div>
            <h2 className="text-xl font-bold text-sky-800">Please Support Us</h2>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
            <p className="text-slate-700 mb-4 leading-relaxed">
              Donate to Blue Gate Initiative. Our programs supporting children’s education,
              vulnerable families, and healthcare access rely on your generous support.
              All contributions will be gratefully acknowledged.
            </p>

            <div className="mt-6 p-4 border-t border-slate-200 bg-white rounded-b-lg text-slate-700 text-sm">
              <p className="font-bold text-slate-800 mb-2">
                Our Financial Details:
              </p>
              <p>
                Bank: <span className="font-medium">Wema Bank PLC</span>
              </p>
              <p>
                Account Name:{" "}
                <span className="font-medium">
                  Blue Gate Public Health Promotion Initiative
                </span>
              </p>
              <p>
                Account Number:{" "}
                <span className="font-medium">0122653054</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
