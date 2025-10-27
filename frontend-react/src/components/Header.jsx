import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle outside clicks for both menus
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setIsProgramsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  // Handle Escape key for accessibility
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsProgramsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Navigation items
  const navItems = [
    { href: '#', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#healthCommunication', label: 'HEALTH COMMUNICATION' },
    {
      label: 'PROGRAMMES',
      subItems: [
        { href: '#', label: 'EMPOWERMENT' },
        { href: '#', label: 'HUMAN RIGHTS' },
        { href: '#', label: 'UN DAYS ACTIVITIES' },
      ],
    },
    { href: '#volunteer', label: 'VOLUNTEER' },
    { href: '#donate', label: 'Donate', isButton: true },
  ];

  return (
    <header className="bg-white">
      <div className="bg-sky-800 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
          <div>Emergency No: <strong>+234-806-590-3150</strong></div>
          <div>
            Support:{' '}
            <a className="underline hover:text-sky-200 transition-colors" href="mailto:info@bluegateinitiative.org">
              info@bluegateinitiative.org
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/assets/bluegate-logo.jpg"
            alt="Blue Gate Initiative logo"
            className="w-12 h-12 rounded-md object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-extrabold text-sky-800 text-lg sm:text-xl">Blue Gate Initiative</div>
            <div className="text-xs text-slate-500">Public Health Promotion</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center text-slate-600 font-semibold">
          {navItems.map((item, index) =>
            item.subItems ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={isProgramsOpen}
                  className="flex items-center gap-2 hover:text-sky-700 transition-colors"
                >
                  {item.label}
                  <svg
                    className="w-3 h-3 text-slate-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isProgramsOpen && (
                  <div
                    className="absolute left-0 mt-3 text-md w-48 bg-white shadow-md p-3 border border-slate-100 z-20"
                    role="menu"
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm hover:bg-sky-50 hover:text-sky-700 rounded-md transition-colors"
                        role="menuitem"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={index}
                href={item.href}
                className={
                  item.isButton
                    ? 'bg-sky-600 text-white px-5 py-2 rounded-md font-bold hover:bg-sky-700 transition-colors'
                    : 'hover:text-sky-700 transition-colors'
                }
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className={`w-10 h-10 flex flex-col justify-center items-center gap-1.5 ${
              isMenuOpen ? 'text-sky-700' : 'text-slate-700'
            }`}
          >
            <span
              className={`block w-6 h-0.5 bg-current transform transition-transform duration-200 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-opacity duration-200 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transform transition-transform duration-200 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>

          {isMenuOpen && (
            <div
              className="absolute right-0 mt-3 w-64 bg-white rounded-lg shadow-xl p-4 flex flex-col gap-2 border border-slate-100 z-30"
              role="menu"
            >
              {navItems.map((item, index) =>
                item.subItems ? (
                  <div key={index}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsProgramsOpen((prev) => !prev);
                      }}
                      aria-expanded={isProgramsOpen}
                      className="w-full text-left flex justify-between items-center py-2 text-slate-600 hover:text-sky-700 transition-colors"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isProgramsOpen ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {isProgramsOpen && (
                      <div className="mt-1 ml-4 border-l-2 border-sky-100 pl-4 flex flex-col gap-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block py-1 text-sm text-slate-600 hover:text-sky-700 transition-colors"
                            role="menuitem"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    className={
                      item.isButton
                        ? 'bg-sky-600 text-white px-4 py-2 rounded-md text-center font-bold hover:bg-sky-700 transition-colors'
                        : 'py-2 text-slate-600 hover:text-sky-700 transition-colors'
                    }
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}