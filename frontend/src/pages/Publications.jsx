import React from "react";

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
    
  ];

  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      {/* Page Title */}
      <section className="py-8 px-2 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-sky-800 text-center mb-2">
          Publications
        </h1>
        <p className="text-center text-lg text-sky-700 font-medium">
          Download our peer-reviewed research and project evaluations
        </p>
      </section>

      {/* Publications Grid */}
      <section className="px-2 max-w-7xl mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white rounded-lg hover:shadow-sm transition-shadow duration-300 p-5 flex flex-col h-full"
            >
              {/* PDF Icon + Download */}
              <div className="flex justify-end mb-3">
                <a
                  href={pub.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 transition"
                  title="Download PDF"
                >
                  <img
                    src="/assets/pdf.png"
                    alt="PDF"
                    className="w-12 h-12"
                  />
                </a>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-sky-700 leading-tight mb-2">
                {pub.title}
              </h3>

              {/* Journal */}
              <p className="text-xs italic text-gray-600 mb-2">
                {pub.journal}
              </p>

              {/* Authors */}
              <p className="text-xs text-gray-700 flex-grow">
                {pub.authors}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Optional: Add note about more publications */}
      <section className="px-2 max-w-4xl mx-auto py-8 text-center">
        <p className="text-sm text-gray-600">
          More publications available upon request. Contact us at{" "}
          <a href="mailto:info@bluegateinitiative.org" className="text-sky-600 underline">
            info@bluegateinitiative.org
          </a>
        </p>
      </section>
    </div>
  );
}