"use client";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  Clock3,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    // Backend / EmailJS integration yahan add kar sakte ho
  };

  return (
    <main className="w-full max-w-full overflow-hidden bg-slate-50">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative w-full overflow-hidden bg-slate-950">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-slate-950 to-slate-950" />

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="mx-auto max-w-3xl text-center">

            {/* <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
              Get In Touch
            </span> */}

            <h1 className="mt-5 break-words text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's Talk About
              <span className="text-orange-400"> Your Ride</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              Have a question about our bikes, rental plans or booking?
              We're here to help you get on the road.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT INFO
      ===================================================== */}
      <section className="w-full py-12 sm:py-16 lg:py-20">

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <ContactCard
              icon={<Phone size={22} />}
              title="Call Us"
              text="+91 7355088330"
              href="tel:+917355088330"
              color="cyan"
            />

            <ContactCard
              icon={<MessageCircle size={22} />}
              title="WhatsApp"
              text="Chat with us"
              href="https://wa.me/917355088330"
              color="green"
            />

            <ContactCard
              icon={<Mail size={22} />}
              title="Email Us"
              text="rktourandtravels45@gmail.com"
              href="mailto:rktourandtravels45@gmail.com"
              color="orange"
            />

            <ContactCard
              icon={<Clock3 size={22} />}
              title="Working Hours"
              text="8:00 AM – 10:30 PM"
              color="yellow"
            />

          </div>


          {/* =================================================
              MAIN CONTACT AREA
          ================================================= */}
          <div className="mt-10 grid w-full min-w-0 items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT INFO */}
            <div className="min-w-0 rounded-3xl bg-slate-950 p-6 text-white sm:p-8 lg:p-10">

              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
                Contact Details
              </span>

              <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                We're here to help.
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Whether you're looking for a bike, need help with a
                booking or simply want to know more about our rental
                plans, feel free to reach out.
              </p>


              {/* Location */}
              <div className="mt-8 flex min-w-0 gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <MapPin size={20} />
                </div>

                <div className="min-w-0">

                  <h3 className="font-bold">
                    Visit Us
                  </h3>

                  <p className="mt-1 break-words text-sm leading-6 text-slate-400">
                    Street No. 9, Kesho Ram Complex,
                    <br />
                    Burail, Ekta Market,
                    <br />
                    Sector 45C, Chandigarh - 160047
                  </p>

                </div>

              </div>


              {/* Phone */}
              <div className="mt-6 flex min-w-0 gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                  <Phone size={20} />
                </div>

                <div className="min-w-0">

                  <h3 className="font-bold">
                    Call Us
                  </h3>

                  <a
                    href="tel:+917355088330"
                    className="mt-1 block break-all text-sm text-slate-400 transition hover:text-white"
                  >
                    +91 7355088330
                  </a>

                </div>

              </div>


              {/* Email */}
              <div className="mt-6 flex min-w-0 gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                  <Mail size={20} />
                </div>

                <div className="min-w-0">

                  <h3 className="font-bold">
                    Email
                  </h3>

                  <a
                    href="mailto:rktourandtravels45@gmail.com"
                    className="mt-1 block break-all text-sm text-slate-400 transition hover:text-white"
                  >
                    rktourandtravels45@gmail.com
                  </a>

                </div>

              </div>


              {/* Small CTA */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">

                <p className="text-sm font-bold">
                  Need a bike right now?
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Skip the wait and book your ride directly.
                </p>

                <Link
                  href="/booking"
                  className="mt-4 inline-flex rounded-full bg-orange-500 px-5 py-2.5 text-xs font-extrabold text-white transition hover:bg-orange-600"
                >
                  Book a Bike
                </Link>

              </div>

            </div>


            {/* =================================================
                FORM
            ================================================= */}
            <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

              <div>

                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
                  Send a Message
                </span>

                <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
                  How can we help?
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Fill out the form and our team will get back to you
                  as soon as possible.
                </p>

              </div>


              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >

                {/* Name + Phone */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <InputField
                    label="Your Name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* Email */}
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />


                {/* Message */}
                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                  />

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-cyan-600"
                >
                  Send Message
                  <Send size={17} />
                </button>

              </form>

            </div>

          </div>


          {/* =================================================
              MAP
          ================================================= */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

              <div>

                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-600">
                  Find Us
                </span>

                <h2 className="mt-1 text-xl font-black text-slate-950">
                  Our Location
                </h2>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Street+no+9,+Kesho+Ram+Complex,+Burail,+Ekta+Market,+Sector+45C,+Sector+45,+Chandigarh,+160047"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-full border border-slate-200 px-5 py-2.5 text-xs font-extrabold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-600"
              >
                Open in Google Maps
              </a>

            </div>


            {/* Map Placeholder */}
            <div className="h-64 w-full sm:h-80 lg:h-[450px]">
              <iframe
                title="RK Bike Rent Location"
                src="https://www.google.com/maps?q=Street+no+9,+Kesho+Ram+Complex,+Burail,+Ekta+Market,+Sector+45C,+Sector+45,+Chandigarh,+160047&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =====================================================
   CONTACT CARD
===================================================== */

function ContactCard({ icon, title, text, href, color }) {
  const colors = {
    cyan: "bg-cyan-50 text-cyan-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-500",
    yellow: "bg-yellow-50 text-yellow-600",
  };

  const content = (
    <>
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colors[color]}`}
      >
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {title}
        </p>

        <p className="mt-1 break-words text-sm font-extrabold text-slate-800">
          {text}
        </p>

      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {content}
    </div>
  );
}


/* =====================================================
   INPUT
===================================================== */

function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold text-slate-800"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
      />

    </div>
  );
}