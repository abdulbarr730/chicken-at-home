"use client";

import { motion } from "framer-motion";
import { Phone, Scissors, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Place Order",
    description:
      "Send us a WhatsApp message with your preferred quantity and cut type.",
  },
  {
    number: "02",
    icon: Scissors,
    title: "Fresh Preparation",
    description:
      "Your chicken is freshly cut, cleaned and hygienically packed only after your order is confirmed.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Delivered To You",
    description:
      "Our delivery partner brings your fresh chicken straight to your doorstep.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-green-700 font-semibold">
            SIMPLE PROCESS
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            How It Works
          </h2>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Fresh chicken delivered in three simple steps.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="relative border border-slate-200 rounded-[32px] p-10 bg-white shadow-sm hover:shadow-xl transition"
              >
                <div className="absolute top-6 right-6 text-7xl font-black text-slate-100">
                  {step.number}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Icon
                    size={34}
                    className="text-green-700"
                  />
                </div>

                <h3 className="font-bold text-2xl mt-8">
                  {step.title}
                </h3>

                <p className="mt-5 text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}