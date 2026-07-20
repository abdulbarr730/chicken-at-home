"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsapp =
    "https://wa.me/919204810544?text=Hi%20I%20want%20to%20order%20fresh%20chicken";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Why Us", href: "#why" },
    { label: "Products", href: "#products" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow"
      }`}
    >
      {/* Top Announcement Bar */}

      <div className="bg-green-700 text-white text-center text-xs md:text-sm py-2 px-4">
        🚚 Fresh Chicken Delivered Across Muzaffarpur
      </div>

      {/* Main Navbar */}

      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}

          <a
            href="#"
            className="text-2xl md:text-4xl font-black text-slate-900"
          >
            Chicken<span className="text-green-700">AtHome</span>
          </a>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-medium text-slate-700 hover:text-green-700 transition"
              >
                {link.label}
              </a>
            ))}

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-700 px-7 py-3 font-bold text-white transition hover:bg-green-800"
            >
              Order Now
            </a>
          </nav>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-lg border p-2"
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <div className="space-y-5 bg-white px-5 py-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-medium text-slate-700"
            >
              {link.label}
            </a>
          ))}

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-green-700 py-3 text-center font-bold text-white"
          >
            Order On WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}