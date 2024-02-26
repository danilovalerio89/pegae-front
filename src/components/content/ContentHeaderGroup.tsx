import { twMerge } from "tailwind-merge";

export interface ContentHeaderGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ContentHeaderGroup({
  children,
  className,
  ...props
}: ContentHeaderGroupProps) {
  return (
    <div className={twMerge("pb-10 pt-20 lg:pb-10", className)} {...props}>
      {children}
    </div>
  );
}
