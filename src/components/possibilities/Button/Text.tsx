import React from "react";
import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ text, className, ...props }, ref) => (
    <p ref={ref} className={cn("font-paytone", className)} {...props}>
      {text}
    </p>
  ),
);
