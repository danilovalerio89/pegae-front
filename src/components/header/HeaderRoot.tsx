import { twMerge } from "tailwind-merge";

export interface HeaderRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function HeaderRoot({ children, className, ...props }: HeaderRootProps) {
  return (
    <header
      className={twMerge(
        "flex justify-between h-10 m-4 max-w-[1440px] 2xl:mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
}
