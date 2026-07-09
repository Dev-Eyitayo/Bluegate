import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroCarousel from "../components/HeroCarousel";
import Cards from "../components/Cards";
import ProgramsAndEvents from "../components/ProgramsAndEvents";

export default function Home() {
  return (
    <>
      <section className="mt-6">
        <div className="px-6 py-12 md:py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-inset ring-brand-100">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            Serving communities since 2010
          </span>

          <h1 className="mt-6 font-display text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Welcome to <span className="text-brand-700">Blue Gate Initiative</span>
          </h1>

          <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto">
            Blue Gate Public Health Promotion Initiative (Blue-Gate Initiative)
            is a Non-Governmental Organization inaugurated in 2010 and
            incorporated in 2016. We are committed to improving community health
            awareness and outcomes across Nigeria.
          </p>

          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-3 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-brand-700 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            Read More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="mt-4">
        <HeroCarousel />
      </section>

      <section className="mt-8 mb-16">
        <Cards />
      </section>

      <section className="mt-8">
        <ProgramsAndEvents />
      </section>
    </>
  );
}
