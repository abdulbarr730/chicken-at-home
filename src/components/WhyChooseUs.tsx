"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scissors,
  Truck,
  Phone,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Fresh Every Day",
    description:
      "Fresh chicken prepared daily for every order.",
  },
  {
    icon: Scissors,
    title: "Cut After Order",
    description:
      "Prepared only after your order is confirmed.",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description:
      "Fast delivery directly to your doorstep.",
  },
  {
    icon: Phone,
    title: "Easy Ordering",
    description:
      "Order directly through WhatsApp in seconds.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-green-700 font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Freshness You Can Trust
          </h2>

          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            We focus on delivering fresh chicken directly to your
            home without the hassle of visiting the market.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-16">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <Icon
                  size={38}
                  className="text-green-700"
                />

                <h3 className="font-bold text-xl mt-6">
                  {feature.title}
                </h3>

                <p className="text-slate-600 mt-3 leading-relaxed">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}