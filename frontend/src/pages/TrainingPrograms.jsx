import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Banknote, MapPin, Info } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function TrainingPrograms() {
  return (
    <div className="min-h-screen px-4 text-slate-800">
      {/* Page Title */}
      <section className="py-14 px-2 max-w-7xl mx-auto">
        <PageHeader
          eyebrow="Capacity building"
          title="Research Academy"
          subtitle="Hands-on training and mentorship for young investigators in public health research"
        />
      </section>

      {/* Intro + Images */}
      <section className="px-2 max-w-6xl mx-auto pb-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="md:w-1/2 space-y-5">
            <p className="text-slate-600 leading-relaxed">
              We are dedicated to building the capacity of your staff, volunteers, and organization to undertake program improvement work. Blue Gate Initiative works in collaboration with your team to support program improvement.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We bring expert advice, technical expertise, and innovative solutions to every project. Our tried-and-tested project management methodology helps keep your project on track.
            </p>

            <h3 className="font-display text-lg font-bold text-slate-900">Training & Consultation Topics:</h3>
            <ul className="space-y-2.5 text-slate-600">
              {[
                "Proposal writing",
                "Program development",
                "Program monitoring and evaluation",
                "Research methodology",
                "Performance measurement systems",
                "Quality improvement",
                "Qualitative and Quantitative methodology including analysis",
                "Manuscript development and publication in peer-reviewed journals",
              ].map((topic) => (
                <li key={topic} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-400 flex-shrink-0" aria-hidden="true" />
                  {topic}
                </li>
              ))}
            </ul>

            <div className="rounded-2xl overflow-hidden ring-1 ring-slate-900/10 shadow-soft mt-6">
              <img
                src="/assets/training.jpg"
                alt="Research Training Session"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden ring-1 ring-slate-900/10 shadow-soft">
              <img
                src="/assets/research1.jpg"
                alt="Research Academy Workshop"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Training Details */}
      <section className="max-w-5xl px-1 mx-auto py-10">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            Research Capacity Building Training
          </h2>
          <span className="mt-4 inline-block h-1 w-12 rounded-full bg-brand-500" aria-hidden="true" />
        </div>

        <p className="text-slate-600 mb-10 leading-relaxed">
          Blue Gate Initiative is committed to supporting investigators early in their research careers through mentorship and professional development. The training gives young investigators the opportunity to work one-on-one with experienced researchers for the planning, implementation, and dissemination of research. <strong className="text-slate-900">This training runs at least twice a year.</strong>
        </p>

        {/* Areas of Specialization */}
        <h3 className="font-display text-lg font-bold text-slate-900 mb-5">Areas of Specialization</h3>
        <ol className="space-y-4 mb-10">
          {[
            {
              lead: "Scientific Proposal and Grant Writing:",
              text: "Proposal Elements, Reference Management, Work Plan Development, Budget Writing",
            },
            {
              lead: "Data Collection, Management & Analysis:",
              text: "Instruments Development, Quantitative Data Coding and Entry, Electronic Data Collection Technique, Qualitative Data Transcription and Surface Reading, Qualitative and Quantitative Data Analysis",
            },
            {
              lead: "Research/Project Dissemination:",
              text: "Writing of Scholarly Articles, Abstract Writing for International Conferences and Publication in Peer-Reviewed Journals",
            },
            {
              lead: "Field-Based Monitoring and Evaluation:",
              text: "M&E Plan, Indicators, Data Collection, Management & Analysis, M&E Reporting",
            },
          ].map((area, index) => (
            <li
              key={area.lead}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5"
            >
              <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 ring-1 ring-inset ring-brand-100 text-brand-700 text-sm font-bold font-display">
                {index + 1}
              </span>
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-900">{area.lead}</strong> {area.text}
              </p>
            </li>
          ))}
        </ol>

        {/* Target Participants */}
        <h3 className="font-display text-lg font-bold text-slate-900 mb-3">Target Participants</h3>
        <p className="text-slate-600 mb-10 leading-relaxed">
          Young investigators and postgraduate students in Public Health, Nursing, Clinical Sciences, Social Sciences, Environmental Management, Education, and any other related field.
        </p>

        {/* Training Fee */}
        <div className="bg-amber-50 border border-amber-200 p-6 md:p-7 rounded-2xl mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white ring-1 ring-inset ring-amber-200 text-amber-700">
              <Banknote className="w-5 h-5" />
            </span>
            <h3 className="font-display text-lg font-bold text-amber-900">Training Fee</h3>
          </div>
          <ul className="space-y-2.5 text-amber-950/80">
            <li><strong>Scientific Proposal and Grant Writing:</strong> ₦150,000</li>
            <li><strong>Data Collection, Management & Analysis:</strong> ₦120,000</li>
            <li><strong>Research/Project Dissemination:</strong> ₦60,000</li>
            <li><strong>Field-Based Monitoring and Evaluation:</strong> ₦200,000</li>
          </ul>
        </div>

        {/* Venue */}
        <div className="bg-brand-50 border border-brand-100 p-6 md:p-7 rounded-2xl mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white ring-1 ring-inset ring-brand-100 text-brand-600">
              <MapPin className="w-5 h-5" />
            </span>
            <h3 className="font-display text-lg font-bold text-brand-900">Venue</h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Blue Gate Office, 64, Adeyi Avenue, Off Awolowo Road, Old Bodija, Ibadan, Nigeria
          </p>
        </div>

        {/* Registration Procedures */}
        <h2 className="font-display text-lg font-bold text-slate-900 mb-5">Registration Procedures</h2>
        <ol className="space-y-6 text-slate-600 mb-10">
          <li className="leading-relaxed">
            <strong className="text-slate-900">Make Payment:</strong> Deposit or transfer into the account below:
            <ul className="mt-3 space-y-1.5 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-sm">
              <li><strong className="text-slate-900">Account Name:</strong> Blue Gate Public Health Promotion Initiative</li>
              <li><strong className="text-slate-900">Account Number:</strong> 0122-6530-54</li>
              <li><strong className="text-slate-900">Bank:</strong> WEMA Bank PLC</li>
            </ul>
          </li>
          <li className="leading-relaxed">
            Complete the online registration form by clicking the button below:
            <br />
            <em className="text-sm text-slate-500">
              You will be required to upload proof of payment.
            </em>
          </li>
        </ol>

        {/* CTA Button */}
        <div className="text-center mb-10">
          <Link
            to="/training-form"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-10 py-3.5 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-brand-700 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 text-lg"
          >
            Fill Training Form Now
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="text-center text-slate-600 mb-10">
          <p className="leading-relaxed">
            For inquiries: <br />
            <a
              href="mailto:training@bluegateinitiative.org"
              className="font-medium text-brand-700 underline decoration-brand-300 underline-offset-2 hover:text-brand-800 transition-colors"
            >
              training@bluegateinitiative.org
            </a>{" "}
            | Call: <strong className="text-slate-900">0806-590-3150</strong>
          </p>
        </div>

        {/* Notes */}
        <div className="bg-brand-50 border border-brand-100 p-6 md:p-7 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white ring-1 ring-inset ring-brand-100 text-brand-600">
              <Info className="w-5 h-5" />
            </span>
            <h3 className="font-display text-lg font-bold text-brand-900">Important Notes:</h3>
          </div>
          <ol className="space-y-2 text-slate-600 list-decimal list-inside leading-relaxed">
            <li>This is a full-time training program. Part-time training is available on request.</li>
            <li><strong className="text-slate-900">Only 10 candidates</strong> will be admitted per session.</li>
          </ol>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-16"></div>
    </div>
  );
}
