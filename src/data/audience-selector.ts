import { CardProps } from "@/components/audience-selector/Card";
import Img1 from "@/assets/svgs/SelectorImage1.svg";
import Img2 from "@/assets/svgs/SelectorImage2.svg";
import Img3 from "@/assets/svgs/SelectorImage3.svg";

export interface AudienceSelectorProps
  extends Pick<CardProps, "title" | "subtitle" | "description" | "img"> {}

export const audience_selector: AudienceSelectorProps[] = [
  {
    title: "Marcas",
    subtitle: "Engajamento e fidelização",
    description:
      "Expanda a entrega de valor para sua comunidade e co-crie com seus maiores fãs e outras marcas",
    img: Img1,
  },
  {
    title: "Agências",
    subtitle: "Inovação customizável",
    description:
      "Crie campanhas únicas com colecionáveis digitais que ampliam engajamento e valor de marca.",
    img: Img2,
  },
  {
    title: "Developers",
    subtitle: "Construção e integração",
    description: "Integre ativos digitais em suas soluções de forma simples.",
    img: Img3,
  },
];
