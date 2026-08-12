import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-12">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            TOP IMAGE
        ========================= */}
        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl">

          <div className="relative aspect-[16/7] w-full min-h-[220px] sm:min-h-[300px] lg:min-h-[420px]">

            <Image
              src="/images/about-team.jpg"
              alt="R.K. Bike Rent Team"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">

              <div className="max-w-2xl px-5 sm:px-8 lg:px-12">

                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:text-xs">
                  About R.K. Bike Rent
                </span>

                <h1 className="mt-3 max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                  We Make Every
                  <span className="text-cyan-400">
                    {" "}Ride Worth Remembering
                  </span>
                </h1>

                <p className="mt-3 max-w-lg text-xs leading-5 text-white/80 sm:text-sm sm:leading-6">
                  Reliable bikes, simple rentals and a better way to
                  explore your city.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            ABOUT US
        ========================= */}
        <div className="mt-16 grid w-full min-w-0 items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-16">

          {/* Content */}
          <div className="min-w-0">

            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
              Who We Are
            </span>

            <h2 className="mt-3 break-words text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              About
              <span className="text-cyan-600"> R.K. Bike Rent</span>
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-500 sm:text-base">

              <p>
                R.K. Bike Rent is built for people who want the freedom
                to explore without the hassle of owning a bike. We make
                renting a two-wheeler simple, convenient and affordable.
              </p>

              <p>
                Whether you need a bike for your daily commute, a
                weekend plan or a city adventure, our goal is to give
                you a smooth rental experience from booking to return.
              </p>

              <p>
                With well-maintained vehicles and flexible rental
                options, we help riders spend less time worrying about
                transportation and more time enjoying the journey.
              </p>

            </div>

            {/* Small Highlights */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">

              <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-4">
                <p className="text-xl font-black text-cyan-600">
                  100%
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-500">
                  Hassle Free
                </p>
              </div>

              <div className="rounded-xl border border-orange-100 bg-orange-50 p-4">
                <p className="text-xl font-black text-orange-500">
                  Easy
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-500">
                  Booking
                </p>
              </div>

              <div className="col-span-2 rounded-xl border border-yellow-100 bg-yellow-50 p-4 sm:col-span-1">
                <p className="text-xl font-black text-yellow-600">
                  Flexible
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-500">
                  Rental Plans
                </p>
              </div>

            </div>

          </div>


          {/* About Image */}
          <div className="relative w-full min-w-0">

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl">

              <Image
                src="/images/about-bike.jpg"
                alt="R.K. Bike Rent"
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5">

                <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Ride • Explore • Repeat
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Your journey starts with the right ride.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            OUR MISSION
        ========================= */}
        <div className="mt-20 grid w-full min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Mission Image */}
          <div className="relative order-2 w-full min-w-0 lg:order-1">

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl">

              <Image
                src="/images/mission.jpg"
                alt="R.K. Bike Rent Mission"
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/50 via-transparent to-transparent" />

              {/* Mission Badge */}
              <div className="absolute left-4 top-4 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md sm:left-5 sm:top-5">

                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white">
                  Our Purpose
                </p>

                <p className="mt-1 text-sm font-black text-cyan-300">
                  Freedom to Explore
                </p>

              </div>

            </div>

          </div>


          {/* Mission Content */}
          <div className="order-1 min-w-0 lg:order-2">

            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
              What Drives Us
            </span>

            <h2 className="mt-3 break-words text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Our
              <span className="text-orange-500"> Mission</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Our mission is simple — make two-wheeler rentals
              accessible, convenient and enjoyable for everyone.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              We believe a great rental experience should be more than
              just getting a bike. It should be about reliable vehicles,
              transparent service, flexible plans and the freedom to
              explore wherever the road takes you.
            </p>

            {/* Mission Points */}
            <div className="mt-7 space-y-4">

              <MissionPoint
                number="01"
                title="Reliable Rides"
                text="Well-maintained bikes that are ready for your journey."
              />

              <MissionPoint
                number="02"
                title="Simple Experience"
                text="Easy booking, clear plans and a hassle-free rental process."
              />

              <MissionPoint
                number="03"
                title="Customer First"
                text="Putting riders first at every step of the journey."
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


/* =========================
   MISSION POINT
========================= */

function MissionPoint({ number, title, text }) {
  return (
    <div className="flex min-w-0 items-start gap-3 sm:gap-4">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-xs font-black text-cyan-600 ring-1 ring-cyan-100">
        {number}
      </div>

      <div className="min-w-0">

        <h3 className="text-sm font-extrabold text-slate-900 sm:text-base">
          {title}
        </h3>

        <p className="mt-1 break-words text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
          {text}
        </p>

      </div>

    </div>
  );
}