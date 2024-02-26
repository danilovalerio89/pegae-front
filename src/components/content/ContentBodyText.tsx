import { twMerge } from "tailwind-merge";

export interface ContentBodyTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function ContentBodyText({
  children,
  className,
  ...props
}: ContentBodyTextProps) {
  return (
    <p className={twMerge("my-8 text-grey.800", className)} {...props}>
      {children}
    </p>
  );
}
