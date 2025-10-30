import React, { useState } from "react";

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your backend endpoint
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      {/* Page Title */}
      <section className="py-8 px-2 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-sky-800 text-center mb-2">
          TRAINING FORM
        </h1>
        <p className="text-center text-lg text-sky-700 font-medium max-w-4xl mx-auto">
          Register for Research Capacity Building Training
        </p>
      </section>

      {/* Form Section */}
      <section className="px-2 max-w-4xl mx-auto py-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl border border-slate-300 p-8 space-y-8"
          encType="multipart/form-data"
        >
          {/* SECTION A: Socio-Demographic */}
          <div>
            <h2 className="text-2xl font-bold text-sky-700 mb-4">
              SECTION A: SOCIO-DEMOGRAPHIC INFORMATION
            </h2>
            <p className="text-red-600 font-medium mb-4">
              Thematic Areas of Interest (Please fill & select all that apply)
            </p>

            <div className="space-y-5">
              {/* 1. Name */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  1. Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Enter your full name"
                />
              </div>

              {/* 2. Gender */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  2. Gender <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    Male
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    Female
                  </label>
                </div>
              </div>

              {/* 3. Phone */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  3. Phone Number
                </label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                  placeholder="+234..."
                />
              </div>

              {/* 4. Email */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  4. Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                  placeholder="you@example.com"
                />
              </div>

              {/* 5. Are you a student? */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  5. Are you a student? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="student"
                      value="yes"
                      checked={formData.student === "yes"}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="student"
                      value="no"
                      checked={formData.student === "no"}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>

              {/* Conditional: Student Fields */}
              {showStudentFields && (
                <div className="space-y-4 p-4 bg-sky-50 rounded-lg">
                  <div>
                    <label className="block font-medium text-sky-700">6. Institution</label>
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-sky-700">7. Faculty</label>
                    <input
                      type="text"
                      name="faculty"
                      value={formData.faculty}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-sky-700">8. Department</label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-sky-700">9. Matric Number</label>
                    <input
                      type="text"
                      name="matricNumber"
                      value={formData.matricNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* Conditional: Non-Student Fields */}
              {showOrgFields && (
                <div className="space-y-4 p-4 bg-amber-50 rounded-lg">
                  <div>
                    <label className="block font-medium text-amber-700">10. Affiliated Organisation</label>
                    <input
                      type="text"
                      name="affiliatedOrg"
                      value={formData.affiliatedOrg}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-amber-700">11. Department/Unit</label>
                    <input
                      type="text"
                      name="departmentUnit"
                      value={formData.departmentUnit}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-amber-700">12. Position in Organisation</label>
                    <input
                      type="text"
                      name="positionInOrg"
                      value={formData.positionInOrg}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-amber-700">13. Years of Research Experience</label>
                    <input
                      type="text"
                      name="yearsOfResearch"
                      value={formData.yearsOfResearch}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <hr className="border-red-500" />

          {/* SECTION B: Thematic Areas */}
          <div>
            <h3 className="text-xl font-bold text-sky-700 mb-3">SECTION B: THEMATIC AREAS</h3>
            <p className="text-red-600 font-medium mb-4">
              YOU CAN PARTICIPATE IN UP TO 3 THEMATIC AREAS
            </p>

            <div className="space-y-6">
              {[
                {
                  id: "thematic1",
                  title: "Thematic Area One",
                  desc: "Scientific Proposal and Grant Writing: Proposal Elements, Reference Management, Work Plan Development, Budget Writing",
                },
                {
                  id: "thematic2",
                  title: "Thematic Area Two",
                  desc: "Data Collection, Management & Analysis: Instruments Development, Quantitative & Qualitative Methods",
                },
                {
                  id: "thematic3",
                  title: "Thematic Area Three",
                  desc: "Research/Project Dissemination: Scholarly Articles, Abstracts, Peer-Reviewed Journals",
                },
                {
                  id: "thematic4",
                  title: "Thematic Area Four",
                  desc: "Field-Based Monitoring and Evaluation: M&E Plan, Indicators, Reporting",
                },
              ].map((area) => (
                <div key={area.id} className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name={area.id}
                    checked={formData[area.id]}
                    onChange={handleChange}
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

          {/* SECTION C: Payment Proof */}
          <div>
            <h3 className="text-xl font-bold text-sky-700 mb-3">SECTION C: PAYMENT EVIDENCE</h3>
            <p className="text-gray-700 mb-4">
              Please upload a scanned copy or screenshot of your payment receipt.
            </p>
            <input
              type="file"
              name="paymentProof"
              onChange={handleChange}
              accept="image/*,.pdf"
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-600 file:text-white hover:file:bg-sky-700"
            />
          </div>

          <hr className="border-red-500" />

          {/* SECTION D: Baseline Info */}
          <div>
            <h3 className="text-xl font-bold text-sky-700 mb-4">SECTION D: BASELINE INFORMATION</h3>

            <div className="space-y-5">
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Have you attended similar training before? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="similarTraining"
                      value="Yes"
                      checked={formData.similarTraining === "Yes"}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="similarTraining"
                      value="No"
                      checked={formData.similarTraining === "No"}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  What are your expectations from this training? <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="expectation"
                  value={formData.expectation}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  What specific skills do you hope to learn? <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="hopeToLearn"
                  value={formData.hopeToLearn}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-10 rounded-lg shadow-md transition text-lg"
            >
              Submit Application
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}