import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Calendar, User, ArrowLeft, MapPin, ExternalLink } from "lucide-react";
import BlogImages from "../../../components/BlogImages";
import MainLayout from "../../../layouts/MainLayout";

export default function CareProjectFourPage() {
  const projectDate = new Date("2026-07-11");

  const projectImages = [
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1790250146/blog/care-project-program-4/u4mmmd5upemso8pfiadl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1790250149/blog/care-project-program-4/uzgg3d00c1wzxj1vutii.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1790250153/blog/care-project-program-4/ivwaiy3m6nf9f2gvudcg.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1790250157/blog/care-project-program-4/ryfwm2sl5udbowde18ch.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1790250160/blog/care-project-program-4/zcye5dovrphjyeg1zvhm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1790250167/blog/care-project-program-4/vindikkfszceinwl1emx.jpg",
    }
  ];

  const highlights = [
    "More than 100 community members participated in the outreach",
    "A total of 96 individuals received free health screening and medical consultation",
    "Screenings included blood pressure, blood sugar, malaria, BMI, cervical cancer screening, and other essential health checks",
    "Essential medicines were provided free of charge, with referrals to nearby government health facilities",
    "₦23,000 generated through our dignity-centred sales model",
    "Food packs distributed through an interactive health quiz",
    "Children participated in a general knowledge competition and received biscuits as prizes",
    "Active participation of residents, support of community leaders, and dedication of volunteers"
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
                CARE Project 4.0 — Implementation
              </h1>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-brand-500" />
                  Ifelodun Community, Koloko, Ibadan, Oyo State
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
                    src: img.src,
                  }))}
                />
              </div>
            )}

            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              The Blue Gate Public Health Promotion Initiative successfully implemented the fourth edition of the Clothe and Replenish Everyone (CARE) Project, bringing healthcare, hope, and dignity to vulnerable members of the Ifelodun Community.
            </p>

            <p className="text-slate-700 mb-6 leading-relaxed">
              More than 100 community members participated in the outreach. A total of 96 individuals received free health screening and medical consultation, including blood pressure, blood sugar, malaria, BMI, cervical cancer screening, and other essential health checks.
            </p>

            <p className="text-slate-700 mb-6 leading-relaxed">
              Essential medicines were provided free of charge, while participants requiring further care were referred to nearby government health facilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-4 border border-slate-200 rounded-2xl bg-white">
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1">Dignity-Centred Sales Model</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  Clothes, shoes, bags, traditional attire, teddy bears, and other essential items were sold at highly subsidized prices, generating ₦23,000 through our dignity-centred sales model.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-2xl bg-white">
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1">Health Screening & Consultation</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  A total of 96 individuals received free health screening and medical consultation, including blood pressure, blood sugar, malaria, BMI, cervical cancer screening, and other essential health checks.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-2xl bg-white">
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1">Health Quiz & Food Distribution</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  Food packs were distributed through our interactive health quiz, while children participated in a fun-filled general knowledge competition and received biscuits as prizes.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-2xl bg-white">
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1">Community & Volunteer Support</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  The outreach was made possible through the dedication of our volunteers, the support of community leaders, and the active participation of residents, who worked alongside our team to ensure a successful event. Together, we continue to restore health, dignity, and hope.
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
              <h3 className="text-sm font-bold text-slate-700 mb-2">Watch the Care Project 4.0 Video Documentation</h3>
              <a 
                href="https://web.facebook.com/reel/2651039491982585" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-semibold text-sm shadow-soft transition-all duration-300 hover:shadow-lift"
              >
                View Video Documentation <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <section className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-6">
              <h2 className="text-md font-display font-bold text-slate-900 mb-2">Expression of Appreciation</h2>
              <p className="text-slate-700 text-sm leading-relaxed mb-3">
                We sincerely appreciate our donors (Mr Oladipo Fakunle, Bodija Estate Baptist Church, Mr Elujulo Opeyemi, & Late Mama Akintola's children), volunteers, partners, and everyone who contributed to the success of CARE Project 4.0. Your generosity is transforming lives and strengthening communities.
              </p>
            </section>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
