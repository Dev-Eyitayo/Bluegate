import React, { useState, useEffect } from "react";
import SectionHeader from "../components/SectionHeader";
import { HeartHandshake, Loader2, AlertCircle } from "lucide-react";
import { apiRequest } from "../../utils/apiClient";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({});
  const [agree, setAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" }); // success | error
  const [errors, setErrors] = useState({});

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => setNotification({ message: "", type: "" }), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Required fields
    const required = {
      name: "Full Name is required",
      age: "Age is required",
      gender: "Gender is required",
      email: "Email is required",
      address: "Home Address is required",
      languages: "Languages Spoken is required",
      education_level: "Highest Level of Education is required",
      emergency_contact: "Emergency Contact Name is required",
      emergency_phone: "Emergency Contact Phone is required",
    };

    Object.keys(required).forEach((field) => {
      if (!formData[field] || formData[field].toString().trim() === "") {
        newErrors[field] = required[field];
      }
    });

    // Email format
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Age must be 16+
    // if (formData.age && (isNaN(formData.age) || formData.age < 16)) {
    //   newErrors.age = "You must be at least 16 years old";
    // }

    // At least one interest
    const interests = [
      "Video Editing",
      "Camera Operation",
      "Graphic Design",
      "Moderation of Interviews",
      "Campaign planning and implementation",
      "Vocational training",
      "Legal/human rights services",
      "Community and medical outreach",
      "Social media campaign and marketing",
    ];
    const hasInterest = interests.some((i) => formData[i]);
    if (!hasInterest) {
      newErrors.interest = "Please select at least one area of interest";
    }

    // At least one availability
    const availabilityOptions = [
      "Mornings (Mon-Fri)",
      "Afternoons (Mon-Fri)",
      "Evenings (Mon-Fri)",
      "Weekends",
      "Once A Week",
      "More Than Once A Week",
      "One Time Only",
    ];
    const hasAvailability = availabilityOptions.some((opt) => formData[opt]);
    if (!hasAvailability) {
      newErrors.availability = "Please select at least one availability option";
    }

    // References: at least one with name and phone
    let hasValidRef = false;
    for (let i = 1; i <= 3; i++) {
      const name = formData[`ref_name_${i}`];
      const phone = formData[`ref_phone_${i}`];
      if (name && phone) {
        hasValidRef = true;
        break;
      }
    }
    if (!hasValidRef) {
      newErrors.references = "Please provide at least one reference with name and phone";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Build structured payload
  const buildPayload = () => {
    const interests = [
      "Video Editing",
      "Camera Operation",
      "Graphic Design",
      "Moderation of Interviews",
      "Campaign planning and implementation",
      "Vocational training",
      "Legal/human rights services",
      "Community and medical outreach",
      "Social media campaign and marketing",
    ].filter((area) => formData[area]);

    const availability = [
      "Mornings (Mon-Fri)",
      "Afternoons (Mon-Fri)",
      "Evenings (Mon-Fri)",
      "Weekends",
      "Once A Week",
      "More Than Once A Week",
      "One Time Only",
    ].filter((opt) => formData[opt]);

    const references = [1, 2, 3].map((i) => ({
      name: formData[`ref_name_${i}`] || "",
      relationship: formData[`ref_relationship_${i}`] || "",
      length: formData[`ref_length_${i}`] || "",
      phone: formData[`ref_phone_${i}`] || "",
    }));

    return {
      // Personal
      name: formData.name || "",
      age: formData.age || "",
      gender: formData.gender || "",
      email: formData.email || "",
      address: formData.address || "",
      languages: formData.languages || "",

      // Education
      education_level: formData.education_level || "",
      specialization: formData.specialization || "",
      is_student: formData.is_student || "",
      institution: formData.institution || "",
      course: formData.course || "",

      // Employment
      employer: formData.employer || "",
      position: formData.position || "",
      employment_date: formData.employment_date || "",
      employer_address: formData.employer_address || "",
      notify_employer: formData.notify_employer || "",

      // Skills
      special_skills: formData.special_skills || "",
      memberships: formData.memberships || "",
      experience: formData.experience || "",
      preparation: formData.preparation || "",
      motivation: formData.motivation || "",

      // Emergency
      emergency_contact: formData.emergency_contact || "",
      emergency_phone: formData.emergency_phone || "",

      // Grouped
      interest: interests,
      availability: availability,
      references: references,
    };
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree) {
      setNotification({ message: "You must agree to the declaration before submitting.", type: "error" });
      return;
    }

    if (!validateForm()) {
      setNotification({ message: "Please fix the errors below.", type: "error" });
      return;
    }

    setIsSubmitting(true);
    setNotification({ message: "", type: "" });

    try {
      const payload = buildPayload();
      await apiRequest("/volunteers", "POST", { data: payload });

      // Success
      setNotification({ message: "Thank you! Your application has been received.", type: "success" });
      setFormData({});
      setAgree(false);
      setErrors({});
    } catch (error) {
      console.error("Submission error:", error);
      setNotification({
        message: error.message || "Failed to submit. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Lists
  const thematicAreas = [
    "Video Editing",
    "Camera Operation",
    "Graphic Design",
    "Moderation of Interviews",
    "Campaign planning and implementation",
    "Vocational training",
    "Legal/human rights services",
    "Community and medical outreach",
    "Social media campaign and marketing",
  ];

  const availabilityOptions = [
    "Mornings (Mon-Fri)",
    "Afternoons (Mon-Fri)",
    "Evenings (Mon-Fri)",
    "Weekends",
    "Once A Week",
    "More Than Once A Week",
    "One Time Only",
  ];

  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      <section className="py-16 px-2 max-w-5xl mx-auto">
        <SectionHeader icon={HeartHandshake} title="Volunteer Application Form" />

        {/* Notification Toast */}
        {notification.message && (
          <div
            className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-3 rounded-lg shadow-md text-sm sm:text-base font-medium transition-all duration-300 ease-in-out transform ${
              notification.type === "success"
                ? "bg-emerald-50 border-emerald-200 text-white"
                : "bg-red-50 boder-red-200 text-white"
            }`}
          >
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span className="max-w-[80vw] sm:max-w-xs break-words">{notification.message}</span>
          </div>
        )}


        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-slate-300 p-8 mt-8 space-y-10"
          noValidate
        >
          {/* Thematic Areas */}
          <div>
            <h2 className="text-xl font-semibold text-sky-800 mb-4">
              Thematic Areas of Interest
            </h2>
            {errors.interest && (
              <p className="text-red-600 text-sm mb-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.interest}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {thematicAreas.map((interest) => (
                <label key={interest} className="flex items-center gap-2 text-slate-700">
                  <input
                    type="checkbox"
                    name={interest}
                    checked={!!formData[interest]}
                    onChange={handleChange}
                    className="text-sky-600 rounded border-sky-300 focus:ring-sky-500"
                  />
                  {interest}
                </label>
              ))}
            </div>
          </div>

          {/* Personal Information */}
          <div>
            <h2 className="text-xl font-semibold text-sky-800 mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name || ""}
                  onChange={handleChange}
                  className={`border rounded-md p-2 w-full ${
                    errors.name ? "border-red-500" : "border-slate-300"
                  }`}
                />
                {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  name="age"
                  type="number"
                  placeholder="Age (Years) *"
                  value={formData.age || ""}
                  onChange={handleChange}
                  className={`border rounded-md p-2 w-full ${
                    errors.age ? "border-red-500" : "border-slate-300"
                  }`}
                />
                {errors.age && <p className="text-red-600 text-xs mt-1">{errors.age}</p>}
              </div>

              <div className="flex gap-4 items-center">
                <span className="text-sm text-slate-700">Gender *</span>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                  />{" "}
                  Male
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                  />{" "}
                  Female
                </label>
              </div>
              {errors.gender && <p className="text-red-600 text-xs">{errors.gender}</p>}

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="E-mail *"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className={`border rounded-md p-2 w-full ${
                    errors.email ? "border-red-500" : "border-slate-300"
                  }`}
                />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="md:col-span-2">
                <input
                  name="address"
                  placeholder="Home Address *"
                  value={formData.address || ""}
                  onChange={handleChange}
                  className={`border rounded-md p-2 w-full ${
                    errors.address ? "border-red-500" : "border-slate-300"
                  }`}
                />
                {errors.address && <p className="text-red-600 text-xs mt-1">{errors.address}</p>}
              </div>

              <div className="md:col-span-2">
                <input
                  name="languages"
                  placeholder="Languages Spoken *"
                  value={formData.languages || ""}
                  onChange={handleChange}
                  className={`border rounded-md p-2 w-full ${
                    errors.languages ? "border-red-500" : "border-slate-300"
                  }`}
                />
                {errors.languages && <p className="text-red-600 text-xs mt-1">{errors.languages}</p>}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xl font-semibold text-sky-800 mb-4">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  name="education_level"
                  placeholder="Highest Level of Education *"
                  value={formData.education_level || ""}
                  onChange={handleChange}
                  className={`border rounded-md p-2 w-full ${
                    errors.education_level ? "border-red-500" : "border-slate-300"
                  }`}
                />
                {errors.education_level && (
                  <p className="text-red-600 text-xs mt-1">{errors.education_level}</p>
                )}
              </div>
              <input
                name="specialization"
                placeholder="Area of Specialization"
                value={formData.specialization || ""}
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <div className="flex gap-4 items-center">
                <span className="text-sm text-slate-700">Currently a student?</span>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="is_student"
                    value="Yes"
                    checked={formData.is_student === "Yes"}
                    onChange={handleChange}
                  />{" "}
                  Yes
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="is_student"
                    value="No"
                    checked={formData.is_student === "No"}
                    onChange={handleChange}
                  />{" "}
                  No
                </label>
              </div>
              <input
                name="institution"
                placeholder="Institution (if student)"
                value={formData.institution || ""}
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <input
                name="course"
                placeholder="Course Of Study"
                value={formData.course || ""}
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
            </div>
          </div>

          {/* Employment */}
          <div>
            <h2 className="text-xl font-semibold text-sky-800 mb-4">Employment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="employer"
                placeholder="Current Employer"
                value={formData.employer || ""}
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <input
                name="position"
                placeholder="Position/Title"
                value={formData.position || ""}
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <input
                name="employment_date"
                placeholder="Date of Employment"
                value={formData.employment_date || ""}
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <input
                name="employer_address"
                placeholder="Employer Address"
                value={formData.employer_address || ""}
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <div className="flex gap-4 items-center md:col-span-2">
                <p className="text-slate-700">Keep employer informed of volunteer service?</p>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="notify_employer"
                    value="Yes"
                    checked={formData.notify_employer === "Yes"}
                    onChange={handleChange}
                  />{" "}
                  Yes
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="notify_employer"
                    value="No"
                    checked={formData.notify_employer === "No"}
                    onChange={handleChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Skills & Experience */}
          <div>
            <h2 className="text-xl font-semibold text-sky-800 mb-4">Skills & Experience</h2>
            {[
              { name: "special_skills", placeholder: "Special training, skills, hobbies" },
              { name: "memberships", placeholder: "Groups, clubs, or organizational memberships" },
              { name: "experience", placeholder: "Describe prior volunteer experience (include organizations and dates)" },
              { name: "preparation", placeholder: "What experiences have prepared you to volunteer in this field?" },
              { name: "motivation", placeholder: "Why do you want to volunteer? What do you hope to gain?" },
            ].map((field) => (
              <textarea
                key={field.name}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full mb-4"
                rows={3}
              />
            ))}
          </div>

          {/* Emergency Contact & Availability */}
          <div>
            <h2 className="text-xl font-semibold text-sky-800 mb-4">Emergency Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <input
                  name="emergency_contact"
                  placeholder="Who to notify in case of emergency? *"
                  value={formData.emergency_contact || ""}
                  onChange={handleChange}
                  className={`border rounded-md p-2 w-full ${
                    errors.emergency_contact ? "border-red-500" : "border-slate-300"
                  }`}
                />
                {errors.emergency_contact && (
                  <p className="text-red-600 text-xs mt-1">{errors.emergency_contact}</p>
                )}
              </div>
              <div>
                <input
                  name="emergency_phone"
                  placeholder="Telephone Number *"
                  value={formData.emergency_phone || ""}
                  onChange={handleChange}
                  className={`border rounded-md p-2 w-full ${
                    errors.emergency_phone ? "border-red-500" : "border-slate-300"
                  }`}
                />
                {errors.emergency_phone && (
                  <p className="text-red-600 text-xs mt-1">{errors.emergency_phone}</p>
                )}
              </div>
            </div>

            <h2 className="text-xl font-semibold mt-8 text-sky-800 mb-4">
              Availability (check all applicable)
            </h2>
            {errors.availability && (
              <p className="text-red-600 text-sm mb-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.availability}
              </p>
            )}
            <div className="flex flex-wrap gap-4 text-slate-700">
              {availabilityOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name={opt}
                    checked={!!formData[opt]}
                    onChange={handleChange}
                    className="text-sky-600 rounded border-sky-300 focus:ring-sky-500"
                  />{" "}
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* References */}
          <div>
            <h2 className="text-xl font-semibold text-sky-800 mb-1">References</h2>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Please list three people who know you well and can attest to your character, skills, and dependability.
            </p>
            {errors.references && (
              <p className="text-red-600 text-sm mb-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.references}
              </p>
            )}
            {[1, 2, 3].map((num) => (
              <div key={num} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <input
                  placeholder="Name/Organization"
                  name={`ref_name_${num}`}
                  value={formData[`ref_name_${num}`] || ""}
                  onChange={handleChange}
                  className="border border-slate-300 rounded-md p-2"
                />
                <input
                  placeholder="Relationship"
                  name={`ref_relationship_${num}`}
                  value={formData[`ref_relationship_${num}`] || ""}
                  onChange={handleChange}
                  className="border border-slate-300 rounded-md p-2"
                />
                <input
                  placeholder="Length of relationship"
                  name={`ref_length_${num}`}
                  value={formData[`ref_length_${num}`] || ""}
                  onChange={handleChange}
                  className="border border-slate-300 rounded-md p-2"
                />
                <input
                  placeholder="Phone number"
                  name={`ref_phone_${num}`}
                  value={formData[`ref_phone_${num}`] || ""}
                  onChange={handleChange}
                  className="border border-slate-300 rounded-md p-2"
                />
              </div>
            ))}
          </div>

          {/* Declaration */}
          <div className="bg-sky-50 border border-sky-100 rounded-md p-4 space-y-3">
            <p className="text-slate-700 text-sm leading-relaxed">
              I understand that this is an application for and not a commitment or promise of
              volunteer opportunity. I certify that the information provided is true and complete to
              the best of my knowledge.
            </p>
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="text-sky-600 rounded border-sky-300 focus:ring-sky-500"
              />
              I have read and understand the above statement. *
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              flex items-center justify-center gap-2 w-full sm:w-auto
              bg-sky-700 hover:bg-sky-800 text-white font-semibold
              py-2 px-6 rounded-md shadow-md transition-all
              ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}
            `}
          >
            {isSubmitting && <Loader2 className="animate-spin w-5 h-5" />}
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </section>
    </div>
  );
}