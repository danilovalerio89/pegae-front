import { Header } from "@/components/header";
import { Navigation } from "@/components/navbar";
import { useTranslation } from "react-i18next";
import Logo from "@/assets/svgs/Logo.svg";
import HamburgerMenu from "@/components/ui/hamburger";
import { NavigationSocialMedia } from "./header/NavigationSocialMedia";
import { goToGoogleForm } from "@/utils/go-to-google-form";

export interface HeaderDefaultProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function HeaderDefault({ isOpen, setIsOpen }: HeaderDefaultProps) {
  const { t } = useTranslation();

  return (
    <Header.Root className=" lg:justify-start">
      <Header.Logo image={Logo} />
      <div className="hidden items-center lg:ml-10 lg:flex">
        <Navigation.Action
          color="text-purple.500"
          navigateTo="/company"
          text={t("navigation_header.company")}
        />
        <Navigation.Action
          disabled
          color="text-purple.500"
          navigateTo="/user"
          text={t("navigation_header.user")}
        />
        <Navigation.Action
          onClick={() => goToGoogleForm()}
          color="text-purple.500"
          navigateTo={
            process.env.NODE_ENV === "development" ? "/dev" : "/company"
          }
          text={
            process.env.NODE_ENV === "development"
              ? "Developer"
              : `${t("navigation_header.contact")}`
          }
        />
      </div>
      <NavigationSocialMedia />
      <HamburgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </Header.Root>
  );
}
