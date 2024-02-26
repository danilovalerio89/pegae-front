import { Navigation } from "@/components/navbar/";
import { useTranslation } from "react-i18next";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { goToExternalUrl } from "@/utils/goToExternalUrl";
import InstagramPurple from "@/assets/svgs/InstagramPurple.svg";
import TwitterPurple from "@/assets/svgs/TwitterPurple.svg";

export interface NavigationDefaultProps {
  isOpen: boolean;
}

export function NavigationDefault({ isOpen }: NavigationDefaultProps) {
  const { t } = useTranslation();

  return (
    <Navigation.Root isActive={!isOpen}>
      <Navigation.List>
        <Navigation.Action
          color="text-purple.500"
          navigateTo="/company"
          text={t("navigation_header.company")}
        />
        <Navigation.Action
          color="text-purple.500"
          navigateTo="/user"
          text={t("navigation_header.user")}
        />
        <Navigation.Action
          color="text-purple.500"
          navigateTo={
            process.env.NODE_ENV === "development" ? "/dev" : "/contact"
          }
          text={
            process.env.NODE_ENV === "development"
              ? "Developer"
              : `${t("navigation_header.contact")}`
          }
        />
        <Separator />
        <div className="mt-6 flex flex-col gap-3">
          <Button
            variant={"white"}
            onClick={() => goToExternalUrl("https://app.pegae.com.br")}
          >
            Login
          </Button>
          <Button
            variant={"purple"}
            onClick={() => goToExternalUrl("https://app.pegae.com.br")}
          >
            Cadastrar
          </Button>
        </div>

        <div className="mt-3 flex gap-2">
          <Navigation.Icon
            icon_url={InstagramPurple}
            onClick={() =>
              goToExternalUrl("https://www.instagram.com/usepegae/")
            }
          />
          <Navigation.Icon
            icon_url={TwitterPurple}
            onClick={() => goToExternalUrl("https://twitter.com/usepegae")}
          />
        </div>
      </Navigation.List>
    </Navigation.Root>
  );
}
