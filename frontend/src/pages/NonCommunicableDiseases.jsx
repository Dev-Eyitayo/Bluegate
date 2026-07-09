import React from "react";
import PageHeader from "../components/PageHeader";
import ImageCarousel from "../components/ImageCarousel";

const ncdSlides = [
  {
    image: "/assets/updatedImages/Hypertension.jpg",
    title: "",
  },
  {
    image: "/assets/updatedImages/Diabetes.jpg",
    title: "",
  },
];

const BulletList = ({ items }) => (
  <ul className="space-y-2.5 text-slate-600">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2.5 leading-relaxed">
        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-400 flex-shrink-0" aria-hidden="true" />
        {item}
      </li>
    ))}
  </ul>
);

export default function NonCommunicableDiseases() {
  return (
    <div className="min-h-screen px-2 text-slate-800">
      <section className="py-14 px-3 max-w-5xl mx-auto">
        <PageHeader
          eyebrow="Health promotion"
          title="Non-Communicable Diseases (NCDs) Prevention & Management"
        />
        <p className="text-slate-600 leading-relaxed mb-6 text-left">
          Non-communicable diseases (NCDs) are long-term health conditions that are not spread from person to person. They are often linked to factors such as lifestyle, environment, genetics, and long-term exposure to risks like pollution or stress. NCDs are now among the leading causes of illness and death globally including in Nigeria.
        </p>
        <p className="text-slate-600 leading-relaxed text-left">
          Our work focuses on community awareness, early screening, referral, improved access to care, support for healthy lifestyles, and policy advocacy.
        </p>
      </section>

      <section className="py-12 px-3 max-w-5xl mx-auto space-y-16">
        {/* 1. Hypertension & Diabetes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden ring-1 ring-slate-900/10 shadow-soft">
            <img
              src="/assets/diabetes.jpg"
              alt="Diabetes and Hypertension Control"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-slate-900 mb-4">
              <span className="text-brand-600 mr-2">1.</span>
              Hypertension & Diabetes Prevention and Control
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              We support individuals and communities to:
            </p>
            <BulletList
              items={[
                "Understand risk factors such as diet, inactivity, and stress",
                "Access screening, monitoring, and referral services",
                "Adopt healthy lifestyle practices",
                "Receive follow-up support for long-term management",
              ]}
            />
            <p className="text-slate-600 leading-relaxed mt-4">
              Blue Gate improves detection and screening by implementing programmes for early detection of NCDs, such as screening for diabetes, hypertension, and breast and cervical cancer screening.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              We also promote healthy lifestyles by encouraging healthy eating habits, regular physical activity, and behaviours that reduce the risk of NCDs.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <ImageCarousel slides={ncdSlides} />
        </div>

        {/* 2. Cancer Awareness */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="font-display text-xl font-bold text-slate-900 mb-4">
              <span className="text-brand-600 mr-2">2.</span>
              Cancer Awareness, Screening & Referral
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our programs focus on early detection, which greatly increases survival chances. We provide:
            </p>
            <BulletList
              items={[
                "Breast cancer self-exam education and community awareness",
                "Cervical cancer screening (in partnership with health facilities)",
                "Prostate cancer awareness and early risk assessment",
                "Referral linkages for diagnostic and treatment services",
                "Survivor support networks and caregiver education",
              ]}
            />
          </div>
          <div className="rounded-2xl overflow-hidden ring-1 ring-slate-900/10 shadow-soft mt-4 md:mt-0">
            <img
              src="/assets/updatedImages/Cervical cancer screening.jpg"
              alt="Cancer screening"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
