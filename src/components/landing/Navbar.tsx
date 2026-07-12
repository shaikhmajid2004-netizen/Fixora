"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-lg">
            F
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-white">
              Fixora
            </h1>

            <p className="text-xs text-slate-400">
              One Platform. Every Service.
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="text-sm text-slate-300 transition hover:text-white">
            Home
          </Link>

          <Link href="/services" className="text-sm text-slate-300 transition hover:text-white">
            Services
          </Link>

          <Link href="/workers" className="text-sm text-slate-300 transition hover:text-white">
            Become a Worker
          </Link>

          <Link href="/about" className="text-sm text-slate-300 transition hover:text-white">
            About
          </Link>

          <Link href="/contact" className="text-sm text-slate-300 transition hover:text-white">
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/login"
            className="rounded-xl px-5 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu */}
        <button className="rounded-xl border border-white/10 p-3 text-white lg:hidden">
          <Menu size={22} />
        </button>

      </div>
    </header>
  );
}