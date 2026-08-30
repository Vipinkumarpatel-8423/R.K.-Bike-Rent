"use client";

import { useMemo, useState } from "react";
import {
  Bike,
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import bikes from "@/data/bikes";

// const bikes = [
//   {
//     id: 3,
//     name: "Super Meteor 650cc",
//     price: 2500,
//   },
//   {
//     id: 4,
//     name: "Himalyan 450cc",
//     price: 1800,
//   },
//   {
//     id: 5,
//     name: "Scram 440cc",
//     price: 1500,
//   },
//   {
//     id: 6,
//     name: "Hunter 350",
//     price: 1200,
//   },
//   {
//     id: 7,
//     name: "Himalyan 411 cc",
//     price: 1400,
//   },
//   {
//     id: 8,
//     name: "Meteor 350cc",
//     price: 1200,
//   },
//   {
//     id: 9,
//     name: "Bullet 350cc",
//     price: 1200,
//   },
//   {
//     id: 10,
//     name: "X Pulse 210cc",
//     price: 1300,
//   },
//   {
//     id: 11,
//     name: "Ktm duke 200cc",
//     price: 1300,
//   },
//   {
//     id: 12,
//     name: "Jawa 350cc",
//     price: 1300,
//   },
//   {
//     id: 13,
//     name: "Apache 160cc",
//     price: 900,
//   },
//   {
//     id: 14,
//     name: "Avenger 220cc",
//     price: 800,
//   },
//   {
//     id: 15,
//     name: "Ntorq 125cc",
//     price: 700,
//   },
//   {
//     id: 16,
//     name: "Activa 5G",
//     price: 500,
//   },
//   {
//     id: 1,
//     name: "Activa 6G",
//     price: 600,
//   },
// ];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    bike: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    location: "",
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const selectedBike = bikes.find(
  //   (bike) => bike.id === formData.bike
  // );

  const selectedBike = bikes.find(
    (bike) => String(bike.id) === String(formData.bike)
  );

  const totalDays = useMemo(() => {
    if (!formData.pickupDate || !formData.returnDate) {
      return 1;
    }

    const pickup = new Date(formData.pickupDate);
    const returnDate = new Date(formData.returnDate);

    const difference = returnDate - pickup;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return days > 0 ? days : 1;
  }, [formData.pickupDate, formData.returnDate]);

  const totalAmount = selectedBike
    ? selectedBike.price * totalDays
    : 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...formData,
      totalDays,
      totalAmount,
    });

    alert("Booking request submitted!");
  };

  return (
    <main className="w-full max-w-full overflow-hidden bg-slate-50">

      {/* ================= HERO ================= */}

      <section className="relative w-full overflow-hidden bg-slate-950">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-slate-950 to-slate-950" />

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
              <Bike size={15} />
              Bike Booking
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              Book Your
              <span className="text-orange-400"> Ride</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Choose your bike, select your dates and get ready to
              explore the road.
            </p>

          </div>

        </div>
      </section>


      {/* ================= BOOKING ================= */}

      <section className="w-full py-10 sm:py-14 lg:py-20">

        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">

          <div className="grid w-full min-w-0 gap-6 lg:grid-cols-[1fr_350px]">

            {/* ================= FORM ================= */}

            <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-9">

              <div>

                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
                  Booking Details
                </span>

                <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
                  Tell us about your ride
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Fill in the details below to send your booking request.
                </p>

              </div>


              <form
                id="booking-form"
                onSubmit={handleSubmit}
                className="mt-7 space-y-6"
              >

                {/* Bike */}

                <div>
                  <label
                    htmlFor="bike"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    Select Bike
                  </label>

                  <div className="relative">

                    <Bike
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-cyan-600"
                    />

                    <select
                      id="bike"
                      name="bike"
                      value={formData.bike}
                      onChange={handleChange}
                      required
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-800 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                    >
                      <option value="">
                        Choose your bike
                      </option>

                      {bikes.map((bike) => (
                        <option
                          key={bike.id}
                          value={bike.id}
                        >
                          {bike.name} — ₹{bike.price}/day
                        </option>
                      ))}

                    </select>

                  </div>
                </div>


                {/* Dates */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <InputField
                    label="Pickup Date"
                    name="pickupDate"
                    type="date"
                    icon={<CalendarDays size={17} />}
                    value={formData.pickupDate}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    label="Return Date"
                    name="returnDate"
                    type="date"
                    icon={<CalendarDays size={17} />}
                    value={formData.returnDate}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* Time */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <InputField
                    label="Pickup Time"
                    name="pickupTime"
                    type="time"
                    icon={<Clock3 size={17} />}
                    value={formData.pickupTime}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    label="Return Time"
                    name="returnTime"
                    type="time"
                    icon={<Clock3 size={17} />}
                    value={formData.returnTime}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* Location */}

                <InputField
                  label="Pickup Location"
                  name="location"
                  type="text"
                  placeholder="Enter pickup location"
                  icon={<MapPin size={17} />}
                  value={formData.location}
                  onChange={handleChange}
                  required
                />


                {/* Customer */}

                <div className="border-t border-slate-100 pt-6">

                  <p className="mb-5 text-sm font-extrabold text-slate-900">
                    Customer Details
                  </p>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    <InputField
                      label="Full Name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      icon={<User size={17} />}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                    <InputField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      icon={<Phone size={17} />}
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                {/* Message */}

                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    Additional Message
                    <span className="ml-1 font-normal text-slate-400">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Any special request?"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                  />

                </div>


                {/* Mobile Submit */}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-cyan-600 lg:hidden"
                >
                  Send Booking Request
                </button>

              </form>

            </div>


            {/* ================= SUMMARY ================= */}

            <aside className="h-fit min-w-0 rounded-3xl bg-slate-950 p-5 text-white sm:p-7 lg:sticky lg:top-24">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Bike size={21} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Booking Summary
                  </p>

                  <h3 className="mt-1 font-black">
                    Your Ride
                  </h3>
                </div>

              </div>


              <div className="my-6 h-px bg-white/10" />


              {/* Selected Bike */}

              <div>

                <p className="text-xs text-slate-500">
                  Selected Bike
                </p>

                <p className="mt-1 break-words font-bold">
                  {selectedBike
                    ? selectedBike.name
                    : "No bike selected"}
                </p>

              </div>


              {/* Dates */}

              <div className="mt-5 grid grid-cols-2 gap-3">

                <SummaryItem
                  label="Pickup"
                  value={formData.pickupDate || "--"}
                />

                <SummaryItem
                  label="Return"
                  value={formData.returnDate || "--"}
                />

              </div>


              {/* Duration */}

              <div className="mt-5 rounded-xl bg-white/5 p-4">

                <div className="flex items-center justify-between">

                  <span className="text-sm text-slate-400">
                    Rental Duration
                  </span>

                  <span className="font-bold">
                    {totalDays} {totalDays === 1 ? "Day" : "Days"}
                  </span>

                </div>

              </div>


              {/* Price */}

              <div className="mt-5">

                <div className="flex items-center justify-between text-sm">

                  <span className="text-slate-400">
                    Rate / Day
                  </span>

                  <span>
                    {selectedBike
                      ? `₹${selectedBike.price}`
                      : "₹0"}
                  </span>

                </div>

                <div className="mt-3 flex items-end justify-between border-t border-white/10 pt-4">

                  <span className="text-sm text-slate-400">
                    Estimated Total
                  </span>

                  <span className="text-2xl font-black text-orange-400">
                    ₹{totalAmount}
                  </span>

                </div>

              </div>


              {/* Desktop Submit */}

              <button
                type="submit"
                form="booking-form"
                onClick={handleSubmit}
                className="mt-7 hidden w-full rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-orange-600 lg:block"
              >
                Send Booking Request
              </button>

              <p className="mt-4 text-center text-[11px] leading-5 text-slate-500">
                Final price and availability will be confirmed by
                our team.
              </p>

            </aside>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =====================================================
   INPUT FIELD
===================================================== */

function InputField({
  label,
  name,
  type,
  placeholder,
  icon,
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="min-w-0">

      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold text-slate-800"
      >
        {label}
      </label>

      <div className="relative">

        {icon && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-cyan-600">
            {icon}
          </span>
        )}

        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 ${icon ? "pl-11 pr-4" : "px-4"
            }`}
        />

      </div>

    </div>
  );
}


/* =====================================================
   SUMMARY ITEM
===================================================== */

function SummaryItem({ label, value }) {
  return (
    <div className="min-w-0 rounded-xl bg-white/5 p-3">

      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p className="mt-1 truncate text-xs font-bold text-slate-200">
        {value}
      </p>

    </div>
  );
}