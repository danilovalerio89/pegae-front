import { cn } from "@/lib/utils";
import React from "react";

export const RootImg = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img ref={ref} className={cn("m-auto", className)} {...props} />
));
