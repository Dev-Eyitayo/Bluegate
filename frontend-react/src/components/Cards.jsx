import React from 'react'

export default function Cards() {
  const items = [
    { title: 'Our Vision', body: 'To positively influence the health behaviour of individuals and communities through sustainable, evidence-based interventions.' },
    { title: 'Our Mission', body: 'Deliver community-centered health promotion programs, capacity building, and advocacy to improve health outcomes.' },
    { title: 'Get Involved', body: 'Volunteer, partner, or donate to support programmes that create real impact for vulnerable groups.' }
  ]

  return (
    <section id="programs" className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((it) => (
        <article key={it.title} className="bg-white p-6 rounded-xl shadow-sm hover:translate-y-1 transition-transform">
          <h3 className="text-sky-800 font-extrabold mb-2">{it.title}</h3>
          <p className="text-slate-600">{it.body}</p>
        </article>
      ))}
    </section>
  )
}
