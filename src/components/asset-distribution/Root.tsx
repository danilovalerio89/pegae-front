import { cn } from "@/lib/utils";
import React from "react";

export const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "bg-black px-6 pb-6 pt-14 sm:m-auto sm:max-w-xl lg:mx-4 lg:max-w-full lg:px-36 lg:py-24 lg:pb-0 2xl:mx-auto 2xl:max-w-[1440px]",
      className,
    )}
    {...props}
  />
));
Root.displayName = "Root";
