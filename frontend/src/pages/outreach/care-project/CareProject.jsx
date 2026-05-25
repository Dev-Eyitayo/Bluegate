import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Calendar, User, ArrowLeft, Heart, CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react";
import MainLayout from "../../../layouts/MainLayout";

export default function CareProjectPage() {
  const postDate = new Date("2025-10-01T10:00:00.000Z");

  const programs = [
    {
      version: "CARE Project 1.0",
      description: "The maiden edition of the Clothe and Replenish Everyone (CARE) Project was successfully implemented to improve access to healthcare, essential items, health education, and food support for vulnerable individuals.",
      path: "/outreach/care-project/1"
    },
    {
      version: "CARE Project 2.0",
      description: "The second edition of the Clothe and Replenish Everyone (CARE) Project was successfully implemented at Ogbere-Adabi Community, bringing healthcare, essential items, health education, and hope to vulnerable individuals and families.",
      path: "/outreach/care-project/2"
    },
    {
      version: "CARE Project 3.0",
      description: "The third edition of the Clothe and Replenish Everyone (CARE) Project was successfully implemented at Elebolo Community, bringing healthcare, essential items, health education, and hope to vulnerable individuals and families.",
      path: "/outreach/care-project/3"
    },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen px-0 py-2">
        <div className="max-w-5xl mx-auto bg-white overflow-hidden">
          
          <div className="p-2 flex items-center justify-between">
            <Link
              to="/outreach"
              className="flex items-center gap-2 text-sky-700 hover:text-sky-900 transition"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Outreaches
            </Link>
          </div>

          <div className="p-2 md:p-4">
            <header className="mb-6">
              <h1 className="text-xl md:text-2xl font-bold text-sky-800 mb-1">
                CARE PROJECT
              </h1>
              <p className="text-md text-sky-600 font-semibold mb-3 tracking-wide">
                Clothe And Replenish Everyone
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {format(postDate, "MMMM d, yyyy")}
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Blue Gate Team
                </span>
              </div>
            </header>

            <p className="text-lg text-slate-700 mb-8 sentences-relaxed italic border-l-4 border-sky-500 pl-4">
              The Clothe and Replenish Everyone (CARE) Project is a community-driven lifestyle intervention that empowers indigent communities by providing affordable essential resources, thereby restoring their dignity through access. This will be achieved by organising and executing regular mobile sales events in identified indigent communities.
            </p>

            <div className="prose prose-sky max-w-none text-slate-800 space-y-8 border-t border-slate-100 pt-8">
              
              <div>
                <h2 className="text-lg font-bold text-sky-800 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-sky-600" /> Project Objectives
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Establish a sustainable system for collecting new or gently used items, including essential food items, from affluent individuals and organisations.</li>
                  <li>Sell and set the price of material items ranging from NGN 50 to NGN 500 per item to ensure extreme affordability.</li>
                  <li>Implement a fair purchasing limit of NGN 1000 per person to ensure equitable distribution of available items across the community.</li>
                  <li>Provide free medical screening for blood pressure, blood sugar, malaria, and cervical cancer screening, including health education, medical consultation and free distribution of drugs.</li>
                  <li>Organise a health quiz and debate, and provide food items as gifts.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-sky-800 mb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-sky-600" /> Target Beneficiaries
                </h2>
                <p className="leading-relaxed text-slate-700">
                  The primary beneficiaries of this project will include low-income families and individuals, orphaned and vulnerable children, students from impoverished backgrounds, elderly individuals with limited financial resources, and anyone living below the poverty line in target communities in Oyo State through the mobile outreach model.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-sky-800 mb-3 flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-sky-600" /> Donation Categories
                </h2>
                <p className="leading-relaxed text-slate-700 mb-3">
                  The project will collect new or gently used household items (e.g., pots, fans, blenders), personal items (e.g., clothes, shoes, bags), educational materials (e.g., textbooks, writing materials), and essential food items (e.g., rice, beans, garri, salt, maggi, etc) from affluent individuals and organisations.
                </p>
                <p className="leading-relaxed text-slate-700">
                  The project will also consistently send personalised thank-you letters to all donors and regularly acknowledge their contributions during sales and via social media platforms to highlight the impact of their generosity.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-sky-800 mb-3">Expected Outcomes</h2>
                <p className="leading-relaxed text-slate-700 mb-3">
                  Indigent families will gain access to essential items, enhancing their comfort and daily living at minimal cost. Also, students will be better equipped with the necessary educational materials, fostering improved learning outcomes and school attendance. Food items will help alleviate hunger and improve nutritional intake for vulnerable individuals. The items purchasing model at highly subsidised rates promotes self-respect and empowers beneficiaries with choice and ownership.
                </p>
                <p className="leading-relaxed text-slate-700">
                  Donated items will be repurposed and find new homes, contributing to environmental sustainability by diverting waste from landfills. The partnership with community leaders and direct engagement at the grassroots level will foster a sense of unity and shared responsibility.
                </p>
              </div>

              {/* Program Grid Section */}
              <section className="mb-10">
                <h2 className="text-lg font-bold text-sky-800 mb-4 tracking-tight">
                  Implementation
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {programs.map((prog, index) => (
                    <Link 
                      key={index}
                      to={prog.path} 
                      className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 hover:border-sky-200 transition group flex flex-col justify-between min-h-[140px]"
                    >
                      <div>
                        <h3 className="font-bold text-sky-800 text-sm md:text-md mb-1.5 flex items-center justify-between">
                          {prog.version}
                          <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-sky-600 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                        </h3>
                        <p className="text-xs leading-relaxed text-slate-600 line-clamp-2">
                          {prog.description}
                        </p>
                      </div>
                      <span className="text-[11px] font-medium text-sky-700 mt-3 block group-hover:text-sky-900">
                        Read More →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}