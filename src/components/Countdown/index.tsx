import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import './style.css';

const Countdown = () => {
  const { minutes, seconds, resetCountdown, startCountdown } = useContext(
    CountdownContext,
  );

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className="countdownContainer">
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {false ? (
        <button className="countdownButton" disabled>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {false ? (
            <button
              className="countdownButton countdownButtonActive"
              type="button"
              onClick={resetCountdown}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button
              className="countdownButton"
              type="button"
              onClick={startCountdown}
            >
              Iniciar um Ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;
