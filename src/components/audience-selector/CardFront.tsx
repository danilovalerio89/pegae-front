import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  show: boolean;
  btn_text: string;
  setShow: (show: boolean) => void;
}
export function CardFront({
  title,
  subtitle,
  description,
  img,
  show,
  setShow,
  btn_text,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col [backface-visibility:hidden]",
        className,
      )}
      {...props}
    >
      <h3 className="text-h5-mobile font-bold text-purple.500 lg:text-h5-desktop">
        {title}
      </h3>
      <img src={img} alt={title} className="my-4 size-32" />
      <p className="text-grey.800">{subtitle}</p>
      <p className="my-5 text-grey.700">{description}</p>
      <Button
        variant={"white"}
        className="mt-auto w-full bg-transparent"
        onClick={() => setShow(!show)}
      >
        {btn_text}
      </Button>
    </div>
  );
}
