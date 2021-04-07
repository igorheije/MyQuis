import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import './style.css';

const Challenge = () => {
  const { activeChallenge, completedChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeSuccess = () => {
    completedChallenge();
    resetCountdown();
  };

  return (
    <div className="containerChallenge">
      <div className="upLevelChallengeActive">
        <header>{`Ganhe ${activeChallenge}xp`}</header>
        <main>
          <form className="challengeForm">
            <h3>Pergunta???asdasdasdasda as asaa a a a a a a aasdasdas?</h3>
            <label>
              <input name="resposta" type="radio" />
              <span>
                asudhaudsd as as as a as asasdas as asdas as as a asdasdasd
              </span>
            </label>
            <label>
              <input name="resposta" type="radio" />
              asudhaudsd as as as a as asasdas as asdas as as a asdasdasd
            </label>
            <label>
              <input name="resposta" type="radio" />
              asudhaudsd as as as a as asasdas as asdas as as a asdasdasd
            </label>
            <label>
              <input name="resposta" type="radio" />
              asudhaudsd asudhaudsd as as as a as asasdas as asdas as as a
              asdasdasd
            </label>
          </form>
        </main>
        <footer>
          {true ? (
            <button className="challegenNext" type="button">
              Próximo
            </button>
          ) : (
            <button
              className="challegenSuccedeButton"
              type="button"
              onClick={handleChallengeSuccess}
            >
              Completei
            </button>
          )}
        </footer>
      </div>
      {/* <div className="upLevelChallengeNotActive">
          <h1>Inicie um ciclo para receber desafios</h1>

          <img src="icons/level-up.svg" alt="Level" />
          <span>Avance de level completando os desafios</span>
        </div> */}
    </div>
  );
};

export default Challenge;
