"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-yellow-300 bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* RK Logo */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-yellow-300 bg-yellow-300 text-xl font-extrabold text-blue-950 shadow-sm">
            RK
          </div>

          {/* Brand Name */}
          <div>
            <h1 className="text-lg font-extrabold leading-none tracking-tight text-white md:text-xl">
              R.K. BIKE RENT
            </h1>

            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-yellow-200">
              Ride • Explore • Repeat
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-bold text-white transition hover:text-yellow-300"
          >
            Home
          </Link>

          <Link
            href="/bikes"
            className="text-sm font-bold text-white transition hover:text-yellow-300"
          >
            Bikes
          </Link>

          <Link
            href="/about"
            className="text-sm font-bold text-white transition hover:text-yellow-300"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-bold text-white transition hover:text-yellow-300"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Call Button */}
          <a
            href="tel:+917355088330"
            className="flex items-center gap-2 rounded-full border-2 border-white/70 bg-white/10 px-4 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-yellow-300 hover:bg-yellow-300 hover:text-blue-950"
          >
            <Phone size={16} />
            Call
          </a>

          {/* Book Now */}
          <Link
            href="/booking"
            className="rounded-full bg-yellow-300 px-6 py-3 text-sm font-extrabold text-blue-950 shadow-md transition hover:bg-yellow-400 hover:shadow-lg"
          >
            Book Now
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-white/30 bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-yellow-300 hover:text-blue-950 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-yellow-300 bg-cyan-600 px-5 py-6 shadow-lg md:hidden">

          <nav className="flex flex-col gap-4">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 font-bold text-white transition hover:bg-yellow-300 hover:text-blue-950"
            >
              Home
            </Link>

            <Link
              href="/bikes"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 font-bold text-white transition hover:bg-yellow-300 hover:text-blue-950"
            >
              Bikes
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 font-bold text-white transition hover:bg-yellow-300 hover:text-blue-950"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 font-bold text-white transition hover:bg-yellow-300 hover:text-blue-950"
            >
              Contact
            </Link>

            {/* Mobile Call */}
            <a
              href="tel:+917355088330"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-blue-950"
            >
              <Phone size={17} />
              Call Now
            </a>

            {/* Mobile Book */}
            <Link
              href="/booking"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-yellow-300 px-6 py-3 text-center font-extrabold text-blue-950 transition hover:bg-yellow-400"
            >
              Book Now
            </Link>

          </nav>

        </div>
      )}
    </header>
  );
}