import { useUsers } from "../hooks/UseUsers";
import { UserRow } from "./UserRow";

export const UsersPage = () => {
  const { users, nextPage, previousPage, currentPageRef, pages } = useUsers();
  return (
    <>
      {/* Visualización de cantidad de usuarios */}
      <h3 className="text-3xl font-bold text-blue-800 m-3">
        Usuarios: {users.length}
      </h3>
      {/* visualización de paginas de usuarios */}
      <h4 className="text-xl text-blue-500 p-1">
        pagina {currentPageRef.current}/{pages}
      </h4>
      <table className="w-[500px] rounded-2xl bg-blue-600 text-blue-100 ">
        <thead className="border-b border-blue-800">
          <tr>
            <th className="py-2 px-4 border-b border-blue-300">Avatar</th>
            <th className="py-2 px-4 border-b border-blue-300">Nombre</th>
            <th className="py-2 px-4 border-b border-blue-300">Correo</th>
          </tr>
        </thead>

        <tbody className="p-2 bg-blue-100 text-blue-800 border border-blue-800">
          {/* usuarios */}
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

          {/* Botones para cambiar de paginas */}
      <div className="w-[500px] flex justify-between items-center mt-3 pb-2">
        <button
          onClick={() => previousPage()}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Anterior
        </button>
        <button
          onClick={() => nextPage()}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
