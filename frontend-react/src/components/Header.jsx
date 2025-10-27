import React, { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [progOpen, setProgOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function onDoc(e) {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
      // Close programmes dropdown when clicking outside
      if (progOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setProgOpen(false)
      }
    }
    window.addEventListener('click', onDoc)
    return () => window.removeEventListener('click', onDoc)
  }, [open, progOpen])

  return (
    <header className="bg-white">
      <div className="bg-sky-800 text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          <div>Emergency No: <strong>+234-806-590-3150</strong></div>
          <div>Support: <a className="underline" href="mailto:info@bluegateinitiative.org">info@bluegateinitiative.org</a></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/bluegate-logo.jpg" alt="logo" className="w-11 h-11 rounded-md object-cover" />
          <div>
            <div className="font-extrabold text-sky-800">Blue Gate Initiative</div>
            <div className="text-xs text-slate-500">Public Health Promotion</div>
          </div>
        </div>

        {/* Desktop nav with dropdown on Programmes */}
        <nav className="hidden md:flex gap-6 items-center text-slate-600 font-semibold relative">
          <a href="#">Home</a>
          <a href="#about">About</a>

          <div className="relative" onMouseEnter={() => setProgOpen(true)} onMouseLeave={() => setProgOpen(false)}>
            <button aria-haspopup="true" aria-expanded={progOpen} className="flex items-center gap-2">
              Programmes
              <svg className="w-3 h-3 text-slate-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
              </svg>
            </button>

            {progOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white rounded-xl shadow-lg p-2 text-slate-700 z-20">
                <a href="#" className="block px-3 py-2 hover:bg-slate-50 rounded">Item 1</a>
                <a href="#" className="block px-3 py-2 hover:bg-slate-50 rounded">Item 2</a>
                <a href="#" className="block px-3 py-2 hover:bg-slate-50 rounded">Item 3</a>
              </div>
            )}
          </div>

          <a href="#volunteer">Volunteer</a>
          <a className="bg-sky-600 text-white px-4 py-2 rounded-md font-bold" href="#donate">Donate</a>
        </nav>

        {/* Mobile hamburger + menu */}
        <div className="md:hidden relative" ref={menuRef}>
          <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" className={`w-10 h-10 flex flex-col justify-center items-center gap-1 ${open ? 'text-sky-700' : 'text-slate-700'}`}>
            <span className={`block w-6 h-0.5 bg-slate-700 transform ${open ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-slate-700 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-slate-700 transform ${open ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-60 bg-white rounded-xl shadow-lg p-4 flex flex-col gap-3 z-30">
              <a href="#">Home</a>
              <a href="#about">About</a>

              {/* Programmes as expandable item on mobile */}
              <div>
                <button onClick={(e) => { e.stopPropagation(); setProgOpen(p => !p); }} aria-expanded={progOpen} className="w-full text-left flex justify-between items-center">
                  <span>Programmes</span>
                  <svg className={`w-4 h-4 transition-transform ${progOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                  </svg>
                </button>

                {progOpen && (
                  <div className="mt-2 ml-2 border-l border-slate-100 pl-3 flex flex-col gap-1">
                    <a href="#" className="py-1">Item 1</a>
                    <a href="#" className="py-1">Item 2</a>
                    <a href="#" className="py-1">Item 3</a>
                  </div>
                )}
              </div>

              <a href="#volunteer">Volunteer</a>
              <a href="#donate" className="bg-sky-600 text-white px-3 py-2 rounded-md text-center">Donate</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
