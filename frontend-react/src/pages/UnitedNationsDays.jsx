import React from "react";
import SectionHeader from "../components/SectionHeader";
import ImageCarousel from "../components/ImageCarousel";
import { Globe2, Eye, Activity, HeartPulse, Wind } from "lucide-react";

export default function UnitedNationsDays() {
  // Carousel slides
  const sightDaySlides = [
    { image: "/assets/worldsight1.jpg", title: "World Sight Day awareness event with Blue Gate team members and community members." },
    { image: "/assets/worldsight2.jpg", title: "Oyo State Ministry of Health officials joining the Blue Gate Initiative for the 2020 World Sight Day campaign." },
  ];

  const diabetesDaySlides = [
    { image: "/assets/diabetes1.jpg", title: "Blue Gate Initiative 2020 World Diabetes Day health screening and awareness session." },
    { image: "/assets/diabetes2.jpg", title: "Participants receiving diabetes screening and nutrition education during the 2020 World Diabetes Day." },
    { image: "/assets/diabetes3.jpg", title: "Community members being attended to by medical volunteers during the Blue Gate Initiative World Diabetes Day outreach." },
  ];

  const aidsDaySlides = [
    { image: "/assets/aidsday1.jpg", title: "Blue Gate Initiative 2020 World AIDS Day commemoration with Oyo State Ministry of Health officials." },
    { image: "/assets/aidsday2.jpg", title: "Community outreach and sensitization programme for HIV prevention and testing." },
    { image: "/assets/aidsday3.jpg", title: "Staff and volunteers promoting awareness on HIV testing and treatment adherence." },
    { image: "/assets/aidsday4.jpg", title: "Blue Gate team photo during World AIDS Day community engagement." },
  ];

  const asthmaDaySlides = [
    { image: "/assets/asthma1.jpg", title: "Asthma Day 2017 rally walk with Blue Gate Initiative and volunteers." },
    { image: "/assets/asthma2.jpg", title: "Community sensitization event during World Asthma Day walk in Ibadan." },
    { image: "/assets/asthma3.jpg", title: "Blue Gate team members raising awareness about respiratory health." },
  ];

  const malariaDaySlides = [
    { image: "/assets/malariaday1.jpg", title: "Malaria Day outreach at Oranyan community with Blue Gate health workers." },
    { image: "/assets/malariaday2.jpg", title: "Children and community members participating in malaria education activities." },
    { image: "/assets/malariaday3.jpg", title: "Medical team providing malaria tests and consultations at the Oranyan community." },
    { image: "/assets/malariaday4.jpg", title: "Sensitization session about malaria prevention and hygiene practices." },
  ];

  return (
    <div className="min-h-screen bg-sky-50 text-gray-800">
      {/* Intro Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
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
      </section>

      {/* World Sight Day */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
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
            <ImageCarousel slides={sightDaySlides} />
        </div>
      </section>

      {/* World Diabetes Day */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
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
            <ImageCarousel slides={diabetesDaySlides} />
        </div>
      </section>

      {/* World AIDS Day */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
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
            <ImageCarousel slides={aidsDaySlides} />
        </div>
      </section>

      {/* Asthma Day */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
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
            <ImageCarousel slides={asthmaDaySlides} />
        </div>
      </section>

      {/* Malaria Day */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
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
            <ImageCarousel slides={malariaDaySlides} />
        </div>
      </section>
    </div>
  );
}
