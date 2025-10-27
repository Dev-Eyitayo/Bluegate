import React from 'react';

export default function Cards() {
  const items = [
    {
      title: 'Our Vision',
      body: 'To positively influence the health behaviour of individuals and communities through sustainable, evidence-based interventions.',
    },
    {
      title: 'Our Mission',
      body: 'Deliver community-centered health promotion programs, capacity building, and advocacy to improve health outcomes.',
    },
    {
      title: 'Get Involved',
      body: 'Volunteer, partner, or donate to support programmes that create real impact for vulnerable groups.',
    },
    {
      title: 'Our Approach to Health',
      body: 'Blue-Gate Initiative takes a broad approach to health as being a "state of complete physical, mental and social well-being". In our view, public health is not just the responsibility of the health sector, but encompasses all sectors who work to enhance the fundamental prerequisites for health-equity, shelter, education, food, and income. Our approaches to health include Advocacy, Health education, Psychosocial support, Empowerment and capacity building, Rights to health, Creation of supportive environment, Social mobilization, Immunisation/Vaccination support, Policy development, Environmental management, and Research.',
    },
  ];

  return (
    <section id="programs" className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`bg-white p-6 rounded-xl shadow-sm hover:translate-y-1 transition-transform ${
            index === 3 ? 'md:col-span-3' : '' 
          }`}
        >
          <h3 className="text-sky-800 font-extrabold mb-2 text-lg">{item.title}</h3>
          <p className="text-slate-600 text-md leading-relaxed">{item.body}</p>
        </article>
      ))}
    </section>
  );
}