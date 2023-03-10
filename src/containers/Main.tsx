import React, { PropsWithChildren, useContext } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { SidebarContext } from "../contexts/sidebar";

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  const { setSidebarOpen } = useContext(SidebarContext);

  return (
    <div className="flex flex-1 flex-col md:pl-[100px] max-w-full">
      <div className="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
        <button
          type="button"
          className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <main className="flex-1 py-6 px-4 sm:px-24">{children}</main>
    </div>
  );
};

export default Main;
