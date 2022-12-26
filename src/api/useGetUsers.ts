import client from "./";
import { useQuery } from "react-query";
import User from "../types/user";

const getUsers = async () => {
  const { data } = await client.get(`${process.env.REACT_APP_HOST_API}`);

  return data;
};

const useGetUsers = (props = {}) =>
  useQuery<User[]>(["getUsers"], getUsers, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: false,
    ...props,
  });

export default useGetUsers;
