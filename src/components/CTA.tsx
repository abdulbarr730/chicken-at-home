"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  const whatsapp =
    "https://wa.me/919204810544?text=Hi%20I%20want%20to%20order%20fresh%20chicken";

  return (
    <section className="relative overflow-hidden bg-green-700 py-28">

      {/* Background Blur */}

      <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold tracking-widest text-green-100">
            ORDER TODAY
          </span>

          <h2 className="mt-8 text-5xl md:text-7xl font-black text-white leading-tight">
            Fresh Chicken
            <br />
            Delivered To Your Door.
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-xl leading-9 text-green-100">
            Skip the market. Skip the crowd.
            Enjoy freshly cut, hygienically prepared chicken delivered
            directly to your home in Muzaffarpur.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-105"
            >
              Order On WhatsApp

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="tel:+919204810544"
              className="inline-flex items-center gap-3 rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-green-700"
            >
              <Phone size={18} />

              Call Now
            </a>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">

              <h3 className="text-3xl font-black text-white">
                100%
              </h3>

              <p className="mt-2 text-green-100">
                Fresh Chicken
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">

              <h3 className="text-3xl font-black text-white">
                Same Day
              </h3>

              <p className="mt-2 text-green-100">
                Home Delivery
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">

              <h3 className="text-3xl font-black text-white">
                Hygienic
              </h3>

              <p className="mt-2 text-green-100">
                Clean & Packed
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}