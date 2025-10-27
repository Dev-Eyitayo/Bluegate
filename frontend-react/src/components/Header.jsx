import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const menuRef = useRef(null);
  const programsRef = useRef(null);

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

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        programsRef.current &&
        !programsRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
        setIsProgramsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close menus on ESC
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
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="font-medium">Emergency:</span>
            <strong>+234-806-590-3150</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Support:</span>
            <a
              href="mailto:info@bluegateinitiative.org"
              className="underline hover:text-blue-100 transition-colors duration-200"
            >
              info@bluegateinitiative.org
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/bluegate-logo.jpg"
            alt="Blue Gate Initiative logo"
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <h1 className="font-bold text-blue-900 text-xl tracking-tight">
              Blue Gate Initiative
            </h1>
            <p className="text-xs text-gray-500 tracking-wide">
              Public Health Promotion
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 items-center text-gray-700 font-medium text-sm">
          {navItems.map((item, index) =>
            item.subItems ? (
              <div key={index} className="relative">
                <button
                  ref={programsRef}
                  onClick={() => setIsProgramsOpen((prev) => !prev)}
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isProgramsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isProgramsOpen && (
                  <div className="absolute left-0 mt-3 w-56 bg-white shadow-sm border border-gray-100 z-20 transition-all duration-200 ease-in-out">
                    {item.subItems.map((sub, subIdx) => (
                      <React.Fragment key={subIdx}>
                        <a
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150"
                        >
                          {sub.label}
                        </a>
                        {subIdx < item.subItems.length - 1 && (
                          <hr className="border-gray-200" />
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
                    ? "bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                    : "hover:text-blue-600 transition-colors duration-200"
                }
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen((prev) => !prev);
            }}
            aria-label="Toggle menu"
            className="p-4 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>

          {/* Mobile Backdrop */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-20"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}

          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute right-0 mt-2 w-72 bg-white shadow-lg border border-gray-100 p-6 flex flex-col gap-4 z-30 transition-all duration-300 ease-in-out"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, index) =>
                item.subItems ? (
                  <div key={index}>
                    <button
                      ref={programsRef}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsProgramsOpen((prev) => !prev);
                      }}
                      className="w-full flex justify-between items-center py-2.5 text-gray-800 font-semibold text-sm uppercase tracking-wide hover:text-blue-600 transition-colors duration-200"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isProgramsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isProgramsOpen && (
                      <div className="mt-3 ml-4 border-l-2 border-blue-100 pl-4 flex flex-col gap-3">
                        {item.subItems.map((sub, subIndex) => (
                          <React.Fragment key={subIndex}>
                            <a
                              href={sub.href}
                              className="block py-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-150"
                            >
                              {sub.label}
                            </a>
                            {subIndex < item.subItems.length - 1 && (
                              <hr className="border-gray-200" />
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
                        ? "bg-blue-600 text-white px-5 py-2.5 rounded-lg text-center font-semibold text-sm uppercase tracking-wide hover:bg-blue-700 transition-colors duration-200"
                        : "py-2.5 text-gray-800 font-semibold text-sm uppercase tracking-wide hover:text-blue-600 transition-colors duration-200"
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