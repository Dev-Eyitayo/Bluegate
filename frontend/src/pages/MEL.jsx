import React from "react";
import { BarChart3, Target, FileCheck, Users, Globe, TrendingUp } from "lucide-react";

export default function MEL() {
  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      {/* Hero Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto text-center">
    
        <h1 className="text-3xl sm:text-2xl font-extrabold text-sky-800 mb-4">
          Monitoring, Evaluation & Learning (MEL)
        </h1>
        <p className="text-base text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Turning data into evidence, insights into action, and lessons into lasting impact.
        </p>
      </section>

      {/* Introduction */}
      <section className="px-3 max-w-5xl mx-auto mb-16">
        <div className="bg-white rounded-2xl p-6 md:p-9 border border-sky-100">
          <p className="text-slate-700 leading-relaxed text-justify mb-5 text-sm sm:text-base">
            Effective public health programs require more than good intentions — they require <strong>evidence</strong>. Monitoring and Evaluation (M&E) helps organizations understand whether their activities are achieving the desired results, why outcomes occur, and how future programs can be improved.
          </p>
          <p className="text-slate-700 leading-relaxed text-justify font-medium text-sky-800 text-sm sm:text-base">
            At <strong>Blue Gate Public Health Promotion Initiative</strong>, we provide comprehensive <strong>Monitoring, Evaluation and Learning (MEL)</strong> services to ensure that projects are <em>effective, sustainable, and impactful</em>.
          </p>
          <p className="text-slate-700 leading-relaxed text-center mt-6 text-base sm:text-lg font-semibold text-sky-700">
            Our MEL approach focuses not only on measuring results but also on promoting <strong>learning, adaptive decision-making, and continuous improvement</strong> throughout the project life cycle.
          </p>
        </div>
      </section>

      {/* What We Do: Baseline & Endline */}
      <section className="py-16 px-3 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-sky-800 text-center mb-12">
          What We Do
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Baseline Assessments */}
          <div className="bg-white rounded-2xl  p-6 md:p-8 border border-sky-100">
            <div className="flex items-center mb-5">
              <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mr-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-sky-800">Baseline Assessments</h3>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
              A baseline assessment is conducted at the beginning of a project to understand the <strong>current situation</strong> before activities start. It establishes the conditions, knowledge, attitudes, behaviors, and service access levels that the project aims to change.
            </p>

            <p className="text-slate-700 font-semibold mb-2 text-sm sm:text-base">Our baseline assessments help partners to:</p>
            <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">•</span>
                Define realistic targets and performance indicators
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">•</span>
                Identify community needs and resource gaps
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">•</span>
                Shape strategic planning and program design
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">•</span>
                Set up comparison data to track change over time
              </li>
            </ul>
          </div>

          {/* Endline Assessments */}
          <div className="bg-white rounded-2xl  p-6 md:p-8 border border-sky-100">
            <div className="flex items-center mb-5">
              <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mr-4">
                <FileCheck className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-sky-800">Endline Assessments</h3>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
              An endline assessment is conducted at the end of a project to determine <strong>what changed, how much changed, and why</strong>. This allows organizations to measure project success and document lessons learned.
            </p>

            <p className="text-slate-700 font-semibold mb-2 text-sm sm:text-base">Our endline assessments provide:</p>
            <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">•</span>
                Evidence of project outcomes and impact
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">•</span>
                Insights on what worked well and challenges faced
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">•</span>
                Recommendations for scaling, replication, or redesign
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">•</span>
                Reporting support for donors and stakeholders
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-3 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl  p-6 md:p-8 border border-sky-100">
          <div className="flex items-center mb-5">
            <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mr-4">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-sky-800">Our Approach</h3>
          </div>

          <p className="text-slate-700 leading-relaxed mb-5 text-sm sm:text-base">
            We combine <strong>qualitative and quantitative methods</strong> to generate practical, context-specific insights.
          </p>

          <p className="text-slate-700 font-semibold mb-3 text-sm sm:text-base">Our typical MEL toolkit includes:</p>
          <ul className="grid md:grid-cols-2 gap-3 text-slate-600 text-sm sm:text-base">
            {[
              "Household and facility surveys",
              "Focus group discussions and key-informant interviews",
              "GIS and spatial data analysis",
              "Data quality assurance and verification",
              "Monitoring dashboards and indicator tracking",
              "Statistical and thematic analysis",
              "Report writing and results dissemination workshops",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-sky-600 mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-slate-700 leading-relaxed mt-6 font-medium text-sky-800 text-sm sm:text-base">
            We ensure that data is <strong>ethical, accurate, culturally appropriate, and decision-focused</strong>.
          </p>
        </div>
      </section>

      {/* Our Experience */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-sky-800 text-center mb-12">
          Our Experience
        </h2>

        <div className="bg-white rounded-2xl  p-6 md:p-8 border border-sky-100">
          <p className="text-slate-700 leading-relaxed mb-6 text-sm sm:text-base">
            We have delivered baseline and endline assessments for development partners, NGOs, and community-based organizations across <strong>Nigeria</strong>.
          </p>

          <div className="mb-8">
            <p className="text-slate-700 font-semibold mb-3 text-sm sm:text-base">Some of our partners include:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["PACT West Africa", "WaterAid", "HACEY Health Initiative"].map((partner) => (
                <div
                  key={partner}
                  className="bg-sky-50 p-4 rounded-lg text-center font-medium text-sky-800 border border-sky-200 text-sm"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 font-semibold mb-3 text-sm sm:text-base">Through these collaborations, we have evaluated programs related to:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Sexual and reproductive health",
              "Adolescent and youth engagement",
              "WASH and hygiene promotion",
              "Maternal and child health",
              "Community capacity strengthening",
              "Gender equality and social inclusion",
            ].map((area) => (
              <div key={area} className="flex items-center text-slate-600 text-sm sm:text-base">
                <Globe className="w-5 h-5 text-sky-600 mr-2 flex-shrink-0" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}