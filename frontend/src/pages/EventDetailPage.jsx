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
        <div className="min-h-screen bg-sky-50/30 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <LoaderCircle className="h-12 w-12 animate-spin text-sky-600" />
            <p className="text-gray-600">Loading event details...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Not Found State
  if (!event) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-sky-50/30 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Event Not Found</h2>
            <p className="text-gray-600 mb-6">The event you're looking for may have been removed or is temporarily unavailable.</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
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
      <div className="min-h-screen bg-sky-50/20 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-900 font-medium mb-8 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>

          <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
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
              <h1 className="text-3xl md:text-4xl font-bold text-sky-900 mb-6 leading-tight">
                {event.title}
              </h1>

              {/* Event Meta */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-gray-700">
                <div className="flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-sky-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Date</p>
                    <p className="text-lg">{formattedDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-sky-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Time</p>
                    <p className="text-lg">{formattedTime}</p>
                  </div>
                </div>

                {event.location && (
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-lg">{event.location}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-sky-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Organized by</p>
                    <p className="text-lg">Blue Gate Public Health Initiative</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
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
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600 mb-6">
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