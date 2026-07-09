import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import PageHeader from "../components/PageHeader";
import { Droplets, Wind, HeartHandshake } from "lucide-react";

const slides = [
  {
    image: "/assets/updatedImages/EnvironmentalHealth.jpg",
    title: "",
  }
];

const focusAreas = [
  {
    icon: Droplets,
    title: "Water, Sanitation and Hygiene (WASH)",
    intro: [
      "WASH stands for Water, Sanitation, and Hygiene. It involves ensuring that people have access to clean drinking water, safe places to use the toilet, and knowledge of hygiene practices that prevent disease.",
    ],
    listLabel: "Our WASH Interventions",
    items: [
      "Community education on handwashing and hygiene practices",
      "Promotion of safe water storage and household water treatment",
      "Support for community and school sanitation facilities",
      "Behavior change campaigns to end open defecation",
      "Hygiene promotion during disease outbreaks (e.g., cholera)",
      "Training community health volunteers and hygiene champions",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Menstrual Health and Hygiene (MHH)",
    intro: [
      "Menstrual health is a key part of women and girls' wellbeing but in many communities, taboos, stigma, lack of knowledge, and limited access to sanitary products affect dignity, school attendance, and confidence.",
      "We work to ensure that menstruation is understood as a natural and healthy process, not a source of shame.",
    ],
    listLabel: "Our Menstrual Health Initiatives",
    items: [
      "Menstrual hygiene education in schools and communities",
      "Training teachers, mothers, and peer educators",
      "Distribution of reusable and disposable sanitary products",
      "Support for locally produced and affordable menstrual products",
      "Community dialogues to reduce stigma and harmful beliefs",
      "Advocacy for menstrual-friendly water and sanitation facilities",
    ],
  },
  {
    icon: Wind,
    title: "Climate Change and Community Resilience",
    intro: [
      "Climate change is affecting weather patterns, food production, disease spread, and water availability. Vulnerable communities especially women and children are affected the most.",
      "We help communities adapt and build resilience so they can better protect their health and livelihoods.",
    ],
    listLabel: "Our Climate Resilience Efforts",
    items: [
      "Community awareness on climate-related health risks",
      "Promotion of climate-smart water and sanitation practices",
      "Environmental protection education (tree planting, waste management)",
      "Supporting households to adopt climate-sensitive nutrition and farming practices",
      "Advocacy for climate-responsive policies at local and state levels",
    ],
  },
];

export default function EnvironmentalHealth() {
  return (
    <div className="min-h-screen px-2 py-4 text-slate-800">
      <section className="py-14 px-3 max-w-5xl mx-auto">
        <PageHeader eyebrow="Health promotion" title="Environmental Health Services" />
        <p className="text-slate-600 leading-relaxed mb-6 text-left">
          Environmental health focuses on how the environment affects human wellbeing. Clean water, safe sanitation, good hygiene practices, and a healthy natural environment are essential for preventing disease and improving quality of life. However, many communities in Nigeria still face challenges such as unsafe drinking water, poor waste management, inadequate sanitation, climate change impacts, and menstrual health stigma.
        </p>
        <p className="text-slate-600 leading-relaxed text-left">
          At <strong className="text-slate-900">Blue Gate Public Health Promotion Initiative</strong>, we work with communities, schools, health facilities, and local governments to create healthier environments where people can live, learn, and grow safely.
        </p>
      </section>

      <section className="py-12 px-1 max-w-5xl mx-auto space-y-10">
        <div className="max-w-4xl mx-auto mb-4">
          <ImageCarousel slides={slides} />
        </div>

        {focusAreas.map((area, index) => (
          <div
            key={area.title}
            className="bg-white p-7 md:p-8 border border-slate-200 rounded-2xl transition-colors duration-300 hover:border-brand-200"
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-50 ring-1 ring-inset ring-brand-100 text-brand-600 flex-shrink-0">
                <area.icon className="w-6 h-6" />
              </span>
              <h3 className="font-display text-xl font-bold text-slate-900">
                <span className="text-brand-600 mr-2">{index + 1}.</span>
                {area.title}
              </h3>
            </div>

            {area.intro.map((paragraph) => (
              <p key={paragraph} className="text-slate-600 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            <p className="text-slate-900 font-semibold mb-3">{area.listLabel}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600">
              {area.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-400 flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto bg-brand-50/70 ring-1 ring-inset ring-brand-100 rounded-2xl p-7 md:p-9 mt-10">
        <p className="text-slate-600 leading-relaxed mb-4">
          Our environmental health services consist of preventing or controlling disease, injury, and disability related to the interactions between people and their environment.
        </p>
        <p className="text-slate-600 leading-relaxed">
          We provide WASH services and conduct inspections and surveillance activities in food safety, drinking water quality, and waste disposal. We also investigate human–work relationships and environment relationships by carrying out Environmental Impact Assessments (EIA) and Health Impact Assessments (HIA) at various levels of project implementation.
        </p>
      </section>
    </div>
  );
}
