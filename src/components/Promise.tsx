"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const promises = [
  "Cut only after order confirmation",
  "100% Hygienically Prepared",
  "Freshly Packed & Sealed",
  "Fast Home Delivery",
  "Quality Checked Before Dispatch",
  "Customer Satisfaction Guaranteed",
];

export default function Promise() {
  const whatsapp =
    "https://wa.me/919204810544?text=Hi%20I%20want%20to%20order%20fresh%20chicken";

  return (
    <section className="py-28 bg-green-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-white/15 text-green-100 px-4 py-2 rounded-full font-semibold tracking-wide">
              OUR PROMISE
            </span>

            <h2 className="text-5xl md:text-6xl font-black text-white mt-8 leading-tight">
              Quality You
              <br />
              Can Trust.
            </h2>

            <p className="mt-8 text-lg leading-8 text-green-100 max-w-xl">
              Every order is freshly prepared only after confirmation.
              We focus on hygiene, freshness and quick delivery so you
              receive the best quality chicken every single time.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-12">

              {promises.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start gap-3 rounded-2xl bg-white/10 backdrop-blur-md p-4 border border-white/10"
                >
                  <CheckCircle2
                    size={22}
                    className="text-lime-300 mt-0.5 flex-shrink-0"
                  />

                  <span className="text-white font-medium leading-6">
                    {item}
                  </span>
                </motion.div>
              ))}

            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-12 bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:scale-105 transition"
            >
              Order Fresh Chicken
            </a>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            animate={{ y: [0, -10, 0] }}
          >
            <div className="relative h-[650px] rounded-[36px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,.35)]">

              <Image
                src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1600&q=80"
                alt="Premium Fresh Chicken"
                fill
                className="object-cover"
              />

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}