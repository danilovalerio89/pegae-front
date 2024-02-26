export interface NavigationRootProps {
  children: React.ReactNode;
  isActive: boolean;
}

export function NavigationRoot({ children, isActive }: NavigationRootProps) {
  return (
    <div
      className={`height-screen-header ease absolute z-10 w-full origin-top-right transform bg-white transition duration-300 focus:outline-none ${
        isActive ? `-translate-x-full` : ""
      } lg:hidden`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex={-1}
    >
      {children}
    </div>
  );
}
