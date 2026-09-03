import { UseUsers } from "../hooks/UseUsers";
import { UserRow } from "./UserRow";

export const UsersPage = () => {
  const { users } = UseUsers();
  console.log(users);

  return (
    <>
      <h3 className="text-3xl font-bold text-blue-800 m-5">Usuarios:</h3>
      <table className="w-[500px]  rounded-2xl bg-blue-600 text-blue-100 ">
        <thead className="border-b border-blue-800">
          <tr>
            <th className="py-2 px-4 border-b border-blue-300">Avatar</th>
            <th className="py-2 px-4 border-b border-blue-300">Nombre</th>
            <th className="py-2 px-4 border-b border-blue-300">Correo</th>
          </tr>
        </thead>

        <tbody className="p-2 bg-blue-100 text-blue-800 border border-blue-800">
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div className="w-[500px] flex justify-between items-center mt-5">
        <button className="p-2 bg-blue-500 text-white rounded">Anterior</button>
        <button className="p-2 bg-blue-500 text-white rounded">
          Siguiente
        </button>
      </div>
    </>
  );
};
