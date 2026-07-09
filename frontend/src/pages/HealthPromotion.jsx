import React from "react";
import { Activity, HeartPulse, ChevronRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

export default function HealthPromotion() {
  // Strategic Area Cards Data (with excerpts and image paths from existing content)
  const strategicAreas = [
    {
      title: "Communicable Diseases",
      excerpt: "Tackling malaria, HIV/AIDS, TB, leprosy, and Buruli ulcer through prevention, treatment, and community education to reduce incidence and improve outcomes.",
      image: "/assets/malaria.jpg", // Representative image (Malaria as lead)
      link: "/health-promotion/communicable-diseases",
    },
    {
      title: "Non-Communicable Diseases",
      excerpt: "Early detection and lifestyle promotion to combat diabetes, hypertension, and cancers through screening, education, and healthy behavior change.",
      image: "/assets/non-communicable.jpg",
      link: "/health-promotion/non-communicable-diseases",
    },
    {
      title: "Maternal and Child Health",
      excerpt: "Ensuring safe pregnancies, child nutrition, immunization, and addressing sociocultural barriers to improve maternal and child survival rates.",
      image: "/assets/maternal.png",
      link: "/health-promotion/maternal-child-health",
    },
    {
      title: "Environmental Health Services",
      excerpt: "Promoting safe water, sanitation, food safety, and conducting impact assessments to prevent disease linked to environmental interactions.",
      image: "/assets/environmental.jpg",
      link: "/health-promotion/environmental-health",
    },
  ];

  const programmeElements = [
    {
      lead: "Health education",
      text: "programmes focusing on skill development and lifestyle behavioural change.",
    },
    {
      lead: "Supportive environments",
      text: "within organizational values, norms, policies, and initiatives to support a healthy work culture.",
    },
    {
      lead: "Integration",
      text: "of health promotion programmes that are embedded effectively within the organizational structure.",
    },
    {
      lead: "Linkage",
      text: "of health promotion cross-functionally to other support services to optimize reach and effectiveness.",
    },
    {
      lead: "Health screening",
      text: "programmes that help people assess health risks. These programs are likely to lead to the best benefit plan to provide appropriate medical follow-up and treatment.",
    },
    {
      lead: "Immunization/vaccination",
      text: "to help people become immune to a disease. This helps boost the body's ability to fight off disease, so if one is exposed to pathogens in the future, the body is prepared to fight and prevent people from getting sick.",
    },
  ];

  return (
    <div className="min-h-screen px-2 text-slate-800">
      {/* Intro Section */}
      <section className="py-14 px-3 max-w-5xl mx-auto">
        <PageHeader eyebrow="What we do" title="Our Programme" />
        <p className="text-slate-600 leading-relaxed mb-6 text-left">
          The heart of our programme is health promotion - which plays a crucial
          role in improving health outcomes and reducing the burden of disease.
          Health promotion is about enabling individuals and communities to take
          control of their health, leading to improved quality of life and
          reduced health disparities. Our health communication and disease
          prevention programs cover a wide range of interventions that are
          designed to benefit and protect an individual&rsquo;s health and quality of
          life by addressing and preventing the root causes of ill health, not
          just focusing on treatment and rehabilitation.
        </p>
        <p className="text-slate-600 leading-relaxed text-left">
          Blue Gate Initiative helps communities to bring about social change
          and improve the quality of life in their local area. We work with
          individuals, families and communities to empower them to:
        </p>
        <ul className="mt-5 space-y-3 max-w-2xl">
          {[
            "Identify their resources, needs, opportunities, rights and responsibilities.",
            "Plan what they want to achieve and take appropriate action.",
            "Develop activities and services to generate aspiration and confidence.",
          ].map((point) => (
            <li key={point} className="flex items-start gap-3 text-slate-600 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* Common Programme Elements */}
      <section className="py-14 px-3 max-w-5xl mx-auto">
        <SectionHeader icon={Activity} title="Our Common Programme Elements" />
        <ol className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {programmeElements.map((element, index) => (
            <li
              key={element.lead}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors duration-300 hover:border-brand-200"
            >
              <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 ring-1 ring-inset ring-brand-100 text-brand-700 text-sm font-bold font-display">
                {index + 1}
              </span>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                <strong className="text-slate-900">{element.lead}</strong> {element.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Strategic Programme Areas - Cards */}
      <section className="py-14 px-3 max-w-7xl mx-auto">
        <SectionHeader icon={HeartPulse} title="Strategic Programme Areas" />

        <div className="mt-10 grid max-w-4xl mx-auto grid-cols-1 md:grid-cols-2 gap-6">
          {strategicAreas.map((area) => (
            <Link
              key={area.title}
              to={area.link}
              className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              <div className="relative overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                  {area.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {area.excerpt}
                </p>
                <div className="flex items-center text-brand-700 font-semibold text-sm">
                  <span>Read More</span>
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
