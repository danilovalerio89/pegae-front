import { Content } from "@/components/content";
import { Button } from "@/components/ui/button";
import { t } from "i18next";
import IntroductionImg from "@/assets/svgs/IntroductionImg.svg";
import IntroductionImgDesktop from "@/assets/svgs/IntroductionDesktop.svg";
import { goToGoogleForm } from "@/utils/go-to-google-form";

export function Introduction() {
  return (
    <Content.Section className="pt-16 lg:grid lg:[grid-template-columns:40%60%] ">
      <Content.SubSection>
        <Content.Title className=" 2xl:text-[50px] 2xl:leading-[65px]">
          {t("sections.company.introduction.title")}
        </Content.Title>
        <Content.BodyText>
          {t("sections.company.introduction.body")}
        </Content.BodyText>
        <Content.ButtonGroup className="mb-14 flex flex-col gap-4 lg:flex-row">
          {/* <Button
            className="rounded-full bg-red.500 font-normal"
            onClick={() => goToGoogleForm()}
          >
            {t("sections.company.introduction.btn_team")}
          </Button> */}
          <Button
            variant={"white"}
            className="w-full lg:w-auto"
            onClick={() => goToGoogleForm()}
          >
            {t("sections.company.introduction.btn_about")}
          </Button>
        </Content.ButtonGroup>
      </Content.SubSection>
      <Content.ImageRoot className="relative -z-10 flex max-w-3xl justify-center lg:w-full">
        <img
          src={IntroductionImg}
          alt="Pegae APP"
          className="relative lg:hidden"
        />
        <img
          src={IntroductionImgDesktop}
          alt="Pegae APP"
          className="absolute right-0 top-0 z-[-10] hidden w-full lg:flex lg:h-[850px]"
        />
      </Content.ImageRoot>
    </Content.Section>
  );
}
