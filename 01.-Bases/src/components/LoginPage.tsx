import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { isChecking, isAuthenticated, loginWithCredentials, logout, user } =
    useAuthContext();

  if (isChecking)
    return (
      <>
        <h1 className="text-xl m-5">Verificando autenticacion de usuario...</h1>
      </>
    );


  return (
    <>
      {isAuthenticated ? (
        <>
          <h1 className="text-2xl font-bold m-5">
            Usuario autenticado correctamente
          </h1>
          <h3 className="text-xl font-bold m-5">
            Bienvenido {user?.name}
          </h3>  
          <pre>
            {JSON.stringify(user, null, 3)}
          </pre>
          <button
            className="bg-red-700 text-white px-4 py-2 rounded"
            onClick={() => logout()}
          >
            Cerrar sesión
          </button>
        </>
      ) : (
        <>
          <h3 className="text-xl font-bold m-5">
            Ingresa tus credenciales para iniciar sesión
          </h3>
          <button className="bg-blue-700 text-white px-4 py-2 rounded" 
            onClick={() =>
              loginWithCredentials("Miguel.alonso@gmail.com", "123456")
            }>
            Iniciar sesión
          </button>
        </>
      )}
    </>
  );
};
