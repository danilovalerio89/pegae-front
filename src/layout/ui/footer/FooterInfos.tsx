import PoweredKhizaWhite from "@/assets/svgs/PoweredKhizeWhite.svg";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";

export function FooterInfo() {
  const { t } = useTranslation();

  return (
    <div className="lg:w-full lg:max-w-[1440px]">
      <button className="lg:hidden">
        <img src={PoweredKhizaWhite} alt="Powered By Khiza" />
      </button>
      <Separator className="my-14 max-w-[1440px] bg-grey.600 hidden lg:flex" />
      <div className="hidden justify-between w-full max-w-[1440px] lg:flex">
        <p className="text-grey.300">{t("footer_info.copyrigth")}</p>
        <div className="flex gap-4">
          <p className="text-grey.300 cursor-pointer">
            {t("footer_info.cookies")}
          </p>
          <p className="text-grey.300 cursor-pointer">
            {t("footer_info.privacy_policy")}
          </p>
        </div>
      </div>
    </div>
  );
}
