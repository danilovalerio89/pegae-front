import { Content } from "@/components/content";
import { twMerge } from "tailwind-merge";

export interface CampaingHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  info: string;
  title: string;
  subtitle: string;
  image?: string;
}

export function CampaignHeader({
  info,
  title,
  subtitle,
  image,
  className,
  ...props
}: CampaingHeaderProps) {
  return (
    <Content.SubSection className={twMerge("", className)} {...props}>
      <Content.HeaderGroup>
        <Content.HeaderInfo>{info}</Content.HeaderInfo>
        <Content.Title className="pb-4 pt-3 lg:pb-5">{title}</Content.Title>
        <Content.HeaderSubtitle>{subtitle}</Content.HeaderSubtitle>
      </Content.HeaderGroup>
      {image && (
        <Content.ImageRoot className="hidden lg:relative lg:block lg:h-[750px] lg:min-w-[800px] ">
          <img
            src={image}
            className="w-[900px] lg:absolute lg:-bottom-[100px] lg:-left-[230px] lg:top-0 lg:h-[450px] xl:-left-[198px] xl:h-[650px]"
          />
        </Content.ImageRoot>
      )}
    </Content.SubSection>
  );
}
