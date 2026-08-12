"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CalendarDays,
  Clock3,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950">

      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-banner.png"
          alt="R.K. Bike Rent"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 pb-40 pt-20 sm:min-h-[680px] md:px-8 md:pb-36">

        <div className="max-w-3xl text-white">

          {/* Small Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300/50 bg-yellow-300/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-yellow-300" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-200 sm:text-sm">
              R.K. Bike Rent
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">

            Explore
            <br />

            <span className="text-yellow-300">
              The City
            </span>

            <br />

            Your Way.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            Rent your favourite bike and discover every road,
            every corner and every adventure with complete freedom.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/bikes"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow-300 px-7 py-3.5 text-sm font-extrabold text-blue-950 shadow-lg transition duration-300 hover:bg-yellow-400 hover:shadow-xl"
            >
              Explore Bikes

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-blue-950"
            >
              Book Your Ride
            </Link>

          </div>
        </div>
      </div>

      {/* =========================
          DESKTOP BOOKING BAR
      ========================= */}

      <div className="absolute bottom-7 left-1/2 hidden w-[calc(100%-40px)] max-w-6xl -translate-x-1/2 md:block">

        <div className="flex overflow-hidden rounded-2xl bg-white shadow-2xl">

          {/* Location */}
          <div className="flex flex-1 items-center gap-3 border-r border-gray-200 px-5 py-4">
            <MapPin
              size={22}
              className="shrink-0 text-cyan-600"
            />

            <div className="min-w-0">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Pickup Location
              </label>

              <input
                type="text"
                placeholder="Enter location"
                className="mt-1 w-full bg-transparent text-sm font-semibold text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Pickup Date */}
          <div className="flex flex-1 items-center gap-3 border-r border-gray-200 px-5 py-4">
            <CalendarDays
              size={21}
              className="shrink-0 text-cyan-600"
            />

            <div className="min-w-0">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Pickup Date
              </label>

              <input
                type="date"
                className="mt-1 w-full bg-transparent text-sm font-semibold text-gray-800 outline-none"
              />
            </div>
          </div>

          {/* Pickup Time */}
          <div className="flex flex-1 items-center gap-3 border-r border-gray-200 px-5 py-4">
            <Clock3
              size={21}
              className="shrink-0 text-cyan-600"
            />

            <div className="min-w-0">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Pickup Time
              </label>

              <input
                type="time"
                className="mt-1 w-full bg-transparent text-sm font-semibold text-gray-800 outline-none"
              />
            </div>
          </div>

          {/* Return Date */}
          <div className="flex flex-1 items-center gap-3 border-r border-gray-200 px-5 py-4">
            <CalendarDays
              size={21}
              className="shrink-0 text-cyan-600"
            />

            <div className="min-w-0">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Return Date
              </label>

              <input
                type="date"
                className="mt-1 w-full bg-transparent text-sm font-semibold text-gray-800 outline-none"
              />
            </div>
          </div>

          {/* Return Time */}
          <div className="flex flex-1 items-center gap-3 px-5 py-4">
            <Clock3
              size={21}
              className="shrink-0 text-cyan-600"
            />

            <div className="min-w-0">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Return Time
              </label>

              <input
                type="time"
                className="mt-1 w-full bg-transparent text-sm font-semibold text-gray-800 outline-none"
              />
            </div>
          </div>

          {/* Ride Now */}
          <Link
            href="/booking"
            className="flex min-w-[150px] items-center justify-center bg-orange-500 px-7 text-lg font-extrabold text-white transition hover:bg-orange-600"
          >
            Ride Now
          </Link>

        </div>
      </div>

      {/* =========================
          MOBILE BOOKING
      ========================= */}

      <div className="relative z-10 -mt-20 px-5 pb-8 md:hidden">

        <div className="rounded-2xl bg-white p-4 shadow-2xl">

          <div className="mb-4">
            <h2 className="text-xl font-extrabold text-slate-900">
              Book Your Ride
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Select your pickup and return details.
            </p>
          </div>

          {/* Location */}
          <div className="mb-3 flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">

            <MapPin
              size={20}
              className="shrink-0 text-cyan-600"
            />

            <div className="min-w-0 flex-1">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Pickup Location
              </label>

              <input
                type="text"
                placeholder="Enter location"
                className="mt-1 w-full bg-transparent text-sm font-semibold text-gray-800 outline-none"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-3">

            <div className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3">

              <div className="flex items-center gap-2">
                <CalendarDays
                  size={18}
                  className="text-cyan-600"
                />

                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Pickup
                </label>
              </div>

              <input
                type="date"
                className="mt-2 w-full bg-transparent text-xs font-semibold text-gray-800 outline-none"
              />

            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3">

              <div className="flex items-center gap-2">
                <CalendarDays
                  size={18}
                  className="text-cyan-600"
                />

                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Return
                </label>
              </div>

              <input
                type="date"
                className="mt-2 w-full bg-transparent text-xs font-semibold text-gray-800 outline-none"
              />

            </div>

          </div>

          {/* Time */}
          <div className="mt-3 grid grid-cols-2 gap-3">

            <div className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3">

              <div className="flex items-center gap-2">
                <Clock3
                  size={18}
                  className="text-cyan-600"
                />

                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Pickup Time
                </label>
              </div>

              <input
                type="time"
                className="mt-2 w-full bg-transparent text-xs font-semibold text-gray-800 outline-none"
              />

            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3">

              <div className="flex items-center gap-2">
                <Clock3
                  size={18}
                  className="text-cyan-600"
                />

                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Return Time
                </label>
              </div>

              <input
                type="time"
                className="mt-2 w-full bg-transparent text-xs font-semibold text-gray-800 outline-none"
              />

            </div>

          </div>

          {/* Mobile Button */}
          <Link
            href="/booking"
            className="mt-4 flex w-full items-center justify-center rounded-xl bg-orange-500 px-6 py-4 font-extrabold text-white transition hover:bg-orange-600"
          >
            Ride Now
          </Link>

        </div>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917355088330"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-105 hover:bg-green-600"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-current"
        >
          <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.49 0 .15 5.34.15 11.91c0 2.1.55 4.15 1.59 5.95L.05 24l6.29-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.42ZM12.05 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.86 9.86 0 0 1-1.51-5.27C2.18 6.46 6.61 2.03 12.05 2.03c2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.87 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>

    </section>
  );
}