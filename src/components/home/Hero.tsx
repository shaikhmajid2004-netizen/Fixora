export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center bg-slate-950 px-6 py-24 text-center text-white">

      {/* Badge */}
      <div className="mb-6 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
        ⭐ Trusted Home & Auto Services
      </div>

      {/* Heading */}
      <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
        Find Trusted{" "}
        <span className="text-blue-500">Home & Auto</span>
        <br />
        Services
        <br />
        Within Minutes.
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
        Book verified electricians, plumbers, AC repair, car mechanics,
        bike service, appliance repair, cleaners, painters and many more —
        all from one trusted platform.
      </p>

      {/* Search Box */}
      <div className="mt-10 w-full max-w-3xl rounded-2xl bg-white p-3 shadow-2xl">
        <div className="flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            placeholder="Search Electrician, Plumber, Car Mechanic..."
            className="flex-1 rounded-xl px-5 py-4 text-lg text-black outline-none"
          />

          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
            🔍 Search
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-blue-700">
          Book a Service
        </button>

        <button className="rounded-xl border border-gray-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-black">
          Become a Professional
        </button>
      </div>

    </section>
  );
}