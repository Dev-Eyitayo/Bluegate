import React, { useState, useEffect } from "react";
import { Shield, Users, HeartHandshake, FileText, Link, ChevronLeft, ChevronRight } from "lucide-react";

export default function HumanRight() {
  // Enhanced Slider Data with meaningful captions
  const slides = [
    {
      image: "/assets/humanright1.jpg",
      title: "",
    },
    // {
    //   image: "/assets/humanright2.jpg", // Placeholder – replace with actual
    //   title: "Healthcare provider training on inclusive care in Osun State",
    // },
    // {
    //   image: "/assets/humanright3.jpg", // Placeholder – replace with actual
    //   title: "Peer advocacy workshop with sexual and gender minorities in Ondo State",
    // },
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
          {/* <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center shadow-md">
            <Shield className="w-10 h-10 text-sky-600" />
          </div> */}
        </div>
        <h1 className="text-3xl sm:text-2xl font-extrabold text-sky-800 mb-4">
          Human Rights & Health Equity
        </h1>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          At <strong>Blue Gate Public Health Promotion Initiative</strong>, we believe everyone has the right to quality healthcare - regardless of identity, background, or circumstances.
        </p>
      </section>

      {/* Introduction */}
      <section className="px-3 max-w-5xl mx-auto mb-16">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-9 border border-sky-100">
          <p className="text-slate-700 leading-relaxed text-justify mb-5">
            Access to health is a <strong>fundamental human right</strong> recognized globally. Yet, many people continue to face <em>discrimination, stigma, and systemic barriers</em> when seeking care.
          </p>
          <p className="text-slate-700 leading-relaxed text-justify mb-5">
            Our <strong>Human Rights and Health Equity program</strong> ensures that <em>key and vulnerable populations</em> - including <strong>women, adolescents, people living with HIV, people with disabilities, sexual and gender minorities, people affected by poverty, and underserved rural communities</strong> - can access health services with <strong>dignity, respect, and without discrimination</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed text-justify font-medium text-sky-800">
            We have delivered targeted interventions in <strong>Oyo, Osun, and Ondo States</strong>, reaching LGBTI communities, female sex workers, women, atypical children, hearing-impaired adolescents, and others.
          </p>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-14 px-3 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-sky-800 text-center mb-10">
          Why This Matters
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 p-7 rounded-xl border border-red-100">
            <h3 className="font-bold text-red-800 mb-4 text-lg">Challenges Faced</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Stigma and discrimination in health facilities
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Limited social or economic power to demand quality care
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Violations of privacy and confidentiality
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Cultural and structural barriers to timely services
              </li>
            </ul>
            <p className="text-sm text-slate-600 mt-4 italic">
              These lead to poor health outcomes, preventable illness, and widened inequality.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-white p-7 rounded-xl border border-sky-200">
            <h3 className="font-bold text-sky-800 mb-4 text-lg">Our Role</h3>
            <p className="text-slate-700 leading-relaxed">
              We <strong>bridge the gap</strong> through education, training, advocacy, and direct support — ensuring <em>no one is left behind</em>.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do - Icon Cards */}
      <section className="py-16 px-3 max-w-7xl mx-auto bg-sky-50/50">
        <h2 className="text-2xl font-bold text-sky-800 text-center mb-12">
          What We Do
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Rights-Based Health Education",
              desc: "We educate individuals and communities about their right to health, empowering them to make informed decisions and demand respectful care.",
            },
            {
              icon: <HeartHandshake className="w-8 h-8" />,
              title: "Health Facility Sensitization",
              desc: "We train healthcare providers on respectful, non-discriminatory care, confidentiality, gender sensitivity, and inclusive service delivery.",
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Community Empowerment & Support",
              desc: "We strengthen legal rights knowledge, reduce stigma, support peer-led advocacy, and promote positive health-seeking behavior.",
            },
            {
              icon: <FileText className="w-8 h-8" />,
              title: "Policy & Advocacy",
              desc: "We advocate at local and national levels to influence policies, strengthen accountability, and promote equitable access to services.",
            },
            {
              icon: <Link className="w-8 h-8" />,
              title: "Referral & Linkage to Care",
              desc: "We ensure friendly, inclusive care with continuity of treatment and follow-up systems that respect dignity and confidentiality.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl transition-all border border-sky-100 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mb-4 group-hover:bg-sky-200 transition">
                {item.icon}
              </div>
              <h3 className="font-bold text-sky-800 mb-2 text-lg">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Carousel */}
      <section className="py-16 px-3 max-w-5xl mx-auto">
        {/* <h2 className="text-2xl md:text-3xl font-bold text-sky-800 text-center mb-10">
          Human Rights in Action
        </h2> */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full relative">
                {imageError[index] ? (
                  <div className="w-full h-80 md:h-96 flex flex-col items-center justify-center p-6">
                    <p className="text-gray-600 text-center">
                      Image loading...
                    </p>
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
                <div className="absolute inset-x-0 p-6 text-white">
                  <p className="text-sm md:text-base font-semibold max-w-3xl mx-auto text-center ">
                    {slide.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          {/* <button
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
          </button> */}

          {/* Dots */}
          {/* <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
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
          </div> */}
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-14 px-3 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-sky-700 to-sky-900 text-white p-8 md:p-10 rounded-2xl shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join the Movement for Health Justice</h3>
          <p className="mb-6 text-sky-100 max-w-2xl mx-auto">
            Together, we can ensure that healthcare is a right, not a privilege — for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-800 font-bold px-8 py-3 rounded-full hover:bg-sky-50 transition shadow-md">
              Partner with Us
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}