import { Content } from "@/components/content";
import { FAQ as FAQComponent } from "@/components/faq";
import { Accordion } from "@/components/ui/accordion";
import i18n from "i18next";
import { t } from "i18next";

export function FAQ() {
  const i18nOutside = i18n.t("sections.company.faq.questions", {
    returnObjects: true,
  });

  return (
    <Content.Section
      className={`relative bg-grey.400 bg-[url('src/assets/BackgroundFAQ.png')] bg-cover bg-no-repeat pb-6 lg:flex lg:h-auto lg:flex-col lg:pb-0`}
    >
      <div className="absolute left-0 top-0 -z-10 h-10 w-full bg-grey.300"></div>
      <FAQComponent.Header
        info={t("sections.company.faq.info")}
        title={t("sections.company.faq.title")}
        subtitle={t("sections.user.faq.subtitle")}
      />

      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-2 rounded-sm"
      >
        {i18nOutside.map((item, index) => (
          <FAQComponent.Card
            key={index}
            title={item.title}
            description={item.description}
            value={index.toString()}
          />
        ))}
      </Accordion>
      <FAQComponent.Buttons
        firstButton={t("sections.company.faq.talk_to_team")}
        secondButton={t("sections.company.faq.learn_more")}
      />
    </Content.Section>
  );
}
