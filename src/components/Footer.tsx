"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  ),
  Youtube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  ),
};

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Tour Packages", href: "/packages" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
  ],
  packages: [
    { label: "Cultural Tours", href: "/packages" },
    { label: "Adventure Tours", href: "/packages" },
    { label: "Beach Holidays", href: "/packages" },
    { label: "Wildlife Safari", href: "/packages" },
    { label: "Honeymoon Packages", href: "/packages" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{ background: "#1a0000" }}
      className="text-white"
    >
      {/* Top CTA Strip */}
      <div style={{ background: "#550000" }} className="py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Ready for your next adventure?</h3>
            <p className="text-white/70 text-sm mt-1">
              Get in touch with our travel experts today
            </p>
          </div>
          <Link href="/contact" className="btn-gold whitespace-nowrap">
            Plan My Trip <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-32 h-10 transition-all duration-300">
              <Image
                src="/logo.png"
                alt="A4 Tours Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Creating unforgettable travel memories since 2010. Your trusted
            partner for exploring Sri Lanka and beyond.
          </p>
          {/* Social Links */}
          <div className="flex gap-3">
            {(
              [
                { key: "Facebook", href: "#" },
                { key: "Instagram", href: "#" },
                { key: "Twitter", href: "#" },
                { key: "Youtube", href: "#" },
              ] as { key: keyof typeof SocialIcons; href: string }[]
            ).map(({ key, href }) => {
              const Icon = SocialIcons[key];
              return (
              <a
                key={key}
                href={href}
                aria-label={key}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#550000";
                  (e.currentTarget as HTMLElement).style.borderColor = "#550000";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                }}
              >
                <Icon />
              </a>
            );})}
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-sm tracking-widest text-[#c9a84c] uppercase mb-5">
            Company
          </h4>
          <ul className="space-y-3">
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-[#c9a84c]"
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Packages */}
        <div>
          <h4 className="font-bold text-sm tracking-widest text-[#c9a84c] uppercase mb-5">
            Packages
          </h4>
          <ul className="space-y-3">
            {footerLinks.packages.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-[#c9a84c]"
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-sm tracking-widest text-[#c9a84c] uppercase mb-5">
            Contact
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white/60 text-sm">
              <MapPin size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
              No. 42, Galle Road, Colombo 03, Sri Lanka
            </li>
            <li>
              <a
                href="tel:+94771234567"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
              >
                <Phone size={16} className="text-[#c9a84c] shrink-0" />
                +94 77 123 4567
              </a>
            </li>
            <li>
              <a
                href="mailto:info@a4tours.lk"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
              >
                <Mail size={16} className="text-[#c9a84c] shrink-0" />
                info@a4tours.lk
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t py-6"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} A4 Tours. All rights reserved.</p>
          <p>Designed with ❤️ for travelers</p>
        </div>
      </div>
    </footer>
  );
}
