"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const whatsapp =
    "https://wa.me/919204810544?text=Hi%20I%20want%20to%20order%20fresh%20chicken";

  return (
    <a
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-[999]"
    >
      {/* Ping Animation */}

      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />

      {/* Button */}

      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/40">
        <FaWhatsapp
          size={34}
          className="text-white"
        />
      </div>
    </a>
  );
}