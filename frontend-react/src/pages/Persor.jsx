import React, { useState, useEffect } from "react";

export default function Persor() {
  // Slider Data
  const slides = [
    {
      image: "../src/assets/bluegate.jpg",
      title: "Blue Gate Initiative Logo",
    },
    {
      image: "../src/assets/prison.png",
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
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      {/* Row 1: Page Title */}
      <section className="py-8 px-2 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-sky-800 text-center mb-2">
          PERSOR Project
        </h1>
      </section>

      {/* Row 2: Project Goal & Objectives */}
      <section className="px-2 max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl font-bold text-sky-700">
          A PROJECT TO PROMOTE ECONOMIC REHABILITATION AND SOCIAL REINTEGRATION OF EX-INMATES IN IBADAN, NIGERIA
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 space-y-3">
            <p>
              <strong>Project Goal:</strong> The goal of this project is to minimize the stigma associated with incarceration, provide knowledge and skills that will foster gainful employment, thereby promoting successful reintegration of ex-inmates of Agodi Custodial Correctional Centre into Oyo State society.
            </p>

            <h3 className="text-sky-700 font-semibold">Project Objectives</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Recruit 50 ex-inmates of Agodi custodial correctional centre</li>
              <li>Encourage philanthropic organizations and individuals to adopt ex-inmate(s) for economic empowerment</li>
              <li>Implement Blue Gate empowerment model (Vocational training; Literacy and numeric education; Psychosocial counseling and mentoring) for recruited ex-inmates</li>
              <li>Empower ex-inmates with start-up materials</li>
              <li>Conduct high-level advocacy visits to policy makers to generate political support for ex-inmates</li>
            </ul>
          </div>

          <div className="md:w-1/2 space-y-3">
            <h3 className="text-sky-700 font-semibold">Description of Project</h3>
            <p><strong>Project Location:</strong> Ibadan, Nigeria among ex-inmates of Agodi Custodial Correctional Centre.</p>
            <p><strong>Sample Size:</strong> A total of 50 ex-inmates will be recruited.</p>
            <p><strong>Participants Recruitment:</strong> Screened and recommended by Prison Fellowship of Nigeria (PFN).</p>

            <h3 className="text-sky-700 font-semibold">Project Strategy and Activities</h3>
            <p>
              Advocacy visits to policy makers, high-level advocacy to generate political support, and appointing interested policy makers as “Advocates” for the project.
            </p>
            <p>
              Engage philanthropic organizations and individuals through community gatekeepers to adopt ex-inmates for economic empowerment, provide transport and subsistence allowance during training, and funding for start-up materials.
            </p>
          </div>
        </div>
      </section>

      {/* Row 3: Blue Gate Empowerment Model */}
      <section className="px-2 max-w-4xl mx-auto py-6">
        <h2 className="text-2xl text-sky-700 font-bold mb-3">
          Recruit Ex-Inmates and Implement Blue Gate Empowerment Model
        </h2>
        <p className="text-gray-700 mb-4">
          The model has three components: [1] Vocational training & empowerment, [2] Literacy and numeric education, [3] Psychosocial Counseling & Mentoring.
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Vocational Training & Empowerment:</strong> Training in barbing, phone repair, vulcanizing, LPG business, cake baking & sugar crafts, makeup & gele, liquid soap production, graphics design. Successful participants receive certificates and start-up materials.
          </li>
          <li>
            <strong>Literacy & Numeric Education:</strong> Six months of adult education, twice-weekly sessions at Blue Gate office.
          </li>
          <li>
            <strong>Psychosocial Counseling & Mentoring:</strong> Three-month mentoring with University of Ibadan lecturers, cluster-based mentoring sessions twice a week after literacy classes.
          </li>
        </ul>
      </section>

      {/* Row 4: Carousel Section */}
      <section className="py-8 px-2 max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-lg">
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
                    className="w-full h-60 sm:h-72 md:h-96 object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-full h-60 sm:h-72 md:h-96 flex items-center justify-center bg-gray-200 rounded-xl">
                    <p className="text-gray-500 text-center">
                      Image unavailable. Check asset path.
                    </p>
                  </div>
                )}
                <div className="text-center py-4 rounded-b-2xl w-full">
                  <h3 className="text-sm sm:text-md text-sky-700">{slide.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow-md"
          >
            ❮
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow-md"
          >
            ❯
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-sky-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Row 5: Project Management */}
      <section className="px-2 max-w-4xl mx-auto py-6">
        <h2 className="text-2xl text-sky-700 font-bold mb-3">Project Management</h2>
        <p className="text-gray-700 mb-3">
          The project will be managed by the Community Advisory Board (CAB), including representatives from Prison Fellowship Nigeria, donors, and Blue Gate Initiative. They provide oversight and meet monthly.
        </p>
        <img
          src="../src/assets/prison2.png"
          alt="Project Management"
          className="w-full h-auto rounded-lg"
        />
      </section>
    </div>
  );
}
