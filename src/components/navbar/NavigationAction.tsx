import { useLocation, useNavigate } from "react-router-dom";
import { Button, ButtonProps } from "@/components/ui/button";
import { checkPath } from "@/utils/checkPath";
import { twMerge } from "tailwind-merge";
import useOpenModal from "@/store/ManagamentNavigation";

export interface NavigationActionProps extends ButtonProps {
  navigateTo: string;
  text: string;
  color: string;
}

export function NavigationAction({
  navigateTo,
  text,
  color,
  className,
  ...props
}: NavigationActionProps) {
  const navigate = useNavigate();

  const { setOpenModal } = useOpenModal();

  const path = useLocation().pathname;

  const handleOpenModal = () => {
    setOpenModal(false);
    navigate(navigateTo);
  };

  return (
    <Button
      onClick={() => handleOpenModal()}
      className={twMerge(
        `px-4 py-8 text-gray-700`,
        className,
        checkPath(path, navigateTo, color),
      )}
      variant={"none"}
      role="menuitem"
      tabIndex={-1}
      {...props}
    >
      {text}
    </Button>
  );
}
