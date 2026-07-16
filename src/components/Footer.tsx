
"use client";

// Premium Licious-inspired single-file landing page
// Next.js 16 + TSX
// Requires: framer-motion, lucide-react

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu, X, Phone, Star, MapPin, Truck,
  ShieldCheck, Scissors, ChevronRight
} from "lucide-react";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsapp =
    "https://wa.me/919204810544?text=Hi%20I%20want%20to%20order%20fresh%20chicken";

  const areas = [
    "Brahmpura","Mithanpura","Motijheel","Kalyani",
    "Club Road","Aghoria Bazar","Kalambagh Road","Jawahar Lal Road"
  ];

  return (
    <main className="bg-white text-slate-900 overflow-hidden">
      <div className="bg-green-700 text-white text-center py-2 text-sm">
        Fresh Chicken Delivered Across Muzaffarpur • Same Day Delivery
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-white/90 backdrop-blur shadow-lg mt-0" : "bg-transparent mt-9"}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-black text-2xl">Chicken<span className="text-green-700">AtHome</span></div>

          <div className="hidden md:flex gap-8 items-center">
            <a href="#why">Why Us</a>
            <a href="#process">Process</a>
            <a href="#areas">Areas</a>
            <a href="#reviews">Reviews</a>
            <a href={whatsapp} target="_blank" className="bg-green-700 text-white px-5 py-3 rounded-xl">Order Now</a>
          </div>

          <button className="md:hidden" onClick={()=>setOpen(!open)}>
            {open ? <X/> : <Menu/>}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t p-6">
            <a href={whatsapp} className="block bg-green-700 text-white text-center py-3 rounded-xl">Order Now</a>
          </div>
        )}
      </nav>

      <section className="pt-40 pb-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
            <div className="inline-flex bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-semibold">
              Fresh Chicken Delivered In Muzaffarpur
            </div>

            <h1 className="text-6xl md:text-7xl font-black mt-6 leading-tight">
              Fresh Chicken.
              <span className="block text-green-700">Cut After You Order.</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Skip the market crowds and get hygienically prepared chicken delivered directly to your doorstep.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a href={whatsapp} className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold">
                Order On WhatsApp
              </a>
              <a href="tel:+919204810544" className="border px-8 py-4 rounded-xl font-bold">
                Call Us
              </a>
            </div>
          </motion.div>

          <motion.img
            animate={{ y:[0,-12,0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=1200"
            className="rounded-[32px] h-[600px] w-full object-cover shadow-2xl"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-4 gap-6">
          {["500+ Orders","100% Fresh","Same Day","4.9 Rating"].map((i)=>(
            <div key={i} className="border rounded-3xl p-8 text-center hover:shadow-xl transition">
              <div className="font-black text-3xl text-green-700">{i}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center">Why Choose Us</h2>
          <div className="grid lg:grid-cols-4 gap-6 mt-14">
            {["Fresh Every Day","Hygienic Process","Doorstep Delivery","Quality Guarantee"].map(v=>(
              <div key={v} className="bg-white rounded-3xl p-8 hover:-translate-y-2 transition shadow-sm">
                <ShieldCheck className="text-green-700"/>
                <h3 className="font-bold text-xl mt-4">{v}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-14">
            {["Order","Fresh Cut","Packed","Delivered"].map((s,i)=>(
              <div key={s} className="border rounded-3xl p-8">
                <div className="text-6xl font-black text-slate-100">0{i+1}</div>
                <h3 className="font-bold text-2xl">{s}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center">Delivery Areas</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {areas.map(a=>(
              <div key={a} className="px-5 py-3 rounded-full border hover:bg-green-700 hover:text-white transition">
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {["Rahul Kumar","Priya Singh","Aman Verma"].map(n=>(
              <div key={n} className="border rounded-3xl p-8">
                <div className="flex gap-1 mb-4">{[1,2,3,4,5].map(i=><Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400"/>)}</div>
                <p>Fresh chicken and fast delivery.</p>
                <p className="font-bold mt-4">{n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-green-700 text-white text-center">
        <h2 className="text-5xl font-black">Ready To Order Fresh Chicken?</h2>
        <a href={whatsapp} className="inline-block mt-8 bg-white text-green-700 px-8 py-4 rounded-xl font-bold">
          Order On WhatsApp
        </a>
      </section>

      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div><h3 className="font-black text-2xl">Chicken At Home</h3></div>
          <div><h4 className="font-bold">Links</h4></div>
          <div><h4 className="font-bold">Contact</h4><p>+91 92048 10544</p></div>
          <div><a href={whatsapp}>WhatsApp Orders</a></div>
        </div>
      </footer>
    </main>
  );
}
