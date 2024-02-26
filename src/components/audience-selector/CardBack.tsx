import Close from "@/assets/svgs/CloseIcon.svg";

export interface CardBackProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  setShow: (show: boolean) => void;
  children?: React.ReactNode;
}

export function CardBack({ show, setShow, children, ...props }: CardBackProps) {
  return (
    <div
      className="absolute m-auto h-[392px]  [backface-visibility:hidden] [transform:rotateY(180deg)]"
      {...props}
    >
      <div className=" m-auto flex h-[392px] w-full flex-col pl-6">
        <button
          className="flex w-full justify-end "
          onClick={() => setShow(!show)}
        >
          <img src={Close} />
        </button>
        <div className="flex h-full flex-col justify-evenly">{children}</div>
      </div>
    </div>
  );
}
