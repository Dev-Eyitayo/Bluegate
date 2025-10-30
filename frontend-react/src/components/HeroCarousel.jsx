import React, { useEffect, useState, useRef } from 'react';
// import { hero1 } from "../assets/hero1.png";
const slides = [
  { id: 1, title: 'Team at Olubadan Palace', text: 'Advocating for healthier communities through leadership and partnership.', img: '/assets/hero1.png' },
  { id: 2, title: 'Empowering Lives Through Health', text: 'Driving change with evidence-based community programs and outreach.', img: '/assets/hero2.jpg' },
  { id: 3, title: 'Better Care, Brighter Communities', text: 'We are committed to promoting public health through community engagement, advocacy, and education.', img: '../src/assets/hero3.jpg' }
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

  return (
    <div 
      // Reverted to original height classes
      className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-live="polite"
    >
      {slides.map((s, i) => (
        <div 
          key={s.id} 
          // Subtle zoom transition for engagement
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} 
          style={{ backgroundImage: `url(${s.img})` }}
          aria-hidden={i !== current}
        >
          {/* Vertical Gradient Overlay (from bottom up) for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex items-center">
            {/* Content positioned towards the center/bottom */}
            <div className="max-w-2xl text-white mx-auto px-6 md:px-12 text-center self-end pb-12 md:pb-16">
              {/* Text sizes slightly increased for better impact within the existing space */}
              <h2 className="text-xl sm:text-2xl font-extrabold mb-1 tracking-wide drop-shadow-lg">
                {s.title}
              </h2>
              <p className="text-sm md:text-base font-medium drop-shadow-lg">
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
        // Better styling and hover effect
        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white text-xl transition-colors duration-300 hidden md:flex items-center justify-center z-10 focus:outline-none focus:ring-2 focus:ring-sky-600"
      >
        &lsaquo;
      </button>
      <button 
        aria-label="Next slide" 
        onClick={() => show(current + 1)} 
        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white text-xl transition-colors duration-300 hidden md:flex items-center justify-center z-10 focus:outline-none focus:ring-2 focus:ring-sky-600"
      >
        &rsaquo;
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => show(i)} 
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
              i === current 
                ? 'bg-sky-600 w-4 h-4 scale-100' // Current dot is larger and blue
                : 'bg-white/70 hover:bg-white/90' // Inactive dots are responsive to hover
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}