import React from "react";
import SectionHeader from "../components/SectionHeader";
import ImageCarousel from "../components/ImageCarousel";
import { loadSlides } from "../../utils/loadImages";

export default function MedicalOutreach() {
  // Carousel slides

  const olubadanSlides = loadSlides("olubadan outreach");
  const apataSlides = loadSlides("apata outreach");
  const foursquareSlides = loadSlides("foursquare outreach");
  const inspirationfmSlides = loadSlides("inspirationfm outreach");
  const nawojSlides = loadSlides("nawoj outreach");
  const uiSlides = loadSlides("ui outreach");
  const zontaSlides = loadSlides("zonta outreach");


  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-sky-800 text-center mb-8">
            Medical Outreach
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <p className="text-slate-600 leading-relaxed mb-4">
              Medical outreach programs are essential for ensuring that all individuals have access to quality healthcare services. 
              By bringing healthcare directly to communities, these programs help bridge gaps in healthcare access, 
              promote preventive care, and improve health outcomes for underserved populations. 
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Through better health outcomes, more access to healthcare services, empowerment through education, community 
              engagement and partnerships, volunteer opportunities, increased health knowledge and skills, 
              social capital building, reduced health inequity, and economic benefits, medical outreach programs 
              benefit the local community. Blue Gate, since its inception, has conducted over 
              100 free medical outreaches in different locations in Oyo State.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We have provided free medical outreach in the community, religious settings, schools, and even hospitals for 
              indigent populations. Kindly visit our social media pages for updates on our medical outreach. You can also reach out to us for sponsorship and partnerships.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="/assets/medicaloutreach.jpg" 
              alt="Blue Gate Initiative Team"
              className="w-full h-full object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
      </section>


      <section className="py-16 px-4 max-w-4xl mx-auto">
        <SectionHeader title="Olubadan Medical Outreach" />
        <p className="text-slate-600 leading-relaxed mb-6">
          The event took place on 3rd of April, 2017 at the Olubadan palace popoyemoja Ibadan. The activities which include free 
          medical check-ups and testing, dispensing of free drugs to appropriate people and free consultations were conducted 
          for the Community people, the Royal family and the Chiefs. Below are few pictures to illustrate the event:
        </p>
        <div className="max-w-3xl mx-auto">
            <ImageCarousel slides={olubadanSlides} />
        </div>
      </section>


      <section className="py-16 px-4 max-w-4xl mx-auto">
        <SectionHeader title="FREE MEDICAL CHECK-UP FOR COMMUNITY MEMBERS AT APATA IBADAN" />
        <p className="text-slate-600 leading-relaxed mb-6">
          The event took place at the opening of a new pharmacy at Apata Ibadan on the 2nd September 2017 for the 
          community people. The medical check-up include Blood pressure check, Blood glucose test, HIV testing among others. Pictures below:
        </p>
        <div className="max-w-3xl mx-auto">
            <ImageCarousel slides={apataSlides} />
        </div>
      </section>


      <section className="py-16 px-4 max-w-4xl mx-auto">
        <SectionHeader title="FREE MEDICAL CHECK-UP FOR NAWOJ MEMBERS" />
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
            <ImageCarousel slides={nawojSlides} />
        </div>
      </section>


      <section className="py-16 px-4 max-w-4xl mx-auto">
        <SectionHeader title="MEDICAL SCREENING AND CONSULTATION FOR MEMBERS OF FOURSQUARE GOSPEL CHURCH" />
        <p className="text-slate-600 leading-relaxed mb-6">
          The event took place at the Foursquare Gospel Church at Apata Ibadan during their Youth week on the 29th of April, 
          2018 for the church members. The program started with lecturing the church members on the Causes, 
          Prevention and Control of Stroke and Diabetes Mellitus, followed by Question & Answer section and 
          finally medical screening and consultation.
        </p>
        <div className="max-w-3xl mx-auto">
            <ImageCarousel slides={foursquareSlides} />
        </div>
      </section>

     
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <SectionHeader title="FREE MEDICAL CONSULTATION AND SCREENING AT UNIVERSITY OF IBADAN" />
        <p className="text-slate-600 leading-relaxed mb-6">
          Free medical services was carried out for the Nigerian Association of Adult Education Student (NAAES) University of Ibadan Chapter on the 16th of November 2017.
        </p>
        <div className="max-w-3xl mx-auto">
            <ImageCarousel slides={uiSlides} />
        </div>
      </section>

      {/* Malaria Day */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <SectionHeader title="FREE MEDICAL OUTREACH HELD TO COMMEMORATE ZONTA INTERNATIONAL 99TH BIRTHDAY" />
        <p className="text-slate-600 leading-relaxed mb-6">
          The medical outreach was held on Saturday, 10th November, 2018 by Blue Gate public Health promotion Initiative 
          in collaboration with Zonta Club of Ibadan II at Braiders Saloon Car Park, Awolowo junction, Sango, 
          Ibadan, to commemorate Zonta International 99th birthday. The medical outreach commenced at about 
          9.20 am and about 80 persons were reached at the end of the outreach. The objective of the outreach was to determine the Body mass index, Blood sugar, Blood pressure and Temperature of the participants. Below are few pictures taken at the event:
        </p>
        <div className="max-w-3xl mx-auto">
            <ImageCarousel slides={zontaSlides} />
        </div>
      </section>
    </div>
  );
}
