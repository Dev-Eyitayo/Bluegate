import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { href: "#", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#healthCommunication", label: "HEALTH COMMUNICATION" },
    {
      label: "PROGRAMMES",
      subItems: [
        { href: "#", label: "EMPOWERMENT" },
        { href: "#", label: "HUMAN RIGHTS" },
        { href: "#", label: "UN DAYS ACTIVITIES" },
      ],
    },
    { href: "#volunteer", label: "VOLUNTEER" },
    { href: "#donate", label: "DONATE", isButton: true },
  ];

  // Handle outside click
  useEffect(() => {
    if (!isMenuOpen && !isProgramsOpen) return;
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setIsProgramsOpen(false);
      }
    };
    // Small delay to prevent immediate close on first open
    const timeout = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 100);
    return () => {
      clearTimeout(timeout);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, isProgramsOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsProgramsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="bg-white border-b border-slate-200">
      {/* Top Bar */}
      <div className="bg-sky-800 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            Emergency No: <strong>+234-806-590-3150</strong>
          </div>
          <div>
            Support:{" "}
            <a
              href="mailto:info@bluegateinitiative.org"
              className="underline hover:text-sky-200 transition-colors"
            >
              info@bluegateinitiative.org
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/bluegate-logo.jpg"
            alt="Blue Gate Initiative logo"
            className="w-12 h-12 rounded-md object-cover"
          />
          <div>
            <h1 className="font-extrabold text-sky-800 text-lg sm:text-xl leading-tight">
              Blue Gate Initiative
            </h1>
            <p className="text-xs text-slate-500">Public Health Promotion</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 items-center text-slate-700 font-medium">
          {navItems.map((item, index) =>
            item.subItems ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-sky-700">
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isProgramsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {isProgramsOpen && (
                  <div className="absolute left-0 mt-3 w-56 bg-white border border-slate-100 rounded-lg shadow-lg py-2 z-20 animate-fadeIn">
                    {item.subItems.map((sub, subIdx) => (
                      <React.Fragment key={subIdx}>
                        <a
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                        >
                          {sub.label}
                        </a>
                        {subIdx < item.subItems.length - 1 && (
                          <hr className="border-slate-100 my-1" />
                        )}
                      </React.Fragment>
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
                    ? "bg-sky-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-sky-700 transition-colors"
                    : "hover:text-sky-700 transition-colors"
                }
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="p-3 rounded-md hover:bg-slate-100 active:bg-slate-200 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg border border-slate-100 shadow-lg p-4 flex flex-col gap-2 z-30 animate-fadeIn">
              {navItems.map((item, index) =>
                item.subItems ? (
                  <div key={index}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsProgramsOpen((prev) => !prev);
                      }}
                      className="w-full flex justify-between items-center py-2 text-slate-700 hover:text-sky-700"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isProgramsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isProgramsOpen && (
                      <div className="mt-1 ml-4 border-l border-sky-100 pl-4 flex flex-col gap-1">
                        {item.subItems.map((sub, subIndex) => (
                          <React.Fragment key={subIndex}>
                            <a
                              href={sub.href}
                              className="block py-1 text-sm text-slate-600 hover:text-sky-700"
                            >
                              {sub.label}
                            </a>
                            {subIndex < item.subItems.length - 1 && (
                              <hr className="border-slate-100 my-1" />
                            )}
                          </React.Fragment>
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
                        ? "bg-sky-600 text-white px-4 py-2 rounded-md text-center font-semibold hover:bg-sky-700"
                        : "py-2 text-slate-700 hover:text-sky-700"
                    }
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
