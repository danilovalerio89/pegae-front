import { cn } from "@/lib/utils";
import React from "react";

export const Image = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img ref={ref} className={cn("size-[51px]", className)} {...props} />
));
