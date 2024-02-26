import { twMerge } from "tailwind-merge";

export interface ContentSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ContentSection({
  children,
  className,
  ...props
}: ContentSectionProps) {
  return (
    <section
      className={twMerge(
        "lg:snap snap height-screen-header relative h-auto snap-start rounded-t-[40px] px-8 sm:m-auto sm:flex sm:max-w-xl sm:flex-col lg:mx-4 lg:grid lg:max-w-full lg:grid-cols-2 lg:gap-8 2xl:mx-auto 2xl:max-w-[1440px]",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
