import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export default function ImageCarousel({
  slides = [],
  autoSlide = true,
  interval = 5000,
}) {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
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

    preloadImage(currentSlide?.image);
    preloadImage(slides[nextIndex]?.image);
    preloadImage(slides[prevIndex]?.image);
  }, [current, slides]);

  // Auto-slide with pause on hover
  useEffect(() => {
    if (!autoSlide || slides.length <= 1 || isPreviewOpen) return;

    timeoutRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timeoutRef.current);
  }, [autoSlide, interval, slides.length, isPreviewOpen]);

  // Pause autoplay on hover
  const handleMouseEnter = () => clearInterval(timeoutRef.current);
  const handleMouseLeave = () => {
    if (autoSlide && slides.length > 1 && !isPreviewOpen) {
      timeoutRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, interval);
    }
  };

  const openPreview = (index) => {
    setPreviewIndex(index);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setCurrent(previewIndex);
  };

  const prevPreview = useCallback(() => {
    setPreviewIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const nextPreview = useCallback(() => {
    setPreviewIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Keyboard navigation & body scroll lock for preview
  useEffect(() => {
    if (!isPreviewOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closePreview();
      } else if (e.key === "ArrowLeft") {
        prevPreview();
      } else if (e.key === "ArrowRight") {
        nextPreview();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen, prevPreview, nextPreview, previewIndex]);

  if (!slides.length) {
    return (
      <div className="w-full bg-slate-100 rounded-2xl flex items-center justify-center h-96">
        <p className="text-slate-500">No images available</p>
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

  return (
    <>
      <div
        className="relative group overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-900/10 shadow-soft"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full h-72 md:h-96 lg:h-112 overflow-hidden">
          {/* Slides */}
          <div
            className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => {
              const isLoaded = loadedImages.has(slide.image);

              return (
                <div
                  key={index}
                  onClick={() => openPreview(index)}
                  className="min-w-full h-full relative cursor-pointer"
                >
                  {!isLoaded ? (
                    // Skeleton loader
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100 animate-pulse">
                      <div className="text-slate-300">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  ) : null}

                  <img
                    src={slide.image}
                    alt={slide.title || `Outreach activity ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:scale-[1.01] transition-transform ${
                      isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    rel="prefetch"
                    onError={(e) => {
                      e.target.src = "/assets/fallback-image.jpg";
                    }}
                  />

                  {/* Optional caption overlay */}
                  {slide.title && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-950/80 to-transparent p-6 text-white">
                      <h3 className="text-base md:text-lg font-medium leading-snug">{slide.title}</h3>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Maximize Button */}
          <button
            type="button"
            onClick={() => openPreview(current)}
            aria-label="View full preview"
            title="Click to view full image"
            className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white backdrop-blur-sm transition-all duration-200 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Maximize2 className="h-4 w-4" />
          </button>

          {/* Left Arrow */}
          {slides.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/25 backdrop-blur-sm ring-1 ring-white/25 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Right Arrow */}
          {slides.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/25 backdrop-blur-sm ring-1 ring-white/25 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Dots Indicator */}
          {slides.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    index === current
                      ? "w-7 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Full Image Preview Modal */}
      {isPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closePreview}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
        >
          {/* Top Bar Controls */}
          <div
            className="absolute top-4 left-4 right-4 flex items-center justify-between z-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Counter */}
            <span className="text-white/80 text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full ring-1 ring-white/15">
              {previewIndex + 1} / {slides.length}
            </span>

            {/* Close Button */}
            <button
              type="button"
              onClick={closePreview}
              aria-label="Close full preview"
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all ring-1 ring-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Main Preview Image Container */}
          <div
            className="relative max-h-[82vh] max-w-[92vw] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={slides[previewIndex]?.image}
              alt={slides[previewIndex]?.title || "Full preview"}
              className="max-h-[78vh] max-w-[92vw] object-contain rounded-lg shadow-2xl transition-all duration-200 select-none"
            />
            {slides[previewIndex]?.title && (
              <p className="text-white/90 text-sm text-center mt-3 max-w-xl px-4">
                {slides[previewIndex]?.title}
              </p>
            )}
          </div>

          {/* Modal Navigation Arrows */}
          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevPreview();
                }}
                aria-label="Previous preview image"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-sm transition-all ring-1 ring-white/15 z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextPreview();
                }}
                aria-label="Next preview image"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-sm transition-all ring-1 ring-white/15 z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}