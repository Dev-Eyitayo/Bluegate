import React from "react";
import SectionHeader from "../components/SectionHeader";
import ImageCarousel from "../components/ImageCarousel";
import { Globe2, Eye, Activity, HeartPulse, Wind } from "lucide-react";
import { loadUnitedNationSlides } from "../../utils/loadImages";


export default function UnitedNationsDays() {
  // Carousel slides

  const diabetesSlides = loadUnitedNationSlides("diabetes");
  const sightSlides = loadUnitedNationSlides("sight");
  const aidsSlides = loadUnitedNationSlides("aids");
  const asthmaSlides = loadUnitedNationSlides("asthma");
  const malariaSlides = loadUnitedNationSlides("malaria");
  const internationalDaySlides = loadUnitedNationSlides("internationalDay");

  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      {/* Intro Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <SectionHeader icon={Globe2} title="United Nations Days" />
        <p className="text-slate-600 leading-relaxed mb-6">
          The international days are occasions to educate the general public on issues of concern,
          to mobilize political will and resources to address global problems, and to celebrate and
          reinforce achievements of humanity. Blue Gate Initiative joins the rest of the world in
          observing internationally declared days to showcase its efforts in addressing global health
          issues, social equity, and awareness creation in communities. We actively commemorate global
          observances related to health, education, and social justice as part of our efforts to raise
          awareness and support sustainable development goals (SDGs) in Nigeria.
        </p>
        {/* <div className="max-w-3xl mx-auto">
            <ImageCarousel slides={internationalDaySlides} />
        </div> */}
      </section>

      {/* World Sight Day */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <SectionHeader icon={Eye} title="2020 World Sight Day" />
        <p className="text-slate-600 leading-relaxed mb-6">
          On 8th October 2020, Blue Gate Initiative joined the world to observe World Sight Day—an
          annual day of awareness to focus global attention on blindness and vision impairment. The
          global theme was <em>“Hope in Sight.”</em> The programme aimed to raise awareness about
          vision impairment, encourage regular eye checks, and support those affected. The event was
          marked with eye tests and community sensitization led by the Blue Gate team in collaboration
          with the Oyo State Ministry of Health.
        </p>
        <div className="max-w-3xl mx-auto">
            <ImageCarousel slides={sightSlides} />
        </div>
      </section>

      {/* World Diabetes Day */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <SectionHeader icon={Activity} title="2020 World Diabetes Day" />
        <p className="text-slate-600 leading-relaxed mb-6">
          The 2020 World Diabetes Day was commemorated by Blue Gate Public Health Promotion
          Initiative on Saturday, 14th November 2020, with the theme
          <em> “The Nurse and Diabetes.”</em> The event featured a public awareness rally, free
          diabetes screening, and health education on lifestyle modification and nutrition. The
          programme was organized in collaboration with local health departments and supported by
          volunteers, community groups, and nurses. Participants were encouraged to understand the
          importance of early detection, regular check-ups, and preventive care for diabetes management.
        </p>
        <div className="max-w-3xl mx-auto">
            <ImageCarousel slides={diabetesSlides} />
        </div>
      </section>

      {/* World AIDS Day */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <SectionHeader icon={HeartPulse} title="2020 World AIDS Day: Blue Gate Commemoration" />
        <p className="text-slate-600 leading-relaxed mb-6">
          The 2020 World AIDS Day was observed in the context of COVID-19 with the theme
          <em> “Global Solidarity, Shared Responsibility.”</em> Blue Gate Initiative participated in
          the Oyo State Ministry of Health-led commemoration alongside other stakeholders, including
          community leaders, NGOs, and youth organizations. The programme featured free HIV testing,
          awareness creation, and distribution of preventive materials. It emphasized the need for
          continued solidarity in the fight against HIV, even amidst a global pandemic.
        </p>
        <div className="max-w-3xl mx-auto">
            <ImageCarousel slides={aidsSlides} />
        </div>
      </section>

      {/* Asthma Day */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <SectionHeader icon={Wind} title="Asthma Day 2017 Rally Walk" />
        <p className="text-slate-600 leading-relaxed mb-6">
          Blue Gate Public Health Promotion Initiative, in collaboration with the Association of
          Nigeria Physicians (Oyo State Branch), organized an awareness programme in observance of
          World Asthma Day on May 2nd, 2017. The rally walk and sensitization activities aimed to
          raise public awareness about asthma management, prevention, and the importance of early
          diagnosis. Participants included health professionals, volunteers, and members of the
          public who joined the awareness march.
        </p>
        <div className="max-w-3xl mx-auto">
            <ImageCarousel slides={asthmaSlides} />
        </div>
      </section>

      {/* Malaria Day */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <SectionHeader icon={Activity} title="Malaria Day at Oranyan Community" />
        <p className="text-slate-600 leading-relaxed mb-6">
          The Blue Gate team carried out community outreach activities to mark the 2017 World Malaria
          Day from 25th to 27th April 2017 at Oranyan community, Ibadan. The campaign was aimed at
          reducing the malaria burden among residents through awareness creation, malaria testing,
          and distribution of preventive materials such as insecticide-treated nets. The programme
          also included community education on environmental hygiene and waste management as part of
          malaria prevention.
        </p>
        <div className="max-w-3xl mx-auto">
            <ImageCarousel slides={malariaSlides} />
        </div>
      </section>
    </div>
  );
}
