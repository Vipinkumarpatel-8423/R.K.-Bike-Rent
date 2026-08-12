import {
  Tag,
  CalendarCheck,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Tag,
    title: "Affordable Prices",
    description:
      "Get quality bikes at competitive rental prices with clear and transparent pricing. No unnecessary surprises.",
    color: "yellow",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Rental Plans",
    description:
      "Choose a rental duration that works for you. Daily, weekly and monthly plans are available for every journey.",
    color: "cyan",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Maintained Bikes",
    description:
      "Every bike is regularly checked and maintained so you can enjoy a smooth, comfortable and worry-free ride.",
    color: "orange",
  },
  {
    icon: MapPin,
    title: "Easy Pickup",
    description:
      "Convenient pickup options make it simple to get your bike and start your journey without unnecessary hassle.",
    color: "blue",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-5 sm:py-10 lg:py-12">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-yellow-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <span className="inline-block text-sm font-extrabold uppercase tracking-[0.2em] text-orange-500">
            Why R.K. Bike Rent?
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            More Than Just
            <span className="text-cyan-600"> A Bike Rental</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            We make every ride simple, affordable and hassle-free,
            so you can focus on the journey ahead.
          </p>

        </div>

        {/* Features */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Top Accent */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full ${feature.color === "yellow"
                    ? "bg-yellow-400"
                    : feature.color === "cyan"
                      ? "bg-cyan-500"
                      : feature.color === "orange"
                        ? "bg-orange-500"
                        : "bg-blue-600"
                    }`}
                />

                {/* Icon */}
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-110 group-hover:rotate-3 ${feature.color === "yellow"
                    ? "bg-yellow-100 text-yellow-600"
                    : feature.color === "cyan"
                      ? "bg-cyan-100 text-cyan-600"
                      : feature.color === "orange"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                >
                  <Icon size={30} strokeWidth={2.2} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-extrabold text-slate-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>

                {/* Bottom Accent */}
                <div className="mx-auto mt-5 h-1 w-8 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-16 group-hover:bg-cyan-500" />

              </div>
            );
          })}

        </div>

        {/* Bottom Highlight */}
        {/* <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-yellow-50 px-5 py-5 text-center sm:flex-row sm:gap-4">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white">
            <ShieldCheck size={21} />
          </div>

          <p className="text-sm font-semibold text-slate-700">
            Your ride. Your choice.{" "}
            <span className="text-cyan-700">
              Your freedom.
            </span>
          </p>

        </div> */}

      </div>
    </section>
  );
}