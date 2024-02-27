import { Content } from "@/components/content";
import { Possibilities } from "@/components/possibilities";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerNoIcon,
} from "@/components/ui/accordion";
import i18n from "@/lib/i18n";
import { useState } from "react";
import MobileIMG from "@/assets/svgs/possibilities-use/MobileImg.png";
import ToLeftArrow from "@/assets/svgs/ToLeftArrow.svg";

export function PossibilitiesComp() {
  const i18nConst = i18n.t("sections.company.possibilities", {
    returnObjects: true,
  });

  const [active, setActive] = useState<number>(0);

  const createAccordion = (contentArray: number) => {
    const accordion = [];
    for (let i = 0; i < contentArray; i++) {
      accordion.push(
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="flex w-full flex-col items-center border-b-0 px-4"
        >
          <AccordionTriggerNoIcon className="gap-4 text-2xl">
            <img src={i18nConst.content[i].card_select.icon} />
            {i18nConst.content[i].card_select.text}
          </AccordionTriggerNoIcon>
          <AccordionContent>
            <Possibilities.Checks.Header
              title={i18nConst.content[i].title}
              subtitle={i18nConst.content[i].subtitle}
            />
            <Possibilities.Checks.TextList
              content={i18nConst.content}
              active={i}
            />
          </AccordionContent>
        </AccordionItem>,
      );
    }
    return accordion;
  };

  return (
    <Content.Section className="items-center bg-grey.500 lg:flex lg:h-auto lg:flex-col">
      <div className="absolute left-0 top-0 -z-10 h-10 w-full bg-grey.300"></div>
      <Content.HeaderGroup className="flex flex-col items-center">
        <Content.Title>{i18nConst.default.title}</Content.Title>
        <Content.HeaderSubtitle className="mt-4 max-w-[750px] text-left md:text-center">
          {i18nConst.default.subtitle}
        </Content.HeaderSubtitle>
      </Content.HeaderGroup>
      <Possibilities.Button.ButtonList
        content={i18nConst.content}
        active={active}
        setActive={setActive}
      />
      <div className="hidden w-full max-w-[1110px] pt-16 [grid-template-columns:60%40%] sm:hidden lg:grid">
        <div>
          <Possibilities.Checks.Header
            title={i18nConst.content[active].title}
            subtitle={i18nConst.content[active].subtitle}
          />
          <Possibilities.Checks.TextList
            content={i18nConst.content}
            active={active}
          />
        </div>
        <div className="relative">
          <img src={MobileIMG} />
          <img
            src={ToLeftArrow}
            className="absolute hidden lg:-bottom-10 lg:-left-10 lg:z-10 lg:block"
          />
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full lg:hidden">
        {createAccordion(i18nConst.content.length)}
      </Accordion>
    </Content.Section>
  );
}
