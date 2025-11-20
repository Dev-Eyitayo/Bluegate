import React, { useEffect, useRef, useState } from "react";
import { Megaphone, Users, Radio, Film, ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  "/assets/updatedImages/SBCC.jpg",
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
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      {/* Hero Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-2xl font-extrabold text-sky-800 mb-4">
          Social and Behaviour Change Communication (SBCC)
        </h1>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Influencing positive health practices, strengthening supportive social norms, and creating environments where communities thrive.
        </p>
      </section>

      {/* Introduction */}
      <section className="px-3 max-w-5xl mx-auto mb-16">
        <div className="bg-white rounded-2xl p-6 md:p-9 border border-sky-100">
          <p className="text-slate-700 leading-relaxed text-justify mb-5">
            <strong>Social and Behaviour Change Communication (SBCC)</strong> is an approach we use to <em>influence positive health practices, strengthen supportive social norms, and create environments where communities can thrive</em>. It goes beyond simply giving information — it focuses on changing attitudes, beliefs, and behaviors through meaningful engagement and communication strategies.
          </p>
          <p className="text-slate-700 leading-relaxed text-justify font-medium text-sky-800">
            At <strong>Blue Gate Public Health Promotion Initiative</strong>, we design SBCC programs that are <strong>rooted in local culture, informed by evidence, and built in partnership with the people they aim to serve</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed text-center mt-6 text-lg font-semibold text-sky-700">
            We use four key pillars: <span className="text-sky-800">Advocacy</span>, <span className="text-sky-800">Social Mobilisation</span>, <span className="text-sky-800">Mass Media</span>, and <span className="text-sky-800">Edutainment</span>.
          </p>
        </div>
      </section>

      {/* Our SBCC Approaches */}
      <section className="py-16 px-3 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-sky-800 text-center mb-12">
          Our SBCC Approaches
        </h2>

        {/* 1. Advocacy */}
        <div className="mb-20 ">
          <div className="grid md:grid-cols-1 gap-10 items-start">
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-bold text-sky-800">1. Advocacy</h3>
              </div>
              <p className="text-slate-700 font-semibold mb-2">What is Advocacy?</p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Advocacy means <strong>speaking up, influencing decisions, and creating change at the policy or leadership level</strong>. It focuses on ensuring that government agencies, institutions, community leaders, and other powerholders understand issues and take actions that support public health.
              </p>
              <p className="text-slate-700 text-sm italic mb-4">
                Instead of targeting individuals, advocacy targets <strong>systems and decision-makers</strong> who can change laws, policies, budgets, and institutional practices.
              </p>

              <p className="text-slate-700 font-semibold mb-2">Our Advocacy Services</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Organizing policy dialogues and roundtable discussions
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Developing advocacy briefs, fact sheets, and policy recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Building coalitions with civil society groups and professional networks
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Engaging traditional, religious, and community leaders as champions
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Supporting policy implementation, monitoring, and accountability mechanisms
                </li>
              </ul>

              <p className="text-slate-700 font-semibold mt-5 mb-2">Impact of Our Advocacy Work</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Stronger public health policies and regulations
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Increased funding and resource allocation
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Institutional commitment to community health priorities
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Supportive environments where healthy behaviors are easier to adopt
                </li>
              </ul>
            </div>
            
          </div>
        </div>

        {/* 2. Social Mobilisation */}
        <div className="mb-20">
          <div className="grid md:grid-cols-1 gap-10 items-start">
            
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-bold text-sky-800">2. Social Mobilisation</h3>
              </div>
              <p className="text-slate-700 font-semibold mb-2">What is Social Mobilisation?</p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Social mobilisation <strong>brings communities together</strong> to discuss issues, generate solutions, and take collective action. It recognizes that behavior change is more successful when whole communities support and reinforce it.
              </p>
              <p className="text-slate-700 text-sm italic mb-4">
                It focuses on <strong>ownership, participation, and empowerment</strong>.
              </p>

              <p className="text-slate-700 font-semibold mb-2">Our Social Mobilisation Strategies</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Community dialogues, town halls, and participatory forums
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Training community health volunteers, peer educators, and youth advocates
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Working through women’s groups, market associations, and community influencers
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Integrating traditional leadership and cultural values into health messaging
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Supporting community-led health campaigns and action initiatives
                </li>
              </ul>

              <p className="text-slate-700 font-semibold mt-5 mb-2">Impact</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Stronger community support systems and peer influence
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Increased trust and cooperation in public health interventions
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Reduced resistance or misinformation
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Health practices become community norms, not individual choices
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Mass Media */}
        <div className="mb-20">
          <div className="grid md:grid-cols-1 gap-10 items-start">
            <div>
              <div className="flex items-center mb-4">
            
                <h3 className="text-lg font-bold text-sky-800">3. Mass Media Communication</h3>
              </div>
              <p className="text-slate-700 font-semibold mb-2">What is Mass Media SBCC?</p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Mass media communication uses <strong>large-scale channels</strong> to reach wide audiences with clear, accurate, and culturally appropriate health messages. The aim is to raise awareness, shift social norms, and increase demand for services.
              </p>
              <p className="text-slate-700 text-sm italic mb-4">
                This approach ensures information reaches <strong>thousands to millions</strong> of people at once.
              </p>

              <p className="text-slate-700 font-semibold mb-2">Channels We Use</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Radio talk shows, jingles, and public service announcements
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Television interviews, documentaries, and advocacy features
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Social media platforms (Facebook, Instagram, X, TikTok)
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  WhatsApp community broadcast messaging
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Billboards, posters, flyers, and branded outreach materials
                </li>
              </ul>

              <p className="text-slate-700 font-semibold mt-5 mb-2">Impact</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Health information reaches diverse audiences quickly
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Public attitudes begin to shift in positive directions
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  People are reminded or motivated to adopt healthy practices
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Stories and voices from communities are amplified
                </li>
              </ul>
            </div>
           
          </div>
        </div>

        {/* 4. Edutainment */}
        <div className="mb-20">
          <div className="grid md:grid-cols-1 gap-10 items-start">
            
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                
                <h3 className="text-lg font-bold text-sky-800">4. Edutainment (Education + Entertainment)</h3>
              </div>
              <p className="text-slate-700 font-semibold mb-2">What is Edutainment?</p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Edutainment uses <strong>creative storytelling and entertainment</strong> — such as drama, music, film, comedy, games, or poetry — to share health messages in a fun, relatable, and memorable way.
              </p>
              <p className="text-slate-700 text-sm italic mb-4">
                People learn better when they <strong>connect emotionally</strong> to characters or stories.
              </p>

              <p className="text-slate-700 font-semibold mb-2">Edutainment Approaches We Use</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Community theatre performances and cultural storytelling events
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Drama skits aired on radio, TV, or digital platforms
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Youth talent and creative expression programs
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Short films, animations, and real-life testimonial videos
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  School health clubs and interactive learning activities
                </li>
              </ul>

              <p className="text-slate-700 font-semibold mt-5 mb-2">Impact</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Health messages become easier to understand and remember
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Audiences identify with familiar characters and local stories
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Difficult or sensitive topics become easier to discuss
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Behavior change happens naturally through emotional connection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section
        className="py-16 px-3 max-w-4xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
      
        <div className="relative rounded-2xl overflow-hidden bg-white ">
          <div className="relative w-full h-[320px] md:h-[520px]">
            {carouselImages.map((src, i) => {
              const visible = i === index;
              return (
                <img
                  key={src}
                  src={src}
                  alt={`SBCC activity ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    visible ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                  loading="lazy"
                />
              );
            })}
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-5 z-20 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-sky-800 rounded-full p-3 shadow-xl transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-5 z-20 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-sky-800 rounded-full p-3 shadow-xl transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute z-20 bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 ${
                  i === index
                    ? "w-12 h-3 bg-white rounded-full shadow-md"
                    : "w-3 h-3 bg-white/60 rounded-full hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
        {/* <p className="mt-6 text-center text-sm text-slate-600 max-w-3xl mx-auto">
          Our communications team — scriptwriters, camera crew, editors, and outreach coordinators — work closely with communities to produce <strong>culturally-sensitive, engaging content</strong> that resonates with our audiences.
        </p> */}
      </section>
    </div>
  );
}