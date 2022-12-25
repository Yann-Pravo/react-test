import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { UsersContext } from "../contexts/users";

const Users: React.FC = () => {
  const { t } = useTranslation();
  const { userEmail } = useParams();
  const { findUser } = useContext(UsersContext);

  const user = findUser(userEmail);

  if (!user) {
    return <div>User not found</div>;
  }

  const { firstname, lastname, email, role } = user;

  return (
    <div>
      <div className="text-lg font-medium">
        {firstname} {lastname}
      </div>
      <div>{email}</div>
      <div>{role}</div>
    </div>
  );
};

export default Users;
