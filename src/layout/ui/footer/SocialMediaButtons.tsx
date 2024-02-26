import { goToExternalUrl } from "@/utils/goToExternalUrl";
import InstagramYellow from "@/assets/svgs/InstagramYellow.svg";
import TwitterYellow from "@/assets/svgs/TwitterYellow.svg";
import InstagramWhite from "@/assets/svgs/InstagramWhite.svg";
import TwitterWhite from "@/assets/svgs/TwitterWhite.svg";
import { twMerge } from "tailwind-merge";

export interface SocialMediaButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function SocialMediaButton({
  className,
  ...props
}: SocialMediaButtonProps) {
  return (
    <div className={twMerge("flex gap-4", className)} {...props}>
      <button
        onClick={() => goToExternalUrl("https://www.instagram.com/usepegae/")}
      >
        <img
          src={InstagramYellow}
          alt="Instagram Icon Yellow"
          className="lg:hidden"
        />
        <img
          src={InstagramWhite}
          alt="Instagram Icon White"
          className="hidden lg:flex "
        />
      </button>
      <button onClick={() => goToExternalUrl("https://twitter.com/usepegae")}>
        <img
          src={TwitterYellow}
          alt="Twitter Icon Yellow"
          className="lg:hidden"
        />
        <img
          src={TwitterWhite}
          alt="Twitter Icon White"
          className="hidden lg:flex"
        />
      </button>
    </div>
  );
}
