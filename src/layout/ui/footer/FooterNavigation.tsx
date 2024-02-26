import { Navigation } from "@/components/navbar";
import { useTranslation } from "react-i18next";

export function FooterNavigation() {
  const { t } = useTranslation();

  return (
    <Navigation.List className=" hidden lg:flex lg:gap-4">
      <Navigation.Action
        className="text-grey.600 p-0"
        color="text-white"
        navigateTo="/company"
        text={t("navigation_header.company")}
      />
      <Navigation.Action
        className="text-grey.600 p-0"
        color="text-white"
        navigateTo="/user"
        text={t("navigation_header.user")}
      />
      <Navigation.Action
        className="text-grey.600 p-0"
        color="text-white"
        navigateTo={
          process.env.NODE_ENV === "development" ? "/dev" : "/contact"
        }
        text={
          process.env.NODE_ENV === "development"
            ? "Developer"
            : `${t("navigation_header.contact")}`
        }
      />
    </Navigation.List>
  );
}
