import client from "./";
import { useQuery } from "react-query";
import User from "../types/user";

const deleteUser = async (id: string) => {
  const { data } = await client.delete(
    `${process.env.REACT_APP_HOST_API}/${id}`
  );

  return data;
};

const useDeleteUser = (id: string, props = {}) =>
  useQuery<User[]>(["deleteUser"], () => deleteUser(id), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: false,
    enabled: false,
    ...props,
  });

export default useDeleteUser;
