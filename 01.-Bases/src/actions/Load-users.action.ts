import axios from "axios";
import { API_KEY, URLusers } from "../pruebaAPI";
import type { UserListResponse } from "../interfaces/Interface-apiRestTest.response";
import { User } from '../interfaces/Interface-apiRestTest.response';


export const loadUsersAction = async (page: number) => {
  try {
    // Realiza la solicitud GET a la API para obtener la lista de usuarios
    const { data } = await axios.get<UserListResponse>(`${URLusers}`, {
      params: {
        page: page, // Parametro de paginacion
      },
      headers: {
        "x-api-key": `${API_KEY}`, // API KEY necesaria
      }
    });
    return data;
  } catch (error) {
    // Manejo de errores
    console.log(error); // Imprime el error en la consola para depuración
    return []; // Retorna un arreglo vacío en caso de error
  }
};
