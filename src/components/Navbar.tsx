"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tour Packages", href: "/packages" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled || !isHome ? "bg-white/75 backdrop-blur-lg shadow-md border-b border-white/20" : "bg-transparent";
  const textColor = scrolled || !isHome ? "text-[#550000]" : "text-white";
  const logoColor = scrolled || !isHome ? "#550000" : "#ffffff";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative w-32 h-10 md:w-40 md:h-12 transition-all duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="A4 Tours Logo"
              fill
              className={`object-contain transition-all duration-300 ${scrolled || !isHome ? "invert brightness-0" : ""
                }`}
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-sm tracking-wide transition-all duration-300 relative group ${textColor}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#c9a84c] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </Link>
            );
          })}
          <a
            href="tel:+94771234567"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background:
                scrolled || !isHome ? "#550000" : "rgba(255,255,255,0.2)",
              color: "white",
              border:
                scrolled || !isHome
                  ? "none"
                  : "1px solid rgba(255,255,255,0.5)",
            }}
          >
            <Phone size={14} />
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          id="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/90 backdrop-blur-xl shadow-2xl transition-all duration-400 overflow-hidden border-t border-white/20 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-semibold text-base py-2 border-b border-gray-100 transition-colors ${isActive ? "text-[#550000]" : "text-gray-700 hover:text-[#550000]"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="tel:+94771234567"
            className="btn-primary mt-2 justify-center"
          >
            <Phone size={14} />
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
