export interface NavigationIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon_url: string;
}

export function NavigationIcon({ icon_url, ...props }: NavigationIconProps) {
  return (
    <button {...props}>
      <img src={icon_url} />
    </button>
  );
}
