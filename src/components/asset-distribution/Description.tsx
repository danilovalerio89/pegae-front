import { cn } from "@/lib/utils";
import React from "react";

export const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "max-w-[809px] pb-5 text-center text-sm text-white",
      className,
    )}
    {...props}
  />
));
