import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import Button from "../components/Button";
import InputSearch from "../components/InputSearch";
import UserItem from "../components/UserItem";
import { UsersContext } from "../contexts/users";
import { PlusIcon } from "@heroicons/react/24/solid";

const Users: React.FC = () => {
  const navigate = useNavigate();
  const { users } = useContext(UsersContext);
  const [search, setSearch] = useState("");

  const onUserClick = (email: string) => navigate(`/users/${email}`);
  const onNewUserClick = () => navigate(`/users/new`);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  const filteredUsers = users.filter(
    ({ firstname, lastname, role }) =>
      firstname.toLowerCase().includes(search.toLowerCase()) ||
      lastname.toLowerCase().includes(search.toLowerCase()) ||
      role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 drop-shadow-md">
        {t("our-users")}
      </h1>
      <div className="mt-8 flex items-center justify-between">
        <InputSearch onChange={onSearch} />
        <Button color="white" onClick={onNewUserClick}>
          <div className="mr-2 p-2 bg-[#3E6BEC] rounded-md">
            <PlusIcon className="h-6 w-6 text-white" />
          </div>
          {t("add-new-user")}
        </Button>
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
