import React from "react";
import SectionHeader from "../components/SectionHeader";
import { HandHeart, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Volunteer() {
  return (
    <div className="min-h-screen bg-sky-200/10 text-gray-800">
      {/* Page Header */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <SectionHeader icon={HandHeart} title="Volunteer with Blue Gate Initiative" />
        
        {/* Intro */}
        <div className="space-y-6 text-slate-700 leading-relaxed">
          {/* Introduction */}
          <div>
            <h2 className="text-medium font-semibold mb-2 text-slate-800">
              Volunteer and Change Lives, Learn New Skills and Make New Friends!
            </h2>
            <p>
              Are you a professional looking for skills-based volunteering? A student looking for valuable experience and references? 
              A compassionate individual who wants to be involved in helping a small community? 
              We are wholly dependent on our sponsors and volunteers and their generous support. 
              We are looking for individual sponsors who can contribute to our projects and development on an ongoing or temporary basis.
            </p>
          </div>

          {/* Opportunities */}
          <div>
            <h2 className="text-medium font-semibold mb-2 text-slate-800">
              We may be small, but our opportunities are big!
            </h2>
            <p>
              Volunteers are the unsung heroes, and we applaud anyone who is willing to give up their time to make a difference in people's lives. 
              We are committed to aiding development here at Blue Gate Initiative — whether for societal development or for a committed volunteer wanting to learn new skills. 
              We are on the lookout for volunteers and have a number of different ways you can contribute and help us make change happen. 
              Take a read through the options below to find out more about our volunteering programmes and how to apply!
            </p>
            <p>
              We have many roles on offer for willing volunteers, so why not join one of our small teams at our office? 
              We’re a friendly bunch and are keen to help you get the most out of your experience as possible. 
              Volunteering with us will allow you to see how an NGO runs, as well as getting vital experience of working in a busy office in a wide variety of areas:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              <li>Video editing</li>
              <li>Camera operation</li>
              <li>Graphic design</li>
              <li>Moderation of interviews</li>
              <li>Campaign planning and implementation</li>
              <li>Vocational training</li>
              <li>Legal/human rights services</li>
              <li>Community and medical outreach</li>
              <li>Social media campaign and marketing</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <p>
              Do you want to put your skills to use on life-changing projects? Why not join our volunteering teams to see our projects with your own eyes? 
              We always need skilled volunteers on hand to assist on our projects, so if you are a professional in your field, we need you! 
            </p>
            <p>
              If you are qualified for any of our strategic/thematic areas or think you have the skills to help us in any other way, please don’t hesitate to get in contact with us. 
              Apply today for a volunteering experience which you will remember for the rest of your life!
            </p>
            <p className="mt-3 font-medium text-sky-700 flex items-center gap-2">
              <Mail className="w-5 h-5 text-sky-700" />
              Send us your resume:{" "}
              <a
                href="mailto:bluegatephpl@gmail.com"
                className="underline hover:text-sky-800"
              >
                bluegatephpl@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Volunteer Form CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-md font-medium text-slate-700 mb-4">
            Click the button below to fill the Volunteer form
          </h3>
          <Link
            to="/volunteer-form"
            className="inline-block bg-sky-700 hover:bg-sky-800 text-white font-medium rounded-lg shadow-sm px-6 py-3 transition-colors"
          >
            Volunteer Form
          </Link>
        </div>
      </section>
    </div>
  );
}
