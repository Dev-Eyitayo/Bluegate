import React, { useState, useEffect } from "react";
import { Users, HeartHandshake, Shield, FileText, Link, ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Empowerment() {
  // Enhanced Slider Data
  const slides = [
    {
      image: "/assets/updatedImages/Empowerment.jpg",
      title: "",
    },
    {
      image: "/assets/vocation-ibadan.jpg",
      title: "Makeup vocational training for sex workers in Ibadan, Nigeria",
    },
    {
      image: "/assets/chair-ceo.jpg",
      title: "Professor Atinuke Agunloye (Blue Gate BOT Chair) and Dr. Ademola Adelekan (Blue Gate CEO)",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [imageError, setImageError] = useState({});

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const strategies = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Life Skills & Confidence-Building",
      points: [
        "Self-esteem and personal agency",
        "Communication and negotiation skills",
        "Leadership and decision-making",
        "Conflict resolution and problem-solving",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Human Rights & Legal Literacy",
      points: [
        "Rights to health, safety, and dignity",
        "Access to legal and social support",
        "Reporting violations and discrimination",
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Economic & Livelihood Empowerment",
      points: [
        "Business and entrepreneurship training",
        "Vocational skill development",
        "Income-generating opportunities",
        "Mentorship and cooperative support",
      ],
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Peer Support & Community Mobilization",
      points: [
        "Peer educator and mentor groups",
        "Safe community dialogue spaces",
        "Shared learning and collective action",
      ],
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Advocacy & Voice Strengthening",
      points: [
        "Participation in decision-making",
        "Engagement with policymakers",
        "Advocacy for health and rights",
      ],
    },
  ];

  return (
    <div className="min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="py-14 px-3 max-w-7xl mx-auto">
        <PageHeader
          eyebrow="Programmes"
          title="Empowerment & Community Strengthening"
          subtitle={
            <>
              At <strong className="text-slate-900">Blue Gate Public Health Promotion Initiative</strong>,
              we empower marginalized communities to overcome barriers, claim their rights,
              and build sustainable futures.
            </>
          }
        />
      </section>

      {/* Carousel Slides */}
      <section className="pb-14 px-3 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-display text-xl font-bold text-slate-900">
            Empowerment in Action
          </h2>
          <span className="mt-2.5 inline-block h-1 w-10 rounded-full bg-brand-500" aria-hidden="true" />
        </div>
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-900/10 shadow-soft">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full bg-slate-100 relative">
                {imageError[index] ? (
                  <div className="w-full h-80 md:h-96 flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                    <p className="text-slate-600 text-center">Image loading...</p>
                    <p className="text-xs text-slate-500 mt-1">Path: {slide.image}</p>
                  </div>
                ) : (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    onError={() => setImageError((prev) => ({ ...prev, [index]: true }))}
                    className="w-full h-100 md:h-106 object-cover"
                  />
                )}
                {slide.title && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/85 via-brand-950/40 to-transparent p-6 text-white">
                    <p className="text-sm md:text-base font-medium max-w-3xl mx-auto text-center">
                      {slide.title}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm ring-1 ring-white/25 text-white transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm ring-1 ring-white/25 text-white transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  index === current
                    ? "w-7 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-3 max-w-5xl mx-auto mb-14">
        <div className="bg-white rounded-2xl p-6 md:p-9 border border-slate-200 shadow-soft">
          <p className="text-slate-600 leading-relaxed mb-5">
            Empowerment enables individuals and communities — especially those who are{" "}
            <strong className="text-slate-900">marginalized or disadvantaged</strong> — to gain the{" "}
            <em>knowledge, confidence, and resources</em> they need to make decisions, advocate
            for themselves, and improve their quality of life.
          </p>
          <p className="text-slate-600 leading-relaxed mb-5">We work with:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {[
              "Women & adolescent girls",
              "Children & youth",
              "Female sex workers",
              "LGBTI persons",
              "Incarcerated individuals",
              "Low-income communities",
            ].map((group) => (
              <div
                key={group}
                className="rounded-xl bg-brand-50 px-3 py-3 text-center text-sm font-medium text-brand-800 ring-1 ring-inset ring-brand-100"
              >
                {group}
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed">
            These groups often face{" "}
            <strong className="text-slate-900">
              discrimination, limited access to education or healthcare, social exclusion, legal
              vulnerability, and economic challenges
            </strong>
            . Our empowerment programmes aim to <strong className="text-slate-900">bridge these gaps</strong>{" "}
            and create opportunities for <em>growth, dignity, and independence</em>.
          </p>
        </div>
      </section>

      {/* Our Strategies - Icon Cards */}
      <section className="py-14 px-3 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            Our Empowerment Strategies & Activities
          </h2>
          <span className="mt-4 inline-block h-1 w-12 rounded-full bg-brand-500" aria-hidden="true" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((item, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-50 ring-1 ring-inset ring-brand-100 flex items-center justify-center text-brand-600 mb-4 transition-transform duration-300 group-hover:scale-105">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-slate-900 mb-3">{item.title}</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {item.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-400 flex-shrink-0" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
