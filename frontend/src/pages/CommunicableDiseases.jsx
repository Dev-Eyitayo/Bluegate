import React from "react";
import PageHeader from "../components/PageHeader";
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

const BulletList = ({ items }) => (
  <ul className="space-y-2.5 text-slate-600">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-400 flex-shrink-0" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const FocusHeading = ({ number, children }) => (
  <h3 className="font-display text-xl font-bold text-slate-900 mb-4">
    <span className="text-brand-600 mr-2">{number}.</span>
    {children}
  </h3>
);

export default function CommunicableDiseases() {
  return (
    <div className="min-h-screen px-2 text-slate-800">
      {/* Hero Intro */}
      <section className="py-14 px-3 max-w-5xl mx-auto">
        <PageHeader
          eyebrow="Health promotion"
          title="Communicable Diseases Prevention & Control"
        />
        <p className="text-slate-600 leading-relaxed mb-6 text-left">
          Communicable diseases are illnesses that can be spread from one person to another, or from the environment to people. They are often caused by viruses, bacteria, or parasites. Because they spread within families and communities, early detection, treatment, and prevention are essential.
        </p>
        <p className="text-slate-600 leading-relaxed text-left">
          At <strong className="text-slate-900">Blue Gate Public Health Promotion Initiative</strong>, we design and implement community-based programs that help prevent infection, support treatment, and reduce the impact of communicable diseases.
        </p>
      </section>

      {/* Focus Areas */}
      <section className="py-12 px-3 max-w-5xl mx-auto space-y-20">
        {/* 1. Malaria Prevention and Control */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <ImageCarousel slides={malariaSlides} />
          <div>
            <FocusHeading number={1}>Malaria Prevention and Control</FocusHeading>
            <p className="text-slate-600 leading-relaxed mb-4">
              Blue Gate Initiative&rsquo;s objectives are to:
            </p>
            <BulletList
              items={[
                "Ensure adequate treatment of all individuals with confirmed malaria seen in private or public facilities who offer affordable diagnosis.",
                "Promote the timely use of appropriate antimalarial medicines and commodities as needed to prevent and treat malaria in Nigeria.",
                "Protect access to effective case management and rapid scale-up of proven and advanced prevention interventions.",
                "Ensure appropriate and equitable distribution of Insecticide Treated Nets (ITNs) and Intermittent Preventive Treatment for pregnant women.",
                "Increase access to free malaria prevention education, including community outreach and sensitization.",
              ]}
            />
          </div>
        </div>

        {/* 2. HIV/AIDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <FocusHeading number={2}>HIV/AIDS Prevention, Treatment Support & Stigma Reduction</FocusHeading>
            <p className="text-slate-600 leading-relaxed mb-4">
              Blue Gate Initiative&rsquo;s goal is to reduce the incidence of HIV by scaling up the implementation of effective HIV and AIDS Prevention interventions within the context of the National HIV/AIDS Policy and Strategy. Our objectives are to:
            </p>
            <BulletList
              items={[
                "Promote and scale-up HIV counselling and testing, including both client-initiated and provider-initiated counselling.",
                "Promote and scale-up interventions for the prevention of mother-to-child transmission of HIV, including early infant diagnosis.",
                "Implement HIV/AIDS-related advocacy among the general population and subgroups considered at high risk for HIV infection in Nigeria.",
                "Increase knowledge about dual protection benefits and promote appropriate use of male and female condoms.",
                "Promote early treatment and strengthen control of sexually transmitted infections to reduce the risk of HIV transmission.",
              ]}
            />
          </div>
          <div className="rounded-2xl overflow-hidden ring-1 ring-slate-900/10 shadow-soft">
            <img
              src="/assets/hivaids.jpg"
              alt="HIV/AIDS Programme"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <ImageCarousel slides={slides} />
        </div>

        {/* 3. TB, Leprosy & Buruli Ulcer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden ring-1 ring-slate-900/10 shadow-soft">
            <img
              src="/assets/tb.jpeg"
              alt="TB/Leprosy/BU Control"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <FocusHeading number={3}>TB, Leprosy & Buruli Ulcer Control</FocusHeading>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our objective aligns with the National Tuberculosis, Leprosy and Buruli Ulcer Control Programme (NTBLCP) in Nigeria, which is also aligned with global strategies, particularly the World Health Organization&rsquo;s End TB Strategy and the Sustainable Development Goals (SDGs).
            </p>
            <BulletList
              items={[
                <><strong className="text-slate-900">Ending the TB epidemic</strong> by achieving zero death, disease, and suffering due to TB.</>,
                <><strong className="text-slate-900">Reducing prevalence</strong> of TB and Leprosy to a level where they no longer constitute public health problems.</>,
                <><strong className="text-slate-900">Preventing and reducing</strong> reinfections associated with Leprosy and providing appropriate rehabilitation for those affected.</>,
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
