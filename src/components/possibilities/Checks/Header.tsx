import { cn } from "@/lib/utils";

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle, className, ...props }: HeaderProps) {
  return (
    <div className={cn("mb-8 leading-10", className)} {...props}>
      <h3 className="font-paytone">{title}</h3>
      <p className="pt-4 leading-8 text-grey.800">{subtitle}</p>
    </div>
  );
}
