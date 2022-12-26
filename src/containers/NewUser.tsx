import React from "react";
import { t } from "i18next";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import InputText from "../components/InputText";
import InputDropdown from "../components/InputDropdown";
import usePostUser from "../api/usePostUser";
import useGetUsers from "../api/useGetUsers";

const roles = [
  { text: "ADMIN", value: "ADMIN" },
  { text: "DEV", value: "DEV" },
];

const NewUser: React.FC = () => {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      role: "ADMIN",
    },
    onSubmit: () => postUser(),
  });

  const { refetch: getUsers } = useGetUsers();
  const { refetch: postUser } = usePostUser(values, {
    onSuccess: () => {
      getUsers();
      navigate("/users");
    },
  });

  return (
    <form onSubmit={handleSubmit}>
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
        <Button type="submit" color="green">
          {t("save-and-add")}
        </Button>
      </div>
      <div className="bg-white drop-shadow-md px-[52px] py-[31px] rounded-xl mt-[40px]">
        <div className="font-medium drop-shadow-md">
          {t("user-information")}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[30px] gap-y-[36px] mt-8">
          <InputText
            id="first_name"
            label={t("firstname")}
            placeholder={t("insert-firstname") || ""}
            onChange={handleChange}
          />
          <InputText
            id="last_name"
            label={t("lastname")}
            placeholder={t("insert-lastname") || ""}
            onChange={handleChange}
          />
          <InputText
            id="email"
            label={t("email")}
            placeholder={t("insert-email") || ""}
            onChange={handleChange}
          />
          <InputDropdown
            id="role"
            label={t("role")}
            values={roles}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default NewUser;
