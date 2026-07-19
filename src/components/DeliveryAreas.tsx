"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const deliveryAreas = [
  "Brahmpura",
  "Mithanpura",
  "Motijheel",
  "Kalyani",
  "Club Road",
  "Aghoria Bazar",
  "Kalambagh Road",
  "Jawahar Lal Road",
  "Chakkar Maidan",
  "Bela Road",
  "Company Bagh",
  "Imlichatti",
];

export default function DeliveryAreas() {
  return (
    <section
      id="areas"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-green-700 font-semibold tracking-wide">
            DELIVERY LOCATIONS
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Areas We Deliver To
          </h2>

          <p className="text-slate-600 mt-6 max-w-2xl mx-auto leading-7">
            We're expanding continuously across Muzaffarpur.
            If your area isn't listed, simply contact us on WhatsApp.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-20">

          {deliveryAreas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-xl transition cursor-pointer"
            >
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                  <MapPin
                    size={22}
                    className="text-green-700"
                  />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    {area}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Delivery Available
                  </p>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

        <div className="mt-16 text-center">

          <a
            href="https://wa.me/919204810544?text=Hi%20I%20want%20to%20check%20delivery%20availability"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-bold transition"
          >
            Check Your Area
          </a>

        </div>

      </div>
    </section>
  );
}