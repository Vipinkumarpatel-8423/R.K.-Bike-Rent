"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Ayush Sharma",
    location: "Local Rider",
    rating: 5,
    review:
      "A very good bike rental experience with transparent pricing and a smooth booking process. The bike was in excellent condition and comfortable to ride. Everything was handled professionally.",
  },
  {
    name: "Pratik Pagare",
    location: "Regular Customer",
    rating: 5,
    review:
      "The staff was extremely cooperative and professional throughout the process. The vehicle was well maintained and thoroughly inspected before handover. Pickup and return were quick and well organized.",
  },
  {
    name: "Dhanesh N",
    location: "Happy Rider",
    rating: 5,
    review:
      "It was an amazing experience renting a bike from R.K. Bike Rent. The booking process was simple and straightforward and the bike was in very good condition. The service quality was excellent.",
  },
  {
    name: "Rahul Verma",
    location: "Weekend Rider",
    rating: 5,
    review:
      "The bike was clean, well maintained and ready on time. The overall rental process was simple and convenient. Definitely a great option for exploring the city.",
  },
  {
    name: "Karan Singh",
    location: "Travel Rider",
    rating: 5,
    review:
      "Very smooth experience from booking to return. The pricing was clear and the staff was helpful throughout the rental. Would definitely recommend R.K. Bike Rent.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const total = testimonials.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const getReviews = () => {
    return [
      testimonials[current],
      testimonials[(current + 1) % total],
      testimonials[(current + 2) % total],
    ];
  };

  const visibleReviews = getReviews();

  return (
    <section className="relative overflow-hidden bg-white py-5 sm:py-10 lg:py-12">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute left-[-150px] top-20 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="pointer-events-none absolute right-[-150px] bottom-0 h-80 w-80 rounded-full bg-yellow-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">

            <span className="h-2 w-2 rounded-full bg-orange-500" />

            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-600">
              Customer Stories
            </span>

          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            What Our
            <span className="text-cyan-600"> Riders Say</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Real experiences from riders who trusted R.K. Bike Rent
            for their journeys.
          </p>

        </div>

        {/* Reviews */}
        <div className="mt-12">

          {/* Desktop / Tablet */}
          <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">

            {visibleReviews.map((testimonial, index) => (
              <ReviewCard
                key={`${testimonial.name}-${index}`}
                testimonial={testimonial}
                featured={index === 1}
              />
            ))}

          </div>

          {/* Mobile */}
          <div className="md:hidden">

            <ReviewCard
              testimonial={testimonials[current]}
              featured
            />

          </div>

        </div>

        {/* Navigation */}
        <div className="mt-9 flex items-center justify-center gap-3">

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-500 bg-white text-cyan-600 shadow-sm transition duration-300 hover:bg-cyan-500 hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5 px-2">

            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to review ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${current === index
                  ? "w-7 bg-orange-500"
                  : "w-2 bg-slate-300"
                  }`}
              />
            ))}

          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-500 bg-white text-cyan-600 shadow-sm transition duration-300 hover:bg-cyan-500 hover:text-white"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Bottom Trust Line */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-4">

          <div className="flex items-center gap-1">

            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}

          </div>

          <span className="hidden h-4 w-px bg-slate-300 sm:block" />

          <p className="text-sm font-semibold text-slate-500">
            Trusted by riders for comfortable and hassle-free journeys
          </p>

        </div>

      </div>
    </section>
  );
}

/* =========================
   REVIEW CARD
========================= */

function ReviewCard({ testimonial, featured }) {
  return (
    <article
      className={`group relative flex min-h-[320px] flex-col overflow-hidden rounded-[1.5rem] border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${featured
        ? "border-orange-200 shadow-md"
        : "border-slate-200 shadow-sm"
        }`}
    >

      {/* Top Accent */}
      <div
        className={`absolute left-0 top-0 h-1 w-full ${featured
          ? "bg-orange-500"
          : "bg-cyan-500"
          }`}
      />

      {/* Quote Icon */}
      <div className="flex items-start justify-between">

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${featured
            ? "bg-orange-50 text-orange-500"
            : "bg-cyan-50 text-cyan-600"
            }`}
        >
          <Quote size={22} />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-0.5 rounded-full bg-yellow-50 px-3 py-1.5">

          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={13}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}

        </div>

      </div>

      {/* Review */}
      <p className="mt-6 flex-1 text-sm leading-7 text-slate-600">
        “{testimonial.review}”
      </p>

      {/* Divider */}
      <div className="my-5 h-px bg-slate-100" />

      {/* Customer */}
      <div className="flex items-center gap-3">

        {/* Avatar */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-black text-white">
          {testimonial.name
            .split(" ")
            .map((word) => word[0])
            .slice(0, 2)
            .join("")}
        </div>

        <div className="min-w-0">

          <h3 className="truncate text-sm font-extrabold text-slate-900">
            {testimonial.name}
          </h3>

          <p className="mt-0.5 text-xs text-slate-400">
            {testimonial.location}
          </p>

        </div>

      </div>

      {/* Decorative Quote */}
      <Quote
        size={70}
        className="pointer-events-none absolute -bottom-5 -right-2 rotate-180 text-slate-100 transition duration-300 group-hover:text-cyan-50"
      />

    </article>
  );
}