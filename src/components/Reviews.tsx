"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Ayaan",
    location: "Tilak Maidan, Muzaffarpur",
    review:
      "The quality was excellent. The chicken was fresh, clean, and hygienically packed. I highly recommend everyone to order from ChickenAtHome.",
  },
  {
    name: "Athrav Arya",
    location: "Beriya MIT, Muzaffarpur",
    review:
      "The chicken was fresh and better than what I usually get locally. Thank you for starting this service in Muzaffarpur. I'll definitely recommend ChickenAtHome to my friends and family.",
  },
  {
    name: "Mansoori",
    location: "Chandwara, Muzaffarpur",
    review:
      "Good quality chicken. It was fresh, clean, and well prepared. Overall, a great experience.",
  },
  {
    name: "Owais",
    location: "Chandwara, Muzaffarpur",
    review:
      "The order was delivered on time. The chicken was fresh, clean, and of very good quality.",
  },
  {
    name: "Nikhil",
    location: "Rambagh, Muzaffarpur",
    review:
      "Best quality chicken. Fresh, hygienic, and exactly what I was looking for.",
  },
];

export default function Reviews() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-green-700 font-semibold tracking-wider">
            VERIFIED CUSTOMERS
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            What Our Customers Say
          </h2>

          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            Trusted by customers across Muzaffarpur.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className={`rounded-[32px] border bg-white shadow-lg hover:shadow-2xl transition p-8 ${
                index === reviews.length - 1
                  ? "lg:col-span-2 bg-gradient-to-r from-green-50 to-white"
                  : ""
              }`}
            >
              <div className="flex justify-between items-start">

                <div>

                  <h3 className="font-bold text-2xl">
                    {review.name}
                  </h3>

                  <p className="text-slate-500 mt-1">
                    📍 {review.location}
                  </p>

                </div>

                <div className="text-right">

                  <div className="text-yellow-500 text-lg">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Verified Customer
                  </span>

                </div>

              </div>

              <p
                className={`italic text-slate-600 leading-8 mt-8 ${
                  index === reviews.length - 1
                    ? "text-lg"
                    : ""
                }`}
              >
                "{review.review}"
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}