"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    title: "Whole Chicken",
    description: "Fresh whole chicken, cleaned and packed hygienically.",
    image: "/products/whole-chicken.jpg",
    price: "₹280/kg",
  },
  {
    title: "Curry Cut",
    description: "Perfectly cut pieces for your favorite curry recipes.",
    image: "/products/curry-cut.jpg",
    price: "₹320/kg",
  },
  {
    title: "Boneless",
    description: "Premium boneless chicken breast and thigh pieces.",
    image: "/products/boneless.jpg",
    price: "₹420/kg",
  },
];

export default function Products() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-green-700 font-semibold tracking-wide">
            OUR PRODUCTS
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Freshly Prepared Every Day
          </h2>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Every order is freshly cut, hygienically cleaned, and packed
            only after your confirmation.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition"
            >
              <div className="relative h-80 overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-black">
                  {product.title}
                </h3>

                <p className="text-slate-600 mt-4 leading-7">
                  {product.description}
                </p>

                <button className="mt-8 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition">
                  Order Now
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}