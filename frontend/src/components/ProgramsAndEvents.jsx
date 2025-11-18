// src/components/ProgramsAndEvents.jsx
import React, { useEffect, useState } from "react";
import { CalendarDays, AlertCircle } from "lucide-react";
import Accordion from "./Accordion";
import EventCard from "./EventCard";
import SupportSection from "./SupportSection";
import SectionHeader from "./SectionHeader";
import { apiRequest } from "../../utils/apiClient";

const programmes = [
  {
    title: "Programme",
    content:
      "The heart of our programme is health promotion – which plays a crucial role in improving health outcomes and reducing the burden of disease...",
    link: "/health-promotion",
    linkText: "Read more",
  },
  {
    title: "Health Communication",
    content:
      "Health communication campaigns are vital for spreading awareness, promoting healthy behaviors...",
    link: "/health-communication",
    linkText: "Read more",
  },
];

export default function ProgramsAndEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await apiRequest("/events/upcoming?limit=6", "GET");
        const eventList = Array.isArray(data) ? data : [];

        const formatted = eventList.map((event) => ({
          id: event.id,
          title: event.title,
          description: event.description || "No description available.",
          href: `/events/${event.id}`,
          location: event.location,
        }));

        setEvents(formatted);
        setError(false);
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setError(true);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-start">
        {/* Left: Upcoming Events */}
        <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
          <SectionHeader title="Upcoming Events" icon={CalendarDays} />

          <div className="mt-6 space-y-7">
            {/* Loading */}
            {loading && (
              <div className="text-center py-12 text-gray-500">
                <div className="inline-block animate-spin h-8 w-8 border-4 border-sky-600 border-t-transparent rounded-full"></div>
                <p className="mt-4">Loading upcoming events...</p>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="text-center py-12 bg-amber-50 border border-amber-200 rounded-xl">
                <AlertCircle className="h-10 w-10 text-amber-700 mx-auto mb-3" />
                <p className="text-amber-800">Could not load events right now</p>
              </div>
            )}

            {/* Empty */}
            {!loading && !error && events.length === 0 && (
              <div className="text-center py-16 text-gray-500">
                <CalendarDays className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <p className="font-medium text-lg">No upcoming events</p>
                <p className="text-sm mt-2">Stay tuned for new announcements!</p>
              </div>
            )}

            {/* Events List */}
            {!loading && events.length > 0 && (
              <div className="space-y-7">
                {events.map((event) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    description={event.description}
                    href={event.href}
                    location={event.location}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
            <SectionHeader title="Health Promotion Programmes" />
            <div className="mt-5">
              <Accordion items={programmes} />
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
            <SupportSection />
          </div>
        </div>
      </div>
    </section>
  );
}