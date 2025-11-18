import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { apiRequest } from "../../../utils/apiClient";
import AdminLayout from "../../layouts/AdminLayout";
import ToastContainer from "../../components/ToastContainer";
import { Loader2, Upload, X, Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";

export default function AdminEventForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState({
    title: "",
    description: "",
    event_date: "",
    location: "",
  });

  const [images, setImages] = useState([]); // { file?, preview?, url?, id?, caption, order }
  const [removedImageIds, setRemovedImageIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info") => {
    const tid = Date.now();
    setToasts((prev) => [...prev, { id: tid, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== tid)), 5000);
  };

  // Load existing event
  useEffect(() => {
    if (isEdit) {
      (async () => {
        setLoading(true);
        try {
          const event = await apiRequest(`/events/${id}`, "GET");
          setForm({
            title: event.title,
            description: event.description,
            event_date: event.event_date.slice(0, 16), // YYYY-MM-DDTHH:mm
            location: event.location || "",
          });

          const sortedImages = (event.images || [])
            .sort((a, b) => a.order - b.order)
            .map((img) => ({
              id: img.id,
              url: img.image_url,
              caption: img.caption || "",
              order: img.order,
              isExisting: true,
            }));
          setImages(sortedImages);
        } catch (err) {
          addToast("Failed to load event", "error");
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
          {
            file,
            preview: reader.result,
            caption: "",
            order: prev.length,
            isExisting: false,
          },
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

  const moveImage = (idx, direction) => {
    const newImages = [...images];
    const targetIdx = direction === "up" ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= newImages.length) return;
    [newImages[idx], newImages[targetIdx]] = [newImages[targetIdx], newImages[idx]];
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.description.trim() || !form.event_date) {
      addToast("Title, description, and event date are required", "error");
      return;
    }

    setSaving(true);
    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("event_date", form.event_date);
    if (form.location) formData.append("location", form.location);

    // Removed images
    removedImageIds.forEach((id) => formData.append("remove_images", id));

    // New images + captions
    images
      .filter((img) => !img.isExisting)
      .forEach((img) => {
        formData.append("images", img.file);
        formData.append("captions", img.caption);
      });

    try {
      if (isEdit) {
        await apiRequest(`/events/admin/${id}`, "PUT", formData);
        addToast("Event updated successfully!", "success");
      } else {
        await apiRequest("/events/admin", "POST", formData);
        addToast("Event created successfully!", "success");
      }
      setTimeout(() => navigate("/admin/event"), 800);
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
          <Loader2 className="h-10 w-10 animate-spin text-sky-600" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <ToastContainer toasts={toasts} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {isEdit ? "Edit Event" : "Create New Event"}
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          {isEdit ? "Update event details and images" : "Announce your upcoming event"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 max-w-5xl">
        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Event Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition"
            placeholder="e.g. Annual Community Outreach 2025"
          />
        </div>

        {/* Date & Location */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Date & Time <span className="text-red-500">*</span>
            </label>
            <input
              type="datetime-local"
              required
              value={form.event_date}
              onChange={(e) => setForm({ ...form, event_date: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              Location (Optional)
            </label>
            <input
              type="text"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition"
              placeholder="e.g. Central Park, New York"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={6}
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition"
            placeholder="Tell people what this event is about..."
          />
        </div>

        {/* Images Grid */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-3">
            Event Images
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden border-2 border-gray-100 bg-white shadow-sm"
              >
                <img
                  src={img.preview || img.url}
                  alt={img.caption || `Image ${idx + 1}`}
                  className="w-full h-48 object-cover"
                />

                {/* Remove Button */}
                <button
                  type="button"
                  onClick={() => removeImage(idx)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Reorder Buttons */}
                <div className="absolute top-2 left-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition">
                  <button
                    type="button"
                    onClick={() => moveImage(idx, "up")}
                    disabled={idx === 0}
                    className="bg-white/90 p-1.5 rounded shadow disabled:opacity-40"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => moveImage(idx, "down")}
                    disabled={idx === images.length - 1}
                    className="bg-white/90 p-1.5 rounded shadow disabled:opacity-40"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Caption */}
                <input
                  type="text"
                  placeholder="Add caption (optional)"
                  value={img.caption}
                  onChange={(e) => updateCaption(idx, e.target.value)}
                  className="w-full px-3 py-2 text-sm border-t border-gray-200 bg-white focus:outline-none focus:border-sky-400"
                />
              </div>
            ))}

            {/* Upload Trigger */}
            <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-sky-400 hover:bg-sky-50 transition group">
              <Upload className="h-10 w-10 text-gray-400 mb-2 group-hover:text-sky-600" />
              <span className="text-sm text-gray-500">Add Photos</span>
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

        {/* Submit Actions */}
        <div className="flex gap-4 pt-8 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-3 px-8 py-3.5 bg-sky-600 text-white font-semibold rounded-xl hover:bg-sky-700 disabled:opacity-60 disabled:cursor-not-allowed transition shadow-lg"
          >
            {saving ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                {isEdit ? "Update Event" : "Create Event"}
              </>
            )}
          </button>

          <Link
            to="/admin/event"
            className="px-8 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition"
          >
            Cancel
          </Link>
        </div>
      </form>
    </AdminLayout>
  );
}