import { ButtonHTMLAttributes } from "react";

export interface HamburgerMenuProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

export default function HamburgerMenu({
  isOpen,
  ...props
}: HamburgerMenuProps) {
  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <button
      className="flex h-12 w-12 flex-col items-center justify-center lg:hidden"
      {...props}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "translate-y-3 rotate-45 group-hover:opacity-100"
            : " group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-translate-y-3 -rotate-45 group-hover:opacity-100"
            : " group-hover:opacity-100"
        }`}
      />
    </button>
  );
}
