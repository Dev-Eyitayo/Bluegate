import React, { useEffect, useRef, useState } from "react";


const carouselImages = [
  "/assets/crew1.jpg",   
  "/assets/crew2.jpg",
];

export default function HealthCommunication() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  // Auto-advance every 6s unless paused
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const next = () => setIndex((i) => (i + 1) % carouselImages.length);
  const prev = () =>
    setIndex((i) => (i - 1 + carouselImages.length) % carouselImages.length);

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) prev();
    else if (dx < -40) next();
    touchStartX.current = null;
  };

  return (
    <div className="bg-sky-200/10 text-slate-700 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-sky-800">
            Health Communication
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-6xl text-center">
            Health communication campaigns are vital for spreading awareness,
            promoting healthy behaviors, and educating the public about
            health-related issues. At Blue Gate, we believe in the power of
            effective communication to promote health and well-being. Our Health
            Communication is dedicated to providing accurate and engaging
            information to empower individuals and communities to make informed
            decisions about their health.
          </p>
        </header>

    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
          <div className="flex flex-col gap-6">
          
            <div className="flex justify-center lg:justify-start">
              <img
                src="/assets/communicate.png"
                alt="Communicate Health logo"
                className="w-72 md:w-96 object-contain"
              />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Through a variety of channels and strategies, we strive to raise
              awareness, address misconceptions, and inspire positive health
              behaviors. From informative articles and educational resources to
              engaging social media campaigns and community events, we are
              committed to reaching people where they are and delivering
              messages that resonate. We involve the community in the campaign
              by organizing events, discussions, or social media interactions
              where viewers can share their own stories, ask questions, and
              offer support to one another.
            </p>
          </div>

          <div className="text-sm text-slate-700">
            <h3 className="text-lg font-semibold text-sky-800 mb-3">
              Some of our health communication approaches are enumerated below.
            </h3>

            <ol className="list-decimal pl-5 space-y-3 text-sm text-slate-600 leading-relaxed">
              <li>
                <span className="font-semibold text-slate-700">
                  Media Health Education:
                </span>{" "}
                Utilizing various media platforms to disseminate accurate health
                information and promote healthy behaviors. We utilize Radio,
                Television, and Social Media platforms to communicate health
                information, raise awareness, and engage with the audience. We
                use visuals, videos, infographics, and interactive content to
                make the campaign more engaging.
              </li>

              <li>
                <span className="font-semibold text-slate-700">Drama:</span>{" "}
                Engaging communities through theatrical performances that
                address important health issues relatable and entertainingly.
                We create short, attention-grabbing messages for TV, radio, or
                online platforms to deliver important health messages to a wide
                audience for behavior modeling.
              </li>

              <li>
                <span className="font-semibold text-slate-700">
                  Documentary:
                </span>{" "}
                Shedding light on pressing health issues through compelling
                documentaries that inspire action and drive positive change.
                This includes community problem exploration, expert interviews,
                and patient story narratives that convey health messages and
                model positive behaviors.
              </li>

              <li>
                <span className="font-semibold text-slate-700">
                  Print Materials:
                </span>{" "}
                We develop brochures, flyers, posters, and fact sheets to
                distribute in healthcare facilities, community centers, schools,
                and other public spaces.
              </li>

              <li>
                <span className="font-semibold text-slate-700">
                  Media Relations:
                </span>{" "}
                We work with journalists and media outlets to secure coverage
                of the campaign, conduct interviews with experts, and create
                articles that help raise awareness about health issues. When
                viewers emotionally connect with characters and stories, they
                may be more receptive to the health messages being conveyed.
              </li>
            </ol>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              By integrating social and behavioral change communication
              principles into health communication campaigns with a dramatic
              format, we create engaging and impactful stories that inspire
              positive health behaviors and contribute to improved health
              outcomes in the community.
            </p>
          </div>
        </div>

        {/* ---------- Carousel ---------- */}
        <section
          className="mt-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="max-w-3xl mx-auto">
            <h4 className="text-lg font-semibold text-sky-800 mb-4">
              Behind the scenes — our team in action
            </h4>

            <div className="relative rounded-2xl overflow-hidden bg-white">
              {/* carousel viewport */}
              <div className="relative w-full h-[420px] md:h-[520px]">
                {carouselImages.map((src, i) => {
                  const visible = i === index;
                  return (
                    <img
                      key={src}
                      src={src}
                      alt={`slide-${i}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-in-out ${
                        visible ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                      loading="lazy"
                    />
                  );
                })}
              </div>

              {/* overlay controls */}
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-4 z-10 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white px-3 py-2 rounded-md shadow-sm focus:outline-none"
              >
                ‹
              </button>

              <button
                onClick={next}
                aria-label="Next image"
                className="absolute z-10 right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white px-3 py-2 rounded-md shadow-sm focus:outline-none"
              >
                ›
              </button>

              {/* indicators */}
              <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-transparent">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-3 h-3 md:w-3 md:h-3 rounded-full transition-all ${
                      i === index ? "bg-sky-700 w-8 rounded-full" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* optional: small caption or paragraph below carousel */}
        <div className="mt-6 max-w-6xl mx-auto text-sm text-slate-600">
          <p>
            Our communications team — scriptwriters, camera crew, editors and
            outreach coordinators — work closely with communities to produce
            culturally-sensitive, engaging content that resonates with our
            audiences.
          </p>
        </div>
      </div>
    </div>
  );
}
