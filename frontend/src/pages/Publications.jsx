import React from "react";
import { Download } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Publications() {
  // Static list of publications (replace paths with actual PDFs in /public or CDN)
  const publications = [
    {
      title: "Factors Associated with Utilization of Antenatal Care Services among Women of Child Bearing in Osogbo, Nigeria",
      journal: "International Journal of Research and Reports in Gynaecology 3(1): 32-42, 2020",
      authors: "Christiana A. Oluwamotemi, Elizabeth E. Edoni, Chidinma E. Ukoha, Ademola L. Adelekan",
      pdf: "/pdfs/ANC.pdf",
    },
    {
      title: "COMPARATIVE ASSESSMENT OF WATER AND SANITATION PRACTICES IN CHOLERA AFFECTED AND NON-CHOLERA AFFECTED COMMUNITIES IN 2011 OUTBREAK IN IBADAN, NIGERIA",
      journal: "European Journal of Biomedical AND Pharmaceutical sciences, Volume: 4 Issue: 10 69-83 Year: 2017",
      authors: "Philomena Omoregie, Oladimeji Oladepo, Ademola Adelekan",
      pdf: "/pdfs/Cholera.pdf",
    },
    {
      title: "Knowledge and Factors Associated with Treatment Compliance among Diabetes Mellitus Patients in Selected Hospitals in Ibadan, Oyo State, Nigeria",
      journal: "Journal of Advances in Medicine and Medical Research 23(7): 1-8, 2017",
      authors: "Funmilola I. Oyelami, Fredrick Oshiname, Christy Ekerete-Udofia, Ademola L. Adelekan",
      pdf: "/pdfs/Diabetes.pdf",
    },
    {
      title: "Attitudinal Disposition and Management Perception among Diabetes Mellitus Patients in Selected Hospitals in Ibadan, Oyo State, Nigeria",
      journal: "International Journal of TROPICAL DISEASE & Health 38(3): 1-10, 2019",
      authors: "Funmilola Oyelami, Chidinma Emma Ukoha, Oluwatomi Olunuga, Ademola Adelekan",
      pdf: "/pdfs/DiabetesMellitus.pdf",
    },
    {
      title: "Sexual Practices of Female Sex Workers in Ibadan, Nigeria",
      journal: "International STD Research & Reviews 6(2): 1-10, 2017",
      authors: "Ademola L. Adelekan, Opeyemi A. Adeosun, Fakunle G. Adekunle, Oluwatomi D. Olunuga, Funmilola I. Oyelami, Christy Ekerete-Udofia",
      pdf: "/pdfs/FSWsexual.pdf",
    },
    {
      title: "Barriers to Effective HIV Testing Services and Strategies for Its Promotion at the Primary Health Care Facilities in Ibadan, Nigeria",
      journal: "International STD Research & Reviews 9(2): 24-32, 2020",
      authors: "Christiana A. Oluwamotemi, Funmilayo A. Okanlawon, Elizabeth R. Edoni, Ademola L. Adelekan",
      pdf: "/pdfs/HIVTesting.pdf",
    },
    {
      title: "Increasing HIV Prevention Among People Who Inject Drugs In Nigeria: A Systematic Review Of HAF II Project",
      journal: "International Journal of Advanced Research and Publications",
      authors: "Emmanuel O. Alhassan, Olunuga Oluwatomi, Ademola Adelekan, Olukemi Ladeinde, Chidiebere P. Ezeokafor, John Idoko, Daniel Kajang, Enias Baganizi",
      pdf: "/pdfs/People.pdf",
    },
    {
      title: "STATUS OF HIV TESTING SERVICES AND COMPETENCY LEVEL OF HIV TESTERS AND COUNSELORS IN PRIMARY HEALTH CARE CENTERS IN IBADAN METROPOLIS, OYO-STATE, NIGERIA",
      journal: "European Journal of Biomedical AND Pharmaceutical sciences, Volume: 7 Issue: 2 525-535 Year: 2020",
      authors: "Christiana Adeyoola Oluwamotemi, F. A. Okanlawon, Ademola Adelekan, Oluwatomi Olunuga",
      pdf: "/pdfs/PHC.pdf",
    },
    {
      title: "Achievements and Implications of HIV Prevention Programme among Female Sex Workers: A Systematic Evaluation of HAF II Project in Kogi State, Nigeria",
      journal: "American Journal of Research Communication, 2017, 5(2): 37-48",
      authors: "Ademola L. Adelekan, Gabriel Musa, Alabi Roseline, Onoja Johnson, Kabir Atta, Shaibu Moses, Williams Shaibu, Patrick Adah, Michael A. Owojuyigbe, Oladipupo S. Olaleye, Olusegun Adeoye, Michael Olugbile, Adebola A. Adejimi, Aliyu Sani, Emmanuel Alhassan, Tobias John, Oluwakemi Ladeinde",
      pdf: "/pdfs/FSW.pdf",
    },
    {
      title: "Achievements and Implications of HIV Prevention Programme among In-School Youths: A Systematic Evaluation of HAF II Project in Kogi State, Nigeria",
      journal: "IOSR Journal Of Humanities And Social Science, Volume 22, Issue 1, Ver. 3 (January 2017) PP 122-128",
      authors: "Ademola L. Adelekan, Gabriel Musa, Agada Gloria, Matthias Okpanachi, Ogundipe Love, Onoja Johnson, Williams Shaibu, Patrick Adah, Adetunji Adetayo, Oladipupo S. Olaleye, Segun Adeoye, Michael Olugbile, Philomena Omoregie, Aliyu Sani, Emmanuel Alhassan, Tobias John, Oluwakemi Ladeinde",
      pdf: "/pdfs/ISY.pdf",
    },
    {
      title: "Socio-environmental Factors as Determinants of Social Well-being of Adolescents in Foster Homes in Southwestern Nigeria",
      journal: "International Journal of TROPICAL DISEASE & Health",
      authors: "Christiana A. Oluwamotemi, Bolatito T. Olonisakin and Ademola L. Adelekan ",
      pdf: "/pdfs/SEFDS.pdf",
    },
    {
      title: "Occurrence of Heavy Metal and Antibiotic Resistant Bacteria in Soils from Selected Mechanic Workshops in Ibadan Metropolis, Nigeria",
      journal: "Journal of Scientific Research & Reports",
      authors: "Omotayo Sindiku, Omolola Oluboyede, Victor Oripenaye, Felicia Adesina and Ademola Adelekan",
      pdf: "/pdfs/OHMA.pdf",
    },
    {
      title: "Determinants of Knowledge and Acceptance of Childhood Routine Immunisation among Community Members and Mothers of Under-Two Children in Ibadan, Nigeria ",
      journal: "International Journal of Innovative Science and Research Technology",
      authors: "Christiana Adeyoola Oluwamotemi; Bolatito Toyin Olonisakin; Adeyemi ldowu Akinboade; Yemisi Abidemi Fatokunbo; Ademola Lukman Adelekan",
      pdf: "/pdfs/DKACR.pdf",
    },
    {
      title: "Factors Associated with Utilization of Antenatal Care Services among Women of Child Bearing in Osogbo, Nigeria",
      journal: "International Journal of Research and Reports in Gynaecology",
      authors: "Christiana A. Oluwamotemi, Elizabeth E. Edoni, Chidinma E. Ukoha and Ademola L. Adelekan",
      pdf: "/pdfs/FAUA.pdf",
    },
    {
      title: "STATUS OF HIV TESTING SERVICES AND COMPETENCY LEVEL OF HIV TESTERS AND COUNSELORS IN PRIMARY HEALTH CARE CENTERS IN IBADAN METROPOLIS, OYO-STATE, NIGERIA",
      journal: "European Journal of Biomedical AND Pharmaceutical sciences ",
      authors: "Christiana Adeyoola Oluwamotemi, F. A. Okanlawon, Ademola Adelekan, Oluwatomi Olunuga",
      pdf: "/pdfs/SHTS.pdf",
    },
    {
      title: "COMPARATIVE ASSESSMENT OF WATER AND SANITATION PRACTICES IN CHOLERA AFFECTED AND NON-CHOLERA AFFECTED COMMUNITIES IN 2011 OUTBREAK IN IBADAN, NIGERIA",
      journal: "European Journal of Biomedical AND Pharmaceutical sciences ",
      authors: "Philomena Omoregie, Oladimeji Oladepo and Ademola Adelekan",
      pdf: "/pdfs/CAWS.pdf",
    },
    
  ];

  return (
    <div className="min-h-screen text-slate-800">
      {/* Page Title */}
      <section className="py-14 px-2 max-w-7xl mx-auto">
        <PageHeader
          eyebrow="Resources"
          title="Publications"
          subtitle="Download our peer-reviewed research and project evaluations"
        />
      </section>

      {/* Publications Grid */}
      <section className="px-4 max-w-7xl mx-auto pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.pdf}
              target="_blank"
              rel="noopener noreferrer"
              title="Download PDF"
              className="group bg-white border border-slate-200 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft p-6 flex flex-col h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              {/* PDF badge + download */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-inset ring-rose-100">
                  PDF
                </span>
                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-50 ring-1 ring-inset ring-brand-100 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                  <Download className="w-4 h-4" />
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-slate-900 leading-snug mb-2 group-hover:text-brand-700 transition-colors">
                {pub.title}
              </h3>

              {/* Journal */}
              <p className="text-xs italic text-slate-500 mb-2 leading-relaxed">
                {pub.journal}
              </p>

              {/* Authors */}
              <p className="text-xs text-slate-600 flex-grow leading-relaxed">
                {pub.authors}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Optional: Add note about more publications */}
      <section className="px-2 max-w-4xl mx-auto py-10 text-center">
        <p className="text-sm text-slate-600 rounded-2xl bg-brand-50/70 ring-1 ring-inset ring-brand-100 px-6 py-4 inline-block">
          More publications available upon request. Contact us at{" "}
          <a
            href="mailto:info@bluegateinitiative.org"
            className="font-medium text-brand-700 underline decoration-brand-300 underline-offset-2 hover:text-brand-800 transition-colors"
          >
            info@bluegateinitiative.org
          </a>
        </p>
      </section>
    </div>
  );
}