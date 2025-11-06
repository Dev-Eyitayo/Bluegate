// pages/EnvironmentalHealth.jsx
import React from "react";
import { Droplets, Wind, Trees, HeartHandshake } from "lucide-react";

export default function EnvironmentalHealth() {
  return (
    <div className="min-h-screen bg-sky-200/10 px-2 text-gray-800">
      <section className="py-16 px-3 max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-sky-800 text-center mb-8">
          Environmental Health Services
        </h1>
        <p className="text-slate-600 leading-relaxed mb-6 text-left">
          Environmental health focuses on how the environment affects human wellbeing. Clean water, safe sanitation, good hygiene practices, and a healthy natural environment are essential for preventing disease and improving quality of life. However, many communities in Nigeria still face challenges such as unsafe drinking water, poor waste management, inadequate sanitation, climate change impacts, and menstrual health stigma.
        </p>
        <p className="text-slate-600 leading-relaxed text-left">
          At <strong>Blue Gate Public Health Promotion Initiative</strong>, we work with communities, schools, health facilities, and local governments to create healthier environments where people can live, learn, and grow safely.
        </p>
      </section>

      <section className="py-12 px-3 max-w-5xl mx-auto space-y-20">
        <img
          src="/assets/environmental.jpg"
          alt="Environmental Health"
          className="rounded-xl mx-auto max-w-2xl"
        />

        {/* 1. WASH */}
        <div className="bg-white p-8 rounded-xl">
          <h3 className="text-xl font-bold text-sky-800 mb-4 flex items-center">
            {/* <Droplets className="w-7 h-7 mr-3 text-blue-600" /> */}
            1. Water, Sanitation and Hygiene (WASH)
          </h3>
          <p className="text-slate-600 mb-4">
            WASH stands for Water, Sanitation, and Hygiene. It involves ensuring that people have access to clean drinking water, safe places to use the toilet, and knowledge of hygiene practices that prevent disease.
          </p>
          <p className="text-slate-600 font-semibold mb-3">Our WASH Interventions</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600">
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Community education on handwashing and hygiene practices
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Promotion of safe water storage and household water treatment
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Support for community and school sanitation facilities
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Behavior change campaigns to end open defecation
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Hygiene promotion during disease outbreaks (e.g., cholera)
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Training community health volunteers and hygiene champions
            </li>
          </ul>
        </div>

        {/* 2. Menstrual Health */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-sky-800 mb-4 flex items-center">
            {/* <HeartHandshake className="w-7 h-7 mr-3 text-pink-600" /> */}
            2. Menstrual Health and Hygiene (MHH)
          </h3>
          <p className="text-slate-600 mb-4">
            Menstrual health is a key part of women and girls' wellbeing but in many communities, taboos, stigma, lack of knowledge, and limited access to sanitary products affect dignity, school attendance, and confidence.
          </p>
          <p className="text-slate-600 mb-3">
            We work to ensure that menstruation is understood as a natural and healthy process, not a source of shame.
          </p>
          <p className="text-slate-600 font-semibold mb-3">Our Menstrual Health Initiatives</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600">
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Menstrual hygiene education in schools and communities
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Training teachers, mothers, and peer educators
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Distribution of reusable and disposable sanitary products
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Support for locally produced and affordable menstrual products
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Community dialogues to reduce stigma and harmful beliefs
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Advocacy for menstrual-friendly water and sanitation facilities
            </li>
          </ul>
        </div>

        {/* 3. Climate Resilience */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-sky-800 mb-4 flex items-center">
            {/* <Wind className="w-7 h-7 mr-3 text-green-600" /> */}
            3. Climate Change and Community Resilience
          </h3>
          <p className="text-slate-600 mb-4">
            Climate change is affecting weather patterns, food production, disease spread, and water availability. Vulnerable communities especially women and children are affected the most.
          </p>
          <p className="text-slate-600 mb-3">
            We help communities adapt and build resilience so they can better protect their health and livelihoods.
          </p>
          <p className="text-slate-600 font-semibold mb-3">Our Climate Resilience Efforts</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600">
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Community awareness on climate-related health risks
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Promotion of climate-smart water and sanitation practices
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Environmental protection education (tree planting, waste management)
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Supporting households to adopt climate-sensitive nutrition and farming practices
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              Advocacy for climate-responsive policies at local and state levels
            </li>
          </ul>
        </div>
      </section>


      <section className="py-12 px-3 max-w-5xl mx-auto bg-sky-50 rounded-xl p-6 mt-16">
        <p className="text-slate-600 leading-relaxed mb-4">
          Our environmental health services consist of preventing or controlling disease, injury, and disability related to the interactions between people and their environment.
        </p>
        <p className="text-slate-600 leading-relaxed">
          We provide WASH services and conduct inspections and surveillance activities in food safety, drinking water quality, and waste disposal. We also investigate human–work relationships and environment relationships by carrying out Environmental Impact Assessments (EIA) and Health Impact Assessments (HIA) at various levels of project implementation.
        </p>
      </section>
    </div>
  );
}