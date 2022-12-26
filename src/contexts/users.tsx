import React, { useMemo, useState } from "react";
import useGetUsers from "../api/useGetUsers";
import User from "../types/user";

interface UsersContextInterface {
  users: User[];
  setUsers: (users: User[]) => void;
  findUser: (email: string | undefined) => User | undefined;
  isFetching: boolean;
}

export const UsersContext = React.createContext<UsersContextInterface>(
  {} as UsersContextInterface
);

const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setContextUsers] = useState<User[]>([]);

  const { isFetching } = useGetUsers({
    onSuccess: (users: User[]) => setUsers(users),
  });

  const setUsers = (users: User[]) => setContextUsers(users);

  const findUser = (findEmail: string | undefined) =>
    users.find(({ email }) => email === findEmail);

  const value = useMemo(
    () => ({
      users,
      setUsers,
      findUser,
      isFetching,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [users, isFetching]
  );

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersProvider;
