import { cn } from "@/lib/utils";
import React from "react";

export interface RootProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Root = React.forwardRef<HTMLButtonElement, RootProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        `flex w-full cursor-pointer flex-col items-center gap-2 rounded-2xl bg-[#E9E2FD] p-4 lg:max-w-[177px]`,
        className,
      )}
      {...props}
    />
  ),
);
