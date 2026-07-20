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
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-20">

        {/* Main Footer */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.2fr_1.2fr]">

          {/* Brand */}

          <div>

            <h3 className="text-3xl md:text-4xl font-black whitespace-nowrap">
              Chicken<span className="text-green-500">AtHome</span>
            </h3>

            <p className="mt-5 max-w-sm text-slate-400 leading-7 text-sm md:text-base">
              Fresh chicken delivered across Muzaffarpur. Every order is freshly
              cut after confirmation, hygienically cleaned, carefully packed,
              and delivered straight to your doorstep.
            </p>

            <div className="flex gap-4 mt-8">

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

            <ul className="mt-6 space-y-4 text-slate-400">

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
                  href="#products"
                  className="hover:text-green-400 transition"
                >
                  Products
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
                  href="#faq"
                  className="hover:text-green-400 transition"
                >
                  FAQ
                </a>
              </li>

            </ul>

          </div>

          {/* Why Us */}

          <div>

            <h4 className="text-xl font-bold">
              Why ChickenAtHome?
            </h4>

            <ul className="mt-6 space-y-3 text-slate-400">

              <li>✓ Freshly Cut After Order</li>

              <li>✓ 100% Hygienic Preparation</li>

              <li>✓ Premium Packaging</li>

              <li>✓ Same Day Delivery</li>

              <li>✓ Affordable Pricing</li>

              <li>✓ Trusted by Families</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-xl font-bold">
              Contact Us
            </h4>

            <div className="mt-6 space-y-5 text-slate-400">

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

                <p>Muzaffarpur, Bihar</p>

              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-700 hover:bg-green-800 px-6 py-3 font-semibold transition"
              >
                <FaWhatsapp />

                Order On WhatsApp
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-slate-800 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="text-center md:text-left text-sm text-slate-500">
              © 2026 ChickenAtHome. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-slate-500">

              <span>Freshly Cut</span>

              <span>•</span>

              <span>Hygienically Packed</span>

              <span>•</span>

              <span>Same Day Delivery</span>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}