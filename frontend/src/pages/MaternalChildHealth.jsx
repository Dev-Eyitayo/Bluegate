// pages/MaternalChildHealth.jsx
import React from "react";
import { Baby, Users, Shield, Heart, Activity } from "lucide-react";

export default function MaternalChildHealth() {
  return (
    <div className="min-h-screen bg-sky-200/10 px-2 text-gray-800">
      <section className="py-16 px-3 max-w-5xl mx-auto">
        <h1 className="text-2xl font-extrabold text-sky-800 text-center mb-8">
          Maternal and Child Health
        </h1>
        <p className="text-slate-600 leading-relaxed mb-6 text-left">
          Maternal and child health reflects the health and wellbeing of women during pregnancy, childbirth, and the postpartum period, as well as the health and development of children under five years of age. In Nigeria, many maternal and child deaths are preventable, yet they persist due to sociocultural factors, inequitable access to health services, and limited health knowledge.
        </p>
        <p className="text-slate-600 leading-relaxed text-left">
          At <strong>Blue Gate Public Health Promotion Initiative</strong>, we work to ensure that women and children have the information, support, and access to quality care they need to live healthy, fulfilling lives. Our programs focus on addressing the root causes of poor maternal and child health outcomes including gender inequality, poverty, harmful cultural practices, and barriers to care.
        </p>
      </section>

      <section className="py-12 px-3 max-w-5xl mx-auto space-y-16">
        <div className="text-center mb-8">
          <img
            src="/assets/maternal.png"
            alt="Maternal and Child Health"
            className="rounded-xl shadow-lg mx-auto max-w-md"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-sky-800 mb-6 text-center">
            Our Approach
          </h2>
          <p className="text-slate-600 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            Our maternal and child health interventions are centered on:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-slate-600">
            <li className="flex items-start">
              <Heart className="w-5 h-5 mr-2 text-pink-600 mt-1 flex-shrink-0" />
              <span>Empowering women to make informed decisions about their health</span>
            </li>
            <li className="flex items-start">
              <Users className="w-5 h-5 mr-2 text-sky-600 mt-1 flex-shrink-0" />
              <span>Strengthening families and communities to support mothers and children</span>
            </li>
            <li className="flex items-start">
              <Shield className="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" />
              <span>Improving access to preventive and lifesaving health services</span>
            </li>
            <li className="flex items-start">
              <Activity className="w-5 h-5 mr-2 text-purple-600 mt-1 flex-shrink-0" />
              <span>Challenging norms that limit women’s rights, voice, and wellbeing</span>
            </li>
          </ul>
          <p className="text-slate-600 text-center mt-8 max-w-3xl mx-auto">
            We collaborate with communities, health workers, traditional leaders, and government health systems to create environments where women and children can thrive.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-sky-800 mb-8 text-center">
            Key Focus Areas
          </h2>

          {[
            {
              icon: <Users className="w-6 h-6" />,
              title: "1. Addressing Sociocultural Barriers",
              points: [
                "Increase women and girls’ access to health education",
                "Promote equitable decision-making in households",
                "Advocate for women’s empowerment and rights",
                "Engage men, religious, and traditional leaders as allies",
              ],
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "2. Reducing Harmful Traditional and Cultural Practices",
              points: [
                "Facilitate community dialogues on safer practices",
                "Train community health volunteers to guide families",
                "Promote skilled birth attendance and emergency care",
              ],
            },
            {
              icon: <Baby className="w-6 h-6" />,
              title: "3. Improving Health Knowledge and Health-Seeking Behaviour",
              points: [
                "Danger signs in pregnancy and childbirth",
                "The importance of antenatal and postnatal care",
                "Breastfeeding, newborn care, and child nutrition",
                "Immunization and routine health check-ups",
              ],
              note: "Our strategies include group education sessions, peer support circles, community radio programs, and home visits.",
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: "4. Nutrition Support for Mothers and Children",
              points: [
                "Providing multivitamins and nutrition supplements for pregnant women",
                "Supplying vitamin-rich foods and supplements for children under five",
                "Offering practical guidance on affordable, nutritious meal planning",
              ],
            },
            {
              icon: <Activity className="w-6 h-6" />,
              title: "5. Immunization and Preventive Care",
              points: [
                "Conducting awareness campaigns on routine immunization",
                "Linking families to vaccination centers",
                "Reducing myths and misinformation around vaccines",
              ],
            },
          ].map((area, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-xl font-semibold text-sky-800 mb-3 flex items-center">
                {/* <span className="text-sky-600 mr-2">{area.icon}</span> */}
                {area.title}
              </h3>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                {area.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
              {area.note && <p className="text-slate-600 mt-3 text-sm italic">{area.note}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}