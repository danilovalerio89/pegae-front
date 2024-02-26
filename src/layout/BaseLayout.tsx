import { Navigate, Outlet, useLocation } from "react-router-dom";
import { NavigationDefault } from "@/layout/ui/NavigationBase";
import { HeaderDefault } from "@/layout/ui/HeaderDefault";
import useOpenModal from "@/store/ManagamentNavigation";

export function BaseLayout() {
  const { openModal, setOpenModal } = useOpenModal();

  const path = useLocation().pathname;

  if (path === "/") {
    return <Navigate to="/company" />;
  }

  return (
    <>
      <HeaderDefault isOpen={openModal} setIsOpen={setOpenModal} />
      <NavigationDefault isOpen={openModal} />
      <Outlet />
    </>
  );
}
