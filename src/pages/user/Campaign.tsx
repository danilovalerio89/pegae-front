import { Content } from "@/components/content";
import { Button } from "@/components/ui/button";
import { t } from "i18next";
import { CampaignHeader } from "@/layout/campaing/CampaignHeader";
import MessageIcon from "@/assets/svgs/MessageIcon.svg";
import LightningIcon from "@/assets/svgs/LightningIcon.svg";
import CreateCampaignIcon from "@/assets/svgs/CreateCampaignIcon.svg";
import SmileMessageIcon from "@/assets/svgs/SmileMessageIcon.svg";

export function Campaign() {
  return (
    <>
      <Content.Section className="rounded-t-[40px] bg-grey.300 px-0 lg:flex lg:h-auto lg:flex-col">
        <CampaignHeader
          info={t("sections.user.campaign.info")}
          title={t("sections.user.campaign.title")}
          subtitle={t("sections.user.campaign.subtitle")}
          className="px-8"
        />
        <div className="flex flex-col gap-9 px-8 lg:flex-row">
          <Content.CampaignCard
            icon={MessageIcon}
            title={t("sections.user.campaign.unique_event.title")}
            body={t("sections.user.campaign.unique_event.description")}
          />
          <Content.CampaignCard
            icon={LightningIcon}
            title={t("sections.user.campaign.celebrate_milestones.title")}
            body={t("sections.user.campaign.celebrate_milestones.description")}
          />
          <Content.CampaignCard
            icon={CreateCampaignIcon}
            title={t("sections.user.campaign.exclusive_benefits.title")}
            body={t("sections.user.campaign.exclusive_benefits.description")}
          />
          <Content.CampaignCard
            className="mb-0"
            icon={SmileMessageIcon}
            title={t("sections.user.campaign.community_participation.title")}
            body={t(
              "sections.user.campaign.community_participation.description",
            )}
          />
          <Button variant={"purple"} className="mb-16 mt-9 w-full lg:hidden">
            {t("sections.company.campaign.learn_more")}
          </Button>
        </div>
        <div className="hidden lg:mb-16 lg:mt-[46px] lg:flex lg:justify-center">
          <Button variant={"purple"}>
            {t("sections.user.campaign.learn_more")}
          </Button>
        </div>
        <div className="hidden w-full bg-grey.400 lg:m-auto lg:flex lg:flex-col lg:items-center lg:py-36">
          <div className="lg:max-w-[800px]">
            <h2 className="text-center font-paytone text-[35px] leading-normal text-black">
              {t("sections.user.campaign.footer.title")}
            </h2>
            <h2 className="text-center font-paytone text-[35px] leading-normal text-black">
              {t("sections.user.campaign.footer.description")}
            </h2>
          </div>
        </div>
      </Content.Section>
    </>
  );
}
