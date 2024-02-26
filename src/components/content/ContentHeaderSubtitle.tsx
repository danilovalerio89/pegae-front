import { twMerge } from "tailwind-merge";

export interface ContentHeaderSubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function ContentHeaderSubtitle({
  children,
  className,
  ...props
}: ContentHeaderSubtitleProps) {
  return (
    <p className={twMerge("text-grey.700", className)} {...props}>
      {children}
    </p>
  );
}
