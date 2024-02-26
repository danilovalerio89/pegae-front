import { twMerge } from "tailwind-merge";

export interface ContentImageRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ContentImageRoot({
  children,
  className,
  ...props
}: ContentImageRootProps) {
  return (
    <div
      className={twMerge("flex max-w-3xl justify-center lg:w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
}
