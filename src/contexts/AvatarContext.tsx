import React, {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useState,
} from 'react';

interface AvatarContext {
  Iavatar: string;
}
interface CountdownProviderProps {
  children: ReactNode;
}

interface PropsAvatarContext {
  avatar: AvatarContext;
  setAvatar: Dispatch<React.SetStateAction<AvatarContext>>;
  saveAvatar: (avatar: string) => void;
}

const defaultAvatar: PropsAvatarContext = {
  avatar: {
    Iavatar: '',
  },
  setAvatar: () => {},
  saveAvatar: () => {},
};

export const AvatarContext = createContext<PropsAvatarContext>(defaultAvatar);

const AvatarProvider = ({ children }: CountdownProviderProps) => {
  const [avatar, setAvatar] = useState(defaultAvatar.avatar);

  const saveAvatar = (avatar: string): void => {
    window.localStorage.setItem('avatar', avatar);
    console.log('avatar', avatar);

    setAvatar({ Iavatar: avatar });
  };
  useEffect(() => {
    const avatar = window.localStorage.getItem('avatar');
    if (avatar) {
      setAvatar({ Iavatar: avatar });
    }
  }, []);

  return (
    <AvatarContext.Provider
      value={{
        avatar,
        setAvatar,
        saveAvatar,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

export default AvatarProvider;
