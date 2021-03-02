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
}

const defaultUser: PropsUserContext = {
  user: {
    userName: '',
  },
  setUser: () => {},
};

export const UserContext = createContext<PropsUserContext>(defaultUser);

const UserProvider = ({ children }: CountdownProviderProps) => {
  const [user, setUser] = useState(defaultUser.user);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
