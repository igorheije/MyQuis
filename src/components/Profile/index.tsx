import { useContext } from 'react';
import './style.css';

import Level from '../../assets/icons/level.svg';
import { UserContext } from '../../contexts/UserContext';
import { AvatarContext } from '../../contexts/AvatarContext';

const Profile = () => {
  const { user } = useContext(UserContext);
  const { avatar } = useContext(AvatarContext);
  console.log(avatar);

  return (
    <div className="profileContainer">
      <img src={`${avatar.Iavatar}`} alt="Igor Heije" />
      <div>
        {user.userName ? (
          <strong>{user.userName}</strong>
        ) : (
          <strong>Usuario 1</strong>
        )}
        <p>
          <img src={Level} alt="Seta para cima" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
