import React, { useEffect, useState } from "react";
import { apiRequest } from "../../../utils/apiClient";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { format } from "date-fns";
import { Eye, Edit, Trash2, Plus, Calendar, MapPin, Loader2 } from "lucide-react";
import ToastContainer from "../../components/ToastContainer";

export default function AdminEventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState({});

  // Toast state
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 5000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await apiRequest("/events?limit=200", "GET");
        setEvents(res || []);
      } catch (err) {
        addToast("Failed to load events: " + err.message, "error");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event? This will also remove all associated images.")) {
      return;
    }

    setDeleting((prev) => ({ ...prev, [id]: true }));
    try {
      await apiRequest(`/events/admin/${id}`, "DELETE");

      setEvents((prev) => prev.filter((e) => e.id !== id));
      addToast("Event deleted successfully", "success");
    } catch (err) {
      addToast("Delete failed: " + err.message, "error");
    } finally {
      setDeleting((prev) => ({ ...prev, [id]: false }));
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-8 text-center">Loading events...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Events</h1>
          <p className="mt-1 text-sm text-gray-600">{events.length} total</p>
        </div>
        <Link
          to="/admin/event/create"
          className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
        >
          <Plus className="h-4 w-4" />
          New Event
        </Link>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden">
        {events.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No events found. Create your first event!
          </div>
        ) : (
          events.map((event) => (
            <div
              key={event.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1 pr-3">
                  <h3 className="font-semibold text-gray-900 line-clamp-2 text-lg">
                    {event.title}
                  </h3>
                  <div className="mt-2 space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      {format(new Date(event.event_date), "MMM d, yyyy 'at' h:mm a")}
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                {event.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  Created {format(new Date(event.created_at), "MMM d, yyyy")}
                </div>
                <div className="flex gap-4">
                  <Link
                    to={`/admin/event/edit/${event.id}`}
                    className="flex items-center gap-1 text-sky-600 text-sm font-medium hover:underline"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(event.id)}
                    disabled={deleting[event.id]}
                    className="flex items-center gap-1 text-red-600 text-sm font-medium hover:underline disabled:opacity-60"
                  >
                    {deleting[event.id] ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Event
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Created
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {events.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                  No events found. <Link to="/admin/event/create" className="text-sky-600 underline">Create one</Link>
                </td>
              </tr>
            ) : (
              events.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 max-w-md">
                    <div className="truncate" title={event.title}>
                      {event.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                    {format(new Date(event.event_date), "MMM d, yyyy · h:mm a")}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                    <div className="truncate" title={event.location || "-"}>
                      {event.location || <span className="text-gray-400">—</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {format(new Date(event.created_at), "MMM d, yyyy")}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right">
                    <div className="flex items-center justify-end gap-4">
                      <Link
                        to={`/admin/event/edit/${event.id}`}
                        className="text-sky-600 hover:text-sky-800 transition"
                        title="Edit event"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(event.id)}
                        disabled={deleting[event.id]}
                        className="text-red-600 hover:text-red-800 transition disabled:opacity-60"
                        title="Delete event"
                      >
                        {deleting[event.id] ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}