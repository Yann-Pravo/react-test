import React from "react";
import { t } from "i18next";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import InputText from "../components/InputText";
import InputDropdown from "../components/InputDropdown";

const roles = [
  { text: "administrator", value: "administrator" },
  { text: "regular-user", value: "regular-user" },
];

const NewUser: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-white drop-shadow-md p-8 rounded-xl flex items-center justify-between">
        <div className="flex items-center">
          <ArrowLeftCircleIcon
            className="flex-shrink-0 h-[38px] w-[38px] text-[#DBA97C] mr-9 cursor-pointer"
            aria-hidden="true"
            onClick={() => navigate("/users")}
          />
          <div className="text-[22px] font-medium drop-shadow-md">
            {t("add-new-user")}
          </div>
        </div>
        <Button color="green">{t("save-and-add")}</Button>
      </div>
      <div className="bg-white drop-shadow-md px-[52px] py-[31px] rounded-xl mt-[40px]">
        <div className="font-medium drop-shadow-md">
          {t("user-information")}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[30px] gap-y-[36px] mt-8">
          <InputText
            id="firstname"
            label={t("firstname")}
            placeholder={t("insert-firstname") || ""}
          />
          <InputText
            id="lastname"
            label={t("lastname")}
            placeholder={t("insert-lastname") || ""}
          />
          <InputText
            id="email"
            label={t("email")}
            placeholder={t("insert-email") || ""}
          />
          <InputDropdown id="role" label={t("role")} values={roles} />
        </div>
      </div>
    </div>
  );
};

export default NewUser;
