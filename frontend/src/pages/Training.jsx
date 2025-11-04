import React from "react";
import { Link } from 'react-router-dom'

export default function Traning() {
  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      {/* Page Title */}
      <section className="py-8 px-2 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-sky-800 text-center mb-2">
          Research Consultancy Services
        </h1>
        <p className="text-center text-lg text-sky-700 font-medium max-w-4xl mx-auto">
          Evidence-based research, program evaluation, and capacity building for public health impact
        </p>
      </section>

      {/* Intro Row */}
      <section className="px-2 max-w-6xl mx-auto py-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-5/12">
            <p className="text-gray-700 leading-relaxed">
              Blue Gate Initiative is a leading research organization in Nigeria. Our aim is to use research to shed light on the influence of the determinants of health — genetic, environmental, social, and more. We use this evidence-based knowledge to propose interventions and policies to improve health and well-being and reduce health inequalities in Nigeria.
            </p>
          </div>  

          <div className="md:w-7/12">
            <h2 className="text-2xl font-bold text-sky-700 mb-4">Why Choose Us?</h2>
            <p className="text-gray-700 leading-relaxed">
              We are a team of public health specialists that support individuals, community-based agencies, non-profit organizations, public health units, and health institutes to deliver the most effective programs and services possible. We specialize in community services, program development, research, stakeholder consultations, evaluation, and training programs specific to public health.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Our team members have extensive professional qualifications and combine years of experience with specialized training in health promotion, population health, and right to health. We engage in ongoing professional development to ensure that we deliver community services and programs based on the most current, innovative, and evidence-based information.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="px-2 max-w-6xl mx-auto py-8">
        <h2 className="text-2xl font-bold text-sky-700 text-center mb-6">Our Capabilities</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Capability 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-sky-700 text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-sky-700">Proposal and Program Development</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Grant proposal writing</li>
              <li>Assessment of individual and community health needs</li>
              <li>Policy development</li>
              <li>Research planning and implementation</li>
              <li>Stakeholder engagement</li>
              <li>Plan, coordinate and implement health promotion programs</li>
              <li>Advocate for health-related issues</li>
            </ul>
          </div>

          {/* Capability 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-sky-700 text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-sky-700">Program Monitoring and Evaluation</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Monitoring of health programs</li>
              <li>Indicators' development</li>
              <li>Development of instruments for data collection</li>
              <li>Data entry/transcription, analysis & interpretation</li>
              <li>Development of actionable recommendations</li>
            </ul>
          </div>

          {/* Capability 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-sky-700 text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-sky-700">Program Dissemination</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Develop social marketing and mass media campaigns</li>
              <li>Develop audio, visual, print and electronic materials</li>
              <li>Write scholarly articles and publication</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Image Gallery + CTA */}
      <section className="px-2 max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src="/assets/research-consultancy.jpg"
              alt="Research and Consultancy Outreach"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="flex items-center justify-center bg-gray-50 rounded-lg shadow-md p-6">
            <Link
              to="/training-programs"
              className="text-center"
            >
              <img
                src="/assets/researchConsultancy2.jpg"
                alt="Training Programs"
                className="w-full max-w-xs mx-auto rounded-lg shadow hover:shadow-lg transition-shadow"
              />
              <h3 className="mt-4 text-xl font-bold text-sky-700 hover:text-sky-800 transition">
                Click here for Training Programs
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="px-2 max-w-4xl mx-auto py-6 text-center">
        <p className="text-sm text-gray-600">
          We run a <strong>Research Academy</strong> to build capacity for young investigators. We also partner with organizations in data collection, analysis, and peer-reviewed publication.
        </p>
      </section>
    </div>
  );
}