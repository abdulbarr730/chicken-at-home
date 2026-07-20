"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs md:text-sm font-semibold">
            VERIFIED CUSTOMERS
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            What Our
            <span className="block text-green-700">
              Customers Say
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-slate-600 leading-7">
            Fresh chicken. Happy families. Here's what our customers have to say
            about ChickenAtHome.
          </p>

        </div>

        {/* Reviews */}

        <div className="grid gap-6 md:grid-cols-2 mt-12 md:mt-16">

          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className={`rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 ${
                index === reviews.length - 1
                  ? "md:col-span-2 bg-gradient-to-r from-green-50 to-white"
                  : ""
              }`}
            >
              {/* Header */}

              <div className="flex items-start justify-between gap-4">

                <div>

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold">
                        {review.name}
                      </h3>

                      <p className="text-sm text-slate-500">
                        📍 {review.location}
                      </p>
                    </div>

                  </div>

                </div>

                <div className="text-right flex-shrink-0">

                  <div className="flex justify-end gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <span className="inline-block mt-2 rounded-full bg-green-100 px-3 py-1 text-[11px] md:text-xs font-semibold text-green-700">
                    Verified Customer
                  </span>

                </div>

              </div>

              {/* Quote */}

              <Quote
                size={30}
                className="text-green-200 mt-6"
              />

              <p
                className={`mt-4 text-slate-600 leading-7 md:leading-8 italic ${
                  index === reviews.length - 1
                    ? "text-base md:text-lg"
                    : "text-sm md:text-base"
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