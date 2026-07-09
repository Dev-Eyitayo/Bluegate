import React from "react";
import { HeartPulse, Target, Users, Activity } from "lucide-react";

const items = [
  {
    title: "Our Vision",
    icon: Target,
    body: "To positively influence the health behaviour of individuals and communities through sustainable, evidence-based interventions.",
    chip: "bg-brand-50 text-brand-600 ring-brand-100",
  },
  {
    title: "Our Mission",
    icon: HeartPulse,
    body: "Deliver community-centered health promotion programs, capacity building, and advocacy to improve health outcomes.",
    chip: "bg-rose-50 text-rose-600 ring-rose-100",
  },
  {
    title: "Get Involved",
    icon: Users,
    body: "Volunteer, partner, or donate to support programmes that create real impact for vulnerable groups.",
    chip: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  },
];

const approaches = [
  "Advocacy",
  "Health education",
  "Psychosocial support",
  "Empowerment and capacity building",
  "Rights to health",
  "Creation of supportive environment",
  "Social mobilization",
  "Immunisation/Vaccination support",
  "Policy development",
  "Environmental management",
  "Research",
];

export default function Cards() {
  return (
    <section
      id="programs"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 md:px-2 py-10"
    >
      {items.map((item) => (
        <article
          key={item.title}
          className="group p-8 rounded-2xl border border-slate-200 bg-white text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
        >
          <div className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-14 h-14 rounded-2xl ring-1 ring-inset mb-5 transition-transform duration-300 group-hover:scale-105 ${item.chip}`}
            >
              <item.icon className="w-7 h-7" />
            </div>
            <h3 className="font-display text-slate-900 font-bold mb-3 text-lg">
              {item.title}
            </h3>
            <p className="text-slate-600 text-[15px] leading-relaxed">
              {item.body}
            </p>
          </div>
        </article>
      ))}

      {/* Feature panel: Our Approach to Health */}
      <article className="md:col-span-3 p-8 md:p-10 rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50/70 to-white">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-brand-600 ring-1 ring-inset ring-brand-100 shadow-soft">
            <Activity className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-display text-slate-900 font-bold mb-3 text-lg">
              Our Approach to Health
            </h3>
            <p className="text-slate-600 text-[15px] leading-relaxed max-w-4xl">
              Blue-Gate Initiative takes a broad approach to health as being a
              &ldquo;state of complete physical, mental and social
              well-being&rdquo;. In our view, public health is not just the
              responsibility of the health sector, but encompasses all sectors
              who work to enhance the fundamental prerequisites for
              health-equity, shelter, education, food, and income.
            </p>
            <p className="mt-5 text-sm font-semibold text-slate-800">
              Our approaches to health include:
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {approaches.map((approach) => (
                <li
                  key={approach}
                  className="rounded-full bg-white px-3.5 py-1.5 text-xsm font-medium text-brand-800 ring-1 ring-inset ring-brand-100"
                >
                  {approach}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
