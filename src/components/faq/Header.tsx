import { Content } from "@/components/content";

export interface HeaderProps {
  title: string;
  subtitle: string;
  info: string;
}

export function Header({ title, subtitle, info }: HeaderProps) {
  return (
    <Content.HeaderGroup className="flex flex-col items-center">
      <Content.HeaderInfo className="text-purple.500">
        {info}
      </Content.HeaderInfo>
      <Content.Title className="my-5 text-grey.800">{title}</Content.Title>
      <Content.HeaderSubtitle className="max-w-[680px] text-center">
        {subtitle}
      </Content.HeaderSubtitle>
    </Content.HeaderGroup>
  );
}
