import { twMerge } from "tailwind-merge";

export interface ContentRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ContentRoot({
  children,
  className,
  ...props
}: ContentRootProps) {
  return (
    <div
      className={twMerge(
        "snap no-scrollbar snap-y snap-mandatory snap-always overflow-y-scroll",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
