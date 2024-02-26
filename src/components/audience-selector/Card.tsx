import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { AudienceSelector } from "@/components/audience-selector/";
import { t } from "i18next";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  children?: React.ReactNode;
}

export function Card({
  title,
  subtitle,
  description,
  img,
  className,
  children,
  ...props
}: CardProps) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <AudienceSelector.CardRoot
      className={cn(show ? "[transform:rotateY(180deg)]" : "", className)}
      {...props}
    >
      <AudienceSelector.Front
        title={title}
        img={img}
        subtitle={subtitle}
        description={description}
        show={show}
        setShow={setShow}
        btn_text={t("sections.company.audience_selector.default.learn_more")}
      />

      <AudienceSelector.Back show={show} setShow={setShow}>
        {children}
      </AudienceSelector.Back>
    </AudienceSelector.CardRoot>
  );
}
