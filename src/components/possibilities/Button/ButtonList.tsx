import { Possibilities } from "@/components/possibilities";
import { cn } from "@/lib/utils";

export interface ButtonListProps {
  content: {
    card_select: {
      icon: string;
      text: string;
    };
    title: string;
    subtitle: string;
    tags: string[];
  }[];
  active: number;
  setActive: (index: number) => void;
}

export function ButtonList({ content, active, setActive }: ButtonListProps) {
  return (
    <div
      className={cn(
        "hidden w-full max-w-[1142px] flex-col items-center justify-between gap-4 sm:pb-4 lg:flex lg:flex-row lg:gap-0 lg:pb-0",
      )}
    >
      {content.map((item, index) => (
        <Possibilities.Button.ButtonComponent
          isActive={active === index}
          key={index}
          image={item.card_select.icon}
          text={item.card_select.text}
          onClick={() => setActive(index)}
        />
      ))}
    </div>
  );
}
