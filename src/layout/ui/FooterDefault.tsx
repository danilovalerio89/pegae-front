import { Footer } from "@/components/footer";
import PegaeYellow from "@/assets/svgs/PegaeYellow.svg";
import { SocialMediaButton } from "@/layout/ui/footer/SocialMediaButtons";
import { FooterNavigation } from "@/layout/ui/footer/FooterNavigation";
import { twMerge } from "tailwind-merge";

import { FooterInfo } from "./footer/FooterInfos";

export interface FooterDefaultProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function FooterDefault({ className, ...props }: FooterDefaultProps) {
  return (
    <Footer.Root
      className={twMerge("snap-start flex-col lg:bg-black", className)}
      {...props}
    >
      <img
        src={PegaeYellow}
        alt="Pega Logo Yellow"
        className="lg:h-[33px] lg:w-[112px]"
      />
      <FooterNavigation />
      <SocialMediaButton />
      <FooterInfo />
    </Footer.Root>
  );
}
