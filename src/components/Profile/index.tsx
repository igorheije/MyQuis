import { useContext } from 'react';
import './style.css';

import Level from '../../assets/icons/level.svg';

const Profile = () => {
  return (
    <div className="profileContainer">
      <img src="https://github.com/igorheije.png" alt="Igor Heije" />
      <div>
        <strong>Igor Heije</strong>
        <p>
          <img src={Level} alt="Seta para cima" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
