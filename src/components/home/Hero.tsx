"use client";
import { motion } from "motion/react";
export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-24 text-center text-white">
      {/* Background Glow */}
<div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

<div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
      {/* Badge */}
      <div className="mb-6 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
        ⭐ Trusted Home & Auto Services
      </div>

      {/* Heading */}
      <motion.h1
       initial={{ opacity: 0, y: 40 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8 }}
       className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl"
       >
        Find Trusted{" "}
        <span className="text-blue-500">Home & Auto</span>
        <br />
        Services
        <br />
        Within Minutes.
      </motion.h1>

      {/* Description */}
<motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.25, duration: 0.8 }}
  className="mt-8 max-w-3xl text-lg leading-8 text-gray-300"
>
  Book verified electricians, plumbers, AC repair, car mechanics,
  bike service, appliance repair, cleaners, painters and many more —
  all from one trusted platform.
</motion.p>

      

      {/* Buttons */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-blue-700">
          Book a Service
        </button>

        <button className="rounded-xl border border-gray-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-black">
          Become a Professional
        </button>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">

        <span>✅ Verified Professionals</span>

        <span>⭐ 4.9 Average Rating</span>

        <span>🛡 Secure Booking</span>

        <span>⚡ Fast Service</span>

</div>

    </section>
  );
}