"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

export default function CTA() {
  const whatsapp =
    "https://wa.me/919204810544?text=Hi%20I%20want%20to%20order%20fresh%20chicken";

  const highlights = [
    "Freshly Cut",
    "100% Hygienic",
    "Same Day Delivery",
    "Premium Packaging",
  ];

  return (
    <section className="relative overflow-hidden bg-green-700 py-16 md:py-24">

      {/* Background */}

      <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs md:text-sm font-semibold text-green-100">
            ORDER TODAY
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight">
            Fresh Chicken
            <span className="block">
              Delivered To Your Door.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg leading-7 md:leading-8 text-green-100">
            Skip the market and enjoy freshly cut, hygienically prepared
            chicken delivered straight to your doorstep.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-[1.02]"
            >
              Order On WhatsApp

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="tel:+919204810544"
              className="flex items-center justify-center gap-3 rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-green-700"
            >
              <Phone size={18} />
              Call Now
            </a>

          </div>

          {/* Trust Badges */}

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">

            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-4 backdrop-blur-sm"
              >
                <CheckCircle2
                  size={18}
                  className="text-lime-300"
                />

                <span className="text-sm md:text-base font-medium text-white">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}