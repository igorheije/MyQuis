import React, {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useState,
} from 'react';

interface UserContext {
  userName: string;
}
interface CountdownProviderProps {
  children: ReactNode;
}

interface PropsUserContext {
  user: UserContext;
  setUser: Dispatch<React.SetStateAction<UserContext>>;
  signInSuccess: (token: string) => void;
}

const defaultUser: PropsUserContext = {
  user: {
    userName: '',
  },
  setUser: () => {},
  signInSuccess: () => {},
};

export const UserContext = createContext<PropsUserContext>(defaultUser);

const UserProvider = ({ children }: CountdownProviderProps) => {
  const [user, setUser] = useState(defaultUser.user);

  const signInSuccess = (usuario: string): void => {
    window.localStorage.setItem('usuario', usuario);
    setUser({ userName: usuario });
  };
  useEffect(() => {
    const usuario = window.localStorage.getItem('usuario');
    if (usuario) {
      setUser({ userName: usuario });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signInSuccess,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
