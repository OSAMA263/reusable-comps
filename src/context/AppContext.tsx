import { createContext, useState } from "react";
import type { ReactNode } from "react";

type AppContextType = {
  activeToast: {
    active: boolean;
    text: string;
    status: "success" | "error" | "info";
    direction?: ("top" | "bottom" | "left" | "right" | "center")[];
    duration?: number;
  };
  setActiveToast: (val: {
    active: boolean;
    text: string;
    status: "success" | "error" | "info";
    direction?: ("top" | "bottom" | "left" | "right" | "center")[];
    duration?: number;
  }) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (val: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

// provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [activeToast, setActiveToast] = useState<{
    active: boolean;
    text: string;
    status: "success" | "error" | "info";
    direction?: ("top" | "bottom" | "left" | "right" | "center")[];
    duration?: number;
  }>({
    active: false,
    text: "test",
    status: "info",
    direction: ["top", "center"],
    duration: 2000,
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{ activeToast, setActiveToast, modalIsOpen, setModalIsOpen }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
