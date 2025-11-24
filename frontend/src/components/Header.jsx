// import React, { useState, useEffect, useRef } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null); // label of open dropdown

//   const location = useLocation();
//   const menuRef = useRef(null);
//   const dropdownRefs = useRef({}); // { [label]: trigger ref }

//   // -------------------------------------------------
//   //  Navigation items
//   // -------------------------------------------------
//   const navItems = [
//     { href: "/", label: "HOME" },
//     { href: "/about", label: "ABOUT" },
//     {
//       label: "PROGRAMMES",
//       subItems: [
//         { href: "/health-promotion", label: "HEALTH PROMOTION" },
//         { href: "/empowerment", label: "EMPOWERMENT" },
//         { href: "/human-rights", label: "HUMAN RIGHTS" },
//       ],
//     },
//     {
//       label: "RESEARCH", href: "/research" },
//     { href: "/health-communication", label: "SBCC" },
//     {
//       label: "CONSULTANCY",
//       subItems: [
//         { href: "/training", label: "TRAINING" },
//         { href: "/mel", label: "M & E" },
//       ],
//     },
//     {
//       label: "RESOURCES",
//       subItems: [
//         { href: "/outreach", label: "OUTREACH" },
//         { href: "/publications", label: "PUBLICATIONS" },
//         { href: "/volunteer", label: "VOLUNTEER" },
//       ],
//     },
//     // { href: "/resources", label: "RESOURCES" },
//     // { href: "/volunteer", label: "VOLUNTEER" },
//   ];

//   // -------------------------------------------------
//   //  Helpers
//   // -------------------------------------------------
//   const isActive = (path) =>
//     location.pathname === path || (path === "/" && location.pathname === "");

//   const isDropdownActive = (label) => {
//     const item = navItems.find((i) => i.label === label);
//     return item?.subItems?.some((sub) => isActive(sub.href)) ?? false;
//   };

//   const toggleDropdown = (label) => {
//     setOpenDropdown((prev) => (prev === label ? null : label));
//   };

//   // -------------------------------------------------
//   //  Close ONLY mobile menu on outside click / ESC
//   //  → Dropdowns stay open until trigger is clicked again
//   // -------------------------------------------------
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       // Close mobile menu if click is outside
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setIsMenuOpen(false);
//       }
//       // Dropdowns: do NOT close on outside click
//     };

//     const handleEsc = (e) => {
//       if (e.key === "Escape") {
//         setIsMenuOpen(false); // Only close mobile menu
//         // Do NOT close dropdown
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleEsc);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleEsc);
//     };
//   }, []);

//   // -------------------------------------------------
//   //  Render
//   // -------------------------------------------------
//   return (
//     <header className="bg-white shadow-sm">
//       {/* Top Bar */}
//       <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
//           <div className="flex items-center gap-2">
//             <span className="font-medium">Emergency:</span>
//             <strong>+234-806-590-3150</strong>
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="font-medium">Support:</span>
//             <a
//               href="mailto:info@bluegateinitiative.org"
//               className="underline hover:text-blue-100 transition-colors duration-200"
//             >
//               info@bluegateinitiative.org
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Nav */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-3">
//           <img
//             src="/assets/bluegate-logo.jpg"
//             alt="Blue Gate Initiative logo"
//             className="w-12 h-12 rounded-lg object-cover"
//           />
//           <div>
//             <h1 className="font-bold text-blue-900 text-xl tracking-tight">
//               Blue Gate Initiative
//             </h1>
//             <p className="text-xs text-gray-500 tracking-wide">
//               Public Health Promotion
//             </p>
//           </div>
//         </Link>

//         {/* ---------- Desktop Nav ---------- */}
//         <nav className="hidden lg:flex items-center gap-10 text-gray-700 font-medium text-sm">
//           {navItems.map((item, idx) =>
//             item.subItems ? (
//               <div key={idx} className="relative">
//                 {/* Trigger */}
//                 <button
//                   ref={(el) => (dropdownRefs.current[item.label] = el)}
//                   onClick={() => toggleDropdown(item.label)}
//                   className={`flex items-center gap-1 transition-colors duration-200 focus:outline-none ${
//                     isDropdownActive(item.label)
//                       ? "text-blue-600 font-semibold"
//                       : "hover:text-blue-600"
//                   }`}
//                 >
//                   {item.label}
//                   <ChevronDown
//                     className={`w-4 h-4 transition-transform duration-300 ${
//                       openDropdown === item.label ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {/* Dropdown Panel – stays open until trigger clicked again */}
//                 {openDropdown === item.label && (
//                   <div className="absolute left-0 mt-3 w-56 bg-white shadow-sm border border-gray-100 z-20">
//                     {item.subItems.map((sub, sIdx) => (
//                       <React.Fragment key={sIdx}>
//                         <Link
//                           to={sub.href}
//                           // No onClick to close dropdown
//                           className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
//                             isActive(sub.href)
//                               ? "text-blue-600 font-semibold bg-blue-50"
//                               : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
//                           }`}
//                         >
//                           {sub.label}
//                         </Link>
//                         {sIdx < item.subItems.length - 1 && (
//                           <hr className="border-gray-200" />
//                         )}
//                       </React.Fragment>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link
//                 key={idx}
//                 to={item.href}
//                 className={`${
//                   item.isButton
//                     ? "bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
//                     : "hover:text-blue-600 transition-colors duration-200"
//                 } ${isActive(item.href) ? "text-blue-600 font-semibold" : ""}`}
//               >
//                 {item.label}
//               </Link>
//             )
//           )}
//         </nav>

//         {/* ---------- Mobile Menu ---------- */}
//         <div className="lg:hidden relative">
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setIsMenuOpen((p) => !p);
//             }}
//             aria-label="Toggle menu"
//             className="p-4 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none"
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6 text-gray-700" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-700" />
//             )}
//           </button>

//           {/* Backdrop */}
//           {isMenuOpen && (
//             <div
//               className="fixed inset-0 bg-black bg-opacity-40 z-20"
//               onClick={() => setIsMenuOpen(false)}
//             />
//           )}

//           {/* Mobile Menu Dropdown */}
//           {isMenuOpen && (
//             <div
//               ref={menuRef}
//               className="absolute right-0 mt-2 w-72 bg-white shadow-lg border border-gray-100 p-6 flex flex-col gap-4 z-30"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {navItems.map((item, idx) =>
//                 item.subItems ? (
//                   <div key={idx}>
//                     <button
//                       ref={(el) => (dropdownRefs.current[item.label] = el)}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         toggleDropdown(item.label);
//                       }}
//                       className="w-full flex justify-between items-center py-2.5 text-gray-800 font-semibold text-sm uppercase tracking-wide hover:text-blue-600 transition-colors duration-200"
//                     >
//                       <span>{item.label}</span>
//                       <ChevronDown
//                         className={`w-5 h-5 transition-transform duration-300 ${
//                           openDropdown === item.label ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>

//                     {/* Mobile Submenu */}
//                     {openDropdown === item.label && (
//                       <div className="mt-3 ml-4 border-l-2 border-blue-100 pl-4 flex flex-col gap-3">
//                         {item.subItems.map((sub, sIdx) => (
//                           <React.Fragment key={sIdx}>
//                             <Link
//                               to={sub.href}
//                               onClick={() => setIsMenuOpen(false)} // Close mobile menu only
//                               className={`block py-1.5 text-sm transition-colors duration-150 ${
//                                 isActive(sub.href)
//                                   ? "text-blue-600 font-semibold"
//                                   : "text-gray-600 hover:text-blue-600"
//                               }`}
//                             >
//                               {sub.label}
//                             </Link>
//                             {sIdx < item.subItems.length - 1 && (
//                               <hr className="border-gray-200" />
//                             )}
//                           </React.Fragment>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link
//                     key={idx}
//                     to={item.href}
//                     onClick={() => setIsMenuOpen(false)}
//                     className={`py-2.5 text-gray-800 font-semibold text-sm uppercase tracking-wide hover:text-blue-600 transition-colors duration-200 ${
//                       item.isButton
//                         ? "bg-blue-600 text-white px-5 py-2.5 rounded-lg text-center"
//                         : ""
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 )
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// -------------------------------------------------
// Navigation Data
// -------------------------------------------------
const NAV_ITEMS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  {
    label: "PROGRAMMES",
    subItems: [
      { href: "/health-promotion", label: "Health Promotion" },
      { href: "/empowerment", label: "Empowerment" },
      { href: "/human-rights", label: "Human Rights" },
    ],
  },
  { href: "/research", label: "RESEARCH" },
  { href: "/health-communication", label: "SBCC" },
  {
    label: "CONSULTANCY",
    subItems: [
      { href: "/training", label: "Training" },
      { href: "/mel", label: "M & E" },
    ],
  },
  {
    label: "RESOURCES",
    subItems: [
      { href: "/outreach", label: "Outreach" },
      { href: "/publications", label: "Publications" },
      { href: "/volunteer", label: "Volunteer" },
    ],
  },
  // Adding a prominent Call To Action button
  // { href: "/donate", label: "DONATE", isButton: true },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // label of open dropdown
  const location = useLocation();
  const menuRef = useRef(null); // Ref for mobile menu container
  const headerRef = useRef(null); // Ref for entire header for outside click logic

  // -------------------------------------------------
  // Helpers
  // -------------------------------------------------
  const isActive = (path) =>
    location.pathname === path || (path === "/" && location.pathname === "");

  const isDropdownActive = (label) => {
    const item = NAV_ITEMS.find((i) => i.label === label);
    return item?.subItems?.some((sub) => isActive(sub.href)) ?? false;
  };

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const closeMenuAndDropdowns = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // -------------------------------------------------
  // Global Click/ESC Handler (A11y & UX)
  // -------------------------------------------------
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Close mobile menu if open and click is outside the menuRef
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }

      // **Desktop Dropdown Logic:** Close the dropdown *unless* the click was inside the
      // currently open dropdown *or* on a dropdown trigger.
      if (openDropdown) {
        // Find the trigger button by its data-label
        const isTriggerClick = e.target.closest(`[data-dropdown-trigger="${openDropdown}"]`);
        
        // Find if the click is inside the open dropdown panel.
        // We use a general check, but for desktop, the click should toggle the button.
        // The more robust approach is to let the *next* click/blur handle closing.
        // For simplicity and to match the original click-to-toggle intent, 
        // we only close if the click is completely outside the header.
        if (headerRef.current && !headerRef.current.contains(e.target)) {
           setOpenDropdown(null);
        }
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeMenuAndDropdowns(); // Close both mobile menu and any open dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isMenuOpen, openDropdown]);


  // Components for Cleaner Markup

  // Single Nav Item / Dropdown Trigger (Used for both Desktop and Mobile)
  const NavItem = ({ item, isMobile = false }) => {
    // Determine active state for both link and dropdown container
    const activeClass = (path) => isActive(path)
      ? "text-blue-600 font-bold"
      : "text-gray-700 hover:text-blue-600 transition-colors duration-200";

    // Standard Link
    if (!item.subItems) {
      const buttonClasses = item.isButton 
        ? "bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all duration-300" 
        : activeClass(item.href);

      return (
        <Link
          to={item.href}
          onClick={isMobile ? closeMenuAndDropdowns : undefined} // Close mobile menu on click
          className={`text-sm uppercase tracking-wider ${buttonClasses} ${isMobile ? "py-2.5 block w-full" : ""}`}
        >
          {item.label}
        </Link>
      );
    }

    // Dropdown Item
    const isOpen = openDropdown === item.label;
    const isParentActive = isDropdownActive(item.label);

    return (
      <div className={isMobile ? "w-full" : "relative"}>
        {/* Trigger Button */}
        <button
          onClick={() => toggleDropdown(item.label)}
          data-dropdown-trigger={item.label} // For outside click logic
          aria-expanded={isOpen}
          aria-controls={`dropdown-${item.label}`}
          className={`flex items-center justify-between gap-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isParentActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"
          } ${isMobile ? "w-full py-2.5 text-sm uppercase tracking-wider font-semibold" : "text-sm font-medium"}`}
        >
          {item.label}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-blue-600" : ""
            }`}
          />
        </button>

        {/* Dropdown Panel - Desktop */}
        {!isMobile && isOpen && (
          <div 
            id={`dropdown-${item.label}`}
            className="absolute left-0 mt-3 w-60 bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden z-30 animate-fade-in-down"
            onMouseLeave={() => setOpenDropdown(null)} // Optional: close on mouse leave for smoother desktop UX
          >
            {item.subItems.map((sub, sIdx) => (
              <Link
                key={sIdx}
                to={sub.href}
                className={`block px-5 py-3 text-sm transition-colors duration-150 border-b border-gray-100 last:border-b-0 ${
                  isActive(sub.href)
                    ? "text-blue-700 font-semibold bg-blue-50"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {sub.label}
              </Link>
            ))}
          </div>
        )}

        {/* Submenu Panel - Mobile */}
        {isMobile && isOpen && (
          <div className="mt-2 ml-4 border-l-2 border-blue-200 pl-4 flex flex-col gap-1.5">
            {item.subItems.map((sub, sIdx) => (
              <Link
                key={sIdx}
                to={sub.href}
                onClick={closeMenuAndDropdowns} // Close mobile menu when navigating
                className={`block py-1.5 text-sm transition-colors duration-150 ${
                  isActive(sub.href)
                    ? "text-blue-600 font-semibold border-b border-blue-500 w-fit"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {sub.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  
  return (
    <header className="bg-white sticky top-0 z-30 shadow-sm border-b border-slate-200" ref={headerRef}>
      {/* Top Bar - Contact Info */}
      <div className="bg-blue-800 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row sm:justify-end sm:items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-1">
            <Phone className="w-3 h-3 mr-1" />
            <span className="font-medium">Emergency:</span>
            <strong className="hover:text-blue-200 transition">+234-806-590-3150</strong>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-3 h-3 mr-1" />
            <span className="font-medium">Support:</span>
            <a
              href="mailto:info@bluegateinitiative.org"
              className="underline hover:text-blue-200 transition-colors duration-200"
            >
              info@bluegateinitiative.org
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-3 py-4 flex items-center justify-between">
        
        {/* Logo and Branding */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/assets/logo.jpg" 
            alt="Blue Gate Initiative logo"
            className="w-full h-16 sm:h-14"
          />
          {/* <div>
            <h1 className="font-extrabold text-blue-900 text-lg md:text-xl tracking-tight leading-none">
              Blue Gate Initiative
            </h1>
            <p className="text-sm text-gray-500 tracking-wider font-light mt-0.5">
              Public Health Promotion
            </p>
          </div> */}
        </Link>

        {/* ---------- Desktop Navigation ---------- */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
          {NAV_ITEMS.map((item, idx) => (
            <NavItem key={idx} item={item} />
          ))}
        </nav>

        {/* ---------- Mobile Menu Button ---------- */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            className="p-3 rounded-lg text-gray-700 hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* ---------- Mobile Menu Dropdown Panel ---------- */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-20 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          <div
            ref={menuRef}
            className="absolute right-0 top-full w-full sm:w-80 bg-white shadow-2xl border-t border-gray-200 p-6 flex flex-col gap-2 z-30 lg:hidden"
          >
            {NAV_ITEMS.map((item, idx) => (
              <NavItem key={idx} item={item} isMobile={true} />
            ))}
          </div>
        </>
      )}
    </header>
  );
}