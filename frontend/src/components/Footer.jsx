import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/health-promotion', label: 'Health Promotion' },
  { to: '/health-communication', label: 'SBCC' },
  { to: '/empowerment', label: 'Empowerment' },
  { to: '/human-rights', label: 'Human Rights' },
  { to: '/outreach', label: 'Outreach Posts' },
  { to: '/contact-us', label: 'Contact Us' },
];

const socialLinks = [
  { href: 'https://web.facebook.com/BlueGateInitiative', label: 'Facebook', icon: Facebook },
  { href: 'https://x.com/BlueInitiative', label: 'Twitter', icon: Twitter },
  { href: 'https://instagram.com/BlueGateInitiative', label: 'Instagram', icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white mt-12">
      {/* Brand accent line */}
      <div className="h-1 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-brand-200 mb-4">
            Our Contact
          </h4>
          <ul className="text-sm text-brand-100/80 space-y-2.5">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-400" />
              <span className="leading-relaxed">
                64, Blue Gate House,<br />
                Adeyi Avenue, Old Bodija,<br />
                Ibadan, Nigeria.
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 flex-shrink-0 text-brand-400" />
              <a href="tel:+2348065903150" className="hover:text-white transition-colors">+234-806-590-3150</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 flex-shrink-0 text-brand-400" />
              <a href="tel:+2348051659422" className="hover:text-white transition-colors">+234-805-165-9422</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 flex-shrink-0 text-brand-400" />
              <a href="mailto:info@bluegateinitiative.org" className="hover:text-white transition-colors break-all">
                info@bluegateinitiative.org
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-brand-200 mb-4">
            Quick Links
          </h4>
          <ul className="text-sm text-brand-100/80 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="inline-block hover:text-white hover:translate-x-0.5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-brand-200 mb-4">
            Follow Us
          </h4>
          <ul className="text-sm text-brand-100/80 space-y-2.5">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 text-brand-300 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-500">
                    <Icon className="w-4 h-4" />
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 text-center text-sm text-brand-100/60">
          &copy; {new Date().getFullYear()} Blue Gate Initiative. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
