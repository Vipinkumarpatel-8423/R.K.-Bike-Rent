import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Fuel,
  Settings2,
  Users,
  ShieldCheck,
  MapPin,
} from "lucide-react";

import bikes from "@/data/bikes";

export default async function BikeDetailsPage({ params }) {
  const { id } = await params;

  // ID ko string ke form mein compare kar rahe hain
  const bike = bikes.find(
    (item) => String(item.id) === String(id)
  );

  // Bike nahi mili
  if (!bike) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-5">
        <div className="text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
            <MapPin size={30} />
          </div>

          <h1 className="mt-5 text-2xl font-black text-slate-950">
            Bike Not Found
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            The bike you are looking for is not available.
          </p>

          <Link
            href="/bikes"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-cyan-600"
          >
            <ArrowLeft size={17} />
            Back to Bikes
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Back */}
      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-6 lg:px-8">
        <Link
          href="/bikes"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-cyan-600"
        >
          <ArrowLeft size={18} />
          Back to Bikes
        </Link>
      </div>

      {/* Details */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8 lg:py-12">

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Bike Image */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            <div className="relative aspect-[4/3] w-full bg-white">

              <Image
                src={bike.image}
                alt={bike.name}
                fill
                priority
                className="object-contain p-6 sm:p-10"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

            </div>

          </div>

          {/* Bike Information */}
          <div className="flex flex-col justify-center">

            <span className="w-fit rounded-full bg-cyan-100 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-700">
              {bike.category}
            </span>

            <h1 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
              {bike.name}
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              {bike.description}
            </p>

            {/* Price */}
            <div className="mt-7 flex items-end gap-2">
              <span className="text-4xl font-black text-slate-950">
                ₹{bike.price}
              </span>

              <span className="pb-1 text-sm font-medium text-slate-500">
                / day
              </span>
            </div>

            {/* Specifications */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <Settings2
                  size={20}
                  className="text-cyan-600"
                />

                <p className="mt-3 text-xs text-slate-500">
                  Transmission
                </p>

                <p className="mt-1 text-sm font-bold text-slate-900">
                  {bike.transmission}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <Users
                  size={20}
                  className="text-cyan-600"
                />

                <p className="mt-3 text-xs text-slate-500">
                  Seats
                </p>

                <p className="mt-1 text-sm font-bold text-slate-900">
                  {bike.seats}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <Fuel
                  size={20}
                  className="text-cyan-600"
                />

                <p className="mt-3 text-xs text-slate-500">
                  Fuel
                </p>

                <p className="mt-1 text-sm font-bold text-slate-900">
                  {bike.fuel}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <CalendarDays
                  size={20}
                  className="text-cyan-600"
                />

                <p className="mt-3 text-xs text-slate-500">
                  Rental
                </p>

                <p className="mt-1 text-sm font-bold text-slate-900">
                  Daily
                </p>
              </div>

            </div>

            {/* Booking */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href={`/booking?bike=${bike.id}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-4 text-sm font-black text-white transition hover:bg-cyan-600"
              >
                <CalendarDays size={18} />
                Book This Bike
              </Link>

              <a
                href="tel:+918360055932"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-black text-slate-800 transition hover:border-cyan-500 hover:text-cyan-600"
              >
                Call Now
              </a>

            </div>

            {/* Trust */}
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
              <ShieldCheck
                size={20}
                className="text-cyan-600"
              />

              <span>
                Well maintained bikes & reliable rental service
              </span>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}