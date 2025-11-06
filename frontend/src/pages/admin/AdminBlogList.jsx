// src/pages/admin/AdminBlogList.jsx
import React, { useEffect, useState, useMemo } from "react";
import { apiRequest } from "../../../utils/apiClient";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { format } from "date-fns";
import { Eye, Edit, Trash2, Plus, Globe, Lock, Loader2 } from "lucide-react";

const StatusBadge = ({ published }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
      published
        ? "bg-emerald-100 text-emerald-700"
        : "bg-amber-100 text-amber-700"
    }`}
  >
    {published ? <Globe className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
    {published ? "Published" : "Draft"}
  </span>
);

export default function AdminBlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await apiRequest("/blogs/admin?limit=100", "GET");
        setPosts(res || []);
      } catch (err) {
        alert("Failed to load: " + err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this post?")) return;
    setDeleting((prev) => ({ ...prev, [id]: true }));
    try {
      await apiRequest(`/blogs/admin/${id}`, "DELETE");
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      alert("Delete failed: " + err.message);
    } finally {
      setDeleting((prev) => ({ ...prev, [id]: false }));
    }
  };

  if (loading)
    return (
      <AdminLayout>
        <div className="p-8 text-center">Loading posts...</div>
      </AdminLayout>
    );

  return (
    <AdminLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
          <p className="mt-1 text-sm text-gray-600">{posts.length} total</p>
        </div>
        <Link
          to="/admin/outreach/create"
          className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
        >
          <Plus className="h-4 w-4" />
          New Post
        </Link>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden">
        {posts.map((p) => (
          <div
            key={p.id}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  {format(new Date(p.created_at), "MMM d, yyyy")}
                </p>
              </div>
              <StatusBadge published={p.is_published} />
            </div>
            <div className="mt-3 flex gap-2">
              <Link
                to={`/admin/outreach/edit/${p.id}`}
                className="flex items-center gap-1 text-sky-600 text-sm"
              >
                <Edit className="h-4 w-4" />
                Edit
              </Link>
              <button
                onClick={() => handleDelete(p.id)}
                disabled={deleting[p.id]}
                className="flex items-center gap-1 text-red-600 text-sm"
              >
                {deleting[p.id] ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 className="h-4 w-4" />
                )}
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                Created
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {posts.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                  {p.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                  {format(new Date(p.created_at), "MMM d, yyyy")}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge published={p.is_published} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-3">
                    <Link
                      to={`/admin/blogs/edit/${p.id}`}
                      className="text-sky-600 hover:text-sky-800"
                    >
                      <Edit className="h-4 w-4" />
                    </Link>
                    <button
                      onClick={() => handleDelete(p.id)}
                      disabled={deleting[p.id]}
                      className="text-red-600 hover:text-red-800"
                    >
                      {deleting[p.id] ? (
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