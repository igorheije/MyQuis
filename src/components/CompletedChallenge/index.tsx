import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import './style.css';

const CompletedChallenges = () => {
  const { challengeCompleted } = useContext(ChallengesContext);

  return (
    <div className="completeChallenges">
      <span>Desafios Completos</span>
      <span>{challengeCompleted}</span>
    </div>
  );
};

export default CompletedChallenges;
