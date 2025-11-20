import React, { useState, useEffect } from "react";
import { Users, HeartHandshake, Shield, FileText, Link, ChevronLeft, ChevronRight } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      {/* Hero Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-5">
          {/* <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center">
            <HeartHandshake className="w-11 h-11 text-sky-600" />
          </div> */}
        </div>
        <h1 className="text-3xl sm:text-2xl font-extrabold text-sky-800 mb-4">
          Empowerment & Community Strengthening
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
          At <strong>Blue Gate Public Health Promotion Initiative</strong>, we empower marginalized communities to overcome barriers, claim their rights, and build sustainable futures.
        </p>
      </section>

      {/* Introduction */}
      <section className="px-3 max-w-5xl mx-auto mb-16">
        <div className="bg-white rounded-2xl p-6 md:p-9 border border-sky-100">
          <p className="text-slate-700 leading-relaxed text-justify mb-5">
            Empowerment enables individuals and communities — especially those who are <strong>marginalized or disadvantaged</strong> — to gain the <em>knowledge, confidence, and resources</em> they need to make decisions, advocate for themselves, and improve their quality of life.
          </p>
          <p className="text-slate-700 leading-relaxed text-justify mb-5">
            We work with:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              "Women & adolescent girls",
              "Children & youth",
              "Female sex workers",
              "LGBTI persons",
              "Incarcerated individuals",
              "Low-income communities",
            ].map((group) => (
              <div key={group} className="bg-sky-50 p-3 rounded-lg text-center text-sm font-medium text-sky-800 border border-sky-200">
                {group}
              </div>
            ))}
          </div>
          <p className="text-slate-700 leading-relaxed text-justify">
            These groups often face <strong>discrimination, limited access to education or healthcare, social exclusion, legal vulnerability, and economic challenges</strong>. Our empowerment programmes aim to <strong>bridge these gaps</strong> and create opportunities for <em>growth, dignity, and independence</em>.
          </p>
        </div>
      </section>

      {/* Our Strategies - Icon Cards */}
      <section className="py-16 px-3 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-sky-800 text-center mb-12">
          Our Empowerment Strategies & Activities
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Life Skills & Confidence-Building",
              points: [
                "Self-esteem and personal agency",
                "Communication and negotiation skills",
                "Leadership and decision-making",
                "Conflict resolution and problem-solving",
              ],
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Human Rights & Legal Literacy",
              points: [
                "Rights to health, safety, and dignity",
                "Access to legal and social support",
                "Reporting violations and discrimination",
              ],
            },
            {
              icon: <FileText className="w-8 h-8" />,
              title: "Economic & Livelihood Empowerment",
              points: [
                "Business and entrepreneurship training",
                "Vocational skill development",
                "Income-generating opportunities",
                "Mentorship and cooperative support",
              ],
            },
            {
              icon: <HeartHandshake className="w-8 h-8" />,
              title: "Peer Support & Community Mobilization",
              points: [
                "Peer educator and mentor groups",
                "Safe community dialogue spaces",
                "Shared learning and collective action",
              ],
            },
            {
              icon: <Link className="w-8 h-8" />,
              title: "Advocacy & Voice Strengthening",
              points: [
                "Participation in decision-making",
                "Engagement with policymakers",
                "Advocacy for health and rights",
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl transition-all border border-sky-100 group"
            >
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mb-4 group-hover:bg-sky-200 transition">
                {item.icon}
              </div>
              <h3 className="font-bold text-sky-800 mb-3 text-lg">{item.title}</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {item.points.map((point, j) => (
                  <li key={j} className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 px-3 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-sky-800 text-center mb-10">
          Empowerment in Action
        </h2>
        <div className="relative overflow-hidden rounded-2xl border border-slate-200">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full relative">
                {imageError[index] ? (
                  <div className="w-full h-80 md:h-96 flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 p-6">
                    <p className="text-gray-600 text-center">Image loading...</p>
                    <p className="text-xs text-gray-500 mt-1">Path: {slide.image}</p>
                  </div>
                ) : (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    onError={() => setImageError((prev) => ({ ...prev, [index]: true }))}
                    className="w-full h-80 md:h-96 object-cover"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 text-white">
                  <p className="text-sm md:text-base font-semibold max-w-3xl mx-auto text-center drop-shadow-md">
                    {slide.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-sky-800 rounded-full p-3 shadow-xl transition-all duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-sky-800 rounded-full p-3 shadow-xl transition-all duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 ${
                  index === current
                    ? "w-12 h-3 bg-white rounded-full shadow-md"
                    : "w-3 h-3 bg-white/60 rounded-full hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final Message & CTA */}
      {/* <section className="py-14 px-3 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-sky-700 to-sky-900 text-white p-8 md:p-10 rounded-2xl shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Our Goal
          </h3>
          <p className="mb-6 text-sky-100 max-w-2xl mx-auto text-lg">
            To build a society where <strong>everyone</strong> — regardless of identity or background — has the <strong>power and opportunity to thrive</strong>.
          </p>
          <button className="bg-white text-sky-800 font-bold px-8 py-3 rounded-full hover:bg-sky-50 transition shadow-md text-lg">
            Join Our Empowerment Programs
          </button>
        </div>
      </section> */}
    </div>
  );
}