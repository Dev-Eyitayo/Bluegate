import React from "react";
import { HeartPulse, Target, Users, Activity } from "lucide-react";

export default function Cards() {
  const items = [
    {
      title: "Our Vision",
      icon: <Target className="w-8 h-8 text-sky-700" />,
      body: "To positively influence the health behaviour of individuals and communities through sustainable, evidence-based interventions.",
      bg: "from-sky-50 to-sky-100",
    },
    {
      title: "Our Mission",
      icon: <HeartPulse className="w-8 h-8 text-rose-700" />,
      body: "Deliver community-centered health promotion programs, capacity building, and advocacy to improve health outcomes.",
      bg: "from-rose-50 to-rose-100",
    },
    {
      title: "Get Involved",
      icon: <Users className="w-8 h-8 text-emerald-700" />,
      body: "Volunteer, partner, or donate to support programmes that create real impact for vulnerable groups.",
      bg: "from-emerald-50 to-emerald-100",
    },
    {
      title: "Our Approach to Health",
      icon: <Activity className="w-8 h-8 text-indigo-700" />,
      body: `Blue-Gate Initiative takes a broad approach to health as being a "state of complete physical, mental and social well-being". In our view, public health is not just the responsibility of the health sector, but encompasses all sectors who work to enhance the fundamental prerequisites for health-equity, shelter, education, food, and income. Our approaches to health include Advocacy, Health education, Psychosocial support, Empowerment and capacity building, Rights to health, Creation of supportive environment, Social mobilization, Immunisation/Vaccination support, Policy development, Environmental management, and Research.`,
      bg: "from-indigo-50 to-indigo-100",
    },
  ];

  return (
    <section
      id="programs"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 md:px-2 py-10"
    >
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`p-8 rounded-2xl border border-gray-200 bg-gradient-to-br ${item.bg} hover:-translate-y-1 transition-transform duration-300 text-center ${
            index === 3 ? "md:col-span-3" : ""
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4">
              {item.icon}
            </div>
            <h3 className="text-gray-900 font-extrabold mb-3 text-xl">
              {item.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed max-w-2xl mx-auto">
              {item.body}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
