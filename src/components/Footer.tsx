"use client";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const whatsapp =
    "https://wa.me/919204810544?text=Hi%20I%20want%20to%20order%20fresh%20chicken";

  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h3 className="text-3xl font-black">
              ChickenAtHome
            </h3>

            <p className="text-slate-400 mt-6 leading-8">
              Fresh chicken delivered across Muzaffarpur.
              We cut your chicken only after your order is confirmed,
              hygienically clean it, carefully pack it, and deliver it
              straight to your doorstep.
            </p>

            <div className="flex gap-5 mt-8">

              <a
                href="https://www.instagram.com/chikkenathome.official?igsh=dDEwajc3dWx5a3d6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.facebook.com/share/1GAuQSmMPk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaWhatsapp size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-red-600 transition"
              >
                <FaYoutube size={20} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="text-xl font-bold">
              Quick Links
            </h4>

            <ul className="space-y-4 mt-8 text-slate-400">

              <li>
                <a
                  href="#why"
                  className="hover:text-green-400 transition"
                >
                  Why Choose Us
                </a>
              </li>

              <li>
                <a
                  href="#process"
                  className="hover:text-green-400 transition"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#areas"
                  className="hover:text-green-400 transition"
                >
                  Delivery Areas
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="hover:text-green-400 transition"
                >
                  FAQ
                </a>
              </li>

            </ul>

          </div>

          {/* Delivery Areas */}

          <div>

            <h4 className="text-xl font-bold">
              Delivery Areas
            </h4>

            <ul className="space-y-3 mt-8 text-slate-400">

              <li>Brahmpura</li>
              <li>Mithanpura</li>
              <li>Motijheel</li>
              <li>Kalyani</li>
              <li>Club Road</li>
              <li>Aghoria Bazar</li>
              <li>Kalambagh Road</li>
              <li>Jawahar Lal Road</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-xl font-bold">
              Contact Us
            </h4>

            <div className="mt-8 space-y-5 text-slate-400">

              <div>

                <p className="font-semibold text-white">
                  Phone
                </p>

                <a
                  href="tel:+919204810544"
                  className="hover:text-green-400 transition"
                >
                  +91 92048 10544
                </a>

              </div>

              <div>

                <p className="font-semibold text-white">
                  Location
                </p>

                <p>
                  Muzaffarpur, Bihar
                </p>

              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-green-700 hover:bg-green-800 px-6 py-3 font-semibold text-white transition"
              >
                <FaWhatsapp />

                WhatsApp Order
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-20 pt-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            <p className="text-slate-500 text-center lg:text-left">
              © 2026 ChickenAtHome. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">

              <span>Freshly Cut</span>

              <span>Hygienically Packed</span>

              <span>Fast Home Delivery</span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}