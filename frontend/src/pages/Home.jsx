import React from "react";
import {Link} from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import Cards from "../components/Cards";
import ProgramsAndEvents from "../components/ProgramsAndEvents";

export default function Home() {
  return (
    <>
      <section className="mt-6">
        <div className="p-10 text-center">
          <h1 className="text-3xl font-extrabold text-sky-800">
            Welcome to Blue Gate Initiative
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Blue Gate Public Health Promotion Initiative (Blue-Gate Initiative)
            is a Non-Governmental Organization inaugurated in 2010 and
            incorporated in 2016. We are committed to improving community health
            awareness and outcomes across Nigeria.
          </p>
          <Link
            to="/about"
            className="inline-block mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg"
          >
            Read More
          </Link>
        </div>
      </section>

      <section className="mt-8">
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
