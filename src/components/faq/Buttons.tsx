import { Button } from "@/components/ui/button";
import { goToGoogleForm } from "@/utils/go-to-google-form";

export interface ButtonFAQProps {
  firstButton: string;
  secondButton: string;
}

export function ButtonFAQ({ firstButton, secondButton }: ButtonFAQProps) {
  return (
    <div className="mb-[86px] mt-[50px] hidden lg:flex lg:justify-center lg:gap-6">
      <Button
        onClick={() => goToGoogleForm()}
        className="w-auto rounded-full border border-transparent bg-red.500 text-white"
        variant={"white"}
      >
        {firstButton}
      </Button>
      <Button
        className="w-auto rounded-full"
        variant={"white"}
        onClick={() => goToGoogleForm()}
      >
        {secondButton}
      </Button>
    </div>
  );
}
