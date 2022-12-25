import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Cog6ToothIcon,
  UsersIcon,
  XMarkIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import { SidebarContext } from "../contexts/sidebar";
import { useTranslation } from "react-i18next";

const navigation = [
  { name: "client", href: "#", icon: UserCircleIcon, current: false },
  { name: "users", href: "#", icon: UsersIcon, current: true },
  { name: "settings", href: "#", icon: Cog6ToothIcon, current: false },
];

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-0 flex flex-col flex-1 overflow-y-auto pt-5 pb-4 px-2">
                  <div className="flex flex-shrink-0 items-center">
                    <img className="h-12" alt="Prediko" src="logo.png" />
                  </div>
                  <nav className="mt-5 space-y-4 flex-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-[#3E6BEC] text-white"
                            : "text-[#A4A8BB]",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? "text-white" : "text-[#A4A8BB]",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {t(item.name)}
                      </a>
                    ))}
                  </nav>
                  <div className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-[#A4A8BB]">
                    <ArrowRightOnRectangleIcon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-[#A4A8BB]"
                      aria-hidden="true"
                    />
                    {t("logout")}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0"></div>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="hidden md:fixed md:inset-y-0 md:flex md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4 px-[26px]">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-12 w-auto" src="logo.png" alt="Prediko" />
            </div>
            <nav className="mt-12 flex-1 space-y-12 bg-white">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-[#3E6BEC]"
                      : "hover:bg-gray-50 bg-[#F7F7F7]",
                    "group flex items-center justify-center h-12 w-12 text-sm font-medium rounded-xl"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current ? "text-white" : "text-[#A4A8BB]",
                      "flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>
            <div className="group flex items-center justify-center h-12 w-12 text-sm font-medium rounded-xl hover:bg-gray-50 bg-[#F7F7F7]">
              <ArrowRightOnRectangleIcon
                className="flex-shrink-0 h-6 w-6 text-[#A4A8BB]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
