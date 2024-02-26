import { Button } from "@/components/ui/button";

export interface ButtonFAQProps {
  firstButton: string;
  secondButton: string;
}

export function ButtonFAQ({ firstButton, secondButton }: ButtonFAQProps) {
  return (
    <div className="mb-[86px] mt-[50px] hidden lg:flex lg:justify-center lg:gap-6">
      <Button
        className="w-auto rounded-full border border-transparent bg-red.500 text-white"
        variant={"white"}
      >
        {firstButton}
      </Button>
      <Button className="w-auto rounded-full" variant={"white"}>
        {secondButton}
      </Button>
    </div>
  );
}
