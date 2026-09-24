import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export default function BlogImages({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const openPreview = (index) => {
    setPreviewIndex(index);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    // Sync current carousel slide with the last viewed preview slide
    setCurrentIndex(previewIndex);
  };

  const prevPreview = useCallback(() => {
    setPreviewIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides]);

  const nextPreview = useCallback(() => {
    setPreviewIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides]);

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

  if (!slides || slides.length === 0) {
    return (
      <div className="w-full h-72 sm:h-80 md:h-96 flex items-center justify-center bg-slate-100 rounded-2xl text-slate-500">
        No images available
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full md:h-96 h-72 overflow-hidden rounded-2xl ring-1 ring-slate-900/10 shadow-soft group">
        {/* Images */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            onClick={() => openPreview(idx)}
            className={`absolute inset-0 cursor-pointer transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.caption || "Outreach image"}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
              onError={(e) => {
                console.error(`Failed to load image: ${slide.src}`);
                e.target.src = "/fallback-image.jpg";
              }}
            />
            {slide.caption && (
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-brand-950/85 to-brand-950/0 text-center pt-8 pb-3 px-4">
                <p className="text-white text-sm font-medium">{slide.caption}</p>
              </div>
            )}
          </div>
        ))}

        {/* Maximize / Fullscreen hint button */}
        <button
          type="button"
          onClick={() => openPreview(currentIndex)}
          aria-label="View full preview"
          title="Click to view full image"
          className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white backdrop-blur-sm transition-all duration-200 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Maximize2 className="h-4 w-4" />
        </button>

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/25 backdrop-blur-sm ring-1 ring-white/25 text-white rounded-full transition-colors duration-300 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/25 backdrop-blur-sm ring-1 ring-white/25 text-white rounded-full transition-colors duration-300 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Full Image Preview Modal */}
      {isPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closePreview}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 animate-fadeIn"
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
              src={slides[previewIndex].src}
              alt={slides[previewIndex].caption || "Full preview"}
              className="max-h-[78vh] max-w-[92vw] object-contain rounded-lg shadow-2xl transition-all duration-200 select-none"
            />
            {slides[previewIndex].caption && (
              <p className="text-white/90 text-sm text-center mt-3 max-w-xl px-4">
                {slides[previewIndex].caption}
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
