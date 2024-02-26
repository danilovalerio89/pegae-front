export interface NavigationListProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function NavigationList({ children, ...props }: NavigationListProps) {
  return (
    <div className="py-1 flex flex-col items-center" {...props}>
      {children}
    </div>
  );
}
