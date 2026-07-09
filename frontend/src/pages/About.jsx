import React from "react";
import { Activity, HeartHandshake, Mail } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import PageHeader from "../components/PageHeader";
import Accordion from "../components/Accordion";
import ImageCarousel from "../components/ImageCarousel";

export default function About() {
  // Data for Departments (using Accordion)
  const departments = [
    {
      title: "Health Promotion",
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
      title: "SBCC",
      content:
        "Spreading health awareness through effective communication strategies.",
      link: "/health-communication",
      linkText: "Learn more",
    },
  ];

  // Data for Executives
  const executives = [
    {
      name: "Prof. (Mrs.) Atinuke AGUNLOYE",
      title: "Board Chair",
      email: "atinuke.agunloye@bluegateinitiative.org",
      image: "/assets/executives/atinuke.png",
    },
    {
      name: "Prof. Ademola ADELEKAN",
      title: "CEO",
      email: "ademola.adelekan@bluegateinitiative.org",
      image: "/assets/executives/ademola.png",
    },
    {
      name: "Dr. Adekunle FAKUNLE",
      title: "Director, Environmental Health Services",
      email: "adekunle.fakunle@bluegateinitiative.org",
      image: "/assets/executives/fakunle.png",
    },
    {
      name: "Dr. Oladipupo OLALEYE",
      title: "Director, Research, Monitoring & Evaluation",
      email: "oladipupo.olaleye@bluegateinitiative.org",
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
      email: "opeyemi.oladunni@bluegateinitiative.org",
      image: "/assets/executives/opeyemi.png",
    },
    {
      name: "Dr. Omotayo SINDIKU",
      title: "Director of Laboratory Services",
      email: "omotayo.sindiku@bluegateinitiative.org",
      image: "/assets/executives/omotayo.jpg",
    },
  ];

  const aboutSlides = [
    { image: "/assets/AboutUse.jpeg", title: "" },
    { image: "/assets/about-intro.png", title: "" },
  ];

  return (
    <div className="min-h-screen text-slate-800">
      {/* Introduction Section */}
      <section className="py-14 px-2 max-w-5xl mx-auto">
        <PageHeader
          eyebrow="Who we are"
          title="About Us"
        />

        <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
          Blue Gate Public Health Promotion Initiative
        </h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            We are working with partners to find new ways of promoting the health of the public. We
            pioneer and advance creative, high-impact solutions. We do this by conducting research
            that helps to inform and influence decision-makers; building platforms and networks that
            connect people and ideas; providing direct support to local change agents, and
            combining these approaches to deliver meaningful and lasting results.
          </p>
          <p>
            We also contribute to public health by improving the health outcomes in Nigeria by
            ensuring that the policies reflect the realities in our communities especially at the
            grassroots.
          </p>
          <p>
            We champion the health of all people and communities by strengthening the public health
            profession with ability to influence policies to improve the public's health.
          </p>
        </div>

        <div className="max-w-3xl mt-10 mx-auto">
          <ImageCarousel slides={aboutSlides} />
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-14 px-2 max-w-5xl mx-auto">
        <SectionHeader icon={Activity} title="Departments" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <Accordion items={departments} />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-7 space-y-4 text-slate-600 leading-relaxed">
            <p>
              Our departments work collaboratively to address health challenges across Nigeria,
              focusing on innovative solutions and community engagement.
            </p>
            <p>
              Each program is designed to empower individuals and communities, ensuring sustainable
              health improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-14 px-2 max-w-5xl mx-auto">
        <SectionHeader icon={HeartHandshake} title="Our Competencies" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-4 text-slate-600 leading-relaxed">
          <div>
            <p>
              Blue Gate Initiative works through partnership with other national and international
              organizations providing creative health services, capacity building and empowerment for
              women, adolescents, key and vulnerable populations which include but not limited to
              LGBT, female sex workers, inmates and ex-inmates and people with disabilities. We also
              provide psychosocial support, medical and legal services to LGBT, rape survivors and
              human right defenders.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              We work with policy makers in developing evidence-based health promotion policies and
              adequate resource allocation for implementation including oversight functions of the
              legislators to health facilities and communities.
            </p>
            <p>
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
      <section className="py-16 px-2 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900">
            Blue Gate Initiative Executives
          </h2>
          <span className="mt-4 inline-block h-1 w-12 rounded-full bg-brand-500" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {executives.map((exec, index) => (
            <div
              key={index}
              className="group text-center flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
            >
              <div className="rounded-full p-1 ring-1 ring-brand-100 bg-brand-50 mb-5 transition-colors duration-300 group-hover:ring-brand-200">
                <img
                  src={exec.image}
                  alt={exec.name}
                  className="w-32 h-32 object-cover rounded-full"
                />
              </div>
              <h3 className="font-display font-bold text-slate-900">{exec.name}</h3>
              <p className="mt-1 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-inset ring-brand-100">
                {exec.title}
              </p>
              <a
                href={`mailto:${exec.email}`}
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-700 transition-colors break-all"
              >
                <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                {exec.email}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
