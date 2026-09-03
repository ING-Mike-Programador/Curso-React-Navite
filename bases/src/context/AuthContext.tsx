import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

enum AuthStatus {
  "checking" = "checking",
  "authenticated" = "authenticated",
  "notAuthenticated" = "notAuthenticated",
}

interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
  isChecking: boolean;
  isAuthenticated: boolean;
  isNotAuthenticated: boolean;

  // metodos
  loginWithCredentials: (email: string, password: string) => void;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setstatus] = useState(AuthStatus.checking);
  const [user, setuser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setstatus(AuthStatus.notAuthenticated);
    }, 1500);
  }, []);

  const loginWithCredentials = (email: string, password: string) => {
    
    setuser({ name: "Miguel Lopez", email: email });
    setstatus(AuthStatus.authenticated);
  };

  const logout = () => {
    setuser(undefined);
    setstatus(AuthStatus.notAuthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        status: status,

        // Getter
        isChecking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.authenticated,
        isNotAuthenticated: status === AuthStatus.notAuthenticated,

        // metodo
        loginWithCredentials,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
