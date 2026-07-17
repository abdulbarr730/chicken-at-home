"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  ChevronRight,
  MapPin,
  ShieldCheck,
  Truck,
  Scissors,
  ChevronDown,
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

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

      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute right-0 top-96 w-[500px] h-[500px] bg-amber-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="fixed top-0 left-0 right-0 z-[60] bg-green-700 text-white text-center py-2 text-sm">
        Fresh Chicken Delivered Across Muzaffarpur 🚚
      </div>

      <nav
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div className="font-black text-2xl tracking-tight">
            ChickenAtHome
          </div>

          <div className="hidden md:flex items-center gap-8">

            <a href="#why">Why Us</a>
            <a href="#process">Process</a>
            <a href="#areas">Areas</a>
            <a href="#faq">FAQ</a>

            <a
              href={whatsapp}
              target="_blank"
              className="bg-green-700 text-white px-5 py-3 rounded-xl font-semibold"
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
          <div className="bg-white border-t md:hidden">
            <div className="p-6 flex flex-col gap-4">

              <a href="#why">Why Us</a>
              <a href="#process">Process</a>
              <a href="#areas">Areas</a>
              <a href="#faq">FAQ</a>

              <a
                href={whatsapp}
                className="bg-green-700 text-white text-center py-3 rounded-xl"
              >
                Order Now
              </a>

            </div>
          </div>
        )}
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-52 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <div className="inline-flex bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Fresh Chicken Delivered To Your Home
            </div>

            <h1 className="text-6xl md:text-7xl font-black mt-8 leading-tight">
              Fresh Chicken.
              <span className="block text-green-700">
                Cut Only After You Order.
              </span>
            </h1>

            <p className="mt-8 text-lg text-slate-600">
              Skip the crowd, the smell, and the trip to the market.
              Get freshly cut chicken delivered straight to your doorstep.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href={whatsapp}
                target="_blank"
                className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold"
              >
                Order On WhatsApp
              </a>

              <a
                href="tel:+919204810544"
                className="border px-8 py-4 rounded-xl font-bold"
              >
                Call Us
              </a>

            </div>

          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=1400"
              alt="Fresh Chicken"
              className="w-full h-[650px] rounded-[32px] object-cover shadow-2xl"
            />
          </motion.div>

        </div>

      </section>

            {/* WHY US */}

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
              We focus on delivering fresh chicken directly to
              your home without the hassle of visiting the market.
            </p>

          </div>

          <div className="grid lg:grid-cols-4 gap-6 mt-16">

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <ShieldCheck
                size={38}
                className="text-green-700"
              />

              <h3 className="font-bold text-xl mt-6">
                Fresh Every Day
              </h3>

              <p className="text-slate-600 mt-3">
                Fresh chicken prepared daily for every order.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <Scissors
                size={38}
                className="text-green-700"
              />

              <h3 className="font-bold text-xl mt-6">
                Cut After Order
              </h3>

              <p className="text-slate-600 mt-3">
                Prepared only after your order is confirmed.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <Truck
                size={38}
                className="text-green-700"
              />

              <h3 className="font-bold text-xl mt-6">
                Home Delivery
              </h3>

              <p className="text-slate-600 mt-3">
                Fast delivery directly to your doorstep.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <Phone
                size={38}
                className="text-green-700"
              />

              <h3 className="font-bold text-xl mt-6">
                Easy Ordering
              </h3>

              <p className="text-slate-600 mt-3">
                Order directly through WhatsApp in seconds.
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
              className="border rounded-[32px] p-10 relative"
            >
              <div className="absolute top-6 right-6 text-7xl font-black text-slate-100">
                01
              </div>

              <Phone
                size={42}
                className="text-green-700"
              />

              <h3 className="font-bold text-2xl mt-6">
                Place Order
              </h3>

              <p className="text-slate-600 mt-4">
                Send us a WhatsApp message with your order.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="border rounded-[32px] p-10 relative"
            >
              <div className="absolute top-6 right-6 text-7xl font-black text-slate-100">
                02
              </div>

              <Scissors
                size={42}
                className="text-green-700"
              />

              <h3 className="font-bold text-2xl mt-6">
                Fresh Preparation
              </h3>

              <p className="text-slate-600 mt-4">
                Chicken is prepared and packed after confirmation.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="border rounded-[32px] p-10 relative"
            >
              <div className="absolute top-6 right-6 text-7xl font-black text-slate-100">
                03
              </div>

              <Truck
                size={42}
                className="text-green-700"
              />

              <h3 className="font-bold text-2xl mt-6">
                Delivered To You
              </h3>

              <p className="text-slate-600 mt-4">
                Fresh chicken arrives at your doorstep.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* QUALITY YOU CAN TRUST */}

      <section className="py-28 bg-green-700 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="font-semibold">
                OUR PROMISE
              </span>

              <h2 className="text-5xl md:text-6xl font-black mt-6">
                Quality You Can Trust
              </h2>

              <p className="mt-6 text-lg text-green-100">
                Every order is prepared with care and delivered
                fresh to ensure the best quality possible.
              </p>

              <div className="space-y-5 mt-10">

                <div className="flex items-center gap-4">
                  <ChevronRight />
                  <span>
                    Cut only after order confirmation
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <ChevronRight />
                  <span>
                    Hygienically prepared
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <ChevronRight />
                  <span>
                    Freshly packed
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <ChevronRight />
                  <span>
                    Delivered to your doorstep
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <ChevronRight />
                  <span>
                    Not satisfied? We'll make it right
                  </span>
                </div>

              </div>

              <a
                href={whatsapp}
                target="_blank"
                className="inline-flex mt-10 bg-white text-green-700 px-8 py-4 rounded-xl font-bold"
              >
                Order Fresh Chicken
              </a>

            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1400"
                alt="Fresh Chicken"
                className="rounded-[32px] shadow-2xl w-full h-[600px] object-cover"
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
                className="
                px-6
                py-4
                rounded-full
                border
                bg-white
                hover:bg-green-700
                hover:text-white
                transition
                cursor-pointer
                flex
                items-center
                gap-2
                font-medium
                shadow-sm
                "
              >
                <MapPin
                  size={16}
                  className="text-green-600"
                />

                {area}
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* REVIEWS */}

      {/* REVIEWS */}

<section className="py-28 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <span className="text-green-700 font-semibold tracking-wider">
        VERIFIED CUSTOMERS
      </span>

      <h2 className="text-5xl md:text-6xl font-black mt-4">
        What Our Customers Say
      </h2>

      <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
        Trusted by customers across Muzaffarpur.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-8 mt-16">

      <div className="bg-white rounded-[32px] p-8 shadow-lg border hover:-translate-y-2 transition">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-xl">Ayaan</h3>
            <p className="text-slate-500 text-sm">
              📍 Tilak Maidan, Muzaffarpur
            </p>
          </div>

          <div className="text-right">
            <div className="text-yellow-500">
              ⭐⭐⭐⭐⭐
            </div>

            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
              Verified Customer
            </span>
          </div>
        </div>

        <p className="mt-6 text-slate-600 italic leading-relaxed">
          "The quality was excellent. The chicken was fresh,
          clean, and hygienically packed. I highly recommend
          everyone to order from ChickenAtHome."
        </p>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-lg border hover:-translate-y-2 transition">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-xl">Athrav Arya</h3>
            <p className="text-slate-500 text-sm">
              📍 Beriya MIT, Muzaffarpur
            </p>
          </div>

          <div className="text-right">
            <div className="text-yellow-500">
              ⭐⭐⭐⭐⭐
            </div>

            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
              Verified Customer
            </span>
          </div>
        </div>

        <p className="mt-6 text-slate-600 italic leading-relaxed">
          "The chicken was fresh and better than what I usually
          get locally. Thank you for starting this service in
          Muzaffarpur. I'll definitely recommend ChickenAtHome
          to my friends and family."
        </p>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-lg border hover:-translate-y-2 transition">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-xl">Mansoori</h3>
            <p className="text-slate-500 text-sm">
              📍 Chandwara, Muzaffarpur
            </p>
          </div>

          <div className="text-right">
            <div className="text-yellow-500">
              ⭐⭐⭐⭐⭐
            </div>

            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
              Verified Customer
            </span>
          </div>
        </div>

        <p className="mt-6 text-slate-600 italic leading-relaxed">
          "Good quality chicken. It was fresh, clean, and well
          prepared. Overall, a great experience."
        </p>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-lg border hover:-translate-y-2 transition">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-xl">Owais</h3>
            <p className="text-slate-500 text-sm">
              📍 Chandwara, Muzaffarpur
            </p>
          </div>

          <div className="text-right">
            <div className="text-yellow-500">
              ⭐⭐⭐⭐⭐
            </div>

            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
              Verified Customer
            </span>
          </div>
        </div>

        <p className="mt-6 text-slate-600 italic leading-relaxed">
          "The order was delivered on time. The chicken was fresh,
          clean, and of very good quality."
        </p>
      </div>

      <div className="lg:col-span-2 bg-gradient-to-r from-green-50 to-white rounded-[32px] p-8 shadow-lg border hover:-translate-y-2 transition">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-xl">Nikhil</h3>
            <p className="text-slate-500 text-sm">
              📍 Rambagh, Muzaffarpur
            </p>
          </div>

          <div className="text-right">
            <div className="text-yellow-500">
              ⭐⭐⭐⭐⭐
            </div>

            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
              Verified Customer
            </span>
          </div>
        </div>

        <p className="mt-6 text-slate-600 italic leading-relaxed text-lg">
          "Best quality chicken. Fresh, hygienic, and exactly
          what I was looking for."
        </p>
      </div>

    </div>

  </div>

</section>

      <section className="py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">
      <span className="text-green-700 font-semibold">
        OUR PRODUCTS
      </span>

      <h2 className="text-5xl font-black mt-4">
        Freshly Prepared Every Day
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mt-16">

      <img
        src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=1400"
        alt=""
        className="h-80 w-full object-cover rounded-3xl shadow-lg hover:scale-105 transition"
      />

      <img
        src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1400"
        alt=""
        className="h-80 w-full object-cover rounded-3xl shadow-lg hover:scale-105 transition"
      />

      <img
        src="https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1400"
        alt=""
        className="h-80 w-full object-cover rounded-3xl shadow-lg hover:scale-105 transition"
      />

    </div>
  </div>
</section>

      {/* FAQ ACCORDION */}

      <section
        id="faq"
        className="py-28 bg-slate-50"
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

          <div className="space-y-5 mt-16">

            <details className="group border rounded-3xl p-6 bg-white shadow-sm">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg">
                Is the chicken fresh?

                <ChevronDown className="transition group-open:rotate-180" />
              </summary>

              <p className="mt-4 text-slate-600">
                Yes. Every order is prepared after confirmation.
              </p>
            </details>

            <details className="group border rounded-3xl p-6 bg-white shadow-sm">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg">
                How do I place an order?

                <ChevronDown className="transition group-open:rotate-180" />
              </summary>

              <p className="mt-4 text-slate-600">
                Simply click the WhatsApp button and send us your requirements.
              </p>
            </details>

            <details className="group border rounded-3xl p-6 bg-white shadow-sm">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg">
                Which areas do you deliver to?

                <ChevronDown className="transition group-open:rotate-180" />
              </summary>

              <p className="mt-4 text-slate-600">
                We deliver across major areas of Muzaffarpur.
              </p>
            </details>

            <details className="group border rounded-3xl p-6 bg-white shadow-sm">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg">
                How can I contact you?

                <ChevronDown className="transition group-open:rotate-180" />
              </summary>

              <p className="mt-4 text-slate-600">
                Call us directly or message us on WhatsApp anytime.
              </p>
            </details>

          </div>

        </div>
      </section>

            {/* FINAL CTA */}

      <section className="py-28 bg-green-700 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="font-semibold tracking-wider">
            ORDER TODAY
          </span>

          <h2 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
            Fresh Chicken
            <br />
            Delivered To Your Door.
          </h2>

          <p className="mt-8 text-xl text-green-100 max-w-3xl mx-auto">
            Skip the market.
            Skip the crowd.
            Get freshly prepared chicken delivered directly
            to your doorstep.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">

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

      {/* FOOTER */}

      <footer className="bg-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* BRAND */}

            <div>

              <h3 className="text-3xl font-black">
                ChickenAtHome
              </h3>

              <p className="text-slate-400 mt-6 leading-relaxed">
                Fresh chicken delivered across Muzaffarpur.
                Order directly through WhatsApp and get
                fresh chicken delivered to your doorstep.
              </p>

              <div className="flex gap-4 mt-8">

                <a
                  href="https://www.instagram.com/chikkenathome.official?igsh=dDEwajc3dWx5a3d6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    size={24}
                    className="hover:text-pink-500 transition"
                  />
                </a>

                <a
                  href="https://www.facebook.com/share/1GAuQSmMPk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    size={24}
                    className="hover:text-blue-500 transition"
                  />
                </a>

                <a
                  href={whatsapp}
                  target="_blank"
                >
                  <FaWhatsapp
                    size={24}
                    className="hover:text-green-500 transition"
                  />
                </a>

                <a
                  href="#"
                  target="_blank"
                >
                  <FaYoutube
                    size={24}
                    className="hover:text-red-500 transition"
                  />
                </a>

              </div>

            </div>

            {/* QUICK LINKS */}

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
                  Delivery Areas
                </a>

                <a
                  href="#faq"
                  className="block hover:text-green-400 transition"
                >
                  FAQ
                </a>

              </div>

            </div>

            {/* AREAS */}

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

            {/* CONTACT */}

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
                  className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl font-semibold transition"
                >
                  <FaWhatsapp />
                  WhatsApp Order
                </a>

              </div>

            </div>

          </div>

          {/* BOTTOM BAR */}

          <div className="border-t border-slate-800 mt-16 pt-8">

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

              <p className="text-slate-500">
                © 2026 ChickenAtHome. All Rights Reserved.
              </p>

              <div className="flex gap-6 text-slate-500 text-sm">

                <span>
                  Freshly Cut
                </span>

                <span>
                  Hygienically Packed
                </span>

                <span>
                  Home Delivery
                </span>

              </div>

            </div>

          </div>

        </div>

      </footer>

      {/* FLOATING WHATSAPP */}

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999]"
      >

        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>

        <div className="relative h-16 w-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300">
          <FaWhatsapp
            size={34}
            color="white"
          />
        </div>

      </a>

    </main>
  );
}