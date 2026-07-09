import React from "react";
import { Target, FileCheck, Globe, TrendingUp } from "lucide-react";
import PageHeader from "../components/PageHeader";

const BulletList = ({ items }) => (
  <ul className="space-y-2.5 text-slate-600 text-sm sm:text-[15px]">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2.5 leading-relaxed">
        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-400 flex-shrink-0" aria-hidden="true" />
        {item}
      </li>
    ))}
  </ul>
);

const CardHeading = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-4 mb-5">
    <div className="w-12 h-12 rounded-2xl bg-brand-50 ring-1 ring-inset ring-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="font-display text-lg font-bold text-slate-900">{children}</h3>
  </div>
);

export default function MEL() {
  return (
    <div className="min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="py-14 px-3 max-w-7xl mx-auto">
        <PageHeader
          eyebrow="Consultancy"
          title="Monitoring, Evaluation & Learning (MEL)"
          subtitle="Turning data into evidence, insights into action, and lessons into lasting impact."
        />
      </section>

      {/* Introduction */}
      <section className="px-3 max-w-5xl mx-auto mb-14">
        <div className="bg-white rounded-2xl p-6 md:p-9 border border-slate-200 shadow-soft">
          <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-base">
            Effective public health programs require more than good intentions — they require{" "}
            <strong className="text-slate-900">evidence</strong>. Monitoring and Evaluation (M&E) helps
            organizations understand whether their activities are achieving the desired results, why
            outcomes occur, and how future programs can be improved.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
            At <strong className="text-slate-900">Blue Gate Public Health Promotion Initiative</strong>, we
            provide comprehensive <strong className="text-slate-900">Monitoring, Evaluation and Learning (MEL)</strong>{" "}
            services to ensure that projects are <em>effective, sustainable, and impactful</em>.
          </p>
          <p className="rounded-xl bg-brand-50 ring-1 ring-inset ring-brand-100 px-5 py-4 leading-relaxed font-medium text-brand-900 text-sm sm:text-base">
            Our MEL approach focuses not only on measuring results but also on promoting{" "}
            <strong>learning, adaptive decision-making, and continuous improvement</strong> throughout the
            project life cycle.
          </p>
        </div>
      </section>

      {/* What We Do: Baseline & Endline */}
      <section className="py-12 px-3 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">What We Do</h2>
          <span className="mt-4 inline-block h-1 w-12 rounded-full bg-brand-500" aria-hidden="true" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Baseline Assessments */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 transition-colors duration-300 hover:border-brand-200">
            <CardHeading icon={Target}>Baseline Assessments</CardHeading>

            <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-[15px]">
              A baseline assessment is conducted at the beginning of a project to understand the{" "}
              <strong className="text-slate-900">current situation</strong> before activities start. It
              establishes the conditions, knowledge, attitudes, behaviors, and service access levels
              that the project aims to change.
            </p>

            <p className="text-slate-900 font-semibold mb-3 text-sm sm:text-[15px]">
              Our baseline assessments help partners to:
            </p>
            <BulletList
              items={[
                "Define realistic targets and performance indicators",
                "Identify community needs and resource gaps",
                "Shape strategic planning and program design",
                "Set up comparison data to track change over time",
              ]}
            />
          </div>

          {/* Endline Assessments */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 transition-colors duration-300 hover:border-brand-200">
            <CardHeading icon={FileCheck}>Endline Assessments</CardHeading>

            <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-[15px]">
              An endline assessment is conducted at the end of a project to determine{" "}
              <strong className="text-slate-900">what changed, how much changed, and why</strong>. This
              allows organizations to measure project success and document lessons learned.
            </p>

            <p className="text-slate-900 font-semibold mb-3 text-sm sm:text-[15px]">
              Our endline assessments provide:
            </p>
            <BulletList
              items={[
                "Evidence of project outcomes and impact",
                "Insights on what worked well and challenges faced",
                "Recommendations for scaling, replication, or redesign",
                "Reporting support for donors and stakeholders",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 px-3 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200">
          <CardHeading icon={TrendingUp}>Our Approach</CardHeading>

          <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-[15px]">
            We combine <strong className="text-slate-900">qualitative and quantitative methods</strong> to
            generate practical, context-specific insights.
          </p>

          <p className="text-slate-900 font-semibold mb-3 text-sm sm:text-[15px]">
            Our typical MEL toolkit includes:
          </p>
          <ul className="grid md:grid-cols-2 gap-2.5 text-slate-600 text-sm sm:text-[15px]">
            {[
              "Household and facility surveys",
              "Focus group discussions and key-informant interviews",
              "GIS and spatial data analysis",
              "Data quality assurance and verification",
              "Monitoring dashboards and indicator tracking",
              "Statistical and thematic analysis",
              "Report writing and results dissemination workshops",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-400 flex-shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 rounded-xl bg-brand-50 ring-1 ring-inset ring-brand-100 px-5 py-4 leading-relaxed font-medium text-brand-900 text-sm sm:text-[15px]">
            We ensure that data is <strong>ethical, accurate, culturally appropriate, and decision-focused</strong>.
          </p>
        </div>
      </section>

      {/* Our Experience */}
      <section className="py-12 px-3 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">Our Experience</h2>
          <span className="mt-4 inline-block h-1 w-12 rounded-full bg-brand-500" aria-hidden="true" />
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 max-w-5xl mx-auto">
          <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-[15px]">
            We have delivered baseline and endline assessments for development partners, NGOs, and
            community-based organizations across <strong className="text-slate-900">Nigeria</strong>.
          </p>

          <div className="mb-8">
            <p className="text-slate-900 font-semibold mb-3 text-sm sm:text-[15px]">
              Some of our partners include:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["PACT West Africa", "WaterAid", "HACEY Health Initiative"].map((partner) => (
                <div
                  key={partner}
                  className="rounded-xl bg-brand-50 px-4 py-3.5 text-center font-medium text-brand-800 ring-1 ring-inset ring-brand-100 text-sm"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-900 font-semibold mb-3 text-sm sm:text-[15px]">
            Through these collaborations, we have evaluated programs related to:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Sexual and reproductive health",
              "Adolescent and youth engagement",
              "WASH and hygiene promotion",
              "Maternal and child health",
              "Community capacity strengthening",
              "Gender equality and social inclusion",
            ].map((area) => (
              <div key={area} className="flex items-center text-slate-600 text-sm sm:text-[15px]">
                <Globe className="w-4 h-4 text-brand-500 mr-2.5 flex-shrink-0" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
