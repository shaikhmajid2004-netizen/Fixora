export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
        One Platform. Every Service.
      </p>

      <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
        Find Trusted Home Services <br />
        In Minutes.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-600">
        Book verified electricians, plumbers, AC repair, cleaners,
        painters, and more—all from one trusted platform.
      </p>

      <button className="mt-8 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
        Book a Service
      </button>
    </section>
  );
}