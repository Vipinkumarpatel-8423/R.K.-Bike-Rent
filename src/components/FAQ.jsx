"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqCategories = [
  {
    id: "general",
    title: "General",
  },
  {
    id: "rental",
    title: "Bike Rental",
  },
  {
    id: "booking",
    title: "Booking",
  },
  {
    id: "payment",
    title: "Payment & Refund",
  },
  {
    id: "documents",
    title: "Documents",
  },
  {
    id: "safety",
    title: "Safety & Support",
  },
];

const faqs = {
  general: [
    {
      question: "What is R.K. Bike Rent?",
      answer:
        "R.K. Bike Rent provides convenient and affordable bike rental services for customers who want to explore the city without owning a bike.",
    },
    {
      question: "Why should I choose R.K. Bike Rent?",
      answer:
        "We offer well-maintained bikes, flexible rental plans, transparent pricing and a simple booking experience to make your ride hassle-free.",
    },
    {
      question: "What types of bikes are available?",
      answer:
        "Our fleet can include scooters, commuter bikes, premium bikes and other popular two-wheelers depending on availability.",
    },
    {
      question: "Where can I use the rented bike?",
      answer:
        "You can use your rented bike for local travel and permitted destinations according to the rental terms and applicable regulations.",
    },
  ],

  rental: [
    {
      question: "How long can I rent a bike?",
      answer:
        "You can choose from daily, weekly or monthly rental plans. Rental duration can be selected according to your travel requirements.",
    },
    {
      question: "Can I extend my rental period?",
      answer:
        "Yes, rental extensions may be possible depending on bike availability. Contact us before your current rental period ends.",
    },
    {
      question: "Are the bikes maintained regularly?",
      answer:
        "Yes. Bikes should be checked and maintained regularly to provide customers with a smooth and reliable riding experience.",
    },
    {
      question: "Can I choose a specific bike?",
      answer:
        "You can request your preferred bike from the available fleet. Final confirmation depends on availability at the time of booking.",
    },
  ],

  booking: [
    {
      question: "How can I book a bike?",
      answer:
        "Select your preferred bike, choose your pickup and return details, and submit your booking request. Our team can then confirm your booking.",
    },
    {
      question: "Can I book a bike in advance?",
      answer:
        "Yes. Advance booking is recommended, especially during weekends, holidays and busy travel periods.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Cancellation is possible according to the applicable cancellation policy. Please check the booking terms before confirming your reservation.",
    },
    {
      question: "What happens after I submit a booking?",
      answer:
        "Once your booking request is received, the rental team can verify availability and contact you with the booking confirmation and next steps.",
    },
  ],

  payment: [
    {
      question: "What payment methods are accepted?",
      answer:
        "Payment options can include UPI, online payment and other methods supported by R.K. Bike Rent.",
    },
    {
      question: "Is a security deposit required?",
      answer:
        "A refundable security deposit may be applicable depending on the bike and rental plan. The exact amount will be communicated before confirmation.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "Refunds depend on the cancellation terms, booking conditions and applicable charges associated with your reservation.",
    },
  ],

  documents: [
    {
      question: "What documents do I need to rent a bike?",
      answer:
        "A valid driving licence and an accepted identity document may be required. Additional documents can vary according to the rental policy.",
    },
    {
      question: "Do I need a valid driving licence?",
      answer:
        "Yes. You must have a valid licence that legally permits you to ride the selected two-wheeler.",
    },
    {
      question: "Can someone else ride my rented bike?",
      answer:
        "Only an authorised rider who meets the rental requirements should ride the vehicle. Please confirm the policy with our team.",
    },
  ],

  safety: [
    {
      question: "Are helmets provided?",
      answer:
        "Helmet availability depends on the rental package and local requirements. Please confirm helmet availability when making your booking.",
    },
    {
      question: "What if the bike has a problem during my rental?",
      answer:
        "Contact R.K. Bike Rent support as soon as possible. Our team can guide you through the next steps based on the situation.",
    },
    {
      question: "What should I do in case of an emergency?",
      answer:
        "Move to a safe location first and contact the appropriate emergency services if required. You can then inform R.K. Bike Rent support.",
    },
  ],
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState(0);

  const currentFAQs = faqs[activeCategory];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenIndex(0);
  };

  const handleFAQClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative w-full max-w-full overflow-hidden bg-slate-50 py-20 sm:py-24">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 max-w-full rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 max-w-full rounded-full bg-yellow-100/70 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-8">

        {/* Heading */}
        <div className="mx-auto w-full max-w-2xl text-center">

          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">

            <HelpCircle
              size={16}
              className="shrink-0 text-orange-500"
            />

            <span className="truncate text-xs font-extrabold uppercase tracking-[0.2em] text-orange-600">
              Top FAQs
            </span>

          </div>

          <h2 className="break-words text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Got Questions?
            <span className="text-cyan-600"> We Have Answers.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl break-words text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Renting a bike made simple. Find quick answers to the
            most common questions about our rental service.
          </p>

        </div>

        {/* FAQ Area */}
        <div className="mt-12 grid w-full min-w-0 gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">

          {/* Categories */}
          <div className="h-fit w-full min-w-0 max-w-full rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">

            <p className="px-3 pb-3 pt-2 text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Explore Topics
            </p>

            {/* Mobile horizontal scroll */}
            <div className="w-full min-w-0 overflow-x-auto pb-1 lg:overflow-visible">

              <div className="flex min-w-max gap-2 lg:min-w-0 lg:flex-col">

                {faqCategories.map((category) => {
                  const isActive = activeCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      onClick={() =>
                        handleCategoryChange(category.id)
                      }
                      className={`shrink-0 whitespace-nowrap rounded-xl px-4 py-3 text-left text-sm font-bold transition duration-200 lg:w-full ${isActive
                        ? "bg-slate-950 text-white shadow-md"
                        : "text-slate-600 hover:bg-cyan-50 hover:text-cyan-700"
                        }`}
                    >
                      {category.title}
                    </button>
                  );
                })}

              </div>

            </div>
          </div>

          {/* Questions */}
          <div className="w-full min-w-0 max-w-full space-y-3">

            {currentFAQs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`w-full min-w-0 max-w-full overflow-hidden rounded-2xl border bg-white transition duration-300 ${isOpen
                    ? "border-cyan-300 shadow-md"
                    : "border-slate-200 shadow-sm hover:border-cyan-200"
                    }`}
                >

                  <button
                    onClick={() => handleFAQClick(index)}
                    className="flex w-full min-w-0 items-center justify-between gap-3 px-4 py-5 text-left sm:gap-5 sm:px-6"
                    aria-expanded={isOpen}
                  >

                    <span
                      className={`min-w-0 flex-1 break-words text-sm font-extrabold sm:text-base ${isOpen
                        ? "text-cyan-700"
                        : "text-slate-800"
                        }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition duration-300 ${isOpen
                        ? "rotate-180 bg-cyan-500 text-white"
                        : "bg-slate-100 text-slate-600"
                        }`}
                    >
                      <ChevronDown size={17} />
                    </span>

                  </button>

                  {isOpen && (
                    <div className="w-full min-w-0 px-4 pb-5 sm:px-6">

                      <div className="w-full min-w-0 border-t border-slate-100 pt-4">

                        <p className="w-full max-w-3xl break-words text-sm leading-6 text-slate-500">
                          {faq.answer}
                        </p>

                      </div>

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-10 flex w-full min-w-0 flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-yellow-50 px-4 py-5 text-center sm:px-6 sm:flex-row sm:text-left">

          <div className="min-w-0 max-w-full">

            <p className="break-words font-extrabold text-slate-900">
              Still have a question?
            </p>

            <p className="mt-1 break-words text-sm text-slate-500">
              Our team is ready to help you with your bike rental.
            </p>

          </div>

          <a
            href="tel:+919999999999"
            className="shrink-0 rounded-full bg-orange-500 px-6 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-orange-600"
          >
            Contact Us
          </a>

        </div> */}

      </div>
    </section>
  );
}