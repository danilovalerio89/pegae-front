import { twMerge } from "tailwind-merge";

export interface HeaderLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
}

export function HeaderLogo({
  image: img,
  className,
  ...props
}: HeaderLogoProps) {
  return (
    <div
      className={twMerge("contents self-center w-[104px]", className)}
      {...props}
    >
      <img src={img} alt="Logo" />
    </div>
  );
}
