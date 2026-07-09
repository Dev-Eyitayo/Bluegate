import React, { useEffect, useRef, useState } from "react";
import { Megaphone, Users, Radio, Film, ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "../components/PageHeader";

const carouselImages = [
  "/assets/updatedImages/SBCC.jpg",
  "/assets/updatedImages/SocialMobilisation.jpg",
  "/assets/updatedImages/SocialMobilisation2.jpg",
  "/assets/crew1.jpg",
  "/assets/crew2.jpg",
];

const pillars = [
  {
    icon: Megaphone,
    title: "Advocacy",
    whatLabel: "What is Advocacy?",
    what: (
      <>
        Advocacy means{" "}
        <strong className="text-slate-900">
          speaking up, influencing decisions, and creating change at the policy or leadership level
        </strong>
        . It focuses on ensuring that government agencies, institutions, community leaders, and other
        powerholders understand issues and take actions that support public health.
      </>
    ),
    note: (
      <>
        Instead of targeting individuals, advocacy targets{" "}
        <strong>systems and decision-makers</strong> who can change laws, policies, budgets, and
        institutional practices.
      </>
    ),
    sections: [
      {
        label: "Our Advocacy Services",
        items: [
          "Organizing policy dialogues and roundtable discussions",
          "Developing advocacy briefs, fact sheets, and policy recommendations",
          "Building coalitions with civil society groups and professional networks",
          "Engaging traditional, religious, and community leaders as champions",
          "Supporting policy implementation, monitoring, and accountability mechanisms",
        ],
      },
      {
        label: "Impact of Our Advocacy Work",
        items: [
          "Stronger public health policies and regulations",
          "Increased funding and resource allocation",
          "Institutional commitment to community health priorities",
          "Supportive environments where healthy behaviors are easier to adopt",
        ],
      },
    ],
  },
  {
    icon: Users,
    title: "Social Mobilisation",
    whatLabel: "What is Social Mobilisation?",
    what: (
      <>
        Social mobilisation <strong className="text-slate-900">brings communities together</strong> to
        discuss issues, generate solutions, and take collective action. It recognizes that behavior
        change is more successful when whole communities support and reinforce it.
      </>
    ),
    note: (
      <>
        It focuses on <strong>ownership, participation, and empowerment</strong>.
      </>
    ),
    sections: [
      {
        label: "Our Social Mobilisation Strategies",
        items: [
          "Community dialogues, town halls, and participatory forums",
          "Training community health volunteers, peer educators, and youth advocates",
          "Working through women's groups, market associations, and community influencers",
          "Integrating traditional leadership and cultural values into health messaging",
          "Supporting community-led health campaigns and action initiatives",
        ],
      },
      {
        label: "Impact",
        items: [
          "Stronger community support systems and peer influence",
          "Increased trust and cooperation in public health interventions",
          "Reduced resistance or misinformation",
          "Health practices become community norms, not individual choices",
        ],
      },
    ],
  },
  {
    icon: Radio,
    title: "Mass Media Communication",
    whatLabel: "What is Mass Media SBCC?",
    what: (
      <>
        Mass media communication uses <strong className="text-slate-900">large-scale channels</strong>{" "}
        to reach wide audiences with clear, accurate, and culturally appropriate health messages. The
        aim is to raise awareness, shift social norms, and increase demand for services.
      </>
    ),
    note: (
      <>
        This approach ensures information reaches <strong>thousands to millions</strong> of people at
        once.
      </>
    ),
    sections: [
      {
        label: "Channels We Use",
        items: [
          "Radio talk shows, jingles, and public service announcements",
          "Television interviews, documentaries, and advocacy features",
          "Social media platforms (Facebook, Instagram, X, TikTok)",
          "WhatsApp community broadcast messaging",
          "Billboards, posters, flyers, and branded outreach materials",
        ],
      },
      {
        label: "Impact",
        items: [
          "Health information reaches diverse audiences quickly",
          "Public attitudes begin to shift in positive directions",
          "People are reminded or motivated to adopt healthy practices",
          "Stories and voices from communities are amplified",
        ],
      },
    ],
  },
  {
    icon: Film,
    title: "Edutainment (Education + Entertainment)",
    whatLabel: "What is Edutainment?",
    what: (
      <>
        Edutainment uses <strong className="text-slate-900">creative storytelling and entertainment</strong>{" "}
        — such as drama, music, film, comedy, games, or poetry — to share health messages in a fun,
        relatable, and memorable way.
      </>
    ),
    note: (
      <>
        People learn better when they <strong>connect emotionally</strong> to characters or stories.
      </>
    ),
    sections: [
      {
        label: "Edutainment Approaches We Use",
        items: [
          "Community theatre performances and cultural storytelling events",
          "Drama skits aired on radio, TV, or digital platforms",
          "Youth talent and creative expression programs",
          "Short films, animations, and real-life testimonial videos",
          "School health clubs and interactive learning activities",
        ],
      },
      {
        label: "Impact",
        items: [
          "Health messages become easier to understand and remember",
          "Audiences identify with familiar characters and local stories",
          "Difficult or sensitive topics become easier to discuss",
          "Behavior change happens naturally through emotional connection",
        ],
      },
    ],
  },
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
    <div className="min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="py-14 px-3 max-w-7xl mx-auto">
        <PageHeader
          eyebrow="SBCC"
          title="Social and Behaviour Change Communication"
          subtitle="Influencing positive health practices, strengthening supportive social norms, and creating environments where communities thrive."
        />
      </section>

      {/* Introduction */}
      <section className="px-3 max-w-5xl mx-auto mb-14">
        <div className="bg-white rounded-2xl p-6 md:p-9 border border-slate-200 shadow-soft">
          <p className="text-slate-600 leading-relaxed mb-5">
            <strong className="text-slate-900">Social and Behaviour Change Communication (SBCC)</strong>{" "}
            is an approach we use to{" "}
            <em>
              influence positive health practices, strengthen supportive social norms, and create
              environments where communities can thrive
            </em>
            . It goes beyond simply giving information — it focuses on changing attitudes, beliefs,
            and behaviors through meaningful engagement and communication strategies.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            At <strong className="text-slate-900">Blue Gate Public Health Promotion Initiative</strong>,
            we design SBCC programs that are{" "}
            <strong className="text-slate-900">
              rooted in local culture, informed by evidence, and built in partnership with the people
              they aim to serve
            </strong>
            .
          </p>
          <div className="text-center">
            <p className="text-slate-700 font-semibold mb-3">We use four key pillars:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Advocacy", "Social Mobilisation", "Mass Media", "Edutainment"].map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-800 ring-1 ring-inset ring-brand-100"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section
        className="py-10 px-3 max-w-4xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-900/10 shadow-soft bg-slate-100">
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
            className="absolute left-4 z-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm ring-1 ring-white/25 text-white transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-4 z-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm ring-1 ring-white/25 text-white transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicators */}
          <div className="absolute z-20 bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  i === index ? "w-7 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our SBCC Approaches */}
      <section className="py-14 px-3 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            Our SBCC Approaches
          </h2>
          <span className="mt-4 inline-block h-1 w-12 rounded-full bg-brand-500" aria-hidden="true" />
        </div>

        <div className="space-y-8">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 transition-colors duration-300 hover:border-brand-200"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-50 ring-1 ring-inset ring-brand-100 text-brand-600 flex-shrink-0">
                  <pillar.icon className="w-6 h-6" />
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  <span className="text-brand-600 mr-2">{i + 1}.</span>
                  {pillar.title}
                </h3>
              </div>

              <p className="text-sm font-semibold uppercase tracking-wider text-brand-700 mb-2">
                {pillar.whatLabel}
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">{pillar.what}</p>
              <p className="text-slate-500 text-sm italic mb-6 border-l-2 border-brand-200 pl-4">
                {pillar.note}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {pillar.sections.map((section) => (
                  <div key={section.label}>
                    <p className="text-slate-900 font-semibold mb-3">{section.label}</p>
                    <ul className="space-y-2.5 text-sm text-slate-600">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 leading-relaxed">
                          <span
                            className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-400 flex-shrink-0"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
