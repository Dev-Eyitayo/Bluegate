import React from "react";
import { Activity, CalendarDays } from "lucide-react";
import Accordion from "./Accordion";
import EventCard from "./EventCard";
import SupportSection from "./SupportSection";
import SectionHeader from "./SectionHeader";

const programmes = [
  {
    title: "Programme",
    content:
      "The heart of our programme is health promotion – which plays a crucial role in improving health outcomes and reducing the burden of disease. Health promotion is about enabling individuals and communities to take control of their health, leading to improved quality of life and reduced health disparities...",
    link: "/health-promotion",
    linkText: "Read more",
  },
  {
    title: "Health Communication",
    content:
      "Health communication campaigns are vital for spreading awareness, promoting healthy behaviors, and educating the public about health-related issues. At Blue Gate, we believe in the power of effective communication to promote health and well-being...",
    link: "/health-communication",
    linkText: "Read more",
  }
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

export default function ProgramsAndEvents() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Health Promotion Programmes */}
        <div className="lg:col-span-1">
          <SectionHeader icon={Activity} title="Health Promotion Programmes" />
          <Accordion items={programmes} />
        </div>

        {/* Upcoming Events */}
        <div className="lg:col-span-1">
          <SectionHeader icon={CalendarDays} title="Upcoming Events" />
          <div className="space-y-6">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                description={event.description}
              />
            ))}
          </div>
        </div>

        {/* Please Support Us */}
        <div className="lg:col-span-1">
          <SupportSection />
        </div>
      </div>
    </section>
  );
}