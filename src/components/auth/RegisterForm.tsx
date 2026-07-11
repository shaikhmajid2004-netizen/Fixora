"use client";
import FixoraButton from "@/components/ui/FixoraButton";
import { toast } from "sonner";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  role: "customer",
});

const [loading, setLoading] = useState(false);
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);

try {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (response.ok) {
    toast.success("Welcome to Fixora! 🎉", {
  description: "Your account has been created successfully.",
});
    console.log(data);
  } else {
   toast.error("Registration Failed", {
  description: data.message || "Please try again.",
});
  }
} catch (error) {
  console.error(error);
  toast.error("Server Error", {
  description: "Something went wrong. Please try again.",
});
} finally {
  setLoading(false);
}
};
  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            First Name
          </label>

          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Abdul"
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Last Name
          </label>

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Majid"
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />
        </div>

      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Mobile Number
        </label>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 XXXXX XXXXX"
          className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Password
        </label>

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 pr-16 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
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

      <div className="flex items-start gap-3">

        <input type="checkbox" className="mt-1" />

        <p className="text-sm text-slate-600">
          I agree to the Terms & Conditions and Privacy Policy.
        </p>

      </div>

      <FixoraButton
       type="submit"
       loading={loading}
      >
       Create Account
      </FixoraButton>

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