"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

type StatsCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  icon: ReactNode;
};

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
}: StatsCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-slate-500">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}