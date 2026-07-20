"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Scissors, Truck } from "lucide-react";

const steps = [
  {
    icon: <ShoppingCart size={34} />,
    title: "Place Your Order",
    description:
      "Order instantly through WhatsApp or by giving us a quick call.",
  },
  {
    icon: <Scissors size={34} />,
    title: "Freshly Prepared",
    description:
      "Your chicken is cut, cleaned and packed only after your order is confirmed.",
  },
  {
    icon: <Truck size={34} />,
    title: "Delivered To You",
    description:
      "Fresh chicken reaches your doorstep quickly while maintaining hygiene and freshness.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs md:text-sm font-semibold">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Fresh Chicken
            <span className="block text-green-700">
              In Just 3 Easy Steps
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-slate-600 leading-7">
            We've made ordering fresh chicken simple, quick and hassle-free.
          </p>
        </motion.div>

        {/* Steps */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              className="relative rounded-3xl bg-slate-50 p-7 border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Step Number */}

              <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-green-700 text-white text-sm font-bold flex items-center justify-center">
                {index + 1}
              </div>

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center group-hover:bg-green-700 group-hover:text-white transition">
                {step.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-7 text-sm md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}