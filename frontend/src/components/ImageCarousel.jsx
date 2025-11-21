import React, { useState, useEffect, useRef } from "react";

export default function ImageCarousel({
  slides = [],
  autoSlide = true,
  interval = 5000,
}) {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const timeoutRef = useRef(null);

  const preloadImage = (src) => {
    if (!src || loadedImages.has(src)) return;
    const img = new Image();
    img.src = src;
    img.onload = () => setLoadedImages((prev) => new Set(prev).add(src));
  };

  // Preload current, next, and previous images
  useEffect(() => {
    if (slides.length === 0) return;

    const currentSlide = slides[current];
    const nextIndex = (current + 1) % slides.length;
    const prevIndex = (current - 1 + slides.length) % slides.length;

    preloadImage(currentSlide.image);
    preloadImage(slides[nextIndex]?.image);
    preloadImage(slides[prevIndex]?.image);
  }, [current, slides]);

  // Auto-slide with pause on hover
  useEffect(() => {
    if (!autoSlide || slides.length <= 1) return;

    timeoutRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timeoutRef.current);
  }, [autoSlide, interval, slides.length]);

  // Pause autoplay on hover
  const handleMouseEnter = () => clearInterval(timeoutRef.current);
  const handleMouseLeave = () => {
    if (autoSlide && slides.length > 1) {
      timeoutRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, interval);
    }
  };

  if (!slides.length) {
    return (
      <div className="w-full bg-gray-100 rounded-2xl flex items-center justify-center h-96">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[current];

  return (
    <div
      className="relative group overflow-hidden rounded-2xl shadow-lg bg-gray-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
     
      <div className="relative w-full h-72 border border-gray-300 bg-sky-200 md:h-96 lg:h-112 overflow-hidden">
        {/* Slides */}
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => {
            const isLoaded = loadedImages.has(slide.image);

            return (
              <div key={index} className="min-w-full h-full relative">
                {!isLoaded ? (
                  // Skeleton loader
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                    <div className="text-gray-400">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                ) : null}

                <img
                  src={slide.image}
                  alt={slide.title || `Research activity ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  // loading={index === 0 ? "eager" : "lazy"}
                  onError={(e) => {
                    e.target.src = "/assets/fallback-image.jpg"; // optional fallback
                  }}
                />

                {/* Optional caption overlay */}
                {slide.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                    <h3 className="text-lg font-semibold drop-shadow-md">{slide.title}</h3>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Left Arrow */}
        {slides.length > 1 && (
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Right Arrow */}
        {slides.length > 1 && (
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Dots Indicator */}
        {slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === current
                    ? "w-8 h-2 bg-white rounded-full shadow-md"
                    : "w-2 h-2 bg-white/60 rounded-full hover:bg-white/90"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}