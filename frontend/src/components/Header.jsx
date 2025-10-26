import { useState } from "react";
import Container from "./Container";
import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../constants/navLinks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 relative z-10">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="bluegate logo.jpg"
              alt="Blue Gate Initiative Logo"
              className="h-11 rounded-md"
            />
            <div>
              <div className="font-extrabold text-mid">
                Blue Gate Initiative
              </div>
              <div className="text-xs text-muted">Public Health Promotion</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold text-muted hover:text-blue transition-colors ${
                  link.isCta
                    ? "bg-blue text-white px-4 py-2.5 rounded-lg hover:bg-[#002fa0]"
                    : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <HamburgerMenu
            isOpen={isMenuOpen}
            toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        <MobileMenu isOpen={isMenuOpen} />
      </Container>
    </header>
  );
}