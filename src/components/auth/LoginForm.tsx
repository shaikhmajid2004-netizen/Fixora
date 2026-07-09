"use client";

import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-6">
      {/* Email */}
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

      {/* Password */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
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

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-slate-600">
          <input type="checkbox" />
          Remember Me
        </label>

        <button
          type="button"
          className="font-medium text-blue-600 hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Sign In
      </button>

      {/* Register */}
      <p className="text-center text-sm text-slate-600">
        Don't have an account?{" "}
        <button
          type="button"
          className="font-semibold text-blue-600 hover:underline"
        >
          Create Account
        </button>
      </p>
    </form>
  );
}