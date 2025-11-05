import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogImages({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!slides || slides.length === 0) {
    return null; // or a fallback UI
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl">
      {/* Images */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-500 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.src}
            alt={slide.caption || "Blog image"}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error(`Failed to load image: ${slide.src}`);
              e.target.src = "/fallback-image.jpg"; // Optional fallback
            }}
          />
          {slide.caption && (
            <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm p-3">
              {slide.caption}
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-sky-600/80 text-white rounded-full hover:bg-sky-700 transition"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-sky-600/80 text-white rounded-full hover:bg-sky-700 transition"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
    </div>
  );
}