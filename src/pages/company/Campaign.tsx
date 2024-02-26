import { Content } from "@/components/content";
import { Button } from "@/components/ui/button";
import { t } from "i18next";
import { CampaignHeader } from "@/layout/campaing/CampaignHeader";
import MoneyIcon from "@/assets/svgs/MoneyIcon.svg";
import SmileIcon from "@/assets/svgs/SmileIcon.svg";
import CreateCampaignIcon from "@/assets/svgs/CreateCampaignIcon.svg";
import LampIcon from "@/assets/svgs/LampIcon.svg";
import CampaignImg from "@/assets/svgs/CampaignImg.svg";
import { goToGoogleForm } from "@/utils/go-to-google-form";

export function Campaign() {
  return (
    <Content.Section className="height-screen-header rounded-t-[40px] bg-grey.300 lg:h-auto ">
      <CampaignHeader
        info={t("sections.company.campaign.info")}
        title={t("sections.company.campaign.title")}
        subtitle={t("sections.company.campaign.subtitle")}
        image={CampaignImg}
      />
      <div className="height-screen-header flex h-auto flex-col gap-9 lg:grid lg:grid-cols-2 lg:content-end lg:gap-x-8">
        <Content.CampaignCard
          icon={MoneyIcon}
          title={t("sections.company.campaign.generate_revenue.title")}
          body={t("sections.company.campaign.generate_revenue.description")}
        />
        <Content.CampaignCard
          icon={SmileIcon}
          title={t("sections.company.campaign.strengthen_community.title")}
          body={t("sections.company.campaign.strengthen_community.description")}
        />
        <Content.CampaignCard
          icon={CreateCampaignIcon}
          title={t(
            "sections.company.campaign.create_innovative_campaigns.title",
          )}
          body={t(
            "sections.company.campaign.create_innovative_campaigns.description",
          )}
        />
        <Content.CampaignCard
          className="mb-0"
          icon={LampIcon}
          title={t("sections.company.campaign.capture_valuable_insights.title")}
          body={t(
            "sections.company.campaign.capture_valuable_insights.description",
          )}
        />
        <Button
          variant={"purple"}
          className="my-9 w-full"
          onClick={() => goToGoogleForm()}
        >
          {t("sections.company.campaign.learn_more")}
        </Button>
      </div>
    </Content.Section>
  );
}
