import { Content } from "@/components/content";
import Img1 from "@/assets/svgs/HowWork1.svg";
import Img2 from "@/assets/svgs/HowWork2.svg";
import Img3 from "@/assets/svgs/HowWork3.svg";
import { HowItWork as HIW } from "@/components/how-it-work";
import { Trans } from "react-i18next";
import { t } from "i18next";

export function HowItWork() {
  return (
    <Content.Section className="h-auto bg-white pb-10 lg:flex lg:h-auto lg:flex-col">
      <div className="absolute left-0 top-0 -z-10 h-10 w-full bg-grey.500"></div>
      <Content.HeaderGroup className="flex flex-col items-center">
        <Content.HeaderInfo className="text-purple.500">
          {t("sections.company.how_it_work.info")}
        </Content.HeaderInfo>
        <Content.Title className="pb-4 pt-3 text-black lg:pb-5">
          {t("sections.company.how_it_work.title")}
        </Content.Title>
        <Content.HeaderSubtitle className="lg:px-24 lg:text-center">
          {t("sections.company.how_it_work.description")}
        </Content.HeaderSubtitle>
      </Content.HeaderGroup>

      <div className=" lg:m-full flex max-w-screen-xl overflow-x-auto lg:max-w-full lg:flex-row lg:justify-evenly lg:overflow-x-hidden">
        <div className="flex gap-10 space-x-4 p-4 lg:w-full lg:justify-evenly">
          <HIW.Root>
            <HIW.Img src={Img1} />
            <HIW.Text>
              <Trans i18nKey="sections.company.how_it_work.box_1" />
            </HIW.Text>
          </HIW.Root>

          <HIW.Root>
            <HIW.Text>
              <Trans i18nKey="sections.company.how_it_work.box_2" />
            </HIW.Text>
            <HIW.Img src={Img2} />
          </HIW.Root>

          <HIW.Root>
            <HIW.Img src={Img3} />

            <HIW.Text>
              <Trans i18nKey="sections.company.how_it_work.box_3" />
            </HIW.Text>
          </HIW.Root>
        </div>
      </div>
    </Content.Section>
  );
}
