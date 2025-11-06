import React from "react";
import { Beaker, Brain, Globe, ChevronRight, FileSearch, Activity, Wind } from "lucide-react";

export default function Research() {
  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      {/* Hero Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-extrabold text-sky-800 mb-4">
          Research Services
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Evidence-driven insights for stronger public health policies and interventions.
        </p>
      </section>

      {/* Introduction */}
      <section className="px-3 max-w-5xl mx-auto mb-16">
        <div className="bg-white rounded-2xl p-6 md:p-9 border border-sky-100">
          <p className="text-slate-700 leading-relaxed text-justify mb-5">
            At <strong>Blue Gate Public Health Promotion Initiative</strong>, we believe that <strong>effective public health solutions must be grounded in evidence</strong>. Our research services are designed to provide <em>actionable insights</em> that inform policies, improve interventions, and strengthen community health outcomes.
          </p>
          <p className="text-slate-700 leading-relaxed text-justify mb-5">
            We work with <strong>government agencies, NGOs, international development partners, and academic institutions</strong> to design and implement rigorous research studies tailored to local contexts.
          </p>
          <p className="text-slate-700 leading-relaxed text-justify font-medium text-sky-800">
            Our research approach emphasizes <strong>participatory methods, ethical rigor, and real-world applicability</strong>, ensuring that findings translate into <em>lasting impact</em>.
          </p>
        </div>
      </section>

      {/* Our Research Services */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-sky-800 text-center mb-12">
          Our Research Services
        </h2>

        {/* 1. Behavioural and Social Research */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
            <div>
              <div className="flex items-center mb-4">
                {/* <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mr-4">
                  <Brain className="w-8 h-8" />
                </div> */}
                <h3 className="text-2xl font-bold text-sky-800">
                  1. Behavioural and Social Research
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                We conduct high-quality behavioural and social research to understand the factors that shape health practices and community decision-making.
              </p>
              <p className="text-slate-700 font-semibold mb-2">Our work explores:</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Health-seeking behaviours
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Gender norms and social dynamics
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Risk perception and communication patterns
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Cultural and community influences on public health outcomes
                </li>
              </ul>
              <p className="text-slate-700 font-semibold mt-5 mb-2">Methods include:</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Surveys and structured interviews
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Focus group discussions
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Participatory action research
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Ethnographic studies
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Human-centered design approaches
                </li>
              </ul>
            </div>
            <div className="bg-sky-50 p-6 rounded-xl border border-sky-200">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
                <p className="text-slate-500">[Behavioural Research Image]</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. RCTs and Impact Evaluation */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
            <div className="bg-gradient-to-br from-sky-50 to-white p-6 rounded-xl border border-sky-200 shadow-md">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center mb-4">
                <p className="text-slate-500">[RCT Study Design Image]</p>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                {/* <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mr-4">
                  <Activity className="w-8 h-8" />
                </div> */}
                <h3 className="text-2xl font-bold text-sky-800">
                  2. Randomized Controlled Trials (RCTs) & Impact Evaluation
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                We design and implement <strong>Randomized Controlled Trials (RCTs)</strong> and <strong>mixed-method impact evaluations</strong> to rigorously assess the effectiveness of public health interventions.
              </p>
              <p className="text-slate-700 font-semibold mb-2">Our services include:</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Study design and protocol development
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Randomization strategy and sampling
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Baseline and endline data collection
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Process evaluation and monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Statistical analysis and reporting
                </li>
              </ul>
              <p className="text-slate-700 mt-5 italic">
                <strong>Outcome:</strong> Clear, credible evidence on <em>what works, for whom, and under what conditions</em> — enabling partners to scale effective programs and refine or discontinue ineffective ones.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Environmental & Toxicology Research */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center mb-4">
                {/* <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mr-4">
                  <Globe className="w-8 h-8" />
                </div> */}
                <h3 className="text-2xl font-bold text-sky-800">
                  3. Environmental & Toxicology Research
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                We investigate how <strong>environmental exposures and ecological conditions</strong> influence disease patterns and public health outcomes. Our research examines the interactions between environmental hazards, human behavior, and biological responses — enabling partners to design policies and programs that <strong>protect communities and prevent disease</strong>.
              </p>
              <p className="text-slate-700 font-semibold mb-2">Focus Areas:</p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Water, Sanitation and Hygiene (WASH)
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Air quality and atmospheric pollution
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Solid waste and hazardous waste management
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Occupational and community exposure assessments
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Climate change vulnerability and resilience
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  Environmental Toxicology and Non-Communicable Diseases (NCDs)
                </li>
              </ul>

              <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
                <h4 className="font-bold text-amber-800 mb-2 flex items-center">
                  {/* <Wind className="w-5 h-5 mr-2" /> */}
                  Environmental Toxicology and NCD Risk
                </h4>
                <p className="text-slate-700 text-sm mb-3">
                  We explore how environmental toxicants — including <strong>heavy metals, pesticides, endocrine-disrupting chemicals, industrial emissions, and contaminated food/water sources</strong> — contribute to the rising burden of non-communicable diseases such as:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <li>Hypertension & CVD</li>
                  <li>Diabetes</li>
                  <li>Cancers</li>
                  <li>Reproductive disorders</li>
                  <li>Developmental conditions</li>
                  <li>Neurological disorders</li>
                </ul>
                <p className="text-slate-700 font-semibold mt-4 text-sm">Our Capabilities:</p>
                <ul className="text-xs text-slate-600 space-y-1 mt-2">
                  <li>• Exposure assessment and biological sampling</li>
                  <li>• Heavy metals testing in soil, water, food, and biological samples</li>
                  <li>• Risk factor and dose-response analysis</li>
                  <li>• Epidemiological study design and implementation</li>
                  <li>• Geospatial mapping (GIS) of pollution and disease clusters</li>
                  <li>• Community and occupational toxicology awareness programs</li>
                  <li>• Policy translation to support pollution control and mitigation efforts</li>
                </ul>
              </div>
            </div>
            <div className="bg-sky-50 p-6 rounded-xl border border-sky-200">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center">
                <p className="text-slate-500">[Environmental Lab / GIS Map Image]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-14 px-3 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-sky-700 to-sky-900 text-white p-8 md:p-10 rounded-2xl shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Partner with Us on Evidence-Based Solutions
          </h3>
          <p className="mb-6 text-sky-100 max-w-2xl mx-auto">
            Let’s co-design research that drives real change in public health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-800 font-bold px-8 py-3 rounded-full hover:bg-sky-50 transition shadow-md">
              Request a Research Consultation
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition">
              Download Research Brochure
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}