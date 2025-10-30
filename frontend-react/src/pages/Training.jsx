import React from "react";
import { Link } from "react-router-dom";

export default function ResearchAcademy() {
  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      {/* Page Title */}
      <section className="py-8 px-2 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-sky-800 text-center mb-2">
          Research Academy
        </h1>
        <p className="text-center text-lg text-sky-700 font-medium max-w-4xl mx-auto">
          Hands-on training and mentorship for young investigators in public health research
        </p>
      </section>

      {/* Intro + Images */}
      <section className="px-2 max-w-6xl mx-auto py-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="md:w-1/2 space-y-5">
            <p className="text-gray-700 leading-relaxed">
              We are dedicated to building the capacity of your staff, volunteers, and organization to undertake program improvement work. Blue Gate Initiative works in collaboration with your team to support program improvement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We bring expert advice, technical expertise, and innovative solutions to every project. Our tried-and-tested project management methodology helps keep your project on track.
            </p>

            <h3 className="text-lg font-bold text-sky-700">Training & Consultation Topics:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Proposal writing</li>
              <li>Program development</li>
              <li>Program monitoring and evaluation</li>
              <li>Research methodology</li>
              <li>Performance measurement systems</li>
              <li>Quality improvement</li>
              <li>Qualitative and Quantitative methodology including analysis</li>
              <li>Manuscript development and publication in peer-reviewed journals</li>
            </ul>

            <img
              src="/img/training.jpg"
              alt="Research Training Session"
              className="w-full h-auto rounded-lg shadow-md object-cover mt-6"
            />
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            <img
              src="/img/research1.jpg"
              alt="Research Academy Workshop"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Training Details */}
      <section className="px-2 max-w-5xl mx-auto py-10 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-sky-700 text-center mb-8">
          Research Capacity Building Training
        </h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Blue Gate Initiative is committed to supporting investigators early in their research careers through mentorship and professional development. The training gives young investigators the opportunity to work one-on-one with experienced researchers for the planning, implementation, and dissemination of research. <strong>This training runs at least twice a year.</strong>
        </p>

        {/* Areas of Specialization */}
        <h3 className="text-xl font-bold text-sky-700 mb-4">Areas of Specialization</h3>
        <ol className="space-y-5 text-gray-700 mb-8 list-decimal list-inside">
          <li>
            <strong>Scientific Proposal and Grant Writing:</strong> Proposal Elements, Reference Management, Work Plan Development, Budget Writing
          </li>
          <li>
            <strong>Data Collection, Management & Analysis:</strong> Instruments Development, Quantitative Data Coding and Entry, Electronic Data Collection Technique, Qualitative Data Transcription and Surface Reading, Qualitative and Quantitative Data Analysis
          </li>
          <li>
            <strong>Research/Project Dissemination:</strong> Writing of Scholarly Articles, Abstract Writing for International Conferences and Publication in Peer-Reviewed Journals
          </li>
          <li>
            <strong>Field-Based Monitoring and Evaluation:</strong> M&E Plan, Indicators, Data Collection, Management & Analysis, M&E Reporting
          </li>
        </ol>

        {/* Target Participants */}
        <h3 className="text-xl font-bold text-sky-700 mb-3">Target Participants</h3>
        <p className="text-gray-700 mb-8">
          Young investigators and postgraduate students in Public Health, Nursing, Clinical Sciences, Social Sciences, Environmental Management, Education, and any other related field.
        </p>

        {/* Training Fee */}
        <div className="bg-amber-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-amber-700 mb-3">Training Fee</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Scientific Proposal and Grant Writing:</strong> ₦150,000</li>
            <li><strong>Data Collection, Management & Analysis:</strong> ₦120,000</li>
            <li><strong>Research/Project Dissemination:</strong> ₦60,000</li>
            <li><strong>Field-Based Monitoring and Evaluation:</strong> ₦200,000</li>
          </ul>
        </div>

        {/* Venue */}
        <div className="bg-sky-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-sky-700 mb-2">Venue</h3>
          <p className="text-gray-700">
            Blue Gate Office, 64, Adeyi Avenue, Off Awolowo Road, Old Bodija, Ibadan, Nigeria
          </p>
        </div>

        {/* Registration Procedures */}
        <h2 className="text-2xl font-bold text-sky-700 mb-5">Registration Procedures</h2>
        <ol className="space-y-6 text-gray-700 mb-8">
          <li>
            <strong>Make Payment:</strong> Deposit or transfer into the account below:
            <ul className="ml-8 mt-2 space-y-1 list-disc">
              <li><strong>Account Name:</strong> Blue Gate Public Health Promotion Initiative</li>
              <li><strong>Account Number:</strong> 0122-6530-54</li>
              <li><strong>Bank:</strong> WEMA Bank PLC</li>
            </ul>
          </li>
          <li>
            Complete the online registration form at:{" "}
            <a
              href="https://bluegateinitiative.org/trainingForm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 underline hover:text-sky-800"
            >
              https://bluegateinitiative.org/trainingForm
            </a>
            <br />
            <em className="text-sm text-gray-600">
              You will be required to upload proof of payment.
            </em>
          </li>
        </ol>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <Link
            to="/training-form"
            // target="_blank"
            // rel="noopener noreferrer"
            className="inline-block bg-sky-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-sky-700 transition shadow-md text-lg"
          >
            Fill Training Form Now
          </Link>
        </div>

        {/* Contact Info */}
        <div className="text-center text-gray-700 mb-8">
          <p>
            For inquiries: <br />
            <a href="mailto:training@bluegateinitiative.org" className="text-sky-600 underline">
              training@bluegateinitiative.org
            </a>{" "}
            | Call: <strong>0806-590-3150</strong>
          </p>
        </div>

        {/* Notes */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-sky-700 mb-3">Important Notes:</h3>
          <ol className="space-y-2 text-gray-700 list-decimal list-inside">
            <li>This is a full-time training program. Part-time training is available on request.</li>
            <li><strong>Only 10 candidates</strong> will be admitted per session.</li>
          </ol>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-16"></div>
    </div>
  );
}