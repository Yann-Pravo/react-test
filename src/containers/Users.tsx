import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import UserItem from "../components/UserItem";
import { UsersContext } from "../contexts/users";

const Users: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { users } = useContext(UsersContext);

  const onUserClick = (email: string) => {
    console.log({ email });
    navigate(`/users/${email}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">{t("our-users")}</h1>
      <div className="py-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[30px] gap-y-[36px]">
        {users.map((user) => (
          <UserItem key={user.email} onClick={onUserClick} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
