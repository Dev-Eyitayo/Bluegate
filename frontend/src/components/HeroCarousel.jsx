import { useState, useEffect } from "react";
import Container from "./Container";
import { carouselSlides } from "../constants/carouselSlides";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const showSlide = (index) => {
    setCurrent((index + carouselSlides.length) % carouselSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => showSlide(current + 1), 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="relative rounded-custom overflow-hidden h-[460px] mt-8">
      {carouselSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 flex items-center justify-start px-12 md:px-12 bg-black/35">
            <div
              className={`max-w-[550px] text-white transition-all duration-800 ${
                index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <h1 className="text-2xl md:text-3xl font-extrabold mb-2">
                {slide.title}
              </h1>
              <p className="text-sm md:text-base text-gray-100">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/40 rounded-full w-11 h-11 flex items-center justify-center hover:bg-black/60 hover:scale-105 transition-all"
        onClick={() => showSlide(current - 1)}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/40 rounded-full w-11 h-11 flex items-center justify-center hover:bg-black/60 hover:scale-105 transition-all"
        onClick={() => showSlide(current + 1)}
      >
        &#10095;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2.5">
        {carouselSlides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === current
                ? "bg-blue opacity-100 scale-125"
                : "bg-white opacity-50"
            }`}
            onclick={() => showSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}