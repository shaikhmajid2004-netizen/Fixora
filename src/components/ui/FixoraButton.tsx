"use client";

import * as React from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "danger" | "ghost";

interface FixoraButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
  showArrow?: boolean;
  variant?: Variant;
}

const variants = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25",

  secondary:
    "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",

  danger:
    "bg-red-600 hover:bg-red-700 text-white",

  ghost:
    "bg-transparent hover:bg-slate-800 text-white border border-slate-700",
};

export default function FixoraButton({
  children,
  loading = false,
  icon,
  showArrow = true,
  variant = "primary",
  className,
  disabled,
  ...props
}: FixoraButtonProps) {
  return (
    <Button
      disabled={loading || disabled}
      className={cn(
        "group h-12 rounded-xl px-6 font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]",
        variants[variant],
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Please wait...
        </>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}

          {children}

          {showArrow && (
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </>
      )}
    </Button>
  );
}