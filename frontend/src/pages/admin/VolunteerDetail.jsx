import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { apiRequest } from "../../../utils/apiClient";
import AdminLayout from "../../layouts/AdminLayout";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // ← Correct import
import { format } from "date-fns";
import {
  Download,
  User,
  Briefcase,
  Calendar,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  Heart,
  Clock,
  Mail,
  Home,
  Globe,
  Building,
  Star,
  Users,
} from "lucide-react";

// Reusable Field Component
const Field = ({ label, value, icon: Icon }) => (
  <div className="flex items-start gap-3 py-2">
    {Icon && <Icon className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />}
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-gray-700">{label}</p>
      <p className="mt-0.5 text-sm text-gray-900 break-words">
        {value || "—"}
      </p>
    </div>
  </div>
);

export default function VolunteerDetail() {
  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRecord = useCallback(async () => {
    setLoading(true);
    try {
      const r = await apiRequest(`/volunteers/${id}`, "GET");
      setRecord(r);
    } catch (err) {
      console.error("Failed to fetch volunteer:", err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchRecord();
  }, [fetchRecord]);

  // ================== PDF EXPORT ==================
  const exportToPDF = useCallback(() => {
    if (!record) return;

    const doc = new jsPDF();
    const { data } = record;

    // Title
    doc.setFontSize(20);
    doc.text(`Volunteer Application #${record.id}`, 14, 25);
    doc.setFontSize(11);
    doc.text(
      `Submitted: ${format(new Date(record.created_at), "PPP 'at' p")}`,
      14,
      35
    );

    const rows = [];

    // Helper to add section
    const addSection = (title) => {
      rows.push([{ content: title, colSpan: 2, styles: { fontStyle: "bold", fillColor: [240, 249, 255] } }]);
    };

    // Personal Info
    addSection("Personal Information");
    rows.push(["Name", data.name || "—"]);
    rows.push(["Age", data.age || "—"]);
    rows.push(["Gender", data.gender || "—"]);
    rows.push(["Email", data.email || "—"]);
    rows.push(["Address", data.address || "—"]);
    rows.push(["Languages", data.languages || "—"]);

    // Education
    addSection("Education");
    rows.push(["Education Level", data.education_level || "—"]);
    rows.push(["Specialization", data.specialization || "—"]);
    rows.push(["Student", data.is_student === "Yes" ? "Yes" : "No"]);
    if (data.is_student === "Yes") {
      rows.push(["Institution", data.institution || "—"]);
      rows.push(["Course", data.course || "—"]);
    }

    // Employment
    addSection("Employment");
    rows.push(["Employer", data.employer || "—"]);
    rows.push(["Position", data.position || "—"]);
    rows.push(["Employment Date", data.employment_date || "—"]);
    rows.push(["Employer Address", data.employer_address || "—"]);
    rows.push(["Notify Employer", data.notify_employer || "—"]);

    // Skills & Experience
    addSection("Skills & Experience");
    rows.push(["Special Skills", data.special_skills || "—"]);
    rows.push(["Memberships", data.memberships || "—"]);
    rows.push(["Experience", data.experience || "—"]);
    rows.push(["Preparation", data.preparation || "—"]);
    rows.push(["Motivation", data.motivation || "—"]);

    // Emergency Contact
    addSection("Emergency Contact");
    rows.push(["Name", data.emergency_contact || "—"]);
    rows.push(["Phone", data.emergency_phone || "—"]);

    // Interests & Availability
    addSection("Interests");
    rows.push(["Interests", Array.isArray(data.interest) ? data.interest.join(", ") : "—"]);

    addSection("Availability");
    rows.push(["Availability", Array.isArray(data.availability) ? data.availability.join(", ") : "—"]);

    // References
    addSection("References");
    if (Array.isArray(data.references) && data.references.length > 0) {
      data.references.forEach((ref, i) => {
        if (ref.name) {
          rows.push([`Reference #${i + 1}`, ""]);
          rows.push(["  Name", ref.name]);
          rows.push(["  Relationship", ref.relationship || "—"]);
          rows.push(["  Known For", ref.length ? `${ref.length} years` : "—"]);
          rows.push(["  Phone", ref.phone || "—"]);
        }
      });
    } else {
      rows.push(["No references provided", "—"]);
    }

    // Generate Table
    autoTable(doc, {
      startY: 45,
      head: [["Field", "Value"]],
      body: rows,
      theme: "grid",
      styles: { fontSize: 10, cellPadding: 3 },
      headStyles: { fillColor: [14, 165, 233], textColor: 255, fontStyle: "bold" },
      columnStyles: {
        0: { fontStyle: "bold", cellWidth: 60 },
        1: { cellWidth: 110 },
      },
      didParseCell: (data) => {
        if (data.row.section === "body" && data.column.index === 0 && data.cell.text[0].startsWith("  ")) {
          data.cell.styles.fontStyle = "normal";
          data.cell.styles.textColor = [100, 100, 100];
        }
      },
    });

    doc.save(`volunteer-${record.id}.pdf`);
  }, [record]);

  // ================== UI STATES ==================
  if (loading) {
    return (
      <AdminLayout>
        <div className="p-8 text-center text-gray-600">Loading volunteer details...</div>
      </AdminLayout>
    );
  }

  if (!record) {
    return (
      <AdminLayout>
        <div className="p-8 text-center text-red-600">Volunteer not found.</div>
      </AdminLayout>
    );
  }

  const { data } = record;

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Volunteer #{record.id}
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Submitted on{" "}
            {format(new Date(record.created_at), "MMMM d, yyyy 'at' h:mm a")}
          </p>
        </div>
        <button
          onClick={exportToPDF}
          className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-sky-700 transition shadow-sm"
        >
          <Download className="h-4 w-4" />
          Export PDF
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* LEFT: Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
              <User className="h-5 w-5 text-sky-600" />
              Personal Information
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" value={data.name} icon={User} />
              <Field label="Email" value={data.email} icon={Mail} />
              <Field label="Age" value={data.age} />
              <Field label="Gender" value={data.gender} />
              <Field label="Address" value={data.address} icon={Home} />
              <Field label="Languages" value={data.languages} icon={Globe} />
            </div>
          </div>

          {/* Education */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
              <GraduationCap className="h-5 w-5 text-sky-600" />
              Education
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Level" value={data.education_level} />
              <Field label="Specialization" value={data.specialization} />
              <Field label="Student" value={data.is_student} />
              {data.is_student === "Yes" && (
                <>
                  <Field label="Institution" value={data.institution} icon={Building} />
                  <Field label="Course" value={data.course} />
                </>
              )}
            </div>
          </div>

          {/* Employment */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Briefcase className="h-5 w-5 text-sky-600" />
              Employment
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Employer" value={data.employer} />
              <Field label="Position" value={data.position} />
              <Field label="Start Date" value={data.employment_date} icon={Calendar} />
              <Field label="Employer Address" value={data.employer_address} icon={MapPin} />
              <Field label="Notify Employer" value={data.notify_employer} />
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Star className="h-5 w-5 text-sky-600" />
              Skills & Interests
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700">Special Skills</p>
                <p className="mt-1 text-sm text-gray-900">{data.special_skills || "—"}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Memberships</p>
                <p className="mt-1 text-sm text-gray-900">{data.memberships || "—"}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Experience</p>
                <p className="mt-1 text-sm text-gray-900">{data.experience || "—"}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Preparation</p>
                <p className="mt-1 text-sm text-gray-900">{data.preparation || "—"}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Motivation</p>
                <p className="mt-1 text-sm text-gray-900">{data.motivation || "—"}</p>
              </div>
            </div>
          </div>

          {/* Emergency & Availability */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
                <Heart className="h-5 w-5 text-red-600" />
                Emergency Contact
              </h2>
              <Field label="Name" value={data.emergency_contact} />
              <Field label="Phone" value={data.emergency_phone} icon={Phone} />
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
                <Clock className="h-5 w-5 text-sky-600" />
                Availability
              </h2>
              <ul className="mt-2 space-y-1">
                {Array.isArray(data.availability) && data.availability.length > 0 ? (
                  data.availability.map((a, i) => (
                    <li key={i} className="text-sm text-gray-700">
                      • {a}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-400">—</li>
                )}
              </ul>
            </div>
          </div>

          {/* Interests */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Heart className="h-5 w-5 text-sky-600" />
              Interests
            </h2>
            <ul className="mt-2 space-y-1">
              {Array.isArray(data.interest) && data.interest.length > 0 ? (
                data.interest.map((i, idx) => (
                  <li key={idx} className="text-sm text-gray-700">
                    • {i}
                  </li>
                ))
              ) : (
                <li className="text-sm text-gray-400">—</li>
              )}
            </ul>
          </div>
        </div>

        {/* RIGHT: References */}
        <div className="space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Users className="h-5 w-5 text-sky-600" />
              References
            </h2>

            {Array.isArray(data.references) && data.references.some(r => r.name) ? (
              <div className="space-y-4">
                {data.references.map((ref, i) => (
                  <div
                    key={i}
                    className={`rounded-lg border p-4 transition ${
                      ref.name
                        ? "border-gray-200 bg-white"
                        : "border-gray-100 bg-gray-50 opacity-60"
                    }`}
                  >
                    {ref.name ? (
                      <>
                        <p className="font-medium text-gray-900">{ref.name}</p>
                        {ref.relationship && (
                          <p className="text-sm text-gray-600 mt-1">{ref.relationship}</p>
                        )}
                        {ref.length && (
                          <p className="text-xs text-gray-500 mt-1">
                            Known for {ref.length} year{ref.length !== "1" ? "s" : ""}
                          </p>
                        )}
                        {ref.phone && (
                          <p className="mt-1 text-sm text-gray-700 flex items-center gap-1">
                            <Phone className="h-3.5 w-3.5" />
                            {ref.phone}
                          </p>
                        )}
                      </>
                    ) : (
                      <p className="text-sm text-gray-400 italic">— Empty reference —</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No references provided.</p>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}