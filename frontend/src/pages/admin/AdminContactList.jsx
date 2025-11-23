import React, { useEffect, useState, useMemo, useCallback } from "react";
import { apiRequest } from "../../../utils/apiClient";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { format } from "date-fns";
import { Eye, Clock, CheckCircle, Loader2 } from "lucide-react";

// Status Pill
const StatusBadge = ({ reviewed }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
      reviewed
        ? "bg-emerald-100 text-emerald-700"
        : "bg-amber-100 text-amber-700"
    }`}
  >
    {reviewed ? <CheckCircle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
    {reviewed ? "Reviewed" : "Pending"}
  </span>
);

export default function AdminContactList() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [marking, setMarking] = useState({});
  const [error, setError] = useState("");

  // Fetch messages
  useEffect(() => {
    (async () => {
      try {
        const res = await apiRequest("/contact/?skip=0&limit=50", "GET");
        setMessages(Array.isArray(res) ? res : []);
      } catch (err) {
        setError(err.message || "Failed to load messages");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Sort newest first
  const sortedMessages = useMemo(
    () => [...messages].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
    [messages]
  );

  // Mark reviewed
  const handleMarkReviewed = useCallback(async (id) => {
    setMarking((prev) => ({ ...prev, [id]: true }));

    try {
      await apiRequest(`/contact/${id}/review`, "PUT", { reviewed: true });

      setMessages((prev) =>
        prev.map((msg) => (msg.id === id ? { ...msg, reviewed: true } : msg))
      );
    } catch (err) {
      alert(`Failed to update: ${err.message}`);
    } finally {
      setMarking((prev) => ({ ...prev, [id]: false }));
    }
  }, []);

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-8 text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-sky-600" />
          <p className="mt-2 text-gray-600">Loading messages...</p>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="p-8 text-center">
          <p className="text-red-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 text-sm text-sky-600 hover:underline"
          >
            Retry
          </button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
        <p className="text-sm text-gray-600">
          {messages.length} message{messages.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {sortedMessages.map((msg) => (
          <div
            key={msg.id}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-900">{msg.name}</p>
                <p className="text-sm text-gray-500">{msg.email}</p>
                <p className="mt-1 text-sm text-gray-600">
                  {format(new Date(msg.created_at), "MMM d, yyyy")}
                </p>
              </div>
              <StatusBadge reviewed={msg.reviewed} />
            </div>

            <div className="mt-4 flex justify-between items-center">
              <Link
                to={`/admin/messages/${msg.id}`}
                className="text-sky-600 text-sm font-medium flex items-center gap-1"
              >
                <Eye className="h-4 w-4" /> View
              </Link>

              {!msg.reviewed && (
                <button
                  onClick={() => handleMarkReviewed(msg.id)}
                  disabled={marking[msg.id]}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 disabled:opacity-60"
                >
                  {marking[msg.id] ? (
                    <>
                      <Loader2 className="h-3 w-3 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-3 w-3" />
                      Mark Reviewed
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block rounded-xl border border-gray-200 overflow-hidden bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {sortedMessages.map((msg) => (
              <tr key={msg.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {msg.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {msg.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {msg.subject}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {format(new Date(msg.created_at), "MMM d, yyyy")}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge reviewed={msg.reviewed} />
                </td>

                <td className="px-6 py-4 text-right flex items-center justify-end gap-3">
                  {!msg.reviewed && (
                    <button
                      onClick={() => handleMarkReviewed(msg.id)}
                      disabled={marking[msg.id]}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-emerald-600 rounded-md"
                    >
                      {marking[msg.id] ? (
                        <>
                          <Loader2 className="h-3 w-3 animate-spin" />
                          Saving
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-3 w-3" />
                          Mark
                        </>
                      )}
                    </button>
                  )}

                  <Link
                    to={`/admin/messages/${msg.id}`}
                    className="flex items-center gap-1 text-sky-600 hover:text-sky-800 text-sm"
                  >
                    <Eye className="h-4 w-4" /> View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
