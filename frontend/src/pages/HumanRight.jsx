import React, { useState } from "react";
import { Shield, Users, HeartHandshake, FileText, Link, AlertCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function HumanRight() {
  const slides = [
    {
      image: "/assets/updatedImages/Human Right.jpg",
      title: "",
    },
  ];

  const [imageError, setImageError] = useState({});

  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Rights-Based Health Education",
      desc: "We educate individuals and communities about their right to health, empowering them to make informed decisions and demand respectful care.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Health Facility Sensitization",
      desc: "We train healthcare providers on respectful, non-discriminatory care, confidentiality, gender sensitivity, and inclusive service delivery.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Community Empowerment & Support",
      desc: "We strengthen legal rights knowledge, reduce stigma, support peer-led advocacy, and promote positive health-seeking behavior.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Policy & Advocacy",
      desc: "We advocate at local and national levels to influence policies, strengthen accountability, and promote equitable access to services.",
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Referral & Linkage to Care",
      desc: "We ensure friendly, inclusive care with continuity of treatment and follow-up systems that respect dignity and confidentiality.",
    },
  ];

  return (
    <div className="min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="py-14 px-3 max-w-7xl mx-auto">
        <PageHeader
          eyebrow="Programmes"
          title="Human Rights & Health Equity"
          subtitle={
            <>
              At <strong className="text-slate-900">Blue Gate Public Health Promotion Initiative</strong>,
              we believe everyone has the right to quality healthcare — regardless of identity,
              background, or circumstances.
            </>
          }
        />
      </section>

      {/* Introduction */}
      <section className="px-3 max-w-5xl mx-auto mb-14">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-soft p-6 md:p-9">
          <p className="text-slate-600 leading-relaxed mb-5">
            Access to health is a <strong className="text-slate-900">fundamental human right</strong>{" "}
            recognized globally. Yet, many people continue to face{" "}
            <em>discrimination, stigma, and systemic barriers</em> when seeking care.
          </p>
          <p className="text-slate-600 leading-relaxed mb-5">
            Our <strong className="text-slate-900">Human Rights and Health Equity program</strong> ensures
            that <em>key and vulnerable populations</em> — including{" "}
            <strong className="text-slate-900">
              women, adolescents, people living with HIV, people with disabilities, sexual and gender
              minorities, people affected by poverty, and underserved rural communities
            </strong>{" "}
            — can access health services with{" "}
            <strong className="text-slate-900">dignity, respect, and without discrimination</strong>.
          </p>
          <p className="rounded-xl bg-brand-50 ring-1 ring-inset ring-brand-100 px-5 py-4 leading-relaxed font-medium text-brand-900">
            We have delivered targeted interventions in <strong>Oyo, Osun, and Ondo States</strong>,
            reaching LGBTI communities, female sex workers, women, atypical children, hearing-impaired
            adolescents, and others.
          </p>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-12 px-3 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Why This Matters
          </h2>
          <span className="mt-4 inline-block h-1 w-12 rounded-full bg-brand-500" aria-hidden="true" />
        </div>
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-white p-7 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-50 ring-1 ring-inset ring-rose-100 text-rose-600">
                <AlertCircle className="w-5 h-5" />
              </span>
              <h3 className="font-display font-bold text-slate-900 text-lg">Challenges Faced</h3>
            </div>
            <ul className="space-y-3 text-slate-600">
              {[
                "Stigma and discrimination in health facilities",
                "Limited social or economic power to demand quality care",
                "Violations of privacy and confidentiality",
                "Cultural and structural barriers to timely services",
              ].map((challenge) => (
                <li key={challenge} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-400 flex-shrink-0" aria-hidden="true" />
                  {challenge}
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500 mt-5 italic">
              These lead to poor health outcomes, preventable illness, and widened inequality.
            </p>
          </div>

          <div className="bg-brand-950 text-white p-7 rounded-2xl relative overflow-hidden flex flex-col justify-center">
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-600/30 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 ring-1 ring-inset ring-white/15 text-brand-200">
                  <HeartHandshake className="w-5 h-5" />
                </span>
                <h3 className="font-display font-bold text-lg">Our Role</h3>
              </div>
              <p className="text-brand-100/90 leading-relaxed">
                We <strong className="text-white">bridge the gap</strong> through education, training,
                advocacy, and direct support — ensuring <em>no one is left behind</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Icon Cards */}
      <section className="py-14 px-3 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            What We Do
          </h2>
          <span className="mt-4 inline-block h-1 w-12 rounded-full bg-brand-500" aria-hidden="true" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-50 ring-1 ring-inset ring-brand-100 flex items-center justify-center text-brand-600 mb-4 transition-transform duration-300 group-hover:scale-105">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Image */}
      <section className="py-4 px-3 max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-900/10 shadow-soft">
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full relative">
              {imageError[index] ? (
                <div className="w-full h-80 md:h-96 flex flex-col items-center justify-center p-6 bg-slate-100">
                  <p className="text-slate-600 text-center">Image loading...</p>
                  <p className="text-xs text-slate-500 mt-1">Path: {slide.image}</p>
                </div>
              ) : (
                <img
                  src={slide.image}
                  alt={slide.title || "Human rights programme activity"}
                  onError={() => setImageError((prev) => ({ ...prev, [index]: true }))}
                  className="w-full h-auto object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
