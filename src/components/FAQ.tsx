"use client";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the chicken fresh?",
    answer:
      "Yes. Every order is freshly cut only after your order is confirmed. We never keep pre-cut stock, ensuring maximum freshness.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Simply tap the WhatsApp button, send us your order, and we'll confirm it right away. You can also call us directly.",
  },
  {
    question: "Can I choose the cutting style?",
    answer:
      "Absolutely! You can request Whole Chicken, Curry Cut, Boneless, or your preferred custom cutting style while placing your order.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on your location and order volume, but we always aim to deliver your fresh chicken as quickly as possible.",
  },
  {
    question: "How is the chicken packed?",
    answer:
      "Every order is hygienically cleaned, quality checked, and packed in premium leak-proof packaging before dispatch.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach us anytime through WhatsApp or by giving us a quick phone call. We'll be happy to help.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-slate-50"
    >
      <div className="max-w-4xl mx-auto px-5 md:px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs md:text-sm font-semibold">
            FAQ
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Frequently Asked
            <span className="block text-green-700">
              Questions
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-slate-600 leading-7">
            Everything you need to know before placing your first order.
          </p>

        </div>

        {/* FAQ */}

        <div className="mt-12 md:mt-16 space-y-4">

          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-5 cursor-pointer list-none p-5 md:p-6">

                <span className="text-base md:text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className="flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                />

              </summary>

              <div className="px-5 md:px-6 pb-5 md:pb-6">

                <div className="h-px bg-slate-100 mb-5" />

                <p className="text-sm md:text-base leading-7 text-slate-600">
                  {faq.answer}
                </p>

              </div>

            </details>
          ))}

        </div>

      </div>
    </section>
  );
}