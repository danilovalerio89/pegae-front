import { cn } from "@/lib/utils";
import React from "react";

export const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-[465px] w-[310px]  max-w-[310px] flex-col justify-evenly",
      className,
    )}
    {...props}
  />
));
