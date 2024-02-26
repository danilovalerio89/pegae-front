import { create } from "zustand";

export interface OpenModalProps {
  openModal: boolean;
  setOpenModal: (isOpen: boolean) => void;
}

const useOpenModal = create<OpenModalProps>((set) => ({
  openModal: false,
  setOpenModal: (isOpen: boolean) => set({ openModal: isOpen }),
}));

export default useOpenModal;
