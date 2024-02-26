import { Navigation } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { navigationSocial } from "@/data/navigation-social";
import { goToExternalUrl } from "@/utils/goToExternalUrl";
import TwitterPurple from "@/assets/svgs/TwitterPurple.svg";
import InstagramPurple from "@/assets/svgs/InstagramPurple.svg";
import i18n from "@/lib/i18n";

export function NavigationSocialMedia() {
  return (
    <div className="hidden lg:flex lg:w-full lg:justify-end lg:gap-4">
      <Button
        variant={"white"}
        className="py-18 w-auto px-10"
        onClick={() => goToExternalUrl(navigationSocial.app)}
      >
        {i18n.t("navigation_header.login")}
      </Button>
      <Button
        variant={"purple"}
        className="py-18 w-auto px-10"
        onClick={() => goToExternalUrl(navigationSocial.app)}
      >
        {i18n.t("navigation_header.register")}
      </Button>

      <Navigation.Icon
        icon_url={TwitterPurple}
        onClick={() => goToExternalUrl(navigationSocial.twitter)}
      />
      <Navigation.Icon
        icon_url={InstagramPurple}
        onClick={() => goToExternalUrl(navigationSocial.instagram)}
      />
    </div>
  );
}
