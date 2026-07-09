"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-5">

      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            First Name
          </label>

          <input
            type="text"
            placeholder="Abdul"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Last Name
          </label>

          <input
            type="text"
            placeholder="Majid"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />
        </div>

      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Email Address
        </label>

        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Mobile Number
        </label>

        <input
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Password
        </label>

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-16 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>

        </div>
      </div>

      <div className="flex items-start gap-3">

        <input type="checkbox" className="mt-1" />

        <p className="text-sm text-slate-600">
          I agree to the Terms & Conditions and Privacy Policy.
        </p>

      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Create Account
      </button>

      <p className="text-center text-sm text-slate-600">
        Already have an account?{" "}
        <a
          href="/login"
          className="font-semibold text-blue-600 hover:underline"
        >
          Login
        </a>
      </p>

    </form>
  );
}