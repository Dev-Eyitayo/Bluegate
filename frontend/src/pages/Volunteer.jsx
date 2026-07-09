import React from "react";
import PageHeader from "../components/PageHeader";
import { Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Volunteer() {
  return (
    <div className="min-h-screen text-slate-800">
      {/* Page Header */}
      <section className="py-14 px-4 max-w-5xl mx-auto">
        <PageHeader
          eyebrow="Get involved"
          title="Volunteer with Blue Gate Initiative"
          subtitle="Volunteer and change lives, learn new skills and make new friends!"
        />

        {/* Intro */}
        <div className="space-y-8 text-slate-600 leading-relaxed">
          {/* Introduction */}
          <p>
            Are you a professional looking for skills-based volunteering? A student looking for valuable experience and references?
            A compassionate individual who wants to be involved in helping a small community?
            We are wholly dependent on our sponsors and volunteers and their generous support.
            We are looking for individual sponsors who can contribute to our projects and development on an ongoing or temporary basis.
          </p>

          {/* Opportunities */}
          <div>
            <h2 className="font-display text-lg font-bold mb-3 text-slate-900">
              We may be small, but our opportunities are big!
            </h2>
            <p className="mb-4">
              Volunteers are the unsung heroes, and we applaud anyone who is willing to give up their time to make a difference in people's lives.
              We are committed to aiding development here at Blue Gate Initiative — whether for societal development or for a committed volunteer wanting to learn new skills.
              We are on the lookout for volunteers and have a number of different ways you can contribute and help us make change happen.
              Take a read through the options below to find out more about our volunteering programmes and how to apply!
            </p>
            <p>
              We have many roles on offer for willing volunteers, so why not join one of our small teams at our office?
              We&rsquo;re a friendly bunch and are keen to help you get the most out of your experience as possible.
              Volunteering with us will allow you to see how an NGO runs, as well as getting vital experience of working in a busy office in a wide variety of areas:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {[
                "Video editing",
                "Camera operation",
                "Graphic design",
                "Moderation of interviews",
                "Campaign planning and implementation",
                "Vocational training",
                "Legal/human rights services",
                "Community and medical outreach",
                "Social media campaign and marketing",
              ].map((role) => (
                <li
                  key={role}
                  className="rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-800 ring-1 ring-inset ring-brand-100"
                >
                  {role}
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p>
              Do you want to put your skills to use on life-changing projects? Why not join our volunteering teams to see our projects with your own eyes?
              We always need skilled volunteers on hand to assist on our projects, so if you are a professional in your field, we need you!
            </p>
            <p>
              If you are qualified for any of our strategic/thematic areas or think you have the skills to help us in any other way, please don&rsquo;t hesitate to get in contact with us.
              Apply today for a volunteering experience which you will remember for the rest of your life!
            </p>
            <p className="mt-3 font-medium text-slate-700 flex items-center gap-2 flex-wrap">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-50 ring-1 ring-inset ring-brand-100 text-brand-600 flex-shrink-0">
                <Mail className="w-4 h-4" />
              </span>
              Send us your resume:{" "}
              <a
                href="mailto:bluegatephpl@gmail.com"
                className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-2 hover:text-brand-800 transition-colors"
              >
                bluegatephpl@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Volunteer Form CTA */}
        <div className="mt-14 text-center rounded-2xl bg-brand-950 text-white px-6 py-10 relative overflow-hidden">
          <div
            className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-600/30 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <h3 className="font-display text-xl font-bold mb-2">
              Ready to make a difference?
            </h3>
            <p className="text-brand-100/90 mb-6">
              Click the button below to fill the Volunteer form
            </p>
            <Link
              to="/volunteer-form"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-brand-900 transition-all duration-300 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Volunteer Form
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}