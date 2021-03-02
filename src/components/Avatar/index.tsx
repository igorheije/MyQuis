import React from 'react';
import './style.css';

import Avartar from '../../assets/avatares/avatar1.png';

const Avatar = () => {
  return (
    <div className="containerAvatar">
      <button className="avatar">
        <img src={Avartar} alt="Avatar1" />
      </button>
    </div>
  );
};

export default Avatar;
