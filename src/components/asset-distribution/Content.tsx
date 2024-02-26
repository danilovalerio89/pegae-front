import { cn } from "@/lib/utils";
import React from "react";

export const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col items-center rounded-[8px] bg-grey.800 px-[26px] py-10",
      className,
    )}
    {...props}
  />
));
