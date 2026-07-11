"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import FixoraButton from "@/components/ui/FixoraButton";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    try {
      // Login API integration will be added in next step.
    const response = await fetch("/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email,
    password,
  }),
});

console.log("Status:", response.status);
console.log("Content-Type:", response.headers.get("content-type"));

const text = await response.text();
console.log("Response:", text);

return;
    } catch (error) {
  console.error(error);
  toast.error("Something went wrong. Please try again.");
} finally {
  setLoading(false);
}
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Email */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Email Address
        </label>

        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 pr-14 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-blue-600"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>
      </div>

      {/* Remember */}

      <div className="flex items-center justify-between">

        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input type="checkbox" />
          Remember Me
        </label>

        <button
          type="button"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          Forgot Password?
        </button>

      </div>

      {/* Button */}

      <FixoraButton
        type="submit"
        loading={loading}
      >
        Sign In
      </FixoraButton>

      {/* Register */}

      <p className="text-center text-sm text-slate-600">
        Don&apos;t have an account?{" "}
        <Link
         href="/register"
         className="font-semibold text-blue-600 hover:underline"
>
         Create Account
        </Link>
      </p>

    </form>
  );
}