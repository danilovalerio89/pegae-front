import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface ContentProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
  value: string;
}

export function Card({ title, description, value, className }: ContentProps) {
  return (
    <AccordionItem
      value={`item-${value} `}
      className={cn(
        " rounded-sm border-b-0 border-l-4 border-purple.500 bg-white px-4",
        className,
      )}
    >
      <AccordionTrigger className="text-left text-base font-bold">
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-sm">{description}</AccordionContent>
    </AccordionItem>
  );
}
