import { Possibilities } from "@/components/possibilities";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  image: string;
  text: string;
  isActive: boolean;
}

export function Button({
  image,
  text,
  isActive,
  className,
  ...props
}: ButtonProps) {
  return (
    <Possibilities.Button.Root
      className={cn(
        `max-w-[510px] ${isActive ? "border-2 border-purple.500 bg-grey.400" : "border-grey.400"}`,
        className,
      )}
      {...props}
    >
      <Possibilities.Button.Img src={image} />
      <Possibilities.Button.Text text={text} />
    </Possibilities.Button.Root>
  );
}
