import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { Mail, Phone, MapPin } from "lucide-react";
import { apiRequest } from "../../utils/apiClient";

const inputClasses =
  "mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 disabled:opacity-60";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset status
    setSubmitStatus(null);
    setIsSubmitting(true);

    try {
      await apiRequest("/contact", "POST", {
        full_name: formData.fullName,
        email: formData.email,
        number: formData.number || null, // optional field
        subject: formData.subject || null, // optional
        message: formData.message,
      });

      setSubmitStatus("success");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
      alert(error.message || "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-slate-800">
      <section className="py-14 px-4 max-w-6xl mx-auto">
        <PageHeader
          eyebrow="We'd love to hear from you"
          title="Contact Us"
          subtitle={
            <>
              Send us messages as regards health issues you need clarifications on.
              We are a team of{" "}
              <span className="font-semibold text-brand-700">Public Health Specialists</span>{" "}
              that support individuals, community-based agencies, non-profit organizations,
              public health units, and health institutes to deliver the most effective
              programs and services possible. We specialize in program development, research,
              stakeholder consultations, evaluation, and training programs specific to public health.
            </>
          }
        />

        {/* Form + Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-start">
          {/* Message Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 rounded-2xl shadow-soft p-8 space-y-5"
          >
            <h2 className="font-display text-xl font-bold text-slate-900">Message Us</h2>

            {submitStatus === "success" && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg text-sm">
                Your message was sent successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                Failed to send message. Please try again.
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className={inputClasses}
                required
                disabled={isSubmitting}
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
                className={inputClasses}
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Phone Number (Optional)</label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Phone Number"
                className={inputClasses}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Subject (Optional)</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={inputClasses}
                disabled={isSubmitting}
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
                className={`${inputClasses} resize-none`}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-brand-700 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="rounded-2xl bg-brand-950 text-white p-8 space-y-6 relative overflow-hidden">
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-600/30 blur-3xl"
              aria-hidden="true"
            />
            <h2 className="relative font-display text-xl font-bold">Our Contact</h2>

            <div className="relative flex items-start gap-3.5 text-sm text-brand-100/90">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 flex-shrink-0">
                <MapPin className="text-brand-300" size={17} />
              </span>
              <div className="space-y-1 leading-relaxed">
                <p>No. 64, Blue Gate House, Adeyi Avenue, Old Bodija, Ibadan, Nigeria</p>
                <p>P.O. Box 39384, Dugbe, Ibadan, Nigeria</p>
              </div>
            </div>

            <div className="relative flex items-start gap-3.5 text-sm text-brand-100/90">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 flex-shrink-0">
                <Phone className="text-brand-300" size={17} />
              </span>
              <div className="space-y-1 leading-relaxed">
                <p>+234-806-590-3150</p>
                <p>+234-805-165-9422</p>
                <p>+234-8030-676-992</p>
              </div>
            </div>

            <div className="relative flex items-start gap-3.5 text-sm text-brand-100/90">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 flex-shrink-0">
                <Mail className="text-brand-300" size={17} />
              </span>
              <div className="space-y-1 leading-relaxed">
                <p>info@bluegateinitiative.org</p>
                <p>bluegatephpi@gmail.com</p>
              </div>
            </div>

            <div className="relative pt-5 border-t border-white/10 text-xs text-brand-100/60">
              We typically respond within 24–48 hours during business days.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
