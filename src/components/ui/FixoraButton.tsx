"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FixoraButtonProps = {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function FixoraButton({
  children,
  loading = false,
  className,
  disabled,
  ...props
}: FixoraButtonProps) {
  return (
    <Button
      disabled={loading || disabled}
      className={cn(
        "group h-12 w-full rounded-xl bg-blue-600 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl active:translate-y-0",
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
          {children}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </>
      )}
    </Button>
  );
}