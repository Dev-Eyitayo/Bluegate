import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { apiRequest } from "../../../utils/apiClient";
import AdminLayout from "../../layouts/AdminLayout";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { format } from "date-fns";
import {
  Download,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  GraduationCap,
  Building,
  Briefcase,
  Clock,
  FileText,
  Image,
  CheckCircle,
  Globe,
  Star,
  Heart,
} from "lucide-react";

// Reusable Field
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

export default function TrainingApplicationDetail() {
  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRecord = useCallback(async () => {
    setLoading(true);
    try {
      const r = await apiRequest(`/trainings/${id}`, "GET");
      setRecord(r);
    } catch (err) {
      console.error("Failed to fetch training application:", err);
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
    const { data, payment } = record;

    // Title
    doc.setFontSize(20);
    doc.text(`Training Application #${record.id}`, 14, 25);
    doc.setFontSize(11);
    doc.text(
      `Submitted: ${format(new Date(record.created_at), "PPP 'at' p")}`,
      14,
      35
    );

    const rows = [];

    const addSection = (title) => {
      rows.push([{ content: title, colSpan: 2, styles: { fontStyle: "bold", fillColor: [240, 249, 255] } }]);
    };

    // Personal
    addSection("Personal Information");
    rows.push(["Name", data.name || "—"]);
    rows.push(["Email", data.email || "—"]);
    rows.push(["Phone", data.phone || "—"]);
    rows.push(["Gender", data.gender || "—"]);

    // Student / Org
    if (data.isStudent) {
      addSection("Student Information");
      rows.push(["Institution", data.institution || "—"]);
      rows.push(["Faculty", data.faculty || "—"]);
      rows.push(["Department", data.department || "—"]);
      rows.push(["Matric Number", data.matricNumber || "—"]);
    } else {
      addSection("Professional Information");
      rows.push(["Organisation", data.affiliatedOrg || "—"]);
      rows.push(["Department/Unit", data.departmentUnit || "—"]);
      rows.push(["Position", data.positionInOrg || "—"]);
      rows.push(["Years of Research", data.yearsOfResearch || "—"]);
    }

    // Thematic Areas
    addSection("Thematic Areas");
    if (Array.isArray(data.thematicAreas) && data.thematicAreas.length > 0) {
      data.thematicAreas.forEach((area) => {
        rows.push([area, ""]);
      });
    } else {
      rows.push(["None selected", ""]);
    }

    // Baseline
    addSection("Baseline Information");
    rows.push(["Attended Similar Training", data.similarTraining || "—"]);
    rows.push(["Expectation", data.expectation || "—"]);
    rows.push(["Skills to Learn", data.hopeToLearn || "—"]);

    // Payment
    addSection("Payment Proof");
    rows.push(["File URL", payment?.file_url ? "See attached image" : "—"]);

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
    });

    // Add payment image if available
    if (payment?.file_url) {
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imgData = canvas.toDataURL("image/jpeg", 0.8);

        const imgWidth = 180;
        const pageWidth = doc.internal.pageSize.width;
        const x = (pageWidth - imgWidth) / 2;
        const y = doc.lastAutoTable.finalY + 15;

        doc.setFontSize(12);
        doc.text("Payment Proof", x, y - 5);
        doc.addImage(imgData, "JPEG", x, y, imgWidth, (img.height * imgWidth) / img.width);
        doc.save(`training-${record.id}.pdf`);
      };
      img.onerror = () => doc.save(`training-${record.id}.pdf`);
      img.src = payment.file_url;
    } else {
      doc.save(`training-${record.id}.pdf`);
    }
  }, [record]);

  // ================== UI STATES ==================
  if (loading) {
    return (
      <AdminLayout>
        <div className="p-8 text-center text-gray-600">Loading application details...</div>
      </AdminLayout>
    );
  }

  if (!record) {
    return (
      <AdminLayout>
        <div className="p-8 text-center text-red-600">Application not found.</div>
      </AdminLayout>
    );
  }

  const { data, payment } = record;

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Training Application #{record.id}
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
              <Field label="Phone" value={data.phone} icon={Phone} />
              <Field label="Gender" value={data.gender} />
            </div>
          </div>

          {/* Student / Org */}
          {data.isStudent ? (
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
                <GraduationCap className="h-5 w-5 text-sky-600" />
                Student Information
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Institution" value={data.institution} icon={Building} />
                <Field label="Faculty" value={data.faculty} />
                <Field label="Department" value={data.department} />
                <Field label="Matric Number" value={data.matricNumber} />
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
                <Briefcase className="h-5 w-5 text-sky-600" />
                Professional Information
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Organisation" value={data.affiliatedOrg} icon={Building} />
                <Field label="Department/Unit" value={data.departmentUnit} />
                <Field label="Position" value={data.positionInOrg} />
                <Field label="Years of Research" value={data.yearsOfResearch} />
              </div>
            </div>
          )}

          {/* Thematic Areas */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Star className="h-5 w-5 text-sky-600" />
              Thematic Areas
            </h2>
            <ul className="mt-2 space-y-1">
              {Array.isArray(data.thematicAreas) && data.thematicAreas.length > 0 ? (
                data.thematicAreas.map((area, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    {area}
                  </li>
                ))
              ) : (
                <li className="text-sm text-gray-400">—</li>
              )}
            </ul>
          </div>

          {/* Baseline */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
              <FileText className="h-5 w-5 text-sky-600" />
              Baseline Information
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700">Attended Similar Training?</p>
                <p className="mt-1 text-sm text-gray-900">{data.similarTraining || "—"}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Expectation</p>
                <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{data.expectation || "—"}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Skills to Learn</p>
                <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{data.hopeToLearn || "—"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Payment Proof */}
        <div className="space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Image className="h-5 w-5 text-sky-600" />
              Payment Proof
            </h2>

            {payment?.file_url ? (
              <div className="space-y-3">
                <a
                  href={payment.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={payment.file_url}
                    alt="Payment proof"
                    className="w-full rounded-lg border border-gray-200 shadow-sm object-contain max-h-64"
                  />
                </a>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>Type: {payment.file_type}</p>
                  <p>
                    <a
                      href={payment.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 hover:underline"
                    >
                      Open in new tab
                    </a>
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500">No payment proof uploaded.</p>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}