import React, { useState, useEffect } from "react";

export default function Empowerment() {
  // Slider Data
  const slides = [
    {
      image: "/assets/vocation-ibadan.jpg",
      title: "Makeup vocational training for sex workers in Ibadan, Nigeria",
    },
    {
      image: "/assets/chair-ceo.jpg",
      title:
        "Professor Atinuke Agunloye (Blue Gate BOT Chair) and Dr. Ademola Adelekan (Blue Gate CEO)",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [imageError, setImageError] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      {/* Row 1: Page Title */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-sky-800 text-center mb-2">
          Empowerment
        </h1>
        
      </section>

      {/* Row 2: Empowerment Text */}
      <section className="px-6 max-w-4xl mx-auto">
        <div className="space-y-3 text-slate-700 leading-relaxed text-justify">
          <p>
            At Blue Gate Initiative, we believe in the power of empowerment to create positive
            change. We are dedicated to working with individuals and communities who may be
            marginalized or disadvantaged, including women, children, female sex workers, LGBTI, and
            inmates.
          </p>
          <p>
            Our mission is to enable these communities to overcome barriers, stand up for their
            rights, and realize their full potential through specialized programs, workshops, and
            advocacy initiatives.
          </p>
          <p>
            By providing disadvantaged people with the information, tools, and support they need to
            overcome obstacles, stand up for their rights, and actively engage in decision-making
            processes, empowerment promotes increased resilience, self-determination, and social
            inclusion.
          </p>
          <p>
            We are committed to building a more equal and inclusive society for everyone, whether
            that be through community support, education, mentorship, or skill development.
          </p>
        </div>
      </section>

      {/* Row 3: Carousel Section */}
      <section className="py-8 px-6 max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full flex flex-col items-center">
                {!imageError ? (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    onError={() => setImageError(true)}
                    className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-72 sm:h-80 md:h-96 flex items-center justify-center bg-gray-200 rounded-t-2xl">
                    <p className="text-gray-500 text-center">Image unavailable. Check asset path.</p>
                  </div>
                )}
                <div className="text-center py-4 rounded-b-2xl w-full">
                  <h3 className="text-sm sm:text-md text-sky-700">{slide.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow-md"
          >
            ❮
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow-md"
          >
            ❯
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-sky-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}