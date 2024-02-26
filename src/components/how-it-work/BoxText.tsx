import { cn } from "@/lib/utils";
import React from "react";

export const BoxText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("max-w-[310px] rounded-lg bg-grey.300 p-6", className)}
    {...props}
  >
    <p>{children}</p>
  </div>
));
