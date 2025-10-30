import React from "react";
import { Activity, HeartHandshake } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Accordion from "../components/Accordion";

export default function About() {
  // Data for Departments (using Accordion)
  const departments = [
    {
      title: "Programme",
      content:
        "Our core health promotion programs focus on improving community health outcomes.",
      link: "/health-promotion",
      linkText: "Learn more",
    },
    {
      title: "Medical Outreach",
      content:
        "Providing medical services and support to underserved communities across Nigeria.",
      link: "/medical-outreach",
      linkText: "Learn more",
    },
    {
      title: "Health Communication",
      content:
        "Spreading health awareness through effective communication strategies.",
      link: "/health-communication",
      linkText: "Learn more",
    },
  ];

  // Data for Executives
  const executives = [
    {
      name: "Prof. Ademola ADELEKAN",
      title: "CEO",
      email: "ademola.adelekan@bluegateinitiative.org",
      image: "/assets/executives/ademola.png",
    },
    {
      name: "Professor (Mrs.) Atinuke AGUNLOYE",
      title: "Board Chair",
      email: "atilnu.agunloye@bluegateinitiative.org",
      image: "/assets/executives/atinuke.png",
    },
    {
      name: "Dr. Odekunle FAKUNLE",
      title: "Director, Community Health Services",
      email: "odekunle.fakunle@bluegateinitiative.org",
      image: "/assets/executives/fakunle.png",
    },
    {
      name: "Dr. Oladipupo OLALEYE",
      title: "Director, Research, Monitoring & Evaluation",
      email: "olaidupo.olaeye@bluegateinitiative.org",
      image: "/assets/executives/oladipupo.png",
    },
    {
      name: "Mrs. Boluwatife AKINTUNDE",
      title: "Director, Administration",
      email: "boluwatife.akintunde@bluegateinitiative.org",
      image: "/assets/executives/boluwatife.png",
    },
    {
      name: "Mrs. Philomena OSAGIE",
      title: "Director, Consultancy Services",
      email: "philomena.osagie@bluegateinitiative.org",
      image: "/assets/executives/philomena.png",
    },
    {
      name: "Ms. Tunrayo ADETONA",
      title: "Director of Finance",
      email: "tunrayo.adetona@bluegateinitiative.org",
      image: "/assets/executives/tunrayo.png",
    },
    {
      name: "Dr. Opeyemi OLADUNNI",
      title: "Director of Training Services",
      email: "opeyemi.olaodunni@bluegateinitiative.org",
      image: "/assets/executives/opeyemi.png",
    },
  ];

  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      {/* Introduction Section */}
      <section className="py-16 px-2 max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-sky-800 text-center mb-12">
          About Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-semibold text-sky-800 mb-6">
              Blue Gate Public Health Promotion Initiative
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We are working with partners to find new ways of promoting the health of the public. We
              pioneer and advance creative, high-impact solutions. We do this by conducting research
              that helps to inform and influence decision-makers; building platforms and networks that
              connect people and ideas; providing direct support to local change agents, and
              combining these approaches to deliver meaningful and lasting results.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              We also contribute to public health by improving the health outcomes in Nigeria by
              ensuring that the policies reflect the realities in our communities especially at the
              grassroots.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We champion the health of all people and communities by strengthening the public health
              profession with ability to influence policies to improve the public's health.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="/assets/about-intro.png" 
              alt="Blue Gate Initiative Team"
              className="w-full h-64 object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 px-2 max-w-5xl mx-auto">
        <SectionHeader icon={Activity} title="Departments" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Accordion items={departments} />
          </div>
          <div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our departments work collaboratively to address health challenges across Nigeria,
              focusing on innovative solutions and community engagement.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Each program is designed to empower individuals and communities, ensuring sustainable
              health improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-16 px-2 max-w-5xl mx-auto">
        <SectionHeader icon={HeartHandshake} title="Our Competencies" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Blue Gate Initiative works through partnership with other national and international
              organizations providing creative health services, capacity building and empowerment for
              women, adolescents, key and vulnerable populations which include but not limited to
              LGBT, female sex workers, inmates and ex-inmates and people with disabilities. We also
              provide psychosocial support, medical and legal services to LGBT, rape survivors and
              human right defenders.
            </p>
          </div>
          <div>
            <p className="text-slate-600 leading-relaxed mb-6">
              We work with policy makers in developing evidence-based health promotion policies and
              adequate resource allocation for implementation including oversight functions of the
              legislators to health facilities and communities.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Blue Gate Initiative has a culturally acceptable empowerment model which in most
              occasions uses four for programme implementation. The model has three components which
              are [1] Vocational training & empowerment, [2] Literacy and numeric education [3]
              Psychosocial Counselling & Mentoring. This model has been used many times among LGBT,
              female sex workers and currently being used for ex-inmates in Ibadan, Nigeria.
            </p>
          </div>
        </div>
    </section>

    {/* Executives section */}
    <section className="py-20 px-2 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-sky-800 text-center mb-12">
        Blue Gate Initiative Executives
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center justify-center">
        {executives.map((exec, index) => (
        <div key={index} className="text-center flex flex-col items-center">
            <img
            src={exec.image}
            alt={exec.name}
            className="w-40 h-40 object-cover rounded-full border-4 border-sky-200 mb-4"
            />
            <h3 className="font-semibold text-sky-800 text-lg">{exec.name}</h3>
            <p className="text-sm text-slate-600 mb-2">{exec.title}</p>
            <a
            href={`mailto:${exec.email}`}
            className="text-sm text-sky-600 hover:text-sky-800 break-words"
            >
            {exec.email}
            </a>
        </div>
        ))}
    </div>
    </section>


    </div>
  );
};
