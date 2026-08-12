import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Daily Rental",
    subtitle: "Perfect for quick rides & city trips",
    price: "From ₹499",
    image: "/images/services/daily.png",
    icon: Clock3,
    tag: "MOST POPULAR",
    accent: "yellow",
  },
  {
    id: 2,
    title: "Weekly Rental",
    subtitle: "More freedom for longer adventures",
    price: "From ₹2,499",
    image: "/images/services/Weekly.png",
    icon: CalendarDays,
    tag: "SAVE MORE",
    accent: "blue",
  },
  {
    id: 3,
    title: "Monthly Rental",
    subtitle: "Your bike, your way, for a full month",
    price: "From ₹7,999",
    image: "/images/services/Monthly.png",
    icon: ShieldCheck,
    tag: "BEST VALUE",
    accent: "orange",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-yellow-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
              Our Rental Services
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Choose Your
            <span className="text-cyan-600"> Perfect Ride</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Whether you need a bike for a day, a week or a month,
            R.K. Bike Rent has a flexible rental plan for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className={`group relative overflow-hidden rounded-[2rem] border bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${index === 1
                  ? "md:translate-y-8 md:hover:translate-y-6"
                  : ""
                  }`}
              >

                {/* Top Content */}
                <div className="relative z-10 p-6 sm:p-7">

                  {/* Tag + Icon */}
                  <div className="flex items-center justify-between">

                    <span
                      className={`rounded-full px-3 py-1.5 text-[10px] font-extrabold tracking-wider ${service.accent === "yellow"
                        ? "bg-yellow-100 text-yellow-800"
                        : service.accent === "blue"
                          ? "bg-cyan-100 text-cyan-700"
                          : "bg-orange-100 text-orange-700"
                        }`}
                    >
                      {service.tag}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white transition duration-300 group-hover:rotate-12 group-hover:bg-cyan-600">
                      <Icon size={18} />
                    </div>

                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-2xl font-black text-slate-950 sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                    {service.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mt-5">
                    <span className="text-sm font-medium text-slate-400">
                      {service.price}
                    </span>
                  </div>

                </div>

                {/* Bike Visual */}
                <div className="relative mt-2 h-56 overflow-hidden sm:h-64">

                  {/* Circle */}
                  <div
                    className={`absolute right-[-35px] top-4 h-56 w-56 rounded-full transition duration-500 group-hover:scale-110 ${service.accent === "yellow"
                      ? "bg-yellow-300"
                      : service.accent === "blue"
                        ? "bg-cyan-300"
                        : "bg-orange-300"
                      }`}
                  />

                  {/* Small Circle */}
                  <div
                    className={`absolute left-8 bottom-8 h-12 w-12 rounded-full ${service.accent === "yellow"
                      ? "bg-yellow-100"
                      : service.accent === "blue"
                        ? "bg-cyan-100"
                        : "bg-orange-100"
                      }`}
                  />

                  {/* Bike Image */}
                  <div className="absolute bottom-0 left-4 z-10 h-56 w-[85%] transition duration-500 group-hover:scale-105 sm:h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 33vw"
                      className="object-contain object-bottom drop-shadow-2xl"
                    />
                  </div>

                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between border-t border-slate-100 px-6 py-5">

                  <span className="text-xs font-semibold text-slate-400">
                    Flexible booking
                  </span>

                  <Link
                    href="/booking"
                    className="group/button flex items-center gap-2 text-sm font-extrabold text-slate-950"
                  >
                    Book Now

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-white transition group-hover/button:bg-yellow-300 group-hover/button:text-slate-950">
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>

                </div>

              </article>
            );
          })}

        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-14 flex justify-center md:mt-20">

          <Link
            href="/bikes"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-extrabold text-white transition hover:bg-cyan-600"
          >
            View All Bikes
            <ArrowUpRight size={17} />
          </Link>

        </div> */}

      </div>
    </section>
  );
}