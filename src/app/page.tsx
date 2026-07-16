"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  ChevronRight,
  ShieldCheck,
  Truck,
  Scissors,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsapp =
    "https://wa.me/919204810544?text=Hi%20I%20want%20to%20order%20fresh%20chicken";

  return (
    <main className="bg-white text-slate-900 overflow-hidden">

      {/* Background Effects */}

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40" />

        <div className="absolute right-0 top-96 w-[500px] h-[500px] bg-amber-100 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Top Announcement */}

      <div className="fixed top-0 left-0 right-0 z-[60] bg-green-700 text-white text-center py-2 text-sm">
        Fresh Chicken Delivered Across Muzaffarpur 🚚
      </div>

      {/* Navbar */}

      <nav
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div className="font-black text-2xl">
            Chicken
            <span className="text-green-700">
              AtHome
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">

            <a
              href="#why"
              className="hover:text-green-700 transition"
            >
              Why Us
            </a>

            <a
              href="#process"
              className="hover:text-green-700 transition"
            >
              Process
            </a>

            <a
              href="#areas"
              className="hover:text-green-700 transition"
            >
              Areas
            </a>

            <a
              href="#faq"
              className="hover:text-green-700 transition"
            >
              FAQ
            </a>

            <a
              href={whatsapp}
              target="_blank"
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl font-semibold transition hover:scale-105"
            >
              Order Now
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="p-6 flex flex-col gap-4">

              <a href="#why">
                Why Us
              </a>

              <a href="#process">
                Process
              </a>

              <a href="#areas">
                Areas
              </a>

              <a href="#faq">
                FAQ
              </a>

              <a
                href={whatsapp}
                target="_blank"
                className="bg-green-700 text-white rounded-xl py-3 text-center font-semibold"
              >
                Order Now
              </a>

            </div>
          </div>
        )}
      </nav>

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 pt-40 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="inline-flex bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Fresh Chicken Delivered To Your Home
            </div>

            <h1 className="text-6xl md:text-7xl font-black mt-8 leading-tight">
              Fresh Chicken.
              <span className="block text-green-700">
                Cut After You Order.
              </span>
            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed">
              Skip the crowd, the smell, and the trip to the market.
              Get freshly cut chicken delivered straight to your doorstep.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href={whatsapp}
                target="_blank"
                className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-800 transition hover:scale-105"
              >
                Order On WhatsApp
              </a>

              <a
                href="tel:+919204810544"
                className="border px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition"
              >
                Call Us
              </a>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div>✅ Freshly Cut</div>
              <div>✅ Hygienic Packing</div>
              <div>✅ Home Delivery</div>
              <div>✅ Cash On Delivery</div>

            </div>

          </motion.div>

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=1200"
              alt="Fresh Chicken"
              className="rounded-[32px] shadow-2xl w-full h-[600px] object-cover"
            />
          </motion.div>

        </div>

      </section>

      {/* Trust Strip */}

      <section className="border-y bg-white">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <div className="text-3xl mb-2">
                🔪
              </div>

              <h3 className="font-bold">
                Freshly Cut
              </h3>
            </div>

            <div>
              <div className="text-3xl mb-2">
                🧼
              </div>

              <h3 className="font-bold">
                Hygienic Packing
              </h3>
            </div>

            <div>
              <div className="text-3xl mb-2">
                🚚
              </div>

              <h3 className="font-bold">
                Doorstep Delivery
              </h3>
            </div>

            <div>
              <div className="text-3xl mb-2">
                💳
              </div>

              <h3 className="font-bold">
                Cash On Delivery
              </h3>
            </div>

          </div>

        </div>

      </section>
            {/* WHY CHOOSE US */}

      <section
        id="why"
        className="py-28 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">

              <span className="text-green-700 font-semibold">
                WHY CHOOSE US
              </span>

              <h2 className="text-5xl md:text-6xl font-black mt-4">
                Freshness You Can Trust
              </h2>

              <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
                We focus on one thing:
                delivering fresh chicken to your home
                without the hassle of traditional markets.
              </p>

            </div>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6 mt-16">

            <motion.div
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <ShieldCheck
                className="text-green-700"
                size={36}
              />

              <h3 className="font-bold text-xl mt-6">
                Fresh Every Day
              </h3>

              <p className="text-slate-600 mt-3">
                No frozen stock.
                Fresh chicken prepared daily.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <Scissors
                className="text-green-700"
                size={36}
              />

              <h3 className="font-bold text-xl mt-6">
                Cut After Order
              </h3>

              <p className="text-slate-600 mt-3">
                We prepare your order
                only after confirmation.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <Truck
                className="text-green-700"
                size={36}
              />

              <h3 className="font-bold text-xl mt-6">
                Fast Delivery
              </h3>

              <p className="text-slate-600 mt-3">
                Fresh chicken delivered
                directly to your doorstep.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <Phone
                className="text-green-700"
                size={36}
              />

              <h3 className="font-bold text-xl mt-6">
                Easy Ordering
              </h3>

              <p className="text-slate-600 mt-3">
                Place your order
                directly through WhatsApp.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section
        id="process"
        className="py-28"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-green-700 font-semibold">
              SIMPLE PROCESS
            </span>

            <h2 className="text-5xl md:text-6xl font-black mt-4">
              How It Works
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">

            <motion.div
              whileHover={{ y: -10 }}
              className="relative border rounded-[32px] p-10"
            >
              <div className="absolute top-6 right-6 text-7xl font-black text-slate-100">
                01
              </div>

              <Phone
                size={40}
                className="text-green-700"
              />

              <h3 className="font-bold text-2xl mt-6">
                Place Order
              </h3>

              <p className="text-slate-600 mt-4">
                Message us on WhatsApp
                and tell us what you need.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="relative border rounded-[32px] p-10"
            >
              <div className="absolute top-6 right-6 text-7xl font-black text-slate-100">
                02
              </div>

              <Scissors
                size={40}
                className="text-green-700"
              />

              <h3 className="font-bold text-2xl mt-6">
                Freshly Prepared
              </h3>

              <p className="text-slate-600 mt-4">
                Chicken is prepared,
                cut and packed after
                your order is confirmed.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="relative border rounded-[32px] p-10"
            >
              <div className="absolute top-6 right-6 text-7xl font-black text-slate-100">
                03
              </div>

              <Truck
                size={40}
                className="text-green-700"
              />

              <h3 className="font-bold text-2xl mt-6">
                Delivered
              </h3>

              <p className="text-slate-600 mt-4">
                Fresh chicken delivered
                directly to your home.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FRESHNESS PROMISE */}

      <section className="py-28 bg-green-700 text-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="font-semibold">
                OUR PROMISE
              </span>

              <h2 className="text-5xl md:text-6xl font-black mt-6">
                Freshness Guaranteed
              </h2>

              <p className="mt-6 text-green-100 text-lg">
                We believe fresh food should be convenient.
                That's why every order is prepared only after
                confirmation and delivered as quickly as possible.
              </p>

              <div className="space-y-5 mt-10">

                <div className="flex items-center gap-4">
                  <ChevronRight />
                  <span>
                    Prepared after order confirmation
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <ChevronRight />
                  <span>
                    Hygienically packed
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <ChevronRight />
                  <span>
                    Delivered directly to your home
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <ChevronRight />
                  <span>
                    Refuse delivery if not satisfied
                  </span>
                </div>

              </div>

              <a
                href={whatsapp}
                target="_blank"
                className="inline-flex mt-10 bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Order Fresh Chicken
              </a>

            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=1400"
                alt="Fresh Food"
                className="rounded-[32px] shadow-2xl"
              />
            </motion.div>

          </div>

        </div>

      </section>
            {/* DELIVERY AREAS */}

      <section
        id="areas"
        className="py-28 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-green-700 font-semibold">
              DELIVERY LOCATIONS
            </span>

            <h2 className="text-5xl md:text-6xl font-black mt-4">
              Areas We Deliver To
            </h2>

            <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
              We're expanding continuously across Muzaffarpur.
              If your area isn't listed, contact us on WhatsApp.
            </p>

          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-16">

            {[
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
            ].map((area) => (
              <motion.div
                key={area}
                whileHover={{
                  scale: 1.05,
                }}
                className="px-6 py-4 rounded-full border bg-white hover:bg-green-700 hover:text-white transition cursor-pointer flex items-center gap-2"
              >
                <MapPin size={18} />
                {area}
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}

      <section
        id="faq"
        className="py-28"
      >
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center">

            <span className="text-green-700 font-semibold">
              FAQ
            </span>

            <h2 className="text-5xl md:text-6xl font-black mt-4">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-6 mt-16">

            <div className="border rounded-3xl p-8 hover:shadow-lg transition">
              <h3 className="font-bold text-xl">
                Is the chicken fresh?
              </h3>

              <p className="text-slate-600 mt-4">
                Yes. We prepare chicken after your order
                is confirmed. We do not keep prepared stock
                waiting for customers.
              </p>
            </div>

            <div className="border rounded-3xl p-8 hover:shadow-lg transition">
              <h3 className="font-bold text-xl">
                How do I place an order?
              </h3>

              <p className="text-slate-600 mt-4">
                Simply click the WhatsApp button and
                send us your requirements.
              </p>
            </div>

            <div className="border rounded-3xl p-8 hover:shadow-lg transition">
              <h3 className="font-bold text-xl">
                Can I refuse delivery?
              </h3>

              <p className="text-slate-600 mt-4">
                Absolutely. If you're not satisfied with
                the quality at delivery, you may refuse
                the order.
              </p>
            </div>

            <div className="border rounded-3xl p-8 hover:shadow-lg transition">
              <h3 className="font-bold text-xl">
                Which areas do you serve?
              </h3>

              <p className="text-slate-600 mt-4">
                We currently deliver across major areas
                of Muzaffarpur and continue expanding.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BIG CTA */}

      <section className="py-28 bg-green-700 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="font-semibold">
            ORDER TODAY
          </span>

          <h2 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
            Fresh Chicken
            <br />
            Delivered To Your Door.
          </h2>

          <p className="mt-8 text-xl text-green-100 max-w-3xl mx-auto">
            Skip the market. Skip the crowd.
            Get freshly prepared chicken delivered
            directly to your home.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mt-12">

            <a
              href={whatsapp}
              target="_blank"
              className="bg-white text-green-700 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition"
            >
              Order On WhatsApp
            </a>

            <a
              href="tel:+919204810544"
              className="border border-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-green-700 transition"
            >
              Call Now
            </a>

          </div>

        </div>

      </section>

      {/* PREMIUM FOOTER */}

      <footer className="bg-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            <div>

              <h3 className="text-3xl font-black">
                Chicken
                <span className="text-green-500">
                  AtHome
                </span>
              </h3>

              <p className="text-slate-400 mt-6 leading-relaxed">
                Fresh chicken delivered across Muzaffarpur.
                Order directly through WhatsApp and get
                doorstep delivery.
              </p>

            </div>

            <div>

              <h4 className="font-bold text-lg">
                Quick Links
              </h4>

              <div className="space-y-3 mt-6 text-slate-400">

                <a
                  href="#why"
                  className="block hover:text-green-400 transition"
                >
                  Why Us
                </a>

                <a
                  href="#process"
                  className="block hover:text-green-400 transition"
                >
                  Process
                </a>

                <a
                  href="#areas"
                  className="block hover:text-green-400 transition"
                >
                  Areas
                </a>

                <a
                  href="#faq"
                  className="block hover:text-green-400 transition"
                >
                  FAQ
                </a>

              </div>

            </div>

            <div>

              <h4 className="font-bold text-lg">
                Delivery Areas
              </h4>

              <div className="space-y-3 mt-6 text-slate-400">

                <p>Brahmpura</p>
                <p>Mithanpura</p>
                <p>Motijheel</p>
                <p>Kalyani</p>
                <p>Club Road</p>
                <p>Aghoria Bazar</p>

              </div>

            </div>

            <div>

              <h4 className="font-bold text-lg">
                Contact
              </h4>

              <div className="space-y-4 mt-6 text-slate-400">

                <p>
                  📞 +91 92048 10544
                </p>

                <p>
                  📍 Muzaffarpur, Bihar
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  className="inline-block bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl font-semibold transition"
                >
                  WhatsApp Order
                </a>

              </div>

            </div>

          </div>

          <div className="border-t border-slate-800 mt-16 pt-8">

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

              <p className="text-slate-500">
                © 2026 Chicken At Home.
              </p>

              <div className="flex gap-6 text-slate-500">

                <span>Freshly Cut</span>
                <span>Hygienic Packing</span>
                <span>Home Delivery</span>

              </div>

            </div>

          </div>

        </div>

      </footer>

      {/* FLOATING WHATSAPP BUTTON */}

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999]"
      >
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>

        <div className="relative h-16 w-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300">
          <FaWhatsapp size={34} color="white" />
        </div>
      </a>

    </main>
  );
}