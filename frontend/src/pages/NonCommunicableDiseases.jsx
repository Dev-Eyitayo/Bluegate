import React from "react";
import { Activity, HeartPulse, AlertCircle } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
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

export default function NonCommunicableDiseases() {
  return (
    <div className="min-h-screen bg-sky-200/10 px-2 text-gray-800">
      <section className="py-16 px-3 max-w-5xl mx-auto">
        <h1 className="text-2xl font-extrabold text-sky-800 text-center mb-8">
          Non-Communicable Diseases (NCDs) Prevention & Management
        </h1>
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
          <img
            src="/assets/diabetes.jpg"
            alt="Diabetes and Hypertension Control"
            className="rounded-xl shadow-md w-full h-auto"
          />
          <div>
            <h3 className="text-xl font-bold text-sky-800 mb-4 flex items-center">
            
              1. Hypertension & Diabetes Prevention and Control
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              We support individuals and communities to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Understand risk factors such as diet, inactivity, and stress</li>
              <li>Access screening, monitoring, and referral services</li>
              <li>Adopt healthy lifestyle practices</li>
              <li>Receive follow-up support for long-term management</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Blue Gate improves detection and screening by implementing programmes for early detection of NCDs, such as screening for diabetes, hypertension, and breast and cervical cancer screening.
            </p>
            <p className="text-slate-600">
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
            <h3 className="text-xl font-bold text-sky-800 mb-4 flex items-center">
              {/* <AlertCircle className="w-6 h-6 mr-2 text-pink-600" /> */}
              2. Cancer Awareness, Screening & Referral
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our programs focus on early detection, which greatly increases survival chances. We provide:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Breast cancer self-exam education and community awareness</li>
              <li>Cervical cancer screening (in partnership with health facilities)</li>
              <li>Prostate cancer awareness and early risk assessment</li>
              <li>Referral linkages for diagnostic and treatment services</li>
              <li>Survivor support networks and caregiver education</li>
            </ul>
          </div>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl mt-4 w-full h-64 flex items-center justify-center text-slate-500">
            <img
            src="/assets/updatedImages/Cervical cancer screening.jpg"
            alt="Cancer screening"
            className="rounded-xl shadow-md w-full h-auto"
          />
          </div>
        </div>
      </section>
    </div>
  );
}