import React, { useContext } from 'react';
import { AvatarContext } from '../../contexts/AvatarContext';
import './style.css';

interface PropsAvatar {
  srcAvatar: string;
}

const Avatar = ({ srcAvatar }: PropsAvatar) => {
  const { saveAvatar } = useContext(AvatarContext);

  return (
    <div className="containerAvatar">
      <button className="avatar" onClick={() => saveAvatar(srcAvatar)}>
        <img src={`${srcAvatar}`} alt="Avatar1" />
      </button>
    </div>
  );
};

export default Avatar;
