import React, { useEffect, useState, useRef } from 'react'

const slides = [
  { id: 1, title: 'Team at Olubadan Palace', text: 'Advocating for healthier communities through leadership and partnership.', img: '/assets/hero1.png' },
  { id: 2, title: 'Empowering Lives Through Health', text: 'Driving change with evidence-based community programs and outreach.', img: '/assets/hero2.jpg' },
  { id: 3, title: 'Better Care, Brighter Communities', text: 'We are committed to promoting public health through community engagement, advocacy, and education.', img: '/assets/hero3.jpg' }
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(timerRef.current)
  }, [])

  function show(index) {
    setCurrent((index + slides.length) % slides.length)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
  }

  return (
    <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-sm">
      {slides.map((s, i) => (
        <div key={s.id} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: `url(${s.img})` }}>
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="max-w-2xl text-white ml-6 md:ml-12">
              <h2 className="text-2xl md:text-3xl font-extrabold">{s.title}</h2>
              <p className="mt-2 text-sm md:text-base">{s.text}</p>
            </div>
          </div>
        </div>
      ))}

      <button aria-label="Prev" onClick={() => show(current - 1)} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white hidden md:flex items-center justify-center">‹</button>
      <button aria-label="Next" onClick={() => show(current + 1)} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white hidden md:flex items-center justify-center">›</button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => show(i)} className={`w-3 h-3 rounded-full ${i === current ? 'bg-sky-600 scale-110' : 'bg-white/70'}`}></button>
        ))}
      </div>
    </div>
  )
}
