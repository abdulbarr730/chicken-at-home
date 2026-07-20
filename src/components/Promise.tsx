"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const promises = [
  "Cut only after order confirmation",
  "100% Hygienically Prepared",
  "Freshly Packed & Sealed",
  "Same Day Home Delivery",
  "Quality Checked Before Dispatch",
  "Customer Satisfaction Guaranteed",
];

export default function Promise() {
  const whatsapp =
    "https://wa.me/919204810544?text=Hi%20I%20want%20to%20order%20fresh%20chicken";

  return (
    <section className="py-16 md:py-24 bg-green-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex bg-white/15 text-green-100 px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
              OUR PROMISE
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Quality You
              <span className="block">
                Can Trust.
              </span>
            </h2>

            <p className="mt-6 text-base md:text-lg leading-7 md:leading-8 text-green-100 max-w-xl">
              Every order is freshly prepared only after confirmation. We
              focus on hygiene, freshness and fast delivery so your family
              always receives premium quality chicken.
            </p>

            {/* Promise Cards */}

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {promises.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-4"
                >
                  <CheckCircle2
                    size={22}
                    className="text-lime-300 mt-0.5 flex-shrink-0"
                  />

                  <span className="text-white text-sm md:text-base leading-6">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full sm:w-auto justify-center bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition"
            >
              Order Fresh Chicken
            </a>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            animate={{ y: [0, -8, 0] }}
            className="order-1 lg:order-2"
          >
            <div className="relative h-[320px] sm:h-[450px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=1600&q=80"
                alt="Premium Fresh Chicken"
                fill
                className="object-cover"
                priority={false}
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}