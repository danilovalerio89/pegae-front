import { cn } from "@/lib/utils";
import React from "react";

export const Title = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "max-w-[809px] pb-4 text-center font-paytone text-[30px] text-yellow.700",
      className,
    )}
    {...props}
  />
));
