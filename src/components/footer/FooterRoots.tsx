import { twMerge } from "tailwind-merge";

export interface FooterRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function FooterRoot({ children, className, ...props }: FooterRootProps) {
  return (
    <footer
      className={twMerge(
        "flex flex-col items-center gap-6 bg-grey.800 py-7 sm:m-auto sm:max-w-xl lg:mx-4 lg:max-w-full lg:px-36 lg:py-24 lg:pb-0 2xl:mx-auto 2xl:max-w-[1440px]",
        className,
      )}
      {...props}
    >
      {children}
    </footer>
  );
}
