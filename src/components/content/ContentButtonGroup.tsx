import { twMerge } from "tailwind-merge";

export interface ContentButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ContentButtonGroup({
  children,
  className,
  ...props
}: ContentButtonGroupProps) {
  return (
    <div
      className={twMerge("mb-14 flex flex-col gap-4 lg:flex-row", className)}
      {...props}
    >
      {children}
    </div>
  );
}
