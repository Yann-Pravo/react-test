import React from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import User from "../../types/user";
import { t } from "i18next";

const UserItem: React.FC<
  Omit<User, "id"> & { onClick: (email: string) => void }
> = ({ first_name, last_name, email, role, onClick }) => (
  <div
    onClick={() => onClick(email)}
    className="bg-white px-7 py-5 rounded-xl cursor-pointer flex items-center justify-between drop-shadow-sm hover:drop-shadow-md"
  >
    <div>
      <div className="text-lg font-medium">
        {first_name} {last_name}
      </div>
      <div className="text-sm text-[#7F85A2]">{t(role)}</div>
    </div>
    <ArrowRightCircleIcon
      className="flex-shrink-0 h-6 w-6 text-[#DBA97C]"
      aria-hidden="true"
    />
  </div>
);

export default UserItem;
