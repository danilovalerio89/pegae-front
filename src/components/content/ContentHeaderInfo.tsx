import { twMerge } from "tailwind-merge";

export interface ContentHeaderInfoProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function ContentHeaderInfo({
  children,
  className,
  ...props
}: ContentHeaderInfoProps) {
  return (
    <h3
      className={twMerge("text-sm font-semibold text-grey.700", className)}
      {...props}
    >
      {children}
    </h3>
  );
}
