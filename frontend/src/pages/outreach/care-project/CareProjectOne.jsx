import React from "react";
import { Link } from "react-router-dom";
import BlogImages from "../../../components/BlogImages";
import MainLayout from "../../../layouts/MainLayout";
import { format } from "date-fns";
import { Calendar, User, ArrowLeft, MapPin, Users, Heart, ExternalLink } from "lucide-react";

export default function CareProjectOnePage() {
  const projectDate = new Date("2025-10-01");

  const projectImages = [
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731483/blog/care-project-program-1/wnsgkvbke6p3poewlhaa.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731484/blog/care-project-program-1/ojry4mi4r2fy8jdcxczr.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731485/blog/care-project-program-1/rmiidh9f5luoxb8lhvb5.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731485/blog/care-project-program-1/pr0dbyznpiyal0dciah1.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731486/blog/care-project-program-1/iqayvizgtvwyhbprt98i.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731487/blog/care-project-program-1/xbpp3p1yyh7ankgc6owk.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731487/blog/care-project-program-1/sumx1yeieuruiktfkynx.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731488/blog/care-project-program-1/aikkdreuyvspil5a2gs5.jpg",
    },
    {
      src: "https://res.cloudinary.com/dopobzvog/image/upload/v1779731488/blog/care-project-program-1/rr56lrl50lkha53c3ec9.jpg",
    }
  ];


  

  return (
    <MainLayout>
      <div className="min-h-screen px-0 py-2">
        <div className="max-w-5xl mx-auto bg-white overflow-hidden">
          
          {/* Back link */}
          <div className="p-2 flex items-center justify-between">
            <Link
              to="/outreach/care-project"
              className="flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800 transition"
            >
              <ArrowLeft className="h-4 w-4" /> Back to CARE Project Overview
            </Link>
          </div>

          {/* Page Content */}
          <div className="p-2 md:p-4">
            <header className="mb-4">
              <h1 className="font-display text-xl md:text-2xl font-bold tracking-tight text-slate-900 mb-3">
                CARE Project 1.0 — Implementation
              </h1>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-brand-500" />
                  Alagbafo Community, Kube-Atenda, Ibadan
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

            {/* Image Slider Component */}
            {projectImages.length > 0 && (
              <div className="mb-8 rounded-xl overflow-hidden">
                <BlogImages
                  slides={projectImages.map((img) => ({
                    src: img.src
                  }))}
                />
              </div>
            )}

            {/* Core Narrative */}
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              The maiden edition of the Clothe and Replenish Everyone (CARE) Project was successfully implemented to improve access to healthcare, essential items, health education, and food support for vulnerable individuals and families.
            </p>

            <p className="text-slate-700 mb-6 leading-relaxed">
              Through this outreach, community members received free health screening services, including blood pressure checks, blood sugar testing, malaria screening, oxygen saturation assessment, and cervical cancer screening. Participants also benefited from medical consultation and the free distribution of essential medicines, while those requiring further care were referred to government health facilities.
            </p>

            {/* Key Framework Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-4 border border-slate-200 rounded-2xl bg-white">
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1">Subsidized Marketplace</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  New and gently used clothes, shoes, bags, and household items donated by generous individuals were made available at highly subsidized prices ranging from ₦50 to ₦300, ensuring affordability for low-income households.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-2xl bg-white">
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1">Health Literacy & Education</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  Participants also benefited from health education sessions and interactive health quizzes designed to promote healthy behaviors and improve awareness of common health conditions.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-2xl bg-white">
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1">Nutrition & Food Support</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  Food items were distributed as prizes to quiz participants, combining critical baseline learning with practical resource support for vulnerable families.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-2xl bg-white">
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1">Sustainability & Dignity</h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  A total of ₦19,800 was generated through the subsidized sales model, demonstrating organic community participation while promoting true personal dignity, choice, and project longevity.
                </p>
              </div>
            </div>

            {/* Implementation Framework Note */}
            <div className="p-4 rounded-xl bg-brand-50/60 border border-brand-100 flex gap-3 items-start mb-8 text-slate-700">
              <Users className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                The outreach was safely implemented by <strong>22 volunteers and staff members</strong> of the Blue Gate Public Health Promotion Initiative, with close collaboration and support from local community leaders and the Nigeria Police Force.
              </p>
            </div>

            {/* Media/Documentary Callout */}
            <div className="mb-10 text-center py-6 border-y border-slate-100">
              <h3 className="text-sm font-bold text-slate-700 mb-2">Watch the Care Project 1.0 Documentary</h3>
              <a 
                href="https://web.facebook.com/share/v/1BGh7qQqdD/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-semibold text-sm shadow-soft transition-all duration-300 hover:shadow-lift"
              >
                View Video Documentary <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Appreciation Block */}
            <section className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-6">
              <h2 className="text-md font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5 text-brand-600" /> Expression of Appreciation
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                CARE Project 1.0 was made possible through the profound generosity of our donors and supporters. We gratefully acknowledge the financial contributions of <strong>Mr. Oluwaseyi Fatokunbo</strong>, <strong>Mr. Opeyemi Elujulo</strong>, and <strong>Prof. Ademola Adelekan</strong>, as well as the essential in-kind donations provided by:
              </p>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-600 font-medium mb-4 list-none pl-0">
                <li className="bg-white px-3 py-2 border border-slate-200 rounded">• Dr. Akintayo Ogunwale</li>
                <li className="bg-white px-3 py-2 border border-slate-200 rounded">• Mr. Awolola Joshua</li>
                <li className="bg-white px-3 py-2 border border-slate-200 rounded">• Ms. Mary Ayantoyinbo</li>
                <li className="bg-white px-3 py-2 border border-slate-200 rounded">• Ms. Ibrahim Mutmainah</li>
                <li className="bg-white px-3 py-2 border border-slate-200 rounded">• Prof. Ademola Adelekan</li>
                <li className="bg-white px-3 py-2 border border-slate-200 rounded">• Ms. Tunrayo Adetona</li>
              </ul>

              <p className="text-slate-600 text-xs leading-relaxed italic border-t border-slate-200 pt-3">
                Your generosity helped provide healthcare, essential medicines, food support, and affordable access to clothing and household items for vulnerable families in Alagbafo Community. Thank you for helping us launch the CARE Project and make a lasting impact.
              </p>
            </section>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}