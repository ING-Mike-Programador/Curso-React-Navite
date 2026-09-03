import type { User } from "../interfaces/Interface-apiRestTest";

interface UserRowProps {
  user: User;
}


export const UserRow = ({ user }: UserRowProps) => {



  return (
    <>
      <tr>
        <td className="py-2 px-4 border border-blue-800">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-14 rounded-full"
          />
        </td>
        <td className="py-2 px-4 border border-blue-800">
          {user.first_name} {user.last_name}
        </td>
        <td className="py-2 px-4 border border-blue-800">
          {user.email}
        </td>
      </tr>
    </>
  );
};
