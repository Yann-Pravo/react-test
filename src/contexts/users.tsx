import React, { useMemo, useState } from "react";
import User from "../types/user";

const usersList: User[] = [
  {
    firstname: "David",
    lastname: "Leclerc",
    role: "Administrator",
    email: "david@test.com",
  },
  {
    firstname: "Matthieu",
    lastname: "Bocquet",
    role: "Administrator",
    email: "matthieu@test.com",
  },
  {
    firstname: "Sharon",
    lastname: "Dupont",
    role: "Administrator",
    email: "sharon@test.com",
  },
  {
    firstname: "Lisa",
    lastname: "De Groof",
    role: "Regular user",
    email: "lisa@test.com",
  },
];

interface UsersContextInterface {
  users: User[];
  setUsers: (users: User[]) => void;
  findUser: (email: string | undefined) => User | undefined;
}

export const UsersContext = React.createContext<UsersContextInterface>(
  {} as UsersContextInterface
);

const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setContextUsers] = useState<User[]>(usersList);

  const setUsers = (users: User[]) => setContextUsers(users);

  const findUser = (findEmail: string | undefined) =>
    users.find(({ email }) => email === findEmail);

  const value = useMemo(
    () => ({
      users,
      setUsers,
      findUser,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [users]
  );

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersProvider;
