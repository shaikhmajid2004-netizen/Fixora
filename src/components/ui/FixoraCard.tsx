import * as React from "react";
import { cn } from "@/lib/utils";

interface FixoraCardProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function FixoraCard({
  className,
  children,
  ...props
}: FixoraCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}