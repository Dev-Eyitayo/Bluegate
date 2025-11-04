import React, { useState, useEffect } from "react";

export default function HumanRight() {
  // Slider Data
  const slides = [
    {
      image: "/assets/humanright1.jpg",
      title: "",
    }
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

      <section className="py-8 px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-sky-800 text-center mb-2">
          Human Rights
        </h1>
        
      </section>


      <section className="px-6 max-w-4xl mx-auto">
        <div className="space-y-3 text-slate-700 leading-relaxed text-justify">
          <p>
            Human rights are essential for the dignity, equality, and well-being of all individuals. The right to health for key and 
            vulnerable populations, which includes women, children, female sex workers, LGBTI, and inmates, refers to the 
            entitlement of these groups to access healthcare services and resources without discrimination or barriers.
          </p>
          <p>
            It involves addressing social factors affecting health and advocating for policies that meet their specific needs. 
            It allows vulnerable populations equitable access to healthcare services, improved health outcomes, 
            reduced disparities in health outcomes, increased well-being and quality of life, and 
            greater empowerment and agency over their health, leading to a more equitable and just society.
          </p>
          <p>
            Blue Gate has provided several rights to health interventions for the LGBT, women, sex workers, 
            atypical children, and hearing-impaired adolescents, among others, in Oyo, Osun, and Ondo States, Nigeria.
          </p>
        </div>
      </section>

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