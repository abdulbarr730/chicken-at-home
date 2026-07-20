import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Promise from "@/components/Promise";
import DeliveryAreas from "@/components/DeliveryAreas";
import Reviews from "@/components/Reviews";
import Products from "@/components/Products";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WhyTrustUs from "@/components/WhyTrustUs";

export default function Home() {
  return (
    <main className="bg-white text-slate-900 overflow-hidden">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Promise />
      <WhyTrustUs />
      <Reviews />
      <Products />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}