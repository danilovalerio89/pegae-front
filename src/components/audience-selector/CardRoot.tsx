import { cn } from "@/lib/utils";

export interface CardRoot extends React.HTMLAttributes<HTMLDivElement> {}
// ${show ? "[transform:rotateY(180deg)]" : ""
export function CardRoot({ className, ...props }: CardRoot) {
  return (
    <div
      className={cn(
        `} relative flex w-full min-w-[315px] max-w-[400px] flex-col rounded-[24px] bg-grey.400 p-6 transition-all duration-500 [transform-style:preserve-3d]`,
        className,
      )}
      {...props}
    />
  );
}
