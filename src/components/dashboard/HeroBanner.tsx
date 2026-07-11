"use client";

import { motion } from "framer-motion";
import FixoraButton from "@/components/ui/FixoraButton";

export default function HeroBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-10 text-white shadow-2xl"
    >
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
          FIXORA
        </p>

        <h1 className="text-5xl font-extrabold leading-tight">
          One Platform.
          <br />
          Every Service.
        </h1>

        <p className="mt-5 text-lg text-blue-100">
          Book trusted professionals for home services,
          repairs, maintenance and much more —
          all from one platform.
        </p>

        <div className="mt-8 flex gap-4">
          <FixoraButton className="w-auto bg-white text-blue-700 hover:bg-slate-100">
            Book Service
          </FixoraButton>

          <FixoraButton
            variant="ghost"
            showArrow={false}
            className="w-auto border-white text-white hover:bg-white/10"
          >
            Explore Services
          </FixoraButton>
        </div>

        <div className="mt-10 flex flex-wrap gap-8 text-sm">
          <div>
            <h2 className="text-2xl font-bold">12K+</h2>
            <p className="text-blue-100">Verified Workers</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">25 Min</h2>
            <p className="text-blue-100">Average Arrival</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4.9★</h2>
            <p className="text-blue-100">Customer Rating</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}