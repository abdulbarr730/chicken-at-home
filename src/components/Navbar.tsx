"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
    <>
      {/* Top Bar */}

      <div className="fixed top-0 left-0 right-0 z-[60] bg-green-700 text-white text-center py-2 text-sm">
        Fresh Chicken Delivered Across Muzaffarpur 🚚
      </div>

      {/* Navbar */}

      <nav
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}

          <div className="font-black text-2xl tracking-tight">
            ChickenAtHome
          </div>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#why"
              className="hover:text-green-700 transition"
            >
              Why Us
            </a>

            <a
              href="#process"
              className="hover:text-green-700 transition"
            >
              Process
            </a>

            <a
              href="#areas"
              className="hover:text-green-700 transition"
            >
              Areas
            </a>

            <a
              href="#faq"
              className="hover:text-green-700 transition"
            >
              FAQ
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-800 transition"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="bg-white border-t md:hidden">
            <div className="p-6 flex flex-col gap-4">

              <a href="#why">Why Us</a>

              <a href="#process">Process</a>

              <a href="#areas">Areas</a>

              <a href="#faq">FAQ</a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 text-white text-center py-3 rounded-xl"
              >
                Order Now
              </a>

            </div>
          </div>
        )}
      </nav>
    </>
  );
}