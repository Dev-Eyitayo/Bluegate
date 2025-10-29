import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { Mail, Phone, MapPin, HeartPulse } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <SectionHeader icon={HeartPulse} title="Contact Us" />

        <p className="text-slate-700 text-center max-w-3xl mx-auto mt-4 text-base leading-relaxed">
          Send us messages as regards health issues you need clarifications on.  
          We are a team of <span className="font-semibold text-sky-800">Public Health Specialists</span> that support individuals, community-based agencies, non-profit organizations, public health units, and health institutes to deliver the most effective programs and services possible.  
          We specialize in program development, research, stakeholder consultations, evaluation, and training programs specific to public health.
        </p>

        {/* Form + Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Message Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-300 rounded-2xl shadow-sm p-8 space-y-6"
          >
            <h2 className="text-xl font-semibold text-sky-800 mb-4">Message Us</h2>

            <div>
              <label className="block text-sm font-medium text-slate-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="mt-1 w-full rounded-md border border-slate-300 focus:border-sky-500 focus:ring-sky-500 px-3 py-2 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="mt-1 w-full rounded-md border border-slate-300 focus:border-sky-500 focus:ring-sky-500 px-3 py-2 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Number</label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="mt-1 w-full rounded-md border border-slate-300 focus:border-sky-500 focus:ring-sky-500 px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="mt-1 w-full rounded-md border border-slate-300 focus:border-sky-500 focus:ring-sky-500 px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="4"
                className="mt-1 w-full rounded-md border border-slate-300 focus:border-sky-500 focus:ring-sky-500 px-3 py-2 text-sm resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-sky-50 border border-sky-100 rounded-2xl shadow-sm p-8 space-y-5">
            <h2 className="text-xl font-semibold text-sky-800 mb-4">Our Contact</h2>

            <div className="flex items-start gap-3 text-slate-700 text-sm">
              <MapPin className="text-sky-700 mt-1" size={20} />
              <div>
                <p>No. 64, Blue Gate House, Adeyi Avenue, Old Bodija, Ibadan, Nigeria</p>
                <p>P.O. Box 39384, Dugbe, Ibadan, Nigeria</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-slate-700 text-sm">
              <Phone className="text-sky-700 mt-1" size={20} />
              <div>
                <p>+234-806-590-3150</p>
                <p>+234-805-165-9422</p>
                <p>+234-8030-676-992</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-slate-700 text-sm">
              <Mail className="text-sky-700 mt-1" size={20} />
              <div>
                <p>info@bluegateinitiative.org</p>
                <p>bluegatephpi@gmail.com</p>
              </div>
            </div>

            <div className="pt-4 border-t border-sky-100 text-xs text-slate-500">
              We typically respond within 24–48 hours during business days.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
