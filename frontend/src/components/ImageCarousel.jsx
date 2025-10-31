import React, { useState, useEffect } from "react";

export default function ImageCarousel({ slides = [], autoSlide = true, interval = 5000 }) {
  const [current, setCurrent] = useState(0);
  const [imageError, setImageError] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (!autoSlide || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoSlide, interval, slides.length]);

  if (!slides.length) {
    return (
      <div className="w-full h-72 sm:h-80 md:h-96 flex items-center justify-center bg-gray-200 rounded-2xl text-gray-500">
        No slides available
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full flex flex-col items-center">
            {!imageError ? (
              <img
                src={slide.image}
                alt={slide.title || `Slide ${index + 1}`}
                onError={() => setImageError(true)}
                className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-t-2xl"
              />
            ) : (
              <div className="w-full h-72 sm:h-80 md:h-96 flex items-center justify-center bg-gray-200 rounded-t-2xl">
                <p className="text-gray-500 text-center">🖼️ Image not found</p>
              </div>
            )}
            {slide.title && (
              <div className="text-center py-4 rounded-b-2xl w-full">
                <h3 className="text-sm sm:text-sm text-sky-700">{slide.title}</h3>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {slides.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 "
          >
            ❮
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 "
          >
            ❯
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-sky-600" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
