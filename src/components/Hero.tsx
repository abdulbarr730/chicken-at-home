"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const whatsapp =
    "https://wa.me/919204810544?text=Hi%20I%20want%20to%20order%20fresh%20chicken";

  return (
    <section className="max-w-7xl mx-auto px-6 pt-52 pb-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Fresh Chicken Delivered To Your Home
          </div>

          <h1 className="text-6xl md:text-7xl font-black mt-8 leading-tight">
            Fresh Chicken.
            <span className="block text-green-700">
              Cut Only After You Order.
            </span>
          </h1>

          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            Skip the crowd, the smell, and the trip to the market.
            Get freshly cut chicken delivered straight to your doorstep.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-bold transition"
            >
              Order On WhatsApp
            </a>

            <a
              href="tel:+919204810544"
              className="border border-slate-300 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition"
            >
              Call Us
            </a>

          </div>
        </motion.div>

        {/* Right Image */}

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
        >
          <div className="relative h-[650px] w-full rounded-[32px] overflow-hidden shadow-2xl">

            <Image
              src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=1400&q=80"
              alt="Fresh Raw Chicken"
              fill
              priority
              className="object-cover"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}