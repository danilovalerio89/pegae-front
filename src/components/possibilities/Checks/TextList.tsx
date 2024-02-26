import { Button } from "@/components/ui/button";
import Check from "@/assets/svgs/possibilities-use/Check.svg";
import { goToGoogleForm } from "@/utils/go-to-google-form";

export interface TextList {
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
}

export function TextList({ content, active }: TextList) {
  return (
    <div>
      {content[active].tags.map((item, index) => (
        <div key={index}>
          <div className="mb-4 flex gap-2 px-3">
            <img src={Check} />
            <p>{item}</p>
          </div>
        </div>
      ))}
      <Button
        className="ml-3 mt-8 w-fit px-11 py-3"
        variant={"purple"}
        onClick={() => goToGoogleForm()}
      >
        Saiba mais
      </Button>
    </div>
  );
}
