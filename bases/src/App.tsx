// import { BasicFunctions } from "./typescript/BasicFunctions";
// import { ObjectLiterals } from './typescript/ObjectLiterals'
// import { LoginPage } from "./components/LoginPage";
import { UsersPage } from "./components/UsersPage";
import { AuthProvider } from "./context/AuthContext";

// import { Counter } from "./components/Counter";

// import BasicTypes from './typescript/basicTypes'
function App() {
  return (
    // Globalizando o contexto de autenticacion para toda a aplicacion
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-5xl font-bold m-5">REACT + TypeScript</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiterals/> */}
        {/* <BasicFunctions /> */}
        {/* <Counter/> */}
        {/* <LoginPage/> */}
        <UsersPage/>
      </div>
    </AuthProvider>
  );
}

export default App;
