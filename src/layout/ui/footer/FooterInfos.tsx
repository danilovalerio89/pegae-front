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
      <Separator className="my-14 hidden max-w-[1440px] bg-grey.600 lg:flex" />
      <div className="hidden w-full max-w-[1440px] justify-between lg:flex lg:pb-10">
        <p className="text-grey.300">{t("footer_info.copyrigth")}</p>
        <div className="flex gap-4">
          <p className="cursor-pointer text-grey.300">
            {t("footer_info.cookies")}
          </p>
          <p className="cursor-pointer text-grey.300">
            {t("footer_info.privacy_policy")}
          </p>
        </div>
      </div>
    </div>
  );
}
