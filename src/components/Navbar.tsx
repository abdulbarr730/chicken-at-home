"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Chicken At Home
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <a href="#home">Home</a>
          <a href="#about">About</a>

          <a
            href="https://wa.me/919204810544"
            target="_blank"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Order Now
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>

          <a
            href="https://wa.me/919204810544"
            target="_blank"
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
}