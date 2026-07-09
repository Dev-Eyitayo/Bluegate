import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Calendar, User, ArrowLeft, MapPin, ExternalLink } from "lucide-react";
import BlogImages from "../../../components/BlogImages";
import MainLayout from "../../../layouts/MainLayout";

export default function CareProjectTwoPage() {
  const projectDate = new Date("2026-02-07");

  const projectImages = [
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731552/blog/care-project-program-2/u7ybbnruvvwgg9y4bwra.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731552/blog/care-project-program-2/hral4d423pvpx6mmpm1a.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731553/blog/care-project-program-2/mv5ujei3didih8hv8aqk.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731554/blog/care-project-program-2/b5sm5ohhjxbbh0hapksr.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731554/blog/care-project-program-2/zekgm7fuzcsvwhfnj96v.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731555/blog/care-project-program-2/f5j1n7bzvvl4fpynebjy.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731555/blog/care-project-program-2/vuz17yumhfbsz8vlrkgb.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731556/blog/care-project-program-2/qtgbtviqfexl5he6gs20.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731557/blog/care-project-program-2/clwaauwaoss3jnqyrfu2.jpg",
    }
  ];

  const highlights = [
    "129 individuals received free health screening and consultation",
    "Essential medicines distributed to beneficiaries",
    "₦25,400 generated through subsidized sales",
    "Food packs distributed through health quiz activities",
    "Educational materials awarded to participating children",
    "Strong community participation and support"
  ];

  return (
    <MainLayout>
      <div className="min-h-screen px-0 py-2">
        <div className="max-w-5xl mx-auto bg-white overflow-hidden">
          
          <div className="p-2 flex items-center justify-between">
            <Link
              to="/outreach/care-project"
              className="flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800 transition"
            >
              <ArrowLeft className="h-4 w-4" /> Back to CARE Project Overview
            </Link>
          </div>

          <div className="p-2 md:p-4">
            <header className="mb-4">
              <h1 className="font-display text-xl md:text-2xl font-bold tracking-tight text-slate-900 mb-3">
                CARE Project 2.0 — Implementation
              </h1>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-brand-500" />
                  Ogbere-Adabi Community, Ibadan, Oyo State
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-brand-500" />
                  {format(projectDate, "MMMM d, yyyy")}
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4 text-brand-500" />
                  Blue Gate Team
                </span>
              </div>
            </header>

            {projectImages.length > 0 && (
              <div className="mb-8 rounded-xl overflow-hidden">
                <BlogImages
                  slides={projectImages.map((img) => ({
                    src: img.src, caption: ""
                  }))}
                />
              </div>
            )}

            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              The second edition of the Clothe and Replenish Everyone (CARE) Project was successfully implemented at Ogbere-Adabi Community, bringing healthcare, essential items, health education, and hope to vulnerable individuals and families.
            </p>

            <p className="text-slate-700 mb-6 leading-relaxed">
              A total of 129 individuals received free health screening and medical consultation services, including blood pressure checks, blood sugar testing, malaria screening, BMI assessment, temperature checks, and oxygen saturation monitoring. Essential medicines were distributed to beneficiaries, while individuals with more serious health conditions were referred to nearby government health facilities for further care.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-4 border border-slate-200 rounded-2xl bg-white">
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1">Dignity-Centred Marketplace</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  Clothes, shoes, and bags were made available at highly subsidized prices, enabling vulnerable households to access essential items at affordable rates. The subsidized sales generated ₦25,400 while promoting choice, fairness, and equitable access.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-2xl bg-white">
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1">Health Quiz & Food Support</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  Health education was delivered through an interactive quiz session that encouraged learning and community participation. Winners received food packs containing rice and garri, reinforcing healthy living while providing practical support to vulnerable households.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-2xl bg-white">
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1">Child Engagement & Literacy</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  Children were actively engaged through dance competitions and general knowledge activities. Educational materials, including notebooks donated by the Federal Competition and Consumer Protection Commission (FCCPC) and storybooks donated by supporters, were presented to participating children as prizes.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-2xl bg-white">
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1">Strategic Framework</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  The success of the outreach was made possible through strong collaboration between Blue Gate Initiative, community volunteers, local leadership, and security personnel from Operation Amotekun.
                </p>
              </div>
            </div>

            <section className="mb-8 p-4 border border-slate-200 rounded-xl bg-white">
              <h2 className="text-md font-display font-bold text-slate-900 mb-3">Key Highlights</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-sm">
                {highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </section>

            <div className="mb-10 text-center py-6 border-y border-slate-100">
              <h3 className="text-sm font-bold text-slate-700 mb-2">Watch the Care Project 2.0 Documentary</h3>
              <a 
                href="https://web.facebook.com/share/v/1BGh7qQqdD/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-semibold text-sm shadow-soft transition-all duration-300 hover:shadow-lift"
              >
                View Video Documentary <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <section className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-6">
              <h2 className="text-md font-display font-bold text-slate-900 mb-3">Expression of Appreciation</h2>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                CARE Project 2.0 was made possible through the generosity of our donors and partners. We gratefully acknowledge the financial support of <strong>Dr. Oluwakemi Ogunyileka</strong>, <strong>Mrs. Ola Akintinde Modupe</strong>, and the <strong>FCCPC Oyo State Office</strong>, as well as the in-kind contributions provided by:
              </p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-600 font-medium mb-4 list-none pl-0">
                <li className="bg-white px-3 py-2 border border-slate-200 rounded">• Mrs. Funmilayo Abegunde</li>
                <li className="bg-white px-3 py-2 border border-slate-200 rounded">• Mrs. Olufunke Famuyiwa</li>
                <li className="bg-white px-3 py-2 border border-slate-200 rounded">• Mrs. Tosin Olaleye</li>
                <li className="bg-white px-3 py-2 border border-slate-200 rounded">• Mrs. Yemisi Fatokunbo</li>
                <li className="bg-white px-3 py-2 border border-slate-200 rounded">• Mrs. Adefunke Omoyajowo</li>
                <li className="bg-white px-3 py-2 border border-slate-200 rounded">• Prof. Olufunmilayo Fawole</li>
                <li className="bg-white px-3 py-2 border border-slate-200 rounded">• FCCPC Oyo State Office</li>
                <li className="bg-white px-3 py-2 border border-slate-200 rounded">• Dr. Oyewole Lawal</li>
                <li className="bg-white px-3 py-2 border border-slate-200 rounded">• Mrs. Motunrade Adetunde</li>
              </ul>

              <p className="text-slate-600 text-xs leading-relaxed italic border-t border-slate-200 pt-3">
                Your generosity helped bring healthcare, essential medicines, educational materials, food support, and hope to vulnerable families in Ogbere-Adabi Community. Thank you for making a difference.
              </p>
            </section>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}