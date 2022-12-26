import { t } from "i18next";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDeleteUser from "../api/useDeleteUser";
import useGetUsers from "../api/useGetUsers";
import Button from "../components/Button";
import { UsersContext } from "../contexts/users";

const Users: React.FC = () => {
  const navigate = useNavigate();
  const { userEmail } = useParams();
  const { findUser } = useContext(UsersContext);

  const user = findUser(userEmail);

  const { refetch: getUsers } = useGetUsers();
  const { refetch: deleteUser } = useDeleteUser(user?.id || "", {
    onSuccess: () => {
      getUsers();
      navigate("/users");
    },
  });

  if (!user) {
    return <div>User not found</div>;
  }

  const { first_name, last_name, email, role } = user;

  return (
    <div>
      <div className="text-lg font-medium">
        {first_name} {last_name}
      </div>
      <div>{email}</div>
      <div>{t(role)}</div>
      <Button color="white" onClick={() => deleteUser()}>
        {t("delete-user")}
      </Button>
    </div>
  );
};

export default Users;
