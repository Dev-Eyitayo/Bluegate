// src/pages/EventDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiRequest } from "../../utils/apiClient";
import { format } from "date-fns";
import { ArrowLeft, Calendar, MapPin, Clock, Users } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import { LoaderCircle } from "lucide-react";

// Reuse your BlogImages component (or any gallery/lightbox you have)
import BlogImages from "../components/BlogImages";

export default function EventDetailPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await apiRequest(`/events/${id}`, "GET");
        setEvent(data);
      } catch (err) {
        console.error("Event not found:", err);
        setEvent(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  // Loading State
  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <LoaderCircle className="h-12 w-12 animate-spin text-brand-600" />
            <p className="text-slate-600">Loading event details...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Not Found State
  if (!event) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="bg-slate-100 border-2 border-dashed border-slate-200 rounded-2xl w-32 h-32 mx-auto mb-6" />
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">Event Not Found</h2>
            <p className="text-slate-600 mb-6">The event you're looking for may have been removed or is temporarily unavailable.</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-brand-700 hover:shadow-lift"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  const eventDate = new Date(event.event_date);
  const formattedDate = format(eventDate, "EEEE, MMMM d, yyyy");
  const formattedTime = format(eventDate, "h:mm a");

  return (
    <MainLayout>
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Back Link */}
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-brand-700 hover:text-brand-800 font-semibold mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            Back to Home
          </Link>

          <article className="bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden">
            {/* Hero Image or Gallery */}
            {event.images && event.images.length > 0 && (
              <div className="relative">
                <BlogImages
                  slides={event.images.map((img) => ({
                    src: img.image_url,
                    caption: img.caption || "",
                  }))}
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6 md:p-10 lg:p-12">
              {/* Event Title */}
              <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
                {event.title}
              </h1>

              {/* Event Meta */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-slate-700">
                {[
                  { icon: Calendar, label: "Date", value: formattedDate },
                  { icon: Clock, label: "Time", value: formattedTime },
                  ...(event.location ? [{ icon: MapPin, label: "Location", value: event.location }] : []),
                  { icon: Users, label: "Organized by", value: "Blue Gate Public Health Initiative" },
                ].map((meta) => (
                  <div key={meta.label} className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white ring-1 ring-inset ring-brand-100 text-brand-600 flex-shrink-0">
                      <meta.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{meta.label}</p>
                      <p className="font-medium text-slate-900">{meta.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <div
                  className="whitespace-pre-line"
                  dangerouslySetInnerHTML={{
                    __html: event.description
                      .replace(/\n/g, "<br />")
                      .replace(/\*(.*?)\*/g, "<strong>$1</strong>")
                      .replace(/_(.*?)_/g, "<em>$1</em>"),
                  }}
                />
              </div>

              {/* Optional CTA */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <p className="text-center text-slate-600 mb-6">
                  We look forward to seeing you there!
                </p>
                {/* <div className="flex justify-center">
                  <a
                    href="mailto:info@bluegate.org"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white font-semibold rounded-xl hover:bg-sky-700 transition shadow-md"
                  >
                    Contact Us for More Info
                  </a>
                </div> */}
              </div>
            </div>
          </article>
        </div>
      </div>
    </MainLayout>
  );
}