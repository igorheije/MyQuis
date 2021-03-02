import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
// import { ChallengesContext } from '../../contexts/ChallengesContext';
// import { CountdownContext } from '../../contexts/CountdownContext';

import './style.css';

const Challenge = () => {
  // const { activeChallenge, resetChallenge, completedChallenge } = useContext(
  //   ChallengesContext,
  // );
  const { resetCountdown } = useContext(CountdownContext);

  // const handleChallengeSuccess = () => {
  //   completedChallenge();
  //   resetCountdown();
  // };
  // const handleChallengeFailed = () => {
  //   resetChallenge();
  //   resetCountdown();
  // };

  return (
    <div className="containerChallenge">
      {true ? (
        <div className="upLevelChallengeActive">
          <header>Ganhe 0xp</header>
          <main>
            <img src="" />
            <strong>Novo Desafio</strong>
            <p>asdasdasdasdasdasd</p>
          </main>
          <footer>
            <button
              className="challegenFaledButton"
              type="button"
              onClick={() => {}}
            >
              Falhei
            </button>
            <button
              className="challegenSuccedeButton"
              type="button"
              onClick={() => {}}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className="upLevelChallengeNotActive">
          <h1>Inicie um ciclo para receber desafios</h1>

          <img src="icons/level-up.svg" alt="Level" />
          <span>Avance de level completando os desafios</span>
        </div>
      )}
    </div>
  );
};

export default Challenge;
