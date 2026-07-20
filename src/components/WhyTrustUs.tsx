"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scissors,
  PackageCheck,
  Clock3,
  BadgeCheck,
  PhoneCall,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: <Scissors size={30} />,
    title: "Freshly Cut",
    description: "Every order is cut only after you place it. Never pre-cut or frozen.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "100% Hygienic",
    description: "Prepared with strict hygiene standards and careful handling.",
  },
  {
    icon: <PackageCheck size={30} />,
    title: "Premium Packaging",
    description: "Leak-proof packaging that keeps your chicken clean and fresh.",
  },
  {
    icon: <Clock3 size={30} />,
    title: "Same Day Delivery",
    description: "Fresh chicken delivered quickly to your doorstep.",
  },
  {
    icon: <BadgeCheck size={30} />,
    title: "Quality Guaranteed",
    description: "We never compromise on freshness, taste, or quality.",
  },
  {
    icon: <PhoneCall size={30} />,
    title: "Easy Ordering",
    description: "Order within seconds through WhatsApp or a quick phone call.",
  },
  {
    icon: <HeartHandshake size={30} />,
    title: "Trusted by Families",
    description: "Serving homes with fresh chicken and reliable service.",
  },
  {
    icon: <Sparkles size={30} />,
    title: "No Hidden Charges",
    description: "Simple pricing with honest service and no surprises.",
  },
];

export default function WhyTrustUs() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs md:text-sm font-semibold">
            WHY CHOOSE CHICKENATHOME
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Why Families Trust
            <span className="block text-green-700">
              ChickenAtHome
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-slate-600 leading-7">
            Fresh chicken isn't just about taste. It's about hygiene, trust,
            quality, and delivering a product your family can enjoy with confidence.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="bg-white rounded-3xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600 text-sm leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}