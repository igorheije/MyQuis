import { useContext, useEffect, useState } from 'react';

import './style.css';

const ExperienceBar = () => {
  // const [porcentToNextLevel, setPorcentToNextLevel] = useState(0);

  // useEffect(() => {
  //   setPorcentToNextLevel(
  //     Math.floor(currentExperience * 100) / experienceToNextLevel,
  //   );
  // }, [currentExperience, porcentToNextLevel]);

  return (
    <header className="experienceBar">
      <span>0xp</span>
      <div>
        <div style={{ width: `45%` }}></div>
        <span className="currentExperience" style={{ left: '50%' }}>
          0xp
        </span>
      </div>
      <span>200xp</span>
    </header>
  );
};

export default ExperienceBar;
