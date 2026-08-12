"use client";

import Image from "next/image";
import Link from "next/link";
import { Bike, CalendarDays, Gauge, Users } from "lucide-react";
import { useState } from "react";

const bikes = [
  {
    id: 1,
    name: "Honda Activa 6G",
    category: "Scooters",
    image: "/images/bikes/activa.jpg",
    price: "₹499",
    type: "Scooter",
    transmission: "Automatic",
    seats: "2 Seater",
  },
  {
    id: 2,
    name: "Royal Enfield Classic 350",
    category: "Cruiser",
    image: "/images/bikes/classic-350.jpg",
    price: "₹899",
    type: "Cruiser",
    transmission: "Manual",
    seats: "2 Seater",
  },
  {
    id: 3,
    name: "Honda Shine",
    category: "Bikes",
    image: "/images/bikes/shine.jpg",
    price: "₹599",
    type: "Commuter",
    transmission: "Manual",
    seats: "2 Seater",
  },
  {
    id: 4,
    name: "Yamaha MT-15",
    category: "Sports",
    image: "/images/bikes/mt15.jpg",
    price: "₹999",
    type: "Sports",
    transmission: "Manual",
    seats: "2 Seater",
  },
  {
    id: 5,
    name: "TVS Jupiter",
    category: "Scooters",
    image: "/images/bikes/jupiter.jpg",
    price: "₹499",
    type: "Scooter",
    transmission: "Automatic",
    seats: "2 Seater",
  },
  {
    id: 6,
    name: "Royal Enfield Hunter 350",
    category: "Cruiser",
    image: "/images/bikes/hunter-350.jpg",
    price: "₹849",
    type: "Cruiser",
    transmission: "Manual",
    seats: "2 Seater",
  },
];

const categories = [
  "All",
  "Scooters",
  "Bikes",
  "Cruiser",
  "Sports",
];

export default function BikesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBikes =
    activeCategory === "All"
      ? bikes
      : bikes.filter((bike) => bike.category === activeCategory);

  return (
    <main className="w-full max-w-full overflow-hidden bg-slate-50">

      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden bg-slate-950">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-slate-950 to-slate-950" />

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
              <Bike size={15} />
              Our Bikes
            </span>

            <h1 className="mt-5 break-words text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find Your
              <span className="text-orange-400"> Perfect Ride</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              From everyday scooters to powerful bikes, choose a ride
              that fits your journey and explore the road your way.
            </p>

          </div>

        </div>
      </section>


      {/* ================= BIKES ================= */}
      <section className="relative w-full py-14 sm:py-16 lg:py-20">

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div className="min-w-0">

              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
                Choose Your Ride
              </span>

              <h2 className="mt-2 break-words text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Explore Our
                <span className="text-cyan-600"> Bike Collection</span>
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-right">
              Well-maintained rides with flexible rental plans for
              your daily travel and adventures.
            </p>

          </div>


          {/* ================= FILTERS ================= */}
          <div className="mt-8 w-full overflow-x-auto pb-2">

            <div className="flex min-w-max gap-2">

              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-5 py-2.5 text-sm font-bold transition duration-200 ${active
                      ? "bg-slate-950 text-white shadow-md"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-cyan-300 hover:text-cyan-600"
                      }`}
                  >
                    {category}
                  </button>
                );
              })}

            </div>

          </div>


          {/* ================= BIKE GRID ================= */}
          <div className="mt-8 grid w-full min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {filteredBikes.map((bike) => (
              <BikeCard key={bike.id} bike={bike} />
            ))}

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      {/* <section className="w-full px-5 pb-16 sm:px-6 lg:px-8 lg:pb-20">

        <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 to-cyan-700 px-6 py-10 sm:px-10 lg:px-14">

          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="min-w-0">

              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-100">
                Ready to Ride?
              </p>

              <h2 className="mt-2 break-words text-2xl font-black text-white sm:text-3xl">
                Your next adventure starts here.
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-cyan-100">
                Pick your bike and book your ride today.
              </p>

            </div>

            <Link
              href="/booking"
              className="inline-flex w-fit shrink-0 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition hover:bg-orange-600"
            >
              Book Your Ride
            </Link>

          </div>

        </div>

      </section> */}

    </main>
  );
}


/* =====================================================
   BIKE CARD
===================================================== */

function BikeCard({ bike }) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">

        <Image
          src={bike.image}
          alt={bike.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Category */}
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur">
          {bike.category}
        </div>

      </div>


      {/* Content */}
      <div className="p-5">

        <div className="flex min-w-0 items-start justify-between gap-3">

          <div className="min-w-0">

            <h3 className="break-words text-lg font-black text-slate-900">
              {bike.name}
            </h3>

            <p className="mt-1 text-xs font-medium text-slate-400">
              Perfect for city rides & adventures
            </p>

          </div>

          <div className="shrink-0 text-right">

            <p className="text-lg font-black text-orange-500">
              {bike.price}
            </p>

            <p className="text-[10px] font-semibold text-slate-400">
              / day
            </p>

          </div>

        </div>


        {/* Features */}
        <div className="mt-5 grid grid-cols-3 gap-2 border-y border-slate-100 py-4">

          <Feature
            icon={<Bike size={14} />}
            text={bike.type}
          />

          <Feature
            icon={<Gauge size={14} />}
            text={bike.transmission}
          />

          <Feature
            icon={<Users size={14} />}
            text={bike.seats}
          />

        </div>


        {/* Buttons */}
        <div className="mt-5 flex gap-2">

          <Link
            href={`/booking?bike=${bike.id}`}
            className="flex-1 rounded-xl bg-slate-950 px-4 py-3 text-center text-xs font-extrabold text-white transition hover:bg-cyan-600"
          >
            Book Now
          </Link>

          <Link
            href={`/bikes/${bike.id}`}
            className="rounded-xl border border-slate-200 px-4 py-3 text-xs font-extrabold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-600"
          >
            Details
          </Link>

        </div>

      </div>

    </article>
  );
}


/* =====================================================
   FEATURE
===================================================== */

function Feature({ icon, text }) {
  return (
    <div className="flex min-w-0 flex-col items-center gap-1 text-center">

      <span className="text-cyan-600">
        {icon}
      </span>

      <span className="w-full truncate text-[10px] font-bold text-slate-500 sm:text-xs">
        {text}
      </span>

    </div>
  );
}