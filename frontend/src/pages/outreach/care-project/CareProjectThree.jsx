import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Calendar, User, ArrowLeft, MapPin } from "lucide-react";
import BlogImages from "../../../components/BlogImages";
import MainLayout from "../../../layouts/MainLayout";

export default function CareProjectThreePage() {
  const projectDate = new Date("2026-05-02");

const projectImages = [
  {
    src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731603/blog/care-project-program-3/gg2i2d755dblzqsatqlu.jpg",
  },
  {
    src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731604/blog/care-project-program-3/yvqg6zxeyn3hl901ms13.jpg",
  },
  {
    src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731604/blog/care-project-program-3/dapywnlkme20m2ufpfi9.jpg",
  },
  {
    src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731605/blog/care-project-program-3/py58cbuxzckzuhbfil9h.jpg",
  },
  {
    src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731605/blog/care-project-program-3/sb0mfcpekszjccvkh0kg.jpg",
  },
  {
    src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731606/blog/care-project-program-3/uxle3u5l7zzsskxsji4b.jpg",
  },
  {
    src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731608/blog/care-project-program-3/w4hgdxcjbqal3udmhjot.jpg",
  },
  {
    src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731608/blog/care-project-program-3/c3emz58ehp6xemxfqnjd.jpg",
  },
  {
    src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731609/blog/care-project-program-3/psxpuynjyao7haqw03fs.jpg",
  },
  {
    src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731610/blog/care-project-program-3/y4tvo2mvgastwf38nbqu.jpg",
  },
  {
    src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731610/blog/care-project-program-3/np20zy387tpym2pzg9s1.jpg",
  },
  {
    src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731611/blog/care-project-program-3/utwfg9ip8rd6bfdolaje.jpg",
  }
];

  const highlights = [
    "89 individuals received free health screening and consultation",
    "Essential medicines distributed to beneficiaries",
    "₦13,550 generated through subsidized sales",
    "Health education delivered through interactive quiz activities",
    "Food packs distributed to quiz winners",
    "Strong community participation and engagement"
  ];

  return (
    <MainLayout>
      <div className="min-h-screen px-0 py-2">
        <div className="max-w-5xl mx-auto bg-white overflow-hidden">
          
          <div className="p-2 flex items-center justify-between">
            <Link
              to="/outreach/care-project"
              className="flex items-center gap-2 text-sky-700 hover:text-sky-900 transition"
            >
              <ArrowLeft className="h-4 w-4" /> Back to CARE Project Overview
            </Link>
          </div>

          <div className="p-2 md:p-4">
            <header className="mb-4">
              <h1 className="text-xl md:text-2xl font-bold text-sky-800 mb-3">
                CARE Project 3.0 — Implementation
              </h1>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-sky-600" />
                  Elebolo Community, Alakia, Ibadan
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-sky-600" />
                  {format(projectDate, "MMMM d, yyyy")}
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4 text-sky-600" />
                  Blue Gate Team
                </span>
              </div>
            </header>

            {projectImages.length > 0 && (
              <div className="mb-8 rounded-xl overflow-hidden">
                <BlogImages
                  slides={projectImages.map((img) => ({
                    src: img.src,
                  }))}
                />
              </div>
            )}

            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              The third edition of the Clothe and Replenish Everyone (CARE) Project was successfully implemented at Elebolo Community, bringing healthcare, essential items, health education, and hope to vulnerable individuals and families.
            </p>

            <p className="text-slate-700 mb-6 leading-relaxed">
              A total of 89 individuals received free health screening and medical consultation services. Beneficiaries were screened for common health conditions, received appropriate counselling and treatment, and were provided with essential medicines based on their health needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50">
                <h3 className="font-bold text-sky-800 text-sm mb-1">Dignity-Centred Marketplace</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  Donated clothes, shoes, bags, ofi, fila, and other essential items were sold at highly subsidized prices ranging from ₦50 to ₦300, making them affordable for vulnerable households. The subsidized sales generated ₦13,550 while promoting dignity, choice, and equitable access.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50">
                <h3 className="font-bold text-sky-800 text-sm mb-1">Community Participation</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  Community members actively participated in health education sessions and an interactive health quiz designed to improve awareness of common health conditions and healthy living practices.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50">
                <h3 className="font-bold text-sky-800 text-sm mb-1">Nutrition Incentives</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  Participants who correctly answered quiz questions received food packs containing rice and garri, providing practical resources and structural support to vulnerable households.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50">
                <h3 className="font-bold text-sky-800 text-sm mb-1">Operational Model</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  The deployment highlighted the effectiveness of community-driven interventions. The implementation framework combined active cooperation from local leaders, donors, and staff.
                </p>
              </div>
            </div>

            <section className="mb-8 p-4 border border-slate-200 rounded-xl bg-white">
              <h2 className="text-md font-bold text-sky-800 mb-3">Key Highlights</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-sm">
                {highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </section>

            <section className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-6">
              <h2 className="text-md font-bold text-sky-800 mb-2">Expression of Appreciation</h2>
              <p className="text-slate-700 text-sm leading-relaxed mb-3">
                CARE Project 3.0 was made possible through the collaboration of community leaders, volunteers, donors, and supporters who contributed to its successful implementation.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                We sincerely appreciate <strong>First Baptist Church, Old Bodija, Ibadan</strong>, for its generous in-kind donations towards the successful implementation of CARE Project 3.0. Thank you for helping us restore health, dignity, and hope—one community at a time.
              </p>
            </section>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}