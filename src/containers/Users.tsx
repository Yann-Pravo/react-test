import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import InputSearch from "../components/InputSearch";
import UserItem from "../components/UserItem";
import { UsersContext } from "../contexts/users";

const Users: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { users } = useContext(UsersContext);
  const [search, setSearch] = useState("");

  const onUserClick = (email: string) => navigate(`/users/${email}`);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  const filteredUsers = users.filter(
    ({ firstname, lastname, role }) =>
      firstname.toLowerCase().includes(search.toLowerCase()) ||
      lastname.toLowerCase().includes(search.toLowerCase()) ||
      role.toLowerCase().includes(search.toLowerCase())
  );

  console.log({ search, users, filteredUsers });

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 drop-shadow-md">
        {t("our-users")}
      </h1>
      <div className="mt-8">
        <InputSearch onChange={onSearch} />
      </div>
      <div className="mt-[45px] py-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[30px] gap-y-[36px]">
        {filteredUsers.map((user) => (
          <UserItem key={user.email} onClick={onUserClick} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
