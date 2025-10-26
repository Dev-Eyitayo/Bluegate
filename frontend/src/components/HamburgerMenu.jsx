export default function HamburgerMenu({ isOpen, toggleMenu }) {
  return (
    <div
      className="md:hidden flex flex-col gap-1.5 cursor-pointer"
      onClick={toggleMenu}
    >
      <span
        className={`w-6 h-0.5 bg-mid rounded-sm transition-transform ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`w-6 h-0.5 bg-mid rounded-sm ${isOpen ? "opacity-0" : ""}`}
      ></span>
      <span
        className={`w-6 h-0.5 bg-mid rounded-sm transition-transform ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </div>
  );
}