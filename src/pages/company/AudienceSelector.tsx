import { AudienceSelector as ASComponent } from "@/components/audience-selector";
import { Content } from "@/components/content";
import { t } from "i18next";
import { Trans } from "react-i18next";

export function AudienceSelector() {
  return (
    <Content.Section className="bg-grey.300 lg:flex lg:h-auto lg:flex-col lg:items-start">
      <Content.HeaderGroup>
        <Content.HeaderInfo className="text-purple.500">
          {t("sections.company.audience_selector.default.info")}
        </Content.HeaderInfo>
        <Content.Title className="pb-5 pt-3 text-grey.800">
          {t("sections.company.audience_selector.default.title")}
        </Content.Title>
        <Content.SubSection className="text-grey.800">
          {t("sections.company.audience_selector.default.subtitle")}
        </Content.SubSection>
      </Content.HeaderGroup>
      <ASComponent.Root>
        <ASComponent.Card
          title={t("sections.company.audience_selector.card_brand.title")}
          subtitle={t("sections.company.audience_selector.card_brand.subtitle")}
          description={t(
            "sections.company.audience_selector.card_brand.description",
          )}
          img={t("sections.company.audience_selector.card_brand.img")}
        >
          <p>
            <Trans i18nKey="sections.company.audience_selector.card_brand.card_text_1" />
          </p>
          <p>
            <Trans i18nKey="sections.company.audience_selector.card_brand.card_text_2" />
          </p>
        </ASComponent.Card>
        <ASComponent.Card
          title={t("sections.company.audience_selector.card_agency.title")}
          subtitle={t(
            "sections.company.audience_selector.card_agency.subtitle",
          )}
          description={t(
            "sections.company.audience_selector.card_agency.description",
          )}
          img={t("sections.company.audience_selector.card_agency.img")}
        >
          <p>
            <Trans i18nKey="sections.company.audience_selector.card_agency.card_text_1" />
          </p>
          <p>
            <Trans i18nKey="sections.company.audience_selector.card_agency.card_text_2" />
          </p>
        </ASComponent.Card>
        <ASComponent.Card
          title={t("sections.company.audience_selector.card_developer.title")}
          subtitle={t(
            "sections.company.audience_selector.card_developer.subtitle",
          )}
          description={t(
            "sections.company.audience_selector.card_developer.description",
          )}
          img={t("sections.company.audience_selector.card_developer.img")}
        >
          <p>
            <Trans i18nKey="sections.company.audience_selector.card_developer.card_text_1" />
          </p>
          <p>
            <Trans i18nKey="sections.company.audience_selector.card_developer.card_text_2" />
          </p>
        </ASComponent.Card>
      </ASComponent.Root>
    </Content.Section>
  );
}
