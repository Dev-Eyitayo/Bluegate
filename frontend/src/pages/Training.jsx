import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel";
import PageHeader from "../components/PageHeader";

const trainingImages = [
  { image: "/assets/updatedImages/Training.jpg", title: "" },
  { image: "/assets/updatedImages/Training2.jpg", title: "" },
];

const capabilities = [
  {
    title: "Proposal and Program Development",
    items: [
      "Grant proposal writing",
      "Assessment of individual and community health needs",
      "Policy development",
      "Research planning and implementation",
      "Stakeholder engagement",
      "Plan, coordinate and implement health promotion programs",
      "Advocate for health-related issues",
    ],
  },
  {
    title: "Program Monitoring and Evaluation",
    items: [
      "Monitoring of health programs",
      "Indicators' development",
      "Development of instruments for data collection",
      "Data entry/transcription, analysis & interpretation",
      "Development of actionable recommendations",
    ],
  },
  {
    title: "Program Dissemination",
    items: [
      "Develop social marketing and mass media campaigns",
      "Develop audio, visual, print and electronic materials",
      "Write scholarly articles and publication",
    ],
  },
];

export default function Traning() {
  return (
    <div className="min-h-screen text-slate-800">
      {/* Page Title */}
      <section className="py-14 px-2 max-w-7xl mx-auto">
        <PageHeader
          eyebrow="Consultancy"
          title="Research Consultancy Services"
          subtitle="Evidence-based research, program evaluation, and capacity building for public health impact"
        />
      </section>

      {/* Intro Row */}
      <section className="px-2 max-w-6xl mx-auto pb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-5/12">
            <p className="text-slate-600 leading-relaxed">
              Blue Gate Initiative is a leading research organization in Nigeria. Our aim is to use research to shed light on the influence of the determinants of health — genetic, environmental, social, and more. We use this evidence-based knowledge to propose interventions and policies to improve health and well-being and reduce health inequalities in Nigeria.
            </p>
          </div>

          <div className="md:w-7/12">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-slate-600 leading-relaxed">
              We are a team of public health specialists that support individuals, community-based agencies, non-profit organizations, public health units, and health institutes to deliver the most effective programs and services possible. We specialize in community services, program development, research, stakeholder consultations, evaluation, and training programs specific to public health.
            </p>
            <p className="text-slate-600 mt-3 leading-relaxed">
              Our team members have extensive professional qualifications and combine years of experience with specialized training in health promotion, population health, and right to health. We engage in ongoing professional development to ensure that we deliver community services and programs based on the most current, innovative, and evidence-based information.
            </p>
          </div>
        </div>
        <div className="py-4 max-w-4xl mt-6 mx-auto">
          <ImageCarousel slides={trainingImages} />
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="px-2 max-w-6xl mx-auto py-10">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">Our Capabilities</h2>
          <span className="mt-4 inline-block h-1 w-12 rounded-full bg-brand-500" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="bg-white rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-brand-50 ring-1 ring-inset ring-brand-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-700 font-display font-bold">{index + 1}</span>
                </div>
                <h3 className="font-display font-bold text-slate-900">{capability.title}</h3>
              </div>
              <ul className="space-y-2.5 text-slate-600 text-sm">
                {capability.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-400 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery + CTA */}
      <section className="px-2 max-w-6xl mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden ring-1 ring-slate-900/10 shadow-soft">
            <img
              src="/assets/research-consultancy.jpg"
              alt="Research and Consultancy Outreach"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center bg-slate-50/70 border border-slate-200 rounded-2xl p-6">
            <Link to="/training-programs" className="group text-center">
              <div className="rounded-xl overflow-hidden ring-1 ring-slate-900/10">
                <img
                  src="/assets/researchConsultancy2.jpg"
                  alt="Training Programs"
                  className="w-full mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <span className="mt-5 inline-flex items-center gap-2 font-display text-lg font-bold text-brand-700 group-hover:text-brand-800 transition-colors">
                Click here for Training Programs
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="px-2 max-w-4xl mx-auto py-8 text-center">
        <p className="text-sm text-slate-600 rounded-2xl bg-brand-50/70 ring-1 ring-inset ring-brand-100 px-6 py-4 inline-block">
          We run a <strong className="text-brand-900">Research Academy</strong> to build capacity for young investigators. We also partner with organizations in data collection, analysis, and peer-reviewed publication.
        </p>
      </section>
    </div>
  );
}
