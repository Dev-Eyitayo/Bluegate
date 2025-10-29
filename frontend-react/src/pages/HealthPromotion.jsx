import React from "react";
import { Activity, HeartPulse, Heart, ShieldCheck } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ImageCarousel from "../components/ImageCarousel";

export default function HealthPromotion() {
    const slides = [
    {
      image: "../src/assets/healthpromo3.jpg",
      title: "Blue Gate team with the Oyo State Honorable commissioner for health (Dr Bello), the permanent secretary (Dr Ayoola), and Director of Public health (Dr Lawal) during the 2020 World AIDS Day celebration.",
    }
  ];
    const diabetes = [
    {
      image: "../src/assets/diabetes.jpg",
      title: "Non communicable diseases",
    }
  ];
  return (
    <div className="min-h-screen bg-sky-200/10 px-2 text-gray-800">
      {/* Intro Section */}
      <section className="py-16 px-3 max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-sky-800 text-center mb-8">
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

      {/* Strategic Programme Areas */}
      <section className="py-16 px-3 max-w-5xl mx-auto">
        <SectionHeader icon={HeartPulse} title="Strategic Programme Areas" />

        {/* Malaria Control */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="../src/assets/malaria.jpg"
            alt="Malaria Control"
            className="rounded-xl "
          />
          <div>
            <h3 className="text-2xl font-semibold text-sky-800 mb-4">
              Malaria Control
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Blue Gate Initiative’s objectives are to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>
                Ensure adequate treatment of all individuals with confirmed
                malaria seen in private or public facilities who offer
                affordable diagnosis.
              </li>
              <li>
                Promote the timely use of appropriate antimalarial medicines and
                commodities as needed to prevent and treat malaria in Nigeria.
              </li>
              <li>
                Protect access to effective case management and rapid scale-up
                of proven and advanced prevention interventions.
              </li>
              <li>
                Ensure appropriate and equitable distribution of Insecticide
                Treated Nets (ITNs) and Intermittent Preventive Treatment for
                pregnant women.
              </li>
              <li>
                Increase access to free malaria prevention education, including
                community outreach and sensitization.
              </li>
            </ul>
          </div>
        </div>

        {/* HIV/AIDS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 mb-4 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-sky-800 mb-4">HIV/AIDS</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Blue Gate Initiative’s goal is to reduce the incidence of HIV by
              scaling up the implementation of effective HIV and AIDS Prevention
              interventions within the context of the National HIV/AIDS Policy
              and Strategy. Our objectives are to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>
                Promote and scale-up HIV counselling and testing, including both
                client-initiated and provider-initiated counselling.
              </li>
              <li>
                Promote and scale-up interventions for the prevention of
                mother-to-child transmission of HIV, including early infant
                diagnosis.
              </li>
              <li>
                Implement HIV/AIDS-related advocacy among the general population
                and subgroups considered at high risk for HIV infection in
                Nigeria.
              </li>
              <li>
                Increase knowledge about dual protection benefits and promote
                appropriate use of male and female condoms.
              </li>
              <li>
                Promote early treatment and strengthen control of sexually
                transmitted infections to reduce the risk of HIV transmission.
              </li>
            </ul>
          </div>
          <img
            src="../src/assets/hivaids.jpg"
            alt="HIV/AIDS Programme"
            className="rounded-xl "
          />
        </div>

        <div className="max-w-3xl mt-12 mx-auto">
            <ImageCarousel slides={slides}/>
        </div>

        {/* Maternal and Child Health */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-center">
          <img
            src="/assets/maternal.png"
            alt="Maternal and Child Health"
            className="rounded-xl w-auto h-auto max-w-sm mx-auto md:mx-0"
          />
          <div>
            <h3 className="text-2xl font-semibold text-sky-800 mb-4">
              Maternal and Child Health
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Blue Gate Initiative’s common interventions among women focus on
              some of the sociocultural factors contributing to adverse maternal
              health outcomes in Nigeria, which include inadequate access to
              education, poor socio-economic and cultural practices, poor health
              knowledge, immunization, malnutrition, distribution for pregnant
              women, food supplements for under-five children, and health-seeking
              behavior of women.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We are a leading women’s health organization committed to ensuring
              that every pregnancy is planned, every child is wanted, and every
              mother has the best chance at survival.
            </p>
          </div>
        </div>

        {/* Environmental Health Services */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-sky-800 mb-4">
              Environmental Health Services
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our environmental health services consist of preventing or
              controlling disease, injury, and disability related to the
              interactions between people and their environment.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We provide WASH services and conduct inspections and surveillance
              activities in food safety, drinking water quality, and waste
              disposal. We also investigate human–work relationships and
              environment relationships by carrying out Environmental Impact
              Assessments (EIA) and Health Impact Assessments (HIA) at various
              levels of project implementation.
            </p>
          </div>
          <img
            src="../src/assets/environmental.jpg"
            alt="Environmental Health"
            className="rounded-xl "
          />
        </div>

        {/* Non-Communicable Diseases */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="/assets/non-communicable.jpg"
            alt="Non-Communicable Diseases"
            className="rounded-xl "
          />
          <div>
            <h3 className="text-2xl font-semibold text-sky-800 mb-4">
              Non-Communicable Diseases
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Blue Gate improves detection and screening by implementing
              programmes for early detection of NCDs, such as screening for
              diabetes, hypertension, and breast and cervical cancer screening.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We also promote healthy lifestyles by encouraging healthy eating
              habits, regular physical activity, and behaviours that reduce the
              risk of NCDs.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mt-12 mx-auto">
            <ImageCarousel slides={diabetes}/>
        </div>

        {/* TB/Leprosy/BU */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-sky-800 mb-4">
              TB / Leprosy / Buruli Ulcer (BU)
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our objective aligns with the National Tuberculosis, Leprosy and
              Buruli Ulcer Control Programme (NTBLCP) in Nigeria, which is also
              aligned with global strategies, particularly the World Health
              Organization’s End TB Strategy and the Sustainable Development
              Goals (SDGs).
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>
                <strong>Ending the TB epidemic</strong> by achieving zero death,
                disease, and suffering due to TB.
              </li>
              <li>
                <strong>Reducing prevalence</strong> of TB and Leprosy to a
                level where they no longer constitute public health problems.
              </li>
              <li>
                <strong>Preventing and reducing</strong> reinfections associated
                with Leprosy and providing appropriate rehabilitation for those
                affected.
              </li>
            </ul>
          </div>
          <img
            src="../src/assets/tb.jpeg"
            alt="Tuberculosis"
            className="rounded-xl "
          />
        </div>
      </section>
    </div>
  );
}
