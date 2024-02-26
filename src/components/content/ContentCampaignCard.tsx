import { twMerge } from "tailwind-merge";

export interface ContentCampaignCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  title: string;
  body: string;
}

export function ContentCampaignCard({
  icon,
  title,
  body,
  className,
  ...props
}: ContentCampaignCardProps) {
  return (
    <div className={twMerge("flex flex-col gap-5", className)} {...props}>
      <img
        src={icon}
        alt="icon"
        className="float-left size-10 rounded-md bg-white p-2"
      />

      <h2 className="font-paytone text-2xl text-black">{title}</h2>
      <p className="text-grey.700">{body}</p>
    </div>
  );
}
