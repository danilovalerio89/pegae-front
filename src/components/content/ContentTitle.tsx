import { twMerge } from "tailwind-merge";

export interface ContentTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function ContentTitle({
  children,
  className,
  ...props
}: ContentTitleProps) {
  return (
    <h2
      className={twMerge("font-paytone text-4xl text-purple.500", className)}
      {...props}
    >
      {children}
    </h2>
  );
}
