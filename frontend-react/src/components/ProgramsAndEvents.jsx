import React, { useState } from 'react';

export default function ProgramsAndEvents() {
  // Sample data for Health Promotion Programmes (accordion items)
  const programmes = [
    {
      title: 'Programme',
      content:
        'The heart of our programme is health promotion – which plays a crucial role in improving health outcomes and reducing the burden of disease. Health promotion is about enabling individuals and communities to take control of their health, leading to improved quality of life and reduced health disparities...',
      link: '#',
      linkText: 'Read more',
    },
    {
      title: 'Health Communication',
      content:
        'Effective communication is key to spreading health awareness and encouraging positive behavior change within communities...',
      link: '#',
      linkText: 'Read more',
    },
    {
      title: 'Community Outreach',
      content:
        'We engage directly with local communities to understand their unique health challenges and deliver targeted interventions and resources.',
      link: '#',
      linkText: 'See initiatives',
    },
  ];

  // Sample placeholder data for Upcoming Events (to be replaced with backend data)
  const events = [
    {
      title: 'PERSONOR Project: A PROJECT TO PROMOTE ECONOMIC REHABILITATION AND SOCIAL REINTEGRATION OF EX-INMATES IN IBADAN, NIGERIA...',
      description:
        '1. Implementation of a project to promote economic rehabilitation and social reintegration of ex-inmates in Ibadan, Nigeria (PERSONOR PROJECT) in partnership with Prison Fellowship of Nigeria (PFN), Oyo State Chapter...',
    },
    {
      title: 'Implementation of WOMEN EMPOWERMENT project in Osun State...',
      description:
        '2. Implementation of WOMEN EMPOWERMENT project in Osun State...',
    },
  ];

  // State for controlling accordion open/close
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the accordion state
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-1 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Health Promotion Programmes (Accordion) */}
        <div className="lg:col-span-1">
          {/* Accent color changed from red to sky-800 */}
          <h2 className="text-xl font-bold text-sky-800 mb-6 border-b-2 border-sky-800 pb-2">
            Health Promotion Programmes
          </h2>

          {/* Single box container for all accordion items */}
          <div className="border border-slate-300 rounded-md overflow-hidden shadow-md">
            {programmes.map((programme, index) => (
              <div key={index} className="bg-white">
                <button
                  className={`w-full text-left p-4 bg-white hover:bg-sky-50 transition-colors flex justify-between items-center ${
                    index < programmes.length - 1 && 'border-b border-slate-200'
                  }`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`accordion-content-${index}`}
                >
                  <span className="font-semibold text-slate-700 text-md">
                    {programme.title}
                  </span>
                  {/* Icon color changed from red-500 to blue-600 */}
                  <svg
                    className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div
                    id={`accordion-content-${index}`}
                    className="p-4 bg-slate-50 text-slate-600 text-base leading-relaxed animate-in fade-in duration-300"
                  >
                    <p>{programme.content}</p>
                    {/* Link color changed from red-600 to blue-600 */}
                    <a
                      href={programme.link}
                      className="text-blue-600 hover:text-blue-800 font-medium inline-block mt-3 text-sm transition-colors"
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
          {/* Accent color changed from red to sky-800 */}
          <h2 className="text-xl font-bold text-sky-800 mb-6 border-b-2 border-sky-800 pb-2">
            Upcoming Events
          </h2>
          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-md p-5 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <h3 className="text-sky-800 font-bold text-md mb-2 leading-snug">
                  {event.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {/* Truncate text only if it's the PERSONOR project */}
                  {event.title.includes('PERSONOR')
                    ? event.description.substring(0, 150) + '...'
                    : event.description}
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-block mt-3 transition-colors"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Please Support Us */}
        <div className="lg:col-span-1">
          {/* Accent color changed from red to sky-800 */}
          <h2 className="text-xl font-bold text-sky-800 mb-6 border-b-2 border-sky-800 pb-2">
            Please Support Us
          </h2>
          <div className="border border-slate-200 rounded-md p-6 bg-white shadow-md">
            <p className="text-slate-700 text-base mb-4">
              Donate to Blue Gate Initiative. Our programs, supporting
              children’s education, vulnerable families, and healthcare access,
              rely on your generous support. All contributions will be
              graptefully acknowledged.
            </p>
            {/* <a
              href="#"
              className="w-full text-center bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors inline-block text-lg shadow-md hover:shadow-lg"
            >
              Donate Now
            </a> */}
            <div className="mt-6 p-4 border-t border-slate-100 bg-slate-50 rounded-b-lg text-slate-700 text-sm">
              <p className="font-bold text-slate-800 mb-2">
                Our Financial Details:
              </p>
              <p>
                Bank: <span className="font-medium">Wema Bank PLC</span>
              </p>
              <p>
                Account Name:{' '}
                <span className="font-medium">
                  Blue Gate Public Health Promotion Initiative
                </span>
              </p>
              <p>
                Account Number: <span className="font-medium">0122653054</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}