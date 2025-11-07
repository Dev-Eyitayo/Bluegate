import React, { useState, useEffect } from "react";
import { AlertCircle, Loader2, CheckCircle } from "lucide-react";
import { apiRequest } from "../../utils/apiClient";

export default function TrainingForm() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    number: "",
    email: "",
    student: "",
    institution: "",
    faculty: "",
    department: "",
    matricNumber: "",
    affiliatedOrg: "",
    departmentUnit: "",
    positionInOrg: "",
    yearsOfResearch: "",
    thematic1: false,
    thematic2: false,
    thematic3: false,
    thematic4: false,
    paymentProof: null,
    similarTraining: "",
    expectation: "",
    hopeToLearn: "",
  });

  const [showStudentFields, setShowStudentFields] = useState(false);
  const [showOrgFields, setShowOrgFields] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => setNotification({ message: "", type: "" }), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));

    if (name === "student") {
      setShowStudentFields(value === "yes");
      setShowOrgFields(value === "no");
    }

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Required core fields
    const required = {
      name: "Full Name is required",
      gender: "Gender is required",
      email: "Email is required",
      student: "Please indicate if you are a student",
      similarTraining: "Please indicate if you have attended similar training",
      expectation: "Expectation is required",
      hopeToLearn: "Skills you hope to learn is required",
    };

    Object.keys(required).forEach((field) => {
      if (!formData[field] || formData[field].toString().trim() === "") {
        newErrors[field] = required[field];
      }
    });

    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    const selectedThematics = ["thematic1", "thematic2", "thematic3", "thematic4"].filter(
      (t) => formData[t]
    );
    if (selectedThematics.length === 0) newErrors.thematic = "Select at least one thematic area";
    if (selectedThematics.length > 3) newErrors.thematic = "Maximum 3 thematic areas allowed";

    if (!formData.paymentProof) {
      newErrors.paymentProof = "Payment proof is required";
    } else if (formData.paymentProof.size > 5 * 1024 * 1024) {
      newErrors.paymentProof = "File size must be ≤ 5 MB";
    }

    if (showStudentFields) {
      ["institution", "faculty", "department", "matricNumber"].forEach((f) => {
        if (!formData[f]?.trim()) newErrors[f] = `${f.replace(/^\w/, (c) => c.toUpperCase())} is required`;
      });
    }

    if (showOrgFields) {
      ["affiliatedOrg", "departmentUnit", "positionInOrg", "yearsOfResearch"].forEach((f) => {
        if (!formData[f]?.trim()) newErrors[f] = `${f.replace(/^\w/, (c) => c.toUpperCase())} is required`;
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildPayload = () => {
    const selectedThematics = [
      formData.thematic1 && "Thematic Area One",
      formData.thematic2 && "Thematic Area Two",
      formData.thematic3 && "Thematic Area Three",
      formData.thematic4 && "Thematic Area Four",
    ].filter(Boolean);

    const base = {
      name: formData.name.trim(),
      gender: formData.gender,
      phone: formData.number || null,
      email: formData.email.trim(),
      isStudent: formData.student === "yes",
      thematicAreas: selectedThematics,
      similarTraining: formData.similarTraining,
      expectation: formData.expectation.trim(),
      hopeToLearn: formData.hopeToLearn.trim(),
    };

    if (showStudentFields) {
      Object.assign(base, {
        institution: formData.institution.trim(),
        faculty: formData.faculty.trim(),
        department: formData.department.trim(),
        matricNumber: formData.matricNumber.trim(),
      });
    }

    if (showOrgFields) {
      Object.assign(base, {
        affiliatedOrg: formData.affiliatedOrg.trim(),
        departmentUnit: formData.departmentUnit.trim(),
        positionInOrg: formData.positionInOrg.trim(),
        yearsOfResearch: formData.yearsOfResearch.trim(),
      });
    }

    return base;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setNotification({ message: "Please fix the errors below.", type: "error" });
      return;
    }

    setIsSubmitting(true);
    setNotification({ message: "", type: "" });

    try {
      const payload = buildPayload();

      const form = new FormData();
      form.append("data", JSON.stringify(payload));           // <-- JSON string
      form.append("payment_proof", formData.paymentProof);    // <-- file

      await apiRequest("/trainings", "POST", form);
      // Note: apiRequest should NOT set Content-Type — browser sets it with boundary

      setNotification({
        message: "Thank you! Your application has been submitted.",
        type: "success",
      });

      // Reset
      setFormData({
        name: "", gender: "", number: "", email: "", student: "",
        institution: "", faculty: "", department: "", matricNumber: "",
        affiliatedOrg: "", departmentUnit: "", positionInOrg: "", yearsOfResearch: "",
        thematic1: false, thematic2: false, thematic3: false, thematic4: false,
        paymentProof: null, similarTraining: "", expectation: "", hopeToLearn: "",
      });
      setShowStudentFields(false);
      setShowOrgFields(false);
      setErrors({});
    } catch (error) {
      console.error("Submission error:", error);
      setNotification({
        message: error.message || "Submission failed. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const thematicAreas = [
    { id: "thematic1", title: "Thematic Area One", desc: "Scientific Proposal and Grant Writing..." },
    { id: "thematic2", title: "Thematic Area Two", desc: "Data Collection, Management & Analysis..." },
    { id: "thematic3", title: "Thematic Area Three", desc: "Research/Project Dissemination..." },
    { id: "thematic4", title: "Thematic Area Four", desc: "Field-Based Monitoring and Evaluation..." },
  ];

  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      <section className="py-8 px-2 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-sky-800 text-center mb-2">TRAINING FORM</h1>
        <p className="text-center text-lg text-sky-700 font-medium max-w-4xl mx-auto">
          Register for Research Capacity Building Training
        </p>
      </section>

      {notification.message && (
        <div
          className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-3 rounded-lg shadow-md text-sm font-medium transition-all ${
            notification.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {notification.type === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          <span>{notification.message}</span>
        </div>
      )}

      <section className="px-2 max-w-4xl mx-auto py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-300 p-8 space-y-8" noValidate>
          {/* SECTION A */}
          <div>
            <h2 className="text-2xl font-bold text-sky-700 mb-4">SECTION A: SOCIO-DEMOGRAPHIC INFORMATION</h2>

            {/* Name */}
            <div className="mb-5">
              <label className="block font-medium text-gray-700 mb-1">1. Full Name <span className="text-red-500">*</span></label>
              <input
                type="text" name="name" value={formData.name} onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Gender */}
            <div className="mb-5">
              <label className="block font-medium text-gray-700 mb-2">2. Gender <span className="text-red-500">*</span></label>
              <div className="flex gap-6">
                {["Male", "Female"].map((g) => (
                  <label key={g} className="flex items-center">
                    <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleChange} className="mr-2" />
                    {g}
                  </label>
                ))}
              </div>
              {errors.gender && <p className="text-red-600 text-xs mt-1">{errors.gender}</p>}
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label className="block font-medium text-gray-700 mb-1">3. Phone Number</label>
              <input
                type="tel" name="number" value={formData.number} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="+234..."
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block font-medium text-gray-700 mb-1">4. Email Address <span className="text-red-500">*</span></label>
              <input
                type="email" name="email" value={formData.email} onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Student? */}
            <div className="mb-5">
              <label className="block font-medium text-gray-700 mb-2">5. Are you a student? <span className="text-red-500">*</span></label>
              <div className="flex gap-6">
                {["yes", "no"].map((opt) => (
                  <label key={opt} className="flex items-center">
                    <input type="radio" name="student" value={opt} checked={formData.student === opt} onChange={handleChange} className="mr-2" />
                    {opt === "yes" ? "Yes" : "No"}
                  </label>
                ))}
              </div>
              {errors.student && <p className="text-red-600 text-xs mt-1">{errors.student}</p>}
            </div>

            {/* Student Fields */}
            {showStudentFields && (
              <div className="space-y-4 p-4 bg-sky-50 rounded-lg">
                {[
                  { name: "institution", label: "6. Institution", req: true },
                  { name: "faculty", label: "7. Faculty", req: true },
                  { name: "department", label: "8. Department", req: true },
                  { name: "matricNumber", label: "9. Matric Number", req: true },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block font-medium text-sky-700">
                      {f.label} {f.req && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type="text" name={f.name} value={formData[f.name]} onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg ${errors[f.name] ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors[f.name] && <p className="text-red-600 text-xs mt-1">{errors[f.name]}</p>}
                  </div>
                ))}
              </div>
            )}

            {/* Org Fields */}
            {showOrgFields && (
              <div className="space-y-4 p-4 bg-amber-50 rounded-lg">
                {[
                  { name: "affiliatedOrg", label: "10. Affiliated Organisation", req: true },
                  { name: "departmentUnit", label: "11. Department/Unit", req: true },
                  { name: "positionInOrg", label: "12. Position in Organisation", req: true },
                  { name: "yearsOfResearch", label: "13. Years of Research Experience", req: true },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block font-medium text-amber-700">
                      {f.label} {f.req && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type="text" name={f.name} value={formData[f.name]} onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg ${errors[f.name] ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors[f.name] && <p className="text-red-600 text-xs mt-1">{errors[f.name]}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>

          <hr className="border-red-500" />

          {/* SECTION B */}
          <div>
            <h3 className="text-xl font-bold text-sky-700 mb-3">SECTION B: THEMATIC AREAS</h3>
            <p className="text-red-600 font-medium mb-4">YOU CAN PARTICIPATE IN UP TO 3 THEMATIC AREAS</p>
            {errors.thematic && <p className="text-red-600 text-sm mb-2 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.thematic}</p>}
            <div className="space-y-6">
              {thematicAreas.map((area) => (
                <div key={area.id} className="flex items-start gap-3">
                  <input
                    type="checkbox" name={area.id} checked={formData[area.id]} onChange={handleChange}
                    className="mt-1 h-5 w-5 text-sky-600 rounded"
                  />
                  <div>
                    <h4 className="font-bold text-sky-700">{area.title}</h4>
                    <p className="text-gray-700 text-sm">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-red-500" />

          {/* SECTION C */}
          <div>
            <h3 className="text-xl font-bold text-sky-700 mb-3">SECTION C: PAYMENT EVIDENCE</h3>
            <p className="text-gray-700 mb-4">Upload payment receipt (JPG, PNG, PDF ≤ 5 MB)</p>
            <input
              type="file" name="paymentProof" onChange={handleChange} accept="image/*,.pdf"
              className={`block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-600 file:text-white hover:file:bg-sky-700 ${errors.paymentProof ? "border-red-500" : ""}`}
            />
            {errors.paymentProof && <p className="text-red-600 text-xs mt-1">{errors.paymentProof}</p>}
          </div>

          <hr className="border-red-500" />

          {/* SECTION D */}
          <div>
            <h3 className="text-xl font-bold text-sky-700 mb-4">SECTION D: BASELINE INFORMATION</h3>

            <div className="mb-5">
              <label className="block font-medium text-gray-700 mb-2">Have you attended similar training before? <span className="text-red-500">*</span></label>
              <div className="flex gap-6">
                {["Yes", "No"].map((opt) => (
                  <label key={opt} className="flex items-center">
                    <input type="radio" name="similarTraining" value={opt} checked={formData.similarTraining === opt} onChange={handleChange} className="mr-2" />
                    {opt}
                  </label>
                ))}
              </div>
              {errors.similarTraining && <p className="text-red-600 text-xs mt-1">{errors.similarTraining}</p>}
            </div>

            <div className="mb-5">
              <label className="block font-medium text-gray-700 mb-1">What are your expectations from this training? <span className="text-red-500">*</span></label>
              <textarea
                name="expectation" value={formData.expectation} onChange={handleChange} rows={4}
                className={`w-full px-4 py-2 border rounded-lg ${errors.expectation ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.expectation && <p className="text-red-600 text-xs mt-1">{errors.expectation}</p>}
            </div>

            <div className="mb-5">
              <label className="block font-medium text-gray-700 mb-1">What specific skills do you hope to learn? <span className="text-red-500">*</span></label>
              <textarea
                name="hopeToLearn" value={formData.hopeToLearn} onChange={handleChange} rows={4}
                className={`w-full px-4 py-2 border rounded-lg ${errors.hopeToLearn ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.hopeToLearn && <p className="text-red-600 text-xs mt-1">{errors.hopeToLearn}</p>}
            </div>
          </div>

          <div className="text-center pt-6">
            <button
              type="submit" disabled={isSubmitting}
              className={`flex items-center justify-center gap-2 w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-10 rounded-lg shadow-md transition text-lg ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isSubmitting && <Loader2 className="animate-spin w-5 h-5" />}
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}