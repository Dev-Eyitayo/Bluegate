import React from "react";
import { Activity, AlertTriangle, Heart, Shield } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ImageCarousel from "../components/ImageCarousel";

const slides = [
  {
    image: "/assets/healthpromo3.jpg",
    title: "Blue Gate team with the Oyo State Honorable commissioner for health (Dr Bello), the permanent secretary (Dr Ayoola), and Director of Public health (Dr Lawal) during the 2020 World AIDS Day celebration.",
  }
];
const malariaSlides = [
  {
    image: "/assets/updatedImages/Malaria.jpg",
    title: "",
  },
  {
    image: "/assets/malaria.jpg",
    title: "",
  }
];

export default function CommunicableDiseases() {
  return (
    <div className="min-h-screen bg-sky-200/10 px-2 text-gray-800">
      {/* Hero Intro */}
      <section className="py-16 px-3 max-w-5xl mx-auto">
        <h1 className="text-2xl font-extrabold text-sky-800 text-center mb-8">
          Communicable Diseases Prevention & Control
        </h1>
        <p className="text-slate-600 leading-relaxed mb-6 text-left">
          Communicable diseases are illnesses that can be spread from one person to another, or from the environment to people. They are often caused by viruses, bacteria, or parasites. Because they spread within families and communities, early detection, treatment, and prevention are essential.
        </p>
        <p className="text-slate-600 leading-relaxed text-left">
          At <strong>Blue Gate Public Health Promotion Initiative</strong>, we design and implement community-based programs that help prevent infection, support treatment, and reduce the impact of communicable diseases.
        </p>
      </section>

      {/* Focus Areas */}
      <section className="py-12 px-3 max-w-5xl mx-auto space-y-20">
        {/* 1. Malaria Prevention and Control */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* <img
            src="/assets/malaria.jpg"
            alt="Malaria Control"
            className="rounded-xl shadow-md w-full h-auto"
          /> */}
          <ImageCarousel slides={malariaSlides} />
          <div>
            <h3 className="text-xl font-bold text-sky-800 mb-4 flex items-center">
              {/* <Shield className="w-6 h-6 mr-2 text-sky-600" /> */}
              1. Malaria Prevention and Control
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Blue Gate Initiative’s objectives are to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>
                Ensure adequate treatment of all individuals with confirmed malaria seen in private or public facilities who offer affordable diagnosis.
              </li>
              <li>
                Promote the timely use of appropriate antimalarial medicines and commodities as needed to prevent and treat malaria in Nigeria.
              </li>
              <li>
                Protect access to effective case management and rapid scale-up of proven and advanced prevention interventions.
              </li>
              <li>
                Ensure appropriate and equitable distribution of Insecticide Treated Nets (ITNs) and Intermittent Preventive Treatment for pregnant women.
              </li>
              <li>
                Increase access to free malaria prevention education, including community outreach and sensitization.
              </li>
            </ul>
          </div>
        </div>

        {/* 2. HIV/AIDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-xl font-bold text-sky-800 mb-4 flex items-center">
              {/* <Heart className="w-6 h-6 mr-2 text-red-600" /> */}
              2. HIV/AIDS Prevention, Treatment Support & Stigma Reduction
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Blue Gate Initiative’s goal is to reduce the incidence of HIV by scaling up the implementation of effective HIV and AIDS Prevention interventions within the context of the National HIV/AIDS Policy and Strategy. Our objectives are to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>
                Promote and scale-up HIV counselling and testing, including both client-initiated and provider-initiated counselling.
              </li>
              <li>
                Promote and scale-up interventions for the prevention of mother-to-child transmission of HIV, including early infant diagnosis.
              </li>
              <li>
                Implement HIV/AIDS-related advocacy among the general population and subgroups considered at high risk for HIV infection in Nigeria.
              </li>
              <li>
                Increase knowledge about dual protection benefits and promote appropriate use of male and female condoms.
              </li>
              <li>
                Promote early treatment and strengthen control of sexually transmitted infections to reduce the risk of HIV transmission.
              </li>
            </ul>
          </div>
          <img
            src="/assets/hivaids.jpg"
            alt="HIV/AIDS Programme"
            className="rounded-xl shadow-md w-full h-auto"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <ImageCarousel slides={slides} />
        </div>

        {/* 3. TB, Leprosy & Buruli Ulcer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <img
            src="/assets/tb.jpeg"
            alt="TB/Leprosy/BU Control"
            className="rounded-xl shadow-md w-full h-auto"
          />
          <div>
            <h3 className="text-xl font-bold text-sky-800 mb-4 flex items-center">
              {/* <AlertTriangle className="w-6 h-6 mr-2 text-orange-600" /> */}
              3. TB, Leprosy & Buruli Ulcer Control
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our objective aligns with the National Tuberculosis, Leprosy and Buruli Ulcer Control Programme (NTBLCP) in Nigeria, which is also aligned with global strategies, particularly the World Health Organization’s End TB Strategy and the Sustainable Development Goals (SDGs).
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>
                <strong>Ending the TB epidemic</strong> by achieving zero death, disease, and suffering due to TB.
              </li>
              <li>
                <strong>Reducing prevalence</strong> of TB and Leprosy to a level where they no longer constitute public health problems.
              </li>
              <li>
                <strong>Preventing and reducing</strong> reinfections associated with Leprosy and providing appropriate rehabilitation for those affected.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}