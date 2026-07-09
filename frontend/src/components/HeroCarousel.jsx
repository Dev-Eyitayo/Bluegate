import React, { useEffect, useState, useRef } from 'react';
// import { hero1 } from "../assets/hero1.png";
const slides = [
  { id: 1, title: 'Team at Olubadan Palace', text: 'Advocating for healthier communities through leadership and partnership.', img: '/assets/hero1.png' },
  { id: 2, title: 'Empowering Lives Through Health', text: 'Driving change with evidence-based community programs and outreach.', img: '/assets/hero2.jpg' },
  { id: 3, title: 'Better Care, Brighter Communities', text: 'We are committed to promoting public health through community engagement, advocacy, and education.', img: '/assets/hero3.jpg' }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);

  // Auto-slide logic
  useEffect(() => {
    // Function to reset the interval
    const resetInterval = () => {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    };

    resetInterval();

    return () => clearInterval(timerRef.current);
  }, []);

  // Show function handles slide change and resets the auto-timer
  function show(index) {
    setCurrent((index + slides.length) % slides.length);
    // Reset timer on manual interaction
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
  }

  // --- Mobile Swipe Handlers ---

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) { // Swiping left -> Next slide
        show(current + 1);
      } else { // Swiping right -> Previous slide
        show(current - 1);
      }
    }
  };

  useEffect(() => {
  const img = new Image();
  img.src = slides[current].img;

  // Optionally preload the next one too
  const nextImg = new Image();
  nextImg.src = slides[(current + 1) % slides.length].img;
  }, [current]);


  return (
    <div
      className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden ring-1 ring-slate-900/10 shadow-soft"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-live="polite"
    >
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          style={{ backgroundImage: `url(${s.img})` }}
          aria-hidden={i !== current}
        >
          {/* Brand-tinted gradient overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/20 to-transparent flex items-center">
            <div className="max-w-2xl text-white mx-auto px-6 md:px-12 text-center self-end pb-12 md:pb-16">
              <h2 className="font-display text-xl sm:text-2xl font-bold mb-2 tracking-tight">
                {s.title}
              </h2>
              <p className="text-sm md:text-base text-white/85 leading-relaxed">
                {s.text}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons (Prev/Next) */}
      <button
        aria-label="Previous slide"
        onClick={() => show(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm ring-1 ring-white/25 text-white text-xl transition-colors duration-300 hidden md:flex items-center justify-center z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        &lsaquo;
      </button>
      <button
        aria-label="Next slide"
        onClick={() => show(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm ring-1 ring-white/25 text-white text-xl transition-colors duration-300 hidden md:flex items-center justify-center z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        &rsaquo;
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => show(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              i === current
                ? 'w-7 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}