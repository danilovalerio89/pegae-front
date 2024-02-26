import { twMerge } from "tailwind-merge";

export interface ContentSubsectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ContentSubsection({
  children,
  className,
  ...props
}: ContentSubsectionProps) {
  return (
    <div
      className={twMerge("lg:flex lg:flex-col lg:justify-center", className)}
      {...props}
    >
      {children}
    </div>
  );
}
