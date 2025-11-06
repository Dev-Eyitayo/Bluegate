import React from "react";
import { Activity, HeartPulse, Heart, ShieldCheck, ChevronRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ImageCarousel from "../components/ImageCarousel";
import { Link } from "react-router-dom"; 

export default function HealthPromotion() {
  const slides = [
    {
      image: "/assets/healthpromo3.jpg",
      title: "Blue Gate team with the Oyo State Honorable commissioner for health (Dr Bello), the permanent secretary (Dr Ayoola), and Director of Public health (Dr Lawal) during the 2020 World AIDS Day celebration.",
    }
  ];
  const diabetes = [
    {
      image: "/assets/diabetes.jpg",
      title: "Non communicable diseases",
    }
  ];

  // Strategic Area Cards Data (with excerpts and image paths from existing content)
  const strategicAreas = [
    {
      title: "Communicable Diseases",
      excerpt: "Tackling malaria, HIV/AIDS, TB, leprosy, and Buruli ulcer through prevention, treatment, and community education to reduce incidence and improve outcomes.",
      image: "/assets/malaria.jpg", // Representative image (Malaria as lead)
      link: "/heatlh-promotion/communicable-diseases",
    },
    {
      title: "Non-Communicable Diseases",
      excerpt: "Early detection and lifestyle promotion to combat diabetes, hypertension, and cancers through screening, education, and healthy behavior change.",
      image: "/assets/non-communicable.jpg",
      link: "/heatlh-promotion/non-communicable-diseases",
    },
    {
      title: "Maternal and Child Health",
      excerpt: "Ensuring safe pregnancies, child nutrition, immunization, and addressing sociocultural barriers to improve maternal and child survival rates.",
      image: "/assets/maternal.png",
      link: "/heatlh-promotion/maternal-child-health",
    },
    {
      title: "Environmental Health Services",
      excerpt: "Promoting safe water, sanitation, food safety, and conducting impact assessments to prevent disease linked to environmental interactions.",
      image: "/assets/environmental.jpg",
      link: "/heatlh-promotion/environmental-health",
    },
  ];

  return (
    <div className="min-h-screen bg-sky-200/10 px-2 text-gray-800">
      {/* Intro Section */}
      <section className="py-16 px-3 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-2xl font-extrabold text-sky-800 text-center mb-8">
          Our Programme
        </h1>
        <p className="text-slate-600 leading-relaxed mb-6 text-left">
          The heart of our programme is health promotion - which plays a crucial
          role in improving health outcomes and reducing the burden of disease.
          Health promotion is about enabling individuals and communities to take
          control of their health, leading to improved quality of life and
          reduced health disparities. Our health communication and disease
          prevention programs cover a wide range of interventions that are
          designed to benefit and protect an individual’s health and quality of
          life by addressing and preventing the root causes of ill health, not
          just focusing on treatment and rehabilitation.
        </p>
        <p className="text-slate-600 leading-relaxed text-left">
          Blue Gate Initiative helps communities to bring about social change
          and improve the quality of life in their local area. We work with
          individuals, families and communities to empower them to:
        </p>
        <ul className="text-slate-600 list-disc list-inside mt-4 space-y-1 text-left md:mx-auto md:text-left md:w-3/4">
          <li>
            Identify their resources, needs, opportunities, rights and
            responsibilities.
          </li>
          <li>
            Plan what they want to achieve and take appropriate action.
          </li>
          <li>
            Develop activities and services to generate aspiration and
            confidence.
          </li>
        </ul>
      </section>

      {/* Common Programme Elements */}
      <section className="py-16 px-3 max-w-5xl mx-auto">
        <SectionHeader icon={Activity} title="Our Common Programme Elements" />
        <ul className="text-slate-700 list-decimal list-inside space-y-2 mt-4">
          <li>
            <strong>Health education</strong> programmes focusing on skill
            development and lifestyle behavioural change.
          </li>
          <li>
            <strong>Supportive environments</strong> within organizational
            values, norms, policies, and initiatives to support a healthy work
            culture.
          </li>
          <li>
            <strong>Integration</strong> of health promotion programmes that are
            embedded effectively within the organizational structure.
          </li>
          <li>
            <strong>Linkage</strong> of health promotion cross-functionally to
            other support services to optimize reach and effectiveness.
          </li>
          <li>
            <strong>Health screening</strong> programmes that help people assess
            health risks. These programs are likely to lead to the best benefit
            plan to provide appropriate medical follow-up and treatment.
          </li>
          <li>
            <strong>Immunization/vaccination</strong> to help people become
            immune to a disease. This helps boost the body’s ability to fight
            off disease, so if one is exposed to pathogens in the future, the
            body is prepared to fight and prevent people from getting sick.
          </li>
        </ul>
      </section>

      {/* Strategic Programme Areas - Now as Cards */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        <SectionHeader icon={HeartPulse} title="Strategic Programme Areas" />

        <div className="mt-12 grid max-w-4xl rounded-xl mx-auto grid-cols-1 md:grid-cols-2 gap-8">
          {strategicAreas.map((area) => (
            <Link
              key={area.title}
              to={area.link}
              className="group block bg-white rounded-xl border border-slate-200"
            >
              <div className="aspect-w-16 rounded-t-xl aspect-h-9 relative overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full  h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-800 mb-2 group-hover:text-sky-600 transition-colors">
                  {area.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {area.excerpt}
                </p>
                <div className="flex items-center text-sky-700 font-medium text-sm group-hover:text-sky-900">
                  <span>Read More</span>
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Retained Carousels for Visual Context */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="max-w-md mx-auto">
            <ImageCarousel slides={slides} />
          </div>
          <div className="max-w-md mx-auto">
            <ImageCarousel slides={diabetes} />
          </div>
        </div> */}
      </section>
    </div>
  );
}