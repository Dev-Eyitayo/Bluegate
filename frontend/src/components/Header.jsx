import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // label of open dropdown

  const location = useLocation();
  const menuRef = useRef(null);
  const dropdownRefs = useRef({}); // { [label]: trigger ref }

  // -------------------------------------------------
  //  Navigation items
  // -------------------------------------------------
  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    {
      label: "PROGRAMMES",
      subItems: [
        { href: "/health-promotion", label: "HEALTH PROMOTION" },
        { href: "/empowerment", label: "EMPOWERMENT" },
        { href: "/human-rights", label: "HUMAN RIGHTS" },
      ],
    },
    {
      label: "RESEARCH",
      subItems: [
        { href: "/implementation-research", label: "IMPLEMENTATION RESEARCH" },
        { href: "/operation-research", label: "OPERATION RESEARCH" },
        { href: "/environmental-research", label: "ENVIRONMENTAL RESEARCH" },
        { href: "/rct", label: "RCT" },
      ],
    },
    { href: "/health-communication", label: "SBCC" },
    {
      label: "CONSULTANCY",
      subItems: [
        { href: "/training", label: "TRAINING" },
        { href: "/m-and-e", label: "M & E" },
      ],
    },
    {
      label: "RESOURCES",
      subItems: [
        { href: "/blogs", label: "BLOGS" },
        { href: "/publications", label: "PUBLICATIONS" },
        { href: "/volunteer", label: "VOLUNTEER" },
      ],
    },
    // { href: "/resources", label: "RESOURCES" },
    // { href: "/volunteer", label: "VOLUNTEER" },
  ];

  // -------------------------------------------------
  //  Helpers
  // -------------------------------------------------
  const isActive = (path) =>
    location.pathname === path || (path === "/" && location.pathname === "");

  const isDropdownActive = (label) => {
    const item = navItems.find((i) => i.label === label);
    return item?.subItems?.some((sub) => isActive(sub.href)) ?? false;
  };

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  // -------------------------------------------------
  //  Close ONLY mobile menu on outside click / ESC
  //  → Dropdowns stay open until trigger is clicked again
  // -------------------------------------------------
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Close mobile menu if click is outside
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
      // Dropdowns: do NOT close on outside click
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false); // Only close mobile menu
        // Do NOT close dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // -------------------------------------------------
  //  Render
  // -------------------------------------------------
  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
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
        <Link to="/" className="flex items-center gap-3">
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
        </Link>

        {/* ---------- Desktop Nav ---------- */}
        <nav className="hidden lg:flex items-center gap-10 text-gray-700 font-medium text-sm">
          {navItems.map((item, idx) =>
            item.subItems ? (
              <div key={idx} className="relative">
                {/* Trigger */}
                <button
                  ref={(el) => (dropdownRefs.current[item.label] = el)}
                  onClick={() => toggleDropdown(item.label)}
                  className={`flex items-center gap-1 transition-colors duration-200 focus:outline-none ${
                    isDropdownActive(item.label)
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-600"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Panel – stays open until trigger clicked again */}
                {openDropdown === item.label && (
                  <div className="absolute left-0 mt-3 w-56 bg-white shadow-sm border border-gray-100 z-20">
                    {item.subItems.map((sub, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <Link
                          to={sub.href}
                          // No onClick to close dropdown
                          className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                            isActive(sub.href)
                              ? "text-blue-600 font-semibold bg-blue-50"
                              : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                          }`}
                        >
                          {sub.label}
                        </Link>
                        {sIdx < item.subItems.length - 1 && (
                          <hr className="border-gray-200" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={idx}
                to={item.href}
                className={`${
                  item.isButton
                    ? "bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                    : "hover:text-blue-600 transition-colors duration-200"
                } ${isActive(item.href) ? "text-blue-600 font-semibold" : ""}`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* ---------- Mobile Menu ---------- */}
        <div className="lg:hidden relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen((p) => !p);
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

          {/* Backdrop */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-20"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute right-0 mt-2 w-72 bg-white shadow-lg border border-gray-100 p-6 flex flex-col gap-4 z-30"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, idx) =>
                item.subItems ? (
                  <div key={idx}>
                    <button
                      ref={(el) => (dropdownRefs.current[item.label] = el)}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(item.label);
                      }}
                      className="w-full flex justify-between items-center py-2.5 text-gray-800 font-semibold text-sm uppercase tracking-wide hover:text-blue-600 transition-colors duration-200"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Submenu */}
                    {openDropdown === item.label && (
                      <div className="mt-3 ml-4 border-l-2 border-blue-100 pl-4 flex flex-col gap-3">
                        {item.subItems.map((sub, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <Link
                              to={sub.href}
                              onClick={() => setIsMenuOpen(false)} // Close mobile menu only
                              className={`block py-1.5 text-sm transition-colors duration-150 ${
                                isActive(sub.href)
                                  ? "text-blue-600 font-semibold"
                                  : "text-gray-600 hover:text-blue-600"
                              }`}
                            >
                              {sub.label}
                            </Link>
                            {sIdx < item.subItems.length - 1 && (
                              <hr className="border-gray-200" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={idx}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-2.5 text-gray-800 font-semibold text-sm uppercase tracking-wide hover:text-blue-600 transition-colors duration-200 ${
                      item.isButton
                        ? "bg-blue-600 text-white px-5 py-2.5 rounded-lg text-center"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}