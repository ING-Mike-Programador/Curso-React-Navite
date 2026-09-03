import { useEffect, useState } from "react";
import type { User } from "../interfaces/Interface-apiRestTest";
import { loadUsersAction } from "../actions/Load-usesr.action";

export const UseUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsersAction(1).then(setUsers);
  }, []);

  const nextPage = (page: number) => {
    loadUsersAction(page).then(setUsers);
  }
  const previousPage = (page: number) => {
    loadUsersAction(page).then(setUsers);
  }

  return { users, nextPage, previousPage };
};
