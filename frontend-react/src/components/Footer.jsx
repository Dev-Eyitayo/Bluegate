import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0C1A] text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 md:flex md:justify-between">
        <div className="mb-6 md:mb-0 md:mr-8">
          <h4 className="font-bold text-lg mb-2">Our Contact</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>64, Blue Gate House,</li>
            <li>Adeyi Avenue, Old Bodija,</li>
            <li>Ibadan, Nigeria.</li>
            <li><a href="tel:+2348065903150" className="underline hover:text-sky-300 transition-colors">+234-806-590-3150</a></li>
            <li><a href="tel:+2348051659422" className="underline hover:text-sky-300 transition-colors">+234-805-165-9422</a></li>
            <li><a href="tel:+2348030676992" className="underline hover:text-sky-300 transition-colors">+234-8030-676-992</a></li>
            <li><a href="mailto:info@bluegateinitiative.org" className="underline hover:text-sky-300 transition-colors">info@bluegateinitiative.org</a></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0 md:mx-8">
          <h4 className="font-bold text-lg mb-2">Quick Links</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="#about" className="hover:text-sky-300 transition-colors">About Us</a></li>
            <li><a href="#programs" className="hover:text-sky-300 transition-colors">Programme</a></li>
            <li><a href="#health-comm" className="hover:text-sky-300 transition-colors">Health Communication</a></li>
            <li><a href="#empowerment" className="hover:text-sky-300 transition-colors">Empowerment</a></li>
            <li><a href="#human-rights" className="hover:text-sky-300 transition-colors">HUMAN RIGHTS</a></li>
            <li><a href="#un-days" className="hover:text-sky-300 transition-colors">UN Days Activities</a></li>
            <li><a href="#contact" className="hover:text-sky-300 transition-colors">Contact Us</a></li>
          </ul>
        </div>
        <div className="md:ml-8">
          <h4 className="font-bold text-lg mb-2">Follow Us</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="https://facebook.com/BlueGateInitiative" className="hover:text-sky-300 transition-colors">Facebook</a></li>
            <li><a href="https://twitter.com/BlueInitiative" className="hover:text-sky-300 transition-colors">Twitter</a></li>
            <li><a href="https://instagram.com/BlueGateInitiative" className="hover:text-sky-300 transition-colors">Instagram</a></li>
          </ul>
          {/* Placeholder for Twitter/X widget - to be replaced with actual X integration */}
          
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-800">
        &copy; 2025 Blue Gate Initiative. All rights reserved.
      </div>
    </footer>
  );
}