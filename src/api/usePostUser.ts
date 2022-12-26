import client from "./";
import { useQuery } from "react-query";
import User from "../types/user";

const postUser = async (user: Omit<User, "id">) => {
  const { data } = await client.post(`${process.env.REACT_APP_HOST_API}`, {
    ...user,
  });

  return data;
};

const usePostUser = (user: Omit<User, "id">, props = {}) =>
  useQuery<User[]>(["postUser"], () => postUser(user), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: false,
    enabled: false,
    ...props,
  });

export default usePostUser;
