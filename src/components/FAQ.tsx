"use client";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the chicken fresh?",
    answer:
      "Yes. Every order is freshly cut only after your order is confirmed. We never keep pre-cut stock.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Simply click the WhatsApp button, send us your order, and we'll confirm it immediately.",
  },
  {
    question: "Which areas do you deliver to?",
    answer:
      "We currently deliver across major areas of Muzaffarpur and are continuously expanding our delivery network.",
  },
  {
    question: "Can I choose the cutting style?",
    answer:
      "Absolutely. You can request Curry Cut, Boneless, Whole Chicken, or any custom cutting style while placing your order.",
  },
  {
    question: "What are your delivery timings?",
    answer:
      "We deliver throughout the day based on order availability. Contact us on WhatsApp for today's delivery schedule.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can call us directly or message us anytime on WhatsApp.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">

          <span className="text-green-700 font-semibold tracking-wide">
            FAQ
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-slate-600">
            Everything you need to know before placing your order.
          </p>

        </div>

        <div className="space-y-5 mt-16">

          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border bg-white shadow-sm p-6"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-lg">

                {faq.question}

                <ChevronDown className="transition-transform duration-300 group-open:rotate-180" />

              </summary>

              <p className="mt-5 text-slate-600 leading-7">
                {faq.answer}
              </p>

            </details>
          ))}

        </div>

      </div>
    </section>
  );
}