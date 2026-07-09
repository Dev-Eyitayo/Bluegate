// pages/MaternalChildHealth.jsx
import React from "react";
import { Baby, Users, Shield, Heart, Activity } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function MaternalChildHealth() {
  const approachItems = [
    {
      icon: Heart,
      chip: "bg-rose-50 text-rose-600 ring-rose-100",
      text: "Empowering women to make informed decisions about their health",
    },
    {
      icon: Users,
      chip: "bg-brand-50 text-brand-600 ring-brand-100",
      text: "Strengthening families and communities to support mothers and children",
    },
    {
      icon: Shield,
      chip: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      text: "Improving access to preventive and lifesaving health services",
    },
    {
      icon: Activity,
      chip: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      text: "Challenging norms that limit women's rights, voice, and wellbeing",
    },
  ];

  const focusAreas = [
    {
      icon: Users,
      title: "Addressing Sociocultural Barriers",
      points: [
        "Increase women and girls' access to health education",
        "Promote equitable decision-making in households",
        "Advocate for women's empowerment and rights",
        "Engage men, religious, and traditional leaders as allies",
      ],
    },
    {
      icon: Shield,
      title: "Reducing Harmful Traditional and Cultural Practices",
      points: [
        "Facilitate community dialogues on safer practices",
        "Train community health volunteers to guide families",
        "Promote skilled birth attendance and emergency care",
      ],
    },
    {
      icon: Baby,
      title: "Improving Health Knowledge and Health-Seeking Behaviour",
      points: [
        "Danger signs in pregnancy and childbirth",
        "The importance of antenatal and postnatal care",
        "Breastfeeding, newborn care, and child nutrition",
        "Immunization and routine health check-ups",
      ],
      note: "Our strategies include group education sessions, peer support circles, community radio programs, and home visits.",
    },
    {
      icon: Heart,
      title: "Nutrition Support for Mothers and Children",
      points: [
        "Providing multivitamins and nutrition supplements for pregnant women",
        "Supplying vitamin-rich foods and supplements for children under five",
        "Offering practical guidance on affordable, nutritious meal planning",
      ],
    },
    {
      icon: Activity,
      title: "Immunization and Preventive Care",
      points: [
        "Conducting awareness campaigns on routine immunization",
        "Linking families to vaccination centers",
        "Reducing myths and misinformation around vaccines",
      ],
    },
  ];

  return (
    <div className="min-h-screen px-2 text-slate-800">
      <section className="py-14 px-3 max-w-5xl mx-auto">
        <PageHeader eyebrow="Health promotion" title="Maternal and Child Health" />
        <p className="text-slate-600 leading-relaxed mb-6 text-left">
          Maternal and child health reflects the health and wellbeing of women during pregnancy, childbirth, and the postpartum period, as well as the health and development of children under five years of age. In Nigeria, many maternal and child deaths are preventable, yet they persist due to sociocultural factors, inequitable access to health services, and limited health knowledge.
        </p>
        <p className="text-slate-600 leading-relaxed text-left">
          At <strong className="text-slate-900">Blue Gate Public Health Promotion Initiative</strong>, we work to ensure that women and children have the information, support, and access to quality care they need to live healthy, fulfilling lives. Our programs focus on addressing the root causes of poor maternal and child health outcomes including gender inequality, poverty, harmful cultural practices, and barriers to care.
        </p>
      </section>

      <section className="py-12 px-3 max-w-5xl mx-auto space-y-16">
        <div className="text-center mb-8">
          <div className="inline-block rounded-2xl overflow-hidden ring-1 ring-slate-900/10 shadow-soft">
            <img
              src="/assets/maternal.png"
              alt="Maternal and Child Health"
              className="mx-auto max-w-md w-full"
            />
          </div>
        </div>

        <div>
          <div className="text-center mb-8">
            <h2 className="font-display text-xl font-bold text-slate-900">Our Approach</h2>
            <span className="mt-2.5 inline-block h-1 w-10 rounded-full bg-brand-500" aria-hidden="true" />
          </div>
          <p className="text-slate-600 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            Our maternal and child health interventions are centered on:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {approachItems.map((item) => (
              <li
                key={item.text}
                className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <span className={`flex items-center justify-center w-9 h-9 rounded-xl ring-1 ring-inset flex-shrink-0 ${item.chip}`}>
                  <item.icon className="w-4.5 h-4.5" size={18} />
                </span>
                <span className="text-slate-600 leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 text-center mt-8 max-w-3xl mx-auto leading-relaxed">
            We collaborate with communities, health workers, traditional leaders, and government health systems to create environments where women and children can thrive.
          </p>
        </div>

        <div>
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
              Key Focus Areas
            </h2>
            <span className="mt-4 inline-block h-1 w-12 rounded-full bg-brand-500" aria-hidden="true" />
          </div>

          <div className="space-y-5">
            {focusAreas.map((area, i) => (
              <div
                key={area.title}
                className="bg-white p-6 md:p-7 rounded-2xl border border-slate-200 transition-colors duration-300 hover:border-brand-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-brand-50 ring-1 ring-inset ring-brand-100 text-brand-600 flex-shrink-0">
                    <area.icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    <span className="text-brand-600 mr-2">{i + 1}.</span>
                    {area.title}
                  </h3>
                </div>
                <ul className="space-y-2.5 text-slate-600">
                  {area.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-400 flex-shrink-0" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                {area.note && (
                  <p className="text-slate-500 mt-4 text-sm italic border-l-2 border-brand-200 pl-4">
                    {area.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
