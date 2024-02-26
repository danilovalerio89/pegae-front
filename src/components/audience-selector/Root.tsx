import { cn } from "@/lib/utils";
import React from "react";

export interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Root({ className, ...props }: RootProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-6 pb-16 lg:w-full lg:flex-row lg:flex-wrap lg:items-stretch lg:justify-center",
        className,
      )}
      {...props}
    />
  );
}
