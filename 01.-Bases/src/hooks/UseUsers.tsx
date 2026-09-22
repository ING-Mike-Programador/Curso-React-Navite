import { useEffect, useRef, useState } from "react";
import { User } from "../interfaces/Interface-apiRestTest.response";
import { loadUsersAction } from "../actions/Load-users.action";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);
  const [pages, setPages] = useState<number>(0);

  // Carga de información segun inicia el hook
  useEffect(() => {
    loadUsersAction(currentPageRef.current).then((data) => {
      setPages(Array.isArray(data) ? data.length : data.total_pages);
      setUsers(Array.isArray(data) ? data : data.data);
    });
  }, []);

  // Metodo de siguiente pagina
  const nextPage = async () => {
    currentPageRef.current++; // Suma siguiente pagina

    // Peticion de nuevas paginas
    const response = await loadUsersAction(currentPageRef.current);
    // asignación de nuevos valores
    const newUsers = Array.isArray(response) ? response : response.data;

    // logica de datos
    if (newUsers.length > 0) {
      setUsers(newUsers);
    } else {
      currentPageRef.current--;
    }
  };

  // Metodo de pagina anterior
  const previousPage = async () => {
    if (currentPageRef.current == 1) return; // Evita ir a una página anterior si ya estamos en la primera página
    currentPageRef.current--; // ir a pagina anterior

    // Petición de pagina anterior
    const response = await loadUsersAction(currentPageRef.current);
    // asignacion de nuevos valores
    const newUsers = Array.isArray(response) ? response : response.data;

    setUsers(newUsers);
  };
  return { users, nextPage, previousPage, pages, currentPageRef };
};
