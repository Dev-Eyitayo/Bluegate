import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiRequest } from "../../../utils/apiClient";
import AdminLayout from "../../layouts/AdminLayout";
import { format } from "date-fns";
import {
  ArrowLeft,
  Mail,
  Phone,
  CheckCircle,
  Loader2,
  Clock,
} from "lucide-react";

// Status Badge
const StatusBadge = ({ reviewed }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
      reviewed
        ? "bg-emerald-100 text-emerald-700"
        : "bg-amber-100 text-amber-700"
    }`}
  >
    {reviewed ? <CheckCircle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
    {reviewed ? "Reviewed" : "Pending"}
  </span>
);

export default function AdminContactDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [markLoading, setMarkLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch the message details
  useEffect(() => {
    (async () => {
      try {
        const res = await apiRequest(`/contact/${id}`, "GET");
        setMessage(res);
      } catch (err) {
        setError(err.message || "Failed to load message");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const markReviewed = async () => {
    setMarkLoading(true);
    try {
      await apiRequest(`/contact/${id}/review`, "PUT", {
        reviewed: true,
      });

      setMessage((prev) => ({ ...prev, reviewed: true }));
    } catch (err) {
      alert("Failed to mark reviewed: " + err.message);
    }
    setMarkLoading(false);
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-10 text-center">
          <Loader2 className="h-8 w-8 mx-auto animate-spin text-sky-600" />
          <p className="mt-2 text-gray-600">Loading message...</p>
        </div>
      </AdminLayout>
    );
  }

  if (error || !message) {
    return (
      <AdminLayout>
        <div className="p-10 text-center">
          <p className="text-red-600">{error || "Message not found"}</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-3 text-sm text-sky-600 hover:underline"
          >
            Go Back
          </button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/admin/messages")}
          className="flex items-center gap-1 text-sky-600 hover:text-sky-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Messages
        </button>

        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {message.subject}
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Received on {format(new Date(message.created_at), "MMM d, yyyy • h:mm a")}
            </p>
          </div>

          <StatusBadge reviewed={message.reviewed} />
        </div>

        {/* User Info */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sender Information</h2>

          <div className="space-y-3">
            <p>
              <span className="font-medium">Name:</span> {message.full_name}
            </p>

            <p className="flex items-center gap-2 text-sky-600">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${message.email}`} className="hover:underline">
                {message.email}
              </a>
            </p>

            {message.number && (
              <p className="flex items-center gap-2 text-sky-600">
                <Phone className="h-4 w-4" />
                <a href={`tel:${message.number}`} className="hover:underline">
                  {message.number}
                </a>
              </p>
            )}
          </div>
        </div>

        {/* Message Body */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Message</h2>

          <p className="whitespace-pre-line text-gray-700 leading-relaxed">
            {message.message}
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          {/* <a
            href={`mailto:${message.email}?subject=Re: ${encodeURIComponent(
              message.subject
            )}`}
            className="px-4 py-2 bg-sky-600 text-white text-sm font-medium rounded-lg hover:bg-sky-700 transition"
          >
            Reply
          </a> */}

          {!message.reviewed && (
            <button
              onClick={markReviewed}
              disabled={markLoading}
              className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 disabled:opacity-60"
            >
              {markLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Updating...
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4" /> Mark Seen
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
