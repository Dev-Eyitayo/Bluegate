// src/pages/admin/AdminDashboard.jsx
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { apiRequest } from "../../../utils/apiClient";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { format } from "date-fns";
import { Eye, Clock, CheckCircle, Loader2, Trash2 } from "lucide-react";
import ToastContainer from "../../components/ToastContainer";

// Status Badge
const StatusBadge = ({ reviewed }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
      reviewed
        ? "bg-emerald-100 text-emerald-700"
        : "bg-amber-100 text-amber-700"
    }`}
  >
    {reviewed ? (
      <CheckCircle className="h-3 w-3" />
    ) : (
      <Clock className="h-3 w-3" />
    )}
    {reviewed ? "Reviewed" : "Pending"}
  </span>
);

export default function AdminDashboard() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [marking, setMarking] = useState({}); // { id: true }
  const [deleting, setDeleting] = useState({}); // { id: true }

  // Toast state (same as AdminBlogForm)
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    // Auto-remove after 5 seconds
    setTimeout(() => removeToast(id), 5000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await apiRequest("/volunteers?skip=0&limit=100", "GET");
        setApps(res || []);
      } catch (err) {
        setError(err.message || "Failed to load");
        addToast("Failed to load submissions", "error");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const sortedApps = useMemo(
    () =>
      [...apps].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      ),
    [apps]
  );

  // Mark as Reviewed
  const handleMarkReviewed = useCallback(async (id) => {
    setMarking((prev) => ({ ...prev, [id]: true }));
    try {
      await apiRequest(`/volunteers/${id}/review`, "PUT", { reviewed: true });

      setApps((prev) =>
        prev.map((app) =>
          app.id === id ? { ...app, reviewed: true } : app
        )
      );
      addToast("Marked as reviewed", "success");
    } catch (err) {
      addToast(`Failed to mark as reviewed: ${err.message}`, "error");
    } finally {
      setMarking((prev) => ({ ...prev, [id]: false }));
    }
  }, []);

  // Delete Submission
  const handleDelete = useCallback(async (id) => {
    if (!window.confirm("Are you sure you want to delete this submission?")) {
      return;
    }

    setDeleting((prev) => ({ ...prev, [id]: true }));
    try {
      await apiRequest(`/volunteers/${id}`, "DELETE");

      setApps((prev) => prev.filter((app) => app.id !== id));
      addToast("Submission deleted successfully", "success");
    } catch (err) {
      addToast(`Failed to delete: ${err.message}`, "error");
    } finally {
      setDeleting((prev) => ({ ...prev, [id]: false }));
    }
  }, []);

  if (loading)
    return (
      <AdminLayout>
        <div className="p-8 text-center">Loading submissions...</div>
      </AdminLayout>
    );

  if (error)
    return (
      <AdminLayout>
        <div className="p-8 text-center text-red-600">{error}</div>
      </AdminLayout>
    );

  return (
    <AdminLayout>
      {/* Toast Container */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Volunteer Submissions
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          {apps.length} total applications
        </p>
      </div>

      {/* Mobile: Card List */}
      <div className="space-y-4 md:hidden">
        {sortedApps.map((a) => (
          <div
            key={a.id}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="font-mono text-xs text-gray-500">#{a.id}</p>
                <p className="mt-1 font-semibold text-gray-900">
                  {a.data?.name || a.data?.email || "Anonymous"}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  {format(new Date(a.created_at), "MMM d, yyyy")}
                </p>
              </div>
              <StatusBadge reviewed={a.reviewed} />
            </div>

            <div className="mt-4 flex items-center justify-between gap-2">
              <Link
                to={`/admin/volunteers/${a.id}`}
                className="flex items-center gap-1 text-sky-600 text-sm font-medium hover:underline"
              >
                <Eye className="h-4 w-4" />
                View
              </Link>

              <div className="flex gap-2">
                {!a.reviewed && (
                  <button
                    onClick={() => handleMarkReviewed(a.id)}
                    disabled={marking[a.id]}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
                  >
                    {marking[a.id] ? (
                      <Loader2 className="h-3 w-3 animate-spin" />
                    ) : (
                      <CheckCircle className="h-3 w-3" />
                    )}
                  </button>
                )}

                <button
                  onClick={() => handleDelete(a.id)}
                  disabled={deleting[a.id]}
                  className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 disabled:opacity-60 disabled:cursor-not-allowed transition"
                >
                  {deleting[a.id] ? (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  ) : (
                    <Trash2 className="h-3 w-3" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Table */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Applicant
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Submitted
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {sortedApps.map((a) => (
              <tr key={a.id} className="hover:bg-gray-50 transition">
                <td className="whitespace-nowrap px-6 py-4 font-mono text-sm text-gray-900">
                  #{a.id}
                </td>
                <td className="px-6 py-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">
                      {a.data?.name || "—"}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {a.data?.email || "—"}
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {format(new Date(a.created_at), "MMM d, yyyy")}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge reviewed={a.reviewed} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-3">
                    {!a.reviewed && (
                      <button
                        onClick={() => handleMarkReviewed(a.id)}
                        disabled={marking[a.id]}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
                      >
                        {marking[a.id] ? (
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
                      to={`/admin/volunteers/${a.id}`}
                      className="flex items-center gap-1 text-sky-600 hover:text-sky-800 font-medium text-sm transition"
                    >
                      <Eye className="h-4 w-4" />
                      View
                    </Link>

                    <button
                      onClick={() => handleDelete(a.id)}
                      disabled={deleting[a.id]}
                      className="flex items-center gap-1 text-red-600 hover:text-red-800 font-medium text-sm transition disabled:opacity-60"
                    >
                      {deleting[a.id] ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}