import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Persor() {
  // Slider Data
  const slides = [
    {
      image: "/assets/bluegate.jpg",
      title: "Blue Gate Initiative Logo",
    },
    {
      image: "/assets/prison.png",
      title: "Agodi Custodial Correctional Centre",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [imageError, setImageError] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen text-slate-800">
      {/* Row 1: Page Title */}
      <section className="py-14 px-2 max-w-7xl mx-auto">
        <PageHeader
          eyebrow="Project"
          title="PERSOR Project"
          subtitle="A project to promote economic rehabilitation and social reintegration of ex-inmates in Ibadan, Nigeria"
        />
      </section>

      {/* Row 2: Project Goal & Objectives */}
      <section className="px-2 max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 md:p-7">
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Project Goal:</strong> The goal of this project is to minimize the stigma associated with incarceration, provide knowledge and skills that will foster gainful employment, thereby promoting successful reintegration of ex-inmates of Agodi Custodial Correctional Centre into Oyo State society.
            </p>

            <h3 className="font-display font-bold text-slate-900">Project Objectives</h3>
            <ul className="space-y-2.5 text-slate-600">
              {[
                "Recruit 50 ex-inmates of Agodi custodial correctional centre",
                "Encourage philanthropic organizations and individuals to adopt ex-inmate(s) for economic empowerment",
                "Implement Blue Gate empowerment model (Vocational training; Literacy and numeric education; Psychosocial counseling and mentoring) for recruited ex-inmates",
                "Empower ex-inmates with start-up materials",
                "Conduct high-level advocacy visits to policy makers to generate political support for ex-inmates",
              ].map((objective) => (
                <li key={objective} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-400 flex-shrink-0" aria-hidden="true" />
                  {objective}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/2 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 md:p-7">
            <h3 className="font-display font-bold text-slate-900">Description of Project</h3>
            <p className="text-slate-600 leading-relaxed"><strong className="text-slate-900">Project Location:</strong> Ibadan, Nigeria among ex-inmates of Agodi Custodial Correctional Centre.</p>
            <p className="text-slate-600 leading-relaxed"><strong className="text-slate-900">Sample Size:</strong> A total of 50 ex-inmates will be recruited.</p>
            <p className="text-slate-600 leading-relaxed"><strong className="text-slate-900">Participants Recruitment:</strong> Screened and recommended by Prison Fellowship of Nigeria (PFN).</p>

            <h3 className="font-display font-bold text-slate-900">Project Strategy and Activities</h3>
            <p className="text-slate-600 leading-relaxed">
              Advocacy visits to policy makers, high-level advocacy to generate political support, and appointing interested policy makers as &ldquo;Advocates&rdquo; for the project.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Engage philanthropic organizations and individuals through community gatekeepers to adopt ex-inmates for economic empowerment, provide transport and subsistence allowance during training, and funding for start-up materials.
            </p>
          </div>
        </div>
      </section>

      {/* Row 3: Blue Gate Empowerment Model */}
      <section className="px-2 max-w-4xl mx-auto py-10">
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">
          Recruit Ex-Inmates and Implement Blue Gate Empowerment Model
        </h2>
        <p className="text-slate-600 leading-relaxed mb-5">
          The model has three components: [1] Vocational training & empowerment, [2] Literacy and numeric education, [3] Psychosocial Counseling & Mentoring.
        </p>

        <ol className="space-y-4">
          {[
            {
              lead: "Vocational Training & Empowerment:",
              text: "Training in barbing, phone repair, vulcanizing, LPG business, cake baking & sugar crafts, makeup & gele, liquid soap production, graphics design. Successful participants receive certificates and start-up materials.",
            },
            {
              lead: "Literacy & Numeric Education:",
              text: "Six months of adult education, twice-weekly sessions at Blue Gate office.",
            },
            {
              lead: "Psychosocial Counseling & Mentoring:",
              text: "Three-month mentoring with University of Ibadan lecturers, cluster-based mentoring sessions twice a week after literacy classes.",
            },
          ].map((component, index) => (
            <li
              key={component.lead}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5"
            >
              <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 ring-1 ring-inset ring-brand-100 text-brand-700 text-sm font-bold font-display">
                {index + 1}
              </span>
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-900">{component.lead}</strong> {component.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Row 4: Carousel Section */}
      <section className="py-8 px-2 max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-900/10 shadow-soft bg-white">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full flex flex-col items-center">
                {!imageError ? (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    onError={() => setImageError(true)}
                    className="w-full h-60 sm:h-72 md:h-96 object-cover"
                  />
                ) : (
                  <div className="w-full h-60 sm:h-72 md:h-96 flex items-center justify-center bg-slate-100">
                    <p className="text-slate-500 text-center">
                      Image unavailable. Check asset path.
                    </p>
                  </div>
                )}
                <div className="text-center py-4 w-full border-t border-slate-100">
                  <h3 className="text-sm font-medium text-slate-600">{slide.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm ring-1 ring-white/25 text-white transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm ring-1 ring-white/25 text-white transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  index === current ? "w-7 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Row 5: Project Management */}
      <section className="px-2 max-w-4xl mx-auto py-8">
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">Project Management</h2>
        <p className="text-slate-600 leading-relaxed mb-5">
          The project will be managed by the Community Advisory Board (CAB), including representatives from Prison Fellowship Nigeria, donors, and Blue Gate Initiative. They provide oversight and meet monthly.
        </p>
        <img
          src="/assets/prison2.png"
          alt="Project Management"
          className="w-full h-auto rounded-2xl ring-1 ring-slate-900/10 shadow-soft"
        />
      </section>
    </div>
  );
}
