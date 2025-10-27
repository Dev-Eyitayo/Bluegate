import React from 'react'
import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'
import Cards from './components/Cards'
import ProgramsAndEvents from './components/ProgramsAndEvents'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ehite to-amber-50 text-slate-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4">
        <section className="mt-6">
          <div className="bg-white/60 rounded-2xl p-10 text-center shadow-sm">
            <h1 className="text-3xl font-extrabold text-sky-800">Welcome to Blue Gate Initiative</h1>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">Blue Gate Public Health Promotion Initiative (Blue-Gate Initiative) is a Non-Governmental Organization inaugurated in 2010 and incorporated in 2016. We are committed to improving community health awareness and outcomes across Nigeria.</p>
            <a href="#programs" className="inline-block mt-6 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg">Read More</a>
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
      </main>

      <Footer />
    </div>
  )
}
