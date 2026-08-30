import Link from "next/link";
import {
  ArrowUpRight,
} from "lucide-react";
// import { MdDirectionsBike } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-slate-950 text-white">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">

        {/* Top CTA */}
        {/* <div className="mb-12 flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

          <div className="min-w-0 max-w-2xl">

            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-400">
              Ready to Ride?
            </span>

            <h2 className="mt-2 break-words text-2xl font-black tracking-tight sm:text-3xl">
              Your next ride is just
              <span className="text-cyan-400"> one booking away.</span>
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Choose your bike, pick your plan and start exploring
              with R.K. Bike Rent.
            </p>

          </div>

          <Link
            href="/booking"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-extrabold text-white transition duration-300 hover:bg-orange-600"
          >
            Book Your Ride

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition group-hover:translate-x-1">
              <ArrowUpRight size={16} />
            </span>
          </Link>

        </div> */}

        {/* Main Footer */}
        <div className="grid min-w-0 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12">

          {/* Brand */}
          <div className="min-w-0">

            {/* <Link
              href="/"
              className="inline-flex items-center gap-3"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-xl font-black text-white shadow-lg shadow-cyan-500/20">
                RK
              </div>

              <div className="min-w-0">
                <h3 className="text-xl font-black">
                  R.K. Bike Rent
                </h3>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Ride • Explore • Repeat
                </p>
              </div>

            </Link> */}

              <Link href="/" className="flex items-center gap-3">
  {/* Logo */}
  <div className="relative h-14 w-14 md:h-16 md:w-16 overflow-hidden rounded-full bg-white">
    <Image
      src="/images/Logo/Logo.jpg"
      alt="R.K. Bike Rent Logo"
      fill
      priority
      className="object-contain"
      sizes="48px"
    />
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


            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Affordable and reliable bike rentals for city rides,
              weekend trips and everyday adventures. Pick your ride
              and hit the road.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <FaInstagram size={18} />
              </a>

              {/* <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
              >
                <Twitter size={18} />
              </a> */}

            </div>

          </div>

          {/* Quick Links */}
          <div className="min-w-0">

            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  href="/"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/bikes"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Our Bikes
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/booking"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Book Now
                </Link>
              </li>

            </ul>

          </div>

          {/* Rental Services */}
          <div className="min-w-0">

            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Rental Services
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  href="/bikes?plan=daily"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Daily Rental
                </Link>
              </li>

              <li>
                <Link
                  href="/bikes?plan=weekly"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Weekly Rental
                </Link>
              </li>

              <li>
                <Link
                  href="/bikes?plan=monthly"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Monthly Rental
                </Link>
              </li>

              <li>
                <Link
                  href="/bikes"
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  View All Bikes
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div className="min-w-0">

            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">

              {/* Phone */}
              <a
                href="tel:+918360055932"
                className="flex min-w-0 items-start gap-3 text-slate-400 transition hover:text-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <FaPhone size={17} />
                </span>

                <span className="min-w-0 pt-1 text-sm break-words">
                  +91 73550 88330
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:rktourandtravels45@gmail.com"
                className="flex min-w-0 items-start gap-3 text-slate-400 transition hover:text-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                  <IoMdMail size={17} />
                </span>

                <span className="min-w-0 break-all pt-1 text-sm">
                  rktourandtravels45@gmail.com
                </span>
              </a>

              {/* Address */}
              <div className="flex min-w-0 items-start gap-3 text-slate-400">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400">
                  <FiMapPin size={17} />
                </span>

                <p className="mt-1 break-words text-sm leading-6 text-slate-400">
                  Street No. 9, Kesho Ram Complex,
                  <br />
                  Burail, Ekta Market,
                  <br />
                  Sector 45C, Chandigarh - 160047
                </p>
                {/* <span className="min-w-0 pt-1 text-sm leading-6">
                  Your Location,
                  <br />
                  Your City, India
                </span> */}

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />



        <div className="flex min-w-0 flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p className="break-words text-xs leading-5 text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} R.K. Bike Rent. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end">

            <Link
              href="/privacy-policy"
              className="text-xs text-slate-500 transition hover:text-cyan-400 sm:text-sm"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-slate-500 transition hover:text-cyan-400 sm:text-sm"
            >
              Terms & Conditions
            </Link>

            <span className="hidden h-4 w-px bg-slate-700 sm:block" />

            <p className="text-xs text-slate-500 sm:text-sm">
              Designed & Developed by{" "}
              <a
                href="https://ymorinnovation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-400 transition hover:text-cyan-400"
              >
                YMOR Innovation
              </a>
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}