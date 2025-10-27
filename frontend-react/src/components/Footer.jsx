import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-slate-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold">Blue Gate Initiative</h4>
          <address className="not-italic mt-2 text-sm text-slate-300">64, Blue Gate House, Adeyi Avenue, Old Bodija, Ibadan, Nigeria<br/>Email: <a className="underline" href="mailto:info@bluegateinitiative.org">info@bluegateinitiative.org</a></address>
        </div>
        <div>
          <h4 className="font-bold">Quick Links</h4>
          <p className="mt-2 text-slate-300"><a href="#about">About Us</a> · <a href="#programs">Programmes</a> · <a href="#volunteer">Volunteer</a></p>
        </div>
        <div>
          <h4 className="font-bold">Follow</h4>
          <p className="mt-2 text-slate-300"><a href="#">Facebook</a> · <a href="#">Twitter</a> · <a href="#">Instagram</a></p>
        </div>
      </div>
      <div className="text-center text-sm text-slate-400 pb-6">&copy; 2025 Blue Gate Initiative. All rights reserved.</div>
    </footer>
  )
}
