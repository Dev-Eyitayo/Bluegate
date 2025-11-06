import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogImages({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!slides || slides.length === 0) {
    return (
      <div className="w-full h-72 sm:h-80 md:h-96 flex items-center justify-center bg-gray-200 rounded-2xl text-gray-500">
        No images available
      </div>
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full md:h-96 h-72 overflow-hidden rounded-2xl">
      {/* Images */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.src}
            alt={slide.caption || "Blog image"}
            className="w-full h-full object-cover rounded-2xl"
            onError={(e) => {
              console.error(`Failed to load image: ${slide.src}`);
              e.target.src = "/fallback-image.jpg";
            }}
          />
          {slide.caption && (
            <div className="absolute bottom-0 w-full bg-white/80 text-center py-3 rounded-b-2xl">
              <p className="text-sky-700 text-sm font-medium">{slide.caption}</p>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/0 hover:bg-white text-gray-700 rounded-full p-2 transition"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 transition"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          {/* <div className="absolute bottom-1 left-1/2 py-2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-sky-600" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div> */}
        </>
      )}
    </div>
  );
}
