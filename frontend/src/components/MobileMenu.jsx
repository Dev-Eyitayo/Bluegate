import { navLinks } from "../constants/navLinks";

export default function MobileMenu({ isOpen }) {
  return (
    <div
      className={`md:hidden absolute top-[75px] right-5 w-60 bg-white p-5 rounded-custom shadow-lg flex-col gap-3.5 ${
        isOpen ? "flex animate-slideDown" : "hidden"
      }`}
    >
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`text-mid font-semibold py-2 border-b border-gray-100 hover:text-blue transition-colors ${
            link.isCta ? "text-center bg-blue text-white rounded-lg" : ""
          }`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}