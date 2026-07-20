"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Scissors, PhoneCall } from "lucide-react";

const features = [
  {
    icon: <Scissors size={34} />,
    title: "Freshly Cut",
    description:
      "Every order is cut fresh only after you place it. Never pre-cut or frozen.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "100% Hygienic",
    description:
      "Prepared in a clean environment with premium packaging and quality checks.",
  },
  {
    icon: <Truck size={34} />,
    title: "Fast Delivery",
    description:
      "Quick doorstep delivery across Muzaffarpur while maintaining freshness.",
  },
  {
    icon: <PhoneCall size={34} />,
    title: "Easy Ordering",
    description:
      "Order in seconds through WhatsApp or a quick phone call. No hassle.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-16 md:py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs md:text-sm font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Freshness You Can
            <span className="block text-green-700">
              Taste Every Time
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-slate-600 leading-7">
            We focus on quality, hygiene and timely delivery so your family
            enjoys farm-fresh chicken without visiting the market.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center group-hover:bg-green-700 group-hover:text-white transition">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-7 text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}