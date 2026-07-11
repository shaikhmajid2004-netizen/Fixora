"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FixoraInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export default function FixoraInput({
  label,
  error,
  icon,
  className,
  ...props
}: FixoraInputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}

        <input
          className={cn(
            "h-12 w-full rounded-xl border border-slate-300 bg-white px-4 transition-all duration-300 outline-none",
            icon && "pl-11",
            "focus:border-blue-600 focus:ring-4 focus:ring-blue-100",
            error && "border-red-500 focus:ring-red-100",
            className
          )}
          {...props}
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}