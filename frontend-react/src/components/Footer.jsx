import React from 'react';
import { Link } from 'react-router-dom';

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
            <li><Link to="/about" className="hover:text-sky-300 transition-colors">About Us</Link></li>
            <li><Link to="/health-promotion" className="hover:text-sky-300 transition-colors">Programme</Link></li>
            <li><Link to="/health-communication" className="hover:text-sky-300 transition-colors">Health Communication</Link></li>
            <li><Link to="/empowerment" className="hover:text-sky-300 transition-colors">Empowerment</Link></li>
            <li><Link to="/human-rights" className="hover:text-sky-300 transition-colors">Human Rights</Link></li>
            <li><Link to="/un-days" className="hover:text-sky-300 transition-colors">UN Days Activities</Link></li>
            <li><Link to="/contact-us" className="hover:text-sky-300 transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div className="md:ml-8">
          <h4 className="font-bold text-lg mb-2">Follow Us</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="https://web.facebook.com/BlueGateInitiative" className="hover:text-sky-300 transition-colors">Facebook</a></li>
            <li><a href="https://x.com/BlueInitiative" className="hover:text-sky-300 transition-colors">Twitter</a></li>
            {/* <li><a href="https://instagram.com/BlueGateInitiative" className="hover:text-sky-300 transition-colors">Instagram</a></li> */}
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