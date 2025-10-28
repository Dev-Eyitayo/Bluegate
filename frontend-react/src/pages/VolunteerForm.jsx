import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { HeartHandshake } from "lucide-react";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({});
  const [agree, setAgree] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("Please check the box to confirm that you understand before submitting.");
      return;
    }
    console.log(formData);
    alert("Form submitted successfully!");
  };

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

  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      <section className="py-16 px-2 max-w-5xl mx-auto">
        <SectionHeader icon={HeartHandshake} title="Volunteer Application Form" />

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-slate-300 p-8 mt-8 space-y-10"
        >
          {/* Thematic Areas */}
          <div>
            <h2 className="text-xl font-semibold text-sky-800 mb-4">
              Thematic Areas of Interest
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {interests.map((interest) => (
                <label key={interest} className="flex items-center gap-2 text-slate-700">
                  <input
                    type="checkbox"
                    name={interest}
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
              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <input
                name="age"
                type="number"
                placeholder="Age (Years)"
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <div className="flex gap-4 items-center">
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
                </label>
              </div>
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <input
                name="address"
                placeholder="Home Address"
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full md:col-span-2"
              />
              <input
                name="languages"
                placeholder="Languages Spoken"
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full md:col-span-2"
              />
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xl font-semibold text-sky-800 mb-4">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="education_level"
                placeholder="Highest Level of Education"
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <input
                name="specialization"
                placeholder="Area of Specialization"
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <div className="flex gap-4 items-center">
                <label className="flex items-center gap-1">
                  <input type="radio" name="is_student" value="Yes" onChange={handleChange} /> Yes
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="is_student" value="No" onChange={handleChange} /> No
                </label>
              </div>
              <input
                name="institution"
                placeholder="Institution (if student)"
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <input
                name="course"
                placeholder="Course Of Study"
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
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <input
                name="position"
                placeholder="Position/Title"
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <input
                name="employment_date"
                placeholder="Date of Employment"
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <input
                name="employer_address"
                placeholder="Employer Address"
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <div className="flex gap-4 items-center md:col-span-2">
                <p className="text-slate-700">Keep employer informed of volunteer service?</p>
                <label className="flex items-center gap-1">
                  <input type="radio" name="notify_employer" value="Yes" onChange={handleChange} /> Yes
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="notify_employer" value="No" onChange={handleChange} /> No
                </label>
              </div>
            </div>
          </div>

          {/* Skills and Experience */}
          <div>
            <h2 className="text-xl font-semibold text-sky-800 mb-4">Skills & Experience</h2>
            <textarea
              name="special_skills"
              placeholder="Special training, skills, hobbies"
              onChange={handleChange}
              className="border border-slate-300 rounded-md p-2 w-full mb-4"
            />
            <textarea
              name="memberships"
              placeholder="Groups, clubs, or organizational memberships"
              onChange={handleChange}
              className="border border-slate-300 rounded-md p-2 w-full mb-4"
            />
            <textarea
              name="experience"
              placeholder="Describe prior volunteer experience (include organizations and dates)"
              onChange={handleChange}
              className="border border-slate-300 rounded-md p-2 w-full mb-4"
            />
            <textarea
              name="preparation"
              placeholder="What experiences have prepared you to volunteer in this field?"
              onChange={handleChange}
              className="border border-slate-300 rounded-md p-2 w-full mb-4"
            />
            <textarea
              name="motivation"
              placeholder="Why do you want to volunteer? What do you hope to gain?"
              onChange={handleChange}
              className="border border-slate-300 rounded-md p-2 w-full"
            />
          </div>

          {/* Emergency Contact */}
          <div>
            <h2 className="text-xl font-semibold text-sky-800 mb-4">Emergency Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <input
                name="emergency_contact"
                placeholder="Who to notify in case of emergency?"
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
              <input
                name="emergency_phone"
                placeholder="Telephone Number"
                onChange={handleChange}
                className="border border-slate-300 rounded-md p-2 w-full"
              />
            </div>
            <h2 className="text-xl font-semibold mt-8 text-sky-800 mb-4">
              Availability and Volunteer Assignment Preferences (Please check all applicable)
            </h2>
            <div className="flex flex-wrap gap-4 text-slate-700">
              {[
                "Mornings (Mon-Fri)",
                "Afternoons (Mon-Fri)",
                "Evenings (Mon-Fri)",
                "Weekends",
                "Once A Week",
                "More Than Once A Week",
                "One Time Only",
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-1">
                  <input type="checkbox" name={opt} onChange={handleChange} /> {opt}
                </label>
              ))}
            </div>
          </div>

          {/* References */}
          <div>
            <h2 className="text-xl font-semibold text-sky-800 mb-1">References</h2>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Please list three people who know you well and can attest to your character, skills, and dependability. Include your current or last employer.
            </p>
            {[1, 2, 3].map((num) => (
              <div key={num} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <input
                  placeholder="Name/Organization"
                  name={`ref_name_${num}`}
                  onChange={handleChange}
                  className="border border-slate-300 rounded-md p-2"
                />
                <input
                  placeholder="Relationship"
                  name={`ref_relationship_${num}`}
                  onChange={handleChange}
                  className="border border-slate-300 rounded-md p-2"
                />
                <input
                  placeholder="Length of relationship"
                  name={`ref_length_${num}`}
                  onChange={handleChange}
                  className="border border-slate-300 rounded-md p-2"
                />
                <input
                  placeholder="Phone number"
                  name={`ref_phone_${num}`}
                  onChange={handleChange}
                  className="border border-slate-300 rounded-md p-2"
                />
              </div>
            ))}
          </div>

          {/* Declaration + Confirmation */}
          <div className="bg-sky-50 border border-sky-100 rounded-md p-4 space-y-3">
            <p className="text-slate-700 text-sm leading-relaxed">
              I understand that this is an application for and not a commitment or promise of
              volunteer opportunity. I certify that the information provided is true and complete to
              the best of my knowledge and that misrepresentations may be cause for rejection or
              termination as a volunteer with Blue Gate Initiative.
            </p>
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="text-sky-600 rounded border-sky-300 focus:ring-sky-500"
              />
              I have read and understand the above statement.
            </label>
          </div>

          <button
            type="submit"
            className="bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all"
          >
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
}
