"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    title: "Whole Chicken",
    description: "Fresh whole chicken, cleaned and packed hygienically.",
    image: "/products/whole-chicken.jpg",
    
  },
  {
    title: "Curry Cut",
    description: "Perfectly cut pieces for your favorite curry recipes.",
    image: "/products/curry-cut.jpg",
    
  },
  {
    title: "Boneless",
    description: "Premium boneless chicken breast and thigh pieces.",
    image: "/products/boneless.jpg",
    
  },
];

export default function Products() {
  const whatsapp =
    "https://wa.me/919204810544?text=Hi%20I%20want%20to%20order%20fresh%20chicken";

  return (
    <section
        id="products"
        className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs md:text-sm font-semibold">
            OUR PRODUCTS
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Freshly Prepared
            <span className="block text-green-700">
              Every Single Day
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-slate-600 leading-7">
            Every order is freshly cut, hygienically cleaned and packed only
            after your confirmation, ensuring maximum freshness.
          </p>
        </div>

        {/* Products */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12 md:mt-16">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}

              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-black">
                    {product.title}
                  </h3>

                  <span className="text-lg font-bold text-green-700">
                  </span>
                </div>

                <p className="mt-4 text-slate-600 leading-7 text-sm md:text-base">
                  {product.description}
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full text-center bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition"
                >
                  Order On WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}