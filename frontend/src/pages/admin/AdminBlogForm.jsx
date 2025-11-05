import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { apiRequest } from "../../../utils/apiClient";
import AdminLayout from "../../layouts/AdminLayout";
import ToastContainer from "../../components/ToastContainer";
import { Loader2, Upload, X, Globe, Lock } from "lucide-react";

export default function AdminBlogForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    is_published: true,
  });
  const [images, setImages] = useState([]); // unified: existing + new
  const [removedImageIds, setRemovedImageIds] = useState([]); // track deletions
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Auto-generate slug
  useEffect(() => {
    if (form.title && !isEdit) {
      const generated = form.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setForm((prev) => ({ ...prev, slug: generated }));
    }
  }, [form.title, isEdit]);

  // Load post on edit
  useEffect(() => {
    if (isEdit) {
      (async () => {
        setLoading(true);
        try {
          const post = await apiRequest(`/blogs/admin/${id}`, "GET");
          setForm({
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt || "",
            content: post.content,
            is_published: post.is_published,
          });
          setImages(
            post.images.map((img) => ({
              id: img.id,
              url: img.image_url,
              caption: img.caption || "",
              isExisting: true,
            }))
          );
        } catch (err) {
          addToast("Failed to load post", "error");
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [id, isEdit]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      if (!file.type.startsWith("image/")) {
        addToast(`${file.name} is not an image`, "error");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => [
          ...prev,
          { file, preview: reader.result, caption: "", isExisting: false },
        ]);
      };
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  };

  const removeImage = (idx) => {
    const img = images[idx];
    if (img.isExisting && img.id) {
      setRemovedImageIds((prev) => [...prev, img.id]);
    }
    setImages((prev) => prev.filter((_, i) => i !== idx));
  };

  const updateCaption = (idx, caption) => {
    setImages((prev) =>
      prev.map((img, i) => (i === idx ? { ...img, caption } : img))
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.slug || !form.content) {
      addToast("Title, slug, and content are required", "error");
      return;
    }

    setSaving(true);
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("slug", form.slug);
    formData.append("excerpt", form.excerpt);
    formData.append("content", form.content);
    formData.append("is_published", form.is_published);

    // Send removed IDs
    removedImageIds.forEach((id) => formData.append("remove_images", id));

    // Send new images
    images
      .filter((img) => !img.isExisting)
      .forEach((img, idx) => {
        formData.append("images", img.file);
        formData.append("captions", img.caption);
      });

    try {
      if (isEdit) {
        await apiRequest(`/blogs/admin/${id}`, "PUT", formData);
      } else {
        await apiRequest("/blogs/admin", "POST", formData);
      }
      addToast(isEdit ? "Post updated!" : "Post created!", "success");
      setTimeout(() => navigate("/admin/blogs"), 800);
    } catch (err) {
      addToast(err.message || "Save failed", "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-sky-600" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {isEdit ? "Edit Blog Post" : "Create New Post"}
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          {isEdit ? "Update your blog post" : "Share your story with the world"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 max-w-5xl">
        {/* Title & Slug */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition"
              placeholder="Enter post title"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Slug <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.slug}
              onChange={(e) =>
                setForm({
                  ...form,
                  slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
                })
              }
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition"
              placeholder="auto-generated"
            />
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Excerpt (Optional)
          </label>
          <textarea
            rows={3}
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition"
            placeholder="Short summary for preview..."
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Content <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={12}
            required
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 font-mono text-sm transition"
            placeholder="Write your post in Markdown or HTML..."
          />
        </div>

        {/* Images – Unified Grid */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-3">
            Images
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`group relative rounded-xl overflow-hidden border-2 transition
                  ${img.isExisting ? "border-gray-100" : "border-sky-200 bg-sky-50"}`}
              >
                <img
                  src={img.preview || img.url}
                  alt={img.caption}
                  className="w-full h-40 object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(idx)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  <X className="h-4 w-4" />
                </button>
                <input
                  type="text"
                  placeholder="Caption"
                  value={img.caption}
                  onChange={(e) => updateCaption(idx, e.target.value)}
                  className={`w-full px-2 py-1.5 text-xs border-t bg-white
                    ${img.isExisting ? "border-gray-200" : "border-sky-200"}`}
                />
              </div>
            ))}

            {/* Upload Button */}
            <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-sky-400 hover:bg-sky-50 transition">
              <Upload className="h-8 w-8 text-gray-400 mb-1" />
              <span className="text-xs text-gray-500">Add Images</span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Publish Toggle */}
        <div className="flex items-center gap-3 p-4 bg-sky-50 rounded-xl">
          <input
            type="checkbox"
            id="publish"
            checked={form.is_published}
            onChange={(e) => setForm({ ...form, is_published: e.target.checked })}
            className="h-5 w-5 text-sky-600 rounded focus:ring-sky-500"
          />
          <label htmlFor="publish" className="font-medium text-gray-800">
            {form.is_published ? (
              <>
                <Globe className="inline h-4 w-4 text-emerald-600 mr-1" />
                Publish immediately
              </>
            ) : (
              <>
                <Lock className="inline h-4 w-4 text-amber-600 mr-1" />
                Save as draft
              </>
            )}
          </label>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-sky-600 text-white font-medium rounded-xl hover:bg-sky-700 disabled:opacity-60 disabled:cursor-not-allowed transition shadow-sm"
          >
            {saving ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Post"
            )}
          </button>
          <Link
            to="/admin/blogs"
            className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition"
          >
            Cancel
          </Link>
        </div>
      </form>
    </AdminLayout>
  );
}