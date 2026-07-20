"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const whatsapp =
    "https://wa.me/919204810544?text=Hi%20I%20want%20to%20order%20fresh%20chicken";

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-6 pt-28 md:pt-40 lg:pt-52 pb-16 md:pb-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-flex bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
            Fresh Chicken Delivered To Your Home
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            Fresh Chicken.
            <span className="block text-green-700">
              Cut Only After You Order.
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-600 leading-7 md:leading-8 max-w-xl">
            Skip the crowd, the smell, and the trip to the market. Get freshly
            cut, hygienically cleaned chicken delivered straight to your
            doorstep.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white text-center px-8 py-4 rounded-xl font-bold transition duration-300"
            >
              Order On WhatsApp
            </a>

            <a
              href="tel:+919204810544"
              className="w-full sm:w-auto border border-slate-300 text-center px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition duration-300"
            >
              Call Us
            </a>
          </div>

          {/* Stats */}

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-green-700">
                100%
              </h3>
              <p className="text-xs md:text-sm text-slate-600 mt-1">
                Fresh
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-black text-green-700">
                Same Day
              </h3>
              <p className="text-xs md:text-sm text-slate-600 mt-1">
                Delivery
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-black text-green-700">
                Hygienic
              </h3>
              <p className="text-xs md:text-sm text-slate-600 mt-1">
                Packing
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="order-1 lg:order-2"
        >
          <div className="relative h-[320px] sm:h-[420px] lg:h-[650px] w-full overflow-hidden rounded-3xl shadow-2xl">
            <Image
                src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1600&q=80"
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