import React, { useMemo, useState } from "react";

interface SidebarContextInterface {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const SidebarContext = React.createContext<SidebarContextInterface>(
  {} as SidebarContextInterface
);

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      sidebarOpen,
      setSidebarOpen,
    }),
    [sidebarOpen]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export default SidebarProvider;
